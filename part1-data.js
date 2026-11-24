// part1-data.js - Dữ liệu Part 1: Tranh & Từ vựng TOEIC (Picture Description & ETS Drill)
// Dữ liệu nguồn: Part 1 - LIST NHỮNG TỪ THƯỜNG GẶP TRONG PART 1 TOEIC.docx
// Bao gồm: 5 Chủ đề lớn (15 Bức tranh SVG vector sắc nét, 150+ Target Keywords, Hotspots tương tác, và Bài luyện nghe ETS chuẩn 4 lựa chọn có phân tích bẫy ngữ pháp).

export const PART1_TOPICS = [
  {
    "id": "office-workplace",
    "title": "Văn phòng & Nơi làm việc (Office & Workplace)",
    "desc": "Chủ đề trọng tâm xuất hiện dày đặc nhất trong TOEIC Listening Part 1. Phân biệt hành động thao tác máy tính, phòng họp thuyết trình và bẫy Being V3 khi lưu trữ hồ sơ.",
    "icon": "🏢",
    "scenes": [
      {
        "id": "scene-desk",
        "title": "Tranh 1: Bàn làm việc & Thao tác máy tính",
        "titleEn": "Desk & Computer Station",
        "desc": "Bối cảnh nhân viên văn phòng thao tác với máy tính, văn bản, đèn bàn và các vật dụng trên bàn làm việc.",
        "svg": "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" class=\"part1-svg-art\">\n  <defs>\n    <linearGradient id=\"s1-wall\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#E2E8F0\"/>\n      <stop offset=\"100%\" stop-color=\"#CBD5E1\"/>\n    </linearGradient>\n    <linearGradient id=\"s1-wood\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#D7A15C\"/>\n      <stop offset=\"20%\" stop-color=\"#C2884A\"/>\n      <stop offset=\"100%\" stop-color=\"#9A622A\"/>\n    </linearGradient>\n    <linearGradient id=\"s1-screen\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#1E293B\"/>\n      <stop offset=\"100%\" stop-color=\"#0F172A\"/>\n    </linearGradient>\n    <linearGradient id=\"s1-laptop-screen\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#2563EB\"/>\n      <stop offset=\"100%\" stop-color=\"#1D4ED8\"/>\n    </linearGradient>\n    <radialGradient id=\"s1-lamp-glow\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n      <stop offset=\"0%\" stop-color=\"#FEF08A\" stop-opacity=\"0.45\"/>\n      <stop offset=\"70%\" stop-color=\"#FEF08A\" stop-opacity=\"0.1\"/>\n      <stop offset=\"100%\" stop-color=\"#FEF08A\" stop-opacity=\"0\"/>\n    </radialGradient>\n    <filter id=\"s1-shadow\" x=\"-5%\" y=\"-5%\" width=\"110%\" height=\"115%\">\n      <feDropShadow dx=\"0\" dy=\"6\" stdDeviation=\"6\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n\n  <!-- Wall Background -->\n  <rect x=\"0\" y=\"0\" width=\"800\" height=\"500\" fill=\"url(#s1-wall)\"/>\n\n  <!-- Left Accent Vertical Paneling -->\n  <rect x=\"0\" y=\"0\" width=\"140\" height=\"360\" fill=\"#94A3B8\" opacity=\"0.15\"/>\n  <line x1=\"28\" y1=\"0\" x2=\"28\" y2=\"360\" stroke=\"#64748B\" stroke-width=\"1.5\" opacity=\"0.3\"/>\n  <line x1=\"56\" y1=\"0\" x2=\"56\" y2=\"360\" stroke=\"#64748B\" stroke-width=\"1.5\" opacity=\"0.3\"/>\n  <line x1=\"84\" y1=\"0\" x2=\"84\" y2=\"360\" stroke=\"#64748B\" stroke-width=\"1.5\" opacity=\"0.3\"/>\n  <line x1=\"112\" y1=\"0\" x2=\"112\" y2=\"360\" stroke=\"#64748B\" stroke-width=\"1.5\" opacity=\"0.3\"/>\n\n  <!-- Window with Blinds on Right -->\n  <rect x=\"610\" y=\"40\" width=\"150\" height=\"200\" rx=\"6\" fill=\"#BAE6FD\" opacity=\"0.8\" stroke=\"#64748B\" stroke-width=\"5\"/>\n  <polygon points=\"610,40 760,40 790,360 520,360\" fill=\"#FFFFFF\" opacity=\"0.12\"/>\n  <line x1=\"610\" y1=\"65\" x2=\"760\" y2=\"65\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n  <line x1=\"610\" y1=\"85\" x2=\"760\" y2=\"85\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n  <line x1=\"610\" y1=\"105\" x2=\"760\" y2=\"105\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n  <line x1=\"610\" y1=\"125\" x2=\"760\" y2=\"125\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n  <line x1=\"610\" y1=\"145\" x2=\"760\" y2=\"145\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n  <line x1=\"610\" y1=\"165\" x2=\"760\" y2=\"165\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n  <line x1=\"610\" y1=\"185\" x2=\"760\" y2=\"185\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n  <line x1=\"610\" y1=\"205\" x2=\"760\" y2=\"205\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n  <line x1=\"610\" y1=\"225\" x2=\"760\" y2=\"225\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n\n  <!-- Framed Art / Certificate on Wall -->\n  <rect x=\"230\" y=\"50\" width=\"110\" height=\"80\" rx=\"3\" fill=\"#FFFFFF\" stroke=\"#334155\" stroke-width=\"5\" filter=\"url(#s1-shadow)\"/>\n  <rect x=\"242\" y=\"62\" width=\"86\" height=\"56\" fill=\"#F1F5F9\"/>\n  <line x1=\"252\" y1=\"75\" x2=\"318\" y2=\"75\" stroke=\"#3B82F6\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <line x1=\"252\" y1=\"86\" x2=\"305\" y2=\"86\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n  <line x1=\"252\" y1=\"95\" x2=\"290\" y2=\"95\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n  <circle cx=\"312\" cy=\"102\" r=\"6\" fill=\"#F59E0B\"/>\n\n  <!-- Floor and Skirting Board -->\n  <rect x=\"0\" y=\"360\" width=\"800\" height=\"140\" fill=\"#64748B\" opacity=\"0.2\"/>\n  <line x1=\"0\" y1=\"360\" x2=\"800\" y2=\"360\" stroke=\"#475569\" stroke-width=\"4\"/>\n\n  <!-- Ergonomic Office Chair (Behind Desk) -->\n  <g id=\"s1-chair\">\n    <path d=\"M290 440 L350 440 M320 410 L320 440 M300 445 A4 4 0 1 1 296 445 M345 445 A4 4 0 1 1 341 445\" stroke=\"#1E293B\" stroke-width=\"5\" stroke-linecap=\"round\" fill=\"none\"/>\n    <rect x=\"270\" y=\"190\" width=\"95\" height=\"130\" rx=\"14\" fill=\"#334155\" stroke=\"#1E293B\" stroke-width=\"4\"/>\n    <line x1=\"285\" y1=\"220\" x2=\"350\" y2=\"220\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <line x1=\"285\" y1=\"245\" x2=\"350\" y2=\"245\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <line x1=\"285\" y1=\"270\" x2=\"350\" y2=\"270\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <line x1=\"285\" y1=\"295\" x2=\"350\" y2=\"295\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <rect x=\"292\" y=\"165\" width=\"52\" height=\"22\" rx=\"6\" fill=\"#1E293B\"/>\n    <ellipse cx=\"320\" cy=\"330\" rx=\"55\" ry=\"16\" fill=\"#1E293B\"/>\n  </g>\n\n  <!-- Office Worker (Seated Woman) -->\n  <g id=\"s1-person\">\n    <path d=\"M280 325 C280 250, 310 230, 345 230 C375 230, 400 255, 400 325 Z\" fill=\"#1E3A8A\" stroke=\"#0F172A\" stroke-width=\"3\"/>\n    <polygon points=\"335,230 345,260 355,230\" fill=\"#FFFFFF\"/>\n    <polygon points=\"340,230 345,265 350,230\" fill=\"#38BDF8\"/>\n    <rect x=\"336\" y=\"215\" width=\"18\" height=\"18\" fill=\"#FBCFE8\" rx=\"2\"/>\n    <ellipse cx=\"345\" cy=\"195\" rx=\"22\" ry=\"25\" fill=\"#FBCFE8\"/>\n    <path d=\"M320 195 C320 165, 370 165, 370 195 C370 200, 365 212, 362 215 C355 200, 335 200, 328 215 C323 210, 320 202, 320 195 Z\" fill=\"#451A03\"/>\n    <circle cx=\"365\" cy=\"178\" r=\"12\" fill=\"#451A03\"/>\n    <path d=\"M385 270 Q420 290 440 315 Q430 325 390 305 Z\" fill=\"#1E3A8A\" stroke=\"#0F172A\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"442\" cy=\"320\" rx=\"8\" ry=\"5\" fill=\"#FBCFE8\" transform=\"rotate(10 442 320)\"/>\n    <path d=\"M315 275 Q360 300 405 320 Q395 330 315 295 Z\" fill=\"#1E40AF\" stroke=\"#0F172A\" stroke-width=\"2.5\"/>\n    <ellipse cx=\"408\" cy=\"323\" rx=\"8\" ry=\"5\" fill=\"#FBCFE8\" transform=\"rotate(-10 408 323)\"/>\n  </g>\n\n  <!-- Large Wooden Office Desk -->\n  <g id=\"s1-desk\" filter=\"url(#s1-shadow)\">\n    <rect x=\"170\" y=\"335\" width=\"16\" height=\"135\" fill=\"#334155\" rx=\"2\"/>\n    <rect x=\"630\" y=\"335\" width=\"16\" height=\"135\" fill=\"#334155\" rx=\"2\"/>\n    <rect x=\"165\" y=\"465\" width=\"26\" height=\"8\" fill=\"#1E293B\" rx=\"3\"/>\n    <rect x=\"625\" y=\"465\" width=\"26\" height=\"8\" fill=\"#1E293B\" rx=\"3\"/>\n    <line x1=\"178\" y1=\"410\" x2=\"638\" y2=\"410\" stroke=\"#475569\" stroke-width=\"6\"/>\n    <polygon points=\"140,325 670,325 660,345 150,345\" fill=\"#78350F\" stroke=\"#451A03\" stroke-width=\"2\"/>\n    <polygon points=\"180,265 630,265 670,325 140,325\" fill=\"url(#s1-wood)\" stroke=\"#9A622A\" stroke-width=\"2\"/>\n    <polygon points=\"290,280 570,280 595,322 265,322\" fill=\"#1E293B\" opacity=\"0.88\" rx=\"4\"/>\n  </g>\n\n  <!-- External Secondary Monitor on Stand -->\n  <g id=\"s1-monitor\">\n    <ellipse cx=\"330\" cy=\"285\" rx=\"26\" ry=\"7\" fill=\"#64748B\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n    <rect x=\"326\" y=\"230\" width=\"8\" height=\"55\" fill=\"#94A3B8\" rx=\"2\"/>\n    <rect x=\"255\" y=\"160\" width=\"150\" height=\"95\" rx=\"4\" fill=\"#0F172A\" stroke=\"#475569\" stroke-width=\"3\"/>\n    <rect x=\"260\" y=\"165\" width=\"140\" height=\"85\" rx=\"2\" fill=\"url(#s1-screen)\"/>\n    <line x1=\"270\" y1=\"230\" x2=\"390\" y2=\"230\" stroke=\"#334155\" stroke-width=\"1\"/>\n    <rect x=\"275\" y=\"205\" width=\"12\" height=\"25\" fill=\"#38BDF8\" rx=\"1\"/>\n    <rect x=\"295\" y=\"190\" width=\"12\" height=\"40\" fill=\"#3B82F6\" rx=\"1\"/>\n    <rect x=\"315\" y=\"178\" width=\"12\" height=\"52\" fill=\"#10B981\" rx=\"1\"/>\n    <rect x=\"335\" y=\"198\" width=\"12\" height=\"32\" fill=\"#F59E0B\" rx=\"1\"/>\n    <rect x=\"355\" y=\"185\" width=\"12\" height=\"45\" fill=\"#EC4899\" rx=\"1\"/>\n    <polyline points=\"281,200 301,185 321,172 341,190 361,180 380,170\" fill=\"none\" stroke=\"#FACC15\" stroke-width=\"2\"/>\n  </g>\n\n  <!-- Modern Laptop (Open on Desk) -->\n  <g id=\"s1-laptop\">\n    <polygon points=\"380,312 475,312 490,332 365,332\" fill=\"#CBD5E1\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n    <polygon points=\"388,314 468,314 478,324 378,324\" fill=\"#1E293B\"/>\n    <polygon points=\"416,326 448,326 450,330 414,330\" fill=\"#94A3B8\"/>\n    <polygon points=\"390,240 480,240 475,312 380,312\" fill=\"#0F172A\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <polygon points=\"394,244 476,244 472,308 384,308\" fill=\"url(#s1-laptop-screen)\"/>\n    <line x1=\"402\" y1=\"255\" x2=\"460\" y2=\"255\" stroke=\"#BAE6FD\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"402\" y1=\"265\" x2=\"445\" y2=\"265\" stroke=\"#FED7AA\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"412\" y1=\"275\" x2=\"465\" y2=\"275\" stroke=\"#BBF7D0\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"412\" y1=\"285\" x2=\"450\" y2=\"285\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"402\" y1=\"295\" x2=\"435\" y2=\"295\" stroke=\"#FDE047\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n  </g>\n\n  <!-- Desk Lamp with Warm Cone of Light -->\n  <g id=\"s1-lamp\">\n    <polygon points=\"170,225 240,225 295,330 115,330\" fill=\"url(#s1-lamp-glow)\"/>\n    <ellipse cx=\"195\" cy=\"295\" rx=\"18\" ry=\"7\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <path d=\"M195 292 C185 240, 190 200, 205 180 C212 170, 220 185, 215 210\" fill=\"none\" stroke=\"#D97706\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n    <path d=\"M200 208 L225 212 L235 228 L190 224 Z\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <ellipse cx=\"212\" cy=\"226\" rx=\"22\" ry=\"6\" fill=\"#FEF08A\"/>\n  </g>\n\n  <!-- Documents & Notebook (Right side of desk) -->\n  <g id=\"s1-documents\">\n    <polygon points=\"515,285 570,285 585,315 530,315\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1.5\" filter=\"url(#s1-shadow)\"/>\n    <line x1=\"528\" y1=\"292\" x2=\"560\" y2=\"292\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <line x1=\"528\" y1=\"298\" x2=\"565\" y2=\"298\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <line x1=\"532\" y1=\"304\" x2=\"570\" y2=\"304\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <circle cx=\"568\" cy=\"308\" r=\"3\" fill=\"#EF4444\"/>\n    <polygon points=\"545,295 615,295 635,328 565,328\" fill=\"#FEF9C3\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n    <line x1=\"588\" y1=\"295\" x2=\"600\" y2=\"328\" stroke=\"#475569\" stroke-width=\"2\" stroke-dasharray=\"3,3\"/>\n    <line x1=\"570\" y1=\"320\" x2=\"610\" y2=\"302\" stroke=\"#2563EB\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  </g>\n\n  <!-- Coffee Mug (Left side of desk) -->\n  <g id=\"s1-mug\">\n    <ellipse cx=\"235\" cy=\"305\" rx=\"11\" ry=\"5\" fill=\"#0284C7\" stroke=\"#0369A1\" stroke-width=\"1.5\"/>\n    <path d=\"M224 305 L224 322 C224 327, 246 327, 246 322 L246 305 Z\" fill=\"#0284C7\" stroke=\"#0369A1\" stroke-width=\"1.5\"/>\n    <ellipse cx=\"235\" cy=\"305\" rx=\"8\" ry=\"3\" fill=\"#451A03\"/>\n    <path d=\"M224 308 C215 308, 215 320, 224 320\" fill=\"none\" stroke=\"#0369A1\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M233 300 Q230 292 235 286 Q240 280 237 274\" fill=\"none\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\" opacity=\"0.6\"/>\n  </g>\n\n  <!-- Small Potted Plant (Far right of desk) -->\n  <g id=\"s1-plant\">\n    <ellipse cx=\"625\" cy=\"275\" rx=\"12\" ry=\"4\" fill=\"#E2E8F0\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n    <path d=\"M613 275 L616 292 C616 295, 634 295, 634 292 L637 275 Z\" fill=\"#F8FAFC\" stroke=\"#CBD5E1\" stroke-width=\"1\"/>\n    <ellipse cx=\"625\" cy=\"270\" rx=\"6\" ry=\"12\" fill=\"#16A34A\" transform=\"rotate(-15 625 270)\"/>\n    <ellipse cx=\"620\" cy=\"268\" rx=\"5\" ry=\"11\" fill=\"#22C55E\" transform=\"rotate(-40 620 268)\"/>\n    <ellipse cx=\"630\" cy=\"268\" rx=\"5\" ry=\"11\" fill=\"#15803D\" transform=\"rotate(35 630 268)\"/>\n  </g>\n</svg>",
        "hotspots": [
          {
            "id": "hs-laptop",
            "x": 45,
            "y": 58,
            "wordId": "kw-laptop",
            "label": "Laptop"
          },
          {
            "id": "hs-desk",
            "x": 26,
            "y": 72,
            "wordId": "kw-desk",
            "label": "Desk"
          },
          {
            "id": "hs-type",
            "x": 43,
            "y": 64,
            "wordId": "kw-type",
            "label": "Type on keyboard"
          },
          {
            "id": "hs-document",
            "x": 68,
            "y": 63,
            "wordId": "kw-document",
            "label": "Document"
          },
          {
            "id": "hs-lamp",
            "x": 24,
            "y": 42,
            "wordId": "kw-lamp",
            "label": "Desk lamp"
          },
          {
            "id": "hs-adjust",
            "x": 38,
            "y": 40,
            "wordId": "kw-adjust",
            "label": "Adjust screen"
          },
          {
            "id": "hs-sit",
            "x": 38,
            "y": 50,
            "wordId": "kw-sit",
            "label": "Sit at desk"
          },
          {
            "id": "hs-mug",
            "x": 29,
            "y": 63,
            "wordId": "kw-mug",
            "label": "Coffee mug"
          }
        ],
        "keywords": [
          {
            "id": "kw-desk",
            "word": "Desk",
            "pos": "n",
            "ipa": "/desk/",
            "vi": "Bàn làm việc",
            "example": "A laptop and documents are placed on the desk.",
            "collocations": [
              "at the desk",
              "on the desk",
              "clear off a desk",
              "work at a desk"
            ]
          },
          {
            "id": "kw-laptop",
            "word": "Laptop",
            "pos": "n",
            "ipa": "/ˈlæp.tɑːp/",
            "vi": "Máy tính xách tay",
            "example": "She is working on a laptop computer.",
            "collocations": [
              "open a laptop",
              "work on a laptop",
              "type on a laptop"
            ]
          },
          {
            "id": "kw-computer",
            "word": "Computer",
            "pos": "n",
            "ipa": "/kəmˈpjuː.tər/",
            "vi": "Máy vi tính, màn hình máy tính",
            "example": "The computer monitor is set up on the table.",
            "collocations": [
              "computer screen",
              "computer monitor",
              "operate a computer"
            ]
          },
          {
            "id": "kw-keyboard",
            "word": "Keyboard",
            "pos": "n",
            "ipa": "/ˈkiː.bɔːrd/",
            "vi": "Bàn phím máy tính",
            "example": "Her hands are resting on the keyboard.",
            "collocations": [
              "type on a keyboard",
              "wireless keyboard",
              "press keys on a keyboard"
            ]
          },
          {
            "id": "kw-document",
            "word": "Document",
            "pos": "n",
            "ipa": "/ˈdɑː.kjə.mənt/",
            "vi": "Tài liệu, văn bản giấy tờ",
            "example": "Some documents are spread across the desk.",
            "collocations": [
              "review a document",
              "sign a document",
              "stack of documents"
            ]
          },
          {
            "id": "kw-lamp",
            "word": "Lamp",
            "pos": "n",
            "ipa": "/læmp/",
            "vi": "Đèn bàn làm việc",
            "example": "A desk lamp is turned on next to the monitor.",
            "collocations": [
              "desk lamp",
              "turn on a lamp",
              "adjust a lamp"
            ]
          },
          {
            "id": "kw-type",
            "word": "Type",
            "pos": "v",
            "ipa": "/taɪp/",
            "vi": "Gõ phím, đánh máy",
            "example": "A woman is typing on a keyboard.",
            "collocations": [
              "type on a laptop",
              "type a message",
              "type rapidly"
            ]
          },
          {
            "id": "kw-adjust",
            "word": "Adjust",
            "pos": "v",
            "ipa": "/əˈdʒʌst/",
            "vi": "Điều chỉnh, căn chỉnh",
            "example": "He is adjusting the angle of his computer monitor.",
            "collocations": [
              "adjust the screen",
              "adjust the lamp",
              "adjust equipment"
            ]
          },
          {
            "id": "kw-review",
            "word": "Review",
            "pos": "v",
            "ipa": "/rɪˈvjuː/",
            "vi": "Xem lại, kiểm tra, duyệt qua",
            "example": "She is reviewing some papers in front of her.",
            "collocations": [
              "review some notes",
              "review a proposal",
              "review documents"
            ]
          },
          {
            "id": "kw-sit",
            "word": "Sit",
            "pos": "v",
            "ipa": "/sɪt/",
            "vi": "Ngồi (tại bàn làm việc, ghế)",
            "example": "The office worker is sitting in front of a computer.",
            "collocations": [
              "sit at a desk",
              "sit in an office chair",
              "seated at the workstation"
            ]
          },
          {
            "id": "kw-lean",
            "word": "Lean",
            "pos": "v",
            "ipa": "/liːn/",
            "vi": "Nghiêng người, cúi về phía trước",
            "example": "She is leaning forward toward the computer screen.",
            "collocations": [
              "lean forward",
              "lean over the desk",
              "lean against"
            ]
          },
          {
            "id": "kw-mug",
            "word": "Mug",
            "pos": "n",
            "ipa": "/mʌɡ/",
            "vi": "Cốc, ly có quai (uống cà phê/trà)",
            "example": "A coffee mug is placed beside the keyboard.",
            "collocations": [
              "coffee mug",
              "sip from a mug",
              "pick up a mug"
            ]
          }
        ],
        "drill": {
          "question": "Listen to the four statements. Select the statement that best describes what you see in the picture.",
          "correct": "B",
          "options": [
            {
              "id": "A",
              "text": "She is adjusting the angle of her desk lamp.",
              "vi": "Cô ấy đang điều chỉnh góc chiếu của chiếc đèn bàn.",
              "isCorrect": false,
              "trapType": "Bẫy hành động sai (Incorrect Action)",
              "explanation": "Trong tranh tuy có đèn bàn (desk lamp) nhưng tay cô ấy không chạm vào đèn mà đang đặt trên bàn phím gõ máy tính. Đây là bẫy ETS lấy danh từ có thật trong tranh ghép với động từ sai."
            },
            {
              "id": "B",
              "text": "A woman is typing on a laptop computer.",
              "vi": "Một người phụ nữ đang gõ trên máy tính xách tay.",
              "isCorrect": true,
              "trapType": "Đáp án chuẩn xác (Direct Action)",
              "explanation": "Câu miêu tả chính xác hành động trọng tâm của nhân vật trong hình: người phụ nữ đang ngồi tại bàn và gõ phím trên máy tính xách tay (typing on a laptop computer)."
            },
            {
              "id": "C",
              "text": "Some papers are being shredded by a machine.",
              "vi": "Một số giấy tờ đang được máy hủy giấy cắt nhỏ.",
              "isCorrect": false,
              "trapType": "Bẫy 'Being + V3' (Bẫy kinh điển ETS Part 1)",
              "explanation": "Cấu trúc 'are being shredded' diễn tả hành động đang được máy hủy giấy thực hiện ngay tại thời điểm chụp. Trong tranh không hề có máy hủy tài liệu và các tờ giấy chỉ đang nằm yên trên bàn."
            },
            {
              "id": "D",
              "text": "The office worker is drinking from a coffee mug.",
              "vi": "Nhân viên văn phòng đang uống nước từ chiếc cốc cà phê.",
              "isCorrect": false,
              "trapType": "Bẫy hành động & Trạng thái vật",
              "explanation": "Trên bàn có một chiếc cốc cà phê (coffee mug), nhưng nhân vật không cầm cốc và không hề có hành động uống (drinking). ETS thường dùng đồ vật có sẵn trong tranh để đặt bẫy hành động."
            }
          ]
        },
        "describeChallenge": {
          "instructions": "Hãy mô tả người phụ nữ đang làm gì và các vật dụng nào xuất hiện trên bàn làm việc bằng 1 câu tiếng Anh hoàn chỉnh:",
          "targetKeywords": [
            "laptop",
            "desk",
            "type",
            "document",
            "keyboard",
            "lamp"
          ],
          "modelAnswers": [
            {
              "en": "A woman is sitting at a desk and typing on a laptop keyboard.",
              "vi": "Một người phụ nữ đang ngồi tại bàn làm việc và gõ trên bàn phím máy tính xách tay.",
              "score": 100
            },
            {
              "en": "There are some documents and a desk lamp placed on the work surface.",
              "vi": "Có một số tài liệu và một chiếc đèn bàn được đặt trên mặt bàn làm việc.",
              "score": 95
            },
            {
              "en": "The office worker is reviewing information displayed on the computer monitor.",
              "vi": "Nhân viên văn phòng đang xem xét thông tin hiển thị trên màn hình máy tính.",
              "score": 95
            }
          ]
        }
      },
      {
        "id": "scene-meeting",
        "title": "Tranh 2: Phòng họp & Thuyết trình",
        "titleEn": "Meeting Room & Presentation",
        "desc": "Bối cảnh cuộc họp doanh nghiệp: người thuyết trình chỉ tay vào biểu đồ trên màn hình chiếu, các đồng nghiệp ngồi quanh bàn họp lắng nghe và ghi chép.",
        "svg": "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" class=\"part1-svg-art\">\n  <defs>\n    <linearGradient id=\"s2-wall\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#F1F5F9\"/>\n      <stop offset=\"100%\" stop-color=\"#E2E8F0\"/>\n    </linearGradient>\n    <linearGradient id=\"s2-screen-bg\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#0F172A\"/>\n      <stop offset=\"100%\" stop-color=\"#1E293B\"/>\n    </linearGradient>\n    <linearGradient id=\"s2-table\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#9A3412\"/>\n      <stop offset=\"30%\" stop-color=\"#7C2D12\"/>\n      <stop offset=\"100%\" stop-color=\"#431407\"/>\n    </linearGradient>\n    <linearGradient id=\"s2-glass\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#BAE6FD\" stop-opacity=\"0.3\"/>\n      <stop offset=\"100%\" stop-color=\"#E0F2FE\" stop-opacity=\"0.1\"/>\n    </linearGradient>\n    <filter id=\"s2-shadow\" x=\"-5%\" y=\"-5%\" width=\"110%\" height=\"115%\">\n      <feDropShadow dx=\"0\" dy=\"8\" stdDeviation=\"6\" flood-opacity=\"0.2\"/>\n    </filter>\n  </defs>\n\n  <!-- Wall Background -->\n  <rect x=\"0\" y=\"0\" width=\"800\" height=\"500\" fill=\"url(#s2-wall)\"/>\n\n  <!-- Left Glass Partition Window (Skyline view) -->\n  <rect x=\"0\" y=\"0\" width=\"170\" height=\"350\" fill=\"url(#s2-glass)\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n  <rect x=\"15\" y=\"70\" width=\"25\" height=\"120\" fill=\"#CBD5E1\" opacity=\"0.6\"/>\n  <rect x=\"45\" y=\"40\" width=\"35\" height=\"150\" fill=\"#94A3B8\" opacity=\"0.4\"/>\n  <rect x=\"85\" y=\"90\" width=\"30\" height=\"100\" fill=\"#CBD5E1\" opacity=\"0.5\"/>\n  <line x1=\"85\" y1=\"0\" x2=\"85\" y2=\"350\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n\n  <!-- Right Acoustic Wood Slats Wall -->\n  <rect x=\"710\" y=\"0\" width=\"90\" height=\"350\" fill=\"#D7A15C\" opacity=\"0.25\"/>\n  <line x1=\"725\" y1=\"0\" x2=\"725\" y2=\"350\" stroke=\"#9A622A\" stroke-width=\"3\" opacity=\"0.4\"/>\n  <line x1=\"745\" y1=\"0\" x2=\"745\" y2=\"350\" stroke=\"#9A622A\" stroke-width=\"3\" opacity=\"0.4\"/>\n  <line x1=\"765\" y1=\"0\" x2=\"765\" y2=\"350\" stroke=\"#9A622A\" stroke-width=\"3\" opacity=\"0.4\"/>\n  <line x1=\"785\" y1=\"0\" x2=\"785\" y2=\"350\" stroke=\"#9A622A\" stroke-width=\"3\" opacity=\"0.4\"/>\n\n  <!-- Ceiling Recessed Lighting -->\n  <rect x=\"230\" y=\"8\" width=\"160\" height=\"8\" rx=\"4\" fill=\"#FFFFFF\" opacity=\"0.9\"/>\n  <rect x=\"470\" y=\"8\" width=\"160\" height=\"8\" rx=\"4\" fill=\"#FFFFFF\" opacity=\"0.9\"/>\n\n  <!-- Floor -->\n  <rect x=\"0\" y=\"350\" width=\"800\" height=\"150\" fill=\"#64748B\" opacity=\"0.25\"/>\n  <line x1=\"0\" y1=\"350\" x2=\"800\" y2=\"350\" stroke=\"#475569\" stroke-width=\"4\"/>\n\n  <!-- Large Interactive Presentation Screen / Whiteboard -->\n  <g id=\"s2-presentation-screen\" filter=\"url(#s2-shadow)\">\n    <!-- Stand / Wall Mount Frame -->\n    <rect x=\"180\" y=\"45\" width=\"290\" height=\"195\" rx=\"8\" fill=\"#0F172A\" stroke=\"#334155\" stroke-width=\"4\"/>\n    <rect x=\"186\" y=\"51\" width=\"278\" height=\"183\" rx=\"4\" fill=\"url(#s2-screen-bg)\"/>\n    \n    <!-- Screen Header -->\n    <text x=\"200\" y=\"75\" fill=\"#38BDF8\" font-size=\"12\" font-weight=\"700\" font-family=\"sans-serif\">Q3 PERFORMANCE REVIEW</text>\n    <line x1=\"200\" y1=\"83\" x2=\"450\" y2=\"83\" stroke=\"#334155\" stroke-width=\"1\"/>\n    \n    <!-- Multi-Color Bar Chart -->\n    <rect x=\"215\" y=\"150\" width=\"22\" height=\"60\" rx=\"3\" fill=\"#3B82F6\"/>\n    <rect x=\"250\" y=\"125\" width=\"22\" height=\"85\" rx=\"3\" fill=\"#06B6D4\"/>\n    <rect x=\"285\" y=\"105\" width=\"22\" height=\"105\" rx=\"3\" fill=\"#10B981\"/>\n    <rect x=\"320\" y=\"90\" width=\"22\" height=\"120\" rx=\"3\" fill=\"#F59E0B\"/>\n    \n    <!-- Upward Trend Line with Arrow -->\n    <polyline points=\"226,140 261,115 296,95 331,75\" fill=\"none\" stroke=\"#EF4444\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    <polygon points=\"331,70 338,78 326,79\" fill=\"#EF4444\"/>\n\n    <!-- Key Metrics Card on Right Screen -->\n    <rect x=\"360\" y=\"100\" width=\"90\" height=\"42\" rx=\"4\" fill=\"#1E293B\" stroke=\"#475569\" stroke-width=\"1\"/>\n    <text x=\"370\" y=\"118\" fill=\"#94A3B8\" font-size=\"9\" font-family=\"sans-serif\">GROWTH RATE</text>\n    <text x=\"370\" y=\"134\" fill=\"#22C55E\" font-size=\"14\" font-weight=\"bold\" font-family=\"sans-serif\">+32.4%</text>\n\n    <rect x=\"360\" y=\"150\" width=\"90\" height=\"42\" rx=\"4\" fill=\"#1E293B\" stroke=\"#475569\" stroke-width=\"1\"/>\n    <text x=\"370\" y=\"168\" fill=\"#94A3B8\" font-size=\"9\" font-family=\"sans-serif\">TARGET MET</text>\n    <text x=\"370\" y=\"184\" fill=\"#38BDF8\" font-size=\"14\" font-weight=\"bold\" font-family=\"sans-serif\">100% OK</text>\n  </g>\n\n  <!-- Presenter Standing (Pointing at Chart) -->\n  <g id=\"s2-presenter\">\n    <!-- Legs in grey slacks -->\n    <line x1=\"330\" y1=\"365\" x2=\"330\" y2=\"445\" stroke=\"#334155\" stroke-width=\"14\" stroke-linecap=\"round\"/>\n    <line x1=\"355\" y1=\"365\" x2=\"355\" y2=\"445\" stroke=\"#1E293B\" stroke-width=\"14\" stroke-linecap=\"round\"/>\n    <!-- Shoes -->\n    <ellipse cx=\"325\" cy=\"450\" rx=\"14\" ry=\"6\" fill=\"#0F172A\"/>\n    <ellipse cx=\"360\" cy=\"450\" rx=\"14\" ry=\"6\" fill=\"#0F172A\"/>\n\n    <!-- Body / Suit Jacket -->\n    <path d=\"M315 260 L370 260 L380 370 L310 370 Z\" fill=\"#334155\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n    <!-- White shirt collar & tie -->\n    <polygon points=\"335,260 342,285 350,260\" fill=\"#FFFFFF\"/>\n    <polygon points=\"340,265 345,315 342,320 339,265\" fill=\"#DC2626\"/>\n\n    <!-- Head & Hair -->\n    <rect x=\"336\" y=\"240\" width=\"14\" height=\"20\" fill=\"#FED7AA\"/>\n    <circle cx=\"343\" cy=\"225\" r=\"18\" fill=\"#FED7AA\"/>\n    <path d=\"M326 222 C326 205, 360 205, 360 222 C355 210, 335 210, 326 222 Z\" fill=\"#1F2937\"/>\n\n    <!-- Left Arm resting by side holding remote/clicker -->\n    <path d=\"M315 270 Q305 310 310 340\" fill=\"none\" stroke=\"#334155\" stroke-width=\"11\" stroke-linecap=\"round\"/>\n    <circle cx=\"310\" cy=\"345\" r=\"6\" fill=\"#FED7AA\"/>\n\n    <!-- Right Arm pointing towards screen -->\n    <!-- Arm extends up and left towards chart -->\n    <path d=\"M365 270 Q385 240 345 170\" fill=\"none\" stroke=\"#334155\" stroke-width=\"11\" stroke-linecap=\"round\"/>\n    <!-- Hand & Pointer Stylus -->\n    <circle cx=\"343\" cy=\"168\" r=\"6\" fill=\"#FED7AA\"/>\n    <line x1=\"343\" y1=\"168\" x2=\"332\" y2=\"105\" stroke=\"#D97706\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>\n    <circle cx=\"332\" cy=\"105\" r=\"3\" fill=\"#EF4444\"/>\n  </g>\n\n  <!-- Large Boat-Shaped Conference Table (Right side foreground) -->\n  <g id=\"s2-table\" filter=\"url(#s2-shadow)\">\n    <!-- Table Pedestal Legs -->\n    <rect x=\"490\" y=\"370\" width=\"22\" height=\"100\" fill=\"#1E293B\" rx=\"4\"/>\n    <rect x=\"650\" y=\"370\" width=\"22\" height=\"100\" fill=\"#1E293B\" rx=\"4\"/>\n    <rect x=\"475\" y=\"465\" width=\"52\" height=\"8\" fill=\"#0F172A\" rx=\"4\"/>\n    <rect x=\"635\" y=\"465\" width=\"52\" height=\"8\" fill=\"#0F172A\" rx=\"4\"/>\n\n    <!-- Conference Chairs (Behind Table) -->\n    <!-- Chair 1 (Female colleague taking notes) -->\n    <rect x=\"475\" y=\"245\" width=\"60\" height=\"90\" rx=\"8\" fill=\"#475569\" stroke=\"#1E293B\" stroke-width=\"3\"/>\n    <!-- Chair 2 (Male colleague) -->\n    <rect x=\"620\" y=\"245\" width=\"60\" height=\"90\" rx=\"8\" fill=\"#475569\" stroke=\"#1E293B\" stroke-width=\"3\"/>\n\n    <!-- Colleague 1: Woman Taking Notes -->\n    <g id=\"s2-attendee-1\">\n      <path d=\"M478 335 C478 285, 498 275, 518 275 C538 275, 558 285, 558 335 Z\" fill=\"#0D9488\" stroke=\"#115E59\" stroke-width=\"2\"/>\n      <rect x=\"510\" y=\"260\" width=\"12\" height=\"16\" fill=\"#FED7AA\"/>\n      <circle cx=\"516\" cy=\"245\" r=\"16\" fill=\"#FED7AA\"/>\n      <path d=\"M500 245 C500 228, 532 228, 532 245 C530 234, 502 234, 500 245 Z\" fill=\"#78350F\"/>\n      <!-- Eyeglasses -->\n      <circle cx=\"510\" cy=\"245\" r=\"4\" fill=\"none\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n      <circle cx=\"522\" cy=\"245\" r=\"4\" fill=\"none\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n      <line x1=\"514\" y1=\"245\" x2=\"518\" y2=\"245\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n      <!-- Arm writing in notebook -->\n      <path d=\"M535 300 Q525 320 515 330\" fill=\"none\" stroke=\"#0D9488\" stroke-width=\"9\" stroke-linecap=\"round\"/>\n      <circle cx=\"514\" cy=\"332\" r=\"5\" fill=\"#FED7AA\"/>\n    </g>\n\n    <!-- Colleague 2: Man Listening with Tablet -->\n    <g id=\"s2-attendee-2\">\n      <path d=\"M625 335 C625 285, 645 275, 665 275 C685 275, 705 285, 705 335 Z\" fill=\"#4B5563\" stroke=\"#1F2937\" stroke-width=\"2\"/>\n      <rect x=\"659\" y=\"260\" width=\"12\" height=\"16\" fill=\"#FED7AA\"/>\n      <circle cx=\"665\" cy=\"245\" r=\"16\" fill=\"#FED7AA\"/>\n      <path d=\"M650 242 C650 226, 680 226, 680 242 Z\" fill=\"#1E293B\"/>\n      <!-- Arms holding tablet on table -->\n      <path d=\"M640 305 Q655 320 668 330\" fill=\"none\" stroke=\"#4B5563\" stroke-width=\"9\" stroke-linecap=\"round\"/>\n      <circle cx=\"670\" cy=\"332\" r=\"5\" fill=\"#FED7AA\"/>\n    </g>\n\n    <!-- Conference Table Top in Perspective -->\n    <polygon points=\"410,320 740,320 770,380 380,380\" fill=\"url(#s2-table)\" stroke=\"#431407\" stroke-width=\"3\"/>\n    <!-- Chamfer Edge -->\n    <polygon points=\"380,380 770,380 760,395 390,395\" fill=\"#2E0E05\"/>\n\n    <!-- Built-in Cable & Power Box -->\n    <polygon points=\"530,335 630,335 635,350 525,350\" fill=\"#1E293B\" stroke=\"#475569\" stroke-width=\"1\"/>\n\n    <!-- Open Notebook & Pen (Colleague 1) -->\n    <polygon points=\"485,340 525,340 530,365 490,365\" fill=\"#FEF9C3\" stroke=\"#CBD5E1\" stroke-width=\"1.5\"/>\n    <line x1=\"505\" y1=\"340\" x2=\"510\" y2=\"365\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <line x1=\"512\" y1=\"352\" x2=\"528\" y2=\"345\" stroke=\"#2563EB\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n\n    <!-- Digital Tablet (Colleague 2) -->\n    <polygon points=\"650,338 695,338 700,365 655,365\" fill=\"#0F172A\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n    <polygon points=\"653,341 692,341 697,362 658,362\" fill=\"#38BDF8\" opacity=\"0.8\"/>\n\n    <!-- Water Bottles & Drinking Glasses -->\n    <rect x=\"440\" y=\"335\" width=\"9\" height=\"24\" rx=\"2\" fill=\"#BAE6FD\" opacity=\"0.8\" stroke=\"#38BDF8\" stroke-width=\"1\"/>\n    <circle cx=\"444\" cy=\"333\" r=\"3\" fill=\"#0284C7\"/>\n    <rect x=\"455\" y=\"342\" width=\"8\" height=\"14\" rx=\"1\" fill=\"#E0F2FE\" opacity=\"0.7\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n\n    <rect x=\"715\" y=\"335\" width=\"9\" height=\"24\" rx=\"2\" fill=\"#BAE6FD\" opacity=\"0.8\" stroke=\"#38BDF8\" stroke-width=\"1\"/>\n    <circle cx=\"719\" cy=\"333\" r=\"3\" fill=\"#0284C7\"/>\n  </g>\n</svg>",
        "hotspots": [
          {
            "id": "hs-presentation",
            "x": 40,
            "y": 30,
            "wordId": "kw-presentation",
            "label": "Presentation screen"
          },
          {
            "id": "hs-point",
            "x": 42,
            "y": 42,
            "wordId": "kw-point",
            "label": "Point at chart"
          },
          {
            "id": "hs-meeting",
            "x": 72,
            "y": 72,
            "wordId": "kw-meeting",
            "label": "Meeting table"
          },
          {
            "id": "hs-attendees",
            "x": 65,
            "y": 55,
            "wordId": "kw-gatherings",
            "label": "Colleagues / Attendees"
          },
          {
            "id": "hs-speak",
            "x": 43,
            "y": 52,
            "wordId": "kw-speak",
            "label": "Speak to audience"
          },
          {
            "id": "hs-notes",
            "x": 64,
            "y": 70,
            "wordId": "kw-notes",
            "label": "Take notes"
          },
          {
            "id": "hs-board",
            "x": 28,
            "y": 28,
            "wordId": "kw-board",
            "label": "Display board"
          }
        ],
        "keywords": [
          {
            "id": "kw-presentation",
            "word": "Presentation",
            "pos": "n",
            "ipa": "/ˌprez.ənˈteɪ.ʃən/",
            "vi": "Bài thuyết trình, buổi thuyết minh dự án",
            "example": "A man is giving a presentation to his colleagues.",
            "collocations": [
              "give a presentation",
              "make a presentation",
              "presentation slide"
            ]
          },
          {
            "id": "kw-meeting",
            "word": "Meeting",
            "pos": "n",
            "ipa": "/ˈmiː.tɪŋ/",
            "vi": "Cuộc họp, buổi gặp mặt bàn bạc",
            "example": "A business meeting is taking place in a conference room.",
            "collocations": [
              "attend a meeting",
              "hold a meeting",
              "meeting room",
              "conference table"
            ]
          },
          {
            "id": "kw-board",
            "word": "Board",
            "pos": "n",
            "ipa": "/bɔːrd/",
            "vi": "Bảng trình chiếu, bảng hiển thị",
            "example": "A quarterly chart is displayed on the board.",
            "collocations": [
              "notice board",
              "bulletin board",
              "write on a board",
              "display board"
            ]
          },
          {
            "id": "kw-gatherings",
            "word": "Gatherings",
            "pos": "n",
            "ipa": "/ˈɡæð.ər.ɪŋz/",
            "vi": "Sự tụ họp, nhóm người tập hợp",
            "example": "A group of colleagues has gathered around the conference table.",
            "collocations": [
              "gather around",
              "a small gathering",
              "gather information"
            ]
          },
          {
            "id": "kw-point",
            "word": "Point",
            "pos": "v",
            "ipa": "/pɔɪnt/",
            "vi": "Chỉ tay vào, trỏ vào",
            "example": "The speaker is pointing at a graph on the display screen.",
            "collocations": [
              "point at a chart",
              "point to a screen",
              "point with a pen"
            ]
          },
          {
            "id": "kw-speak",
            "word": "Speak",
            "pos": "v",
            "ipa": "/spiːk/",
            "vi": "Nói chuyện, phát biểu trước đám đông",
            "example": "The presenter is speaking to people in the room.",
            "collocations": [
              "speak into a microphone",
              "speak to an audience",
              "speak with a client"
            ]
          },
          {
            "id": "kw-discuss",
            "word": "Discuss",
            "pos": "v",
            "ipa": "/dɪˈskʌs/",
            "vi": "Thảo luận, bàn bạc công việc",
            "example": "The team members are discussing project details.",
            "collocations": [
              "discuss an issue",
              "discuss a plan",
              "discuss business"
            ]
          },
          {
            "id": "kw-notes",
            "word": "Note",
            "pos": "v",
            "ipa": "/noʊt/",
            "vi": "Ghi chép, ghi lại nội dung (take notes)",
            "example": "One of the participants is taking notes in a notebook.",
            "collocations": [
              "take notes",
              "write down notes",
              "review meeting notes"
            ]
          },
          {
            "id": "kw-address",
            "word": "Address",
            "pos": "v",
            "ipa": "/əˈdres/",
            "vi": "Diễn thuyết trước, phát biểu với (khán phòng)",
            "example": "A speaker is addressing a group of attendees.",
            "collocations": [
              "address the audience",
              "address a meeting",
              "address concerns"
            ]
          },
          {
            "id": "kw-display",
            "word": "Display",
            "pos": "v",
            "ipa": "/dɪˈspleɪ/",
            "vi": "Hiển thị, trưng bày",
            "example": "Data and graphs are displayed on the presentation screen.",
            "collocations": [
              "display on a screen",
              "be displayed on",
              "display items"
            ]
          }
        ],
        "drill": {
          "question": "Listen to the four statements. Select the statement that best describes what you see in the picture.",
          "correct": "A",
          "options": [
            {
              "id": "A",
              "text": "The presenter is pointing at information on a screen.",
              "vi": "Người thuyết trình đang chỉ tay vào thông tin trên màn hình.",
              "isCorrect": true,
              "trapType": "Đáp án chuẩn xác (Direct Action)",
              "explanation": "Câu miêu tả trực tiếp và chính xác hành động trọng tâm: người đàn ông đứng cạnh màn hình đang giơ tay/bút chỉ vào biểu đồ tăng trưởng (pointing at information on a screen)."
            },
            {
              "id": "B",
              "text": "Some chairs are being loaded onto a truck.",
              "vi": "Một số chiếc ghế đang được chất lên xe tải.",
              "isCorrect": false,
              "trapType": "Bẫy 'Being + V3' & Sai ngữ cảnh hoàn toàn",
              "explanation": "Cấu trúc 'are being loaded onto a truck' là bẫy hoàn toàn xa rời ngữ cảnh phòng họp văn phòng. Ghế trong phòng họp đang có người ngồi yên vị."
            },
            {
              "id": "C",
              "text": "All of the participants are standing near the door.",
              "vi": "Tất cả những người tham gia đều đang đứng gần cửa ra vào.",
              "isCorrect": false,
              "trapType": "Bẫy tư thế & Số lượng tuyệt đối (All)",
              "explanation": "Bẫy từ 'All' (tất cả) và 'standing' (đang đứng). Trong tranh, chỉ có duy nhất người thuyết trình là đang đứng, các đồng nghiệp khác đều đang ngồi (sitting) quanh bàn họp."
            },
            {
              "id": "D",
              "text": "A document is being copied in a machine.",
              "vi": "Một tài liệu đang được sao chép trong máy photocopy.",
              "isCorrect": false,
              "trapType": "Bẫy 'Being + V3' & Vật thể không có trong tranh",
              "explanation": "Trong phòng họp không có máy photocopy nào đang hoạt động. Đây là bẫy Being V3 điển hình của ETS Part 1 khi không có ai thao tác máy sao chép."
            }
          ]
        },
        "describeChallenge": {
          "instructions": "Hãy mô tả hành động của người thuyết trình và người tham dự trong phòng họp bằng 1 câu tiếng Anh hoàn chỉnh:",
          "targetKeywords": [
            "presentation",
            "screen",
            "point",
            "meeting",
            "colleagues",
            "discuss"
          ],
          "modelAnswers": [
            {
              "en": "A speaker is giving a presentation and pointing at a chart on the screen.",
              "vi": "Một diễn giả đang thuyết trình và chỉ tay vào biểu đồ trên màn hình.",
              "score": 100
            },
            {
              "en": "Several colleagues are seated around a conference table taking notes.",
              "vi": "Một vài đồng nghiệp đang ngồi quanh bàn hội nghị ghi chép thông tin.",
              "score": 95
            },
            {
              "en": "A group of people is attending a business meeting in an office.",
              "vi": "Một nhóm người đang tham dự cuộc họp kinh doanh trong văn phòng.",
              "score": 95
            }
          ]
        }
      },
      {
        "id": "scene-filing",
        "title": "Tranh 3: Khu vực tủ hồ sơ & Lưu trữ",
        "titleEn": "Cabinet & File Storage Area",
        "desc": "Bối cảnh phòng lưu trữ văn thư: nhân viên đang mở ngăn kéo tủ hồ sơ để tra cứu và sắp xếp các bìa hồ sơ, phía sau là các kệ kim loại chứa thùng tài liệu.",
        "svg": "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" class=\"part1-svg-art\">\n  <defs>\n    <linearGradient id=\"s3-wall\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#E2E8F0\"/>\n      <stop offset=\"100%\" stop-color=\"#CBD5E1\"/>\n    </linearGradient>\n    <linearGradient id=\"s3-cabinet\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#475569\"/>\n      <stop offset=\"50%\" stop-color=\"#334155\"/>\n      <stop offset=\"100%\" stop-color=\"#1E293B\"/>\n    </linearGradient>\n    <linearGradient id=\"s3-box\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#E2B176\"/>\n      <stop offset=\"100%\" stop-color=\"#B47A3A\"/>\n    </linearGradient>\n    <filter id=\"s3-shadow\" x=\"-5%\" y=\"-5%\" width=\"110%\" height=\"115%\">\n      <feDropShadow dx=\"0\" dy=\"6\" stdDeviation=\"5\" flood-opacity=\"0.2\"/>\n    </filter>\n  </defs>\n\n  <!-- Wall Background -->\n  <rect x=\"0\" y=\"0\" width=\"800\" height=\"500\" fill=\"url(#s3-wall)\"/>\n\n  <!-- Wall Clock -->\n  <circle cx=\"210\" cy=\"80\" r=\"32\" fill=\"#FFFFFF\" stroke=\"#475569\" stroke-width=\"4\" filter=\"url(#s3-shadow)\"/>\n  <circle cx=\"210\" cy=\"80\" r=\"2\" fill=\"#0F172A\"/>\n  <!-- Clock hands: 10:15 -->\n  <line x1=\"210\" y1=\"80\" x2=\"196\" y2=\"68\" stroke=\"#0F172A\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <line x1=\"210\" y1=\"80\" x2=\"230\" y2=\"80\" stroke=\"#0F172A\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <line x1=\"210\" y1=\"52\" x2=\"210\" y2=\"57\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n  <line x1=\"238\" y1=\"80\" x2=\"233\" y2=\"80\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n  <line x1=\"210\" y1=\"108\" x2=\"210\" y2=\"103\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n  <line x1=\"182\" y1=\"80\" x2=\"187\" y2=\"80\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n\n  <!-- Overhead Fluorescent Light Bar -->\n  <rect x=\"360\" y=\"10\" width=\"220\" height=\"12\" rx=\"4\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n  <rect x=\"370\" y=\"12\" width=\"200\" height=\"8\" rx=\"2\" fill=\"#FEF08A\" opacity=\"0.8\"/>\n\n  <!-- Floor Tiles with Perspective -->\n  <rect x=\"0\" y=\"380\" width=\"800\" height=\"120\" fill=\"#94A3B8\" opacity=\"0.3\"/>\n  <line x1=\"0\" y1=\"380\" x2=\"800\" y2=\"380\" stroke=\"#475569\" stroke-width=\"4\"/>\n  <line x1=\"100\" y1=\"380\" x2=\"50\" y2=\"500\" stroke=\"#64748B\" stroke-width=\"1.5\" opacity=\"0.5\"/>\n  <line x1=\"250\" y1=\"380\" x2=\"200\" y2=\"500\" stroke=\"#64748B\" stroke-width=\"1.5\" opacity=\"0.5\"/>\n  <line x1=\"400\" y1=\"380\" x2=\"350\" y2=\"500\" stroke=\"#64748B\" stroke-width=\"1.5\" opacity=\"0.5\"/>\n  <line x1=\"550\" y1=\"380\" x2=\"500\" y2=\"500\" stroke=\"#64748B\" stroke-width=\"1.5\" opacity=\"0.5\"/>\n  <line x1=\"700\" y1=\"380\" x2=\"650\" y2=\"500\" stroke=\"#64748B\" stroke-width=\"1.5\" opacity=\"0.5\"/>\n\n  <!-- Tall Filing Cabinets Bank (Left-Center) -->\n  <g id=\"s3-cabinets\" filter=\"url(#s3-shadow)\">\n    <!-- Main Cabinet Frame (4 Drawers) -->\n    <rect x=\"250\" y=\"110\" width=\"160\" height=\"290\" rx=\"4\" fill=\"url(#s3-cabinet)\" stroke=\"#1E293B\" stroke-width=\"4\"/>\n\n    <!-- Drawer 1 (Top - Closed) -->\n    <rect x=\"260\" y=\"120\" width=\"140\" height=\"60\" rx=\"3\" fill=\"#334155\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n    <rect x=\"305\" y=\"145\" width=\"50\" height=\"10\" rx=\"2\" fill=\"#E2E8F0\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n    <rect x=\"315\" y=\"132\" width=\"30\" height=\"8\" rx=\"1\" fill=\"#FFFFFF\"/>\n    <text x=\"320\" y=\"138\" font-size=\"5\" fill=\"#475569\" font-family=\"sans-serif\">A - F</text>\n\n    <!-- Drawer 2 (Middle - PULLED OPEN in 3D Perspective) -->\n    <!-- Drawer Void -->\n    <rect x=\"260\" y=\"190\" width=\"140\" height=\"60\" rx=\"2\" fill=\"#0F172A\"/>\n    <!-- Pulled Out Drawer Body -->\n    <polygon points=\"255,200 405,200 425,255 240,255\" fill=\"#475569\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n    <!-- Drawer Front Panel -->\n    <polygon points=\"240,255 425,255 425,305 240,305\" fill=\"#334155\" stroke=\"#1E293B\" stroke-width=\"2.5\"/>\n    <!-- Silver Handle on Open Drawer -->\n    <rect x=\"310\" y=\"275\" width=\"45\" height=\"9\" rx=\"2\" fill=\"#E2E8F0\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <rect x=\"320\" y=\"263\" width=\"25\" height=\"7\" rx=\"1\" fill=\"#FFFFFF\"/>\n    <text x=\"323\" y=\"269\" font-size=\"5\" fill=\"#475569\" font-family=\"sans-serif\">G - M</text>\n\n    <!-- Hanging File Folders Inside Open Drawer -->\n    <!-- Green folder -->\n    <polygon points=\"265,210 395,210 398,222 262,222\" fill=\"#16A34A\" stroke=\"#15803D\" stroke-width=\"1\"/>\n    <rect x=\"280\" y=\"206\" width=\"18\" height=\"6\" rx=\"1\" fill=\"#FFFFFF\"/>\n    <!-- Blue folder -->\n    <polygon points=\"262,222 398,222 402,236 258,236\" fill=\"#2563EB\" stroke=\"#1D4ED8\" stroke-width=\"1\"/>\n    <rect x=\"320\" y=\"218\" width=\"18\" height=\"6\" rx=\"1\" fill=\"#FACC15\"/>\n    <!-- Orange/Red folder being accessed -->\n    <polygon points=\"258,236 402,236 406,250 254,250\" fill=\"#EA580C\" stroke=\"#C2410C\" stroke-width=\"1\"/>\n    <rect x=\"360\" y=\"232\" width=\"18\" height=\"6\" rx=\"1\" fill=\"#FFFFFF\"/>\n\n    <!-- Drawer 3 (Bottom - Closed) -->\n    <rect x=\"260\" y=\"330\" width=\"140\" height=\"60\" rx=\"3\" fill=\"#334155\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n    <rect x=\"305\" y=\"355\" width=\"50\" height=\"10\" rx=\"2\" fill=\"#E2E8F0\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n    <rect x=\"315\" y=\"342\" width=\"30\" height=\"8\" rx=\"1\" fill=\"#FFFFFF\"/>\n    <text x=\"320\" y=\"348\" font-size=\"5\" fill=\"#475569\" font-family=\"sans-serif\">N - Z</text>\n  </g>\n\n  <!-- Office Worker (Standing next to cabinet, reaching into drawer) -->\n  <g id=\"s3-worker\">\n    <!-- Legs in beige / khaki trousers -->\n    <line x1=\"430\" y1=\"360\" x2=\"435\" y2=\"465\" stroke=\"#78350F\" stroke-width=\"15\" stroke-linecap=\"round\"/>\n    <line x1=\"455\" y1=\"360\" x2=\"460\" y2=\"465\" stroke=\"#9A3412\" stroke-width=\"15\" stroke-linecap=\"round\"/>\n    <!-- Brown Oxford Shoes -->\n    <ellipse cx=\"433\" cy=\"470\" rx=\"14\" ry=\"6\" fill=\"#451A03\"/>\n    <ellipse cx=\"463\" cy=\"470\" rx=\"14\" ry=\"6\" fill=\"#451A03\"/>\n\n    <!-- Body in light blue dress shirt with rolled-up sleeves -->\n    <path d=\"M420 220 L470 220 L465 365 L425 365 Z\" fill=\"#93C5FD\" stroke=\"#3B82F6\" stroke-width=\"2\"/>\n    <!-- Dark Belt -->\n    <rect x=\"424\" y=\"355\" width=\"42\" height=\"10\" fill=\"#1E293B\"/>\n    <rect x=\"440\" y=\"355\" width=\"10\" height=\"10\" fill=\"#FACC15\"/>\n\n    <!-- Head & Hair -->\n    <rect x=\"438\" y=\"200\" width=\"14\" height=\"20\" fill=\"#FED7AA\"/>\n    <circle cx=\"445\" cy=\"185\" r=\"18\" fill=\"#FED7AA\"/>\n    <!-- Tilted head inspecting drawer -->\n    <path d=\"M428 180 C428 165, 462 165, 462 180 C455 172, 435 172, 428 180 Z\" fill=\"#451A03\"/>\n\n    <!-- Left Arm holding Manila file folder -->\n    <path d=\"M425 230 Q405 270 415 300\" fill=\"none\" stroke=\"#93C5FD\" stroke-width=\"11\" stroke-linecap=\"round\"/>\n    <circle cx=\"415\" cy=\"305\" r=\"6\" fill=\"#FED7AA\"/>\n    <!-- Manila Folder tucked under arm -->\n    <polygon points=\"400,285 435,280 440,320 405,325\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"2\"/>\n    <line x1=\"405\" y1=\"295\" x2=\"430\" y2=\"290\" stroke=\"#A16207\" stroke-width=\"1.5\"/>\n\n    <!-- Right Arm REACHING DOWN INTO OPEN DRAWER -->\n    <!-- Arm extends from shoulder towards the open drawer files -->\n    <path d=\"M465 230 Q445 250 385 242\" fill=\"none\" stroke=\"#93C5FD\" stroke-width=\"11\" stroke-linecap=\"round\"/>\n    <!-- Hand gripping / sorting files -->\n    <circle cx=\"380\" cy=\"242\" r=\"7\" fill=\"#FED7AA\"/>\n    <!-- Finger detail -->\n    <ellipse cx=\"376\" cy=\"240\" rx=\"4\" ry=\"2.5\" fill=\"#FED7AA\" transform=\"rotate(-20 376 240)\"/>\n  </g>\n\n  <!-- Heavy Duty Metal Storage Shelving Unit (Right) -->\n  <g id=\"s3-shelves\" filter=\"url(#s3-shadow)\">\n    <!-- Upright Posts -->\n    <rect x=\"570\" y=\"80\" width=\"10\" height=\"320\" fill=\"#475569\"/>\n    <rect x=\"750\" y=\"80\" width=\"10\" height=\"320\" fill=\"#475569\"/>\n    \n    <!-- Shelf 1 (Top) -->\n    <rect x=\"565\" y=\"110\" width=\"200\" height=\"12\" fill=\"#64748B\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n    <!-- Row of Binders on Shelf 1 -->\n    <rect x=\"580\" y=\"65\" width=\"14\" height=\"45\" rx=\"1\" fill=\"#DC2626\" stroke=\"#991B1B\" stroke-width=\"1\"/>\n    <rect x=\"596\" y=\"65\" width=\"14\" height=\"45\" rx=\"1\" fill=\"#2563EB\" stroke=\"#1E40AF\" stroke-width=\"1\"/>\n    <rect x=\"612\" y=\"65\" width=\"14\" height=\"45\" rx=\"1\" fill=\"#16A34A\" stroke=\"#166534\" stroke-width=\"1\"/>\n    <rect x=\"628\" y=\"65\" width=\"14\" height=\"45\" rx=\"1\" fill=\"#D97706\" stroke=\"#B45309\" stroke-width=\"1\"/>\n    <rect x=\"644\" y=\"65\" width=\"14\" height=\"45\" rx=\"1\" fill=\"#0D9488\" stroke=\"#115E59\" stroke-width=\"1\"/>\n    <!-- Binder ring labels -->\n    <circle cx=\"587\" cy=\"80\" r=\"3\" fill=\"#FFFFFF\"/>\n    <circle cx=\"603\" cy=\"80\" r=\"3\" fill=\"#FFFFFF\"/>\n    <circle cx=\"619\" cy=\"80\" r=\"3\" fill=\"#FFFFFF\"/>\n    <circle cx=\"635\" cy=\"80\" r=\"3\" fill=\"#FFFFFF\"/>\n    <circle cx=\"651\" cy=\"80\" r=\"3\" fill=\"#FFFFFF\"/>\n\n    <!-- Shelf 2 (Middle) -->\n    <rect x=\"565\" y=\"210\" width=\"200\" height=\"12\" fill=\"#64748B\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n    <!-- Archive Storage Box 1 on Shelf 2 -->\n    <rect x=\"580\" y=\"135\" width=\"75\" height=\"75\" rx=\"3\" fill=\"url(#s3-box)\" stroke=\"#78350F\" stroke-width=\"2\"/>\n    <rect x=\"578\" y=\"132\" width=\"79\" height=\"14\" rx=\"2\" fill=\"#D97706\" stroke=\"#78350F\" stroke-width=\"1.5\"/>\n    <ellipse cx=\"617\" cy=\"175\" rx=\"10\" ry=\"4\" fill=\"#78350F\"/>\n    <rect x=\"595\" y=\"152\" width=\"45\" height=\"15\" rx=\"1\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n    <text x=\"598\" y=\"163\" font-size=\"8\" font-weight=\"bold\" fill=\"#1E293B\" font-family=\"sans-serif\">2024 TAX</text>\n\n    <!-- Archive Storage Box 2 on Shelf 2 -->\n    <rect x=\"670\" y=\"135\" width=\"75\" height=\"75\" rx=\"3\" fill=\"url(#s3-box)\" stroke=\"#78350F\" stroke-width=\"2\"/>\n    <rect x=\"668\" y=\"132\" width=\"79\" height=\"14\" rx=\"2\" fill=\"#D97706\" stroke=\"#78350F\" stroke-width=\"1.5\"/>\n    <ellipse cx=\"707\" cy=\"175\" rx=\"10\" ry=\"4\" fill=\"#78350F\"/>\n    <rect x=\"685\" y=\"152\" width=\"45\" height=\"15\" rx=\"1\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n    <text x=\"690\" y=\"163\" font-size=\"8\" font-weight=\"bold\" fill=\"#1E293B\" font-family=\"sans-serif\">AUDIT</text>\n\n    <!-- Shelf 3 (Bottom Shelf) -->\n    <rect x=\"565\" y=\"310\" width=\"200\" height=\"12\" fill=\"#64748B\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n    <!-- Stack of documents & records on Shelf 3 -->\n    <rect x=\"580\" y=\"260\" width=\"60\" height=\"50\" rx=\"2\" fill=\"#F1F5F9\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <line x1=\"590\" y1=\"275\" x2=\"630\" y2=\"275\" stroke=\"#64748B\" stroke-width=\"2\"/>\n    <line x1=\"590\" y1=\"285\" x2=\"630\" y2=\"285\" stroke=\"#64748B\" stroke-width=\"2\"/>\n    <line x1=\"590\" y1=\"295\" x2=\"620\" y2=\"295\" stroke=\"#64748B\" stroke-width=\"2\"/>\n    <!-- Folders leaning on shelf 3 -->\n    <polygon points=\"655,310 670,250 685,250 670,310\" fill=\"#3B82F6\" stroke=\"#1D4ED8\" stroke-width=\"1.5\"/>\n    <polygon points=\"670,310 685,250 700,250 685,310\" fill=\"#EF4444\" stroke=\"#B91C1C\" stroke-width=\"1.5\"/>\n  </g>\n\n  <!-- Boxes Stacked on the Floor (Right foreground) -->\n  <g id=\"s3-floor-boxes\">\n    <!-- Box 1 on Floor -->\n    <rect x=\"610\" y=\"380\" width=\"90\" height=\"70\" rx=\"3\" fill=\"url(#s3-box)\" stroke=\"#78350F\" stroke-width=\"2\" filter=\"url(#s3-shadow)\"/>\n    <rect x=\"607\" y=\"375\" width=\"96\" height=\"14\" rx=\"2\" fill=\"#D97706\" stroke=\"#78350F\" stroke-width=\"1.5\"/>\n    <ellipse cx=\"655\" cy=\"415\" rx=\"11\" ry=\"5\" fill=\"#78350F\"/>\n    <rect x=\"630\" y=\"395\" width=\"50\" height=\"14\" rx=\"1\" fill=\"#FFFFFF\"/>\n    <text x=\"635\" y=\"405\" font-size=\"8\" font-weight=\"bold\" fill=\"#1E293B\" font-family=\"sans-serif\">PROJECTS</text>\n\n    <!-- Shipping Tape lines -->\n    <line x1=\"610\" y1=\"410\" x2=\"700\" y2=\"410\" stroke=\"#CA8A04\" stroke-width=\"3\" opacity=\"0.6\"/>\n  </g>\n</svg>",
        "hotspots": [
          {
            "id": "hs-cabinet",
            "x": 42,
            "y": 48,
            "wordId": "kw-cabinet",
            "label": "Filing cabinet"
          },
          {
            "id": "hs-drawer",
            "x": 42,
            "y": 58,
            "wordId": "kw-drawer",
            "label": "Open drawer"
          },
          {
            "id": "hs-folder",
            "x": 42,
            "y": 45,
            "wordId": "kw-folder",
            "label": "File folders"
          },
          {
            "id": "hs-shelf",
            "x": 83,
            "y": 42,
            "wordId": "kw-shelf",
            "label": "Storage shelf"
          },
          {
            "id": "hs-reach",
            "x": 48,
            "y": 50,
            "wordId": "kw-reach",
            "label": "Reach into drawer"
          },
          {
            "id": "hs-box",
            "x": 82,
            "y": 80,
            "wordId": "kw-box",
            "label": "Archive box"
          },
          {
            "id": "hs-sort",
            "x": 56,
            "y": 42,
            "wordId": "kw-sort",
            "label": "Sort documents"
          }
        ],
        "keywords": [
          {
            "id": "kw-cabinet",
            "word": "Cabinet",
            "pos": "n",
            "ipa": "/ˈkæb.ɪ.nət/",
            "vi": "Tủ có ngăn kéo (tủ tài liệu văn phòng)",
            "example": "A row of filing cabinets stands against the wall.",
            "collocations": [
              "filing cabinet",
              "storage cabinet",
              "cabinet drawer"
            ]
          },
          {
            "id": "kw-drawer",
            "word": "Drawer",
            "pos": "n",
            "ipa": "/drɔːr/",
            "vi": "Ngăn kéo bàn/tủ",
            "example": "One of the cabinet drawers is pulled open.",
            "collocations": [
              "open a drawer",
              "pull out a drawer",
              "top drawer",
              "bottom drawer"
            ]
          },
          {
            "id": "kw-folder",
            "word": "Folder",
            "pos": "n",
            "ipa": "/ˈfoʊl.dɚ/",
            "vi": "Bìa kẹp hồ sơ, cặp tài liệu",
            "example": "The worker is pulling a folder out of the file drawer.",
            "collocations": [
              "file folder",
              "hanging folder",
              "manila folder"
            ]
          },
          {
            "id": "kw-shelf",
            "word": "Shelf",
            "pos": "n",
            "ipa": "/ʃelf/",
            "vi": "Kệ, giá đỡ đồ (số nhiều: shelves)",
            "example": "Binders and storage boxes are arranged on the metal shelf.",
            "collocations": [
              "on the shelf",
              "fill a shelf",
              "top shelf",
              "store on shelves"
            ]
          },
          {
            "id": "kw-box",
            "word": "Box",
            "pos": "n",
            "ipa": "/bɑːks/",
            "vi": "Hộp, thùng carton đựng tài liệu",
            "example": "Several archive boxes are stacked neatly on the shelves.",
            "collocations": [
              "cardboard box",
              "archive box",
              "stack of boxes"
            ]
          },
          {
            "id": "kw-reach",
            "word": "Reach",
            "pos": "v",
            "ipa": "/riːtʃ/",
            "vi": "Vươn tay với lấy, thò tay vào",
            "example": "A man is reaching into a drawer to retrieve a file.",
            "collocations": [
              "reach into a drawer",
              "reach for an item",
              "reach up"
            ]
          },
          {
            "id": "kw-sort",
            "word": "Sort",
            "pos": "v",
            "ipa": "/sɔːrt/",
            "vi": "Phân loại, chọn lọc và sắp xếp",
            "example": "He is sorting through office documents.",
            "collocations": [
              "sort through files",
              "sort into categories",
              "sort documents"
            ]
          },
          {
            "id": "kw-organize",
            "word": "Organize",
            "pos": "v",
            "ipa": "/ˈɔːr.ɡə.naɪz/",
            "vi": "Tổ chức, sắp xếp ngăn nắp",
            "example": "The files have been organized alphabetically.",
            "collocations": [
              "organize paperwork",
              "organize files",
              "neatly organized"
            ]
          },
          {
            "id": "kw-stack",
            "word": "Stack",
            "pos": "v",
            "ipa": "/stæk/",
            "vi": "Xếp chồng lên nhau, chất đống gọn gàng",
            "example": "Storage containers are stacked in the storage room.",
            "collocations": [
              "stack boxes",
              "stacked on top of each other",
              "be stacked neatly"
            ]
          },
          {
            "id": "kw-store",
            "word": "Store",
            "pos": "v",
            "ipa": "/stɔːr/",
            "vi": "Lưu trữ, cất giữ trong kho/tủ",
            "example": "Old company records are stored in labeled cardboard boxes.",
            "collocations": [
              "store in a warehouse",
              "store files",
              "be stored safely"
            ]
          }
        ],
        "drill": {
          "question": "Listen to the four statements. Select the statement that best describes what you see in the picture.",
          "correct": "B",
          "options": [
            {
              "id": "A",
              "text": "The shelves are completely empty.",
              "vi": "Các kệ để đồ hoàn toàn trống rỗng.",
              "isCorrect": false,
              "trapType": "Bẫy chi tiết đối lập với tranh (Opposite Detail)",
              "explanation": "Trên kệ kim loại có rất nhiều bìa còng và thùng hồ sơ được xếp gọn gàng, hoàn toàn trái ngược với từ 'empty' (trống rỗng)."
            },
            {
              "id": "B",
              "text": "A man is reaching into an open drawer.",
              "vi": "Một người đàn ông đang vươn tay vào một ngăn kéo đang mở.",
              "isCorrect": true,
              "trapType": "Đáp án chuẩn xác (Direct Action)",
              "explanation": "Câu miêu tả chính xác 100% hành động của người đàn ông: đang thò tay vào ngăn kéo mở của tủ hồ sơ để tra cứu tài liệu (reaching into an open drawer)."
            },
            {
              "id": "C",
              "text": "The filing cabinet is being assembled by a worker.",
              "vi": "Chiếc tủ hồ sơ đang được một công nhân lắp ráp.",
              "isCorrect": false,
              "trapType": "Bẫy 'Being + V3' (Bẫy hành động đang diễn ra)",
              "explanation": "Cụm từ 'is being assembled' có nghĩa là chiếc tủ đang trong quá trình lắp ráp. Thực tế tủ đã hoàn thiện từ lâu và đang được sử dụng bình thường."
            },
            {
              "id": "D",
              "text": "He is carrying a ladder across the room.",
              "vi": "Anh ấy đang vác một chiếc thang đi ngang qua phòng.",
              "isCorrect": false,
              "trapType": "Bẫy vật thể không hề có trong tranh (Missing Object)",
              "explanation": "Trong toàn bộ căn phòng không hề có chiếc thang (ladder) nào và nhân vật cũng không hề mang vác thang."
            }
          ]
        },
        "describeChallenge": {
          "instructions": "Hãy mô tả hành động của người đàn ông và cách sắp xếp tủ hồ sơ/kệ tài liệu bằng 1 câu tiếng Anh hoàn chỉnh:",
          "targetKeywords": [
            "cabinet",
            "drawer",
            "folder",
            "reach",
            "shelf",
            "box",
            "sort"
          ],
          "modelAnswers": [
            {
              "en": "A man is reaching into an open drawer of a filing cabinet.",
              "vi": "Một người đàn ông đang thò tay vào ngăn kéo đang mở của một tủ đựng tài liệu.",
              "score": 100
            },
            {
              "en": "File folders and archive boxes are organized on the storage shelves.",
              "vi": "Các bìa hồ sơ và thùng lưu trữ được sắp xếp ngăn nắp trên các kệ để đồ.",
              "score": 95
            },
            {
              "en": "An employee is sorting through documents in a storage room.",
              "vi": "Một nhân viên đang phân loại tài liệu trong phòng lưu trữ văn thư.",
              "score": 95
            }
          ]
        }
      }
    ]
  },
  {
    "id": "retail-dining",
    "title": "Cửa hàng, Siêu thị & Nhà hàng (Retail & Dining)",
    "desc": "Các bối cảnh mua sắm tại siêu thị, thanh toán tại quầy thu ngân và dùng bữa tại nhà hàng. Rèn luyện kỹ năng phân biệt hành động chọn đồ, bưng bê, thanh toán và bẫy Being V3 khi sắp xếp hàng hóa.",
    "icon": "🛒",
    "scenes": [
      {
        "id": "scene-supermarket",
        "title": "Tranh 1: Siêu thị & Quầy hàng",
        "titleEn": "Supermarket Aisle & Shelves",
        "desc": "Khách hàng đẩy xe hàng trong lối đi siêu thị, với tay chọn sản phẩm trên kệ hàng xếp tầng.",
        "svg": "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" class=\"part1-svg-art\">\n  <defs>\n    <linearGradient id=\"t2-ceiling\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#334155\"/>\n      <stop offset=\"100%\" stop-color=\"#1E293B\"/>\n    </linearGradient>\n    <linearGradient id=\"t2-floor\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#E2E8F0\"/>\n      <stop offset=\"50%\" stop-color=\"#F1F5F9\"/>\n      <stop offset=\"100%\" stop-color=\"#CBD5E1\"/>\n    </linearGradient>\n    <linearGradient id=\"t2-shelf-metal\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#64748B\"/>\n      <stop offset=\"50%\" stop-color=\"#94A3B8\"/>\n      <stop offset=\"100%\" stop-color=\"#475569\"/>\n    </linearGradient>\n    <linearGradient id=\"t2-glow\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#FFFFFF\" stop-opacity=\"0.6\"/>\n      <stop offset=\"100%\" stop-color=\"#FFFFFF\" stop-opacity=\"0\"/>\n    </linearGradient>\n    <filter id=\"t2-shadow\" x=\"-5%\" y=\"-5%\" width=\"110%\" height=\"115%\">\n      <feDropShadow dx=\"0\" dy=\"5\" stdDeviation=\"5\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n\n  <!-- Ceiling & Overhead Fluorescent Lights -->\n  <rect x=\"0\" y=\"0\" width=\"800\" height=\"120\" fill=\"url(#t2-ceiling)\"/>\n  <!-- Receding fluorescent light fixtures -->\n  <polygon points=\"320,10 480,10 440,70 360,70\" fill=\"#F8FAFC\" opacity=\"0.95\"/>\n  <polygon points=\"120,15 260,15 220,65 100,65\" fill=\"#E2E8F0\" opacity=\"0.8\"/>\n  <polygon points=\"540,15 680,15 700,65 580,65\" fill=\"#E2E8F0\" opacity=\"0.8\"/>\n  <!-- Light glow cones -->\n  <polygon points=\"360,70 440,70 540,320 260,320\" fill=\"url(#t2-glow)\" opacity=\"0.25\"/>\n\n  <!-- Back Wall & Distant Refrigerated Section -->\n  <rect x=\"0\" y=\"90\" width=\"800\" height=\"180\" fill=\"#94A3B8\"/>\n  <!-- Refrigerated display coolers on distant wall -->\n  <rect x=\"180\" y=\"100\" width=\"160\" height=\"140\" fill=\"#0EA5E9\" opacity=\"0.85\" rx=\"3\" stroke=\"#0369A1\" stroke-width=\"2\"/>\n  <line x1=\"260\" y1=\"100\" x2=\"260\" y2=\"240\" stroke=\"#FFFFFF\" stroke-width=\"2\"/>\n  <rect x=\"190\" y=\"115\" width=\"60\" height=\"25\" fill=\"#E0F2FE\" rx=\"2\"/>\n  <rect x=\"190\" y=\"150\" width=\"60\" height=\"25\" fill=\"#BAE6FD\" rx=\"2\"/>\n  <rect x=\"190\" y=\"185\" width=\"60\" height=\"25\" fill=\"#7DD3FC\" rx=\"2\"/>\n  <rect x=\"270\" y=\"115\" width=\"60\" height=\"25\" fill=\"#E0F2FE\" rx=\"2\"/>\n  <rect x=\"270\" y=\"150\" width=\"60\" height=\"25\" fill=\"#BAE6FD\" rx=\"2\"/>\n  <rect x=\"270\" y=\"185\" width=\"60\" height=\"25\" fill=\"#7DD3FC\" rx=\"2\"/>\n\n  <!-- Supermarket Polished Floor -->\n  <polygon points=\"0,240 800,240 800,500 0,500\" fill=\"url(#t2-floor)\"/>\n  <!-- Perspective Floor Tiles / Tile Lines -->\n  <line x1=\"400\" y1=\"240\" x2=\"150\" y2=\"500\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <line x1=\"400\" y1=\"240\" x2=\"400\" y2=\"500\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <line x1=\"400\" y1=\"240\" x2=\"650\" y2=\"500\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <line x1=\"120\" y1=\"340\" x2=\"680\" y2=\"340\" stroke=\"#CBD5E1\" stroke-width=\"1\"/>\n  <line x1=\"60\" y1=\"410\" x2=\"740\" y2=\"410\" stroke=\"#CBD5E1\" stroke-width=\"1.2\"/>\n\n  <!-- Left Side Shelving Unit (Receding Aisle) -->\n  <g id=\"t2-left-shelf\">\n    <polygon points=\"0,70 160,130 160,420 0,470\" fill=\"url(#t2-shelf-metal)\"/>\n    <!-- Shelf Levels -->\n    <polygon points=\"0,170 160,200 160,215 0,185\" fill=\"#475569\"/>\n    <polygon points=\"0,240 160,265 160,280 0,255\" fill=\"#475569\"/>\n    <polygon points=\"0,310 160,330 160,345 0,325\" fill=\"#475569\"/>\n    <polygon points=\"0,380 160,395 160,410 0,395\" fill=\"#475569\"/>\n    <!-- Boxes & Cereals on Left Shelves -->\n    <rect x=\"20\" y=\"135\" width=\"22\" height=\"30\" fill=\"#EF4444\" rx=\"2\"/>\n    <rect x=\"46\" y=\"140\" width=\"22\" height=\"28\" fill=\"#F59E0B\" rx=\"2\"/>\n    <rect x=\"72\" y=\"145\" width=\"22\" height=\"26\" fill=\"#10B981\" rx=\"2\"/>\n    <rect x=\"98\" y=\"152\" width=\"20\" height=\"22\" fill=\"#3B82F6\" rx=\"2\"/>\n    <rect x=\"122\" y=\"158\" width=\"18\" height=\"20\" fill=\"#8B5CF6\" rx=\"2\"/>\n    <!-- Cans on second shelf -->\n    <ellipse cx=\"30\" cy=\"225\" rx=\"8\" ry=\"4\" fill=\"#94A3B8\"/>\n    <rect x=\"22\" y=\"225\" width=\"16\" height=\"22\" fill=\"#E2E8F0\" rx=\"2\"/>\n    <ellipse cx=\"50\" cy=\"230\" rx=\"8\" ry=\"4\" fill=\"#94A3B8\"/>\n    <rect x=\"42\" y=\"230\" width=\"16\" height=\"22\" fill=\"#FEF08A\" rx=\"2\"/>\n    <ellipse cx=\"70\" cy=\"235\" rx=\"8\" ry=\"4\" fill=\"#94A3B8\"/>\n    <rect x=\"62\" y=\"235\" width=\"16\" height=\"22\" fill=\"#BBF7D0\" rx=\"2\"/>\n    <ellipse cx=\"90\" cy=\"240\" rx=\"8\" ry=\"4\" fill=\"#94A3B8\"/>\n    <rect x=\"82\" y=\"240\" width=\"16\" height=\"22\" fill=\"#FBCFE8\" rx=\"2\"/>\n  </g>\n\n  <!-- Right Side Shelving Unit (Prominent, with Stocked Jars & Bottles) -->\n  <g id=\"t2-right-shelf\" filter=\"url(#t2-shadow)\">\n    <polygon points=\"800,60 560,130 560,450 800,490\" fill=\"url(#t2-shelf-metal)\"/>\n    <!-- Shelf 1 (Top) -->\n    <polygon points=\"560,185 800,140 800,158 560,202\" fill=\"#334155\"/>\n    <line x1=\"560\" y1=\"202\" x2=\"800\" y2=\"158\" stroke=\"#EF4444\" stroke-width=\"3\"/> <!-- Price tag rail -->\n    <!-- Shelf 2 (Eye level) -->\n    <polygon points=\"560,250 800,220 800,238 560,268\" fill=\"#334155\"/>\n    <line x1=\"560\" y1=\"268\" x2=\"800\" y2=\"238\" stroke=\"#F59E0B\" stroke-width=\"3\"/>\n    <!-- Shelf 3 (Waist level) -->\n    <polygon points=\"560,320 800,305 800,322 560,338\" fill=\"#334155\"/>\n    <line x1=\"560\" y1=\"338\" x2=\"800\" y2=\"322\" stroke=\"#10B981\" stroke-width=\"3\"/>\n    <!-- Shelf 4 (Bottom) -->\n    <polygon points=\"560,395 800,395 800,412 560,412\" fill=\"#334155\"/>\n    <line x1=\"560\" y1=\"412\" x2=\"800\" y2=\"412\" stroke=\"#3B82F6\" stroke-width=\"3\"/>\n\n    <!-- Glass Jars on Shelf 2 (Eye level) -->\n    <!-- Jar 1 -->\n    <rect x=\"580\" y=\"210\" width=\"16\" height=\"36\" fill=\"#FDE047\" opacity=\"0.9\" rx=\"3\" stroke=\"#CA8A04\" stroke-width=\"1\"/>\n    <rect x=\"582\" y=\"206\" width=\"12\" height=\"5\" fill=\"#DC2626\" rx=\"1\"/>\n    <!-- Jar 2 -->\n    <rect x=\"604\" y=\"205\" width=\"17\" height=\"38\" fill=\"#F87171\" opacity=\"0.9\" rx=\"3\" stroke=\"#DC2626\" stroke-width=\"1\"/>\n    <rect x=\"606.5\" y=\"201\" width=\"12\" height=\"5\" fill=\"#475569\" rx=\"1\"/>\n    <!-- Jar 3 -->\n    <rect x=\"629\" y=\"200\" width=\"18\" height=\"40\" fill=\"#4ADE80\" opacity=\"0.9\" rx=\"3\" stroke=\"#16A34A\" stroke-width=\"1\"/>\n    <rect x=\"632\" y=\"196\" width=\"12\" height=\"5\" fill=\"#CA8A04\" rx=\"1\"/>\n    <!-- Jar 4 -->\n    <rect x=\"655\" y=\"194\" width=\"20\" height=\"42\" fill=\"#FB923C\" opacity=\"0.9\" rx=\"3\" stroke=\"#EA580C\" stroke-width=\"1\"/>\n    <rect x=\"658\" y=\"190\" width=\"14\" height=\"5\" fill=\"#1E293B\" rx=\"1\"/>\n    <!-- Bottles Row on Shelf 3 -->\n    <rect x=\"580\" y=\"275\" width=\"14\" height=\"42\" fill=\"#38BDF8\" rx=\"2\" stroke=\"#0284C7\" stroke-width=\"1\"/>\n    <rect x=\"583\" y=\"267\" width=\"8\" height=\"9\" fill=\"#0284C7\"/>\n    <rect x=\"602\" y=\"272\" width=\"15\" height=\"44\" fill=\"#818CF8\" rx=\"2\" stroke=\"#4F46E5\" stroke-width=\"1\"/>\n    <rect x=\"605.5\" y=\"264\" width=\"8\" height=\"9\" fill=\"#4F46E5\"/>\n    <rect x=\"625\" y=\"268\" width=\"16\" height=\"48\" fill=\"#F472B6\" rx=\"2\" stroke=\"#DB2777\" stroke-width=\"1\"/>\n    <rect x=\"629\" y=\"260\" width=\"8\" height=\"9\" fill=\"#DB2777\"/>\n    <rect x=\"649\" y=\"265\" width=\"18\" height=\"50\" fill=\"#34D399\" rx=\"2\" stroke=\"#059669\" stroke-width=\"1\"/>\n    <rect x=\"653\" y=\"257\" width=\"10\" height=\"9\" fill=\"#059669\"/>\n    <rect x=\"675\" y=\"260\" width=\"20\" height=\"53\" fill=\"#FBBF24\" rx=\"2\" stroke=\"#D97706\" stroke-width=\"1\"/>\n    <rect x=\"680\" y=\"252\" width=\"10\" height=\"9\" fill=\"#D97706\"/>\n\n    <!-- Bottom Shelf Large Boxes / Detergents -->\n    <rect x=\"580\" y=\"348\" width=\"30\" height=\"45\" fill=\"#E11D48\" rx=\"2\"/>\n    <rect x=\"618\" y=\"345\" width=\"35\" height=\"48\" fill=\"#2563EB\" rx=\"2\"/>\n    <rect x=\"660\" y=\"342\" width=\"38\" height=\"50\" fill=\"#16A34A\" rx=\"2\"/>\n    <rect x=\"706\" y=\"338\" width=\"42\" height=\"54\" fill=\"#D97706\" rx=\"2\"/>\n  </g>\n\n  <!-- Distant Shopper Browsing (Background) -->\n  <g id=\"t2-background-person\" opacity=\"0.8\">\n    <ellipse cx=\"360\" cy=\"195\" rx=\"8\" ry=\"9\" fill=\"#FBCFE8\"/>\n    <path d=\"M354 190 C354 182, 366 182, 366 190 Z\" fill=\"#374151\"/>\n    <rect x=\"352\" y=\"204\" width=\"16\" height=\"32\" rx=\"3\" fill=\"#059669\"/>\n    <line x1=\"356\" y1=\"236\" x2=\"356\" y2=\"260\" stroke=\"#1F2937\" stroke-width=\"3\"/>\n    <line x1=\"364\" y1=\"236\" x2=\"364\" y2=\"260\" stroke=\"#1F2937\" stroke-width=\"3\"/>\n  </g>\n\n  <!-- Foreground Shopper (Customer with Shopping Cart, Reaching for Shelf) -->\n  <g id=\"t2-customer\">\n    <!-- Legs & Shoes -->\n    <line x1=\"425\" y1=\"365\" x2=\"422\" y2=\"445\" stroke=\"#1E293B\" stroke-width=\"11\" stroke-linecap=\"round\"/>\n    <line x1=\"445\" y1=\"365\" x2=\"455\" y2=\"440\" stroke=\"#1E293B\" stroke-width=\"11\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"420\" cy=\"450\" rx=\"12\" ry=\"5\" fill=\"#475569\"/>\n    <ellipse cx=\"458\" cy=\"445\" rx=\"12\" ry=\"5\" fill=\"#475569\"/>\n\n    <!-- Torso / Jacket (Beige/Yellow Trench or Jacket) -->\n    <path d=\"M410 260 C410 240, 460 240, 460 260 L455 365 L415 365 Z\" fill=\"#D97706\" stroke=\"#92400E\" stroke-width=\"2\"/>\n    <!-- Head & Hair -->\n    <ellipse cx=\"435\" cy=\"210\" rx=\"16\" ry=\"19\" fill=\"#FBCFE8\"/>\n    <path d=\"M420 208 C420 185, 452 185, 452 208 C452 215, 448 225, 442 228 C432 222, 422 220, 420 208 Z\" fill=\"#78350F\"/>\n    <circle cx=\"450\" cy=\"205\" r=\"9\" fill=\"#78350F\"/> <!-- Ponytail/bun -->\n\n    <!-- Left Arm Pushing Cart Handle -->\n    <path d=\"M418 260 Q395 285 365 305\" fill=\"none\" stroke=\"#D97706\" stroke-width=\"9\" stroke-linecap=\"round\"/>\n    <circle cx=\"362\" cy=\"307\" r=\"6\" fill=\"#FBCFE8\"/>\n\n    <!-- Right Arm Reaching For Shelf (Direct Part 1 Action) -->\n    <path d=\"M450 255 Q510 235 568 220\" fill=\"none\" stroke=\"#D97706\" stroke-width=\"9\" stroke-linecap=\"round\"/>\n    <path d=\"M565 218 L578 214 L576 225 Z\" fill=\"#FBCFE8\"/> <!-- Reaching hand -->\n  </g>\n\n  <!-- Metal Grocery Shopping Cart -->\n  <g id=\"t2-cart\" filter=\"url(#t2-shadow)\">\n    <!-- Cart Wheels & Legs -->\n    <circle cx=\"280\" cy=\"445\" r=\"8\" fill=\"#334155\"/>\n    <circle cx=\"280\" cy=\"445\" r=\"3\" fill=\"#CBD5E1\"/>\n    <circle cx=\"370\" cy=\"445\" r=\"8\" fill=\"#334155\"/>\n    <circle cx=\"370\" cy=\"445\" r=\"3\" fill=\"#CBD5E1\"/>\n    <!-- Wheel struts -->\n    <line x1=\"280\" y1=\"440\" x2=\"295\" y2=\"400\" stroke=\"#64748B\" stroke-width=\"4\"/>\n    <line x1=\"370\" y1=\"440\" x2=\"355\" y2=\"400\" stroke=\"#64748B\" stroke-width=\"4\"/>\n    <line x1=\"275\" y1=\"400\" x2=\"375\" y2=\"400\" stroke=\"#64748B\" stroke-width=\"4\"/>\n    <!-- Bottom tray of cart -->\n    <line x1=\"285\" y1=\"405\" x2=\"365\" y2=\"405\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n\n    <!-- Cart Basket (Grid mesh wire) -->\n    <polygon points=\"265,340 375,325 360,400 280,400\" fill=\"#E2E8F0\" opacity=\"0.3\" stroke=\"#475569\" stroke-width=\"3\"/>\n    <!-- Wire grid lines -->\n    <line x1=\"270\" y1=\"355\" x2=\"370\" y2=\"340\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n    <line x1=\"274\" y1=\"370\" x2=\"366\" y2=\"358\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n    <line x1=\"278\" y1=\"385\" x2=\"363\" y2=\"376\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n    <line x1=\"290\" y1=\"340\" x2=\"295\" y2=\"400\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n    <line x1=\"310\" y1=\"337\" x2=\"315\" y2=\"400\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n    <line x1=\"330\" y1=\"333\" x2=\"333\" y2=\"400\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n    <line x1=\"350\" y1=\"329\" x2=\"350\" y2=\"400\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n\n    <!-- Red Plastic Handle -->\n    <line x1=\"370\" y1=\"325\" x2=\"360\" y2=\"305\" stroke=\"#64748B\" stroke-width=\"4\"/>\n    <circle cx=\"360\" cy=\"305\" r=\"6\" fill=\"#DC2626\"/>\n\n    <!-- Groceries inside Cart Basket -->\n    <rect x=\"290\" y=\"345\" width=\"22\" height=\"26\" fill=\"#10B981\" rx=\"3\"/> <!-- Cereal/green box -->\n    <ellipse cx=\"325\" cy=\"355\" rx=\"8\" ry=\"10\" fill=\"#EA580C\"/> <!-- Orange / Fruit -->\n    <rect x=\"335\" y=\"340\" width=\"16\" height=\"32\" fill=\"#3B82F6\" rx=\"2\"/> <!-- Milk carton -->\n    <ellipse cx=\"308\" cy=\"360\" rx=\"9\" ry=\"8\" fill=\"#EAB308\"/> <!-- Yellow squash/fruit -->\n  </g>\n\n  <!-- Hanging Aisle Number Sign (Center Ceiling) -->\n  <g id=\"t2-aisle-sign\">\n    <line x1=\"385\" y1=\"65\" x2=\"385\" y2=\"105\" stroke=\"#64748B\" stroke-width=\"2\"/>\n    <line x1=\"415\" y1=\"65\" x2=\"415\" y2=\"105\" stroke=\"#64748B\" stroke-width=\"2\"/>\n    <rect x=\"370\" y=\"105\" width=\"60\" height=\"32\" rx=\"4\" fill=\"#1E3A8A\" stroke=\"#FFFFFF\" stroke-width=\"2\"/>\n    <text x=\"400\" y=\"127\" font-size=\"16\" font-family=\"Arial, sans-serif\" font-weight=\"bold\" fill=\"#FFFFFF\" text-anchor=\"middle\">04</text>\n  </g>\n</svg>",
        "hotspots": [
          {
            "id": "hs-t2-cart",
            "x": 40,
            "y": 74,
            "wordId": "kw-cart",
            "label": "Shopping cart"
          },
          {
            "id": "hs-t2-reach",
            "x": 67,
            "y": 45,
            "wordId": "kw-reach",
            "label": "Reach for an item"
          },
          {
            "id": "hs-t2-shelf",
            "x": 82,
            "y": 50,
            "wordId": "kw-shelf",
            "label": "Supermarket shelf"
          },
          {
            "id": "hs-t2-aisle",
            "x": 48,
            "y": 88,
            "wordId": "kw-aisle",
            "label": "Grocery aisle"
          },
          {
            "id": "hs-t2-merchandise",
            "x": 78,
            "y": 42,
            "wordId": "kw-merchandise",
            "label": "Merchandise"
          },
          {
            "id": "hs-t2-jar",
            "x": 76,
            "y": 44,
            "wordId": "kw-jar",
            "label": "Glass jars"
          },
          {
            "id": "hs-t2-bottle",
            "x": 79,
            "y": 58,
            "wordId": "kw-bottle",
            "label": "Beverage bottles"
          },
          {
            "id": "hs-t2-browse",
            "x": 52,
            "y": 52,
            "wordId": "kw-browse",
            "label": "Browse items"
          }
        ],
        "keywords": [
          {
            "id": "kw-cart",
            "word": "Cart",
            "pos": "n",
            "ipa": "/kɑːrt/",
            "vi": "Xe đẩy mua hàng trong siêu thị",
            "example": "A customer is pushing a shopping cart down the aisle.",
            "collocations": [
              "shopping cart",
              "push a cart",
              "fill a cart",
              "grocery cart"
            ]
          },
          {
            "id": "kw-shelf",
            "word": "Shelf",
            "pos": "n",
            "ipa": "/ʃelf/",
            "vi": "Kệ hàng, giá để đồ",
            "example": "Products are neatly arranged on the store shelves.",
            "collocations": [
              "on the shelf",
              "store shelves",
              "stock a shelf",
              "top shelf"
            ]
          },
          {
            "id": "kw-reach",
            "word": "Reach",
            "pos": "v",
            "ipa": "/riːtʃ/",
            "vi": "Với tay, vươn tay lấy đồ",
            "example": "A woman is reaching for an item on the display shelf.",
            "collocations": [
              "reach for an item",
              "reach into a drawer",
              "reach across the table"
            ]
          },
          {
            "id": "kw-aisle",
            "word": "Aisle",
            "pos": "n",
            "ipa": "/aɪl/",
            "vi": "Lối đi giữa các dãy kệ hàng",
            "example": "A shopper is walking along a supermarket aisle.",
            "collocations": [
              "supermarket aisle",
              "walk down the aisle",
              "clear an aisle"
            ]
          },
          {
            "id": "kw-merchandise",
            "word": "Merchandise",
            "pos": "n",
            "ipa": "/ˈmɜːr.tʃən.daɪs/",
            "vi": "Hàng hóa bày bán",
            "example": "A variety of merchandise is displayed for sale.",
            "collocations": [
              "display merchandise",
              "inspect merchandise",
              "stock of merchandise"
            ]
          },
          {
            "id": "kw-browse",
            "word": "Browse",
            "pos": "v",
            "ipa": "/braʊz/",
            "vi": "Xem lướt, ngắm chọn hàng",
            "example": "Customers are browsing items in the grocery store.",
            "collocations": [
              "browse through items",
              "browse in a shop",
              "browse the shelves"
            ]
          },
          {
            "id": "kw-item",
            "word": "Item",
            "pos": "n",
            "ipa": "/ˈaɪ.təm/",
            "vi": "Mặt hàng, món đồ",
            "example": "Several grocery items have been placed in the basket.",
            "collocations": [
              "select an item",
              "item of merchandise",
              "grocery item"
            ]
          },
          {
            "id": "kw-jar",
            "word": "Jar",
            "pos": "n",
            "ipa": "/dʒɑːr/",
            "vi": "Lọ, hũ thủy tinh",
            "example": "Glass jars filled with spices are lined up on the shelf.",
            "collocations": [
              "glass jar",
              "jar of jam",
              "open a jar"
            ]
          },
          {
            "id": "kw-bottle",
            "word": "Bottle",
            "pos": "n",
            "ipa": "/ˈbɑː.təl/",
            "vi": "Chai lọ",
            "example": "Bottles of juice are stacked on the lower shelf.",
            "collocations": [
              "bottle of water",
              "plastic bottle",
              "row of bottles"
            ]
          },
          {
            "id": "kw-stock",
            "word": "Stock",
            "pos": "v",
            "ipa": "/stɑːk/",
            "vi": "Xếp hàng lên kệ, trữ hàng",
            "example": "The shelves are fully stocked with food items.",
            "collocations": [
              "stocked with goods",
              "stock shelves",
              "out of stock"
            ]
          }
        ],
        "drill": {
          "question": "Listen to the four statements. Select the statement that best describes what you see in the picture.",
          "correct": "B",
          "options": [
            {
              "id": "A",
              "text": "A shopping cart is being pushed into an elevator.",
              "vi": "Một chiếc xe đẩy đang được đẩy vào thang máy.",
              "isCorrect": false,
              "trapType": "Bẫy 'Being + V3' (Hành động đang diễn ra sai bối cảnh)",
              "explanation": "Trong tranh không hề có thang máy (elevator) và xe đẩy đang ở giữa lối đi siêu thị chứ không hề được đẩy vào thang máy."
            },
            {
              "id": "B",
              "text": "A customer is reaching for an item on a shelf.",
              "vi": "Một khách hàng đang với tay lấy một món đồ trên kệ.",
              "isCorrect": true,
              "trapType": "Đáp án chuẩn xác (Direct Action)",
              "explanation": "Miêu tả chính xác 100% cánh tay phải của người phụ nữ đang vươn lên kệ hàng để lấy món đồ (reaching for an item on a shelf)."
            },
            {
              "id": "C",
              "text": "The store shelves are completely empty of merchandise.",
              "vi": "Các kệ hàng trong tiệm hoàn toàn trống rỗng không có hàng hóa.",
              "isCorrect": false,
              "trapType": "Bẫy chi tiết đối lập (Opposite Detail)",
              "explanation": "Các kệ để hàng bên phải và bên trái đều xếp đầy các hũ, chai lọ và hộp sản phẩm, đối lập hoàn toàn với từ 'empty'."
            },
            {
              "id": "D",
              "text": "A cashier is counting money at a checkout counter.",
              "vi": "Một nhân viên thu ngân đang đếm tiền tại quầy thanh toán.",
              "isCorrect": false,
              "trapType": "Bẫy nhân vật và địa điểm không có trong tranh (Wrong Subject/Setting)",
              "explanation": "Khung cảnh là lối đi hàng hóa (grocery aisle), không hề có quầy thu ngân (checkout counter) hay nhân viên thu ngân nào ở đây."
            }
          ]
        },
        "describeChallenge": {
          "instructions": "Hãy mô tả hành động của người khách mua hàng và tình trạng kệ hàng bằng 1 câu tiếng Anh hoàn chỉnh:",
          "targetKeywords": [
            "cart",
            "shelf",
            "reach",
            "item",
            "aisle",
            "merchandise",
            "browse"
          ],
          "modelAnswers": [
            {
              "en": "A customer is reaching for an item on a supermarket shelf.",
              "vi": "Một khách hàng đang vươn tay lấy một món đồ trên kệ siêu thị.",
              "score": 100
            },
            {
              "en": "A woman is pushing a shopping cart down the grocery aisle.",
              "vi": "Một người phụ nữ đang đẩy xe hàng dọc theo lối đi tạp hóa.",
              "score": 95
            },
            {
              "en": "Various jars and merchandise are neatly arranged on the shelves.",
              "vi": "Nhiều lọ thủy tinh và hàng hóa được sắp xếp ngăn nắp trên các kệ.",
              "score": 95
            }
          ]
        }
      },
      {
        "id": "scene-checkout",
        "title": "Tranh 2: Quầy thu ngân & Quán cà phê",
        "titleEn": "Checkout Counter & Café",
        "desc": "Khách hàng đứng trước quầy thanh toán, nhân viên thu ngân thao tác máy tính tiền và phục vụ đồ uống trên khay.",
        "svg": "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" class=\"part1-svg-art\">\n  <defs>\n    <linearGradient id=\"t2c-wall\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#F1F5F9\"/>\n      <stop offset=\"100%\" stop-color=\"#E2E8F0\"/>\n    </linearGradient>\n    <linearGradient id=\"t2c-wood\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#B45309\"/>\n      <stop offset=\"100%\" stop-color=\"#78350F\"/>\n    </linearGradient>\n    <linearGradient id=\"t2c-counter\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#334155\"/>\n      <stop offset=\"50%\" stop-color=\"#1E293B\"/>\n      <stop offset=\"100%\" stop-color=\"#0F172A\"/>\n    </linearGradient>\n    <filter id=\"t2c-shadow\" x=\"-5%\" y=\"-5%\" width=\"110%\" height=\"115%\">\n      <feDropShadow dx=\"0\" dy=\"5\" stdDeviation=\"5\" flood-opacity=\"0.16\"/>\n    </filter>\n  </defs>\n\n  <!-- Wall Background -->\n  <rect x=\"0\" y=\"0\" width=\"800\" height=\"500\" fill=\"url(#t2c-wall)\"/>\n\n  <!-- Back Wall Menu Board & Shelves -->\n  <rect x=\"220\" y=\"30\" width=\"260\" height=\"90\" rx=\"4\" fill=\"#0F172A\" stroke=\"#334155\" stroke-width=\"4\"/>\n  <text x=\"350\" y=\"58\" font-size=\"14\" font-family=\"Arial, sans-serif\" font-weight=\"bold\" fill=\"#F59E0B\" text-anchor=\"middle\">CAFÉ & BEVERAGES</text>\n  <line x1=\"240\" y1=\"68\" x2=\"460\" y2=\"68\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <text x=\"250\" y=\"86\" font-size=\"11\" font-family=\"Arial, sans-serif\" fill=\"#E2E8F0\">Espresso / Latte ......... $4.50</text>\n  <text x=\"250\" y=\"104\" font-size=\"11\" font-family=\"Arial, sans-serif\" fill=\"#E2E8F0\">Pastry & Cake ............ $3.75</text>\n  <text x=\"375\" y=\"86\" font-size=\"11\" font-family=\"Arial, sans-serif\" fill=\"#E2E8F0\">Cold Beverage .......... $4.00</text>\n  <text x=\"375\" y=\"104\" font-size=\"11\" font-family=\"Arial, sans-serif\" fill=\"#E2E8F0\">Hot Tea .................... $3.25</text>\n\n  <!-- Back Espresso Machine & Coffee Cups Shelf -->\n  <rect x=\"180\" y=\"145\" width=\"200\" height=\"15\" fill=\"#475569\" rx=\"2\"/>\n  <rect x=\"200\" y=\"125\" width=\"12\" height=\"20\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1\" rx=\"2\"/>\n  <rect x=\"220\" y=\"125\" width=\"12\" height=\"20\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1\" rx=\"2\"/>\n  <rect x=\"240\" y=\"125\" width=\"12\" height=\"20\" fill=\"#38BDF8\" stroke=\"#0284C7\" stroke-width=\"1\" rx=\"2\"/>\n  <rect x=\"260\" y=\"125\" width=\"12\" height=\"20\" fill=\"#F472B6\" stroke=\"#DB2777\" stroke-width=\"1\" rx=\"2\"/>\n\n  <!-- Espresso Machine -->\n  <rect x=\"190\" y=\"180\" width=\"85\" height=\"75\" rx=\"3\" fill=\"#64748B\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <rect x=\"200\" y=\"190\" width=\"30\" height=\"25\" fill=\"#0F172A\"/>\n  <circle cx=\"215\" cy=\"202\" r=\"5\" fill=\"#EF4444\"/>\n  <rect x=\"240\" y=\"190\" width=\"25\" height=\"12\" fill=\"#E2E8F0\"/>\n  <line x1=\"205\" y1=\"225\" x2=\"205\" y2=\"245\" stroke=\"#E2E8F0\" stroke-width=\"4\"/>\n  <line x1=\"225\" y1=\"225\" x2=\"225\" y2=\"245\" stroke=\"#E2E8F0\" stroke-width=\"4\"/>\n\n  <!-- Left Side: Table being wiped by staff (Background action) -->\n  <g id=\"t2c-cleaner\">\n    <!-- Café small round table -->\n    <ellipse cx=\"100\" cy=\"350\" rx=\"45\" ry=\"16\" fill=\"#D97706\" stroke=\"#92400E\" stroke-width=\"2\"/>\n    <line x1=\"100\" y1=\"365\" x2=\"100\" y2=\"430\" stroke=\"#475569\" stroke-width=\"6\"/>\n    <ellipse cx=\"100\" cy=\"430\" rx=\"30\" ry=\"8\" fill=\"#334155\"/>\n    <!-- Staff wiping table with cloth -->\n    <ellipse cx=\"120\" cy=\"240\" rx=\"14\" ry=\"16\" fill=\"#FBCFE8\"/>\n    <path d=\"M110 235 C110 220, 134 220, 134 235 Z\" fill=\"#1E293B\"/>\n    <!-- Apron & Body -->\n    <path d=\"M105 258 C105 250, 135 250, 135 258 L138 340 L102 340 Z\" fill=\"#047857\"/>\n    <line x1=\"110\" y1=\"340\" x2=\"105\" y2=\"410\" stroke=\"#1E293B\" stroke-width=\"7\"/>\n    <line x1=\"130\" y1=\"340\" x2=\"135\" y2=\"410\" stroke=\"#1E293B\" stroke-width=\"7\"/>\n    <!-- Arm bending down to wipe table -->\n    <path d=\"M125 270 Q115 310 95 344\" fill=\"none\" stroke=\"#047857\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"92\" cy=\"346\" rx=\"8\" ry=\"5\" fill=\"#FBCFE8\"/>\n    <!-- White wiping cloth -->\n    <polygon points=\"85,342 98,340 102,352 88,354\" fill=\"#FFFFFF\" stroke=\"#E2E8F0\" stroke-width=\"1\"/>\n  </g>\n\n  <!-- Left Glass Pastry Display Case with Cakes -->\n  <g id=\"t2c-pastry\" filter=\"url(#t2c-shadow)\">\n    <rect x=\"290\" y=\"220\" width=\"130\" height=\"75\" rx=\"3\" fill=\"#BAE6FD\" opacity=\"0.45\" stroke=\"#0284C7\" stroke-width=\"2\"/>\n    <line x1=\"290\" y1=\"260\" x2=\"420\" y2=\"260\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n    <!-- Pastry Cake 1 (Strawberry slice) -->\n    <polygon points=\"305,250 330,245 335,255 310,258\" fill=\"#F43F5E\"/>\n    <ellipse cx=\"320\" cy=\"245\" rx=\"3\" ry=\"3\" fill=\"#EF4444\"/>\n    <!-- Pastry Cake 2 (Chocolate round) -->\n    <ellipse cx=\"360\" cy=\"250\" rx=\"14\" ry=\"6\" fill=\"#78350F\"/>\n    <ellipse cx=\"360\" cy=\"246\" rx=\"12\" ry=\"4\" fill=\"#D97706\"/>\n    <!-- Croissants on lower shelf -->\n    <path d=\"M305 285 Q320 275 335 285 Q320 292 305 285 Z\" fill=\"#D97706\"/>\n    <path d=\"M345 285 Q360 275 375 285 Q360 292 345 285 Z\" fill=\"#D97706\"/>\n  </g>\n\n  <!-- Cashier Person behind Counter -->\n  <g id=\"t2c-cashier\">\n    <ellipse cx=\"445\" cy=\"195\" rx=\"16\" ry=\"19\" fill=\"#FBCFE8\"/>\n    <path d=\"M430 190 C430 170, 462 170, 462 190 C462 205, 430 205, 430 190 Z\" fill=\"#1E293B\"/>\n    <!-- Visor / Uniform Cap -->\n    <path d=\"M428 185 L462 185 L472 188 L425 188 Z\" fill=\"#047857\"/>\n    <!-- Uniform Shirt -->\n    <path d=\"M425 215 C425 210, 468 210, 468 215 L472 290 L420 290 Z\" fill=\"#047857\"/>\n    <polygon points=\"440,215 446,235 452,215\" fill=\"#FFFFFF\"/>\n    <!-- Arm operating POS Terminal -->\n    <path d=\"M455 240 Q475 255 488 268\" fill=\"none\" stroke=\"#047857\" stroke-width=\"8\" stroke-linecap=\"round\"/>\n    <circle cx=\"492\" cy=\"272\" r=\"6\" fill=\"#FBCFE8\"/>\n  </g>\n\n  <!-- Checkout Counter (Main Structure) -->\n  <g id=\"t2c-main-counter\" filter=\"url(#t2c-shadow)\">\n    <!-- Counter body -->\n    <polygon points=\"270,285 750,285 750,470 270,470\" fill=\"url(#t2c-wood)\"/>\n    <rect x=\"290\" y=\"310\" width=\"440\" height=\"140\" fill=\"#92400E\" opacity=\"0.5\" rx=\"4\"/>\n    <!-- Granite Countertop slab -->\n    <polygon points=\"250,270 770,270 780,292 240,292\" fill=\"url(#t2c-counter)\"/>\n    <polygon points=\"240,292 780,292 780,298 240,298\" fill=\"#475569\"/>\n  </g>\n\n  <!-- POS Terminal / Cash Register on Counter -->\n  <g id=\"t2c-register\">\n    <polygon points=\"480,275 525,275 528,290 477,290\" fill=\"#64748B\"/>\n    <rect x=\"485\" y=\"240\" width=\"38\" height=\"32\" rx=\"3\" fill=\"#0F172A\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <rect x=\"488\" y=\"243\" width=\"32\" height=\"26\" fill=\"#38BDF8\"/>\n    <line x1=\"492\" y1=\"250\" x2=\"515\" y2=\"250\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <line x1=\"492\" y1=\"256\" x2=\"510\" y2=\"256\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <line x1=\"492\" y1=\"262\" x2=\"505\" y2=\"262\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <!-- Card reader keypad -->\n    <rect x=\"532\" y=\"270\" width=\"22\" height=\"18\" rx=\"2\" fill=\"#1E293B\"/>\n    <rect x=\"535\" y=\"272\" width=\"16\" height=\"6\" fill=\"#22C55E\"/>\n  </g>\n\n  <!-- Wooden Tray with Coffee Mug and Bottled Beverage on Counter -->\n  <g id=\"t2c-tray-items\">\n    <!-- Tray -->\n    <polygon points=\"565,275 665,275 675,288 555,288\" fill=\"#D97706\" stroke=\"#B45309\" stroke-width=\"2\"/>\n    <!-- Coffee Mug -->\n    <ellipse cx=\"585\" cy=\"268\" rx=\"10\" ry=\"4\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1.5\"/>\n    <path d=\"M575 268 L575 282 C575 287, 595 287, 595 282 L595 268 Z\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1.5\"/>\n    <ellipse cx=\"585\" cy=\"269\" rx=\"8\" ry=\"3\" fill=\"#78350F\"/> <!-- Coffee surface -->\n    <path d=\"M575 272 C568 272, 568 280, 575 280\" fill=\"none\" stroke=\"#CBD5E1\" stroke-width=\"2\"/> <!-- Mug handle -->\n    <!-- Steam from Mug -->\n    <path d=\"M583 263 Q580 256 585 250\" fill=\"none\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\" opacity=\"0.6\"/>\n    <!-- Bottled Beverage -->\n    <rect x=\"615\" y=\"250\" width=\"14\" height=\"32\" rx=\"2\" fill=\"#38BDF8\" stroke=\"#0284C7\" stroke-width=\"1\"/>\n    <rect x=\"618\" y=\"244\" width=\"8\" height=\"6\" fill=\"#F97316\"/> <!-- Orange cap -->\n    <rect x=\"615\" y=\"260\" width=\"14\" height=\"12\" fill=\"#FFFFFF\" opacity=\"0.8\"/> <!-- Label -->\n    <!-- Napkin stack on tray -->\n    <polygon points=\"638,276 658,276 662,284 642,284\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1\"/>\n  </g>\n\n  <!-- Customer Paying at Counter (Right side) -->\n  <g id=\"t2c-customer\">\n    <!-- Legs -->\n    <line x1=\"695\" y1=\"365\" x2=\"690\" y2=\"465\" stroke=\"#334155\" stroke-width=\"12\" stroke-linecap=\"round\"/>\n    <line x1=\"720\" y1=\"365\" x2=\"725\" y2=\"465\" stroke=\"#334155\" stroke-width=\"12\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"686\" cy=\"470\" rx=\"14\" ry=\"6\" fill=\"#0F172A\"/>\n    <ellipse cx=\"729\" cy=\"470\" rx=\"14\" ry=\"6\" fill=\"#0F172A\"/>\n    <!-- Body / Coat -->\n    <path d=\"M680 250 C680 230, 735 230, 735 250 L738 365 L675 365 Z\" fill=\"#2563EB\" stroke=\"#1D4ED8\" stroke-width=\"2\"/>\n    <!-- Head & Hair -->\n    <ellipse cx=\"705\" cy=\"195\" rx=\"16\" ry=\"19\" fill=\"#FBCFE8\"/>\n    <path d=\"M690 195 C690 172, 722 172, 722 195 Z\" fill=\"#451A03\"/>\n    <!-- Customer hand holding payment card towards terminal -->\n    <path d=\"M685 260 Q630 270 575 272\" fill=\"none\" stroke=\"#2563EB\" stroke-width=\"8\" stroke-linecap=\"round\"/>\n    <circle cx=\"572\" cy=\"272\" r=\"6\" fill=\"#FBCFE8\"/>\n    <!-- Credit / Payment Card -->\n    <rect x=\"555\" y=\"267\" width=\"16\" height=\"10\" rx=\"1\" fill=\"#F59E0B\" transform=\"rotate(-10 555 267)\"/>\n    <!-- Leather shoulder bag -->\n    <path d=\"M695 240 L730 310\" stroke=\"#78350F\" stroke-width=\"4\"/>\n    <rect x=\"720\" y=\"300\" width=\"25\" height=\"30\" rx=\"4\" fill=\"#78350F\"/>\n  </g>\n</svg>",
        "hotspots": [
          {
            "id": "hs-t2c-counter",
            "x": 62,
            "y": 58,
            "wordId": "kw-counter",
            "label": "Checkout counter"
          },
          {
            "id": "hs-t2c-cashier",
            "x": 56,
            "y": 42,
            "wordId": "kw-cashier",
            "label": "Cashier"
          },
          {
            "id": "hs-t2c-pay",
            "x": 72,
            "y": 55,
            "wordId": "kw-pay",
            "label": "Pay for order"
          },
          {
            "id": "hs-t2c-tray",
            "x": 77,
            "y": 56,
            "wordId": "kw-tray",
            "label": "Serving tray"
          },
          {
            "id": "hs-t2c-mug",
            "x": 73,
            "y": 52,
            "wordId": "kw-mug",
            "label": "Coffee mug"
          },
          {
            "id": "hs-t2c-beverage",
            "x": 78,
            "y": 52,
            "wordId": "kw-beverage",
            "label": "Bottled beverage"
          },
          {
            "id": "hs-t2c-wipe",
            "x": 14,
            "y": 62,
            "wordId": "kw-wipe",
            "label": "Wipe the table"
          },
          {
            "id": "hs-t2c-cake",
            "x": 42,
            "y": 50,
            "wordId": "kw-cake",
            "label": "Pastry cakes"
          }
        ],
        "keywords": [
          {
            "id": "kw-counter",
            "word": "Counter",
            "pos": "n",
            "ipa": "/ˈkaʊn.tər/",
            "vi": "Quầy thanh toán, quầy tính tiền",
            "example": "A customer is standing at the service counter.",
            "collocations": [
              "at the counter",
              "checkout counter",
              "behind the counter",
              "service counter"
            ]
          },
          {
            "id": "kw-cashier",
            "word": "Cashier",
            "pos": "n",
            "ipa": "/kæʃˈɪr/",
            "vi": "Nhân viên thu ngân",
            "example": "The cashier is ringing up the customer's purchase.",
            "collocations": [
              "pay the cashier",
              "talk to a cashier",
              "cashier station"
            ]
          },
          {
            "id": "kw-tray",
            "word": "Tray",
            "pos": "n",
            "ipa": "/treɪ/",
            "vi": "Khay đựng đồ ăn, thức uống",
            "example": "A coffee mug and a drink are served on a tray.",
            "collocations": [
              "on a tray",
              "serving tray",
              "carry a tray"
            ]
          },
          {
            "id": "kw-mug",
            "word": "Mug",
            "pos": "n",
            "ipa": "/mʌɡ/",
            "vi": "Cốc sứ có quai",
            "example": "A steaming mug of coffee sits on the counter.",
            "collocations": [
              "coffee mug",
              "sip from a mug",
              "ceramic mug"
            ]
          },
          {
            "id": "kw-beverage",
            "word": "Beverage",
            "pos": "n",
            "ipa": "/ˈbev.ər.ɪdʒ/",
            "vi": "Thức uống, đồ uống",
            "example": "Bottled beverages are available for purchase.",
            "collocations": [
              "hot beverage",
              "cold beverage",
              "pour a beverage"
            ]
          },
          {
            "id": "kw-pay",
            "word": "Pay",
            "pos": "v",
            "ipa": "/peɪ/",
            "vi": "Thanh toán, trả tiền",
            "example": "A patron is paying for a meal with a credit card.",
            "collocations": [
              "pay for an order",
              "pay in cash",
              "pay by card"
            ]
          },
          {
            "id": "kw-wipe",
            "word": "Wipe",
            "pos": "v",
            "ipa": "/waɪp/",
            "vi": "Lau chùi, dọn bàn",
            "example": "A worker is wiping off a table with a cloth.",
            "collocations": [
              "wipe a table",
              "wipe down the counter",
              "wipe off with a rag"
            ]
          },
          {
            "id": "kw-cake",
            "word": "Cake",
            "pos": "n",
            "ipa": "/keɪk/",
            "vi": "Bánh ngọt",
            "example": "Slices of cake are displayed in the glass showcase.",
            "collocations": [
              "piece of cake",
              "display case of cakes",
              "bake a cake"
            ]
          },
          {
            "id": "kw-serve",
            "word": "Serve",
            "pos": "v",
            "ipa": "/sɜːrv/",
            "vi": "Phục vụ khách",
            "example": "Drinks are being served on a small wooden tray.",
            "collocations": [
              "serve a customer",
              "serve drinks",
              "ready to serve"
            ]
          },
          {
            "id": "kw-order",
            "word": "Order",
            "pos": "v",
            "ipa": "/ˈɔːr.dər/",
            "vi": "Gọi món, đặt hàng",
            "example": "The customer is placing an order at the café.",
            "collocations": [
              "place an order",
              "take an order",
              "order food"
            ]
          }
        ],
        "drill": {
          "question": "Listen to the four statements. Select the statement that best describes what you see in the picture.",
          "correct": "A",
          "options": [
            {
              "id": "A",
              "text": "A customer is paying at the service counter.",
              "vi": "Một khách hàng đang thanh toán tiền tại quầy phục vụ.",
              "isCorrect": true,
              "trapType": "Đáp án chuẩn xác (Direct Action)",
              "explanation": "Câu miêu tả chuẩn xác hành động của khách hàng đang cầm thẻ thanh toán giơ về phía máy POS tại quầy (paying at the service counter)."
            },
            {
              "id": "B",
              "text": "The cups are being washed in a sink.",
              "vi": "Các chiếc cốc đang được rửa trong bồn rửa.",
              "isCorrect": false,
              "trapType": "Bẫy 'Being + V3' (Bẫy hành động đang diễn ra)",
              "explanation": "Cốc được xếp ngay ngắn trên kệ và đặt trên khay, không hề có hành động ai đang rửa cốc trong bồn."
            },
            {
              "id": "C",
              "text": "A cashier is packing groceries into a large box.",
              "vi": "Một thu ngân đang đóng gói hàng hóa vào một chiếc hộp lớn.",
              "isCorrect": false,
              "trapType": "Bẫy hành động sai (Incorrect Action)",
              "explanation": "Thu ngân đang bấm máy tính tiền/POS chứ không hề đóng gói hàng hóa vào thùng hộp."
            },
            {
              "id": "D",
              "text": "All of the tables are occupied by diners.",
              "vi": "Tất cả các bàn ăn đều đã có khách ngồi kín chỗ.",
              "isCorrect": false,
              "trapType": "Bẫy chi tiết đối lập (Opposite Detail)",
              "explanation": "Bàn bên trái đang trống và đang được nhân viên lau dọn, trái ngược hoàn toàn với 'occupied by diners'."
            }
          ]
        },
        "describeChallenge": {
          "instructions": "Hãy mô tả hành động tại quầy thu ngân hoặc đồ vật trên khay bằng 1 câu tiếng Anh hoàn chỉnh:",
          "targetKeywords": [
            "counter",
            "cashier",
            "pay",
            "tray",
            "mug",
            "beverage",
            "wipe"
          ],
          "modelAnswers": [
            {
              "en": "A customer is standing at the counter to pay for an order.",
              "vi": "Một khách hàng đang đứng tại quầy để thanh toán cho một đơn hàng.",
              "score": 100
            },
            {
              "en": "A mug of coffee and a beverage are placed on a tray.",
              "vi": "Một cốc cà phê và đồ uống được đặt trên một chiếc khay.",
              "score": 95
            },
            {
              "en": "A staff member is wiping a table in the background.",
              "vi": "Một nhân viên đang lau bàn ở phía sau.",
              "score": 95
            }
          ]
        }
      },
      {
        "id": "scene-restaurant",
        "title": "Tranh 3: Nhà hàng & Chuẩn bị bàn ăn",
        "titleEn": "Restaurant Dining & Table Setting",
        "desc": "Bàn ăn nhà hàng được dọn sẵn dao nĩa, khăn ăn và ly nước; nhân viên phục vụ rót nước cho khách.",
        "svg": "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" class=\"part1-svg-art\">\n  <defs>\n    <linearGradient id=\"t2r-wall\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#1E293B\"/>\n      <stop offset=\"100%\" stop-color=\"#0F172A\"/>\n    </linearGradient>\n    <linearGradient id=\"t2r-linen\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#FFFFFF\"/>\n      <stop offset=\"100%\" stop-color=\"#F1F5F9\"/>\n    </linearGradient>\n    <linearGradient id=\"t2r-wood\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#78350F\"/>\n      <stop offset=\"50%\" stop-color=\"#92400E\"/>\n      <stop offset=\"100%\" stop-color=\"#451A03\"/>\n    </linearGradient>\n    <filter id=\"t2r-shadow\" x=\"-5%\" y=\"-5%\" width=\"110%\" height=\"115%\">\n      <feDropShadow dx=\"0\" dy=\"5\" stdDeviation=\"6\" flood-opacity=\"0.22\"/>\n    </filter>\n  </defs>\n\n  <!-- Elegant Dark Restaurant Wall -->\n  <rect x=\"0\" y=\"0\" width=\"800\" height=\"500\" fill=\"url(#t2r-wall)\"/>\n\n  <!-- Warm Wooden Wall Paneling on Top -->\n  <rect x=\"0\" y=\"0\" width=\"800\" height=\"140\" fill=\"url(#t2r-wood)\" opacity=\"0.65\"/>\n  <line x1=\"0\" y1=\"140\" x2=\"800\" y2=\"140\" stroke=\"#D97706\" stroke-width=\"2\"/>\n  <!-- Decorative Wall Sconces (Warm Lights) -->\n  <circle cx=\"160\" cy=\"80\" r=\"14\" fill=\"#FEF08A\" opacity=\"0.8\"/>\n  <rect x=\"156\" y=\"85\" width=\"8\" height=\"22\" fill=\"#D97706\"/>\n  <circle cx=\"640\" cy=\"80\" r=\"14\" fill=\"#FEF08A\" opacity=\"0.8\"/>\n  <rect x=\"636\" y=\"85\" width=\"8\" height=\"22\" fill=\"#D97706\"/>\n\n  <!-- Framed Painting on Wall -->\n  <rect x=\"330\" y=\"30\" width=\"140\" height=\"85\" rx=\"3\" fill=\"#334155\" stroke=\"#CA8A04\" stroke-width=\"4\"/>\n  <rect x=\"340\" y=\"40\" width=\"120\" height=\"65\" fill=\"#CBD5E1\"/>\n  <ellipse cx=\"400\" cy=\"70\" rx=\"35\" ry=\"18\" fill=\"#F59E0B\" opacity=\"0.7\"/>\n\n  <!-- Parquet Wood Dining Floor -->\n  <polygon points=\"0,280 800,280 800,500 0,500\" fill=\"#292524\"/>\n  <line x1=\"0\" y1=\"280\" x2=\"800\" y2=\"280\" stroke=\"#44403C\" stroke-width=\"2\"/>\n  <!-- Floor planks -->\n  <line x1=\"150\" y1=\"280\" x2=\"80\" y2=\"500\" stroke=\"#1C1917\" stroke-width=\"1.5\"/>\n  <line x1=\"380\" y1=\"280\" x2=\"330\" y2=\"500\" stroke=\"#1C1917\" stroke-width=\"1.5\"/>\n  <line x1=\"620\" y1=\"280\" x2=\"590\" y2=\"500\" stroke=\"#1C1917\" stroke-width=\"1.5\"/>\n\n  <!-- Kitchen Pass / Prep Station in Distant Left -->\n  <g id=\"t2r-kitchen-pass\" opacity=\"0.85\">\n    <rect x=\"40\" y=\"160\" width=\"160\" height=\"110\" rx=\"3\" fill=\"#334155\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <rect x=\"50\" y=\"170\" width=\"140\" height=\"35\" fill=\"#F8FAFC\" opacity=\"0.2\"/>\n    <!-- Chef with white hat preparing food -->\n    <ellipse cx=\"120\" cy=\"190\" rx=\"10\" ry=\"12\" fill=\"#FBCFE8\"/>\n    <!-- Chef toque hat -->\n    <path d=\"M110 182 C108 165, 132 165, 130 182 Z\" fill=\"#FFFFFF\"/>\n    <rect x=\"110\" y=\"202\" width=\"20\" height=\"30\" fill=\"#FFFFFF\"/>\n    <!-- Plates with green garnish/vegetables -->\n    <ellipse cx=\"75\" cy=\"245\" rx=\"14\" ry=\"4\" fill=\"#FFFFFF\"/>\n    <circle cx=\"75\" cy=\"244\" r=\"3\" fill=\"#16A34A\"/>\n    <ellipse cx=\"115\" cy=\"245\" rx=\"14\" ry=\"4\" fill=\"#FFFFFF\"/>\n    <circle cx=\"115\" cy=\"244\" r=\"3\" fill=\"#DC2626\"/>\n  </g>\n\n  <!-- Seated Customer (Diner on Right) -->\n  <g id=\"t2r-diner\">\n    <!-- Dining Chair -->\n    <rect x=\"600\" y=\"240\" width=\"14\" height=\"130\" fill=\"#78350F\" rx=\"3\"/>\n    <rect x=\"585\" y=\"320\" width=\"60\" height=\"12\" fill=\"#92400E\" rx=\"2\"/>\n    <!-- Seated Woman -->\n    <ellipse cx=\"580\" cy=\"215\" rx=\"15\" ry=\"18\" fill=\"#FBCFE8\"/>\n    <path d=\"M565 210 C565 190, 595 190, 595 210 C595 230, 565 230, 565 210 Z\" fill=\"#312E81\"/>\n    <!-- Dress / Blouse -->\n    <path d=\"M560 238 C560 230, 600 230, 600 238 L605 340 L555 340 Z\" fill=\"#4338CA\"/>\n    <!-- Hands resting on lap or edge of table -->\n    <path d=\"M565 260 Q540 285 520 295\" fill=\"none\" stroke=\"#4338CA\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n    <circle cx=\"516\" cy=\"296\" r=\"6\" fill=\"#FBCFE8\"/>\n  </g>\n\n  <!-- Waiter Standing and Pouring Water (Central Action) -->\n  <g id=\"t2r-waiter\">\n    <!-- Legs in black formal trousers -->\n    <line x1=\"395\" y1=\"330\" x2=\"390\" y2=\"445\" stroke=\"#0F172A\" stroke-width=\"11\" stroke-linecap=\"round\"/>\n    <line x1=\"418\" y1=\"330\" x2=\"422\" y2=\"445\" stroke=\"#0F172A\" stroke-width=\"11\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"385\" cy=\"450\" rx=\"12\" ry=\"5\" fill=\"#020617\"/>\n    <ellipse cx=\"426\" cy=\"450\" rx=\"12\" ry=\"5\" fill=\"#020617\"/>\n\n    <!-- White formal shirt & Black vest -->\n    <path d=\"M380 205 C380 195, 435 195, 435 205 L440 330 L375 330 Z\" fill=\"#FFFFFF\"/>\n    <!-- Black Vest -->\n    <path d=\"M380 205 L400 245 L408 205 L415 205 L422 245 L435 205 L438 320 L377 320 Z\" fill=\"#0F172A\"/>\n    <!-- Black Bowtie -->\n    <polygon points=\"402,205 414,205 408,212\" fill=\"#0F172A\"/>\n    <polygon points=\"402,212 414,212 408,205\" fill=\"#0F172A\"/>\n\n    <!-- Head & Hair -->\n    <ellipse cx=\"408\" cy=\"175\" rx=\"15\" ry=\"18\" fill=\"#FBCFE8\"/>\n    <path d=\"M394 172 C394 154, 422 154, 422 172 Z\" fill=\"#1C1917\"/>\n\n    <!-- Left Arm Holding Folded Service Towel -->\n    <path d=\"M382 220 Q365 250 355 270\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"8\" stroke-linecap=\"round\"/>\n    <rect x=\"345\" y=\"260\" width=\"18\" height=\"24\" fill=\"#F8FAFC\" rx=\"2\" stroke=\"#E2E8F0\" stroke-width=\"1\"/>\n\n    <!-- Right Arm Pouring Water from Glass Pitcher -->\n    <path d=\"M428 220 Q455 235 480 248\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"8\" stroke-linecap=\"round\"/>\n    <circle cx=\"482\" cy=\"250\" r=\"5\" fill=\"#FBCFE8\"/>\n\n    <!-- Glass Pitcher / Carafe tilted to pour -->\n    <g transform=\"rotate(-30 495 245)\">\n      <polygon points=\"485,230 505,230 512,265 480,265\" fill=\"#BAE6FD\" opacity=\"0.6\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n      <ellipse cx=\"495\" cy=\"230\" rx=\"10\" ry=\"3\" fill=\"#E0F2FE\"/>\n      <path d=\"M510 235 C520 235, 520 255, 510 255\" fill=\"none\" stroke=\"#0284C7\" stroke-width=\"2\"/>\n    </g>\n\n    <!-- Stream of Pouring Water -->\n    <path d=\"M492 258 Q495 275 496 292\" fill=\"none\" stroke=\"#38BDF8\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  </g>\n\n  <!-- Foreground Elegant Dining Table & Settings -->\n  <g id=\"t2r-table\" filter=\"url(#t2r-shadow)\">\n    <!-- White Tablecloth Table -->\n    <polygon points=\"210,310 570,310 630,480 130,480\" fill=\"url(#t2r-linen)\" stroke=\"#E2E8F0\" stroke-width=\"2\"/>\n    <!-- Table Runner (Burgundy/Navy accent) -->\n    <polygon points=\"340,310 440,310 470,480 310,480\" fill=\"#881337\" opacity=\"0.85\"/>\n\n    <!-- Water Goblet being filled by waiter -->\n    <ellipse cx=\"496\" cy=\"295\" rx=\"8\" ry=\"3\" fill=\"#E0F2FE\" stroke=\"#0284C7\" stroke-width=\"1.2\"/>\n    <path d=\"M488 295 C488 312, 504 312, 504 295 Z\" fill=\"#BAE6FD\" opacity=\"0.75\" stroke=\"#0284C7\" stroke-width=\"1.2\"/>\n    <line x1=\"496\" y1=\"312\" x2=\"496\" y2=\"322\" stroke=\"#0284C7\" stroke-width=\"2\"/>\n    <ellipse cx=\"496\" cy=\"322\" rx=\"7\" ry=\"2.5\" fill=\"#BAE6FD\" stroke=\"#0284C7\" stroke-width=\"1\"/>\n\n    <!-- Left Diner Place Setting -->\n    <!-- Large White Ceramic Plate -->\n    <ellipse cx=\"270\" cy=\"370\" rx=\"38\" ry=\"18\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"2\"/>\n    <ellipse cx=\"270\" cy=\"370\" rx=\"26\" ry=\"12\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1\"/>\n    <!-- Silverware: Dinner Fork on Left of Plate -->\n    <line x1=\"222\" y1=\"350\" x2=\"222\" y2=\"390\" stroke=\"#94A3B8\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    <line x1=\"219\" y1=\"350\" x2=\"219\" y2=\"360\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <line x1=\"225\" y1=\"350\" x2=\"225\" y2=\"360\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <!-- Silverware: Dinner Knife on Right of Plate -->\n    <line x1=\"318\" y1=\"350\" x2=\"318\" y2=\"390\" stroke=\"#94A3B8\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    <path d=\"M318 350 Q323 358 318 368 Z\" fill=\"#94A3B8\"/>\n    <!-- Folded Cloth Napkin (Crisp Pyramid) -->\n    <polygon points=\"270,332 258,354 282,354\" fill=\"#FFFFFF\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n    <line x1=\"270\" y1=\"332\" x2=\"270\" y2=\"354\" stroke=\"#CBD5E1\" stroke-width=\"1\"/>\n\n    <!-- Wine Glass near Plate -->\n    <ellipse cx=\"320\" cy=\"335\" rx=\"7\" ry=\"2.5\" fill=\"#E0F2FE\" stroke=\"#0284C7\" stroke-width=\"1\"/>\n    <path d=\"M313 335 C313 348, 327 348, 327 335 Z\" fill=\"#FDA4AF\" opacity=\"0.6\" stroke=\"#0284C7\" stroke-width=\"1\"/>\n    <line x1=\"320\" y1=\"348\" x2=\"320\" y2=\"356\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n\n    <!-- Bread Basket / Meal Starter -->\n    <ellipse cx=\"380\" cy=\"345\" rx=\"22\" ry=\"10\" fill=\"#D97706\" stroke=\"#B45309\" stroke-width=\"1.5\"/>\n    <ellipse cx=\"375\" cy=\"343\" rx=\"7\" ry=\"4\" fill=\"#FDE68A\"/>\n    <ellipse cx=\"385\" cy=\"344\" rx=\"7\" ry=\"4\" fill=\"#FDE68A\"/>\n\n    <!-- Salt and Pepper Shakers -->\n    <rect x=\"420\" y=\"328\" width=\"6\" height=\"12\" rx=\"2\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1\"/>\n    <rect x=\"428\" y=\"328\" width=\"6\" height=\"12\" rx=\"2\" fill=\"#1E293B\" stroke=\"#475569\" stroke-width=\"1\"/>\n  </g>\n</svg>",
        "hotspots": [
          {
            "id": "hs-t2r-silverware",
            "x": 28,
            "y": 74,
            "wordId": "kw-silverware",
            "label": "Silverware"
          },
          {
            "id": "hs-t2r-knife",
            "x": 40,
            "y": 74,
            "wordId": "kw-knife",
            "label": "Dinner knife"
          },
          {
            "id": "hs-t2r-napkin",
            "x": 34,
            "y": 68,
            "wordId": "kw-napkin",
            "label": "Folded napkin"
          },
          {
            "id": "hs-t2r-pour",
            "x": 62,
            "y": 51,
            "wordId": "kw-pour",
            "label": "Pour water"
          },
          {
            "id": "hs-t2r-serve",
            "x": 51,
            "y": 42,
            "wordId": "kw-serve",
            "label": "Serve drinks"
          },
          {
            "id": "hs-t2r-dine",
            "x": 72,
            "y": 50,
            "wordId": "kw-dine",
            "label": "Dine at table"
          },
          {
            "id": "hs-t2r-meal",
            "x": 34,
            "y": 75,
            "wordId": "kw-meal",
            "label": "Meal plate"
          },
          {
            "id": "hs-t2r-prep",
            "x": 15,
            "y": 42,
            "wordId": "kw-prepare",
            "label": "Prepare food"
          }
        ],
        "keywords": [
          {
            "id": "kw-silverware",
            "word": "Silverware",
            "pos": "n",
            "ipa": "/ˈsɪl.vɚ.wer/",
            "vi": "Bộ dao nĩa muỗng kim loại",
            "example": "Silverware is set on both sides of each dinner plate.",
            "collocations": [
              "set the silverware",
              "polish silverware",
              "stainless silverware"
            ]
          },
          {
            "id": "kw-napkin",
            "word": "Napkin",
            "pos": "n",
            "ipa": "/ˈnæp.kɪn/",
            "vi": "Khăn ăn trên bàn",
            "example": "A cloth napkin is neatly folded in front of the seat.",
            "collocations": [
              "cloth napkin",
              "fold a napkin",
              "paper napkin"
            ]
          },
          {
            "id": "kw-pour",
            "word": "Pour",
            "pos": "v",
            "ipa": "/pɔːr/",
            "vi": "Rót nước, rót rượu",
            "example": "A waiter is pouring water from a pitcher into a glass.",
            "collocations": [
              "pour water",
              "pour into a glass",
              "pour a drink"
            ]
          },
          {
            "id": "kw-meal",
            "word": "Meal",
            "pos": "n",
            "ipa": "/miːl/",
            "vi": "Bữa ăn, phần ăn",
            "example": "The dining table is prepared for an evening meal.",
            "collocations": [
              "enjoy a meal",
              "prepare a meal",
              "order a meal"
            ]
          },
          {
            "id": "kw-knife",
            "word": "Knife",
            "pos": "n",
            "ipa": "/naɪf/",
            "vi": "Con dao ăn",
            "example": "A knife and fork have been laid next to the plate.",
            "collocations": [
              "knife and fork",
              "sharp knife",
              "dinner knife"
            ]
          },
          {
            "id": "kw-serve",
            "word": "Serve",
            "pos": "v",
            "ipa": "/sɜːrv/",
            "vi": "Phục vụ món, rót nước",
            "example": "The server is attending to diners at the restaurant.",
            "collocations": [
              "serve food",
              "serve drinks",
              "serve a guest"
            ]
          },
          {
            "id": "kw-dine",
            "word": "Dine",
            "pos": "v",
            "ipa": "/daɪn/",
            "vi": "Dùng bữa, ăn tối",
            "example": "Guests are dining in an upscale restaurant.",
            "collocations": [
              "dine out",
              "dine at a restaurant",
              "dining room"
            ]
          },
          {
            "id": "kw-prepare",
            "word": "Prepare",
            "pos": "v",
            "ipa": "/prɪˈper/",
            "vi": "Chuẩn bị, nấu nướng",
            "example": "The chef is preparing dishes in the kitchen area.",
            "collocations": [
              "prepare a meal",
              "prepare food",
              "prepare a table"
            ]
          },
          {
            "id": "kw-vegetable",
            "word": "Vegetable",
            "pos": "n",
            "ipa": "/ˈvedʒ.tə.bəl/",
            "vi": "Rau củ quả",
            "example": "Fresh vegetables are garnished on the side of the entrée.",
            "collocations": [
              "fresh vegetables",
              "steamed vegetables",
              "raw vegetables"
            ]
          },
          {
            "id": "kw-wrap",
            "word": "Wrap",
            "pos": "v",
            "ipa": "/ræp/",
            "vi": "Gói, bọc",
            "example": "The silverware is wrapped inside a decorative napkin.",
            "collocations": [
              "wrap in a napkin",
              "wrapped in foil",
              "wrap up leftovers"
            ]
          }
        ],
        "drill": {
          "question": "Listen to the four statements. Select the statement that best describes what you see in the picture.",
          "correct": "C",
          "options": [
            {
              "id": "A",
              "text": "The dining tables are being cleared of plates.",
              "vi": "Các bàn ăn đang được dọn sạch đĩa.",
              "isCorrect": false,
              "trapType": "Bẫy 'Being + V3' (Hành động ngược với tranh)",
              "explanation": "Bàn đang được dọn sẵn rất đẹp và đầy đủ đĩa dao nĩa để chuẩn bị dùng bữa, chứ không phải đang bị dọn dẹp ('being cleared')."
            },
            {
              "id": "B",
              "text": "A chef is washing dishes in a sink.",
              "vi": "Một đầu bếp đang rửa bát đĩa trong bồn rửa.",
              "isCorrect": false,
              "trapType": "Bẫy hành động sai (Incorrect Action)",
              "explanation": "Đầu bếp ở góc xa đang chuẩn bị thức ăn trên quầy chứ không hề rửa bát đĩa."
            },
            {
              "id": "C",
              "text": "A server is pouring water into a glass.",
              "vi": "Một người phục vụ đang rót nước vào một chiếc ly.",
              "isCorrect": true,
              "trapType": "Đáp án chuẩn xác (Direct Action)",
              "explanation": "Miêu tả chính xác 100% người phục vụ mặc áo ghi lê đang cầm bình rót dòng nước vào ly thủy tinh (pouring water into a glass)."
            },
            {
              "id": "D",
              "text": "All of the silverware has been removed from the table.",
              "vi": "Toàn bộ dao nĩa thìa đã bị dọn đi khỏi bàn.",
              "isCorrect": false,
              "trapType": "Bẫy chi tiết đối lập (Opposite Detail)",
              "explanation": "Dao nĩa (knife, fork) bằng kim loại sáng bóng đang nằm ngay ngắn cạnh đĩa sứ trắng, đối lập hoàn toàn với 'has been removed'."
            }
          ]
        },
        "describeChallenge": {
          "instructions": "Hãy mô tả hành động của người phục vụ hoặc cách bài trí bàn ăn bằng 1 câu tiếng Anh hoàn chỉnh:",
          "targetKeywords": [
            "pour",
            "water",
            "server",
            "table",
            "glass",
            "silverware",
            "napkin"
          ],
          "modelAnswers": [
            {
              "en": "A server is pouring water into a customer's glass at the table.",
              "vi": "Một người phục vụ đang rót nước vào ly của khách tại bàn ăn.",
              "score": 100
            },
            {
              "en": "Silverware and folded napkins are neatly set on the dining table.",
              "vi": "Dao nĩa và khăn ăn gấp gọn được bày trí ngăn nắp trên bàn ăn.",
              "score": 95
            },
            {
              "en": "A customer is seated at a table waiting for a meal to be served.",
              "vi": "Một khách hàng đang ngồi tại bàn chờ được phục vụ bữa ăn.",
              "score": 95
            }
          ]
        }
      }
    ]
  },
  {
    "id": "construction-maintenance",
    "title": "Công trường, Xây dựng & Sửa chữa (Construction & Maintenance)",
    "desc": "Môi trường lao động công trường, xưởng cơ khí chế tạo và sửa chữa bảo trì hạ tầng. Trọng tâm nhận diện trang phục bảo hộ (hard hat, uniform, gloves), công cụ thao tác và trạng thái máy móc.",
    "icon": "🔨",
    "scenes": [
      {
        "id": "scene-construction-site",
        "title": "Tranh 1: Công trường xây dựng ngoài trời",
        "titleEn": "Outdoor Construction Site",
        "desc": "Công nhân đội mũ bảo hộ trèo thang, sử dụng búa thi công khung gỗ và giàn giáo công trình.",
        "svg": "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" class=\"part1-svg-art\">\n  <defs>\n    <linearGradient id=\"t3-sky\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#38BDF8\"/>\n      <stop offset=\"70%\" stop-color=\"#BAE6FD\"/>\n      <stop offset=\"100%\" stop-color=\"#E0F2FE\"/>\n    </linearGradient>\n    <linearGradient id=\"t3-wood\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#F59E0B\"/>\n      <stop offset=\"50%\" stop-color=\"#D97706\"/>\n      <stop offset=\"100%\" stop-color=\"#B45309\"/>\n    </linearGradient>\n    <linearGradient id=\"t3-ground\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#78716C\"/>\n      <stop offset=\"100%\" stop-color=\"#57534E\"/>\n    </linearGradient>\n    <filter id=\"t3-shadow\" x=\"-5%\" y=\"-5%\" width=\"110%\" height=\"115%\">\n      <feDropShadow dx=\"0\" dy=\"5\" stdDeviation=\"5\" flood-opacity=\"0.2\"/>\n    </filter>\n  </defs>\n\n  <!-- Sky Background -->\n  <rect x=\"0\" y=\"0\" width=\"800\" height=\"420\" fill=\"url(#t3-sky)\"/>\n  <!-- Distant Clouds -->\n  <ellipse cx=\"140\" cy=\"80\" rx=\"60\" ry=\"18\" fill=\"#FFFFFF\" opacity=\"0.6\"/>\n  <ellipse cx=\"650\" cy=\"70\" rx=\"80\" ry=\"22\" fill=\"#FFFFFF\" opacity=\"0.6\"/>\n\n  <!-- Distant City Skyline & Tower Crane (Background Construction) -->\n  <g id=\"t3-distant-crane\" opacity=\"0.45\">\n    <rect x=\"180\" y=\"40\" width=\"8\" height=\"240\" fill=\"#E11D48\"/>\n    <line x1=\"120\" y1=\"70\" x2=\"310\" y2=\"70\" stroke=\"#E11D48\" stroke-width=\"4\"/>\n    <line x1=\"184\" y1=\"40\" x2=\"310\" y2=\"70\" stroke=\"#E11D48\" stroke-width=\"2\"/>\n    <line x1=\"184\" y1=\"40\" x2=\"120\" y2=\"70\" stroke=\"#E11D48\" stroke-width=\"2\"/>\n    <line x1=\"260\" y1=\"70\" x2=\"260\" y2=\"130\" stroke=\"#334155\" stroke-width=\"2\"/> <!-- Crane cable -->\n    <polygon points=\"255,130 265,130 260,140\" fill=\"#334155\"/> <!-- Hook -->\n  </g>\n\n  <!-- Construction Ground / Dirt & Gravel -->\n  <polygon points=\"0,410 800,410 800,500 0,500\" fill=\"url(#t3-ground)\"/>\n  <line x1=\"0\" y1=\"410\" x2=\"800\" y2=\"410\" stroke=\"#44403C\" stroke-width=\"3\"/>\n\n  <!-- Metal Tubular Scaffolding Framework -->\n  <g id=\"t3-scaffold\">\n    <!-- Vertical Poles -->\n    <line x1=\"220\" y1=\"120\" x2=\"220\" y2=\"420\" stroke=\"#64748B\" stroke-width=\"6\"/>\n    <line x1=\"390\" y1=\"120\" x2=\"390\" y2=\"420\" stroke=\"#64748B\" stroke-width=\"6\"/>\n    <line x1=\"560\" y1=\"100\" x2=\"560\" y2=\"420\" stroke=\"#64748B\" stroke-width=\"6\"/>\n    <line x1=\"720\" y1=\"100\" x2=\"720\" y2=\"420\" stroke=\"#64748B\" stroke-width=\"6\"/>\n    <!-- Horizontal Crossbars -->\n    <line x1=\"210\" y1=\"180\" x2=\"730\" y2=\"180\" stroke=\"#94A3B8\" stroke-width=\"5\"/>\n    <line x1=\"210\" y1=\"280\" x2=\"730\" y2=\"280\" stroke=\"#94A3B8\" stroke-width=\"5\"/>\n    <line x1=\"210\" y1=\"380\" x2=\"730\" y2=\"380\" stroke=\"#94A3B8\" stroke-width=\"5\"/>\n    <!-- Diagonal Cross Braces (X-bracing) -->\n    <line x1=\"220\" y1=\"180\" x2=\"390\" y2=\"280\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n    <line x1=\"390\" y1=\"180\" x2=\"220\" y2=\"280\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n    <line x1=\"390\" y1=\"180\" x2=\"560\" y2=\"280\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n    <line x1=\"560\" y1=\"180\" x2=\"390\" y2=\"280\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n    <line x1=\"560\" y1=\"180\" x2=\"720\" y2=\"280\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n    <line x1=\"720\" y1=\"180\" x2=\"560\" y2=\"280\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n    <!-- Safety Toe-boards / Planks on Scaffold Levels -->\n    <polygon points=\"360,270 735,270 735,284 360,284\" fill=\"url(#t3-wood)\" stroke=\"#78350F\" stroke-width=\"1.5\"/>\n    <polygon points=\"205,372 580,372 580,384 205,384\" fill=\"url(#t3-wood)\" stroke=\"#78350F\" stroke-width=\"1.5\"/>\n  </g>\n\n  <!-- Left: Sturdy Aluminum Extension Ladder leaning on Scaffold -->\n  <g id=\"t3-ladder\" filter=\"url(#t3-shadow)\">\n    <!-- Ladder Side Rails (Angled) -->\n    <line x1=\"250\" y1=\"430\" x2=\"340\" y2=\"150\" stroke=\"#CBD5E1\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n    <line x1=\"280\" y1=\"430\" x2=\"370\" y2=\"150\" stroke=\"#94A3B8\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n    <!-- Ladder Rungs -->\n    <line x1=\"254\" y1=\"410\" x2=\"284\" y2=\"410\" stroke=\"#475569\" stroke-width=\"4\"/>\n    <line x1=\"262\" y1=\"380\" x2=\"292\" y2=\"380\" stroke=\"#475569\" stroke-width=\"4\"/>\n    <line x1=\"270\" y1=\"350\" x2=\"300\" y2=\"350\" stroke=\"#475569\" stroke-width=\"4\"/>\n    <line x1=\"278\" y1=\"320\" x2=\"308\" y2=\"320\" stroke=\"#475569\" stroke-width=\"4\"/>\n    <line x1=\"286\" y1=\"290\" x2=\"316\" y2=\"290\" stroke=\"#475569\" stroke-width=\"4\"/>\n    <line x1=\"294\" y1=\"260\" x2=\"324\" y2=\"260\" stroke=\"#475569\" stroke-width=\"4\"/>\n    <line x1=\"302\" y1=\"230\" x2=\"332\" y2=\"230\" stroke=\"#475569\" stroke-width=\"4\"/>\n    <line x1=\"310\" y1=\"200\" x2=\"340\" y2=\"200\" stroke=\"#475569\" stroke-width=\"4\"/>\n    <line x1=\"318\" y1=\"170\" x2=\"348\" y2=\"170\" stroke=\"#475569\" stroke-width=\"4\"/>\n  </g>\n\n  <!-- Worker 1 Climbing Up the Ladder (Left side) -->\n  <g id=\"t3-climber\">\n    <!-- Heavy work boots on ladder rungs -->\n    <polygon points=\"274,342 296,342 298,354 270,354\" fill=\"#78350F\" stroke=\"#451A03\" stroke-width=\"1.5\"/>\n    <polygon points=\"296,282 318,282 320,294 292,294\" fill=\"#78350F\" stroke=\"#451A03\" stroke-width=\"1.5\"/>\n    <!-- Jeans / Work Trousers -->\n    <line x1=\"280\" y1=\"345\" x2=\"295\" y2=\"295\" stroke=\"#1E3A8A\" stroke-width=\"11\" stroke-linecap=\"round\"/>\n    <line x1=\"302\" y1=\"285\" x2=\"305\" y2=\"250\" stroke=\"#1E3A8A\" stroke-width=\"11\" stroke-linecap=\"round\"/>\n    <!-- Tool Belt with Pouch -->\n    <rect x=\"290\" y=\"240\" width=\"35\" height=\"10\" fill=\"#78350F\" rx=\"2\"/>\n    <rect x=\"285\" y=\"248\" width=\"12\" height=\"15\" fill=\"#B45309\" rx=\"2\"/>\n    <!-- High-Vis Orange Safety Vest & Torso -->\n    <path d=\"M295 245 L320 200 L340 205 L315 250 Z\" fill=\"#F97316\"/>\n    <!-- Reflective Silver Stripes on Vest -->\n    <line x1=\"305\" y1=\"225\" x2=\"328\" y2=\"230\" stroke=\"#F8FAFC\" stroke-width=\"3\"/>\n    <!-- Head & Yellow Hard Hat -->\n    <ellipse cx=\"328\" cy=\"180\" rx=\"14\" ry=\"16\" fill=\"#FBCFE8\"/>\n    <!-- Hard Hat dome & brim -->\n    <path d=\"M312 175 C312 155, 344 155, 344 175 Z\" fill=\"#FACC15\" stroke=\"#CA8A04\" stroke-width=\"2\"/>\n    <ellipse cx=\"328\" cy=\"175\" rx=\"19\" ry=\"5\" fill=\"#FACC15\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n    <!-- Hands Gripping Ladder Rails -->\n    <path d=\"M322 205 Q305 220 286 230\" fill=\"none\" stroke=\"#F97316\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n    <circle cx=\"284\" cy=\"230\" r=\"5\" fill=\"#FBCFE8\"/>\n    <path d=\"M332 205 Q345 200 348 185\" fill=\"none\" stroke=\"#F97316\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n    <circle cx=\"349\" cy=\"185\" r=\"5\" fill=\"#FBCFE8\"/>\n  </g>\n\n  <!-- Worker 2 Standing on Scaffold Assembling Timber Framework with Hammer -->\n  <g id=\"t3-carpenter\">\n    <!-- Boots on wooden scaffold plank -->\n    <ellipse cx=\"610\" cy=\"272\" rx=\"12\" ry=\"5\" fill=\"#78350F\"/>\n    <ellipse cx=\"645\" cy=\"272\" rx=\"12\" ry=\"5\" fill=\"#78350F\"/>\n    <!-- Denim Trousers -->\n    <line x1=\"610\" y1=\"272\" x2=\"615\" y2=\"205\" stroke=\"#1E3A8A\" stroke-width=\"11\" stroke-linecap=\"round\"/>\n    <line x1=\"645\" y1=\"272\" x2=\"635\" y2=\"205\" stroke=\"#1E3A8A\" stroke-width=\"11\" stroke-linecap=\"round\"/>\n    <!-- Neon Yellow Safety Vest & Torso -->\n    <path d=\"M605 205 C605 160, 645 160, 645 205 Z\" fill=\"#EAB308\"/>\n    <line x1=\"612\" y1=\"180\" x2=\"638\" y2=\"180\" stroke=\"#F8FAFC\" stroke-width=\"3\"/>\n    <!-- Head & White Hard Hat -->\n    <ellipse cx=\"625\" cy=\"140\" rx=\"14\" ry=\"16\" fill=\"#FBCFE8\"/>\n    <path d=\"M610 136 C610 118, 640 118, 640 136 Z\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"2\"/>\n    <ellipse cx=\"625\" cy=\"136\" rx=\"18\" ry=\"5\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1.5\"/>\n\n    <!-- Left Hand Holding Wooden Stud -->\n    <path d=\"M610 175 Q590 195 575 198\" fill=\"none\" stroke=\"#EAB308\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n    <circle cx=\"572\" cy=\"199\" r=\"5\" fill=\"#FBCFE8\"/>\n\n    <!-- Right Arm Raised Swinging a Hammer (Direct Part 1 Action) -->\n    <path d=\"M638 170 Q660 145 675 130\" fill=\"none\" stroke=\"#EAB308\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n    <circle cx=\"678\" cy=\"128\" r=\"5\" fill=\"#FBCFE8\"/>\n    <!-- Claw Hammer -->\n    <line x1=\"675\" y1=\"130\" x2=\"695\" y2=\"105\" stroke=\"#78350F\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n    <polygon points=\"685,102 705,98 700,90 680,94\" fill=\"#334155\"/> <!-- Hammer steel head -->\n  </g>\n\n  <!-- Timber Studs & Framework being Assembled on Right -->\n  <g id=\"t3-framework\">\n    <rect x=\"560\" y=\"140\" width=\"16\" height=\"130\" fill=\"url(#t3-wood)\" stroke=\"#78350F\" stroke-width=\"1.5\"/>\n    <rect x=\"670\" y=\"140\" width=\"16\" height=\"130\" fill=\"url(#t3-wood)\" stroke=\"#78350F\" stroke-width=\"1.5\"/>\n    <polygon points=\"550,140 690,140 690,154 550,154\" fill=\"url(#t3-wood)\" stroke=\"#78350F\" stroke-width=\"1.5\"/>\n  </g>\n\n  <!-- Ground Stack of Wood Planks & Metal Toolbox (Foreground Left) -->\n  <g id=\"t3-ground-materials\" filter=\"url(#t3-shadow)\">\n    <!-- Stack of Lumber Planks -->\n    <polygon points=\"60,450 200,450 220,470 80,470\" fill=\"url(#t3-wood)\" stroke=\"#78350F\" stroke-width=\"1.5\"/>\n    <polygon points=\"55,462 195,462 215,482 75,482\" fill=\"url(#t3-wood)\" stroke=\"#78350F\" stroke-width=\"1.5\"/>\n    <!-- Heavy Duty Metal Toolbox -->\n    <rect x=\"420\" y=\"445\" width=\"65\" height=\"35\" rx=\"3\" fill=\"#DC2626\" stroke=\"#991B1B\" stroke-width=\"2\"/>\n    <rect x=\"442\" y=\"438\" width=\"20\" height=\"7\" rx=\"2\" fill=\"#1E293B\"/> <!-- Handle -->\n    <line x1=\"420\" y1=\"460\" x2=\"485\" y2=\"460\" stroke=\"#991B1B\" stroke-width=\"1.5\"/>\n    <!-- Pair of Protective Work Gloves on top of Lumber -->\n    <ellipse cx=\"140\" cy=\"445\" rx=\"10\" ry=\"6\" fill=\"#F59E0B\" stroke=\"#B45309\" stroke-width=\"1\"/>\n    <ellipse cx=\"155\" cy=\"446\" rx=\"10\" ry=\"6\" fill=\"#F59E0B\" stroke=\"#B45309\" stroke-width=\"1\"/>\n  </g>\n</svg>",
        "hotspots": [
          {
            "id": "hs-t3-ladder",
            "x": 37,
            "y": 52,
            "wordId": "kw-ladder",
            "label": "Aluminum ladder"
          },
          {
            "id": "hs-t3-climb",
            "x": 39,
            "y": 45,
            "wordId": "kw-climb",
            "label": "Climb up ladder"
          },
          {
            "id": "hs-t3-hardhat",
            "x": 41,
            "y": 34,
            "wordId": "kw-hardhat",
            "label": "Yellow hard hat"
          },
          {
            "id": "hs-t3-hammer",
            "x": 86,
            "y": 21,
            "wordId": "kw-hammer",
            "label": "Claw hammer"
          },
          {
            "id": "hs-t3-scaffold",
            "x": 68,
            "y": 42,
            "wordId": "kw-scaffold",
            "label": "Metal scaffolding"
          },
          {
            "id": "hs-t3-plank",
            "x": 16,
            "y": 92,
            "wordId": "kw-plank",
            "label": "Wood planks"
          },
          {
            "id": "hs-t3-assemble",
            "x": 78,
            "y": 36,
            "wordId": "kw-assemble",
            "label": "Assemble wooden frame"
          },
          {
            "id": "hs-t3-uniform",
            "x": 78,
            "y": 40,
            "wordId": "kw-uniform",
            "label": "Safety vest uniform"
          }
        ],
        "keywords": [
          {
            "id": "kw-ladder",
            "word": "Ladder",
            "pos": "n",
            "ipa": "/ˈlæd.ər/",
            "vi": "Cái thang leo",
            "example": "A construction worker is climbing a tall ladder.",
            "collocations": [
              "climb a ladder",
              "lean against a wall",
              "step ladder",
              "extension ladder"
            ]
          },
          {
            "id": "kw-hammer",
            "word": "Hammer",
            "pos": "n",
            "ipa": "/ˈhæm.ər/",
            "vi": "Cây búa đóng đinh",
            "example": "A carpenter is using a hammer to secure the planks.",
            "collocations": [
              "swing a hammer",
              "hold a hammer",
              "hammer nails into wood"
            ]
          },
          {
            "id": "kw-climb",
            "word": "Climb",
            "pos": "v",
            "ipa": "/klaɪm/",
            "vi": "Trèo lên, leo lên",
            "example": "A technician is climbing up to the platform.",
            "collocations": [
              "climb up a ladder",
              "climb the scaffold",
              "climb stairs"
            ]
          },
          {
            "id": "kw-scaffold",
            "word": "Scaffold",
            "pos": "n",
            "ipa": "/ˈskæf.əld/",
            "vi": "Giàn giáo xây dựng",
            "example": "Scaffolding has been erected around the building framework.",
            "collocations": [
              "erect scaffolding",
              "stand on a scaffold",
              "metal scaffolding"
            ]
          },
          {
            "id": "kw-plank",
            "word": "Plank",
            "pos": "n",
            "ipa": "/plæŋk/",
            "vi": "Tấm ván gỗ dài",
            "example": "Planks of wood are stacked neatly on the ground.",
            "collocations": [
              "wooden plank",
              "stack of planks",
              "walk on a plank"
            ]
          },
          {
            "id": "kw-hardhat",
            "word": "Hard hat",
            "pos": "n",
            "ipa": "/ˈhɑːrd ˌhæt/",
            "vi": "Mũ bảo hộ công trường",
            "example": "All workers are wearing protective hard hats.",
            "collocations": [
              "wear a hard hat",
              "safety hard hat",
              "yellow hard hat"
            ]
          },
          {
            "id": "kw-wood",
            "word": "Wood",
            "pos": "n",
            "ipa": "/wʊd/",
            "vi": "Gỗ, thanh gỗ",
            "example": "Pieces of wood are being fastened together.",
            "collocations": [
              "cut wood",
              "pieces of wood",
              "solid wood"
            ]
          },
          {
            "id": "kw-assemble",
            "word": "Assemble",
            "pos": "v",
            "ipa": "/əˈsem.bəl/",
            "vi": "Lắp ráp, ghép nối khung",
            "example": "Workers are assembling a wooden structural frame.",
            "collocations": [
              "assemble a structure",
              "assemble parts",
              "assemble furniture"
            ]
          },
          {
            "id": "kw-fasten",
            "word": "Fasten",
            "pos": "v",
            "ipa": "/ˈfæs.ən/",
            "vi": "Đóng chặt, siết chặt, cố định",
            "example": "He is fastening two beams together with nails.",
            "collocations": [
              "fasten securely",
              "fasten with bolts",
              "fasten beams"
            ]
          },
          {
            "id": "kw-uniform",
            "word": "Uniform",
            "pos": "n",
            "ipa": "/ˈjuː.nə.fɔːrm/",
            "vi": "Đồng phục lao động, đồ bảo hộ",
            "example": "The construction crew is dressed in protective uniforms.",
            "collocations": [
              "work uniform",
              "wear a uniform",
              "reflective uniform"
            ]
          }
        ],
        "drill": {
          "question": "Listen to the four statements. Select the statement that best describes what you see in the picture.",
          "correct": "B",
          "options": [
            {
              "id": "A",
              "text": "The scaffold is being dismantled by the crew.",
              "vi": "Giàn giáo đang bị tháo dỡ bởi đội thợ.",
              "isCorrect": false,
              "trapType": "Bẫy 'Being + V3' (Hành động ngược lại)",
              "explanation": "Giàn giáo đang được dựng rất vững chắc để thi công, không hề có hành động tháo dỡ ('being dismantled')."
            },
            {
              "id": "B",
              "text": "A worker is climbing up a ladder at a construction site.",
              "vi": "Một công nhân đang trèo lên một chiếc thang tại công trường.",
              "isCorrect": true,
              "trapType": "Đáp án chuẩn xác (Direct Action)",
              "explanation": "Miêu tả chính xác 100% người công nhân đội mũ vàng đang trèo từng bậc thang (climbing up a ladder at a construction site)."
            },
            {
              "id": "C",
              "text": "A woman is painting a wooden fence.",
              "vi": "Một người phụ nữ đang sơn một hàng rào gỗ.",
              "isCorrect": false,
              "trapType": "Bẫy hành động và vật thể sai (Wrong Action/Object)",
              "explanation": "Trong tranh không có ai sơn (painting) và không có hàng rào (fence), mà công nhân đang dùng búa đóng đinh ghép khung gỗ."
            },
            {
              "id": "D",
              "text": "The construction area has been completely deserted.",
              "vi": "Khu vực công trường đã hoàn toàn bị bỏ hoang vắng tanh.",
              "isCorrect": false,
              "trapType": "Bẫy chi tiết đối lập (Opposite Detail)",
              "explanation": "Có hai công nhân đang tích cực thi công trên thang và trên sàn giàn giáo, trái ngược hoàn toàn với 'completely deserted'."
            }
          ]
        },
        "describeChallenge": {
          "instructions": "Hãy mô tả hành động của công nhân hoặc cấu trúc công trường bằng 1 câu tiếng Anh hoàn chỉnh:",
          "targetKeywords": [
            "ladder",
            "climb",
            "worker",
            "scaffold",
            "hammer",
            "hard hat",
            "wood"
          ],
          "modelAnswers": [
            {
              "en": "A worker wearing a hard hat is climbing up a ladder.",
              "vi": "Một công nhân đội mũ bảo hộ đang trèo lên một chiếc thang.",
              "score": 100
            },
            {
              "en": "A carpenter is using a hammer to assemble wooden beams on the scaffold.",
              "vi": "Một người thợ mộc đang dùng búa để lắp ghép các thanh gỗ trên giàn giáo.",
              "score": 95
            },
            {
              "en": "Scaffolding has been set up around the outdoor construction site.",
              "vi": "Giàn giáo đã được lắp dựng xung quanh công trường xây dựng ngoài trời.",
              "score": 95
            }
          ]
        }
      },
      {
        "id": "scene-workshop",
        "title": "Tranh 2: Xưởng sửa chữa & Bàn thợ cơ khí",
        "titleEn": "Workshop & Tool Bench",
        "desc": "Thợ cơ khí đeo găng tay thao tác tại bàn làm việc với hộp đồ nghề, đo đạc và kiểm tra thiết bị máy móc.",
        "svg": "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" class=\"part1-svg-art\">\n  <defs>\n    <linearGradient id=\"t3w-wall\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#475569\"/>\n      <stop offset=\"100%\" stop-color=\"#334155\"/>\n    </linearGradient>\n    <linearGradient id=\"t3w-bench\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#D97706\"/>\n      <stop offset=\"10%\" stop-color=\"#B45309\"/>\n      <stop offset=\"100%\" stop-color=\"#78350F\"/>\n    </linearGradient>\n    <linearGradient id=\"t3w-metal\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#64748B\"/>\n      <stop offset=\"50%\" stop-color=\"#94A3B8\"/>\n      <stop offset=\"100%\" stop-color=\"#475569\"/>\n    </linearGradient>\n    <filter id=\"t3w-shadow\" x=\"-5%\" y=\"-5%\" width=\"110%\" height=\"115%\">\n      <feDropShadow dx=\"0\" dy=\"5\" stdDeviation=\"5\" flood-opacity=\"0.22\"/>\n    </filter>\n  </defs>\n\n  <!-- Workshop Background Wall -->\n  <rect x=\"0\" y=\"0\" width=\"800\" height=\"340\" fill=\"url(#t3w-wall)\"/>\n\n  <!-- Concrete Garage Floor -->\n  <rect x=\"0\" y=\"340\" width=\"800\" height=\"160\" fill=\"#1E293B\"/>\n  <line x1=\"0\" y1=\"340\" x2=\"800\" y2=\"340\" stroke=\"#0F172A\" stroke-width=\"4\"/>\n\n  <!-- Left: Tool Pegboard Wall (Neatly organized tools) -->\n  <g id=\"t3w-pegboard\" filter=\"url(#t3w-shadow)\">\n    <rect x=\"60\" y=\"30\" width=\"340\" height=\"200\" rx=\"4\" fill=\"#64748B\" stroke=\"#1E293B\" stroke-width=\"3\"/>\n    <!-- Pegboard dots grid -->\n    <g fill=\"#334155\" opacity=\"0.6\">\n      <circle cx=\"80\" cy=\"50\" r=\"2\"/><circle cx=\"110\" cy=\"50\" r=\"2\"/><circle cx=\"140\" cy=\"50\" r=\"2\"/><circle cx=\"170\" cy=\"50\" r=\"2\"/><circle cx=\"200\" cy=\"50\" r=\"2\"/><circle cx=\"230\" cy=\"50\" r=\"2\"/><circle cx=\"260\" cy=\"50\" r=\"2\"/><circle cx=\"290\" cy=\"50\" r=\"2\"/><circle cx=\"320\" cy=\"50\" r=\"2\"/><circle cx=\"350\" cy=\"50\" r=\"2\"/><circle cx=\"380\" cy=\"50\" r=\"2\"/>\n      <circle cx=\"80\" cy=\"90\" r=\"2\"/><circle cx=\"110\" cy=\"90\" r=\"2\"/><circle cx=\"140\" cy=\"90\" r=\"2\"/><circle cx=\"170\" cy=\"90\" r=\"2\"/><circle cx=\"200\" cy=\"90\" r=\"2\"/><circle cx=\"230\" cy=\"90\" r=\"2\"/><circle cx=\"260\" cy=\"90\" r=\"2\"/><circle cx=\"290\" cy=\"90\" r=\"2\"/><circle cx=\"320\" cy=\"90\" r=\"2\"/><circle cx=\"350\" cy=\"90\" r=\"2\"/><circle cx=\"380\" cy=\"90\" r=\"2\"/>\n      <circle cx=\"80\" cy=\"130\" r=\"2\"/><circle cx=\"110\" cy=\"130\" r=\"2\"/><circle cx=\"140\" cy=\"130\" r=\"2\"/><circle cx=\"170\" cy=\"130\" r=\"2\"/><circle cx=\"200\" cy=\"130\" r=\"2\"/><circle cx=\"230\" cy=\"130\" r=\"2\"/><circle cx=\"260\" cy=\"130\" r=\"2\"/><circle cx=\"290\" cy=\"130\" r=\"2\"/><circle cx=\"320\" cy=\"130\" r=\"2\"/><circle cx=\"350\" cy=\"130\" r=\"2\"/><circle cx=\"380\" cy=\"130\" r=\"2\"/>\n      <circle cx=\"80\" cy=\"170\" r=\"2\"/><circle cx=\"110\" cy=\"170\" r=\"2\"/><circle cx=\"140\" cy=\"170\" r=\"2\"/><circle cx=\"170\" cy=\"170\" r=\"2\"/><circle cx=\"200\" cy=\"170\" r=\"2\"/><circle cx=\"230\" cy=\"170\" r=\"2\"/><circle cx=\"260\" cy=\"170\" r=\"2\"/><circle cx=\"290\" cy=\"170\" r=\"2\"/><circle cx=\"320\" cy=\"170\" r=\"2\"/><circle cx=\"350\" cy=\"170\" r=\"2\"/><circle cx=\"380\" cy=\"170\" r=\"2\"/>\n      <circle cx=\"80\" cy=\"210\" r=\"2\"/><circle cx=\"110\" cy=\"210\" r=\"2\"/><circle cx=\"140\" cy=\"210\" r=\"2\"/><circle cx=\"170\" cy=\"210\" r=\"2\"/><circle cx=\"200\" cy=\"210\" r=\"2\"/><circle cx=\"230\" cy=\"210\" r=\"2\"/><circle cx=\"260\" cy=\"210\" r=\"2\"/><circle cx=\"290\" cy=\"210\" r=\"2\"/><circle cx=\"320\" cy=\"210\" r=\"2\"/><circle cx=\"350\" cy=\"210\" r=\"2\"/><circle cx=\"380\" cy=\"210\" r=\"2\"/>\n    </g>\n    <!-- Wrenches Hanging in descending sizes -->\n    <rect x=\"85\" y=\"60\" width=\"8\" height=\"60\" fill=\"#CBD5E1\" rx=\"2\" transform=\"rotate(15 85 60)\"/>\n    <ellipse cx=\"88\" cy=\"58\" rx=\"8\" ry=\"6\" fill=\"#94A3B8\"/>\n    <rect x=\"115\" y=\"65\" width=\"7\" height=\"50\" fill=\"#CBD5E1\" rx=\"2\" transform=\"rotate(15 115 65)\"/>\n    <ellipse cx=\"118\" cy=\"63\" rx=\"7\" ry=\"5\" fill=\"#94A3B8\"/>\n    <rect x=\"145\" y=\"70\" width=\"6\" height=\"42\" fill=\"#CBD5E1\" rx=\"2\" transform=\"rotate(15 145 70)\"/>\n    <ellipse cx=\"148\" cy=\"68\" rx=\"6\" ry=\"4\" fill=\"#94A3B8\"/>\n    <!-- Hand Saw -->\n    <polygon points=\"190,55 270,55 250,95 190,95\" fill=\"#E2E8F0\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n    <rect x=\"180\" y=\"60\" width=\"16\" height=\"30\" rx=\"3\" fill=\"#D97706\"/>\n    <!-- Screwdrivers row -->\n    <rect x=\"300\" y=\"60\" width=\"5\" height=\"45\" fill=\"#CBD5E1\"/>\n    <rect x=\"298\" y=\"45\" width=\"9\" height=\"18\" fill=\"#EF4444\" rx=\"2\"/>\n    <rect x=\"325\" y=\"60\" width=\"5\" height=\"40\" fill=\"#CBD5E1\"/>\n    <rect x=\"323\" y=\"45\" width=\"9\" height=\"18\" fill=\"#3B82F6\" rx=\"2\"/>\n    <rect x=\"350\" y=\"60\" width=\"5\" height=\"35\" fill=\"#CBD5E1\"/>\n    <rect x=\"348\" y=\"45\" width=\"9\" height=\"18\" fill=\"#10B981\" rx=\"2\"/>\n  </g>\n\n  <!-- Heavy Duty Wood & Steel Workbench -->\n  <g id=\"t3w-workbench\" filter=\"url(#t3w-shadow)\">\n    <!-- Steel Legs & Cross Support -->\n    <rect x=\"80\" y=\"270\" width=\"18\" height=\"190\" fill=\"#1E293B\" rx=\"2\"/>\n    <rect x=\"670\" y=\"270\" width=\"18\" height=\"190\" fill=\"#1E293B\" rx=\"2\"/>\n    <line x1=\"85\" y1=\"390\" x2=\"680\" y2=\"390\" stroke=\"#334155\" stroke-width=\"8\"/>\n    <!-- Tabletop Solid Hardwood Slab -->\n    <polygon points=\"50,250 720,250 735,275 40,275\" fill=\"url(#t3w-bench)\" stroke=\"#451A03\" stroke-width=\"2\"/>\n    <polygon points=\"40,275 735,275 735,282 40,282\" fill=\"#451A03\"/>\n    <!-- Bench Vise on Left Corner -->\n    <rect x=\"60\" y=\"235\" width=\"30\" height=\"20\" fill=\"#475569\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n    <line x1=\"50\" y1=\"245\" x2=\"85\" y2=\"245\" stroke=\"#CBD5E1\" stroke-width=\"5\"/>\n  </g>\n\n  <!-- Open Metal Toolbox on Table (Left side) -->\n  <g id=\"t3w-toolbox\" filter=\"url(#t3w-shadow)\">\n    <!-- Main Box Body -->\n    <rect x=\"130\" y=\"215\" width=\"80\" height=\"40\" rx=\"3\" fill=\"#DC2626\" stroke=\"#991B1B\" stroke-width=\"2\"/>\n    <!-- Cantilever Top Trays Open -->\n    <polygon points=\"105,190 145,190 140,215 100,215\" fill=\"#EF4444\" stroke=\"#991B1B\" stroke-width=\"1.5\"/>\n    <polygon points=\"165,190 205,190 200,215 160,215\" fill=\"#EF4444\" stroke=\"#991B1B\" stroke-width=\"1.5\"/>\n    <!-- Tools inside toolbox -->\n    <line x1=\"110\" y1=\"195\" x2=\"135\" y2=\"195\" stroke=\"#CBD5E1\" stroke-width=\"3\"/>\n    <line x1=\"170\" y1=\"195\" x2=\"195\" y2=\"195\" stroke=\"#FBBF24\" stroke-width=\"3\"/>\n    <!-- Center Handle -->\n    <path d=\"M155 215 L155 200 L185 200 L185 215\" fill=\"none\" stroke=\"#1E293B\" stroke-width=\"3\"/>\n  </g>\n\n  <!-- Mechanical Equipment / Motor Engine on Table being Inspected -->\n  <g id=\"t3w-machine\" filter=\"url(#t3w-shadow)\">\n    <!-- Motor / Machine Base -->\n    <rect x=\"360\" y=\"210\" width=\"130\" height=\"50\" rx=\"4\" fill=\"url(#t3w-metal)\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <!-- Cylinder Head with Cooling Fins -->\n    <rect x=\"380\" y=\"175\" width=\"55\" height=\"35\" rx=\"3\" fill=\"#475569\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n    <line x1=\"380\" y1=\"182\" x2=\"435\" y2=\"182\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    <line x1=\"380\" y1=\"190\" x2=\"435\" y2=\"190\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    <line x1=\"380\" y1=\"198\" x2=\"435\" y2=\"198\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    <!-- Circular Flywheel / Pulley -->\n    <ellipse cx=\"465\" cy=\"225\" rx=\"16\" ry=\"24\" fill=\"#334155\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    <circle cx=\"465\" cy=\"225\" r=\"6\" fill=\"#F8FAFC\"/>\n    <!-- Blue blueprint / technical manual under machine -->\n    <polygon points=\"340,248 510,248 525,268 330,268\" fill=\"#1D4ED8\" stroke=\"#3B82F6\" stroke-width=\"1.5\"/>\n    <line x1=\"350\" y1=\"256\" x2=\"410\" y2=\"256\" stroke=\"#FFFFFF\" stroke-width=\"1.5\" opacity=\"0.8\"/>\n    <line x1=\"350\" y1=\"262\" x2=\"400\" y2=\"262\" stroke=\"#FFFFFF\" stroke-width=\"1.5\" opacity=\"0.8\"/>\n  </g>\n\n  <!-- Mechanic / Technician Bending Over & Inspecting Machine (Right) -->\n  <g id=\"t3w-mechanic\">\n    <!-- Heavy Work Boots -->\n    <ellipse cx=\"585\" cy=\"460\" rx=\"14\" ry=\"7\" fill=\"#451A03\" stroke=\"#1C1917\" stroke-width=\"1.5\"/>\n    <ellipse cx=\"635\" cy=\"460\" rx=\"14\" ry=\"7\" fill=\"#451A03\" stroke=\"#1C1917\" stroke-width=\"1.5\"/>\n    <!-- Dark Blue Work Overalls / Pants -->\n    <line x1=\"585\" y1=\"460\" x2=\"595\" y2=\"365\" stroke=\"#1E3A8A\" stroke-width=\"14\" stroke-linecap=\"round\"/>\n    <line x1=\"635\" y1=\"460\" x2=\"625\" y2=\"365\" stroke=\"#1E3A8A\" stroke-width=\"14\" stroke-linecap=\"round\"/>\n    <!-- Bending Torso in Work Uniform -->\n    <path d=\"M575 365 C575 330, 640 330, 640 365 L615 240 L545 255 Z\" fill=\"#1E40AF\" stroke=\"#1E3A8A\" stroke-width=\"2\"/>\n    <!-- Head & Protective Safety Glasses -->\n    <ellipse cx=\"510\" cy=\"205\" rx=\"16\" ry=\"18\" fill=\"#FBCFE8\"/>\n    <path d=\"M500 200 C500 180, 530 180, 530 200 Z\" fill=\"#451A03\"/>\n    <!-- Transparent Safety Goggles -->\n    <rect x=\"495\" y=\"200\" width=\"22\" height=\"9\" rx=\"3\" fill=\"#38BDF8\" opacity=\"0.6\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n\n    <!-- Left Arm & Hand with Protective Work Glove resting on bench -->\n    <path d=\"M555 250 Q525 270 495 258\" fill=\"none\" stroke=\"#1E40AF\" stroke-width=\"9\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"490\" cy=\"258\" rx=\"8\" ry=\"6\" fill=\"#D97706\" stroke=\"#B45309\" stroke-width=\"1.5\"/> <!-- Leather glove -->\n\n    <!-- Right Arm Holding Caliper/Measuring Tool to Inspect Cylinder -->\n    <path d=\"M560 235 Q500 215 448 200\" fill=\"none\" stroke=\"#1E40AF\" stroke-width=\"9\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"445\" cy=\"198\" rx=\"7\" ry=\"5\" fill=\"#D97706\" stroke=\"#B45309\" stroke-width=\"1.5\"/> <!-- Glove -->\n    <!-- Steel Vernier Caliper / Measuring Gauge -->\n    <line x1=\"430\" y1=\"188\" x2=\"455\" y2=\"208\" stroke=\"#E2E8F0\" stroke-width=\"2.5\"/>\n    <line x1=\"432\" y1=\"186\" x2=\"426\" y2=\"194\" stroke=\"#E2E8F0\" stroke-width=\"2\"/>\n  </g>\n\n  <!-- Spare Tire Leaning on Right Wall / Floor -->\n  <g id=\"t3w-tire\">\n    <ellipse cx=\"715\" cy=\"400\" rx=\"30\" ry=\"45\" fill=\"#0F172A\" stroke=\"#334155\" stroke-width=\"4\"/>\n    <ellipse cx=\"715\" cy=\"400\" rx=\"16\" ry=\"24\" fill=\"#64748B\"/>\n    <circle cx=\"715\" cy=\"400\" r=\"6\" fill=\"#CBD5E1\"/>\n  </g>\n</svg>",
        "hotspots": [
          {
            "id": "hs-t3w-toolbox",
            "x": 21,
            "y": 46,
            "wordId": "kw-toolbox",
            "label": "Metal toolbox"
          },
          {
            "id": "hs-t3w-gloves",
            "x": 56,
            "y": 40,
            "wordId": "kw-gloves",
            "label": "Protective gloves"
          },
          {
            "id": "hs-t3w-inspect",
            "x": 64,
            "y": 42,
            "wordId": "kw-inspect",
            "label": "Inspect equipment"
          },
          {
            "id": "hs-t3w-measure",
            "x": 55,
            "y": 39,
            "wordId": "kw-measure",
            "label": "Measure with tool"
          },
          {
            "id": "hs-t3w-equipment",
            "x": 54,
            "y": 45,
            "wordId": "kw-equipment",
            "label": "Mechanical equipment"
          },
          {
            "id": "hs-t3w-bench",
            "x": 48,
            "y": 55,
            "wordId": "kw-tool",
            "label": "Workbench"
          },
          {
            "id": "hs-t3w-pegboard",
            "x": 26,
            "y": 25,
            "wordId": "kw-tool",
            "label": "Tools on wall"
          },
          {
            "id": "hs-t3w-bend",
            "x": 68,
            "y": 55,
            "wordId": "kw-bend",
            "label": "Bend over machine"
          }
        ],
        "keywords": [
          {
            "id": "kw-toolbox",
            "word": "Toolbox",
            "pos": "n",
            "ipa": "/ˈtuːl.bɑːks/",
            "vi": "Hộp đựng đồ nghề cơ khí",
            "example": "An open red toolbox is placed on the workbench.",
            "collocations": [
              "open a toolbox",
              "metal toolbox",
              "tools in a toolbox"
            ]
          },
          {
            "id": "kw-gloves",
            "word": "Gloves",
            "pos": "n",
            "ipa": "/ɡlʌvz/",
            "vi": "Găng tay bảo hộ",
            "example": "The mechanic is wearing heavy leather gloves.",
            "collocations": [
              "protective gloves",
              "pair of gloves",
              "wear gloves"
            ]
          },
          {
            "id": "kw-equipment",
            "word": "Equipment",
            "pos": "n",
            "ipa": "/ɪˈkwɪp.mənt/",
            "vi": "Thiết bị, máy móc kỹ thuật",
            "example": "He is inspecting electrical and mechanical equipment.",
            "collocations": [
              "heavy equipment",
              "repair equipment",
              "piece of equipment"
            ]
          },
          {
            "id": "kw-inspect",
            "word": "Inspect",
            "pos": "v",
            "ipa": "/ɪnˈspekt/",
            "vi": "Kiểm tra, giám định kỹ thuật",
            "example": "A technician is inspecting a piece of machinery.",
            "collocations": [
              "inspect equipment",
              "inspect closely",
              "visually inspect"
            ]
          },
          {
            "id": "kw-measure",
            "word": "Measure",
            "pos": "v",
            "ipa": "/ˈmeʒ.ər/",
            "vi": "Đo đạc kích thước",
            "example": "The technician is measuring the diameter of the part.",
            "collocations": [
              "measure dimensions",
              "measure with a ruler",
              "accurate measure"
            ]
          },
          {
            "id": "kw-operate",
            "word": "Operate",
            "pos": "v",
            "ipa": "/ˈɑː.pə.reɪt/",
            "vi": "Vận hành máy móc",
            "example": "He knows how to safely operate the workshop machines.",
            "collocations": [
              "operate a machine",
              "operate equipment",
              "smoothly operate"
            ]
          },
          {
            "id": "kw-tool",
            "word": "Tool",
            "pos": "n",
            "ipa": "/tuːl/",
            "vi": "Dụng cụ, công cụ cầm tay",
            "example": "Hand tools are neatly mounted on the pegboard wall.",
            "collocations": [
              "hand tools",
              "set of tools",
              "power tool"
            ]
          },
          {
            "id": "kw-machine",
            "word": "Machine",
            "pos": "n",
            "ipa": "/məˈʃiːn/",
            "vi": "Máy móc, cỗ máy",
            "example": "The machine component is resting on the table.",
            "collocations": [
              "machine parts",
              "assemble a machine",
              "repair a machine"
            ]
          },
          {
            "id": "kw-repair",
            "word": "Repair",
            "pos": "v",
            "ipa": "/rɪˈper/",
            "vi": "Sửa chữa, bảo dưỡng",
            "example": "The mechanic is repairing an engine in the garage.",
            "collocations": [
              "repair a vehicle",
              "repair machinery",
              "under repair"
            ]
          },
          {
            "id": "kw-bend",
            "word": "Bend",
            "pos": "v",
            "ipa": "/bend/",
            "vi": "Cúi gập người, uốn cong",
            "example": "The technician is bending over the workbench.",
            "collocations": [
              "bend over",
              "bend down",
              "bend forward"
            ]
          }
        ],
        "drill": {
          "question": "Listen to the four statements. Select the statement that best describes what you see in the picture.",
          "correct": "C",
          "options": [
            {
              "id": "A",
              "text": "The hand tools are being thrown into a bin.",
              "vi": "Các dụng cụ cầm tay đang bị vứt vào thùng rác.",
              "isCorrect": false,
              "trapType": "Bẫy 'Being + V3' (Hành động sai hoàn toàn)",
              "explanation": "Dụng cụ được treo rất ngăn nắp trên bảng và đặt gọn trong hộp đồ nghề, không hề có ai vứt dụng cụ vào thùng rác."
            },
            {
              "id": "B",
              "text": "A mechanic is replacing a tire on a vehicle.",
              "vi": "Một thợ sửa xe đang thay lốp cho một chiếc ô tô.",
              "isCorrect": false,
              "trapType": "Bẫy hành động sai (Incorrect Action)",
              "explanation": "Có một chiếc lốp dựa bên tường nhưng người thợ không hề thay lốp xe mà đang đứng bên bàn thao tác máy."
            },
            {
              "id": "C",
              "text": "A technician is inspecting a piece of machinery on the workbench.",
              "vi": "Một kỹ thuật viên đang kiểm tra một bộ phận máy móc trên bàn thợ.",
              "isCorrect": true,
              "trapType": "Đáp án chuẩn xác (Direct Action)",
              "explanation": "Miêu tả chính xác 100% người thợ cúi người trên bàn làm việc, đeo kính và găng tay để kiểm tra thiết bị cơ khí (inspecting a piece of machinery)."
            },
            {
              "id": "D",
              "text": "The wooden workbench is completely empty.",
              "vi": "Chiếc bàn thợ bằng gỗ hoàn toàn trống trơn.",
              "isCorrect": false,
              "trapType": "Bẫy chi tiết đối lập (Opposite Detail)",
              "explanation": "Trên bàn có hộp đồ nghề đỏ, máy móc, bản vẽ kỹ thuật và dụng cụ đo, đối lập hoàn toàn với từ 'empty'."
            }
          ]
        },
        "describeChallenge": {
          "instructions": "Hãy mô tả hành động của người thợ cơ khí hoặc các dụng cụ trên bàn bằng 1 câu tiếng Anh hoàn chỉnh:",
          "targetKeywords": [
            "technician",
            "inspect",
            "machinery",
            "workbench",
            "toolbox",
            "gloves",
            "bend"
          ],
          "modelAnswers": [
            {
              "en": "A technician wearing protective gloves is inspecting machinery on the workbench.",
              "vi": "Một kỹ thuật viên đeo găng tay bảo hộ đang kiểm tra máy móc trên bàn thợ.",
              "score": 100
            },
            {
              "en": "A metal toolbox and various tools are placed on the workbench.",
              "vi": "Một hộp đồ nghề kim loại và nhiều dụng cụ được đặt trên bàn thợ.",
              "score": 95
            },
            {
              "en": "A mechanic is bending over a machine part in the workshop.",
              "vi": "Một người thợ cơ khí đang cúi người qua một bộ phận máy trong xưởng.",
              "score": 95
            }
          ]
        }
      },
      {
        "id": "scene-roadwork",
        "title": "Tranh 3: Thi công & Bảo trì đường phố",
        "titleEn": "Roadwork & Pavement Maintenance",
        "desc": "Công nhân làm đường mặc đồng phục phản quang sử dụng xẻng, quét dọn vỉa hè và bảo trì mặt đường.",
        "svg": "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" class=\"part1-svg-art\">\n  <defs>\n    <linearGradient id=\"t3r-sky\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#93C5FD\"/>\n      <stop offset=\"100%\" stop-color=\"#E2E8F0\"/>\n    </linearGradient>\n    <linearGradient id=\"t3r-asphalt\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#475569\"/>\n      <stop offset=\"50%\" stop-color=\"#334155\"/>\n      <stop offset=\"100%\" stop-color=\"#1E293B\"/>\n    </linearGradient>\n    <filter id=\"t3r-shadow\" x=\"-5%\" y=\"-5%\" width=\"110%\" height=\"115%\">\n      <feDropShadow dx=\"0\" dy=\"5\" stdDeviation=\"5\" flood-opacity=\"0.2\"/>\n    </filter>\n  </defs>\n\n  <!-- Clear Sky -->\n  <rect x=\"0\" y=\"0\" width=\"800\" height=\"260\" fill=\"url(#t3r-sky)\"/>\n\n  <!-- Distant City Buildings & Trees -->\n  <g id=\"t3r-backdrop\" opacity=\"0.6\">\n    <rect x=\"80\" y=\"120\" width=\"70\" height=\"140\" fill=\"#94A3B8\"/>\n    <rect x=\"170\" y=\"90\" width=\"85\" height=\"170\" fill=\"#64748B\"/>\n    <rect x=\"270\" y=\"140\" width=\"60\" height=\"120\" fill=\"#94A3B8\"/>\n    <ellipse cx=\"40\" cy=\"245\" rx=\"35\" ry=\"30\" fill=\"#15803D\"/>\n    <ellipse cx=\"360\" cy=\"245\" rx=\"45\" ry=\"35\" fill=\"#15803D\"/>\n  </g>\n\n  <!-- Road Roller / Asphalt Compactor Vehicle (Background Right) -->\n  <g id=\"t3r-roller\" opacity=\"0.85\">\n    <rect x=\"580\" y=\"160\" width=\"160\" height=\"90\" rx=\"6\" fill=\"#F59E0B\" stroke=\"#D97706\" stroke-width=\"3\"/>\n    <rect x=\"620\" y=\"130\" width=\"80\" height=\"40\" rx=\"3\" fill=\"#0F172A\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <rect x=\"630\" y=\"135\" width=\"60\" height=\"25\" fill=\"#BAE6FD\" opacity=\"0.8\"/>\n    <!-- Heavy Steel Rolling Drum -->\n    <ellipse cx=\"610\" cy=\"260\" rx=\"35\" ry=\"25\" fill=\"#334155\" stroke=\"#1E293B\" stroke-width=\"3\"/>\n    <ellipse cx=\"710\" cy=\"260\" rx=\"35\" ry=\"25\" fill=\"#334155\" stroke=\"#1E293B\" stroke-width=\"3\"/>\n    <circle cx=\"680\" cy=\"120\" r=\"8\" fill=\"#EF4444\"/> <!-- Warning beacon -->\n  </g>\n\n  <!-- Roadway Asphalt (Fresh dark section on left, older pavement on right) -->\n  <polygon points=\"0,260 800,260 800,500 0,500\" fill=\"url(#t3r-asphalt)\"/>\n\n  <!-- Concrete Curb & Sidewalk Pavement (Foreground Right) -->\n  <polygon points=\"480,310 800,310 800,500 420,500\" fill=\"#CBD5E1\"/>\n  <polygon points=\"460,310 480,310 420,500 395,500\" fill=\"#94A3B8\"/> <!-- Curb edge -->\n  <!-- Sidewalk expansion grooves -->\n  <line x1=\"560\" y1=\"310\" x2=\"520\" y2=\"500\" stroke=\"#64748B\" stroke-width=\"2\"/>\n  <line x1=\"680\" y1=\"310\" x2=\"660\" y2=\"500\" stroke=\"#64748B\" stroke-width=\"2\"/>\n\n  <!-- Fresh Asphalt Patch (Under Construction) -->\n  <polygon points=\"120,330 380,330 350,480 80,480\" fill=\"#0F172A\" stroke=\"#334155\" stroke-width=\"2\"/>\n\n  <!-- Orange Traffic Safety Cones (Marking work perimeter) -->\n  <g id=\"t3r-cones\">\n    <!-- Cone 1 (Foreground Left) -->\n    <ellipse cx=\"90\" cy=\"455\" rx=\"20\" ry=\"7\" fill=\"#EA580C\"/>\n    <polygon points=\"80,455 100,455 93,400 87,400\" fill=\"#F97316\"/>\n    <polygon points=\"84,435 96,435 94,420 86,420\" fill=\"#FFFFFF\"/>\n    <!-- Cone 2 (Mid ground) -->\n    <ellipse cx=\"160\" cy=\"345\" rx=\"14\" ry=\"5\" fill=\"#EA580C\"/>\n    <polygon points=\"152,345 168,345 162,305 158,305\" fill=\"#F97316\"/>\n    <polygon points=\"155,330 165,330 163,320 157,320\" fill=\"#FFFFFF\"/>\n    <!-- Warning Barrier Pole on Stand -->\n    <rect x=\"230\" y=\"275\" width=\"6\" height=\"55\" fill=\"#1E293B\"/>\n    <ellipse cx=\"233\" cy=\"330\" rx=\"15\" ry=\"5\" fill=\"#334155\"/>\n    <rect x=\"210\" y=\"275\" width=\"46\" height=\"18\" fill=\"#FACC15\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n    <line x1=\"216\" y1=\"275\" x2=\"226\" y2=\"293\" stroke=\"#1E293B\" stroke-width=\"3\"/>\n    <line x1=\"234\" y1=\"275\" x2=\"244\" y2=\"293\" stroke=\"#1E293B\" stroke-width=\"3\"/>\n  </g>\n\n  <!-- Worker 1 Holding Shovel & Spreading Asphalt (Center-Left) -->\n  <g id=\"t3r-shovel-worker\">\n    <!-- Heavy Rubber Work Boots -->\n    <ellipse cx=\"270\" cy=\"445\" rx=\"13\" ry=\"6\" fill=\"#1C1917\"/>\n    <ellipse cx=\"315\" cy=\"440\" rx=\"13\" ry=\"6\" fill=\"#1C1917\"/>\n    <!-- Dark Work Pants -->\n    <line x1=\"270\" y1=\"445\" x2=\"280\" y2=\"355\" stroke=\"#1E293B\" stroke-width=\"12\" stroke-linecap=\"round\"/>\n    <line x1=\"315\" y1=\"440\" x2=\"305\" y2=\"355\" stroke=\"#1E293B\" stroke-width=\"12\" stroke-linecap=\"round\"/>\n    <!-- Orange Reflective Safety Vest & Body -->\n    <path d=\"M275 355 C275 295, 315 295, 315 355 Z\" fill=\"#F97316\"/>\n    <line x1=\"280\" y1=\"325\" x2=\"310\" y2=\"325\" stroke=\"#FFFFFF\" stroke-width=\"3.5\"/>\n    <!-- Head & Yellow Hard Hat -->\n    <ellipse cx=\"295\" cy=\"270\" rx=\"13\" ry=\"15\" fill=\"#FBCFE8\"/>\n    <path d=\"M280 265 C280 248, 310 248, 310 265 Z\" fill=\"#FACC15\" stroke=\"#CA8A04\" stroke-width=\"2\"/>\n    <ellipse cx=\"295\" cy=\"265\" rx=\"17\" ry=\"5\" fill=\"#FACC15\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n\n    <!-- Arms Holding Shovel -->\n    <path d=\"M282 315 Q265 340 250 365\" fill=\"none\" stroke=\"#F97316\" stroke-width=\"8\" stroke-linecap=\"round\"/>\n    <circle cx=\"248\" cy=\"367\" r=\"5\" fill=\"#D97706\"/> <!-- Work glove -->\n    <path d=\"M308 315 Q295 355 275 385\" fill=\"none\" stroke=\"#F97316\" stroke-width=\"8\" stroke-linecap=\"round\"/>\n    <circle cx=\"273\" cy=\"387\" r=\"5\" fill=\"#D97706\"/> <!-- Work glove -->\n\n    <!-- Long-Handled Construction Shovel -->\n    <line x1=\"305\" y1=\"320\" x2=\"210\" y2=\"435\" stroke=\"#D97706\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n    <!-- Metal Spade Blade touching fresh asphalt -->\n    <polygon points=\"195,430 215,415 228,435 208,450\" fill=\"#64748B\" stroke=\"#334155\" stroke-width=\"2\"/>\n  </g>\n\n  <!-- Worker 2 Sweeping Curb Pavement with Long Broom (Right) -->\n  <g id=\"t3r-sweeper\">\n    <!-- Boots on Sidewalk -->\n    <ellipse cx=\"485\" cy=\"425\" rx=\"12\" ry=\"5\" fill=\"#1C1917\"/>\n    <ellipse cx=\"520\" cy=\"420\" rx=\"12\" ry=\"5\" fill=\"#1C1917\"/>\n    <!-- Work Pants -->\n    <line x1=\"485\" y1=\"425\" x2=\"495\" y2=\"345\" stroke=\"#1E3A8A\" stroke-width=\"11\" stroke-linecap=\"round\"/>\n    <line x1=\"520\" y1=\"420\" x2=\"515\" y2=\"345\" stroke=\"#1E3A8A\" stroke-width=\"11\" stroke-linecap=\"round\"/>\n    <!-- Fluorescent Green Safety Vest -->\n    <path d=\"M485 345 C485 290, 525 290, 525 345 Z\" fill=\"#84CC16\"/>\n    <line x1=\"490\" y1=\"320\" x2=\"520\" y2=\"320\" stroke=\"#FFFFFF\" stroke-width=\"3\"/>\n    <!-- Head & White Hard Hat -->\n    <ellipse cx=\"505\" cy=\"265\" rx=\"13\" ry=\"15\" fill=\"#FBCFE8\"/>\n    <path d=\"M492 260 C492 245, 518 245, 518 260 Z\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"2\"/>\n    <ellipse cx=\"505\" cy=\"260\" rx=\"16\" ry=\"5\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1.5\"/>\n\n    <!-- Arms Holding Long Broom Handle -->\n    <path d=\"M490 310 Q475 335 460 360\" fill=\"none\" stroke=\"#84CC16\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n    <circle cx=\"458\" cy=\"362\" r=\"5\" fill=\"#D97706\"/>\n    <path d=\"M515 310 Q500 345 478 378\" fill=\"none\" stroke=\"#84CC16\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n    <circle cx=\"476\" cy=\"380\" r=\"5\" fill=\"#D97706\"/>\n\n    <!-- Push Broom -->\n    <line x1=\"510\" y1=\"315\" x2=\"435\" y2=\"445\" stroke=\"#D97706\" stroke-width=\"4.5\" stroke-linecap=\"round\"/>\n    <!-- Stiff Bristle Brush Head on Pavement -->\n    <polygon points=\"410,440 455,440 460,455 415,455\" fill=\"#78350F\" stroke=\"#451A03\" stroke-width=\"2\"/>\n    <line x1=\"412\" y1=\"455\" x2=\"412\" y2=\"462\" stroke=\"#B45309\" stroke-width=\"2\"/>\n    <line x1=\"425\" y1=\"455\" x2=\"425\" y2=\"462\" stroke=\"#B45309\" stroke-width=\"2\"/>\n    <line x1=\"438\" y1=\"455\" x2=\"438\" y2=\"462\" stroke=\"#B45309\" stroke-width=\"2\"/>\n    <line x1=\"452\" y1=\"455\" x2=\"452\" y2=\"462\" stroke=\"#B45309\" stroke-width=\"2\"/>\n  </g>\n</svg>",
        "hotspots": [
          {
            "id": "hs-t3r-shovel",
            "x": 28,
            "y": 82,
            "wordId": "kw-shovel",
            "label": "Shovel"
          },
          {
            "id": "hs-t3r-pavement",
            "x": 75,
            "y": 78,
            "wordId": "kw-pavement",
            "label": "Sidewalk pavement"
          },
          {
            "id": "hs-t3r-sweep",
            "x": 62,
            "y": 70,
            "wordId": "kw-sweep",
            "label": "Sweep with broom"
          },
          {
            "id": "hs-t3r-broom",
            "x": 55,
            "y": 88,
            "wordId": "kw-broom",
            "label": "Push broom"
          },
          {
            "id": "hs-t3r-uniform",
            "x": 37,
            "y": 62,
            "wordId": "kw-uniform",
            "label": "Reflective safety vest"
          },
          {
            "id": "hs-t3r-pave",
            "x": 30,
            "y": 75,
            "wordId": "kw-pave",
            "label": "Pave the roadway"
          },
          {
            "id": "hs-t3r-cone",
            "x": 12,
            "y": 85,
            "wordId": "kw-pole",
            "label": "Traffic safety cone"
          },
          {
            "id": "hs-t3r-repair",
            "x": 38,
            "y": 65,
            "wordId": "kw-repair",
            "label": "Repair the street"
          }
        ],
        "keywords": [
          {
            "id": "kw-pavement",
            "word": "Pavement",
            "pos": "n",
            "ipa": "/ˈpeɪv.mənt/",
            "vi": "Mặt đường, vỉa hè lát bê tông",
            "example": "Workers are repairing the concrete pavement.",
            "collocations": [
              "along the pavement",
              "walk on the pavement",
              "crack in the pavement"
            ]
          },
          {
            "id": "kw-shovel",
            "word": "Shovel",
            "pos": "n",
            "ipa": "/ˈʃʌv.əl/",
            "vi": "Cái xẻng xúc đất đá",
            "example": "A road worker is holding a heavy shovel.",
            "collocations": [
              "dig with a shovel",
              "handle of a shovel",
              "shovel gravel"
            ]
          },
          {
            "id": "kw-sweep",
            "word": "Sweep",
            "pos": "v",
            "ipa": "/swiːp/",
            "vi": "Quét dọn rác, đất cát",
            "example": "A man is sweeping debris off the sidewalk curb.",
            "collocations": [
              "sweep the street",
              "sweep the floor",
              "sweep dirt"
            ]
          },
          {
            "id": "kw-broom",
            "word": "Broom",
            "pos": "n",
            "ipa": "/bruːm/",
            "vi": "Cái chổi quét cán dài",
            "example": "He is using a stiff-bristle broom to clean the area.",
            "collocations": [
              "push broom",
              "handle of a broom",
              "sweep with a broom"
            ]
          },
          {
            "id": "kw-uniform",
            "word": "Uniform",
            "pos": "n",
            "ipa": "/ˈjuː.nə.fɔːrm/",
            "vi": "Đồng phục bảo hộ phản quang",
            "example": "Both workers are dressed in high-visibility uniforms.",
            "collocations": [
              "safety uniform",
              "wear a uniform",
              "reflective uniform"
            ]
          },
          {
            "id": "kw-pave",
            "word": "Pave",
            "pos": "v",
            "ipa": "/peɪv/",
            "vi": "Trải nhựa, lát mặt đường",
            "example": "The crew is paving a section of the city street.",
            "collocations": [
              "pave a road",
              "paved walkway",
              "newly paved"
            ]
          },
          {
            "id": "kw-repair",
            "word": "Repair",
            "pos": "v",
            "ipa": "/rɪˈper/",
            "vi": "Bảo trì, sửa chữa đường sá",
            "example": "Road work is underway to repair the damaged asphalt.",
            "collocations": [
              "repair a street",
              "under repair",
              "repair work"
            ]
          },
          {
            "id": "kw-pole",
            "word": "Pole",
            "pos": "n",
            "ipa": "/poʊl/",
            "vi": "Cột chắn, rào chắn công trình",
            "example": "Warning poles and safety cones mark the work zone.",
            "collocations": [
              "barrier pole",
              "traffic pole",
              "utility pole"
            ]
          },
          {
            "id": "kw-kneel",
            "word": "Kneel",
            "pos": "v",
            "ipa": "/niːl/",
            "vi": "Quỳ gối",
            "example": "A worker kneels down to smooth the edge of the curb.",
            "collocations": [
              "kneel on the ground",
              "kneel down",
              "kneeling worker"
            ]
          },
          {
            "id": "kw-lift",
            "word": "Lift",
            "pos": "v",
            "ipa": "/lɪft/",
            "vi": "Nâng, nhấc vật nặng",
            "example": "He lifts a shovel full of fresh asphalt.",
            "collocations": [
              "lift heavy objects",
              "lift a shovel",
              "lift with two hands"
            ]
          }
        ],
        "drill": {
          "question": "Listen to the four statements. Select the statement that best describes what you see in the picture.",
          "correct": "A",
          "options": [
            {
              "id": "A",
              "text": "Workers are performing maintenance on a roadway.",
              "vi": "Các công nhân đang tiến hành bảo trì trên một lòng đường.",
              "isCorrect": true,
              "trapType": "Đáp án chuẩn xác (Direct Action)",
              "explanation": "Câu miêu tả chuẩn xác hoạt động thi công và sửa chữa mặt đường của các công nhân (performing maintenance on a roadway)."
            },
            {
              "id": "B",
              "text": "The pavement is being washed with a high-pressure hose.",
              "vi": "Mặt đường đang được xịt rửa bằng vòi nước áp lực cao.",
              "isCorrect": false,
              "trapType": "Bẫy 'Being + V3' (Hành động sai hoàn toàn)",
              "explanation": "Không hề có vòi xịt nước áp lực cao (high-pressure hose) nào đang xịt rửa vỉa hè."
            },
            {
              "id": "C",
              "text": "A traffic police officer is directing vehicles at a crosswalk.",
              "vi": "Một cảnh sát giao thông đang điều tiết xe cộ tại lối qua đường.",
              "isCorrect": false,
              "trapType": "Bẫy nhân vật sai (Wrong Subject)",
              "explanation": "Trong tranh là các công nhân mặc áo phản quang làm đường cầm xẻng và chổi, không phải cảnh sát giao thông."
            },
            {
              "id": "D",
              "text": "All of the safety cones have been stacked into a truck.",
              "vi": "Tất cả các nón giao thông an toàn đã được xếp chồng vào xe tải.",
              "isCorrect": false,
              "trapType": "Bẫy chi tiết đối lập (Opposite Detail)",
              "explanation": "Các nón bảo hộ giao thông màu cam đang được đặt rải rác trên mặt đường để phân luồng, không hề được xếp vào xe tải."
            }
          ]
        },
        "describeChallenge": {
          "instructions": "Hãy mô tả hành động sửa đường của các công nhân bằng 1 câu tiếng Anh hoàn chỉnh:",
          "targetKeywords": [
            "worker",
            "shovel",
            "pavement",
            "sweep",
            "broom",
            "repair",
            "uniform"
          ],
          "modelAnswers": [
            {
              "en": "Workers in reflective uniforms are repairing the street pavement.",
              "vi": "Các công nhân mặc đồng phục phản quang đang sửa chữa mặt đường phố.",
              "score": 100
            },
            {
              "en": "A man is holding a shovel to spread asphalt on the road.",
              "vi": "Một người đàn ông đang cầm xẻng để trải nhựa đường.",
              "score": 95
            },
            {
              "en": "A road worker is sweeping debris along the sidewalk curb.",
              "vi": "Một công nhân làm đường đang quét dọn đất đá dọc theo mép vỉa hè.",
              "score": 95
            }
          ]
        }
      }
    ]
  },
  {
    "id": "parks-outdoors",
    "title": "Công viên, Đường phố & Hoạt động ngoài trời (Parks & Outdoors)",
    "desc": "Không gian thiên nhiên công viên đô thị, chăm sóc sân vườn cảnh quan và phố xá ngoài trời. Nhận diện các tư thế thư giãn (sit, stroll, lean) và trạng thái tĩnh vật của ngoại cảnh (fountain, bench, path).",
    "icon": "🌳",
    "scenes": [
      {
        "id": "scene-park-fountain",
        "title": "Tranh 1: Lối đi dạo công viên & Đài phun nước",
        "titleEn": "Park Pathway & Water Fountain",
        "desc": "Người dân ngồi thư giãn trên ghế dài gỗ, tản bộ dọc con đường uốn lượn bên cạnh đài phun nước.",
        "svg": "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" class=\"part1-svg-art\">\n  <defs>\n    <linearGradient id=\"t4-sky\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#60A5FA\"/>\n      <stop offset=\"60%\" stop-color=\"#93C5FD\"/>\n      <stop offset=\"100%\" stop-color=\"#E0F2FE\"/>\n    </linearGradient>\n    <linearGradient id=\"t4-grass\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#4ADE80\"/>\n      <stop offset=\"50%\" stop-color=\"#22C55E\"/>\n      <stop offset=\"100%\" stop-color=\"#16A34A\"/>\n    </linearGradient>\n    <linearGradient id=\"t4-path\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#E2E8F0\"/>\n      <stop offset=\"50%\" stop-color=\"#CBD5E1\"/>\n      <stop offset=\"100%\" stop-color=\"#94A3B8\"/>\n    </linearGradient>\n    <linearGradient id=\"t4-stone\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#CBD5E1\"/>\n      <stop offset=\"50%\" stop-color=\"#E2E8F0\"/>\n      <stop offset=\"100%\" stop-color=\"#94A3B8\"/>\n    </linearGradient>\n    <radialGradient id=\"t4-water-glow\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n      <stop offset=\"0%\" stop-color=\"#BAE6FD\" stop-opacity=\"0.9\"/>\n      <stop offset=\"100%\" stop-color=\"#0284C7\" stop-opacity=\"0.4\"/>\n    </radialGradient>\n    <filter id=\"t4-shadow\" x=\"-5%\" y=\"-5%\" width=\"110%\" height=\"115%\">\n      <feDropShadow dx=\"0\" dy=\"5\" stdDeviation=\"5\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n\n  <!-- Blue Sky -->\n  <rect x=\"0\" y=\"0\" width=\"800\" height=\"250\" fill=\"url(#t4-sky)\"/>\n  <!-- Gentle White Clouds -->\n  <ellipse cx=\"200\" cy=\"70\" rx=\"70\" ry=\"20\" fill=\"#FFFFFF\" opacity=\"0.75\"/>\n  <ellipse cx=\"580\" cy=\"60\" rx=\"90\" ry=\"24\" fill=\"#FFFFFF\" opacity=\"0.75\"/>\n\n  <!-- Distant City Park Trees & Greenery -->\n  <g id=\"t4-distant-trees\" opacity=\"0.8\">\n    <ellipse cx=\"80\" cy=\"220\" rx=\"60\" ry=\"45\" fill=\"#15803D\"/>\n    <ellipse cx=\"180\" cy=\"210\" rx=\"70\" ry=\"50\" fill=\"#16A34A\"/>\n    <ellipse cx=\"300\" cy=\"225\" rx=\"55\" ry=\"40\" fill=\"#15803D\"/>\n    <ellipse cx=\"640\" cy=\"205\" rx=\"80\" ry=\"60\" fill=\"#166534\"/>\n    <ellipse cx=\"740\" cy=\"215\" rx=\"65\" ry=\"50\" fill=\"#15803D\"/>\n  </g>\n\n  <!-- Park Lawn Grass -->\n  <polygon points=\"0,230 800,230 800,500 0,500\" fill=\"url(#t4-grass)\"/>\n\n  <!-- Winding Stone Pathway (Curves from left foreground across to center) -->\n  <path d=\"M0 450 Q220 440 280 340 Q340 250 480 230 L540 230 Q400 250 350 340 Q300 450 120 500 L0 500 Z\" fill=\"url(#t4-path)\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n  <!-- Stone pavers texture lines -->\n  <path d=\"M40 460 Q180 445 270 380\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-dasharray=\"8,6\" fill=\"none\"/>\n  <path d=\"M120 485 Q250 450 310 350\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-dasharray=\"8,6\" fill=\"none\"/>\n\n  <!-- Prominent Central Water Fountain -->\n  <g id=\"t4-fountain\" filter=\"url(#t4-shadow)\">\n    <!-- Lower Basin Outer Rim -->\n    <ellipse cx=\"500\" cy=\"360\" rx=\"130\" ry=\"40\" fill=\"url(#t4-stone)\" stroke=\"#64748B\" stroke-width=\"3\"/>\n    <!-- Water pool inside lower basin -->\n    <ellipse cx=\"500\" cy=\"358\" rx=\"118\" ry=\"32\" fill=\"url(#t4-water-glow)\"/>\n    <!-- Water concentric ripples -->\n    <ellipse cx=\"500\" cy=\"358\" rx=\"80\" ry=\"20\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"1.5\" opacity=\"0.6\"/>\n    <ellipse cx=\"500\" cy=\"358\" rx=\"45\" ry=\"11\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"1.5\" opacity=\"0.7\"/>\n\n    <!-- Center Pedestal -->\n    <rect x=\"488\" y=\"270\" width=\"24\" height=\"90\" fill=\"url(#t4-stone)\" stroke=\"#64748B\" stroke-width=\"2\"/>\n    <ellipse cx=\"500\" cy=\"270\" rx=\"45\" ry=\"14\" fill=\"url(#t4-stone)\" stroke=\"#64748B\" stroke-width=\"2\"/>\n    <!-- Upper small basin pool -->\n    <ellipse cx=\"500\" cy=\"269\" rx=\"38\" ry=\"10\" fill=\"#38BDF8\"/>\n\n    <!-- Top Spout Pedestal -->\n    <rect x=\"494\" y=\"235\" width=\"12\" height=\"35\" fill=\"url(#t4-stone)\"/>\n    <circle cx=\"500\" cy=\"232\" r=\"8\" fill=\"#64748B\"/>\n\n    <!-- Upward Spraying Water Jets -->\n    <!-- Main Center Spray -->\n    <path d=\"M500 230 Q500 160 495 140 Q500 135 505 140 Q500 160 500 230\" fill=\"#E0F2FE\" opacity=\"0.8\"/>\n    <!-- Cascading Water Arcs -->\n    <path d=\"M500 145 Q470 180 465 265\" fill=\"none\" stroke=\"#BAE6FD\" stroke-width=\"2.5\" stroke-linecap=\"round\" opacity=\"0.85\"/>\n    <path d=\"M500 145 Q530 180 535 265\" fill=\"none\" stroke=\"#BAE6FD\" stroke-width=\"2.5\" stroke-linecap=\"round\" opacity=\"0.85\"/>\n    <path d=\"M495 160 Q440 210 420 345\" fill=\"none\" stroke=\"#BAE6FD\" stroke-width=\"2\" stroke-linecap=\"round\" opacity=\"0.75\"/>\n    <path d=\"M505 160 Q560 210 580 345\" fill=\"none\" stroke=\"#BAE6FD\" stroke-width=\"2\" stroke-linecap=\"round\" opacity=\"0.75\"/>\n    <!-- Water Splashes / Droplets -->\n    <circle cx=\"496\" cy=\"138\" r=\"3\" fill=\"#FFFFFF\"/>\n    <circle cx=\"504\" cy=\"142\" r=\"2.5\" fill=\"#FFFFFF\"/>\n    <circle cx=\"462\" cy=\"270\" r=\"3\" fill=\"#FFFFFF\"/>\n    <circle cx=\"538\" cy=\"270\" r=\"3\" fill=\"#FFFFFF\"/>\n  </g>\n\n  <!-- Flower Beds Surrounding the Fountain Basin -->\n  <g id=\"t4-flowerbeds\">\n    <ellipse cx=\"370\" cy=\"385\" rx=\"28\" ry=\"14\" fill=\"#15803D\"/>\n    <circle cx=\"360\" cy=\"382\" r=\"5\" fill=\"#EF4444\"/><circle cx=\"372\" cy=\"380\" r=\"5\" fill=\"#F59E0B\"/><circle cx=\"384\" cy=\"384\" r=\"5\" fill=\"#EC4899\"/>\n    <ellipse cx=\"630\" cy=\"385\" rx=\"30\" ry=\"14\" fill=\"#15803D\"/>\n    <circle cx=\"620\" cy=\"382\" r=\"5\" fill=\"#A855F7\"/><circle cx=\"632\" cy=\"380\" r=\"5\" fill=\"#FACC15\"/><circle cx=\"644\" cy=\"384\" r=\"5\" fill=\"#EF4444\"/>\n  </g>\n\n  <!-- Left: Pedestrian Strolling Along Pathway -->\n  <g id=\"t4-stroller\">\n    <!-- Legs walking -->\n    <line x1=\"165\" y1=\"365\" x2=\"152\" y2=\"425\" stroke=\"#1E293B\" stroke-width=\"9\" stroke-linecap=\"round\"/>\n    <line x1=\"175\" y1=\"365\" x2=\"185\" y2=\"420\" stroke=\"#1E293B\" stroke-width=\"9\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"148\" cy=\"428\" rx=\"9\" ry=\"4\" fill=\"#475569\"/>\n    <ellipse cx=\"188\" cy=\"424\" rx=\"9\" ry=\"4\" fill=\"#475569\"/>\n    <!-- Torso in casual green jacket -->\n    <path d=\"M155 270 C155 250, 185 250, 185 270 L188 365 L152 365 Z\" fill=\"#0284C7\"/>\n    <!-- Head & Hair -->\n    <ellipse cx=\"170\" cy=\"225\" rx=\"13\" ry=\"15\" fill=\"#FBCFE8\"/>\n    <path d=\"M158 220 C158 202, 182 202, 182 220 Z\" fill=\"#78350F\"/>\n    <!-- Arm swinging naturally while walking -->\n    <path d=\"M160 275 Q150 305 142 325\" fill=\"none\" stroke=\"#0284C7\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n    <circle cx=\"140\" cy=\"328\" r=\"5\" fill=\"#FBCFE8\"/>\n    <path d=\"M180 275 Q190 305 198 322\" fill=\"none\" stroke=\"#0284C7\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n    <circle cx=\"200\" cy=\"324\" r=\"5\" fill=\"#FBCFE8\"/>\n  </g>\n\n  <!-- Victorian Cast-Iron Lamp Post on Left Pathway -->\n  <g id=\"t4-lamp\" filter=\"url(#t4-shadow)\">\n    <rect x=\"78\" y=\"220\" width=\"8\" height=\"200\" fill=\"#1E293B\" rx=\"2\"/>\n    <ellipse cx=\"82\" cy=\"420\" rx=\"16\" ry=\"6\" fill=\"#0F172A\"/>\n    <!-- Lantern head -->\n    <polygon points=\"70,180 94,180 90,220 74,220\" fill=\"#FEF08A\" opacity=\"0.6\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n    <polygon points=\"66,180 98,180 82,165\" fill=\"#0F172A\"/>\n  </g>\n\n  <!-- Big Shady Oak Tree on Right Foreground -->\n  <g id=\"t4-tree\">\n    <!-- Tree Trunk & Roots -->\n    <path d=\"M720 220 C715 280, 725 350, 750 440 L705 440 C700 370, 705 280, 695 220 Z\" fill=\"#78350F\"/>\n    <!-- Tree Canopy (Shade over bench) -->\n    <ellipse cx=\"710\" cy=\"120\" rx=\"110\" ry=\"85\" fill=\"#15803D\" opacity=\"0.95\"/>\n    <ellipse cx=\"640\" cy=\"140\" rx=\"70\" ry=\"60\" fill=\"#16A34A\" opacity=\"0.9\"/>\n    <ellipse cx=\"760\" cy=\"110\" rx=\"80\" ry=\"65\" fill=\"#166534\" opacity=\"0.9\"/>\n  </g>\n\n  <!-- Classic Wooden Park Bench with Cast Iron Frame (Under Tree Shade) -->\n  <g id=\"t4-bench\" filter=\"url(#t4-shadow)\">\n    <!-- Cast Iron Curved Legs -->\n    <path d=\"M575 425 C575 390, 585 365, 595 365 L595 425\" fill=\"none\" stroke=\"#0F172A\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n    <path d=\"M685 425 C685 390, 695 365, 705 365 L705 425\" fill=\"none\" stroke=\"#0F172A\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n    <!-- Bench Wooden Seat Slats -->\n    <polygon points=\"560,360 720,360 725,372 565,372\" fill=\"#D97706\" stroke=\"#B45309\" stroke-width=\"1.5\"/>\n    <polygon points=\"562,374 722,374 727,386 567,386\" fill=\"#D97706\" stroke=\"#B45309\" stroke-width=\"1.5\"/>\n    <!-- Bench Wooden Backrest Slats -->\n    <polygon points=\"575,305 715,305 715,316 575,316\" fill=\"#D97706\" stroke=\"#B45309\" stroke-width=\"1.5\"/>\n    <polygon points=\"575,320 715,320 715,331 575,331\" fill=\"#D97706\" stroke=\"#B45309\" stroke-width=\"1.5\"/>\n    <polygon points=\"575,335 715,335 715,346 575,346\" fill=\"#D97706\" stroke=\"#B45309\" stroke-width=\"1.5\"/>\n  </g>\n\n  <!-- Person Sitting & Relaxing on the Bench (Seated Woman reading/relaxing) -->\n  <g id=\"t4-sitter\">\n    <!-- Seated Legs -->\n    <line x1=\"620\" y1=\"365\" x2=\"620\" y2=\"425\" stroke=\"#334155\" stroke-width=\"9\" stroke-linecap=\"round\"/>\n    <line x1=\"638\" y1=\"365\" x2=\"638\" y2=\"425\" stroke=\"#334155\" stroke-width=\"9\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"620\" cy=\"428\" rx=\"8\" ry=\"4\" fill=\"#0F172A\"/>\n    <ellipse cx=\"638\" cy=\"428\" rx=\"8\" ry=\"4\" fill=\"#0F172A\"/>\n    <!-- Yellow Summer Blouse & Torso seated against backrest -->\n    <path d=\"M615 365 C615 285, 645 285, 645 365 Z\" fill=\"#F59E0B\"/>\n    <!-- Head & Bun Hair -->\n    <ellipse cx=\"630\" cy=\"260\" rx=\"12\" ry=\"14\" fill=\"#FBCFE8\"/>\n    <path d=\"M620 255 C620 238, 642 238, 642 255 Z\" fill=\"#451A03\"/>\n    <circle cx=\"642\" cy=\"248\" r=\"6\" fill=\"#451A03\"/> <!-- Bun -->\n    <!-- Arms Resting on Lap with a Book -->\n    <path d=\"M622 300 Q628 335 632 345\" fill=\"none\" stroke=\"#F59E0B\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n    <!-- Book in hands -->\n    <polygon points=\"620,340 644,340 648,352 616,352\" fill=\"#FFFFFF\" stroke=\"#E11D48\" stroke-width=\"1.5\"/>\n  </g>\n</svg>",
        "hotspots": [
          {
            "id": "hs-t4-bench",
            "x": 80,
            "y": 74,
            "wordId": "kw-bench",
            "label": "Park bench"
          },
          {
            "id": "hs-t4-fountain",
            "x": 63,
            "y": 55,
            "wordId": "kw-fountain",
            "label": "Water fountain"
          },
          {
            "id": "hs-t4-path",
            "x": 30,
            "y": 85,
            "wordId": "kw-path",
            "label": "Stone path"
          },
          {
            "id": "hs-t4-stroll",
            "x": 21,
            "y": 62,
            "wordId": "kw-stroll",
            "label": "Stroll in park"
          },
          {
            "id": "hs-t4-sit",
            "x": 78,
            "y": 64,
            "wordId": "kw-sit",
            "label": "Sit on bench"
          },
          {
            "id": "hs-t4-flower",
            "x": 48,
            "y": 76,
            "wordId": "kw-flower",
            "label": "Flower beds"
          },
          {
            "id": "hs-t4-shade",
            "x": 88,
            "y": 28,
            "wordId": "kw-shade",
            "label": "Shade of tree"
          },
          {
            "id": "hs-t4-surround",
            "x": 58,
            "y": 72,
            "wordId": "kw-surround",
            "label": "Surround fountain"
          }
        ],
        "keywords": [
          {
            "id": "kw-bench",
            "word": "Bench",
            "pos": "n",
            "ipa": "/bentʃ/",
            "vi": "Ghế dài công viên",
            "example": "A woman is resting on a wooden park bench.",
            "collocations": [
              "sit on a bench",
              "park bench",
              "wooden bench",
              "bench under a tree"
            ]
          },
          {
            "id": "kw-fountain",
            "word": "Fountain",
            "pos": "n",
            "ipa": "/ˈfaʊn.tən/",
            "vi": "Đài phun nước",
            "example": "Water is spraying from the center of the fountain.",
            "collocations": [
              "water fountain",
              "spray from a fountain",
              "fountain basin"
            ]
          },
          {
            "id": "kw-path",
            "word": "Path",
            "pos": "n",
            "ipa": "/pæθ/",
            "vi": "Con đường mòn, lối đi dạo",
            "example": "A winding stone path leads through the park.",
            "collocations": [
              "walk along a path",
              "paved path",
              "follow a path"
            ]
          },
          {
            "id": "kw-stroll",
            "word": "Stroll",
            "pos": "v",
            "ipa": "/stroʊl/",
            "vi": "Tản bộ, đi dạo thong thả",
            "example": "A pedestrian is strolling along the pathway.",
            "collocations": [
              "take a stroll",
              "stroll in the park",
              "leisurely stroll"
            ]
          },
          {
            "id": "kw-sit",
            "word": "Sit",
            "pos": "v",
            "ipa": "/sɪt/",
            "vi": "Ngồi",
            "example": "A visitor is sitting in the shade of a large oak tree.",
            "collocations": [
              "sit on a bench",
              "sit outdoors",
              "sit side by side"
            ]
          },
          {
            "id": "kw-relax",
            "word": "Relax",
            "pos": "v",
            "ipa": "/rɪˈlæks/",
            "vi": "Thư giãn, nghỉ ngơi",
            "example": "People are relaxing outdoors on a sunny afternoon.",
            "collocations": [
              "relax in the park",
              "relax on a bench",
              "relax outdoors"
            ]
          },
          {
            "id": "kw-flower",
            "word": "Flower",
            "pos": "n",
            "ipa": "/ˈflaʊ.ər/",
            "vi": "Bông hoa, luống hoa",
            "example": "Brightly colored flowers bloom around the water pool.",
            "collocations": [
              "flower bed",
              "fresh flowers",
              "plant flowers"
            ]
          },
          {
            "id": "kw-walk",
            "word": "Walk",
            "pos": "v",
            "ipa": "/wɑːk/",
            "vi": "Đi bộ",
            "example": "A man is walking through the public garden.",
            "collocations": [
              "walk down a path",
              "walk outdoors",
              "walk leisurely"
            ]
          },
          {
            "id": "kw-surround",
            "word": "Surround",
            "pos": "v",
            "ipa": "/səˈraʊnd/",
            "vi": "Bao quanh, vây quanh",
            "example": "Beds of flowers surround the circular fountain.",
            "collocations": [
              "surrounded by trees",
              "surround a square",
              "surround the pool"
            ]
          },
          {
            "id": "kw-shade",
            "word": "Shade",
            "pos": "n/v",
            "ipa": "/ʃeɪd/",
            "vi": "Bóng râm, che bóng mát",
            "example": "The park bench is situated in the shade.",
            "collocations": [
              "in the shade",
              "tree shade",
              "shade from the sun"
            ]
          }
        ],
        "drill": {
          "question": "Listen to the four statements. Select the statement that best describes what you see in the picture.",
          "correct": "B",
          "options": [
            {
              "id": "A",
              "text": "The fountain is being repaired by a plumber.",
              "vi": "Đài phun nước đang được một thợ sửa ống nước sửa chữa.",
              "isCorrect": false,
              "trapType": "Bẫy 'Being + V3' (Hành động ngược với tranh)",
              "explanation": "Đài phun nước đang phun nước rất đẹp và hoạt động bình thường, không hề có ai sửa chữa ('being repaired')."
            },
            {
              "id": "B",
              "text": "A person is sitting on a bench in the park.",
              "vi": "Một người đang ngồi trên chiếc ghế dài trong công viên.",
              "isCorrect": true,
              "trapType": "Đáp án chuẩn xác (Direct Action)",
              "explanation": "Miêu tả chính xác 100% người phụ nữ đang ngồi thư giãn đọc sách trên băng ghế gỗ dưới bóng cây (sitting on a bench in the park)."
            },
            {
              "id": "C",
              "text": "Bicycles are leaning against the fountain wall.",
              "vi": "Những chiếc xe đạp đang tựa vào thành đài phun nước.",
              "isCorrect": false,
              "trapType": "Bẫy vật thể không có trong tranh (Missing Object)",
              "explanation": "Trong toàn bộ công viên không hề có chiếc xe đạp (bicycles) nào tựa vào đài phun nước."
            },
            {
              "id": "D",
              "text": "All of the trees have completely shed their leaves.",
              "vi": "Tất cả các cây cối đã rụng sạch hoàn toàn lá.",
              "isCorrect": false,
              "trapType": "Bẫy chi tiết đối lập (Opposite Detail)",
              "explanation": "Cây sồi lớn và các lùm cây xung quanh đều xanh tươi rợp bóng mát, trái ngược hoàn toàn với 'completely shed their leaves'."
            }
          ]
        },
        "describeChallenge": {
          "instructions": "Hãy mô tả hoạt động của người dân hoặc cảnh sắc đài phun nước bằng 1 câu tiếng Anh hoàn chỉnh:",
          "targetKeywords": [
            "bench",
            "sit",
            "fountain",
            "path",
            "park",
            "stroll",
            "relax"
          ],
          "modelAnswers": [
            {
              "en": "A woman is sitting on a wooden bench in the shade of a tree.",
              "vi": "Một người phụ nữ đang ngồi trên chiếc ghế gỗ dưới bóng mát của cây.",
              "score": 100
            },
            {
              "en": "Water is spraying from a decorative fountain in the center of the park.",
              "vi": "Nước đang phun lên từ một đài phun nước trang trí ở giữa công viên.",
              "score": 95
            },
            {
              "en": "A pedestrian is strolling along a winding stone path.",
              "vi": "Một người đi bộ đang tản bộ dọc theo lối đi lát đá uốn lượn.",
              "score": 95
            }
          ]
        }
      },
      {
        "id": "scene-garden-lawn",
        "title": "Tranh 2: Chăm sóc sân vườn & Cắt cỏ",
        "titleEn": "Garden Landscaping & Lawn Care",
        "desc": "Người làm vườn cào lá khô trên bãi cỏ xanh mướt, cắt tỉa bụi cây hoa và chăm sóc thảm thực vật.",
        "svg": "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" class=\"part1-svg-art\">\n  <defs>\n    <linearGradient id=\"t4g-sky\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#7DD3FC\"/>\n      <stop offset=\"100%\" stop-color=\"#E0F2FE\"/>\n    </linearGradient>\n    <linearGradient id=\"t4g-lawn\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#86EFAC\"/>\n      <stop offset=\"30%\" stop-color=\"#4ADE80\"/>\n      <stop offset=\"100%\" stop-color=\"#16A34A\"/>\n    </linearGradient>\n    <linearGradient id=\"t4g-fence\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#FFFFFF\"/>\n      <stop offset=\"100%\" stop-color=\"#E2E8F0\"/>\n    </linearGradient>\n    <filter id=\"t4g-shadow\" x=\"-5%\" y=\"-5%\" width=\"110%\" height=\"115%\">\n      <feDropShadow dx=\"0\" dy=\"5\" stdDeviation=\"5\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n\n  <!-- Sky -->\n  <rect x=\"0\" y=\"0\" width=\"800\" height=\"240\" fill=\"url(#t4g-sky)\"/>\n  <ellipse cx=\"300\" cy=\"60\" rx=\"80\" ry=\"20\" fill=\"#FFFFFF\" opacity=\"0.7\"/>\n\n  <!-- Distant Residential House Rooftop & Trees -->\n  <polygon points=\"120,130 240,60 360,130\" fill=\"#B91C1C\" opacity=\"0.75\"/>\n  <rect x=\"150\" y=\"130\" width=\"180\" height=\"80\" fill=\"#FEF3C7\" opacity=\"0.75\"/>\n  <!-- Hedges & Trees behind fence -->\n  <ellipse cx=\"80\" cy=\"180\" rx=\"60\" ry=\"40\" fill=\"#15803D\"/>\n  <ellipse cx=\"440\" cy=\"170\" rx=\"75\" ry=\"45\" fill=\"#166534\"/>\n  <ellipse cx=\"680\" cy=\"180\" rx=\"90\" ry=\"50\" fill=\"#15803D\"/>\n\n  <!-- White Picket Garden Fence & Gate -->\n  <g id=\"t4g-fence\">\n    <!-- Fence Rails -->\n    <line x1=\"0\" y1=\"180\" x2=\"800\" y2=\"180\" stroke=\"#CBD5E1\" stroke-width=\"4\"/>\n    <line x1=\"0\" y1=\"215\" x2=\"800\" y2=\"215\" stroke=\"#CBD5E1\" stroke-width=\"4\"/>\n    <!-- Picket Slats -->\n    <g fill=\"url(#t4g-fence)\" stroke=\"#CBD5E1\" stroke-width=\"1.5\">\n      <polygon points=\"30,165 42,150 54,165 54,230 30,230\"/>\n      <polygon points=\"70,165 82,150 94,165 94,230 70,230\"/>\n      <polygon points=\"110,165 122,150 134,165 134,230 110,230\"/>\n      <polygon points=\"150,165 162,150 174,165 174,230 150,230\"/>\n      <polygon points=\"190,165 202,150 214,165 214,230 190,230\"/>\n      <polygon points=\"230,165 242,150 254,165 254,230 230,230\"/>\n      <!-- Wooden Gate section (Left-Center) -->\n      <rect x=\"270\" y=\"160\" width=\"80\" height=\"70\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"3\"/>\n      <line x1=\"270\" y1=\"160\" x2=\"350\" y2=\"230\" stroke=\"#64748B\" stroke-width=\"3\"/>\n      <circle cx=\"340\" cy=\"195\" r=\"4\" fill=\"#0F172A\"/> <!-- Gate latch -->\n      <polygon points=\"370,165 382,150 394,165 394,230 370,230\"/>\n      <polygon points=\"410,165 422,150 434,165 434,230 410,230\"/>\n      <polygon points=\"450,165 462,150 474,165 474,230 450,230\"/>\n      <polygon points=\"490,165 502,150 514,165 514,230 490,230\"/>\n      <polygon points=\"530,165 542,150 554,165 554,230 530,230\"/>\n      <polygon points=\"570,165 582,150 594,165 594,230 570,230\"/>\n      <polygon points=\"610,165 622,150 634,165 634,230 610,230\"/>\n      <polygon points=\"650,165 662,150 674,165 674,230 650,230\"/>\n      <polygon points=\"690,165 702,150 714,165 714,230 690,230\"/>\n      <polygon points=\"730,165 742,150 754,165 754,230 730,230\"/>\n      <polygon points=\"770,165 782,150 794,165 794,230 770,230\"/>\n    </g>\n  </g>\n\n  <!-- Lush Green Lawn Foreground -->\n  <polygon points=\"0,225 800,225 800,500 0,500\" fill=\"url(#t4g-lawn)\"/>\n  <!-- Alternating Mowed Stripes on Lawn (Mowed lawn pattern) -->\n  <polygon points=\"0,270 800,270 800,310 0,310\" fill=\"#22C55E\" opacity=\"0.35\"/>\n  <polygon points=\"0,350 800,350 800,390 0,390\" fill=\"#22C55E\" opacity=\"0.35\"/>\n  <polygon points=\"0,430 800,430 800,470 0,470\" fill=\"#22C55E\" opacity=\"0.35\"/>\n\n  <!-- Flower Bushes along Right Side of Lawn -->\n  <g id=\"t4g-flower-bush\">\n    <ellipse cx=\"720\" cy=\"300\" rx=\"60\" ry=\"35\" fill=\"#15803D\"/>\n    <!-- Red and Pink Roses/Flowers -->\n    <circle cx=\"685\" cy=\"290\" r=\"7\" fill=\"#F43F5E\"/>\n    <circle cx=\"710\" cy=\"285\" r=\"7\" fill=\"#EF4444\"/>\n    <circle cx=\"735\" cy=\"292\" r=\"7\" fill=\"#F43F5E\"/>\n    <circle cx=\"700\" cy=\"305\" r=\"6\" fill=\"#FB7185\"/>\n    <circle cx=\"725\" cy=\"310\" r=\"6\" fill=\"#EF4444\"/>\n    <circle cx=\"750\" cy=\"300\" r=\"7\" fill=\"#FB7185\"/>\n  </g>\n\n  <!-- Green Garden Hose Coiled on Left Lawn -->\n  <g id=\"t4g-hose\">\n    <ellipse cx=\"120\" cy=\"420\" rx=\"35\" ry=\"16\" fill=\"none\" stroke=\"#059669\" stroke-width=\"6\"/>\n    <ellipse cx=\"122\" cy=\"422\" rx=\"26\" ry=\"12\" fill=\"none\" stroke=\"#059669\" stroke-width=\"6\"/>\n    <!-- Brass Spray Nozzle -->\n    <polygon points=\"155,416 175,412 178,422 155,420\" fill=\"#F59E0B\"/>\n  </g>\n\n  <!-- Large Pile of Raked Autumn Leaves (Center) -->\n  <g id=\"t4g-leaf-pile\" filter=\"url(#t4g-shadow)\">\n    <!-- Heap of dry brown, amber, orange leaves -->\n    <ellipse cx=\"490\" cy=\"410\" rx=\"65\" ry=\"24\" fill=\"#B45309\"/>\n    <ellipse cx=\"495\" cy=\"402\" rx=\"48\" ry=\"18\" fill=\"#D97706\"/>\n    <!-- Individual visible leaves on pile -->\n    <ellipse cx=\"465\" cy=\"400\" rx=\"8\" ry=\"4\" fill=\"#F59E0B\" transform=\"rotate(25 465 400)\"/>\n    <ellipse cx=\"485\" cy=\"395\" rx=\"9\" ry=\"4\" fill=\"#EF4444\" transform=\"rotate(-15 485 395)\"/>\n    <ellipse cx=\"510\" cy=\"402\" rx=\"8\" ry=\"4\" fill=\"#EAB308\" transform=\"rotate(40 510 402)\"/>\n    <ellipse cx=\"475\" cy=\"412\" rx=\"8\" ry=\"4\" fill=\"#78350F\" transform=\"rotate(-30 475 412)\"/>\n    <ellipse cx=\"525\" cy=\"408\" rx=\"8\" ry=\"4\" fill=\"#F97316\" transform=\"rotate(10 525 408)\"/>\n    <ellipse cx=\"500\" cy=\"415\" rx=\"7\" ry=\"4\" fill=\"#D97706\" transform=\"rotate(20 500 415)\"/>\n    <!-- Scattered loose leaves nearby -->\n    <ellipse cx=\"410\" cy=\"425\" rx=\"7\" ry=\"3.5\" fill=\"#F59E0B\" transform=\"rotate(-20 410 425)\"/>\n    <ellipse cx=\"430\" cy=\"445\" rx=\"7\" ry=\"3.5\" fill=\"#EF4444\" transform=\"rotate(35 430 445)\"/>\n    <ellipse cx=\"560\" cy=\"428\" rx=\"7\" ry=\"3.5\" fill=\"#EAB308\" transform=\"rotate(-15 560 428)\"/>\n  </g>\n\n  <!-- Gardener Person Raking Leaves (Standing Behind Rake) -->\n  <g id=\"t4g-gardener\">\n    <!-- Work Boots -->\n    <ellipse cx=\"360\" cy=\"445\" rx=\"13\" ry=\"6\" fill=\"#78350F\"/>\n    <ellipse cx=\"400\" cy=\"440\" rx=\"13\" ry=\"6\" fill=\"#78350F\"/>\n    <!-- Denim Overalls / Work Jeans -->\n    <line x1=\"360\" y1=\"445\" x2=\"368\" y2=\"350\" stroke=\"#1E40AF\" stroke-width=\"12\" stroke-linecap=\"round\"/>\n    <line x1=\"400\" y1=\"440\" x2=\"392\" y2=\"350\" stroke=\"#1E40AF\" stroke-width=\"12\" stroke-linecap=\"round\"/>\n    <!-- Plaid / Checked Shirt & Overalls bib -->\n    <path d=\"M362 350 C362 275, 400 275, 400 350 Z\" fill=\"#DC2626\"/>\n    <!-- Denim bib on top -->\n    <rect x=\"370\" y=\"295\" width=\"22\" height=\"45\" fill=\"#1E40AF\" rx=\"3\"/>\n    <line x1=\"366\" y1=\"285\" x2=\"376\" y2=\"298\" stroke=\"#1E40AF\" stroke-width=\"4\"/>\n    <line x1=\"396\" y1=\"285\" x2=\"386\" y2=\"298\" stroke=\"#1E40AF\" stroke-width=\"4\"/>\n\n    <!-- Head & Straw Sun Hat -->\n    <ellipse cx=\"380\" cy=\"245\" rx=\"14\" ry=\"16\" fill=\"#FBCFE8\"/>\n    <!-- Straw Wide-Brim Hat -->\n    <path d=\"M366 240 C366 220, 394 220, 394 240 Z\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n    <ellipse cx=\"380\" cy=\"240\" rx=\"28\" ry=\"8\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"2\"/>\n\n    <!-- Arms Holding Long Rake Handle -->\n    <path d=\"M365 290 Q395 320 425 340\" fill=\"none\" stroke=\"#DC2626\" stroke-width=\"8\" stroke-linecap=\"round\"/>\n    <circle cx=\"425\" cy=\"342\" r=\"5\" fill=\"#FDE047\"/> <!-- Yellow work glove -->\n    <path d=\"M395 290 Q425 330 450 365\" fill=\"none\" stroke=\"#DC2626\" stroke-width=\"8\" stroke-linecap=\"round\"/>\n    <circle cx=\"452\" cy=\"367\" r=\"5\" fill=\"#FDE047\"/> <!-- Yellow work glove -->\n\n    <!-- Long Wooden Garden Rake -->\n    <line x1=\"400\" y1=\"315\" x2=\"480\" y2=\"415\" stroke=\"#78350F\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n    <!-- Fan-Shaped Metal Rake Head Gathering Leaves -->\n    <polygon points=\"468,405 492,400 488,425 464,425\" fill=\"#64748B\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n    <!-- Rake Tines -->\n    <line x1=\"465\" y1=\"425\" x2=\"463\" y2=\"435\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <line x1=\"471\" y1=\"425\" x2=\"470\" y2=\"436\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <line x1=\"477\" y1=\"425\" x2=\"478\" y2=\"436\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <line x1=\"483\" y1=\"425\" x2=\"485\" y2=\"435\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <line x1=\"489\" y1=\"425\" x2=\"492\" y2=\"434\" stroke=\"#475569\" stroke-width=\"2\"/>\n  </g>\n</svg>",
        "hotspots": [
          {
            "id": "hs-t4g-rake",
            "x": 60,
            "y": 82,
            "wordId": "kw-rake",
            "label": "Rake leaves"
          },
          {
            "id": "hs-t4g-lawn",
            "x": 25,
            "y": 72,
            "wordId": "kw-lawn",
            "label": "Green lawn"
          },
          {
            "id": "hs-t4g-leaf",
            "x": 64,
            "y": 80,
            "wordId": "kw-leaf",
            "label": "Pile of leaves"
          },
          {
            "id": "hs-t4g-hat",
            "x": 48,
            "y": 48,
            "wordId": "kw-lawn",
            "label": "Straw sun hat"
          },
          {
            "id": "hs-t4g-fence",
            "x": 84,
            "y": 42,
            "wordId": "kw-fence",
            "label": "Picket fence"
          },
          {
            "id": "hs-t4g-gate",
            "x": 38,
            "y": 40,
            "wordId": "kw-gate",
            "label": "Garden gate"
          },
          {
            "id": "hs-t4g-plant",
            "x": 90,
            "y": 60,
            "wordId": "kw-plant",
            "label": "Garden plants"
          },
          {
            "id": "hs-t4g-water",
            "x": 16,
            "y": 84,
            "wordId": "kw-water",
            "label": "Garden hose"
          }
        ],
        "keywords": [
          {
            "id": "kw-lawn",
            "word": "Lawn",
            "pos": "n",
            "ipa": "/lɑːn/",
            "vi": "Bãi cỏ xanh mướt",
            "example": "The gardener is working across the freshly mowed lawn.",
            "collocations": [
              "mow the lawn",
              "on the lawn",
              "green lawn",
              "lawn mower"
            ]
          },
          {
            "id": "kw-rake",
            "word": "Rake",
            "pos": "n/v",
            "ipa": "/reɪk/",
            "vi": "Cái cào cỏ; cào lá gom lại",
            "example": "He is using a garden rake to collect fallen leaves.",
            "collocations": [
              "rake leaves",
              "garden rake",
              "rake into a pile"
            ]
          },
          {
            "id": "kw-leaf",
            "word": "Leaf",
            "pos": "n",
            "ipa": "/liːf/",
            "vi": "Chiếc lá (số nhiều: leaves)",
            "example": "A large pile of dry leaves has been gathered together.",
            "collocations": [
              "pile of leaves",
              "fallen leaves",
              "dry leaves",
              "rake leaves"
            ]
          },
          {
            "id": "kw-garden",
            "word": "Garden",
            "pos": "n",
            "ipa": "/ˈɡɑːr.dən/",
            "vi": "Khu vườn",
            "example": "Colorful roses are planted throughout the residential garden.",
            "collocations": [
              "flower garden",
              "work in the garden",
              "garden fence"
            ]
          },
          {
            "id": "kw-plant",
            "word": "Plant",
            "pos": "n/v",
            "ipa": "/plænt/",
            "vi": "Cây cảnh, hoa màu; trồng cây",
            "example": "Flowering plants line the perimeter of the fence.",
            "collocations": [
              "potted plant",
              "garden plants",
              "water plants"
            ]
          },
          {
            "id": "kw-trim",
            "word": "Trim",
            "pos": "v",
            "ipa": "/trɪm/",
            "vi": "Cắt tỉa, xén bớt cành lá",
            "example": "The hedges have been neatly trimmed along the border.",
            "collocations": [
              "trim the bushes",
              "trim branches",
              "neatly trimmed"
            ]
          },
          {
            "id": "kw-mow",
            "word": "Mow",
            "pos": "v",
            "ipa": "/moʊ/",
            "vi": "Cắt cỏ, dọn cỏ",
            "example": "The expansive grass lawn has been freshly mowed.",
            "collocations": [
              "mow the grass",
              "freshly mowed",
              "mow the yard"
            ]
          },
          {
            "id": "kw-water",
            "word": "Water",
            "pos": "v",
            "ipa": "/ˈwɑː.tər/",
            "vi": "Tưới nước cho cây",
            "example": "A coiled green hose is ready to water the flower beds.",
            "collocations": [
              "water the garden",
              "water flowers",
              "hose to water"
            ]
          },
          {
            "id": "kw-fence",
            "word": "Fence",
            "pos": "n",
            "ipa": "/fens/",
            "vi": "Hàng rào gỗ",
            "example": "A white picket fence encloses the backyard.",
            "collocations": [
              "wooden fence",
              "picket fence",
              "along the fence"
            ]
          },
          {
            "id": "kw-gate",
            "word": "Gate",
            "pos": "n",
            "ipa": "/ɡeɪt/",
            "vi": "Cổng rào, cửa vườn",
            "example": "A small wooden gate provides access to the garden.",
            "collocations": [
              "open a gate",
              "garden gate",
              "iron gate"
            ]
          }
        ],
        "drill": {
          "question": "Listen to the four statements. Select the statement that best describes what you see in the picture.",
          "correct": "C",
          "options": [
            {
              "id": "A",
              "text": "The lawn is being mowed by an electric tractor.",
              "vi": "Bãi cỏ đang được cắt bằng một chiếc máy kéo chạy điện.",
              "isCorrect": false,
              "trapType": "Bẫy 'Being + V3' (Hành động sai hoàn toàn)",
              "explanation": "Bãi cỏ đã được cắt xong gọn gàng và hiện tại chỉ có một người làm vườn đang cào lá, không có máy kéo điện nào đang cắt cỏ."
            },
            {
              "id": "B",
              "text": "A person is painting the white picket fence.",
              "vi": "Một người đang sơn hàng rào cọc nhọn màu trắng.",
              "isCorrect": false,
              "trapType": "Bẫy hành động sai (Incorrect Action)",
              "explanation": "Hàng rào màu trắng đã có sẵn, người làm vườn đang cào lá chứ không hề cầm cọ sơn hàng rào."
            },
            {
              "id": "C",
              "text": "A gardener is raking leaves into a pile.",
              "vi": "Một người làm vườn đang cào lá gom thành một đống.",
              "isCorrect": true,
              "trapType": "Đáp án chuẩn xác (Direct Action)",
              "explanation": "Miêu tả chính xác 100% người làm vườn đội mũ cói đang dùng cây cào cỏ gom lá khô thành một đống lớn (raking leaves into a pile)."
            },
            {
              "id": "D",
              "text": "All of the garden flowers have withered.",
              "vi": "Tất cả các bông hoa trong vườn đã bị héo tàn.",
              "isCorrect": false,
              "trapType": "Bẫy chi tiết đối lập (Opposite Detail)",
              "explanation": "Bụi hoa hồng bên phải đang nở rộ rực rỡ màu đỏ và hồng, trái ngược hoàn toàn với 'have withered'."
            }
          ]
        },
        "describeChallenge": {
          "instructions": "Hãy mô tả hành động cào lá của người làm vườn hoặc bãi cỏ bằng 1 câu tiếng Anh hoàn chỉnh:",
          "targetKeywords": [
            "gardener",
            "rake",
            "leaves",
            "lawn",
            "pile",
            "garden",
            "hat"
          ],
          "modelAnswers": [
            {
              "en": "A gardener wearing a straw hat is raking leaves on the lawn.",
              "vi": "Một người làm vườn đội mũ cói đang cào lá trên bãi cỏ.",
              "score": 100
            },
            {
              "en": "Fallen leaves have been gathered into a pile in the garden.",
              "vi": "Những chiếc lá rụng đã được gom thành một đống trong vườn.",
              "score": 95
            },
            {
              "en": "A white picket fence encloses the freshly mowed grass yard.",
              "vi": "Một hàng rào cọc trắng bao quanh sân cỏ mới cắt.",
              "score": 95
            }
          ]
        }
      },
      {
        "id": "scene-sidewalk-cafe",
        "title": "Tranh 3: Quán cà phê vỉa hè & Lối băng qua đường",
        "titleEn": "Sidewalk Café & Crosswalk",
        "desc": "Dãy bàn ghế ngoài trời dưới mái hiên bạt và ô che nắng, bên cạnh lối băng qua đường dành cho người đi bộ.",
        "svg": "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" class=\"part1-svg-art\">\n  <defs>\n    <linearGradient id=\"t4c-sky\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#38BDF8\"/>\n      <stop offset=\"100%\" stop-color=\"#BAE6FD\"/>\n    </linearGradient>\n    <linearGradient id=\"t4c-street\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#475569\"/>\n      <stop offset=\"100%\" stop-color=\"#1E293B\"/>\n    </linearGradient>\n    <linearGradient id=\"t4c-patio\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#E2E8F0\"/>\n      <stop offset=\"100%\" stop-color=\"#CBD5E1\"/>\n    </linearGradient>\n    <filter id=\"t4c-shadow\" x=\"-5%\" y=\"-5%\" width=\"110%\" height=\"115%\">\n      <feDropShadow dx=\"0\" dy=\"5\" stdDeviation=\"5\" flood-opacity=\"0.2\"/>\n    </filter>\n  </defs>\n\n  <!-- Sky -->\n  <rect x=\"0\" y=\"0\" width=\"800\" height=\"200\" fill=\"url(#t4c-sky)\"/>\n\n  <!-- Left Side Brick Café Building -->\n  <rect x=\"0\" y=\"30\" width=\"460\" height=\"280\" fill=\"#E2E8F0\" stroke=\"#CBD5E1\" stroke-width=\"2\"/>\n  <!-- Second floor windows -->\n  <rect x=\"50\" y=\"50\" width=\"65\" height=\"75\" rx=\"3\" fill=\"#BAE6FD\" stroke=\"#475569\" stroke-width=\"3\"/>\n  <rect x=\"180\" y=\"50\" width=\"65\" height=\"75\" rx=\"3\" fill=\"#BAE6FD\" stroke=\"#475569\" stroke-width=\"3\"/>\n  <rect x=\"310\" y=\"50\" width=\"65\" height=\"75\" rx=\"3\" fill=\"#BAE6FD\" stroke=\"#475569\" stroke-width=\"3\"/>\n\n  <!-- Large Red & White Striped Fabric Awning Extended Over Sidewalk -->\n  <g id=\"t4c-awning\" filter=\"url(#t4c-shadow)\">\n    <!-- Awning Canvas Slopes -->\n    <polygon points=\"0,135 440,135 420,185 0,185\" fill=\"#EF4444\"/>\n    <!-- White Stripes on Awning -->\n    <polygon points=\"50,135 90,135 85,185 45,185\" fill=\"#FFFFFF\"/>\n    <polygon points=\"140,135 180,135 175,185 135,185\" fill=\"#FFFFFF\"/>\n    <polygon points=\"230,135 270,135 265,185 225,185\" fill=\"#FFFFFF\"/>\n    <polygon points=\"320,135 360,135 355,185 315,185\" fill=\"#FFFFFF\"/>\n    <!-- Scalloped Awning Valance Flaps -->\n    <path d=\"M0 185 Q25 200 50 185 Q75 200 100 185 Q125 200 150 185 Q175 200 200 185 Q225 200 250 185 Q275 200 300 185 Q325 200 350 185 Q375 200 400 185 L420 185 L0 185\" fill=\"#DC2626\"/>\n  </g>\n\n  <!-- Asphalt Roadway (Right side & foreground) -->\n  <polygon points=\"430,220 800,220 800,500 360,500\" fill=\"url(#t4c-street)\"/>\n\n  <!-- Pedestrian Zebra Crosswalk (Broad White Stripes Crossing the Street) -->\n  <g id=\"t4c-crosswalk\">\n    <polygon points=\"460,250 560,250 540,285 440,285\" fill=\"#FFFFFF\" opacity=\"0.9\"/>\n    <polygon points=\"480,305 600,305 575,345 455,345\" fill=\"#FFFFFF\" opacity=\"0.9\"/>\n    <polygon points=\"500,365 640,365 610,410 470,410\" fill=\"#FFFFFF\" opacity=\"0.9\"/>\n    <polygon points=\"520,430 680,430 645,480 485,480\" fill=\"#FFFFFF\" opacity=\"0.9\"/>\n  </g>\n\n  <!-- Paved Sidewalk Patio (Left Foreground) -->\n  <polygon points=\"0,220 460,220 400,500 0,500\" fill=\"url(#t4c-patio)\"/>\n  <line x1=\"460\" y1=\"220\" x2=\"400\" y2=\"500\" stroke=\"#94A3B8\" stroke-width=\"4\"/> <!-- Sidewalk curb edge -->\n\n  <!-- Decorative Metal Handrail / Safety Railing Separating Patio & Street -->\n  <g id=\"t4c-railing\">\n    <line x1=\"390\" y1=\"230\" x2=\"350\" y2=\"480\" stroke=\"#1E293B\" stroke-width=\"4\"/> <!-- Top rail -->\n    <line x1=\"392\" y1=\"260\" x2=\"352\" y2=\"480\" stroke=\"#1E293B\" stroke-width=\"3\"/> <!-- Mid rail -->\n    <!-- Upright Posts -->\n    <line x1=\"390\" y1=\"230\" x2=\"390\" y2=\"280\" stroke=\"#1E293B\" stroke-width=\"5\"/>\n    <line x1=\"375\" y1=\"320\" x2=\"375\" y2=\"380\" stroke=\"#1E293B\" stroke-width=\"5\"/>\n    <line x1=\"355\" y1=\"410\" x2=\"355\" y2=\"480\" stroke=\"#1E293B\" stroke-width=\"5\"/>\n  </g>\n\n  <!-- Man Leaning on the Handrail (Looking at Crosswalk) -->\n  <g id=\"t4c-leaner\">\n    <!-- Legs in dark trousers -->\n    <line x1=\"330\" y1=\"360\" x2=\"320\" y2=\"435\" stroke=\"#1E293B\" stroke-width=\"8\" stroke-linecap=\"round\"/>\n    <line x1=\"345\" y1=\"360\" x2=\"340\" y2=\"435\" stroke=\"#1E293B\" stroke-width=\"8\" stroke-linecap=\"round\"/>\n    <!-- Casual Green Jacket -->\n    <path d=\"M322 285 C322 250, 355 250, 355 285 L352 360 L320 360 Z\" fill=\"#047857\"/>\n    <!-- Head -->\n    <ellipse cx=\"338\" cy=\"235\" rx=\"12\" ry=\"14\" fill=\"#FBCFE8\"/>\n    <path d=\"M328 230 C328 215, 348 215, 348 230 Z\" fill=\"#1C1917\"/>\n    <!-- Arms Leaning on Railing Bar -->\n    <path d=\"M340 285 Q360 295 375 305\" fill=\"none\" stroke=\"#047857\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n    <circle cx=\"376\" cy=\"306\" r=\"4\" fill=\"#FBCFE8\"/>\n  </g>\n\n  <!-- Large Canvas Patio Umbrella over Outdoor Café Tables -->\n  <g id=\"t4c-umbrella\" filter=\"url(#t4c-shadow)\">\n    <!-- Umbrella Central Pole -->\n    <line x1=\"160\" y1=\"180\" x2=\"160\" y2=\"390\" stroke=\"#334155\" stroke-width=\"5\"/>\n    <ellipse cx=\"160\" cy=\"390\" rx=\"20\" ry=\"7\" fill=\"#0F172A\"/> <!-- Heavy umbrella base -->\n    <!-- Open Umbrella Canopy (Dark Green / Cream panels) -->\n    <polygon points=\"60,230 260,230 160,170\" fill=\"#065F46\"/>\n    <polygon points=\"110,230 210,230 160,170\" fill=\"#FEF3C7\"/>\n    <polygon points=\"160,170 160,162 162,162 162,170\" fill=\"#0F172A\"/> <!-- Tip finial -->\n  </g>\n\n  <!-- Outdoor Café Tables & Seated Patrons (Gathering on Patio) -->\n  <g id=\"t4c-patio-dining\">\n    <!-- Table 1 (Under Umbrella) -->\n    <ellipse cx=\"160\" cy=\"360\" rx=\"35\" ry=\"14\" fill=\"#F8FAFC\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    <line x1=\"160\" y1=\"374\" x2=\"160\" y2=\"420\" stroke=\"#475569\" stroke-width=\"5\"/>\n    <!-- Coffee cups on Table 1 -->\n    <ellipse cx=\"150\" cy=\"358\" rx=\"5\" ry=\"2.5\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1\"/>\n    <ellipse cx=\"170\" cy=\"358\" rx=\"5\" ry=\"2.5\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1\"/>\n\n    <!-- Seated Patron Left (Man drinking coffee) -->\n    <ellipse cx=\"105\" cy=\"345\" rx=\"10\" ry=\"12\" fill=\"#FBCFE8\"/>\n    <path d=\"M96 340 C96 325, 114 325, 114 340 Z\" fill=\"#3B82F6\"/>\n    <path d=\"M100 358 C100 345, 120 345, 120 358 L122 410 L98 410 Z\" fill=\"#1D4ED8\"/>\n    <path d=\"M115 370 Q130 365 145 360\" fill=\"none\" stroke=\"#1D4ED8\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n\n    <!-- Seated Patron Right (Woman in Red) -->\n    <ellipse cx=\"215\" cy=\"345\" rx=\"10\" ry=\"12\" fill=\"#FBCFE8\"/>\n    <path d=\"M206 340 C206 325, 224 325, 224 340 Z\" fill=\"#78350F\"/>\n    <path d=\"M210 358 C210 345, 230 345, 230 358 L232 410 L208 410 Z\" fill=\"#DC2626\"/>\n  </g>\n\n  <!-- Pedestrians Crossing the Street on Zebra Crosswalk (Right Side) -->\n  <g id=\"t4c-crossers\">\n    <!-- Pedestrian 1 (Crossing toward left) -->\n    <line x1=\"560\" y1=\"340\" x2=\"545\" y2=\"395\" stroke=\"#1E293B\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n    <line x1=\"575\" y1=\"340\" x2=\"585\" y2=\"390\" stroke=\"#1E293B\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"542\" cy=\"398\" rx=\"7\" ry=\"3\" fill=\"#0F172A\"/>\n    <ellipse cx=\"588\" cy=\"394\" rx=\"7\" ry=\"3\" fill=\"#0F172A\"/>\n    <!-- Torso with Yellow Backpack -->\n    <path d=\"M555 270 C555 245, 580 245, 580 270 L582 340 L552 340 Z\" fill=\"#4338CA\"/>\n    <rect x=\"575\" y=\"275\" width=\"12\" height=\"25\" rx=\"3\" fill=\"#F59E0B\"/> <!-- Backpack -->\n    <!-- Head -->\n    <ellipse cx=\"568\" cy=\"235\" rx=\"11\" ry=\"13\" fill=\"#FBCFE8\"/>\n    <path d=\"M558 230 C558 218, 578 218, 578 230 Z\" fill=\"#1C1917\"/>\n\n    <!-- Pedestrian 2 (Woman crossing street with handbag) -->\n    <line x1=\"640\" y1=\"370\" x2=\"630\" y2=\"430\" stroke=\"#334155\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n    <line x1=\"655\" y1=\"370\" x2=\"665\" y2=\"425\" stroke=\"#334155\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"628\" cy=\"433\" rx=\"7\" ry=\"3\" fill=\"#0F172A\"/>\n    <ellipse cx=\"668\" cy=\"428\" rx=\"7\" ry=\"3\" fill=\"#0F172A\"/>\n    <path d=\"M635 300 C635 275, 660 275, 660 300 L662 370 L632 370 Z\" fill=\"#EC4899\"/>\n    <!-- Head -->\n    <ellipse cx=\"648\" cy=\"265\" rx=\"11\" ry=\"13\" fill=\"#FBCFE8\"/>\n    <path d=\"M638 260 C638 245, 658 245, 658 260 Z\" fill=\"#D97706\"/>\n    <!-- Handbag -->\n    <rect x=\"622\" y=\"325\" width=\"12\" height=\"15\" rx=\"2\" fill=\"#78350F\"/>\n  </g>\n</svg>",
        "hotspots": [
          {
            "id": "hs-t4c-awning",
            "x": 24,
            "y": 32,
            "wordId": "kw-awning",
            "label": "Striped awning"
          },
          {
            "id": "hs-t4c-umbrella",
            "x": 20,
            "y": 44,
            "wordId": "kw-umbrella",
            "label": "Patio umbrella"
          },
          {
            "id": "hs-t4c-patio",
            "x": 22,
            "y": 74,
            "wordId": "kw-patio",
            "label": "Sidewalk patio"
          },
          {
            "id": "hs-t4c-crosswalk",
            "x": 68,
            "y": 76,
            "wordId": "kw-cross",
            "label": "Zebra crosswalk"
          },
          {
            "id": "hs-t4c-cross",
            "x": 72,
            "y": 62,
            "wordId": "kw-cross",
            "label": "Cross the street"
          },
          {
            "id": "hs-t4c-street",
            "x": 84,
            "y": 60,
            "wordId": "kw-street",
            "label": "City street"
          },
          {
            "id": "hs-t4c-railing",
            "x": 46,
            "y": 65,
            "wordId": "kw-railing",
            "label": "Handrail railing"
          },
          {
            "id": "hs-t4c-lean",
            "x": 42,
            "y": 58,
            "wordId": "kw-lean",
            "label": "Lean on handrail"
          }
        ],
        "keywords": [
          {
            "id": "kw-awning",
            "word": "Awning",
            "pos": "n",
            "ipa": "/ˈɑː.nɪŋ/",
            "vi": "Mái hiên bạt che nắng",
            "example": "A striped fabric awning is extended over the café storefront.",
            "collocations": [
              "under an awning",
              "fabric awning",
              "retractable awning"
            ]
          },
          {
            "id": "kw-umbrella",
            "word": "Umbrella",
            "pos": "n",
            "ipa": "/ʌmˈbrel.ə/",
            "vi": "Cây dù, ô che nắng ngoài trời",
            "example": "Diners are sitting under a large patio umbrella.",
            "collocations": [
              "patio umbrella",
              "under an umbrella",
              "open an umbrella"
            ]
          },
          {
            "id": "kw-patio",
            "word": "Patio",
            "pos": "n",
            "ipa": "/ˈpæt.i.oʊ/",
            "vi": "Khoảng sân ngoài trời dành cho ăn uống",
            "example": "Tables and chairs are arranged on the sidewalk patio.",
            "collocations": [
              "outdoor patio",
              "patio seating",
              "patio furniture"
            ]
          },
          {
            "id": "kw-street",
            "word": "Street",
            "pos": "n",
            "ipa": "/striːt/",
            "vi": "Đường phố",
            "example": "Pedestrians are walking near a busy city street.",
            "collocations": [
              "across the street",
              "on the street",
              "cross the street"
            ]
          },
          {
            "id": "kw-cross",
            "word": "Cross",
            "pos": "v",
            "ipa": "/krɑːs/",
            "vi": "Băng qua đường",
            "example": "Several pedestrians are crossing the roadway at the crosswalk.",
            "collocations": [
              "cross the street",
              "cross at a crosswalk",
              "cross carefully"
            ]
          },
          {
            "id": "kw-railing",
            "word": "Railing",
            "pos": "n",
            "ipa": "/ˈreɪ.lɪŋ/",
            "vi": "Lan can, hàng rào bảo vệ vỉa hè",
            "example": "A metal railing divides the sidewalk from the traffic lane.",
            "collocations": [
              "metal railing",
              "hold onto a railing",
              "along the railing"
            ]
          },
          {
            "id": "kw-handrail",
            "word": "Handrail",
            "pos": "n",
            "ipa": "/ˈhænd.reɪl/",
            "vi": "Tay vịn lan can",
            "example": "A man is resting his hands on the safety handrail.",
            "collocations": [
              "grip the handrail",
              "lean on a handrail",
              "staircase handrail"
            ]
          },
          {
            "id": "kw-lean",
            "word": "Lean",
            "pos": "v",
            "ipa": "/liːn/",
            "vi": "Tựa vào, dựa người vào",
            "example": "A pedestrian is leaning against the metal railing.",
            "collocations": [
              "lean against a wall",
              "lean on a railing",
              "lean forward"
            ]
          },
          {
            "id": "kw-gather",
            "word": "Gather",
            "pos": "v",
            "ipa": "/ˈɡæð.ɚ/",
            "vi": "Tụ tập, quây quần",
            "example": "People have gathered at outdoor café tables.",
            "collocations": [
              "gather together",
              "gather outdoors",
              "crowd gathers"
            ]
          },
          {
            "id": "kw-tent",
            "word": "Tent",
            "pos": "n",
            "ipa": "/tent/",
            "vi": "Nhà bạt, lều che ngoài trời",
            "example": "A protective canopy tent shades the outdoor seating area.",
            "collocations": [
              "canopy tent",
              "set up a tent",
              "outdoor tent"
            ]
          }
        ],
        "drill": {
          "question": "Listen to the four statements. Select the statement that best describes what you see in the picture.",
          "correct": "A",
          "options": [
            {
              "id": "A",
              "text": "Patrons are seated outdoors under a large umbrella.",
              "vi": "Khách đang ngồi ngoài trời dưới một chiếc dù lớn.",
              "isCorrect": true,
              "trapType": "Đáp án chuẩn xác (Direct Action)",
              "explanation": "Miêu tả chính xác 100% các vị khách đang ngồi dùng đồ uống tại bàn cà phê dưới chiếc ô che nắng ngoài sân (seated outdoors under a large umbrella)."
            },
            {
              "id": "B",
              "text": "The fabric awning is being rolled up by a worker.",
              "vi": "Mái hiên bạt đang được cuộn lại bởi một công nhân.",
              "isCorrect": false,
              "trapType": "Bẫy 'Being + V3' (Hành động sai)",
              "explanation": "Mái hiên kẻ sọc đỏ trắng đang được căng mở rộng để che bóng mát, không hề có ai đang cuộn mái hiên lại ('being rolled up')."
            },
            {
              "id": "C",
              "text": "Cars are parked directly on the pedestrian crosswalk.",
              "vi": "Ô tô đang đậu ngay trên lối băng qua đường của người đi bộ.",
              "isCorrect": false,
              "trapType": "Bẫy chi tiết sai (Incorrect Detail)",
              "explanation": "Lối băng qua đường (crosswalk) kẻ vạch trắng đang có người đi bộ băng qua, không hề có ô tô đậu đè lên vạch."
            },
            {
              "id": "D",
              "text": "The sidewalk patio is completely vacant.",
              "vi": "Khu vực sân hiên ngoài vỉa hè hoàn toàn vắng tanh không một bóng người.",
              "isCorrect": false,
              "trapType": "Bẫy chi tiết đối lập (Opposite Detail)",
              "explanation": "Có khách ngồi uống nước tại bàn và có người tựa vào lan can, đối lập hoàn toàn với từ 'completely vacant'."
            }
          ]
        },
        "describeChallenge": {
          "instructions": "Hãy mô tả cảnh quán cà phê ngoài trời hoặc người đi bộ qua đường bằng 1 câu tiếng Anh hoàn chỉnh:",
          "targetKeywords": [
            "patron",
            "patio",
            "umbrella",
            "awning",
            "cross",
            "street",
            "railing"
          ],
          "modelAnswers": [
            {
              "en": "Customers are sitting at tables on the outdoor patio under an umbrella.",
              "vi": "Khách hàng đang ngồi tại các bàn ở sân ngoài trời dưới một chiếc dù che nắng.",
              "score": 100
            },
            {
              "en": "Pedestrians are crossing the street at a marked crosswalk.",
              "vi": "Người đi bộ đang băng qua đường tại vạch kẻ qua đường.",
              "score": 95
            },
            {
              "en": "A striped awning is extended over the storefront entrance.",
              "vi": "Một mái hiên kẻ sọc được căng ra phía trên lối vào cửa tiệm.",
              "score": 95
            }
          ]
        }
      }
    ]
  },
  {
    "id": "transportation-travel",
    "title": "Giao thông, Bến cảng, Sân bay & Du lịch (Transportation & Travel)",
    "desc": "Hạ tầng giao thông hiện đại, nhà ga hàng không, bến cảng neo đậu tàu thuyền và luồng xe cộ đô thị. Trọng tâm các cụm từ di chuyển (board, dock, tow), phương tiện (vehicle, truck, vessel) và hành lý (luggage, suitcase).",
    "icon": "✈️",
    "scenes": [
      {
        "id": "scene-airport-terminal",
        "title": "Tranh 1: Nhà ga sân bay & Cửa khởi hành",
        "titleEn": "Airport Terminal & Boarding Gate",
        "desc": "Hành khách kéo vali và đeo ba lô đứng trước cửa kính nhìn ra máy bay trên đường băng, xếp hàng lên máy bay.",
        "svg": "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" class=\"part1-svg-art\">\n  <defs>\n    <linearGradient id=\"t5-sky\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#38BDF8\"/>\n      <stop offset=\"60%\" stop-color=\"#93C5FD\"/>\n      <stop offset=\"100%\" stop-color=\"#BAE6FD\"/>\n    </linearGradient>\n    <linearGradient id=\"t5-floor\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#CBD5E1\"/>\n      <stop offset=\"50%\" stop-color=\"#E2E8F0\"/>\n      <stop offset=\"100%\" stop-color=\"#F1F5F9\"/>\n    </linearGradient>\n    <linearGradient id=\"t5-glass\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#E0F2FE\" stop-opacity=\"0.3\"/>\n      <stop offset=\"100%\" stop-color=\"#BAE6FD\" stop-opacity=\"0.1\"/>\n    </linearGradient>\n    <filter id=\"t5-shadow\" x=\"-5%\" y=\"-5%\" width=\"110%\" height=\"115%\">\n      <feDropShadow dx=\"0\" dy=\"5\" stdDeviation=\"5\" flood-opacity=\"0.2\"/>\n    </filter>\n  </defs>\n\n  <!-- Outside View Through Huge Glass Windows: Sky & Tarmac Runway -->\n  <rect x=\"0\" y=\"0\" width=\"800\" height=\"280\" fill=\"url(#t5-sky)\"/>\n  <!-- Tarmac Runway Concrete -->\n  <polygon points=\"0,210 800,210 800,280 0,280\" fill=\"#64748B\"/>\n  <line x1=\"0\" y1=\"245\" x2=\"800\" y2=\"245\" stroke=\"#FACC15\" stroke-width=\"3\" stroke-dasharray=\"16,12\"/> <!-- Runway center line -->\n\n  <!-- Commercial Passenger Airplane on Tarmac Outside Window -->\n  <g id=\"t5-airplane\">\n    <!-- Fuselage Body (White & Blue Airline Livery) -->\n    <path d=\"M480 185 C510 185, 730 185, 760 170 L790 120 L765 120 L740 160 L540 165 C500 165, 470 175, 480 185 Z\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <path d=\"M480 185 C510 185, 730 185, 760 170 L740 175 L540 175 C500 175, 470 185, 480 185 Z\" fill=\"#2563EB\"/> <!-- Blue belly stripe -->\n    <!-- Tail Fin (Vertical Stabilizer) -->\n    <polygon points=\"740,160 765,120 790,120 760,170\" fill=\"#1D4ED8\"/>\n    <!-- Swept Jet Wing -->\n    <polygon points=\"560,175 620,175 660,215 630,218\" fill=\"#CBD5E1\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n    <!-- Jet Engine Under Wing -->\n    <ellipse cx=\"615\" cy=\"205\" rx=\"16\" ry=\"7\" fill=\"#475569\"/>\n    <!-- Passenger Windows Row -->\n    <g fill=\"#0F172A\">\n      <circle cx=\"530\" cy=\"170\" r=\"2.5\"/><circle cx=\"545\" cy=\"170\" r=\"2.5\"/><circle cx=\"560\" cy=\"170\" r=\"2.5\"/><circle cx=\"575\" cy=\"170\" r=\"2.5\"/><circle cx=\"590\" cy=\"170\" r=\"2.5\"/><circle cx=\"605\" cy=\"170\" r=\"2.5\"/><circle cx=\"620\" cy=\"170\" r=\"2.5\"/><circle cx=\"635\" cy=\"170\" r=\"2.5\"/><circle cx=\"650\" cy=\"170\" r=\"2.5\"/>\n    </g>\n    <!-- Nose Cockpit Windows -->\n    <polygon points=\"488,172 498,170 500,175 490,177\" fill=\"#0F172A\"/>\n  </g>\n\n  <!-- Airport Terminal Massive Glass Window Wall & Steel Beams -->\n  <rect x=\"0\" y=\"0\" width=\"800\" height=\"280\" fill=\"url(#t5-glass)\"/>\n  <!-- Steel Window Mullions / Vertical Struts -->\n  <line x1=\"220\" y1=\"0\" x2=\"220\" y2=\"280\" stroke=\"#334155\" stroke-width=\"6\"/>\n  <line x1=\"460\" y1=\"0\" x2=\"460\" y2=\"280\" stroke=\"#334155\" stroke-width=\"6\"/>\n  <line x1=\"700\" y1=\"0\" x2=\"700\" y2=\"280\" stroke=\"#334155\" stroke-width=\"6\"/>\n  <line x1=\"0\" y1=\"140\" x2=\"800\" y2=\"140\" stroke=\"#475569\" stroke-width=\"4\"/>\n  <line x1=\"0\" y1=\"280\" x2=\"800\" y2=\"280\" stroke=\"#1E293B\" stroke-width=\"6\"/> <!-- Window sill / base barrier -->\n\n  <!-- Polished High-Gloss Terminal Floor -->\n  <polygon points=\"0,280 800,280 800,500 0,500\" fill=\"url(#t5-floor)\"/>\n  <!-- Floor Tile Seams & Window Light Reflections -->\n  <line x1=\"220\" y1=\"280\" x2=\"160\" y2=\"500\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n  <line x1=\"460\" y1=\"280\" x2=\"440\" y2=\"500\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n  <line x1=\"700\" y1=\"280\" x2=\"720\" y2=\"500\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n  <line x1=\"0\" y1=\"380\" x2=\"800\" y2=\"380\" stroke=\"#CBD5E1\" stroke-width=\"1.2\"/>\n\n  <!-- Left: Flight Departure Information Screen (FIDS Monitor) -->\n  <g id=\"t5-fids-screen\" filter=\"url(#t5-shadow)\">\n    <line x1=\"120\" y1=\"0\" x2=\"120\" y2=\"70\" stroke=\"#1E293B\" stroke-width=\"4\"/>\n    <rect x=\"60\" y=\"70\" width=\"120\" height=\"75\" rx=\"4\" fill=\"#0F172A\" stroke=\"#334155\" stroke-width=\"3\"/>\n    <rect x=\"66\" y=\"75\" width=\"108\" height=\"65\" fill=\"#1E3A8A\"/>\n    <text x=\"120\" y=\"92\" font-size=\"9\" font-family=\"Arial, sans-serif\" font-weight=\"bold\" fill=\"#FACC15\" text-anchor=\"middle\">DEPARTURES</text>\n    <line x1=\"70\" y1=\"96\" x2=\"170\" y2=\"96\" stroke=\"#3B82F6\" stroke-width=\"1\"/>\n    <text x=\"72\" y=\"108\" font-size=\"7.5\" font-family=\"Arial, sans-serif\" fill=\"#FFFFFF\">VN 214 Tokyo .... BOARDING</text>\n    <text x=\"72\" y=\"119\" font-size=\"7.5\" font-family=\"Arial, sans-serif\" fill=\"#FFFFFF\">QH 108 Seoul .... ON TIME</text>\n    <text x=\"72\" y=\"130\" font-size=\"7.5\" font-family=\"Arial, sans-serif\" fill=\"#FFFFFF\">VJ 302 Paris ..... GATE 12</text>\n  </g>\n\n  <!-- Boarding Gate Sign & Counter (Center-Left) -->\n  <g id=\"t5-gate-counter\">\n    <rect x=\"230\" y=\"240\" width=\"100\" height=\"40\" rx=\"3\" fill=\"#0F172A\"/>\n    <text x=\"280\" y=\"265\" font-size=\"16\" font-family=\"Arial, sans-serif\" font-weight=\"bold\" fill=\"#22C55E\" text-anchor=\"middle\">GATE 12</text>\n  </g>\n\n  <!-- Traveler 1: Woman Pulling Rolling Suitcase & Walking (Center Foreground) -->\n  <g id=\"t5-traveler-woman\">\n    <!-- Legs in black slim travel trousers -->\n    <line x1=\"315\" y1=\"365\" x2=\"305\" y2=\"445\" stroke=\"#0F172A\" stroke-width=\"9\" stroke-linecap=\"round\"/>\n    <line x1=\"330\" y1=\"365\" x2=\"340\" y2=\"440\" stroke=\"#0F172A\" stroke-width=\"9\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"300\" cy=\"448\" rx=\"10\" ry=\"4\" fill=\"#1E293B\"/>\n    <ellipse cx=\"344\" cy=\"444\" rx=\"10\" ry=\"4\" fill=\"#1E293B\"/>\n    <!-- Elegant Beige Trench Coat -->\n    <path d=\"M305 270 C305 240, 345 240, 345 270 L350 365 L300 365 Z\" fill=\"#D97706\" stroke=\"#B45309\" stroke-width=\"1.5\"/>\n    <!-- Head & Hair -->\n    <ellipse cx=\"325\" cy=\"210\" rx=\"13\" ry=\"15\" fill=\"#FBCFE8\"/>\n    <path d=\"M312 205 C312 188, 338 188, 338 205 C338 225, 312 225, 312 205 Z\" fill=\"#451A03\"/>\n\n    <!-- Left Arm Extending Back to Pull Suitcase Handle -->\n    <path d=\"M312 275 Q280 305 245 330\" fill=\"none\" stroke=\"#D97706\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n    <circle cx=\"243\" cy=\"332\" r=\"5\" fill=\"#FBCFE8\"/>\n\n    <!-- Right Arm Holding Passport / Boarding Pass -->\n    <path d=\"M338 275 Q355 300 362 315\" fill=\"none\" stroke=\"#D97706\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n    <circle cx=\"364\" cy=\"317\" r=\"5\" fill=\"#FBCFE8\"/>\n    <polygon points=\"364,310 376,312 374,324 362,322\" fill=\"#2563EB\"/> <!-- Boarding ticket -->\n  </g>\n\n  <!-- Rolling Hard-Shell Suitcase (Wheeled Luggage) -->\n  <g id=\"t5-suitcase\" filter=\"url(#t5-shadow)\">\n    <!-- Telescoping Metal Handle (Extended) -->\n    <line x1=\"243\" y1=\"332\" x2=\"225\" y2=\"370\" stroke=\"#475569\" stroke-width=\"3\"/>\n    <line x1=\"250\" y1=\"335\" x2=\"232\" y2=\"373\" stroke=\"#475569\" stroke-width=\"3\"/>\n    <!-- Suitcase Main Body (Navy Blue) -->\n    <g transform=\"rotate(-15 220 410)\">\n      <rect x=\"195\" y=\"365\" width=\"45\" height=\"70\" rx=\"6\" fill=\"#1E3A8A\" stroke=\"#1D4ED8\" stroke-width=\"2\"/>\n      <!-- Grooves / Ribs on Suitcase -->\n      <line x1=\"202\" y1=\"380\" x2=\"233\" y2=\"380\" stroke=\"#3B82F6\" stroke-width=\"2\"/>\n      <line x1=\"202\" y1=\"395\" x2=\"233\" y2=\"395\" stroke=\"#3B82F6\" stroke-width=\"2\"/>\n      <line x1=\"202\" y1=\"410\" x2=\"233\" y2=\"410\" stroke=\"#3B82F6\" stroke-width=\"2\"/>\n      <line x1=\"202\" y1=\"425\" x2=\"233\" y2=\"425\" stroke=\"#3B82F6\" stroke-width=\"2\"/>\n      <!-- 4 Spinner Wheels -->\n      <circle cx=\"202\" cy=\"438\" r=\"4\" fill=\"#0F172A\"/>\n      <circle cx=\"233\" cy=\"438\" r=\"4\" fill=\"#0F172A\"/>\n    </g>\n  </g>\n\n  <!-- Traveler 2: Man Wearing Backpack & Boarding Flight (Right-Center) -->\n  <g id=\"t5-traveler-man\">\n    <!-- Legs walking forward toward window/gate -->\n    <line x1=\"430\" y1=\"355\" x2=\"425\" y2=\"425\" stroke=\"#334155\" stroke-width=\"10\" stroke-linecap=\"round\"/>\n    <line x1=\"448\" y1=\"355\" x2=\"455\" y2=\"420\" stroke=\"#334155\" stroke-width=\"10\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"422\" cy=\"428\" rx=\"10\" ry=\"4\" fill=\"#0F172A\"/>\n    <ellipse cx=\"458\" cy=\"424\" rx=\"10\" ry=\"4\" fill=\"#0F172A\"/>\n    <!-- Jacket / Torso -->\n    <path d=\"M420 265 C420 240, 460 240, 460 265 L462 355 L418 355 Z\" fill=\"#0F766E\"/>\n    <!-- Head with Short Dark Hair -->\n    <ellipse cx=\"440\" cy=\"215\" rx=\"13\" ry=\"15\" fill=\"#FBCFE8\"/>\n    <path d=\"M428 210 C428 195, 452 195, 452 210 Z\" fill=\"#1E293B\"/>\n\n    <!-- Large Travel Backpack Strapped on Back -->\n    <rect x=\"448\" y=\"255\" width=\"22\" height=\"45\" rx=\"5\" fill=\"#EA580C\" stroke=\"#C2410C\" stroke-width=\"1.5\"/>\n    <rect x=\"452\" y=\"280\" width=\"18\" height=\"15\" rx=\"2\" fill=\"#F97316\"/> <!-- Outer pouch -->\n    <!-- Backpack Straps over shoulders -->\n    <line x1=\"432\" y1=\"250\" x2=\"435\" y2=\"295\" stroke=\"#7C2D12\" stroke-width=\"4\"/>\n    <line x1=\"448\" y1=\"250\" x2=\"450\" y2=\"295\" stroke=\"#7C2D12\" stroke-width=\"4\"/>\n  </g>\n\n  <!-- Airport Waiting Lounge Seating Row (Far Right) -->\n  <g id=\"t5-lounge-seats\">\n    <rect x=\"560\" y=\"320\" width=\"180\" height=\"8\" rx=\"2\" fill=\"#475569\"/>\n    <!-- Metallic/Padded Seat Units -->\n    <rect x=\"570\" y=\"275\" width=\"35\" height=\"45\" rx=\"4\" fill=\"#3B82F6\"/>\n    <rect x=\"615\" y=\"275\" width=\"35\" height=\"45\" rx=\"4\" fill=\"#3B82F6\"/>\n    <rect x=\"660\" y=\"275\" width=\"35\" height=\"45\" rx=\"4\" fill=\"#3B82F6\"/>\n    <rect x=\"705\" y=\"275\" width=\"35\" height=\"45\" rx=\"4\" fill=\"#3B82F6\"/>\n    <!-- Seat legs -->\n    <line x1=\"580\" y1=\"328\" x2=\"575\" y2=\"365\" stroke=\"#64748B\" stroke-width=\"4\"/>\n    <line x1=\"720\" y1=\"328\" x2=\"725\" y2=\"365\" stroke=\"#64748B\" stroke-width=\"4\"/>\n  </g>\n</svg>",
        "hotspots": [
          {
            "id": "hs-t5-suitcase",
            "x": 26,
            "y": 78,
            "wordId": "kw-suitcase",
            "label": "Rolling suitcase"
          },
          {
            "id": "hs-t5-backpack",
            "x": 58,
            "y": 55,
            "wordId": "kw-backpack",
            "label": "Travel backpack"
          },
          {
            "id": "hs-t5-plane",
            "x": 76,
            "y": 34,
            "wordId": "kw-plane",
            "label": "Passenger airplane"
          },
          {
            "id": "hs-t5-terminal",
            "x": 54,
            "y": 28,
            "wordId": "kw-terminal",
            "label": "Airport terminal"
          },
          {
            "id": "hs-t5-board",
            "x": 55,
            "y": 62,
            "wordId": "kw-board",
            "label": "Board flight"
          },
          {
            "id": "hs-t5-carry",
            "x": 56,
            "y": 52,
            "wordId": "kw-carry",
            "label": "Carry backpack"
          },
          {
            "id": "hs-t5-luggage",
            "x": 30,
            "y": 80,
            "wordId": "kw-luggage",
            "label": "Travel luggage"
          },
          {
            "id": "hs-t5-screen",
            "x": 15,
            "y": 24,
            "wordId": "kw-platform",
            "label": "Departure monitor"
          }
        ],
        "keywords": [
          {
            "id": "kw-terminal",
            "word": "Terminal",
            "pos": "n",
            "ipa": "/ˈtɜːr.mə.nəl/",
            "vi": "Nhà ga hàng không, sảnh sân bay",
            "example": "Passengers are walking through the airport terminal.",
            "collocations": [
              "airport terminal",
              "terminal building",
              "departure terminal"
            ]
          },
          {
            "id": "kw-suitcase",
            "word": "Suitcase",
            "pos": "n",
            "ipa": "/ˈsuːt.keɪs/",
            "vi": "Chiếc vali kéo du lịch",
            "example": "A woman is pulling a wheeled suitcase behind her.",
            "collocations": [
              "pull a suitcase",
              "pack a suitcase",
              "heavy suitcase"
            ]
          },
          {
            "id": "kw-luggage",
            "word": "Luggage",
            "pos": "n",
            "ipa": "/ˈlʌɡ.ɪdʒ/",
            "vi": "Hành lý du lịch (vali, túi xách)",
            "example": "Travelers are transporting their luggage across the hall.",
            "collocations": [
              "carry luggage",
              "piece of luggage",
              "luggage compartment"
            ]
          },
          {
            "id": "kw-backpack",
            "word": "Backpack",
            "pos": "n",
            "ipa": "/ˈbæk.pæk/",
            "vi": "Chiếc ba lô đeo vai",
            "example": "A passenger is wearing an orange backpack on his shoulders.",
            "collocations": [
              "wear a backpack",
              "carry a backpack",
              "strap on a backpack"
            ]
          },
          {
            "id": "kw-plane",
            "word": "Plane",
            "pos": "n",
            "ipa": "/pleɪn/",
            "vi": "Máy bay chở khách",
            "example": "An airplane is waiting on the tarmac outside the window.",
            "collocations": [
              "board a plane",
              "passenger plane",
              "airplane runway"
            ]
          },
          {
            "id": "kw-board",
            "word": "Board",
            "pos": "v",
            "ipa": "/bɔːrd/",
            "vi": "Lên tàu, lên máy bay",
            "example": "Passengers are preparing to board their scheduled flight.",
            "collocations": [
              "board a flight",
              "boarding pass",
              "board a plane"
            ]
          },
          {
            "id": "kw-carry",
            "word": "Carry",
            "pos": "v",
            "ipa": "/ˈker.i/",
            "vi": "Mang, vác, đeo hành lý",
            "example": "He is carrying a travel bag through the departure lounge.",
            "collocations": [
              "carry a bag",
              "carry luggage",
              "carry in hand"
            ]
          },
          {
            "id": "kw-platform",
            "word": "Platform",
            "pos": "n",
            "ipa": "/ˈplæt.fɔːrm/",
            "vi": "Bục ga, sảnh chờ, cửa khởi hành",
            "example": "Travelers are gathering near the boarding platform.",
            "collocations": [
              "train platform",
              "boarding platform",
              "stand on the platform"
            ]
          },
          {
            "id": "kw-enter",
            "word": "Enter",
            "pos": "v",
            "ipa": "/ˈen.tər/",
            "vi": "Đi vào, bước vào",
            "example": "Passengers enter the gate area to board the aircraft.",
            "collocations": [
              "enter the terminal",
              "enter the gate",
              "enter through doors"
            ]
          },
          {
            "id": "kw-exit",
            "word": "Exit",
            "pos": "v/n",
            "ipa": "/ˈek.sɪt/",
            "vi": "Lối ra; rời khỏi",
            "example": "Travelers exit through the terminal corridor.",
            "collocations": [
              "emergency exit",
              "exit the building",
              "exit door"
            ]
          }
        ],
        "drill": {
          "question": "Listen to the four statements. Select the statement that best describes what you see in the picture.",
          "correct": "B",
          "options": [
            {
              "id": "A",
              "text": "The luggage is being loaded into the airplane's cargo hold.",
              "vi": "Hành lý đang được bốc dỡ vào khoang hàng của máy bay.",
              "isCorrect": false,
              "trapType": "Bẫy 'Being + V3' (Hành động không diễn ra)",
              "explanation": "Trong tranh không có ai đang bốc xếp hành lý vào máy bay ngoài đường băng; hành khách đang tự kéo vali trong sảnh."
            },
            {
              "id": "B",
              "text": "A passenger is pulling a suitcase across the terminal floor.",
              "vi": "Một hành khách đang kéo một chiếc vali đi qua sàn nhà ga.",
              "isCorrect": true,
              "trapType": "Đáp án chuẩn xác (Direct Action)",
              "explanation": "Miêu tả chính xác 100% người phụ nữ mặc áo măng tô đang kéo chiếc vali có bánh xe trên sàn nhà ga sáng bóng (pulling a suitcase across the terminal floor)."
            },
            {
              "id": "C",
              "text": "A pilot is waving from the cockpit window.",
              "vi": "Một viên phi công đang vẫy tay từ cửa sổ buồng lái.",
              "isCorrect": false,
              "trapType": "Bẫy chi tiết không có trong tranh (Missing Detail)",
              "explanation": "Máy bay ở xa ngoài đường băng và không có viên phi công nào đang vẫy tay."
            },
            {
              "id": "D",
              "text": "All flight information monitors have been turned off.",
              "vi": "Tất cả các màn hình thông tin chuyến bay đều đã bị tắt.",
              "isCorrect": false,
              "trapType": "Bẫy chi tiết đối lập (Opposite Detail)",
              "explanation": "Màn hình FIDS góc trái đang sáng rõ và hiển thị lịch trình các chuyến bay (Departures), đối lập hoàn toàn với 'turned off'."
            }
          ]
        },
        "describeChallenge": {
          "instructions": "Hãy mô tả hành khách di chuyển trong sân bay hoặc khung cảnh máy bay bằng 1 câu tiếng Anh hoàn chỉnh:",
          "targetKeywords": [
            "passenger",
            "suitcase",
            "terminal",
            "airplane",
            "backpack",
            "board",
            "luggage"
          ],
          "modelAnswers": [
            {
              "en": "A passenger is pulling a suitcase through an airport terminal.",
              "vi": "Một hành khách đang kéo vali qua sảnh nhà ga sân bay.",
              "score": 100
            },
            {
              "en": "A man wearing a backpack is walking toward the boarding gate.",
              "vi": "Một người đàn ông đeo ba lô đang bước về phía cửa lên máy bay.",
              "score": 95
            },
            {
              "en": "An airplane is parked on the tarmac outside the terminal window.",
              "vi": "Một chiếc máy bay đang đậu trên đường băng bên ngoài cửa kính nhà ga.",
              "score": 95
            }
          ]
        }
      },
      {
        "id": "scene-harbor-pier",
        "title": "Tranh 2: Bến cảng & Tàu thuyền neo đậu",
        "titleEn": "Harbor Pier & Moored Boats",
        "desc": "Các con thuyền neo đậu dọc theo cầu tàu bằng gỗ ven dòng sông, mặt nước phản chiếu bầu trời.",
        "svg": "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" class=\"part1-svg-art\">\n  <defs>\n    <linearGradient id=\"t5h-sky\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#0284C7\"/>\n      <stop offset=\"60%\" stop-color=\"#38BDF8\"/>\n      <stop offset=\"100%\" stop-color=\"#BAE6FD\"/>\n    </linearGradient>\n    <linearGradient id=\"t5h-water\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#0369A1\"/>\n      <stop offset=\"50%\" stop-color=\"#0284C7\"/>\n      <stop offset=\"100%\" stop-color=\"#0EA5E9\"/>\n    </linearGradient>\n    <linearGradient id=\"t5h-pier\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#78350F\"/>\n      <stop offset=\"50%\" stop-color=\"#92400E\"/>\n      <stop offset=\"100%\" stop-color=\"#B45309\"/>\n    </linearGradient>\n    <filter id=\"t5h-shadow\" x=\"-5%\" y=\"-5%\" width=\"110%\" height=\"115%\">\n      <feDropShadow dx=\"0\" dy=\"5\" stdDeviation=\"5\" flood-opacity=\"0.22\"/>\n    </filter>\n  </defs>\n\n  <!-- Clear Coastal Sky -->\n  <rect x=\"0\" y=\"0\" width=\"800\" height=\"230\" fill=\"url(#t5h-sky)\"/>\n  <!-- Distant Shoreline & Hills -->\n  <path d=\"M0 200 Q200 170 450 190 Q650 175 800 195 L800 230 L0 230 Z\" fill=\"#15803D\" opacity=\"0.6\"/>\n  <!-- Seagulls in Sky -->\n  <path d=\"M220 80 Q230 72 240 80 Q250 72 260 80\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n  <path d=\"M280 95 Q288 88 296 95 Q304 88 312 95\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n\n  <!-- Calm Blue Waterway / River & Harbor Water -->\n  <polygon points=\"0,220 800,220 800,500 0,500\" fill=\"url(#t5h-water)\"/>\n  <!-- Water Shimmer Ripple Lines -->\n  <line x1=\"120\" y1=\"240\" x2=\"280\" y2=\"240\" stroke=\"#E0F2FE\" stroke-width=\"1.5\" opacity=\"0.5\"/>\n  <line x1=\"360\" y1=\"260\" x2=\"520\" y2=\"260\" stroke=\"#E0F2FE\" stroke-width=\"1.5\" opacity=\"0.5\"/>\n  <line x1=\"80\" y1=\"285\" x2=\"220\" y2=\"285\" stroke=\"#E0F2FE\" stroke-width=\"1.8\" opacity=\"0.6\"/>\n  <line x1=\"260\" y1=\"315\" x2=\"480\" y2=\"315\" stroke=\"#E0F2FE\" stroke-width=\"1.8\" opacity=\"0.6\"/>\n  <line x1=\"400\" y1=\"360\" x2=\"650\" y2=\"360\" stroke=\"#E0F2FE\" stroke-width=\"2\" opacity=\"0.7\"/>\n\n  <!-- Wooden Pier / Boardwalk (Extending diagonally from lower left into harbor) -->\n  <g id=\"t5h-pier\" filter=\"url(#t5h-shadow)\">\n    <!-- Wooden Pier Deck Planks -->\n    <polygon points=\"0,320 340,320 480,500 0,500\" fill=\"url(#t5h-pier)\" stroke=\"#451A03\" stroke-width=\"2\"/>\n    <!-- Individual wood plank horizontal lines -->\n    <line x1=\"20\" y1=\"340\" x2=\"355\" y2=\"340\" stroke=\"#451A03\" stroke-width=\"1.8\"/>\n    <line x1=\"40\" y1=\"365\" x2=\"375\" y2=\"365\" stroke=\"#451A03\" stroke-width=\"1.8\"/>\n    <line x1=\"60\" y1=\"395\" x2=\"395\" y2=\"395\" stroke=\"#451A03\" stroke-width=\"1.8\"/>\n    <line x1=\"80\" y1=\"430\" x2=\"425\" y2=\"430\" stroke=\"#451A03\" stroke-width=\"2\"/>\n    <line x1=\"100\" y1=\"468\" x2=\"455\" y2=\"468\" stroke=\"#451A03\" stroke-width=\"2\"/>\n\n    <!-- Wooden Pilings / Mooring Posts in Water -->\n    <rect x=\"330\" y=\"310\" width=\"16\" height=\"90\" rx=\"3\" fill=\"#451A03\" stroke=\"#1C1917\" stroke-width=\"2\"/>\n    <rect x=\"400\" y=\"380\" width=\"18\" height=\"100\" rx=\"3\" fill=\"#451A03\" stroke=\"#1C1917\" stroke-width=\"2\"/>\n    <rect x=\"470\" y=\"450\" width=\"20\" height=\"90\" rx=\"3\" fill=\"#451A03\" stroke=\"#1C1917\" stroke-width=\"2\"/>\n\n    <!-- Cast Iron Mooring Cleats / Bollards on Pier Edge -->\n    <polygon points=\"360,370 380,370 384,378 356,378\" fill=\"#1E293B\"/>\n    <circle cx=\"370\" cy=\"368\" r=\"4\" fill=\"#0F172A\"/>\n    <polygon points=\"430,440 450,440 454,448 426,448\" fill=\"#1E293B\"/>\n    <circle cx=\"440\" cy=\"438\" r=\"4\" fill=\"#0F172A\"/>\n\n    <!-- Thick Mooring Ropes Tying Boat to Pier Post -->\n    <path d=\"M370 374 Q440 370 510 355\" fill=\"none\" stroke=\"#D97706\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    <path d=\"M440 444 Q490 430 535 410\" fill=\"none\" stroke=\"#D97706\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  </g>\n\n  <!-- Visitor Standing at Pier Edge Overlooking Harbor (Lower Left) -->\n  <g id=\"t5h-viewer\">\n    <!-- Legs in denim jeans -->\n    <line x1=\"220\" y1=\"380\" x2=\"225\" y2=\"455\" stroke=\"#1E3A8A\" stroke-width=\"10\" stroke-linecap=\"round\"/>\n    <line x1=\"242\" y1=\"380\" x2=\"245\" y2=\"455\" stroke=\"#1E3A8A\" stroke-width=\"10\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"225\" cy=\"458\" rx=\"10\" ry=\"4\" fill=\"#0F172A\"/>\n    <ellipse cx=\"247\" cy=\"458\" rx=\"10\" ry=\"4\" fill=\"#0F172A\"/>\n    <!-- Red Jacket / Torso facing water -->\n    <path d=\"M215 295 C215 260, 255 260, 255 295 L252 380 L218 380 Z\" fill=\"#DC2626\"/>\n    <!-- Head & Blue Baseball Cap -->\n    <ellipse cx=\"235\" cy=\"235\" rx=\"13\" ry=\"15\" fill=\"#FBCFE8\"/>\n    <path d=\"M222 230 C222 215, 248 215, 248 230 Z\" fill=\"#1D4ED8\"/>\n    <polygon points=\"235,225 258,225 255,232 235,232\" fill=\"#1D4ED8\"/> <!-- Cap visor facing right toward water -->\n    <!-- Hands in Pockets looking out at boats -->\n    <path d=\"M218 305 Q228 335 230 350\" fill=\"none\" stroke=\"#DC2626\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n    <path d=\"M252 305 Q245 335 240 350\" fill=\"none\" stroke=\"#DC2626\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n  </g>\n\n  <!-- Moored Motorboat / Cabin Cruiser (Tied Along Pier) -->\n  <g id=\"t5h-moored-boat\" filter=\"url(#t5h-shadow)\">\n    <!-- Boat Hull (White & Navy) -->\n    <path d=\"M500 350 Q590 330 690 330 Q740 330 760 365 L720 420 Q610 420 500 395 Z\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    <path d=\"M500 375 Q590 355 690 355 Q730 355 745 380 L720 420 Q610 420 500 395 Z\" fill=\"#1E3A8A\"/> <!-- Blue lower hull -->\n    <!-- Cabin Structure -->\n    <polygon points=\"560,335 680,335 670,295 590,295\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1.5\"/>\n    <polygon points=\"595,302 665,302 660,325 585,325\" fill=\"#38BDF8\" opacity=\"0.8\"/> <!-- Cabin windows -->\n    <!-- Metal Handrails along deck -->\n    <line x1=\"510\" y1=\"345\" x2=\"720\" y2=\"345\" stroke=\"#CBD5E1\" stroke-width=\"2\"/>\n    <line x1=\"540\" y1=\"345\" x2=\"540\" y2=\"355\" stroke=\"#CBD5E1\" stroke-width=\"2\"/>\n    <line x1=\"620\" y1=\"345\" x2=\"620\" y2=\"355\" stroke=\"#CBD5E1\" stroke-width=\"2\"/>\n    <line x1=\"700\" y1=\"345\" x2=\"700\" y2=\"355\" stroke=\"#CBD5E1\" stroke-width=\"2\"/>\n    <!-- Small Flag on Stern Pole -->\n    <line x1=\"750\" y1=\"330\" x2=\"750\" y2=\"370\" stroke=\"#64748B\" stroke-width=\"2\"/>\n    <polygon points=\"750,330 735,337 750,344\" fill=\"#EF4444\"/>\n  </g>\n\n  <!-- Distant White Sailboat Gliding Across Waterway (Right Background) -->\n  <g id=\"t5h-sailboat\">\n    <!-- Boat Hull -->\n    <path d=\"M600 240 Q650 240 680 235 L670 250 Q630 250 595 245 Z\" fill=\"#FFFFFF\" stroke=\"#64748B\" stroke-width=\"1\"/>\n    <!-- Tall Mast -->\n    <line x1=\"640\" y1=\"130\" x2=\"640\" y2=\"242\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <!-- Main White Sail (Triangular) -->\n    <polygon points=\"638,135 638,235 590,230\" fill=\"#FFFFFF\" opacity=\"0.95\" stroke=\"#E2E8F0\" stroke-width=\"1\"/>\n    <!-- Jib / Front Sail -->\n    <polygon points=\"642,145 642,235 682,235\" fill=\"#E0F2FE\" opacity=\"0.9\" stroke=\"#CBD5E1\" stroke-width=\"1\"/>\n  </g>\n\n  <!-- Distant Person Rowing a Small Rowboat (Center Background) -->\n  <g id=\"t5h-rowboat\" opacity=\"0.85\">\n    <ellipse cx=\"420\" cy=\"255\" rx=\"25\" ry=\"8\" fill=\"#78350F\" stroke=\"#451A03\" stroke-width=\"1\"/>\n    <ellipse cx=\"420\" cy=\"246\" rx=\"5\" ry=\"6\" fill=\"#FBCFE8\"/>\n    <rect x=\"417\" y=\"250\" width=\"6\" height=\"8\" fill=\"#F59E0B\"/>\n    <!-- Pair of Oars extending out -->\n    <line x1=\"400\" y1=\"262\" x2=\"435\" y2=\"250\" stroke=\"#D97706\" stroke-width=\"1.8\"/>\n    <line x1=\"405\" y1=\"250\" x2=\"440\" y2=\"262\" stroke=\"#D97706\" stroke-width=\"1.8\"/>\n  </g>\n</svg>",
        "hotspots": [
          {
            "id": "hs-t5h-pier",
            "x": 35,
            "y": 76,
            "wordId": "kw-pier",
            "label": "Wooden pier"
          },
          {
            "id": "hs-t5h-boat",
            "x": 78,
            "y": 75,
            "wordId": "kw-boat",
            "label": "Moored boat"
          },
          {
            "id": "hs-t5h-dock",
            "x": 65,
            "y": 72,
            "wordId": "kw-dock",
            "label": "Docked along pier"
          },
          {
            "id": "hs-t5h-waterway",
            "x": 62,
            "y": 55,
            "wordId": "kw-waterway",
            "label": "Harbor waterway"
          },
          {
            "id": "hs-t5h-overlook",
            "x": 30,
            "y": 52,
            "wordId": "kw-overlook",
            "label": "Overlook the water"
          },
          {
            "id": "hs-t5h-tie",
            "x": 58,
            "y": 82,
            "wordId": "kw-dock",
            "label": "Tie with ropes"
          },
          {
            "id": "hs-t5h-sail",
            "x": 80,
            "y": 38,
            "wordId": "kw-sail",
            "label": "Sailboat"
          },
          {
            "id": "hs-t5h-row",
            "x": 52,
            "y": 51,
            "wordId": "kw-row",
            "label": "Rowing a boat"
          }
        ],
        "keywords": [
          {
            "id": "kw-pier",
            "word": "Pier",
            "pos": "n",
            "ipa": "/pɪr/",
            "vi": "Cầu tàu, bến tàu nhô ra mặt nước",
            "example": "A wooden pier extends into the tranquil harbor.",
            "collocations": [
              "along the pier",
              "wooden pier",
              "walk on the pier"
            ]
          },
          {
            "id": "kw-dock",
            "word": "Dock",
            "pos": "n/v",
            "ipa": "/dɑːk/",
            "vi": "Bến cảng; cập cảng, neo đậu",
            "example": "Several motorboats are docked alongside the wooden pier.",
            "collocations": [
              "docked at the pier",
              "boat dock",
              "moored at the dock"
            ]
          },
          {
            "id": "kw-boat",
            "word": "Boat",
            "pos": "n",
            "ipa": "/boʊt/",
            "vi": "Thuyền, tàu nhỏ",
            "example": "A white motorboat is tied securely to the dock.",
            "collocations": [
              "row a boat",
              "sail a boat",
              "motor boat",
              "fishing boat"
            ]
          },
          {
            "id": "kw-waterway",
            "word": "Waterway",
            "pos": "n",
            "ipa": "/ˈwɑː.t̬ɚ.weɪ/",
            "vi": "Đường thủy, luồng nước ven cảng",
            "example": "Boats navigate through the coastal waterway.",
            "collocations": [
              "coastal waterway",
              "inland waterway",
              "busy waterway"
            ]
          },
          {
            "id": "kw-river",
            "word": "River",
            "pos": "n",
            "ipa": "/ˈrɪv.ɚ/",
            "vi": "Dòng sông",
            "example": "The river opens into a wide harbor basin.",
            "collocations": [
              "along the river",
              "river bank",
              "cross a river"
            ]
          },
          {
            "id": "kw-shore",
            "word": "Shore",
            "pos": "n",
            "ipa": "/ʃɔːr/",
            "vi": "Bờ sông, bờ biển",
            "example": "The distant shore is covered in lush green hills.",
            "collocations": [
              "along the shore",
              "rocky shore",
              "sandy shore"
            ]
          },
          {
            "id": "kw-sail",
            "word": "Sail",
            "pos": "v/n",
            "ipa": "/seɪl/",
            "vi": "Căng buồm, lướt sóng; cánh buồm",
            "example": "A sailboat is sailing across the open bay.",
            "collocations": [
              "set sail",
              "white sail",
              "sail across the water"
            ]
          },
          {
            "id": "kw-row",
            "word": "Row",
            "pos": "v",
            "ipa": "/roʊ/",
            "vi": "Chèo thuyền",
            "example": "A person is rowing a small boat across the water.",
            "collocations": [
              "row a boat",
              "pair of oars to row",
              "rowing across"
            ]
          },
          {
            "id": "kw-overlook",
            "word": "Overlook",
            "pos": "v",
            "ipa": "/ˌoʊ.vɚˈlʊk/",
            "vi": "Nhìn bao quát ra hướng mặt nước",
            "example": "A visitor overlooks the boats in the harbor.",
            "collocations": [
              "overlook the water",
              "overlook the harbor",
              "pier overlooks"
            ]
          },
          {
            "id": "kw-border",
            "word": "Border",
            "pos": "v/n",
            "ipa": "/ˈbɔːr.dər/",
            "vi": "Chạy dọc theo bờ, ranh giới bờ nước",
            "example": "Trees and green hills border the quiet waterway.",
            "collocations": [
              "border the river",
              "border the shoreline",
              "coastal border"
            ]
          }
        ],
        "drill": {
          "question": "Listen to the four statements. Select the statement that best describes what you see in the picture.",
          "correct": "B",
          "options": [
            {
              "id": "A",
              "text": "A vessel is being towed into dry dock for maintenance.",
              "vi": "Một con tàu đang được lai dắt vào ụ cạn để bảo dưỡng.",
              "isCorrect": false,
              "trapType": "Bẫy 'Being + V3' (Hành động sai hoàn toàn)",
              "explanation": "Không hề có con tàu nào đang được lai dắt ('being towed') vào ụ cạn; các con thuyền đang neo đậu yên bình cạnh cầu tàu."
            },
            {
              "id": "B",
              "text": "Several boats are moored along a wooden pier.",
              "vi": "Một số chiếc thuyền đang neo đậu dọc theo một cầu tàu bằng gỗ.",
              "isCorrect": true,
              "trapType": "Đáp án chuẩn xác (Direct Action)",
              "explanation": "Miêu tả chính xác 100% các con thuyền được buộc dây neo đậu sát mép cầu tàu gỗ (moored/docked along a wooden pier)."
            },
            {
              "id": "C",
              "text": "Fishermen are casting large nets into the ocean.",
              "vi": "Những người đánh cá đang quăng những tấm lưới lớn xuống biển.",
              "isCorrect": false,
              "trapType": "Bẫy hành động sai (Incorrect Action)",
              "explanation": "Trong tranh chỉ có một người đứng trên cầu tàu ngắm cảnh và một người chèo thuyền, không hề có ai quăng lưới đánh cá."
            },
            {
              "id": "D",
              "text": "All of the boats have departed from the harbor.",
              "vi": "Tất cả các con thuyền đều đã rời khỏi bến cảng.",
              "isCorrect": false,
              "trapType": "Bẫy chi tiết đối lập (Opposite Detail)",
              "explanation": "Có thuyền máy lớn neo cạnh cầu tàu và thuyền buồm đang di chuyển trên mặt nước, trái ngược hoàn toàn với 'have departed'."
            }
          ]
        },
        "describeChallenge": {
          "instructions": "Hãy mô tả cảnh tàu thuyền neo đậu hoặc quang cảnh cầu tàu bằng 1 câu tiếng Anh hoàn chỉnh:",
          "targetKeywords": [
            "boat",
            "pier",
            "dock",
            "waterway",
            "overlook",
            "sail",
            "shore"
          ],
          "modelAnswers": [
            {
              "en": "Several boats are docked along a wooden pier in the harbor.",
              "vi": "Nhiều con thuyền đang neo đậu dọc theo một cầu tàu gỗ trong bến cảng.",
              "score": 100
            },
            {
              "en": "A person is standing on the pier overlooking the waterway.",
              "vi": "Một người đang đứng trên cầu tàu nhìn bao quát ra luồng nước.",
              "score": 95
            },
            {
              "en": "A sailboat is gliding across the calm water near the shore.",
              "vi": "Một chiếc thuyền buồm đang lướt trên mặt nước yên bình gần bờ.",
              "score": 95
            }
          ]
        }
      },
      {
        "id": "scene-intersection-bridge",
        "title": "Tranh 3: Giao lộ & Cầu vượt đô thị",
        "titleEn": "Urban Intersection & Bridge",
        "desc": "Phương tiện ô tô và xe tải dừng chờ trước cột đèn giao thông, phía sau là cây cầu vượt bắc ngang thành phố.",
        "svg": "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" class=\"part1-svg-art\">\n  <defs>\n    <linearGradient id=\"t5i-sky\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#60A5FA\"/>\n      <stop offset=\"60%\" stop-color=\"#93C5FD\"/>\n      <stop offset=\"100%\" stop-color=\"#E2E8F0\"/>\n    </linearGradient>\n    <linearGradient id=\"t5i-road\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#475569\"/>\n      <stop offset=\"50%\" stop-color=\"#334155\"/>\n      <stop offset=\"100%\" stop-color=\"#1E293B\"/>\n    </linearGradient>\n    <linearGradient id=\"t5i-bridge\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#64748B\"/>\n      <stop offset=\"50%\" stop-color=\"#94A3B8\"/>\n      <stop offset=\"100%\" stop-color=\"#475569\"/>\n    </linearGradient>\n    <filter id=\"t5i-shadow\" x=\"-5%\" y=\"-5%\" width=\"110%\" height=\"115%\">\n      <feDropShadow dx=\"0\" dy=\"5\" stdDeviation=\"5\" flood-opacity=\"0.22\"/>\n    </filter>\n  </defs>\n\n  <!-- Clear Urban Sky -->\n  <rect x=\"0\" y=\"0\" width=\"800\" height=\"240\" fill=\"url(#t5i-sky)\"/>\n\n  <!-- Distant City Skyscrapers (Background Skyline) -->\n  <g id=\"t5i-skyline\" opacity=\"0.5\">\n    <rect x=\"60\" y=\"80\" width=\"55\" height=\"150\" fill=\"#94A3B8\"/>\n    <rect x=\"130\" y=\"50\" width=\"70\" height=\"180\" fill=\"#64748B\"/>\n    <rect x=\"220\" y=\"90\" width=\"60\" height=\"140\" fill=\"#94A3B8\"/>\n    <rect x=\"620\" y=\"70\" width=\"65\" height=\"160\" fill=\"#64748B\"/>\n    <rect x=\"700\" y=\"95\" width=\"60\" height=\"135\" fill=\"#94A3B8\"/>\n  </g>\n\n  <!-- Massive Arched Highway Suspension Bridge (Spans across background) -->\n  <g id=\"t5i-bridge\" filter=\"url(#t5i-shadow)\">\n    <!-- Bridge Road Deck -->\n    <rect x=\"0\" y=\"165\" width=\"800\" height=\"18\" fill=\"url(#t5i-bridge)\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <line x1=\"0\" y1=\"174\" x2=\"800\" y2=\"174\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-dasharray=\"12,8\"/> <!-- Highway line -->\n    <!-- Concrete Bridge Support Pillars -->\n    <polygon points=\"180,183 170,250 210,250 200,183\" fill=\"#64748B\"/>\n    <polygon points=\"580,183 570,250 610,250 600,183\" fill=\"#64748B\"/>\n    <!-- Suspension Cable Towers & Arches -->\n    <line x1=\"190\" y1=\"90\" x2=\"190\" y2=\"183\" stroke=\"#475569\" stroke-width=\"6\"/>\n    <line x1=\"590\" y1=\"90\" x2=\"590\" y2=\"183\" stroke=\"#475569\" stroke-width=\"6\"/>\n    <!-- Main Sweeping Suspension Cables -->\n    <path d=\"M0 130 Q190 90 390 165 Q590 90 800 130\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3.5\"/>\n    <!-- Vertical Suspension Hanger Wires -->\n    <line x1=\"240\" y1=\"125\" x2=\"240\" y2=\"165\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <line x1=\"290\" y1=\"140\" x2=\"290\" y2=\"165\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <line x1=\"340\" y1=\"152\" x2=\"340\" y2=\"165\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <line x1=\"440\" y1=\"152\" x2=\"440\" y2=\"165\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <line x1=\"490\" y1=\"140\" x2=\"490\" y2=\"165\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <line x1=\"540\" y1=\"125\" x2=\"540\" y2=\"165\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <!-- Tiny vehicles passing across the distant bridge highway -->\n    <rect x=\"270\" y=\"157\" width=\"16\" height=\"8\" rx=\"2\" fill=\"#EF4444\"/>\n    <rect x=\"420\" y=\"155\" width=\"22\" height=\"10\" rx=\"2\" fill=\"#2563EB\"/>\n    <rect x=\"520\" y=\"157\" width=\"15\" height=\"8\" rx=\"2\" fill=\"#FFFFFF\"/>\n  </g>\n\n  <!-- Urban Roadway Intersection Surface -->\n  <polygon points=\"0,230 800,230 800,500 0,500\" fill=\"url(#t5i-road)\"/>\n\n  <!-- Left Sidewalk & Curb (Corner with Traffic Light Pole) -->\n  <polygon points=\"0,310 160,310 120,500 0,500\" fill=\"#CBD5E1\"/>\n  <polygon points=\"160,310 180,310 140,500 120,500\" fill=\"#94A3B8\"/> <!-- Curb edge -->\n\n  <!-- Zebra Crosswalk Markings at Intersection -->\n  <g id=\"t5i-crosswalk\">\n    <polygon points=\"180,330 320,330 305,355 170,355\" fill=\"#FFFFFF\" opacity=\"0.9\"/>\n    <polygon points=\"190,375 350,375 330,405 180,405\" fill=\"#FFFFFF\" opacity=\"0.9\"/>\n    <polygon points=\"200,425 385,425 360,460 190,460\" fill=\"#FFFFFF\" opacity=\"0.9\"/>\n    <!-- Stop Line for Vehicles before crosswalk -->\n    <polygon points=\"340,325 365,325 430,480 405,480\" fill=\"#FFFFFF\" opacity=\"0.9\"/>\n  </g>\n\n  <!-- Tall Traffic Light Signal Post (Left Sidewalk) -->\n  <g id=\"t5i-traffic-light\" filter=\"url(#t5i-shadow)\">\n    <!-- Tall Metal Pole -->\n    <rect x=\"75\" y=\"120\" width=\"10\" height=\"260\" fill=\"#1E293B\" rx=\"2\"/>\n    <!-- Cantilever Arm extending over street -->\n    <line x1=\"80\" y1=\"130\" x2=\"220\" y2=\"130\" stroke=\"#1E293B\" stroke-width=\"8\"/>\n    <!-- Overhead Traffic Signal Box -->\n    <rect x=\"170\" y=\"115\" width=\"26\" height=\"65\" rx=\"4\" fill=\"#0F172A\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <!-- Red, Yellow, Green Signal Lenses -->\n    <circle cx=\"183\" cy=\"128\" r=\"7\" fill=\"#EF4444\"/> <!-- Red light (illuminated) -->\n    <circle cx=\"183\" cy=\"148\" r=\"7\" fill=\"#713F12\"/> <!-- Yellow (off) -->\n    <circle cx=\"183\" cy=\"168\" r=\"7\" fill=\"#14532D\"/> <!-- Green (off) -->\n    <!-- Sun Visors on Signal -->\n    <path d=\"M174 121 Q183 116 192 121\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <path d=\"M174 141 Q183 136 192 141\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <path d=\"M174 161 Q183 156 192 161\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\"/>\n\n    <!-- Pedestrian Signal Box on Post -->\n    <rect x=\"68\" y=\"240\" width=\"24\" height=\"40\" rx=\"3\" fill=\"#0F172A\"/>\n    <circle cx=\"80\" cy=\"252\" r=\"5\" fill=\"#EF4444\"/> <!-- Don't walk hand / red -->\n    <circle cx=\"80\" cy=\"268\" r=\"5\" fill=\"#334155\"/>\n  </g>\n\n  <!-- Large Delivery Cargo Truck (Stopped at Intersection / Center) -->\n  <g id=\"t5i-truck\" filter=\"url(#t5i-shadow)\">\n    <!-- Truck Box Container (White) -->\n    <rect x=\"360\" y=\"250\" width=\"150\" height=\"105\" rx=\"4\" fill=\"#F8FAFC\" stroke=\"#CBD5E1\" stroke-width=\"2\"/>\n    <!-- Company Logo Stripe on Box -->\n    <rect x=\"360\" y=\"295\" width=\"150\" height=\"20\" fill=\"#2563EB\"/>\n    <text x=\"435\" y=\"310\" font-size=\"12\" font-family=\"Arial, sans-serif\" font-weight=\"bold\" fill=\"#FFFFFF\" text-anchor=\"middle\">EXPRESS LOGISTICS</text>\n    <!-- Truck Cab / Cockpit (Red) -->\n    <polygon points=\"510,270 560,270 580,315 580,355 510,355\" fill=\"#DC2626\" stroke=\"#991B1B\" stroke-width=\"2\"/>\n    <!-- Windshield & Side Window -->\n    <polygon points=\"515,275 550,275 565,310 515,310\" fill=\"#BAE6FD\" opacity=\"0.8\"/>\n    <!-- Headlights & Bumper -->\n    <rect x=\"575\" y=\"335\" width=\"8\" height=\"12\" fill=\"#FEF08A\"/>\n    <rect x=\"560\" y=\"352\" width=\"25\" height=\"10\" fill=\"#64748B\" rx=\"2\"/>\n    <!-- Heavy Truck Tires -->\n    <ellipse cx=\"400\" cy=\"365\" rx=\"20\" ry=\"14\" fill=\"#0F172A\"/>\n    <ellipse cx=\"400\" cy=\"365\" rx=\"8\" ry=\"6\" fill=\"#94A3B8\"/>\n    <ellipse cx=\"445\" cy=\"365\" rx=\"20\" ry=\"14\" fill=\"#0F172A\"/>\n    <ellipse cx=\"445\" cy=\"365\" rx=\"8\" ry=\"6\" fill=\"#94A3B8\"/>\n    <ellipse cx=\"550\" cy=\"365\" rx=\"20\" ry=\"14\" fill=\"#0F172A\"/>\n    <ellipse cx=\"550\" cy=\"365\" rx=\"8\" ry=\"6\" fill=\"#94A3B8\"/>\n  </g>\n\n  <!-- Passenger Automobile (Modern Sedan Stopped Behind/Beside Truck) -->\n  <g id=\"t5i-automobile\" filter=\"url(#t5i-shadow)\">\n    <!-- Car Body (Sleek Blue) -->\n    <path d=\"M595 385 C615 360, 675 360, 715 380 L760 395 L760 430 L580 430 Z\" fill=\"#1D4ED8\" stroke=\"#1E40AF\" stroke-width=\"2\"/>\n    <!-- Car Roof & Windows -->\n    <polygon points=\"620,385 660,365 700,365 725,385\" fill=\"#38BDF8\" opacity=\"0.75\" stroke=\"#1E40AF\" stroke-width=\"1.5\"/>\n    <line x1=\"670\" y1=\"365\" x2=\"675\" y2=\"385\" stroke=\"#1E40AF\" stroke-width=\"2\"/>\n    <!-- Car Headlights & Taillights -->\n    <polygon points=\"580,405 590,400 590,412 580,410\" fill=\"#FEF08A\"/>\n    <!-- Car Wheels -->\n    <ellipse cx=\"615\" cy=\"430\" rx=\"18\" ry=\"12\" fill=\"#0F172A\"/>\n    <ellipse cx=\"615\" cy=\"430\" rx=\"7\" ry=\"5\" fill=\"#CBD5E1\"/>\n    <ellipse cx=\"730\" cy=\"430\" rx=\"18\" ry=\"12\" fill=\"#0F172A\"/>\n    <ellipse cx=\"730\" cy=\"430\" rx=\"7\" ry=\"5\" fill=\"#CBD5E1\"/>\n  </g>\n\n  <!-- Pedestrian Waiting on Sidewalk Curb to Cross Street -->\n  <g id=\"t5i-pedestrian\">\n    <ellipse cx=\"45\" cy=\"355\" rx=\"8\" ry=\"10\" fill=\"#FBCFE8\"/>\n    <path d=\"M38 350 C38 340, 52 340, 52 350 Z\" fill=\"#374151\"/>\n    <rect x=\"38\" y=\"365\" width=\"14\" height=\"28\" fill=\"#F59E0B\" rx=\"2\"/>\n    <line x1=\"41\" y1=\"393\" x2=\"41\" y2=\"425\" stroke=\"#1E293B\" stroke-width=\"5\"/>\n    <line x1=\"49\" y1=\"393\" x2=\"49\" y2=\"425\" stroke=\"#1E293B\" stroke-width=\"5\"/>\n  </g>\n</svg>",
        "hotspots": [
          {
            "id": "hs-t5i-intersection",
            "x": 42,
            "y": 80,
            "wordId": "kw-intersection",
            "label": "Urban intersection"
          },
          {
            "id": "hs-t5i-trafficlight",
            "x": 24,
            "y": 28,
            "wordId": "kw-trafficlight",
            "label": "Traffic light signal"
          },
          {
            "id": "hs-t5i-bridge",
            "x": 48,
            "y": 32,
            "wordId": "kw-bridge",
            "label": "Suspension highway bridge"
          },
          {
            "id": "hs-t5i-truck",
            "x": 58,
            "y": 62,
            "wordId": "kw-truck",
            "label": "Delivery truck"
          },
          {
            "id": "hs-t5i-auto",
            "x": 82,
            "y": 78,
            "wordId": "kw-automobile",
            "label": "Automobile sedan"
          },
          {
            "id": "hs-t5i-vehicle",
            "x": 64,
            "y": 68,
            "wordId": "kw-vehicle",
            "label": "Motor vehicles"
          },
          {
            "id": "hs-t5i-highway",
            "x": 68,
            "y": 34,
            "wordId": "kw-highway",
            "label": "Highway overpass"
          },
          {
            "id": "hs-t5i-road",
            "x": 68,
            "y": 88,
            "wordId": "kw-road",
            "label": "Asphalt road"
          }
        ],
        "keywords": [
          {
            "id": "kw-intersection",
            "word": "Intersection",
            "pos": "n",
            "ipa": "/ˌɪn.t̬ɚˈsek.ʃən/",
            "vi": "Ngã tư, giao lộ giao thông",
            "example": "Vehicles are stopped at a busy city intersection.",
            "collocations": [
              "busy intersection",
              "at an intersection",
              "cross an intersection"
            ]
          },
          {
            "id": "kw-trafficlight",
            "word": "Traffic light",
            "pos": "n",
            "ipa": "/ˈtræf.ɪk ˌlaɪt/",
            "vi": "Đèn tín hiệu giao thông",
            "example": "Drivers are waiting for the traffic light to turn green.",
            "collocations": [
              "red traffic light",
              "traffic light post",
              "stop at a traffic light"
            ]
          },
          {
            "id": "kw-bridge",
            "word": "Bridge",
            "pos": "n",
            "ipa": "/brɪdʒ/",
            "vi": "Cây cầu vượt bắc ngang",
            "example": "A large suspension bridge spans across the background.",
            "collocations": [
              "suspension bridge",
              "highway bridge",
              "cross a bridge"
            ]
          },
          {
            "id": "kw-truck",
            "word": "Truck",
            "pos": "n",
            "ipa": "/trʌk/",
            "vi": "Xe tải chở hàng",
            "example": "A large cargo delivery truck is stopped on the road.",
            "collocations": [
              "delivery truck",
              "drive a truck",
              "heavy truck"
            ]
          },
          {
            "id": "kw-vehicle",
            "word": "Vehicle",
            "pos": "n",
            "ipa": "/ˈviː.ə.kəl/",
            "vi": "Phương tiện giao thông, xe cộ",
            "example": "Motor vehicles are lined up before the crosswalk.",
            "collocations": [
              "motor vehicle",
              "park a vehicle",
              "moving vehicle"
            ]
          },
          {
            "id": "kw-highway",
            "word": "Highway",
            "pos": "n",
            "ipa": "/ˈhaɪ.weɪ/",
            "vi": "Xa lộ, đường cao tốc",
            "example": "Vehicles are traveling along the elevated highway bridge.",
            "collocations": [
              "highway overpass",
              "busy highway",
              "drive on a highway"
            ]
          },
          {
            "id": "kw-automobile",
            "word": "Automobile",
            "pos": "n",
            "ipa": "/ˈɑː.t̬ə.moʊ.biːl/",
            "vi": "Xe ô tô con",
            "example": "A blue automobile is waiting in the traffic lane.",
            "collocations": [
              "passenger automobile",
              "drive an automobile",
              "automobile traffic"
            ]
          },
          {
            "id": "kw-road",
            "word": "Road",
            "pos": "n",
            "ipa": "/roʊd/",
            "vi": "Con đường lưu thông",
            "example": "Clear white lines are painted across the asphalt road.",
            "collocations": [
              "main road",
              "on the road",
              "paved road"
            ]
          },
          {
            "id": "kw-transport",
            "word": "Transport",
            "pos": "v/n",
            "ipa": "/ˈtræn.spɔːrt/",
            "vi": "Vận chuyển hàng hóa",
            "example": "The freight truck is transporting commercial goods.",
            "collocations": [
              "transport goods",
              "public transport",
              "transport cargo"
            ]
          },
          {
            "id": "kw-pass",
            "word": "Pass",
            "pos": "v",
            "ipa": "/pæs/",
            "vi": "Chạy qua, đi ngang qua",
            "example": "Vehicles pass beneath the arched suspension bridge.",
            "collocations": [
              "pass by",
              "pass through an intersection",
              "pass under a bridge"
            ]
          }
        ],
        "drill": {
          "question": "Listen to the four statements. Select the statement that best describes what you see in the picture.",
          "correct": "C",
          "options": [
            {
              "id": "A",
              "text": "The bridge is being painted by maintenance workers.",
              "vi": "Cây cầu đang được sơn bởi các công nhân bảo trì.",
              "isCorrect": false,
              "trapType": "Bẫy 'Being + V3' (Hành động sai hoàn toàn)",
              "explanation": "Cây cầu vượt xa lộ trên cao đang lưu thông bình thường, không hề có giàn giáo hay công nhân nào đang sơn cầu ('being painted')."
            },
            {
              "id": "B",
              "text": "A delivery truck is backing into a warehouse loading bay.",
              "vi": "Một chiếc xe tải giao hàng đang lùi vào cửa kho bốc hàng.",
              "isCorrect": false,
              "trapType": "Bẫy bối cảnh và hành động sai (Wrong Context)",
              "explanation": "Chiếc xe tải màu trắng đỏ đang dừng chờ đèn đỏ tại ngã tư đường phố chứ không phải đang lùi vào cửa kho hàng (loading bay)."
            },
            {
              "id": "C",
              "text": "Vehicles are stopped at an urban intersection near a traffic light.",
              "vi": "Các phương tiện giao thông đang dừng lại tại một ngã tư đô thị gần cột đèn giao thông.",
              "isCorrect": true,
              "trapType": "Đáp án chuẩn xác (Direct Action)",
              "explanation": "Miêu tả chính xác 100% xe tải và ô tô đang dừng chờ trước vạch dừng của ngã tư dưới sự điều tiết của cột đèn giao thông (stopped at an urban intersection near a traffic light)."
            },
            {
              "id": "D",
              "text": "The roadway is completely devoid of motor vehicles.",
              "vi": "Lòng đường hoàn toàn vắng bóng các phương tiện cơ giới.",
              "isCorrect": false,
              "trapType": "Bẫy chi tiết đối lập (Opposite Detail)",
              "explanation": "Có xe tải chở hàng lớn và xe ô tô con đang dừng ngay trên lòng đường, đối lập hoàn toàn với 'completely devoid of motor vehicles'."
            }
          ]
        },
        "describeChallenge": {
          "instructions": "Hãy mô tả các phương tiện tại ngã tư hoặc cây cầu vượt bằng 1 câu tiếng Anh hoàn chỉnh:",
          "targetKeywords": [
            "vehicle",
            "intersection",
            "traffic light",
            "truck",
            "bridge",
            "automobile",
            "road"
          ],
          "modelAnswers": [
            {
              "en": "Vehicles including a truck and a car are stopped at a city intersection.",
              "vi": "Các phương tiện bao gồm một xe tải và một xe hơi đang dừng tại một ngã tư thành phố.",
              "score": 100
            },
            {
              "en": "A tall traffic light post stands beside a pedestrian crosswalk.",
              "vi": "Một cột đèn giao thông cao đứng bên cạnh một lối băng qua đường.",
              "score": 95
            },
            {
              "en": "A large suspension bridge spans across the background behind the road.",
              "vi": "Một cây cầu treo lớn bắc ngang ở phía sau con đường.",
              "score": 95
            }
          ]
        }
      }
    ]
  }
];
