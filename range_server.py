import http.server
import socketserver
import os
import re

PORT = 8888

class RangeHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Accept-Ranges', 'bytes')
        super().end_headers()

    def send_head(self):
        if 'Range' not in self.headers:
            self.range = None
            return super().send_head()

        path = self.translate_path(self.path)
        if not os.path.isfile(path):
            return super().send_head()

        try:
            f = open(path, 'rb')
        except OSError:
            self.send_error(404, "File not found")
            return None

        fs = os.fstat(f.fileno())
        total_size = fs.st_size

        range_header = self.headers.get('Range', '')
        m = re.match(r'bytes=(\d+)-(\d*)', range_header)
        if not m:
            f.close()
            return super().send_head()

        start = int(m.group(1))
        end = int(m.group(2)) if m.group(2) else total_size - 1
        if start >= total_size or start > end:
            f.close()
            self.send_error(416, "Requested Range Not Satisfiable")
            return None

        end = min(end, total_size - 1)
        length = end - start + 1

        self.send_response(206)
        ctype = self.guess_type(path)
        self.send_header("Content-type", ctype)
        self.send_header("Content-Range", f"bytes {start}-{end}/{total_size}")
        self.send_header("Content-Length", str(length))
        self.send_header("Last-Modified", self.date_time_string(fs.st_mtime))
        self.end_headers()

        f.seek(start)
        self.range = (start, length)
        return f

    def copyfile(self, source, outputfile):
        if not hasattr(self, 'range') or not self.range:
            return super().copyfile(source, outputfile)
        start, length = self.range
        bytes_left = length
        bufsize = 64 * 1024
        while bytes_left > 0:
            to_read = min(bufsize, bytes_left)
            buf = source.read(to_read)
            if not buf:
                break
            outputfile.write(buf)
            bytes_left -= len(buf)

if __name__ == '__main__':
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), RangeHTTPRequestHandler) as httpd:
        print(f"Serving with Range support on port {PORT}...")
        httpd.serve_forever()
