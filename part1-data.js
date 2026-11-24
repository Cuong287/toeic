// part1-data.js - Dữ liệu Part 1: Tranh & Từ vựng TOEIC (Picture Description & ETS Drill)
// Dữ liệu nguồn: Part 1 - LIST NHỮNG TỪ THƯỜNG GẶP TRONG PART 1 TOEIC.docx
// Bao gồm: Tranh minh họa SVG vector sắc nét, Target Keywords, Hotspots tương tác, và Bài luyện nghe ETS chuẩn 4 lựa chọn có phân tích bẫy ngữ pháp.

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
  }
];
