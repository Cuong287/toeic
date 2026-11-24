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
        "svg": "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" class=\"part1-svg-art\">\n  <defs>\n    <!-- Background wall gradient -->\n    <linearGradient id=\"d-wall\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#F1F5F9\"/>\n      <stop offset=\"60%\" stop-color=\"#E2E8F0\"/>\n      <stop offset=\"100%\" stop-color=\"#CBD5E1\"/>\n    </linearGradient>\n\n    <!-- Wood slat wall gradient -->\n    <linearGradient id=\"d-slat\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#B45309\"/>\n      <stop offset=\"50%\" stop-color=\"#D97706\"/>\n      <stop offset=\"100%\" stop-color=\"#92400E\"/>\n    </linearGradient>\n\n    <!-- Skyline gradient outside window -->\n    <linearGradient id=\"d-sky\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#38BDF8\"/>\n      <stop offset=\"70%\" stop-color=\"#BAE6FD\"/>\n      <stop offset=\"100%\" stop-color=\"#E0F2FE\"/>\n    </linearGradient>\n\n    <!-- Window glass sheen -->\n    <linearGradient id=\"d-glass\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#FFFFFF\" stop-opacity=\"0.45\"/>\n      <stop offset=\"35%\" stop-color=\"#FFFFFF\" stop-opacity=\"0.1\"/>\n      <stop offset=\"65%\" stop-color=\"#FFFFFF\" stop-opacity=\"0.25\"/>\n      <stop offset=\"100%\" stop-color=\"#BAE6FD\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n\n    <!-- Natural Oak desk surface gradient -->\n    <linearGradient id=\"d-desk-wood\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#E2B176\"/>\n      <stop offset=\"15%\" stop-color=\"#D49A58\"/>\n      <stop offset=\"85%\" stop-color=\"#B87B39\"/>\n      <stop offset=\"100%\" stop-color=\"#8F561F\"/>\n    </linearGradient>\n\n    <linearGradient id=\"d-desk-bevel\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#F5D0A1\"/>\n      <stop offset=\"100%\" stop-color=\"#A56728\"/>\n    </linearGradient>\n\n    <!-- Screen bezel & display gradient -->\n    <linearGradient id=\"d-monitor-screen\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#0F172A\"/>\n      <stop offset=\"100%\" stop-color=\"#1E293B\"/>\n    </linearGradient>\n\n    <!-- Laptop retina display gradient -->\n    <linearGradient id=\"d-laptop-screen\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#1D4ED8\"/>\n      <stop offset=\"50%\" stop-color=\"#2563EB\"/>\n      <stop offset=\"100%\" stop-color=\"#3B82F6\"/>\n    </linearGradient>\n\n    <!-- Lamp glow radial gradient -->\n    <radialGradient id=\"d-lamp-cone\" cx=\"50%\" cy=\"30%\" r=\"70%\">\n      <stop offset=\"0%\" stop-color=\"#FEF08A\" stop-opacity=\"0.5\"/>\n      <stop offset=\"40%\" stop-color=\"#FDE047\" stop-opacity=\"0.25\"/>\n      <stop offset=\"80%\" stop-color=\"#FACC15\" stop-opacity=\"0.08\"/>\n      <stop offset=\"100%\" stop-color=\"#FEF08A\" stop-opacity=\"0\"/>\n    </radialGradient>\n\n    <!-- Metallic steel legs gradient -->\n    <linearGradient id=\"d-steel\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#334155\"/>\n      <stop offset=\"45%\" stop-color=\"#64748B\"/>\n      <stop offset=\"70%\" stop-color=\"#94A3B8\"/>\n      <stop offset=\"100%\" stop-color=\"#1E293B\"/>\n    </linearGradient>\n\n    <!-- Leather desk pad gradient -->\n    <linearGradient id=\"d-leather\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#1E293B\"/>\n      <stop offset=\"100%\" stop-color=\"#0F172A\"/>\n    </linearGradient>\n\n    <!-- Soft drop shadow filter -->\n    <filter id=\"d-soft-shadow\" x=\"-10%\" y=\"-10%\" width=\"125%\" height=\"125%\">\n      <feDropShadow dx=\"0\" dy=\"6\" stdDeviation=\"8\" flood-color=\"#0F172A\" flood-opacity=\"0.22\"/>\n    </filter>\n    <filter id=\"d-elem-shadow\" x=\"-8%\" y=\"-8%\" width=\"120%\" height=\"120%\">\n      <feDropShadow dx=\"0\" dy=\"3\" stdDeviation=\"4\" flood-color=\"#0F172A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n\n  <!-- Wall Background -->\n  <rect x=\"0\" y=\"0\" width=\"800\" height=\"380\" fill=\"url(#d-wall)\"/>\n\n  <!-- Left Architectural Acoustic Wood Paneling with vertical relief slats -->\n  <g id=\"d-wood-paneling\">\n    <rect x=\"0\" y=\"0\" width=\"150\" height=\"380\" fill=\"#78350F\" opacity=\"0.12\"/>\n    <rect x=\"12\" y=\"0\" width=\"16\" height=\"380\" fill=\"url(#d-slat)\" rx=\"2\"/>\n    <rect x=\"36\" y=\"0\" width=\"16\" height=\"380\" fill=\"url(#d-slat)\" rx=\"2\"/>\n    <rect x=\"60\" y=\"0\" width=\"16\" height=\"380\" fill=\"url(#d-slat)\" rx=\"2\"/>\n    <rect x=\"84\" y=\"0\" width=\"16\" height=\"380\" fill=\"url(#d-slat)\" rx=\"2\"/>\n    <rect x=\"108\" y=\"0\" width=\"16\" height=\"380\" fill=\"url(#d-slat)\" rx=\"2\"/>\n    <rect x=\"132\" y=\"0\" width=\"16\" height=\"380\" fill=\"url(#d-slat)\" rx=\"2\"/>\n    <line x1=\"149\" y1=\"0\" x2=\"149\" y2=\"380\" stroke=\"#475569\" stroke-width=\"2\" opacity=\"0.4\"/>\n  </g>\n\n  <!-- Framed Architectural Artwork on Wall -->\n  <g id=\"d-wall-art\" filter=\"url(#d-elem-shadow)\">\n    <rect x=\"220\" y=\"45\" width=\"125\" height=\"90\" rx=\"4\" fill=\"#0F172A\" stroke=\"#334155\" stroke-width=\"4\"/>\n    <rect x=\"230\" y=\"55\" width=\"105\" height=\"70\" fill=\"#FFFFFF\"/>\n    <!-- Abstract architectural blueprint sketch inside frame -->\n    <path d=\"M240 105 L260 70 L285 95 L305 65 L325 110\" fill=\"none\" stroke=\"#2563EB\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n    <line x1=\"238\" y1=\"110\" x2=\"326\" y2=\"110\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <circle cx=\"305\" cy=\"65\" r=\"4\" fill=\"#F59E0B\"/>\n    <circle cx=\"260\" cy=\"70\" r=\"3.5\" fill=\"#10B981\"/>\n    <!-- Glass diagonal glint -->\n    <polygon points=\"230,55 270,55 240,125 230,125\" fill=\"#FFFFFF\" opacity=\"0.35\"/>\n  </g>\n\n  <!-- Floor: High-end woven office carpet tile -->\n  <g id=\"d-floor\">\n    <rect x=\"0\" y=\"380\" width=\"800\" height=\"120\" fill=\"#475569\"/>\n    <!-- Subtle carpet weave pattern lines -->\n    <line x1=\"0\" y1=\"380\" x2=\"800\" y2=\"380\" stroke=\"#334155\" stroke-width=\"4\"/>\n    <line x1=\"0\" y1=\"410\" x2=\"800\" y2=\"410\" stroke=\"#334155\" stroke-width=\"1.5\" stroke-dasharray=\"10,8\" opacity=\"0.4\"/>\n    <line x1=\"0\" y1=\"440\" x2=\"800\" y2=\"440\" stroke=\"#334155\" stroke-width=\"1.5\" stroke-dasharray=\"10,8\" opacity=\"0.4\"/>\n    <line x1=\"0\" y1=\"470\" x2=\"800\" y2=\"470\" stroke=\"#334155\" stroke-width=\"1.5\" stroke-dasharray=\"10,8\" opacity=\"0.4\"/>\n    <!-- Shadow cast by desk onto floor -->\n    <ellipse cx=\"430\" cy=\"445\" rx=\"280\" ry=\"24\" fill=\"#0F172A\" opacity=\"0.35\"/>\n  </g>\n\n  <!-- Large Window with Panoramic City Skyline & Venetian Blinds -->\n  <g id=\"d-window\" filter=\"url(#d-elem-shadow)\">\n    <!-- Window Frame Outer border -->\n    <rect x=\"610\" y=\"30\" width=\"165\" height=\"235\" rx=\"6\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"4\"/>\n    <!-- Glass pane with skyline view -->\n    <rect x=\"618\" y=\"38\" width=\"149\" height=\"219\" rx=\"3\" fill=\"url(#d-sky)\"/>\n    <!-- Distant skyscrapers -->\n    <rect x=\"625\" y=\"110\" width=\"28\" height=\"147\" fill=\"#64748B\" opacity=\"0.75\"/>\n    <rect x=\"629\" y=\"125\" width=\"4\" height=\"6\" fill=\"#FEF08A\" opacity=\"0.8\"/>\n    <rect x=\"637\" y=\"125\" width=\"4\" height=\"6\" fill=\"#FEF08A\" opacity=\"0.8\"/>\n    <rect x=\"629\" y=\"140\" width=\"4\" height=\"6\" fill=\"#FFFFFF\" opacity=\"0.8\"/>\n    <rect x=\"637\" y=\"140\" width=\"4\" height=\"6\" fill=\"#FEF08A\" opacity=\"0.8\"/>\n    <rect x=\"657\" y=\"80\" width=\"36\" height=\"177\" fill=\"#475569\" opacity=\"0.85\"/>\n    <polygon points=\"657,80 675,55 693,80\" fill=\"#334155\"/>\n    <rect x=\"663\" y=\"95\" width=\"5\" height=\"8\" fill=\"#FEF08A\" opacity=\"0.9\"/>\n    <rect x=\"673\" y=\"95\" width=\"5\" height=\"8\" fill=\"#FFFFFF\" opacity=\"0.9\"/>\n    <rect x=\"682\" y=\"95\" width=\"5\" height=\"8\" fill=\"#FEF08A\" opacity=\"0.9\"/>\n    <rect x=\"663\" y=\"115\" width=\"5\" height=\"8\" fill=\"#FFFFFF\" opacity=\"0.9\"/>\n    <rect x=\"673\" y=\"115\" width=\"5\" height=\"8\" fill=\"#FEF08A\" opacity=\"0.9\"/>\n    <rect x=\"696\" y=\"120\" width=\"26\" height=\"137\" fill=\"#64748B\" opacity=\"0.7\"/>\n    <rect x=\"725\" y=\"90\" width=\"38\" height=\"167\" fill=\"#334155\" opacity=\"0.8\"/>\n    <!-- Venetian Blind Slats -->\n    <line x1=\"618\" y1=\"50\" x2=\"767\" y2=\"50\" stroke=\"#E2E8F0\" stroke-width=\"2.5\" opacity=\"0.7\"/>\n    <line x1=\"618\" y1=\"68\" x2=\"767\" y2=\"68\" stroke=\"#E2E8F0\" stroke-width=\"2.5\" opacity=\"0.7\"/>\n    <line x1=\"618\" y1=\"86\" x2=\"767\" y2=\"86\" stroke=\"#E2E8F0\" stroke-width=\"2.5\" opacity=\"0.7\"/>\n    <line x1=\"618\" y1=\"104\" x2=\"767\" y2=\"104\" stroke=\"#E2E8F0\" stroke-width=\"2.5\" opacity=\"0.7\"/>\n    <line x1=\"618\" y1=\"122\" x2=\"767\" y2=\"122\" stroke=\"#E2E8F0\" stroke-width=\"2.5\" opacity=\"0.7\"/>\n    <line x1=\"618\" y1=\"140\" x2=\"767\" y2=\"140\" stroke=\"#E2E8F0\" stroke-width=\"2.5\" opacity=\"0.7\"/>\n    <line x1=\"618\" y1=\"158\" x2=\"767\" y2=\"158\" stroke=\"#E2E8F0\" stroke-width=\"2.5\" opacity=\"0.7\"/>\n    <line x1=\"618\" y1=\"176\" x2=\"767\" y2=\"176\" stroke=\"#E2E8F0\" stroke-width=\"2.5\" opacity=\"0.7\"/>\n    <!-- Window mullion divider -->\n    <line x1=\"692\" y1=\"38\" x2=\"692\" y2=\"257\" stroke=\"#0F172A\" stroke-width=\"3\"/>\n    <!-- Glass Sheen Layer -->\n    <rect x=\"618\" y=\"38\" width=\"149\" height=\"219\" fill=\"url(#d-glass)\"/>\n    <!-- Sunlight stream beam casting across office -->\n    <polygon points=\"618,45 767,180 780,450 510,450\" fill=\"#FFFFFF\" opacity=\"0.07\"/>\n  </g>\n\n  <!-- Ergonomic Mesh Office Chair (Behind Desk) -->\n  <g id=\"s1-chair\">\n    <!-- Star base on casters -->\n    <path d=\"M280 450 L340 450 M310 405 L310 450 M285 456 A4 4 0 1 1 279 456 M345 456 A4 4 0 1 1 339 456 M310 456 A4 4 0 1 1 306 456\" stroke=\"#0F172A\" stroke-width=\"5\" stroke-linecap=\"round\" fill=\"none\"/>\n    <ellipse cx=\"310\" cy=\"405\" rx=\"8\" ry=\"4\" fill=\"#64748B\"/>\n    <!-- Chair backrest frame with ergonomic mesh contour -->\n    <rect x=\"264\" y=\"180\" width=\"102\" height=\"140\" rx=\"16\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"3\"/>\n    <!-- Breathable mesh texture grid lines -->\n    <line x1=\"274\" y1=\"205\" x2=\"356\" y2=\"205\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <line x1=\"274\" y1=\"225\" x2=\"356\" y2=\"225\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <line x1=\"274\" y1=\"245\" x2=\"356\" y2=\"245\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <line x1=\"274\" y1=\"265\" x2=\"356\" y2=\"265\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <line x1=\"274\" y1=\"285\" x2=\"356\" y2=\"285\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <line x1=\"274\" y1=\"305\" x2=\"356\" y2=\"305\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <!-- Adjustable headrest -->\n    <rect x=\"286\" y=\"152\" width=\"58\" height=\"24\" rx=\"7\" fill=\"#0F172A\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <rect x=\"290\" y=\"156\" width=\"50\" height=\"16\" rx=\"4\" fill=\"#334155\"/>\n    <!-- Ergonomic lumbar support bar -->\n    <rect x=\"280\" y=\"270\" width=\"70\" height=\"12\" rx=\"4\" fill=\"#475569\" opacity=\"0.6\"/>\n    <!-- Seat cushion base -->\n    <ellipse cx=\"315\" cy=\"335\" rx=\"60\" ry=\"18\" fill=\"#0F172A\"/>\n    <!-- Left armrest -->\n    <path d=\"M260 260 L260 305 Q260 315 272 315\" fill=\"none\" stroke=\"#475569\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n    <rect x=\"254\" y=\"255\" width=\"22\" height=\"8\" rx=\"3\" fill=\"#0F172A\"/>\n  </g>\n\n  <!-- Office Worker (Professional Seated Woman at Desk) -->\n  <g id=\"s1-person\">\n    <!-- Shadow under torso -->\n    <ellipse cx=\"340\" cy=\"335\" rx=\"42\" ry=\"12\" fill=\"#0F172A\" opacity=\"0.4\"/>\n    <!-- Blazer back & shoulders (Navy tailored suit) -->\n    <path d=\"M282 335 C282 258, 308 232, 342 232 C376 232, 402 258, 402 335 Z\" fill=\"#1E3A8A\" stroke=\"#0F172A\" stroke-width=\"2.5\"/>\n    <!-- Blouse collar & V-neck -->\n    <polygon points=\"332,232 342,266 352,232\" fill=\"#FFFFFF\"/>\n    <polygon points=\"338,232 342,268 346,232\" fill=\"#0284C7\"/>\n    <!-- Blazer lapels -->\n    <path d=\"M326 236 L338 274 L324 330\" fill=\"none\" stroke=\"#172554\" stroke-width=\"2.5\"/>\n    <path d=\"M358 236 L346 274 L360 330\" fill=\"none\" stroke=\"#172554\" stroke-width=\"2.5\"/>\n    <!-- Neck -->\n    <rect x=\"334\" y=\"218\" width=\"16\" height=\"18\" rx=\"3\" fill=\"#FDBA74\"/>\n    <!-- Head & Face Profile -->\n    <ellipse cx=\"342\" cy=\"198\" rx=\"18\" ry=\"22\" fill=\"#FDBA74\"/>\n    <!-- Ear & Pearl Earring -->\n    <ellipse cx=\"328\" cy=\"199\" rx=\"3.5\" ry=\"5.5\" fill=\"#FDBA74\"/>\n    <circle cx=\"328\" cy=\"204\" r=\"1.8\" fill=\"#F8FAFC\"/>\n    <!-- Professional Hairdo (Elegant brown updo / bun) -->\n    <path d=\"M324 195 C320 170, 362 165, 360 192 C360 196, 356 215, 354 220 C345 220, 335 220, 326 205 Z\" fill=\"#451A03\"/>\n    <ellipse cx=\"356\" cy=\"180\" rx=\"12\" ry=\"12\" fill=\"#451A03\"/>\n    <path d=\"M332 186 Q344 176 355 186\" fill=\"none\" stroke=\"#78350F\" stroke-width=\"2\"/>\n    <!-- Left Arm extending forward to adjust monitor (hs-adjust at 304, 200) -->\n    <path d=\"M300 255 Q295 235 304 205\" fill=\"none\" stroke=\"#1E3A8A\" stroke-width=\"14\" stroke-linecap=\"round\"/>\n    <!-- Watch on left wrist -->\n    <rect x=\"299\" y=\"206\" width=\"9\" height=\"5\" rx=\"1.5\" fill=\"#D97706\"/>\n    <!-- Hand gently touching monitor bezel -->\n    <ellipse cx=\"304\" cy=\"200\" rx=\"6\" ry=\"5\" fill=\"#FDBA74\"/>\n    <path d=\"M304 198 Q302 194 304 190\" fill=\"none\" stroke=\"#FDBA74\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n\n    <!-- Right Arm extending forward to laptop keyboard (hs-type at 344, 320) -->\n    <path d=\"M375 258 Q368 285 348 316\" fill=\"none\" stroke=\"#1E3A8A\" stroke-width=\"14\" stroke-linecap=\"round\"/>\n    <!-- White shirt cuff peeking from sleeve -->\n    <line x1=\"352\" y1=\"312\" x2=\"346\" y2=\"318\" stroke=\"#FFFFFF\" stroke-width=\"3\"/>\n    <!-- Right Hand typing on keyboard keys -->\n    <ellipse cx=\"344\" cy=\"320\" rx=\"7\" ry=\"5\" fill=\"#FDBA74\"/>\n    <path d=\"M340 321 Q345 324 350 321\" fill=\"none\" stroke=\"#FDBA74\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  </g>\n\n  <!-- Large Solid Natural Oak Office Desk (hs-desk at 208, 360) -->\n  <g id=\"s1-desk\" filter=\"url(#d-soft-shadow)\">\n    <!-- Heavy Duty Metal Trestle Legs -->\n    <rect x=\"155\" y=\"325\" width=\"14\" height=\"145\" fill=\"url(#d-steel)\" rx=\"2\"/>\n    <rect x=\"645\" y=\"325\" width=\"14\" height=\"145\" fill=\"url(#d-steel)\" rx=\"2\"/>\n    <!-- Back crossbar for desk stability -->\n    <line x1=\"165\" y1=\"390\" x2=\"650\" y2=\"390\" stroke=\"#1E293B\" stroke-width=\"5\"/>\n    <!-- Chrome floor leveler glides -->\n    <ellipse cx=\"162\" cy=\"469\" rx=\"10\" ry=\"3.5\" fill=\"#94A3B8\"/>\n    <ellipse cx=\"652\" cy=\"469\" rx=\"10\" ry=\"3.5\" fill=\"#94A3B8\"/>\n\n    <!-- Desk Modesty / Privacy Panel under table -->\n    <rect x=\"180\" y=\"335\" width=\"455\" height=\"45\" fill=\"#334155\" opacity=\"0.85\" rx=\"3\"/>\n\n    <!-- Desktop Front Thickness Bevel -->\n    <polygon points=\"135,325 675,325 665,342 145,342\" fill=\"url(#d-desk-bevel)\" stroke=\"#78350F\" stroke-width=\"1.5\"/>\n\n    <!-- Desktop Main Surface with 3D Perspective -->\n    <polygon points=\"175,265 635,265 675,325 135,325\" fill=\"url(#d-desk-wood)\" stroke=\"#8F561F\" stroke-width=\"2\"/>\n    <!-- Subtle wood grain lines across desk -->\n    <line x1=\"200\" y1=\"285\" x2=\"610\" y2=\"285\" stroke=\"#A16207\" stroke-width=\"1\" opacity=\"0.35\"/>\n    <line x1=\"165\" y1=\"305\" x2=\"645\" y2=\"305\" stroke=\"#A16207\" stroke-width=\"1\" opacity=\"0.35\"/>\n\n    <!-- Large Executive Leather Desk Mat / Blotter -->\n    <polygon points=\"265,276 565,276 595,322 235,322\" fill=\"url(#d-leather)\" rx=\"4\"/>\n    <!-- Saddle stitching highlight around desk pad -->\n    <polygon points=\"268,278 562,278 591,320 239,320\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1\" stroke-dasharray=\"3,2\"/>\n  </g>\n\n  <!-- External Secondary 27-inch Monitor on Articulated Arm (hs-adjust at 304, 200) -->\n  <g id=\"s1-monitor\" filter=\"url(#d-elem-shadow)\">\n    <!-- Gas spring aluminum monitor arm & base clamp -->\n    <ellipse cx=\"325\" cy=\"280\" rx=\"18\" ry=\"6\" fill=\"#475569\"/>\n    <path d=\"M325 280 L318 245 L310 220\" fill=\"none\" stroke=\"url(#d-steel)\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n    <circle cx=\"318\" cy=\"245\" r=\"4.5\" fill=\"#1E293B\"/>\n\n    <!-- Ultra-thin Monitor Bezel Frame -->\n    <rect x=\"235\" y=\"152\" width=\"155\" height=\"100\" rx=\"4\" fill=\"#0F172A\" stroke=\"#334155\" stroke-width=\"2.5\"/>\n    <!-- High-res Display Screen -->\n    <rect x=\"239\" y=\"156\" width=\"147\" height=\"92\" rx=\"2\" fill=\"url(#d-monitor-screen)\"/>\n\n    <!-- Business Analytics Dashboard Graphics -->\n    <!-- Header bar -->\n    <rect x=\"243\" y=\"160\" width=\"139\" height=\"10\" fill=\"#1E293B\" rx=\"1\"/>\n    <circle cx=\"249\" cy=\"165\" r=\"2.5\" fill=\"#EF4444\"/>\n    <circle cx=\"256\" cy=\"165\" r=\"2.5\" fill=\"#F59E0B\"/>\n    <circle cx=\"263\" cy=\"165\" r=\"2.5\" fill=\"#10B981\"/>\n    <line x1=\"275\" y1=\"165\" x2=\"330\" y2=\"165\" stroke=\"#64748B\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n\n    <!-- Multi-column Colorful Bar Chart -->\n    <rect x=\"248\" y=\"210\" width=\"10\" height=\"28\" fill=\"#38BDF8\" rx=\"1\"/>\n    <rect x=\"264\" y=\"195\" width=\"10\" height=\"43\" fill=\"#3B82F6\" rx=\"1\"/>\n    <rect x=\"280\" y=\"182\" width=\"10\" height=\"56\" fill=\"#10B981\" rx=\"1\"/>\n    <rect x=\"296\" y=\"202\" width=\"10\" height=\"36\" fill=\"#F59E0B\" rx=\"1\"/>\n    <rect x=\"312\" y=\"176\" width=\"10\" height=\"62\" fill=\"#8B5CF6\" rx=\"1\"/>\n    <rect x=\"328\" y=\"190\" width=\"10\" height=\"48\" fill=\"#EC4899\" rx=\"1\"/>\n\n    <!-- Smooth Trend Line with Data Nodes -->\n    <polyline points=\"253,205 269,190 285,178 301,196 317,172 333,184 348,168\" fill=\"none\" stroke=\"#FACC15\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    <circle cx=\"285\" cy=\"178\" r=\"2.5\" fill=\"#FFFFFF\"/>\n    <circle cx=\"317\" cy=\"172\" r=\"2.5\" fill=\"#FFFFFF\"/>\n    <circle cx=\"348\" cy=\"168\" r=\"3\" fill=\"#FFFFFF\"/>\n\n    <!-- Right-side KPI card & Donut ring chart -->\n    <rect x=\"345\" y=\"190\" width=\"36\" height=\"46\" rx=\"2\" fill=\"#1E293B\" stroke=\"#334155\" stroke-width=\"1\"/>\n    <circle cx=\"363\" cy=\"206\" r=\"10\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n    <circle cx=\"363\" cy=\"206\" r=\"10\" fill=\"none\" stroke=\"#10B981\" stroke-width=\"3\" stroke-dasharray=\"42,20\"/>\n    <line x1=\"350\" y1=\"226\" x2=\"376\" y2=\"226\" stroke=\"#38BDF8\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n\n    <!-- Diagonal Screen Glint -->\n    <polygon points=\"239,156 270,156 248,248 239,248\" fill=\"#FFFFFF\" opacity=\"0.08\"/>\n  </g>\n\n  <!-- Modern Aluminum Laptop (Open on Desk) (hs-laptop at 360, 290) -->\n  <g id=\"s1-laptop\" filter=\"url(#d-elem-shadow)\">\n    <!-- Base Keyboard Chassis in 3D Perspective -->\n    <polygon points=\"368,310 472,310 488,332 352,332\" fill=\"#CBD5E1\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n    <!-- Recessed Keyboard Well -->\n    <polygon points=\"376,312 464,312 474,323 366,323\" fill=\"#1E293B\"/>\n    <!-- Individual Key Grid Lines -->\n    <line x1=\"384\" y1=\"315\" x2=\"456\" y2=\"315\" stroke=\"#334155\" stroke-width=\"1\"/>\n    <line x1=\"380\" y1=\"318\" x2=\"460\" y2=\"318\" stroke=\"#334155\" stroke-width=\"1\"/>\n    <line x1=\"376\" y1=\"321\" x2=\"465\" y2=\"321\" stroke=\"#334155\" stroke-width=\"1\"/>\n    <!-- Glass Precision Trackpad with highlight -->\n    <polygon points=\"404,324 436,324 438,330 402,330\" fill=\"#94A3B8\" stroke=\"#64748B\" stroke-width=\"0.8\"/>\n\n    <!-- Laptop Lid & Display Open at Angle -->\n    <polygon points=\"378,236 476,236 470,310 372,310\" fill=\"#0F172A\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <!-- Retina Display Area -->\n    <polygon points=\"382,240 472,240 467,306 377,306\" fill=\"url(#d-laptop-screen)\"/>\n    <!-- Web Browser / IDE Code Lines on Laptop Screen -->\n    <rect x=\"385\" y=\"244\" width=\"82\" height=\"6\" fill=\"#1E3A8A\" opacity=\"0.8\"/>\n    <circle cx=\"390\" cy=\"247\" r=\"1.5\" fill=\"#EF4444\"/>\n    <circle cx=\"395\" cy=\"247\" r=\"1.5\" fill=\"#F59E0B\"/>\n    <circle cx=\"400\" cy=\"247\" r=\"1.5\" fill=\"#10B981\"/>\n\n    <line x1=\"392\" y1=\"256\" x2=\"452\" y2=\"256\" stroke=\"#BAE6FD\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"392\" y1=\"266\" x2=\"440\" y2=\"266\" stroke=\"#FED7AA\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"402\" y1=\"276\" x2=\"460\" y2=\"276\" stroke=\"#BBF7D0\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"402\" y1=\"286\" x2=\"446\" y2=\"286\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"392\" y1=\"296\" x2=\"432\" y2=\"296\" stroke=\"#FDE047\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n\n    <!-- Subtle Screen Reflection Angle -->\n    <polygon points=\"382,240 410,240 388,306 377,306\" fill=\"#FFFFFF\" opacity=\"0.15\"/>\n  </g>\n\n  <!-- Modern Articulated Desk Lamp (hs-lamp at 192, 210) -->\n  <g id=\"s1-lamp\">\n    <!-- Warm Ambient Light Glow on Desk -->\n    <polygon points=\"160,225 245,225 310,332 105,332\" fill=\"url(#d-lamp-cone)\"/>\n    <!-- Heavy Weighted Matte Black Lamp Base -->\n    <ellipse cx=\"192\" cy=\"295\" rx=\"20\" ry=\"8\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <circle cx=\"192\" cy=\"293\" r=\"3\" fill=\"#D97706\"/>\n    <!-- Lower Articulated Arm with Brass Tension Springs -->\n    <line x1=\"192\" y1=\"292\" x2=\"198\" y2=\"235\" stroke=\"#334155\" stroke-width=\"4.5\" stroke-linecap=\"round\"/>\n    <line x1=\"198\" y1=\"235\" x2=\"190\" y2=\"237\" stroke=\"#D97706\" stroke-width=\"2\"/>\n    <circle cx=\"198\" cy=\"235\" r=\"4.5\" fill=\"#D97706\"/>\n    <!-- Upper Arm angled over desk -->\n    <line x1=\"198\" y1=\"235\" x2=\"216\" y2=\"208\" stroke=\"#334155\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n    <circle cx=\"216\" cy=\"208\" r=\"4\" fill=\"#D97706\"/>\n    <!-- Lamp Shade with Brass Accent and Bulb Ring -->\n    <path d=\"M210 205 L232 210 L242 228 L196 224 Z\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <!-- Bright glowing bulb aperture -->\n    <ellipse cx=\"218\" cy=\"226\" rx=\"22\" ry=\"6\" fill=\"#FEF08A\"/>\n    <ellipse cx=\"218\" cy=\"226\" rx=\"14\" ry=\"4\" fill=\"#FFFFFF\"/>\n  </g>\n\n  <!-- Ceramic Coffee Mug & Cork Coaster (hs-mug at 232, 315) -->\n  <g id=\"s1-mug\" filter=\"url(#d-elem-shadow)\">\n    <!-- Cork Coaster -->\n    <ellipse cx=\"232\" cy=\"322\" rx=\"16\" ry=\"6\" fill=\"#C2884A\" stroke=\"#9A622A\" stroke-width=\"1.5\"/>\n    <!-- Mug Body -->\n    <path d=\"M220 302 L221 320 C221 326, 243 326, 243 320 L244 302 Z\" fill=\"#0284C7\" stroke=\"#0369A1\" stroke-width=\"1.8\"/>\n    <!-- Mug Interior Coffee Surface -->\n    <ellipse cx=\"232\" cy=\"302\" rx=\"12\" ry=\"4.5\" fill=\"#0284C7\" stroke=\"#0369A1\" stroke-width=\"1.5\"/>\n    <ellipse cx=\"232\" cy=\"302\" rx=\"9\" ry=\"3\" fill=\"#451A03\"/>\n    <!-- Mug Ceramic Handle -->\n    <path d=\"M220 306 C210 306, 210 320, 221 319\" fill=\"none\" stroke=\"#0369A1\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>\n    <!-- Delicate Steam Swirls Rising -->\n    <path d=\"M228 296 Q224 288 230 282 Q236 276 232 268\" fill=\"none\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-linecap=\"round\" opacity=\"0.6\"/>\n    <path d=\"M236 295 Q240 287 235 281 Q230 275 237 267\" fill=\"none\" stroke=\"#94A3B8\" stroke-width=\"1.2\" stroke-linecap=\"round\" opacity=\"0.45\"/>\n  </g>\n\n  <!-- Documents, Notebook & Smartphone (hs-document at 544, 315) -->\n  <g id=\"s1-documents\" filter=\"url(#d-elem-shadow)\">\n    <!-- Stack of Printed Reports / Invoices -->\n    <polygon points=\"508,284 568,284 584,314 524,314\" fill=\"#F8FAFC\" stroke=\"#CBD5E1\" stroke-width=\"1.5\"/>\n    <line x1=\"520\" y1=\"291\" x2=\"558\" y2=\"291\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <line x1=\"520\" y1=\"297\" x2=\"562\" y2=\"297\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <line x1=\"524\" y1=\"303\" x2=\"568\" y2=\"303\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <!-- Red metallic paperclip on top corner -->\n    <path d=\"M514 286 L524 286 L524 294 L518 294 L518 288\" fill=\"none\" stroke=\"#EF4444\" stroke-width=\"1.8\"/>\n\n    <!-- Open Spiral Project Notebook -->\n    <polygon points=\"536,294 612,294 632,328 556,328\" fill=\"#FEF9C3\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n    <!-- Spiral binding coil along spine -->\n    <line x1=\"574\" y1=\"294\" x2=\"588\" y2=\"328\" stroke=\"#475569\" stroke-width=\"2\" stroke-dasharray=\"3,3\"/>\n    <!-- Handwritten notes lines -->\n    <line x1=\"548\" y1=\"304\" x2=\"570\" y2=\"304\" stroke=\"#64748B\" stroke-width=\"1.2\"/>\n    <line x1=\"548\" y1=\"312\" x2=\"568\" y2=\"312\" stroke=\"#64748B\" stroke-width=\"1.2\"/>\n    <line x1=\"552\" y1=\"320\" x2=\"572\" y2=\"320\" stroke=\"#64748B\" stroke-width=\"1.2\"/>\n    <!-- Colorful sticky note index tabs -->\n    <polygon points=\"605,294 615,294 617,299 607,299\" fill=\"#F43F5E\"/>\n    <polygon points=\"590,294 600,294 602,299 592,299\" fill=\"#0EA5E9\"/>\n\n    <!-- Premium Metal Ballpoint Pen -->\n    <line x1=\"562\" y1=\"322\" x2=\"608\" y2=\"302\" stroke=\"#2563EB\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    <circle cx=\"606\" cy=\"303\" r=\"1.5\" fill=\"#D97706\"/>\n\n    <!-- Modern Smartphone with glowing screen -->\n    <rect x=\"608\" y=\"312\" width=\"22\" height=\"15\" rx=\"3\" fill=\"#0F172A\" stroke=\"#334155\" stroke-width=\"1\" transform=\"rotate(-12 608 312)\"/>\n    <rect x=\"610\" y=\"314\" width=\"18\" height=\"11\" rx=\"1.5\" fill=\"#38BDF8\" opacity=\"0.7\" transform=\"rotate(-12 608 312)\"/>\n  </g>\n\n  <!-- Potted Ficus / Succulent Plant (Far right of desk) -->\n  <g id=\"s1-plant\" filter=\"url(#d-elem-shadow)\">\n    <!-- Textured Ceramic Geometric Pot -->\n    <ellipse cx=\"632\" cy=\"274\" rx=\"14\" ry=\"5\" fill=\"#E2E8F0\" stroke=\"#94A3B8\" stroke-width=\"1.2\"/>\n    <path d=\"M618 274 L621 294 C621 298, 643 298, 643 294 L646 274 Z\" fill=\"#F8FAFC\" stroke=\"#CBD5E1\" stroke-width=\"1.2\"/>\n    <ellipse cx=\"632\" cy=\"274\" rx=\"11\" ry=\"3.5\" fill=\"#78350F\"/>\n    <!-- Lush Botanical Leaves with Veins & Highlights -->\n    <!-- Leaf 1 (Left) -->\n    <path d=\"M632 272 Q615 255 618 245 Q628 250 632 272\" fill=\"#15803D\" stroke=\"#166534\" stroke-width=\"0.8\"/>\n    <path d=\"M625 258 Q620 252 618 245\" fill=\"none\" stroke=\"#4ADE80\" stroke-width=\"1\"/>\n    <!-- Leaf 2 (Center Upright) -->\n    <path d=\"M632 272 Q630 248 635 240 Q640 248 632 272\" fill=\"#22C55E\" stroke=\"#16A34A\" stroke-width=\"0.8\"/>\n    <line x1=\"632\" y1=\"270\" x2=\"634\" y2=\"242\" stroke=\"#86EFAC\" stroke-width=\"1\"/>\n    <!-- Leaf 3 (Right) -->\n    <path d=\"M632 272 Q648 255 650 246 Q642 254 632 272\" fill=\"#16A34A\" stroke=\"#15803D\" stroke-width=\"0.8\"/>\n    <path d=\"M638 258 Q645 252 650 246\" fill=\"none\" stroke=\"#86EFAC\" stroke-width=\"1\"/>\n    <!-- Leaf 4 (Front hanging) -->\n    <path d=\"M632 274 Q636 284 642 284 Q638 278 632 274\" fill=\"#4ADE80\"/>\n  </g>\n</svg>",
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
        "svg": "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" class=\"part1-svg-art\">\n  <defs>\n    <!-- Wall & Room lighting gradients -->\n    <linearGradient id=\"m-wall\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#F8FAFC\"/>\n      <stop offset=\"100%\" stop-color=\"#E2E8F0\"/>\n    </linearGradient>\n\n    <linearGradient id=\"m-acoustic-wood\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#9A3412\"/>\n      <stop offset=\"50%\" stop-color=\"#C2410C\"/>\n      <stop offset=\"100%\" stop-color=\"#7C2D12\"/>\n    </linearGradient>\n\n    <!-- Skyline gradient through glass partition -->\n    <linearGradient id=\"m-skyline\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#38BDF8\"/>\n      <stop offset=\"60%\" stop-color=\"#BAE6FD\"/>\n      <stop offset=\"100%\" stop-color=\"#E0F2FE\"/>\n    </linearGradient>\n\n    <!-- Luxury Walnut Conference Table gradient -->\n    <linearGradient id=\"m-table-wood\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#9A622A\"/>\n      <stop offset=\"25%\" stop-color=\"#B4793B\"/>\n      <stop offset=\"70%\" stop-color=\"#78421A\"/>\n      <stop offset=\"100%\" stop-color=\"#4E270A\"/>\n    </linearGradient>\n\n    <!-- Interactive screen bezel and vibrant presentation display -->\n    <linearGradient id=\"m-screen-frame\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#334155\"/>\n      <stop offset=\"100%\" stop-color=\"#0F172A\"/>\n    </linearGradient>\n\n    <linearGradient id=\"m-chart-glow\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#1E293B\"/>\n      <stop offset=\"100%\" stop-color=\"#0F172A\"/>\n    </linearGradient>\n\n    <linearGradient id=\"m-chart-bar-blue\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#38BDF8\"/>\n      <stop offset=\"100%\" stop-color=\"#0284C7\"/>\n    </linearGradient>\n\n    <linearGradient id=\"m-chart-bar-green\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#4ADE80\"/>\n      <stop offset=\"100%\" stop-color=\"#16A34A\"/>\n    </linearGradient>\n\n    <linearGradient id=\"m-chart-bar-orange\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#FBBF24\"/>\n      <stop offset=\"100%\" stop-color=\"#D97706\"/>\n    </linearGradient>\n\n    <linearGradient id=\"m-chart-bar-purple\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#C084FC\"/>\n      <stop offset=\"100%\" stop-color=\"#7E22CE\"/>\n    </linearGradient>\n\n    <linearGradient id=\"m-carpet\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#475569\"/>\n      <stop offset=\"100%\" stop-color=\"#334155\"/>\n    </linearGradient>\n\n    <!-- Filters -->\n    <filter id=\"m-shadow\" x=\"-10%\" y=\"-10%\" width=\"125%\" height=\"125%\">\n      <feDropShadow dx=\"0\" dy=\"8\" stdDeviation=\"10\" flood-color=\"#0F172A\" flood-opacity=\"0.25\"/>\n    </filter>\n    <filter id=\"m-elem-shadow\" x=\"-8%\" y=\"-8%\" width=\"120%\" height=\"120%\">\n      <feDropShadow dx=\"0\" dy=\"4\" stdDeviation=\"5\" flood-color=\"#0F172A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n\n  <!-- Wall Background -->\n  <rect x=\"0\" y=\"0\" width=\"800\" height=\"380\" fill=\"url(#m-wall)\"/>\n\n  <!-- Left Glass Partition Window with City High-Rises -->\n  <g id=\"m-skyline-view\">\n    <rect x=\"0\" y=\"0\" width=\"160\" height=\"360\" fill=\"url(#m-skyline)\"/>\n    <!-- Distant Towers -->\n    <rect x=\"15\" y=\"80\" width=\"35\" height=\"280\" fill=\"#64748B\" opacity=\"0.65\"/>\n    <rect x=\"22\" y=\"95\" width=\"5\" height=\"8\" fill=\"#FEF08A\" opacity=\"0.8\"/>\n    <rect x=\"32\" y=\"95\" width=\"5\" height=\"8\" fill=\"#FEF08A\" opacity=\"0.8\"/>\n    <rect x=\"22\" y=\"115\" width=\"5\" height=\"8\" fill=\"#FFFFFF\" opacity=\"0.8\"/>\n    <rect x=\"32\" y=\"115\" width=\"5\" height=\"8\" fill=\"#FEF08A\" opacity=\"0.8\"/>\n    <rect x=\"60\" y=\"50\" width=\"45\" height=\"310\" fill=\"#475569\" opacity=\"0.75\"/>\n    <polygon points=\"60,50 82,25 105,50\" fill=\"#334155\"/>\n    <rect x=\"70\" y=\"70\" width=\"6\" height=\"9\" fill=\"#FEF08A\" opacity=\"0.85\"/>\n    <rect x=\"85\" y=\"70\" width=\"6\" height=\"9\" fill=\"#FFFFFF\" opacity=\"0.85\"/>\n    <rect x=\"70\" y=\"90\" width=\"6\" height=\"9\" fill=\"#FFFFFF\" opacity=\"0.85\"/>\n    <rect x=\"85\" y=\"90\" width=\"6\" height=\"9\" fill=\"#FEF08A\" opacity=\"0.85\"/>\n    <rect x=\"115\" y=\"100\" width=\"32\" height=\"260\" fill=\"#64748B\" opacity=\"0.6\"/>\n    <!-- Glass Mullions Frame -->\n    <line x1=\"158\" y1=\"0\" x2=\"158\" y2=\"360\" stroke=\"#0F172A\" stroke-width=\"4\"/>\n    <line x1=\"0\" y1=\"180\" x2=\"158\" y2=\"180\" stroke=\"#0F172A\" stroke-width=\"2.5\"/>\n    <!-- Glass Sheen Diagonal -->\n    <polygon points=\"0,0 60,0 0,220\" fill=\"#FFFFFF\" opacity=\"0.25\"/>\n  </g>\n\n  <!-- Right Acoustic Wood Slats Wall Section -->\n  <g id=\"m-slat-wall\">\n    <rect x=\"690\" y=\"0\" width=\"110\" height=\"360\" fill=\"#7C2D12\" opacity=\"0.15\"/>\n    <rect x=\"700\" y=\"0\" width=\"14\" height=\"360\" fill=\"url(#m-acoustic-wood)\" rx=\"2\"/>\n    <rect x=\"722\" y=\"0\" width=\"14\" height=\"360\" fill=\"url(#m-acoustic-wood)\" rx=\"2\"/>\n    <rect x=\"744\" y=\"0\" width=\"14\" height=\"360\" fill=\"url(#m-acoustic-wood)\" rx=\"2\"/>\n    <rect x=\"766\" y=\"0\" width=\"14\" height=\"360\" fill=\"url(#m-acoustic-wood)\" rx=\"2\"/>\n    <rect x=\"788\" y=\"0\" width=\"14\" height=\"360\" fill=\"url(#m-acoustic-wood)\" rx=\"2\"/>\n  </g>\n\n  <!-- Ceiling Recessed Architectural LED Lighting Pots -->\n  <g id=\"m-ceiling-lights\">\n    <ellipse cx=\"260\" cy=\"18\" rx=\"20\" ry=\"6\" fill=\"#FEF08A\" opacity=\"0.7\"/>\n    <ellipse cx=\"440\" cy=\"18\" rx=\"20\" ry=\"6\" fill=\"#FEF08A\" opacity=\"0.7\"/>\n    <ellipse cx=\"620\" cy=\"18\" rx=\"20\" ry=\"6\" fill=\"#FEF08A\" opacity=\"0.7\"/>\n    <!-- Soft light cones radiating downward -->\n    <polygon points=\"240,18 280,18 310,120 210,120\" fill=\"#FEF08A\" opacity=\"0.06\"/>\n    <polygon points=\"420,18 460,18 490,120 390,120\" fill=\"#FEF08A\" opacity=\"0.06\"/>\n    <polygon points=\"600,18 640,18 670,120 570,120\" fill=\"#FEF08A\" opacity=\"0.06\"/>\n  </g>\n\n  <!-- Boardroom Floor & Carpet -->\n  <g id=\"m-floor\">\n    <rect x=\"0\" y=\"360\" width=\"800\" height=\"140\" fill=\"url(#m-carpet)\"/>\n    <line x1=\"0\" y1=\"360\" x2=\"800\" y2=\"360\" stroke=\"#1E293B\" stroke-width=\"4\"/>\n    <!-- Perspective lines on carpet -->\n    <line x1=\"160\" y1=\"360\" x2=\"100\" y2=\"500\" stroke=\"#1E293B\" stroke-width=\"2\" opacity=\"0.4\"/>\n    <line x1=\"380\" y1=\"360\" x2=\"330\" y2=\"500\" stroke=\"#1E293B\" stroke-width=\"2\" opacity=\"0.4\"/>\n    <line x1=\"600\" y1=\"360\" x2=\"570\" y2=\"500\" stroke=\"#1E293B\" stroke-width=\"2\" opacity=\"0.4\"/>\n    <!-- Soft shadow under table and presenter -->\n    <ellipse cx=\"600\" cy=\"450\" rx=\"220\" ry=\"32\" fill=\"#0F172A\" opacity=\"0.35\"/>\n    <ellipse cx=\"340\" cy=\"445\" rx=\"36\" ry=\"12\" fill=\"#0F172A\" opacity=\"0.3\"/>\n  </g>\n\n  <!-- Magnetic Glass Whiteboard on Stand / Wall (hs-board at 224, 140) -->\n  <g id=\"m-whiteboard\" filter=\"url(#m-elem-shadow)\">\n    <!-- Stainless steel wall standoffs -->\n    <circle cx=\"178\" cy=\"74\" r=\"4\" fill=\"#94A3B8\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n    <circle cx=\"272\" cy=\"74\" r=\"4\" fill=\"#94A3B8\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n    <circle cx=\"178\" cy=\"206\" r=\"4\" fill=\"#94A3B8\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n    <circle cx=\"272\" cy=\"206\" r=\"4\" fill=\"#94A3B8\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n\n    <!-- Frosted Glass Board Surface -->\n    <rect x=\"170\" y=\"66\" width=\"110\" height=\"148\" rx=\"6\" fill=\"#F8FAFC\" stroke=\"#CBD5E1\" stroke-width=\"2\" opacity=\"0.95\"/>\n    <!-- Board Title / Milestone Notes -->\n    <rect x=\"180\" y=\"74\" width=\"90\" height=\"14\" fill=\"#E2E8F0\" rx=\"3\"/>\n    <line x1=\"188\" y1=\"81\" x2=\"245\" y2=\"81\" stroke=\"#334155\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n\n    <!-- Kanban Sticky Notes (Multi-color) -->\n    <!-- Sticky 1 (Yellow) -->\n    <rect x=\"180\" y=\"96\" width=\"26\" height=\"26\" rx=\"2\" fill=\"#FDE047\" stroke=\"#EAB308\" stroke-width=\"1\"/>\n    <line x1=\"183\" y1=\"102\" x2=\"201\" y2=\"102\" stroke=\"#854D0E\" stroke-width=\"1.5\"/>\n    <line x1=\"183\" y1=\"107\" x2=\"198\" y2=\"107\" stroke=\"#854D0E\" stroke-width=\"1.5\"/>\n    <!-- Sticky 2 (Pink) -->\n    <rect x=\"212\" y=\"96\" width=\"26\" height=\"26\" rx=\"2\" fill=\"#F472B6\" stroke=\"#DB2777\" stroke-width=\"1\"/>\n    <line x1=\"215\" y1=\"102\" x2=\"233\" y2=\"102\" stroke=\"#831843\" stroke-width=\"1.5\"/>\n    <line x1=\"215\" y1=\"107\" x2=\"230\" y2=\"107\" stroke=\"#831843\" stroke-width=\"1.5\"/>\n    <!-- Sticky 3 (Cyan) -->\n    <rect x=\"244\" y=\"96\" width=\"26\" height=\"26\" rx=\"2\" fill=\"#38BDF8\" stroke=\"#0284C7\" stroke-width=\"1\"/>\n    <line x1=\"247\" y1=\"102\" x2=\"265\" y2=\"102\" stroke=\"#075985\" stroke-width=\"1.5\"/>\n    <!-- Flowchart branch diagram drawn with dry-erase marker -->\n    <circle cx=\"195\" cy=\"145\" r=\"9\" fill=\"none\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n    <line x1=\"204\" y1=\"145\" x2=\"225\" y2=\"145\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n    <polyline points=\"220,141 225,145 220,149\" fill=\"none\" stroke=\"#2563EB\" stroke-width=\"2\"/>\n    <rect x=\"225\" y=\"136\" width=\"38\" height=\"18\" rx=\"2\" fill=\"none\" stroke=\"#16A34A\" stroke-width=\"2\"/>\n    <line x1=\"230\" y1=\"145\" x2=\"257\" y2=\"145\" stroke=\"#16A34A\" stroke-width=\"1.5\"/>\n    <!-- Lower task list with checkmarks -->\n    <polyline points=\"184,178 187,181 193,174\" fill=\"none\" stroke=\"#10B981\" stroke-width=\"2\"/>\n    <line x1=\"198\" y1=\"177\" x2=\"260\" y2=\"177\" stroke=\"#475569\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    <polyline points=\"184,194 187,197 193,190\" fill=\"none\" stroke=\"#10B981\" stroke-width=\"2\"/>\n    <line x1=\"198\" y1=\"193\" x2=\"250\" y2=\"193\" stroke=\"#475569\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n    <!-- Aluminum Marker & Eraser Tray -->\n    <rect x=\"175\" y=\"214\" width=\"100\" height=\"6\" rx=\"2\" fill=\"#94A3B8\" stroke=\"#475569\" stroke-width=\"1\"/>\n    <rect x=\"185\" y=\"211\" width=\"18\" height=\"4\" rx=\"1\" fill=\"#2563EB\"/>\n    <rect x=\"207\" y=\"211\" width=\"18\" height=\"4\" rx=\"1\" fill=\"#DC2626\"/>\n    <rect x=\"235\" y=\"210\" width=\"24\" height=\"5\" rx=\"1\" fill=\"#1E293B\"/>\n  </g>\n\n  <!-- Large Interactive Presentation Display (hs-presentation at 320, 150) -->\n  <g id=\"s2-presentation-screen\" filter=\"url(#m-shadow)\">\n    <!-- Heavy Duty Metal Wall Mount / Stand -->\n    <rect x=\"290\" y=\"55\" width=\"220\" height=\"155\" rx=\"8\" fill=\"url(#m-screen-frame)\" stroke=\"#0F172A\" stroke-width=\"3\"/>\n    <!-- Bright Display Glass -->\n    <rect x=\"296\" y=\"61\" width=\"208\" height=\"143\" rx=\"4\" fill=\"url(#m-chart-glow)\"/>\n\n    <!-- Screen Header: Title & Badges -->\n    <rect x=\"305\" y=\"68\" width=\"190\" height=\"16\" fill=\"#1E293B\" rx=\"3\"/>\n    <line x1=\"312\" y1=\"76\" x2=\"375\" y2=\"76\" stroke=\"#FFFFFF\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    <!-- Green status indicator badge -->\n    <rect x=\"440\" y=\"71\" width=\"48\" height=\"10\" rx=\"5\" fill=\"#16A34A\"/>\n    <circle cx=\"446\" cy=\"76\" r=\"2.5\" fill=\"#FFFFFF\"/>\n    <line x1=\"452\" y1=\"76\" x2=\"482\" y2=\"76\" stroke=\"#FFFFFF\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>\n\n    <!-- Grid lines on presentation chart -->\n    <line x1=\"310\" y1=\"110\" x2=\"430\" y2=\"110\" stroke=\"#334155\" stroke-width=\"1\" stroke-dasharray=\"3,3\"/>\n    <line x1=\"310\" y1=\"135\" x2=\"430\" y2=\"135\" stroke=\"#334155\" stroke-width=\"1\" stroke-dasharray=\"3,3\"/>\n    <line x1=\"310\" y1=\"160\" x2=\"430\" y2=\"160\" stroke=\"#334155\" stroke-width=\"1\" stroke-dasharray=\"3,3\"/>\n    <line x1=\"310\" y1=\"185\" x2=\"430\" y2=\"185\" stroke=\"#475569\" stroke-width=\"2\"/>\n\n    <!-- High-res Multi-color Bar Chart (Q1, Q2, Q3, Q4) -->\n    <rect x=\"320\" y=\"152\" width=\"18\" height=\"33\" fill=\"url(#m-chart-bar-blue)\" rx=\"2\"/>\n    <rect x=\"346\" y=\"132\" width=\"18\" height=\"53\" fill=\"url(#m-chart-bar-green)\" rx=\"2\"/>\n    <rect x=\"372\" y=\"118\" width=\"18\" height=\"67\" fill=\"url(#m-chart-bar-orange)\" rx=\"2\"/>\n    <rect x=\"398\" y=\"98\" width=\"18\" height=\"87\" fill=\"url(#m-chart-bar-purple)\" rx=\"2\"/>\n\n    <!-- Upward Trend Curve with Glowing Data Points (hs-point at 336, 210 is where pointer aims) -->\n    <path d=\"M329 146 Q355 125 381 112 T407 92\" fill=\"none\" stroke=\"#FACC15\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    <circle cx=\"329\" cy=\"146\" r=\"3.5\" fill=\"#FFFFFF\" stroke=\"#FACC15\" stroke-width=\"2\"/>\n    <circle cx=\"355\" cy=\"126\" r=\"3.5\" fill=\"#FFFFFF\" stroke=\"#FACC15\" stroke-width=\"2\"/>\n    <circle cx=\"381\" cy=\"112\" r=\"3.5\" fill=\"#FFFFFF\" stroke=\"#FACC15\" stroke-width=\"2\"/>\n    <!-- Peak Arrow Node Pointed at by Presenter! -->\n    <circle cx=\"407\" cy=\"92\" r=\"5\" fill=\"#EF4444\" stroke=\"#FFFFFF\" stroke-width=\"2\"/>\n    <polygon points=\"415,86 426,92 415,98\" fill=\"#EF4444\"/>\n\n    <!-- Right Side Dashboard Metrics Cards -->\n    <rect x=\"432\" y=\"95\" width=\"62\" height=\"42\" rx=\"3\" fill=\"#1E293B\" stroke=\"#334155\" stroke-width=\"1\"/>\n    <line x1=\"438\" y1=\"105\" x2=\"480\" y2=\"105\" stroke=\"#38BDF8\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <line x1=\"438\" y1=\"115\" x2=\"486\" y2=\"115\" stroke=\"#FFFFFF\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>\n    <line x1=\"438\" y1=\"126\" x2=\"465\" y2=\"126\" stroke=\"#4ADE80\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n\n    <rect x=\"432\" y=\"145\" width=\"62\" height=\"42\" rx=\"3\" fill=\"#1E293B\" stroke=\"#334155\" stroke-width=\"1\"/>\n    <!-- Mini donut chart -->\n    <circle cx=\"452\" cy=\"166\" r=\"12\" fill=\"none\" stroke=\"#334155\" stroke-width=\"4\"/>\n    <circle cx=\"452\" cy=\"166\" r=\"12\" fill=\"none\" stroke=\"#F59E0B\" stroke-width=\"4\" stroke-dasharray=\"50,25\"/>\n    <line x1=\"470\" y1=\"160\" x2=\"488\" y2=\"160\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    <line x1=\"470\" y1=\"170\" x2=\"484\" y2=\"170\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n\n    <!-- Glass Glint on Screen -->\n    <polygon points=\"296,61 340,61 310,204 296,204\" fill=\"#FFFFFF\" opacity=\"0.1\"/>\n  </g>\n\n  <!-- Presenter Standing & Pointing (hs-speak at 344, 260; hs-point at 336, 210) -->\n  <g id=\"s2-presenter\">\n    <!-- Tailored Trousers in charcoal grey -->\n    <path d=\"M322 340 L318 438 L330 438 L336 348 L344 438 L356 438 L350 340 Z\" fill=\"#334155\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <!-- Polished Leather Oxford Shoes -->\n    <polygon points=\"314,438 332,438 334,446 312,446\" fill=\"#0F172A\"/>\n    <polygon points=\"342,438 360,438 362,446 340,446\" fill=\"#0F172A\"/>\n\n    <!-- Tailored Suit Jacket (Navy / Slate Blue) -->\n    <path d=\"M312 245 C312 230, 358 230, 360 245 L354 345 L316 345 Z\" fill=\"#1E3A8A\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <!-- White Dress Shirt Collar & Silk Red Tie -->\n    <polygon points=\"332,230 338,252 344,230\" fill=\"#FFFFFF\"/>\n    <polygon points=\"335,236 341,236 340,285 336,285\" fill=\"#DC2626\"/>\n    <!-- Suit Jacket Lapels -->\n    <path d=\"M322 235 L334 275 L320 340\" fill=\"none\" stroke=\"#172554\" stroke-width=\"2\"/>\n    <path d=\"M352 235 L340 275 L350 340\" fill=\"none\" stroke=\"#172554\" stroke-width=\"2\"/>\n    <!-- Conference Name Badge on Lanyard -->\n    <line x1=\"333\" y1=\"236\" x2=\"328\" y2=\"280\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n    <line x1=\"343\" y1=\"236\" x2=\"330\" y2=\"280\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n    <rect x=\"322\" y=\"280\" width=\"14\" height=\"18\" rx=\"2\" fill=\"#FFFFFF\" stroke=\"#64748B\" stroke-width=\"1\"/>\n    <rect x=\"324\" y=\"282\" width=\"10\" height=\"4\" fill=\"#0284C7\"/>\n    <line x1=\"324\" y1=\"290\" x2=\"334\" y2=\"290\" stroke=\"#334155\" stroke-width=\"1\"/>\n\n    <!-- Head, Face & Hair Profile (Facing right/screen) -->\n    <rect x=\"332\" y=\"216\" width=\"12\" height=\"16\" fill=\"#FDBA74\"/>\n    <ellipse cx=\"338\" cy=\"202\" rx=\"15\" ry=\"18\" fill=\"#FDBA74\"/>\n    <!-- Short Professional Haircut -->\n    <path d=\"M324 200 C322 182, 352 178, 352 198 C352 205, 348 212, 344 214 C335 214, 325 212, 324 200 Z\" fill=\"#1E293B\"/>\n    <!-- Face features: Eye, nose, speaking mouth profile -->\n    <circle cx=\"344\" cy=\"198\" r=\"1.8\" fill=\"#0F172A\"/>\n    <polygon points=\"349,198 353,203 348,204\" fill=\"#FDBA74\"/>\n    <path d=\"M346 208 Q349 209 346 211\" fill=\"none\" stroke=\"#9A3412\" stroke-width=\"1.5\"/>\n    <!-- Wireless Presentation Earpiece / Headset -->\n    <path d=\"M334 200 Q338 206 342 208\" fill=\"none\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n\n    <!-- Left Arm resting by side holding wireless presentation remote clicker -->\n    <path d=\"M312 245 Q308 275 312 305\" fill=\"none\" stroke=\"#1E3A8A\" stroke-width=\"12\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"312\" cy=\"308\" rx=\"5\" ry=\"6\" fill=\"#FDBA74\"/>\n    <rect x=\"309\" y=\"304\" width=\"6\" height=\"10\" rx=\"2\" fill=\"#0F172A\"/>\n\n    <!-- Right Arm POINTING AT SCREEN CHART (hs-point at 336, 210) -->\n    <!-- Arm extends up and left towards chart -->\n    <path d=\"M352 245 Q355 220 336 210\" fill=\"none\" stroke=\"#1E3A8A\" stroke-width=\"12\" stroke-linecap=\"round\"/>\n    <!-- White shirt cuff -->\n    <line x1=\"339\" y1=\"214\" x2=\"335\" y2=\"208\" stroke=\"#FFFFFF\" stroke-width=\"3\"/>\n    <!-- Hand & Pointer Stylus targeting peak of chart -->\n    <ellipse cx=\"334\" cy=\"208\" rx=\"5\" ry=\"4\" fill=\"#FDBA74\"/>\n    <!-- Extended Pointer Stylus with laser dot on chart -->\n    <line x1=\"333\" y1=\"206\" x2=\"320\" y2=\"185\" stroke=\"#94A3B8\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <circle cx=\"318\" cy=\"182\" r=\"3\" fill=\"#EF4444\"/>\n    <circle cx=\"318\" cy=\"182\" r=\"6\" fill=\"#EF4444\" opacity=\"0.3\"/>\n  </g>\n\n  <!-- Large Boat-Shaped Executive Conference Table & Chairs (hs-meeting at 576, 360) -->\n  <g id=\"s2-table\" filter=\"url(#m-shadow)\">\n    <!-- Heavy Solid Pedestal Table Bases -->\n    <rect x=\"490\" y=\"340\" width=\"30\" height=\"95\" fill=\"url(#m-screen-frame)\" rx=\"4\"/>\n    <rect x=\"680\" y=\"340\" width=\"30\" height=\"95\" fill=\"url(#m-screen-frame)\" rx=\"4\"/>\n    <ellipse cx=\"505\" cy=\"435\" rx=\"24\" ry=\"7\" fill=\"#1E293B\"/>\n    <ellipse cx=\"695\" cy=\"435\" rx=\"24\" ry=\"7\" fill=\"#1E293B\"/>\n\n    <!-- Executive Mesh Chairs Behind Table for Attendees -->\n    <!-- Chair 1 (Attendee 1) -->\n    <rect x=\"480\" y=\"215\" width=\"65\" height=\"85\" rx=\"10\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"2.5\"/>\n    <line x1=\"488\" y1=\"235\" x2=\"537\" y2=\"235\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n    <line x1=\"488\" y1=\"255\" x2=\"537\" y2=\"255\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n    <line x1=\"488\" y1=\"275\" x2=\"537\" y2=\"275\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n\n    <!-- Chair 2 (Attendee 2) -->\n    <rect x=\"615\" y=\"210\" width=\"65\" height=\"90\" rx=\"10\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"2.5\"/>\n    <line x1=\"623\" y1=\"235\" x2=\"672\" y2=\"235\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n    <line x1=\"623\" y1=\"255\" x2=\"672\" y2=\"255\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n    <line x1=\"623\" y1=\"275\" x2=\"672\" y2=\"275\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n\n    <!-- Attendee 1: Female Colleague taking notes (hs-notes at 512, 350; hs-attendees at 520, 275) -->\n    <g id=\"s2-attendee-1\">\n      <path d=\"M485 305 C485 260, 502 245, 520 245 C538 245, 555 260, 555 305 Z\" fill=\"#047857\" stroke=\"#064E3B\" stroke-width=\"2\"/>\n      <polygon points=\"515,245 520,265 525,245\" fill=\"#FFFFFF\"/>\n      <rect x=\"515\" y=\"234\" width=\"10\" height=\"12\" fill=\"#FDBA74\"/>\n      <ellipse cx=\"520\" cy=\"222\" rx=\"13\" ry=\"15\" fill=\"#FDBA74\"/>\n      <!-- Stylish dark brown hair with neat bun -->\n      <path d=\"M508 220 C506 205, 532 202, 532 218 C532 225, 528 232, 524 234 Z\" fill=\"#451A03\"/>\n      <ellipse cx=\"528\" cy=\"210\" rx=\"8\" ry=\"8\" fill=\"#451A03\"/>\n      <!-- Eyeglasses -->\n      <rect x=\"513\" y=\"218\" width=\"7\" height=\"5\" rx=\"1\" fill=\"none\" stroke=\"#0F172A\" stroke-width=\"1.2\"/>\n      <rect x=\"522\" y=\"218\" width=\"7\" height=\"5\" rx=\"1\" fill=\"none\" stroke=\"#0F172A\" stroke-width=\"1.2\"/>\n      <line x1=\"520\" y1=\"220\" x2=\"522\" y2=\"220\" stroke=\"#0F172A\" stroke-width=\"1\"/>\n      <!-- Arms bent forward writing notes -->\n      <path d=\"M495 285 Q505 310 514 328\" fill=\"none\" stroke=\"#047857\" stroke-width=\"9\" stroke-linecap=\"round\"/>\n      <ellipse cx=\"515\" cy=\"330\" rx=\"5\" ry=\"4\" fill=\"#FDBA74\"/>\n      <!-- Pen in hand -->\n      <line x1=\"514\" y1=\"332\" x2=\"520\" y2=\"322\" stroke=\"#2563EB\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    </g>\n\n    <!-- Attendee 2: Male Colleague listening & taking notes on tablet (hs-attendees at 520, 275) -->\n    <g id=\"s2-attendee-2\">\n      <path d=\"M620 300 C620 255, 638 240, 656 240 C674 240, 692 255, 692 300 Z\" fill=\"#475569\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n      <polygon points=\"650,240 656,260 662,240\" fill=\"#FFFFFF\"/>\n      <rect x=\"651\" y=\"230\" width=\"10\" height=\"12\" fill=\"#FDBA74\"/>\n      <ellipse cx=\"656\" cy=\"218\" rx=\"13\" ry=\"15\" fill=\"#FDBA74\"/>\n      <!-- Modern short blonde/light brown hair -->\n      <path d=\"M644 215 C642 200, 668 198, 668 214 C668 220, 664 226, 660 228 Z\" fill=\"#92400E\"/>\n      <!-- Arms resting on table interacting with tablet -->\n      <path d=\"M635 280 Q642 305 650 322\" fill=\"none\" stroke=\"#475569\" stroke-width=\"9\" stroke-linecap=\"round\"/>\n      <ellipse cx=\"652\" cy=\"324\" rx=\"5\" ry=\"4\" fill=\"#FDBA74\"/>\n    </g>\n\n    <!-- Conference Tabletop in Rich Perspective (hs-meeting at 576, 360) -->\n    <!-- Table Front Chamfer Edge -->\n    <polygon points=\"410,320 780,320 760,344 425,344\" fill=\"#582D0C\" stroke=\"#3A1C06\" stroke-width=\"1.5\"/>\n\n    <!-- Main Curved Boat-shaped Walnut Surface -->\n    <polygon points=\"445,260 745,260 780,320 410,320\" fill=\"url(#m-table-wood)\" stroke=\"#78421A\" stroke-width=\"2\"/>\n    <!-- Subtle wood grain & lacquer sheen -->\n    <line x1=\"460\" y1=\"280\" x2=\"735\" y2=\"280\" stroke=\"#B4793B\" stroke-width=\"1\" opacity=\"0.4\"/>\n    <line x1=\"435\" y1=\"300\" x2=\"760\" y2=\"300\" stroke=\"#B4793B\" stroke-width=\"1\" opacity=\"0.4\"/>\n\n    <!-- Built-in Brushed Aluminum Pop-up Power & HDMI Track -->\n    <polygon points=\"560,270 630,270 636,282 554,282\" fill=\"#94A3B8\" stroke=\"#475569\" stroke-width=\"1\"/>\n    <rect x=\"568\" y=\"273\" width=\"8\" height=\"5\" fill=\"#0F172A\" rx=\"1\"/>\n    <rect x=\"582\" y=\"273\" width=\"8\" height=\"5\" fill=\"#0F172A\" rx=\"1\"/>\n    <rect x=\"596\" y=\"273\" width=\"8\" height=\"5\" fill=\"#0284C7\" rx=\"1\"/>\n    <circle cx=\"616\" cy=\"275\" r=\"2\" fill=\"#10B981\"/>\n\n    <!-- Open Executive Notebook for Attendee 1 (hs-notes at 512, 350) -->\n    <g id=\"s2-notebook\" filter=\"url(#m-elem-shadow)\">\n      <polygon points=\"492,298 542,298 554,332 500,332\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1.5\"/>\n      <line x1=\"518\" y1=\"298\" x2=\"527\" y2=\"332\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n      <!-- Ruled lines & notes -->\n      <line x1=\"500\" y1=\"306\" x2=\"516\" y2=\"306\" stroke=\"#64748B\" stroke-width=\"1\"/>\n      <line x1=\"502\" y1=\"314\" x2=\"517\" y2=\"314\" stroke=\"#64748B\" stroke-width=\"1\"/>\n      <line x1=\"504\" y1=\"322\" x2=\"518\" y2=\"322\" stroke=\"#64748B\" stroke-width=\"1\"/>\n      <line x1=\"524\" y1=\"306\" x2=\"540\" y2=\"306\" stroke=\"#64748B\" stroke-width=\"1\"/>\n      <line x1=\"526\" y1=\"314\" x2=\"542\" y2=\"314\" stroke=\"#64748B\" stroke-width=\"1\"/>\n      <!-- Leather notebook cover edge -->\n      <polygon points=\"490,296 544,296 542,298 492,298\" fill=\"#1E293B\"/>\n    </g>\n\n    <!-- Digital Tablet for Attendee 2 -->\n    <g id=\"s2-tablet\" filter=\"url(#m-elem-shadow)\">\n      <polygon points=\"642,292 682,292 690,324 648,324\" fill=\"#0F172A\" stroke=\"#475569\" stroke-width=\"1.2\"/>\n      <polygon points=\"645,294 679,294 686,321 651,321\" fill=\"#1E293B\"/>\n      <!-- Colorful slide or notes on tablet -->\n      <rect x=\"653\" y=\"298\" width=\"24\" height=\"12\" fill=\"#0284C7\" rx=\"1\"/>\n      <line x1=\"653\" y1=\"314\" x2=\"675\" y2=\"314\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    </g>\n\n    <!-- Water Tumblers & Carafe on Conference Table -->\n    <g id=\"s2-refreshments\" filter=\"url(#m-elem-shadow)\">\n      <!-- Glass Carafe with Lemon -->\n      <ellipse cx=\"448\" cy=\"305\" rx=\"10\" ry=\"4\" fill=\"#BAE6FD\" opacity=\"0.6\"/>\n      <path d=\"M440 282 L440 305 Q448 310 456 305 L456 282 Z\" fill=\"#BAE6FD\" opacity=\"0.6\" stroke=\"#38BDF8\" stroke-width=\"1\"/>\n      <circle cx=\"448\" cy=\"296\" r=\"4\" fill=\"#FACC15\" opacity=\"0.85\"/>\n\n      <!-- Drinking Glass 1 (In front of Attendee 1) -->\n      <path d=\"M472 312 L473 328 Q478 331 483 328 L484 312 Z\" fill=\"#E0F2FE\" opacity=\"0.7\" stroke=\"#38BDF8\" stroke-width=\"1\"/>\n      <ellipse cx=\"478\" cy=\"312\" rx=\"6\" ry=\"2.5\" fill=\"#BAE6FD\"/>\n\n      <!-- Drinking Glass 2 (In front of Attendee 2) -->\n      <path d=\"M698 308 L699 324 Q704 327 709 324 L710 308 Z\" fill=\"#E0F2FE\" opacity=\"0.7\" stroke=\"#38BDF8\" stroke-width=\"1\"/>\n      <ellipse cx=\"704\" cy=\"308\" rx=\"5.5\" ry=\"2.5\" fill=\"#BAE6FD\"/>\n    </g>\n  </g>\n</svg>",
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
        "svg": "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" class=\"part1-svg-art\">\n  <defs>\n    <!-- Wall and archive room lighting -->\n    <linearGradient id=\"f-wall\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#F1F5F9\"/>\n      <stop offset=\"60%\" stop-color=\"#E2E8F0\"/>\n      <stop offset=\"100%\" stop-color=\"#CBD5E1\"/>\n    </linearGradient>\n\n    <!-- Steel filing cabinet gradient (Brushed gunmetal grey) -->\n    <linearGradient id=\"f-cabinet-steel\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#334155\"/>\n      <stop offset=\"40%\" stop-color=\"#64748B\"/>\n      <stop offset=\"70%\" stop-color=\"#475569\"/>\n      <stop offset=\"100%\" stop-color=\"#1E293B\"/>\n    </linearGradient>\n\n    <linearGradient id=\"f-drawer-front\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#64748B\"/>\n      <stop offset=\"100%\" stop-color=\"#334155\"/>\n    </linearGradient>\n\n    <!-- Polished vinyl tile floor gradient -->\n    <linearGradient id=\"f-floor-tile\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#94A3B8\"/>\n      <stop offset=\"100%\" stop-color=\"#64748B\"/>\n    </linearGradient>\n\n    <!-- Corrugated Cardboard Archive Box gradient -->\n    <linearGradient id=\"f-box-cardboard\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#D7A15C\"/>\n      <stop offset=\"50%\" stop-color=\"#C2884A\"/>\n      <stop offset=\"100%\" stop-color=\"#9A622A\"/>\n    </linearGradient>\n\n    <!-- Filters -->\n    <filter id=\"f-shadow\" x=\"-10%\" y=\"-10%\" width=\"125%\" height=\"125%\">\n      <feDropShadow dx=\"0\" dy=\"8\" stdDeviation=\"9\" flood-color=\"#0F172A\" flood-opacity=\"0.25\"/>\n    </filter>\n    <filter id=\"f-elem-shadow\" x=\"-8%\" y=\"-8%\" width=\"120%\" height=\"120%\">\n      <feDropShadow dx=\"0\" dy=\"4\" stdDeviation=\"5\" flood-color=\"#0F172A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n\n  <!-- Wall Background -->\n  <rect x=\"0\" y=\"0\" width=\"800\" height=\"360\" fill=\"url(#f-wall)\"/>\n\n  <!-- Modern Office Wall Clock at Top (10:15) -->\n  <g id=\"f-wall-clock\" filter=\"url(#f-elem-shadow)\">\n    <circle cx=\"160\" cy=\"55\" r=\"32\" fill=\"#FFFFFF\" stroke=\"#0F172A\" stroke-width=\"4\"/>\n    <circle cx=\"160\" cy=\"55\" r=\"29\" fill=\"#F8FAFC\"/>\n    <!-- Hour marks -->\n    <line x1=\"160\" y1=\"28\" x2=\"160\" y2=\"34\" stroke=\"#0F172A\" stroke-width=\"2.5\"/>\n    <line x1=\"160\" y1=\"76\" x2=\"160\" y2=\"82\" stroke=\"#0F172A\" stroke-width=\"2.5\"/>\n    <line x1=\"133\" y1=\"55\" x2=\"139\" y2=\"55\" stroke=\"#0F172A\" stroke-width=\"2.5\"/>\n    <line x1=\"181\" y1=\"55\" x2=\"187\" y2=\"55\" stroke=\"#0F172A\" stroke-width=\"2.5\"/>\n    <!-- Clock Hands (10:15) -->\n    <line x1=\"160\" y1=\"55\" x2=\"147\" y2=\"44\" stroke=\"#0F172A\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    <line x1=\"160\" y1=\"55\" x2=\"182\" y2=\"55\" stroke=\"#0F172A\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <!-- Red second hand -->\n    <line x1=\"160\" y1=\"55\" x2=\"168\" y2=\"35\" stroke=\"#EF4444\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>\n    <circle cx=\"160\" cy=\"55\" r=\"3\" fill=\"#0F172A\"/>\n  </g>\n\n  <!-- Overhead Linear LED Lighting Bar -->\n  <g id=\"f-light-fixture\">\n    <rect x=\"250\" y=\"10\" width=\"300\" height=\"12\" rx=\"3\" fill=\"#334155\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n    <rect x=\"255\" y=\"14\" width=\"290\" height=\"5\" fill=\"#FEF08A\"/>\n    <!-- Soft light spread cone -->\n    <polygon points=\"250,22 550,22 680,360 120,360\" fill=\"#FEF08A\" opacity=\"0.05\"/>\n  </g>\n\n  <!-- Notice Bulletin Board on Back Wall (Left) -->\n  <g id=\"f-bulletin-board\" filter=\"url(#f-elem-shadow)\">\n    <rect x=\"25\" y=\"100\" width=\"130\" height=\"150\" rx=\"3\" fill=\"#B45309\" stroke=\"#78350F\" stroke-width=\"4\"/>\n    <rect x=\"31\" y=\"106\" width=\"118\" height=\"138\" fill=\"#FDE68A\"/>\n    <!-- Pinned safety memo & schedule -->\n    <rect x=\"40\" y=\"115\" width=\"45\" height=\"55\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1\"/>\n    <circle cx=\"62\" cy=\"118\" r=\"2.5\" fill=\"#EF4444\"/>\n    <line x1=\"45\" y1=\"128\" x2=\"80\" y2=\"128\" stroke=\"#64748B\" stroke-width=\"2\"/>\n    <line x1=\"45\" y1=\"136\" x2=\"75\" y2=\"136\" stroke=\"#64748B\" stroke-width=\"2\"/>\n    <line x1=\"45\" y1=\"144\" x2=\"78\" y2=\"144\" stroke=\"#64748B\" stroke-width=\"2\"/>\n\n    <!-- Pinned color chart -->\n    <rect x=\"92\" y=\"125\" width=\"45\" height=\"40\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1\"/>\n    <circle cx=\"114\" cy=\"128\" r=\"2.5\" fill=\"#3B82F6\"/>\n    <rect x=\"96\" y=\"138\" width=\"10\" height=\"20\" fill=\"#10B981\"/>\n    <rect x=\"110\" y=\"145\" width=\"10\" height=\"13\" fill=\"#F59E0B\"/>\n    <rect x=\"123\" y=\"134\" width=\"10\" height=\"24\" fill=\"#3B82F6\"/>\n\n    <!-- Yellow sticky notes -->\n    <rect x=\"42\" y=\"180\" width=\"35\" height=\"35\" fill=\"#FEF08A\" stroke=\"#FACC15\" stroke-width=\"1\"/>\n    <line x1=\"46\" y1=\"190\" x2=\"72\" y2=\"190\" stroke=\"#854D0E\" stroke-width=\"1.5\"/>\n    <line x1=\"46\" y1=\"198\" x2=\"68\" y2=\"198\" stroke=\"#854D0E\" stroke-width=\"1.5\"/>\n\n    <rect x=\"88\" y=\"175\" width=\"48\" height=\"60\" fill=\"#E0F2FE\" stroke=\"#BAE6FD\" stroke-width=\"1\"/>\n    <circle cx=\"112\" cy=\"178\" r=\"2.5\" fill=\"#10B981\"/>\n    <line x1=\"94\" y1=\"188\" x2=\"130\" y2=\"188\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n    <line x1=\"94\" y1=\"196\" x2=\"125\" y2=\"196\" stroke=\"#0284C7\" stroke-width=\"1.5\"/>\n  </g>\n\n  <!-- Vinyl Composite Tile Floor with Perspective -->\n  <g id=\"f-floor\">\n    <rect x=\"0\" y=\"360\" width=\"800\" height=\"140\" fill=\"url(#f-floor-tile)\"/>\n    <line x1=\"0\" y1=\"360\" x2=\"800\" y2=\"360\" stroke=\"#334155\" stroke-width=\"4\"/>\n    <!-- Floor Tile Seam Lines in Perspective -->\n    <line x1=\"0\" y1=\"420\" x2=\"800\" y2=\"420\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <line x1=\"0\" y1=\"465\" x2=\"800\" y2=\"465\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <line x1=\"180\" y1=\"360\" x2=\"120\" y2=\"500\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <line x1=\"380\" y1=\"360\" x2=\"340\" y2=\"500\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <line x1=\"580\" y1=\"360\" x2=\"560\" y2=\"500\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <line x1=\"720\" y1=\"360\" x2=\"730\" y2=\"500\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <!-- Shadows under furniture -->\n    <ellipse cx=\"295\" cy=\"455\" rx=\"100\" ry=\"22\" fill=\"#0F172A\" opacity=\"0.35\"/>\n    <ellipse cx=\"670\" cy=\"460\" rx=\"95\" ry=\"20\" fill=\"#0F172A\" opacity=\"0.3\"/>\n    <ellipse cx=\"450\" cy=\"465\" rx=\"35\" ry=\"12\" fill=\"#0F172A\" opacity=\"0.3\"/>\n  </g>\n\n  <!-- Heavy-Duty Steel Filing Cabinet Bank (hs-cabinet at 336, 240) -->\n  <g id=\"s3-cabinets\" filter=\"url(#f-shadow)\">\n    <!-- Main Outer Cabinet Enclosure (4 vertical drawers) -->\n    <rect x=\"200\" y=\"115\" width=\"185\" height=\"335\" rx=\"5\" fill=\"url(#f-cabinet-steel)\" stroke=\"#0F172A\" stroke-width=\"3\"/>\n    <!-- Top beveled header strip -->\n    <rect x=\"200\" y=\"115\" width=\"185\" height=\"12\" fill=\"#64748B\" rx=\"3\"/>\n    <circle cx=\"215\" cy=\"121\" r=\"3\" fill=\"#0F172A\"/>\n\n    <!-- Drawer 1 (Top - Closed) -->\n    <rect x=\"208\" y=\"134\" width=\"169\" height=\"68\" rx=\"3\" fill=\"url(#f-drawer-front)\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n    <!-- Chrome Handle & Card Index Label -->\n    <rect x=\"262\" y=\"144\" width=\"60\" height=\"20\" rx=\"2\" fill=\"#CBD5E1\" stroke=\"#475569\" stroke-width=\"1.2\"/>\n    <rect x=\"268\" y=\"148\" width=\"48\" height=\"12\" fill=\"#FFFFFF\"/>\n    <line x1=\"272\" y1=\"154\" x2=\"310\" y2=\"154\" stroke=\"#0F172A\" stroke-width=\"1.8\"/>\n    <!-- Recessed pull handle -->\n    <path d=\"M272 172 L312 172\" stroke=\"#CBD5E1\" stroke-width=\"4.5\" stroke-linecap=\"round\"/>\n    <circle cx=\"360\" cy=\"168\" r=\"3\" fill=\"#0F172A\"/>\n\n    <!-- Drawer 2 (Middle - PULLED OPEN in 3D Perspective! hs-drawer at 336, 290) -->\n    <!-- Void inside cabinet when drawer is open -->\n    <rect x=\"208\" y=\"212\" width=\"169\" height=\"70\" rx=\"2\" fill=\"#0F172A\"/>\n\n    <!-- Pulled-out Drawer Extension Shell (Projecting out towards worker) -->\n    <polygon points=\"208,245 377,245 425,320 220,320\" fill=\"#334155\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n    <!-- Left and right ball-bearing extension suspension rails (Silver chrome) -->\n    <line x1=\"208\" y1=\"245\" x2=\"220\" y2=\"320\" stroke=\"#CBD5E1\" stroke-width=\"4.5\"/>\n    <line x1=\"377\" y1=\"245\" x2=\"425\" y2=\"320\" stroke=\"#CBD5E1\" stroke-width=\"4.5\"/>\n\n    <!-- Front Drawer Face Panel in Perspective -->\n    <polygon points=\"220,320 425,320 422,352 216,352\" fill=\"url(#f-drawer-front)\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <!-- Chrome Handle on Front Panel -->\n    <line x1=\"290\" y1=\"334\" x2=\"350\" y2=\"334\" stroke=\"#CBD5E1\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n    <rect x=\"300\" y=\"324\" width=\"40\" height=\"8\" fill=\"#FFFFFF\" stroke=\"#475569\" stroke-width=\"1\"/>\n\n    <!-- Hanging File Folders Inside Open Drawer (hs-folder at 336, 225) -->\n    <!-- Folder 1: Green hanging file -->\n    <polygon points=\"220,250 382,250 388,266 226,266\" fill=\"#15803D\" stroke=\"#166534\" stroke-width=\"1\"/>\n    <rect x=\"240\" y=\"246\" width=\"22\" height=\"7\" rx=\"1.5\" fill=\"#FEF08A\" stroke=\"#CA8A04\" stroke-width=\"1\"/>\n    <!-- Folder 2: Blue hanging file -->\n    <polygon points=\"226,266 388,266 395,282 233,282\" fill=\"#1D4ED8\" stroke=\"#1E40AF\" stroke-width=\"1\"/>\n    <rect x=\"290\" y=\"262\" width=\"22\" height=\"7\" rx=\"1.5\" fill=\"#FFFFFF\" stroke=\"#3B82F6\" stroke-width=\"1\"/>\n    <!-- Folder 3: Yellow/Amber hanging file -->\n    <polygon points=\"233,282 395,282 404,298 242,298\" fill=\"#D97706\" stroke=\"#B45309\" stroke-width=\"1\"/>\n    <rect x=\"340\" y=\"278\" width=\"22\" height=\"7\" rx=\"1.5\" fill=\"#BBF7D0\" stroke=\"#16A34A\" stroke-width=\"1\"/>\n    <!-- Folder 4: Red/Coral being accessed by worker -->\n    <polygon points=\"242,298 404,298 414,316 252,316\" fill=\"#DC2626\" stroke=\"#B91C1C\" stroke-width=\"1\"/>\n    <rect x=\"310\" y=\"294\" width=\"24\" height=\"7\" rx=\"1.5\" fill=\"#FFFFFF\" stroke=\"#DC2626\" stroke-width=\"1\"/>\n\n    <!-- Drawer 3 (Bottom - Closed) -->\n    <rect x=\"208\" y=\"362\" width=\"169\" height=\"74\" rx=\"3\" fill=\"url(#f-drawer-front)\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n    <rect x=\"262\" y=\"372\" width=\"60\" height=\"20\" rx=\"2\" fill=\"#CBD5E1\" stroke=\"#475569\" stroke-width=\"1.2\"/>\n    <rect x=\"268\" y=\"376\" width=\"48\" height=\"12\" fill=\"#FFFFFF\"/>\n    <line x1=\"272\" y1=\"382\" x2=\"310\" y2=\"382\" stroke=\"#0F172A\" stroke-width=\"1.8\"/>\n    <path d=\"M272 400 L312 400\" stroke=\"#CBD5E1\" stroke-width=\"4.5\" stroke-linecap=\"round\"/>\n    <circle cx=\"360\" cy=\"396\" r=\"3\" fill=\"#0F172A\"/>\n\n    <!-- Cabinet base kickplate -->\n    <rect x=\"204\" y=\"438\" width=\"177\" height=\"10\" fill=\"#0F172A\"/>\n  </g>\n\n  <!-- Office Worker Standing & Reaching Into Drawer (hs-reach at 384, 250; hs-sort at 448, 210) -->\n  <g id=\"s3-worker\">\n    <!-- Legs in tailored Khaki Chinos -->\n    <path d=\"M425 350 L420 456 L435 456 L445 360 L458 456 L474 456 L465 350 Z\" fill=\"#D4A373\" stroke=\"#8A5A36\" stroke-width=\"2\"/>\n    <!-- Brown Leather Dress Shoes with laces -->\n    <polygon points=\"414,456 437,456 440,466 412,466\" fill=\"#582D0C\"/>\n    <polygon points=\"455,456 478,456 480,466 452,466\" fill=\"#582D0C\"/>\n\n    <!-- Business Casual Light Blue Shirt with Rolled Sleeves -->\n    <path d=\"M414 240 C414 225, 465 225, 470 240 L465 352 L418 352 Z\" fill=\"#BAE6FD\" stroke=\"#38BDF8\" stroke-width=\"2\"/>\n    <!-- Leather belt with polished silver buckle -->\n    <rect x=\"418\" y=\"348\" width=\"48\" height=\"8\" rx=\"2\" fill=\"#451A03\"/>\n    <rect x=\"438\" y=\"346\" width=\"10\" height=\"12\" rx=\"2\" fill=\"#CBD5E1\" stroke=\"#475569\" stroke-width=\"1\"/>\n\n    <!-- White dress shirt collar -->\n    <polygon points=\"436,225 442,242 448,225\" fill=\"#FFFFFF\"/>\n    <!-- Neck -->\n    <rect x=\"438\" y=\"214\" width=\"12\" height=\"14\" fill=\"#FDBA74\"/>\n\n    <!-- Head & Hair (Tilted forward watching files) -->\n    <ellipse cx=\"444\" cy=\"200\" rx=\"14\" ry=\"17\" fill=\"#FDBA74\"/>\n    <!-- Professional groomed brown hair -->\n    <path d=\"M432 198 C430 180, 458 176, 458 195 C458 202, 454 210, 450 212 C440 212, 432 208, 432 198 Z\" fill=\"#451A03\"/>\n    <!-- Facial profile: focused downward gaze -->\n    <circle cx=\"438\" cy=\"202\" r=\"1.8\" fill=\"#0F172A\"/>\n    <path d=\"M434 208 Q438 210 435 212\" fill=\"none\" stroke=\"#9A3412\" stroke-width=\"1.2\"/>\n\n    <!-- Left Arm Holding Manila File Folder (hs-sort at 448, 210) -->\n    <path d=\"M468 245 Q485 270 472 290\" fill=\"none\" stroke=\"#BAE6FD\" stroke-width=\"12\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"468\" cy=\"292\" rx=\"5\" ry=\"4\" fill=\"#FDBA74\"/>\n    <!-- Manila Folder tucked securely under left arm -->\n    <polygon points=\"450,268 495,268 490,298 445,298\" fill=\"#FEF08A\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n    <line x1=\"455\" y1=\"276\" x2=\"485\" y2=\"276\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n    <circle cx=\"484\" cy=\"276\" r=\"2.5\" fill=\"#EF4444\"/>\n\n    <!-- Right Arm REACHING DOWN INTO OPEN DRAWER (hs-reach at 384, 250) -->\n    <!-- Arm extends down and forward towards files -->\n    <path d=\"M422 248 Q405 240 386 254\" fill=\"none\" stroke=\"#BAE6FD\" stroke-width=\"13\" stroke-linecap=\"round\"/>\n    <!-- Rolled sleeve cuff -->\n    <ellipse cx=\"406\" cy=\"245\" rx=\"6\" ry=\"7\" fill=\"#E0F2FE\" stroke=\"#38BDF8\" stroke-width=\"1\"/>\n    <!-- Forearm & wrist reaching into drawer -->\n    <path d=\"M404 246 L384 256\" stroke=\"#FDBA74\" stroke-width=\"8\" stroke-linecap=\"round\"/>\n    <!-- Silver Watch on wrist -->\n    <rect x=\"390\" y=\"248\" width=\"6\" height=\"5\" rx=\"1.5\" fill=\"#94A3B8\"/>\n    <!-- Hand sorting through hanging files with agile fingers -->\n    <ellipse cx=\"382\" cy=\"257\" rx=\"5\" ry=\"4\" fill=\"#FDBA74\"/>\n    <path d=\"M380 256 Q374 258 376 264\" fill=\"none\" stroke=\"#FDBA74\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <path d=\"M383 256 Q380 262 382 268\" fill=\"none\" stroke=\"#FDBA74\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  </g>\n\n  <!-- Heavy Duty Metal Storage Shelving Unit (Right) (hs-shelf at 664, 210) -->\n  <g id=\"s3-shelves\" filter=\"url(#f-shadow)\">\n    <!-- 4 Upright Steel Perforated Angle Posts -->\n    <rect x=\"580\" y=\"90\" width=\"8\" height=\"360\" fill=\"url(#f-cabinet-steel)\"/>\n    <rect x=\"752\" y=\"90\" width=\"8\" height=\"360\" fill=\"url(#f-cabinet-steel)\"/>\n    <!-- Shelf peg holes -->\n    <circle cx=\"584\" cy=\"140\" r=\"1.5\" fill=\"#0F172A\"/>\n    <circle cx=\"584\" cy=\"200\" r=\"1.5\" fill=\"#0F172A\"/>\n    <circle cx=\"584\" cy=\"280\" r=\"1.5\" fill=\"#0F172A\"/>\n    <circle cx=\"756\" cy=\"140\" r=\"1.5\" fill=\"#0F172A\"/>\n    <circle cx=\"756\" cy=\"200\" r=\"1.5\" fill=\"#0F172A\"/>\n    <circle cx=\"756\" cy=\"280\" r=\"1.5\" fill=\"#0F172A\"/>\n\n    <!-- Shelf Level 1 (Top - y=145) -->\n    <rect x=\"576\" y=\"145\" width=\"188\" height=\"10\" rx=\"2\" fill=\"#64748B\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n    <!-- Row of 8 Ring Binders with spine labels -->\n    <rect x=\"590\" y=\"98\" width=\"16\" height=\"47\" rx=\"2\" fill=\"#DC2626\" stroke=\"#991B1B\" stroke-width=\"1\"/>\n    <rect x=\"593\" y=\"106\" width=\"10\" height=\"16\" fill=\"#FFFFFF\"/>\n    <circle cx=\"598\" cy=\"132\" r=\"2.5\" fill=\"#CBD5E1\"/>\n\n    <rect x=\"608\" y=\"98\" width=\"16\" height=\"47\" rx=\"2\" fill=\"#DC2626\" stroke=\"#991B1B\" stroke-width=\"1\"/>\n    <rect x=\"611\" y=\"106\" width=\"10\" height=\"16\" fill=\"#FFFFFF\"/>\n    <circle cx=\"616\" cy=\"132\" r=\"2.5\" fill=\"#CBD5E1\"/>\n\n    <rect x=\"626\" y=\"98\" width=\"16\" height=\"47\" rx=\"2\" fill=\"#2563EB\" stroke=\"#1D4ED8\" stroke-width=\"1\"/>\n    <rect x=\"629\" y=\"106\" width=\"10\" height=\"16\" fill=\"#FFFFFF\"/>\n    <circle cx=\"634\" cy=\"132\" r=\"2.5\" fill=\"#CBD5E1\"/>\n\n    <rect x=\"644\" y=\"98\" width=\"16\" height=\"47\" rx=\"2\" fill=\"#2563EB\" stroke=\"#1D4ED8\" stroke-width=\"1\"/>\n    <rect x=\"647\" y=\"106\" width=\"10\" height=\"16\" fill=\"#FFFFFF\"/>\n    <circle cx=\"652\" cy=\"132\" r=\"2.5\" fill=\"#CBD5E1\"/>\n\n    <rect x=\"662\" y=\"98\" width=\"16\" height=\"47\" rx=\"2\" fill=\"#16A34A\" stroke=\"#15803D\" stroke-width=\"1\"/>\n    <rect x=\"665\" y=\"106\" width=\"10\" height=\"16\" fill=\"#FFFFFF\"/>\n    <circle cx=\"670\" cy=\"132\" r=\"2.5\" fill=\"#CBD5E1\"/>\n\n    <rect x=\"680\" y=\"98\" width=\"16\" height=\"47\" rx=\"2\" fill=\"#D97706\" stroke=\"#B45309\" stroke-width=\"1\"/>\n    <rect x=\"683\" y=\"106\" width=\"10\" height=\"16\" fill=\"#FFFFFF\"/>\n    <circle cx=\"688\" cy=\"132\" r=\"2.5\" fill=\"#CBD5E1\"/>\n\n    <rect x=\"698\" y=\"98\" width=\"16\" height=\"47\" rx=\"2\" fill=\"#0F172A\" stroke=\"#334155\" stroke-width=\"1\"/>\n    <rect x=\"701\" y=\"106\" width=\"10\" height=\"16\" fill=\"#FFFFFF\"/>\n    <circle cx=\"706\" cy=\"132\" r=\"2.5\" fill=\"#CBD5E1\"/>\n\n    <rect x=\"716\" y=\"102\" width=\"16\" height=\"43\" rx=\"2\" fill=\"#64748B\" transform=\"rotate(8 716 102)\"/>\n\n    <!-- Shelf Level 2 (Middle - y=225) -->\n    <rect x=\"576\" y=\"225\" width=\"188\" height=\"10\" rx=\"2\" fill=\"#64748B\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n    <!-- Archive Box 1 on Shelf 2 -->\n    <rect x=\"592\" y=\"170\" width=\"70\" height=\"55\" rx=\"3\" fill=\"url(#f-box-cardboard)\" stroke=\"#78350F\" stroke-width=\"1.5\"/>\n    <rect x=\"590\" y=\"166\" width=\"74\" height=\"10\" rx=\"2\" fill=\"#A16207\"/>\n    <rect x=\"618\" y=\"190\" width=\"18\" height=\"6\" rx=\"3\" fill=\"#0F172A\" opacity=\"0.6\"/>\n    <rect x=\"604\" y=\"178\" width=\"46\" height=\"10\" fill=\"#FFFFFF\" stroke=\"#CA8A04\" stroke-width=\"0.8\"/>\n    <line x1=\"608\" y1=\"183\" x2=\"640\" y2=\"183\" stroke=\"#0F172A\" stroke-width=\"1.5\"/>\n\n    <!-- Archive Box 2 on Shelf 2 -->\n    <rect x=\"670\" y=\"170\" width=\"72\" height=\"55\" rx=\"3\" fill=\"url(#f-box-cardboard)\" stroke=\"#78350F\" stroke-width=\"1.5\"/>\n    <rect x=\"668\" y=\"166\" width=\"76\" height=\"10\" rx=\"2\" fill=\"#A16207\"/>\n    <rect x=\"698\" y=\"190\" width=\"18\" height=\"6\" rx=\"3\" fill=\"#0F172A\" opacity=\"0.6\"/>\n    <rect x=\"682\" y=\"178\" width=\"48\" height=\"10\" fill=\"#FFFFFF\" stroke=\"#CA8A04\" stroke-width=\"0.8\"/>\n    <line x1=\"686\" y1=\"183\" x2=\"720\" y2=\"183\" stroke=\"#0F172A\" stroke-width=\"1.5\"/>\n\n    <!-- Shelf Level 3 (Lower - y=305) -->\n    <rect x=\"576\" y=\"305\" width=\"188\" height=\"10\" rx=\"2\" fill=\"#64748B\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n    <!-- Stack of documents & records on Shelf 3 -->\n    <rect x=\"592\" y=\"278\" width=\"75\" height=\"27\" rx=\"2\" fill=\"#F8FAFC\" stroke=\"#CBD5E1\" stroke-width=\"1\"/>\n    <line x1=\"592\" y1=\"285\" x2=\"667\" y2=\"285\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n    <line x1=\"592\" y1=\"292\" x2=\"667\" y2=\"292\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n    <line x1=\"592\" y1=\"299\" x2=\"667\" y2=\"299\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n    <!-- Leaning Accordion Files -->\n    <polygon points=\"685,250 710,250 735,305 710,305\" fill=\"#3B82F6\" stroke=\"#1D4ED8\" stroke-width=\"1\"/>\n    <polygon points=\"705,252 730,252 755,305 730,305\" fill=\"#EF4444\" stroke=\"#B91C1C\" stroke-width=\"1\"/>\n  </g>\n\n  <!-- Heavy Corrugated Archive Storage Boxes on Floor (hs-box at 656, 400) -->\n  <g id=\"s3-floor-boxes\" filter=\"url(#f-shadow)\">\n    <!-- Box 1 (Bottom) -->\n    <rect x=\"595\" y=\"380\" width=\"105\" height=\"70\" rx=\"4\" fill=\"url(#f-box-cardboard)\" stroke=\"#78350F\" stroke-width=\"2\"/>\n    <!-- Box 1 Lid with overhang -->\n    <rect x=\"592\" y=\"375\" width=\"111\" height=\"14\" rx=\"2\" fill=\"#A16207\" stroke=\"#78350F\" stroke-width=\"1.5\"/>\n    <!-- Oval hand-hole -->\n    <rect x=\"635\" y=\"405\" width=\"25\" height=\"8\" rx=\"4\" fill=\"#451A03\"/>\n    <!-- White Printed Storage Label with barcode -->\n    <rect x=\"612\" y=\"394\" width=\"70\" height=\"20\" fill=\"#FFFFFF\" stroke=\"#CA8A04\" stroke-width=\"1\"/>\n    <line x1=\"616\" y1=\"400\" x2=\"675\" y2=\"400\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <!-- Barcode lines -->\n    <line x1=\"618\" y1=\"405\" x2=\"618\" y2=\"411\" stroke=\"#0F172A\" stroke-width=\"1.5\"/>\n    <line x1=\"622\" y1=\"405\" x2=\"622\" y2=\"411\" stroke=\"#0F172A\" stroke-width=\"2.5\"/>\n    <line x1=\"627\" y1=\"405\" x2=\"627\" y2=\"411\" stroke=\"#0F172A\" stroke-width=\"1\"/>\n    <line x1=\"632\" y1=\"405\" x2=\"632\" y2=\"411\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <line x1=\"638\" y1=\"405\" x2=\"638\" y2=\"411\" stroke=\"#0F172A\" stroke-width=\"1\"/>\n    <!-- Clear packing tape stripe -->\n    <line x1=\"647\" y1=\"375\" x2=\"647\" y2=\"450\" stroke=\"#FFFFFF\" stroke-width=\"8\" opacity=\"0.3\"/>\n\n    <!-- Box 2 (Smaller box stacked on top / right) -->\n    <rect x=\"690\" y=\"395\" width=\"85\" height=\"55\" rx=\"3\" fill=\"url(#f-box-cardboard)\" stroke=\"#78350F\" stroke-width=\"1.8\"/>\n    <rect x=\"688\" y=\"390\" width=\"89\" height=\"12\" rx=\"2\" fill=\"#A16207\" stroke=\"#78350F\" stroke-width=\"1.2\"/>\n    <rect x=\"720\" y=\"415\" width=\"22\" height=\"7\" rx=\"3.5\" fill=\"#451A03\"/>\n    <rect x=\"702\" y=\"406\" width=\"55\" height=\"15\" fill=\"#FFFFFF\" stroke=\"#CA8A04\" stroke-width=\"0.8\"/>\n    <line x1=\"706\" y1=\"412\" x2=\"748\" y2=\"412\" stroke=\"#0F172A\" stroke-width=\"1.5\"/>\n  </g>\n</svg>",
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
        "svg": "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" class=\"part1-svg-art\">\n  <defs>\n    <!-- Ceiling & Store lighting -->\n    <linearGradient id=\"sm-ceiling\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#334155\"/>\n      <stop offset=\"100%\" stop-color=\"#1E293B\"/>\n    </linearGradient>\n\n    <!-- Supermarket polished floor gradient -->\n    <linearGradient id=\"sm-floor\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#E2E8F0\"/>\n      <stop offset=\"60%\" stop-color=\"#CBD5E1\"/>\n      <stop offset=\"100%\" stop-color=\"#94A3B8\"/>\n    </linearGradient>\n\n    <!-- Shelving steel gradient -->\n    <linearGradient id=\"sm-steel\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#475569\"/>\n      <stop offset=\"50%\" stop-color=\"#64748B\"/>\n      <stop offset=\"100%\" stop-color=\"#334155\"/>\n    </linearGradient>\n\n    <!-- Glass jar jelly & honey gradients -->\n    <linearGradient id=\"sm-jam-red\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#EF4444\"/>\n      <stop offset=\"100%\" stop-color=\"#991B1B\"/>\n    </linearGradient>\n\n    <linearGradient id=\"sm-honey-amber\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#FBBF24\"/>\n      <stop offset=\"100%\" stop-color=\"#B45309\"/>\n    </linearGradient>\n\n    <!-- Olive oil green glass bottle -->\n    <linearGradient id=\"sm-oil-green\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#166534\"/>\n      <stop offset=\"50%\" stop-color=\"#22C55E\"/>\n      <stop offset=\"100%\" stop-color=\"#14532D\"/>\n    </linearGradient>\n\n    <!-- Shopping cart chrome steel wire -->\n    <linearGradient id=\"sm-chrome\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#94A3B8\"/>\n      <stop offset=\"50%\" stop-color=\"#F1F5F9\"/>\n      <stop offset=\"100%\" stop-color=\"#64748B\"/>\n    </linearGradient>\n\n    <!-- Drop shadows -->\n    <filter id=\"sm-shadow\" x=\"-10%\" y=\"-10%\" width=\"125%\" height=\"125%\">\n      <feDropShadow dx=\"0\" dy=\"6\" stdDeviation=\"8\" flood-color=\"#0F172A\" flood-opacity=\"0.22\"/>\n    </filter>\n    <filter id=\"sm-elem-shadow\" x=\"-8%\" y=\"-8%\" width=\"120%\" height=\"120%\">\n      <feDropShadow dx=\"0\" dy=\"4\" stdDeviation=\"4\" flood-color=\"#0F172A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n\n  <!-- Store Ceiling with Receding Perspective Lights -->\n  <rect x=\"0\" y=\"0\" width=\"800\" height=\"150\" fill=\"url(#sm-ceiling)\"/>\n  <!-- Linear Fluorescent Troffer Fixtures -->\n  <polygon points=\"260,0 280,0 355,145 345,145\" fill=\"#FFFFFF\" opacity=\"0.9\"/>\n  <polygon points=\"540,0 520,0 445,145 455,145\" fill=\"#FFFFFF\" opacity=\"0.9\"/>\n  <!-- Diffused light cone down center aisle -->\n  <polygon points=\"260,0 540,0 580,260 220,260\" fill=\"#FEF08A\" opacity=\"0.06\"/>\n\n  <!-- Distant Supermarket Back Wall & Refrigerated Coolers -->\n  <rect x=\"220\" y=\"70\" width=\"360\" height=\"140\" fill=\"#1E293B\"/>\n  <!-- Glowing Dairy / Drinks Display Coolers -->\n  <rect x=\"240\" y=\"90\" width=\"80\" height=\"100\" rx=\"4\" fill=\"#0284C7\" opacity=\"0.8\"/>\n  <rect x=\"244\" y=\"94\" width=\"72\" height=\"92\" fill=\"#0369A1\"/>\n  <line x1=\"280\" y1=\"94\" x2=\"280\" y2=\"186\" stroke=\"#38BDF8\" stroke-width=\"2\"/>\n  <line x1=\"244\" y1=\"120\" x2=\"316\" y2=\"120\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n  <line x1=\"244\" y1=\"150\" x2=\"316\" y2=\"150\" stroke=\"#BAE6FD\" stroke-width=\"1.5\"/>\n\n  <rect x=\"330\" y=\"90\" width=\"140\" height=\"100\" rx=\"4\" fill=\"#10B981\" opacity=\"0.8\"/>\n  <rect x=\"334\" y=\"94\" width=\"132\" height=\"92\" fill=\"#047857\"/>\n  <line x1=\"378\" y1=\"94\" x2=\"378\" y2=\"186\" stroke=\"#4ADE80\" stroke-width=\"2\"/>\n  <line x1=\"422\" y1=\"94\" x2=\"422\" y2=\"186\" stroke=\"#4ADE80\" stroke-width=\"2\"/>\n\n  <rect x=\"480\" y=\"90\" width=\"80\" height=\"100\" rx=\"4\" fill=\"#F59E0B\" opacity=\"0.8\"/>\n  <rect x=\"484\" y=\"94\" width=\"72\" height=\"92\" fill=\"#B45309\"/>\n\n  <!-- Aisle Category Overhead Hanging Sign -->\n  <g id=\"sm-aisle-sign\" filter=\"url(#sm-elem-shadow)\">\n    <line x1=\"380\" y1=\"20\" x2=\"380\" y2=\"50\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    <line x1=\"420\" y1=\"20\" x2=\"420\" y2=\"50\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    <rect x=\"360\" y=\"50\" width=\"80\" height=\"26\" rx=\"4\" fill=\"#2563EB\" stroke=\"#1D4ED8\" stroke-width=\"1.5\"/>\n    <circle cx=\"376\" cy=\"63\" r=\"8\" fill=\"#FFFFFF\"/>\n    <line x1=\"376\" y1=\"58\" x2=\"376\" y2=\"68\" stroke=\"#2563EB\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <line x1=\"392\" y1=\"60\" x2=\"430\" y2=\"60\" stroke=\"#FFFFFF\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <line x1=\"392\" y1=\"67\" x2=\"422\" y2=\"67\" stroke=\"#BAE6FD\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>\n  </g>\n\n  <!-- Supermarket High-Gloss Tile Floor (hs-t2-aisle at 384, 440) -->\n  <g id=\"sm-floor-group\">\n    <polygon points=\"0,210 800,210 800,500 0,500\" fill=\"url(#sm-floor)\"/>\n    <line x1=\"0\" y1=\"210\" x2=\"800\" y2=\"210\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <!-- Receding aisle tile perspective seams -->\n    <line x1=\"400\" y1=\"210\" x2=\"160\" y2=\"500\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <line x1=\"400\" y1=\"210\" x2=\"400\" y2=\"500\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <line x1=\"400\" y1=\"210\" x2=\"640\" y2=\"500\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <!-- Horizontal floor tile lines -->\n    <line x1=\"120\" y1=\"260\" x2=\"680\" y2=\"260\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <line x1=\"60\" y1=\"330\" x2=\"740\" y2=\"330\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <line x1=\"0\" y1=\"415\" x2=\"800\" y2=\"415\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <!-- Floor Specular Reflections -->\n    <ellipse cx=\"400\" cy=\"350\" rx=\"55\" ry=\"12\" fill=\"#FFFFFF\" opacity=\"0.25\"/>\n    <ellipse cx=\"400\" cy=\"450\" rx=\"90\" ry=\"18\" fill=\"#FFFFFF\" opacity=\"0.18\"/>\n  </g>\n\n  <!-- Left Side Supermarket Gondola Shelving (Receding in Perspective) -->\n  <g id=\"sm-left-shelves\">\n    <!-- Shelf frame -->\n    <polygon points=\"0,110 220,195 200,430 0,480\" fill=\"url(#sm-steel)\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n    <!-- Shelf 1 (Top) -->\n    <polygon points=\"0,185 205,235 200,243 0,195\" fill=\"#64748B\"/>\n    <!-- Boxes on Shelf 1 -->\n    <polygon points=\"10,135 45,150 45,188 10,175\" fill=\"#F43F5E\"/>\n    <polygon points=\"50,152 85,166 85,202 50,190\" fill=\"#FBBF24\"/>\n    <polygon points=\"90,168 125,180 125,215 90,204\" fill=\"#3B82F6\"/>\n    <polygon points=\"130,182 165,195 165,228 130,217\" fill=\"#10B981\"/>\n    <!-- Shelf 2 (Middle) -->\n    <polygon points=\"0,270 190,295 185,305 0,282\" fill=\"#64748B\"/>\n    <!-- Cans row on Shelf 2 -->\n    <rect x=\"20\" y=\"225\" width=\"22\" height=\"42\" rx=\"3\" fill=\"#E2E8F0\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n    <rect x=\"50\" y=\"235\" width=\"22\" height=\"40\" rx=\"3\" fill=\"#DC2626\" stroke=\"#991B1B\" stroke-width=\"1\"/>\n    <rect x=\"80\" y=\"245\" width=\"20\" height=\"38\" rx=\"3\" fill=\"#2563EB\" stroke=\"#1D4ED8\" stroke-width=\"1\"/>\n    <rect x=\"110\" y=\"255\" width=\"18\" height=\"35\" rx=\"3\" fill=\"#D97706\" stroke=\"#B45309\" stroke-width=\"1\"/>\n    <rect x=\"135\" y=\"262\" width=\"18\" height=\"32\" rx=\"3\" fill=\"#16A34A\" stroke=\"#15803D\" stroke-width=\"1\"/>\n    <!-- Shelf 3 (Lower) -->\n    <polygon points=\"0,360 175,360 170,372 0,375\" fill=\"#64748B\"/>\n    <!-- Large laundry detergent / family bottles -->\n    <rect x=\"15\" y=\"300\" width=\"35\" height=\"58\" rx=\"6\" fill=\"#0284C7\"/>\n    <rect x=\"58\" y=\"308\" width=\"32\" height=\"52\" rx=\"6\" fill=\"#F59E0B\"/>\n    <rect x=\"98\" y=\"315\" width=\"30\" height=\"45\" rx=\"6\" fill=\"#84CC16\"/>\n  </g>\n\n  <!-- Right Side Shelving Unit (Prominent Stocked Merchandise) (hs-t2-shelf at 656, 250) -->\n  <g id=\"sm-right-shelves\" filter=\"url(#sm-shadow)\">\n    <!-- Upright steel shelf posts -->\n    <rect x=\"560\" y=\"110\" width=\"230\" height=\"280\" fill=\"url(#sm-steel)\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n\n    <!-- Shelf Level 1 (Top: Glass Jars of Jam & Honey) (hs-t2-jar at 608, 220) -->\n    <rect x=\"555\" y=\"170\" width=\"245\" height=\"12\" rx=\"2\" fill=\"#CBD5E1\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <!-- Shelf price label channel (Yellow discount tags) -->\n    <rect x=\"565\" y=\"178\" width=\"32\" height=\"8\" rx=\"1.5\" fill=\"#FEF08A\" stroke=\"#EAB308\" stroke-width=\"0.8\"/>\n    <rect x=\"615\" y=\"178\" width=\"32\" height=\"8\" rx=\"1.5\" fill=\"#FEF08A\" stroke=\"#EAB308\" stroke-width=\"0.8\"/>\n    <rect x=\"665\" y=\"178\" width=\"32\" height=\"8\" rx=\"1.5\" fill=\"#FEF08A\" stroke=\"#EAB308\" stroke-width=\"0.8\"/>\n    <rect x=\"715\" y=\"178\" width=\"32\" height=\"8\" rx=\"1.5\" fill=\"#FEF08A\" stroke=\"#EAB308\" stroke-width=\"0.8\"/>\n\n    <!-- Jar 1 (Strawberry Jam - Red) -->\n    <rect x=\"575\" y=\"132\" width=\"24\" height=\"38\" rx=\"4\" fill=\"url(#sm-jam-red)\" stroke=\"#991B1B\" stroke-width=\"1\"/>\n    <ellipse cx=\"587\" cy=\"132\" rx=\"10\" ry=\"3.5\" fill=\"#FACC15\" stroke=\"#CA8A04\" stroke-width=\"1\"/>\n    <rect x=\"578\" y=\"145\" width=\"18\" height=\"15\" fill=\"#FFFFFF\" rx=\"1\"/>\n    <line x1=\"580\" y1=\"150\" x2=\"594\" y2=\"150\" stroke=\"#EF4444\" stroke-width=\"1.5\"/>\n\n    <!-- Jar 2 (Strawberry Jam) -->\n    <rect x=\"605\" y=\"132\" width=\"24\" height=\"38\" rx=\"4\" fill=\"url(#sm-jam-red)\" stroke=\"#991B1B\" stroke-width=\"1\"/>\n    <ellipse cx=\"617\" cy=\"132\" rx=\"10\" ry=\"3.5\" fill=\"#FACC15\" stroke=\"#CA8A04\" stroke-width=\"1\"/>\n    <rect x=\"608\" y=\"145\" width=\"18\" height=\"15\" fill=\"#FFFFFF\" rx=\"1\"/>\n\n    <!-- Jar 3 (Honey / Apricot - Amber) -->\n    <rect x=\"635\" y=\"132\" width=\"24\" height=\"38\" rx=\"4\" fill=\"url(#sm-honey-amber)\" stroke=\"#92400E\" stroke-width=\"1\"/>\n    <ellipse cx=\"647\" cy=\"132\" rx=\"10\" ry=\"3.5\" fill=\"#CBD5E1\" stroke=\"#64748B\" stroke-width=\"1\"/>\n    <rect x=\"638\" y=\"145\" width=\"18\" height=\"15\" fill=\"#FFFFFF\" rx=\"1\"/>\n    <line x1=\"640\" y1=\"150\" x2=\"654\" y2=\"150\" stroke=\"#F59E0B\" stroke-width=\"1.5\"/>\n\n    <!-- Jar 4 (Honey) -->\n    <rect x=\"665\" y=\"132\" width=\"24\" height=\"38\" rx=\"4\" fill=\"url(#sm-honey-amber)\" stroke=\"#92400E\" stroke-width=\"1\"/>\n    <ellipse cx=\"677\" cy=\"132\" rx=\"10\" ry=\"3.5\" fill=\"#CBD5E1\" stroke=\"#64748B\" stroke-width=\"1\"/>\n    <rect x=\"668\" y=\"145\" width=\"18\" height=\"15\" fill=\"#FFFFFF\" rx=\"1\"/>\n\n    <!-- Jar 5 (Pickles / Pesto - Green) -->\n    <rect x=\"695\" y=\"132\" width=\"24\" height=\"38\" rx=\"4\" fill=\"#15803D\" stroke=\"#166534\" stroke-width=\"1\"/>\n    <ellipse cx=\"707\" cy=\"132\" rx=\"10\" ry=\"3.5\" fill=\"#FACC15\"/>\n    <rect x=\"698\" y=\"145\" width=\"18\" height=\"15\" fill=\"#FFFFFF\"/>\n\n    <rect x=\"725\" y=\"132\" width=\"24\" height=\"38\" rx=\"4\" fill=\"#15803D\" stroke=\"#166534\" stroke-width=\"1\"/>\n    <ellipse cx=\"737\" cy=\"132\" rx=\"10\" ry=\"3.5\" fill=\"#FACC15\"/>\n\n    <!-- Shelf Level 2 (Middle: Packaged Merchandise & Snacks) (hs-t2-merchandise at 624, 210) -->\n    <rect x=\"555\" y=\"245\" width=\"245\" height=\"12\" rx=\"2\" fill=\"#CBD5E1\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <!-- Shelf price strip -->\n    <rect x=\"575\" y=\"253\" width=\"30\" height=\"8\" rx=\"1.5\" fill=\"#FEF08A\"/>\n    <rect x=\"630\" y=\"253\" width=\"30\" height=\"8\" rx=\"1.5\" fill=\"#FEF08A\"/>\n    <rect x=\"685\" y=\"253\" width=\"30\" height=\"8\" rx=\"1.5\" fill=\"#FEF08A\"/>\n\n    <!-- Snack bags / gourmet cereal packages -->\n    <polygon points=\"570,192 602,192 606,245 566,245\" fill=\"#F97316\" stroke=\"#C2410C\" stroke-width=\"1\"/>\n    <circle cx=\"586\" cy=\"214\" r=\"8\" fill=\"#FEF08A\"/>\n\n    <polygon points=\"610,192 642,192 646,245 606,245\" fill=\"#8B5CF6\" stroke=\"#6D28D9\" stroke-width=\"1\"/>\n    <circle cx=\"626\" cy=\"214\" r=\"8\" fill=\"#FFFFFF\"/>\n\n    <polygon points=\"650,192 682,192 686,245 646,245\" fill=\"#06B6D4\" stroke=\"#0891B2\" stroke-width=\"1\"/>\n    <circle cx=\"666\" cy=\"214\" r=\"8\" fill=\"#FEF08A\"/>\n\n    <polygon points=\"690,192 722,192 726,245 686,245\" fill=\"#10B981\" stroke=\"#059669\" stroke-width=\"1\"/>\n    <circle cx=\"706\" cy=\"214\" r=\"8\" fill=\"#FFFFFF\"/>\n\n    <polygon points=\"730,192 762,192 766,245 726,245\" fill=\"#EC4899\" stroke=\"#DB2777\" stroke-width=\"1\"/>\n\n    <!-- Shelf Level 3 (Lower: Beverage Bottles & Olive Oil) (hs-t2-bottle at 632, 290) -->\n    <rect x=\"555\" y=\"335\" width=\"245\" height=\"14\" rx=\"2\" fill=\"#CBD5E1\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <rect x=\"580\" y=\"345\" width=\"34\" height=\"8\" rx=\"1.5\" fill=\"#FEF08A\"/>\n    <rect x=\"640\" y=\"345\" width=\"34\" height=\"8\" rx=\"1.5\" fill=\"#FEF08A\"/>\n    <rect x=\"700\" y=\"345\" width=\"34\" height=\"8\" rx=\"1.5\" fill=\"#FEF08A\"/>\n\n    <!-- Bottle 1 (Green Olive Oil) -->\n    <rect x=\"572\" y=\"275\" width=\"22\" height=\"60\" rx=\"4\" fill=\"url(#sm-oil-green)\" stroke=\"#14532D\" stroke-width=\"1\"/>\n    <rect x=\"579\" y=\"262\" width=\"8\" height=\"15\" fill=\"url(#sm-oil-green)\"/>\n    <rect x=\"578\" y=\"259\" width=\"10\" height=\"4\" rx=\"1\" fill=\"#FACC15\"/>\n    <rect x=\"575\" y=\"290\" width=\"16\" height=\"24\" rx=\"1\" fill=\"#FEF9C3\"/>\n    <line x1=\"577\" y1=\"298\" x2=\"589\" y2=\"298\" stroke=\"#15803D\" stroke-width=\"1.5\"/>\n\n    <!-- Bottle 2 (Green Olive Oil) -->\n    <rect x=\"600\" y=\"275\" width=\"22\" height=\"60\" rx=\"4\" fill=\"url(#sm-oil-green)\" stroke=\"#14532D\" stroke-width=\"1\"/>\n    <rect x=\"607\" y=\"262\" width=\"8\" height=\"15\" fill=\"url(#sm-oil-green)\"/>\n    <rect x=\"606\" y=\"259\" width=\"10\" height=\"4\" rx=\"1\" fill=\"#FACC15\"/>\n    <rect x=\"603\" y=\"290\" width=\"16\" height=\"24\" rx=\"1\" fill=\"#FEF9C3\"/>\n\n    <!-- Bottle 3 (Amber Vinegar / Cider) -->\n    <rect x=\"628\" y=\"275\" width=\"22\" height=\"60\" rx=\"4\" fill=\"url(#sm-honey-amber)\" stroke=\"#92400E\" stroke-width=\"1\"/>\n    <rect x=\"635\" y=\"262\" width=\"8\" height=\"15\" fill=\"url(#sm-honey-amber)\"/>\n    <rect x=\"634\" y=\"259\" width=\"10\" height=\"4\" rx=\"1\" fill=\"#D97706\"/>\n    <rect x=\"631\" y=\"290\" width=\"16\" height=\"24\" rx=\"1\" fill=\"#FFFFFF\"/>\n\n    <!-- Bottle 4 (Amber Cider) -->\n    <rect x=\"656\" y=\"275\" width=\"22\" height=\"60\" rx=\"4\" fill=\"url(#sm-honey-amber)\" stroke=\"#92400E\" stroke-width=\"1\"/>\n    <rect x=\"663\" y=\"262\" width=\"8\" height=\"15\" fill=\"url(#sm-honey-amber)\"/>\n    <rect x=\"662\" y=\"259\" width=\"10\" height=\"4\" rx=\"1\" fill=\"#D97706\"/>\n    <rect x=\"659\" y=\"290\" width=\"16\" height=\"24\" rx=\"1\" fill=\"#FFFFFF\"/>\n\n    <!-- Bottle 5 (Deep Blue Mineral Water) -->\n    <rect x=\"684\" y=\"275\" width=\"22\" height=\"60\" rx=\"4\" fill=\"#0284C7\" stroke=\"#0369A1\" stroke-width=\"1\"/>\n    <rect x=\"691\" y=\"262\" width=\"8\" height=\"15\" fill=\"#0284C7\"/>\n    <rect x=\"690\" y=\"259\" width=\"10\" height=\"4\" rx=\"1\" fill=\"#38BDF8\"/>\n    <rect x=\"687\" y=\"290\" width=\"16\" height=\"24\" rx=\"1\" fill=\"#FFFFFF\"/>\n\n    <!-- Bottle 6 (Mineral Water) -->\n    <rect x=\"712\" y=\"275\" width=\"22\" height=\"60\" rx=\"4\" fill=\"#0284C7\" stroke=\"#0369A1\" stroke-width=\"1\"/>\n    <rect x=\"719\" y=\"262\" width=\"8\" height=\"15\" fill=\"#0284C7\"/>\n    <rect x=\"718\" y=\"259\" width=\"10\" height=\"4\" rx=\"1\" fill=\"#38BDF8\"/>\n    <rect x=\"715\" y=\"290\" width=\"16\" height=\"24\" rx=\"1\" fill=\"#FFFFFF\"/>\n  </g>\n\n  <!-- Customer Browsing & Reaching for an Item (hs-t2-browse at 416, 260; hs-t2-reach at 536, 225) -->\n  <g id=\"sm-customer\">\n    <!-- Shadow under customer -->\n    <ellipse cx=\"495\" cy=\"445\" rx=\"36\" ry=\"12\" fill=\"#0F172A\" opacity=\"0.3\"/>\n    <!-- Slim Jeans / Trousers (Dark Denim Blue) -->\n    <path d=\"M472 335 L476 438 L488 438 L496 350 L504 438 L516 438 L512 335 Z\" fill=\"#1E3A8A\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <!-- White Casual Sneakers with rubber soles -->\n    <polygon points=\"472,438 492,438 494,446 470,446\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1.2\"/>\n    <polygon points=\"502,438 522,438 524,446 500,446\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1.2\"/>\n\n    <!-- Coral / Mustard Cozy Knit Sweater -->\n    <path d=\"M468 245 C468 230, 515 230, 518 245 L514 340 L470 340 Z\" fill=\"#F97316\" stroke=\"#C2410C\" stroke-width=\"2\"/>\n    <!-- Shoulder Bag Strap -->\n    <path d=\"M474 235 Q485 275 496 320\" fill=\"none\" stroke=\"#78350F\" stroke-width=\"3\"/>\n    <!-- Crossbody Leather Handbag -->\n    <rect x=\"492\" y=\"305\" width=\"22\" height=\"20\" rx=\"3\" fill=\"#9A3412\" stroke=\"#7C2D12\" stroke-width=\"1.5\"/>\n\n    <!-- Neck -->\n    <rect x=\"488\" y=\"218\" width=\"12\" height=\"14\" fill=\"#FDBA74\"/>\n    <!-- Head & Profile facing right toward shelf -->\n    <ellipse cx=\"494\" cy=\"204\" rx=\"14\" ry=\"17\" fill=\"#FDBA74\"/>\n    <!-- Long Hair tied in Ponytail -->\n    <path d=\"M482 202 C480 180, 508 178, 508 198 C508 206, 504 214, 500 216 Z\" fill=\"#451A03\"/>\n    <path d=\"M480 200 Q465 210 460 225 Q468 225 480 208\" fill=\"#451A03\"/>\n    <!-- Profile Eye & Smile -->\n    <circle cx=\"502\" cy=\"202\" r=\"1.8\" fill=\"#0F172A\"/>\n    <path d=\"M502 210 Q505 212 502 214\" fill=\"none\" stroke=\"#9A3412\" stroke-width=\"1.2\"/>\n\n    <!-- Left Arm resting by side -->\n    <path d=\"M472 245 Q465 270 472 295\" fill=\"none\" stroke=\"#F97316\" stroke-width=\"11\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"474\" cy=\"298\" rx=\"5\" ry=\"4\" fill=\"#FDBA74\"/>\n\n    <!-- Right Arm REACHING UP TO SHELF (hs-t2-reach at 536, 225) -->\n    <!-- Arm extends up and right towards merchandise -->\n    <path d=\"M510 242 Q522 230 538 226\" fill=\"none\" stroke=\"#F97316\" stroke-width=\"11\" stroke-linecap=\"round\"/>\n    <!-- Gold bracelet on wrist -->\n    <circle cx=\"533\" cy=\"227\" r=\"4.5\" fill=\"none\" stroke=\"#FACC15\" stroke-width=\"2\"/>\n    <!-- Hand reaching & grasping jar from shelf -->\n    <ellipse cx=\"538\" cy=\"225\" rx=\"6\" ry=\"5\" fill=\"#FDBA74\"/>\n    <path d=\"M536 222 Q545 220 544 228\" fill=\"none\" stroke=\"#FDBA74\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  </g>\n\n  <!-- Shopping Cart in Foreground (hs-t2-cart at 320, 370) -->\n  <g id=\"sm-cart\" filter=\"url(#sm-shadow)\">\n    <!-- Cart Shadow on Floor -->\n    <ellipse cx=\"320\" cy=\"445\" rx=\"65\" ry=\"16\" fill=\"#0F172A\" opacity=\"0.35\"/>\n\n    <!-- Cart Frame Steel Tubes & Wheels -->\n    <path d=\"M265 425 L360 425 L375 350\" fill=\"none\" stroke=\"url(#sm-chrome)\" stroke-width=\"4.5\" stroke-linecap=\"round\"/>\n    <!-- 4 Swivel Wheels on Casters -->\n    <circle cx=\"270\" cy=\"436\" r=\"6.5\" fill=\"#334155\" stroke=\"#0F172A\" stroke-width=\"1.5\"/>\n    <circle cx=\"270\" cy=\"436\" r=\"2.5\" fill=\"#CBD5E1\"/>\n    <circle cx=\"355\" cy=\"436\" r=\"6.5\" fill=\"#334155\" stroke=\"#0F172A\" stroke-width=\"1.5\"/>\n    <circle cx=\"355\" cy=\"436\" r=\"2.5\" fill=\"#CBD5E1\"/>\n\n    <!-- Lower Tray / Bottom Wire Rack -->\n    <line x1=\"275\" y1=\"418\" x2=\"350\" y2=\"418\" stroke=\"#94A3B8\" stroke-width=\"2.5\"/>\n\n    <!-- Wire Mesh Basket Body in 3D Perspective -->\n    <polygon points=\"265,330 365,330 380,395 285,395\" fill=\"none\" stroke=\"url(#sm-chrome)\" stroke-width=\"3\"/>\n    <!-- Front Face of Basket -->\n    <polygon points=\"365,330 380,395 385,395 372,330\" fill=\"none\" stroke=\"url(#sm-chrome)\" stroke-width=\"2.5\"/>\n\n    <!-- Basket Wire Grid Lines (Horizontal & Vertical) -->\n    <line x1=\"270\" y1=\"345\" x2=\"368\" y2=\"345\" stroke=\"#94A3B8\" stroke-width=\"1.8\"/>\n    <line x1=\"275\" y1=\"360\" x2=\"372\" y2=\"360\" stroke=\"#94A3B8\" stroke-width=\"1.8\"/>\n    <line x1=\"280\" y1=\"375\" x2=\"376\" y2=\"375\" stroke=\"#94A3B8\" stroke-width=\"1.8\"/>\n    <line x1=\"285\" y1=\"390\" x2=\"380\" y2=\"390\" stroke=\"#94A3B8\" stroke-width=\"1.8\"/>\n\n    <line x1=\"285\" y1=\"330\" x2=\"295\" y2=\"395\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <line x1=\"305\" y1=\"330\" x2=\"315\" y2=\"395\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <line x1=\"325\" y1=\"330\" x2=\"335\" y2=\"395\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <line x1=\"345\" y1=\"330\" x2=\"355\" y2=\"395\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n\n    <!-- Groceries Stored Inside the Cart -->\n    <!-- Fresh Crispy French Baguette peaking out of paper bag -->\n    <polygon points=\"290,295 305,295 320,360 300,360\" fill=\"#D97706\" stroke=\"#92400E\" stroke-width=\"1.5\"/>\n    <line x1=\"294\" y1=\"305\" x2=\"302\" y2=\"305\" stroke=\"#78350F\" stroke-width=\"1.5\"/>\n    <line x1=\"297\" y1=\"318\" x2=\"306\" y2=\"318\" stroke=\"#78350F\" stroke-width=\"1.5\"/>\n    <polygon points=\"295,335 325,335 328,370 295,370\" fill=\"#C2884A\" stroke=\"#9A622A\" stroke-width=\"1\"/>\n\n    <!-- Fresh Green Celery / Leek Stalks -->\n    <path d=\"M315 310 Q325 325 330 365\" fill=\"none\" stroke=\"#16A34A\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n    <path d=\"M322 305 Q330 325 336 365\" fill=\"none\" stroke=\"#22C55E\" stroke-width=\"4.5\" stroke-linecap=\"round\"/>\n\n    <!-- Red Cereal Box -->\n    <polygon points=\"335,320 365,325 365,370 335,365\" fill=\"#EF4444\" stroke=\"#DC2626\" stroke-width=\"1\"/>\n    <circle cx=\"350\" cy=\"340\" r=\"6\" fill=\"#FEF08A\"/>\n\n    <!-- Milk / Juice Carton -->\n    <polygon points=\"275,340 295,340 295,380 275,380\" fill=\"#0284C7\" stroke=\"#0369A1\" stroke-width=\"1\"/>\n    <polygon points=\"275,340 285,332 295,340\" fill=\"#38BDF8\"/>\n\n    <!-- Red Ergonomic Cart Handle with Hand Grips -->\n    <rect x=\"250\" y=\"325\" width=\"22\" height=\"7\" rx=\"3.5\" fill=\"#EF4444\" stroke=\"#DC2626\" stroke-width=\"1\"/>\n    <line x1=\"255\" y1=\"328\" x2=\"265\" y2=\"370\" stroke=\"url(#sm-chrome)\" stroke-width=\"4\"/>\n  </g>\n</svg>",
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
        "svg": "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" class=\"part1-svg-art\">\n  <defs>\n    <!-- Café ambiance wall & tile -->\n    <linearGradient id=\"c-wall\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#334155\"/>\n      <stop offset=\"100%\" stop-color=\"#1E293B\"/>\n    </linearGradient>\n\n    <!-- Terrazzo / Natural Oak Counter gradient -->\n    <linearGradient id=\"c-counter\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#D7A15C\"/>\n      <stop offset=\"40%\" stop-color=\"#E2B176\"/>\n      <stop offset=\"80%\" stop-color=\"#B87B39\"/>\n      <stop offset=\"100%\" stop-color=\"#9A622A\"/>\n    </linearGradient>\n\n    <!-- Stainless steel espresso machine -->\n    <linearGradient id=\"c-chrome\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#94A3B8\"/>\n      <stop offset=\"30%\" stop-color=\"#F1F5F9\"/>\n      <stop offset=\"70%\" stop-color=\"#CBD5E1\"/>\n      <stop offset=\"100%\" stop-color=\"#64748B\"/>\n    </linearGradient>\n\n    <!-- Glass display case sheen -->\n    <linearGradient id=\"c-glass\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#FFFFFF\" stop-opacity=\"0.5\"/>\n      <stop offset=\"40%\" stop-color=\"#FFFFFF\" stop-opacity=\"0.1\"/>\n      <stop offset=\"100%\" stop-color=\"#BAE6FD\" stop-opacity=\"0.2\"/>\n    </linearGradient>\n\n    <!-- Porcelain coffee mug -->\n    <linearGradient id=\"c-mug-blue\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#0284C7\"/>\n      <stop offset=\"50%\" stop-color=\"#38BDF8\"/>\n      <stop offset=\"100%\" stop-color=\"#0369A1\"/>\n    </linearGradient>\n\n    <!-- Shadows -->\n    <filter id=\"c-shadow\" x=\"-10%\" y=\"-10%\" width=\"125%\" height=\"125%\">\n      <feDropShadow dx=\"0\" dy=\"6\" stdDeviation=\"8\" flood-color=\"#0F172A\" flood-opacity=\"0.25\"/>\n    </filter>\n    <filter id=\"c-elem-shadow\" x=\"-8%\" y=\"-8%\" width=\"120%\" height=\"120%\">\n      <feDropShadow dx=\"0\" dy=\"3\" stdDeviation=\"4\" flood-color=\"#0F172A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n\n  <!-- Café Dark Background Wall with Subway Tile Pattern -->\n  <rect x=\"0\" y=\"0\" width=\"800\" height=\"360\" fill=\"url(#c-wall)\"/>\n  <!-- Subway Tile Seams -->\n  <line x1=\"0\" y1=\"40\" x2=\"800\" y2=\"40\" stroke=\"#475569\" stroke-width=\"1\" opacity=\"0.4\"/>\n  <line x1=\"0\" y1=\"80\" x2=\"800\" y2=\"80\" stroke=\"#475569\" stroke-width=\"1\" opacity=\"0.4\"/>\n  <line x1=\"0\" y1=\"120\" x2=\"800\" y2=\"120\" stroke=\"#475569\" stroke-width=\"1\" opacity=\"0.4\"/>\n  <line x1=\"0\" y1=\"160\" x2=\"800\" y2=\"160\" stroke=\"#475569\" stroke-width=\"1\" opacity=\"0.4\"/>\n\n  <!-- Back Chalkboard Menu Board (Center-Right) -->\n  <g id=\"c-menu-board\" filter=\"url(#c-elem-shadow)\">\n    <rect x=\"420\" y=\"30\" width=\"220\" height=\"110\" rx=\"4\" fill=\"#0F172A\" stroke=\"#B45309\" stroke-width=\"3\"/>\n    <!-- Menu Title -->\n    <line x1=\"480\" y1=\"45\" x2=\"580\" y2=\"45\" stroke=\"#FEF08A\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    <!-- Menu items with prices -->\n    <line x1=\"435\" y1=\"62\" x2=\"500\" y2=\"62\" stroke=\"#FFFFFF\" stroke-width=\"2\"/>\n    <line x1=\"605\" y1=\"62\" x2=\"625\" y2=\"62\" stroke=\"#FEF08A\" stroke-width=\"2\"/>\n\n    <line x1=\"435\" y1=\"78\" x2=\"515\" y2=\"78\" stroke=\"#FFFFFF\" stroke-width=\"2\"/>\n    <line x1=\"605\" y1=\"78\" x2=\"625\" y2=\"78\" stroke=\"#FEF08A\" stroke-width=\"2\"/>\n\n    <line x1=\"435\" y1=\"94\" x2=\"490\" y2=\"94\" stroke=\"#FFFFFF\" stroke-width=\"2\"/>\n    <line x1=\"605\" y1=\"94\" x2=\"625\" y2=\"94\" stroke=\"#FEF08A\" stroke-width=\"2\"/>\n\n    <line x1=\"435\" y1=\"110\" x2=\"520\" y2=\"110\" stroke=\"#FFFFFF\" stroke-width=\"2\"/>\n    <line x1=\"605\" y1=\"110\" x2=\"625\" y2=\"110\" stroke=\"#FEF08A\" stroke-width=\"2\"/>\n\n    <line x1=\"435\" y1=\"126\" x2=\"505\" y2=\"126\" stroke=\"#FFFFFF\" stroke-width=\"2\"/>\n    <line x1=\"605\" y1=\"126\" x2=\"625\" y2=\"126\" stroke=\"#FEF08A\" stroke-width=\"2\"/>\n  </g>\n\n  <!-- Commercial Stainless Steel Espresso Machine on Back Counter -->\n  <g id=\"c-espresso-machine\" filter=\"url(#c-elem-shadow)\">\n    <rect x=\"660\" y=\"90\" width=\"125\" height=\"100\" rx=\"4\" fill=\"url(#c-chrome)\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <!-- Top cup warmer rack with ceramic mugs -->\n    <rect x=\"665\" y=\"82\" width=\"115\" height=\"10\" rx=\"2\" fill=\"#475569\"/>\n    <rect x=\"675\" y=\"72\" width=\"16\" height=\"12\" rx=\"2\" fill=\"#FFFFFF\"/>\n    <rect x=\"698\" y=\"72\" width=\"16\" height=\"12\" rx=\"2\" fill=\"#EF4444\"/>\n    <rect x=\"722\" y=\"72\" width=\"16\" height=\"12\" rx=\"2\" fill=\"#3B82F6\"/>\n    <rect x=\"746\" y=\"72\" width=\"16\" height=\"12\" rx=\"2\" fill=\"#F59E0B\"/>\n    <!-- Pressure gauges -->\n    <circle cx=\"685\" cy=\"115\" r=\"8\" fill=\"#FFFFFF\" stroke=\"#0F172A\" stroke-width=\"1.5\"/>\n    <line x1=\"685\" y1=\"115\" x2=\"689\" y2=\"111\" stroke=\"#EF4444\" stroke-width=\"1.5\"/>\n    <circle cx=\"708\" cy=\"115\" r=\"8\" fill=\"#FFFFFF\" stroke=\"#0F172A\" stroke-width=\"1.5\"/>\n    <line x1=\"708\" y1=\"115\" x2=\"713\" y2=\"112\" stroke=\"#EF4444\" stroke-width=\"1.5\"/>\n    <!-- Dual group heads with portafilters -->\n    <rect x=\"726\" y=\"110\" width=\"18\" height=\"22\" rx=\"2\" fill=\"#1E293B\"/>\n    <line x1=\"735\" y1=\"130\" x2=\"746\" y2=\"142\" stroke=\"#0F172A\" stroke-width=\"4.5\" stroke-linecap=\"round\"/>\n    <rect x=\"754\" y=\"110\" width=\"18\" height=\"22\" rx=\"2\" fill=\"#1E293B\"/>\n    <line x1=\"763\" y1=\"130\" x2=\"774\" y2=\"142\" stroke=\"#0F172A\" stroke-width=\"4.5\" stroke-linecap=\"round\"/>\n    <!-- Drip tray -->\n    <rect x=\"665\" y=\"172\" width=\"115\" height=\"14\" rx=\"2\" fill=\"#1E293B\"/>\n    <!-- Delicate steam curling from steam wand -->\n    <path d=\"M720 145 Q715 135 722 125 Q728 115 720 102\" fill=\"none\" stroke=\"#E2E8F0\" stroke-width=\"2\" stroke-linecap=\"round\" opacity=\"0.6\"/>\n  </g>\n\n  <!-- Café Wooden Floor -->\n  <g id=\"c-floor\">\n    <rect x=\"0\" y=\"340\" width=\"800\" height=\"160\" fill=\"#475569\"/>\n    <line x1=\"0\" y1=\"340\" x2=\"800\" y2=\"340\" stroke=\"#1E293B\" stroke-width=\"4\"/>\n    <line x1=\"0\" y1=\"390\" x2=\"800\" y2=\"390\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n    <line x1=\"0\" y1=\"440\" x2=\"800\" y2=\"440\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n    <!-- Floor shadows -->\n    <ellipse cx=\"110\" cy=\"455\" rx=\"45\" ry=\"14\" fill=\"#0F172A\" opacity=\"0.35\"/>\n    <ellipse cx=\"580\" cy=\"460\" rx=\"160\" ry=\"24\" fill=\"#0F172A\" opacity=\"0.3\"/>\n  </g>\n\n  <!-- Left Side: Café Staff Wiping Table Clean (hs-t2c-wipe at 112, 310) -->\n  <g id=\"t2c-cleaner\">\n    <!-- Round Café Bistro Table with Cast Iron Base -->\n    <ellipse cx=\"112\" cy=\"445\" rx=\"36\" ry=\"10\" fill=\"#0F172A\"/>\n    <rect x=\"108\" y=\"350\" width=\"8\" height=\"95\" fill=\"#1E293B\"/>\n    <!-- Tabletop Round Surface in Perspective -->\n    <ellipse cx=\"112\" cy=\"350\" rx=\"65\" ry=\"20\" fill=\"#E2E8F0\" stroke=\"#CBD5E1\" stroke-width=\"2\"/>\n    <ellipse cx=\"112\" cy=\"350\" rx=\"60\" ry=\"17\" fill=\"#F8FAFC\"/>\n\n    <!-- Staff Member Bending to Wipe Table with Cloth -->\n    <!-- Dark slacks -->\n    <path d=\"M152 355 L160 445 L174 445 L176 360 L188 445 L202 445 L195 350 Z\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <polygon points=\"156,445 176,445 178,454 154,454\" fill=\"#0F172A\"/>\n    <polygon points=\"184,445 204,445 206,454 182,454\" fill=\"#0F172A\"/>\n\n    <!-- Barista Apron & Torso bending forward -->\n    <path d=\"M148 265 C148 245, 192 245, 192 265 L186 355 L150 355 Z\" fill=\"#047857\" stroke=\"#064E3B\" stroke-width=\"2\"/>\n    <!-- White shirt sleeves -->\n    <rect x=\"156\" y=\"240\" width=\"28\" height=\"25\" fill=\"#FFFFFF\"/>\n    <!-- Head & Hair (Tilted down focused on table) -->\n    <ellipse cx=\"168\" cy=\"225\" rx=\"13\" ry=\"15\" fill=\"#FDBA74\"/>\n    <path d=\"M156 222 C154 205, 180 205, 180 220 Z\" fill=\"#451A03\"/>\n\n    <!-- Arm Bending Down to Table Surface (hs-t2c-wipe at 112, 310) -->\n    <path d=\"M152 265 Q135 295 120 335\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"10\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"118\" cy=\"338\" rx=\"6\" ry=\"5\" fill=\"#FDBA74\"/>\n    <!-- White Microfiber Wiping Cloth in Hand on Table Surface -->\n    <ellipse cx=\"112\" cy=\"342\" rx=\"14\" ry=\"7\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1.5\"/>\n    <path d=\"M104 340 Q112 334 122 342\" fill=\"none\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n  </g>\n\n  <!-- Left Glass Pastry Display Case with Cakes (hs-t2c-cake at 336, 250) -->\n  <g id=\"t2c-pastry\" filter=\"url(#c-shadow)\">\n    <!-- Base counter support under display case -->\n    <rect x=\"235\" y=\"280\" width=\"180\" height=\"150\" fill=\"#334155\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n\n    <!-- Curved Glass Display Cabinet Shell -->\n    <path d=\"M235 280 L235 195 Q280 180 395 180 L415 180 L415 280 Z\" fill=\"url(#c-glass)\" stroke=\"#94A3B8\" stroke-width=\"2.5\"/>\n\n    <!-- Internal Glass Shelves -->\n    <line x1=\"242\" y1=\"235\" x2=\"408\" y2=\"235\" stroke=\"#FFFFFF\" stroke-width=\"3\" opacity=\"0.8\"/>\n    <line x1=\"242\" y1=\"275\" x2=\"408\" y2=\"275\" stroke=\"#FFFFFF\" stroke-width=\"3\" opacity=\"0.8\"/>\n\n    <!-- Pastry Tier 1 (Top Shelf): Glazed Strawberry Cheesecake Slices -->\n    <!-- Cake Slice 1 -->\n    <polygon points=\"255,230 285,225 295,232 265,237\" fill=\"#FEF08A\" stroke=\"#EAB308\" stroke-width=\"1\"/>\n    <!-- Red strawberry glaze top -->\n    <polygon points=\"255,225 285,220 295,227 265,232\" fill=\"#EF4444\"/>\n    <circle cx=\"270\" cy=\"222\" r=\"3\" fill=\"#DC2626\"/>\n\n    <!-- Cake Slice 2 -->\n    <polygon points=\"305,230 335,225 345,232 315,237\" fill=\"#FEF08A\" stroke=\"#EAB308\" stroke-width=\"1\"/>\n    <polygon points=\"305,225 335,220 345,227 315,232\" fill=\"#EF4444\"/>\n    <circle cx=\"320\" cy=\"222\" r=\"3\" fill=\"#DC2626\"/>\n\n    <!-- Chocolate Decadence Round Cake -->\n    <ellipse cx=\"380\" cy=\"226\" rx=\"18\" ry=\"6\" fill=\"#451A03\" stroke=\"#290E02\" stroke-width=\"1\"/>\n    <path d=\"M362 226 L362 232 C362 236, 398 236, 398 232 L398 226 Z\" fill=\"#451A03\"/>\n    <circle cx=\"380\" cy=\"224\" r=\"3\" fill=\"#F8FAFC\"/>\n\n    <!-- Pastry Tier 2 (Bottom Shelf): Golden Croissants & Blueberry Muffins -->\n    <!-- Croissant 1 -->\n    <ellipse cx=\"265\" cy=\"270\" rx=\"16\" ry=\"6\" fill=\"#D97706\" stroke=\"#92400E\" stroke-width=\"1\" transform=\"rotate(-15 265 270)\"/>\n    <line x1=\"256\" y1=\"268\" x2=\"274\" y2=\"268\" stroke=\"#78350F\" stroke-width=\"1.5\"/>\n\n    <!-- Croissant 2 -->\n    <ellipse cx=\"305\" cy=\"270\" rx=\"16\" ry=\"6\" fill=\"#D97706\" stroke=\"#92400E\" stroke-width=\"1\" transform=\"rotate(10 305 270)\"/>\n    <line x1=\"296\" y1=\"268\" x2=\"314\" y2=\"268\" stroke=\"#78350F\" stroke-width=\"1.5\"/>\n\n    <!-- Blueberry Muffin in paper cup -->\n    <polygon points=\"345,264 365,264 362,274 348,274\" fill=\"#FEF08A\" stroke=\"#CA8A04\" stroke-width=\"1\"/>\n    <ellipse cx=\"355\" cy=\"262\" rx=\"11\" ry=\"6\" fill=\"#B45309\"/>\n    <circle cx=\"352\" cy=\"261\" r=\"1.5\" fill=\"#1E3A8A\"/>\n    <circle cx=\"358\" cy=\"263\" r=\"1.5\" fill=\"#1E3A8A\"/>\n\n    <!-- Second Muffin -->\n    <polygon points=\"375,264 395,264 392,274 378,274\" fill=\"#FEF08A\" stroke=\"#CA8A04\" stroke-width=\"1\"/>\n    <ellipse cx=\"385\" cy=\"262\" rx=\"11\" ry=\"6\" fill=\"#B45309\"/>\n\n    <!-- Glass Highlights Reflection -->\n    <polygon points=\"235,195 285,182 250,280 235,280\" fill=\"#FFFFFF\" opacity=\"0.25\"/>\n  </g>\n\n  <!-- Large Cashier / Service Counter (hs-t2c-counter at 496, 290) -->\n  <g id=\"t2c-counter\" filter=\"url(#c-shadow)\">\n    <!-- Counter Front Wooden Panel with Modern Vertical Slats -->\n    <rect x=\"415\" y=\"275\" width=\"375\" height=\"175\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <rect x=\"430\" y=\"290\" width=\"10\" height=\"150\" fill=\"#334155\" rx=\"2\"/>\n    <rect x=\"455\" y=\"290\" width=\"10\" height=\"150\" fill=\"#334155\" rx=\"2\"/>\n    <rect x=\"480\" y=\"290\" width=\"10\" height=\"150\" fill=\"#334155\" rx=\"2\"/>\n    <rect x=\"505\" y=\"290\" width=\"10\" height=\"150\" fill=\"#334155\" rx=\"2\"/>\n    <rect x=\"530\" y=\"290\" width=\"10\" height=\"150\" fill=\"#334155\" rx=\"2\"/>\n    <rect x=\"555\" y=\"290\" width=\"10\" height=\"150\" fill=\"#334155\" rx=\"2\"/>\n    <rect x=\"580\" y=\"290\" width=\"10\" height=\"150\" fill=\"#334155\" rx=\"2\"/>\n    <rect x=\"605\" y=\"290\" width=\"10\" height=\"150\" fill=\"#334155\" rx=\"2\"/>\n    <rect x=\"630\" y=\"290\" width=\"10\" height=\"150\" fill=\"#334155\" rx=\"2\"/>\n    <rect x=\"655\" y=\"290\" width=\"10\" height=\"150\" fill=\"#334155\" rx=\"2\"/>\n\n    <!-- Countertop Thick Oak Slab -->\n    <polygon points=\"410,255 790,255 790,278 410,278\" fill=\"url(#c-counter)\" stroke=\"#78350F\" stroke-width=\"2\"/>\n    <line x1=\"410\" y1=\"262\" x2=\"790\" y2=\"262\" stroke=\"#FFFFFF\" stroke-width=\"1.5\" opacity=\"0.3\"/>\n  </g>\n\n  <!-- Friendly Barista / Cashier Behind Counter (hs-t2c-cashier at 448, 210) -->\n  <g id=\"t2c-cashier\">\n    <!-- Body in Green Apron & Black Polo Shirt -->\n    <path d=\"M430 255 C430 220, 468 220, 472 255 Z\" fill=\"#047857\" stroke=\"#064E3B\" stroke-width=\"2\"/>\n    <!-- Black polo collar -->\n    <polygon points=\"446,220 452,238 458,220\" fill=\"#0F172A\"/>\n    <!-- Neck -->\n    <rect x=\"447\" y=\"210\" width=\"10\" height=\"12\" fill=\"#FDBA74\"/>\n    <!-- Head & Smiling Face Profile -->\n    <ellipse cx=\"452\" cy=\"198\" rx=\"13\" ry=\"15\" fill=\"#FDBA74\"/>\n    <!-- Stylish Dark Hair with Café Visor / Cap -->\n    <path d=\"M440 196 C438 180, 464 178, 464 195 Z\" fill=\"#1E293B\"/>\n    <polygon points=\"445,188 472,185 464,192 445,192\" fill=\"#0F172A\"/>\n    <!-- Friendly smiling eye & mouth -->\n    <circle cx=\"458\" cy=\"196\" r=\"1.6\" fill=\"#0F172A\"/>\n    <path d=\"M456 204 Q460 207 457 209\" fill=\"none\" stroke=\"#9A3412\" stroke-width=\"1.2\"/>\n\n    <!-- Right Arm Operating POS Screen -->\n    <path d=\"M465 240 Q478 245 492 248\" fill=\"none\" stroke=\"#0F172A\" stroke-width=\"8\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"494\" cy=\"249\" rx=\"4.5\" ry=\"3.5\" fill=\"#FDBA74\"/>\n  </g>\n\n  <!-- Modern Touchscreen POS Checkout Terminal & Card Reader (hs-t2c-pay at 576, 275) -->\n  <g id=\"c-pos-system\" filter=\"url(#c-elem-shadow)\">\n    <!-- POS Terminal Pedestal Base -->\n    <rect x=\"495\" y=\"245\" width=\"8\" height=\"25\" fill=\"#334155\"/>\n    <ellipse cx=\"499\" cy=\"268\" rx=\"14\" ry=\"4\" fill=\"#1E293B\"/>\n\n    <!-- Cashier-Facing Touch Screen -->\n    <polygon points=\"488,212 516,212 512,246 484,246\" fill=\"#0F172A\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <polygon points=\"490,214 514,214 510,244 486,244\" fill=\"#0284C7\"/>\n    <rect x=\"492\" y=\"218\" width=\"8\" height=\"6\" fill=\"#FFFFFF\"/>\n    <rect x=\"502\" y=\"218\" width=\"8\" height=\"6\" fill=\"#FFFFFF\"/>\n    <rect x=\"492\" y=\"226\" width=\"8\" height=\"6\" fill=\"#FFFFFF\"/>\n    <rect x=\"502\" y=\"226\" width=\"8\" height=\"6\" fill=\"#10B981\"/>\n\n    <!-- Customer-Facing Contactless Payment Terminal / Card Reader (hs-t2c-pay at 576, 275) -->\n    <rect x=\"548\" y=\"254\" width=\"28\" height=\"18\" rx=\"3\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"1.5\" transform=\"rotate(-15 548 254)\"/>\n    <rect x=\"550\" y=\"256\" width=\"22\" height=\"8\" rx=\"1\" fill=\"#10B981\" opacity=\"0.8\" transform=\"rotate(-15 548 254)\"/>\n    <!-- Contactless wave symbol -->\n    <path d=\"M565 264 Q567 266 565 268\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"1\"/>\n  </g>\n\n  <!-- Customer Paying for Order with Credit Card (hs-t2c-pay at 576, 275) -->\n  <g id=\"t2c-customer\">\n    <!-- Customer Arm extending forward to tap credit card onto terminal -->\n    <path d=\"M625 285 Q600 278 576 270\" fill=\"none\" stroke=\"#3B82F6\" stroke-width=\"12\" stroke-linecap=\"round\"/>\n    <!-- White shirt cuff -->\n    <line x1=\"582\" y1=\"272\" x2=\"580\" y2=\"267\" stroke=\"#FFFFFF\" stroke-width=\"3\"/>\n    <!-- Hand holding credit card -->\n    <ellipse cx=\"575\" cy=\"268\" rx=\"5\" ry=\"4\" fill=\"#FDBA74\"/>\n    <!-- Gold / Navy Credit Card Tapping Reader -->\n    <polygon points=\"562,260 578,255 582,266 566,271\" fill=\"#F59E0B\" stroke=\"#D97706\" stroke-width=\"1\"/>\n    <line x1=\"565\" y1=\"264\" x2=\"578\" y2=\"260\" stroke=\"#0F172A\" stroke-width=\"1.5\"/>\n\n    <!-- Customer Standing Figure (Right edge) -->\n    <path d=\"M620 330 C620 250, 660 235, 685 235 L685 360 L620 360 Z\" fill=\"#1E40AF\"/>\n    <ellipse cx=\"665\" cy=\"210\" rx=\"15\" ry=\"18\" fill=\"#FDBA74\"/>\n    <path d=\"M652 205 C650 185, 680 185, 680 205 Z\" fill=\"#1E293B\"/>\n  </g>\n\n  <!-- Wooden Serving Tray with Order Items (hs-t2c-tray at 616, 280) -->\n  <g id=\"t2c-serving-tray\" filter=\"url(#c-elem-shadow)\">\n    <!-- Natural Bamboo Tray -->\n    <polygon points=\"585,268 675,268 685,290 575,290\" fill=\"#D7A15C\" stroke=\"#A16207\" stroke-width=\"1.5\"/>\n    <polygon points=\"587,270 673,270 681,288 579,288\" fill=\"#FEF3C7\"/>\n\n    <!-- Ceramic Coffee Mug with Latte Art (hs-t2c-mug at 584, 260) -->\n    <g id=\"t2c-mug-item\">\n      <!-- Mug Body -->\n      <path d=\"M592 255 L594 274 C594 278, 614 278, 614 274 L616 255 Z\" fill=\"url(#c-mug-blue)\" stroke=\"#0369A1\" stroke-width=\"1.2\"/>\n      <ellipse cx=\"604\" cy=\"255\" rx=\"12\" ry=\"4.5\" fill=\"#451A03\" stroke=\"#0369A1\" stroke-width=\"1\"/>\n      <!-- Creamy white latte art foam heart -->\n      <ellipse cx=\"604\" cy=\"255\" rx=\"7\" ry=\"2.5\" fill=\"#FFFFFF\"/>\n      <polygon points=\"602,256 606,256 604,258\" fill=\"#FFFFFF\"/>\n      <!-- Mug handle -->\n      <path d=\"M615 258 Q624 262 615 270\" fill=\"none\" stroke=\"#0369A1\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n      <!-- Steam puff -->\n      <path d=\"M602 248 Q599 240 605 234\" fill=\"none\" stroke=\"#94A3B8\" stroke-width=\"1.2\" opacity=\"0.6\"/>\n    </g>\n\n    <!-- Glass Bottled Beverage / Cold Brew (hs-t2c-beverage at 624, 260) -->\n    <g id=\"t2c-bottle-item\">\n      <rect x=\"635\" y=\"248\" width=\"16\" height=\"34\" rx=\"3\" fill=\"#D97706\" stroke=\"#92400E\" stroke-width=\"1\"/>\n      <rect x=\"639\" y=\"240\" width=\"8\" height=\"9\" fill=\"#D97706\"/>\n      <rect x=\"638\" y=\"238\" width=\"10\" height=\"3\" rx=\"1\" fill=\"#FACC15\"/>\n      <rect x=\"636\" y=\"258\" width=\"14\" height=\"15\" fill=\"#FFFFFF\"/>\n      <line x1=\"638\" y1=\"264\" x2=\"648\" y2=\"264\" stroke=\"#D97706\" stroke-width=\"1.5\"/>\n    </g>\n\n    <!-- Fresh Pastry on Plate on Tray -->\n    <ellipse cx=\"664\" cy=\"276\" rx=\"12\" ry=\"5\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1\"/>\n    <ellipse cx=\"664\" cy=\"275\" rx=\"8\" ry=\"3.5\" fill=\"#D97706\"/>\n  </g>\n</svg>",
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
        "svg": "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" class=\"part1-svg-art\">\n  <defs>\n    <!-- Romantic restaurant moody wall gradient -->\n    <linearGradient id=\"r-wall\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#1E293B\"/>\n      <stop offset=\"50%\" stop-color=\"#0F172A\"/>\n      <stop offset=\"100%\" stop-color=\"#020617\"/>\n    </linearGradient>\n\n    <!-- Dark Walnut Wall Wainscoting -->\n    <linearGradient id=\"r-wood-panel\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#451A03\"/>\n      <stop offset=\"50%\" stop-color=\"#78350F\"/>\n      <stop offset=\"100%\" stop-color=\"#3A1C06\"/>\n    </linearGradient>\n\n    <!-- Hardwood Parquet Dining Floor -->\n    <linearGradient id=\"r-parquet\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#78350F\"/>\n      <stop offset=\"50%\" stop-color=\"#582D0C\"/>\n      <stop offset=\"100%\" stop-color=\"#3A1C06\"/>\n    </linearGradient>\n\n    <!-- Sconce warm radial glow -->\n    <radialGradient id=\"r-sconce-glow\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n      <stop offset=\"0%\" stop-color=\"#FEF08A\" stop-opacity=\"0.8\"/>\n      <stop offset=\"40%\" stop-color=\"#FDE047\" stop-opacity=\"0.3\"/>\n      <stop offset=\"100%\" stop-color=\"#FEF08A\" stop-opacity=\"0\"/>\n    </radialGradient>\n\n    <!-- Crisp Linen Tablecloth gradient -->\n    <linearGradient id=\"r-cloth\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#FFFFFF\"/>\n      <stop offset=\"70%\" stop-color=\"#F8FAFC\"/>\n      <stop offset=\"100%\" stop-color=\"#E2E8F0\"/>\n    </linearGradient>\n\n    <!-- Silverware polished chrome gradient -->\n    <linearGradient id=\"r-silver\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#94A3B8\"/>\n      <stop offset=\"50%\" stop-color=\"#FFFFFF\"/>\n      <stop offset=\"100%\" stop-color=\"#64748B\"/>\n    </linearGradient>\n\n    <!-- Wine in crystal glass -->\n    <linearGradient id=\"r-wine\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#DC2626\"/>\n      <stop offset=\"100%\" stop-color=\"#7F1D1D\"/>\n    </linearGradient>\n\n    <!-- Shadows -->\n    <filter id=\"r-shadow\" x=\"-10%\" y=\"-10%\" width=\"125%\" height=\"125%\">\n      <feDropShadow dx=\"0\" dy=\"8\" stdDeviation=\"10\" flood-color=\"#020617\" flood-opacity=\"0.35\"/>\n    </filter>\n    <filter id=\"r-elem-shadow\" x=\"-8%\" y=\"-8%\" width=\"120%\" height=\"120%\">\n      <feDropShadow dx=\"0\" dy=\"4\" stdDeviation=\"5\" flood-color=\"#020617\" flood-opacity=\"0.25\"/>\n    </filter>\n  </defs>\n\n  <!-- Wall Background -->\n  <rect x=\"0\" y=\"0\" width=\"800\" height=\"360\" fill=\"url(#r-wall)\"/>\n\n  <!-- Upper Wall Paneling & Decorative Molding -->\n  <rect x=\"0\" y=\"0\" width=\"800\" height=\"40\" fill=\"url(#r-wood-panel)\"/>\n  <line x1=\"0\" y1=\"40\" x2=\"800\" y2=\"40\" stroke=\"#9A3412\" stroke-width=\"2\"/>\n\n  <!-- Framed Classical Oil Painting on Center Wall -->\n  <g id=\"r-painting\" filter=\"url(#r-elem-shadow)\">\n    <rect x=\"310\" y=\"60\" width=\"130\" height=\"90\" rx=\"3\" fill=\"#B45309\" stroke=\"#78350F\" stroke-width=\"4\"/>\n    <rect x=\"318\" y=\"68\" width=\"114\" height=\"74\" fill=\"#064E3B\"/>\n    <!-- Classical landscape scene inside frame -->\n    <path d=\"M318 115 Q340 95 370 110 T420 100 L432 142 L318 142 Z\" fill=\"#14532D\"/>\n    <circle cx=\"340\" cy=\"88\" r=\"10\" fill=\"#FEF08A\" opacity=\"0.8\"/>\n    <!-- Frame highlight -->\n    <rect x=\"312\" y=\"62\" width=\"126\" height=\"86\" fill=\"none\" stroke=\"#FBBF24\" stroke-width=\"1\" opacity=\"0.6\"/>\n  </g>\n\n  <!-- Decorative Brass Wall Sconces with Warm Glowing Cones -->\n  <!-- Sconce 1 (Left) -->\n  <g id=\"r-sconce-1\">\n    <ellipse cx=\"230\" cy=\"95\" rx=\"55\" ry=\"55\" fill=\"url(#r-sconce-glow)\"/>\n    <polygon points=\"215,85 245,85 240,110 220,110\" fill=\"#FEF08A\" stroke=\"#FDE047\" stroke-width=\"1.5\"/>\n    <path d=\"M230 110 L230 130\" stroke=\"#D97706\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    <circle cx=\"230\" cy=\"130\" r=\"4\" fill=\"#B45309\"/>\n  </g>\n  <!-- Sconce 2 (Right) -->\n  <g id=\"r-sconce-2\">\n    <ellipse cx=\"530\" cy=\"95\" rx=\"55\" ry=\"55\" fill=\"url(#r-sconce-glow)\"/>\n    <polygon points=\"515,85 545,85 540,110 520,110\" fill=\"#FEF08A\" stroke=\"#FDE047\" stroke-width=\"1.5\"/>\n    <path d=\"M530 110 L530 130\" stroke=\"#D97706\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    <circle cx=\"530\" cy=\"130\" r=\"4\" fill=\"#B45309\"/>\n  </g>\n\n  <!-- Distant Kitchen Pass / Chef Food Prep on Left (hs-t2r-prep at 120, 210) -->\n  <g id=\"t2r-kitchen-pass\" opacity=\"0.9\">\n    <!-- Warm Service Window Opening -->\n    <rect x=\"60\" y=\"140\" width=\"130\" height=\"110\" rx=\"4\" fill=\"#FEF08A\" opacity=\"0.15\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    <rect x=\"65\" y=\"210\" width=\"120\" height=\"8\" fill=\"#CBD5E1\"/>\n    <!-- Heat Lamp hanging over pass -->\n    <polygon points=\"110,140 130,140 135,160 105,160\" fill=\"#EF4444\"/>\n    <circle cx=\"120\" cy=\"165\" r=\"4\" fill=\"#FEF08A\"/>\n\n    <!-- Chef in Tall White Toque & White Double-Breasted Coat (hs-t2r-prep at 120, 210) -->\n    <!-- Chef Toque Hat -->\n    <rect x=\"110\" y=\"166\" width=\"20\" height=\"24\" rx=\"4\" fill=\"#FFFFFF\" stroke=\"#E2E8F0\" stroke-width=\"1\"/>\n    <ellipse cx=\"120\" cy=\"166\" rx=\"14\" ry=\"7\" fill=\"#FFFFFF\"/>\n    <!-- Chef Head & Neck -->\n    <circle cx=\"120\" cy=\"196\" r=\"9\" fill=\"#FDBA74\"/>\n    <!-- Chef Double-Breasted Jacket -->\n    <rect x=\"106\" y=\"205\" width=\"28\" height=\"35\" rx=\"3\" fill=\"#FFFFFF\" stroke=\"#E2E8F0\" stroke-width=\"1\"/>\n    <circle cx=\"114\" cy=\"215\" r=\"1.5\" fill=\"#0F172A\"/>\n    <circle cx=\"122\" cy=\"215\" r=\"1.5\" fill=\"#0F172A\"/>\n    <circle cx=\"114\" cy=\"225\" r=\"1.5\" fill=\"#0F172A\"/>\n    <circle cx=\"122\" cy=\"225\" r=\"1.5\" fill=\"#0F172A\"/>\n    <!-- Chef Arm Garnishing Plate -->\n    <path d=\"M112 215 Q125 225 130 230\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"132\" cy=\"232\" rx=\"3\" ry=\"2.5\" fill=\"#FDBA74\"/>\n    <!-- Fine Dining Plates on Pass Counter with Green Garnish -->\n    <ellipse cx=\"140\" cy=\"238\" rx=\"14\" ry=\"4\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1\"/>\n    <circle cx=\"140\" cy=\"237\" r=\"3\" fill=\"#16A34A\"/>\n  </g>\n\n  <!-- Hardwood Parquet Dining Floor -->\n  <g id=\"r-floor\">\n    <rect x=\"0\" y=\"340\" width=\"800\" height=\"160\" fill=\"url(#r-parquet)\"/>\n    <line x1=\"0\" y1=\"340\" x2=\"800\" y2=\"340\" stroke=\"#1E293B\" stroke-width=\"3\"/>\n    <!-- Parquet plank seams -->\n    <line x1=\"0\" y1=\"380\" x2=\"800\" y2=\"380\" stroke=\"#3A1C06\" stroke-width=\"1.5\"/>\n    <line x1=\"0\" y1=\"420\" x2=\"800\" y2=\"420\" stroke=\"#3A1C06\" stroke-width=\"1.5\"/>\n    <line x1=\"0\" y1=\"460\" x2=\"800\" y2=\"460\" stroke=\"#3A1C06\" stroke-width=\"1.5\"/>\n    <!-- Shadows under dining tables -->\n    <ellipse cx=\"320\" cy=\"460\" rx=\"170\" ry=\"26\" fill=\"#020617\" opacity=\"0.4\"/>\n    <ellipse cx=\"600\" cy=\"450\" rx=\"90\" ry=\"20\" fill=\"#020617\" opacity=\"0.35\"/>\n  </g>\n\n  <!-- Elegant Waiter Serving & Pouring Water/Wine (hs-t2r-serve at 408, 210; hs-t2r-pour at 496, 255) -->\n  <g id=\"t2r-waiter\">\n    <!-- Tailored Black Trousers -->\n    <path d=\"M400 340 L395 448 L408 448 L415 355 L422 448 L435 448 L430 340 Z\" fill=\"#0F172A\"/>\n    <!-- Polished Black Dress Shoes -->\n    <polygon points=\"390,448 410,448 412,456 388,456\" fill=\"#020617\"/>\n    <polygon points=\"420,448 440,448 442,456 418,456\" fill=\"#020617\"/>\n\n    <!-- Black Waistcoat Vest over Crisp White Shirt & Bow Tie -->\n    <path d=\"M394 240 C394 225, 435 225, 438 240 L432 342 L398 342 Z\" fill=\"#0F172A\" stroke=\"#020617\" stroke-width=\"2\"/>\n    <!-- White shirt V-neck & Black Bowtie -->\n    <polygon points=\"410,225 416,248 422,225\" fill=\"#FFFFFF\"/>\n    <polygon points=\"412,230 420,230 416,236\" fill=\"#020617\"/>\n    <circle cx=\"416\" cy=\"233\" r=\"2\" fill=\"#020617\"/>\n    <!-- Vest buttons -->\n    <circle cx=\"416\" cy=\"260\" r=\"1.8\" fill=\"#FBBF24\"/>\n    <circle cx=\"416\" cy=\"275\" r=\"1.8\" fill=\"#FBBF24\"/>\n    <circle cx=\"416\" cy=\"290\" r=\"1.8\" fill=\"#FBBF24\"/>\n\n    <!-- Neck & Head (Facing right attentively) -->\n    <rect x=\"412\" y=\"214\" width=\"8\" height=\"12\" fill=\"#FDBA74\"/>\n    <ellipse cx=\"416\" cy=\"200\" rx=\"12\" ry=\"15\" fill=\"#FDBA74\"/>\n    <!-- Neat Groomed Black Hair -->\n    <path d=\"M406 198 C404 182, 428 180, 428 196 C428 202, 424 208, 420 210 Z\" fill=\"#0F172A\"/>\n    <circle cx=\"422\" cy=\"198\" r=\"1.6\" fill=\"#0F172A\"/>\n\n    <!-- Left Arm Holding Clean White Service Napkin / Tray Fold -->\n    <path d=\"M394 245 Q382 275 390 305\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"10\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"390\" cy=\"308\" rx=\"5\" ry=\"4\" fill=\"#FDBA74\"/>\n    <!-- Folded white waiter towel draped over forearm -->\n    <polygon points=\"384,280 398,280 402,320 380,320\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1\"/>\n\n    <!-- Right Arm POURING WATER/WINE FROM CARAFE (hs-t2r-pour at 496, 255) -->\n    <!-- Arm extends gracefully forward towards glass -->\n    <path d=\"M435 242 Q460 248 485 245\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"10\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"488\" cy=\"245\" rx=\"5\" ry=\"4\" fill=\"#FDBA74\"/>\n    <!-- Crystal Glass Carafe / Bottle Tilted Pouring -->\n    <g id=\"t2r-carafe\" transform=\"rotate(-35 496 250)\">\n      <rect x=\"488\" y=\"232\" width=\"16\" height=\"36\" rx=\"4\" fill=\"#BAE6FD\" opacity=\"0.7\" stroke=\"#38BDF8\" stroke-width=\"1.2\"/>\n      <rect x=\"492\" y=\"222\" width=\"8\" height=\"12\" fill=\"#BAE6FD\" opacity=\"0.7\"/>\n      <!-- Water / Wine inside carafe -->\n      <rect x=\"490\" y=\"244\" width=\"12\" height=\"22\" rx=\"2\" fill=\"url(#r-wine)\"/>\n    </g>\n    <!-- Sparkling stream of liquid pouring into diner's wine glass -->\n    <path d=\"M496 255 Q498 270 499 285\" fill=\"none\" stroke=\"#DC2626\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <!-- Tiny splash drops in glass -->\n    <circle cx=\"499\" cy=\"286\" r=\"1.5\" fill=\"#EF4444\"/>\n  </g>\n\n  <!-- Seated Diner at Adjacent Table (Right) (hs-t2r-dine at 576, 250) -->\n  <g id=\"t2r-diner\">\n    <!-- Fine Dining High-Back Upholstered Chair -->\n    <rect x=\"560\" y=\"220\" width=\"55\" height=\"95\" rx=\"10\" fill=\"#451A03\" stroke=\"#290E02\" stroke-width=\"2\"/>\n    <rect x=\"566\" y=\"228\" width=\"43\" height=\"78\" rx=\"6\" fill=\"#831843\"/>\n\n    <!-- Seated Woman in Elegant Evening Attire -->\n    <path d=\"M565 310 C565 265, 595 255, 605 310 Z\" fill=\"#1E1B4B\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <rect x=\"580\" y=\"235\" width=\"8\" height=\"12\" fill=\"#FDBA74\"/>\n    <ellipse cx=\"584\" cy=\"222\" rx=\"12\" ry=\"14\" fill=\"#FDBA74\"/>\n    <!-- Elegant Updo Hair & Pearl Earring -->\n    <path d=\"M574 220 C572 205, 598 202, 598 218 Z\" fill=\"#78350F\"/>\n    <circle cx=\"598\" cy=\"210\" r=\"7\" fill=\"#78350F\"/>\n    <circle cx=\"580\" cy=\"225\" r=\"1.8\" fill=\"#FFFFFF\"/>\n    <!-- Smiling facial profile enjoying evening -->\n    <circle cx=\"578\" cy=\"222\" r=\"1.5\" fill=\"#0F172A\"/>\n    <path d=\"M576 228 Q580 230 577 232\" fill=\"none\" stroke=\"#9A3412\" stroke-width=\"1.2\"/>\n\n    <!-- Left hand resting gently on dining table near wine glass -->\n    <path d=\"M575 285 Q540 290 515 292\" fill=\"none\" stroke=\"#1E1B4B\" stroke-width=\"8\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"512\" cy=\"292\" rx=\"4.5\" ry=\"3.5\" fill=\"#FDBA74\"/>\n\n    <!-- Diner's Wine Glass on Table receiving the pour (hs-t2r-pour at 496, 255) -->\n    <ellipse cx=\"500\" cy=\"285\" rx=\"9\" ry=\"4\" fill=\"none\" stroke=\"#BAE6FD\" stroke-width=\"1.2\"/>\n    <path d=\"M491 285 Q491 305 500 308 Q509 305 509 285\" fill=\"url(#r-wine)\" stroke=\"#BAE6FD\" stroke-width=\"1\"/>\n    <line x1=\"500\" y1=\"308\" x2=\"500\" y2=\"324\" stroke=\"#BAE6FD\" stroke-width=\"2\"/>\n    <ellipse cx=\"500\" cy=\"324\" rx=\"8\" ry=\"3\" fill=\"#BAE6FD\" opacity=\"0.7\"/>\n  </g>\n\n  <!-- Foreground Fine-Dining Table with Complete Formal Setting -->\n  <g id=\"t2r-table\" filter=\"url(#r-shadow)\">\n    <!-- Crisp White Draped Tablecloth -->\n    <!-- Table Body Structure -->\n    <polygon points=\"135,335 440,335 455,445 120,445\" fill=\"url(#r-cloth)\" stroke=\"#CBD5E1\" stroke-width=\"2\"/>\n    <!-- Draped fabric shadow & hem folds -->\n    <line x1=\"135\" y1=\"335\" x2=\"440\" y2=\"335\" stroke=\"#FFFFFF\" stroke-width=\"2\"/>\n    <path d=\"M120 445 Q200 455 280 445 Q360 455 455 445\" fill=\"none\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n\n    <!-- Tabletop Surface in 3D Perspective -->\n    <ellipse cx=\"280\" cy=\"335\" rx=\"145\" ry=\"40\" fill=\"#FFFFFF\" stroke=\"#E2E8F0\" stroke-width=\"2\"/>\n\n    <!-- Centerpiece: Candle in Glass Votive -->\n    <ellipse cx=\"280\" cy=\"318\" rx=\"8\" ry=\"3.5\" fill=\"#CBD5E1\"/>\n    <rect x=\"274\" y=\"306\" width=\"12\" height=\"14\" rx=\"2\" fill=\"#BAE6FD\" opacity=\"0.6\" stroke=\"#38BDF8\" stroke-width=\"1\"/>\n    <!-- Glowing candle flame -->\n    <circle cx=\"280\" cy=\"304\" r=\"3.5\" fill=\"#FEF08A\"/>\n    <circle cx=\"280\" cy=\"304\" r=\"7\" fill=\"#FACC15\" opacity=\"0.4\"/>\n\n    <!-- Elegant Folded Linen Napkin (hs-t2r-napkin at 272, 340) -->\n    <g id=\"t2r-napkin-item\" filter=\"url(#r-elem-shadow)\">\n      <!-- Bishop's mitre / standing triangle fold -->\n      <polygon points=\"258,348 272,326 286,348\" fill=\"#F8FAFC\" stroke=\"#CBD5E1\" stroke-width=\"1.2\"/>\n      <line x1=\"272\" y1=\"326\" x2=\"272\" y2=\"348\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/>\n      <polygon points=\"261,346 272,330 272,346\" fill=\"#FFFFFF\"/>\n    </g>\n\n    <!-- Gourmet Meal Plate with Fine Food (hs-t2r-meal at 272, 375) -->\n    <g id=\"t2r-meal-plate\" filter=\"url(#r-elem-shadow)\">\n      <!-- Fine China Charger Plate with Gold Rim centered at 272, 375 -->\n      <ellipse cx=\"272\" cy=\"375\" rx=\"42\" ry=\"20\" fill=\"#FFFFFF\" stroke=\"#FACC15\" stroke-width=\"2\"/>\n      <!-- Inner plate well -->\n      <ellipse cx=\"272\" cy=\"375\" rx=\"32\" ry=\"14\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1\"/>\n\n      <!-- Grilled Salmon Fillet / Medallion Steak with Grill Marks -->\n      <polygon points=\"256,370 284,364 290,378 262,384\" fill=\"#EA580C\" stroke=\"#C2410C\" stroke-width=\"1\"/>\n      <line x1=\"262\" y1=\"368\" x2=\"268\" y2=\"382\" stroke=\"#7C2D12\" stroke-width=\"1.5\"/>\n      <line x1=\"272\" y1=\"366\" x2=\"278\" y2=\"380\" stroke=\"#7C2D12\" stroke-width=\"1.5\"/>\n      <line x1=\"280\" y1=\"365\" x2=\"286\" y2=\"379\" stroke=\"#7C2D12\" stroke-width=\"1.5\"/>\n\n      <!-- Tender Asparagus Spears -->\n      <line x1=\"252\" y1=\"382\" x2=\"280\" y2=\"386\" stroke=\"#16A34A\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n      <line x1=\"256\" y1=\"385\" x2=\"284\" y2=\"389\" stroke=\"#22C55E\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n\n      <!-- Roasted Cherry Tomatoes & Herb Butter -->\n      <circle cx=\"288\" cy=\"372\" r=\"4\" fill=\"#EF4444\"/>\n      <circle cx=\"285\" cy=\"370\" r=\"1.5\" fill=\"#FFFFFF\"/>\n      <!-- Balsamic reduction glaze swirl -->\n      <path d=\"M260 364 Q272 358 290 368\" fill=\"none\" stroke=\"#451A03\" stroke-width=\"1.5\"/>\n    </g>\n\n    <!-- Silverware Forks on Left of Plate (hs-t2r-silverware at 224, 370) -->\n    <g id=\"t2r-forks\" filter=\"url(#r-elem-shadow)\">\n      <!-- Salad Fork (Outer) -->\n      <path d=\"M216 390 L216 358\" stroke=\"url(#r-silver)\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n      <path d=\"M212 358 L220 358 L220 350 M216 358 L216 348 M212 358 L212 350\" stroke=\"url(#r-silver)\" stroke-width=\"1.5\"/>\n\n      <!-- Dinner Fork (Inner, next to plate at 224, 370) -->\n      <path d=\"M228 392 L228 354\" stroke=\"url(#r-silver)\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n      <path d=\"M224 354 L232 354 L232 345 M228 354 L228 344 M224 354 L224 345\" stroke=\"url(#r-silver)\" stroke-width=\"1.5\"/>\n    </g>\n\n    <!-- Dinner Knife & Soup Spoon on Right of Plate (hs-t2r-knife at 320, 370) -->\n    <g id=\"t2r-knives\" filter=\"url(#r-elem-shadow)\">\n      <!-- Main Dinner Knife directly at hs-t2r-knife (320, 370) -->\n      <path d=\"M320 392 L320 354\" stroke=\"url(#r-silver)\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>\n      <!-- Curved Cutting Blade facing plate inward -->\n      <path d=\"M320 354 Q316 344 320 342 L321 354 Z\" fill=\"url(#r-silver)\" stroke=\"#64748B\" stroke-width=\"1\"/>\n\n      <!-- Silver Soup Spoon -->\n      <path d=\"M334 390 L334 358\" stroke=\"url(#r-silver)\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n      <ellipse cx=\"334\" cy=\"350\" rx=\"4.5\" ry=\"8\" fill=\"url(#r-silver)\" stroke=\"#64748B\" stroke-width=\"1\"/>\n    </g>\n\n    <!-- Crystal Water Goblet & Wine Glass for foreground table -->\n    <g id=\"t2r-glasses\" filter=\"url(#r-elem-shadow)\">\n      <ellipse cx=\"348\" cy=\"330\" rx=\"9\" ry=\"3.5\" fill=\"none\" stroke=\"#BAE6FD\" stroke-width=\"1.2\"/>\n      <path d=\"M339 330 Q339 346 348 349 Q357 346 357 330\" fill=\"url(#r-wine)\" stroke=\"#BAE6FD\" stroke-width=\"1\"/>\n      <line x1=\"348\" y1=\"349\" x2=\"348\" y2=\"360\" stroke=\"#BAE6FD\" stroke-width=\"2\"/>\n      <ellipse cx=\"348\" cy=\"360\" rx=\"7\" ry=\"2.2\" fill=\"#BAE6FD\" opacity=\"0.6\"/>\n    </g>\n  </g>\n</svg>",
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
        "svg": "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" class=\"part1-svg-art\">\n  <defs>\n    <!-- Construction sky gradient -->\n    <linearGradient id=\"cs-sky\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#38BDF8\"/>\n      <stop offset=\"65%\" stop-color=\"#BAE6FD\"/>\n      <stop offset=\"100%\" stop-color=\"#E0F2FE\"/>\n    </linearGradient>\n\n    <!-- Dirt & compacted gravel ground -->\n    <linearGradient id=\"cs-ground\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#78350F\"/>\n      <stop offset=\"35%\" stop-color=\"#9A3412\"/>\n      <stop offset=\"70%\" stop-color=\"#7C2D12\"/>\n      <stop offset=\"100%\" stop-color=\"#451A03\"/>\n    </linearGradient>\n\n    <!-- Scaffolding galvanized steel pipes -->\n    <linearGradient id=\"cs-pipe\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#475569\"/>\n      <stop offset=\"45%\" stop-color=\"#94A3B8\"/>\n      <stop offset=\"70%\" stop-color=\"#CBD5E1\"/>\n      <stop offset=\"100%\" stop-color=\"#334155\"/>\n    </linearGradient>\n\n    <!-- Aluminum ladder rail -->\n    <linearGradient id=\"cs-ladder\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#64748B\"/>\n      <stop offset=\"50%\" stop-color=\"#F1F5F9\"/>\n      <stop offset=\"100%\" stop-color=\"#475569\"/>\n    </linearGradient>\n\n    <!-- Wood planks & lumber gradient -->\n    <linearGradient id=\"cs-wood\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#F5D0A1\"/>\n      <stop offset=\"50%\" stop-color=\"#D7A15C\"/>\n      <stop offset=\"100%\" stop-color=\"#A16207\"/>\n    </linearGradient>\n\n    <!-- Hi-vis fluorescent safety vest -->\n    <linearGradient id=\"cs-hivis\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#FACC15\"/>\n      <stop offset=\"50%\" stop-color=\"#EAB308\"/>\n      <stop offset=\"100%\" stop-color=\"#CA8A04\"/>\n    </linearGradient>\n\n    <linearGradient id=\"cs-hivis-orange\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#FB923C\"/>\n      <stop offset=\"100%\" stop-color=\"#EA580C\"/>\n    </linearGradient>\n\n    <!-- Drop shadows -->\n    <filter id=\"cs-shadow\" x=\"-10%\" y=\"-10%\" width=\"125%\" height=\"125%\">\n      <feDropShadow dx=\"0\" dy=\"6\" stdDeviation=\"8\" flood-color=\"#0F172A\" flood-opacity=\"0.3\"/>\n    </filter>\n    <filter id=\"cs-elem-shadow\" x=\"-8%\" y=\"-8%\" width=\"120%\" height=\"120%\">\n      <feDropShadow dx=\"0\" dy=\"4\" stdDeviation=\"5\" flood-color=\"#0F172A\" flood-opacity=\"0.2\"/>\n    </filter>\n  </defs>\n\n  <!-- Clear Sky Background -->\n  <rect x=\"0\" y=\"0\" width=\"800\" height=\"360\" fill=\"url(#cs-sky)\"/>\n\n  <!-- Distant Clouds -->\n  <ellipse cx=\"200\" cy=\"60\" rx=\"60\" ry=\"16\" fill=\"#FFFFFF\" opacity=\"0.6\"/>\n  <ellipse cx=\"230\" cy=\"50\" rx=\"45\" ry=\"20\" fill=\"#FFFFFF\" opacity=\"0.7\"/>\n  <ellipse cx=\"620\" cy=\"80\" rx=\"80\" ry=\"18\" fill=\"#FFFFFF\" opacity=\"0.5\"/>\n\n  <!-- Distant City Skyline & High-Rise Tower Crane -->\n  <g id=\"t3-distant-crane\" opacity=\"0.65\">\n    <!-- Distant building silhouettes -->\n    <rect x=\"40\" y=\"140\" width=\"55\" height=\"220\" fill=\"#64748B\" opacity=\"0.5\"/>\n    <rect x=\"110\" y=\"110\" width=\"65\" height=\"250\" fill=\"#475569\" opacity=\"0.6\"/>\n    <!-- Yellow Tower Crane Mast & Jib -->\n    <line x1=\"160\" y1=\"40\" x2=\"160\" y2=\"280\" stroke=\"#F59E0B\" stroke-width=\"4\"/>\n    <!-- Lattice X-bracing on crane mast -->\n    <line x1=\"156\" y1=\"60\" x2=\"164\" y2=\"80\" stroke=\"#B45309\" stroke-width=\"1.5\"/>\n    <line x1=\"164\" y1=\"60\" x2=\"156\" y2=\"80\" stroke=\"#B45309\" stroke-width=\"1.5\"/>\n    <line x1=\"156\" y1=\"80\" x2=\"164\" y2=\"100\" stroke=\"#B45309\" stroke-width=\"1.5\"/>\n    <line x1=\"164\" y1=\"80\" x2=\"156\" y2=\"100\" stroke=\"#B45309\" stroke-width=\"1.5\"/>\n    <!-- Horizontal Crane Jib & Counter-jib -->\n    <line x1=\"90\" y1=\"55\" x2=\"250\" y2=\"55\" stroke=\"#F59E0B\" stroke-width=\"3\"/>\n    <!-- Crane Cab & Apex -->\n    <polygon points=\"155,55 160,30 165,55\" fill=\"#F59E0B\"/>\n    <line x1=\"160\" y1=\"30\" x2=\"250\" y2=\"55\" stroke=\"#475569\" stroke-width=\"1.2\"/>\n    <line x1=\"160\" y1=\"30\" x2=\"90\" y2=\"55\" stroke=\"#475569\" stroke-width=\"1.2\"/>\n    <rect x=\"95\" y=\"58\" width=\"22\" height=\"12\" fill=\"#334155\"/>\n    <!-- Hoist line with hook -->\n    <line x1=\"210\" y1=\"55\" x2=\"210\" y2=\"130\" stroke=\"#1E293B\" stroke-width=\"1.2\"/>\n    <path d=\"M208 130 C208 136, 214 136, 214 132\" fill=\"none\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n  </g>\n\n  <!-- Partially Constructed Concrete Building Framework (Background Center) -->\n  <g id=\"cs-building-framework\">\n    <!-- Raw concrete structural columns -->\n    <rect x=\"360\" y=\"80\" width=\"26\" height=\"280\" fill=\"#94A3B8\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n    <rect x=\"520\" y=\"80\" width=\"26\" height=\"280\" fill=\"#94A3B8\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n    <rect x=\"680\" y=\"80\" width=\"26\" height=\"280\" fill=\"#94A3B8\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n    <!-- Concrete floor slabs -->\n    <rect x=\"350\" y=\"160\" width=\"370\" height=\"18\" fill=\"#64748B\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <rect x=\"350\" y=\"260\" width=\"370\" height=\"18\" fill=\"#64748B\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n  </g>\n\n  <!-- Excavator in Midground (Left) -->\n  <g id=\"cs-excavator\" filter=\"url(#cs-elem-shadow)\">\n    <!-- Yellow Cab Body -->\n    <rect x=\"40\" y=\"270\" width=\"85\" height=\"55\" rx=\"6\" fill=\"#FACC15\" stroke=\"#CA8A04\" stroke-width=\"2\"/>\n    <rect x=\"50\" y=\"275\" width=\"35\" height=\"30\" rx=\"3\" fill=\"#0284C7\" stroke=\"#0F172A\" stroke-width=\"1.5\"/>\n    <!-- Heavy Rubber Continuous Tracks (Caterpillar treads) -->\n    <rect x=\"25\" y=\"325\" width=\"115\" height=\"30\" rx=\"10\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <circle cx=\"45\" cy=\"340\" r=\"9\" fill=\"#475569\"/>\n    <circle cx=\"70\" cy=\"340\" r=\"9\" fill=\"#475569\"/>\n    <circle cx=\"95\" cy=\"340\" r=\"9\" fill=\"#475569\"/>\n    <circle cx=\"120\" cy=\"340\" r=\"9\" fill=\"#475569\"/>\n    <!-- Articulated Hydraulic Boom & Arm -->\n    <line x1=\"110\" y1=\"285\" x2=\"165\" y2=\"235\" stroke=\"#EAB308\" stroke-width=\"12\" stroke-linecap=\"round\"/>\n    <line x1=\"165\" y1=\"235\" x2=\"195\" y2=\"290\" stroke=\"#EAB308\" stroke-width=\"10\" stroke-linecap=\"round\"/>\n    <!-- Hydraulic cylinder chrome piston -->\n    <line x1=\"115\" y1=\"270\" x2=\"155\" y2=\"242\" stroke=\"#CBD5E1\" stroke-width=\"4\"/>\n    <!-- Heavy Steel Excavator Bucket with Digging Teeth -->\n    <path d=\"M195 290 L218 315 L202 335 L182 320 Z\" fill=\"#334155\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <!-- Sharp bucket teeth -->\n    <polygon points=\"218,315 226,322 221,326\" fill=\"#94A3B8\"/>\n    <polygon points=\"214,324 221,331 216,334\" fill=\"#94A3B8\"/>\n  </g>\n\n  <!-- Construction Ground: Dirt, Gravel & Footprints -->\n  <g id=\"cs-ground-layer\">\n    <rect x=\"0\" y=\"355\" width=\"800\" height=\"145\" fill=\"url(#cs-ground)\"/>\n    <line x1=\"0\" y1=\"355\" x2=\"800\" y2=\"355\" stroke=\"#451A03\" stroke-width=\"3\"/>\n    <!-- Soil texture lines & gravel pebbles -->\n    <ellipse cx=\"280\" cy=\"410\" rx=\"8\" ry=\"4\" fill=\"#582D0C\"/>\n    <ellipse cx=\"360\" cy=\"435\" rx=\"12\" ry=\"5\" fill=\"#582D0C\"/>\n    <ellipse cx=\"580\" cy=\"425\" rx=\"10\" ry=\"4\" fill=\"#582D0C\"/>\n    <circle cx=\"480\" cy=\"385\" r=\"3\" fill=\"#D7A15C\"/>\n    <circle cx=\"530\" cy=\"450\" r=\"4\" fill=\"#D7A15C\"/>\n    <circle cx=\"210\" cy=\"440\" r=\"3.5\" fill=\"#D7A15C\"/>\n  </g>\n\n  <!-- Stack of Wood Planks & Lumber on Ground (hs-t3-plank at 128, 460) -->\n  <g id=\"t3-planks\" filter=\"url(#cs-shadow)\">\n    <!-- Bottom layer of lumber -->\n    <polygon points=\"40,460 210,460 225,475 55,475\" fill=\"url(#cs-wood)\" stroke=\"#8F561F\" stroke-width=\"1.5\"/>\n    <polygon points=\"210,460 225,475 225,488 210,473\" fill=\"#A16207\" stroke=\"#8F561F\" stroke-width=\"1.5\"/>\n    <!-- Middle layer of lumber -->\n    <polygon points=\"45,446 215,446 230,461 60,461\" fill=\"url(#cs-wood)\" stroke=\"#8F561F\" stroke-width=\"1.5\"/>\n    <polygon points=\"215,446 230,461 230,474 215,459\" fill=\"#A16207\" stroke=\"#8F561F\" stroke-width=\"1.5\"/>\n    <!-- Top layer of lumber -->\n    <polygon points=\"50,432 220,432 235,447 65,447\" fill=\"url(#cs-wood)\" stroke=\"#8F561F\" stroke-width=\"1.5\"/>\n    <polygon points=\"220,432 235,447 235,460 220,445\" fill=\"#A16207\" stroke=\"#8F561F\" stroke-width=\"1.5\"/>\n    <!-- Steel Strapping Bands Binding Lumber -->\n    <line x1=\"85\" y1=\"432\" x2=\"100\" y2=\"475\" stroke=\"#0F172A\" stroke-width=\"2.5\"/>\n    <line x1=\"175\" y1=\"432\" x2=\"190\" y2=\"475\" stroke=\"#0F172A\" stroke-width=\"2.5\"/>\n  </g>\n\n  <!-- Multi-Tier Galvanized Steel Tubular Scaffolding (hs-t3-scaffold at 544, 210) -->\n  <g id=\"t3-scaffold\" filter=\"url(#cs-shadow)\">\n    <!-- Vertical Support Posts (Pipes) -->\n    <rect x=\"420\" y=\"80\" width=\"8\" height=\"300\" fill=\"url(#cs-pipe)\" rx=\"2\"/>\n    <rect x=\"540\" y=\"80\" width=\"8\" height=\"300\" fill=\"url(#cs-pipe)\" rx=\"2\"/>\n    <rect x=\"660\" y=\"80\" width=\"8\" height=\"300\" fill=\"url(#cs-pipe)\" rx=\"2\"/>\n\n    <!-- Base Screw Jacks on Timber Mud-sills -->\n    <rect x=\"410\" y=\"375\" width=\"28\" height=\"8\" fill=\"#D7A15C\" stroke=\"#78350F\" stroke-width=\"1\"/>\n    <rect x=\"530\" y=\"375\" width=\"28\" height=\"8\" fill=\"#D7A15C\" stroke=\"#78350F\" stroke-width=\"1\"/>\n    <rect x=\"650\" y=\"375\" width=\"28\" height=\"8\" fill=\"#D7A15C\" stroke=\"#78350F\" stroke-width=\"1\"/>\n\n    <!-- Tier 1 Horizontal Ledgers (y=300) -->\n    <rect x=\"415\" y=\"300\" width=\"255\" height=\"7\" fill=\"url(#cs-pipe)\"/>\n    <!-- Tier 1 Diagonal X-Braces -->\n    <line x1=\"424\" y1=\"300\" x2=\"540\" y2=\"380\" stroke=\"#64748B\" stroke-width=\"3\"/>\n    <line x1=\"540\" y1=\"300\" x2=\"424\" y2=\"380\" stroke=\"#64748B\" stroke-width=\"3\"/>\n    <line x1=\"544\" y1=\"300\" x2=\"660\" y2=\"380\" stroke=\"#64748B\" stroke-width=\"3\"/>\n    <line x1=\"660\" y1=\"300\" x2=\"544\" y2=\"380\" stroke=\"#64748B\" stroke-width=\"3\"/>\n\n    <!-- Tier 2 Working Platform (y=210) (hs-t3-scaffold at 544, 210) -->\n    <rect x=\"415\" y=\"210\" width=\"255\" height=\"7\" fill=\"url(#cs-pipe)\"/>\n    <!-- Wooden Plank Walking Deck on Tier 2 -->\n    <polygon points=\"410,210 670,210 680,222 400,222\" fill=\"url(#cs-wood)\" stroke=\"#8F561F\" stroke-width=\"1.5\"/>\n    <!-- Safety Toe-board -->\n    <rect x=\"400\" y=\"200\" width=\"280\" height=\"12\" fill=\"#D97706\" stroke=\"#92400E\" stroke-width=\"1\"/>\n\n    <!-- Tier 2 Diagonal X-Braces -->\n    <line x1=\"424\" y1=\"210\" x2=\"540\" y2=\"300\" stroke=\"#64748B\" stroke-width=\"3\"/>\n    <line x1=\"540\" y1=\"210\" x2=\"424\" y2=\"300\" stroke=\"#64748B\" stroke-width=\"3\"/>\n    <line x1=\"544\" y1=\"210\" x2=\"660\" y2=\"300\" stroke=\"#64748B\" stroke-width=\"3\"/>\n    <line x1=\"660\" y1=\"210\" x2=\"544\" y2=\"300\" stroke=\"#64748B\" stroke-width=\"3\"/>\n\n    <!-- Tier 3 Guardrails & Top Platform (y=120) -->\n    <rect x=\"415\" y=\"120\" width=\"255\" height=\"7\" fill=\"url(#cs-pipe)\"/>\n    <!-- Top safety guardrail -->\n    <rect x=\"415\" y=\"85\" width=\"255\" height=\"5\" fill=\"url(#cs-pipe)\"/>\n    <rect x=\"415\" y=\"102\" width=\"255\" height=\"5\" fill=\"url(#cs-pipe)\"/>\n  </g>\n\n  <!-- Sturdy Aluminum Extension Ladder Leaning on Scaffolding (hs-t3-ladder at 296, 260) -->\n  <g id=\"t3-ladder\" filter=\"url(#cs-shadow)\">\n    <!-- Ladder Side Rails Angled from ground at (250, 385) to scaffold deck at (345, 175) -->\n    <line x1=\"250\" y1=\"385\" x2=\"340\" y2=\"175\" stroke=\"url(#cs-ladder)\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n    <line x1=\"272\" y1=\"385\" x2=\"362\" y2=\"175\" stroke=\"url(#cs-ladder)\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n    <!-- Anti-slip Heavy Duty Rubber Feet -->\n    <ellipse cx=\"250\" cy=\"385\" rx=\"6\" ry=\"4\" fill=\"#0F172A\"/>\n    <ellipse cx=\"272\" cy=\"385\" rx=\"6\" ry=\"4\" fill=\"#0F172A\"/>\n\n    <!-- Grooved Aluminum Rungs Spaced Evenly -->\n    <line x1=\"255\" y1=\"365\" x2=\"277\" y2=\"365\" stroke=\"#CBD5E1\" stroke-width=\"4\"/>\n    <line x1=\"265\" y1=\"340\" x2=\"287\" y2=\"340\" stroke=\"#CBD5E1\" stroke-width=\"4\"/>\n    <line x1=\"275\" y1=\"315\" x2=\"297\" y2=\"315\" stroke=\"#CBD5E1\" stroke-width=\"4\"/>\n    <line x1=\"285\" y1=\"290\" x2=\"307\" y2=\"290\" stroke=\"#CBD5E1\" stroke-width=\"4\"/>\n    <line x1=\"295\" y1=\"265\" x2=\"317\" y2=\"265\" stroke=\"#CBD5E1\" stroke-width=\"4\"/>\n    <line x1=\"305\" y1=\"240\" x2=\"327\" y2=\"240\" stroke=\"#CBD5E1\" stroke-width=\"4\"/>\n    <line x1=\"315\" y1=\"215\" x2=\"337\" y2=\"215\" stroke=\"#CBD5E1\" stroke-width=\"4\"/>\n    <line x1=\"325\" y1=\"190\" x2=\"347\" y2=\"190\" stroke=\"#CBD5E1\" stroke-width=\"4\"/>\n  </g>\n\n  <!-- Construction Worker 1: Climbing Up the Ladder (hs-t3-climb at 312, 225; hs-t3-hardhat at 328, 170) -->\n  <g id=\"t3-worker-climbing\">\n    <!-- Steel-Toed Leather Work Boots on ladder rungs -->\n    <polygon points=\"275,315 295,315 298,324 274,324\" fill=\"#78350F\" stroke=\"#451A03\" stroke-width=\"1.5\"/>\n    <polygon points=\"296,265 316,265 319,274 295,274\" fill=\"#78350F\" stroke=\"#451A03\" stroke-width=\"1.5\"/>\n\n    <!-- Denim Work Jeans with knee reinforcement -->\n    <path d=\"M285 315 L292 250 L310 250 L308 265 L320 250\" fill=\"none\" stroke=\"#1E3A8A\" stroke-width=\"14\" stroke-linecap=\"round\"/>\n    <path d=\"M288 250 L322 250 L320 195 L290 195 Z\" fill=\"#1E3A8A\"/>\n\n    <!-- Hi-Vis Safety Vest over Flannel Shirt -->\n    <rect x=\"290\" y=\"195\" width=\"34\" height=\"42\" rx=\"3\" fill=\"url(#cs-hivis)\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n    <!-- Silver Retro-Reflective Stripes on Vest -->\n    <line x1=\"298\" y1=\"195\" x2=\"298\" y2=\"237\" stroke=\"#F8FAFC\" stroke-width=\"3.5\"/>\n    <line x1=\"316\" y1=\"195\" x2=\"316\" y2=\"237\" stroke=\"#F8FAFC\" stroke-width=\"3.5\"/>\n    <line x1=\"290\" y1=\"225\" x2=\"324\" y2=\"225\" stroke=\"#F8FAFC\" stroke-width=\"3.5\"/>\n\n    <!-- Hands gripping ladder rails with heavy work gloves -->\n    <!-- Left Hand on ladder -->\n    <path d=\"M292 205 Q282 230 286 242\" fill=\"none\" stroke=\"#EA580C\" stroke-width=\"10\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"286\" cy=\"242\" rx=\"6\" ry=\"5\" fill=\"#D97706\" stroke=\"#92400E\" stroke-width=\"1\"/>\n    <!-- Right Hand on ladder rung higher up -->\n    <path d=\"M318 205 Q330 205 328 192\" fill=\"none\" stroke=\"#EA580C\" stroke-width=\"10\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"328\" cy=\"192\" rx=\"6\" ry=\"5\" fill=\"#D97706\" stroke=\"#92400E\" stroke-width=\"1\"/>\n\n    <!-- Protective Yellow Hard Hat (hs-t3-hardhat at 328, 170) -->\n    <ellipse cx=\"308\" cy=\"178\" rx=\"12\" ry=\"14\" fill=\"#FDBA74\"/>\n    <path d=\"M296 172 C296 155, 324 155, 324 172 Z\" fill=\"#FACC15\" stroke=\"#CA8A04\" stroke-width=\"2\"/>\n    <!-- Hard Hat Peak / Brim & Center Ridge -->\n    <ellipse cx=\"310\" cy=\"172\" rx=\"17\" ry=\"5\" fill=\"#FACC15\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n    <line x1=\"310\" y1=\"156\" x2=\"310\" y2=\"172\" stroke=\"#EAB308\" stroke-width=\"2\"/>\n  </g>\n\n  <!-- Construction Worker 2 on Scaffolding: Assembling Wooden Frame with Hammer -->\n  <!-- (hs-t3-assemble at 624, 180; hs-t3-uniform at 624, 200; hs-t3-hammer at 688, 105) -->\n  <g id=\"t3-worker-assembling\">\n    <!-- Worker standing on scaffolding deck -->\n    <path d=\"M608 210 L608 170 L628 170 L628 210\" fill=\"none\" stroke=\"#1E3A8A\" stroke-width=\"13\" stroke-linecap=\"round\"/>\n    <!-- Steel toe boots -->\n    <polygon points=\"602,210 616,210 618,218 600,218\" fill=\"#451A03\"/>\n    <polygon points=\"622,210 636,210 638,218 620,218\" fill=\"#451A03\"/>\n\n    <!-- Hi-Vis Safety Vest (hs-t3-uniform at 624, 200) -->\n    <rect x=\"606\" y=\"132\" width=\"36\" height=\"42\" rx=\"3\" fill=\"url(#cs-hivis-orange)\" stroke=\"#C2410C\" stroke-width=\"1.5\"/>\n    <line x1=\"614\" y1=\"132\" x2=\"614\" y2=\"174\" stroke=\"#FFFFFF\" stroke-width=\"3\"/>\n    <line x1=\"632\" y1=\"132\" x2=\"632\" y2=\"174\" stroke=\"#FFFFFF\" stroke-width=\"3\"/>\n    <line x1=\"606\" y1=\"156\" x2=\"642\" y2=\"156\" stroke=\"#FFFFFF\" stroke-width=\"3\"/>\n\n    <!-- Leather Tool Belt with Pouches around waist -->\n    <rect x=\"604\" y=\"168\" width=\"40\" height=\"8\" rx=\"2\" fill=\"#78350F\" stroke=\"#451A03\" stroke-width=\"1\"/>\n    <rect x=\"606\" y=\"174\" width=\"10\" height=\"12\" fill=\"#9A3412\"/>\n    <rect x=\"630\" y=\"174\" width=\"10\" height=\"12\" fill=\"#9A3412\"/>\n\n    <!-- Neck & Head with White Hard Hat -->\n    <rect x=\"618\" y=\"122\" width=\"10\" height=\"12\" fill=\"#FDBA74\"/>\n    <ellipse cx=\"622\" cy=\"114\" rx=\"11\" ry=\"13\" fill=\"#FDBA74\"/>\n    <!-- Hard Hat -->\n    <path d=\"M612 110 C612 95, 638 95, 638 110 Z\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"2\"/>\n    <ellipse cx=\"625\" cy=\"110\" rx=\"15\" ry=\"4\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1.2\"/>\n\n    <!-- Left Arm holding wooden beam being assembled (hs-t3-assemble at 624, 180) -->\n    <path d=\"M610 138 Q630 145 645 130\" fill=\"none\" stroke=\"#EA580C\" stroke-width=\"9\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"646\" cy=\"128\" rx=\"5\" ry=\"4\" fill=\"#D97706\"/>\n\n    <!-- Wooden Timber Rafters / Framing Being Assembled -->\n    <polygon points=\"580,105 740,105 740,118 580,118\" fill=\"url(#cs-wood)\" stroke=\"#8F561F\" stroke-width=\"1.5\"/>\n    <polygon points=\"650,75 662,75 662,145 650,145\" fill=\"url(#cs-wood)\" stroke=\"#8F561F\" stroke-width=\"1.5\"/>\n\n    <!-- Right Arm RAISED SWINGING CLAW HAMMER (hs-t3-hammer at 688, 105) -->\n    <!-- Arm extends up and right -->\n    <path d=\"M638 138 Q655 120 675 110\" fill=\"none\" stroke=\"#EA580C\" stroke-width=\"10\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"676\" cy=\"108\" rx=\"5\" ry=\"4\" fill=\"#D97706\"/>\n    <!-- Heavy Steel Claw Hammer in Hand (hs-t3-hammer at 688, 105) -->\n    <!-- Fiberglass / Wood Handle -->\n    <line x1=\"672\" y1=\"120\" x2=\"690\" y2=\"92\" stroke=\"#F59E0B\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n    <!-- Forged Steel Hammer Head & Curved Claw -->\n    <rect x=\"684\" y=\"90\" width=\"12\" height=\"6\" rx=\"1\" fill=\"#475569\" stroke=\"#0F172A\" stroke-width=\"1\" transform=\"rotate(-30 684 90)\"/>\n    <polygon points=\"682,88 678,82 684,86\" fill=\"#334155\"/>\n    <rect x=\"692\" y=\"94\" width=\"7\" height=\"6\" fill=\"#94A3B8\"/>\n    <!-- Steel Nail being driven into timber -->\n    <line x1=\"695\" y1=\"98\" x2=\"695\" y2=\"105\" stroke=\"#CBD5E1\" stroke-width=\"2.5\"/>\n  </g>\n</svg>",
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
        "svg": "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" class=\"part1-svg-art\">\n  <defs>\n    <!-- Workshop concrete block wall gradient -->\n    <linearGradient id=\"w-wall\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#475569\"/>\n      <stop offset=\"50%\" stop-color=\"#334155\"/>\n      <stop offset=\"100%\" stop-color=\"#1E293B\"/>\n    </linearGradient>\n\n    <!-- Industrial concrete floor gradient -->\n    <linearGradient id=\"w-floor\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#64748B\"/>\n      <stop offset=\"50%\" stop-color=\"#475569\"/>\n      <stop offset=\"100%\" stop-color=\"#334155\"/>\n    </linearGradient>\n\n    <!-- Hardwood workbench butcher block top -->\n    <linearGradient id=\"w-wood\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#D7A15C\"/>\n      <stop offset=\"30%\" stop-color=\"#E2B176\"/>\n      <stop offset=\"70%\" stop-color=\"#B87B39\"/>\n      <stop offset=\"100%\" stop-color=\"#8F561F\"/>\n    </linearGradient>\n\n    <!-- Chrome vanadium tool steel -->\n    <linearGradient id=\"w-chrome\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#94A3B8\"/>\n      <stop offset=\"50%\" stop-color=\"#F1F5F9\"/>\n      <stop offset=\"100%\" stop-color=\"#64748B\"/>\n    </linearGradient>\n\n    <!-- Classic Red Steel Toolbox -->\n    <linearGradient id=\"w-red-box\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#EF4444\"/>\n      <stop offset=\"50%\" stop-color=\"#DC2626\"/>\n      <stop offset=\"100%\" stop-color=\"#991B1B\"/>\n    </linearGradient>\n\n    <!-- Heavy Cast Iron Bench Vise -->\n    <linearGradient id=\"w-vise-iron\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#0284C7\"/>\n      <stop offset=\"50%\" stop-color=\"#0369A1\"/>\n      <stop offset=\"100%\" stop-color=\"#075985\"/>\n    </linearGradient>\n\n    <!-- Shadows -->\n    <filter id=\"w-shadow\" x=\"-10%\" y=\"-10%\" width=\"125%\" height=\"125%\">\n      <feDropShadow dx=\"0\" dy=\"6\" stdDeviation=\"8\" flood-color=\"#0F172A\" flood-opacity=\"0.3\"/>\n    </filter>\n    <filter id=\"w-elem-shadow\" x=\"-8%\" y=\"-8%\" width=\"120%\" height=\"120%\">\n      <feDropShadow dx=\"0\" dy=\"3\" stdDeviation=\"4\" flood-color=\"#0F172A\" flood-opacity=\"0.2\"/>\n    </filter>\n  </defs>\n\n  <!-- Workshop Concrete Background Wall -->\n  <rect x=\"0\" y=\"0\" width=\"800\" height=\"340\" fill=\"url(#w-wall)\"/>\n  <!-- Concrete cinder block mortar lines -->\n  <line x1=\"0\" y1=\"60\" x2=\"800\" y2=\"60\" stroke=\"#1E293B\" stroke-width=\"1.5\" opacity=\"0.6\"/>\n  <line x1=\"0\" y1=\"120\" x2=\"800\" y2=\"120\" stroke=\"#1E293B\" stroke-width=\"1.5\" opacity=\"0.6\"/>\n  <line x1=\"0\" y1=\"180\" x2=\"800\" y2=\"180\" stroke=\"#1E293B\" stroke-width=\"1.5\" opacity=\"0.6\"/>\n  <line x1=\"0\" y1=\"240\" x2=\"800\" y2=\"240\" stroke=\"#1E293B\" stroke-width=\"1.5\" opacity=\"0.6\"/>\n\n  <!-- Galvanized Electrical Conduit Pipe & Industrial Bell Light -->\n  <path d=\"M40 0 L40 45 L500 45 L500 70\" fill=\"none\" stroke=\"#94A3B8\" stroke-width=\"4\"/>\n  <polygon points=\"480,70 520,70 535,90 465,90\" fill=\"#334155\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n  <ellipse cx=\"500\" cy=\"90\" rx=\"35\" ry=\"8\" fill=\"#FEF08A\"/>\n  <!-- Warm task light cone illuminating the workbench -->\n  <polygon points=\"465,90 535,90 620,265 380,265\" fill=\"#FEF08A\" opacity=\"0.08\"/>\n\n  <!-- Workshop Heavy Duty Concrete Garage Floor -->\n  <g id=\"w-floor-layer\">\n    <rect x=\"0\" y=\"340\" width=\"800\" height=\"160\" fill=\"url(#w-floor)\"/>\n    <line x1=\"0\" y1=\"340\" x2=\"800\" y2=\"340\" stroke=\"#1E293B\" stroke-width=\"4\"/>\n    <line x1=\"0\" y1=\"420\" x2=\"800\" y2=\"420\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <!-- Floor shadows -->\n    <ellipse cx=\"380\" cy=\"455\" rx=\"220\" ry=\"25\" fill=\"#0F172A\" opacity=\"0.4\"/>\n    <ellipse cx=\"560\" cy=\"455\" rx=\"50\" ry=\"16\" fill=\"#0F172A\" opacity=\"0.35\"/>\n  </g>\n\n  <!-- Left: Organized Tool Pegboard Wall (hs-t3w-pegboard at 208, 125) -->\n  <g id=\"t3w-pegboard\" filter=\"url(#w-shadow)\">\n    <!-- Pegboard Panel Frame -->\n    <rect x=\"50\" y=\"40\" width=\"310\" height=\"185\" rx=\"4\" fill=\"#E2E8F0\" stroke=\"#0F172A\" stroke-width=\"3\"/>\n    <!-- Perforated Peg Holes Grid -->\n    <g opacity=\"0.35\">\n      <circle cx=\"70\" cy=\"60\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"95\" cy=\"60\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"120\" cy=\"60\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"145\" cy=\"60\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"170\" cy=\"60\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"195\" cy=\"60\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"220\" cy=\"60\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"245\" cy=\"60\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"270\" cy=\"60\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"295\" cy=\"60\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"320\" cy=\"60\" r=\"1.5\" fill=\"#0F172A\"/>\n      <circle cx=\"70\" cy=\"90\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"95\" cy=\"90\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"120\" cy=\"90\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"145\" cy=\"90\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"170\" cy=\"90\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"195\" cy=\"90\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"220\" cy=\"90\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"245\" cy=\"90\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"270\" cy=\"90\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"295\" cy=\"90\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"320\" cy=\"90\" r=\"1.5\" fill=\"#0F172A\"/>\n      <circle cx=\"70\" cy=\"120\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"95\" cy=\"120\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"120\" cy=\"120\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"145\" cy=\"120\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"170\" cy=\"120\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"195\" cy=\"120\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"220\" cy=\"120\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"245\" cy=\"120\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"270\" cy=\"120\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"295\" cy=\"120\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"320\" cy=\"120\" r=\"1.5\" fill=\"#0F172A\"/>\n      <circle cx=\"70\" cy=\"150\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"95\" cy=\"150\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"120\" cy=\"150\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"145\" cy=\"150\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"170\" cy=\"150\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"195\" cy=\"150\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"220\" cy=\"150\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"245\" cy=\"150\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"270\" cy=\"150\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"295\" cy=\"150\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"320\" cy=\"150\" r=\"1.5\" fill=\"#0F172A\"/>\n      <circle cx=\"70\" cy=\"180\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"95\" cy=\"180\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"120\" cy=\"180\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"145\" cy=\"180\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"170\" cy=\"180\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"195\" cy=\"180\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"220\" cy=\"180\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"245\" cy=\"180\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"270\" cy=\"180\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"295\" cy=\"180\" r=\"1.5\" fill=\"#0F172A\"/><circle cx=\"320\" cy=\"180\" r=\"1.5\" fill=\"#0F172A\"/>\n    </g>\n\n    <!-- Combination Wrenches in Descending Sizes Hanging on Pegs -->\n    <g id=\"w-wrenches\">\n      <!-- Wrench 24mm -->\n      <line x1=\"72\" y1=\"65\" x2=\"72\" y2=\"155\" stroke=\"url(#w-chrome)\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n      <circle cx=\"72\" cy=\"65\" r=\"7\" fill=\"none\" stroke=\"url(#w-chrome)\" stroke-width=\"3\"/>\n      <!-- Wrench 19mm -->\n      <line x1=\"92\" y1=\"70\" x2=\"92\" y2=\"150\" stroke=\"url(#w-chrome)\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n      <circle cx=\"92\" cy=\"70\" r=\"6\" fill=\"none\" stroke=\"url(#w-chrome)\" stroke-width=\"2.5\"/>\n      <!-- Wrench 17mm -->\n      <line x1=\"110\" y1=\"75\" x2=\"110\" y2=\"145\" stroke=\"url(#w-chrome)\" stroke-width=\"5.5\" stroke-linecap=\"round\"/>\n      <circle cx=\"110\" cy=\"75\" r=\"5.5\" fill=\"none\" stroke=\"url(#w-chrome)\" stroke-width=\"2.5\"/>\n      <!-- Wrench 14mm -->\n      <line x1=\"126\" y1=\"80\" x2=\"126\" y2=\"140\" stroke=\"url(#w-chrome)\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n      <circle cx=\"126\" cy=\"80\" r=\"5\" fill=\"none\" stroke=\"url(#w-chrome)\" stroke-width=\"2\"/>\n      <!-- Wrench 12mm -->\n      <line x1=\"140\" y1=\"85\" x2=\"140\" y2=\"135\" stroke=\"url(#w-chrome)\" stroke-width=\"4.5\" stroke-linecap=\"round\"/>\n      <circle cx=\"140\" cy=\"85\" r=\"4.5\" fill=\"none\" stroke=\"url(#w-chrome)\" stroke-width=\"2\"/>\n      <!-- Wrench 10mm -->\n      <line x1=\"154\" y1=\"90\" x2=\"154\" y2=\"130\" stroke=\"url(#w-chrome)\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n      <circle cx=\"154\" cy=\"90\" r=\"4\" fill=\"none\" stroke=\"url(#w-chrome)\" stroke-width=\"1.8\"/>\n    </g>\n\n    <!-- Heavy Ball-Peen Hammer & Claw Hammer Hanging -->\n    <line x1=\"185\" y1=\"75\" x2=\"185\" y2=\"160\" stroke=\"#D7A15C\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n    <rect x=\"175\" y=\"70\" width=\"20\" height=\"12\" rx=\"2\" fill=\"#475569\" stroke=\"#0F172A\" stroke-width=\"1.5\"/>\n\n    <line x1=\"215\" y1=\"70\" x2=\"215\" y2=\"165\" stroke=\"#F59E0B\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n    <rect x=\"205\" y=\"65\" width=\"24\" height=\"10\" rx=\"2\" fill=\"#475569\" stroke=\"#0F172A\" stroke-width=\"1.5\"/>\n\n    <!-- Hacksaw with Red Frame -->\n    <path d=\"M245 75 L310 75 L310 115 L245 115 Z\" fill=\"none\" stroke=\"#DC2626\" stroke-width=\"3\" stroke-linejoin=\"round\"/>\n    <line x1=\"245\" y1=\"115\" x2=\"310\" y2=\"115\" stroke=\"#CBD5E1\" stroke-width=\"2\"/>\n    <rect x=\"238\" y=\"70\" width=\"10\" height=\"24\" rx=\"2\" fill=\"#0F172A\"/>\n\n    <!-- Set of 4 Color-Coded Screwdrivers -->\n    <line x1=\"250\" y1=\"150\" x2=\"250\" y2=\"195\" stroke=\"#CBD5E1\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    <rect x=\"246\" y=\"132\" width=\"8\" height=\"20\" rx=\"3\" fill=\"#2563EB\"/>\n\n    <line x1=\"270\" y1=\"145\" x2=\"270\" y2=\"195\" stroke=\"#CBD5E1\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    <rect x=\"266\" y=\"128\" width=\"8\" height=\"20\" rx=\"3\" fill=\"#EF4444\"/>\n\n    <line x1=\"290\" y1=\"155\" x2=\"290\" y2=\"195\" stroke=\"#CBD5E1\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <rect x=\"286\" y=\"138\" width=\"8\" height=\"20\" rx=\"3\" fill=\"#F59E0B\"/>\n\n    <line x1=\"310\" y1=\"160\" x2=\"310\" y2=\"195\" stroke=\"#CBD5E1\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <rect x=\"306\" y=\"145\" width=\"8\" height=\"18\" rx=\"3\" fill=\"#10B981\"/>\n  </g>\n\n  <!-- Heavy Duty Wood & Steel Workbench (hs-t3w-bench at 384, 275) -->\n  <g id=\"t3w-workbench\" filter=\"url(#w-shadow)\">\n    <!-- Heavy Tubular Steel Legs with Cross Bracing -->\n    <rect x=\"135\" y=\"275\" width=\"16\" height=\"175\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <rect x=\"630\" y=\"275\" width=\"16\" height=\"175\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <!-- Bottom cross stretcher and lower storage shelf -->\n    <line x1=\"140\" y1=\"395\" x2=\"640\" y2=\"395\" stroke=\"#334155\" stroke-width=\"7\"/>\n    <rect x=\"145\" y=\"385\" width=\"490\" height=\"12\" fill=\"#475569\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n\n    <!-- Spare electric motor on bottom shelf -->\n    <rect x=\"480\" y=\"352\" width=\"60\" height=\"34\" rx=\"4\" fill=\"#0284C7\" stroke=\"#0369A1\" stroke-width=\"1.5\"/>\n    <circle cx=\"480\" cy=\"369\" r=\"10\" fill=\"#334155\"/>\n    <line x1=\"470\" y1=\"369\" x2=\"480\" y2=\"369\" stroke=\"#CBD5E1\" stroke-width=\"4\"/>\n\n    <!-- Solid Hardwood Butcher Block Workbench Top (hs-t3w-bench at 384, 275) -->\n    <!-- Front Edge Face -->\n    <polygon points=\"120,265 650,265 650,285 120,285\" fill=\"#8F561F\" stroke=\"#451A03\" stroke-width=\"2\"/>\n    <!-- Top Work Surface in 3D Perspective -->\n    <polygon points=\"140,225 620,225 650,265 120,265\" fill=\"url(#w-wood)\" stroke=\"#8F561F\" stroke-width=\"2\"/>\n    <line x1=\"120\" y1=\"265\" x2=\"650\" y2=\"265\" stroke=\"#FDE68A\" stroke-width=\"1.5\" opacity=\"0.5\"/>\n\n    <!-- Cast Iron Heavy Bench Vise on Left Corner -->\n    <g id=\"w-bench-vise\" filter=\"url(#w-elem-shadow)\">\n      <rect x=\"122\" y=\"228\" width=\"38\" height=\"36\" rx=\"4\" fill=\"url(#w-vise-iron)\" stroke=\"#075985\" stroke-width=\"1.5\"/>\n      <!-- Serrated Steel Vise Jaws -->\n      <rect x=\"122\" y=\"222\" width=\"15\" height=\"12\" fill=\"#CBD5E1\" stroke=\"#334155\" stroke-width=\"1\"/>\n      <rect x=\"145\" y=\"222\" width=\"15\" height=\"12\" fill=\"#CBD5E1\" stroke=\"#334155\" stroke-width=\"1\"/>\n      <!-- Vise screw shaft & rotating handle -->\n      <circle cx=\"160\" cy=\"246\" r=\"6\" fill=\"#334155\"/>\n      <line x1=\"160\" y1=\"225\" x2=\"160\" y2=\"268\" stroke=\"#CBD5E1\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n      <circle cx=\"160\" cy=\"225\" r=\"3\" fill=\"#0F172A\"/>\n      <circle cx=\"160\" cy=\"268\" r=\"3\" fill=\"#0F172A\"/>\n    </g>\n  </g>\n\n  <!-- Open Red Metal Toolbox on Table (hs-t3w-toolbox at 168, 230) -->\n  <g id=\"t3w-toolbox\" filter=\"url(#w-shadow)\">\n    <!-- Main Box Body in Perspective -->\n    <polygon points=\"170,228 245,228 252,258 175,258\" fill=\"url(#w-red-box)\" stroke=\"#7F1D1D\" stroke-width=\"1.5\"/>\n    <!-- Open Cantilever Lid Tilted Back -->\n    <polygon points=\"170,228 245,228 248,206 173,206\" fill=\"#B91C1C\" stroke=\"#7F1D1D\" stroke-width=\"1.5\"/>\n    <line x1=\"172\" y1=\"206\" x2=\"249\" y2=\"206\" stroke=\"#EF4444\" stroke-width=\"2\"/>\n    <!-- Metal handle -->\n    <path d=\"M198 206 L198 196 L224 196 L224 206\" fill=\"none\" stroke=\"#CBD5E1\" stroke-width=\"2.5\"/>\n    <!-- Socket wrench & ratchets inside toolbox -->\n    <rect x=\"182\" y=\"235\" width=\"55\" height=\"16\" fill=\"#1E293B\"/>\n    <circle cx=\"192\" cy=\"243\" r=\"3.5\" fill=\"#CBD5E1\"/>\n    <circle cx=\"202\" cy=\"243\" r=\"3.5\" fill=\"#CBD5E1\"/>\n    <circle cx=\"212\" cy=\"243\" r=\"3.5\" fill=\"#CBD5E1\"/>\n    <circle cx=\"222\" cy=\"243\" r=\"3.5\" fill=\"#CBD5E1\"/>\n    <!-- Chrome draw latches on front -->\n    <rect x=\"188\" y=\"244\" width=\"8\" height=\"6\" fill=\"#CBD5E1\"/>\n    <rect x=\"232\" y=\"244\" width=\"8\" height=\"6\" fill=\"#CBD5E1\"/>\n  </g>\n\n  <!-- Mechanical Equipment / Gearbox on Workbench (hs-t3w-equipment at 432, 225) -->\n  <g id=\"t3w-equipment-part\" filter=\"url(#w-shadow)\">\n    <!-- Industrial Cast Iron Gearbox Casing -->\n    <rect x=\"405\" y=\"210\" width=\"70\" height=\"48\" rx=\"6\" fill=\"#475569\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n    <!-- Circular Bearing Hub Assembly -->\n    <circle cx=\"440\" cy=\"234\" r=\"16\" fill=\"#334155\" stroke=\"#CBD5E1\" stroke-width=\"2\"/>\n    <circle cx=\"440\" cy=\"234\" r=\"9\" fill=\"#1E293B\"/>\n    <!-- Exposed Precision Gear Teeth -->\n    <path d=\"M436 218 L444 218 M440 214 L440 222 M452 230 L458 238 M448 246 L456 246\" stroke=\"#F59E0B\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <!-- Machine Shaft extending out -->\n    <rect x=\"437\" y=\"196\" width=\"6\" height=\"16\" fill=\"#CBD5E1\" stroke=\"#64748B\" stroke-width=\"1\"/>\n    <!-- Hex bolts fastening cover -->\n    <circle cx=\"414\" cy=\"218\" r=\"2.5\" fill=\"#CBD5E1\"/>\n    <circle cx=\"466\" cy=\"218\" r=\"2.5\" fill=\"#CBD5E1\"/>\n    <circle cx=\"414\" cy=\"248\" r=\"2.5\" fill=\"#CBD5E1\"/>\n    <circle cx=\"466\" cy=\"248\" r=\"2.5\" fill=\"#CBD5E1\"/>\n  </g>\n\n  <!-- Mechanic Bending Over Machine & Measuring with Calipers -->\n  <!-- (hs-t3w-bend at 544, 275; hs-t3w-inspect at 512, 210; hs-t3w-measure at 440, 195; hs-t3w-gloves at 448, 200) -->\n  <g id=\"t3w-mechanic\">\n    <!-- Legs in Durable Heavy Canvas Overalls (Navy Blue) -->\n    <path d=\"M545 350 L538 446 L552 446 L560 365 L570 446 L584 446 L578 350 Z\" fill=\"#1E3A8A\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <!-- Steel-Toed Leather Work Boots -->\n    <polygon points=\"530,446 554,446 556,456 528,456\" fill=\"#451A03\"/>\n    <polygon points=\"566,446 590,446 592,456 564,456\" fill=\"#451A03\"/>\n\n    <!-- Torso in Overalls BENDING FORWARD OVER BENCH (hs-t3w-bend at 544, 275) -->\n    <path d=\"M525 245 C525 220, 580 230, 580 255 L574 352 L532 352 Z\" fill=\"#1E3A8A\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <!-- Grey work t-shirt showing under overalls -->\n    <polygon points=\"538,225 548,245 558,225\" fill=\"#64748B\"/>\n    <!-- Brass zipper and breast pocket with pen -->\n    <line x1=\"552\" y1=\"240\" x2=\"550\" y2=\"350\" stroke=\"#F59E0B\" stroke-width=\"2\"/>\n    <rect x=\"532\" y=\"250\" width=\"14\" height=\"14\" rx=\"2\" fill=\"#172554\"/>\n    <line x1=\"535\" y1=\"246\" x2=\"535\" y2=\"254\" stroke=\"#DC2626\" stroke-width=\"2\"/>\n\n    <!-- Neck & Head (Focused downward examining tolerances: hs-t3w-inspect at 512, 210) -->\n    <rect x=\"526\" y=\"210\" width=\"10\" height=\"14\" fill=\"#FDBA74\"/>\n    <ellipse cx=\"524\" cy=\"198\" rx=\"13\" ry=\"16\" fill=\"#FDBA74\"/>\n    <!-- Short Brown Hair -->\n    <path d=\"M512 195 C510 178, 536 175, 536 192 C536 198, 532 205, 528 208 Z\" fill=\"#451A03\"/>\n    <!-- Clear Protective Safety Goggles / Glasses -->\n    <rect x=\"514\" y=\"194\" width=\"14\" height=\"7\" rx=\"2\" fill=\"#BAE6FD\" opacity=\"0.6\" stroke=\"#0F172A\" stroke-width=\"1.5\"/>\n    <path d=\"M528 197 L534 195\" stroke=\"#0F172A\" stroke-width=\"1.5\"/>\n    <!-- Focused facial expression -->\n    <circle cx=\"518\" cy=\"198\" r=\"1.5\" fill=\"#0F172A\"/>\n\n    <!-- Left Arm supporting body on workbench edge -->\n    <path d=\"M532 245 Q515 260 500 270\" fill=\"none\" stroke=\"#1E3A8A\" stroke-width=\"12\" stroke-linecap=\"round\"/>\n    <!-- Heavy-Duty Work Glove (hs-t3w-gloves at 448, 200) -->\n    <ellipse cx=\"498\" cy=\"272\" rx=\"6\" ry=\"5\" fill=\"#D97706\" stroke=\"#92400E\" stroke-width=\"1.5\"/>\n\n    <!-- Right Arm EXTENDED MEASURING EQUIPMENT WITH CALIPER -->\n    <!-- (hs-t3w-measure at 440, 195; hs-t3w-inspect at 512, 210) -->\n    <path d=\"M538 238 Q485 210 452 202\" fill=\"none\" stroke=\"#1E3A8A\" stroke-width=\"12\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"450\" cy=\"200\" rx=\"6\" ry=\"5\" fill=\"#D97706\" stroke=\"#92400E\" stroke-width=\"1.5\"/>\n\n    <!-- Digital Vernier Caliper / Micrometer in Hand (hs-t3w-measure at 440, 195) -->\n    <!-- Caliper Main Beam Scale -->\n    <line x1=\"428\" y1=\"195\" x2=\"455\" y2=\"195\" stroke=\"url(#w-chrome)\" stroke-width=\"3\"/>\n    <!-- Caliper External Jaws Clamping Shaft -->\n    <line x1=\"432\" y1=\"192\" x2=\"432\" y2=\"204\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <line x1=\"442\" y1=\"192\" x2=\"442\" y2=\"204\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <!-- Digital LCD display unit -->\n    <rect x=\"436\" y=\"190\" width=\"10\" height=\"7\" rx=\"1\" fill=\"#1E293B\" stroke=\"#64748B\" stroke-width=\"0.8\"/>\n    <rect x=\"438\" y=\"192\" width=\"6\" height=\"3\" fill=\"#BBF7D0\"/>\n  </g>\n</svg>",
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
        "svg": "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" class=\"part1-svg-art\">\n  <defs>\n    <!-- Outdoor roadway sky -->\n    <linearGradient id=\"rw-sky\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#38BDF8\"/>\n      <stop offset=\"60%\" stop-color=\"#BAE6FD\"/>\n      <stop offset=\"100%\" stop-color=\"#E0F2FE\"/>\n    </linearGradient>\n\n    <!-- Fresh steaming dark asphalt gradient -->\n    <linearGradient id=\"rw-fresh-asphalt\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#1E293B\"/>\n      <stop offset=\"50%\" stop-color=\"#0F172A\"/>\n      <stop offset=\"100%\" stop-color=\"#020617\"/>\n    </linearGradient>\n\n    <!-- Existing cured asphalt roadway -->\n    <linearGradient id=\"rw-old-asphalt\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#64748B\"/>\n      <stop offset=\"100%\" stop-color=\"#475569\"/>\n    </linearGradient>\n\n    <!-- Concrete curb & sidewalk pavement -->\n    <linearGradient id=\"rw-curb\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#CBD5E1\"/>\n      <stop offset=\"50%\" stop-color=\"#E2E8F0\"/>\n      <stop offset=\"100%\" stop-color=\"#94A3B8\"/>\n    </linearGradient>\n\n    <!-- Fluorescent Traffic Safety Cone Orange -->\n    <linearGradient id=\"rw-cone-orange\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#EA580C\"/>\n      <stop offset=\"50%\" stop-color=\"#FB923C\"/>\n      <stop offset=\"100%\" stop-color=\"#C2410C\"/>\n    </linearGradient>\n\n    <!-- Road roller diesel machine yellow -->\n    <linearGradient id=\"rw-roller-yellow\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#FACC15\"/>\n      <stop offset=\"50%\" stop-color=\"#EAB308\"/>\n      <stop offset=\"100%\" stop-color=\"#CA8A04\"/>\n    </linearGradient>\n\n    <!-- Steel Compactor Drum -->\n    <linearGradient id=\"rw-steel-drum\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#334155\"/>\n      <stop offset=\"50%\" stop-color=\"#64748B\"/>\n      <stop offset=\"100%\" stop-color=\"#1E293B\"/>\n    </linearGradient>\n\n    <!-- Shadows -->\n    <filter id=\"rw-shadow\" x=\"-10%\" y=\"-10%\" width=\"125%\" height=\"125%\">\n      <feDropShadow dx=\"0\" dy=\"6\" stdDeviation=\"8\" flood-color=\"#0F172A\" flood-opacity=\"0.3\"/>\n    </filter>\n    <filter id=\"rw-elem-shadow\" x=\"-8%\" y=\"-8%\" width=\"120%\" height=\"120%\">\n      <feDropShadow dx=\"0\" dy=\"3\" stdDeviation=\"4\" flood-color=\"#0F172A\" flood-opacity=\"0.2\"/>\n    </filter>\n  </defs>\n\n  <!-- Clear Sky -->\n  <rect x=\"0\" y=\"0\" width=\"800\" height=\"260\" fill=\"url(#rw-sky)\"/>\n\n  <!-- Distant City Background Skyline & Trees -->\n  <g id=\"t3r-backdrop\" opacity=\"0.65\">\n    <rect x=\"40\" y=\"110\" width=\"45\" height=\"150\" fill=\"#64748B\" opacity=\"0.6\"/>\n    <rect x=\"95\" y=\"80\" width=\"55\" height=\"180\" fill=\"#475569\" opacity=\"0.7\"/>\n    <rect x=\"160\" y=\"125\" width=\"40\" height=\"135\" fill=\"#64748B\" opacity=\"0.5\"/>\n    <ellipse cx=\"230\" cy=\"245\" rx=\"35\" ry=\"25\" fill=\"#15803D\" opacity=\"0.7\"/>\n    <ellipse cx=\"280\" cy=\"240\" rx=\"40\" ry=\"28\" fill=\"#166534\" opacity=\"0.8\"/>\n  </g>\n\n  <!-- Diamond Road Construction Ahead Warning Sign (Left Background) -->\n  <g id=\"rw-warning-sign\" filter=\"url(#rw-elem-shadow)\">\n    <!-- Sign Post -->\n    <rect x=\"125\" y=\"145\" width=\"4\" height=\"125\" fill=\"#475569\"/>\n    <!-- Orange Diamond Sign (Rotated Square) -->\n    <rect x=\"110\" y=\"120\" width=\"34\" height=\"34\" rx=\"2\" fill=\"#EA580C\" stroke=\"#0F172A\" stroke-width=\"1.8\" transform=\"rotate(45 127 137)\"/>\n    <!-- Worker with shovel pictogram symbol on sign -->\n    <circle cx=\"127\" cy=\"130\" r=\"2.5\" fill=\"#0F172A\"/>\n    <line x1=\"127\" y1=\"133\" x2=\"127\" y2=\"142\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <line x1=\"123\" y1=\"140\" x2=\"133\" y2=\"144\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n  </g>\n\n  <!-- Heavy Tandem Road Roller / Asphalt Compactor (Right Background) -->\n  <g id=\"t3r-roller\" filter=\"url(#rw-shadow)\">\n    <!-- Heavy Diesel Engine Compartment & Cab -->\n    <rect x=\"525\" y=\"170\" width=\"155\" height=\"65\" rx=\"5\" fill=\"url(#rw-roller-yellow)\" stroke=\"#A16207\" stroke-width=\"2\"/>\n    <!-- Roll Cage / ROPS Frame -->\n    <path d=\"M575 170 L575 118 L645 118 L645 170\" fill=\"none\" stroke=\"#1E293B\" stroke-width=\"4.5\"/>\n    <rect x=\"568\" y=\"112\" width=\"84\" height=\"8\" rx=\"2\" fill=\"#1E293B\"/>\n    <!-- Flashing Amber Beacon on Roof -->\n    <rect x=\"605\" y=\"104\" width=\"10\" height=\"9\" rx=\"2\" fill=\"#F59E0B\" stroke=\"#D97706\" stroke-width=\"1\"/>\n    <!-- Operator Seat & Steering Wheel -->\n    <rect x=\"590\" y=\"145\" width=\"22\" height=\"25\" fill=\"#334155\"/>\n    <line x1=\"620\" y1=\"148\" x2=\"615\" y2=\"160\" stroke=\"#0F172A\" stroke-width=\"3\"/>\n    <!-- Exhaust Stack Pipe -->\n    <rect x=\"540\" y=\"140\" width=\"6\" height=\"30\" fill=\"#334155\"/>\n    <path d=\"M540 140 Q535 135 530 135\" fill=\"none\" stroke=\"#334155\" stroke-width=\"3\"/>\n\n    <!-- Front & Rear Heavy Cylindrical Steel Rolling Drums -->\n    <rect x=\"510\" y=\"235\" width=\"55\" height=\"52\" rx=\"14\" fill=\"url(#rw-steel-drum)\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <circle cx=\"537\" cy=\"261\" r=\"8\" fill=\"#94A3B8\"/>\n    <rect x=\"635\" y=\"235\" width=\"55\" height=\"52\" rx=\"14\" fill=\"url(#rw-steel-drum)\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <circle cx=\"662\" cy=\"261\" r=\"8\" fill=\"#94A3B8\"/>\n  </g>\n\n  <!-- Asphalt Roadway Surface & Work Area -->\n  <g id=\"rw-road-surface\">\n    <!-- Existing Cured Roadway (Center & Back) -->\n    <polygon points=\"0,260 800,260 800,500 0,500\" fill=\"url(#rw-old-asphalt)\"/>\n    <line x1=\"0\" y1=\"260\" x2=\"800\" y2=\"260\" stroke=\"#334155\" stroke-width=\"2\"/>\n\n    <!-- Fresh Dark Asphalt Patch Being Paved & Repaired (hs-t3r-pave at 240, 375; hs-t3r-repair at 304, 325) -->\n    <polygon points=\"110,320 460,320 420,490 60,490\" fill=\"url(#rw-fresh-asphalt)\" stroke=\"#020617\" stroke-width=\"2\"/>\n    <!-- Steam rising gently from fresh hot asphalt -->\n    <path d=\"M180 340 Q175 320 182 305\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\" opacity=\"0.35\"/>\n    <path d=\"M260 335 Q255 315 262 300\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"2.5\" stroke-linecap=\"round\" opacity=\"0.4\"/>\n    <path d=\"M340 345 Q345 325 338 310\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\" opacity=\"0.35\"/>\n  </g>\n\n  <!-- Raised Concrete Curb & Sidewalk Pavement (Right Foreground) (hs-t3r-pavement at 600, 390) -->\n  <g id=\"t3r-sidewalk\" filter=\"url(#rw-shadow)\">\n    <!-- Sidewalk Pavement Slab -->\n    <polygon points=\"520,290 800,290 800,500 480,500\" fill=\"url(#rw-curb)\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    <!-- Curb Bevel Edge facing road -->\n    <polygon points=\"505,300 520,290 480,500 465,500\" fill=\"#94A3B8\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n    <!-- Sidewalk expansion grooves / grid joints -->\n    <line x1=\"560\" y1=\"320\" x2=\"780\" y2=\"320\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    <line x1=\"530\" y1=\"380\" x2=\"800\" y2=\"380\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    <line x1=\"500\" y1=\"440\" x2=\"800\" y2=\"440\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    <line x1=\"650\" y1=\"290\" x2=\"620\" y2=\"500\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n  </g>\n\n  <!-- Fluorescent Orange Traffic Safety Cones (hs-t3r-cone at 96, 425) -->\n  <g id=\"t3r-cones\" filter=\"url(#rw-shadow)\">\n    <!-- Cone 1 (Foreground Left - Prominent at 96, 425) -->\n    <g id=\"rw-cone-1\">\n      <!-- Heavy Square Black Rubber Base -->\n      <polygon points=\"70,442 122,442 128,450 64,450\" fill=\"#0F172A\"/>\n      <!-- Conical Body with Reflective Silver Stripe -->\n      <polygon points=\"91,385 101,385 116,442 76,442\" fill=\"url(#rw-cone-orange)\" stroke=\"#C2410C\" stroke-width=\"1\"/>\n      <!-- High-Intensity Micro-Prismatic Reflective White Bands -->\n      <polygon points=\"88,400 104,400 108,414 84,414\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"0.8\"/>\n      <polygon points=\"82,422 110,422 113,432 79,432\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"0.8\"/>\n      <ellipse cx=\"96\" cy=\"385\" rx=\"5\" ry=\"2\" fill=\"#C2410C\"/>\n    </g>\n\n    <!-- Cone 2 (Midground along work perimeter) -->\n    <g id=\"rw-cone-2\">\n      <polygon points=\"120,336 155,336 158,342 116,342\" fill=\"#0F172A\"/>\n      <polygon points=\"134,295 141,295 152,336 124,336\" fill=\"url(#rw-cone-orange)\"/>\n      <polygon points=\"132,306 143,306 146,316 129,316\" fill=\"#FFFFFF\"/>\n    </g>\n\n    <!-- Cone 3 (Far corner) -->\n    <g id=\"rw-cone-3\">\n      <polygon points=\"435,325 465,325 468,330 432,330\" fill=\"#0F172A\"/>\n      <polygon points=\"447,290 453,290 462,325 438,325\" fill=\"url(#rw-cone-orange)\"/>\n      <polygon points=\"445,300 455,300 457,308 443,308\" fill=\"#FFFFFF\"/>\n    </g>\n  </g>\n\n  <!-- Road Worker 1: Spreading Hot Asphalt with Shovel -->\n  <!-- (hs-t3r-shovel at 224, 410; hs-t3r-uniform at 296, 310; hs-t3r-pave at 240, 375; hs-t3r-repair at 304, 325) -->\n  <g id=\"t3r-worker-shoveling\">\n    <!-- Work Trousers with Reflective Ankle Bands -->\n    <path d=\"M280 355 L268 448 L282 448 L296 365 L308 448 L322 448 L314 355 Z\" fill=\"#334155\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <rect x=\"268\" y=\"428\" width=\"14\" height=\"6\" fill=\"#FACC15\"/>\n    <rect x=\"308\" y=\"428\" width=\"14\" height=\"6\" fill=\"#FACC15\"/>\n    <!-- Steel-Toe Work Boots -->\n    <polygon points=\"260,448 284,448 286,456 258,456\" fill=\"#0F172A\"/>\n    <polygon points=\"302,448 326,448 328,456 300,456\" fill=\"#0F172A\"/>\n\n    <!-- Hi-Vis Fluorescent Orange Safety Vest with Silver X-Stripes (hs-t3r-uniform at 296, 310) -->\n    <path d=\"M272 250 C272 230, 320 230, 324 250 L318 358 L276 358 Z\" fill=\"url(#rw-cone-orange)\" stroke=\"#C2410C\" stroke-width=\"2\"/>\n    <!-- Silver Retro-Reflective Harness Stripes -->\n    <line x1=\"284\" y1=\"235\" x2=\"312\" y2=\"355\" stroke=\"#FFFFFF\" stroke-width=\"4\"/>\n    <line x1=\"312\" y1=\"235\" x2=\"284\" y2=\"355\" stroke=\"#FFFFFF\" stroke-width=\"4\"/>\n    <line x1=\"274\" y1=\"310\" x2=\"320\" y2=\"310\" stroke=\"#FFFFFF\" stroke-width=\"3\"/>\n\n    <!-- Neck & Head with Hard Hat & Safety Glasses -->\n    <rect x=\"292\" y=\"222\" width=\"10\" height=\"12\" fill=\"#FDBA74\"/>\n    <ellipse cx=\"296\" cy=\"208\" rx=\"12\" ry=\"15\" fill=\"#FDBA74\"/>\n    <!-- White Hard Hat with Front Brim -->\n    <path d=\"M284 204 C284 188, 312 188, 312 204 Z\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"2\"/>\n    <ellipse cx=\"298\" cy=\"204\" rx=\"16\" ry=\"5\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1.2\"/>\n\n    <!-- Arms Gripping Heavy Shovel (Bent in action) -->\n    <path d=\"M280 255 Q262 285 252 320\" fill=\"none\" stroke=\"#EA580C\" stroke-width=\"11\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"250\" cy=\"322\" rx=\"6\" ry=\"5\" fill=\"#D97706\"/>\n\n    <path d=\"M315 255 Q305 295 285 335\" fill=\"none\" stroke=\"#EA580C\" stroke-width=\"11\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"283\" cy=\"338\" rx=\"6\" ry=\"5\" fill=\"#D97706\"/>\n\n    <!-- Heavy Duty Square-Point Asphalt Transfer Shovel (hs-t3r-shovel at 224, 410) -->\n    <!-- Ash Wood / Fiberglass Shaft -->\n    <line x1=\"288\" y1=\"310\" x2=\"228\" y2=\"400\" stroke=\"#D7A15C\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n    <!-- Steel D-Grip Handle on End -->\n    <rect x=\"284\" y=\"300\" width=\"12\" height=\"12\" rx=\"2\" fill=\"none\" stroke=\"#0F172A\" stroke-width=\"2.5\"/>\n    <!-- Tempered Steel Shovel Blade scooping hot asphalt (hs-t3r-shovel at 224, 410) -->\n    <polygon points=\"212,395 236,395 242,425 210,425\" fill=\"#475569\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <!-- Black asphalt mixture on blade -->\n    <ellipse cx=\"224\" cy=\"410\" rx=\"12\" ry=\"7\" fill=\"#020617\"/>\n  </g>\n\n  <!-- Road Worker 2: Sweeping Debris with Push Broom (hs-t3r-sweep at 496, 350; hs-t3r-broom at 440, 440) -->\n  <g id=\"t3r-worker-sweeping\">\n    <!-- Work Trousers (Navy) -->\n    <path d=\"M482 355 L475 448 L488 448 L496 365 L505 448 L518 448 L512 355 Z\" fill=\"#1E3A8A\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <!-- Work Boots -->\n    <polygon points=\"468,448 490,448 492,456 466,456\" fill=\"#0F172A\"/>\n    <polygon points=\"500,448 522,448 524,456 498,456\" fill=\"#0F172A\"/>\n\n    <!-- Hi-Vis Yellow-Green Vest (hs-t3r-sweep at 496, 350) -->\n    <path d=\"M475 250 C475 230, 520 230, 522 250 L516 358 L478 358 Z\" fill=\"#84CC16\" stroke=\"#65A30D\" stroke-width=\"2\"/>\n    <line x1=\"486\" y1=\"235\" x2=\"486\" y2=\"355\" stroke=\"#FFFFFF\" stroke-width=\"3.5\"/>\n    <line x1=\"510\" y1=\"235\" x2=\"510\" y2=\"355\" stroke=\"#FFFFFF\" stroke-width=\"3.5\"/>\n\n    <!-- Head & Yellow Hard Hat -->\n    <rect x=\"492\" y=\"222\" width=\"10\" height=\"12\" fill=\"#FDBA74\"/>\n    <ellipse cx=\"496\" cy=\"208\" rx=\"12\" ry=\"15\" fill=\"#FDBA74\"/>\n    <path d=\"M484 204 C484 188, 512 188, 512 204 Z\" fill=\"#FACC15\" stroke=\"#CA8A04\" stroke-width=\"2\"/>\n    <ellipse cx=\"498\" cy=\"204\" rx=\"16\" ry=\"5\" fill=\"#FACC15\" stroke=\"#CA8A04\" stroke-width=\"1.2\"/>\n\n    <!-- Arms Sweeping with Push Broom -->\n    <path d=\"M480 255 Q465 295 450 335\" fill=\"none\" stroke=\"#65A30D\" stroke-width=\"11\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"448\" cy=\"338\" rx=\"6\" ry=\"5\" fill=\"#D97706\"/>\n\n    <path d=\"M512 255 Q495 305 478 355\" fill=\"none\" stroke=\"#65A30D\" stroke-width=\"11\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"476\" cy=\"358\" rx=\"6\" ry=\"5\" fill=\"#D97706\"/>\n\n    <!-- 24-inch Heavy Duty Street Push Broom (hs-t3r-broom at 440, 440) -->\n    <!-- Broom Long Handle -->\n    <line x1=\"485\" y1=\"315\" x2=\"435\" y2=\"425\" stroke=\"#A16207\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n    <!-- Cast Steel Handle Brace Clamps -->\n    <line x1=\"430\" y1=\"422\" x2=\"420\" y2=\"436\" stroke=\"#334155\" stroke-width=\"2.5\"/>\n    <line x1=\"440\" y1=\"422\" x2=\"455\" y2=\"436\" stroke=\"#334155\" stroke-width=\"2.5\"/>\n    <!-- Hardwood Broom Head Block -->\n    <polygon points=\"405,432 468,432 475,444 412,444\" fill=\"#D7A15C\" stroke=\"#78350F\" stroke-width=\"1.5\"/>\n    <!-- Stiff Wire & Palmyra Bristles Sweeping Road (hs-t3r-broom at 440, 440) -->\n    <polygon points=\"408,444 472,444 466,458 402,458\" fill=\"#451A03\" stroke=\"#1E293B\" stroke-width=\"1\"/>\n    <!-- Swept dust & gravel pile -->\n    <ellipse cx=\"438\" cy=\"458\" rx=\"28\" ry=\"4\" fill=\"#0F172A\" opacity=\"0.6\"/>\n  </g>\n</svg>",
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
        "svg": "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" class=\"part1-svg-art\">\n  <defs>\n    <!-- Summer park sky gradient -->\n    <linearGradient id=\"p-sky\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#38BDF8\"/>\n      <stop offset=\"60%\" stop-color=\"#BAE6FD\"/>\n      <stop offset=\"100%\" stop-color=\"#E0F2FE\"/>\n    </linearGradient>\n\n    <!-- Lush park lawn grass -->\n    <linearGradient id=\"p-grass\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#4ADE80\"/>\n      <stop offset=\"50%\" stop-color=\"#22C55E\"/>\n      <stop offset=\"100%\" stop-color=\"#15803D\"/>\n    </linearGradient>\n\n    <!-- Flagstone pathway natural stone -->\n    <linearGradient id=\"p-stone-path\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#E2E8F0\"/>\n      <stop offset=\"50%\" stop-color=\"#CBD5E1\"/>\n      <stop offset=\"100%\" stop-color=\"#94A3B8\"/>\n    </linearGradient>\n\n    <!-- Carved sandstone fountain tiers -->\n    <linearGradient id=\"p-sandstone\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#E2B176\"/>\n      <stop offset=\"50%\" stop-color=\"#F5D0A1\"/>\n      <stop offset=\"100%\" stop-color=\"#C2884A\"/>\n    </linearGradient>\n\n    <!-- Fountain pool water & ripples -->\n    <radialGradient id=\"p-water-pool\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n      <stop offset=\"0%\" stop-color=\"#67E8F9\"/>\n      <stop offset=\"60%\" stop-color=\"#06B6D4\"/>\n      <stop offset=\"100%\" stop-color=\"#0284C7\"/>\n    </radialGradient>\n\n    <!-- Deep tree canopy shade -->\n    <linearGradient id=\"p-canopy-shade\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#14532D\"/>\n      <stop offset=\"50%\" stop-color=\"#166534\"/>\n      <stop offset=\"100%\" stop-color=\"#052E16\"/>\n    </linearGradient>\n\n    <!-- Park bench wood slats -->\n    <linearGradient id=\"p-bench-teak\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#D97706\"/>\n      <stop offset=\"50%\" stop-color=\"#B45309\"/>\n      <stop offset=\"100%\" stop-color=\"#78350F\"/>\n    </linearGradient>\n\n    <!-- Shadows -->\n    <filter id=\"p-shadow\" x=\"-10%\" y=\"-10%\" width=\"125%\" height=\"125%\">\n      <feDropShadow dx=\"0\" dy=\"6\" stdDeviation=\"8\" flood-color=\"#052E16\" flood-opacity=\"0.25\"/>\n    </filter>\n    <filter id=\"p-elem-shadow\" x=\"-8%\" y=\"-8%\" width=\"120%\" height=\"120%\">\n      <feDropShadow dx=\"0\" dy=\"3\" stdDeviation=\"4\" flood-color=\"#0F172A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n\n  <!-- Clear Sky -->\n  <rect x=\"0\" y=\"0\" width=\"800\" height=\"280\" fill=\"url(#p-sky)\"/>\n\n  <!-- Distant Fluffy Clouds -->\n  <ellipse cx=\"140\" cy=\"50\" rx=\"55\" ry=\"16\" fill=\"#FFFFFF\" opacity=\"0.75\"/>\n  <ellipse cx=\"170\" cy=\"42\" rx=\"42\" ry=\"20\" fill=\"#FFFFFF\" opacity=\"0.85\"/>\n  <ellipse cx=\"500\" cy=\"70\" rx=\"70\" ry=\"18\" fill=\"#FFFFFF\" opacity=\"0.6\"/>\n\n  <!-- Distant City Park Trees & Gentle Green Hills -->\n  <g id=\"t4-distant-trees\" opacity=\"0.85\">\n    <!-- Distant tree canopy domes -->\n    <ellipse cx=\"60\" cy=\"220\" rx=\"65\" ry=\"50\" fill=\"#15803D\" opacity=\"0.7\"/>\n    <ellipse cx=\"140\" cy=\"205\" rx=\"75\" ry=\"60\" fill=\"#166534\" opacity=\"0.8\"/>\n    <ellipse cx=\"230\" cy=\"215\" rx=\"70\" ry=\"55\" fill=\"#15803D\" opacity=\"0.7\"/>\n    <ellipse cx=\"330\" cy=\"225\" rx=\"80\" ry=\"50\" fill=\"#16A34A\" opacity=\"0.6\"/>\n    <!-- Distant park Victorian lamppost -->\n    <line x1=\"280\" y1=\"200\" x2=\"280\" y2=\"280\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <circle cx=\"280\" cy=\"198\" r=\"4\" fill=\"#FEF08A\"/>\n  </g>\n\n  <!-- Park Lawn Grass Ground -->\n  <g id=\"p-lawn\">\n    <polygon points=\"0,230 800,230 800,500 0,500\" fill=\"url(#p-grass)\"/>\n    <!-- Mowed lawn texture variations -->\n    <line x1=\"0\" y1=\"280\" x2=\"800\" y2=\"280\" stroke=\"#16A34A\" stroke-width=\"1.5\" opacity=\"0.3\"/>\n    <line x1=\"0\" y1=\"340\" x2=\"800\" y2=\"340\" stroke=\"#16A34A\" stroke-width=\"1.5\" opacity=\"0.3\"/>\n    <line x1=\"0\" y1=\"410\" x2=\"800\" y2=\"410\" stroke=\"#16A34A\" stroke-width=\"1.5\" opacity=\"0.3\"/>\n  </g>\n\n  <!-- Massive Majestic Shade Tree on Right (hs-t4-shade at 704, 140) -->\n  <g id=\"t4-shade-tree\">\n    <!-- Tree Trunk with Textured Bark -->\n    <path d=\"M720 340 Q715 220 730 160 Q735 120 725 90\" fill=\"none\" stroke=\"#451A03\" stroke-width=\"32\" stroke-linecap=\"round\"/>\n    <path d=\"M725 210 Q685 170 650 150\" fill=\"none\" stroke=\"#451A03\" stroke-width=\"14\" stroke-linecap=\"round\"/>\n    <!-- Intricate Lush Foliage Clusters Creating Deep Shade (hs-t4-shade at 704, 140) -->\n    <ellipse cx=\"710\" cy=\"130\" rx=\"95\" ry=\"65\" fill=\"url(#p-canopy-shade)\"/>\n    <ellipse cx=\"660\" cy=\"110\" rx=\"75\" ry=\"55\" fill=\"#166534\"/>\n    <ellipse cx=\"750\" cy=\"90\" rx=\"85\" ry=\"60\" fill=\"#15803D\"/>\n    <ellipse cx=\"680\" cy=\"70\" rx=\"65\" ry=\"45\" fill=\"#22C55E\"/>\n    <ellipse cx=\"730\" cy=\"50\" rx=\"60\" ry=\"40\" fill=\"#4ADE80\" opacity=\"0.8\"/>\n    <!-- Sunlight dappling spots through leaf canopy -->\n    <circle cx=\"690\" cy=\"120\" r=\"4\" fill=\"#FEF08A\" opacity=\"0.6\"/>\n    <circle cx=\"730\" cy=\"105\" r=\"5\" fill=\"#FEF08A\" opacity=\"0.6\"/>\n    <circle cx=\"660\" cy=\"95\" r=\"3.5\" fill=\"#FEF08A\" opacity=\"0.6\"/>\n\n    <!-- Broad Cooling Shadow Cast by Tree on Lawn and Bench -->\n    <ellipse cx=\"660\" cy=\"400\" rx=\"150\" ry=\"60\" fill=\"#052E16\" opacity=\"0.35\"/>\n  </g>\n\n  <!-- Flagstone Paved Walkway (hs-t4-path at 240, 425) -->\n  <g id=\"t4-pathway\" filter=\"url(#p-shadow)\">\n    <!-- Pathway winding from lower left across towards center and right -->\n    <path d=\"M0 450 Q160 410 280 380 Q400 350 560 355 Q680 360 800 340 L800 420 Q660 440 540 435 Q380 430 240 470 L0 500 Z\" fill=\"url(#p-stone-path)\"/>\n    <!-- Pathway stone paver texture seams -->\n    <path d=\"M60 440 Q110 435 140 460\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n    <path d=\"M140 420 Q190 415 220 445\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n    <path d=\"M220 400 Q270 395 300 425\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n    <path d=\"M300 380 Q350 375 380 405\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n    <path d=\"M380 370 Q430 365 460 395\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n    <path d=\"M470 370 Q520 370 550 400\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n    <path d=\"M560 365 Q610 370 640 400\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n  </g>\n\n  <!-- Blooming Curved Flowerbeds Flanking Path (hs-t4-flower at 384, 380) -->\n  <g id=\"t4-flowerbeds\" filter=\"url(#p-elem-shadow)\">\n    <!-- Mulched garden soil bed -->\n    <path d=\"M320 415 Q390 380 450 395 Q420 435 340 445 Z\" fill=\"#451A03\" stroke=\"#290E02\" stroke-width=\"1.5\"/>\n    <!-- Lush Green Foliage Bushes -->\n    <ellipse cx=\"350\" cy=\"415\" rx=\"16\" ry=\"10\" fill=\"#15803D\"/>\n    <ellipse cx=\"384\" cy=\"405\" rx=\"20\" ry=\"12\" fill=\"#16A34A\"/>\n    <ellipse cx=\"420\" cy=\"410\" rx=\"18\" ry=\"11\" fill=\"#15803D\"/>\n\n    <!-- Vivid Flower Blossoms: Red Roses, Yellow Marigolds, Lavender -->\n    <circle cx=\"345\" cy=\"412\" r=\"4.5\" fill=\"#EF4444\"/>\n    <circle cx=\"355\" cy=\"416\" r=\"4\" fill=\"#F43F5E\"/>\n    <circle cx=\"372\" cy=\"402\" r=\"4\" fill=\"#FACC15\"/>\n    <circle cx=\"384\" cy=\"398\" r=\"4.5\" fill=\"#EF4444\"/>\n    <circle cx=\"396\" cy=\"402\" r=\"4\" fill=\"#FACC15\"/>\n    <circle cx=\"410\" cy=\"408\" r=\"4.5\" fill=\"#A855F7\"/>\n    <circle cx=\"425\" cy=\"412\" r=\"4.5\" fill=\"#EC4899\"/>\n    <circle cx=\"432\" cy=\"406\" r=\"3.5\" fill=\"#A855F7\"/>\n  </g>\n\n  <!-- Ornate Carved Sandstone Water Fountain (hs-t4-fountain at 504, 275) -->\n  <g id=\"t4-fountain\" filter=\"url(#p-shadow)\">\n    <!-- Circular / Hexagonal Boxwood Shrub Ring Surrounding Fountain Base -->\n    <!-- (hs-t4-surround at 464, 360) -->\n    <ellipse cx=\"504\" cy=\"355\" rx=\"100\" ry=\"32\" fill=\"#14532D\" stroke=\"#052E16\" stroke-width=\"2\"/>\n    <!-- Small flowering plants around fountain rim -->\n    <circle cx=\"430\" cy=\"355\" r=\"3\" fill=\"#EF4444\"/><circle cx=\"450\" cy=\"365\" r=\"3\" fill=\"#FACC15\"/>\n    <circle cx=\"475\" cy=\"372\" r=\"3\" fill=\"#EC4899\"/><circle cx=\"510\" cy=\"374\" r=\"3\" fill=\"#EF4444\"/>\n    <circle cx=\"545\" cy=\"370\" r=\"3\" fill=\"#FACC15\"/><circle cx=\"575\" cy=\"360\" r=\"3\" fill=\"#A855F7\"/>\n\n    <!-- Lower Stone Basin Outer Rim in 3D Perspective -->\n    <ellipse cx=\"504\" cy=\"335\" rx=\"85\" ry=\"26\" fill=\"url(#p-sandstone)\" stroke=\"#8F561F\" stroke-width=\"2.5\"/>\n    <!-- Lower Basin Water Pool Surface -->\n    <ellipse cx=\"504\" cy=\"333\" rx=\"76\" ry=\"22\" fill=\"url(#p-water-pool)\"/>\n    <!-- Water Concentric Ripples in Basin -->\n    <ellipse cx=\"504\" cy=\"333\" rx=\"55\" ry=\"15\" fill=\"none\" stroke=\"#E0F2FE\" stroke-width=\"1.5\" opacity=\"0.7\"/>\n    <ellipse cx=\"504\" cy=\"333\" rx=\"35\" ry=\"9\" fill=\"none\" stroke=\"#E0F2FE\" stroke-width=\"1.5\" opacity=\"0.8\"/>\n\n    <!-- Center Sandstone Pedestal Shaft -->\n    <rect x=\"494\" y=\"270\" width=\"20\" height=\"60\" rx=\"3\" fill=\"url(#p-sandstone)\" stroke=\"#8F561F\" stroke-width=\"1.5\"/>\n    <!-- Classical carved molding ridges -->\n    <ellipse cx=\"504\" cy=\"305\" rx=\"16\" ry=\"6\" fill=\"#F5D0A1\" stroke=\"#8F561F\" stroke-width=\"1.2\"/>\n\n    <!-- Upper Small Stone Basin (y=265) -->\n    <ellipse cx=\"504\" cy=\"265\" rx=\"42\" ry=\"14\" fill=\"url(#p-sandstone)\" stroke=\"#8F561F\" stroke-width=\"2\"/>\n    <ellipse cx=\"504\" cy=\"263\" rx=\"36\" ry=\"11\" fill=\"url(#p-water-pool)\"/>\n\n    <!-- Top Spout Finial Urn -->\n    <rect x=\"498\" y=\"235\" width=\"12\" height=\"28\" rx=\"3\" fill=\"url(#p-sandstone)\" stroke=\"#8F561F\" stroke-width=\"1.2\"/>\n    <circle cx=\"504\" cy=\"232\" r=\"6\" fill=\"#F5D0A1\" stroke=\"#8F561F\" stroke-width=\"1.2\"/>\n\n    <!-- Sparkling Water Jets & Cascading Streams -->\n    <!-- Vertical Jet Spouting from Top Finial -->\n    <path d=\"M504 230 Q502 205 504 195 Q506 205 504 230\" fill=\"none\" stroke=\"#E0F2FE\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    <circle cx=\"504\" cy=\"192\" r=\"3\" fill=\"#FFFFFF\"/>\n    <!-- Left Arcing Water Jet -->\n    <path d=\"M504 195 Q485 210 478 260\" fill=\"none\" stroke=\"#BAE6FD\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <!-- Right Arcing Water Jet -->\n    <path d=\"M504 195 Q523 210 530 260\" fill=\"none\" stroke=\"#BAE6FD\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n    <!-- Water Cascading from Upper Basin into Lower Basin -->\n    <path d=\"M472 268 Q465 295 460 325\" fill=\"none\" stroke=\"#E0F2FE\" stroke-width=\"2\" stroke-dasharray=\"4,2\"/>\n    <path d=\"M536 268 Q543 295 548 325\" fill=\"none\" stroke=\"#E0F2FE\" stroke-width=\"2\" stroke-dasharray=\"4,2\"/>\n    <path d=\"M504 275 Q504 300 504 328\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-dasharray=\"4,2\"/>\n  </g>\n\n  <!-- Park Bench with Cast-Iron Frame & Teak Slats (hs-t4-bench at 640, 370) -->\n  <g id=\"t4-bench\" filter=\"url(#p-shadow)\">\n    <!-- Ornate Black Cast-Iron Scrollwork Legs -->\n    <path d=\"M592 375 L590 425 M665 375 L668 425\" stroke=\"#0F172A\" stroke-width=\"4.5\" stroke-linecap=\"round\"/>\n    <circle cx=\"590\" cy=\"425\" r=\"4\" fill=\"#0F172A\"/>\n    <circle cx=\"668\" cy=\"425\" r=\"4\" fill=\"#0F172A\"/>\n\n    <!-- Bench Backrest Teak Wood Slats (Angled in perspective) -->\n    <polygon points=\"585,340 670,335 670,344 585,349\" fill=\"url(#p-bench-teak)\" stroke=\"#451A03\" stroke-width=\"1\"/>\n    <polygon points=\"585,352 670,347 670,356 585,361\" fill=\"url(#p-bench-teak)\" stroke=\"#451A03\" stroke-width=\"1\"/>\n    <polygon points=\"585,364 670,359 670,368 585,373\" fill=\"url(#p-bench-teak)\" stroke=\"#451A03\" stroke-width=\"1\"/>\n\n    <!-- Bench Seat Slats in Perspective -->\n    <polygon points=\"582,374 668,369 676,386 588,391\" fill=\"url(#p-bench-teak)\" stroke=\"#451A03\" stroke-width=\"1.5\"/>\n\n    <!-- Cast-Iron Curved Armrests -->\n    <path d=\"M582 365 Q582 375 588 385\" fill=\"none\" stroke=\"#0F172A\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>\n    <path d=\"M668 360 Q670 370 674 380\" fill=\"none\" stroke=\"#0F172A\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>\n  </g>\n\n  <!-- Person Seated on Bench Reading (hs-t4-sit at 624, 320) -->\n  <g id=\"t4-seated-visitor\">\n    <!-- Legs in Denim Jeans Crossed at Ankles -->\n    <path d=\"M615 375 L622 418 L632 418 L626 375\" fill=\"#1E3A8A\" stroke=\"#0F172A\" stroke-width=\"1.5\"/>\n    <polygon points=\"620,418 636,418 638,425 618,425\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1\"/>\n\n    <!-- Casual Cotton Shirt (Sky Blue) -->\n    <path d=\"M608 325 C608 295, 638 295, 642 325 L638 375 L610 375 Z\" fill=\"#38BDF8\" stroke=\"#0284C7\" stroke-width=\"1.8\"/>\n\n    <!-- Head & Hair (Tilted down focused on book) -->\n    <rect x=\"620\" y=\"280\" width=\"8\" height=\"12\" fill=\"#FDBA74\"/>\n    <ellipse cx=\"624\" cy=\"268\" rx=\"11\" ry=\"14\" fill=\"#FDBA74\"/>\n    <!-- Brown hair & sunglasses -->\n    <path d=\"M614 265 C612 250, 636 248, 636 264 Z\" fill=\"#78350F\"/>\n    <rect x=\"618\" y=\"264\" width=\"12\" height=\"4\" rx=\"1.5\" fill=\"#0F172A\"/>\n\n    <!-- Arms Holding Open Book / Magazine -->\n    <path d=\"M610 325 Q618 345 628 350\" fill=\"none\" stroke=\"#38BDF8\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"628\" cy=\"352\" rx=\"4\" ry=\"3\" fill=\"#FDBA74\"/>\n    <!-- Open Book -->\n    <polygon points=\"620,342 638,342 638,358 620,358\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1\"/>\n    <line x1=\"629\" y1=\"342\" x2=\"629\" y2=\"358\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n  </g>\n\n  <!-- Person Strolling Along the Park Pathway (hs-t4-stroll at 168, 310) -->\n  <g id=\"t4-stroller\">\n    <!-- Casual Summer Chino Shorts -->\n    <path d=\"M158 350 L152 400 L164 400 L170 360 L176 400 L188 400 L182 350 Z\" fill=\"#CBD5E1\" stroke=\"#64748B\" stroke-width=\"1.8\"/>\n    <!-- Walking Shoes & Socks -->\n    <polygon points=\"148,400 166,400 168,408 146,408\" fill=\"#475569\"/>\n    <polygon points=\"174,400 192,400 194,408 172,408\" fill=\"#475569\"/>\n\n    <!-- Casual Striped Polo Shirt -->\n    <path d=\"M152 265 C152 245, 188 245, 188 265 L182 352 L154 352 Z\" fill=\"#1E3A8A\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <!-- White horizontal stripes on polo -->\n    <line x1=\"154\" y1=\"285\" x2=\"186\" y2=\"285\" stroke=\"#FFFFFF\" stroke-width=\"2.5\"/>\n    <line x1=\"154\" y1=\"305\" x2=\"184\" y2=\"305\" stroke=\"#FFFFFF\" stroke-width=\"2.5\"/>\n    <line x1=\"154\" y1=\"325\" x2=\"182\" y2=\"325\" stroke=\"#FFFFFF\" stroke-width=\"2.5\"/>\n\n    <!-- Neck & Head with Baseball Cap -->\n    <rect x=\"166\" y=\"235\" width=\"8\" height=\"12\" fill=\"#FDBA74\"/>\n    <ellipse cx=\"170\" cy=\"222\" rx=\"12\" ry=\"14\" fill=\"#FDBA74\"/>\n    <!-- Navy Baseball Cap with forward visor -->\n    <path d=\"M160 218 C160 205, 180 205, 180 218 Z\" fill=\"#DC2626\"/>\n    <polygon points=\"166,218 190,214 186,220 166,220\" fill=\"#DC2626\"/>\n\n    <!-- Left Arm swinging naturally mid-stride -->\n    <path d=\"M154 265 Q145 290 148 315\" fill=\"none\" stroke=\"#1E3A8A\" stroke-width=\"8\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"148\" cy=\"318\" rx=\"4.5\" ry=\"4\" fill=\"#FDBA74\"/>\n\n    <!-- Right Arm holding coffee tumbler -->\n    <path d=\"M185 265 Q192 290 188 310\" fill=\"none\" stroke=\"#1E3A8A\" stroke-width=\"8\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"188\" cy=\"312\" rx=\"4.5\" ry=\"4\" fill=\"#FDBA74\"/>\n    <rect x=\"186\" y=\"306\" width=\"6\" height=\"12\" rx=\"1.5\" fill=\"#10B981\"/>\n  </g>\n</svg>",
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
        "svg": "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" class=\"part1-svg-art\">\n  <defs>\n    <!-- Summer garden sky -->\n    <linearGradient id=\"g-sky\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#38BDF8\"/>\n      <stop offset=\"65%\" stop-color=\"#BAE6FD\"/>\n      <stop offset=\"100%\" stop-color=\"#E0F2FE\"/>\n    </linearGradient>\n\n    <!-- Mowed lawn emerald grass with alternating stripes -->\n    <linearGradient id=\"g-lawn-light\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#4ADE80\"/>\n      <stop offset=\"100%\" stop-color=\"#22C55E\"/>\n    </linearGradient>\n\n    <linearGradient id=\"g-lawn-dark\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#22C55E\"/>\n      <stop offset=\"100%\" stop-color=\"#15803D\"/>\n    </linearGradient>\n\n    <!-- Straw sun hat woven texture -->\n    <linearGradient id=\"g-straw\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#FEF08A\"/>\n      <stop offset=\"50%\" stop-color=\"#FDE047\"/>\n      <stop offset=\"100%\" stop-color=\"#CA8A04\"/>\n    </linearGradient>\n\n    <!-- White picket fence enamel -->\n    <linearGradient id=\"g-fence-white\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#FFFFFF\"/>\n      <stop offset=\"60%\" stop-color=\"#F8FAFC\"/>\n      <stop offset=\"100%\" stop-color=\"#CBD5E1\"/>\n    </linearGradient>\n\n    <!-- Autumn leaf pile multi-color gradient -->\n    <linearGradient id=\"g-leaves\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#EF4444\"/>\n      <stop offset=\"35%\" stop-color=\"#F97316\"/>\n      <stop offset=\"70%\" stop-color=\"#FBBF24\"/>\n      <stop offset=\"100%\" stop-color=\"#B45309\"/>\n    </linearGradient>\n\n    <!-- Garden hose green rubber -->\n    <linearGradient id=\"g-hose\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#15803D\"/>\n      <stop offset=\"50%\" stop-color=\"#4ADE80\"/>\n      <stop offset=\"100%\" stop-color=\"#14532D\"/>\n    </linearGradient>\n\n    <!-- Shadows -->\n    <filter id=\"g-shadow\" x=\"-10%\" y=\"-10%\" width=\"125%\" height=\"125%\">\n      <feDropShadow dx=\"0\" dy=\"6\" stdDeviation=\"8\" flood-color=\"#052E16\" flood-opacity=\"0.25\"/>\n    </filter>\n    <filter id=\"g-elem-shadow\" x=\"-8%\" y=\"-8%\" width=\"120%\" height=\"120%\">\n      <feDropShadow dx=\"0\" dy=\"3\" stdDeviation=\"4\" flood-color=\"#0F172A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n\n  <!-- Clear Sky -->\n  <rect x=\"0\" y=\"0\" width=\"800\" height=\"260\" fill=\"url(#g-sky)\"/>\n\n  <!-- Distant Residential House Rooftop & Trees -->\n  <g id=\"g-backdrop\" opacity=\"0.8\">\n    <polygon points=\"120,140 180,95 240,140\" fill=\"#B91C1C\" stroke=\"#7F1D1D\" stroke-width=\"2\"/>\n    <rect x=\"135\" y=\"140\" width=\"90\" height=\"70\" fill=\"#F8FAFC\" stroke=\"#CBD5E1\" stroke-width=\"1.5\"/>\n    <rect x=\"165\" y=\"150\" width=\"30\" height=\"30\" fill=\"#38BDF8\" stroke=\"#0F172A\" stroke-width=\"1.5\"/>\n    <!-- Dense hedges behind fence -->\n    <ellipse cx=\"60\" cy=\"180\" rx=\"70\" ry=\"40\" fill=\"#15803D\"/>\n    <ellipse cx=\"380\" cy=\"175\" rx=\"90\" ry=\"45\" fill=\"#166534\"/>\n    <ellipse cx=\"580\" cy=\"170\" rx=\"80\" ry=\"40\" fill=\"#15803D\"/>\n    <ellipse cx=\"740\" cy=\"175\" rx=\"85\" ry=\"45\" fill=\"#166534\"/>\n  </g>\n\n  <!-- White Picket Garden Fence & Arched Gate (hs-t4g-fence at 672, 210; hs-t4g-gate at 304, 200) -->\n  <g id=\"t4g-fence\" filter=\"url(#g-shadow)\">\n    <!-- Horizontal Cross Rails -->\n    <rect x=\"0\" y=\"185\" width=\"800\" height=\"8\" fill=\"url(#g-fence-white)\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n    <rect x=\"0\" y=\"225\" width=\"800\" height=\"8\" fill=\"url(#g-fence-white)\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n\n    <!-- Decorative Arched Wooden Garden Trellis Gate (hs-t4g-gate at 304, 200) -->\n    <g id=\"t4g-gate-arch\">\n      <!-- Left & Right Gate Posts with Ball Finials -->\n      <rect x=\"270\" y=\"140\" width=\"12\" height=\"110\" fill=\"url(#g-fence-white)\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n      <circle cx=\"276\" cy=\"136\" r=\"6\" fill=\"#F8FAFC\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n      <rect x=\"335\" y=\"140\" width=\"12\" height=\"110\" fill=\"url(#g-fence-white)\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n      <circle cx=\"341\" cy=\"136\" r=\"6\" fill=\"#F8FAFC\" stroke=\"#64748B\" stroke-width=\"1.5\"/>\n      <!-- Trellis Archway Overhead -->\n      <path d=\"M276 140 Q308 105 341 140\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"6\"/>\n      <path d=\"M280 135 Q308 115 337 135\" fill=\"none\" stroke=\"#22C55E\" stroke-width=\"4\"/>\n      <!-- Climbing Pink Roses on Arch -->\n      <circle cx=\"290\" cy=\"125\" r=\"3.5\" fill=\"#F43F5E\"/><circle cx=\"308\" cy=\"115\" r=\"3.5\" fill=\"#F43F5E\"/><circle cx=\"325\" cy=\"122\" r=\"3.5\" fill=\"#F43F5E\"/>\n    </g>\n\n    <!-- Pointed Picket Slats Along Fence (hs-t4g-fence at 672, 210) -->\n    <!-- Loop-rendered picket slats -->\n    <g id=\"g-pickets\">\n      <polygon points=\"20,165 26,155 32,165 32,245 20,245\" fill=\"url(#g-fence-white)\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n      <polygon points=\"50,165 56,155 62,165 62,245 50,245\" fill=\"url(#g-fence-white)\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n      <polygon points=\"80,165 86,155 92,165 92,245 80,245\" fill=\"url(#g-fence-white)\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n      <polygon points=\"110,165 116,155 122,165 122,245 110,245\" fill=\"url(#g-fence-white)\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n      <polygon points=\"140,165 146,155 152,165 152,245 140,245\" fill=\"url(#g-fence-white)\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n      <polygon points=\"170,165 176,155 182,165 182,245 170,245\" fill=\"url(#g-fence-white)\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n      <polygon points=\"200,165 206,155 212,165 212,245 200,245\" fill=\"url(#g-fence-white)\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n      <polygon points=\"230,165 236,155 242,165 242,245 230,245\" fill=\"url(#g-fence-white)\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n\n      <polygon points=\"365,165 371,155 377,165 377,245 365,245\" fill=\"url(#g-fence-white)\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n      <polygon points=\"395,165 401,155 407,165 407,245 395,245\" fill=\"url(#g-fence-white)\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n      <polygon points=\"425,165 431,155 437,165 437,245 425,245\" fill=\"url(#g-fence-white)\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n      <polygon points=\"455,165 461,155 467,165 467,245 455,245\" fill=\"url(#g-fence-white)\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n      <polygon points=\"485,165 491,155 497,165 497,245 485,245\" fill=\"url(#g-fence-white)\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n      <polygon points=\"515,165 521,155 527,165 527,245 515,245\" fill=\"url(#g-fence-white)\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n      <polygon points=\"545,165 551,155 557,165 557,245 545,245\" fill=\"url(#g-fence-white)\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n      <polygon points=\"575,165 581,155 587,165 587,245 575,245\" fill=\"url(#g-fence-white)\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n      <polygon points=\"605,165 611,155 617,165 617,245 605,245\" fill=\"url(#g-fence-white)\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n      <polygon points=\"635,165 641,155 647,165 647,245 635,245\" fill=\"url(#g-fence-white)\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n      <polygon points=\"665,165 671,155 677,165 677,245 665,245\" fill=\"url(#g-fence-white)\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n      <polygon points=\"695,165 701,155 707,165 707,245 695,245\" fill=\"url(#g-fence-white)\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n      <polygon points=\"725,165 731,155 737,165 737,245 725,245\" fill=\"url(#g-fence-white)\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n      <polygon points=\"755,165 761,155 767,165 767,245 755,245\" fill=\"url(#g-fence-white)\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n    </g>\n  </g>\n\n  <!-- Lush Green Turf Lawn with Alternating Mowed Stripes (hs-t4g-lawn at 200, 360) -->\n  <g id=\"t4g-lawn-surface\">\n    <!-- Base grass -->\n    <rect x=\"0\" y=\"240\" width=\"800\" height=\"260\" fill=\"url(#g-lawn-dark)\"/>\n\n    <!-- Alternating Diagonal / Perspective Mowed Stripes -->\n    <polygon points=\"0,240 60,240 140,500 0,500\" fill=\"url(#g-lawn-light)\" opacity=\"0.6\"/>\n    <polygon points=\"120,240 180,240 280,500 180,500\" fill=\"url(#g-lawn-light)\" opacity=\"0.6\"/>\n    <polygon points=\"240,240 300,240 420,500 320,500\" fill=\"url(#g-lawn-light)\" opacity=\"0.6\"/>\n    <polygon points=\"360,240 420,240 560,500 460,500\" fill=\"url(#g-lawn-light)\" opacity=\"0.6\"/>\n    <polygon points=\"480,240 540,240 700,500 600,500\" fill=\"url(#g-lawn-light)\" opacity=\"0.6\"/>\n    <polygon points=\"600,240 660,240 800,500 740,500\" fill=\"url(#g-lawn-light)\" opacity=\"0.6\"/>\n  </g>\n\n  <!-- Flowerbeds & Garden Plants along Right Side (hs-t4g-plant at 720, 300) -->\n  <g id=\"t4g-flower-bushes\" filter=\"url(#g-shadow)\">\n    <!-- Rich dark garden soil border -->\n    <ellipse cx=\"730\" cy=\"330\" rx=\"90\" ry=\"70\" fill=\"#451A03\" opacity=\"0.7\"/>\n\n    <!-- Lush Hydrangea & Peony Bushes -->\n    <ellipse cx=\"690\" cy=\"290\" rx=\"35\" ry=\"25\" fill=\"#15803D\"/>\n    <ellipse cx=\"740\" cy=\"275\" rx=\"42\" ry=\"28\" fill=\"#16A34A\"/>\n    <ellipse cx=\"735\" cy=\"325\" rx=\"38\" ry=\"24\" fill=\"#15803D\"/>\n\n    <!-- Colorful Blossoms (Pink, Lavender, Red) -->\n    <circle cx=\"678\" cy=\"285\" r=\"7\" fill=\"#F472B6\"/>\n    <circle cx=\"695\" cy=\"278\" r=\"8\" fill=\"#EC4899\"/>\n    <circle cx=\"705\" cy=\"295\" r=\"7\" fill=\"#F472B6\"/>\n    <circle cx=\"725\" cy=\"268\" r=\"8\" fill=\"#C084FC\"/>\n    <circle cx=\"742\" cy=\"262\" r=\"9\" fill=\"#A855F7\"/>\n    <circle cx=\"758\" cy=\"275\" r=\"8\" fill=\"#C084FC\"/>\n    <circle cx=\"720\" cy=\"320\" r=\"8\" fill=\"#EF4444\"/>\n    <circle cx=\"740\" cy=\"315\" r=\"8.5\" fill=\"#F87171\"/>\n    <circle cx=\"755\" cy=\"328\" r=\"7.5\" fill=\"#EF4444\"/>\n  </g>\n\n  <!-- Coiled Green Garden Hose on Left Lawn (hs-t4g-water at 128, 420) -->\n  <g id=\"t4g-hose\" filter=\"url(#g-shadow)\">\n    <!-- Shadow under hose coil -->\n    <ellipse cx=\"128\" cy=\"435\" rx=\"35\" ry=\"12\" fill=\"#052E16\" opacity=\"0.35\"/>\n    <!-- Concentric hose coils -->\n    <ellipse cx=\"128\" cy=\"425\" rx=\"32\" ry=\"14\" fill=\"none\" stroke=\"url(#g-hose)\" stroke-width=\"6\"/>\n    <ellipse cx=\"128\" cy=\"420\" rx=\"28\" ry=\"12\" fill=\"none\" stroke=\"url(#g-hose)\" stroke-width=\"6\"/>\n    <ellipse cx=\"128\" cy=\"415\" rx=\"24\" ry=\"10\" fill=\"none\" stroke=\"url(#g-hose)\" stroke-width=\"6\"/>\n    <!-- Brass Spray Nozzle on End -->\n    <path d=\"M152 418 L170 412\" stroke=\"#EAB308\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n    <polygon points=\"168,408 178,405 178,418 168,415\" fill=\"#CA8A04\"/>\n  </g>\n\n  <!-- Rotary Push Lawnmower Resting on Left Lawn -->\n  <g id=\"t4g-lawnmower\" filter=\"url(#g-shadow)\">\n    <!-- Red/Green Steel Mower Deck -->\n    <rect x=\"180\" y=\"335\" width=\"55\" height=\"34\" rx=\"8\" fill=\"#16A34A\" stroke=\"#14532D\" stroke-width=\"2\"/>\n    <!-- Black Engine Shroud on Top -->\n    <rect x=\"192\" y=\"322\" width=\"30\" height=\"18\" rx=\"5\" fill=\"#1E293B\"/>\n    <!-- 4 Rubber Mower Wheels -->\n    <circle cx=\"188\" cy=\"370\" r=\"9\" fill=\"#1E293B\" stroke=\"#64748B\" stroke-width=\"2\"/>\n    <circle cx=\"188\" cy=\"370\" r=\"3.5\" fill=\"#CBD5E1\"/>\n    <circle cx=\"228\" cy=\"370\" r=\"9\" fill=\"#1E293B\" stroke=\"#64748B\" stroke-width=\"2\"/>\n    <circle cx=\"228\" cy=\"370\" r=\"3.5\" fill=\"#CBD5E1\"/>\n    <!-- Angled Push Handle -->\n    <line x1=\"185\" y1=\"345\" x2=\"145\" y2=\"285\" stroke=\"#475569\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n    <rect x=\"140\" y=\"280\" width=\"10\" height=\"8\" rx=\"2\" fill=\"#0F172A\"/>\n  </g>\n\n  <!-- Large Pile of Colorful Autumn Leaves on Lawn (hs-t4g-leaf at 512, 400) -->\n  <g id=\"t4g-leaf-pile\" filter=\"url(#g-shadow)\">\n    <!-- Leaf Mound Shadow -->\n    <ellipse cx=\"515\" cy=\"415\" rx=\"48\" ry=\"16\" fill=\"#052E16\" opacity=\"0.35\"/>\n    <!-- Leaf Pile Mound -->\n    <ellipse cx=\"512\" cy=\"400\" rx=\"42\" ry=\"22\" fill=\"url(#g-leaves)\"/>\n    <!-- Individual Scattered Leaves with Stems -->\n    <ellipse cx=\"485\" cy=\"392\" rx=\"7\" ry=\"4\" fill=\"#EF4444\" transform=\"rotate(25 485 392)\"/>\n    <ellipse cx=\"502\" cy=\"385\" rx=\"8\" ry=\"5\" fill=\"#FBBF24\" transform=\"rotate(-15 502 385)\"/>\n    <ellipse cx=\"525\" cy=\"388\" rx=\"7\" ry=\"4\" fill=\"#F97316\" transform=\"rotate(35 525 388)\"/>\n    <ellipse cx=\"538\" cy=\"398\" rx=\"8\" ry=\"5\" fill=\"#DC2626\" transform=\"rotate(-40 538 398)\"/>\n    <ellipse cx=\"495\" cy=\"408\" rx=\"7\" ry=\"4\" fill=\"#EA580C\" transform=\"rotate(10 495 408)\"/>\n    <ellipse cx=\"520\" cy=\"408\" rx=\"8\" ry=\"5\" fill=\"#FBBF24\" transform=\"rotate(-20 520 408)\"/>\n    <ellipse cx=\"542\" cy=\"412\" rx=\"6\" ry=\"3.5\" fill=\"#D97706\"/>\n  </g>\n\n  <!-- Gardener with Straw Sun Hat Raking Leaves -->\n  <!-- (hs-t4g-hat at 384, 240; hs-t4g-rake at 480, 410) -->\n  <g id=\"t4g-gardener\">\n    <!-- Canvas Work Pants (Olive / Tan) -->\n    <path d=\"M375 350 L368 446 L382 446 L390 365 L398 446 L412 446 L406 350 Z\" fill=\"#78350F\" stroke=\"#451A03\" stroke-width=\"2\"/>\n    <!-- Heavy Duty Rubber Gardening Boots -->\n    <polygon points=\"360,446 384,446 386,456 358,456\" fill=\"#14532D\" stroke=\"#052E16\" stroke-width=\"1.2\"/>\n    <polygon points=\"392,446 416,446 418,456 390,456\" fill=\"#14532D\" stroke=\"#052E16\" stroke-width=\"1.2\"/>\n\n    <!-- Cotton Gardening Shirt (Plaid / Coral) -->\n    <path d=\"M366 265 C366 245, 412 245, 415 265 L410 355 L370 355 Z\" fill=\"#F97316\" stroke=\"#C2410C\" stroke-width=\"2\"/>\n\n    <!-- Neck & Head -->\n    <rect x=\"385\" y=\"244\" width=\"10\" height=\"12\" fill=\"#FDBA74\"/>\n    <ellipse cx=\"388\" cy=\"235\" rx=\"12\" ry=\"14\" fill=\"#FDBA74\"/>\n\n    <!-- Wide-Brimmed Straw Sun Hat (hs-t4g-hat at 384, 240) -->\n    <!-- Broad Straw Brim in Perspective -->\n    <ellipse cx=\"384\" cy=\"238\" rx=\"30\" ry=\"12\" fill=\"url(#g-straw)\" stroke=\"#B45309\" stroke-width=\"1.5\"/>\n    <!-- Hat Crown with Dark Green Ribbon Band -->\n    <ellipse cx=\"384\" cy=\"228\" rx=\"16\" ry=\"10\" fill=\"url(#g-straw)\" stroke=\"#B45309\" stroke-width=\"1.2\"/>\n    <ellipse cx=\"384\" cy=\"232\" rx=\"16.5\" ry=\"4\" fill=\"#14532D\"/>\n\n    <!-- Arms Gripping Long Rake Handle -->\n    <path d=\"M372 270 Q395 305 412 328\" fill=\"none\" stroke=\"#F97316\" stroke-width=\"10\" stroke-linecap=\"round\"/>\n    <!-- Yellow Gardening Gloves -->\n    <ellipse cx=\"414\" cy=\"330\" rx=\"5.5\" ry=\"4.5\" fill=\"#EAB308\" stroke=\"#CA8A04\" stroke-width=\"1\"/>\n\n    <path d=\"M408 270 Q430 305 448 340\" fill=\"none\" stroke=\"#F97316\" stroke-width=\"10\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"450\" cy=\"342\" rx=\"5.5\" ry=\"4.5\" fill=\"#EAB308\" stroke=\"#CA8A04\" stroke-width=\"1\"/>\n\n    <!-- Steel Fan Landscaping Rake (hs-t4g-rake at 480, 410) -->\n    <!-- Long Ash Wood Handle -->\n    <line x1=\"395\" y1=\"305\" x2=\"475\" y2=\"395\" stroke=\"#D7A15C\" stroke-width=\"4.5\" stroke-linecap=\"round\"/>\n    <!-- Steel Fan Rake Collar & Head (hs-t4g-rake at 480, 410) -->\n    <polygon points=\"468,390 482,390 496,412 458,412\" fill=\"#64748B\" stroke=\"#334155\" stroke-width=\"1.2\"/>\n    <!-- Flexible Spring Steel Tines Gathering Leaves -->\n    <line x1=\"462\" y1=\"412\" x2=\"460\" y2=\"422\" stroke=\"#475569\" stroke-width=\"1.8\"/>\n    <line x1=\"468\" y1=\"412\" x2=\"468\" y2=\"422\" stroke=\"#475569\" stroke-width=\"1.8\"/>\n    <line x1=\"474\" y1=\"412\" x2=\"475\" y2=\"422\" stroke=\"#475569\" stroke-width=\"1.8\"/>\n    <line x1=\"480\" y1=\"412\" x2=\"482\" y2=\"422\" stroke=\"#475569\" stroke-width=\"1.8\"/>\n    <line x1=\"486\" y1=\"412\" x2=\"489\" y2=\"422\" stroke=\"#475569\" stroke-width=\"1.8\"/>\n    <line x1=\"492\" y1=\"412\" x2=\"496\" y2=\"422\" stroke=\"#475569\" stroke-width=\"1.8\"/>\n  </g>\n</svg>",
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
        "svg": "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" class=\"part1-svg-art\">\n  <defs>\n    <!-- European boulevard sky -->\n    <linearGradient id=\"sc-sky\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#38BDF8\"/>\n      <stop offset=\"60%\" stop-color=\"#BAE6FD\"/>\n      <stop offset=\"100%\" stop-color=\"#E0F2FE\"/>\n    </linearGradient>\n\n    <!-- Parisian red and white striped awning -->\n    <linearGradient id=\"sc-red-awning\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#EF4444\"/>\n      <stop offset=\"50%\" stop-color=\"#DC2626\"/>\n      <stop offset=\"100%\" stop-color=\"#991B1B\"/>\n    </linearGradient>\n\n    <!-- Café building stone facade -->\n    <linearGradient id=\"sc-stone\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#F1F5F9\"/>\n      <stop offset=\"50%\" stop-color=\"#E2E8F0\"/>\n      <stop offset=\"100%\" stop-color=\"#CBD5E1\"/>\n    </linearGradient>\n\n    <!-- Terracotta patio tiles -->\n    <linearGradient id=\"sc-terracotta\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#EA580C\"/>\n      <stop offset=\"50%\" stop-color=\"#C2410C\"/>\n      <stop offset=\"100%\" stop-color=\"#9A3412\"/>\n    </linearGradient>\n\n    <!-- Asphalt city street -->\n    <linearGradient id=\"sc-street\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#475569\"/>\n      <stop offset=\"100%\" stop-color=\"#1E293B\"/>\n    </linearGradient>\n\n    <!-- Shadows -->\n    <filter id=\"sc-shadow\" x=\"-10%\" y=\"-10%\" width=\"125%\" height=\"125%\">\n      <feDropShadow dx=\"0\" dy=\"6\" stdDeviation=\"8\" flood-color=\"#0F172A\" flood-opacity=\"0.28\"/>\n    </filter>\n    <filter id=\"sc-elem-shadow\" x=\"-8%\" y=\"-8%\" width=\"120%\" height=\"120%\">\n      <feDropShadow dx=\"0\" dy=\"3\" stdDeviation=\"4\" flood-color=\"#0F172A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n\n  <!-- Clear City Sky -->\n  <rect x=\"0\" y=\"0\" width=\"800\" height=\"260\" fill=\"url(#sc-sky)\"/>\n\n  <!-- Left Side: Haussmann European Café Stone Building -->\n  <rect x=\"0\" y=\"0\" width=\"310\" height=\"340\" fill=\"url(#sc-stone)\"/>\n  <!-- Second Floor French Windows with Juliet Balcony -->\n  <rect x=\"50\" y=\"30\" width=\"65\" height=\"90\" rx=\"30\" fill=\"#1E293B\" stroke=\"#64748B\" stroke-width=\"3\"/>\n  <rect x=\"55\" y=\"35\" width=\"55\" height=\"80\" rx=\"26\" fill=\"#BAE6FD\" opacity=\"0.7\"/>\n  <!-- Decorative Wrought Iron Balcony Grille -->\n  <rect x=\"45\" y=\"90\" width=\"75\" height=\"35\" fill=\"none\" stroke=\"#0F172A\" stroke-width=\"2.5\"/>\n  <line x1=\"60\" y1=\"90\" x2=\"60\" y2=\"125\" stroke=\"#0F172A\" stroke-width=\"1.8\"/>\n  <line x1=\"75\" y1=\"90\" x2=\"75\" y2=\"125\" stroke=\"#0F172A\" stroke-width=\"1.8\"/>\n  <line x1=\"90\" y1=\"90\" x2=\"90\" y2=\"125\" stroke=\"#0F172A\" stroke-width=\"1.8\"/>\n  <line x1=\"105\" y1=\"90\" x2=\"105\" y2=\"125\" stroke=\"#0F172A\" stroke-width=\"1.8\"/>\n\n  <rect x=\"180\" y=\"30\" width=\"65\" height=\"90\" rx=\"30\" fill=\"#1E293B\" stroke=\"#64748B\" stroke-width=\"3\"/>\n  <rect x=\"185\" y=\"35\" width=\"55\" height=\"80\" rx=\"26\" fill=\"#BAE6FD\" opacity=\"0.7\"/>\n  <rect x=\"175\" y=\"90\" width=\"75\" height=\"35\" fill=\"none\" stroke=\"#0F172A\" stroke-width=\"2.5\"/>\n  <line x1=\"190\" y1=\"90\" x2=\"190\" y2=\"125\" stroke=\"#0F172A\" stroke-width=\"1.8\"/>\n  <line x1=\"205\" y1=\"90\" x2=\"205\" y2=\"125\" stroke=\"#0F172A\" stroke-width=\"1.8\"/>\n  <line x1=\"220\" y1=\"90\" x2=\"220\" y2=\"125\" stroke=\"#0F172A\" stroke-width=\"1.8\"/>\n  <line x1=\"235\" y1=\"90\" x2=\"235\" y2=\"125\" stroke=\"#0F172A\" stroke-width=\"1.8\"/>\n\n  <!-- Large Red & White Striped Fabric Awning Extended Over Sidewalk (hs-t4c-awning at 192, 160) -->\n  <g id=\"t4c-awning\" filter=\"url(#sc-shadow)\">\n    <!-- Awning Cantilever Slope -->\n    <polygon points=\"0,140 310,140 325,185 0,185\" fill=\"url(#sc-red-awning)\"/>\n    <!-- Crisp White Stripes on Canvas -->\n    <polygon points=\"25,140 55,140 60,185 28,185\" fill=\"#FFFFFF\"/>\n    <polygon points=\"85,140 115,140 120,185 88,185\" fill=\"#FFFFFF\"/>\n    <polygon points=\"145,140 175,140 180,185 148,185\" fill=\"#FFFFFF\"/>\n    <polygon points=\"205,140 235,140 240,185 208,185\" fill=\"#FFFFFF\"/>\n    <polygon points=\"265,140 295,140 300,185 268,185\" fill=\"#FFFFFF\"/>\n\n    <!-- Scalloped Awning Valance Flaps -->\n    <path d=\"M0 185 Q15 198 30 185 Q45 198 60 185 Q75 198 90 185 Q105 198 120 185 Q135 198 150 185 Q165 198 180 185 Q195 198 210 185 Q225 198 240 185 Q255 198 270 185 Q285 198 300 185 Q315 198 330 185\" fill=\"none\" stroke=\"#DC2626\" stroke-width=\"4\"/>\n  </g>\n\n  <!-- Large Cantilevered Bistro Patio Umbrella (hs-t4c-umbrella at 160, 220) -->\n  <g id=\"t4c-umbrella\" filter=\"url(#sc-shadow)\">\n    <!-- Dark umbrella canopy dome -->\n    <ellipse cx=\"160\" cy=\"215\" rx=\"75\" ry=\"24\" fill=\"#065F46\" stroke=\"#064E3B\" stroke-width=\"2\"/>\n    <ellipse cx=\"160\" cy=\"212\" rx=\"72\" ry=\"20\" fill=\"#047857\"/>\n    <!-- Umbrella Rib Seams -->\n    <line x1=\"160\" y1=\"195\" x2=\"90\" y2=\"215\" stroke=\"#064E3B\" stroke-width=\"1.8\"/>\n    <line x1=\"160\" y1=\"195\" x2=\"125\" y2=\"225\" stroke=\"#064E3B\" stroke-width=\"1.8\"/>\n    <line x1=\"160\" y1=\"195\" x2=\"160\" y2=\"232\" stroke=\"#064E3B\" stroke-width=\"1.8\"/>\n    <line x1=\"160\" y1=\"195\" x2=\"195\" y2=\"225\" stroke=\"#064E3B\" stroke-width=\"1.8\"/>\n    <line x1=\"160\" y1=\"195\" x2=\"230\" y2=\"215\" stroke=\"#064E3B\" stroke-width=\"1.8\"/>\n    <!-- Center Mast -->\n    <line x1=\"160\" y1=\"215\" x2=\"160\" y2=\"350\" stroke=\"#78350F\" stroke-width=\"4.5\"/>\n  </g>\n\n  <!-- City Street Asphalt Surface (Right & Foreground) (hs-t4c-street at 672, 300) -->\n  <g id=\"t4c-street-surface\">\n    <polygon points=\"340,260 800,260 800,500 280,500\" fill=\"url(#sc-street)\"/>\n    <line x1=\"340\" y1=\"260\" x2=\"800\" y2=\"260\" stroke=\"#1E293B\" stroke-width=\"3\"/>\n    <!-- Distant traffic & street curb -->\n    <line x1=\"340\" y1=\"260\" x2=\"280\" y2=\"500\" stroke=\"#64748B\" stroke-width=\"4\"/>\n  </g>\n\n  <!-- Zebra Pedestrian Crosswalk (hs-t4c-crosswalk at 544, 380) -->\n  <g id=\"t4c-crosswalk-stripes\" filter=\"url(#sc-shadow)\">\n    <!-- Broad White Reflective Thermoplastic Stripes Crossing Street -->\n    <polygon points=\"410,290 450,290 410,340 370,340\" fill=\"#FFFFFF\" opacity=\"0.95\"/>\n    <polygon points=\"460,290 500,290 470,340 430,340\" fill=\"#FFFFFF\" opacity=\"0.95\"/>\n    <polygon points=\"510,290 550,290 530,340 490,340\" fill=\"#FFFFFF\" opacity=\"0.95\"/>\n    <polygon points=\"560,290 600,290 590,340 550,340\" fill=\"#FFFFFF\" opacity=\"0.95\"/>\n    <polygon points=\"610,290 650,290 650,340 610,340\" fill=\"#FFFFFF\" opacity=\"0.95\"/>\n    <polygon points=\"660,290 700,290 710,340 670,340\" fill=\"#FFFFFF\" opacity=\"0.95\"/>\n\n    <polygon points=\"350,360 400,360 340,430 290,430\" fill=\"#FFFFFF\" opacity=\"0.95\"/>\n    <polygon points=\"420,360 470,360 420,430 370,430\" fill=\"#FFFFFF\" opacity=\"0.95\"/>\n    <polygon points=\"490,360 540,360 500,430 450,430\" fill=\"#FFFFFF\" opacity=\"0.95\"/>\n    <polygon points=\"560,360 610,360 580,430 530,430\" fill=\"#FFFFFF\" opacity=\"0.95\"/>\n    <polygon points=\"630,360 680,360 660,430 610,430\" fill=\"#FFFFFF\" opacity=\"0.95\"/>\n    <polygon points=\"700,360 750,360 740,430 690,430\" fill=\"#FFFFFF\" opacity=\"0.95\"/>\n  </g>\n\n  <!-- Paved Sidewalk Patio (Left Foreground) (hs-t4c-patio at 176, 370) -->\n  <g id=\"t4c-patio-pavement\">\n    <polygon points=\"0,260 350,260 290,500 0,500\" fill=\"url(#sc-terracotta)\"/>\n    <!-- Terracotta paver grid lines -->\n    <line x1=\"0\" y1=\"310\" x2=\"335\" y2=\"310\" stroke=\"#7C2D12\" stroke-width=\"1.5\"/>\n    <line x1=\"0\" y1=\"360\" x2=\"320\" y2=\"360\" stroke=\"#7C2D12\" stroke-width=\"1.5\"/>\n    <line x1=\"0\" y1=\"410\" x2=\"305\" y2=\"410\" stroke=\"#7C2D12\" stroke-width=\"1.5\"/>\n    <line x1=\"0\" y1=\"460\" x2=\"295\" y2=\"460\" stroke=\"#7C2D12\" stroke-width=\"1.5\"/>\n  </g>\n\n  <!-- Decorative Wrought Iron Handrail / Safety Railing (hs-t4c-railing at 368, 325) -->\n  <g id=\"t4c-railing\" filter=\"url(#sc-shadow)\">\n    <!-- Top Handrail Bar -->\n    <line x1=\"340\" y1=\"280\" x2=\"285\" y2=\"470\" stroke=\"#0F172A\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n    <line x1=\"337\" y1=\"320\" x2=\"287\" y2=\"470\" stroke=\"#0F172A\" stroke-width=\"3\"/>\n    <!-- Vertical Balusters & Ball Finials -->\n    <line x1=\"335\" y1=\"290\" x2=\"335\" y2=\"340\" stroke=\"#0F172A\" stroke-width=\"3\"/>\n    <line x1=\"320\" y1=\"330\" x2=\"320\" y2=\"385\" stroke=\"#0F172A\" stroke-width=\"3\"/>\n    <line x1=\"305\" y1=\"375\" x2=\"305\" y2=\"430\" stroke=\"#0F172A\" stroke-width=\"3\"/>\n    <line x1=\"290\" y1=\"420\" x2=\"290\" y2=\"475\" stroke=\"#0F172A\" stroke-width=\"3\"/>\n  </g>\n\n  <!-- Stylish Patron Leaning on Handrail (hs-t4c-lean at 336, 290) -->\n  <g id=\"t4c-leaning-patron\">\n    <!-- Slim Chinos -->\n    <path d=\"M322 340 L318 435 L330 435 L338 350 L342 435 L354 435 L346 340 Z\" fill=\"#334155\" stroke=\"#0F172A\" stroke-width=\"1.8\"/>\n    <!-- Brown Oxford Shoes -->\n    <polygon points=\"312,435 332,435 334,442 310,442\" fill=\"#582D0C\"/>\n    <polygon points=\"338,435 358,435 360,442 336,442\" fill=\"#582D0C\"/>\n\n    <!-- Tailored Camel / Tan Trench Jacket -->\n    <path d=\"M316 245 C316 225, 355 225, 358 245 L350 345 L318 345 Z\" fill=\"#D7A15C\" stroke=\"#A16207\" stroke-width=\"2\"/>\n    <polygon points=\"332,225 338,245 344,225\" fill=\"#FFFFFF\"/>\n\n    <!-- Head & Hair Profile looking toward street -->\n    <rect x=\"334\" y=\"214\" width=\"8\" height=\"12\" fill=\"#FDBA74\"/>\n    <ellipse cx=\"338\" cy=\"202\" rx=\"12\" ry=\"14\" fill=\"#FDBA74\"/>\n    <path d=\"M328 198 C326 182, 350 180, 350 196 Z\" fill=\"#1E293B\"/>\n    <circle cx=\"344\" cy=\"200\" r=\"1.5\" fill=\"#0F172A\"/>\n\n    <!-- Arms Resting Comfortably on Handrail (hs-t4c-lean at 336, 290) -->\n    <path d=\"M325 250 Q334 280 340 305\" fill=\"none\" stroke=\"#D7A15C\" stroke-width=\"9\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"340\" cy=\"308\" rx=\"4.5\" ry=\"4\" fill=\"#FDBA74\"/>\n    <!-- Ceramic Espresso Cup in hand -->\n    <rect x=\"338\" y=\"300\" width=\"8\" height=\"10\" rx=\"1.5\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"0.8\"/>\n  </g>\n\n  <!-- Pedestrian Crossing the Street on Zebra Crosswalk (hs-t4c-cross at 576, 310) -->\n  <g id=\"t4c-pedestrian\">\n    <!-- Legs Mid-Stride Across Crosswalk -->\n    <path d=\"M565 340 L552 418 L564 418 L575 350 L588 418 L600 418 L590 340 Z\" fill=\"#1E3A8A\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <polygon points=\"546,418 566,418 568,425 544,425\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1.2\"/>\n    <polygon points=\"594,418 614,418 616,425 592,425\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1.2\"/>\n\n    <!-- Emerald Green Trench Coat / Jacket -->\n    <path d=\"M562 255 C562 235, 604 235, 604 255 L598 348 L566 348 Z\" fill=\"#047857\" stroke=\"#064E3B\" stroke-width=\"2\"/>\n    <!-- Shoulder Tote Bag -->\n    <path d=\"M575 245 Q565 280 568 310\" fill=\"none\" stroke=\"#78350F\" stroke-width=\"2.5\"/>\n    <rect x=\"560\" y=\"295\" width=\"20\" height=\"24\" rx=\"3\" fill=\"#B45309\"/>\n\n    <!-- Neck & Head with Stylish Bob Hair -->\n    <rect x=\"580\" y=\"225\" width=\"8\" height=\"12\" fill=\"#FDBA74\"/>\n    <ellipse cx=\"584\" cy=\"214\" rx=\"11\" ry=\"13\" fill=\"#FDBA74\"/>\n    <path d=\"M574 212 C572 195, 598 192, 598 210 C598 218, 592 225, 588 226 Z\" fill=\"#78350F\"/>\n    <circle cx=\"588\" cy=\"214\" r=\"1.5\" fill=\"#0F172A\"/>\n\n    <!-- Left Arm swinging naturally mid-stride -->\n    <path d=\"M568 255 Q560 280 562 305\" fill=\"none\" stroke=\"#047857\" stroke-width=\"8\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"562\" cy=\"308\" rx=\"4\" ry=\"3.5\" fill=\"#FDBA74\"/>\n\n    <!-- Right Arm swinging forward -->\n    <path d=\"M596 255 Q606 280 604 305\" fill=\"none\" stroke=\"#047857\" stroke-width=\"8\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"604\" cy=\"308\" rx=\"4\" ry=\"3.5\" fill=\"#FDBA74\"/>\n  </g>\n\n  <!-- Outdoor Bistro Table & Patrons on Sidewalk Patio -->\n  <g id=\"t4c-patio-furniture\" filter=\"url(#sc-shadow)\">\n    <!-- Round Cast-Iron Bistro Table -->\n    <ellipse cx=\"140\" cy=\"435\" rx=\"36\" ry=\"12\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"2\"/>\n    <ellipse cx=\"140\" cy=\"435\" rx=\"32\" ry=\"10\" fill=\"#F8FAFC\"/>\n    <rect x=\"138\" y=\"435\" width=\"5\" height=\"40\" fill=\"#1E293B\"/>\n    <ellipse cx=\"140\" cy=\"475\" rx=\"18\" ry=\"5\" fill=\"#0F172A\"/>\n\n    <!-- Espresso Cups & Croissant on Plate -->\n    <ellipse cx=\"132\" cy=\"432\" rx=\"7\" ry=\"2.5\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"0.8\"/>\n    <circle cx=\"132\" cy=\"431\" r=\"2.5\" fill=\"#451A03\"/>\n    <ellipse cx=\"150\" cy=\"433\" rx=\"8\" ry=\"3\" fill=\"#D97706\"/>\n  </g>\n</svg>",
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
        "svg": "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" class=\"part1-svg-art\">\n  <defs>\n    <!-- Outdoor tarmac sky gradient -->\n    <linearGradient id=\"a-sky\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#38BDF8\"/>\n      <stop offset=\"65%\" stop-color=\"#BAE6FD\"/>\n      <stop offset=\"100%\" stop-color=\"#E0F2FE\"/>\n    </linearGradient>\n\n    <!-- Concrete runway tarmac -->\n    <linearGradient id=\"a-tarmac\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#64748B\"/>\n      <stop offset=\"100%\" stop-color=\"#475569\"/>\n    </linearGradient>\n\n    <!-- Airplane white/blue airline livery -->\n    <linearGradient id=\"a-plane-fuselage\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#FFFFFF\"/>\n      <stop offset=\"75%\" stop-color=\"#F1F5F9\"/>\n      <stop offset=\"100%\" stop-color=\"#CBD5E1\"/>\n    </linearGradient>\n\n    <linearGradient id=\"a-airline-blue\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#1D4ED8\"/>\n      <stop offset=\"100%\" stop-color=\"#1E3A8A\"/>\n    </linearGradient>\n\n    <!-- Massive glass window curtain wall sheen -->\n    <linearGradient id=\"a-glass-sheen\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#FFFFFF\" stop-opacity=\"0.35\"/>\n      <stop offset=\"35%\" stop-color=\"#FFFFFF\" stop-opacity=\"0.05\"/>\n      <stop offset=\"65%\" stop-color=\"#FFFFFF\" stop-opacity=\"0.2\"/>\n      <stop offset=\"100%\" stop-color=\"#BAE6FD\" stop-opacity=\"0.1\"/>\n    </linearGradient>\n\n    <!-- High-gloss terrazzo terminal floor -->\n    <linearGradient id=\"a-floor\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#94A3B8\"/>\n      <stop offset=\"50%\" stop-color=\"#CBD5E1\"/>\n      <stop offset=\"100%\" stop-color=\"#64748B\"/>\n    </linearGradient>\n\n    <!-- Premium polycarbonate suitcase red/burgundy -->\n    <linearGradient id=\"a-suitcase\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#991B1B\"/>\n      <stop offset=\"40%\" stop-color=\"#DC2626\"/>\n      <stop offset=\"80%\" stop-color=\"#EF4444\"/>\n      <stop offset=\"100%\" stop-color=\"#7F1D1D\"/>\n    </linearGradient>\n\n    <!-- Travel backpack rugged canvas -->\n    <linearGradient id=\"a-backpack\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#0284C7\"/>\n      <stop offset=\"50%\" stop-color=\"#0369A1\"/>\n      <stop offset=\"100%\" stop-color=\"#075985\"/>\n    </linearGradient>\n\n    <!-- Departure screen LCD -->\n    <linearGradient id=\"a-fids-screen\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#0F172A\"/>\n      <stop offset=\"100%\" stop-color=\"#020617\"/>\n    </linearGradient>\n\n    <!-- Shadows -->\n    <filter id=\"a-shadow\" x=\"-10%\" y=\"-10%\" width=\"125%\" height=\"125%\">\n      <feDropShadow dx=\"0\" dy=\"8\" stdDeviation=\"10\" flood-color=\"#0F172A\" flood-opacity=\"0.28\"/>\n    </filter>\n    <filter id=\"a-elem-shadow\" x=\"-8%\" y=\"-8%\" width=\"120%\" height=\"120%\">\n      <feDropShadow dx=\"0\" dy=\"4\" stdDeviation=\"5\" flood-color=\"#0F172A\" flood-opacity=\"0.18\"/>\n    </filter>\n  </defs>\n\n  <!-- Outside View: Blue Sky & Concrete Tarmac Runway -->\n  <rect x=\"0\" y=\"0\" width=\"800\" height=\"260\" fill=\"url(#a-sky)\"/>\n  <rect x=\"0\" y=\"160\" width=\"800\" height=\"100\" fill=\"url(#a-tarmac)\"/>\n  <!-- Tarmac yellow taxiway guidance stripe -->\n  <line x1=\"0\" y1=\"230\" x2=\"800\" y2=\"230\" stroke=\"#FACC15\" stroke-width=\"3\" stroke-dasharray=\"16,12\"/>\n\n  <!-- Commercial Passenger Airplane on Tarmac (hs-t5-plane at 608, 170) -->\n  <g id=\"t5-airplane\" filter=\"url(#a-elem-shadow)\">\n    <!-- Aerodynamic Jet Wing Swept Back -->\n    <polygon points=\"560,185 710,140 735,142 630,195\" fill=\"#CBD5E1\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <!-- Winglet / Sharklet on wing tip -->\n    <polygon points=\"735,142 742,126 740,143\" fill=\"#1D4ED8\"/>\n\n    <!-- High-Bypass Turbofan Jet Engine Under Wing -->\n    <rect x=\"620\" y=\"180\" width=\"48\" height=\"26\" rx=\"10\" fill=\"#E2E8F0\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <ellipse cx=\"620\" cy=\"193\" rx=\"8\" ry=\"12\" fill=\"#1E293B\"/>\n    <circle cx=\"620\" cy=\"193\" r=\"3.5\" fill=\"#CBD5E1\"/>\n\n    <!-- Aircraft Fuselage Body in Perspective -->\n    <path d=\"M470 178 Q500 162 610 160 L780 160 L780 195 L610 195 Q510 195 470 178 Z\" fill=\"url(#a-plane-fuselage)\" stroke=\"#94A3B8\" stroke-width=\"1.8\"/>\n    <!-- Airline Dynamic Blue & Gold Livery Stripe -->\n    <path d=\"M500 174 L780 174 L780 182 L520 182 Z\" fill=\"url(#a-airline-blue)\"/>\n    <line x1=\"530\" y1=\"184\" x2=\"780\" y2=\"184\" stroke=\"#FACC15\" stroke-width=\"1.5\"/>\n\n    <!-- Row of Passenger Cabin Windows -->\n    <g fill=\"#0F172A\">\n      <rect x=\"545\" y=\"165\" width=\"5\" height=\"7\" rx=\"2\"/><rect x=\"555\" y=\"165\" width=\"5\" height=\"7\" rx=\"2\"/>\n      <rect x=\"565\" y=\"165\" width=\"5\" height=\"7\" rx=\"2\"/><rect x=\"575\" y=\"165\" width=\"5\" height=\"7\" rx=\"2\"/>\n      <rect x=\"585\" y=\"165\" width=\"5\" height=\"7\" rx=\"2\"/><rect x=\"595\" y=\"165\" width=\"5\" height=\"7\" rx=\"2\"/>\n      <rect x=\"605\" y=\"165\" width=\"5\" height=\"7\" rx=\"2\"/><rect x=\"615\" y=\"165\" width=\"5\" height=\"7\" rx=\"2\"/>\n      <rect x=\"625\" y=\"165\" width=\"5\" height=\"7\" rx=\"2\"/><rect x=\"635\" y=\"165\" width=\"5\" height=\"7\" rx=\"2\"/>\n      <rect x=\"645\" y=\"165\" width=\"5\" height=\"7\" rx=\"2\"/><rect x=\"655\" y=\"165\" width=\"5\" height=\"7\" rx=\"2\"/>\n      <rect x=\"665\" y=\"165\" width=\"5\" height=\"7\" rx=\"2\"/><rect x=\"675\" y=\"165\" width=\"5\" height=\"7\" rx=\"2\"/>\n      <rect x=\"685\" y=\"165\" width=\"5\" height=\"7\" rx=\"2\"/><rect x=\"695\" y=\"165\" width=\"5\" height=\"7\" rx=\"2\"/>\n    </g>\n\n    <!-- Cockpit Flight Deck Windows on Nose -->\n    <polygon points=\"485,172 498,168 502,174 488,175\" fill=\"#0F172A\"/>\n\n    <!-- Tail Vertical Stabilizer Fin in Airline Livery -->\n    <polygon points=\"730,160 765,85 795,85 780,160\" fill=\"url(#a-airline-blue)\" stroke=\"#1E3A8A\" stroke-width=\"1.5\"/>\n    <circle cx=\"765\" cy=\"115\" r=\"10\" fill=\"#FACC15\"/>\n    <!-- Horizontal Stabilizer -->\n    <polygon points=\"750,158 790,145 795,148 765,162\" fill=\"#CBD5E1\"/>\n  </g>\n\n  <!-- Massive Airport Terminal Glass Wall & Architectural Steel Mullions -->\n  <!-- (hs-t5-terminal at 432, 140) -->\n  <g id=\"t5-terminal-structure\">\n    <!-- Giant Steel Support Columns & Mullions -->\n    <rect x=\"180\" y=\"0\" width=\"14\" height=\"260\" fill=\"#334155\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n    <rect x=\"370\" y=\"0\" width=\"14\" height=\"260\" fill=\"#334155\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n    <rect x=\"560\" y=\"0\" width=\"14\" height=\"260\" fill=\"#334155\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n    <rect x=\"750\" y=\"0\" width=\"14\" height=\"260\" fill=\"#334155\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n\n    <!-- Horizontal Curtain Wall Transoms -->\n    <line x1=\"0\" y1=\"85\" x2=\"800\" y2=\"85\" stroke=\"#1E293B\" stroke-width=\"3\"/>\n    <line x1=\"0\" y1=\"170\" x2=\"800\" y2=\"170\" stroke=\"#1E293B\" stroke-width=\"3\"/>\n    <line x1=\"0\" y1=\"260\" x2=\"800\" y2=\"260\" stroke=\"#0F172A\" stroke-width=\"4\"/>\n\n    <!-- High-Ceiling Exposed Steel Space Frame Diagonals (Top) -->\n    <line x1=\"0\" y1=\"40\" x2=\"800\" y2=\"40\" stroke=\"#94A3B8\" stroke-width=\"3\"/>\n    <line x1=\"0\" y1=\"0\" x2=\"90\" y2=\"40\" stroke=\"#64748B\" stroke-width=\"2\"/>\n    <line x1=\"90\" y1=\"40\" x2=\"180\" y2=\"0\" stroke=\"#64748B\" stroke-width=\"2\"/>\n    <line x1=\"180\" y1=\"0\" x2=\"275\" y2=\"40\" stroke=\"#64748B\" stroke-width=\"2\"/>\n    <line x1=\"275\" y1=\"40\" x2=\"370\" y2=\"0\" stroke=\"#64748B\" stroke-width=\"2\"/>\n    <line x1=\"370\" y1=\"0\" x2=\"465\" y2=\"40\" stroke=\"#64748B\" stroke-width=\"2\"/>\n    <line x1=\"465\" y1=\"40\" x2=\"560\" y2=\"0\" stroke=\"#64748B\" stroke-width=\"2\"/>\n    <line x1=\"560\" y1=\"0\" x2=\"655\" y2=\"40\" stroke=\"#64748B\" stroke-width=\"2\"/>\n    <line x1=\"655\" y1=\"40\" x2=\"750\" y2=\"0\" stroke=\"#64748B\" stroke-width=\"2\"/>\n\n    <!-- Giant Glass Reflection Sheens -->\n    <polygon points=\"0,0 120,0 50,260 0,260\" fill=\"url(#a-glass-sheen)\"/>\n    <polygon points=\"194,0 310,0 240,260 194,260\" fill=\"url(#a-glass-sheen)\"/>\n    <polygon points=\"384,0 500,0 430,260 384,260\" fill=\"url(#a-glass-sheen)\"/>\n    <polygon points=\"574,0 690,0 620,260 574,260\" fill=\"url(#a-glass-sheen)\"/>\n  </g>\n\n  <!-- Flight Departure Information Display System (FIDS) Monitor (hs-t5-screen at 120, 120) -->\n  <g id=\"t5-fids-monitor\" filter=\"url(#a-shadow)\">\n    <!-- Ceiling Mounting Tubes -->\n    <line x1=\"85\" y1=\"0\" x2=\"85\" y2=\"70\" stroke=\"#475569\" stroke-width=\"3\"/>\n    <line x1=\"155\" y1=\"0\" x2=\"155\" y2=\"70\" stroke=\"#475569\" stroke-width=\"3\"/>\n\n    <!-- High-Res Departure Screen Enclosure -->\n    <rect x=\"60\" y=\"70\" width=\"120\" height=\"95\" rx=\"5\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"3\"/>\n    <rect x=\"64\" y=\"74\" width=\"112\" height=\"87\" rx=\"2\" fill=\"url(#a-fids-screen)\"/>\n\n    <!-- Screen Header: DEPARTURES -->\n    <rect x=\"68\" y=\"78\" width=\"104\" height=\"12\" fill=\"#1D4ED8\" rx=\"1\"/>\n    <line x1=\"74\" y1=\"84\" x2=\"120\" y2=\"84\" stroke=\"#FFFFFF\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n\n    <!-- Flight Row 1 (TOKYO - BOARDING) -->\n    <line x1=\"70\" y1=\"98\" x2=\"115\" y2=\"98\" stroke=\"#FEF08A\" stroke-width=\"1.8\"/>\n    <rect x=\"140\" y=\"94\" width=\"30\" height=\"8\" rx=\"1\" fill=\"#16A34A\"/>\n    <line x1=\"144\" y1=\"98\" x2=\"166\" y2=\"98\" stroke=\"#FFFFFF\" stroke-width=\"1.5\"/>\n\n    <!-- Flight Row 2 (LONDON - ON TIME) -->\n    <line x1=\"70\" y1=\"112\" x2=\"118\" y2=\"112\" stroke=\"#FFFFFF\" stroke-width=\"1.8\"/>\n    <line x1=\"142\" y1=\"112\" x2=\"168\" y2=\"112\" stroke=\"#38BDF8\" stroke-width=\"1.8\"/>\n\n    <!-- Flight Row 3 (PARIS - GATE OPEN) -->\n    <line x1=\"70\" y1=\"126\" x2=\"112\" y2=\"126\" stroke=\"#FFFFFF\" stroke-width=\"1.8\"/>\n    <line x1=\"142\" y1=\"126\" x2=\"168\" y2=\"126\" stroke=\"#FACC15\" stroke-width=\"1.8\"/>\n\n    <!-- Flight Row 4 (NEW YORK - DELAYED) -->\n    <line x1=\"70\" y1=\"140\" x2=\"122\" y2=\"140\" stroke=\"#FFFFFF\" stroke-width=\"1.8\"/>\n    <line x1=\"142\" y1=\"140\" x2=\"168\" y2=\"140\" stroke=\"#EF4444\" stroke-width=\"1.8\"/>\n\n    <!-- Flight Row 5 (SINGAPORE - ON TIME) -->\n    <line x1=\"70\" y1=\"154\" x2=\"125\" y2=\"154\" stroke=\"#FFFFFF\" stroke-width=\"1.8\"/>\n    <line x1=\"142\" y1=\"154\" x2=\"168\" y2=\"154\" stroke=\"#38BDF8\" stroke-width=\"1.8\"/>\n  </g>\n\n  <!-- Polished High-Gloss Terrazzo Terminal Floor -->\n  <g id=\"t5-floor-layer\">\n    <rect x=\"0\" y=\"260\" width=\"800\" height=\"240\" fill=\"url(#a-floor)\"/>\n    <line x1=\"0\" y1=\"260\" x2=\"800\" y2=\"260\" stroke=\"#334155\" stroke-width=\"3\"/>\n    <!-- Floor Tile Seam Lines in Perspective -->\n    <line x1=\"200\" y1=\"260\" x2=\"80\" y2=\"500\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <line x1=\"400\" y1=\"260\" x2=\"360\" y2=\"500\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <line x1=\"600\" y1=\"260\" x2=\"640\" y2=\"500\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <line x1=\"0\" y1=\"340\" x2=\"800\" y2=\"340\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <line x1=\"0\" y1=\"420\" x2=\"800\" y2=\"420\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n\n    <!-- Mirror Specular Floor Reflections of Aircraft & Windows -->\n    <polygon points=\"560,260 760,260 780,310 540,310\" fill=\"#FFFFFF\" opacity=\"0.12\"/>\n    <polygon points=\"180,260 194,260 190,320 176,320\" fill=\"#334155\" opacity=\"0.3\"/>\n    <polygon points=\"370,260 384,260 380,320 366,320\" fill=\"#334155\" opacity=\"0.3\"/>\n  </g>\n\n  <!-- Terminal Gate Waiting Lounge Seats (Right Background) -->\n  <g id=\"t5-lounge-seats\" filter=\"url(#a-shadow)\">\n    <!-- Chrome Tandem Frame Legs & Rail -->\n    <line x1=\"620\" y1=\"330\" x2=\"790\" y2=\"330\" stroke=\"#94A3B8\" stroke-width=\"4.5\"/>\n    <line x1=\"640\" y1=\"330\" x2=\"635\" y2=\"365\" stroke=\"#475569\" stroke-width=\"3.5\"/>\n    <line x1=\"760\" y1=\"330\" x2=\"755\" y2=\"365\" stroke=\"#475569\" stroke-width=\"3.5\"/>\n\n    <!-- Upholstered High-Density Charcoal Lounge Seat 1 -->\n    <rect x=\"635\" y=\"278\" width=\"40\" height=\"48\" rx=\"6\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"1.5\"/>\n    <rect x=\"638\" y=\"318\" width=\"40\" height=\"15\" rx=\"3\" fill=\"#334155\"/>\n\n    <!-- Seat 2 -->\n    <rect x=\"685\" y=\"278\" width=\"40\" height=\"48\" rx=\"6\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"1.5\"/>\n    <rect x=\"688\" y=\"318\" width=\"40\" height=\"15\" rx=\"3\" fill=\"#334155\"/>\n\n    <!-- Seat 3 -->\n    <rect x=\"735\" y=\"278\" width=\"40\" height=\"48\" rx=\"6\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"1.5\"/>\n    <rect x=\"738\" y=\"318\" width=\"40\" height=\"15\" rx=\"3\" fill=\"#334155\"/>\n  </g>\n\n  <!-- Traveler 1: Woman Standing with Rolling Luggage (hs-t5-suitcase at 208, 390; hs-t5-luggage at 240, 400) -->\n  <g id=\"t5-traveler-woman\">\n    <!-- Shadow under traveler & suitcase -->\n    <ellipse cx=\"230\" cy=\"460\" rx=\"45\" ry=\"14\" fill=\"#0F172A\" opacity=\"0.3\"/>\n\n    <!-- Tailored Cream Travel Slacks -->\n    <path d=\"M196 350 L190 445 L202 445 L210 365 L218 445 L230 445 L224 350 Z\" fill=\"#E2E8F0\" stroke=\"#CBD5E1\" stroke-width=\"2\"/>\n    <!-- Elegant Flat Travel Shoes -->\n    <polygon points=\"184,445 204,445 206,453 182,453\" fill=\"#0F172A\"/>\n    <polygon points=\"214,445 234,445 236,453 212,453\" fill=\"#0F172A\"/>\n\n    <!-- Fitted Navy Travel Blazer over Striped Top -->\n    <path d=\"M188 260 C188 240, 230 240, 234 260 L228 352 L192 352 Z\" fill=\"#1E3A8A\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <polygon points=\"206,240 211,262 216,240\" fill=\"#FFFFFF\"/>\n\n    <!-- Neck & Head with Sleek Ponytail -->\n    <rect x=\"207\" y=\"228\" width=\"8\" height=\"12\" fill=\"#FDBA74\"/>\n    <ellipse cx=\"211\" cy=\"216\" rx=\"12\" ry=\"14\" fill=\"#FDBA74\"/>\n    <path d=\"M201 214 C199 198, 224 196, 224 212 C224 218, 220 226, 216 228 Z\" fill=\"#451A03\"/>\n    <path d=\"M199 214 Q188 225 185 240 Q192 240 200 224\" fill=\"#451A03\"/>\n\n    <!-- Right Arm EXTENDED PULLING SUITCASE TROLLEY HANDLE -->\n    <path d=\"M228 260 Q240 280 246 308\" fill=\"none\" stroke=\"#1E3A8A\" stroke-width=\"9\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"247\" cy=\"312\" rx=\"4.5\" ry=\"4\" fill=\"#FDBA74\"/>\n\n    <!-- Premium Hardshell Rolling Spinner Suitcase (hs-t5-suitcase at 208, 390; hs-t5-luggage at 240, 400) -->\n    <g id=\"t5-rolling-suitcase\" filter=\"url(#a-shadow)\">\n      <!-- Dual Chrome Telescopic Trolley Handle Bars -->\n      <line x1=\"242\" y1=\"312\" x2=\"242\" y2=\"350\" stroke=\"#94A3B8\" stroke-width=\"3\"/>\n      <line x1=\"252\" y1=\"312\" x2=\"252\" y2=\"350\" stroke=\"#94A3B8\" stroke-width=\"3\"/>\n      <rect x=\"238\" y=\"308\" width=\"18\" height=\"6\" rx=\"2\" fill=\"#0F172A\"/>\n\n      <!-- Hardshell Polycarbonate Suitcase Body (Crimson / Burgundy) -->\n      <rect x=\"228\" y=\"348\" width=\"46\" height=\"74\" rx=\"7\" fill=\"url(#a-suitcase)\" stroke=\"#7F1D1D\" stroke-width=\"2\"/>\n      <!-- Molded Horizontal Rib Ridges for strength -->\n      <line x1=\"234\" y1=\"365\" x2=\"268\" y2=\"365\" stroke=\"#7F1D1D\" stroke-width=\"2\"/>\n      <line x1=\"234\" y1=\"380\" x2=\"268\" y2=\"380\" stroke=\"#7F1D1D\" stroke-width=\"2\"/>\n      <line x1=\"234\" y1=\"395\" x2=\"268\" y2=\"395\" stroke=\"#7F1D1D\" stroke-width=\"2\"/>\n      <line x1=\"234\" y1=\"410\" x2=\"268\" y2=\"410\" stroke=\"#7F1D1D\" stroke-width=\"2\"/>\n      <!-- Metallic Corner Bumpers -->\n      <path d=\"M228 355 A7 7 0 0 1 235 348\" stroke=\"#CBD5E1\" stroke-width=\"3\" fill=\"none\"/>\n      <path d=\"M267 348 A7 7 0 0 1 274 355\" stroke=\"#CBD5E1\" stroke-width=\"3\" fill=\"none\"/>\n\n      <!-- 360-Degree Swivel Spinner Wheels on Base -->\n      <circle cx=\"236\" cy=\"428\" r=\"4.5\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"1.2\"/>\n      <circle cx=\"266\" cy=\"428\" r=\"4.5\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"1.2\"/>\n\n      <!-- Leather Duffel Bag Strapped on Top of Suitcase -->\n      <rect x=\"232\" y=\"334\" width=\"38\" height=\"16\" rx=\"4\" fill=\"#78350F\" stroke=\"#451A03\" stroke-width=\"1.2\"/>\n      <path d=\"M242 334 Q251 326 260 334\" fill=\"none\" stroke=\"#451A03\" stroke-width=\"2\"/>\n    </g>\n  </g>\n\n  <!-- Traveler 2: Passenger Boarding Flight with Travel Backpack -->\n  <!-- (hs-t5-board at 440, 310; hs-t5-backpack at 464, 275; hs-t5-carry at 448, 260) -->\n  <g id=\"t5-traveler-boarding\">\n    <!-- Shadow under passenger -->\n    <ellipse cx=\"440\" cy=\"445\" rx=\"32\" ry=\"11\" fill=\"#0F172A\" opacity=\"0.3\"/>\n\n    <!-- Denim Jeans Mid-Stride Moving Towards Gate -->\n    <path d=\"M425 340 L418 435 L430 435 L440 355 L452 435 L464 435 L455 340 Z\" fill=\"#1E3A8A\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <polygon points=\"412,435 432,435 434,442 410,442\" fill=\"#334155\"/>\n    <polygon points=\"446,435 466,435 468,442 444,442\" fill=\"#334155\"/>\n\n    <!-- Casual Travel Jacket (Olive Green) -->\n    <path d=\"M422 255 C422 235, 460 235, 464 255 L458 345 L424 345 Z\" fill=\"#15803D\" stroke=\"#14532D\" stroke-width=\"2\"/>\n\n    <!-- Neck & Head with Short Groomed Hair -->\n    <rect x=\"438\" y=\"225\" width=\"8\" height=\"12\" fill=\"#FDBA74\"/>\n    <ellipse cx=\"442\" cy=\"214\" rx=\"11\" ry=\"14\" fill=\"#FDBA74\"/>\n    <path d=\"M432 210 C430 195, 452 192, 452 210 Z\" fill=\"#1E293B\"/>\n\n    <!-- Rugged Travel Backpack on Back (hs-t5-backpack at 464, 275; hs-t5-carry at 448, 260) -->\n    <g id=\"t5-backpack-item\" filter=\"url(#a-elem-shadow)\">\n      <!-- Main Backpack Body -->\n      <rect x=\"455\" y=\"246\" width=\"30\" height=\"52\" rx=\"8\" fill=\"url(#a-backpack)\" stroke=\"#075985\" stroke-width=\"1.8\"/>\n      <!-- Top Compartment Pocket -->\n      <rect x=\"458\" y=\"250\" width=\"24\" height=\"16\" rx=\"4\" fill=\"#0284C7\"/>\n      <line x1=\"460\" y1=\"266\" x2=\"480\" y2=\"266\" stroke=\"#0F172A\" stroke-width=\"1.5\"/>\n      <!-- Front Zipper Pocket & Compression Straps -->\n      <rect x=\"460\" y=\"272\" width=\"22\" height=\"20\" rx=\"3\" fill=\"#0369A1\"/>\n      <line x1=\"455\" y1=\"280\" x2=\"485\" y2=\"280\" stroke=\"#F59E0B\" stroke-width=\"2\"/>\n      <line x1=\"455\" y1=\"292\" x2=\"485\" y2=\"292\" stroke=\"#F59E0B\" stroke-width=\"2\"/>\n      <!-- Mesh Water Bottle Pocket on Side -->\n      <rect x=\"483\" y=\"268\" width=\"6\" height=\"18\" rx=\"2\" fill=\"#64748B\"/>\n      <!-- Padded Shoulder Harness Straps -->\n      <path d=\"M445 242 Q438 265 440 288\" fill=\"none\" stroke=\"#0F172A\" stroke-width=\"4.5\" stroke-linecap=\"round\"/>\n    </g>\n\n    <!-- Right Arm Holding Boarding Pass & Passport in Hand -->\n    <path d=\"M432 258 Q422 285 428 310\" fill=\"none\" stroke=\"#15803D\" stroke-width=\"8\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"428\" cy=\"312\" rx=\"4.5\" ry=\"4\" fill=\"#FDBA74\"/>\n    <!-- Boarding Pass Envelope -->\n    <polygon points=\"420,305 435,305 432,320 418,320\" fill=\"#FFFFFF\" stroke=\"#0284C7\" stroke-width=\"1\"/>\n    <line x1=\"422\" y1=\"310\" x2=\"430\" y2=\"310\" stroke=\"#EF4444\" stroke-width=\"1.5\"/>\n  </g>\n</svg>",
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
        "svg": "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" class=\"part1-svg-art\">\n  <defs>\n    <!-- Coastal clear sky gradient -->\n    <linearGradient id=\"h-sky\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#38BDF8\"/>\n      <stop offset=\"60%\" stop-color=\"#BAE6FD\"/>\n      <stop offset=\"100%\" stop-color=\"#E0F2FE\"/>\n    </linearGradient>\n\n    <!-- Deep oceanic waterway & harbor water -->\n    <linearGradient id=\"h-water\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#0284C7\"/>\n      <stop offset=\"40%\" stop-color=\"#0369A1\"/>\n      <stop offset=\"80%\" stop-color=\"#075985\"/>\n      <stop offset=\"100%\" stop-color=\"#0C4A6E\"/>\n    </linearGradient>\n\n    <!-- Weathered wooden pier deck planks -->\n    <linearGradient id=\"h-wood-pier\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#D7A15C\"/>\n      <stop offset=\"35%\" stop-color=\"#C2884A\"/>\n      <stop offset=\"70%\" stop-color=\"#9A622A\"/>\n      <stop offset=\"100%\" stop-color=\"#78350F\"/>\n    </linearGradient>\n\n    <!-- Boat fiberglass hull with marine gelcoat -->\n    <linearGradient id=\"h-hull-white\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#FFFFFF\"/>\n      <stop offset=\"70%\" stop-color=\"#F1F5F9\"/>\n      <stop offset=\"100%\" stop-color=\"#CBD5E1\"/>\n    </linearGradient>\n\n    <linearGradient id=\"h-marine-blue\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#1D4ED8\"/>\n      <stop offset=\"50%\" stop-color=\"#2563EB\"/>\n      <stop offset=\"100%\" stop-color=\"#1E3A8A\"/>\n    </linearGradient>\n\n    <!-- Nautical Manila Hemp Rope -->\n    <linearGradient id=\"h-rope\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#D97706\"/>\n      <stop offset=\"50%\" stop-color=\"#FBBF24\"/>\n      <stop offset=\"100%\" stop-color=\"#B45309\"/>\n    </linearGradient>\n\n    <!-- Shadows -->\n    <filter id=\"h-shadow\" x=\"-10%\" y=\"-10%\" width=\"125%\" height=\"125%\">\n      <feDropShadow dx=\"0\" dy=\"6\" stdDeviation=\"8\" flood-color=\"#0C4A6E\" flood-opacity=\"0.35\"/>\n    </filter>\n    <filter id=\"h-elem-shadow\" x=\"-8%\" y=\"-8%\" width=\"120%\" height=\"120%\">\n      <feDropShadow dx=\"0\" dy=\"3\" stdDeviation=\"4\" flood-color=\"#0F172A\" flood-opacity=\"0.2\"/>\n    </filter>\n  </defs>\n\n  <!-- Clear Coastal Sky -->\n  <rect x=\"0\" y=\"0\" width=\"800\" height=\"230\" fill=\"url(#h-sky)\"/>\n\n  <!-- Distant Shoreline, Hills & Lighthouse -->\n  <g id=\"h-distant-shore\" opacity=\"0.75\">\n    <!-- Gentle coastal hills -->\n    <path d=\"M0 220 Q120 185 260 210 Q380 195 500 215 Q640 185 800 210 L800 230 L0 230 Z\" fill=\"#64748B\"/>\n    <!-- Distant White Lighthouse with Red Band -->\n    <polygon points=\"175,200 185,200 188,215 172,215\" fill=\"#FFFFFF\"/>\n    <rect x=\"174\" y=\"205\" width=\"12\" height=\"4\" fill=\"#DC2626\"/>\n    <polygon points=\"176,200 180,194 184,200\" fill=\"#0F172A\"/>\n\n    <!-- Distant Container Ship on Horizon -->\n    <polygon points=\"40,215 95,215 90,224 45,224\" fill=\"#B91C1C\"/>\n    <rect x=\"55\" y=\"208\" width=\"12\" height=\"7\" fill=\"#3B82F6\"/>\n    <rect x=\"70\" y=\"208\" width=\"12\" height=\"7\" fill=\"#F59E0B\"/>\n  </g>\n\n  <!-- Soaring Seagulls in the Coastal Sky -->\n  <g id=\"h-seagulls\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\">\n    <path d=\"M210 75 Q218 68 226 75 Q234 68 242 75\"/>\n    <path d=\"M255 90 Q261 84 267 90 Q273 84 279 90\"/>\n    <path d=\"M340 60 Q348 52 356 60 Q364 52 372 60\"/>\n    <path d=\"M510 85 Q516 78 522 85 Q528 78 534 85\"/>\n  </g>\n\n  <!-- Distant Sailboat Cutting Across Bay (hs-t5h-sail at 640, 190) -->\n  <g id=\"t5h-sailboat\" filter=\"url(#h-elem-shadow)\">\n    <!-- Sailboat Hull -->\n    <polygon points=\"615,205 665,205 658,214 622,214\" fill=\"#FFFFFF\" stroke=\"#0284C7\" stroke-width=\"1\"/>\n    <!-- Tall Mast -->\n    <line x1=\"640\" y1=\"162\" x2=\"640\" y2=\"205\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <!-- Mainsail (Large triangular white sail) -->\n    <polygon points=\"640,165 640,202 618,202\" fill=\"#F8FAFC\" stroke=\"#CBD5E1\" stroke-width=\"1\"/>\n    <!-- Jib Sail (Front triangular sail) -->\n    <polygon points=\"642,168 642,202 660,202\" fill=\"#E2E8F0\" stroke=\"#CBD5E1\" stroke-width=\"1\"/>\n    <!-- Water wake foam -->\n    <line x1=\"610\" y1=\"214\" x2=\"668\" y2=\"214\" stroke=\"#E0F2FE\" stroke-width=\"1.5\"/>\n  </g>\n\n  <!-- Calm Harbor Waterway & River Waters (hs-t5h-waterway at 496, 275) -->\n  <g id=\"t5h-water-surface\">\n    <rect x=\"0\" y=\"225\" width=\"800\" height=\"275\" fill=\"url(#h-water)\"/>\n    <!-- Gentle Shimmering Wave Ripple Lines -->\n    <path d=\"M80 250 Q160 255 240 250\" fill=\"none\" stroke=\"#38BDF8\" stroke-width=\"1.8\" opacity=\"0.6\"/>\n    <path d=\"M320 245 Q400 250 480 245\" fill=\"none\" stroke=\"#38BDF8\" stroke-width=\"1.8\" opacity=\"0.6\"/>\n    <path d=\"M560 252 Q640 257 720 252\" fill=\"none\" stroke=\"#38BDF8\" stroke-width=\"1.8\" opacity=\"0.6\"/>\n\n    <path d=\"M140 290 Q220 295 300 290\" fill=\"none\" stroke=\"#67E8F9\" stroke-width=\"2\" opacity=\"0.5\"/>\n    <path d=\"M380 285 Q460 290 540 285\" fill=\"none\" stroke=\"#67E8F9\" stroke-width=\"2\" opacity=\"0.5\"/>\n    <path d=\"M620 292 Q700 297 780 292\" fill=\"none\" stroke=\"#67E8F9\" stroke-width=\"2\" opacity=\"0.5\"/>\n\n    <path d=\"M220 340 Q300 345 380 340\" fill=\"none\" stroke=\"#BAE6FD\" stroke-width=\"2.5\" opacity=\"0.45\"/>\n    <path d=\"M460 335 Q540 340 620 335\" fill=\"none\" stroke=\"#BAE6FD\" stroke-width=\"2.5\" opacity=\"0.45\"/>\n\n    <!-- Mirror Reflections of Boats on Water -->\n    <ellipse cx=\"630\" cy=\"405\" rx=\"140\" ry=\"24\" fill=\"#0284C7\" opacity=\"0.4\"/>\n  </g>\n\n  <!-- Small Rowing Boat with Rower in Waterway (hs-t5h-row at 416, 255) -->\n  <g id=\"t5h-rowboat\" filter=\"url(#h-elem-shadow)\">\n    <!-- Wooden Dinghy Boat Hull -->\n    <polygon points=\"385,255 448,255 442,268 392,268\" fill=\"#D7A15C\" stroke=\"#78350F\" stroke-width=\"1.5\"/>\n    <!-- Wooden Thwart Seat -->\n    <rect x=\"408\" y=\"255\" width=\"16\" height=\"5\" fill=\"#9A622A\"/>\n    <!-- Person Rowing the Boat -->\n    <circle cx=\"416\" cy=\"242\" r=\"5\" fill=\"#FDBA74\"/>\n    <rect x=\"412\" y=\"247\" width=\"8\" height=\"12\" rx=\"2\" fill=\"#EF4444\"/>\n    <!-- Oars Extending into Water with Splashes -->\n    <line x1=\"416\" y1=\"252\" x2=\"385\" y2=\"265\" stroke=\"#78350F\" stroke-width=\"2\"/>\n    <line x1=\"416\" y1=\"252\" x2=\"446\" y2=\"265\" stroke=\"#78350F\" stroke-width=\"2\"/>\n    <ellipse cx=\"382\" cy=\"266\" rx=\"4\" ry=\"1.5\" fill=\"#E0F2FE\"/>\n    <ellipse cx=\"448\" cy=\"266\" rx=\"4\" ry=\"1.5\" fill=\"#E0F2FE\"/>\n  </g>\n\n  <!-- Moored Motor Cruiser / Passenger Boat Docked Along Pier -->\n  <!-- (hs-t5h-boat at 624, 375; hs-t5h-dock at 520, 360) -->\n  <g id=\"t5h-moored-boat\" filter=\"url(#h-shadow)\">\n    <!-- Fiberglass Cabin Cruiser Hull in Perspective -->\n    <path d=\"M480 375 L560 340 L760 340 L790 395 L520 425 Z\" fill=\"url(#h-hull-white)\" stroke=\"#64748B\" stroke-width=\"2\"/>\n    <!-- Deep Navy Gelcoat Marine Stripe along Hull -->\n    <path d=\"M510 388 L565 365 L765 365 L782 392 L532 418 Z\" fill=\"url(#h-marine-blue)\"/>\n\n    <!-- Enclosed Cabin with Tinted Glass Windows -->\n    <polygon points=\"580,340 735,340 725,295 615,295\" fill=\"url(#h-hull-white)\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <!-- Tinted Cabin Windows -->\n    <polygon points=\"620,302 720,302 715,322 612,322\" fill=\"#0F172A\" stroke=\"#334155\" stroke-width=\"1\"/>\n    <polygon points=\"622,304 718,304 713,320 614,320\" fill=\"#0284C7\" opacity=\"0.6\"/>\n\n    <!-- Stainless Steel Bow & Deck Railing -->\n    <path d=\"M485 370 L555 336 L755 336\" fill=\"none\" stroke=\"#CBD5E1\" stroke-width=\"2.5\"/>\n    <line x1=\"515\" y1=\"355\" x2=\"515\" y2=\"385\" stroke=\"#CBD5E1\" stroke-width=\"2\"/>\n    <line x1=\"555\" y1=\"336\" x2=\"555\" y2=\"368\" stroke=\"#CBD5E1\" stroke-width=\"2\"/>\n    <line x1=\"655\" y1=\"336\" x2=\"655\" y2=\"365\" stroke=\"#CBD5E1\" stroke-width=\"2\"/>\n\n    <!-- Orange Lifebuoy Ring on Cabin Wall -->\n    <circle cx=\"670\" cy=\"312\" r=\"8\" fill=\"none\" stroke=\"#EA580C\" stroke-width=\"3\"/>\n    <circle cx=\"670\" cy=\"312\" r=\"8\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"3\" stroke-dasharray=\"8,8\"/>\n\n    <!-- Marine Radar & Antennas on Cabin Roof -->\n    <line x1=\"670\" y1=\"295\" x2=\"670\" y2=\"280\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <ellipse cx=\"670\" cy=\"280\" rx=\"8\" ry=\"3\" fill=\"#FFFFFF\" stroke=\"#94A3B8\" stroke-width=\"1\"/>\n  </g>\n\n  <!-- Heavy Wooden Pier / Boardwalk (hs-t5h-pier at 280, 380) -->\n  <g id=\"t5h-wooden-pier\" filter=\"url(#h-shadow)\">\n    <!-- Creosoted Heavy Timber Pilings Sunk into Water -->\n    <rect x=\"18\" y=\"325\" width=\"16\" height=\"175\" fill=\"#451A03\" stroke=\"#290E02\" stroke-width=\"2\"/>\n    <rect x=\"145\" y=\"340\" width=\"18\" height=\"160\" fill=\"#451A03\" stroke=\"#290E02\" stroke-width=\"2\"/>\n    <rect x=\"290\" y=\"360\" width=\"20\" height=\"140\" fill=\"#451A03\" stroke=\"#290E02\" stroke-width=\"2\"/>\n    <rect x=\"440\" y=\"380\" width=\"20\" height=\"120\" fill=\"#451A03\" stroke=\"#290E02\" stroke-width=\"2\"/>\n\n    <!-- Pier Substructure Heavy Stringers & Beams -->\n    <polygon points=\"0,325 470,380 470,410 0,355\" fill=\"#78350F\" stroke=\"#451A03\" stroke-width=\"2\"/>\n\n    <!-- Main Wooden Pier Deck Surface in Perspective -->\n    <polygon points=\"0,290 480,350 460,425 0,445\" fill=\"url(#h-wood-pier)\" stroke=\"#451A03\" stroke-width=\"2\"/>\n\n    <!-- Individual Weathered Wood Deck Planks Lines with Woodgrain -->\n    <line x1=\"40\" y1=\"295\" x2=\"40\" y2=\"440\" stroke=\"#451A03\" stroke-width=\"1.8\"/>\n    <line x1=\"90\" y1=\"301\" x2=\"90\" y2=\"435\" stroke=\"#451A03\" stroke-width=\"1.8\"/>\n    <line x1=\"140\" y1=\"307\" x2=\"140\" y2=\"430\" stroke=\"#451A03\" stroke-width=\"1.8\"/>\n    <line x1=\"190\" y1=\"314\" x2=\"190\" y2=\"425\" stroke=\"#451A03\" stroke-width=\"1.8\"/>\n    <line x1=\"240\" y1=\"320\" x2=\"240\" y2=\"420\" stroke=\"#451A03\" stroke-width=\"1.8\"/>\n    <line x1=\"290\" y1=\"326\" x2=\"290\" y2=\"415\" stroke=\"#451A03\" stroke-width=\"1.8\"/>\n    <line x1=\"340\" y1=\"333\" x2=\"340\" y2=\"410\" stroke=\"#451A03\" stroke-width=\"1.8\"/>\n    <line x1=\"390\" y1=\"339\" x2=\"390\" y2=\"405\" stroke=\"#451A03\" stroke-width=\"1.8\"/>\n    <line x1=\"440\" y1=\"345\" x2=\"440\" y2=\"400\" stroke=\"#451A03\" stroke-width=\"1.8\"/>\n\n    <!-- Wooden Pier Railing on Left Edge -->\n    <line x1=\"20\" y1=\"270\" x2=\"20\" y2=\"320\" stroke=\"#78350F\" stroke-width=\"6\"/>\n    <line x1=\"150\" y1=\"285\" x2=\"150\" y2=\"335\" stroke=\"#78350F\" stroke-width=\"6\"/>\n    <line x1=\"270\" y1=\"300\" x2=\"270\" y2=\"350\" stroke=\"#78350F\" stroke-width=\"6\"/>\n    <!-- Top Handrail Bar -->\n    <line x1=\"0\" y1=\"270\" x2=\"280\" y2=\"305\" stroke=\"#9A622A\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n    <line x1=\"0\" y1=\"290\" x2=\"280\" y2=\"325\" stroke=\"#78350F\" stroke-width=\"4\"/>\n\n    <!-- Cast Iron Mooring Cleats & Bollards on Pier Edge (hs-t5h-tie at 464, 410) -->\n    <!-- Bollard 1 (Foreground Center) -->\n    <g id=\"h-bollard-1\" filter=\"url(#h-elem-shadow)\">\n      <rect x=\"450\" y=\"380\" width=\"16\" height=\"24\" rx=\"4\" fill=\"#0F172A\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n      <line x1=\"440\" y1=\"388\" x2=\"476\" y2=\"388\" stroke=\"#0F172A\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n      <ellipse cx=\"458\" cy=\"380\" rx=\"8\" ry=\"3.5\" fill=\"#334155\"/>\n    </g>\n\n    <!-- Thick Manila Mooring Rope Tied in Figure-Eight Knots (hs-t5h-tie at 464, 410) -->\n    <!-- Ropes coiled around bollard and extending across to moored boat -->\n    <path d=\"M458 392 Q470 398 460 404 Q448 398 458 392\" fill=\"none\" stroke=\"url(#h-rope)\" stroke-width=\"4.5\"/>\n    <path d=\"M460 392 Q500 380 540 375\" fill=\"none\" stroke=\"url(#h-rope)\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n    <path d=\"M456 395 Q490 385 520 405\" fill=\"none\" stroke=\"url(#h-rope)\" stroke-width=\"4.5\" stroke-linecap=\"round\"/>\n  </g>\n\n  <!-- Visitor Standing at Pier Railing Overlooking Water (hs-t5h-overlook at 240, 260) -->\n  <g id=\"t5h-viewer\">\n    <!-- Denim Jeans & Casual Canvas Shoes -->\n    <path d=\"M228 320 L224 395 L235 395 L242 335 L248 395 L260 395 L254 320 Z\" fill=\"#1E3A8A\" stroke=\"#0F172A\" stroke-width=\"1.8\"/>\n    <polygon points=\"218,395 236,395 238,402 216,402\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1\"/>\n    <polygon points=\"244,395 262,395 264,402 242,402\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"1\"/>\n\n    <!-- Nautical Striped Sailor Sweater / Windbreaker -->\n    <path d=\"M222 245 C222 225, 260 225, 262 245 L256 325 L226 325 Z\" fill=\"#DC2626\" stroke=\"#B91C1C\" stroke-width=\"2\"/>\n    <!-- White horizontal nautical stripes -->\n    <line x1=\"225\" y1=\"262\" x2=\"259\" y2=\"262\" stroke=\"#FFFFFF\" stroke-width=\"2.5\"/>\n    <line x1=\"225\" y1=\"278\" x2=\"258\" y2=\"278\" stroke=\"#FFFFFF\" stroke-width=\"2.5\"/>\n    <line x1=\"225\" y1=\"294\" x2=\"257\" y2=\"294\" stroke=\"#FFFFFF\" stroke-width=\"2.5\"/>\n\n    <!-- Head & Hair (Facing right towards open bay and boats: hs-t5h-overlook at 240, 260) -->\n    <rect x=\"238\" y=\"214\" width=\"8\" height=\"12\" fill=\"#FDBA74\"/>\n    <ellipse cx=\"242\" cy=\"202\" rx=\"12\" ry=\"14\" fill=\"#FDBA74\"/>\n    <!-- Wind-swept blonde/brown hair -->\n    <path d=\"M232 200 C230 182, 256 182, 256 198 C256 206, 250 214, 246 216 Z\" fill=\"#D97706\"/>\n    <path d=\"M246 198 Q260 200 262 206\" fill=\"none\" stroke=\"#D97706\" stroke-width=\"2.5\"/>\n\n    <!-- Arms Resting Comfortably on Pier Railing Overlooking Water -->\n    <path d=\"M228 250 Q242 275 252 298\" fill=\"none\" stroke=\"#DC2626\" stroke-width=\"8\" stroke-linecap=\"round\"/>\n    <ellipse cx=\"254\" cy=\"300\" rx=\"4.5\" ry=\"3.5\" fill=\"#FDBA74\"/>\n  </g>\n</svg>",
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
        "svg": "<svg viewBox=\"0 0 800 500\" xmlns=\"http://www.w3.org/2000/svg\" class=\"part1-svg-art\">\n  <defs>\n    <!-- Urban clear sky gradient -->\n    <linearGradient id=\"i-sky\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#38BDF8\"/>\n      <stop offset=\"65%\" stop-color=\"#BAE6FD\"/>\n      <stop offset=\"100%\" stop-color=\"#E0F2FE\"/>\n    </linearGradient>\n\n    <!-- Massive suspension bridge steel & roadway -->\n    <linearGradient id=\"i-bridge-steel\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#EF4444\"/>\n      <stop offset=\"50%\" stop-color=\"#DC2626\"/>\n      <stop offset=\"100%\" stop-color=\"#991B1B\"/>\n    </linearGradient>\n\n    <!-- Concrete highway pillars -->\n    <linearGradient id=\"i-concrete\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#94A3B8\"/>\n      <stop offset=\"50%\" stop-color=\"#CBD5E1\"/>\n      <stop offset=\"100%\" stop-color=\"#64748B\"/>\n    </linearGradient>\n\n    <!-- Clean asphalt roadway -->\n    <linearGradient id=\"i-road\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#475569\"/>\n      <stop offset=\"50%\" stop-color=\"#334155\"/>\n      <stop offset=\"100%\" stop-color=\"#1E293B\"/>\n    </linearGradient>\n\n    <!-- Delivery box truck body -->\n    <linearGradient id=\"i-truck-body\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#FFFFFF\"/>\n      <stop offset=\"70%\" stop-color=\"#F8FAFC\"/>\n      <stop offset=\"100%\" stop-color=\"#CBD5E1\"/>\n    </linearGradient>\n\n    <!-- Modern sedan metallic blue -->\n    <linearGradient id=\"i-sedan\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"#1D4ED8\"/>\n      <stop offset=\"40%\" stop-color=\"#3B82F6\"/>\n      <stop offset=\"80%\" stop-color=\"#60A5FA\"/>\n      <stop offset=\"100%\" stop-color=\"#1E40AF\"/>\n    </linearGradient>\n\n    <!-- Traffic signals glowing -->\n    <radialGradient id=\"i-green-light\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n      <stop offset=\"0%\" stop-color=\"#86EFAC\"/>\n      <stop offset=\"60%\" stop-color=\"#22C55E\"/>\n      <stop offset=\"100%\" stop-color=\"#15803D\"/>\n    </radialGradient>\n\n    <radialGradient id=\"i-red-light\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n      <stop offset=\"0%\" stop-color=\"#FCA5A5\"/>\n      <stop offset=\"60%\" stop-color=\"#EF4444\"/>\n      <stop offset=\"100%\" stop-color=\"#991B1B\"/>\n    </radialGradient>\n\n    <!-- Shadows -->\n    <filter id=\"i-shadow\" x=\"-10%\" y=\"-10%\" width=\"125%\" height=\"125%\">\n      <feDropShadow dx=\"0\" dy=\"6\" stdDeviation=\"8\" flood-color=\"#0F172A\" flood-opacity=\"0.3\"/>\n    </filter>\n    <filter id=\"i-elem-shadow\" x=\"-8%\" y=\"-8%\" width=\"120%\" height=\"120%\">\n      <feDropShadow dx=\"0\" dy=\"3\" stdDeviation=\"4\" flood-color=\"#0F172A\" flood-opacity=\"0.2\"/>\n    </filter>\n  </defs>\n\n  <!-- Clear Urban Sky -->\n  <rect x=\"0\" y=\"0\" width=\"800\" height=\"240\" fill=\"url(#i-sky)\"/>\n\n  <!-- Distant City Skyscrapers Skyline (Background) -->\n  <g id=\"t5i-skyline\" opacity=\"0.6\">\n    <rect x=\"50\" y=\"90\" width=\"45\" height=\"150\" fill=\"#64748B\" opacity=\"0.6\"/>\n    <rect x=\"105\" y=\"60\" width=\"60\" height=\"180\" fill=\"#475569\" opacity=\"0.7\"/>\n    <polygon points=\"105,60 135,35 165,60\" fill=\"#334155\"/>\n    <rect x=\"180\" y=\"105\" width=\"45\" height=\"135\" fill=\"#64748B\" opacity=\"0.5\"/>\n    <rect x=\"620\" y=\"80\" width=\"65\" height=\"160\" fill=\"#475569\" opacity=\"0.7\"/>\n    <rect x=\"695\" y=\"110\" width=\"55\" height=\"130\" fill=\"#64748B\" opacity=\"0.6\"/>\n  </g>\n\n  <!-- Massive Arched Highway Suspension Bridge & Overpass -->\n  <!-- (hs-t5i-bridge at 384, 160; hs-t5i-highway at 544, 170) -->\n  <g id=\"t5i-bridge\" filter=\"url(#i-shadow)\">\n    <!-- Bridge Elevated Road Deck Span -->\n    <rect x=\"0\" y=\"160\" width=\"800\" height=\"16\" fill=\"url(#i-bridge-steel)\" stroke=\"#7F1D1D\" stroke-width=\"1.5\"/>\n    <!-- Bridge safety barrier railing -->\n    <line x1=\"0\" y1=\"156\" x2=\"800\" y2=\"156\" stroke=\"#CBD5E1\" stroke-width=\"2.5\"/>\n\n    <!-- Massive Concrete Support Pillars Rooted in Ground -->\n    <rect x=\"230\" y=\"176\" width=\"28\" height=\"120\" fill=\"url(#i-concrete)\" stroke=\"#475569\" stroke-width=\"2\"/>\n    <rect x=\"530\" y=\"176\" width=\"28\" height=\"120\" fill=\"url(#i-concrete)\" stroke=\"#475569\" stroke-width=\"2\"/>\n\n    <!-- Steel Suspension Towers (Red International Orange) -->\n    <!-- Tower 1 (Left) -->\n    <rect x=\"236\" y=\"45\" width=\"16\" height=\"115\" fill=\"url(#i-bridge-steel)\" stroke=\"#7F1D1D\" stroke-width=\"1.5\"/>\n    <polygon points=\"232,45 244,20 256,45\" fill=\"#DC2626\"/>\n    <line x1=\"236\" y1=\"85\" x2=\"252\" y2=\"85\" stroke=\"#FFFFFF\" stroke-width=\"2\"/>\n    <line x1=\"236\" y1=\"120\" x2=\"252\" y2=\"120\" stroke=\"#FFFFFF\" stroke-width=\"2\"/>\n\n    <!-- Tower 2 (Right) -->\n    <rect x=\"536\" y=\"45\" width=\"16\" height=\"115\" fill=\"url(#i-bridge-steel)\" stroke=\"#7F1D1D\" stroke-width=\"1.5\"/>\n    <polygon points=\"532,45 544,20 556,45\" fill=\"#DC2626\"/>\n    <line x1=\"536\" y1=\"85\" x2=\"552\" y2=\"85\" stroke=\"#FFFFFF\" stroke-width=\"2\"/>\n    <line x1=\"536\" y1=\"120\" x2=\"552\" y2=\"120\" stroke=\"#FFFFFF\" stroke-width=\"2\"/>\n\n    <!-- Main Sweeping Parabolic Suspension Cables -->\n    <path d=\"M0 80 Q120 145 244 25 Q390 145 544 25 Q670 145 800 80\" fill=\"none\" stroke=\"#DC2626\" stroke-width=\"4.5\"/>\n\n    <!-- Vertical Suspension Hanger Wires -->\n    <line x1=\"270\" y1=\"62\" x2=\"270\" y2=\"160\" stroke=\"#CBD5E1\" stroke-width=\"1.2\"/>\n    <line x1=\"300\" y1=\"95\" x2=\"300\" y2=\"160\" stroke=\"#CBD5E1\" stroke-width=\"1.2\"/>\n    <line x1=\"330\" y1=\"118\" x2=\"330\" y2=\"160\" stroke=\"#CBD5E1\" stroke-width=\"1.2\"/>\n    <line x1=\"360\" y1=\"132\" x2=\"360\" y2=\"160\" stroke=\"#CBD5E1\" stroke-width=\"1.2\"/>\n    <line x1=\"390\" y1=\"138\" x2=\"390\" y2=\"160\" stroke=\"#CBD5E1\" stroke-width=\"1.2\"/>\n    <line x1=\"420\" y1=\"135\" x2=\"420\" y2=\"160\" stroke=\"#CBD5E1\" stroke-width=\"1.2\"/>\n    <line x1=\"450\" y1=\"122\" x2=\"450\" y2=\"160\" stroke=\"#CBD5E1\" stroke-width=\"1.2\"/>\n    <line x1=\"480\" y1=\"100\" x2=\"480\" y2=\"160\" stroke=\"#CBD5E1\" stroke-width=\"1.2\"/>\n    <line x1=\"510\" y1=\"68\" x2=\"510\" y2=\"160\" stroke=\"#CBD5E1\" stroke-width=\"1.2\"/>\n\n    <!-- Tiny Vehicles Passing on Distant Bridge Deck -->\n    <rect x=\"310\" y=\"152\" width=\"18\" height=\"8\" rx=\"2\" fill=\"#FFFFFF\"/>\n    <rect x=\"440\" y=\"152\" width=\"16\" height=\"8\" rx=\"2\" fill=\"#FACC15\"/>\n    <rect x=\"480\" y=\"150\" width=\"24\" height=\"10\" rx=\"2\" fill=\"#EF4444\"/>\n  </g>\n\n  <!-- Urban Roadway Intersection Surface (hs-t5i-intersection at 336, 400; hs-t5i-road at 544, 440) -->\n  <g id=\"t5i-road-surface\">\n    <!-- Clean Asphalt Roadway -->\n    <polygon points=\"0,270 800,270 800,500 0,500\" fill=\"url(#i-road)\"/>\n    <line x1=\"0\" y1=\"270\" x2=\"800\" y2=\"270\" stroke=\"#1E293B\" stroke-width=\"3\"/>\n\n    <!-- White Solid Stop Bar at Intersection -->\n    <line x1=\"320\" y1=\"360\" x2=\"800\" y2=\"360\" stroke=\"#FFFFFF\" stroke-width=\"5\"/>\n\n    <!-- Dashed White Lane Divider Lines -->\n    <line x1=\"520\" y1=\"370\" x2=\"520\" y2=\"500\" stroke=\"#FFFFFF\" stroke-width=\"4\" stroke-dasharray=\"18,16\"/>\n    <line x1=\"680\" y1=\"370\" x2=\"680\" y2=\"500\" stroke=\"#FFFFFF\" stroke-width=\"4\" stroke-dasharray=\"18,16\"/>\n  </g>\n\n  <!-- Zebra Crosswalk at Intersection -->\n  <g id=\"t5i-crosswalk-markings\" filter=\"url(#i-shadow)\">\n    <!-- Broad White Reflective Crosswalk Stripes -->\n    <polygon points=\"340,305 380,305 375,345 335,345\" fill=\"#FFFFFF\" opacity=\"0.95\"/>\n    <polygon points=\"400,305 440,305 435,345 395,345\" fill=\"#FFFFFF\" opacity=\"0.95\"/>\n    <polygon points=\"460,305 500,305 495,345 455,345\" fill=\"#FFFFFF\" opacity=\"0.95\"/>\n    <polygon points=\"520,305 560,305 555,345 515,345\" fill=\"#FFFFFF\" opacity=\"0.95\"/>\n    <polygon points=\"580,305 620,305 615,345 575,345\" fill=\"#FFFFFF\" opacity=\"0.95\"/>\n    <polygon points=\"640,305 680,305 675,345 635,345\" fill=\"#FFFFFF\" opacity=\"0.95\"/>\n    <polygon points=\"700,305 740,305 735,345 695,345\" fill=\"#FFFFFF\" opacity=\"0.95\"/>\n  </g>\n\n  <!-- Left Corner Sidewalk & Curb with Tactile Paving -->\n  <g id=\"t5i-sidewalk\" filter=\"url(#i-shadow)\">\n    <!-- Concrete Sidewalk Slab -->\n    <polygon points=\"0,270 300,270 240,500 0,500\" fill=\"url(#i-concrete)\" stroke=\"#64748B\" stroke-width=\"2\"/>\n    <!-- Curb Bevel Edge -->\n    <polygon points=\"300,270 310,278 250,500 240,500\" fill=\"#94A3B8\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <!-- Yellow ADA Tactile Blister Paving at Crosswalk Ramp -->\n    <polygon points=\"255,320 295,320 270,410 230,410\" fill=\"#FACC15\" stroke=\"#CA8A04\" stroke-width=\"1\"/>\n  </g>\n\n  <!-- Tall Traffic Light Signal Post (hs-t5i-trafficlight at 192, 140) -->\n  <g id=\"t5i-traffic-signal\" filter=\"url(#i-shadow)\">\n    <!-- Vertical Steel Mast Post -->\n    <rect x=\"188\" y=\"90\" width=\"8\" height=\"260\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"1.5\"/>\n    <!-- Horizontal Cantilever Mast Arm Overhanging Intersection -->\n    <line x1=\"192\" y1=\"100\" x2=\"310\" y2=\"100\" stroke=\"#1E293B\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n\n    <!-- Traffic Signal Head 1 (Corner Pedestrian / Driver Facing) (hs-t5i-trafficlight at 192, 140) -->\n    <rect x=\"176\" y=\"115\" width=\"32\" height=\"75\" rx=\"5\" fill=\"#0F172A\" stroke=\"#334155\" stroke-width=\"2\"/>\n    <!-- Yellow Backplate Border -->\n    <rect x=\"172\" y=\"111\" width=\"40\" height=\"83\" rx=\"7\" fill=\"none\" stroke=\"#FACC15\" stroke-width=\"2\"/>\n    <!-- Lenses with Sun Visors -->\n    <!-- Red Light (Top) -->\n    <circle cx=\"192\" cy=\"128\" r=\"8\" fill=\"url(#i-red-light)\"/>\n    <circle cx=\"192\" cy=\"128\" r=\"11\" fill=\"none\" stroke=\"#EF4444\" opacity=\"0.3\"/>\n    <!-- Amber / Yellow Light (Middle) -->\n    <circle cx=\"192\" cy=\"152\" r=\"8\" fill=\"#451A03\" stroke=\"#78350F\" stroke-width=\"1\"/>\n    <!-- Green Light (Bottom) -->\n    <circle cx=\"192\" cy=\"176\" r=\"8\" fill=\"#064E3B\" stroke=\"#047857\" stroke-width=\"1\"/>\n\n    <!-- Overhead Traffic Signal Head 2 on Arm (Green Signal Active) -->\n    <rect x=\"280\" y=\"105\" width=\"28\" height=\"65\" rx=\"4\" fill=\"#0F172A\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n    <circle cx=\"294\" cy=\"116\" r=\"6.5\" fill=\"#450A0A\"/>\n    <circle cx=\"294\" cy=\"137\" r=\"6.5\" fill=\"#451A03\"/>\n    <circle cx=\"294\" cy=\"158\" r=\"6.5\" fill=\"url(#i-green-light)\"/>\n    <circle cx=\"294\" cy=\"158\" r=\"10\" fill=\"none\" stroke=\"#22C55E\" opacity=\"0.4\"/>\n  </g>\n\n  <!-- Commercial Delivery Box Truck (hs-t5i-truck at 464, 310; hs-t5i-vehicle at 512, 340) -->\n  <g id=\"t5i-delivery-truck\" filter=\"url(#i-shadow)\">\n    <!-- Truck Shadow on Road -->\n    <ellipse cx=\"460\" cy=\"355\" rx=\"75\" ry=\"14\" fill=\"#0F172A\" opacity=\"0.4\"/>\n\n    <!-- Cab Unit (Left facing forward/down) -->\n    <path d=\"M385 345 L385 295 Q400 275 425 275 L445 275 L445 345 Z\" fill=\"#EF4444\" stroke=\"#DC2626\" stroke-width=\"2\"/>\n    <!-- Cab Windshield & Side Window -->\n    <polygon points=\"392,295 418,280 435,280 435,295\" fill=\"#0284C7\" stroke=\"#0F172A\" stroke-width=\"1\"/>\n    <!-- Chrome Bumper & Headlights -->\n    <rect x=\"380\" y=\"335\" width=\"8\" height=\"12\" rx=\"2\" fill=\"#CBD5E1\"/>\n    <circle cx=\"384\" cy=\"328\" r=\"4.5\" fill=\"#FEF08A\"/>\n\n    <!-- Heavy Commercial Cargo Box Body (White / Clean) -->\n    <rect x=\"440\" y=\"245\" width=\"105\" height=\"100\" rx=\"4\" fill=\"url(#i-truck-body)\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    <!-- Express Logistics Stripe & Logo on Cargo Body -->\n    <rect x=\"440\" y=\"280\" width=\"105\" height=\"16\" fill=\"#1D4ED8\"/>\n    <line x1=\"450\" y1=\"288\" x2=\"535\" y2=\"288\" stroke=\"#FACC15\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n\n    <!-- Heavy Truck Dual Wheels -->\n    <circle cx=\"410\" cy=\"348\" r=\"11\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <circle cx=\"410\" cy=\"348\" r=\"4.5\" fill=\"#CBD5E1\"/>\n    <circle cx=\"515\" cy=\"348\" r=\"11\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <circle cx=\"515\" cy=\"348\" r=\"4.5\" fill=\"#CBD5E1\"/>\n  </g>\n\n  <!-- Modern Automobile Sedan (Right Foreground) (hs-t5i-auto at 656, 390; hs-t5i-vehicle at 512, 340) -->\n  <g id=\"t5i-sedan-car\" filter=\"url(#i-shadow)\">\n    <!-- Car Shadow on Road -->\n    <ellipse cx=\"660\" cy=\"455\" rx=\"85\" ry=\"16\" fill=\"#0F172A\" opacity=\"0.45\"/>\n\n    <!-- Aerodynamic Sedan Car Body in Metallic Blue (hs-t5i-auto at 656, 390) -->\n    <path d=\"M570 430 Q585 390 620 375 L710 375 Q745 390 770 430 L765 445 L575 445 Z\" fill=\"url(#i-sedan)\" stroke=\"#1E3A8A\" stroke-width=\"2\"/>\n\n    <!-- Tinted Windshield & Windows with Gloss Sheen -->\n    <polygon points=\"615,380 695,380 725,410 595,410\" fill=\"#0F172A\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n    <polygon points=\"620,382 690,382 715,408 600,408\" fill=\"#38BDF8\" opacity=\"0.5\"/>\n\n    <!-- Modern Alloy Wheels with Disc Brakes -->\n    <circle cx=\"610\" cy=\"445\" r=\"15\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <circle cx=\"610\" cy=\"445\" r=\"10\" fill=\"none\" stroke=\"#F1F5F9\" stroke-width=\"3\"/>\n    <circle cx=\"610\" cy=\"445\" r=\"4\" fill=\"#94A3B8\"/>\n\n    <circle cx=\"725\" cy=\"445\" r=\"15\" fill=\"#1E293B\" stroke=\"#0F172A\" stroke-width=\"2\"/>\n    <circle cx=\"725\" cy=\"445\" r=\"10\" fill=\"none\" stroke=\"#F1F5F9\" stroke-width=\"3\"/>\n    <circle cx=\"725\" cy=\"445\" r=\"4\" fill=\"#94A3B8\"/>\n\n    <!-- LED Headlights & Taillights -->\n    <polygon points=\"570,425 580,425 578,435 568,435\" fill=\"#FEF08A\"/>\n    <polygon points=\"765,425 775,425 772,435 762,435\" fill=\"#EF4444\"/>\n    <!-- Chrome Door Handles -->\n    <line x1=\"645\" y1=\"418\" x2=\"655\" y2=\"418\" stroke=\"#FFFFFF\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <line x1=\"685\" y1=\"418\" x2=\"695\" y2=\"418\" stroke=\"#FFFFFF\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  </g>\n</svg>",
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
