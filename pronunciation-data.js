// pronunciation-data.js
// Dữ liệu Phát âm & Luyện nói tiếng Anh chuẩn Cambridge
// Trích xuất từ giáo trình: English Pronunciation in Use (Elementary) - Jonathan Marks

export const IPA_DATA = [
  {
    "id": "i_short",
    "ipa": "/ɪ/",
    "type": "vowel",
    "sub": "short",
    "name": "Âm i ngắn",
    "guide": "Môi hơi mở rộng, phát âm dứt khoát ngắn gọn hơn âm 'i' tiếng Việt.",
    "sample": "sit",
    "words": [
      "sit",
      "fit",
      "hit",
      "bit",
      "miss",
      "listen",
      "dinner",
      "swim",
      "busy",
      "system"
    ]
  },
  {
    "id": "e_short",
    "ipa": "/e/",
    "type": "vowel",
    "sub": "short",
    "name": "Âm e ngắn",
    "guide": "Mở miệng vừa phải, lưỡi hạ thấp, phát âm dứt khoát như 'e' tiếng Việt.",
    "sample": "bed",
    "words": [
      "bed",
      "red",
      "men",
      "pen",
      "head",
      "bread",
      "friend",
      "any",
      "said",
      "desk"
    ]
  },
  {
    "id": "ae_short",
    "ipa": "/æ/",
    "type": "vowel",
    "sub": "short",
    "name": "Âm e bẹt (a)",
    "guide": "Mở rộng hàm trên và dưới, hạ cuống lưỡi thấp, phát âm lai giữa 'a' và 'e'.",
    "sample": "cat",
    "words": [
      "cat",
      "bad",
      "bag",
      "man",
      "map",
      "black",
      "apple",
      "bank",
      "catch",
      "hand"
    ]
  },
  {
    "id": "wedge",
    "ipa": "/ʌ/",
    "type": "vowel",
    "sub": "short",
    "name": "Âm á (u ngắn)",
    "guide": "Miệng hơi hé tự nhiên, phát âm dứt khoát na ná âm 'ă' hoặc 'ơ' ngắn.",
    "sample": "cup",
    "words": [
      "cup",
      "bus",
      "sun",
      "cut",
      "much",
      "luck",
      "love",
      "money",
      "son",
      "summer"
    ]
  },
  {
    "id": "o_short",
    "ipa": "/ɒ/",
    "type": "vowel",
    "sub": "short",
    "name": "Âm o ngắn",
    "guide": "Môi hơi tròn nhẹ, hạ hàm xuống, phát âm 'o' ngắn, dứt khoát.",
    "sample": "dog",
    "words": [
      "dog",
      "clock",
      "box",
      "hot",
      "stop",
      "lot",
      "shop",
      "cost",
      "coffee",
      "doctor"
    ]
  },
  {
    "id": "u_short",
    "ipa": "/ʊ/",
    "type": "vowel",
    "sub": "short",
    "name": "Âm u ngắn",
    "guide": "Môi tròn nhẹ đưa về trước, phát âm 'u' dứt khoát, không kéo dài.",
    "sample": "book",
    "words": [
      "book",
      "look",
      "good",
      "foot",
      "put",
      "push",
      "full",
      "sugar",
      "cookie",
      "wood"
    ]
  },
  {
    "id": "schwa",
    "ipa": "/ə/",
    "type": "vowel",
    "sub": "short",
    "name": "Âm Schwa (ơ yếu)",
    "guide": "Âm phổ biến nhất tiếng Anh! Miệng hoàn toàn thả lỏng tự nhiên, phát âm nhẹ như 'ơ'.",
    "sample": "about",
    "words": [
      "about",
      "banana",
      "doctor",
      "paper",
      "sofa",
      "mother",
      "police",
      "sugar",
      "famous",
      "today"
    ]
  },
  {
    "id": "i_long",
    "ipa": "/iː/",
    "type": "vowel",
    "sub": "long",
    "name": "Âm i dài",
    "guide": "Khóe miệng bè ngang như đang cười tươi, ngân dài hơi gấp đôi âm /ɪ/.",
    "sample": "see",
    "words": [
      "see",
      "tea",
      "eat",
      "seat",
      "team",
      "meet",
      "piece",
      "key",
      "police",
      "pizza"
    ]
  },
  {
    "id": "a_long",
    "ipa": "/ɑː/",
    "type": "vowel",
    "sub": "long",
    "name": "Âm a dài",
    "guide": "Mở miệng tròn rộng, hạ lưỡi sâu, kéo dài âm 'aa' từ đáy họng.",
    "sample": "car",
    "words": [
      "car",
      "star",
      "park",
      "bar",
      "father",
      "start",
      "party",
      "heart",
      "hard",
      "garden"
    ]
  },
  {
    "id": "o_long",
    "ipa": "/ɔː/",
    "type": "vowel",
    "sub": "long",
    "name": "Âm o dài",
    "guide": "Môi tròn sâu, đưa lưỡi về phía sau, kéo dài âm 'o'.",
    "sample": "door",
    "words": [
      "door",
      "four",
      "more",
      "warm",
      "water",
      "talk",
      "wall",
      "call",
      "bought",
      "daughter"
    ]
  },
  {
    "id": "u_long",
    "ipa": "/uː/",
    "type": "vowel",
    "sub": "long",
    "name": "Âm u dài",
    "guide": "Môi chu tròn lại như ống hút, đẩy hơi ngân dài âm 'uu'.",
    "sample": "too",
    "words": [
      "too",
      "blue",
      "food",
      "moon",
      "group",
      "shoe",
      "fruit",
      "juice",
      "school",
      "choose"
    ]
  },
  {
    "id": "er_long",
    "ipa": "/ɜː/",
    "type": "vowel",
    "sub": "long",
    "name": "Âm ơ dài",
    "guide": "Miệng mở tự nhiên, kéo dài âm 'ơơ' sâu trong khoang miệng.",
    "sample": "bird",
    "words": [
      "bird",
      "girl",
      "first",
      "work",
      "word",
      "world",
      "turn",
      "nurse",
      "learn",
      "service"
    ]
  },
  {
    "id": "ei",
    "ipa": "/eɪ/",
    "type": "vowel",
    "sub": "diphthong",
    "name": "Nguyên âm đôi ei",
    "guide": "Trượt mượt mà từ âm /e/ sang /ɪ/ ('ây').",
    "sample": "day",
    "words": [
      "day",
      "say",
      "rain",
      "wait",
      "make",
      "late",
      "cake",
      "game",
      "great",
      "table"
    ]
  },
  {
    "id": "ai",
    "ipa": "/aɪ/",
    "type": "vowel",
    "sub": "diphthong",
    "name": "Nguyên âm đôi ai",
    "guide": "Mở rộng miệng phát âm /a/ rồi trượt lên /ɪ/ ('ai').",
    "sample": "my",
    "words": [
      "my",
      "buy",
      "time",
      "fine",
      "high",
      "night",
      "like",
      "white",
      "price",
      "flight"
    ]
  },
  {
    "id": "oi",
    "ipa": "/ɔɪ/",
    "type": "vowel",
    "sub": "diphthong",
    "name": "Nguyên âm đôi oi",
    "guide": "Tròn môi âm /ɔː/ rồi trượt sang /ɪ/ ('oi').",
    "sample": "boy",
    "words": [
      "boy",
      "toy",
      "coin",
      "point",
      "voice",
      "oil",
      "noise",
      "choice",
      "join",
      "enjoy"
    ]
  },
  {
    "id": "ou",
    "ipa": "/əʊ/",
    "type": "vowel",
    "sub": "diphthong",
    "name": "Nguyên âm đôi ou",
    "guide": "Khởi đầu từ âm /ə/ rồi khép môi tròn dần sang /ʊ/ ('âu' hoặc 'ô').",
    "sample": "go",
    "words": [
      "go",
      "no",
      "so",
      "home",
      "cold",
      "old",
      "boat",
      "road",
      "phone",
      "post"
    ]
  },
  {
    "id": "au",
    "ipa": "/aʊ/",
    "type": "vowel",
    "sub": "diphthong",
    "name": "Nguyên âm đôi au",
    "guide": "Mở to miệng /a/ rồi thu tròn môi sang /ʊ/ ('ao').",
    "sample": "now",
    "words": [
      "now",
      "how",
      "cow",
      "out",
      "about",
      "sound",
      "round",
      "house",
      "mouse",
      "cloud"
    ]
  },
  {
    "id": "ie",
    "ipa": "/ɪə/",
    "type": "vowel",
    "sub": "diphthong",
    "name": "Nguyên âm đôi ia",
    "guide": "Phát âm /ɪ/ rồi trượt nhẹ nhàng sang /ə/ ('ia').",
    "sample": "here",
    "words": [
      "here",
      "hear",
      "near",
      "ear",
      "clear",
      "dear",
      "beer",
      "idea",
      "really",
      "cheers"
    ]
  },
  {
    "id": "ee",
    "ipa": "/eə/",
    "type": "vowel",
    "sub": "diphthong",
    "name": "Nguyên âm đôi ea",
    "guide": "Mở miệng /e/ rồi trượt sang /ə/ ('e-ơ').",
    "sample": "hair",
    "words": [
      "hair",
      "chair",
      "care",
      "share",
      "where",
      "wear",
      "bear",
      "pair",
      "airport",
      "stairs"
    ]
  },
  {
    "id": "ue",
    "ipa": "/ʊə/",
    "type": "vowel",
    "sub": "diphthong",
    "name": "Nguyên âm đôi ua",
    "guide": "Tròn môi /ʊ/ rồi trượt nhẹ sang /ə/ ('u-ơ').",
    "sample": "tour",
    "words": [
      "tour",
      "tourist",
      "sure",
      "pure",
      "cure",
      "during",
      "curious",
      "plural"
    ]
  },
  {
    "id": "p",
    "ipa": "/p/",
    "type": "consonant",
    "sub": "voiceless",
    "name": "Phụ âm p",
    "guide": "Mím chặt 2 môi chặn khí rồi bật mạnh. Dây thanh không rung, giấy trước miệng bay.",
    "sample": "pen",
    "words": [
      "pen",
      "push",
      "stop",
      "happy",
      "paper",
      "piece",
      "pack",
      "passport",
      "people"
    ]
  },
  {
    "id": "t",
    "ipa": "/t/",
    "type": "consonant",
    "sub": "voiceless",
    "name": "Phụ âm t",
    "guide": "Đầu lưỡi chạm nướu răng trên rồi bật mạnh luồng khí. Không rung thanh quản.",
    "sample": "tea",
    "words": [
      "tea",
      "two",
      "ten",
      "time",
      "meet",
      "water",
      "ticket",
      "table",
      "start"
    ]
  },
  {
    "id": "k",
    "ipa": "/k/",
    "type": "consonant",
    "sub": "voiceless",
    "name": "Phụ âm k",
    "guide": "Cuống lưỡi nâng chạm ngạc mềm chặn khí rồi bật mạnh ra. Không rung dây thanh.",
    "sample": "cat",
    "words": [
      "cat",
      "key",
      "car",
      "look",
      "black",
      "kitchen",
      "coffee",
      "course",
      "market"
    ]
  },
  {
    "id": "f",
    "ipa": "/f/",
    "type": "consonant",
    "sub": "voiceless",
    "name": "Phụ âm f",
    "guide": "Răng cửa trên chạm nhẹ môi dưới, đẩy luồng khí ma sát qua kẽ răng.",
    "sample": "fish",
    "words": [
      "fish",
      "food",
      "four",
      "life",
      "safe",
      "coffee",
      "office",
      "photo",
      "laugh"
    ]
  },
  {
    "id": "th_unvoiced",
    "ipa": "/θ/",
    "type": "consonant",
    "sub": "voiceless",
    "name": "Phụ âm th vô thanh",
    "guide": "Đặt đầu lưỡi giữa 2 hàm răng, thổi luồng hơi nhẹ qua kẽ răng. Cổ họng không rung.",
    "sample": "think",
    "words": [
      "think",
      "thanks",
      "three",
      "thirty",
      "Thursday",
      "month",
      "mouth",
      "both",
      "north"
    ]
  },
  {
    "id": "s",
    "ipa": "/s/",
    "type": "consonant",
    "sub": "voiceless",
    "name": "Phụ âm s (xì gió)",
    "guide": "Khép 2 hàm răng gần nhau, đầu lưỡi sát nướu trên, xì hơi gió mạnh ra ngoài.",
    "sample": "see",
    "words": [
      "see",
      "sit",
      "bus",
      "house",
      "city",
      "price",
      "sister",
      "listen",
      "class"
    ]
  },
  {
    "id": "sh",
    "ipa": "/ʃ/",
    "type": "consonant",
    "sub": "voiceless",
    "name": "Phụ âm sh (s nặng)",
    "guide": "Môi chu tròn hướng về trước, nâng mặt lưỡi lên ngạc cứng, đẩy hơi 'xuỵt'.",
    "sample": "she",
    "words": [
      "she",
      "ship",
      "shoe",
      "shop",
      "fish",
      "wash",
      "action",
      "station",
      "sugar"
    ]
  },
  {
    "id": "ch",
    "ipa": "/tʃ/",
    "type": "consonant",
    "sub": "voiceless",
    "name": "Phụ âm ch",
    "guide": "Chu môi, đầu lưỡi chạm nướu trên rồi bật mạnh luồng khí không rung thanh.",
    "sample": "chair",
    "words": [
      "chair",
      "cheap",
      "check",
      "child",
      "choose",
      "much",
      "watch",
      "kitchen",
      "picture"
    ]
  },
  {
    "id": "h",
    "ipa": "/h/",
    "type": "consonant",
    "sub": "voiceless",
    "name": "Phụ âm h",
    "guide": "Thở hơi nhẹ nhàng từ thanh quản như tiếng thở dài tự nhiên.",
    "sample": "hat",
    "words": [
      "hat",
      "hot",
      "house",
      "home",
      "help",
      "here",
      "hotel",
      "happy",
      "who"
    ]
  },
  {
    "id": "b",
    "ipa": "/b/",
    "type": "consonant",
    "sub": "voiced",
    "name": "Phụ âm b",
    "guide": "Mím môi như /p/ nhưng DÂY THANH RUNG mạnh trong cổ họng, giấy không bay.",
    "sample": "bag",
    "words": [
      "bag",
      "big",
      "bus",
      "book",
      "baby",
      "job",
      "club",
      "bread",
      "building"
    ]
  },
  {
    "id": "d",
    "ipa": "/d/",
    "type": "consonant",
    "sub": "voiced",
    "name": "Phụ âm d",
    "guide": "Đặt lưỡi như /t/ nhưng DÂY THANH RUNG mạnh trong cổ họng.",
    "sample": "door",
    "words": [
      "door",
      "day",
      "dog",
      "bad",
      "card",
      "dinner",
      "ready",
      "under",
      "middle"
    ]
  },
  {
    "id": "g",
    "ipa": "/g/",
    "type": "consonant",
    "sub": "voiced",
    "name": "Phụ âm g",
    "guide": "Vị trí cuống lưỡi như /k/ nhưng DÂY THANH RUNG mạnh trong cổ họng.",
    "sample": "go",
    "words": [
      "go",
      "get",
      "give",
      "bag",
      "dog",
      "big",
      "green",
      "again",
      "together"
    ]
  },
  {
    "id": "v",
    "ipa": "/v/",
    "type": "consonant",
    "sub": "voiced",
    "name": "Phụ âm v",
    "guide": "Răng trên chạm môi dưới như /f/ nhưng DÂY THANH RUNG tạo âm 'vvv'.",
    "sample": "very",
    "words": [
      "very",
      "voice",
      "view",
      "five",
      "live",
      "leave",
      "seven",
      "travel",
      "driver"
    ]
  },
  {
    "id": "th_voiced",
    "ipa": "/ð/",
    "type": "consonant",
    "sub": "voiced",
    "name": "Phụ âm th hữu thanh",
    "guide": "Đặt đầu lưỡi giữa 2 hàm răng như /θ/ nhưng DÂY THANH RUNG tạo âm 'đ/d' nhẹ.",
    "sample": "this",
    "words": [
      "this",
      "that",
      "these",
      "those",
      "they",
      "them",
      "father",
      "mother",
      "brother"
    ]
  },
  {
    "id": "z",
    "ipa": "/z/",
    "type": "consonant",
    "sub": "voiced",
    "name": "Phụ âm z",
    "guide": "Vị trí như /s/ nhưng DÂY THANH RUNG tạo âm rè như tiếng ong kêu 'zzz'.",
    "sample": "zoo",
    "words": [
      "zoo",
      "zero",
      "rose",
      "busy",
      "music",
      "easy",
      "husband",
      "close",
      "always"
    ]
  },
  {
    "id": "zh",
    "ipa": "/ʒ/",
    "type": "consonant",
    "sub": "voiced",
    "name": "Phụ âm zh",
    "guide": "Vị trí môi chu như /ʃ/ nhưng DÂY THANH RUNG sâu trong họng.",
    "sample": "vision",
    "words": [
      "vision",
      "measure",
      "pleasure",
      "television",
      "usually",
      "decision",
      "casual",
      "garage"
    ]
  },
  {
    "id": "dj",
    "ipa": "/dʒ/",
    "type": "consonant",
    "sub": "voiced",
    "name": "Phụ âm j/g (dzh)",
    "guide": "Vị trí miệng chu như /tʃ/ nhưng DÂY THANH RUNG mạnh trong cổ họng.",
    "sample": "jump",
    "words": [
      "jump",
      "job",
      "juice",
      "jeans",
      "age",
      "large",
      "orange",
      "village",
      "manager"
    ]
  },
  {
    "id": "m",
    "ipa": "/m/",
    "type": "consonant",
    "sub": "voiced",
    "name": "Phụ âm m (âm mũi)",
    "guide": "Hai môi khép chặt, luồng hơi thoát ra qua đường mũi, dây thanh rung.",
    "sample": "man",
    "words": [
      "man",
      "make",
      "milk",
      "home",
      "room",
      "summer",
      "family",
      "time",
      "small"
    ]
  },
  {
    "id": "n",
    "ipa": "/n/",
    "type": "consonant",
    "sub": "voiced",
    "name": "Phụ âm n (âm mũi)",
    "guide": "Đầu lưỡi chạm nướu trên, luồng khí thoát qua mũi, dây thanh rung.",
    "sample": "no",
    "words": [
      "no",
      "new",
      "night",
      "sun",
      "rain",
      "dinner",
      "person",
      "money",
      "window"
    ]
  },
  {
    "id": "ng",
    "ipa": "/ŋ/",
    "type": "consonant",
    "sub": "voiced",
    "name": "Phụ âm ng (âm mũi)",
    "guide": "Cuống lưỡi nâng chạm ngạc mềm, luồng khí đi ra bằng mũi, giống âm 'ng'.",
    "sample": "sing",
    "words": [
      "sing",
      "song",
      "ring",
      "king",
      "long",
      "bank",
      "think",
      "hungry",
      "uncle"
    ]
  },
  {
    "id": "l",
    "ipa": "/l/",
    "type": "consonant",
    "sub": "voiced",
    "name": "Phụ âm l",
    "guide": "Đầu lưỡi chạm nướu trên, luồng khí thoát ra hai bên cạnh lưỡi.",
    "sample": "leg",
    "words": [
      "leg",
      "like",
      "love",
      "look",
      "black",
      "clean",
      "help",
      "milk",
      "people"
    ]
  },
  {
    "id": "r",
    "ipa": "/r/",
    "type": "consonant",
    "sub": "voiced",
    "name": "Phụ âm r",
    "guide": "Uốn cong đầu lưỡi về sau không chạm vòm họng, môi hơi tròn lại.",
    "sample": "red",
    "words": [
      "red",
      "run",
      "rain",
      "room",
      "right",
      "sorry",
      "arrive",
      "friend",
      "train"
    ]
  },
  {
    "id": "w",
    "ipa": "/w/",
    "type": "consonant",
    "sub": "voiced",
    "name": "Phụ âm w",
    "guide": "Chu tròn môi như huýt sáo rồi mở nhanh sang âm tiếp theo.",
    "sample": "wet",
    "words": [
      "wet",
      "we",
      "water",
      "week",
      "wait",
      "white",
      "window",
      "sweet",
      "twenty"
    ]
  },
  {
    "id": "j",
    "ipa": "/j/",
    "type": "consonant",
    "sub": "voiced",
    "name": "Phụ âm y",
    "guide": "Nâng thân lưỡi lên cao như chuẩn bị phát âm /iː/ rồi mở sang âm kế tiếp ('d/gi').",
    "sample": "yes",
    "words": [
      "yes",
      "you",
      "year",
      "young",
      "yellow",
      "yesterday",
      "use",
      "music",
      "view"
    ]
  }
];

export const MINIMAL_PAIRS = [
  {
    "id": "pair_1",
    "pair": "/iː/ vs /ɪ/",
    "desc": "Nguyên âm i dài (cười tươi) vs i ngắn (dứt khoát)",
    "unit": 2,
    "items": [
      {
        "w1": "leave",
        "ipa1": "/liːv/",
        "vi1": "rời đi",
        "w2": "live",
        "ipa2": "/lɪv/",
        "vi2": "sống"
      },
      {
        "w1": "seat",
        "ipa1": "/siːt/",
        "vi1": "chỗ ngồi",
        "w2": "sit",
        "ipa2": "/sɪt/",
        "vi2": "ngồi"
      },
      {
        "w1": "sheep",
        "ipa1": "/ʃiːp/",
        "vi1": "con cừu",
        "w2": "ship",
        "ipa2": "/ʃɪp/",
        "vi2": "con tàu"
      },
      {
        "w1": "feel",
        "ipa1": "/fiːl/",
        "vi1": "cảm thấy",
        "w2": "fill",
        "ipa2": "/fɪl/",
        "vi2": "lấp đầy"
      },
      {
        "w1": "cheap",
        "ipa1": "/tʃiːp/",
        "vi1": "giá rẻ",
        "w2": "chip",
        "ipa2": "/tʃɪp/",
        "vi2": "khoai tây chiên"
      },
      {
        "w1": "wheel",
        "ipa1": "/wiːl/",
        "vi1": "bánh xe",
        "w2": "will",
        "ipa2": "/wɪl/",
        "vi2": "sẽ"
      },
      {
        "w1": "eat",
        "ipa1": "/iːt/",
        "vi1": "ăn",
        "w2": "it",
        "ipa2": "/ɪt/",
        "vi2": "nó"
      },
      {
        "w1": "litre",
        "ipa1": "/ˈliːtə/",
        "vi1": "lít",
        "w2": "litter",
        "ipa2": "/ˈlɪtə/",
        "vi2": "rác thải"
      }
    ]
  },
  {
    "id": "pair_2",
    "pair": "/uː/ vs /ʊ/",
    "desc": "Nguyên âm u dài (chu môi sâu) vs u ngắn (gọn dứt khoát)",
    "unit": 3,
    "items": [
      {
        "w1": "pool",
        "ipa1": "/puːl/",
        "vi1": "hồ bơi",
        "w2": "pull",
        "ipa2": "/pʊl/",
        "vi2": "kéo"
      },
      {
        "w1": "fool",
        "ipa1": "/fuːl/",
        "vi1": "kẻ ngốc",
        "w2": "full",
        "ipa2": "/fʊl/",
        "vi2": "đầy"
      },
      {
        "w1": "Luke",
        "ipa1": "/luːk/",
        "vi1": "tên Luke",
        "w2": "look",
        "ipa2": "/lʊk/",
        "vi2": "nhìn"
      },
      {
        "w1": "suit",
        "ipa1": "/suːt/",
        "vi1": "bộ vest",
        "w2": "soot",
        "ipa2": "/sʊt/",
        "vi2": "nhọ nồi"
      }
    ]
  },
  {
    "id": "pair_3",
    "pair": "/e/ vs /æ/",
    "desc": "Nguyên âm e ngắn vs e bẹt (mở rộng hàm)",
    "unit": 6,
    "items": [
      {
        "w1": "bed",
        "ipa1": "/bed/",
        "vi1": "cái giường",
        "w2": "bad",
        "ipa2": "/bæd/",
        "vi2": "tồi tệ"
      },
      {
        "w1": "pen",
        "ipa1": "/pen/",
        "vi1": "cây bút",
        "w2": "pan",
        "ipa2": "/pæn/",
        "vi2": "cái chảo"
      },
      {
        "w1": "men",
        "ipa1": "/men/",
        "vi1": "đàn ông (số nhiều)",
        "w2": "man",
        "ipa2": "/mæn/",
        "vi2": "người đàn ông"
      },
      {
        "w1": "head",
        "ipa1": "/hed/",
        "vi1": "cái đầu",
        "w2": "had",
        "ipa2": "/hæd/",
        "vi2": "đã có"
      },
      {
        "w1": "said",
        "ipa1": "/sed/",
        "vi1": "đã nói",
        "w2": "sad",
        "ipa2": "/sæd/",
        "vi2": "buồn bã"
      }
    ]
  },
  {
    "id": "pair_4",
    "pair": "/æ/ vs /ʌ/",
    "desc": "Nguyên âm e bẹt vs âm á (thả lỏng)",
    "unit": 4,
    "items": [
      {
        "w1": "cat",
        "ipa1": "/kæt/",
        "vi1": "con mèo",
        "w2": "cut",
        "ipa2": "/kʌt/",
        "vi2": "cắt"
      },
      {
        "w1": "cap",
        "ipa1": "/kæp/",
        "vi1": "mũ lưỡi trai",
        "w2": "cup",
        "ipa2": "/kʌp/",
        "vi2": "cái tách"
      },
      {
        "w1": "match",
        "ipa1": "/mætʃ/",
        "vi1": "trận đấu",
        "w2": "much",
        "ipa2": "/mʌtʃ/",
        "vi2": "nhiều"
      },
      {
        "w1": "ran",
        "ipa1": "/ræn/",
        "vi1": "đã chạy",
        "w2": "run",
        "ipa2": "/rʌn/",
        "vi2": "chạy"
      },
      {
        "w1": "hat",
        "ipa1": "/hæt/",
        "vi1": "cái mũ",
        "w2": "hut",
        "ipa2": "/hʌt/",
        "vi2": "túp lều"
      }
    ]
  },
  {
    "id": "pair_5",
    "pair": "/ɒ/ vs /ɔː/",
    "desc": "Nguyên âm o ngắn vs o dài (kéo sâu)",
    "unit": 5,
    "items": [
      {
        "w1": "shot",
        "ipa1": "/ʃɒt/",
        "vi1": "phát bắn",
        "w2": "short",
        "ipa2": "/ʃɔːt/",
        "vi2": "ngắn"
      },
      {
        "w1": "pot",
        "ipa1": "/pɒt/",
        "vi1": "cái nồi",
        "w2": "port",
        "ipa2": "/pɔːt/",
        "vi2": "cảng"
      },
      {
        "w1": "cot",
        "ipa1": "/kɒt/",
        "vi1": "cũi trẻ em",
        "w2": "caught",
        "ipa2": "/kɔːt/",
        "vi2": "đã bắt"
      },
      {
        "w1": "spot",
        "ipa1": "/spɒt/",
        "vi1": "điểm",
        "w2": "sport",
        "ipa2": "/spɔːt/",
        "vi2": "thể thao"
      }
    ]
  },
  {
    "id": "pair_6",
    "pair": "/p/ vs /b/",
    "desc": "Phụ âm vô thanh (bật hơi, bay giấy) vs hữu thanh (rung cổ họng)",
    "unit": 11,
    "items": [
      {
        "w1": "pack",
        "ipa1": "/pæk/",
        "vi1": "gói hàng",
        "w2": "back",
        "ipa2": "/bæk/",
        "vi2": "lưng / quay lại"
      },
      {
        "w1": "pig",
        "ipa1": "/pɪg/",
        "vi1": "con heo",
        "w2": "big",
        "ipa2": "/bɪg/",
        "vi2": "to lớn"
      },
      {
        "w1": "pen",
        "ipa1": "/pen/",
        "vi1": "cây bút",
        "w2": "Ben",
        "ipa2": "/ben/",
        "vi2": "tên Ben"
      },
      {
        "w1": "push",
        "ipa1": "/pʊʃ/",
        "vi1": "đẩy",
        "w2": "bush",
        "ipa2": "/bʊʃ/",
        "vi2": "bụi cây"
      },
      {
        "w1": "cup",
        "ipa1": "/kʌp/",
        "vi1": "cái tách",
        "w2": "cub",
        "ipa2": "/kʌb/",
        "vi2": "thú con"
      }
    ]
  },
  {
    "id": "pair_7",
    "pair": "/t/ vs /d/",
    "desc": "Phụ âm t (bật hơi) vs d (rung thanh quản)",
    "unit": 12,
    "items": [
      {
        "w1": "two",
        "ipa1": "/tuː/",
        "vi1": "số hai",
        "w2": "do",
        "ipa2": "/duː/",
        "vi2": "làm"
      },
      {
        "w1": "ten",
        "ipa1": "/ten/",
        "vi1": "số mười",
        "w2": "den",
        "ipa2": "/den/",
        "vi2": "hang ổ"
      },
      {
        "w1": "tie",
        "ipa1": "/taɪ/",
        "vi1": "cà vạt",
        "w2": "die",
        "ipa2": "/daɪ/",
        "vi2": "chết"
      },
      {
        "w1": "town",
        "ipa1": "/taʊn/",
        "vi1": "thị trấn",
        "w2": "down",
        "ipa2": "/daʊn/",
        "vi2": "xuống"
      },
      {
        "w1": "cart",
        "ipa1": "/kɑːt/",
        "vi1": "xe đẩy",
        "w2": "card",
        "ipa2": "/kɑːd/",
        "vi2": "thẻ"
      }
    ]
  },
  {
    "id": "pair_8",
    "pair": "/k/ vs /g/",
    "desc": "Phụ âm k (bật cuống họng) vs g (rung cuống họng)",
    "unit": 13,
    "items": [
      {
        "w1": "coat",
        "ipa1": "/kəʊt/",
        "vi1": "áo khoác",
        "w2": "goat",
        "ipa2": "/gəʊt/",
        "vi2": "con dê"
      },
      {
        "w1": "cold",
        "ipa1": "/kəʊld/",
        "vi1": "lạnh",
        "w2": "gold",
        "ipa2": "/gəʊld/",
        "vi2": "vàng"
      },
      {
        "w1": "class",
        "ipa1": "/klɑːs/",
        "vi1": "lớp học",
        "w2": "glass",
        "ipa2": "/glɑːs/",
        "vi2": "kính / ly"
      },
      {
        "w1": "back",
        "ipa1": "/bæk/",
        "vi1": "phía sau",
        "w2": "bag",
        "ipa2": "/bæg/",
        "vi2": "cái túi"
      }
    ]
  },
  {
    "id": "pair_9",
    "pair": "/f/ vs /v/",
    "desc": "Phụ âm f (răng trên môi dưới, gió) vs v (rung dây thanh)",
    "unit": 14,
    "items": [
      {
        "w1": "fan",
        "ipa1": "/fæn/",
        "vi1": "cái quạt",
        "w2": "van",
        "ipa2": "/væn/",
        "vi2": "xe tải nhỏ"
      },
      {
        "w1": "safe",
        "ipa1": "/seɪf/",
        "vi1": "an toàn",
        "w2": "save",
        "ipa2": "/seɪv/",
        "vi2": "tiết kiệm / lưu"
      },
      {
        "w1": "leaf",
        "ipa1": "/liːf/",
        "vi1": "chiếc lá",
        "w2": "leave",
        "ipa2": "/liːv/",
        "vi2": "rời đi"
      },
      {
        "w1": "few",
        "ipa1": "/fjuː/",
        "vi1": "một vài",
        "w2": "view",
        "ipa2": "/vjuː/",
        "vi2": "tầm nhìn"
      }
    ]
  },
  {
    "id": "pair_10",
    "pair": "/s/ vs /θ/",
    "desc": "Phụ âm s (xì răng) vs th (đầu lưỡi kẹp giữa 2 hàm răng)",
    "unit": 15,
    "items": [
      {
        "w1": "sink",
        "ipa1": "/sɪŋk/",
        "vi1": "chậu rửa",
        "w2": "think",
        "ipa2": "/θɪŋk/",
        "vi2": "suy nghĩ"
      },
      {
        "w1": "pass",
        "ipa1": "/pɑːs/",
        "vi1": "vượt qua",
        "w2": "path",
        "ipa2": "/pɑːθ/",
        "vi2": "con đường"
      },
      {
        "w1": "mouse",
        "ipa1": "/maʊs/",
        "vi1": "con chuột",
        "w2": "mouth",
        "ipa2": "/maʊθ/",
        "vi2": "cái miệng"
      },
      {
        "w1": "sick",
        "ipa1": "/sɪk/",
        "vi1": "bị ốm",
        "w2": "thick",
        "ipa2": "/θɪk/",
        "vi2": "dày"
      },
      {
        "w1": "sum",
        "ipa1": "/sʌm/",
        "vi1": "tổng số",
        "w2": "thumb",
        "ipa2": "/θʌm/",
        "vi2": "ngón tay cái"
      }
    ]
  },
  {
    "id": "pair_11",
    "pair": "/θ/ vs /ð/",
    "desc": "Cặp âm th vô thanh (không rung) vs hữu thanh (có rung thanh quản)",
    "unit": 15,
    "items": [
      {
        "w1": "teeth",
        "ipa1": "/tiːθ/",
        "vi1": "răng (danh từ)",
        "w2": "teethe",
        "ipa2": "/tiːð/",
        "vi2": "mọc răng (động từ)"
      },
      {
        "w1": "breath",
        "ipa1": "/breθ/",
        "vi1": "hơi thở (danh từ)",
        "w2": "breathe",
        "ipa2": "/briːð/",
        "vi2": "thở (động từ)"
      },
      {
        "w1": "bath",
        "ipa1": "/bɑːθ/",
        "vi1": "bồn tắm",
        "w2": "bathe",
        "ipa2": "/beɪð/",
        "vi2": "tắm (động từ)"
      }
    ]
  },
  {
    "id": "pair_12",
    "pair": "/s/ vs /z/",
    "desc": "Phụ âm s (gió nhẹ không rung) vs z (rung như tiếng ong)",
    "unit": 16,
    "items": [
      {
        "w1": "sue",
        "ipa1": "/suː/",
        "vi1": "kiện tụng",
        "w2": "zoo",
        "ipa2": "/zuː/",
        "vi2": "sở thú"
      },
      {
        "w1": "price",
        "ipa1": "/praɪs/",
        "vi1": "giá cả",
        "w2": "prize",
        "ipa2": "/praɪz/",
        "vi2": "giải thưởng"
      },
      {
        "w1": "bus",
        "ipa1": "/bʌs/",
        "vi1": "xe buýt",
        "w2": "buzz",
        "ipa2": "/bʌz/",
        "vi2": "tiếng vo ve"
      },
      {
        "w1": "ice",
        "ipa1": "/aɪs/",
        "vi1": "nước đá",
        "w2": "eyes",
        "ipa2": "/aɪz/",
        "vi2": "đôi mắt"
      },
      {
        "w1": "loose",
        "ipa1": "/luːs/",
        "vi1": "lỏng lẻo",
        "w2": "lose",
        "ipa2": "/luːz/",
        "vi2": "thua / mất"
      }
    ]
  },
  {
    "id": "pair_13",
    "pair": "/ʃ/ vs /tʃ/",
    "desc": "Phụ âm sh (chu môi xuỵt gió) vs ch (chu môi bật mạnh)",
    "unit": 17,
    "items": [
      {
        "w1": "ship",
        "ipa1": "/ʃɪp/",
        "vi1": "con tàu",
        "w2": "chip",
        "ipa2": "/tʃɪp/",
        "vi2": "khoai tây chiên"
      },
      {
        "w1": "shoe",
        "ipa1": "/ʃuː/",
        "vi1": "chiếc giày",
        "w2": "chew",
        "ipa2": "/tʃuː/",
        "vi2": "nhai"
      },
      {
        "w1": "share",
        "ipa1": "/ʃeə/",
        "vi1": "chia sẻ",
        "w2": "chair",
        "ipa2": "/tʃeə/",
        "vi2": "cái ghế"
      },
      {
        "w1": "wash",
        "ipa1": "/wɒʃ/",
        "vi1": "rửa / giặt",
        "w2": "watch",
        "ipa2": "/wɒtʃ/",
        "vi2": "xem / đồng hồ"
      },
      {
        "w1": "cash",
        "ipa1": "/kæʃ/",
        "vi1": "tiền mặt",
        "w2": "catch",
        "ipa2": "/kætʃ/",
        "vi2": "bắt lấy"
      }
    ]
  },
  {
    "id": "pair_14",
    "pair": "/l/ vs /r/",
    "desc": "Phụ âm l (đầu lưỡi chạm nướu trên) vs r (uốn cong đầu lưỡi không chạm vòm)",
    "unit": 21,
    "items": [
      {
        "w1": "light",
        "ipa1": "/laɪt/",
        "vi1": "ánh sáng",
        "w2": "right",
        "ipa2": "/raɪt/",
        "vi2": "đúng / bên phải"
      },
      {
        "w1": "load",
        "ipa1": "/ləʊd/",
        "vi1": "tải hàng",
        "w2": "road",
        "ipa2": "/rəʊd/",
        "vi2": "con đường"
      },
      {
        "w1": "lock",
        "ipa1": "/lɒk/",
        "vi1": "ổ khóa",
        "w2": "rock",
        "ipa2": "/rɒk/",
        "vi2": "hòn đá"
      },
      {
        "w1": "collect",
        "ipa1": "/kəˈlekt/",
        "vi1": "thu thập",
        "w2": "correct",
        "ipa2": "/kəˈrekt/",
        "vi2": "chính xác"
      },
      {
        "w1": "fly",
        "ipa1": "/flaɪ/",
        "vi1": "bay",
        "w2": "fry",
        "ipa2": "/fraɪ/",
        "vi2": "chiên / rán"
      }
    ]
  }
];

export const PRONUN_UNITS = [
  {
    "id": 1,
    "section": "A",
    "sectionName": "Sounds and spelling",
    "title": "How many letters, how many sounds?",
    "subtitle": "Mối quan hệ giữa Chữ cái (Spelling) và Âm (Pronunciation)",
    "sound": "Spelling & Pronunciation",
    "rule": "Trong tiếng Anh, một chữ cái có thể phát âm thành nhiều âm khác nhau, và một âm có thể được viết bằng nhiều chữ cái khác nhau. Ví dụ: 'green' có 5 chữ cái nhưng chỉ có 4 âm /g-r-iː-n/.",
    "words": [
      {
        "w": "green",
        "ipa": "/ɡriːn/",
        "vi": "màu xanh lá (5 chữ cái, 4 âm)"
      },
      {
        "w": "all",
        "ipa": "/ɔːl/",
        "vi": "tất cả (3 chữ cái, 2 âm)"
      },
      {
        "w": "back",
        "ipa": "/bæk/",
        "vi": "phía sau (4 chữ cái, 3 âm)"
      },
      {
        "w": "knee",
        "ipa": "/niː/",
        "vi": "đầu gối (k câm, 4 chữ cái, 2 âm)"
      },
      {
        "w": "thing",
        "ipa": "/θɪŋ/",
        "vi": "đồ vật (th và ng là 1 âm đơn)"
      },
      {
        "w": "who",
        "ipa": "/huː/",
        "vi": "ai (w câm, 3 chữ cái, 2 âm)"
      }
    ],
    "sentences": [
      "How many letters and how many sounds?",
      "One letter does not always equal one sound.",
      "English spelling is not always the same as pronunciation."
    ],
    "sections": [
      {
        "letter": "A",
        "title": "Alphabet Letters & Sounds Overview",
        "guideEn": "There are 26 letters in the English alphabet (5 vowel letters: A E I O U, and 21 consonant letters). But there are more than 40 vowel and consonant sounds in English. In some words, the number of letters is the same as the number of sounds: best (4 letters, 4 sounds: b-e-s-t), dentist (7 letters, 7 sounds: d-e-n-t-i-s-t).",
        "guideVi": "Bảng chữ cái tiếng Anh có 26 chữ cái (5 nguyên âm: A E I O U, 21 phụ âm). Nhưng lại có hơn 40 âm ngữ âm! Trong một số từ, số chữ cái bằng số âm: best (4 chữ cái, 4 âm: b-e-s-t), dentist (7 chữ cái, 7 âm: d-e-n-t-i-s-t).",
        "groups": [
          {
            "pattern": "Số chữ cái = Số âm",
            "badge": "1:1",
            "words": [
              {
                "w": "best",
                "ipa": "/best/",
                "vi": "tốt nhất (4 chữ cái, 4 âm)"
              },
              {
                "w": "dentist",
                "ipa": "/ˈdentɪst/",
                "vi": "nha sĩ (7 chữ cái, 7 âm)"
              }
            ]
          }
        ],
        "audio": {
          "code": "A2",
          "cd": 1,
          "track": "track02.mp3",
          "label": "Audio Mục A (A2)"
        }
      },
      {
        "letter": "B",
        "title": "Number of sounds different from number of letters",
        "guideEn": "In green, ee is one sound. In happy, pp is one sound. In bread, ea is one sound. In some words there are silent letters: in listen, t is silent. In some words, one letter is two sounds: x in six is k + s.",
        "guideVi": "Đôi khi số âm khác số chữ cái: trong green, 2 chữ ee gộp thành 1 âm /iː/ (5 chữ, 4 âm). Trong bread, ea là 1 âm /e/ (5 chữ, 4 âm). Có từ chứa chữ câm: listen có chữ t câm (6 chữ, 5 âm). Có từ 1 chữ cái sinh 2 âm: x trong six là /ks/ (3 chữ, 4 âm).",
        "groups": [
          {
            "pattern": "Chữ ghép & chữ câm",
            "badge": "Quy tắc",
            "words": [
              {
                "w": "green",
                "ipa": "/ɡriːn/",
                "vi": "5 chữ cái, 4 âm"
              },
              {
                "w": "happy",
                "ipa": "/ˈhæpi/",
                "vi": "5 chữ cái, 4 âm"
              },
              {
                "w": "bread",
                "ipa": "/bred/",
                "vi": "5 chữ cái, 4 âm"
              },
              {
                "w": "listen",
                "ipa": "/ˈlɪsn/",
                "vi": "chữ t câm, 6 chữ cái, 5 âm"
              },
              {
                "w": "six",
                "ipa": "/sɪks/",
                "vi": "x = /ks/, 3 chữ cái, 4 âm"
              }
            ]
          }
        ],
        "audio": {
          "code": "A3",
          "cd": 1,
          "track": "track03.mp3",
          "label": "Audio Mục B (A3)"
        }
      },
      {
        "letter": "C",
        "title": "Same sound, different spelling / Same spelling, different sound",
        "guideEn": "We sometimes write the same sound differently in different words: e in red sounds like ea in bread. Two words have the same pronunciation but different spellings (know - no). Two words have the same spelling but different pronunciations: read (/riːd/ present) vs read (/red/ past).",
        "guideVi": "Cùng một âm có thể viết bằng chữ khác nhau (red và bread đều có âm /e/). Hai từ phát âm giống hệt nhau nhưng viết khác nhau (know và no đều là /nəʊ/). Cùng một cách viết nhưng phát âm khác nhau: read (/riːd/ hiện tại) và read (/red/ quá khứ).",
        "sentences": [
          {
            "en": "Do you know? No, I don't.",
            "vi": "Bạn có biết không? Không, tôi không biết."
          },
          {
            "en": "Do you want to read the newspaper?",
            "vi": "Bạn có muốn đọc báo không? (/riːd/)"
          },
          {
            "en": "No, thanks, I read it this morning.",
            "vi": "Không, cảm ơn, tôi đã đọc sáng nay rồi. (/red/)"
          }
        ],
        "audio": {
          "code": "A4",
          "cd": 1,
          "track": "track04.mp3",
          "label": "Audio Mục C (A4)"
        }
      }
    ],
    "exercises": [
      {
        "id": "1.1",
        "title": "Exercise 1.1: Đếm số chữ cái và số âm của từ",
        "type": "letters_sounds_table",
        "instruction": "Write the number of letters and the number of sounds in these words (Điền số chữ cái và số âm):",
        "items": [
          {
            "w": "all",
            "letters": 3,
            "sounds": 2,
            "explain": "3 chữ cái, 2 âm /ɔː-l/"
          },
          {
            "w": "back",
            "letters": 4,
            "sounds": 3,
            "explain": "4 chữ cái, 3 âm /b-æ-k/"
          },
          {
            "w": "could",
            "letters": 5,
            "sounds": 3,
            "explain": "5 chữ cái, 3 âm /k-ʊ-d/ (l câm)"
          },
          {
            "w": "knee",
            "letters": 4,
            "sounds": 2,
            "explain": "4 chữ cái, 2 âm /n-iː/ (k câm)"
          },
          {
            "w": "sixty",
            "letters": 5,
            "sounds": 6,
            "explain": "5 chữ cái, 6 âm /s-ɪ-k-s-t-i/ (x = k+s)"
          },
          {
            "w": "thing",
            "letters": 5,
            "sounds": 3,
            "explain": "5 chữ cái, 3 âm /θ-ɪ-ŋ/"
          },
          {
            "w": "who",
            "letters": 3,
            "sounds": 2,
            "explain": "3 chữ cái, 2 âm /h-uː/ (w câm)"
          },
          {
            "w": "address",
            "letters": 7,
            "sounds": 5,
            "explain": "7 chữ cái, 5 âm /ə-d-r-e-s/"
          }
        ],
        "audio": {
          "code": "A5",
          "cd": 1,
          "track": "track05.mp3",
          "label": "Audio Exercise 1.1 (A5)"
        }
      },
      {
        "id": "1.2",
        "title": "Exercise 1.2: Phiên âm sang từ tiếng Anh",
        "type": "ipa_to_spelling",
        "instruction": "Write these words in their normal spelling (Nhìn ký hiệu phiên âm và gõ từ tiếng Anh):",
        "items": [
          {
            "ipa": "/bɪɡ/",
            "answer": "big"
          },
          {
            "ipa": "/dres/",
            "answer": "dress"
          },
          {
            "ipa": "/frend/",
            "answer": "friend"
          },
          {
            "ipa": "/ɡɪv/",
            "answer": "give"
          },
          {
            "ipa": "/help/",
            "answer": "help"
          },
          {
            "ipa": "/nekst/",
            "answer": "next"
          },
          {
            "ipa": "/ˈveri/",
            "answer": "very"
          },
          {
            "ipa": "/wel/",
            "answer": "well"
          }
        ],
        "audio": {
          "code": "A6",
          "cd": 1,
          "track": "track06.mp3",
          "label": "Audio Exercise 1.2 (A6)"
        }
      },
      {
        "id": "1.3",
        "title": "Exercise 1.3: Tìm từ có nguyên âm phát âm khác nhóm (Odd one out)",
        "type": "odd_one_out",
        "instruction": "Find the word with the different vowel sound in each group (Tìm từ có nguyên âm phát âm khác):",
        "groups": [
          {
            "options": [
              "give",
              "time",
              "sit",
              "think",
              "rich"
            ],
            "correct": "time",
            "explain": "time phát âm là /aɪ/, còn các từ khác là /ɪ/"
          },
          {
            "options": [
              "apple",
              "bad",
              "wash",
              "catch",
              "bank"
            ],
            "correct": "wash",
            "explain": "wash phát âm là /ɒ/, còn các từ khác là /æ/"
          },
          {
            "options": [
              "much",
              "bus",
              "sun",
              "push",
              "up"
            ],
            "correct": "push",
            "explain": "push phát âm là /ʊ/, còn các từ khác là /ʌ/"
          },
          {
            "options": [
              "many",
              "maths",
              "man",
              "hat",
              "flat"
            ],
            "correct": "many",
            "explain": "many phát âm là /e/, còn các từ khác là /æ/"
          }
        ],
        "audio": {
          "code": "A7",
          "cd": 1,
          "track": "track07.mp3",
          "label": "Audio Exercise 1.3 (A7)"
        }
      },
      {
        "id": "1.4",
        "title": "Exercise 1.4: Tìm từ gieo vần (Rhyme words)",
        "type": "rhyme_words",
        "instruction": "Write words that rhyme (the end part of the word sounds the same):",
        "items": [
          {
            "word": "key",
            "prefix": "tr_ _",
            "answer": "tree"
          },
          {
            "word": "blue",
            "prefix": "sh_ _",
            "answer": "shoe"
          },
          {
            "word": "not",
            "prefix": "w_ _ _",
            "answer": "what"
          },
          {
            "word": "one",
            "prefix": "r_ _",
            "answer": "run"
          },
          {
            "word": "date",
            "prefix": "w_ _ _",
            "answer": "wait"
          },
          {
            "word": "lie",
            "prefix": "w_ _",
            "answer": "why"
          },
          {
            "word": "so",
            "prefix": "sh_ _",
            "answer": "show"
          },
          {
            "word": "beer",
            "prefix": "n_ _ _",
            "answer": "near"
          }
        ],
        "audio": {
          "code": "A8",
          "cd": 1,
          "track": "track08.mp3",
          "label": "Audio Exercise 1.4 (A8)"
        }
      }
    ]
  },
  {
    "id": 2,
    "section": "A",
    "sectionName": "Sounds and spelling",
    "title": "Pizza for dinner",
    "subtitle": "Cặp âm /iː/ (nguyên âm dài) và /ɪ/ (nguyên âm ngắn)",
    "sound": "/iː/ and /ɪ/",
    "rule": "/iː/ là âm dài, mở miệng bè rộng như mỉm cười (see, seat). /ɪ/ là âm ngắn, mở miệng hơi hé, thả lỏng hàm (sit, dinner).",
    "words": [
      {
        "w": "see",
        "ipa": "/siː/",
        "vi": "nhìn thấy"
      },
      {
        "w": "seat",
        "ipa": "/siːt/",
        "vi": "chỗ ngồi"
      },
      {
        "w": "pizza",
        "ipa": "/ˈpiːtsə/",
        "vi": "bánh pizza"
      },
      {
        "w": "dinner",
        "ipa": "/ˈdɪnə/",
        "vi": "bữa tối"
      },
      {
        "w": "listen",
        "ipa": "/ˈlɪsn/",
        "vi": "lắng nghe"
      },
      {
        "w": "busy",
        "ipa": "/ˈbɪzi/",
        "vi": "bận rộn"
      }
    ],
    "sentences": [
      "Can you see the sea?",
      "A piece of pizza, please.",
      "Peter is in the team.",
      "A kilo of peaches and a litre of cream.",
      "Please can you teach me to speak Portuguese?"
    ],
    "sections": [
      {
        "letter": "A",
        "title": "How to make the sound /iː/",
        "targetSound": "/iː/",
        "targetType": "long vowel",
        "diagram": "img/pronun/mouth_i_long.png",
        "diagramDesc": "front of tongue up · wide mouth",
        "guideEn": "/iː/ is a long sound. Look at the diagram. Listen and then say the sound. Make your mouth wide, like a smile. Your tongue touches the sides of your teeth. Target sound: /iː/",
        "guideVi": "/iː/ là một nguyên âm dài. Hãy quan sát sơ đồ khẩu hình: Mở miệng bè rộng sang hai bên như đang mỉm cười tươi. Nâng phần trước của lưỡi lên cao chạm vào hai bên cạnh răng trên. Âm đích: /iː/",
        "targetWord": "see",
        "audio": {
          "code": "A9",
          "cd": 1,
          "track": "track09.mp3",
          "label": "Audio gốc Cambridge: Mục A & B (A9)"
        }
      },
      {
        "letter": "B",
        "title": "Sound and spelling (/iː/)",
        "commonRule": "/iː/ is usually spelled ee or ea. Listen and say these words.",
        "groups": [
          {
            "pattern": "ee, ea (thông dụng nhất)",
            "badge": "Phổ biến",
            "words": [
              {
                "w": "see",
                "ipa": "/siː/",
                "vi": "nhìn thấy"
              },
              {
                "w": "agree",
                "ipa": "/əˈɡriː/",
                "vi": "đồng ý"
              },
              {
                "w": "eat",
                "ipa": "/iːt/",
                "vi": "ăn"
              },
              {
                "w": "seat",
                "ipa": "/siːt/",
                "vi": "chỗ ngồi"
              },
              {
                "w": "team",
                "ipa": "/tiːm/",
                "vi": "đội ngũ"
              }
            ]
          },
          {
            "pattern": "ie",
            "badge": "Đặc biệt",
            "words": [
              {
                "w": "field",
                "ipa": "/fiːld/",
                "vi": "cánh đồng, sân bóng"
              },
              {
                "w": "piece",
                "ipa": "/piːs/",
                "vi": "miếng, mẩu"
              }
            ]
          },
          {
            "pattern": "e",
            "badge": "Đặc biệt",
            "words": [
              {
                "w": "these",
                "ipa": "/ðiːz/",
                "vi": "những cái này"
              },
              {
                "w": "metre",
                "ipa": "/ˈmiːtər/",
                "vi": "mét"
              },
              {
                "w": "secret",
                "ipa": "/ˈsiːkrət/",
                "vi": "bí mật"
              },
              {
                "w": "evening",
                "ipa": "/ˈiːvnɪŋ/",
                "vi": "buổi tối"
              },
              {
                "w": "equal",
                "ipa": "/ˈiːkwəl/",
                "vi": "bằng nhau, bình đẳng"
              },
              {
                "w": "Peter",
                "ipa": "/ˈpiːtər/",
                "vi": "Peter"
              },
              {
                "w": "museum",
                "ipa": "/mjuːˈziːəm/",
                "vi": "bảo tàng"
              },
              {
                "w": "European",
                "ipa": "/ˌjʊərəˈpiːən/",
                "vi": "thuộc châu Âu"
              },
              {
                "w": "Chinese",
                "ipa": "/ˌtʃaɪˈniːz/",
                "vi": "tiếng Trung"
              },
              {
                "w": "Japanese",
                "ipa": "/ˌdʒæpəˈniːz/",
                "vi": "tiếng Nhật"
              },
              {
                "w": "complete",
                "ipa": "/kəmˈpliːt/",
                "vi": "hoàn thành"
              }
            ]
          },
          {
            "pattern": "ey",
            "badge": "Đặc biệt",
            "words": [
              {
                "w": "key",
                "ipa": "/kiː/",
                "vi": "chìa khóa"
              }
            ]
          },
          {
            "pattern": "i (từ mượn tiếng Pháp / Ý)",
            "badge": "Đặc biệt",
            "words": [
              {
                "w": "ski",
                "ipa": "/skiː/",
                "vi": "trượt tuyết"
              },
              {
                "w": "kilo",
                "ipa": "/ˈkiːləʊ/",
                "vi": "ki-lô-gam"
              },
              {
                "w": "litre",
                "ipa": "/ˈliːtər/",
                "vi": "lít"
              },
              {
                "w": "pizza",
                "ipa": "/ˈpiːtsə/",
                "vi": "bánh pizza"
              },
              {
                "w": "police",
                "ipa": "/pəˈliːs/",
                "vi": "cảnh sát"
              },
              {
                "w": "machine",
                "ipa": "/məˈʃiːn/",
                "vi": "máy móc"
              },
              {
                "w": "magazine",
                "ipa": "/ˌmæɡəˈziːn/",
                "vi": "tạp chí"
              }
            ]
          },
          {
            "pattern": "eo",
            "badge": "Đặc biệt",
            "words": [
              {
                "w": "people",
                "ipa": "/ˈpiːpl/",
                "vi": "con người"
              }
            ]
          }
        ],
        "sentences": [
          {
            "en": "Can you see the sea?",
            "vi": "Bạn có nhìn thấy biển không?"
          },
          {
            "en": "A piece of pizza, please.",
            "vi": "Làm ơn cho tôi một miếng pizza."
          },
          {
            "en": "Peter's in the team.",
            "vi": "Peter ở trong đội."
          },
          {
            "en": "A kilo of peaches and a litre of cream.",
            "vi": "Một cân đào và một lít kem sữa."
          },
          {
            "en": "Please can you teach me to speak Portuguese?",
            "vi": "Làm ơn dạy tôi nói tiếng Bồ Đào Nha được không?"
          }
        ],
        "audio": {
          "code": "A9",
          "cd": 1,
          "track": "track09.mp3",
          "label": "Audio gốc Cambridge: Mục B (A9)"
        }
      },
      {
        "letter": "C",
        "title": "How to make the sound /ɪ/",
        "targetSound": "/ɪ/",
        "targetType": "short vowel",
        "diagram": "img/pronun/mouth_i_short.png",
        "diagramDesc": "front of tongue up · jaw down (a little)",
        "guideEn": "/ɪ/ is a short sound. Look at the diagram. Listen and then say the sound. Make your mouth a bit less wide than for /iː/. Your tongue is a bit further back in your mouth than for /iː/. Target sound: /ɪ/",
        "guideVi": "/ɪ/ là một nguyên âm ngắn. Hãy quan sát sơ đồ: Miệng mở bớt bè hơn so với /iː/, hạ nhẹ hàm dưới xuống một chút. Lưỡi hơi lùi về phía sau hơn so với khi phát âm /iː/. Âm đích: /ɪ/",
        "targetWord": "sit",
        "audio": {
          "code": "A10",
          "cd": 1,
          "track": "track10.mp3",
          "label": "Audio gốc Cambridge: Mục C & D (A10)"
        }
      },
      {
        "letter": "D",
        "title": "Sound and spelling (/ɪ/)",
        "commonRule": "/ɪ/ is usually spelled i. Listen and say these words.",
        "groups": [
          {
            "pattern": "i (thông dụng nhất)",
            "badge": "Phổ biến",
            "words": [
              {
                "w": "if",
                "ipa": "/ɪf/",
                "vi": "nếu"
              },
              {
                "w": "listen",
                "ipa": "/ˈlɪsn/",
                "vi": "lắng nghe"
              },
              {
                "w": "miss",
                "ipa": "/mɪs/",
                "vi": "nhớ / bỏ lỡ"
              },
              {
                "w": "dinner",
                "ipa": "/ˈdɪnər/",
                "vi": "bữa tối"
              },
              {
                "w": "swim",
                "ipa": "/swɪm/",
                "vi": "bơi lội"
              }
            ]
          },
          {
            "pattern": "chữ cái khác (u, ui, y)",
            "badge": "Đặc biệt",
            "words": [
              {
                "w": "busy",
                "ipa": "/ˈbɪzi/",
                "vi": "bận rộn"
              },
              {
                "w": "business",
                "ipa": "/ˈbɪznəs/",
                "vi": "kinh doanh"
              },
              {
                "w": "building",
                "ipa": "/ˈbɪldɪŋ/",
                "vi": "tòa nhà"
              },
              {
                "w": "system",
                "ipa": "/ˈsɪstəm/",
                "vi": "hệ thống"
              }
            ]
          }
        ],
        "sentences": [
          {
            "en": "fifty-six",
            "vi": "số 56"
          },
          {
            "en": "dinner in the kitchen",
            "vi": "bữa tối trong nhà bếp"
          },
          {
            "en": "a cinema ticket",
            "vi": "vé xem phim rạp"
          },
          {
            "en": "a picture of a building",
            "vi": "bức tranh một tòa nhà"
          },
          {
            "en": "big business",
            "vi": "doanh nghiệp lớn"
          }
        ],
        "notes": [
          {
            "tag": "8 Chữ cái Alphabet phát âm /iː/",
            "content": "Trong bảng chữ cái tiếng Anh, 8 chữ cái sau có phát âm kết thúc bằng âm /iː/: B, C, D, E, G, P, T, V."
          },
          {
            "tag": "Âm yếu Schwa /ə/",
            "content": "Nguyên âm ở các âm tiết không nhấn trọng âm thường đọc lướt thành âm yếu schwa /ə/: agree, equal, kitchen, museum, Peter, picture, pizza."
          },
          {
            "tag": "Âm /i/ ở cuối từ",
            "content": "Ở cuối từ trong âm tiết không nhấn, âm /i/ phát âm như /iː/ nhưng ngắn hơn: happy, coffee, busy, sixty."
          }
        ],
        "audio": {
          "code": "A10",
          "cd": 1,
          "track": "track10.mp3",
          "label": "Audio gốc Cambridge: Mục D (A10)"
        }
      }
    ],
    "exercises": [
      {
        "id": "2.1",
        "title": "Exercise 2.1: Điền từ chứa âm /iː/ vào đoạn đối thoại",
        "type": "fill_dialogue",
        "instruction": "Put these /iː/ words in the dialogues: email, evening, police, secret, Steve, TV",
        "wordBank": [
          "email",
          "evening",
          "police",
          "secret",
          "Steve",
          "TV"
        ],
        "dialogues": [
          {
            "id": 1,
            "lines": [
              {
                "speaker": "A",
                "parts": [
                  "What shall we do this ",
                  {
                    "blank": "evening"
                  },
                  "?"
                ]
              },
              {
                "speaker": "B",
                "parts": [
                  "Let's stay at home and watch ",
                  {
                    "blank": "TV"
                  },
                  "."
                ]
              }
            ]
          },
          {
            "id": 2,
            "lines": [
              {
                "speaker": "A",
                "parts": [
                  "Let me read that ",
                  {
                    "blank": "email"
                  },
                  "!"
                ]
              },
              {
                "speaker": "B",
                "parts": [
                  "No – it's a secret!"
                ]
              }
            ]
          },
          {
            "id": 3,
            "lines": [
              {
                "speaker": "A",
                "parts": [
                  "You know my friend ",
                  {
                    "blank": "Steve"
                  },
                  "?"
                ]
              },
              {
                "speaker": "B",
                "parts": [
                  "Yes."
                ]
              },
              {
                "speaker": "A",
                "parts": [
                  "Well, he's got a new job. He's joined the ",
                  {
                    "blank": "police"
                  },
                  "!"
                ]
              }
            ]
          }
        ],
        "audio": {
          "code": "A11",
          "cd": 1,
          "track": "track11.mp3",
          "label": "Audio gốc giải bài 2.1 (A11)"
        }
      },
      {
        "id": "2.2",
        "title": "Exercise 2.2: Đố vui - Tìm từ chứa âm /ɪ/",
        "type": "clues",
        "instruction": "Find the /ɪ/ words from these clues (Đọc gợi ý và điền từ thích hợp chứa âm /ɪ/):",
        "items": [
          {
            "id": 1,
            "clue": "You can use a _____ to go up and down in a building.",
            "answer": "lift",
            "hint": "Thang máy (l___)"
          },
          {
            "id": 2,
            "clue": "There are sixty seconds in a _____.",
            "answer": "minute",
            "hint": "Phút (m_____)"
          },
          {
            "id": 3,
            "clue": "A _____ is a book of words to help you with your English.",
            "answer": "dictionary",
            "hint": "Từ điển (d_________)"
          },
          {
            "id": 4,
            "clue": "It's too warm in here - open the _____.",
            "answer": "window",
            "hint": "Cửa sổ (w_____)"
          },
          {
            "id": 5,
            "clue": "Would you like a _____ with your coffee?",
            "answer": "biscuit",
            "hint": "Bánh quy (b______)"
          },
          {
            "id": 6,
            "clue": "Birds and planes have _____.",
            "answer": "wings",
            "hint": "Đôi cánh (w____)"
          },
          {
            "id": 7,
            "clue": "You can see yourself in a _____.",
            "answer": "mirror",
            "hint": "Chiếc gương soi (m_____)"
          },
          {
            "id": 8,
            "clue": "Don't drop _____ - put it in a bin!",
            "answer": "litter",
            "hint": "Rác thải (l_____)"
          }
        ],
        "audio": {
          "code": "A12",
          "cd": 1,
          "track": "track12.mp3",
          "label": "Audio phát âm đáp án 2.2 (A12)"
        }
      },
      {
        "id": "2.3",
        "title": "Exercise 2.3: Phân loại âm /iː/ (dài) và /ɪ/ (ngắn)",
        "type": "sort_sounds",
        "instruction": "Circle all the /iː/ sounds and underline all the /ɪ/ sounds (Chọn từ và phân loại vào đúng nhóm âm):",
        "targetA": {
          "name": "/iː/ (âm dài)",
          "key": "i_long"
        },
        "targetB": {
          "name": "/ɪ/ (âm ngắn)",
          "key": "i_short"
        },
        "words": [
          {
            "w": "green",
            "target": "i_long",
            "ipa": "/ɡriːn/"
          },
          {
            "w": "meet",
            "target": "i_long",
            "ipa": "/miːt/"
          },
          {
            "w": "people",
            "target": "i_long",
            "ipa": "/ˈpiːpl/"
          },
          {
            "w": "pizza",
            "target": "i_long",
            "ipa": "/ˈpiːtsə/"
          },
          {
            "w": "please",
            "target": "i_long",
            "ipa": "/pliːz/"
          },
          {
            "w": "tea",
            "target": "i_long",
            "ipa": "/tiː/"
          },
          {
            "w": "three",
            "target": "i_long",
            "ipa": "/θriː/"
          },
          {
            "w": "big",
            "target": "i_short",
            "ipa": "/bɪɡ/"
          },
          {
            "w": "busy",
            "target": "i_short",
            "ipa": "/ˈbɪzi/"
          },
          {
            "w": "dinner",
            "target": "i_short",
            "ipa": "/ˈdɪnər/"
          },
          {
            "w": "give",
            "target": "i_short",
            "ipa": "/ɡɪv/"
          },
          {
            "w": "in",
            "target": "i_short",
            "ipa": "/ɪn/"
          },
          {
            "w": "listen",
            "target": "i_short",
            "ipa": "/ˈlɪsn/"
          },
          {
            "w": "office",
            "target": "i_short",
            "ipa": "/ˈɒfɪs/"
          },
          {
            "w": "six",
            "target": "i_short",
            "ipa": "/sɪks/"
          },
          {
            "w": "repeat",
            "target": "both",
            "ipa": "/rɪˈpiːt/",
            "note": "Âm tiết 1 là /ɪ/, âm tiết 2 là /iː/!"
          }
        ],
        "audio": {
          "code": "A13",
          "cd": 1,
          "track": "track13.mp3",
          "label": "Audio phân loại âm 2.3 (A13)"
        }
      },
      {
        "id": "2.4",
        "title": "Exercise 2.4: Nối vế câu có nghĩa",
        "type": "match_sentences",
        "instruction": "Match the beginnings and endings of the sentences (Ghép nửa đầu và nửa sau của câu):",
        "pairs": [
          {
            "id": 1,
            "start": "We're always busy",
            "end": "in the office.",
            "full": "We're always busy in the office."
          },
          {
            "id": 2,
            "start": "Would you like tea",
            "end": "or coffee?",
            "full": "Would you like tea or coffee?"
          },
          {
            "id": 3,
            "start": "Give me that big",
            "end": "green book, please.",
            "full": "Give me that big green book, please."
          },
          {
            "id": 4,
            "start": "There were only three",
            "end": "people in the museum.",
            "full": "There were only three people in the museum."
          },
          {
            "id": 5,
            "start": "Listen and",
            "end": "repeat.",
            "full": "Listen and repeat."
          },
          {
            "id": 6,
            "start": "Let's meet at",
            "end": "six o'clock.",
            "full": "Let's meet at six o'clock."
          }
        ],
        "audio": {
          "code": "A14",
          "cd": 1,
          "track": "track14.mp3",
          "label": "Audio nối câu hoàn chỉnh 2.4 (A14)"
        }
      },
      {
        "id": "2.5",
        "title": "Exercise 2.5: Luyện nghe phân biệt cặp từ (Minimal Pairs Drill)",
        "type": "listen_pairs",
        "instruction": "Listen and choose the word you hear (Bấm nghe máy phát âm và chọn đúng từ):",
        "drills": [
          {
            "id": 1,
            "pair": [
              "leave",
              "live"
            ],
            "correct": "leave",
            "pairName": "sound pair 1"
          },
          {
            "id": 2,
            "pair": [
              "knee",
              "near"
            ],
            "correct": "near",
            "pairName": "sound pair 2"
          },
          {
            "id": 3,
            "pair": [
              "litter",
              "letter"
            ],
            "correct": "letter",
            "pairName": "sound pair 3"
          }
        ],
        "audio": {
          "code": "A15",
          "cd": 1,
          "track": "track15.mp3",
          "label": "Audio bài kiểm tra nghe 2.5 (A15)"
        }
      }
    ]
  },
  {
    "id": 3,
    "section": "A",
    "sectionName": "Sounds and spelling",
    "title": "A spoonful of sugar",
    "subtitle": "Cặp âm /uː/ (nguyên âm dài) và /ʊ/ (nguyên âm ngắn)",
    "sound": "/uː/ and /ʊ/",
    "rule": "/uː/ là âm dài, môi chu tròn nhỏ như ống hút (too, blue, food). /ʊ/ là âm ngắn, môi hơi tròn tự nhiên (book, sugar, put).",
    "words": [
      {
        "w": "spoon",
        "ipa": "/spuːn/",
        "vi": "cái thìa"
      },
      {
        "w": "sugar",
        "ipa": "/ˈʃʊɡə/",
        "vi": "đường ăn"
      },
      {
        "w": "blue",
        "ipa": "/bluː/",
        "vi": "màu xanh dương"
      },
      {
        "w": "book",
        "ipa": "/bʊk/",
        "vi": "cuốn sách"
      },
      {
        "w": "good",
        "ipa": "/ɡʊd/",
        "vi": "tốt, ngon"
      },
      {
        "w": "fruit",
        "ipa": "/fruːt/",
        "vi": "trái cây"
      }
    ],
    "sentences": [
      "A spoonful of sugar, please.",
      "Look at that good book.",
      "Who took my blue shoes?",
      "The food at school was really good."
    ],
    "sections": [
      {
        "letter": "A",
        "title": "How to make the sound /uː/",
        "targetSound": "/uː/",
        "targetType": "long vowel",
        "diagram": "img/pronun/mouth_u_long.png",
        "diagramDesc": "back of tongue up · lips rounded · lips forward",
        "guideEn": "/uː/ is a long sound. Look at the diagram. Listen and then say the sound. Make your lips into a tunnel shape. Your tongue is a long way back in your mouth. Target sound: /uː/",
        "guideVi": "/uː/ là một nguyên âm dài. Hãy quan sát sơ đồ: Chu môi tròn hướng về phía trước như hình ống hầm. Nâng phần sau của lưỡi lên cao và lùi sâu về phía vòm họng. Âm đích: /uː/",
        "targetWord": "too",
        "audio": {
          "code": "A16",
          "cd": 1,
          "track": "track16.mp3",
          "label": "Audio Mục A & B (A16)"
        }
      },
      {
        "letter": "B",
        "title": "Sound and spelling (/uː/)",
        "commonRule": "/uː/ is often spelled oo, ou, oe, u, ue or ew. Listen and say these words.",
        "groups": [
          {
            "pattern": "oo, ou, oe, u, ue, ew",
            "badge": "Phổ biến",
            "words": [
              {
                "w": "too",
                "ipa": "/tuː/",
                "vi": "quá / cũng"
              },
              {
                "w": "group",
                "ipa": "/ɡruːp/",
                "vi": "nhóm"
              },
              {
                "w": "shoe",
                "ipa": "/ʃuː/",
                "vi": "chiếc giày"
              },
              {
                "w": "blue",
                "ipa": "/bluː/",
                "vi": "màu xanh lam"
              }
            ]
          },
          {
            "pattern": "u, ew có âm /j/ đi trước (/juː/)",
            "badge": "Đặc biệt",
            "words": [
              {
                "w": "music",
                "ipa": "/ˈmjuːzɪk/",
                "vi": "âm nhạc"
              },
              {
                "w": "new",
                "ipa": "/njuː/",
                "vi": "mới mẻ"
              }
            ]
          },
          {
            "pattern": "cách viết khác (two, fruit, juice)",
            "badge": "Đặc biệt",
            "words": [
              {
                "w": "two",
                "ipa": "/tuː/",
                "vi": "số hai"
              },
              {
                "w": "fruit",
                "ipa": "/fruːt/",
                "vi": "trái cây"
              },
              {
                "w": "juice",
                "ipa": "/dʒuːs/",
                "vi": "nước ép"
              }
            ]
          }
        ],
        "sentences": [
          {
            "en": "me too",
            "vi": "tôi cũng vậy"
          },
          {
            "en": "work in groups",
            "vi": "làm việc theo nhóm"
          },
          {
            "en": "new shoes",
            "vi": "đôi giày mới"
          },
          {
            "en": "red and blue",
            "vi": "màu đỏ và xanh"
          },
          {
            "en": "listen to the music",
            "vi": "nghe nhạc"
          },
          {
            "en": "forty-two",
            "vi": "số 42"
          },
          {
            "en": "fruit juice",
            "vi": "nước ép hoa quả"
          }
        ],
        "audio": {
          "code": "A16",
          "cd": 1,
          "track": "track16.mp3",
          "label": "Audio Mục B (A16)"
        }
      },
      {
        "letter": "C",
        "title": "How to make the sound /ʊ/",
        "targetSound": "/ʊ/",
        "targetType": "short vowel",
        "diagram": "img/pronun/mouth_u_short.png",
        "diagramDesc": "back of tongue up · lips rounded (a little) · lips forward (a little)",
        "guideEn": "/ʊ/ is a short sound. Look at the diagram. Listen and then say the sound. Your tongue is not so far back as for /uː/. Lips rounded a little. Target sound: /ʊ/",
        "guideVi": "/ʊ/ là một nguyên âm ngắn. Hãy quan sát sơ đồ: Môi chỉ hơi tròn và hơi đưa về trước một chút (ít hơn /uː/). Lưỡi không lùi quá sâu như âm /uː/. Âm đích: /ʊ/",
        "targetWord": "book",
        "audio": {
          "code": "A17",
          "cd": 1,
          "track": "track17.mp3",
          "label": "Audio Mục C & D (A17)"
        }
      },
      {
        "letter": "D",
        "title": "Sound and spelling (/ʊ/)",
        "commonRule": "/ʊ/ is often spelled u, oo or ou. Listen and say these words.",
        "groups": [
          {
            "pattern": "u, oo, ou",
            "badge": "Phổ biến",
            "words": [
              {
                "w": "full",
                "ipa": "/fʊl/",
                "vi": "đầy đủ"
              },
              {
                "w": "sugar",
                "ipa": "/ˈʃʊɡər/",
                "vi": "đường ăn"
              },
              {
                "w": "book",
                "ipa": "/bʊk/",
                "vi": "quyển sách"
              },
              {
                "w": "foot",
                "ipa": "/fʊt/",
                "vi": "bàn chân"
              },
              {
                "w": "would",
                "ipa": "/wʊd/",
                "vi": "sẽ / muốn"
              }
            ]
          },
          {
            "pattern": "o (woman)",
            "badge": "Đặc biệt",
            "words": [
              {
                "w": "woman",
                "ipa": "/ˈwʊmən/",
                "vi": "người phụ nữ"
              }
            ]
          }
        ],
        "sentences": [
          {
            "en": "My bag's full.",
            "vi": "Túi của tôi đã đầy."
          },
          {
            "en": "Where's my book?",
            "vi": "Sách của tôi ở đâu?"
          },
          {
            "en": "my left foot",
            "vi": "chân trái của tôi"
          },
          {
            "en": "a kilo of sugar",
            "vi": "một cân đường"
          },
          {
            "en": "Who's that woman?",
            "vi": "Người phụ nữ đó là ai?"
          }
        ],
        "audio": {
          "code": "A17",
          "cd": 1,
          "track": "track17.mp3",
          "label": "Audio Mục D (A17)"
        }
      }
    ]
  },
  {
    "id": 4,
    "section": "A",
    "sectionName": "Sounds and spelling",
    "title": "Father and mother",
    "subtitle": "Luyện tập cặp âm /ɑː/ (dài) và /ʌ/ (ngắn)",
    "sound": "/ɑː/ and /ʌ/",
    "rule": "/ɑː/ mở miệng rộng, cuống lưỡi hạ sâu (father, car, park). /ʌ/ mở miệng vừa phải, âm dứt khoát như 'á/ơ' (mother, sun, cup).",
    "words": [
      {
        "w": "father",
        "ipa": "/ˈfɑːðə/",
        "vi": "người cha"
      },
      {
        "w": "mother",
        "ipa": "/ˈmʌðə/",
        "vi": "người mẹ"
      },
      {
        "w": "party",
        "ipa": "/ˈpɑːti/",
        "vi": "bữa tiệc"
      },
      {
        "w": "money",
        "ipa": "/ˈmʌni/",
        "vi": "tiền bạc"
      },
      {
        "w": "start",
        "ipa": "/stɑːt/",
        "vi": "bắt đầu"
      },
      {
        "w": "sunny",
        "ipa": "/ˈsʌni/",
        "vi": "nắng ấm"
      }
    ],
    "sentences": [
      "My father and mother love sunny days.",
      "Start the car and park at the party.",
      "Hurry up, the bus is coming in a month!"
    ]
  },
  {
    "id": 5,
    "section": "A",
    "sectionName": "Sounds and spelling",
    "title": "A dog in the corner",
    "subtitle": "Luyện tập cặp âm /ɒ/ (ngắn) và /ɔː/ (dài)",
    "sound": "/ɒ/ and /ɔː/",
    "rule": "/ɒ/ là âm ngắn, mở miệng hạ hàm (dog, clock, hot). /ɔː/ là âm dài, môi tròn sâu (corner, door, four, water).",
    "words": [
      {
        "w": "dog",
        "ipa": "/dɒɡ/",
        "vi": "con chó"
      },
      {
        "w": "corner",
        "ipa": "/ˈkɔːnə/",
        "vi": "góc đường"
      },
      {
        "w": "coffee",
        "ipa": "/ˈkɒfi/",
        "vi": "cà phê"
      },
      {
        "w": "water",
        "ipa": "/ˈwɔːtə/",
        "vi": "nước uống"
      },
      {
        "w": "clock",
        "ipa": "/klɒk/",
        "vi": "đồng hồ"
      },
      {
        "w": "door",
        "ipa": "/dɔː/",
        "vi": "cửa ra vào"
      }
    ],
    "sentences": [
      "There is a dog in the corner.",
      "A cup of hot coffee at four o'clock.",
      "Walk to the door and talk to Paul."
    ]
  },
  {
    "id": 6,
    "section": "A",
    "sectionName": "Sounds and spelling",
    "title": "Bread and jam",
    "subtitle": "Luyện tập cặp âm /e/ (ngắn) và /æ/ (e bẹt)",
    "sound": "/e/ and /æ/",
    "rule": "/e/ mở miệng vừa, dứt khoát (bread, pen, bed). /æ/ mở rộng hàm dưới hết cỡ, lưỡi hạ thấp (jam, cat, apple, bag).",
    "words": [
      {
        "w": "bread",
        "ipa": "/bred/",
        "vi": "bánh mì"
      },
      {
        "w": "jam",
        "ipa": "/dʒæm/",
        "vi": "mứt hoa quả"
      },
      {
        "w": "apple",
        "ipa": "/ˈæpl/",
        "vi": "quả táo"
      },
      {
        "w": "friend",
        "ipa": "/frend/",
        "vi": "bạn bè"
      },
      {
        "w": "black",
        "ipa": "/blæk/",
        "vi": "màu đen"
      },
      {
        "w": "help",
        "ipa": "/help/",
        "vi": "giúp đỡ"
      }
    ],
    "sentences": [
      "I would like some bread and jam, please.",
      "The cat sat on the black mat.",
      "Can you lend me a red pen?"
    ]
  },
  {
    "id": 7,
    "section": "A",
    "sectionName": "Sounds and spelling",
    "title": "My birthday's on Thursday",
    "subtitle": "Luyện tập âm /ɜː/ (ơ dài) và schwa /ə/ (ơ yếu)",
    "sound": "/ɜː/ and /ə/",
    "rule": "/ɜː/ là âm ơ dài có trọng âm (birthday, Thursday, bird, work). /ə/ là âm schwa lướt nhẹ không nhấn trọng âm (about, paper, doctor).",
    "words": [
      {
        "w": "birthday",
        "ipa": "/ˈbɜːθdeɪ/",
        "vi": "ngày sinh nhật"
      },
      {
        "w": "Thursday",
        "ipa": "/ˈθɜːzdeɪ/",
        "vi": "thứ Năm"
      },
      {
        "w": "work",
        "ipa": "/wɜːk/",
        "vi": "làm việc"
      },
      {
        "w": "learn",
        "ipa": "/lɜːn/",
        "vi": "học tập"
      },
      {
        "w": "doctor",
        "ipa": "/ˈdɒktə/",
        "vi": "bác sĩ"
      },
      {
        "w": "paper",
        "ipa": "/ˈpeɪpə/",
        "vi": "giấy tờ"
      }
    ],
    "sentences": [
      "My birthday is on Thursday the thirty-first.",
      "She works as a nurse at the first university.",
      "I learned a lot of new words today."
    ]
  },
  {
    "id": 8,
    "section": "A",
    "sectionName": "Sounds and spelling",
    "title": "Here and there",
    "subtitle": "Luyện tập nguyên âm đôi /ɪə/ và /eə/",
    "sound": "/ɪə/ and /eə/",
    "rule": "/ɪə/ trượt từ i sang ơ (here, near, beer, ear). /eə/ trượt từ e sang ơ (there, hair, chair, where).",
    "words": [
      {
        "w": "here",
        "ipa": "/hɪə/",
        "vi": "ở đây"
      },
      {
        "w": "there",
        "ipa": "/ðeə/",
        "vi": "ở đó"
      },
      {
        "w": "near",
        "ipa": "/nɪə/",
        "vi": "gần"
      },
      {
        "w": "chair",
        "ipa": "/tʃeə/",
        "vi": "cái ghế"
      },
      {
        "w": "airport",
        "ipa": "/ˈeəpɔːt/",
        "vi": "sân bay"
      },
      {
        "w": "clear",
        "ipa": "/klɪə/",
        "vi": "rõ ràng"
      }
    ],
    "sentences": [
      "Come here and sit over there on the chair.",
      "Is there an airport near here?",
      "She has got fair hair and blue eyes."
    ]
  },
  {
    "id": 9,
    "section": "A",
    "sectionName": "Sounds and spelling",
    "title": "Have a great time!",
    "subtitle": "Luyện tập nguyên âm đôi /eɪ/, /aɪ/ và /ɔɪ/",
    "sound": "/eɪ/, /aɪ/ and /ɔɪ/",
    "rule": "Các nguyên âm đôi kết thúc bằng âm /ɪ/: /eɪ/ (great, day), /aɪ/ (time, my, like), /ɔɪ/ (boy, voice, enjoy).",
    "words": [
      {
        "w": "great",
        "ipa": "/ɡreɪt/",
        "vi": "tuyệt vời"
      },
      {
        "w": "time",
        "ipa": "/taɪm/",
        "vi": "thời gian"
      },
      {
        "w": "voice",
        "ipa": "/vɔɪs/",
        "vi": "giọng nói"
      },
      {
        "w": "rain",
        "ipa": "/reɪn/",
        "vi": "cơn mưa"
      },
      {
        "w": "night",
        "ipa": "/naɪt/",
        "vi": "ban đêm"
      },
      {
        "w": "choice",
        "ipa": "/tʃɔɪs/",
        "vi": "sự lựa chọn"
      }
    ],
    "sentences": [
      "Have a great time tonight!",
      "I like the voice of that boy.",
      "Make a choice and take your time."
    ]
  },
  {
    "id": 10,
    "section": "A",
    "sectionName": "Sounds and spelling",
    "title": "Old town",
    "subtitle": "Luyện tập nguyên âm đôi /əʊ/ và /aʊ/",
    "sound": "/əʊ/ and /aʊ/",
    "rule": "/əʊ/ bắt đầu từ ơ rồi tròn môi u (old, home, phone). /aʊ/ mở to miệng a rồi khép tròn môi u (town, house, now, mouse).",
    "words": [
      {
        "w": "old",
        "ipa": "/əʊld/",
        "vi": "cũ, già"
      },
      {
        "w": "town",
        "ipa": "/taʊn/",
        "vi": "thị trấn"
      },
      {
        "w": "home",
        "ipa": "/həʊm/",
        "vi": "nhà"
      },
      {
        "w": "house",
        "ipa": "/haʊs/",
        "vi": "ngôi nhà"
      },
      {
        "w": "phone",
        "ipa": "/fəʊn/",
        "vi": "điện thoại"
      },
      {
        "w": "cloud",
        "ipa": "/klaʊd/",
        "vi": "đám mây"
      }
    ],
    "sentences": [
      "Go home to the old town.",
      "How about going out of the house now?",
      "I found a mouse down around the ground."
    ]
  },
  {
    "id": 11,
    "section": "A",
    "sectionName": "Sounds and spelling",
    "title": "Pack your bags",
    "subtitle": "Luyện tập phụ âm /p/ (bật hơi) và /b/ (rung thanh)",
    "sound": "/p/ and /b/",
    "rule": "/p/ mím môi bật hơi mạnh (giấy trước miệng bay). /b/ mím môi nhưng dây thanh rung (giấy không bay).",
    "words": [
      {
        "w": "pack",
        "ipa": "/pæk/",
        "vi": "đóng gói"
      },
      {
        "w": "bag",
        "ipa": "/bæɡ/",
        "vi": "cái túi"
      },
      {
        "w": "passport",
        "ipa": "/ˈpɑːspɔːt/",
        "vi": "hộ chiếu"
      },
      {
        "w": "baby",
        "ipa": "/ˈbeɪbi/",
        "vi": "em bé"
      },
      {
        "w": "problem",
        "ipa": "/ˈprɒbləm/",
        "vi": "vấn đề"
      },
      {
        "w": "bread",
        "ipa": "/bred/",
        "vi": "bánh mì"
      }
    ],
    "sentences": [
      "Pack your bags and bring your passport.",
      "Pamela has got a new job.",
      "Paul has got big problems with his business."
    ]
  },
  {
    "id": 12,
    "section": "A",
    "sectionName": "Sounds and spelling",
    "title": "Twenty days",
    "subtitle": "Luyện tập phụ âm /t/ (bật hơi) và /d/ (rung thanh)",
    "sound": "/t/ and /d/",
    "rule": "/t/ đầu lưỡi chạm nướu trên bật khí không rung. /d/ đầu lưỡi chạm nướu trên nhưng rung mạnh cổ họng.",
    "words": [
      {
        "w": "twenty",
        "ipa": "/ˈtwenti/",
        "vi": "hai mươi"
      },
      {
        "w": "day",
        "ipa": "/deɪ/",
        "vi": "ngày"
      },
      {
        "w": "ticket",
        "ipa": "/ˈtɪkɪt/",
        "vi": "vé"
      },
      {
        "w": "dinner",
        "ipa": "/ˈdɪnə/",
        "vi": "bữa tối"
      },
      {
        "w": "table",
        "ipa": "/ˈteɪbl/",
        "vi": "cái bàn"
      },
      {
        "w": "door",
        "ipa": "/dɔː/",
        "vi": "cửa"
      }
    ],
    "sentences": [
      "We stayed for twenty days in the city.",
      "Do you want to eat dinner at two or ten?",
      "Take the train to the town down there."
    ]
  },
  {
    "id": 13,
    "section": "A",
    "sectionName": "Sounds and spelling",
    "title": "Cats and dogs",
    "subtitle": "Luyện tập phụ âm /k/ (bật cuống) và /g/ (rung cuống)",
    "sound": "/k/ and /g/",
    "rule": "/k/ cuống lưỡi chạm ngạc mềm bật hơi (cat, key). /g/ cuống lưỡi chạm ngạc mềm nhưng rung thanh quản (go, dog, bag).",
    "words": [
      {
        "w": "cat",
        "ipa": "/kæt/",
        "vi": "con mèo"
      },
      {
        "w": "dog",
        "ipa": "/dɒɡ/",
        "vi": "con chó"
      },
      {
        "w": "kitchen",
        "ipa": "/ˈkɪtʃɪn/",
        "vi": "nhà bếp"
      },
      {
        "w": "garden",
        "ipa": "/ˈɡɑːdn/",
        "vi": "khu vườn"
      },
      {
        "w": "coffee",
        "ipa": "/ˈkɒfi/",
        "vi": "cà phê"
      },
      {
        "w": "green",
        "ipa": "/ɡriːn/",
        "vi": "màu xanh"
      }
    ],
    "sentences": [
      "Cats and dogs are in the green garden.",
      "Can I get a cup of black coffee, please?",
      "The girl got a big bag of sugar."
    ]
  },
  {
    "id": 14,
    "section": "A",
    "sectionName": "Sounds and spelling",
    "title": "November the first",
    "subtitle": "Luyện tập phụ âm /f/ (gió nhẹ) và /v/ (rung môi răng)",
    "sound": "/f/ and /v/",
    "rule": "Răng cửa trên chạm nhẹ môi dưới. /f/ đẩy luồng hơi ma sát (không rung). /v/ rung mạnh dây thanh tạo âm 'vvv'.",
    "words": [
      {
        "w": "first",
        "ipa": "/fɜːst/",
        "vi": "đầu tiên"
      },
      {
        "w": "November",
        "ipa": "/nəʊˈvembə/",
        "vi": "tháng Mười Một"
      },
      {
        "w": "five",
        "ipa": "/faɪv/",
        "vi": "số năm"
      },
      {
        "w": "very",
        "ipa": "/ˈveri/",
        "vi": "rất"
      },
      {
        "w": "photo",
        "ipa": "/ˈfəʊtəʊ/",
        "vi": "bức ảnh"
      },
      {
        "w": "travel",
        "ipa": "/ˈtrævl/",
        "vi": "du lịch"
      }
    ],
    "sentences": [
      "We leave on the first of November at five.",
      "Victor has a very fine view from the office.",
      "I travel with five friends every year."
    ]
  },
  {
    "id": 15,
    "section": "A",
    "sectionName": "Sounds and spelling",
    "title": "Both together",
    "subtitle": "Luyện tập cặp âm /θ/ (th thổi hơi) và /ð/ (th có rung)",
    "sound": "/θ/ and /ð/",
    "rule": "Đặt đầu lưỡi giữa 2 hàm răng! /θ/ thổi hơi nhẹ không rung (think, thanks, three). /ð/ rung mạnh thanh quản (this, that, brother, with).",
    "words": [
      {
        "w": "both",
        "ipa": "/bəʊθ/",
        "vi": "cả hai"
      },
      {
        "w": "together",
        "ipa": "/təˈɡeðə/",
        "vi": "cùng nhau"
      },
      {
        "w": "think",
        "ipa": "/θɪŋk/",
        "vi": "suy nghĩ"
      },
      {
        "w": "brother",
        "ipa": "/ˈbrʌðə/",
        "vi": "anh em trai"
      },
      {
        "w": "thirty",
        "ipa": "/ˈθɜːti/",
        "vi": "ba mươi"
      },
      {
        "w": "weather",
        "ipa": "/ˈweðə/",
        "vi": "thời tiết"
      }
    ],
    "sentences": [
      "Both my father and mother work together.",
      "I think thirty-three degrees is too hot.",
      "Can I have one of those with milk, please?"
    ]
  },
  {
    "id": 16,
    "section": "A",
    "sectionName": "Sounds and spelling",
    "title": "It's the wrong size, isn't it?",
    "subtitle": "Luyện tập phụ âm /s/ (xì răng) và /z/ (tiếng ong kêu)",
    "sound": "/s/ and /z/",
    "rule": "Khép 2 hàm răng. /s/ xì hơi gió mạnh (size, see, bus). /z/ rung mạnh dây thanh tạo âm rè rè (zoo, easy, rose, eyes).",
    "words": [
      {
        "w": "size",
        "ipa": "/saɪz/",
        "vi": "kích cỡ"
      },
      {
        "w": "wrong",
        "ipa": "/rɒŋ/",
        "vi": "sai"
      },
      {
        "w": "music",
        "ipa": "/ˈmjuːzɪk/",
        "vi": "âm nhạc"
      },
      {
        "w": "sister",
        "ipa": "/ˈsɪstə/",
        "vi": "chị em gái"
      },
      {
        "w": "easy",
        "ipa": "/ˈiːzi/",
        "vi": "dễ dàng"
      },
      {
        "w": "always",
        "ipa": "/ˈɔːlweɪz/",
        "vi": "luôn luôn"
      }
    ],
    "sentences": [
      "It is the wrong size, isn't it?",
      "Susan listens to music at six o'clock.",
      "These roses are easy to smell."
    ]
  },
  {
    "id": 17,
    "section": "A",
    "sectionName": "Sounds and spelling",
    "title": "Fresh fish, usually",
    "subtitle": "Luyện tập phụ âm /ʃ/ (chu môi xuỵt) và /ʒ/ (s nặng có rung)",
    "sound": "/ʃ/ and /ʒ/",
    "rule": "Chu tròn môi ra phía trước! /ʃ/ thổi hơi 'xuỵt' (fish, shop, special). /ʒ/ rung thanh quản (television, usually, decision, casual).",
    "words": [
      {
        "w": "fresh",
        "ipa": "/freʃ/",
        "vi": "tươi ngon"
      },
      {
        "w": "fish",
        "ipa": "/fɪʃ/",
        "vi": "con cá"
      },
      {
        "w": "usually",
        "ipa": "/ˈjuːʒuəli/",
        "vi": "thường xuyên"
      },
      {
        "w": "television",
        "ipa": "/ˈtelɪvɪʒn/",
        "vi": "ti vi"
      },
      {
        "w": "station",
        "ipa": "/ˈsteɪʃn/",
        "vi": "nhà ga"
      },
      {
        "w": "decision",
        "ipa": "/dɪˈsɪʒn/",
        "vi": "quyết định"
      }
    ],
    "sentences": [
      "We usually eat fresh fish on Tuesday.",
      "She watches television in the fashion shop.",
      "It was a casual decision to wash the car."
    ]
  },
  {
    "id": 18,
    "section": "A",
    "sectionName": "Sounds and spelling",
    "title": "Chips and juice",
    "subtitle": "Luyện tập phụ âm /tʃ/ (ch) và /dʒ/ (j/g)",
    "sound": "/tʃ/ and /dʒ/",
    "rule": "Chu môi bật mạnh khí. /tʃ/ không rung thanh quản (chips, chair, much). /dʒ/ rung mạnh thanh quản (juice, jump, job, orange).",
    "words": [
      {
        "w": "chip",
        "ipa": "/tʃɪp/",
        "vi": "khoai chiên"
      },
      {
        "w": "juice",
        "ipa": "/dʒuːs/",
        "vi": "nước ép"
      },
      {
        "w": "cheese",
        "ipa": "/tʃiːz/",
        "vi": "phô mai"
      },
      {
        "w": "orange",
        "ipa": "/ˈɒrɪndʒ/",
        "vi": "quả cam"
      },
      {
        "w": "kitchen",
        "ipa": "/ˈkɪtʃɪn/",
        "vi": "nhà bếp"
      },
      {
        "w": "manager",
        "ipa": "/ˈmænɪdʒə/",
        "vi": "quản lý"
      }
    ],
    "sentences": [
      "Would you like some chips and orange juice?",
      "Charles has got a new job as manager.",
      "Check the kitchen for cheese and chocolate."
    ]
  },
  {
    "id": 19,
    "section": "A",
    "sectionName": "Sounds and spelling",
    "title": "My hungry uncle",
    "subtitle": "Luyện tập các âm mũi /m/, /n/ và /ŋ/",
    "sound": "/m/, /n/ and /ŋ/",
    "rule": "Cả 3 âm đều thoát khí qua mũi: /m/ khép môi (my, summer); /n/ lưỡi chạm nướu trên (no, dinner); /ŋ/ cuống lưỡi chạm ngạc mềm (hungry, sing, song, english).",
    "words": [
      {
        "w": "uncle",
        "ipa": "/ˈʌŋkl/",
        "vi": "chú, bác"
      },
      {
        "w": "hungry",
        "ipa": "/ˈhʌŋɡri/",
        "vi": "đói bụng"
      },
      {
        "w": "morning",
        "ipa": "/ˈmɔːnɪŋ/",
        "vi": "buổi sáng"
      },
      {
        "w": "money",
        "ipa": "/ˈmʌni/",
        "vi": "tiền bạc"
      },
      {
        "w": "English",
        "ipa": "/ˈɪŋɡlɪʃ/",
        "vi": "tiếng Anh"
      },
      {
        "w": "ring",
        "ipa": "/rɪŋ/",
        "vi": "chiếc nhẫn"
      }
    ],
    "sentences": [
      "My hungry uncle is learning English.",
      "Good morning, nine men are singing a song.",
      "The bank opens in the morning on Monday."
    ]
  },
  {
    "id": 20,
    "section": "A",
    "sectionName": "Sounds and spelling",
    "title": "How many hours?",
    "subtitle": "Luyện tập phụ âm /h/ và các từ có âm 'h' câm",
    "sound": "/h/ and silent h",
    "rule": "/h/ đẩy hơi nhẹ từ cổ họng (hat, hotel, happy). Chú ý các từ 'h' CÂM: hour, honest, honour, heir.",
    "words": [
      {
        "w": "how",
        "ipa": "/haʊ/",
        "vi": "thế nào"
      },
      {
        "w": "hour",
        "ipa": "/ˈaʊə/",
        "vi": "giờ đồng hồ (h câm)"
      },
      {
        "w": "hotel",
        "ipa": "/həʊˈtel/",
        "vi": "khách sạn"
      },
      {
        "w": "honest",
        "ipa": "/ˈɒnɪst/",
        "vi": "thành thật (h câm)"
      },
      {
        "w": "happy",
        "ipa": "/ˈhæpi/",
        "vi": "vui vẻ"
      },
      {
        "w": "here",
        "ipa": "/hɪə/",
        "vi": "ở đây"
      }
    ],
    "sentences": [
      "How many hours until we reach the hotel?",
      "He is an honest man with a happy family.",
      "Who has helped Harry at the hospital?"
    ]
  },
  {
    "id": 21,
    "section": "A",
    "sectionName": "Sounds and spelling",
    "title": "That's life!",
    "subtitle": "Luyện tập phụ âm /l/ (Clear l và Dark l)",
    "sound": "/l/",
    "rule": "Clear l (ở đầu từ): lưỡi chạm nướu trên (life, leg, look). Dark l (ở cuối từ): thân lưỡi hơi cong nâng lên tạo âm 'ồ' nhẹ (all, well, milk, people).",
    "words": [
      {
        "w": "life",
        "ipa": "/laɪf/",
        "vi": "cuộc sống"
      },
      {
        "w": "light",
        "ipa": "/laɪt/",
        "vi": "ánh sáng"
      },
      {
        "w": "look",
        "ipa": "/lʊk/",
        "vi": "nhìn"
      },
      {
        "w": "milk",
        "ipa": "/mɪlk/",
        "vi": "sữa"
      },
      {
        "w": "table",
        "ipa": "/ˈteɪbl/",
        "vi": "cái bàn"
      },
      {
        "w": "people",
        "ipa": "/ˈpiːpl/",
        "vi": "con người"
      }
    ],
    "sentences": [
      "That is life! Look at the bright light.",
      "All the people like cold milk on the table.",
      "Lucy lives in a little village."
    ]
  },
  {
    "id": 22,
    "section": "A",
    "sectionName": "Sounds and spelling",
    "title": "What terrible weather!",
    "subtitle": "Luyện tập phụ âm /r/ trong tiếng Anh",
    "sound": "/r/",
    "rule": "Uốn cong đầu lưỡi về phía sau vòm họng nhưng KHÔNG chạm vòm họng, môi hơi chu nhẹ (red, right, rain, road).",
    "words": [
      {
        "w": "terrible",
        "ipa": "/ˈterəbl/",
        "vi": "kinh khủng"
      },
      {
        "w": "weather",
        "ipa": "/ˈweðə/",
        "vi": "thời tiết"
      },
      {
        "w": "right",
        "ipa": "/raɪt/",
        "vi": "đúng, bên phải"
      },
      {
        "w": "rain",
        "ipa": "/reɪn/",
        "vi": "mưa"
      },
      {
        "w": "road",
        "ipa": "/rəʊd/",
        "vi": "con đường"
      },
      {
        "w": "sorry",
        "ipa": "/ˈsɒri/",
        "vi": "xin lỗi"
      }
    ],
    "sentences": [
      "What terrible rainy weather on the road!",
      "Turn right around the round garden.",
      "Robert is ready to ride his red bike."
    ]
  },
  {
    "id": 23,
    "section": "A",
    "sectionName": "Sounds and spelling",
    "title": "What's the news?",
    "subtitle": "Luyện tập bán nguyên âm /w/ và /j/",
    "sound": "/w/ and /j/",
    "rule": "/w/ chu môi tròn như huýt sáo rồi mở ra (what, water, week). /j/ nâng thân lưỡi như chuẩn bị nói 'i' rồi mở sang âm kế tiếp (yes, you, news, year).",
    "words": [
      {
        "w": "news",
        "ipa": "/njuːz/",
        "vi": "tin tức"
      },
      {
        "w": "water",
        "ipa": "/ˈwɔːtə/",
        "vi": "nước"
      },
      {
        "w": "year",
        "ipa": "/jɪə/",
        "vi": "năm"
      },
      {
        "w": "window",
        "ipa": "/ˈwɪndəʊ/",
        "vi": "cửa sổ"
      },
      {
        "w": "young",
        "ipa": "/jʌŋ/",
        "vi": "trẻ tuổi"
      },
      {
        "w": "wait",
        "ipa": "/weɪt/",
        "vi": "chờ đợi"
      }
    ],
    "sentences": [
      "What is the new news on Wednesday?",
      "Yes, you can wait for a year.",
      "We walked twenty miles around the west."
    ]
  },
  {
    "id": 24,
    "section": "A",
    "sectionName": "Sounds and spelling",
    "title": "Sunglasses or umbrella?",
    "subtitle": "Cụm phụ âm ở giữa từ (Consonant groups in the middle)",
    "sound": "Consonant groups in middle",
    "rule": "Khi hai hoặc nhiều phụ âm đi liền nhau ở giữa từ, hãy phát âm trọn vẹn từng âm mà không chèn nguyên âm đệm: sun-glasses, um-brella.",
    "words": [
      {
        "w": "sunglasses",
        "ipa": "/ˈsʌnɡlɑːsɪz/",
        "vi": "kính râm"
      },
      {
        "w": "umbrella",
        "ipa": "/ʌmˈbrelə/",
        "vi": "chiếc ô"
      },
      {
        "w": "subway",
        "ipa": "/ˈsʌbweɪ/",
        "vi": "tàu điện ngầm"
      },
      {
        "w": "passport",
        "ipa": "/ˈpɑːspɔːt/",
        "vi": "hộ chiếu"
      },
      {
        "w": "postcard",
        "ipa": "/ˈpəʊstkɑːd/",
        "vi": "bưu thiếp"
      }
    ],
    "sentences": [
      "Do I need sunglasses or an umbrella today?",
      "He showed his passport at the subway station.",
      "Send a postcard from the airport."
    ]
  },
  {
    "id": 25,
    "section": "A",
    "sectionName": "Sounds and spelling",
    "title": "Train in the rain",
    "subtitle": "Cụm phụ âm ở đầu từ (Consonant groups at the beginning)",
    "sound": "Consonant groups at start",
    "rule": "Phát âm lướt nhanh các cụm phụ âm đầu từ như /tr/, /pr/, /pl/, /str/, /sp/: train, street, spring, place, speak.",
    "words": [
      {
        "w": "train",
        "ipa": "/treɪn/",
        "vi": "xe lửa"
      },
      {
        "w": "street",
        "ipa": "/striːt/",
        "vi": "con phố"
      },
      {
        "w": "spring",
        "ipa": "/sprɪŋ/",
        "vi": "mùa xuân"
      },
      {
        "w": "plane",
        "ipa": "/pleɪn/",
        "vi": "máy bay"
      },
      {
        "w": "speak",
        "ipa": "/spiːk/",
        "vi": "nói chuyện"
      }
    ],
    "sentences": [
      "The train in the rain is on the main track.",
      "Cross the street straight to the train station.",
      "Please speak slowly to the strong traveler."
    ]
  },
  {
    "id": 26,
    "section": "A",
    "sectionName": "Sounds and spelling",
    "title": "Pink and orange",
    "subtitle": "Cụm phụ âm ở cuối từ (Consonant groups at the end)",
    "sound": "Consonant groups at end",
    "rule": "Đừng nuốt âm đuôi! Luôn phát âm rõ các cụm phụ âm cuối như /ŋk/, /ndʒ/, /st/, /kt/: pink, orange, fast, act, asked.",
    "words": [
      {
        "w": "pink",
        "ipa": "/pɪŋk/",
        "vi": "màu hồng"
      },
      {
        "w": "orange",
        "ipa": "/ˈɒrɪndʒ/",
        "vi": "quả cam"
      },
      {
        "w": "fast",
        "ipa": "/fɑːst/",
        "vi": "nhanh"
      },
      {
        "w": "desk",
        "ipa": "/desk/",
        "vi": "bàn làm việc"
      },
      {
        "w": "hand",
        "ipa": "/hænd/",
        "vi": "bàn tay"
      }
    ],
    "sentences": [
      "A pink bag and an orange jacket.",
      "Hold my hand and walk fast past the desk.",
      "She asked for milk and a box of chocolates."
    ]
  },
  {
    "id": 27,
    "section": "A",
    "sectionName": "Sounds and spelling",
    "title": "Last week",
    "subtitle": "Cụm phụ âm nối tiếp giữa các từ (Across words)",
    "sound": "Consonants across words",
    "rule": "Khi từ trước kết thúc bằng phụ âm và từ sau bắt đầu bằng phụ âm, phát âm mượt mà nối tiếp không gián đoạn: last week, next month, good morning.",
    "words": [
      {
        "w": "last week",
        "ipa": "/lɑːst wiːk/",
        "vi": "tuần trước"
      },
      {
        "w": "next door",
        "ipa": "/nekst dɔː/",
        "vi": "nhà bên cạnh"
      },
      {
        "w": "best friend",
        "ipa": "/best frend/",
        "vi": "bạn thân nhất"
      },
      {
        "w": "cold night",
        "ipa": "/kəʊld naɪt/",
        "vi": "đêm lạnh"
      }
    ],
    "sentences": [
      "Last week we walked next door.",
      "My best friend came on a cold night.",
      "Next month she will start a great project."
    ]
  },
  {
    "id": 28,
    "section": "B",
    "sectionName": "Syllables and words",
    "title": "One house, two houses",
    "subtitle": "Đếm âm tiết trong từ (Counting Syllables)",
    "sound": "Syllables",
    "rule": "Mỗi nguyên âm được phát âm tạo thành một âm tiết. Thêm đuôi số nhiều -es đôi khi làm tăng số âm tiết: house (1) -> houses (2), box (1) -> boxes (2).",
    "words": [
      {
        "w": "house",
        "ipa": "/haʊs/",
        "vi": "ngôi nhà (1 âm tiết)"
      },
      {
        "w": "houses",
        "ipa": "/ˈhaʊzɪz/",
        "vi": "những ngôi nhà (2 âm tiết)"
      },
      {
        "w": "family",
        "ipa": "/ˈfæməli/",
        "vi": "gia đình (3 âm tiết)"
      },
      {
        "w": "computer",
        "ipa": "/kəmˈpjuːtə/",
        "vi": "máy tính (3 âm tiết)"
      }
    ],
    "sentences": [
      "One house, two houses down the road.",
      "Three boxes are on the big table.",
      "Her family bought a new computer."
    ]
  },
  {
    "id": 29,
    "section": "B",
    "sectionName": "Syllables and words",
    "title": "Wait a minute - where's the waiter?",
    "subtitle": "Nguyên âm mạnh và nguyên âm yếu (Strong and weak vowels)",
    "sound": "Strong vs Weak vowels",
    "rule": "Trong các âm tiết không nhấn trọng âm, nguyên âm thường biến thành âm yếu schwa /ə/ hoặc /ɪ/: wa-ter, wai-ter, mi-nute.",
    "words": [
      {
        "w": "waiter",
        "ipa": "/ˈweɪtə/",
        "vi": "người phục vụ"
      },
      {
        "w": "minute",
        "ipa": "/ˈmɪnɪt/",
        "vi": "phút"
      },
      {
        "w": "banana",
        "ipa": "/bəˈnɑːnə/",
        "vi": "quả chuối"
      },
      {
        "w": "chocolate",
        "ipa": "/ˈtʃɒklət/",
        "vi": "sô cô la"
      }
    ],
    "sentences": [
      "Wait a minute - where is the waiter?",
      "She bought bananas and chocolates for breakfast.",
      "The doctor gave a quick answer."
    ]
  },
  {
    "id": 30,
    "section": "B",
    "sectionName": "Syllables and words",
    "title": "Single or return?",
    "subtitle": "Trọng âm của từ 2 âm tiết (Stress in two-syllable words)",
    "sound": "Two-syllable stress",
    "rule": "Hầu hết danh từ và tính từ 2 âm tiết nhấn âm 1 (SIN-gle, WA-ter, DOC-tor). Hầu hết động từ 2 âm tiết nhấn âm 2 (re-TURN, a-RRIVE, be-GIN).",
    "words": [
      {
        "w": "single",
        "ipa": "/ˈsɪŋɡl/",
        "vi": "vé một chiều (nhấn âm 1)"
      },
      {
        "w": "return",
        "ipa": "/rɪˈtɜːn/",
        "vi": "vé khứ hồi (nhấn âm 2)"
      },
      {
        "w": "hotel",
        "ipa": "/həʊˈtel/",
        "vi": "khách sạn (nhấn âm 2)"
      },
      {
        "w": "music",
        "ipa": "/ˈmjuːzɪk/",
        "vi": "âm nhạc (nhấn âm 1)"
      }
    ],
    "sentences": [
      "A single or return ticket to London?",
      "The music began when they arrived at the hotel.",
      "Repeat the second question, please."
    ]
  },
  {
    "id": 31,
    "section": "B",
    "sectionName": "Syllables and words",
    "title": "Begin at the beginning",
    "subtitle": "Trọng âm ở từ có 3 âm tiết trở lên",
    "sound": "Stress in longer words",
    "rule": "Từ kết thúc bằng đuôi -tion, -sion luôn nhấn vào âm tiết ngay TRƯỚC nó: in-for-MA-tion, de-CI-sion. Đuôi -ic nhấn trước: pho-to-GRA-phic.",
    "words": [
      {
        "w": "beginning",
        "ipa": "/bɪˈɡɪnɪŋ/",
        "vi": "phần bắt đầu"
      },
      {
        "w": "information",
        "ipa": "/ˌɪnfəˈmeɪʃn/",
        "vi": "thông tin"
      },
      {
        "w": "expensive",
        "ipa": "/ɪkˈspensɪv/",
        "vi": "đắt đỏ"
      },
      {
        "w": "university",
        "ipa": "/ˌjuːnɪˈvɜːsəti/",
        "vi": "trường đại học"
      }
    ],
    "sentences": [
      "Begin at the beginning of the lesson.",
      "Can you give me more information about the university?",
      "This photograph is very expensive."
    ]
  },
  {
    "id": 32,
    "section": "B",
    "sectionName": "Syllables and words",
    "title": "Where's my checklist?",
    "subtitle": "Trọng âm trong từ ghép (Compound words)",
    "sound": "Stress in compound words",
    "rule": "Hầu hết danh từ ghép nhấn mạnh vào TỪ ĐẦU TIÊN: CHECK-list, POST-card, BUS stop, AIR-port.",
    "words": [
      {
        "w": "checklist",
        "ipa": "/ˈtʃeklɪst/",
        "vi": "danh sách kiểm tra"
      },
      {
        "w": "postcard",
        "ipa": "/ˈpəʊstkɑːd/",
        "vi": "bưu thiếp"
      },
      {
        "w": "airport",
        "ipa": "/ˈeəpɔːt/",
        "vi": "sân bay"
      },
      {
        "w": "bus stop",
        "ipa": "/ˈbʌs stɒp/",
        "vi": "trạm xe buýt"
      }
    ],
    "sentences": [
      "Where is my checklist for the airport?",
      "Wait at the bus stop and write a postcard.",
      "He left his sunglasses in the bedroom."
    ]
  },
  {
    "id": 33,
    "section": "C",
    "sectionName": "Phrases, sentences & grammar",
    "title": "Phrases and pauses",
    "subtitle": "Ngắt nghỉ đúng nhịp khi đọc câu dài (Reading aloud)",
    "sound": "Pauses & rhythm",
    "rule": "Khi nói hoặc đọc to một câu dài, ngắt câu thành các cụm từ có nghĩa (sense groups) để người nghe hiểu rõ ràng và tự nhiên.",
    "words": [
      {
        "w": "pause",
        "ipa": "/pɔːz/",
        "vi": "ngắt nghỉ"
      },
      {
        "w": "phrase",
        "ipa": "/freɪz/",
        "vi": "cụm từ"
      },
      {
        "w": "sentence",
        "ipa": "/ˈsentəns/",
        "vi": "câu hoàn chỉnh"
      }
    ],
    "sentences": [
      "In the morning, I like to read the newspaper and drink tea.",
      "If you have any questions, please raise your hand.",
      "When the bell rang, all students left the room."
    ]
  },
  {
    "id": 34,
    "section": "C",
    "sectionName": "Phrases, sentences & grammar",
    "title": "Speak it, write it, read it",
    "subtitle": "Nối âm Phụ âm sang Nguyên âm (Consonant to Vowel linking)",
    "sound": "Linking 1: Consonant + Vowel",
    "rule": "Khi một từ kết thúc bằng phụ âm và từ tiếp theo bắt đầu bằng nguyên âm, nối liền phụ âm sang: speak_it, write_it, read_it, an_apple, hold_on.",
    "words": [
      {
        "w": "speak it",
        "ipa": "/ˈspiːk ɪt/",
        "vi": "nói nó"
      },
      {
        "w": "hold on",
        "ipa": "/həʊld ɒn/",
        "vi": "chờ một chút"
      },
      {
        "w": "an apple",
        "ipa": "/ən ˈæpl/",
        "vi": "một quả táo"
      }
    ],
    "sentences": [
      "Speak it, write it, and read it aloud.",
      "Hold on for a moment, take an apple.",
      "Turn it off and put it on the desk."
    ]
  },
  {
    "id": 35,
    "section": "C",
    "sectionName": "Phrases, sentences & grammar",
    "title": "Me and you, you and me",
    "subtitle": "Nối âm Nguyên âm sang Nguyên âm (/w/ and /j/ linking)",
    "sound": "Linking 2: Vowel + Vowel",
    "rule": "Khi từ trước kết thúc bằng nguyên âm và từ sau bắt đầu bằng nguyên âm: chèn âm /j/ nhẹ nếu sau /iː, eɪ, aɪ/ (me_j_and you); chèn /w/ nhẹ nếu sau /uː, əʊ, aʊ/ (you_w_and me, go_w_on).",
    "words": [
      {
        "w": "me and you",
        "ipa": "/miː j ənd juː/",
        "vi": "tôi và bạn"
      },
      {
        "w": "go on",
        "ipa": "/ɡəʊ w ɒn/",
        "vi": "tiếp tục đi"
      },
      {
        "w": "see it",
        "ipa": "/siː j ɪt/",
        "vi": "nhìn thấy nó"
      }
    ],
    "sentences": [
      "Me and you, you and me together.",
      "Please go on and do it now.",
      "Can you see it in the blue ocean?"
    ]
  },
  {
    "id": 36,
    "section": "C",
    "sectionName": "Phrases, sentences & grammar",
    "title": "Take me to the show, Jo",
    "subtitle": "Nhịp điệu tiếng Anh (Rhythm & Beat)",
    "sound": "Sentence rhythm",
    "rule": "Tiếng Anh là ngôn ngữ có trọng âm nhịp điệu (Stress-timed). Chỉ các từ mang nội dung chính (Content words) được nhấn, các từ ngữ pháp (chức năng) được đọc lướt nhanh.",
    "words": [
      {
        "w": "rhythm",
        "ipa": "/ˈrɪðəm/",
        "vi": "nhịp điệu"
      },
      {
        "w": "beat",
        "ipa": "/biːt/",
        "vi": "nhịp đập"
      }
    ],
    "sentences": [
      "Take me to the show, Jo.",
      "Cats chase mice in the big house.",
      "Give me the book on the table."
    ]
  },
  {
    "id": 37,
    "section": "C",
    "sectionName": "Phrases, sentences & grammar",
    "title": "Hey, wait for me!",
    "subtitle": "Dạng mạnh và dạng yếu: Đại từ (Strong and weak pronouns)",
    "sound": "Weak forms 1: Pronouns",
    "rule": "Các đại từ như you, he, she, we, them khi đứng giữa câu thường đọc ở dạng yếu (nhẹ, schwa): /jə/, /hɪ/, /wɪ/, /ðəm/. Chỉ đọc mạnh khi nhấn mạnh hoặc đứng cuối câu.",
    "words": [
      {
        "w": "wait for me",
        "ipa": "/weɪt fə miː/",
        "vi": "chờ tôi với"
      },
      {
        "w": "tell them",
        "ipa": "/tel ðəm/",
        "vi": "bảo họ"
      }
    ],
    "sentences": [
      "Hey, wait for me at the door!",
      "Can you tell them that we are ready?",
      "Give him the keys when you see him."
    ]
  },
  {
    "id": 38,
    "section": "C",
    "sectionName": "Phrases, sentences & grammar",
    "title": "And what's his name?",
    "subtitle": "Dạng yếu: Từ sở hữu, liên từ, giới từ",
    "sound": "Weak forms 2: Prepositions",
    "rule": "Các từ 'and' (/ənd/ hoặc /n/), 'to' (/tə/), 'for' (/fə/), 'from' (/frəm/), 'of' (/əv/) hầu như luôn được đọc ở dạng yếu lướt nhanh.",
    "words": [
      {
        "w": "bread and butter",
        "ipa": "/bred n ˈbʌtə/",
        "vi": "bánh mì bơ"
      },
      {
        "w": "cup of tea",
        "ipa": "/kʌp əv tiː/",
        "vi": "tách trà"
      }
    ],
    "sentences": [
      "And what is his name and his address?",
      "A cup of tea and a piece of cake for breakfast.",
      "He came from London to visit."
    ]
  },
  {
    "id": 39,
    "section": "C",
    "sectionName": "Phrases, sentences & grammar",
    "title": "There's a spider",
    "subtitle": "Dạng yếu: Mạo từ (a, an, the) và 'there'",
    "sound": "Weak forms 3: Articles & there",
    "rule": "'a' đọc là /ə/, 'an' đọc là /ən/, 'the' đọc là /ðə/ trước phụ âm và /ðiː/ trước nguyên âm, 'there is' đọc là /ðəz/.",
    "words": [
      {
        "w": "a spider",
        "ipa": "/ə ˈspaɪdə/",
        "vi": "một con nhện"
      },
      {
        "w": "the apple",
        "ipa": "/ði ˈæpl/",
        "vi": "quả táo"
      },
      {
        "w": "there's",
        "ipa": "/ðəz/",
        "vi": "có một"
      }
    ],
    "sentences": [
      "There is a spider under the table!",
      "The apple is bigger than the orange.",
      "There are two dogs in the garden."
    ]
  },
  {
    "id": 40,
    "section": "C",
    "sectionName": "Phrases, sentences & grammar",
    "title": "Who was that?",
    "subtitle": "Dạng yếu: Trợ động từ (Auxiliary verbs)",
    "sound": "Weak forms 4: Auxiliaries",
    "rule": "Các trợ động từ như was (/wəz/), were (/wə/), can (/kən/), do (/də/), have (/həv/) đọc lướt ở dạng yếu trong câu khẳng định và câu hỏi.",
    "words": [
      {
        "w": "I can do it",
        "ipa": "/aɪ kən duː ɪt/",
        "vi": "tôi có thể làm được"
      },
      {
        "w": "who was that",
        "ipa": "/huː wəz ðæt/",
        "vi": "đó là ai"
      }
    ],
    "sentences": [
      "Who was that person at the door?",
      "Yes, I can swim very well.",
      "Where were you when the phone rang?"
    ]
  },
  {
    "id": 41,
    "section": "C",
    "sectionName": "Phrases, sentences & grammar",
    "title": "They're here!",
    "subtitle": "Dạng viết tắt & rút gọn (Contractions)",
    "sound": "Contractions",
    "rule": "Trong giao tiếp, người bản xứ luôn rút gọn: I'm, you're, he's, they're, don't, won't, isn't, didn't. Tập phát âm liền mạch dạng rút gọn.",
    "words": [
      {
        "w": "they're",
        "ipa": "/ðeə/",
        "vi": "họ là"
      },
      {
        "w": "I'm",
        "ipa": "/aɪm/",
        "vi": "tôi là"
      },
      {
        "w": "don't",
        "ipa": "/dəʊnt/",
        "vi": "không"
      }
    ],
    "sentences": [
      "They are here! Open the door.",
      "I am sorry, I do not understand.",
      "She is not at home right now."
    ]
  },
  {
    "id": 42,
    "section": "C",
    "sectionName": "Phrases, sentences & grammar",
    "title": "It's George's birthday",
    "subtitle": "QUY TẮC VÀNG: Cách phát âm đuôi -s / -es",
    "sound": "Pronouncing -s endings",
    "rule": "Đuôi -s/-es có 3 cách đọc: (1) /ɪz/ (thêm âm tiết) sau /s, z, ʃ, ʒ, tʃ, dʒ/ (boxes, watches, finishes, George's); (2) /s/ sau âm vô thanh /p, t, k, f, θ/ (stops, cats, books, laughs); (3) /z/ sau âm hữu thanh và nguyên âm (days, goes, dogs, friends).",
    "words": [
      {
        "w": "boxes",
        "ipa": "/ˈbɒksɪz/",
        "vi": "những chiếc hộp (/ɪz/)"
      },
      {
        "w": "finishes",
        "ipa": "/ˈfɪnɪʃɪz/",
        "vi": "kết thúc (/ɪz/)"
      },
      {
        "w": "George's",
        "ipa": "/ˈdʒɔːdʒɪz/",
        "vi": "của George (/ɪz/)"
      },
      {
        "w": "cats",
        "ipa": "/kæts/",
        "vi": "những con mèo (/s/)"
      },
      {
        "w": "books",
        "ipa": "/bʊks/",
        "vi": "những cuốn sách (/s/)"
      },
      {
        "w": "days",
        "ipa": "/deɪz/",
        "vi": "những ngày (/z/)"
      },
      {
        "w": "dogs",
        "ipa": "/dɒɡz/",
        "vi": "những con chó (/z/)"
      }
    ],
    "sentences": [
      "It is George's birthday today.",
      "She watches television and finishes her homework.",
      "He opens the boxes and puts the books on the desks."
    ]
  },
  {
    "id": 43,
    "section": "C",
    "sectionName": "Phrases, sentences & grammar",
    "title": "I looked everywhere",
    "subtitle": "QUY TẮC VÀNG: Cách phát âm đuôi thì quá khứ -ed",
    "sound": "Pronouncing past tenses -ed",
    "rule": "Đuôi -ed có 3 cách đọc: (1) /ɪd/ (thêm âm tiết) CHỈ sau /t/ và /d/ (waited, needed, hated, decided); (2) /t/ sau âm vô thanh /p, k, f, s, ʃ, tʃ/ (looked, stopped, washed, watched, laughed); (3) /d/ sau âm hữu thanh và nguyên âm (lived, played, opened, explained, called).",
    "words": [
      {
        "w": "waited",
        "ipa": "/ˈweɪtɪd/",
        "vi": "đã đợi (/ɪd/)"
      },
      {
        "w": "needed",
        "ipa": "/ˈniːdɪd/",
        "vi": "đã cần (/ɪd/)"
      },
      {
        "w": "looked",
        "ipa": "/lʊkt/",
        "vi": "đã nhìn (/t/)"
      },
      {
        "w": "watched",
        "ipa": "/wɒtʃt/",
        "vi": "đã xem (/t/)"
      },
      {
        "w": "stopped",
        "ipa": "/stɒpt/",
        "vi": "đã dừng (/t/)"
      },
      {
        "w": "lived",
        "ipa": "/lɪvd/",
        "vi": "đã sống (/d/)"
      },
      {
        "w": "played",
        "ipa": "/pleɪd/",
        "vi": "đã chơi (/d/)"
      },
      {
        "w": "explained",
        "ipa": "/ɪkˈspleɪnd/",
        "vi": "đã giải thích (/d/)"
      }
    ],
    "sentences": [
      "I looked everywhere but I could not find it.",
      "We waited for an hour in the rain.",
      "He explained the lesson and I decided to study."
    ]
  },
  {
    "id": 44,
    "section": "D",
    "sectionName": "Conversation",
    "title": "Not half past two, half past three",
    "subtitle": "Ngữ điệu nhấn mạnh thông tin mới (Intonation)",
    "sound": "Intonation for contrast",
    "rule": "Trong giao tiếp, người nói nhấn mạnh giọng vào thông tin mới hoặc thông tin sửa sai, hạ giọng ở thông tin đã biết.",
    "words": [
      {
        "w": "information",
        "ipa": "/ˌɪnfəˈmeɪʃn/",
        "vi": "thông tin"
      },
      {
        "w": "contrast",
        "ipa": "/ˈkɒntrɑːst/",
        "vi": "sự tương phản"
      }
    ],
    "sentences": [
      "Not half past two, half past three!",
      "I did not say green, I said blue.",
      "It is not Monday, it is Tuesday today."
    ]
  },
  {
    "id": 45,
    "section": "D",
    "sectionName": "Conversation",
    "title": "And suddenly ...",
    "subtitle": "Ngữ điệu khi kể chuyện lôi cuốn (Intonation in storytelling)",
    "sound": "Intonation in storytelling",
    "rule": "Lên giọng ở từ nối (And suddenly... ↑) để tạo sự hồi hộp, xuống giọng ở cuối câu khi kết thúc một hành động (↓).",
    "words": [
      {
        "w": "suddenly",
        "ipa": "/ˈsʌdənli/",
        "vi": "đột nhiên"
      },
      {
        "w": "story",
        "ipa": "/ˈstɔːri/",
        "vi": "câu chuyện"
      }
    ],
    "sentences": [
      "And suddenly... the door opened!",
      "He looked through the window and saw a shadow.",
      "Then everything was quiet again."
    ]
  },
  {
    "id": 46,
    "section": "D",
    "sectionName": "Conversation",
    "title": "Really? That's amazing!",
    "subtitle": "Ngữ điệu phản hồi thể hiện lắng nghe tích cực (Active listener)",
    "sound": "Listener responses",
    "rule": "Dùng ngữ điệu lên xuống rõ rệt để thể hiện bạn đang lắng nghe: Really? ↑ That's wonderful! ↓ Oh no! ↑",
    "words": [
      {
        "w": "really",
        "ipa": "/ˈrɪəli/",
        "vi": "thật vậy sao?"
      },
      {
        "w": "amazing",
        "ipa": "/əˈmeɪzɪŋ/",
        "vi": "tuyệt vời"
      }
    ],
    "sentences": [
      "Really? That is amazing!",
      "Oh, I see! That sounds wonderful.",
      "Did you? That is terrible news."
    ]
  },
  {
    "id": 47,
    "section": "D",
    "sectionName": "Conversation",
    "title": "I know when it is, but not where",
    "subtitle": "Nhấn mạnh các từ quan trọng trong câu đối đáp",
    "sound": "Important words 1",
    "rule": "Nhấn vào các từ để hỏi hoặc từ mang thông tin tương phản: I know WHEN it is, but not WHERE.",
    "words": [
      {
        "w": "when",
        "ipa": "/wen/",
        "vi": "khi nào"
      },
      {
        "w": "where",
        "ipa": "/weə/",
        "vi": "ở đâu"
      }
    ],
    "sentences": [
      "I know when it is, but not where.",
      "She knows who did it, but not why.",
      "I can hear you, but I cannot see you."
    ]
  },
  {
    "id": 48,
    "section": "D",
    "sectionName": "Conversation",
    "title": "Finished? I've just started!",
    "subtitle": "Ngữ điệu câu hỏi ngắn và phản hồi",
    "sound": "Important words 2",
    "rule": "Câu hỏi đảo hoặc câu hỏi một từ thường LÊN giọng ở cuối (Finished? ↑). Câu trả lời khẳng định XUỐNG giọng (I've just started. ↓).",
    "words": [
      {
        "w": "finished",
        "ipa": "/ˈfɪnɪʃt/",
        "vi": "xong chưa?"
      },
      {
        "w": "started",
        "ipa": "/ˈstɑːtɪd/",
        "vi": "đã bắt đầu"
      }
    ],
    "sentences": [
      "Finished? - No, I have just started!",
      "Ready? - Yes, let us go now.",
      "Coffee? - Thanks, that would be great."
    ]
  },
  {
    "id": 49,
    "section": "D",
    "sectionName": "Conversation",
    "title": "No, thanks, I'm just looking",
    "subtitle": "Ngữ điệu trong các cụm giao tiếp mua sắm & lịch sự",
    "sound": "Polite intonation",
    "rule": "Trong các câu lịch sự (cảm ơn, xin lỗi, từ chối nhã nhặn), dùng ngữ điệu lên xuống uyển chuyển (Fall-Rise) để biểu thị thái độ thân thiện.",
    "words": [
      {
        "w": "looking",
        "ipa": "/ˈlʊkɪŋ/",
        "vi": "đang xem"
      },
      {
        "w": "polite",
        "ipa": "/pəˈlaɪt/",
        "vi": "lịch sự"
      }
    ],
    "sentences": [
      "No, thanks, I am just looking.",
      "Could you help me, please?",
      "Excuse me, is this seat free?"
    ]
  },
  {
    "id": 50,
    "section": "D",
    "sectionName": "Conversation",
    "title": "Fine, thanks",
    "subtitle": "Ngữ điệu chào hỏi và tạm biệt trong đời sống",
    "sound": "Greetings intonation",
    "rule": "Chào hỏi thân mật: Good morning! ↑ How are you? ↓ Fine, thanks! ↑ See you later! ↓",
    "words": [
      {
        "w": "fine",
        "ipa": "/faɪn/",
        "vi": "khỏe, tốt"
      },
      {
        "w": "thanks",
        "ipa": "/θæŋks/",
        "vi": "cảm ơn"
      }
    ],
    "sentences": [
      "How are you doing? - Fine, thanks, and you?",
      "Good morning! Have a nice weekend.",
      "Goodbye, see you again tomorrow!"
    ]
  }
];
