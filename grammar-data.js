// grammar-data.js - Kho 13 Chuyên đề Ngữ pháp TOEIC toàn diện từ 02._FULL NGỮ PHÁP.docx.pdf
// Hơn 950 câu trắc nghiệm tương tác bám sát cấu trúc đề thi TOEIC

export const GRAMMAR_TOPICS = [
  {
    "id": "tenses",
    "title": "Thì trong tiếng Anh (Tenses)",
    "desc": "Hòa hợp thì, thì hiện tại, quá khứ, tương lai",
    "icon": "⏰",
    "count": 55,
    "questions": [
      {
        "id": "tenses_q1",
        "num": 1,
        "stem": "John is so intelligent = smart = clever . How many languages ---- he speak?",
        "options": {
          "A": "was",
          "B": "did",
          "C": "are",
          "D": "does"
        },
        "answer": "D",
        "explanation": "intelligent = smart = clever"
      },
      {
        "id": "tenses_q2",
        "num": 2,
        "stem": "Hurry! The train ----. We don’t want to miss it because it is the last train to New York.",
        "options": {
          "A": "had come",
          "B": "is coming",
          "C": "came",
          "D": "comes"
        },
        "answer": "B",
        "explanation": "Có từ cảm thán 'Hurry!' diễn tả hành động đang diễn ra ngay lúc nói nên dùng thì Hiện tại tiếp diễn (is coming)."
      },
      {
        "id": "tenses_q3",
        "num": 3,
        "stem": "What time ---- the next train leave?",
        "options": {
          "A": "shall",
          "B": "will",
          "C": "did",
          "D": "do"
        },
        "answer": "B",
        "explanation": "Hỏi về thời gian khởi hành của chuyến tàu kế tiếp trong tương lai; 'will' phù hợp với chủ ngữ số ít 'the next train' và động từ nguyên mẫu 'leave' (loại 'do' sai hòa hợp chủ-vị, 'did' sai thì quá khứ, 'shall' thường dùng với I/we)."
      },
      {
        "id": "tenses_q4",
        "num": 4,
        "stem": "Monica ----with her sister at the moment until she finds a flat=căn hộ in this city.",
        "options": {
          "A": "had stayed",
          "B": "stayed",
          "C": "is staying",
          "D": "stays"
        },
        "answer": "C",
        "explanation": "Cụm 'at the moment' kết hợp với tình huống tạm thời ('until she finds a flat') dùng thì Hiện tại tiếp diễn (is staying)."
      },
      {
        "id": "tenses_q5",
        "num": 5,
        "stem": "After I ---- lunch, I looked for my bag but I did not find it in the kitchen. I must have left it on the living room floor.",
        "options": {
          "A": "have had",
          "B": "has have",
          "C": "had had xảy ra trước qk",
          "D": "had"
        },
        "answer": "C",
        "explanation": "Mệnh đề 'After' diễn tả hành động xảy ra trước một hành động khác trong quá khứ ('looked') nên dùng thì Quá khứ hoàn thành (had had)."
      },
      {
        "id": "tenses_q6",
        "num": 6,
        "stem": "By the end of next year, George ----English  for about 6 years.",
        "options": {
          "A": "is learning",
          "B": "will have learned",
          "C": "will learn",
          "D": "will be learned"
        },
        "answer": "B",
        "explanation": "Cụm 'By the end of next year' (mốc hoàn thành trong tương lai) đi với 'for about 6 years' (khoảng thời gian) dùng thì Tương lai hoàn thành ở thể chủ động (will have learned)."
      },
      {
        "id": "tenses_q7",
        "num": 7,
        "stem": "The man got out of the car, ---- round to the back and opened the boot. Then he returned to his car.",
        "options": {
          "A": "walking",
          "B": "walked",
          "C": "walks",
          "D": "walk"
        },
        "answer": "B",
        "explanation": "Chuỗi hành động xảy ra liên tiếp trong quá khứ cần chia song song ở thì Quá khứ đơn: 'got out..., walked..., and opened...'."
      },
      {
        "id": "tenses_q8",
        "num": 8,
        "stem": "Tim is studying Mathematics now. But for several years his ambition ---to be an electrical engineer.",
        "options": {
          "A": "is",
          "B": "had been",
          "C": "has been",
          "D": "was"
        },
        "answer": "C",
        "explanation": "Ngữ cảnh ở hiện tại ('is studying... now') kết hợp với 'for several years' diễn tả mong muốn kéo dài từ quá khứ đến hiện tại nên dùng thì Hiện tại hoàn thành (has been)."
      },
      {
        "id": "tenses_q9",
        "num": 9,
        "stem": "Henry ---- into the restaurant when the writer was having dinner with her new colleagues = đồng nghiệp.",
        "options": {
          "A": "has gone",
          "B": "was going",
          "C": "went",
          "D": "did go"
        },
        "answer": "C",
        "explanation": "Một hành động đang diễn ra trong quá khứ ('was having dinner' - QKTD) thì có hành động khác xen vào nên hành động xen vào chia Quá khứ đơn (went)."
      },
      {
        "id": "tenses_q10",
        "num": 10,
        "stem": "She was at her best when she ---- big decisions.",
        "options": {
          "A": "is making",
          "B": "makes",
          "C": "made",
          "D": "will make"
        },
        "answer": "C",
        "explanation": "Mệnh đề chính ở Quá khứ đơn ('was') nên mệnh đề thời gian với 'when' cũng chia Quá khứ đơn (made) để hòa hợp thì trong quá khứ."
      },
      {
        "id": "tenses_q11",
        "num": 11,
        "stem": "We have scheduled for our vacation next week. We ---- it in London.",
        "options": {
          "A": "are spend",
          "B": "are going to spend",
          "C": "will spend",
          "D": "spend"
        },
        "answer": "B",
        "explanation": "Câu trước có 'have scheduled' cho thấy kỳ nghỉ đã được lên kế hoạch từ trước, nên dùng thì Tương lai gần 'be going to + V' (are going to spend)."
      },
      {
        "id": "tenses_q12",
        "num": 12,
        "stem": "Robert said he ---- the offer from a big company based in Monaco. And he did it.",
        "options": {
          "A": "would accept",
          "B": "has accept",
          "C": "accepted",
          "D": "will accept"
        },
        "answer": "A",
        "explanation": "Câu tường thuật có động từ giới thiệu ở quá khứ ('said') diễn tả dự định sẽ làm trong tương lai tính từ mốc quá khứ đó nên lùi thì 'will' thành 'would accept'."
      },
      {
        "id": "tenses_q13",
        "num": 13,
        "stem": "While I was sleeping, my mother ---- my room.",
        "options": {
          "A": "will tidy",
          "B": "tidies",
          "C": "was tidying",
          "D": "tidied"
        },
        "answer": "C",
        "explanation": "Cấu trúc 'While + QKTD, QKTD' diễn tả hai hành động cùng đang diễn ra song song tại một thời điểm trong quá khứ (was sleeping / was tidying)."
      },
      {
        "id": "tenses_q14",
        "num": 14,
        "stem": "Ask her to come to see me when she ----her annual marketing report.",
        "options": {
          "A": "will finish",
          "B": "has finished",
          "C": "is finishing",
          "D": "finished"
        },
        "answer": "B",
        "explanation": "Trong mệnh đề trạng ngữ chỉ thời gian ('when') mang nghĩa tương lai không dùng 'will'; dùng Hiện tại hoàn thành (has finished) để nhấn mạnh hành động hoàn tất trước khi hành động chính diễn ra."
      },
      {
        "id": "tenses_q15",
        "num": 15,
        "stem": "After finishing your mid-term test, you ---- a short break before starting to study again.",
        "options": {
          "A": "have taken",
          "B": "are taking",
          "C": "took",
          "D": "should take"
        },
        "answer": "D",
        "explanation": "Ngữ cảnh đưa ra lời khuyên cho việc nên làm sau khi thi xong và trước khi học tiếp nên dùng động từ khuyết thiếu 'should + V' (should take)."
      },
      {
        "id": "tenses_q16",
        "num": 16,
        "stem": "When he returned home, he found that his door ----.",
        "options": {
          "A": "would unlock",
          "B": "have unlocked",
          "C": "unlocking",
          "D": "unlocked"
        },
        "answer": "D",
        "explanation": "Các động từ chính đều ở quá khứ ('returned', 'found') nên mệnh đề phụ sau 'that' cần động từ chia ở thì quá khứ; 'unlocked' là phương án duy nhất hợp ngữ pháp và thì quá khứ (loại 'have unlocked' sai số ít và thì, 'unlocking' thiếu trợ động từ, 'would unlock' sai nghĩa)."
      },
      {
        "id": "tenses_q17",
        "num": 17,
        "stem": "Janet ----to her husband twice a week since 1998.",
        "options": {
          "A": "was writing",
          "B": "has written",
          "C": "writes",
          "D": "wrote"
        },
        "answer": "B",
        "explanation": "Có dấu hiệu 'since 1998' diễn tả hành động bắt đầu trong quá khứ và kéo dài đến hiện tại, chủ ngữ số ít 'Janet' nên chia thì hiện tại hoàn thành 'has written'."
      },
      {
        "id": "tenses_q18",
        "num": 18,
        "stem": "We ---- a quarterly meeting with our Japanese partners in Tokyo this time last week.",
        "options": {
          "A": "would have",
          "B": "was having do this time cụ thể",
          "C": "have had",
          "D": "had"
        },
        "answer": "D",
        "explanation": "Có dấu hiệu quá khứ 'last week' nên dùng thì quá khứ đơn 'had'. Loại B vì chủ ngữ số nhiều 'We' không thể đi với 'was having' (sai hòa hợp chủ-vị, đúng phải là 'were having')."
      },
      {
        "id": "tenses_q19",
        "num": 19,
        "stem": "Is it raining? No, it isn’t but the grass is so wet. It ----.",
        "options": {
          "A": "rained",
          "B": "has rained",
          "C": "is raining",
          "D": "will rain"
        },
        "answer": "B",
        "explanation": "Hành động vừa mới xảy ra và để lại kết quả rõ rệt ở hiện tại ('the grass is so wet' - cỏ rất ướt) nên dùng thì hiện tại hoàn thành 'has rained'."
      },
      {
        "id": "tenses_q20",
        "num": 20,
        "stem": "When I arrived at the party in Janet’s building, Martha ---- home already.",
        "options": {
          "A": "went",
          "B": "have gone",
          "C": "had gone",
          "D": "goes"
        },
        "answer": "C",
        "explanation": "Diễn tả hành động đã xảy ra và hoàn tất ('already') trước một hành động khác trong quá khứ ('When I arrived'), nên dùng thì quá khứ hoàn thành 'had gone'."
      },
      {
        "id": "tenses_q21",
        "num": 21,
        "stem": "Five years ----, the Lewis sisters ran the most successful interior design business in Los Angeles.",
        "options": {
          "A": "Ago",
          "B": "Then",
          "C": "Since",
          "D": "After"
        },
        "answer": "A",
        "explanation": "Động từ chính 'ran' chia ở quá khứ đơn; cấu trúc '[khoảng thời gian] + ago' ('Five years ago' - 5 năm trước) là dấu hiệu chuẩn của thì quá khứ đơn."
      },
      {
        "id": "tenses_q22",
        "num": 22,
        "stem": "She hasn’t finished the monthly financial reports ----, but says she should have them by the end of the day.",
        "options": {
          "A": "by the time",
          "B": "still",
          "C": "yet",
          "D": "then"
        },
        "answer": "C",
        "explanation": "Trong câu phủ định ở thì hiện tại hoàn thành ('hasn’t finished'), trạng từ 'yet' (chưa) được đặt ở cuối mệnh đề."
      },
      {
        "id": "tenses_q23",
        "num": 23,
        "stem": "She really ---- to learn to control her temper in the office",
        "options": {
          "A": "has",
          "B": "have",
          "C": "hasn’t",
          "D": "having"
        },
        "answer": "A",
        "explanation": "Cấu trúc 'have to + V-inf' (phải làm gì). Chủ ngữ ngôi thứ 3 số ít 'She' ở câu khẳng định thì hiện tại đơn nên chia là 'has'."
      },
      {
        "id": "tenses_q24",
        "num": 24,
        "stem": "Last month, the manager ---- to the president that he hire a specialist to run the communication network.",
        "options": {
          "A": "suggested",
          "B": "suggest",
          "C": "are suggesting",
          "D": "suggestion"
        },
        "answer": "A",
        "explanation": "Có trạng từ chỉ thời gian quá khứ 'Last month', nên động từ chính của câu phải chia ở thì quá khứ đơn 'suggested'."
      },
      {
        "id": "tenses_q25",
        "num": 25,
        "stem": "Sales in the field of digital technology ---- 57% between 2000 and 2005.",
        "options": {
          "A": "are grown",
          "B": "growing",
          "C": "grow",
          "D": "grew"
        },
        "answer": "D",
        "explanation": "Có mốc thời gian đã chấm dứt hoàn toàn trong quá khứ 'between 2000 and 2005', động từ 'grow' (tăng trưởng) là nội động từ nên chia chủ động quá khứ đơn là 'grew'."
      },
      {
        "id": "tenses_q26",
        "num": 26,
        "stem": "The company thought the shipment-----in time for the holiday shipping season.",
        "options": {
          "A": "can arrive",
          "B": "is arriving",
          "C": "will arrive",
          "D": "would arrive"
        },
        "answer": "D",
        "explanation": "Theo quy tắc hòa hợp thì, động từ mệnh đề chính ở quá khứ đơn ('thought') nên mệnh đề phụ diễn tả sự việc tương lai trong quá khứ phải lùi thì thành 'would arrive'."
      },
      {
        "id": "tenses_q27",
        "num": 27,
        "stem": "Ultimately, the success of the company ---- on consistent management strategies.",
        "options": {
          "A": "had been depended",
          "B": "to depend",
          "C": "is depending",
          "D": "depends"
        },
        "answer": "D",
        "explanation": "Câu diễn tả một sự thật/nhận định chung ở hiện tại và chủ ngữ số ít 'the success', đồng thời 'depend' là động từ trạng thái (không dùng tiếp diễn) nên chia hiện tại đơn 'depends'."
      },
      {
        "id": "tenses_q28",
        "num": 28,
        "stem": "Most of the departments will be ---- office parties before the Christmas vacation begins",
        "options": {
          "A": "to hold",
          "B": "held",
          "C": "have held",
          "D": "holding"
        },
        "answer": "D",
        "explanation": "Chủ ngữ 'Most of the departments' thực hiện hành động tổ chức tiệc và phía sau có tân ngữ 'office parties' nên dùng thể chủ động thì tương lai tiếp diễn 'will be holding'."
      },
      {
        "id": "tenses_q29",
        "num": 29,
        "stem": "Overall, vacations in the US are expected to ----a modest 3% more this year, compared to last.",
        "options": {
          "A": "cost",
          "B": "costing",
          "C": "costs",
          "D": "will cost"
        },
        "answer": "A",
        "explanation": "Theo cấu trúc 'be expected to + V-inf' (được dự kiến sẽ làm gì), sau 'to' cần động từ nguyên mẫu không chia là 'cost'."
      },
      {
        "id": "tenses_q30",
        "num": 30,
        "stem": "All red sticker items ----discounted 50% for the next 20 minutes.",
        "options": {
          "A": "had been",
          "B": "will",
          "C": "are being",
          "D": "had"
        },
        "answer": "C",
        "explanation": "Ngữ cảnh thông báo chương trình giảm giá tạm thời đang áp dụng ('for the next 20 minutes') ở thể bị động (mặt hàng được giảm giá), nên dùng hiện tại tiếp diễn bị động 'are being'."
      },
      {
        "id": "tenses_q31",
        "num": 31,
        "stem": "---- the last four years, inflation has risen at an annual rate of 3% or less.",
        "options": {
          "A": "At",
          "B": "Of",
          "C": "For",
          "D": "From"
        },
        "answer": "C",
        "explanation": "Mệnh đề chính dùng thì hiện tại hoàn thành ('has risen') kết hợp với một khoảng thời gian ('the last four years'), nên dùng giới từ 'For' (trong suốt 4 năm qua)."
      },
      {
        "id": "tenses_q32",
        "num": 32,
        "stem": "Industry reviewers ---- impressed with the design of the new low-emission computer monitors",
        "options": {
          "A": "have been",
          "B": "are been",
          "C": "were to",
          "D": "has been"
        },
        "answer": "A",
        "explanation": "Chủ ngữ 'Industry reviewers' là danh từ số nhiều nên cần động từ chia số nhiều; 'have been' (hiện tại hoàn thành) đi với tính từ 'impressed' đúng ngữ pháp. (B sai cấu trúc, C thiếu V nguyên mẫu, D dùng cho số ít)."
      },
      {
        "id": "tenses_q33",
        "num": 33,
        "stem": "In the report released last month, economists ---- that zero inflation would have both costs and benefits",
        "options": {
          "A": "tell",
          "B": "said",
          "C": "claims",
          "D": "arguing"
        },
        "answer": "B",
        "explanation": "Dấu hiệu quá khứ 'released last month' và mệnh đề sau dùng 'would have' nên động từ chính chia ở thì quá khứ đơn ('said'). Ngoài ra, 'tell' cần tân ngữ chỉ người đi sau, 'claims' là hiện tại số ít, còn 'arguing' không phải động từ chia thì."
      },
      {
        "id": "tenses_q34",
        "num": 34,
        "stem": "I can’t find my copy of the manual anywhere. You’ll have to ----me yours.",
        "options": {
          "A": "lend",
          "B": "borrow",
          "C": "lent",
          "D": "check out"
        },
        "answer": "A",
        "explanation": "Sau 'have to' cần động từ nguyên mẫu (loại C). Theo cấu trúc và ngữ cảnh, 'lend somebody something' mang nghĩa cho ai mượn cái gì (khác với 'borrow something from somebody' - mượn từ ai)."
      },
      {
        "id": "tenses_q35",
        "num": 35,
        "stem": "The general meeting ----on June 7, 2005 in the Oak Room at the historic Charlton Mansion.",
        "options": {
          "A": "was held",
          "B": "to be held",
          "C": "has been held",
          "D": "hold"
        },
        "answer": "A",
        "explanation": "Có mốc thời gian cụ thể trong quá khứ ('on June 7, 2005') nên chia thì quá khứ đơn. Chủ ngữ 'The general meeting' (cuộc họp) cần chia ở thể bị động → 'was held'."
      },
      {
        "id": "tenses_q36",
        "num": 36,
        "stem": "Recent developments in laser technology ---- many medical procedures.",
        "options": {
          "A": "changing",
          "B": "was changed",
          "C": "changed",
          "D": "have changed"
        },
        "answer": "D",
        "explanation": "Cụm từ 'Recent developments' (những phát triển gần đây - số nhiều) diễn tả sự việc xảy ra gần đây và còn ảnh hưởng đến hiện tại, do đó dùng thì hiện tại hoàn thành dạng chủ động: 'have changed'."
      },
      {
        "id": "tenses_q37",
        "num": 37,
        "stem": "Last week, there ----plenty of copy paper. What happened to it?",
        "options": {
          "A": "were",
          "B": "was",
          "C": "had been",
          "D": "weren’t"
        },
        "answer": "B",
        "explanation": "Có dấu hiệu quá khứ 'Last week' nên chia quá khứ đơn. Danh từ chính 'copy paper' là danh từ không đếm được (thể hiện qua đại từ 'it' ở câu sau) nên dùng động từ số ít 'was'."
      },
      {
        "id": "tenses_q38",
        "num": 38,
        "stem": "---- I began to work here, six people have quitted",
        "options": {
          "A": "During",
          "B": "From",
          "C": "Awhile",
          "D": "Since"
        },
        "answer": "D",
        "explanation": "Áp dụng cấu trúc thì hiện tại hoàn thành với liên từ 'Since': Since + S + V (quá khứ đơn), S + have/has + V3/ed."
      },
      {
        "id": "tenses_q39",
        "num": 39,
        "stem": "Over the past six months, we ---- a new, computerized billing system.",
        "options": {
          "A": "have developed",
          "B": "are developing",
          "C": "development",
          "D": "had developed"
        },
        "answer": "A",
        "explanation": "Cụm từ chỉ thời gian 'Over the past six months' (trong 6 tháng qua) là dấu hiệu điển hình của thì hiện tại hoàn thành → 'have developed'."
      },
      {
        "id": "tenses_q40",
        "num": 40,
        "stem": "He ---- the company president for over thirsty years by the time he retired.",
        "options": {
          "A": "will have been",
          "B": "had been",
          "C": "has been",
          "D": "will be"
        },
        "answer": "B",
        "explanation": "Cấu trúc 'by the time + S + V (quá khứ đơn)' yêu cầu mệnh đề chính chia ở thì quá khứ hoàn thành ('had been') để diễn tả hành động/trạng thái kéo dài trước một mốc thời gian trong quá khứ."
      },
      {
        "id": "tenses_q41",
        "num": 41,
        "stem": "He will ---- his mind when he sees how much money it will save the firm.",
        "options": {
          "A": "changed",
          "B": "change",
          "C": "be changed",
          "D": "changing"
        },
        "answer": "B",
        "explanation": "Sau động từ khuyết thiếu 'will' cần một động từ nguyên mẫu không 'to'. Câu mang nghĩa chủ động ('change his mind' = thay đổi ý định) nên chọn 'change'."
      },
      {
        "id": "tenses_q42",
        "num": 42,
        "stem": "The most recent polls ----that the use of broad band Internet connections is on the rise.",
        "options": {
          "A": "shows",
          "B": "did showed",
          "C": "shown",
          "D": "show"
        },
        "answer": "D",
        "explanation": "Chủ ngữ 'The most recent polls' là danh từ số nhiều, kết hợp với động từ 'is' ở mệnh đề sau thể hiện sự việc ở hiện tại nên dùng thì hiện tại đơn số nhiều 'show'. (A số ít, B sai ngữ pháp, C thiếu trợ động từ)."
      },
      {
        "id": "tenses_q43",
        "num": 43,
        "stem": "We ---- that trade tariffs will be dropped this year.",
        "options": {
          "A": "hoped",
          "B": "have hoped",
          "C": "will hope",
          "D": "are hoping"
        },
        "answer": "D",
        "explanation": "Mệnh đề sau dùng tương lai đơn ('will be dropped this year') nên động từ chính diễn tả niềm hy vọng đang tiếp diễn ở hiện tại hướng về tương lai gần → chọn thì hiện tại tiếp diễn 'are hoping'."
      },
      {
        "id": "tenses_q44",
        "num": 44,
        "stem": "Departmental restructuring will be discussed at the ----monthly meeting.",
        "options": {
          "A": "next",
          "B": "always",
          "C": "soon",
          "D": "like"
        },
        "answer": "A",
        "explanation": "Động từ chia thì tương lai ('will be discussed') và chỗ trống đứng trước cụm danh từ 'monthly meeting' nên cần tính từ chỉ thời gian ở tương lai là 'next' (cuộc họp hàng tháng tới)."
      },
      {
        "id": "tenses_q45",
        "num": 45,
        "stem": "Each quarter, Acaba Exports ---- realistic sales goals for its staff.",
        "options": {
          "A": "sets",
          "B": "had set",
          "C": "set",
          "D": "is setting"
        },
        "answer": "A",
        "explanation": "'Each quarter' (mỗi quý) diễn tả hoạt động lặp đi lặp lại theo định kỳ nên chia thì hiện tại đơn. Chủ ngữ 'Acaba Exports' là tên riêng của một công ty (số ít) nên động từ chia số ít là 'sets'."
      },
      {
        "id": "tenses_q46",
        "num": 46,
        "stem": "Ms. Desoto ---- all employees to come to last week’s budget meeting even though only officers were obligated to attend.",
        "options": {
          "A": "to have urged",
          "B": "had urged",
          "C": "will have urged",
          "D": "was urged"
        },
        "answer": "B",
        "explanation": "Câu cần động từ chính dạng chủ động (urge sb to do sth) để diễn tả hành động thúc giục xảy ra trước cuộc họp tuần trước ('last week's budget meeting' / 'were obligated'), do đó chọn thì quá khứ hoàn thành 'had urged'."
      },
      {
        "id": "tenses_q47",
        "num": 47,
        "stem": "After the lease ----, customers have the option of purchasing the car or returning it to their local dealer.",
        "options": {
          "A": "expired",
          "B": "is expiring",
          "C": "will be expiring",
          "D": "expires"
        },
        "answer": "D",
        "explanation": "Mệnh đề chính dùng thì hiện tại đơn ('customers have') để diễn tả một quy định chung. Trong mệnh đề thời gian bắt đầu bằng 'After' với chủ ngữ số ít 'the lease', cần dùng thì hiện tại đơn 'expires'."
      },
      {
        "id": "tenses_q48",
        "num": 48,
        "stem": "Mr. Jones ---- Ms. Cheng’s clients while she is on a business trip to Hong Kong.",
        "options": {
          "A": "will assist",
          "B": "assisted",
          "C": "to assist",
          "D": "is assisted"
        },
        "answer": "A",
        "explanation": "Cần một động từ chính chia ở thể chủ động (vì có tân ngữ 'Ms. Cheng’s clients' theo sau) và hòa hợp thì với mệnh đề thời gian ở hiện tại 'while she is...'. 'will assist' (thì tương lai đơn) là đáp án phù hợp nhất."
      },
      {
        "id": "tenses_q49",
        "num": 49,
        "stem": "Book fair volunteers may be asked to work longer shifts id the need ….",
        "options": {
          "A": "arise",
          "B": "arises",
          "C": "had arisen",
          "D": "arising"
        },
        "answer": "B",
        "explanation": "Đây là câu điều kiện loại 1 ('id' là lỗi đánh máy của 'if') với mệnh đề chính chứa 'may be asked'. Mệnh đề điều kiện dùng thì hiện tại đơn; chủ ngữ 'the need' là số ít nên chọn 'arises'."
      },
      {
        "id": "tenses_q50",
        "num": 50,
        "stem": "None of the employees ----that Mr. Annan planned to retired at the end of the years.",
        "options": {
          "A": "knowingly",
          "B": "known",
          "C": "knew",
          "D": "to know"
        },
        "answer": "C",
        "explanation": "Câu thiếu động từ chính cho chủ ngữ 'None of the employees'. Mệnh đề sau chia ở quá khứ đơn ('planned') nên động từ chính cũng cần chia quá khứ đơn là 'knew' (A là trạng từ, B và D không phải động từ chia thì)."
      },
      {
        "id": "tenses_q51",
        "num": 51,
        "stem": "Now that Ms. Nakamura ---- to the London headquarters, a new manager is running our Tokyo office.",
        "options": {
          "A": "has transferred",
          "B": "transferring",
          "C": "transfer",
          "D": "to transfer"
        },
        "answer": "A",
        "explanation": "Sau liên từ 'Now that' (bởi vì giờ đây) cần một mệnh đề hoàn chỉnh có động từ chia thì cho chủ ngữ số ít 'Ms. Nakamura'. Thì hiện tại hoàn thành 'has transferred' diễn tả hành động đã xảy ra dẫn đến kết quả ở hiện tại ('is running')."
      },
      {
        "id": "tenses_q52",
        "num": 52,
        "stem": "The Oakwood Restaurant ---- a special dinner menu on Saturdays for the past decade.",
        "options": {
          "A": "is offering",
          "B": "has been offering",
          "C": "will be offering",
          "D": "would have been offering"
        },
        "answer": "B",
        "explanation": "Dấu hiệu thời gian 'for the past decade' (trong suốt thập kỷ qua) cho biết hành động bắt đầu trong quá khứ và vẫn đang tiếp diễn đến hiện tại, nên dùng thì hiện tại hoàn thành tiếp diễn 'has been offering'."
      },
      {
        "id": "tenses_q53",
        "num": 53,
        "stem": "Mr. Guo ---- with an electrician yesterday about the rewiring project.",
        "options": {
          "A": "consults",
          "B": "is consulting",
          "C": "to consult",
          "D": "consulted"
        },
        "answer": "D",
        "explanation": "Có trạng từ chỉ thời gian trong quá khứ 'yesterday' (hôm qua), do đó động từ phải chia ở thì quá khứ đơn là 'consulted'."
      },
      {
        "id": "tenses_q54",
        "num": 54,
        "stem": "So far, the Grantley store ---- 20 percent more mobile phones than it did last year.",
        "options": {
          "A": "will sell",
          "B": "was sold",
          "C": "has sold",
          "D": "are selling"
        },
        "answer": "C",
        "explanation": "Dấu hiệu 'So far' (cho đến nay) đi với thì hiện tại hoàn thành. Chủ ngữ 'the Grantley store' là số ít và câu mang nghĩa chủ động (có tân ngữ '20 percent more mobile phones'), nên chọn 'has sold'."
      },
      {
        "id": "tenses_q55",
        "num": 55,
        "stem": "The Delmar Highway Department ---- an online list of current road closures.",
        "options": {
          "A": "maintenance",
          "B": "maintains",
          "C": "maintaining",
          "D": "is maintained"
        },
        "answer": "B",
        "explanation": "Câu thiếu động từ chính ở thể chủ động (vì có tân ngữ 'an online list') để diễn tả một sự thật/chức năng hiện tại. Với chủ ngữ số ít 'The Delmar Highway Department', chọn động từ chia hiện tại đơn là 'maintains'."
      }
    ]
  },
  {
    "id": "gerund_infinitive",
    "title": "V-ing, To V, V-bare",
    "desc": "Danh động từ & Động từ nguyên mẫu",
    "icon": "🎯",
    "count": 50,
    "questions": [
      {
        "id": "gerund_infinitive_q1",
        "num": 1,
        "stem": "My father usually helps me_______ English.",
        "options": {
          "A": "to learn",
          "B": "learn",
          "C": "learning",
          "D": "both a and b"
        },
        "answer": "D",
        "explanation": "Cấu trúc 'help + O + (to) V-bare' (giúp ai làm gì), nên cả 'to learn' (A) và 'learn' (B) đều đúng ngữ pháp."
      },
      {
        "id": "gerund_infinitive_q2",
        "num": 2,
        "stem": "I hate ______ to your song. It is awful.",
        "options": {
          "A": "to listening",
          "B": "listening",
          "C": "listen",
          "D": "listened"
        },
        "answer": "B",
        "explanation": "Sau động từ chỉ sở thích/cảm xúc 'hate' dùng V-ing ('hate + V-ing') hoặc 'to V'; trong các đáp án chỉ có 'listening' đúng cấu trúc."
      },
      {
        "id": "gerund_infinitive_q3",
        "num": 3,
        "stem": "This student expected_______ the first winner of the Grand Prix.",
        "options": {
          "A": "be",
          "B": "being",
          "C": "to be",
          "D": "will be"
        },
        "answer": "C",
        "explanation": "Cấu trúc 'expect + to V' (mong đợi làm gì), do đó chọn 'to be'."
      },
      {
        "id": "gerund_infinitive_q4",
        "num": 4,
        "stem": "I told her_______ about her wedding; everything will straighten out.",
        "options": {
          "A": "Don't worry",
          "B": "not to worry",
          "C": "no worry",
          "D": "not worry"
        },
        "answer": "B",
        "explanation": "Cấu trúc câu tường thuật mệnh lệnh 'tell + O + not to V' (bảo ai đừng làm gì), do đó chọn 'not to worry'."
      },
      {
        "id": "gerund_infinitive_q5",
        "num": 5,
        "stem": "May I suggest you let_______",
        "options": {
          "A": "Mary doing so",
          "B": "Mary do so",
          "C": "Mary does to",
          "D": "Mary to do so"
        },
        "answer": "B",
        "explanation": "Cấu trúc 'let + O + V-bare' (để/cho phép ai làm gì), nên chọn 'Mary do so'."
      },
      {
        "id": "gerund_infinitive_q6",
        "num": 6,
        "stem": "She_______ him when he called her.",
        "options": {
          "A": "pretended not hear",
          "B": "pretended she heard not",
          "C": "pretended not to hear",
          "D": "did not pretend hear"
        },
        "answer": "C",
        "explanation": "Cấu trúc 'pretend + (not) to V' (giả vờ (không) làm gì), do đó chọn 'pretended not to hear'."
      },
      {
        "id": "gerund_infinitive_q7",
        "num": 7,
        "stem": "The doctor advised_______ late.",
        "options": {
          "A": "me not staying up",
          "B": "me not stay up",
          "C": "me not to stay up",
          "D": "I did not stay up"
        },
        "answer": "C",
        "explanation": "Cấu trúc 'advise + O + (not) to V' (khuyên ai (không) làm gì), do đó chọn 'me not to stay up'."
      },
      {
        "id": "gerund_infinitive_q8",
        "num": 8,
        "stem": "The school superintendent told me_______.",
        "options": {
          "A": "hurrying up",
          "B": "to hurry up",
          "C": "hurry up",
          "D": "hurried up"
        },
        "answer": "B",
        "explanation": "Cấu trúc 'tell + O + to V' (bảo ai làm gì), nên chọn 'to hurry up'."
      },
      {
        "id": "gerund_infinitive_q9",
        "num": 9,
        "stem": "\"_______us face the enemies\", shouted the soldiers.",
        "options": {
          "A": "Make",
          "B": "Let",
          "C": "Leave",
          "D": "Keep"
        },
        "answer": "B",
        "explanation": "Cấu trúc đề nghị/kêu gọi 'Let + us + V-bare' (Hãy để chúng ta / Chúng ta hãy cùng đối mặt với kẻ thù)."
      },
      {
        "id": "gerund_infinitive_q10",
        "num": 10,
        "stem": "Mr. Brown told the schoolgirls_______ in class.",
        "options": {
          "A": "don't eat",
          "B": "not to eat",
          "C": "eat not",
          "D": "not eat"
        },
        "answer": "B",
        "explanation": "Cấu trúc 'tell + O + not to V' (bảo ai không được làm gì), nên chọn 'not to eat'."
      },
      {
        "id": "gerund_infinitive_q11",
        "num": 11,
        "stem": "I have heard Dang Thai Son_______ the piano.",
        "options": {
          "A": "played",
          "B": "plays",
          "C": "play",
          "D": "to play"
        },
        "answer": "C",
        "explanation": "Động từ tri giác 'hear + O + V-bare' diễn tả việc nghe thấy toàn bộ hành động, nên chọn 'play'."
      },
      {
        "id": "gerund_infinitive_q12",
        "num": 12,
        "stem": "The young teachers wanted a Foreign Language Teaching workshop _______ in Ho Chi Minh City.",
        "options": {
          "A": "to be holding",
          "B": "should hold",
          "C": "to be held",
          "D": "to hold"
        },
        "answer": "C",
        "explanation": "Cấu trúc 'want + O + to be V3/ed' (muốn cái gì được làm); vì 'workshop' (hội thảo) được tổ chức nên dùng bị động 'to be held'."
      },
      {
        "id": "gerund_infinitive_q13",
        "num": 13,
        "stem": "_______able to take part in the international math contest two years from now, Son works very hard in his math class.",
        "options": {
          "A": "In order to be",
          "B": "Being",
          "C": "Been",
          "D": "So that he be"
        },
        "answer": "A",
        "explanation": "Cụm từ chỉ mục đích 'In order to + V-bare' (Để có thể tham gia...) phù hợp với ngữ cảnh và cấu trúc câu."
      },
      {
        "id": "gerund_infinitive_q14",
        "num": 14,
        "stem": "Try_______ so many mistakes.",
        "options": {
          "A": "not to make",
          "B": "not make",
          "C": "to make not",
          "D": "make not"
        },
        "answer": "A",
        "explanation": "Cấu trúc 'try + not to V' (cố gắng không làm gì), do đó chọn 'not to make'."
      },
      {
        "id": "gerund_infinitive_q15",
        "num": 15,
        "stem": "Let me_______ from you soon.",
        "options": {
          "A": "to hear",
          "B": "hear",
          "C": "hearing",
          "D": "heard"
        },
        "answer": "B",
        "explanation": "Cấu trúc 'let + O + V-bare' (để/cho phép ai làm gì), nên sau 'Let me' dùng động từ nguyên mẫu không 'to' là 'hear'."
      },
      {
        "id": "gerund_infinitive_q16",
        "num": 16,
        "stem": "John is too stupid_______ understand this.",
        "options": {
          "A": "to",
          "B": "not to",
          "C": "to not",
          "D": "for"
        },
        "answer": "A",
        "explanation": "Cấu trúc 'too + adj + to + V-bare' (quá... đến nỗi không thể làm gì), bản thân cấu trúc này đã mang nghĩa phủ định nên không dùng 'not'."
      },
      {
        "id": "gerund_infinitive_q17",
        "num": 17,
        "stem": "The wind is_______ to blow the roof off.",
        "options": {
          "A": "strong enough",
          "B": "too strong",
          "C": "quite strong",
          "D": "very strong"
        },
        "answer": "A",
        "explanation": "Cấu trúc 'adj + enough + to V' (đủ... để làm gì) phù hợp với ngữ cảnh 'gió đủ mạnh để thổi bay mái nhà'."
      },
      {
        "id": "gerund_infinitive_q18",
        "num": 18,
        "stem": "My father is _______ to stay up late.",
        "options": {
          "A": "too tired",
          "B": "enough tired",
          "C": "tired enough",
          "D": "so tired"
        },
        "answer": "A",
        "explanation": "Cấu trúc 'too + adj + to V' (quá... để làm gì) phù hợp với ngữ cảnh 'bố tôi quá mệt nên không thể thức khuya'."
      },
      {
        "id": "gerund_infinitive_q19",
        "num": 19,
        "stem": "John wanted me_______ him.",
        "options": {
          "A": "to be helping",
          "B": "help",
          "C": "to help",
          "D": "I help"
        },
        "answer": "C",
        "explanation": "Cấu trúc 'want + O + to V' (muốn ai đó làm gì)."
      },
      {
        "id": "gerund_infinitive_q20",
        "num": 20,
        "stem": "I want_______ early tomorrow morning.",
        "options": {
          "A": "to leave",
          "B": "leaving",
          "C": "me leave",
          "D": "me leaving"
        },
        "answer": "A",
        "explanation": "Cấu trúc 'want + to V' (muốn làm gì)."
      },
      {
        "id": "gerund_infinitive_q21",
        "num": 21,
        "stem": "I hope_______",
        "options": {
          "A": "to see you there",
          "B": "seeing you there",
          "C": "you to see there",
          "D": "see you there"
        },
        "answer": "A",
        "explanation": "Động từ 'hope' đi với động từ nguyên mẫu có 'to': 'hope + to V' (hy vọng làm gì)."
      },
      {
        "id": "gerund_infinitive_q22",
        "num": 22,
        "stem": "I taught_______",
        "options": {
          "A": "how mending a shirt",
          "B": "him how to mend a shirt",
          "C": "how mend a shirt",
          "D": "him how mend a shirt"
        },
        "answer": "B",
        "explanation": "Cấu trúc 'teach + O + how + to V' (dạy ai cách làm gì)."
      },
      {
        "id": "gerund_infinitive_q23",
        "num": 23,
        "stem": "I told_______",
        "options": {
          "A": "Nam to come",
          "B": "to come Nam",
          "C": "to Nam come",
          "D": "Nam come"
        },
        "answer": "A",
        "explanation": "Cấu trúc 'tell + O + to V' (bảo ai đó làm gì)."
      },
      {
        "id": "gerund_infinitive_q24",
        "num": 24,
        "stem": "My father has decided_______ a new house.",
        "options": {
          "A": "find",
          "B": "to find",
          "C": "finding",
          "D": "him find"
        },
        "answer": "B",
        "explanation": "Động từ 'decide' đi với 'to V': 'decide + to V' (quyết định làm gì)."
      },
      {
        "id": "gerund_infinitive_q25",
        "num": 25,
        "stem": "Mother warned_______ the electric plug",
        "options": {
          "A": "her not to touch",
          "B": "her touching not",
          "C": "her not touch",
          "D": "not touch"
        },
        "answer": "A",
        "explanation": "Cấu trúc 'warn + O + not to V' (cảnh báo ai không được làm gì)."
      },
      {
        "id": "gerund_infinitive_q26",
        "num": 26,
        "stem": "Don't tell Tan because I don't want_______",
        "options": {
          "A": "him to know",
          "B": "know",
          "C": "him know",
          "D": "knowing"
        },
        "answer": "A",
        "explanation": "Cấu trúc 'want + O + to V' (muốn ai đó làm gì)."
      },
      {
        "id": "gerund_infinitive_q27",
        "num": 27,
        "stem": "She explained_______",
        "options": {
          "A": "how to make it",
          "B": "me how to make it",
          "C": "me to make it",
          "D": "me make it"
        },
        "answer": "A",
        "explanation": "Động từ 'explain' không đi trực tiếp với tân ngữ chỉ người (phải có 'to' trước tân ngữ chỉ người), dùng cấu trúc 'explain + wh-word + to V' (giải thích cách làm gì)."
      },
      {
        "id": "gerund_infinitive_q28",
        "num": 28,
        "stem": "Miss Brown told Mary_______ down.",
        "options": {
          "A": "sit",
          "B": "to sit",
          "C": "sitting",
          "D": "sat"
        },
        "answer": "B",
        "explanation": "Cấu trúc 'tell + O + to V' (bảo ai làm gì)."
      },
      {
        "id": "gerund_infinitive_q29",
        "num": 29,
        "stem": "She told Mary_______ up hope.",
        "options": {
          "A": "not give",
          "B": "do not give",
          "C": "not to give",
          "D": "to give not"
        },
        "answer": "C",
        "explanation": "Cấu trúc phủ định của 'tell': 'tell + O + not to V' (bảo ai đừng làm gì)."
      },
      {
        "id": "gerund_infinitive_q30",
        "num": 30,
        "stem": "Michael Faraday wrote a litter to Sir Humphry Davy_______ for work.",
        "options": {
          "A": "asked",
          "B": "to ask",
          "C": "so to ask",
          "D": "in order to asking"
        },
        "answer": "B",
        "explanation": "Dùng 'to V' (to ask) để chỉ mục đích (viết thư để xin việc); loại C vì thiếu 'as' (so as to V) và loại D vì sau 'in order to' phải là V-bare."
      },
      {
        "id": "gerund_infinitive_q31",
        "num": 31,
        "stem": "Do you know_______ to play that game now?",
        "options": {
          "A": "way",
          "B": "what",
          "C": "if",
          "D": "how"
        },
        "answer": "D",
        "explanation": "Cấu trúc 'know + how + to V' (biết cách làm gì). Phía sau động từ 'play' đã có tân ngữ 'that game' nên dùng trạng từ nghi vấn 'how'."
      },
      {
        "id": "gerund_infinitive_q32",
        "num": 32,
        "stem": "She is very glad_______ see you again.",
        "options": {
          "A": "in",
          "B": "with",
          "C": "to",
          "D": "for"
        },
        "answer": "C",
        "explanation": "Cấu trúc tính từ chỉ cảm xúc 'be + adj (glad) + to V' (vui mừng khi làm gì)."
      },
      {
        "id": "gerund_infinitive_q33",
        "num": 33,
        "stem": "He noticed two thieves_______ out of a shop.",
        "options": {
          "A": "to come",
          "B": "are coming",
          "C": "in coming",
          "D": "come"
        },
        "answer": "D",
        "explanation": "Động từ chỉ giác quan 'notice + O + V-bare' (chứng kiến toàn bộ hành động) hoặc 'V-ing' (hành động đang diễn ra). Chỉ có 'come' (V-bare) đúng cấu trúc."
      },
      {
        "id": "gerund_infinitive_q34",
        "num": 34,
        "stem": "When will he be allowed to go home? When will they_______?",
        "options": {
          "A": "let him go",
          "B": "let to go",
          "C": "leave him to go",
          "D": "leave him"
        },
        "answer": "A",
        "explanation": "Câu mang nghĩa tương đương với 'be allowed to go' (được phép về nhà) nên dùng cấu trúc 'let + O + V-bare' (cho phép ai làm gì): 'let him go'."
      },
      {
        "id": "gerund_infinitive_q35",
        "num": 35,
        "stem": "The guide encouraged the tourists_______ the Prado Museum Madrid",
        "options": {
          "A": "visit",
          "B": "to visit",
          "C": "visiting",
          "D": "to visiting"
        },
        "answer": "B",
        "explanation": "Cấu trúc động từ 'encourage + O + to V' (khuyến khích ai làm gì)."
      },
      {
        "id": "gerund_infinitive_q36",
        "num": 36,
        "stem": "Mow that were finished painting the house, there's nothing left_______",
        "options": {
          "A": "done",
          "B": "did",
          "C": "to do",
          "D": "for doing"
        },
        "answer": "C",
        "explanation": "Cấu trúc 'nothing (left) + to V' (không còn gì để làm), dùng động từ nguyên mẫu có 'to' bổ nghĩa cho đại từ bất định 'nothing'."
      },
      {
        "id": "gerund_infinitive_q37",
        "num": 37,
        "stem": "The superintendent promised to tear down and_______ the fire damaged school building.",
        "options": {
          "A": "rebuild",
          "B": "to rebuild",
          "C": "rebuilding",
          "D": "to rebuilding"
        },
        "answer": "A",
        "explanation": "Cấu trúc song song nối bởi 'and' dùng chung 'to': 'promised to [tear down and rebuild]' nên động từ thứ hai chia ở dạng V-bare ('rebuild')."
      },
      {
        "id": "gerund_infinitive_q38",
        "num": 38,
        "stem": "The mechanic needs_______ a new muffler on your car.",
        "options": {
          "A": "to put",
          "B": "putting",
          "C": "to be put",
          "D": "to putting"
        },
        "answer": "A",
        "explanation": "Chủ ngữ chỉ người ('The mechanic') thực hiện hành động chủ động nên dùng cấu trúc 'need + to V' (cần làm gì)."
      },
      {
        "id": "gerund_infinitive_q39",
        "num": 39,
        "stem": "Our house needs_______",
        "options": {
          "A": "to paint",
          "B": "to be painting",
          "C": "to be paint",
          "D": "painting"
        },
        "answer": "D",
        "explanation": "Chủ ngữ chỉ vật ('Our house') mang nghĩa bị động nên dùng cấu trúc 'need + V-ing' (tương đương 'need to be painted' – cần được sơn)."
      },
      {
        "id": "gerund_infinitive_q40",
        "num": 40,
        "stem": "Do you want _______ by the doctor?",
        "options": {
          "A": "to examine",
          "B": "to be examined",
          "C": "being examined",
          "D": "being to examine"
        },
        "answer": "B",
        "explanation": "Cấu trúc 'want + to V'. Do có cụm 'by the doctor' mang nghĩa bị động (muốn được bác sĩ khám) nên dùng dạng bị động 'to be + V3/ed' ('to be examined')."
      },
      {
        "id": "gerund_infinitive_q41",
        "num": 41,
        "stem": "Remember to check the spelling of Mr. Kamashi’s name when ------ the document.",
        "options": {
          "A": "revising",
          "B": "revises",
          "C": "revised",
          "D": "revise"
        },
        "answer": "A",
        "explanation": "Rút gọn mệnh đề trạng ngữ chỉ thời gian cùng chủ ngữ sau 'when'. Phía sau có tân ngữ 'the document' (nghĩa chủ động) nên dùng V-ing ('revising')."
      },
      {
        "id": "gerund_infinitive_q42",
        "num": 42,
        "stem": "York Development Corporation marked the ----- of the Ford road office complex with a ribbon-cutting ceremony.",
        "options": {
          "A": "opens",
          "B": "opening",
          "C": "opened",
          "D": "openly"
        },
        "answer": "B",
        "explanation": "Giữa mạo từ 'the' và giới từ 'of' cần một danh từ. 'Opening' đóng vai trò danh từ mang nghĩa 'lễ khai trương / sự mở cửa'."
      },
      {
        "id": "gerund_infinitive_q43",
        "num": 43,
        "stem": "Online shoppers who experience long waits for their orders tend ----- the business low ratings.",
        "options": {
          "A": "have given",
          "B": "gave",
          "C": "to give",
          "D": "giving"
        },
        "answer": "C",
        "explanation": "Cấu trúc động từ 'tend + to V' (có xu hướng làm gì)."
      },
      {
        "id": "gerund_infinitive_q44",
        "num": 44,
        "stem": "The conference fee ----- admittance to more than twenty workshops and seminars.",
        "options": {
          "A": "include",
          "B": "including",
          "C": "is included",
          "D": "includes"
        },
        "answer": "D",
        "explanation": "Câu thiếu động từ chính chia theo chủ ngữ số ít 'The conference fee'. Phía sau có tân ngữ 'admittance' (nghĩa chủ động) nên chia thì hiện tại đơn số ít 'includes'."
      },
      {
        "id": "gerund_infinitive_q45",
        "num": 45,
        "stem": "As the rent agreement with the Smith Group is set ----- soon, the available office space can be advertised.",
        "options": {
          "A": "expired",
          "B": "to expire",
          "C": "will have expired",
          "D": "expiring"
        },
        "answer": "B",
        "explanation": "Cấu trúc 'be set + to V' (được ấn định / dự kiến sẽ làm gì)."
      },
      {
        "id": "gerund_infinitive_q46",
        "num": 46,
        "stem": "The management team at Ofto Corporation offers incentives ------ employee productivity.",
        "options": {
          "A": "stimulate",
          "B": "to stimulate",
          "C": "will stimulate",
          "D": "are stimulating"
        },
        "answer": "B",
        "explanation": "Câu đã có động từ chính 'offers', cần dùng động từ nguyên mẫu có 'to' (to stimulate) để chỉ mục đích ('để kích thích năng suất nhân viên')."
      },
      {
        "id": "gerund_infinitive_q47",
        "num": 47,
        "stem": "While he is not enthusiastic about suggestions, Mr. Shang ---- them.",
        "options": {
          "A": "considering",
          "B": "to consider",
          "C": "will consider",
          "D": "consider"
        },
        "answer": "C",
        "explanation": "Mệnh đề chính có chủ ngữ số ít 'Mr. Shang' và đang thiếu động từ chính chia thì. A và B không làm động từ chính; D sai hòa hợp chủ - vị (thiếu 's'); chỉ có C (will consider) đúng ngữ pháp."
      },
      {
        "id": "gerund_infinitive_q48",
        "num": 48,
        "stem": "The vice president of Chestonville Bank believes that ------ employees is vital to the company’s success.",
        "options": {
          "A": "empowered",
          "B": "empower",
          "C": "empowering",
          "D": "empowers."
        },
        "answer": "C",
        "explanation": "Sau 'that' là mệnh đề có động từ số ít 'is', nên cần danh động từ 'empowering' kết hợp với tân ngữ 'employees' tạo thành cụm danh động từ làm chủ ngữ số ít ('việc trao quyền cho nhân viên'). Loại A vì 'empowered employees' là danh từ số nhiều, không đi với 'is'."
      },
      {
        "id": "gerund_infinitive_q49",
        "num": 49,
        "stem": "For more information about product warranties or -----your new appliance, please contact customer service.",
        "options": {
          "A": "to register",
          "B": "registered",
          "C": "registers",
          "D": "registration"
        },
        "answer": "A",
        "explanation": "Cấu trúc song song chỉ mục đích: 'For more information about product warranties' (Để biết thêm thông tin...) hoặc 'to register your new appliance' (hoặc để đăng ký thiết bị mới của bạn). Ngoài ra, sau chỗ trống có tân ngữ trực tiếp 'your new appliance' nên không dùng danh từ 'registration' (D)."
      },
      {
        "id": "gerund_infinitive_q50",
        "num": 50,
        "stem": "I am looking forward to ------ from you soon.",
        "options": {
          "A": "hear",
          "B": "hearing",
          "C": "hears",
          "D": "heard"
        },
        "answer": "B",
        "explanation": "Cấu trúc cố định 'look forward to + V-ing' (mong đợi làm gì), trong đó 'to' là giới từ nên theo sau là danh động từ 'hearing'."
      }
    ]
  },
  {
    "id": "modal_verbs",
    "title": "Modal Verbs (Động từ khuyết thiếu)",
    "desc": "Can, could, may, might, must, should, would",
    "icon": "⚡",
    "count": 44,
    "questions": [
      {
        "id": "modal_verbs_q1",
        "num": 1,
        "stem": "Mr. Kent is on time for everything. How ---- it be that he was late for the opening caremony?",
        "options": {
          "A": "can",
          "B": "should",
          "C": "would",
          "D": "must"
        },
        "answer": "A",
        "explanation": "Cấu trúc 'How can it be that...?' dùng 'can' trong câu nghi vấn để diễn tả sự ngạc nhiên, khó tin về một sự việc."
      },
      {
        "id": "modal_verbs_q2",
        "num": 2,
        "stem": "“Are you coming to Jeff’s party?” -“I’m not sure. I ---- go to the concert instead”",
        "options": {
          "A": "must",
          "B": "should",
          "C": "dare",
          "D": "may"
        },
        "answer": "D",
        "explanation": "Cụm 'I'm not sure' cho thấy khả năng không chắc chắn trong tương lai, nên dùng 'may' (có thể, có lẽ)."
      },
      {
        "id": "modal_verbs_q3",
        "num": 3,
        "stem": "Sorry I’m late. I ----- have turned off the alarm clock and gone back to sleep again.",
        "options": {
          "A": "might",
          "B": "should",
          "C": "can",
          "D": "will"
        },
        "answer": "A",
        "explanation": "Cấu trúc 'might have + V3/ed' dùng để suy đoán một sự việc có lẽ đã xảy ra trong quá khứ."
      },
      {
        "id": "modal_verbs_q4",
        "num": 4,
        "stem": "“Will you stay for lunch?” -“Sorry, I ----. My brother is coming to see me.”",
        "options": {
          "A": "must",
          "B": "can’t",
          "C": "needn’t",
          "D": "won’t"
        },
        "answer": "B",
        "explanation": "Dùng 'can't' để từ chối lời mời một cách lịch sự do không thể ở lại vì đã có việc bận ('My brother is coming to see me')."
      },
      {
        "id": "modal_verbs_q5",
        "num": 5,
        "stem": "There was a lot of fun at yesterday\\s party. You ---- come, but why didn’t you?",
        "options": {
          "A": "must have",
          "B": "should",
          "C": "need have",
          "D": "should have"
        },
        "answer": "D",
        "explanation": "Cấu trúc 'should have + V3/ed' (với 'come' là phân từ 2) diễn tả việc lẽ ra nên làm trong quá khứ nhưng thực tế đã không làm."
      },
      {
        "id": "modal_verbs_q6",
        "num": 6,
        "stem": "“I stayed at a hotel while in New York.” -“Oh, did you? You ---- with Barbara.”",
        "options": {
          "A": "could have stayed",
          "B": "could stay",
          "C": "would stay",
          "D": "should stay"
        },
        "answer": "A",
        "explanation": "Bối cảnh ở quá khứ ('stayed'); cấu trúc 'could have + V3/ed' diễn tả một khả năng đã có thể xảy ra trong quá khứ nhưng thực tế không thực hiện."
      },
      {
        "id": "modal_verbs_q7",
        "num": 7,
        "stem": "The fire spread through the hotel very quickly but everyone ---- get out.",
        "options": {
          "A": "had to",
          "B": "would",
          "C": "could",
          "D": "was able to"
        },
        "answer": "D",
        "explanation": "Dùng 'was able to' để diễn tả việc xoay xở thành công trong một tình huống cụ thể, khó khăn ở quá khứ (không dùng 'could' ở thể khẳng định cho một sự việc đơn lẻ)."
      },
      {
        "id": "modal_verbs_q8",
        "num": 8,
        "stem": "There was plenty of time. She ----.",
        "options": {
          "A": "mustn’t have hurried",
          "B": "couldn’t have hurried",
          "C": "must not hurry",
          "D": "needn’t have hurried"
        },
        "answer": "D",
        "explanation": "Cấu trúc 'needn't have + V3/ed' diễn tả một việc đã làm trong quá khứ nhưng thực ra là không cần thiết ('There was plenty of time')."
      },
      {
        "id": "modal_verbs_q9",
        "num": 9,
        "stem": "Jack ---- yet, otherwise he would have telephone me.",
        "options": {
          "A": "mustn’t have arrived",
          "B": "shouldn’t have arrived",
          "C": "couldn’t have arrived",
          "D": "need not have arrived"
        },
        "answer": "C",
        "explanation": "Cấu trúc 'couldn't have + V3/ed' dùng để suy đoán phủ định chắc chắn về quá khứ (chắc chắn là chưa đến, nếu không anh ấy đã gọi điện rồi); không dùng 'mustn't have'."
      },
      {
        "id": "modal_verbs_q10",
        "num": 10,
        "stem": "Johnny, you ---- play with the knife, you ---- hurt yourself.",
        "options": {
          "A": "won’t/can’t",
          "B": "mustn’t/ may",
          "C": "shouldn’t/must",
          "D": "can’t/shouldn’t"
        },
        "answer": "B",
        "explanation": "'mustn't' diễn tả sự cấm đoán (không được chơi với dao) và 'may' diễn tả khả năng rủi ro có thể xảy ra (có thể tự làm mình bị thương)."
      },
      {
        "id": "modal_verbs_q11",
        "num": 11,
        "stem": "When he was there, he ---- go to that coffee shop at the corner after work everyday.",
        "options": {
          "A": "would",
          "B": "should",
          "C": "had better",
          "D": "might"
        },
        "answer": "A",
        "explanation": "'would + V-inf' dùng để diễn tả một thói quen lặp đi lặp lại trong quá khứ ('When he was there... everyday')."
      },
      {
        "id": "modal_verbs_q12",
        "num": 12,
        "stem": "Yesterday, Jane had to walk away from the discussion. Otherwise, she ---- something she would regret later.",
        "options": {
          "A": "had said",
          "B": "said",
          "C": "might say",
          "D": "might have said"
        },
        "answer": "D",
        "explanation": "Trong câu điều kiện ẩn với 'Otherwise' ở bối cảnh quá khứ ('Yesterday'), dùng 'might have + V3/ed' để chỉ một kết quả có thể đã xảy ra nếu điều kiện trước đó không diễn ra."
      },
      {
        "id": "modal_verbs_q13",
        "num": 13,
        "stem": "Sir, you ---- be sitting in this waiting room. It is for woman and children only,",
        "options": {
          "A": "oughtn’t to",
          "B": "can’t",
          "C": "won’t",
          "D": "needn’t"
        },
        "answer": "A",
        "explanation": "'oughtn't to be + V-ing' (tương đương 'shouldn't be + V-ing') dùng để nhắc nhở lịch sự rằng ai đó không nên/không được đang làm gì trái quy định; còn 'can't be sitting' thường mang nghĩa suy đoán phủ định."
      },
      {
        "id": "modal_verbs_q14",
        "num": 14,
        "stem": "“There were already five people in the car but they managed to take me as well” “It--- a comfortable journey”",
        "options": {
          "A": "can’t be",
          "B": "shouldn’t be",
          "C": "mustn’t have been",
          "D": "couldn’t have been"
        },
        "answer": "D",
        "explanation": "Ngữ cảnh ở quá khứ ('were', 'managed'), dùng 'couldn't have been' để suy đoán phủ định có căn cứ về quá khứ (chắc chắn đó không thể là một chuyến đi thoải mái)."
      },
      {
        "id": "modal_verbs_q15",
        "num": 15,
        "stem": "“Mary looks sad. Did you tell her about the accident?” “Yes, but I ---- her later.”",
        "options": {
          "A": "shouldn’t have told",
          "B": "mustn;t have told",
          "C": "must have told",
          "D": "should have told"
        },
        "answer": "D",
        "explanation": "Với trạng từ 'later', câu mang nghĩa hối tiếc vì đã nói quá sớm nên dùng 'should have + V3/ed' (lẽ ra tôi nên nói với cô ấy muộn hơn)."
      },
      {
        "id": "modal_verbs_q16",
        "num": 16,
        "stem": "“Shall I tell John about it?” “No, you ----. I’ve told him already”",
        "options": {
          "A": "needn’t",
          "B": "wouldn’t",
          "C": "mustn’t",
          "D": "shouldn’t"
        },
        "answer": "A",
        "explanation": "Dùng 'needn’t' (không cần thiết) vì người nói đã kể cho John rồi ('I’ve told him already'). Không dùng 'mustn’t' vì mang nghĩa cấm đoán."
      },
      {
        "id": "modal_verbs_q17",
        "num": 17,
        "stem": "“Don’t forget to come to my birthday party tomorrow.” “----“",
        "options": {
          "A": "I don’t",
          "B": "I won’t",
          "C": "I can’t",
          "D": "I haven’t"
        },
        "answer": "B",
        "explanation": "Dùng 'I won’t' (Tôi sẽ không quên đâu) để đáp lại lời nhắc nhở 'Don’t forget...' mang tính chất hứa hẹn cho tương lai ('tomorrow')."
      },
      {
        "id": "modal_verbs_q18",
        "num": 18,
        "stem": "I told Sally how to get here, but perhaps I ---- for her.",
        "options": {
          "A": "had to write it out",
          "B": "must have written it out",
          "C": "should have written it out",
          "D": "ought to write it out"
        },
        "answer": "C",
        "explanation": "Cấu trúc 'should have + V3/ed' diễn tả một việc đáng lẽ nên làm trong quá khứ nhưng thực tế đã không làm (lẽ ra tôi nên viết ra cho cô ấy)."
      },
      {
        "id": "modal_verbs_q19",
        "num": 19,
        "stem": "---- it rain tomorrow, we will put off the visit to the Marble Mountains.",
        "options": {
          "A": "were",
          "B": "should",
          "C": "would",
          "D": "will"
        },
        "answer": "B",
        "explanation": "Đảo ngữ câu điều kiện loại 1: 'Should + S + V(nguyên mẫu), S + will + V' (thay cho 'If it rains/should rain tomorrow...')."
      },
      {
        "id": "modal_verbs_q20",
        "num": 20,
        "stem": "Tom should not ---- me your secret, but he meant no harm.",
        "options": {
          "A": "have told",
          "B": "tell",
          "C": "be telling",
          "D": "having told"
        },
        "answer": "A",
        "explanation": "Cấu trúc 'should not have + V3/ed' diễn tả việc đáng lẽ không nên làm trong quá khứ nhưng đã lỡ làm rồi (phù hợp với 'meant' ở thì quá khứ)."
      },
      {
        "id": "modal_verbs_q21",
        "num": 21,
        "stem": "Peter ---- come with us tonight, but he isn’t very sure. a, must",
        "options": {
          "B": "may",
          "C": "can",
          "D": "will"
        },
        "answer": "B",
        "explanation": "Dùng 'may' để diễn tả khả năng có thể xảy ra nhưng không chắc chắn, phù hợp với ngữ cảnh 'he isn’t very sure'."
      },
      {
        "id": "modal_verbs_q22",
        "num": 22,
        "stem": "“Could I borrow your dictionary?” -“Yes, of course you ----“",
        "options": {
          "A": "might",
          "B": "will",
          "C": "can",
          "D": "should"
        },
        "answer": "C",
        "explanation": "Khi đồng ý cho phép trước lời đề nghị lịch sự 'Could I...?', ta dùng 'can' (Yes, of course you can)."
      },
      {
        "id": "modal_verbs_q23",
        "num": 23,
        "stem": "We ---- last night, but we went to the concert instead.",
        "options": {
          "A": "must have studied",
          "B": "might study",
          "C": "should have studied",
          "D": "would study"
        },
        "answer": "C",
        "explanation": "Cấu trúc 'should have + V3/ed' diễn tả việc đáng lẽ nên làm trong quá khứ ('last night') nhưng thực tế lại không làm (đi xem hòa nhạc thay vì học)."
      },
      {
        "id": "modal_verbs_q25",
        "num": 25,
        "stem": "Jane ---- have kept her word. I wonder why she changed her mind.",
        "options": {
          "A": "must",
          "B": "should",
          "C": "need",
          "D": "would"
        },
        "answer": "B",
        "explanation": "Cấu trúc 'should have + V3/ed' diễn tả điều đáng lẽ nên làm trong quá khứ nhưng đã không xảy ra (Jane đáng lẽ nên giữ lời nhưng cô ấy lại đổi ý)."
      },
      {
        "id": "modal_verbs_q26",
        "num": 26,
        "stem": "He ---- you more help, even though he was very busy.",
        "options": {
          "A": "might have given",
          "B": "might give",
          "C": "can’t have given",
          "D": "may give"
        },
        "answer": "A",
        "explanation": "Cấu trúc 'might have + V3/ed' diễn tả một việc đáng lẽ có thể đã làm trong quá khứ (phù hợp với ngữ cảnh quá khứ 'was very busy', mang hàm ý trách nhẹ)."
      },
      {
        "id": "modal_verbs_q27",
        "num": 27,
        "stem": "I didn’t hear the phone. I ---- asleep.",
        "options": {
          "A": "must be",
          "B": "must have been",
          "C": "should be",
          "D": "should have been"
        },
        "answer": "B",
        "explanation": "Cấu trúc 'must have + V3/ed' diễn tả sự suy đoán có cơ sở chắc chắn về một sự việc đã xảy ra trong quá khứ (phù hợp với 'didn’t hear')."
      },
      {
        "id": "modal_verbs_q28",
        "num": 28,
        "stem": "Mother ---- us stories when we were young.",
        "options": {
          "A": "was used to tell",
          "B": "is used to telling",
          "C": "used to tell",
          "D": "used to telling"
        },
        "answer": "C",
        "explanation": "Cấu trúc 'used to + V(nguyên mẫu)' diễn tả một thói quen trong quá khứ nay không còn nữa, phù hợp với 'when we were young'."
      },
      {
        "id": "modal_verbs_q29",
        "num": 29,
        "stem": "You ---- return the book now. You can keep it till next week.",
        "options": {
          "A": "can’t",
          "B": "mustn’t",
          "C": "needn’t",
          "D": "may not"
        },
        "answer": "C",
        "explanation": "Dùng 'needn’t' (không cần thiết) vì ngữ cảnh cho phép giữ sách đến tuần sau ('You can keep it till next week')."
      },
      {
        "id": "modal_verbs_q30",
        "num": 30,
        "stem": "The plant is dead. I ---- it more water.",
        "options": {
          "A": "will give",
          "B": "would have given",
          "C": "must give",
          "D": "should have given"
        },
        "answer": "D",
        "explanation": "Cấu trúc 'should have + V3/ed' diễn tả sự hối tiếc về một việc đáng lẽ nên làm trong quá khứ nhưng đã không làm (cây chết nên lẽ ra phải tưới nhiều nước hơn)."
      },
      {
        "id": "modal_verbs_q31",
        "num": 31,
        "stem": "“Must we do it now?” - “No, you ----“",
        "options": {
          "A": "won’t",
          "B": "needn’t",
          "C": "can’t",
          "D": "don’t"
        },
        "answer": "B",
        "explanation": "Để trả lời phủ định cho câu hỏi bắt đầu bằng 'Must...?' với nghĩa 'không cần thiết', ta dùng 'No, S + needn’t'."
      },
      {
        "id": "modal_verbs_q32",
        "num": 32,
        "stem": "Hurry up! Tom ---- for us at the school gate.",
        "options": {
          "A": "must wait",
          "B": "must be waiting",
          "C": "must be waited",
          "D": "must waiting"
        },
        "answer": "B",
        "explanation": "Dùng cấu trúc suy đoán một hành động chắc hẳn đang diễn ra ở hiện tại: must be + V-ing ('Hurry up!' cho thấy hành động đang xảy ra ngay lúc nói)."
      },
      {
        "id": "modal_verbs_q33",
        "num": 33,
        "stem": "“I think Jane is at home.” “No, she ---- be at home, for she phoned me from the airport just ten minutes ago”",
        "options": {
          "A": "mustn’t",
          "B": "need n’t",
          "C": "can’t",
          "D": "daren’t"
        },
        "answer": "C",
        "explanation": "Dùng 'can't + V' để đưa ra suy đoán phủ định có cơ sở ở hiện tại (chắc chắn không thể ở nhà vì vừa gọi từ sân bay 10 phút trước). 'Mustn't' mang nghĩa cấm đoán, không dùng để suy đoán."
      },
      {
        "id": "modal_verbs_q34",
        "num": 34,
        "stem": "There are so many types here, and I don’t really know which one I ---- choose.",
        "options": {
          "A": "should",
          "B": "can",
          "C": "may",
          "D": "must"
        },
        "answer": "A",
        "explanation": "Dùng 'should' (nên) để diễn tả sự phân vân về lựa chọn hoặc lời khuyên phù hợp nhất (không biết nên chọn loại nào)."
      },
      {
        "id": "modal_verbs_q35",
        "num": 35,
        "stem": "I ---- play basketball than football.",
        "options": {
          "A": "would rather",
          "B": "had better",
          "C": "like better",
          "D": "prefer"
        },
        "answer": "A",
        "explanation": "Cấu trúc diễn tả sự yêu thích hơn: 'would rather + V-inf + ... + than + ...'. 'Prefer' phải đi với giới từ 'to' chứ không đi với 'than'."
      },
      {
        "id": "modal_verbs_q36",
        "num": 36,
        "stem": "You’d better ---- late next time",
        "options": {
          "A": "don’t",
          "B": "not be",
          "C": "not being",
          "D": "won’t be"
        },
        "answer": "B",
        "explanation": "Dạng phủ định của 'had better' là 'had better not + V-inf' (tốt hơn hết là đừng...), nên điền 'not be'."
      },
      {
        "id": "modal_verbs_q37",
        "num": 37,
        "stem": "I ---- like to know where you were born.",
        "options": {
          "A": "shall",
          "B": "would",
          "C": "could",
          "D": "may"
        },
        "answer": "B",
        "explanation": "Cụm từ cố định 'would like to + V-inf' dùng để diễn tả mong muốn một cách lịch sự (tôi muốn biết bạn sinh ra ở đâu)."
      },
      {
        "id": "modal_verbs_q38",
        "num": 38,
        "stem": "You ---- the look on his face when he won the prize.",
        "options": {
          "A": "would have seen",
          "B": "can be seeing",
          "C": "must see",
          "D": "should have seen"
        },
        "answer": "D",
        "explanation": "Cấu trúc 'should have + V3/ed' diễn tả một việc đáng lẽ nên xảy ra trong quá khứ (bạn đáng lẽ nên/giá mà thấy được vẻ mặt của anh ấy lúc thắng giải)."
      },
      {
        "id": "modal_verbs_q39",
        "num": 39,
        "stem": "When my father was young, he ---- work in the garden for long hours.",
        "options": {
          "A": "can",
          "B": "could",
          "C": "couldn’t",
          "D": "should"
        },
        "answer": "B",
        "explanation": "Mệnh đề 'When my father was young' chỉ thời điểm quá khứ, nên dùng 'could + V-inf' để diễn tả khả năng chung trong quá khứ."
      },
      {
        "id": "modal_verbs_q40",
        "num": 40,
        "stem": "He ---- have committed the crime because he was with me that day.",
        "options": {
          "A": "must",
          "B": "mustn’t",
          "C": "won’t",
          "D": "couldn’t"
        },
        "answer": "D",
        "explanation": "Dùng 'couldn't have + V3/ed' để đưa ra suy đoán phủ định chắc chắn về một sự việc trong quá khứ (chắc chắn đã không thể phạm tội vì hôm đó ở cùng tôi)."
      },
      {
        "id": "modal_verbs_q41",
        "num": 41,
        "stem": "Since we have to be there by 8.30, we ---- take a taxi.",
        "options": {
          "A": "had better",
          "B": "may",
          "C": "ought",
          "D": "are able to"
        },
        "answer": "A",
        "explanation": "Dùng 'had better + V-inf' để đưa ra lời khuyên/đề xuất cấp thiết trong tình huống cụ thể (tốt hơn hết là nên bắt taxi để kịp 8h30). 'Ought' sai ngữ pháp vì thiếu 'to'."
      },
      {
        "id": "modal_verbs_q42",
        "num": 42,
        "stem": "She hasn’t eaten anything since yesterday. She ----- be really hungry.",
        "options": {
          "A": "might",
          "B": "will",
          "C": "must",
          "D": "can"
        },
        "answer": "C",
        "explanation": "Dùng 'must + V-inf' để suy đoán có căn cứ logic ở hiện tại (chưa ăn gì từ hôm qua nên chắc hẳn cô ấy rất đói)."
      },
      {
        "id": "modal_verbs_q43",
        "num": 43,
        "stem": "I put my keys on the table, but now it’s gone. Someone ---- have taken it.",
        "options": {
          "A": "must",
          "B": "had to",
          "C": "should",
          "D": "would rather."
        },
        "answer": "A",
        "explanation": "Dùng 'must have + V3/ed' để suy đoán chắc chắn về một hành động đã xảy ra trong quá khứ dựa trên dấu hiệu hiện tại (chìa khóa biến mất nên chắc hẳn ai đó đã lấy)."
      },
      {
        "id": "modal_verbs_q44",
        "num": 44,
        "stem": "Daisy is reading her English test because she will have a test tomorrow. She ---- be studying.",
        "options": {
          "A": "will",
          "B": "would",
          "C": "must",
          "D": "can"
        },
        "answer": "C",
        "explanation": "Dùng 'must be + V-ing' để suy đoán chắc chắn một hành động đang diễn ra ở hiện tại dựa trên ngữ cảnh (cô ấy đang đọc tài liệu cho bài kiểm tra ngày mai nên chắc hẳn đang học bài)."
      },
      {
        "id": "modal_verbs_q45",
        "num": 45,
        "stem": "We ---- put the fish in the fridge before it spoils.",
        "options": {
          "A": "would",
          "B": "may",
          "C": "must",
          "D": "had better"
        },
        "answer": "D",
        "explanation": "Dùng 'had better + V-inf' để đưa ra lời khuyên mang tính cảnh báo về hậu quả xấu nếu không thực hiện ngay (tốt hơn hết là nên cất cá vào tủ lạnh trước khi nó bị hỏng)."
      }
    ]
  },
  {
    "id": "parts_of_speech_1",
    "title": "Từ loại 1 (Parts of Speech 1)",
    "desc": "Nhận biết & vị trí Danh từ, Động từ, Tính từ, Trạng từ",
    "icon": "🏷️",
    "count": 96,
    "questions": [
      {
        "id": "parts_of_speech_1_q1",
        "num": 1,
        "stem": "The two sides were no closer to a final ------ at midnight than they were at noon.",
        "options": {
          "A": "agreement",
          "B": "agreeable",
          "C": "agree",
          "D": "agreed"
        },
        "answer": "A",
        "explanation": "Sau mạo từ 'a' và tính từ 'final' cần một danh từ đếm được số ít. 'agreement' (n) nghĩa là thỏa thuận."
      },
      {
        "id": "parts_of_speech_1_q2",
        "num": 2,
        "stem": "Our union representative ----- members that our rights would be defended.",
        "options": {
          "A": "assured",
          "B": "assurance",
          "C": "assuredly",
          "D": "assure"
        },
        "answer": "A",
        "explanation": "Câu thiếu động từ chính sau chủ ngữ số ít 'Our union representative'. Mệnh đề phụ chia quá khứ ('would be defended') nên chọn động từ quá khứ 'assured' (đã cam đoan)."
      },
      {
        "id": "parts_of_speech_1_q3",
        "num": 3,
        "stem": "If you ------your reservation 48 hours in advance, you will not be billed.",
        "options": {
          "A": "will cancel",
          "B": "cancel",
          "C": "cancellation",
          "D": "canceled"
        },
        "answer": "B",
        "explanation": "Câu điều kiện loại 1 (If + S + V hiện tại đơn, S + will + V nguyên mẫu). Chủ ngữ 'you' đi với động từ nguyên mẫu 'cancel'."
      },
      {
        "id": "parts_of_speech_1_q4",
        "num": 4,
        "stem": "I don’t feel any ------ to give my boss more than two weeks notice when I leave.",
        "options": {
          "A": "oblige",
          "B": "obligatory",
          "C": "obliged",
          "D": "obligation"
        },
        "answer": "D",
        "explanation": "Sau từ hạn định 'any' (làm tân ngữ cho động từ 'feel') cần một danh từ. 'obligation' (n) nghĩa là nghĩa vụ, sự bắt buộc."
      },
      {
        "id": "parts_of_speech_1_q5",
        "num": 5,
        "stem": "The ----- for terminating the contract were not discussed.",
        "options": {
          "A": "provide",
          "B": "provisions",
          "C": "provider",
          "D": "provisioning"
        },
        "answer": "B",
        "explanation": "Sau mạo từ 'The' cần danh từ làm chủ ngữ. Động từ chính 'were' ở số nhiều nên chọn danh từ số nhiều 'provisions' (các điều khoản hợp đồng)."
      },
      {
        "id": "parts_of_speech_1_q6",
        "num": 6,
        "stem": "The contract calls for the union to ----- who their bargaining representative will be.",
        "options": {
          "A": "specific",
          "B": "specification",
          "C": "specifying",
          "D": "specify"
        },
        "answer": "D",
        "explanation": "Cấu trúc 'call for + O + to + V nguyên mẫu' (yêu cầu ai làm gì). Sau 'to' cần động từ nguyên mẫu 'specify' (chỉ rõ, quy định cụ thể)."
      },
      {
        "id": "parts_of_speech_1_q7",
        "num": 7,
        "stem": "Marketing specialists have conducted extensive studies of what ---- customers to a particular product.",
        "options": {
          "A": "attractive",
          "B": "attraction",
          "C": "attracts",
          "D": "attracting"
        },
        "answer": "C",
        "explanation": "Trong mệnh đề danh ngữ 'what ---- customers...', 'what' đóng vai trò chủ ngữ số ít nên cần động từ chia ở ngôi thứ ba số ít 'attracts' (thu hút)."
      },
      {
        "id": "parts_of_speech_1_q8",
        "num": 8,
        "stem": "Smart phones will ------ similar brands of an item before making a decision.",
        "options": {
          "A": "compare",
          "B": "comparison",
          "C": "comparative",
          "D": "comparable"
        },
        "answer": "A",
        "explanation": "Sau động từ khuyết thiếu 'will' cần một động từ nguyên mẫu. 'compare' (v) nghĩa là so sánh."
      },
      {
        "id": "parts_of_speech_1_q9",
        "num": 9,
        "stem": "If our work isn’t to your -----, please notify is within 60 days.",
        "options": {
          "A": "satisfy",
          "B": "satisfactory",
          "C": "satisfaction",
          "D": "satisfied"
        },
        "answer": "C",
        "explanation": "Sau tính từ sở hữu 'your' (và trong cụm 'to one's satisfaction' - làm ai hài lòng) cần một danh từ: 'satisfaction' (sự hài lòng)."
      },
      {
        "id": "parts_of_speech_1_q10",
        "num": 10,
        "stem": "Manufacturers like to know what features ---- find useful.",
        "options": {
          "A": "consumers",
          "B": "consume",
          "C": "consumption",
          "D": "consumable"
        },
        "answer": "A",
        "explanation": "Mệnh đề 'what features ---- find useful' thiếu chủ ngữ chỉ người ở dạng số nhiều (tương ứng với động từ 'find'). 'consumers' (người tiêu dùng) là đáp án đúng."
      },
      {
        "id": "parts_of_speech_1_q11",
        "num": 11,
        "stem": "Without good -----, good products can go unsold.",
        "options": {
          "A": "market",
          "B": "marketable",
          "C": "marketed",
          "D": "marketing"
        },
        "answer": "D",
        "explanation": "Sau giới từ 'Without' và tính từ 'good' (không có mạo từ) cần một danh từ không đếm được. 'marketing' (n) nghĩa là hoạt động tiếp thị."
      },
      {
        "id": "parts_of_speech_1_q12",
        "num": 12,
        "stem": "A careful analysis of the ----- products on the market indicated that our product lacked innovation and optional features.",
        "options": {
          "A": "compete",
          "B": "competing",
          "C": "competed",
          "D": "competition"
        },
        "answer": "B",
        "explanation": "Giữa mạo từ 'the' và danh từ 'products' cần một tính từ/phân từ bổ nghĩa mang nghĩa chủ động. 'competing products' nghĩa là các sản phẩm cạnh tranh."
      },
      {
        "id": "parts_of_speech_1_q13",
        "num": 13,
        "stem": "The timing belt ---- shows signs of wear after about 180,000 miles.",
        "options": {
          "A": "character",
          "B": "characteristic",
          "C": "characterize",
          "D": "characteristically"
        },
        "answer": "D",
        "explanation": "Giữa chủ ngữ 'The timing belt' và động từ thường 'shows' cần một trạng từ bổ nghĩa cho động từ. 'characteristically' (adv) nghĩa là theo đặc trưng, thường là."
      },
      {
        "id": "parts_of_speech_1_q14",
        "num": 14,
        "stem": "John and Lily will only ---- purchasing appliances that come with a money-back guarantee.",
        "options": {
          "A": "consideration",
          "B": "consider",
          "C": "considering",
          "D": "considerable"
        },
        "answer": "B",
        "explanation": "Sau động từ khuyết thiếu 'will' (và trạng từ 'only') cần động từ nguyên mẫu. 'consider' (v) đi với V-ing ('purchasing') mang nghĩa cân nhắc."
      },
      {
        "id": "parts_of_speech_1_q15",
        "num": 15,
        "stem": "If there is any ---- of the director’s involvement, we need to follow up swiftly and thoroughly.",
        "options": {
          "A": "imply",
          "B": "implicit",
          "C": "implicated",
          "D": "implication"
        },
        "answer": "D",
        "explanation": "Sau 'there is any' cần một danh từ số ít hoặc không đếm được. 'implication' (n) nghĩa là dấu hiệu dính líu, sự liên quan."
      },
      {
        "id": "parts_of_speech_1_q16",
        "num": 16,
        "stem": "The level of ---- implied by the warranty was misleading.",
        "options": {
          "A": "protect",
          "B": "protective",
          "C": "protection",
          "D": "protector"
        },
        "answer": "C",
        "explanation": "Sau giới từ 'of' cần một danh từ. Xét ngữ cảnh 'mức độ bảo vệ được ngụ ý bởi chế độ bảo hành', chọn danh từ 'protection' (sự bảo vệ), không chọn 'protector' (người/vật bảo vệ)."
      },
      {
        "id": "parts_of_speech_1_q17",
        "num": 17,
        "stem": "It can be very helpful to consider the ---- of the manufacturer and the merchant when making a major purchase.",
        "options": {
          "A": "reputation",
          "B": "reputable",
          "C": "reputing",
          "D": "reputed"
        },
        "answer": "A",
        "explanation": "Giữa mạo từ 'the' và giới từ 'of' cần một danh từ. Chọn 'reputation' (danh tiếng)."
      },
      {
        "id": "parts_of_speech_1_q18",
        "num": 18,
        "stem": "If the appliance breaks down within two years of purchase, the manufacturer is ---- to send you a replacement at no charge.",
        "options": {
          "A": "requiring",
          "B": "requisite",
          "C": "requirement",
          "D": "required"
        },
        "answer": "D",
        "explanation": "Cấu trúc bị động 'be required to + V-inf' mang nghĩa được yêu cầu/bắt buộc phải làm gì."
      },
      {
        "id": "parts_of_speech_1_q19",
        "num": 19,
        "stem": "You cannot ---- learning how to use the new software as it will be needed in daily operations from now on",
        "options": {
          "A": "avoid",
          "B": "avoided",
          "C": "avoiding",
          "D": "avoidance"
        },
        "answer": "A",
        "explanation": "Sau động từ khuyết thiếu 'cannot' cần một động từ nguyên thể (V-inf). Cấu trúc 'avoid + V-ing' (tránh làm gì)."
      },
      {
        "id": "parts_of_speech_1_q20",
        "num": 20,
        "stem": "While you are ---- your business plan, it is a good idea to keep a resource library of valuable materials.",
        "options": {
          "A": "develop",
          "B": "development",
          "C": "developing",
          "D": "developer"
        },
        "answer": "C",
        "explanation": "Cần dạng V-ing 'developing' để tạo thành thì hiện tại tiếp diễn thể chủ động ('are developing') vì phía sau có tân ngữ 'your business plan'."
      },
      {
        "id": "parts_of_speech_1_q21",
        "num": 21,
        "stem": "I don’t want to intrude, but would you like me to ---- how to use that machine?",
        "options": {
          "A": "demonstrate",
          "B": "demonstration",
          "C": "demonstrative",
          "D": "demonstrator"
        },
        "answer": "A",
        "explanation": "Theo cấu trúc 'would like someone to + V-inf', sau 'to' cần một động từ nguyên thể. Chọn 'demonstrate' (hướng dẫn/trình bày)."
      },
      {
        "id": "parts_of_speech_1_q22",
        "num": 22,
        "stem": "After you turn in your business plan, you will receive a written --- of your work within two weeks.",
        "options": {
          "A": "evaluator",
          "B": "evaluative",
          "C": "evaluate",
          "D": "evaluation"
        },
        "answer": "D",
        "explanation": "Sau mạo từ 'a' và tính từ 'written' cần một danh từ số ít. Về nghĩa 'một bản đánh giá bằng văn bản', chọn 'evaluation' (sự/bản đánh giá), không chọn 'evaluator' (người đánh giá)."
      },
      {
        "id": "parts_of_speech_1_q23",
        "num": 23,
        "stem": "If we think -----, we can come up with a plan that promises success.",
        "options": {
          "A": "strategize",
          "B": "strategic",
          "C": "strategically",
          "D": "strategist"
        },
        "answer": "C",
        "explanation": "Cần một trạng từ để bổ nghĩa cho động từ thường 'think'. Chọn 'strategically' (một cách chiến lược)."
      },
      {
        "id": "parts_of_speech_1_q24",
        "num": 24,
        "stem": "If is now legal to ---- a generic brand drug for a prescription medicine if you have a patient’s consent.",
        "options": {
          "A": "substitute",
          "B": "substituted",
          "C": "substituting",
          "D": "substitution"
        },
        "answer": "A",
        "explanation": "Theo cấu trúc 'It is + adj + to + V-inf', sau 'to' cần động từ nguyên thể. Chọn 'substitute' (thay thế)."
      },
      {
        "id": "parts_of_speech_1_q25",
        "num": 25,
        "stem": "The banquet room could ---- up to 750 for dinner.",
        "options": {
          "A": "accommodated",
          "B": "accommodate",
          "C": "accommodation",
          "D": "accommodating"
        },
        "answer": "B",
        "explanation": "Sau động từ khuyết thiếu 'could' cần động từ nguyên thể (V-inf). Chọn 'accommodate' (chứa được/đáp ứng được)."
      },
      {
        "id": "parts_of_speech_1_q26",
        "num": 26,
        "stem": "Helen made the final ----for use of the conference room with the hotel’s general manager.",
        "options": {
          "A": "arranging",
          "B": "arrange",
          "C": "arrangement",
          "D": "arranged"
        },
        "answer": "C",
        "explanation": "Sau mạo từ 'the' và tính từ 'final' cần một danh từ. Cụm cố định 'make an/the arrangement' (thu xếp/sắp đặt)."
      },
      {
        "id": "parts_of_speech_1_q27",
        "num": 27,
        "stem": "For most people, Samco is ---- with computer chip production.",
        "options": {
          "A": "associate",
          "B": "associated",
          "C": "associating",
          "D": "association"
        },
        "answer": "B",
        "explanation": "Cụm từ cố định dạng bị động 'be associated with' mang nghĩa được gắn liền/liên kết với."
      },
      {
        "id": "parts_of_speech_1_q28",
        "num": 28,
        "stem": "We expect that fewer guests will ----the evening gala.",
        "options": {
          "A": "attend",
          "B": "attending",
          "C": "attention",
          "D": "attendance"
        },
        "answer": "A",
        "explanation": "Sau trợ động từ 'will' cần một động từ nguyên thể (V-inf). Chọn 'attend' (tham dự)."
      },
      {
        "id": "parts_of_speech_1_q29",
        "num": 29,
        "stem": "The association’s members were asked to ---- for the special session well in advance because space in the lecture hall was limited.",
        "options": {
          "A": "register",
          "B": "registration",
          "C": "registering",
          "D": "registrar"
        },
        "answer": "A",
        "explanation": "Theo cấu trúc bị động 'be asked to + V-inf' (được yêu cầu làm gì), sau 'to' cần động từ nguyên thể. Chọn 'register' (đăng ký)."
      },
      {
        "id": "parts_of_speech_1_q30",
        "num": 30,
        "stem": "By adding more class ----, the staff was able to please more members.",
        "options": {
          "A": "select",
          "B": "selective",
          "C": "selecting",
          "D": "selections"
        },
        "answer": "D",
        "explanation": "Sau 'more' và danh từ bổ nghĩa 'class' cần một danh từ số nhiều để tạo thành cụm danh từ 'class selections' (các lựa chọn lớp học)."
      },
      {
        "id": "parts_of_speech_1_q31",
        "num": 31,
        "stem": "In order to ---- your email messages, you must type in your password.",
        "options": {
          "A": "access",
          "B": "accessible",
          "C": "accessed",
          "D": "accessibility"
        },
        "answer": "A",
        "explanation": "Sau cấu trúc 'In order to' (để làm gì) cần một động từ nguyên mẫu (V-inf). Chọn 'access' (truy cập)."
      },
      {
        "id": "parts_of_speech_1_q32",
        "num": 32,
        "stem": "After reviewing the schedule, I realized we had not ---- enough time for the software training.",
        "options": {
          "A": "allocate",
          "B": "allocated",
          "C": "allocating",
          "D": "allocation"
        },
        "answer": "B",
        "explanation": "Thì quá khứ hoàn thành có cấu trúc 'had (not) + V3/V-ed'. Chọn quá khứ phân từ 'allocated' (đã phân bổ)."
      },
      {
        "id": "parts_of_speech_1_q33",
        "num": 33,
        "stem": "The computer staff is responsible for making sure all system files are -----.",
        "options": {
          "A": "duplication",
          "B": "duplicated",
          "C": "duplicator",
          "D": "duplicate"
        },
        "answer": "B",
        "explanation": "Cấu trúc bị động 'be + V3/V-ed' để diễn tả các tệp hệ thống được sao lưu/nhân bản. Chọn 'duplicated'."
      },
      {
        "id": "parts_of_speech_1_q34",
        "num": 34,
        "stem": "---- to examine the capabilities of the computer carefully has cost us a lot of time and money.",
        "options": {
          "A": "fail",
          "B": "failure",
          "C": "failed",
          "D": "fallible"
        },
        "answer": "B",
        "explanation": "Vị trí đầu câu trước động từ 'has cost' cần một danh từ làm chủ ngữ. Cụm 'Failure to + V' có nghĩa là 'việc không làm gì'."
      },
      {
        "id": "parts_of_speech_1_q35",
        "num": 35,
        "stem": "She ----the warning that the hard drive was full, and consequently they were unable to save the test data.",
        "options": {
          "A": "ignore",
          "B": "ignored",
          "C": "ignoring",
          "D": "ignorant"
        },
        "answer": "B",
        "explanation": "Vị trí cần động từ chính chia theo chủ ngữ 'She'. Ngữ cảnh ở thì quá khứ ('was full', 'were unable') nên chọn động từ quá khứ đơn 'ignored' (đã phớt lờ)."
      },
      {
        "id": "parts_of_speech_1_q36",
        "num": 36,
        "stem": "The computer will ---- you to save your work before quitting.",
        "options": {
          "A": "warning",
          "B": "warned",
          "C": "warn",
          "D": "warns"
        },
        "answer": "C",
        "explanation": "Sau động từ khuyết thiếu 'will' cần một động từ nguyên mẫu không 'to' (V-inf). Chọn 'warn' (cảnh báo)."
      },
      {
        "id": "parts_of_speech_1_q37",
        "num": 37,
        "stem": "---- is still a major concern for inner-city schools that want to install computers.",
        "options": {
          "A": "afford",
          "B": "affording",
          "C": "affordable",
          "D": "affordability"
        },
        "answer": "D",
        "explanation": "Vị trí đầu câu trước động từ số ít 'is' cần một danh từ làm chủ ngữ. Chọn 'affordability' (khả năng chi trả)."
      },
      {
        "id": "parts_of_speech_1_q38",
        "num": 38,
        "stem": "Hoping to repeat the success of the previous year’s sales ---, the vice president hell a meeting of all the managers.",
        "options": {
          "A": "initiated",
          "B": "initiating",
          "C": "initiative",
          "D": "initiation"
        },
        "answer": "C",
        "explanation": "Sau cụm 'the previous year’s sales' cần một danh từ để hoàn thành cụm danh từ. Chọn 'initiative' (sáng kiến/chiến dịch: sales initiative) phù hợp ngữ cảnh hơn 'initiation' (sự khởi đầu/kết nạp)."
      },
      {
        "id": "parts_of_speech_1_q39",
        "num": 39,
        "stem": "The athlete’s extraordinary ---- distracted customers from the auto itself.",
        "options": {
          "A": "physique",
          "B": "physical",
          "C": "physicality",
          "D": "physically"
        },
        "answer": "A",
        "explanation": "Sau sở hữu cách và tính từ 'The athlete’s extraordinary' cần một danh từ. Chọn 'physique' (vóc dáng, thể hình) phù hợp ngữ cảnh nói về vận động viên."
      },
      {
        "id": "parts_of_speech_1_q40",
        "num": 40,
        "stem": "As promised in our last meeting, this contract ---- you with the best prices.",
        "options": {
          "A": "provide",
          "B": "provides",
          "C": "provision",
          "D": "provider"
        },
        "answer": "B",
        "explanation": "Câu thiếu động từ chính cho chủ ngữ số ít 'this contract' ở thì hiện tại đơn. Chọn 'provides' (cung cấp: provide sb with sth)."
      },
      {
        "id": "parts_of_speech_1_q41",
        "num": 41,
        "stem": "When a problem ---- frequently, it is time to reexamine the process/",
        "options": {
          "A": "recur",
          "B": "recurrence",
          "C": "recurring",
          "D": "recurs"
        },
        "answer": "D",
        "explanation": "Mệnh đề 'When' thiếu động từ chính cho chủ ngữ số ít 'a problem', kết hợp trạng từ 'frequently' (thì hiện tại đơn). Chọn 'recurs' (tái diễn)."
      },
      {
        "id": "parts_of_speech_1_q42",
        "num": 42,
        "stem": "The employee preferred to have a --- in salary than to have to continue working with her outdated computer.",
        "options": {
          "A": "reducing",
          "B": "reduction",
          "C": "reduce",
          "D": "reduces"
        },
        "answer": "B",
        "explanation": "Sau mạo từ 'a' và trước giới từ 'in' cần một danh từ đếm được số ít. Chọn 'reduction' (sự cắt giảm: a reduction in salary)."
      },
      {
        "id": "parts_of_speech_1_q43",
        "num": 43,
        "stem": "Ms. Handa was unable to express her ---- for all that her colleagues had done for her.",
        "options": {
          "A": "appreciation",
          "B": "appreciated",
          "C": "appreciating",
          "D": "appreciates"
        },
        "answer": "A",
        "explanation": "Sau tính từ sở hữu 'her' cần một danh từ. Chọn 'appreciation' (sự cảm kích, lòng biết ơn)."
      },
      {
        "id": "parts_of_speech_1_q44",
        "num": 44,
        "stem": "The programmer is ---- the message so that it’s not accessible to every one.",
        "options": {
          "A": "code",
          "B": "coding",
          "C": "coded",
          "D": "coder"
        },
        "answer": "B",
        "explanation": "Phía sau chỗ trống có tân ngữ 'the message' nên dùng dạng chủ động của thì hiện tại tiếp diễn 'is + V-ing'. Chọn 'coding' (đang mã hóa)."
      },
      {
        "id": "parts_of_speech_1_q45",
        "num": 45,
        "stem": "It looks like this disk was ---- in intense heat, because it’s warped and pocked.",
        "options": {
          "A": "expose",
          "B": "exposed",
          "C": "exposing",
          "D": "exposure"
        },
        "answer": "B",
        "explanation": "Cấu trúc bị động thì quá khứ đơn 'was + V3/V-ed' để diễn tả chiếc đĩa đã bị tiếp xúc với nhiệt độ cao. Chọn 'exposed'."
      },
      {
        "id": "parts_of_speech_1_q46",
        "num": 46,
        "stem": "The ---- of answering each telephone call on the third ring requires a dedicated receptionist.",
        "options": {
          "A": "practices",
          "B": "practical",
          "C": "practiced",
          "D": "practice"
        },
        "answer": "D",
        "explanation": "Giữa mạo từ 'The' và giới từ 'of' cần một danh từ làm chủ ngữ; động từ chính 'requires' chia ở số ít nên chọn danh từ số ít 'practice' (quy trình/thói quen)."
      },
      {
        "id": "parts_of_speech_1_q47",
        "num": 47,
        "stem": "Tom painted his room black. It looks dark and dreary. He ---- have chosen another color.",
        "options": {
          "A": "should",
          "B": "must",
          "C": "could",
          "D": "may"
        },
        "answer": "A",
        "explanation": "Cấu trúc 'should have + V3/ed' diễn tả sự hối tiếc hoặc việc lẽ ra nên làm trong quá khứ nhưng đã không làm (lẽ ra anh ấy nên chọn màu sơn khác)."
      },
      {
        "id": "parts_of_speech_1_q48",
        "num": 48,
        "stem": "You ---- throw litter on the streets.",
        "options": {
          "A": "mustn’t",
          "B": "must",
          "C": "needn’t",
          "D": "won’t"
        },
        "answer": "A",
        "explanation": "Động từ khuyết thiếu 'mustn’t' diễn tả sự cấm đoán (bạn không được phép vứt rác ra đường)."
      },
      {
        "id": "parts_of_speech_1_q49",
        "num": 49,
        "stem": "My mother permitted me to go out at night. She said “ You ---- go out tonight”",
        "options": {
          "A": "may",
          "B": "have to",
          "C": "must",
          "D": "ought to"
        },
        "answer": "A",
        "explanation": "Ngữ cảnh có 'permitted' (cho phép), nên dùng động từ khuyết thiếu 'may' để diễn tả sự cho phép."
      },
      {
        "id": "parts_of_speech_1_q50",
        "num": 50,
        "stem": "It is possible that she will come to our party tonight. She ---- come here tonight.",
        "options": {
          "A": "need",
          "B": "may",
          "C": "can’t",
          "D": "would"
        },
        "answer": "B",
        "explanation": "Ngữ cảnh có 'It is possible' (có khả năng), nên dùng 'may' để diễn tả một khả năng có thể xảy ra ở hiện tại/tương lai."
      },
      {
        "id": "parts_of_speech_1_q51",
        "num": 51,
        "stem": "There is a ---- approach to software design integration that all the big software developers are currently learning.",
        "options": {
          "A": "revolutionized",
          "B": "revolutionary",
          "C": "revolution",
          "D": "revolt"
        },
        "answer": "B",
        "explanation": "Giữa mạo từ 'a' và danh từ 'approach' cần một tính từ bổ nghĩa; 'revolutionary' (mang tính cách mạng) phù hợp về từ loại và ngữ nghĩa."
      },
      {
        "id": "parts_of_speech_1_q52",
        "num": 52,
        "stem": "White Fabio’s ---- with computers surpasses the technicians, he is unable to communicate his personal needs to the office manager.",
        "options": {
          "A": "skill",
          "B": "skilled",
          "C": "skillful",
          "D": "skillfully"
        },
        "answer": "A",
        "explanation": "Sau sở hữu cách 'Fabio’s' và trước động từ số ít 'surpasses' cần một danh từ làm chủ ngữ, chọn 'skill' (kỹ năng)."
      },
      {
        "id": "parts_of_speech_1_q53",
        "num": 53,
        "stem": "The hard disk can ---- up to 25 gigabytes of data.",
        "options": {
          "A": "stores",
          "B": "storage",
          "C": "store",
          "D": "storing"
        },
        "answer": "C",
        "explanation": "Sau động từ khuyết thiếu 'can' cần một động từ nguyên mẫu không 'to', chọn 'store' (lưu trữ)."
      },
      {
        "id": "parts_of_speech_1_q54",
        "num": 54,
        "stem": "The newspaper article on the development of new fiber-optic cables was full of ---language that nobody could understand it.",
        "options": {
          "A": "technical",
          "B": "technically",
          "C": "technicality",
          "D": "technique"
        },
        "answer": "A",
        "explanation": "Trước danh từ 'language' cần một tính từ bổ nghĩa; cụm 'technical language' có nghĩa là ngôn ngữ chuyên ngành/kỹ thuật."
      },
      {
        "id": "parts_of_speech_1_q55",
        "num": 55,
        "stem": "I don’t want to --- matters, but have you considered using color to make your brochure stand out?",
        "options": {
          "A": "complicate",
          "B": "complication",
          "C": "complicated",
          "D": "complicating"
        },
        "answer": "A",
        "explanation": "Cấu trúc 'want to + V (nguyên mẫu)' cần động từ nguyên thể, chọn 'complicate' (làm phức tạp thêm vấn đề)."
      },
      {
        "id": "parts_of_speech_1_q56",
        "num": 56,
        "stem": "It’s worth --- in the memo that we’ve  finished the draft of the proposal.",
        "options": {
          "A": "mentionable",
          "B": "mentioning",
          "C": "mentions",
          "D": "mentioned"
        },
        "answer": "B",
        "explanation": "Theo cấu trúc cố định 'be worth + V-ing' (đáng để làm gì), chọn danh động từ 'mentioning'."
      },
      {
        "id": "parts_of_speech_1_q57",
        "num": 57,
        "stem": "The signatures on the ---- weren’t all legible because rain had caused the ink to run.",
        "options": {
          "A": "petition",
          "B": "petitioning",
          "C": "petitioners",
          "D": "petitioned"
        },
        "answer": "A",
        "explanation": "Sau mạo từ 'the' cần một danh từ chỉ vật mang các chữ ký ('signatures on the...'), chọn 'petition' (đơn kiến nghị) thay vì 'petitioners' (người kiến nghị)."
      },
      {
        "id": "parts_of_speech_1_q58",
        "num": 58,
        "stem": "To send out business letters without --- them is unprofessional.",
        "options": {
          "A": "proofing",
          "B": "proof",
          "C": "proofreader",
          "D": "proofread"
        },
        "answer": "A",
        "explanation": "Sau giới từ 'without' và có tân ngữ 'them' theo sau, cần một danh động từ (V-ing), chọn 'proofing' (hiệu đính/soát lỗi)."
      },
      {
        "id": "parts_of_speech_1_q59",
        "num": 59,
        "stem": "The mail room is rarely asked to send letters by ---- mail.",
        "options": {
          "A": "register",
          "B": "registered",
          "C": "register",
          "D": "registration"
        },
        "answer": "B",
        "explanation": "Trước danh từ 'mail' cần một tính từ bổ nghĩa; quá khứ phân từ 'registered' tạo thành cụm cố định 'registered mail' (thư bảo đảm)."
      },
      {
        "id": "parts_of_speech_1_q60",
        "num": 60,
        "stem": "After each ----, you need to reread what you’ve written and note your suggestions for changes.",
        "options": {
          "A": "revise",
          "B": "revised",
          "C": "revision",
          "D": "will revise"
        },
        "answer": "C",
        "explanation": "Sau từ hạn định 'each' cần một danh từ đếm được số ít, chọn 'revision' (lần chỉnh sửa/sửa đổi)."
      },
      {
        "id": "parts_of_speech_1_q61",
        "num": 61,
        "stem": "Your resume shows you have ---- a great deal in your last position.",
        "options": {
          "A": "accomplish",
          "B": "accomplishment",
          "C": "accomplished",
          "D": "accomplishing"
        },
        "answer": "C",
        "explanation": "Sau trợ động từ 'have' cần quá khứ phân từ (V3/V-ed) để tạo thì hiện tại hoàn thành -> 'accomplished' (đã đạt được)."
      },
      {
        "id": "parts_of_speech_1_q62",
        "num": 62,
        "stem": "This program is used to scan resume and search for key words that----.",
        "options": {
          "A": "match",
          "B": "matched",
          "C": "matching",
          "D": "will match"
        },
        "answer": "A",
        "explanation": "Đại từ quan hệ 'that' thay thế cho danh từ số nhiều 'key words'; câu ở thì hiện tại đơn diễn tả chức năng của chương trình nên cần động từ chia số nhiều 'match'."
      },
      {
        "id": "parts_of_speech_1_q63",
        "num": 63,
        "stem": "It is illegal to ---- candidates based on gender or ethnicity.",
        "options": {
          "A": "profile",
          "B": "profiling",
          "C": "profiled",
          "D": "will profile"
        },
        "answer": "A",
        "explanation": "Theo cấu trúc 'It is + adj + to + V (nguyên mẫu)', cần động từ nguyên mẫu 'profile' (phân loại/đánh giá hồ sơ)."
      },
      {
        "id": "parts_of_speech_1_q64",
        "num": 64,
        "stem": "The applicants who ---- will be flown to the corporate office and interviewed there.",
        "options": {
          "A": "qualification",
          "B": "qualify",
          "C": "qualifying",
          "D": "qualifies"
        },
        "answer": "B",
        "explanation": "Trong mệnh đề quan hệ 'who ----', 'who' thay thế cho danh từ số nhiều 'The applicants' nên động từ chính ở thì hiện tại đơn chia dạng số nhiều là 'qualify'."
      },
      {
        "id": "parts_of_speech_1_q65",
        "num": 65,
        "stem": "The company hired a professional ---- to fill the vacant positions.",
        "options": {
          "A": "recruited",
          "B": "recruiting",
          "C": "recruitment",
          "D": "recruiter"
        },
        "answer": "D",
        "explanation": "Sau mạo từ 'a' và tính từ 'professional' cần một danh từ đếm được số ít; xét ngữ cảnh thuê người lấp vị trí trống nên chọn danh từ chỉ người 'recruiter' (nhà tuyển dụng)."
      },
      {
        "id": "parts_of_speech_1_q66",
        "num": 66,
        "stem": "After --- all his materials, he had no option but to sit back and wait for some response.",
        "options": {
          "A": "submitting",
          "B": "submitted",
          "C": "submission",
          "D": "submit"
        },
        "answer": "A",
        "explanation": "Sau giới từ 'After' và trước tân ngữ 'all his materials' cần danh động từ (V-ing) mang nghĩa chủ động -> 'submitting' (nộp)."
      },
      {
        "id": "parts_of_speech_1_q67",
        "num": 67,
        "stem": "So many well-qualified people ---- for the position that we won’t be able to make a decision for several weeks.",
        "options": {
          "A": "apply",
          "B": "application",
          "C": "applicant",
          "D": "applied"
        },
        "answer": "D",
        "explanation": "Cần động từ chính cho chủ ngữ 'So many well-qualified people'. Hành động nộp đơn đã diễn ra dẫn đến kết quả chưa thể quyết định ngay, nên dùng thì quá khứ đơn 'applied'."
      },
      {
        "id": "parts_of_speech_1_q68",
        "num": 68,
        "stem": "As the interview continued, the applicant’s --- began to decline.",
        "options": {
          "A": "confidently",
          "B": "confident",
          "C": "confidence",
          "D": "confidential"
        },
        "answer": "C",
        "explanation": "Sau sở hữu cách 'the applicant’s' cần một danh từ làm chủ ngữ cho động từ 'began' -> 'confidence' (sự tự tin)."
      },
      {
        "id": "parts_of_speech_1_q69",
        "num": 69,
        "stem": "The applicant’s unique --- enabled her to have almost any job that she wanted.",
        "options": {
          "A": "expertise",
          "B": "experts",
          "C": "expertly",
          "D": "expert"
        },
        "answer": "A",
        "explanation": "Sau sở hữu cách 'The applicant’s' và tính từ 'unique' cần danh từ; về ngữ nghĩa cần danh từ chỉ năng lực chuyên môn 'expertise' thay vì danh từ chỉ người."
      },
      {
        "id": "parts_of_speech_1_q70",
        "num": 70,
        "stem": "She spoke without ---, expressing self-confidence and projecting that she has a firm handle on the information.",
        "options": {
          "A": "hesitant",
          "B": "hesitate",
          "C": "hesitatingly",
          "D": "hesitation"
        },
        "answer": "D",
        "explanation": "Sau giới từ 'without' cần một danh từ; cụm cố định 'without hesitation' nghĩa là không chút do dự."
      },
      {
        "id": "parts_of_speech_1_q71",
        "num": 71,
        "stem": "During an interview, it is important to --- your weaknesses in a way that shows you are working to improve them.",
        "options": {
          "A": "presentation",
          "B": "present",
          "C": "presentable",
          "D": "presenting"
        },
        "answer": "B",
        "explanation": "Theo cấu trúc 'it is + adj + to + V (nguyên mẫu)' và theo sau là tân ngữ 'your weaknesses', cần động từ nguyên mẫu 'present' (trình bày)."
      },
      {
        "id": "parts_of_speech_1_q72",
        "num": 72,
        "stem": "Her handshake had always felt like a dead fish and it was taken as a sign of a --- character.",
        "options": {
          "A": "weak",
          "B": "weakly",
          "C": "weakness",
          "D": "weakening"
        },
        "answer": "A",
        "explanation": "Giữa mạo từ 'a' và danh từ 'character' cần một tính từ bổ nghĩa -> 'weak' (yếu đuối)."
      },
      {
        "id": "parts_of_speech_1_q73",
        "num": 73,
        "stem": "The presentation was --- seamlessly, giving an impressive image of the team.",
        "options": {
          "A": "conduct",
          "D": "conductor",
          "C": "conducting"
        },
        "answer": "B",
        "explanation": "Chủ ngữ 'The presentation' là vật nên sau 'was' cần quá khứ phân từ (V-ed) để tạo thể bị động 'was conducted' (được tiến hành). Lưu ý: đáp án B ('conducted') bị thiếu trong dữ liệu đề bài."
      },
      {
        "id": "parts_of_speech_1_q74",
        "num": 74,
        "stem": "You need to consider how many new sales you --- in comparison to how many standing clients put in orders.",
        "options": {
          "A": "generator",
          "B": "generated",
          "C": "generating",
          "D": "generation"
        },
        "answer": "B",
        "explanation": "Trong mệnh đề 'how many new sales you ----', sau chủ ngữ 'you' cần một động từ chia thì; chỉ có 'generated' (tạo ra - thì quá khứ đơn) là động từ chia thì hợp lệ."
      },
      {
        "id": "parts_of_speech_1_q75",
        "num": 75,
        "stem": "After he was ---, he continued to take classes to upgrade his skills.",
        "options": {
          "A": "hiring",
          "B": "hires",
          "C": "hired",
          "D": "hire"
        },
        "answer": "C",
        "explanation": "Sau 'he was' cần quá khứ phân từ (V-ed) để tạo cấu trúc bị động thì quá khứ đơn -> 'was hired' (được tuyển dụng)."
      },
      {
        "id": "parts_of_speech_1_q76",
        "num": 76,
        "stem": "Unfortunately, not all candidates can be offered a job, some have to be ----.",
        "options": {
          "A": "rejected",
          "B": "rejecting",
          "C": "rejection",
          "D": "reject"
        },
        "answer": "A",
        "explanation": "Cấu trúc bị động 'have to be + V3/ed'. Chủ ngữ 'some' (một số ứng viên) phải bị từ chối, nên chọn phân từ quá khứ 'rejected'."
      },
      {
        "id": "parts_of_speech_1_q77",
        "num": 77,
        "stem": "The --- of the program depends on the active participation of everyone.",
        "options": {
          "A": "successfully",
          "B": "succeed",
          "C": "successful",
          "D": "success"
        },
        "answer": "D",
        "explanation": "Sau mạo từ 'The' và trước giới từ 'of' cần một danh từ làm chủ ngữ. Chọn 'success' (sự thành công)."
      },
      {
        "id": "parts_of_speech_1_q78",
        "num": 78,
        "stem": "In all my years of---, I have never seen such a motivated group of new hires.",
        "options": {
          "A": "trainee",
          "B": "training",
          "C": "trains",
          "D": "trainer"
        },
        "answer": "B",
        "explanation": "Sau giới từ 'of' cần danh từ hoặc danh động từ. 'training' (công tác đào tạo) phù hợp về ngữ pháp và ngữ cảnh ('years of training')."
      },
      {
        "id": "parts_of_speech_1_q79",
        "num": 79,
        "stem": "All temporary workers are paid on an hourly ---- and receive no benefits.",
        "options": {
          "A": "base",
          "B": "based",
          "C": "basis",
          "D": "basic"
        },
        "answer": "C",
        "explanation": "Cụm từ cố định 'on an hourly basis' (trả lương theo giờ). Sau mạo từ 'an' và tính từ 'hourly' cần danh từ 'basis'."
      },
      {
        "id": "parts_of_speech_1_q80",
        "num": 80,
        "stem": "Sometimes the manager is too --- and his workers take advantage of him.",
        "options": {
          "A": "flex",
          "B": "flexible",
          "C": "flexibly",
          "D": "flexibility"
        },
        "answer": "B",
        "explanation": "Sau động từ to-be 'is' và trạng từ 'too' cần một tính từ. Chọn 'flexible' (linh hoạt, dễ tính)."
      },
      {
        "id": "parts_of_speech_1_q81",
        "num": 81,
        "stem": "What is the company’s policy on --- for part-time workers?",
        "options": {
          "A": "benefited",
          "B": "beneficial",
          "C": "benefits",
          "D": "benefit"
        },
        "answer": "C",
        "explanation": "Sau giới từ 'on' cần một danh từ. Trong ngữ cảnh chính sách nhân sự, 'benefits' (các chế độ phúc lợi) luôn dùng ở dạng số nhiều."
      },
      {
        "id": "parts_of_speech_1_q82",
        "num": 82,
        "stem": "The tired employee hoped that she would be --- for all the long hours she kept and weekends she worked.",
        "options": {
          "A": "compensation",
          "B": "compensates",
          "C": "compensated",
          "D": "compensate"
        },
        "answer": "C",
        "explanation": "Cấu trúc bị động 'would be + V3/ed'. Nhân viên hy vọng sẽ được đền bù xứng đáng, nên chọn 'compensated'."
      },
      {
        "id": "parts_of_speech_1_q83",
        "num": 83,
        "stem": "If the --- continue into the evening, we will break for dinner at six.",
        "options": {
          "A": "negotiator",
          "B": "negotiations",
          "C": "negotiate",
          "D": "negotiated"
        },
        "answer": "B",
        "explanation": "Sau 'the' cần một danh từ làm chủ ngữ. Động từ chính 'continue' chia ở dạng số nhiều nên chọn danh từ số nhiều 'negotiations' (các cuộc đàm phán)."
      },
      {
        "id": "parts_of_speech_1_q84",
        "num": 84,
        "stem": "No one is sure what will happen to the company when the president finally---.",
        "options": {
          "A": "retires",
          "B": "retirement",
          "C": "retired",
          "D": "retiree"
        },
        "answer": "A",
        "explanation": "Mệnh đề trạng ngữ chỉ thời gian 'when + S + V (hiện tại đơn)' dùng cho sự việc tương lai. Chủ ngữ số ít 'the president' đi với động từ 'retires'."
      },
      {
        "id": "parts_of_speech_1_q85",
        "num": 85,
        "stem": "When he thought about his long career, he realized that his biggest ---- was in developing the new leaders of the company.",
        "options": {
          "A": "achiever",
          "B": "achieved",
          "C": "achievement",
          "D": "achieves"
        },
        "answer": "C",
        "explanation": "Sau tính từ sở hữu 'his' và tính từ so sánh nhất 'biggest' cần danh từ chỉ sự vật/kết quả. Chọn 'achievement' (thành tựu), không chọn 'achiever' (người đạt thành tựu)."
      },
      {
        "id": "parts_of_speech_1_q86",
        "num": 86,
        "stem": "She has --- so much time and energy to the project that her name should appear on the award.",
        "options": {
          "A": "contributes",
          "B": "contribution",
          "C": "contributed",
          "D": "contributor"
        },
        "answer": "C",
        "explanation": "Cấu trúc thì hiện tại hoàn thành 'has + V3/ed'. Chọn quá khứ phân từ 'contributed' (đã đóng góp)."
      },
      {
        "id": "parts_of_speech_1_q87",
        "num": 87,
        "stem": "Hard work and --- will help you move up the corporate ladder.",
        "options": {
          "A": "dedicated",
          "B": "dedicates",
          "C": "dedication",
          "D": "dedicate"
        },
        "answer": "C",
        "explanation": "Liên từ 'and' nối hai thành phần song song làm chủ ngữ. Trước 'and' là cụm danh từ 'Hard work', nên sau 'and' cần danh từ 'dedication' (sự cống hiến)."
      },
      {
        "id": "parts_of_speech_1_q88",
        "num": 88,
        "stem": "The is no reason to question her --- to our company.",
        "options": {
          "A": "loyal",
          "B": "loyally",
          "C": "loyalty",
          "D": "laurels"
        },
        "answer": "C",
        "explanation": "Sau tính từ sở hữu 'her' cần một danh từ. Cụm 'loyalty to' nghĩa là lòng trung thành với công ty, nên chọn 'loyalty'."
      },
      {
        "id": "parts_of_speech_1_q89",
        "num": 89,
        "stem": "These microchips are --- faster and more cheaply in Asia.",
        "options": {
          "A": "produce",
          "B": "produced",
          "C": "product",
          "D": "production"
        },
        "answer": "B",
        "explanation": "Cấu trúc bị động thì hiện tại đơn 'are + V3/ed'. Chủ ngữ 'These microchips' (những vi mạch này) được sản xuất, nên chọn 'produced'."
      },
      {
        "id": "parts_of_speech_1_q90",
        "num": 90,
        "stem": "Because you are a valued and dedicated employee, we are --- you to director of the department.",
        "options": {
          "A": "promoting",
          "B": "promote",
          "C": "promotion",
          "D": "promoter"
        },
        "answer": "A",
        "explanation": "Cấu trúc thì hiện tại tiếp diễn chủ động 'are + V-ing' vì phía sau có tân ngữ trực tiếp 'you'. Chọn 'promoting' (đang thăng chức)."
      },
      {
        "id": "parts_of_speech_1_q91",
        "num": 91,
        "stem": "It’s hard to tell if these shoes will be --- because the leather is so stiff.",
        "options": {
          "A": "comfort",
          "B": "comfortably",
          "C": "comfortable",
          "D": "comforting"
        },
        "answer": "C",
        "explanation": "Sau động từ to be (will be) cần tính từ bổ nghĩa cho chủ ngữ 'these shoes'. Chọn 'comfortable' (thoải mái, dễ chịu khi mang), khác với 'comforting' (an ủi tinh thần)."
      },
      {
        "id": "parts_of_speech_1_q92",
        "num": 92,
        "stem": "Due to the store’s success, the owners began to plan an --- into a larger location.",
        "options": {
          "A": "expansion",
          "B": "expand",
          "C": "expanse",
          "D": "expanded"
        },
        "answer": "A",
        "explanation": "Sau mạo từ 'an' và trước giới từ 'into' cần một danh từ. Chọn 'expansion' (sự mở rộng kinh doanh/cơ sở), khác với 'expanse' (vùng không gian rộng lớn)."
      },
      {
        "id": "parts_of_speech_1_q93",
        "num": 93,
        "stem": "I’d like to --- this issue with you, but I don’t have time today.",
        "options": {
          "A": "exploratory",
          "B": "exploration",
          "C": "explorer",
          "D": "explore"
        },
        "answer": "D",
        "explanation": "Theo cấu trúc 'would like to + V (nguyên mẫu)', chỗ trống cần động từ nguyên mẫu 'explore' (tìm hiểu, thảo luận sâu)."
      },
      {
        "id": "parts_of_speech_1_q94",
        "num": 94,
        "stem": "Our company policy used to --- that male employees keep their hair short, but that policy was considered sexist.",
        "options": {
          "A": "mandate",
          "B": "mandates",
          "C": "mandated",
          "D": "mandatory"
        },
        "answer": "A",
        "explanation": "Theo cấu trúc 'used to + V (nguyên mẫu)' (đã từng), chỗ trống cần động từ nguyên mẫu 'mandate' (quy định, yêu cầu)."
      },
      {
        "id": "parts_of_speech_1_q95",
        "num": 95,
        "stem": "When you select --- for the display windows, be sure to include seasonal gifts and clothing.",
        "options": {
          "A": "merchant",
          "B": "merchants",
          "C": "merchandise",
          "D": "merchandising"
        },
        "answer": "C",
        "explanation": "Sau ngoại động từ 'select' cần danh từ làm tân ngữ. Xét ngữ cảnh trưng bày tủ kính gồm quà tặng và quần áo theo mùa, chọn danh từ không đếm được 'merchandise' (hàng hóa)."
      },
      {
        "id": "parts_of_speech_1_q96",
        "num": 96,
        "stem": "We --- adhere to the store’s policy of only specially ordering products that have been paid for in advance.",
        "options": {
          "A": "strictness",
          "B": "strict",
          "C": "strictly",
          "D": "strictest"
        },
        "answer": "C",
        "explanation": "Đứng trước động từ thường 'adhere' cần trạng từ để bổ nghĩa. Chọn 'strictly' (nghiêm ngặt) theo cụm cố định 'strictly adhere to' (tuân thủ nghiêm ngặt)."
      }
    ]
  },
  {
    "id": "parts_of_speech_2",
    "title": "Từ loại 2 (Parts of Speech 2)",
    "desc": "Các đuôi từ loại & cấu trúc nâng cao",
    "icon": "🏷️",
    "count": 96,
    "questions": [
      {
        "id": "parts_of_speech_2_q1",
        "num": 1,
        "stem": "Many customers find that product ---- is confusing and deceptive.",
        "options": {
          "A": "diversify",
          "B": "diverse",
          "C": "diversity",
          "D": "diversified"
        },
        "answer": "C",
        "explanation": "Cần một danh từ để kết hợp với 'product' tạo thành cụm danh từ ghép làm chủ ngữ cho động từ 'is' ('product diversity' = sự đa dạng sản phẩm)."
      },
      {
        "id": "parts_of_speech_2_q2",
        "num": 2,
        "stem": "For the ---- designer, this job is full of rewards and opportunities.",
        "options": {
          "A": "enterprise",
          "B": "enterprising",
          "C": "enterpriser",
          "D": "enterpriseless"
        },
        "answer": "B",
        "explanation": "Cần một tính từ đứng trước và bổ nghĩa cho danh từ 'designer'. Theo ngữ cảnh tích cực, 'enterprising' (năng động, giàu sáng kiến) là phù hợp nhất."
      },
      {
        "id": "parts_of_speech_2_q3",
        "num": 3,
        "stem": "Your full participation is ---- to our timely completion of this project.",
        "options": {
          "A": "essence",
          "B": "essential",
          "C": "essences",
          "D": "essentially"
        },
        "answer": "B",
        "explanation": "Sau động từ liên kết 'is' cần một tính từ. Cấu trúc 'be essential to + N' mang nghĩa 'thiết yếu đối với điều gì'."
      },
      {
        "id": "parts_of_speech_2_q4",
        "num": 4,
        "stem": "We need to save a spare copier since the only one that is ---- is on its last leg.",
        "options": {
          "A": "functioned",
          "B": "functions",
          "C": "functional",
          "D": "function"
        },
        "answer": "C",
        "explanation": "Sau động từ liên kết 'is' cần một tính từ mô tả trạng thái của máy photocopy ('functional' = còn hoạt động được). 'Function' là nội động từ nên không dùng bị động 'is functioned'."
      },
      {
        "id": "parts_of_speech_2_q5",
        "num": 5,
        "stem": "In order to ---- our lead in the market, we’ll have to find a cheaper source of industrial supplies.",
        "options": {
          "A": "maintainable",
          "B": "maintain",
          "C": "maintaining",
          "D": "maintainability"
        },
        "answer": "B",
        "explanation": "Sau cụm chỉ mục đích 'in order to' cần một động từ nguyên mẫu ('maintain' = duy trì)."
      },
      {
        "id": "parts_of_speech_2_q6",
        "num": 6,
        "stem": "She ---- changed the topic of conversation, thus preventing a disagreement between her colleagues from turning into an argument.",
        "options": {
          "A": "smoothly",
          "B": "smooth out",
          "C": "smooth",
          "D": "smoothed"
        },
        "answer": "A",
        "explanation": "Cần một trạng từ đứng trước để bổ nghĩa cho động từ thường 'changed' ('smoothly' = một cách khéo léo, trôi chảy)."
      },
      {
        "id": "parts_of_speech_2_q7",
        "num": 7,
        "stem": "To assure that your order is ---- filled, it will be checked by a two-person team.",
        "options": {
          "A": "accurately",
          "B": "accurateness",
          "C": "accurate",
          "D": "accuracy"
        },
        "answer": "A",
        "explanation": "Trong cấu trúc bị động 'is + [adv] + V3/ed', cần một trạng từ bổ nghĩa cho phân từ 'filled' ('accurately' = một cách chính xác)."
      },
      {
        "id": "parts_of_speech_2_q8",
        "num": 8,
        "stem": "The suppliers have ---- the terms of our agreement and are now our supplier of choice.",
        "options": {
          "A": "fulfilling",
          "B": "fulfillment",
          "C": "fulfilled",
          "D": "fulfill"
        },
        "answer": "C",
        "explanation": "Sau trợ động từ 'have' cần một quá khứ phân từ (V3/ed) để tạo thành thì hiện tại hoàn thành chủ động ('have fulfilled' = đã đáp ứng/hoàn thành)."
      },
      {
        "id": "parts_of_speech_2_q9",
        "num": 9,
        "stem": "Scanning the shipment number is a ---- part of tracking these containers.",
        "options": {
          "A": "integral",
          "B": "integrate",
          "C": "integrating",
          "D": "integration"
        },
        "answer": "A",
        "explanation": "Cần một tính từ bổ nghĩa cho danh từ 'part'. 'Integral part' là cụm từ cố định mang nghĩa 'phần thiết yếu, không thể thiếu'."
      },
      {
        "id": "parts_of_speech_2_q10",
        "num": 10,
        "stem": "Keeping customer complaints to a ---- is the job of everyone who works in the store.",
        "options": {
          "A": "minimum",
          "B": "minimal",
          "C": "minimise",
          "D": "minimally"
        },
        "answer": "A",
        "explanation": "Sau mạo từ 'a' cần một danh từ. Cấu trúc 'keep something to a minimum' mang nghĩa 'giữ cái gì ở mức tối thiểu'."
      },
      {
        "id": "parts_of_speech_2_q11",
        "num": 11,
        "stem": "To keep distribution costs low, we have selected only two ---- firms for the region.",
        "options": {
          "A": "ship",
          "B": "shipment",
          "C": "shipping",
          "D": "shipper"
        },
        "answer": "C",
        "explanation": "Cần danh động từ 'shipping' kết hợp với 'firms' tạo thành cụm danh từ ghép 'shipping firms' (các công ty vận chuyển) phù hợp với ngữ cảnh chi phí phân phối."
      },
      {
        "id": "parts_of_speech_2_q12",
        "num": 12,
        "stem": "Based on their credit check, it seems likely that they have ---- funds to cover this order.",
        "options": {
          "A": "suffice",
          "B": "sufficient",
          "C": "sufficiently",
          "D": "sufficed"
        },
        "answer": "B",
        "explanation": "Cần một tính từ đứng trước bổ nghĩa cho danh từ 'funds' ('sufficient funds' = nguồn tiền/ngân quỹ đầy đủ)."
      },
      {
        "id": "parts_of_speech_2_q13",
        "num": 13,
        "stem": "After we have ---- all of the necessary Documents, we will begin our analysis of the data.",
        "options": {
          "A": "compile",
          "B": "compiled",
          "C": "compiling",
          "D": "compilation"
        },
        "answer": "B",
        "explanation": "Sau trợ động từ 'have' cần quá khứ phân từ (V3/ed) tạo thành thì hiện tại hoàn thành chủ động với tân ngữ phía sau ('have compiled' = đã tổng hợp)."
      },
      {
        "id": "parts_of_speech_2_q14",
        "num": 14,
        "stem": "Though he worked very ---- with machines and figure, he was slow and awkward with customers and coworkers.",
        "options": {
          "A": "efficient",
          "B": "efficiently",
          "C": "efficiency",
          "D": "efficacy"
        },
        "answer": "B",
        "explanation": "Cần một trạng từ bổ nghĩa cho động từ thường 'worked' và đứng sau phó từ 'very' ('efficiently' = một cách hiệu quả)."
      },
      {
        "id": "parts_of_speech_2_q15",
        "num": 15,
        "stem": "Although ----- expenses works well then applying for a contract, clients appreciate itemization on their invoices.",
        "options": {
          "A": "estimate",
          "B": "estimator",
          "C": "estimated",
          "D": "estimation"
        },
        "answer": "C",
        "explanation": "Cần một tính từ (quá khứ phân từ) đứng trước bổ nghĩa cho danh từ 'expenses' ('estimated expenses' = các chi phí ước tính), đối lập với việc kê khai chi tiết (itemization) ở vế sau."
      },
      {
        "id": "parts_of_speech_2_q16",
        "num": 16,
        "stem": "The customers usually pay their invoices promptly in order to avoid the ---- ò late changes.",
        "options": {
          "A": "imposed",
          "B": "imposing",
          "C": "impose",
          "D": "imposition"
        },
        "answer": "D",
        "explanation": "Sau mạo từ \"the\" và trước giới từ \"of\" (trong đề bị gõ nhầm thành \"ò\") cần một danh từ; chọn \"imposition\" (sự áp đặt/đánh phí)."
      },
      {
        "id": "parts_of_speech_2_q17",
        "num": 17,
        "stem": "The customer was angry at the ----- on her invoice.",
        "options": {
          "A": "mistakes",
          "B": "mistaken",
          "C": "mistakable",
          "D": "mistaking"
        },
        "answer": "A",
        "explanation": "Sau mạo từ \"the\" và trước cụm giới từ \"on her invoice\" cần một danh từ; chọn danh từ số nhiều \"mistakes\" (những sai sót)."
      },
      {
        "id": "parts_of_speech_2_q18",
        "num": 18,
        "stem": "The client would appreciate it if the invoice could be sent ----- so he can pay it before the end of this fiscal year.",
        "options": {
          "A": "promptly",
          "B": "promptness",
          "C": "prompted",
          "D": "prompt"
        },
        "answer": "A",
        "explanation": "Cần một trạng từ để bổ nghĩa cho cụm động từ bị động \"could be sent\"; chọn \"promptly\" (nhanh chóng, kịp thời)."
      },
      {
        "id": "parts_of_speech_2_q19",
        "num": 19,
        "stem": "The computer’s inventory figures will be considered inaccurate until the store manager enters the data from the physical count and ---- the figures.",
        "options": {
          "A": "adjustment",
          "B": "adjusts",
          "C": "adjustable",
          "D": "adjusted"
        },
        "answer": "B",
        "explanation": "Cấu trúc song song với liên từ \"and\", nối hai động từ chia ở thì hiện tại đơn theo chủ ngữ số ít \"the store manager\" (\"enters ... and adjusts\"); chọn \"adjusts\"."
      },
      {
        "id": "parts_of_speech_2_q20",
        "num": 20,
        "stem": "Inventory control cannot be performed ----, but must be done by physically counting the merchandise.",
        "options": {
          "A": "automatically",
          "B": "automatic",
          "C": "automation",
          "D": "automated"
        },
        "answer": "A",
        "explanation": "Cần một trạng từ để bổ nghĩa cho động từ \"be performed\"; chọn \"automatically\" (một cách tự động)."
      },
      {
        "id": "parts_of_speech_2_q21",
        "num": 21,
        "stem": "Do not ---- the staff when they are counting the items; they need to concentrate.",
        "options": {
          "A": "disturb",
          "B": "disturbance",
          "C": "disturbing",
          "D": "disturbingly"
        },
        "answer": "A",
        "explanation": "Câu mệnh lệnh phủ định có cấu trúc \"Do not + V (nguyên mẫu)\"; chọn động từ \"disturb\" (làm phiền)."
      },
      {
        "id": "parts_of_speech_2_q22",
        "num": 22,
        "stem": "Having an accurate inventory count is a good ---- on the competent store manager.",
        "options": {
          "A": "reflectively",
          "B": "reflective",
          "C": "reflect",
          "D": "reflection"
        },
        "answer": "D",
        "explanation": "Sau cụm mạo từ + tính từ \"a good\" cần một danh từ; chọn \"reflection\" (sự phản ánh tốt về ai đó)."
      },
      {
        "id": "parts_of_speech_2_q23",
        "num": 23,
        "stem": "In order to scan the bar code, you need to sweep the bar code directly in front of the ----.",
        "options": {
          "A": "scan",
          "B": "scanned",
          "C": "scanning",
          "D": "scanner"
        },
        "answer": "D",
        "explanation": "Sau mạo từ \"the\" cần một danh từ; xét ngữ cảnh cần danh từ chỉ thiết bị quét mã vạch nên chọn \"scanner\" (máy quét)."
      },
      {
        "id": "parts_of_speech_2_q24",
        "num": 24,
        "stem": "If we ---- the damaged merchandise from the inventory, our figures will accurately reflect what we have on hand.",
        "options": {
          "A": "subtract",
          "B": "subtracting",
          "C": "subtracted",
          "D": "subtraction"
        },
        "answer": "A",
        "explanation": "Câu điều kiện loại 1 (mệnh đề chính dùng \"will reflect\") nên mệnh đề \"If\" chia thì hiện tại đơn với chủ ngữ số nhiều \"we\"; chọn động từ \"subtract\" (trừ đi)."
      },
      {
        "id": "parts_of_speech_2_q25",
        "num": 25,
        "stem": "I’m going to call the bank manager ahead of time to make a certain that she will ---- a personal check to start a new account.",
        "options": {
          "A": "accept",
          "B": "accepted",
          "C": "acceptance",
          "D": "acceptable"
        },
        "answer": "A",
        "explanation": "Sau động từ khuyết thiếu \"will\" cần một động từ nguyên mẫu; chọn \"accept\" (chấp nhận)."
      },
      {
        "id": "parts_of_speech_2_q26",
        "num": 26,
        "stem": "We felt ---- about applying for such a large loan.",
        "options": {
          "A": "cautiously",
          "B": "caution",
          "C": "cautioning",
          "D": "cautious"
        },
        "answer": "D",
        "explanation": "Sau động từ nối (linking verb) \"felt\" cần một tính từ để miêu tả trạng thái của chủ ngữ; chọn \"cautious\" (thận trọng)."
      },
      {
        "id": "parts_of_speech_2_q27",
        "num": 27,
        "stem": "Every month my automatic car loan payment shows up as a ---- on my monthly statement.",
        "options": {
          "A": "deduct",
          "B": "deduction",
          "C": "deducting",
          "D": "deducted"
        },
        "answer": "B",
        "explanation": "Sau mạo từ \"a\" cần một danh từ đếm được số ít; chọn \"deduction\" (khoản khấu trừ)."
      },
      {
        "id": "parts_of_speech_2_q28",
        "num": 28,
        "stem": "The number of withdrawals at no charge from your saving account is ---- to three.",
        "options": {
          "A": "restricting",
          "B": "restricted",
          "C": "restrict",
          "D": "restriction"
        },
        "answer": "B",
        "explanation": "Cấu trúc bị động \"be + V3/ed\" (be restricted to: bị giới hạn ở mức); chọn quá khứ phân từ \"restricted\"."
      },
      {
        "id": "parts_of_speech_2_q29",
        "num": 29,
        "stem": "There is a counter in the bank lobby where customers can ---- their documents.",
        "options": {
          "A": "signing",
          "B": "signed",
          "C": "sign",
          "D": "signature"
        },
        "answer": "C",
        "explanation": "Sau động từ khuyết thiếu \"can\" cần một động từ nguyên mẫu; chọn \"sign\" (ký tên)."
      },
      {
        "id": "parts_of_speech_2_q30",
        "num": 30,
        "stem": "These ---- must be completed before the close of business today.",
        "options": {
          "A": "transacts",
          "B": "transacting",
          "C": "transacted",
          "D": "transactions"
        },
        "answer": "D",
        "explanation": "Sau từ hạn định số nhiều \"These\" cần một danh từ số nhiều làm chủ ngữ; chọn \"transactions\" (các giao dịch)."
      },
      {
        "id": "parts_of_speech_2_q31",
        "num": 31,
        "stem": "The firm’s ---- studied finance and business administration.",
        "options": {
          "A": "account",
          "B": "accounting",
          "C": "accounted",
          "D": "accountant"
        },
        "answer": "D",
        "explanation": "Sau sở hữu cách 'The firm’s' cần một danh từ làm chủ ngữ; dựa vào động từ 'studied' (học) và ngữ cảnh, cần danh từ chỉ người là 'accountant' (kế toán viên)."
      },
      {
        "id": "parts_of_speech_2_q32",
        "num": 32,
        "stem": "The account manager has ---- a tremendous amount of wealth in a very short time.",
        "options": {
          "A": "accumulated",
          "B": "accumulation",
          "C": "accumulating",
          "D": "accumulates"
        },
        "answer": "A",
        "explanation": "Cấu trúc thì hiện tại hoàn thành 'has + V3/ed' (has accumulated: đã tích lũy)."
      },
      {
        "id": "parts_of_speech_2_q33",
        "num": 33,
        "stem": "We went over our records carefully in order to prepare for the meeting with the ----.",
        "options": {
          "A": "audit",
          "B": "auditor",
          "C": "auditing",
          "D": "audited"
        },
        "answer": "B",
        "explanation": "Sau mạo từ 'the' cần một danh từ; trong cụm 'meeting with the ----' (cuộc họp với ai đó) cần danh từ chỉ người là 'auditor' (kiểm toán viên)."
      },
      {
        "id": "parts_of_speech_2_q34",
        "num": 34,
        "stem": "At the end of next week, all th division heads will meet to present one consolidated ----.",
        "options": {
          "A": "budgeting",
          "B": "budget",
          "C": "budgeted",
          "D": "budgets"
        },
        "answer": "B",
        "explanation": "Sau 'one + tính từ (consolidated)' cần một danh từ đếm được số ít là 'budget' (ngân sách)."
      },
      {
        "id": "parts_of_speech_2_q35",
        "num": 35,
        "stem": "I ---- some savings in my bank account before I made any investments in business.",
        "options": {
          "A": "building up",
          "B": "buildup",
          "C": "built up",
          "D": "build"
        },
        "answer": "C",
        "explanation": "Chỗ trống cần động từ chính chia ở thì quá khứ đơn để hòa hợp với mệnh đề 'before I made' phía sau -> 'built up' (đã tích góp/xây dựng)."
      },
      {
        "id": "parts_of_speech_2_q36",
        "num": 36,
        "stem": "All the employees will benefit if the company’s ---- continue to increase.",
        "options": {
          "A": "profited",
          "B": "profitable",
          "C": "profits",
          "D": "profitably"
        },
        "answer": "C",
        "explanation": "Sau sở hữu cách 'the company’s' cần một danh từ làm chủ ngữ; do động từ 'continue' chia ở dạng số nhiều nên chọn danh từ số nhiều 'profits' (lợi nhuận)."
      },
      {
        "id": "parts_of_speech_2_q37",
        "num": 37,
        "stem": "The stockbroker recommended investing some money more ----.",
        "options": {
          "A": "aggressive",
          "B": "aggression",
          "C": "aggressively",
          "D": "aggressor"
        },
        "answer": "C",
        "explanation": "Cần một trạng từ sau 'more' để bổ nghĩa cho hành động 'investing' -> 'aggressively' (một cách mạnh mẽ/quyết liệt)."
      },
      {
        "id": "parts_of_speech_2_q38",
        "num": 38,
        "stem": "All employees are encouraged to ---- a percentage of their earnings to the retirement fund.",
        "options": {
          "A": "committed",
          "B": "commit",
          "C": "commitment",
          "D": "committing"
        },
        "answer": "B",
        "explanation": "Cấu trúc 'be encouraged to + V-nguyên mẫu' (được khuyến khích làm gì) -> chọn động từ nguyên mẫu 'commit' (đóng góp/cam kết trích)."
      },
      {
        "id": "parts_of_speech_2_q39",
        "num": 39,
        "stem": "Because he had made such ---- investments, he lost very little money when the stock market went down.",
        "options": {
          "A": "conservative",
          "B": "conserved",
          "C": "conservatively",
          "D": "conserve"
        },
        "answer": "A",
        "explanation": "Trước danh từ 'investments' cần một tính từ bổ nghĩa; dựa vào ngữ cảnh 'mất rất ít tiền khi thị trường đi xuống', chọn 'conservative' (thận trọng, an toàn)."
      },
      {
        "id": "parts_of_speech_2_q40",
        "num": 40,
        "stem": "After months of study and research, the ---- decided to put his money into new facilities and materials.",
        "options": {
          "A": "investor",
          "B": "investment",
          "C": "investing",
          "D": "invested"
        },
        "answer": "A",
        "explanation": "Sau mạo từ 'the' cần danh từ làm chủ ngữ; dựa vào động từ 'decided to put his money' cần danh từ chỉ người là 'investor' (nhà đầu tư)."
      },
      {
        "id": "parts_of_speech_2_q41",
        "num": 41,
        "stem": "A good financial analyst will advise investors on strategies that will generate higher ----.",
        "options": {
          "A": "returned",
          "B": "returning",
          "C": "returns",
          "D": "returnable"
        },
        "answer": "C",
        "explanation": "Sau tính từ so sánh hơn 'higher' cần một danh từ làm tân ngữ cho động từ 'generate' -> 'returns' (lợi nhuận/tiền lời)."
      },
      {
        "id": "parts_of_speech_2_q42",
        "num": 42,
        "stem": "Is it ---- to consider funding a new project when we haven’t even seen the returns from the last one?",
        "options": {
          "A": "wisdom",
          "B": "wisest",
          "C": "wisely",
          "D": "wise"
        },
        "answer": "D",
        "explanation": "Cấu trúc chủ ngữ giả 'Is it + tính từ + to-V' (không có 'the' nên loại so sánh nhất 'wisest') -> chọn tính từ 'wise' (khôn ngoan)."
      },
      {
        "id": "parts_of_speech_2_q43",
        "num": 43,
        "stem": "According to my ----, we owe a lot of money in taxes this year.",
        "options": {
          "A": "calculations",
          "B": "calculated",
          "C": "calculators",
          "D": "calculate"
        },
        "answer": "A",
        "explanation": "Sau tính từ sở hữu 'my' cần danh từ; về nghĩa 'According to my calculations' (theo tính toán của tôi) phù hợp hơn 'calculators' (máy tính bỏ túi)."
      },
      {
        "id": "parts_of_speech_2_q44",
        "num": 44,
        "stem": "Those ---- on my desk contain all the information we’ll need for preparing our taxes.",
        "options": {
          "A": "filed",
          "B": "files",
          "C": "file",
          "D": "filing"
        },
        "answer": "B",
        "explanation": "Sau từ hạn định số nhiều 'Those' và đi với động từ chia số nhiều 'contain' cần danh từ số nhiều -> 'files' (hồ sơ/tài liệu)."
      },
      {
        "id": "parts_of_speech_2_q45",
        "num": 45,
        "stem": "It is usually advantageous for spouses to file their income taxes ----.",
        "options": {
          "A": "joints",
          "B": "jointly",
          "C": "joint",
          "D": "jointed"
        },
        "answer": "B",
        "explanation": "Chỗ trống đứng cuối mệnh đề đã đủ thành phần (V + O), cần trạng từ để bổ nghĩa cho động từ 'file' -> 'jointly' (chung/cùng nhau)."
      },
      {
        "id": "parts_of_speech_2_q46",
        "num": 46,
        "stem": "We didn’t know we had to claim the interest from savings account and were ---- for the error.",
        "options": {
          "A": "penalize",
          "B": "penalizing",
          "C": "penalty",
          "D": "penalized"
        },
        "answer": "D",
        "explanation": "Cần phân từ quá khứ (V-ed) sau 'were' để tạo cấu trúc bị động (were penalized: bị phạt vì lỗi sai)."
      },
      {
        "id": "parts_of_speech_2_q47",
        "num": 47,
        "stem": "The ---- of the forms took much less time than we expected.",
        "options": {
          "A": "preparatory",
          "B": "preparation",
          "C": "prepared",
          "D": "prepares"
        },
        "answer": "B",
        "explanation": "Giữa mạo từ 'The' và giới từ 'of' cần một danh từ; 'preparation' (sự chuẩn bị) là danh từ phù hợp."
      },
      {
        "id": "parts_of_speech_2_q48",
        "num": 48,
        "stem": "I didn’t overpay my taxes this year so I didn’t get a ----.",
        "options": {
          "A": "refunded",
          "B": "refundable",
          "C": "refund",
          "D": "refunds"
        },
        "answer": "C",
        "explanation": "Sau mạo từ 'a' cần một danh từ đếm được số ít; 'refund' (khoản tiền hoàn lại/hoàn thuế) phù hợp ngữ pháp và ngữ nghĩa."
      },
      {
        "id": "parts_of_speech_2_q49",
        "num": 49,
        "stem": "Before we begin, I think we should all focus on the ---- outcome of this effort.",
        "options": {
          "A": "desirableness",
          "B": "desire",
          "C": "desired",
          "D": "desirability"
        },
        "answer": "C",
        "explanation": "Giữa mạo từ 'the' và danh từ 'outcome' cần một tính từ bổ nghĩa; quá khứ phân từ 'desired' (được mong muốn) dùng như tính từ."
      },
      {
        "id": "parts_of_speech_2_q50",
        "num": 50,
        "stem": "The accountant can review all the ---- of the financial statement with you.",
        "options": {
          "A": "detailed",
          "B": "detailing",
          "C": "details",
          "D": "detail"
        },
        "answer": "C",
        "explanation": "Sau 'all the' cần một danh từ đếm được số nhiều (hoặc danh từ không đếm được); 'details' (các chi tiết) phù hợp ngữ cảnh."
      },
      {
        "id": "parts_of_speech_2_q51",
        "num": 51,
        "stem": "The ---- figures for the next quarter will not be available until a week from tomorrow.",
        "options": {
          "A": "project",
          "B": "projected",
          "C": "projection",
          "D": "projects"
        },
        "answer": "B",
        "explanation": "Giữa mạo từ 'The' và danh từ 'figures' cần tính từ bổ nghĩa; 'projected' (được dự kiến/dự báo) tạo cụm 'projected figures' (các số liệu dự kiến)."
      },
      {
        "id": "parts_of_speech_2_q52",
        "num": 52,
        "stem": "The projected financial statement demonstrated to Susan that her business had a ---- chance of increasing its profit over the next two quarters.",
        "options": {
          "A": "realistic",
          "B": "realist",
          "C": "realistically",
          "D": "reality"
        },
        "answer": "A",
        "explanation": "Giữa mạo từ 'a' và danh từ 'chance' cần một tính từ; 'realistic' (thực tế, khả thi) bổ nghĩa cho 'chance'."
      },
      {
        "id": "parts_of_speech_2_q53",
        "num": 53,
        "stem": "To create our financial strategy, our consultant took the experiences of similar businesses and ---- relevant outcomes to our situation.",
        "options": {
          "A": "translatable",
          "B": "translation",
          "C": "translator",
          "D": "translated"
        },
        "answer": "D",
        "explanation": "Cấu trúc song song với liên từ 'and' nối hai động từ chia thì quá khứ đơn cùng chủ ngữ 'our consultant': 'took ... and translated ...'."
      },
      {
        "id": "parts_of_speech_2_q54",
        "num": 54,
        "stem": "Out business experienced a ---- fall in profits during the third quarter of the year.",
        "options": {
          "A": "typical",
          "B": "typically",
          "C": "type",
          "D": "typed"
        },
        "answer": "A",
        "explanation": "Giữa mạo từ 'a' và danh từ 'fall' cần một tính từ; 'typical' (điển hình, thường thấy) bổ nghĩa cho 'fall'."
      },
      {
        "id": "parts_of_speech_2_q55",
        "num": 55,
        "stem": "The data entry clerk is so accustomed to working by herself that I really doubt if she is capable of ---- on this project.",
        "options": {
          "A": "collaborated",
          "B": "collaborating",
          "C": "collaborator",
          "D": "collaborates"
        },
        "answer": "B",
        "explanation": "Cấu trúc 'be capable of + V-ing' (có khả năng làm gì); 'collaborating' (hợp tác) phù hợp cả ngữ pháp và ngữ nghĩa."
      },
      {
        "id": "parts_of_speech_2_q56",
        "num": 56,
        "stem": "Sue always ---- so hard on her work that she forgets where she is.",
        "options": {
          "A": "concentrated",
          "B": "concentrates",
          "C": "concentration",
          "D": "concentrating"
        },
        "answer": "B",
        "explanation": "Cần động từ chính chia ở thì hiện tại đơn (có 'always' và mệnh đề sau dùng 'forgets') theo chủ ngữ số ít 'Sue' nên chọn 'concentrates'."
      },
      {
        "id": "parts_of_speech_2_q57",
        "num": 57,
        "stem": "The constant flow of traffic by the researcher’s desk proved to be very ----.",
        "options": {
          "A": "disruptive",
          "B": "disrupts",
          "C": "disruption",
          "D": "disrupted"
        },
        "answer": "A",
        "explanation": "Sau 'proved to be + very' cần một tính từ chỉ tính chất của chủ ngữ 'flow of traffic'; 'disruptive' (gây gián đoạn/xao nhãng) phù hợp nhất."
      },
      {
        "id": "parts_of_speech_2_q58",
        "num": 58,
        "stem": "The employee lounge is for everyone’s enjoyment so please don’t use it ----.",
        "options": {
          "A": "inconsiderate",
          "B": "inconsiderateness",
          "C": "inconsiderately",
          "D": "inconsideration"
        },
        "answer": "C",
        "explanation": "Cần một trạng từ đứng cuối câu để bổ nghĩa cho động từ 'use'; 'inconsiderately' (một cách thiếu ý tứ/thiếu cân nhắc) là trạng từ."
      },
      {
        "id": "parts_of_speech_2_q59",
        "num": 59,
        "stem": "Some people always ---- for the easy way out.",
        "options": {
          "A": "opt",
          "B": "option",
          "C": "optional",
          "D": "options"
        },
        "answer": "A",
        "explanation": "Cần động từ chính chia thì hiện tại đơn theo chủ ngữ số nhiều 'Some people'; 'opt for' là cụm động từ mang nghĩa 'lựa chọn'."
      },
      {
        "id": "parts_of_speech_2_q60",
        "num": 60,
        "stem": "After close ---- of the options, the managers chose an advertising company to do all the publicity for the new campaign.",
        "options": {
          "A": "scrutinize",
          "B": "scrutinizing",
          "C": "scrutiny",
          "D": "scrutable"
        },
        "answer": "C",
        "explanation": "Sau giới từ 'After' và tính từ 'close' cần một danh từ; 'scrutiny' (sự xem xét kỹ lưỡng) tạo cụm 'close scrutiny of'."
      },
      {
        "id": "parts_of_speech_2_q61",
        "num": 61,
        "stem": "When using these facilities, please ---- to the rules posted by the door.",
        "options": {
          "A": "adhere",
          "B": "adhering",
          "C": "adherence",
          "D": "adhered"
        },
        "answer": "A",
        "explanation": "Sau 'please' trong câu mệnh lệnh cần một động từ nguyên mẫu (V0). Cụm 'adhere to' mang nghĩa tuân thủ."
      },
      {
        "id": "parts_of_speech_2_q62",
        "num": 62,
        "stem": "As the chairman stood to give his ----, everyone in the room was listening.",
        "options": {
          "A": "conclusion",
          "B": "conclude",
          "C": "conclusive",
          "D": "concluding"
        },
        "answer": "A",
        "explanation": "Sau tính từ sở hữu 'his' cần một danh từ; 'conclusion' (lời kết, kết luận) phù hợp ngữ pháp và ngữ cảnh."
      },
      {
        "id": "parts_of_speech_2_q63",
        "num": 63,
        "stem": "George decided to ---- his business trip by a few days so he could do something sightseeing.",
        "options": {
          "A": "length",
          "B": "lengthen",
          "C": "lengthened"
        },
        "answer": "B",
        "explanation": "Cấu trúc 'decide to + V0' nên cần động từ nguyên mẫu 'lengthen' (kéo dài)."
      },
      {
        "id": "parts_of_speech_2_q64",
        "num": 64,
        "stem": "The original members of the committee met ---- for lunch or dinner.",
        "options": {
          "A": "period",
          "B": "periods",
          "C": "periodically",
          "D": "periodic"
        },
        "answer": "C",
        "explanation": "Cần một trạng từ để bổ nghĩa cho động từ 'met', nên chọn 'periodically' (một cách định kỳ)."
      },
      {
        "id": "parts_of_speech_2_q65",
        "num": 65,
        "stem": "As her first ----, the committee chairwoman wanted to attract new, energetic members to the group.",
        "options": {
          "A": "prior",
          "B": "priority",
          "C": "prioritize",
          "D": "prioritized"
        },
        "answer": "B",
        "explanation": "Sau tính từ sở hữu 'her' và số thứ tự 'first' cần một danh từ, nên chọn 'priority' (ưu tiên)."
      },
      {
        "id": "parts_of_speech_2_q66",
        "num": 66,
        "stem": "Even as they ---- through the hundreds of pages of supporting material, the committee was still not convinced that the project was justified.",
        "options": {
          "A": "progression",
          "B": "progressed",
          "C": "progress",
          "D": "progressive"
        },
        "answer": "B",
        "explanation": "Sau chủ ngữ 'they' cần một động từ chính; mệnh đề chính chia ở thì quá khứ đơn ('was') nên chọn động từ quá khứ 'progressed'."
      },
      {
        "id": "parts_of_speech_2_q67",
        "num": 67,
        "stem": "---- equipment on the new car is not only costly, but also dangerous.",
        "options": {
          "A": "defect",
          "B": "detector",
          "C": "defective",
          "D": "defection"
        },
        "answer": "C",
        "explanation": "Trước danh từ 'equipment' cần một tính từ bổ nghĩa; chọn 'defective' (bị lỗi, hỏng hóc)."
      },
      {
        "id": "parts_of_speech_2_q68",
        "num": 68,
        "stem": "Rebecca is known as ---- #321 among her quality control coworkers.",
        "options": {
          "A": "inspect",
          "B": "inspection",
          "C": "inspector",
          "D": "inspecting"
        },
        "answer": "C",
        "explanation": "Chủ ngữ là người ('Rebecca') và đứng sau 'be known as' (được biết đến như là) nên cần danh từ chỉ người 'inspector' (thanh tra viên)."
      },
      {
        "id": "parts_of_speech_2_q69",
        "num": 69,
        "stem": "An employee who ---- his job as important performs better than one who wants only a paycheck.",
        "options": {
          "A": "perceives",
          "B": "perceived",
          "C": "perceptive",
          "D": "perception"
        },
        "answer": "A",
        "explanation": "Trong mệnh đề quan hệ bổ nghĩa cho danh từ số ít 'An employee', câu diễn tả sự thật ở hiện tại đơn ('performs', 'wants') nên cần động từ chia số ít 'perceives'."
      },
      {
        "id": "parts_of_speech_2_q70",
        "num": 70,
        "stem": "Agnes was ---- by the odor of the waterproofing.",
        "options": {
          "A": "repel",
          "B": "repellent",
          "C": "repelled",
          "D": "repelling"
        },
        "answer": "C",
        "explanation": "Cấu trúc câu bị động 'was + V3/ed + by...' nên chọn quá khứ phân từ 'repelled' (cảm thấy khó chịu/ghê tởm bởi)."
      },
      {
        "id": "parts_of_speech_2_q71",
        "num": 71,
        "stem": "Standardized products are ---- in appearance.",
        "options": {
          "A": "uniforms",
          "B": "uniformly",
          "C": "uniform",
          "D": "uniformed"
        },
        "answer": "C",
        "explanation": "Sau động từ to-be 'are' cần một tính từ mô tả sản phẩm; chọn 'uniform' (đồng nhất, giống nhau), khác với 'uniformed' (mặc đồng phục)."
      },
      {
        "id": "parts_of_speech_2_q72",
        "num": 72,
        "stem": "Sarah wants to return her dress to the store because it ---- to easily.",
        "options": {
          "A": "wrinkles",
          "B": "wrinkly",
          "C": "wrinkle",
          "D": "wrinkling"
        },
        "answer": "A",
        "explanation": "Sau chủ ngữ số ít 'it' trong câu hiện tại đơn ('wants') cần động từ chia số ít 'wrinkles' (bị nhăn)."
      },
      {
        "id": "parts_of_speech_2_q73",
        "num": 73,
        "stem": "The product development team were ---- that the competition would produce a similar product and get it on the market before they did.",
        "options": {
          "A": "anxious",
          "B": "anxiously",
          "C": "anxiousness",
          "D": "anxiety"
        },
        "answer": "A",
        "explanation": "Sau động từ to-be 'were' và trước mệnh đề 'that' cần một tính từ; chọn 'anxious' (lo lắng)."
      },
      {
        "id": "parts_of_speech_2_q74",
        "num": 74,
        "stem": "The designer made the ---- that people are attracted to boxes in primary colors.",
        "options": {
          "A": "assumption",
          "B": "assumed",
          "C": "assuming",
          "D": "assume"
        },
        "answer": "A",
        "explanation": "Sau mạo từ 'the' (trong cụm 'make the assumption that...') cần một danh từ, nên chọn 'assumption' (giả định)."
      },
      {
        "id": "parts_of_speech_2_q75",
        "num": 75,
        "stem": "The --- model of the new car drew attention wherever it was shown.",
        "options": {
          "A": "experiment",
          "B": "experimentation",
          "C": "experimental",
          "D": "experimenting"
        },
        "answer": "C",
        "explanation": "Giữa mạo từ 'The' và danh từ 'model' cần một tính từ bổ nghĩa, nên chọn 'experimental' (thử nghiệm)."
      },
      {
        "id": "parts_of_speech_2_q76",
        "num": 76,
        "stem": "Our team came up with the most ---- solution to the problem.",
        "options": {
          "A": "logic",
          "B": "logical",
          "C": "logically",
          "D": "logician"
        },
        "answer": "B",
        "explanation": "Cần một tính từ đứng sau 'the most' để tạo cấu trúc so sánh nhất bổ nghĩa cho danh từ 'solution'. 'logical' (hợp lý) là tính từ phù hợp."
      },
      {
        "id": "parts_of_speech_2_q77",
        "num": 77,
        "stem": "The new employee accepted ---- for not discovering a trademarked toy exactly like his own company’s.",
        "options": {
          "A": "responsible",
          "B": "responsibility",
          "C": "responsibly",
          "D": "response"
        },
        "answer": "B",
        "explanation": "Sau ngoại động từ 'accepted' cần một danh từ làm tân ngữ. Cụm từ cố định 'accept responsibility for sth' mang nghĩa 'chịu trách nhiệm về việc gì'."
      },
      {
        "id": "parts_of_speech_2_q78",
        "num": 78,
        "stem": "Mr. Oh did not give the project adequate ---- and the product never made it to market.",
        "options": {
          "A": "supervisor",
          "B": "supervision",
          "C": "supervised",
          "D": "supervise"
        },
        "answer": "B",
        "explanation": "Sau tính từ 'adequate' (đầy đủ) cần một danh từ. Xét ngữ cảnh, cần danh từ không đếm được chỉ sự việc 'supervision' (sự giám sát), không dùng 'supervisor' (người giám sát)."
      },
      {
        "id": "parts_of_speech_2_q79",
        "num": 79,
        "stem": "The president was ---- about adding more space to the factory.",
        "options": {
          "A": "apprehend",
          "B": "apprehensive",
          "C": "apprehension",
          "D": "apprehended"
        },
        "answer": "B",
        "explanation": "Sau động từ to-be 'was' và trước giới từ 'about' cần một tính từ. Cấu trúc 'be apprehensive about sth' có nghĩa là 'lo ngại, e ngại về điều gì'."
      },
      {
        "id": "parts_of_speech_2_q80",
        "num": 80,
        "stem": "The financial ---- of our business don’t allow us to lease an office with such a high monthly rent.",
        "options": {
          "A": "circumstances",
          "B": "circumstantial",
          "C": "circumstantially",
          "D": "circumstanced"
        },
        "answer": "A",
        "explanation": "Cần một danh từ đứng sau tính từ 'financial' để làm chủ ngữ chính cho câu. Động từ chính chia số nhiều ('don’t allow') nên chọn danh từ số nhiều 'circumstances' (tình hình, hoàn cảnh)."
      },
      {
        "id": "parts_of_speech_2_q81",
        "num": 81,
        "stem": "The real estate agent couldn’t determine how to best work with a company that placed so many ---- on everything that they did.",
        "options": {
          "A": "conditional",
          "B": "condition",
          "C": "conditioned",
          "D": "conditions"
        },
        "answer": "D",
        "explanation": "Sau lượng từ 'so many' phải là một danh từ đếm được số nhiều. 'conditions' (các điều kiện) phù hợp với cấu trúc 'place conditions on sth'."
      },
      {
        "id": "parts_of_speech_2_q82",
        "num": 82,
        "stem": "The buyer ---- with a nod of his head that he was placing a bid on the property.",
        "options": {
          "A": "indicates",
          "B": "indication",
          "C": "indicated",
          "D": "indicator"
        },
        "answer": "C",
        "explanation": "Câu thiếu động từ chính sau chủ ngữ 'The buyer'. Mệnh đề sau chia thì quá khứ tiếp diễn ('was placing') nên động từ chính cần chia thì quá khứ đơn 'indicated' (ra hiệu, biểu thị)."
      },
      {
        "id": "parts_of_speech_2_q83",
        "num": 83,
        "stem": "---- as it does, I don’t understand how anyone can depend on that country’s market to provide a safe investment.",
        "options": {
          "A": "fluctuated",
          "B": "fluctuating",
          "C": "fluctuation",
          "D": "fluctuate"
        },
        "answer": "B",
        "explanation": "Cần hiện tại phân từ 'fluctuating' (mang nghĩa chủ động, nội động từ) đứng đầu câu để tạo mệnh đề phân từ chỉ nguyên nhân/tình huống ('Biến động như vậy...')."
      },
      {
        "id": "parts_of_speech_2_q84",
        "num": 84,
        "stem": "The lawyers signed the papers and the company took ---- of the new building.",
        "options": {
          "A": "occupied",
          "B": "occupants",
          "C": "occupancy",
          "D": "occupying"
        },
        "answer": "C",
        "explanation": "Sau động từ 'took' và trước giới từ 'of' cần một danh từ chỉ hành động/trạng thái. Cụm 'take occupancy of' có nghĩa là 'tiếp quản, bắt đầu sử dụng (tòa nhà)'."
      },
      {
        "id": "parts_of_speech_2_q85",
        "num": 85,
        "stem": "The colorful vegetables made the dish look ----",
        "options": {
          "A": "appealed",
          "B": "appealing",
          "C": "appeals",
          "D": "appealingly"
        },
        "answer": "B",
        "explanation": "Sau động từ nối (linking verb) 'look' cần một tính từ mô tả đặc điểm của chủ ngữ 'the dish'. 'appealing' (hấp dẫn, lôi cuốn) là tính từ phù hợp."
      },
      {
        "id": "parts_of_speech_2_q86",
        "num": 86,
        "stem": "Even though the restaurant looked expensive, Pat ---- to order her meal without asking about the prices.",
        "options": {
          "A": "daring",
          "B": "daringly",
          "C": "dared",
          "D": "dares"
        },
        "answer": "C",
        "explanation": "Mệnh đề chính thiếu động từ chia thì sau chủ ngữ 'Pat' (cấu trúc 'dare to do sth'). Mệnh đề trước chia quá khứ đơn ('looked') nên chọn 'dared'."
      },
      {
        "id": "parts_of_speech_2_q87",
        "num": 87,
        "stem": "If you need some ---- on what to order, be sure to consult your server.",
        "options": {
          "A": "guide",
          "B": "guides",
          "C": "guided",
          "D": "guidance"
        },
        "answer": "D",
        "explanation": "Sau lượng từ 'some' cần danh từ không đếm được hoặc danh từ số nhiều. Xét ngữ cảnh 'về việc nên gọi món gì', cần danh từ 'guidance' (sự hướng dẫn, lời khuyên)."
      },
      {
        "id": "parts_of_speech_2_q88",
        "num": 88,
        "stem": "Your father is in the kitchen ---- a batch of his famous chocolate chip cookies.",
        "options": {
          "A": "mixture",
          "B": "mixed",
          "C": "mix",
          "D": "mixing"
        },
        "answer": "D",
        "explanation": "Cấu trúc 'be + cụm chỉ nơi chốn + V-ing' diễn tả hành động đang diễn ra tại thời điểm nói ở một địa điểm. Vì phía sau có tân ngữ 'a batch of...' nên chọn dạng chủ động 'mixing'."
      },
      {
        "id": "parts_of_speech_2_q89",
        "num": 89,
        "stem": "This guidebook is several years old, so I would question its ----.",
        "options": {
          "A": "rely",
          "B": "reliance",
          "C": "reliability",
          "D": "relying"
        },
        "answer": "C",
        "explanation": "Sau tính từ sở hữu 'its' cần một danh từ. Xét ngữ cảnh cuốn sách hướng dẫn đã cũ nhiều năm, danh từ phù hợp nghĩa là 'reliability' (độ tin cậy), không phải 'reliance' (sự phụ thuộc)."
      },
      {
        "id": "parts_of_speech_2_q90",
        "num": 90,
        "stem": "I have always found Lola’s restaurant ---- to be very good, so I continue to seek her guidance.",
        "options": {
          "A": "suggestions",
          "B": "suggest",
          "C": "suggestible"
        },
        "answer": "A",
        "explanation": "Cấu trúc 'find + O (cụm danh từ) + to be + adj'. Cần một danh từ hoàn thiện cụm danh từ 'Lola’s restaurant ----', nên chọn 'suggestions' (những gợi ý về nhà hàng của Lola)."
      },
      {
        "id": "parts_of_speech_2_q91",
        "num": 91,
        "stem": "Would you like to ---- your meal with an after-dinner drink?",
        "options": {
          "A": "complete",
          "B": "completed",
          "C": "completely",
          "D": "completion"
        },
        "answer": "A",
        "explanation": "Sau cấu trúc 'would like to' cần một động từ nguyên mẫu (V-inf). 'complete' (làm trọn vẹn/kết thúc) là động từ nguyên mẫu phù hợp."
      },
      {
        "id": "parts_of_speech_2_q92",
        "num": 92,
        "stem": "I’ve had enough ---- for the day.",
        "options": {
          "A": "excite",
          "B": "exciting",
          "C": "excitement",
          "D": "excites"
        },
        "answer": "C",
        "explanation": "Sau lượng từ 'enough' cần một danh từ. 'excitement' (sự hào hứng/kích thích) là danh từ không đếm được phù hợp về ngữ pháp và ngữ nghĩa."
      },
      {
        "id": "parts_of_speech_2_q93",
        "num": 93,
        "stem": "I can’t figure out which ingredients the chef used to ---- this dish.",
        "options": {
          "A": "flavored",
          "B": "flavorful",
          "C": "flavors",
          "D": "flavor"
        },
        "answer": "D",
        "explanation": "Cấu trúc 'use something to + V-inf' (dùng cái gì để làm gì) yêu cầu động từ nguyên mẫu sau 'to'. 'flavor' (tạo hương vị/nêm nếm) là động từ nguyên mẫu chính xác."
      },
      {
        "id": "parts_of_speech_2_q94",
        "num": 94,
        "stem": "I’ve already --- what the last table of guests ordered.",
        "options": {
          "A": "forget",
          "B": "forgetful",
          "C": "forgotten",
          "D": "forgetfulness"
        },
        "answer": "C",
        "explanation": "Thì hiện tại hoàn thành có cấu trúc 'have/has + (already) + V3/ed'. Quá khứ phân từ của động từ 'forget' là 'forgotten'."
      },
      {
        "id": "parts_of_speech_2_q95",
        "num": 95,
        "stem": "Unfortunately, on the day the restaurant opened there was a huge --- in the kitchen.",
        "options": {
          "A": "mix-up",
          "B": "mixed up",
          "C": "mix up",
          "D": "mixing up"
        },
        "answer": "A",
        "explanation": "Sau mạo từ 'a' và tính từ 'huge' cần một danh từ đếm được số ít. 'mix-up' (sự nhầm lẫn/lộn xộn) là danh từ ghép, trong khi 'mix up' là cụm động từ."
      },
      {
        "id": "parts_of_speech_2_q96",
        "num": 96,
        "stem": "No one could have ---- how successful the restaurant would become.",
        "options": {
          "A": "predictive",
          "B": "predictably",
          "C": "predictable",
          "D": "predicted"
        },
        "answer": "D",
        "explanation": "Cấu trúc động từ khuyết thiếu hoàn thành 'could have + V3/ed' (đáng lẽ có thể đã làm gì) cần quá khứ phân từ. 'predicted' (dự đoán) là dạng V3/ed phù hợp."
      }
    ]
  },
  {
    "id": "parts_of_speech_3",
    "title": "Từ loại 3 (Parts of Speech 3)",
    "desc": "Bài tập chuyên sâu đề thi ETS TOEIC",
    "icon": "🏷️",
    "count": 107,
    "questions": [
      {
        "id": "parts_of_speech_3_q1",
        "num": 1,
        "stem": "George no longer wants to be in charge of lunch orders because he finds that job too ----.",
        "options": {
          "A": "burdens",
          "B": "burdened",
          "C": "burden",
          "D": "burdensome"
        },
        "answer": "D",
        "explanation": "Cấu trúc 'find + O + adj' (thấy điều gì như thế nào) kết hợp với trạng từ 'too' nên cần một tính từ mô tả tính chất của công việc; 'burdensome' (nặng nề, phiền phức) là đáp án phù hợp."
      },
      {
        "id": "parts_of_speech_3_q2",
        "num": 2,
        "stem": "We ---- meet the delivery person in the lobby to pick up our orders.",
        "options": {
          "A": "common",
          "B": "in common",
          "C": "commonly",
          "D": "commonness"
        },
        "answer": "C",
        "explanation": "Cần một trạng từ đứng trước động từ thường 'meet' để bổ nghĩa cho hành động; 'commonly' (thường xuyên, phổ biến) là trạng từ phù hợp."
      },
      {
        "id": "parts_of_speech_3_q3",
        "num": 3,
        "stem": "The ---- from that restaurant always arrive late.",
        "options": {
          "A": "delivers",
          "B": "deliveries",
          "C": "delivered",
          "D": "delivering"
        },
        "answer": "B",
        "explanation": "Sau mạo từ 'The' cần một danh từ làm chủ ngữ, và động từ chính 'arrive' chia ở số nhiều nên chọn danh từ số nhiều 'deliveries' (những đơn giao hàng)."
      },
      {
        "id": "parts_of_speech_3_q4",
        "num": 4,
        "stem": "Despite being served in disposable containers, the heal had an ---- touch.",
        "options": {
          "A": "elegant",
          "B": "elegance",
          "C": "elegantly",
          "D": "elegancy"
        },
        "answer": "A",
        "explanation": "Cấu trúc 'an + adj + noun (touch)' cần một tính từ để bổ nghĩa cho danh từ 'touch'; chọn 'elegant' (tinh tế, trang nhã)."
      },
      {
        "id": "parts_of_speech_3_q5",
        "num": 5,
        "stem": "Our office manager was so ---- by the speed of the delivery, she decided to order from them again.",
        "options": {
          "A": "impressive",
          "B": "impressed",
          "C": "impression",
          "D": "impressionable"
        },
        "answer": "B",
        "explanation": "Cấu trúc 'be impressed by sth' (bị ấn tượng bởi điều gì) dùng tính từ đuôi -ed để diễn tả cảm xúc của chủ ngữ chỉ người ('office manager')."
      },
      {
        "id": "parts_of_speech_3_q6",
        "num": 6,
        "stem": "Let’s order ---- so we can all get what we want for lunch.",
        "options": {
          "A": "individualize",
          "B": "individualist",
          "C": "individually",
          "D": "individual"
        },
        "answer": "C",
        "explanation": "Cần một trạng từ đứng sau động từ 'order' để bổ nghĩa cho cách thức gọi món; chọn 'individually' (riêng lẻ, từng người một)."
      },
      {
        "id": "parts_of_speech_3_q7",
        "num": 7,
        "stem": "Susannah is having a hard time becoming ---- to the long hours of her job at the restaurant.",
        "options": {
          "A": "custom",
          "B": "customs",
          "C": "accustoms to",
          "D": "accustomed to"
        },
        "answer": "D",
        "explanation": "Cụm từ cố định 'become accustomed to + N/V-ing' có nghĩa là trở nên quen với điều gì đó (lưu ý đề bài bị lặp nhẹ giới từ 'to', nhưng D là dạng tính từ đúng duy nhất)."
      },
      {
        "id": "parts_of_speech_3_q8",
        "num": 8,
        "stem": "The student accepted a six-month ---- with a famous chef.",
        "options": {
          "A": "apprentice",
          "B": "apprenticed",
          "C": "apprenticing",
          "D": "apprenticeship"
        },
        "answer": "D",
        "explanation": "Sau cụm 'a six-month' cần một danh từ chỉ sự việc/chương trình kéo dài 6 tháng; chọn 'apprenticeship' (kỳ học việc/thực tập), khác với 'apprentice' (người học việc)."
      },
      {
        "id": "parts_of_speech_3_q9",
        "num": 9,
        "stem": "The patrons at this restaurant are often ----, but they usually pay well.",
        "options": {
          "A": "demands",
          "B": "demanded",
          "C": "demanding",
          "D": "demand"
        },
        "answer": "C",
        "explanation": "Sau động từ to-be 'are' và trạng từ 'often' cần một tính từ mô tả tính cách của khách hàng ('patrons'); chọn 'demanding' (khó tính, đòi hỏi cao)."
      },
      {
        "id": "parts_of_speech_3_q10",
        "num": 10,
        "stem": "I love this chef’s cooking style, which ---- so many different tastes.",
        "options": {
          "A": "incorporate",
          "B": "incorporates",
          "C": "incorporating",
          "D": "incorporator"
        },
        "answer": "B",
        "explanation": "Đại từ quan hệ 'which' thay thế cho danh từ số ít 'cooking style', nên cần một động từ chia ở thì hiện tại đơn ngôi thứ ba số ít là 'incorporates' (kết hợp)."
      },
      {
        "id": "parts_of_speech_3_q11",
        "num": 11,
        "stem": "The experienced chef was ---- about the way he prepared his award-winning dish.",
        "options": {
          "A": "method",
          "B": "methodical",
          "C": "methodically",
          "D": "methodology"
        },
        "answer": "B",
        "explanation": "Sau động từ to-be 'was' cần một tính từ để mô tả chủ ngữ 'The experienced chef'; chọn 'methodical' (có phương pháp, cẩn thận, bài bản)."
      },
      {
        "id": "parts_of_speech_3_q12",
        "num": 12,
        "stem": "The ---- altitude of the staff is one of the keys to a restaurant’s success.",
        "options": {
          "A": "professional",
          "B": "professionalism",
          "C": "profession",
          "D": "professionally"
        },
        "answer": "A",
        "explanation": "Giữa mạo từ 'The' và danh từ phía sau ('altitude' - lỗi đánh máy của 'attitude') cần một tính từ để bổ nghĩa; chọn 'professional' (chuyên nghiệp)."
      },
      {
        "id": "parts_of_speech_3_q13",
        "num": 13,
        "stem": "Do you need our ---- with any of the evening’s details?",
        "options": {
          "A": "assist",
          "B": "assisting",
          "C": "assistance",
          "D": "assistant"
        },
        "answer": "C",
        "explanation": "Sau tính từ sở hữu 'our' cần một danh từ; xét ngữ cảnh 'cần sự hỗ trợ của chúng tôi cho các chi tiết buổi tối', chọn 'assistance' (sự giúp đỡ/hỗ trợ)."
      },
      {
        "id": "parts_of_speech_3_q14",
        "num": 14,
        "stem": "The event did not go off well because the ---- did a poor job of organizing it.",
        "options": {
          "A": "coordinator",
          "B": "coordination",
          "C": "coordinated",
          "D": "coordinates"
        },
        "answer": "A",
        "explanation": "Sau mạo từ 'the' cần một danh từ chỉ người thực hiện hành động 'did a poor job of organizing it'; chọn 'coordinator' (người điều phối)."
      },
      {
        "id": "parts_of_speech_3_q15",
        "num": 15,
        "stem": "---- speaking, the event was poorly organized.",
        "options": {
          "A": "general",
          "B": "generally",
          "C": "generality",
          "D": "generalizations"
        },
        "answer": "B",
        "explanation": "Cụm từ cố định 'Generally speaking' (Nói chung) dùng trạng từ 'generally' đứng trước phân từ 'speaking' để bổ nghĩa cho cả mệnh đề sau."
      },
      {
        "id": "parts_of_speech_3_q16",
        "num": 16,
        "stem": "When the event planner saw the hotel ballroom, she knew that the size wasn’t ----, but the price was right.",
        "options": {
          "A": "ideal",
          "B": "ideally",
          "C": "idealize",
          "D": "idealist"
        },
        "answer": "A",
        "explanation": "Sau động từ to-be 'wasn’t' cần một tính từ để bổ nghĩa cho chủ ngữ 'the size'. 'ideal' (tính từ: lý tưởng) là đáp án đúng."
      },
      {
        "id": "parts_of_speech_3_q17",
        "num": 17,
        "stem": "Joshua quit his job and started his own business as an event -----.",
        "options": {
          "A": "planned",
          "B": "plans",
          "C": "planner",
          "D": "planning"
        },
        "answer": "C",
        "explanation": "Sau mạo từ 'an' và danh từ 'event', cần danh từ chỉ người/nghề nghiệp của Joshua. 'event planner' (người tổ chức sự kiện) phù hợp cả ngữ pháp và ngữ nghĩa."
      },
      {
        "id": "parts_of_speech_3_q18",
        "num": 18,
        "stem": "Like restaurants, caterers are subject to ---- concerning safe food handling.",
        "options": {
          "A": "regulate",
          "B": "regulations",
          "C": "regulatory",
          "D": "regulating"
        },
        "answer": "B",
        "explanation": "Cụm 'be subject to + danh từ' (phải tuân theo). 'regulations' (các quy định) là danh từ số nhiều phù hợp về mặt ngữ pháp và ngữ cảnh."
      },
      {
        "id": "parts_of_speech_3_q19",
        "num": 19,
        "stem": "The desk clerk ---- the change in gate numbers at least an hour ago.",
        "options": {
          "A": "announcement",
          "B": "announcing",
          "C": "announcer",
          "D": "announced"
        },
        "answer": "D",
        "explanation": "Câu thiếu động từ chính sau chủ ngữ 'The desk clerk'. Dấu hiệu 'an hour ago' yêu cầu thì quá khứ đơn, nên chọn 'announced'."
      },
      {
        "id": "parts_of_speech_3_q20",
        "num": 20,
        "stem": "When it’s time to ---- the flight, an announcement will be made.",
        "options": {
          "A": "boarded",
          "B": "boarding",
          "C": "board",
          "D": "boarder"
        },
        "answer": "C",
        "explanation": "Cấu trúc 'it’s time to + V-nguyên thể' (đã đến lúc làm gì). Do đó cần động từ nguyên thể 'board' (lên máy bay)."
      },
      {
        "id": "parts_of_speech_3_q21",
        "num": 21,
        "stem": "As soon as John ---- his luggage, he went outside to look for a taxi.",
        "options": {
          "A": "claim",
          "B": "claimed",
          "C": "claimant",
          "D": "claims"
        },
        "answer": "B",
        "explanation": "Mệnh đề thiếu động từ chính sau chủ ngữ 'John'. Mệnh đề chính chia quá khứ đơn ('went'), nên động từ ở đây cũng chia quá khứ đơn là 'claimed'."
      },
      {
        "id": "parts_of_speech_3_q22",
        "num": 22,
        "stem": "The man had to ---- his travel plans because an emergency came up at work.",
        "options": {
          "A": "delay",
          "B": "delaying",
          "C": "delayed",
          "D": "delays"
        },
        "answer": "A",
        "explanation": "Sau 'had to' cần một động từ nguyên thể (V-inf). Do đó chọn 'delay' (trì hoãn)."
      },
      {
        "id": "parts_of_speech_3_q23",
        "num": 23,
        "stem": "The train’s ---- was delayed because of a problem on the track.",
        "options": {
          "A": "departed",
          "B": "departure",
          "C": "departs",
          "D": "depart"
        },
        "answer": "B",
        "explanation": "Sau sở hữu cách 'The train’s' và trước động từ 'was delayed' cần một danh từ số ít làm chủ ngữ. Chọn 'departure' (sự khởi hành)."
      },
      {
        "id": "parts_of_speech_3_q24",
        "num": 24,
        "stem": "The airport applied a blanket rule that all passengers must be in possession of ---- tickets in order to enter the waiting area.",
        "options": {
          "A": "valid",
          "B": "validity",
          "C": "validate",
          "D": "validation"
        },
        "answer": "A",
        "explanation": "Trước danh từ 'tickets' cần một tính từ để bổ nghĩa. Chọn 'valid' (hợp lệ)."
      },
      {
        "id": "parts_of_speech_3_q25",
        "num": 25,
        "stem": "Let me point out the features of our service that ---- our airline from our competitors.",
        "options": {
          "A": "distinguishably",
          "B": "distinguishable",
          "C": "distinguishing",
          "D": "distinguish"
        },
        "answer": "D",
        "explanation": "Mệnh đề quan hệ 'that ---- our airline...' thiếu động từ chính. Đại từ 'that' thay thế cho danh từ số nhiều 'the features', nên chọn động từ chia số nhiều ở hiện tại đơn là 'distinguish'."
      },
      {
        "id": "parts_of_speech_3_q26",
        "num": 26,
        "stem": "Let’s shop around until we find a more---- airfare.",
        "options": {
          "A": "economical",
          "B": "economize",
          "C": "economy",
          "D": "economically"
        },
        "answer": "A",
        "explanation": "Giữa 'a more' và danh từ 'airfare' cần một tính từ để tạo dạng so sánh hơn bổ nghĩa cho danh từ. Chọn 'economical' (tiết kiệm, kinh tế)."
      },
      {
        "id": "parts_of_speech_3_q27",
        "num": 27,
        "stem": "We need to keep our ---- down so you’ll have to fund us better prices on airlines tickets.",
        "options": {
          "A": "expensiveness",
          "B": "expensively",
          "C": "expenses",
          "D": "expensive"
        },
        "answer": "C",
        "explanation": "Sau tính từ sở hữu 'our' cần một danh từ làm tân ngữ cho động từ 'keep'. Theo ngữ cảnh và cụm 'keep expenses down' (giữ chi phí thấp), chọn 'expenses' (chi phí)."
      },
      {
        "id": "parts_of_speech_3_q28",
        "num": 28,
        "stem": "I decided not to ---- my trip since I felt so tired by the time I finished my business meetings.",
        "options": {
          "A": "extended",
          "B": "extent",
          "C": "extensive",
          "D": "extend"
        },
        "answer": "D",
        "explanation": "Cấu trúc 'decide (not) to + V-nguyên thể' (quyết định không làm gì). Chọn động từ nguyên thể 'extend' (kéo dài)."
      },
      {
        "id": "parts_of_speech_3_q29",
        "num": 29,
        "stem": "My travel agent said there were good ---- of finding a reasonably priced airfare.",
        "options": {
          "A": "prospective",
          "B": "prospectively",
          "C": "prospectors",
          "D": "prospects"
        },
        "answer": "D",
        "explanation": "Sau 'there were' và tính từ 'good' cần một danh từ số nhiều. Về nghĩa, chọn 'prospects' (triển vọng, khả năng) thay vì 'prospectors' (người thăm dò khoáng sản)."
      },
      {
        "id": "parts_of_speech_3_q30",
        "num": 30,
        "stem": "Unless the airfares differ ----, you should book seats on the airline with which you have frequent flyer miles.",
        "options": {
          "A": "substance",
          "B": "substantially",
          "C": "substantial",
          "D": "substantiality"
        },
        "answer": "B",
        "explanation": "Sau nội động từ 'differ' cần một trạng từ để bổ nghĩa cho động từ này. Chọn 'substantially' (một cách đáng kể)."
      },
      {
        "id": "parts_of_speech_3_q31",
        "num": 31,
        "stem": "Do you have a ---- map that shows all the station stops west of the Mississippi?",
        "options": {
          "A": "comprehension",
          "B": "comprehensively",
          "C": "comprehensive",
          "D": "comprehensiveness"
        },
        "answer": "C",
        "explanation": "Trước danh từ 'map' và sau mạo từ 'a' cần một tính từ bổ nghĩa. 'Comprehensive' (toàn diện, đầy đủ) là tính từ phù hợp."
      },
      {
        "id": "parts_of_speech_3_q32",
        "num": 32,
        "stem": "We got lost in the train station and had to ask for ---- to the gate that our train was leaving from.",
        "options": {
          "A": "directions",
          "B": "directed",
          "C": "directory",
          "D": "directs"
        },
        "answer": "A",
        "explanation": "Sau giới từ 'for' cần một danh từ. Cụm từ cố định 'ask for directions' mang nghĩa là 'hỏi đường'."
      },
      {
        "id": "parts_of_speech_3_q33",
        "num": 33,
        "stem": "The train has stopped because of the malfunction, but we expect it to be ---- again within minutes.",
        "options": {
          "A": "operational",
          "B": "operate",
          "C": "operation",
          "D": "operationally"
        },
        "answer": "A",
        "explanation": "Sau động từ 'to be' cần một tính từ để miêu tả trạng thái của chủ ngữ ('the train'). 'Operational' (có thể hoạt động) là tính từ phù hợp."
      },
      {
        "id": "parts_of_speech_3_q34",
        "num": 34,
        "stem": "John never arrives ----, so I am always anxious when we travel together for fear of missing a train.",
        "options": {
          "A": "punctualness",
          "B": "punctually",
          "C": "punctual",
          "D": "punctuality"
        },
        "answer": "B",
        "explanation": "Cần một trạng từ để bổ nghĩa cho động từ thường 'arrives'. 'Punctually' (một cách đúng giờ) là đáp án chính xác."
      },
      {
        "id": "parts_of_speech_3_q35",
        "num": 35,
        "stem": "Sylvia’s family ---- with her in the station until she was ready to board the train.",
        "options": {
          "A": "remains",
          "B": "remainder",
          "C": "remained",
          "D": "remaining"
        },
        "answer": "C",
        "explanation": "Câu thiếu động từ chính chia theo chủ ngữ 'Sylvia’s family'. Mệnh đề sau dùng thì quá khứ đơn ('was ready') nên động từ chính cũng chia ở quá khứ đơn là 'remained'."
      },
      {
        "id": "parts_of_speech_3_q36",
        "num": 36,
        "stem": "With this traffic, there isn’t even a ---- chance that we will get to the train station on time.",
        "options": {
          "A": "remotely",
          "B": "remote",
          "C": "remoteness",
          "D": "remotest"
        },
        "answer": "B",
        "explanation": "Sau mạo từ 'a' và trước danh từ 'chance' cần một tính từ ở dạng nguyên thể (không dùng so sánh nhất 'remotest' với 'a'). Cụm 'a remote chance' nghĩa là 'một cơ hội mong manh'."
      },
      {
        "id": "parts_of_speech_3_q37",
        "num": 37,
        "stem": "We paid a lot of money for this room and we expect an ---- level of service.",
        "options": {
          "A": "advance",
          "B": "advances",
          "C": "advanced",
          "D": "advancing"
        },
        "answer": "C",
        "explanation": "Sau mạo từ 'an' và trước danh từ 'level' cần một tính từ. 'Advanced' (cao cấp, tiên tiến) phù hợp về ngữ nghĩa cho 'mức độ dịch vụ'."
      },
      {
        "id": "parts_of_speech_3_q38",
        "num": 38,
        "stem": "Gladys ---- her reservation by calling in advance.",
        "options": {
          "A": "confirmation",
          "B": "confirmed",
          "C": "confirming",
          "D": "confirmative"
        },
        "answer": "B",
        "explanation": "Câu thiếu động từ chính đứng sau chủ ngữ 'Gladys' và trước tân ngữ 'her reservation'. 'Confirmed' (đã xác nhận) là động từ chia thì quá khứ đơn phù hợp."
      },
      {
        "id": "parts_of_speech_3_q39",
        "num": 39,
        "stem": "The Chamber of Commerce had high ---- for the amount of business the new hotel would bring to the town.",
        "options": {
          "A": "expectancy",
          "B": "expected",
          "C": "expect",
          "D": "expectations"
        },
        "answer": "D",
        "explanation": "Sau tính từ 'high' cần một danh từ. Cụm từ cố định 'have high expectations for' mang nghĩa 'có kỳ vọng cao đối với'."
      },
      {
        "id": "parts_of_speech_3_q40",
        "num": 40,
        "stem": "The hotel received the ---- of our early arrival had had everything ready for us.",
        "options": {
          "A": "notified",
          "B": "notifies",
          "C": "notification",
          "D": "notify"
        },
        "answer": "C",
        "explanation": "Giữa mạo từ 'the' và giới từ 'of' cần một danh từ. 'Notification' (sự thông báo) là danh từ duy nhất trong các đáp án."
      },
      {
        "id": "parts_of_speech_3_q41",
        "num": 41,
        "stem": "I expect the rate that I was --- over the phone and I will not accept any changes.",
        "options": {
          "A": "quoted",
          "B": "quotation",
          "C": "quotable",
          "D": "quotes"
        },
        "answer": "A",
        "explanation": "Cấu trúc câu bị động ở thì quá khứ đơn: 'was + V3/ed'. 'Quoted' (được báo giá) phù hợp với ngữ cảnh báo giá qua điện thoại."
      },
      {
        "id": "parts_of_speech_3_q42",
        "num": 42,
        "stem": "Since we had made our ---- so far in advance, we saved considerably on the room rate.",
        "options": {
          "A": "reserve",
          "B": "reservation",
          "C": "reserved",
          "D": "reservable"
        },
        "answer": "B",
        "explanation": "Sau tính từ sở hữu 'our' cần một danh từ. Cụm động từ 'make a reservation' mang nghĩa 'đặt phòng/đặt chỗ'."
      },
      {
        "id": "parts_of_speech_3_q43",
        "num": 43,
        "stem": "The constant road repair work made driving though the city ----.",
        "options": {
          "A": "confuse",
          "B": "confuses",
          "C": "confusion",
          "D": "confusing"
        },
        "answer": "D",
        "explanation": "Cấu trúc 'make + O + adj' (khiến cho cái gì như thế nào). 'Confusing' (gây bối rối, rắc rối) là tính từ phù hợp để miêu tả tính chất của việc lái xe."
      },
      {
        "id": "parts_of_speech_3_q44",
        "num": 44,
        "stem": "I don’t think it is a ---- that the special discount rate for renting a car expires right before the holiday weekend.",
        "options": {
          "A": "coincidental",
          "B": "coincidentally",
          "C": "coincidence",
          "D": "coincide"
        },
        "answer": "C",
        "explanation": "Sau mạo từ 'a' cần một danh từ đếm được số ít. 'Coincidence' (sự trùng hợp ngẫu nhiên) là danh từ duy nhất."
      },
      {
        "id": "parts_of_speech_3_q45",
        "num": 45,
        "stem": "It was ---- to discover that the car rental company had only compact cars available.",
        "options": {
          "A": "disappointing",
          "B": "disappointed",
          "C": "disappointment",
          "D": "disappoints"
        },
        "answer": "A",
        "explanation": "Cấu trúc 'It + be + adj + to V'. Cần tính từ đuôi -ing ('disappointing' - đáng thất vọng) để miêu tả tính chất của sự việc ('to discover...')."
      },
      {
        "id": "parts_of_speech_3_q46",
        "num": 46,
        "stem": "Our ---- is to rent a comfortable car and spend several weeks driving through the mountains.",
        "options": {
          "A": "intent",
          "B": "intently",
          "C": "intention",
          "D": "intend"
        },
        "answer": "C",
        "explanation": "Sau tính từ sở hữu 'Our' và trước động từ 'is' cần một danh từ làm chủ ngữ. 'Intention' (ý định, dự định) phù hợp ngữ cảnh và cấu trúc 'intention is to V' hơn 'intent' (thường mang sắc thái pháp lý/trang trọng)."
      },
      {
        "id": "parts_of_speech_3_q47",
        "num": 47,
        "stem": "Tito ----- drove the rental car through the crowded garage following the signs to the car rental return location.",
        "options": {
          "A": "nerve",
          "B": "nervousness",
          "C": "nervous",
          "D": "nervously"
        },
        "answer": "D",
        "explanation": "Trước động từ thường 'drove' cần một trạng từ để bổ nghĩa cho hành động lái xe. Chọn 'nervously' (một cách lo lắng/căng thẳng)."
      },
      {
        "id": "parts_of_speech_3_q48",
        "num": 48,
        "stem": "The new car rental company ---- me to try them by offering a discount coupon toward my next rental.",
        "options": {
          "A": "tempted",
          "B": "tempting",
          "C": "temptation",
          "D": "temptress"
        },
        "answer": "A",
        "explanation": "Câu thiếu động từ chính chia thì sau chủ ngữ 'The new car rental company'. Chọn động từ quá khứ đơn 'tempted' (lôi cuốn, thuyết phục)."
      },
      {
        "id": "parts_of_speech_3_q49",
        "num": 49,
        "stem": "Do you think this actor will ---- the heights of this famous father?",
        "options": {
          "A": "attain",
          "B": "attaining",
          "C": "attainable",
          "D": "attainment"
        },
        "answer": "A",
        "explanation": "Sau trợ động từ khuyết thiếu 'will' cần một động từ nguyên mẫu (V-inf). Chọn 'attain' (đạt được)."
      },
      {
        "id": "parts_of_speech_3_q50",
        "num": 50,
        "stem": "A sequel is a ---- of a story set in motion by a previous film.",
        "options": {
          "A": "continuity",
          "B": "continuing",
          "C": "continuation",
          "D": "continues"
        },
        "answer": "C",
        "explanation": "Sau mạo từ 'a' và trước giới từ 'of' cần một danh từ đếm được số ít. Chọn 'continuation' (phần tiếp nối/tiếp theo của câu chuyện), không chọn 'continuity' (tính liên tục)."
      },
      {
        "id": "parts_of_speech_3_q51",
        "num": 51,
        "stem": "Each director has a uniquely ---- style of storytelling.",
        "options": {
          "A": "descriptive",
          "B": "describe",
          "C": "description",
          "D": "descriptively"
        },
        "answer": "A",
        "explanation": "Giữa trạng từ 'uniquely' và danh từ 'style' cần một tính từ bổ nghĩa cho danh từ. Chọn 'descriptive' (mang tính miêu tả, sinh động)."
      },
      {
        "id": "parts_of_speech_3_q52",
        "num": 52,
        "stem": "---- is one of the fastest growing sectors of the economy.",
        "options": {
          "A": "entertained",
          "B": "entertainment",
          "C": "entertain",
          "D": "entertainingly"
        },
        "answer": "B",
        "explanation": "Vị trí đầu câu trước động từ 'is' cần một danh từ làm chủ ngữ. Chọn 'entertainment' (ngành giải trí)."
      },
      {
        "id": "parts_of_speech_3_q53",
        "num": 53,
        "stem": "We were impressed by the director’s ---- of the conflict between good and evil.",
        "options": {
          "A": "representative",
          "B": "represented",
          "C": "represents",
          "D": "representation"
        },
        "answer": "D",
        "explanation": "Sau sở hữu cách 'the director’s' và trước 'of' cần một danh từ. Về nghĩa, chọn 'representation' (sự khắc họa, thể hiện), không chọn 'representative' (người đại diện)."
      },
      {
        "id": "parts_of_speech_3_q54",
        "num": 54,
        "stem": "The actors left the hotel ---- in order to avoid attracting a lot of attention.",
        "options": {
          "A": "separate",
          "B": "separately",
          "C": "separation",
          "D": "separating"
        },
        "answer": "B",
        "explanation": "Mệnh đề 'The actors left the hotel' đã đầy đủ thành phần, cần một trạng từ bổ nghĩa cho động từ 'left'. Chọn 'separately' (riêng rẽ, tách biệt)."
      },
      {
        "id": "parts_of_speech_3_q55",
        "num": 55,
        "stem": "The director’s creativity showed in everything from her ---- to the literary quality of the play to the costumes and sets.",
        "options": {
          "A": "approaching",
          "B": "approach",
          "C": "approachable",
          "D": "approachability"
        },
        "answer": "B",
        "explanation": "Sau tính từ sở hữu 'her' và đi với giới từ 'to' cần một danh từ. Chọn 'approach' (cách tiếp cận), không chọn 'approachability' (sự dễ gần)."
      },
      {
        "id": "parts_of_speech_3_q56",
        "num": 56,
        "stem": "Edward is a very talented ---- although he can’t sing or dance well at all.",
        "options": {
          "A": "actor",
          "B": "acts",
          "C": "action",
          "D": "acting"
        },
        "answer": "A",
        "explanation": "Sau cụm 'a very talented' cần một danh từ chỉ người tương ứng với chủ ngữ 'Edward'. Chọn 'actor' (diễn viên)."
      },
      {
        "id": "parts_of_speech_3_q57",
        "num": 57,
        "stem": "As your director, I call upon you to bring your life ---- into your role.",
        "options": {
          "A": "experienced",
          "B": "experiencing",
          "C": "experiential",
          "D": "experience"
        },
        "answer": "D",
        "explanation": "Sau 'your life' cần một danh từ để tạo thành cụm danh từ 'life experience' (kinh nghiệm sống) làm tân ngữ cho động từ 'bring'."
      },
      {
        "id": "parts_of_speech_3_q58",
        "num": 58,
        "stem": "I am not ---- enough to work in the theater, but I certainly enjoy attending it.",
        "options": {
          "A": "create",
          "B": "creativeness",
          "C": "creative",
          "D": "creativity"
        },
        "answer": "C",
        "explanation": "Cấu trúc 'be + adj + enough + to V'. Sau 'am not' và trước 'enough' cần tính từ, chọn 'creative' (sáng tạo)."
      },
      {
        "id": "parts_of_speech_3_q59",
        "num": 59,
        "stem": "I look forward to the annual ---- of The Nutcracker ballet.",
        "options": {
          "A": "performance",
          "B": "performer",
          "C": "perform",
          "D": "performable"
        },
        "answer": "A",
        "explanation": "Sau mạo từ và tính từ 'the annual' và trước 'of' cần một danh từ chỉ sự kiện. Chọn 'performance' (buổi biểu diễn), không chọn 'performer' (người biểu diễn)."
      },
      {
        "id": "parts_of_speech_3_q60",
        "num": 60,
        "stem": "There isn’t much time left to ---- before the play opens.",
        "options": {
          "A": "rehearsals",
          "B": "rehearse",
          "C": "rehearsing",
          "D": "rehearsed"
        },
        "answer": "B",
        "explanation": "Cấu trúc 'time left to + V-inf' (thời gian còn lại để làm gì). Sau 'to' cần động từ nguyên mẫu, chọn 'rehearse' (diễn tập)."
      },
      {
        "id": "parts_of_speech_3_q61",
        "num": 61,
        "stem": "My friends have urged me to ---- my tastes to include more classical music.",
        "options": {
          "A": "broad",
          "B": "broadly",
          "C": "broaden",
          "D": "broadened"
        },
        "answer": "C",
        "explanation": "Cấu trúc 'urge somebody to + V (nguyên mẫu)' (thúc giục ai làm gì), nên cần động từ nguyên mẫu 'broaden' (mở rộng)."
      },
      {
        "id": "parts_of_speech_3_q62",
        "num": 62,
        "stem": "I don’t know how to ---- my tastes in music.",
        "options": {
          "A": "categorize",
          "B": "categories",
          "C": "categorical",
          "D": "categorically"
        },
        "answer": "A",
        "explanation": "Sau cấu trúc 'how to + V (nguyên mẫu)' cần một động từ nguyên mẫu nên chọn 'categorize' (phân loại)."
      },
      {
        "id": "parts_of_speech_3_q63",
        "num": 63,
        "stem": "The string quartet received a ---- comparison to the best of the genre.",
        "options": {
          "A": "favor",
          "B": "favoritism",
          "C": "favorably",
          "D": "favorable"
        },
        "answer": "D",
        "explanation": "Đứng giữa mạo từ 'a' và danh từ 'comparison' cần một tính từ bổ nghĩa, nên chọn 'favorable' (tích cực, có lợi)."
      },
      {
        "id": "parts_of_speech_3_q64",
        "num": 64,
        "stem": "The symphony members ---- to travel abroad only once a year.",
        "options": {
          "A": "prefer",
          "B": "preferable",
          "C": "preference",
          "D": "preferential"
        },
        "answer": "A",
        "explanation": "Câu thiếu động từ chính cho chủ ngữ số nhiều 'The symphony members' và đi với cấu trúc 'prefer to V', nên chọn 'prefer'."
      },
      {
        "id": "parts_of_speech_3_q65",
        "num": 65,
        "stem": "After a hard day at work, we like to ---- to smoothing music.",
        "options": {
          "A": "relaxation",
          "B": "relaxes",
          "C": "relaxing",
          "D": "relax"
        },
        "answer": "D",
        "explanation": "Sau cấu trúc 'like to + V (nguyên mẫu)' cần một động từ nguyên mẫu nên chọn 'relax' (thư giãn)."
      },
      {
        "id": "parts_of_speech_3_q66",
        "num": 66,
        "stem": "Sometimes I get an ---- to learn how to play a musical instrument.",
        "options": {
          "A": "urgent",
          "B": "urge",
          "C": "urges",
          "D": "urgently"
        },
        "answer": "B",
        "explanation": "Sau mạo từ 'an' cần một danh từ đếm được số ít; cụm 'an urge to V' nghĩa là 'sự thôi thúc làm gì', nên chọn 'urge'."
      },
      {
        "id": "parts_of_speech_3_q67",
        "num": 67,
        "stem": "The museum was lucky to be given a collection of works by such an ---- artist.",
        "options": {
          "A": "admiration",
          "B": "admire",
          "C": "admired",
          "D": "admires"
        },
        "answer": "C",
        "explanation": "Giữa mạo từ 'an' và danh từ 'artist' cần một tính từ; dùng phân từ quá khứ 'admired' mang nghĩa bị động (người nghệ sĩ được ngưỡng mộ)."
      },
      {
        "id": "parts_of_speech_3_q68",
        "num": 68,
        "stem": "One Mimi began ---- pottery, her husband give her pieces as gifts.",
        "options": {
          "A": "collection",
          "B": "collectable",
          "C": "collecting",
          "D": "collector"
        },
        "answer": "C",
        "explanation": "Sau động từ 'begin' và trước tân ngữ 'pottery' cần danh động từ (V-ing) theo cấu trúc 'begin + V-ing', nên chọn 'collecting' (sưu tầm)."
      },
      {
        "id": "parts_of_speech_3_q69",
        "num": 69,
        "stem": "The curator’s ---- of the museum’s fund-raising plan seemed shortsighted.",
        "options": {
          "A": "criticism",
          "B": "critic",
          "C": "critical",
          "D": "criticize"
        },
        "answer": "A",
        "explanation": "Sau sở hữu cách 'The curator’s' và trước giới từ 'of' cần danh từ; xét ngữ cảnh cần danh từ chỉ sự việc 'criticism' (sự chỉ trích), không dùng danh từ chỉ người 'critic'."
      },
      {
        "id": "parts_of_speech_3_q70",
        "num": 70,
        "stem": "We have been asked to ---- to the proposal by the end of the month.",
        "options": {
          "A": "responsive",
          "B": "response",
          "C": "respond",
          "D": "responding"
        },
        "answer": "C",
        "explanation": "Sau cấu trúc bị động 'be asked to + V (nguyên mẫu)' cần động từ nguyên mẫu nên chọn 'respond' (phản hồi)."
      },
      {
        "id": "parts_of_speech_3_q71",
        "num": 71,
        "stem": "The museum offers a ---- of guided tours.",
        "options": {
          "A": "schedules",
          "B": "scheduled",
          "C": "scheduling",
          "D": "schedule"
        },
        "answer": "D",
        "explanation": "Sau mạo từ 'a' và trước 'of guided tours' cần một danh từ đếm được số ít nên chọn 'schedule' (lịch trình)."
      },
      {
        "id": "parts_of_speech_3_q72",
        "num": 72,
        "stem": "After becoming a ---- in Egyptian tomb painting, the art historian lost her interest in other kinds of art.",
        "options": {
          "A": "specialize",
          "B": "specialist",
          "C": "specially",
          "D": "special"
        },
        "answer": "B",
        "explanation": "Sau 'becoming a' cần danh từ số ít chỉ người tương ứng với chủ ngữ 'the art historian', nên chọn 'specialist' (chuyên gia)."
      },
      {
        "id": "parts_of_speech_3_q73",
        "num": 73,
        "stem": "I don’t want to pressure you, but you need to ---- the reporter who will cover the mayor’s race this year.",
        "options": {
          "A": "chosen",
          "B": "choosy",
          "C": "choose",
          "D": "choice"
        },
        "answer": "C",
        "explanation": "Sau cấu trúc 'need to + V (nguyên mẫu)' cần một động từ nguyên mẫu nên chọn 'choose' (chọn lựa)."
      },
      {
        "id": "parts_of_speech_3_q74",
        "num": 74,
        "stem": "By ---- asking questions, Harry was able to get the information he wanted for his report.",
        "options": {
          "A": "constant",
          "B": "constancy",
          "C": "consistence",
          "D": "constantly"
        },
        "answer": "D",
        "explanation": "Cần một trạng từ đứng trước để bổ nghĩa cho danh động từ 'asking', nên chọn 'constantly' (liên tục)."
      },
      {
        "id": "parts_of_speech_3_q75",
        "num": 75,
        "stem": "Georgette ---- to stop subscribing to the newspaper because she felt the quality of the reporting has deteriorated.",
        "options": {
          "A": "decision",
          "B": "decided",
          "C": "decides",
          "D": "decisive"
        },
        "answer": "B",
        "explanation": "Câu thiếu động từ chính cho chủ ngữ 'Georgette'; mệnh đề sau ở thì quá khứ đơn ('she felt'), nên chọn động từ quá khứ 'decided' để hòa hợp thì."
      },
      {
        "id": "parts_of_speech_3_q76",
        "num": 76,
        "stem": "The reporters followed the official ---- by interviewing all the witnesses to the crime.",
        "options": {
          "A": "investigate",
          "B": "investigation",
          "C": "investigative",
          "D": "investigational"
        },
        "answer": "B",
        "explanation": "Sau mạo từ 'the' và tính từ 'official' cần một danh từ làm tân ngữ cho động từ 'followed'. 'Investigation' (cuộc điều tra) là danh từ phù hợp."
      },
      {
        "id": "parts_of_speech_3_q77",
        "num": 77,
        "stem": "I need to renew my ---- for cable television, but I can’t find the form.",
        "options": {
          "A": "subscribing",
          "B": "subscription",
          "C": "subscriber",
          "D": "subscribe"
        },
        "answer": "B",
        "explanation": "Sau tính từ sở hữu 'my' cần một danh từ làm tân ngữ cho động từ 'renew'. Xét ngữ cảnh 'renew my ---- for cable television', 'subscription' (gói đăng ký) phù hợp hơn 'subscriber' (người đăng ký)."
      },
      {
        "id": "parts_of_speech_3_q78",
        "num": 78,
        "stem": "The editor was impressed with how ---- the reporter was in getting the details from his sources.",
        "options": {
          "A": "thorough",
          "B": "thoroughness",
          "C": "thoroughly",
          "D": "thoroughbred"
        },
        "answer": "A",
        "explanation": "Cấu trúc mệnh đề danh ngữ 'how + tính từ + S + be' (the reporter was thorough). 'Thorough' (kỹ lưỡng, tỉ mỉ) là tính từ bổ nghĩa cho chủ ngữ 'the reporter'."
      },
      {
        "id": "parts_of_speech_3_q79",
        "num": 79,
        "stem": "Luckily, the test results show no ---- damage from the accident.",
        "options": {
          "A": "assess",
          "B": "assessment",
          "C": "assessing",
          "D": "assessable"
        },
        "answer": "D",
        "explanation": "Trước danh từ 'damage' cần một tính từ bổ nghĩa. 'Assessable' (có thể đánh giá/đo lường được) là tính từ phù hợp."
      },
      {
        "id": "parts_of_speech_3_q80",
        "num": 80,
        "stem": "This is not an easy ---- to make without the benefit of numerous test results.",
        "options": {
          "A": "diagnosis",
          "B": "diagnose",
          "C": "diagnostic",
          "D": "diagnosed"
        },
        "answer": "A",
        "explanation": "Sau mạo từ 'an' và tính từ 'easy' cần một danh từ đếm được số ít. 'Diagnosis' (chẩn đoán) là danh từ và đi với cụm 'make a diagnosis'."
      },
      {
        "id": "parts_of_speech_3_q81",
        "num": 81,
        "stem": "The most effective way to treat illness is to ---- it from ever occurring.",
        "options": {
          "A": "prevention",
          "B": "preventable",
          "C": "prevent"
        },
        "answer": "C",
        "explanation": "Sau 'to' trong cấu trúc động từ nguyên mẫu (to-infinitive) cần một động từ nguyên thể. 'Prevent' (ngăn ngừa) phù hợp với cấu trúc 'prevent sth from V-ing'."
      },
      {
        "id": "parts_of_speech_3_q82",
        "num": 82,
        "stem": "Gabriela did not consistently follow her doctor’s ---- and her condition did not improve.",
        "options": {
          "A": "recommendations",
          "B": "recommendable",
          "C": "recommended",
          "D": "recommending"
        },
        "answer": "A",
        "explanation": "Sau sở hữu cách 'her doctor’s' cần một danh từ làm tân ngữ cho động từ 'follow'. 'Recommendations' (những lời khuyên/khuyến nghị) là danh từ phù hợp."
      },
      {
        "id": "parts_of_speech_3_q83",
        "num": 83,
        "stem": "Jane’s doctor asked her to ---- everything she ate for a week.",
        "options": {
          "A": "records",
          "B": "record",
          "C": "recording",
          "D": "recorded"
        },
        "answer": "B",
        "explanation": "Cấu trúc 'ask sb to + V-inf' (yêu cầu ai làm gì) nên sau 'to' cần động từ nguyên thể 'record' (ghi chép lại)."
      },
      {
        "id": "parts_of_speech_3_q84",
        "num": 84,
        "stem": "Public health officials are just now realizing the ---- of this disease.",
        "options": {
          "A": "seriousness",
          "B": "serious",
          "C": "seriously",
          "D": "series"
        },
        "answer": "A",
        "explanation": "Sau mạo từ 'the' và trước giới từ 'of' cần một danh từ. Xét ngữ cảnh nói về căn bệnh, 'seriousness' (mức độ nghiêm trọng) phù hợp về nghĩa hơn 'series' (chuỗi, loạt)."
      },
      {
        "id": "parts_of_speech_3_q85",
        "num": 85,
        "stem": "I don’t want to ---- you, but there is a phone call waiting for you at the front desk.",
        "options": {
          "A": "distractedly",
          "B": "distractible",
          "C": "distraction",
          "D": "distract"
        },
        "answer": "D",
        "explanation": "Sau 'want to' cần một động từ nguyên thể. 'Distract' (làm phân tâm/làm phiền) là động từ phù hợp."
      },
      {
        "id": "parts_of_speech_3_q86",
        "num": 86,
        "stem": "My dentist always ---- me to floss more regularly.",
        "options": {
          "A": "encouraging",
          "B": "encouragement",
          "C": "encourages",
          "D": "encourage"
        },
        "answer": "C",
        "explanation": "Câu thiếu động từ chính. Với chủ ngữ số ít 'My dentist' và trạng từ tần suất 'always', cần động từ chia ở thì hiện tại đơn số ít là 'encourages' (khuyến khích)."
      },
      {
        "id": "parts_of_speech_3_q87",
        "num": 87,
        "stem": "It was ---- from the X-rays that I needed dental work.",
        "options": {
          "A": "evident",
          "B": "evidently",
          "C": "evidence",
          "D": "evidential"
        },
        "answer": "A",
        "explanation": "Cấu trúc chủ ngữ giả 'It + be + tính từ + that...'. 'Evident' (rõ ràng, hiển nhiên) phù hợp về ngữ pháp và ngữ cảnh hơn 'evidential' (thuộc về bằng chứng)."
      },
      {
        "id": "parts_of_speech_3_q88",
        "num": 88,
        "stem": "Knowing his ---- tidiness, I’m not surprised to learn that David flosses three times a day.",
        "options": {
          "A": "habit",
          "B": "habitual",
          "C": "habitually",
          "D": "habitualness"
        },
        "answer": "B",
        "explanation": "Giữa tính từ sở hữu 'his' và danh từ 'tidiness' cần một tính từ bổ nghĩa. 'Habitual' (theo thói quen, thường lệ) là tính từ phù hợp."
      },
      {
        "id": "parts_of_speech_3_q89",
        "num": 89,
        "stem": "An ---- at the gum line can be nothing serious or the symptom of a larger problem.",
        "options": {
          "A": "irritate",
          "B": "irritable",
          "C": "irritation",
          "D": "irritability"
        },
        "answer": "C",
        "explanation": "Sau mạo từ 'An' cần một danh từ đếm được số ít làm chủ ngữ. 'Irritation' (sự kích ứng/viêm ở viền nướu) phù hợp về nghĩa hơn 'irritability' (tính dễ cáu kỉnh)."
      },
      {
        "id": "parts_of_speech_3_q90",
        "num": 90,
        "stem": "---- visits to the dentist are necessary for maintaining good dental health.",
        "options": {
          "A": "regularly",
          "B": "regular",
          "C": "regulate",
          "D": "regulates"
        },
        "answer": "B",
        "explanation": "Trước danh từ số nhiều 'visits' cần một tính từ bổ nghĩa. 'Regular' (định kỳ, thường xuyên) là tính từ phù hợp."
      },
      {
        "id": "parts_of_speech_3_q91",
        "num": 91,
        "stem": "Office policy does not ---- employees to leave the office for medical appointments.",
        "options": {
          "A": "allow",
          "B": "allowing",
          "C": "allowable",
          "D": "allowance"
        },
        "answer": "A",
        "explanation": "Sau trợ động từ 'does not' cần động từ nguyên mẫu (V0). Chọn 'allow' (cấu trúc allow sb to V: cho phép ai làm gì)."
      },
      {
        "id": "parts_of_speech_3_q92",
        "num": 92,
        "stem": "You should investigate to see if there are any ---- to costly hospital stays.",
        "options": {
          "A": "alternate",
          "B": "alternatively",
          "C": "alternatives",
          "D": "alternating"
        },
        "answer": "C",
        "explanation": "Sau 'there are any' cần một danh từ đếm được số nhiều. Chọn 'alternatives' (các phương án thay thế)."
      },
      {
        "id": "parts_of_speech_3_q93",
        "num": 93,
        "stem": "It ---- me that our company is not willing to look for an alternative to our current health insurance plan.",
        "options": {
          "A": "concern",
          "B": "concerned",
          "C": "concerns",
          "D": "concerning"
        },
        "answer": "C",
        "explanation": "Câu thiếu động từ chính cho chủ ngữ số ít 'It'; mệnh đề sau chia hiện tại ('is not willing', 'current') nên chọn động từ chia hiện tại đơn số ít 'concerns' (khiến tôi lo ngại)."
      },
      {
        "id": "parts_of_speech_3_q94",
        "num": 94,
        "stem": "I’m really pleases that my health plan provider is paying for my gym membership as a way to ---- its concern for my health.",
        "options": {
          "A": "emphasis",
          "B": "emphasize",
          "C": "emphatic",
          "D": "emphasizing"
        },
        "answer": "B",
        "explanation": "Sau cấu trúc 'a way to + V0' cần động từ nguyên mẫu. Chọn 'emphasize' (nhấn mạnh)."
      },
      {
        "id": "parts_of_speech_3_q95",
        "num": 95,
        "stem": "I ---- health insurance as an indispensable job benefit.",
        "options": {
          "A": "regardless",
          "B": "regardful",
          "C": "regarding",
          "D": "regard"
        },
        "answer": "D",
        "explanation": "Sau chủ ngữ 'I' cần một động từ chính chia ở hiện tại đơn. Chọn 'regard' (cấu trúc regard A as B: coi A là B)."
      },
      {
        "id": "parts_of_speech_3_q96",
        "num": 96,
        "stem": "The employee’s goal is to find her family ---- health coverage.",
        "options": {
          "A": "suit",
          "B": "suitable",
          "C": "suitably",
          "D": "suitability"
        },
        "answer": "B",
        "explanation": "Trước cụm danh từ 'health coverage' cần một tính từ bổ nghĩa. Chọn 'suitable' (phù hợp)."
      },
      {
        "id": "parts_of_speech_3_q97",
        "num": 97,
        "stem": "Before my father was ---- to the hospital, he has to undergo s series of tests.",
        "options": {
          "A": "admit",
          "B": "admitted",
          "C": "admittance",
          "D": "admissions"
        },
        "answer": "B",
        "explanation": "Sau 'was' cần quá khứ phân từ (V3/V-ed) để tạo thể bị động. Chọn 'admitted' (be admitted to the hospital: được nhập viện)."
      },
      {
        "id": "parts_of_speech_3_q98",
        "num": 98,
        "stem": "Will your insurance company ---- a visit to a specialist?",
        "options": {
          "A": "authorize",
          "B": "authorization",
          "C": "authority",
          "D": "authorizing"
        },
        "answer": "A",
        "explanation": "Trong câu hỏi với động từ khuyết thiếu 'Will + S + V0', cần một động từ nguyên mẫu. Chọn 'authorize' (chấp thuận/cho phép)."
      },
      {
        "id": "parts_of_speech_3_q99",
        "num": 99,
        "stem": "As a precaution, it’s wise to ---- someone in your family to make health care decisions for you in case there is a time that you cannot.",
        "options": {
          "A": "designation",
          "B": "designate",
          "C": "designator",
          "D": "designated"
        },
        "answer": "B",
        "explanation": "Sau cấu trúc 'it's wise to + V0' cần động từ nguyên mẫu. Chọn 'designate' (chỉ định)."
      },
      {
        "id": "parts_of_speech_3_q100",
        "num": 100,
        "stem": "Your X-rays will have your name and social security number printed   on them, so we can easily ---- them as yours.",
        "options": {
          "A": "identifiably",
          "B": "identification",
          "C": "identifiable",
          "D": "identify"
        },
        "answer": "D",
        "explanation": "Sau động từ khuyết thiếu 'can' và trạng từ 'easily' cần động từ nguyên mẫu (V0). Chọn 'identify' (nhận diện/xác định)."
      },
      {
        "id": "parts_of_speech_3_q101",
        "num": 101,
        "stem": "Before we can begin the surgery, we will need your signed ---- authorizing us to perform the procedure.",
        "options": {
          "A": "permit",
          "B": "permissive",
          "C": "permission",
          "D": "permissible"
        },
        "answer": "C",
        "explanation": "Sau tính từ sở hữu 'your' và tính từ 'signed' cần danh từ. Xét ngữ cảnh phẫu thuật, chọn 'permission' (sự cho phép/đồng ý bằng văn bản) thay vì 'permit' (giấy phép hành chính)."
      },
      {
        "id": "parts_of_speech_3_q102",
        "num": 102,
        "stem": "Is it ---- for a doctor to order so many tests?",
        "options": {
          "A": "usual",
          "B": "usually",
          "C": "unusually",
          "D": "used"
        },
        "answer": "A",
        "explanation": "Theo cấu trúc 'Is it + adj + for sb + to V', cần một tính từ sau 'it'. Chọn 'usual' (thông thường/bình thường)."
      },
      {
        "id": "parts_of_speech_3_q103",
        "num": 103,
        "stem": "Would you please schedule the patient for a medical ---- tomorrow afternoon?",
        "options": {
          "A": "consult",
          "B": "consultation",
          "C": "consulting",
          "D": "consultative"
        },
        "answer": "B",
        "explanation": "Sau mạo từ 'a' và tính từ 'medical' cần một danh từ số ít. Chọn 'consultation' (buổi khám/tư vấn y tế)."
      },
      {
        "id": "parts_of_speech_3_q104",
        "num": 104,
        "stem": "Your prescription will be ready in an hour, if that’s ---- for you,",
        "options": {
          "A": "conveniences",
          "B": "conveniently",
          "C": "convenience",
          "D": "convenient"
        },
        "answer": "D",
        "explanation": "Sau động từ to-be ('that's' = 'that is') cần một tính từ. Chọn 'convenient' (thuận tiện)."
      },
      {
        "id": "parts_of_speech_3_q106",
        "num": 106,
        "stem": "My doctor has decided to ---- the amount of medication I am taking.",
        "options": {
          "A": "limit",
          "B": "limited",
          "C": "limiting",
          "D": "limit"
        },
        "answer": "A",
        "explanation": "Sau cấu trúc 'decide to + V0' cần một động từ nguyên mẫu. Chọn 'limit' (hạn chế/giới hạn)."
      },
      {
        "id": "parts_of_speech_3_q107",
        "num": 107,
        "stem": "Inform the pharmacist of any other medications you are taking to avoid ---- drug interactions.",
        "options": {
          "A": "potentially",
          "B": "potential",
          "C": "potentiality",
          "D": "potency"
        },
        "answer": "B",
        "explanation": "Trước cụm danh từ 'drug interactions' cần một tính từ bổ nghĩa. 'Potential' (tiềm ẩn, có thể xảy ra) là tính từ phù hợp nhất về cả từ loại lẫn ngữ nghĩa ('potential drug interactions' = các tương tác thuốc tiềm ẩn)."
      },
      {
        "id": "parts_of_speech_3_q108",
        "num": 108,
        "stem": "We desperately need ---- to help at the free clinic next month.",
        "options": {
          "A": "voluntary",
          "B": "volunteer",
          "C": "volunteers",
          "D": "volunteerism"
        },
        "answer": "C",
        "explanation": "Sau ngoại động từ 'need' cần một danh từ làm tân ngữ, chỉ người sẽ giúp đỡ ('to help'). Vì trước chỗ trống không có mạo từ (a/an/the), nên cần danh từ đếm được số nhiều 'volunteers' (các tình nguyện viên)."
      }
    ]
  },
  {
    "id": "pronouns",
    "title": "Đại từ (Pronouns)",
    "desc": "Đại từ nhân xưng, sở hữu, phản thân, bất định",
    "icon": "👤",
    "count": 79,
    "questions": [
      {
        "id": "pronouns_q1",
        "num": 1,
        "stem": "​Which thief got a fright? ---- with the money.",
        "options": {
          "A": "​He",
          "B": "​Him",
          "C": "​That",
          "D": "​The one"
        },
        "answer": "D",
        "explanation": "Dùng đại từ thay thế 'The one' để thay cho danh từ đếm được số ít 'thief' đã nhắc trước đó và được bổ nghĩa bởi cụm giới từ 'with the money'."
      },
      {
        "id": "pronouns_q2",
        "num": 2,
        "stem": "Erna's friends will be on the coast. That's where ​of them will be.",
        "options": {
          "A": "​more",
          "B": "​the most",
          "C": "​most",
          "D": "​the more"
        },
        "answer": "C",
        "explanation": "Cấu trúc 'most of + đại từ tân ngữ' (most of them) mang nghĩa 'hầu hết họ'; không dùng 'the most of' hay 'more/the more' trong ngữ cảnh không có so sánh."
      },
      {
        "id": "pronouns_q3",
        "num": 3,
        "stem": "Which boxes contained clothing?",
        "options": {},
        "answer": "A",
        "explanation": "Câu hỏi bị thiếu các phương án lựa chọn (options trống) nên tạm chọn A. Về ngữ pháp, vì 'boxes' là danh từ số nhiều nên câu trả lời thường dùng đại từ thay thế số nhiều như 'The ones' hoặc 'Those'."
      },
      {
        "id": "pronouns_q4",
        "num": 4,
        "stem": "​He wasn’t noticed by​as he crept off the boat.",
        "options": {
          "A": "​no one",
          "B": "​none",
          "C": "​anyone",
          "D": "​not one"
        },
        "answer": "C",
        "explanation": "Câu đã mang nghĩa phủ định ('wasn’t noticed') nên dùng đại từ bất định 'anyone' để tránh lỗi phủ định kép (loại no one, none, not one)."
      },
      {
        "id": "pronouns_q5",
        "num": 5,
        "stem": "​John is a cousin of ----.",
        "options": {
          "A": "​him",
          "B": "​his",
          "C": "​he",
          "D": "​himself"
        },
        "answer": "B",
        "explanation": "Cấu trúc sở hữu kép 'a/an + danh từ + of + đại từ sở hữu'; 'his' thay cho 'his cousins' (một người anh/em họ của anh ấy)."
      },
      {
        "id": "pronouns_q6",
        "num": 6,
        "stem": "John, what is that noise? Is there --- on the street?",
        "options": {
          "A": "​something",
          "B": "​nothing",
          "C": "​anything",
          "D": "​none thing"
        },
        "answer": "C",
        "explanation": "Trong câu nghi vấn ('Is there...?'), dùng đại từ bất định 'anything' để hỏi xem có thứ gì đó hay không."
      },
      {
        "id": "pronouns_q7",
        "num": 7,
        "stem": "Please take these papers and give --- to me.",
        "options": {
          "A": "​them",
          "B": "​it",
          "C": "​one",
          "D": "​that"
        },
        "answer": "A",
        "explanation": "Chỗ trống làm tân ngữ cho động từ 'give' và thay thế cho danh từ số nhiều 'these papers', nên dùng đại từ tân ngữ số nhiều 'them'."
      },
      {
        "id": "pronouns_q8",
        "num": 8,
        "stem": "​Tom asked Ann and​about the new theater.",
        "options": {
          "A": "​I",
          "B": "​my",
          "C": "​me",
          "D": "​self"
        },
        "answer": "C",
        "explanation": "Chỗ trống đứng sau động từ 'asked' (cùng với 'Ann') đóng vai trò tân ngữ nên phải dùng đại từ nhân xưng tân ngữ 'me'."
      },
      {
        "id": "pronouns_q9",
        "num": 9,
        "stem": "​Janie and --- live in an apartment.",
        "options": {
          "A": "​me",
          "B": "​my",
          "C": "​self",
          "D": "​I"
        },
        "answer": "D",
        "explanation": "Chỗ trống đứng trước động từ chính 'live' (cùng với 'Janie') đóng vai trò chủ ngữ nên phải dùng đại từ nhân xưng chủ ngữ 'I'."
      },
      {
        "id": "pronouns_q10",
        "num": 10,
        "stem": "Tom is going to lose --- job.",
        "options": {
          "A": "​him",
          "B": "​his",
          "C": "​he",
          "D": "​he’s"
        },
        "answer": "B",
        "explanation": "Trước danh từ 'job' cần một tính từ sở hữu tương ứng với chủ ngữ 'Tom', do đó chọn 'his'."
      },
      {
        "id": "pronouns_q11",
        "num": 11,
        "stem": "A very large snake killed​victims.",
        "options": {
          "A": "​its",
          "B": "​his",
          "C": "​her",
          "D": "​it"
        },
        "answer": "A",
        "explanation": "Trước danh từ 'victims' cần một tính từ sở hữu tương ứng với chủ ngữ chỉ động vật số ít 'A very large snake', do đó chọn 'its'."
      },
      {
        "id": "pronouns_q12",
        "num": 12,
        "stem": "I don’t want you to pay for me. I’ll pay for -----",
        "options": {
          "A": "​me",
          "B": "​yourself",
          "C": "​myself",
          "D": "​mine"
        },
        "answer": "C",
        "explanation": "Chủ ngữ ('I') và tân ngữ chỉ cùng một người nên dùng đại từ phản thân tương ứng là 'myself' (tự trả tiền cho bản thân)."
      },
      {
        "id": "pronouns_q13",
        "num": 13,
        "stem": "It’s our own fault. We blame ---",
        "options": {
          "A": "​our",
          "B": "​us",
          "C": "​ourselves",
          "D": "​ours"
        },
        "answer": "C",
        "explanation": "Chủ ngữ ('We') và tân ngữ chỉ cùng một đối tượng nên dùng đại từ phản thân 'ourselves' (chúng tôi tự trách bản thân mình)."
      },
      {
        "id": "pronouns_q14",
        "num": 14,
        "stem": "Tom and Ann stood in front of the mirror and looked at ----",
        "options": {
          "A": "​each other",
          "B": "​themselves",
          "C": "​them",
          "D": "​herself"
        },
        "answer": "B",
        "explanation": "Tom và Ann đứng trước gương và nhìn thấy hình ảnh của chính mình trong gương, nên dùng đại từ phản thân số nhiều 'themselves'."
      },
      {
        "id": "pronouns_q15",
        "num": 15,
        "stem": "Tom looked at Ann, Ann looked at Tom. They looked at -----",
        "options": {
          "A": "​themselves",
          "B": "​them",
          "C": "​each other",
          "D": "​together"
        },
        "answer": "C",
        "explanation": "Tom nhìn Ann và Ann nhìn Tom là hành động tác động qua lại giữa hai người, nên dùng đại từ tương hỗ 'each other' (lẫn nhau)."
      },
      {
        "id": "pronouns_q16",
        "num": 16,
        "stem": "James is very interested in Mathematics and​applications.",
        "options": {
          "A": "​its",
          "B": "​their",
          "C": "​them",
          "D": "​it"
        },
        "answer": "A",
        "explanation": "Mathematics là danh từ chỉ môn học (số ít không đếm được), nên cần tính từ sở hữu số ít 'its' đứng trước danh từ 'applications'."
      },
      {
        "id": "pronouns_q17",
        "num": 17,
        "stem": "My picture is different from ---",
        "options": {
          "A": "​them",
          "B": "​theirs",
          "C": "​they",
          "D": "​themselves"
        },
        "answer": "B",
        "explanation": "Cần đại từ sở hữu 'theirs' (= their picture) đứng sau giới từ 'from' để so sánh tương đương với 'My picture'."
      },
      {
        "id": "pronouns_q18",
        "num": 18,
        "stem": "He asked --- to leave the office then.",
        "options": {
          "A": "​our",
          "B": "​we",
          "C": "​us",
          "D": "​ours"
        },
        "answer": "C",
        "explanation": "Theo cấu trúc 'ask + O + to-V', vị trí sau động từ 'asked' cần một đại từ tân ngữ là 'us'."
      },
      {
        "id": "pronouns_q19",
        "num": 19,
        "stem": "Mr. Scott has a garage. It is ---",
        "options": {
          "A": "​to him",
          "B": "​of him",
          "C": "​of his",
          "D": "​his"
        },
        "answer": "D",
        "explanation": "Cần đại từ sở hữu 'his' (= his garage) đứng độc lập sau động từ 'is' để chỉ sự sở hữu."
      },
      {
        "id": "pronouns_q20",
        "num": 20,
        "stem": "​Did--- happen? No, nothing happened.",
        "options": {
          "A": "​nothing",
          "B": "​anything",
          "C": "​any",
          "D": "​a thing"
        },
        "answer": "B",
        "explanation": "Trong câu nghi vấn (Did ... happen?), dùng đại từ bất định 'anything' để hỏi về sự việc nào đó."
      },
      {
        "id": "pronouns_q21",
        "num": 21,
        "stem": "Neither of us spoke = We ---",
        "options": {
          "A": "​neither spoke",
          "B": "​either spoke",
          "C": "​both didn’t speak",
          "D": "​neither didn’t speak"
        },
        "answer": "C",
        "explanation": "'Neither of us spoke' (không ai trong hai chúng tôi nói) tương đương với 'We both didn't speak'; loại D vì phủ định kép, loại A vì sai cấu trúc vị trí của 'neither', loại B vì sai nghĩa."
      },
      {
        "id": "pronouns_q22",
        "num": 22,
        "stem": "This note is only a reminder. It’s ----",
        "options": {
          "A": "​nothing",
          "B": "​no one",
          "C": "​anything",
          "D": "​everything"
        },
        "answer": "A",
        "explanation": "Dựa vào ngữ cảnh (chỉ là một lời nhắc, không có gì quan trọng), cần đại từ bất định chỉ vật mang nghĩa phủ định 'nothing'; 'no one' dùng cho người, 'anything' và 'everything' không hợp nghĩa/ngữ pháp."
      },
      {
        "id": "pronouns_q23",
        "num": 23,
        "stem": "I am only interested in doing nothing. That’s​I’m interested in.",
        "options": {
          "A": "​only",
          "B": "​the one",
          "C": "​anything",
          "D": "​the only"
        },
        "answer": "B",
        "explanation": "Cần cụm đại từ 'the one' làm tiền ngữ cho mệnh đề quan hệ rút gọn '(that) I'm interested in'; 'only' và 'the only' thiếu danh từ đi kèm, còn 'anything' không phù hợp ngữ cảnh."
      },
      {
        "id": "pronouns_q24",
        "num": 24,
        "stem": "The porter and I looked at each other,​both smiled.",
        "options": {
          "A": "​I",
          "B": "​he",
          "C": "​we",
          "D": "​they"
        },
        "answer": "C",
        "explanation": "Đại từ nhân xưng làm chủ ngữ thay thế cho 'The porter and I' (ngôi thứ nhất số nhiều) là 'we' ('we both smiled')."
      },
      {
        "id": "pronouns_q25",
        "num": 25,
        "stem": "Do you like my picture? It’s ----",
        "options": {
          "A": "​a new",
          "B": "​one new",
          "C": "​new one",
          "D": "​a new one"
        },
        "answer": "D",
        "explanation": "Dùng đại từ 'one' để thay thế cho danh từ đếm được số ít 'picture'; khi có tính từ 'new' đứng trước cần thêm mạo từ 'a' tạo thành 'a new one'."
      },
      {
        "id": "pronouns_q26",
        "num": 26,
        "stem": "I doubt whether​could read your letter, your hand writing is really terrible.",
        "options": {
          "A": "​somebody",
          "B": "​anybody",
          "C": "​nobody",
          "D": "​everybody"
        },
        "answer": "B",
        "explanation": "Sau động từ và liên từ mang nghĩa nghi ngờ ('doubt whether'), dùng đại từ bất định nhóm 'any-' là 'anybody'."
      },
      {
        "id": "pronouns_q27",
        "num": 27,
        "stem": "They told --- there was nothing to be affair of.",
        "options": {
          "A": "​them",
          "B": "​their",
          "C": "​they",
          "D": "​themselves"
        },
        "answer": "D",
        "explanation": "Chủ ngữ 'They' thực hiện hành động hướng về chính mình (tự nhủ với bản thân) nên phải dùng đại từ phản thân 'themselves'."
      },
      {
        "id": "pronouns_q28",
        "num": 28,
        "stem": "There isn’t​in the next room.",
        "options": {
          "A": "​nobody",
          "B": "​no one",
          "C": "​any one",
          "D": "​someone"
        },
        "answer": "C",
        "explanation": "Trong câu phủ định ('There isn't'), dùng 'any one' để tránh lỗi phủ định kép (loại 'nobody', 'no one') và thay cho 'someone'."
      },
      {
        "id": "pronouns_q29",
        "num": 29,
        "stem": "Have you learned by heart all those five poems? I have learned",
        "options": {
          "A": "​both of them",
          "B": "​either of them",
          "C": "​neither of them",
          "D": "​none of them"
        },
        "answer": "D",
        "explanation": "'All those five poems' gồm 5 bài thơ (từ 3 đối tượng trở lên) nên dùng 'none of them'; 'both', 'either' và 'neither' chỉ dùng cho 2 đối tượng."
      },
      {
        "id": "pronouns_q30",
        "num": 30,
        "stem": "They compete ----",
        "options": {
          "A": "​against one another",
          "B": "​the one against the other",
          "C": "​each against the other",
          "D": "​against each other"
        },
        "answer": "D",
        "explanation": "Cụm động từ 'compete against' đi cùng đại từ tương hỗ tạo thành 'compete against each other' (cạnh tranh lẫn nhau), là cách dùng chuẩn và phổ biến nhất; loại B và C vì sai trật tự giới từ."
      },
      {
        "id": "pronouns_q31",
        "num": 31,
        "stem": "She gives her children everything ---- they want.",
        "options": {
          "A": "​that",
          "B": "​who",
          "C": "what"
        },
        "answer": "A",
        "explanation": "Sau đại từ bất định 'everything', dùng đại từ quan hệ 'that' để giới thiệu mệnh đề quan hệ xác định (không dùng 'who' cho vật hay 'what' khi đã có tiền ngữ)."
      },
      {
        "id": "pronouns_q32",
        "num": 32,
        "stem": "Tell me --- you want and I will try to help you.",
        "options": {
          "A": "​that",
          "B": "​what",
          "C": "​who",
          "D": "​which"
        },
        "answer": "B",
        "explanation": "Cần đại từ quan hệ không có tiền ngữ mang nghĩa 'điều mà' (= the thing that) làm tân ngữ cho động từ 'tell', nên chọn 'what'."
      },
      {
        "id": "pronouns_q33",
        "num": 33,
        "stem": "The place --- we spent our holiday was really beautiful",
        "options": {
          "A": "​what",
          "B": "​who",
          "C": "​where",
          "D": "​which"
        },
        "answer": "C",
        "explanation": "Mệnh đề 'we spent our holiday' đã đầy đủ chủ ngữ và tân ngữ, không có giới từ chỉ nơi chốn phía sau, nên cần trạng từ quan hệ 'where' (= at/in which) thay cho 'the place'."
      },
      {
        "id": "pronouns_q34",
        "num": 34,
        "stem": "What was the name of the girl ---- passport was stolen?",
        "options": {
          "A": "​whose",
          "B": "​who",
          "C": "​which",
          "D": "​when"
        },
        "answer": "A",
        "explanation": "Đứng trước danh từ 'passport' để chỉ mối quan hệ sở hữu với danh từ chỉ người 'the girl' (hộ chiếu của cô gái), nên dùng đại từ quan hệ sở hữu 'whose'."
      },
      {
        "id": "pronouns_q35",
        "num": 35,
        "stem": "The bed​I slept in was too soft.",
        "options": {
          "A": "​who",
          "B": "​which",
          "C": "​where",
          "D": "​when"
        },
        "answer": "B",
        "explanation": "Đã có giới từ 'in' sau động từ 'slept', nên không dùng 'where' mà phải dùng đại từ quan hệ 'which' để thay thế cho danh từ chỉ vật 'the bed' và làm tân ngữ cho giới từ 'in'."
      },
      {
        "id": "pronouns_q36",
        "num": 36,
        "stem": "Nora is the only person ---- understands me.",
        "options": {
          "A": "​which",
          "B": "​who",
          "C": "​what",
          "D": "​whose"
        },
        "answer": "B",
        "explanation": "Cần đại từ quan hệ thay thế cho danh từ chỉ người 'the only person' và làm chủ ngữ cho động từ 'understands'; trong 4 đáp án chỉ có 'who' phù hợp."
      },
      {
        "id": "pronouns_q37",
        "num": 37,
        "stem": "The hotel​we stayed was not clean.",
        "options": {
          "A": "​who",
          "B": "​that",
          "C": "​what",
          "D": "​whom"
        },
        "answer": "B",
        "explanation": "Loại trừ: 'who/whom' chỉ dùng cho người, 'what' không đứng sau danh từ tiền ngữ 'the hotel'. Do đó chỉ có 'that' có thể đóng vai trò đại từ/trạng từ quan hệ bổ nghĩa cho 'the hotel'."
      },
      {
        "id": "pronouns_q38",
        "num": 38,
        "stem": "The reason --- I called him was to invite him to a party.",
        "options": {
          "A": "​what",
          "B": "​when",
          "C": "​why",
          "D": "​which"
        },
        "answer": "C",
        "explanation": "Cấu trúc 'The reason why + S + V' dùng trạng từ quan hệ 'why' để chỉ lý do."
      },
      {
        "id": "pronouns_q39",
        "num": 39,
        "stem": "The dress didn’t fit her, so she took it back to the shop​she had bought it.",
        "options": {
          "A": "​where",
          "B": "​which",
          "C": "​what",
          "D": "​when"
        },
        "answer": "A",
        "explanation": "Mệnh đề 'she had bought it' đã đầy đủ thành phần và không có giới từ chỉ địa điểm đi kèm, nên dùng trạng từ quan hệ 'where' (= at/in which) để bổ nghĩa cho 'the shop'."
      },
      {
        "id": "pronouns_q40",
        "num": 40,
        "stem": "Everybody​went to the party enjoyed it very much,",
        "options": {
          "A": "​that",
          "B": "​whose",
          "C": "​which",
          "D": "​when"
        },
        "answer": "A",
        "explanation": "Sau đại từ bất định chỉ người 'everybody' và làm chủ ngữ cho động từ 'went', trong các lựa chọn chỉ có đại từ quan hệ 'that' là chính xác ('which' dùng cho vật, 'whose' cần danh từ theo sau, 'when' chỉ thời gian)."
      },
      {
        "id": "pronouns_q41",
        "num": 41,
        "stem": "Ms. Durkin asked for volunteers to help --- with the employee fitness program. (101 ETS1 2019)",
        "options": {
          "A": "​she",
          "B": "​her",
          "C": "​hers",
          "D": "​herself"
        },
        "answer": "B",
        "explanation": "Sau ngoại động từ 'help' cần một đại từ tân ngữ. Chủ thể thực hiện hành động 'help' là 'volunteers' (khác với Ms. Durkin) nên dùng 'her', không dùng đại từ phản thân 'herself'."
      },
      {
        "id": "pronouns_q42",
        "num": 42,
        "stem": "Mr. Singh took notes on --- the focus group discussed during the morning session. (125 ETS1 2019)",
        "options": {
          "A": "​each",
          "B": "​several",
          "C": "​another",
          "D": "​everything"
        },
        "answer": "D",
        "explanation": "Cần một đại từ đứng sau giới từ 'on' và trước mệnh đề quan hệ lược bỏ 'that' ('the focus group discussed'). 'Everything' (mọi thứ) là phù hợp nhất về cả ngữ pháp lẫn ngữ nghĩa."
      },
      {
        "id": "pronouns_q43",
        "num": 43,
        "stem": "Zypo has just signed a lease agreement with the law firm​offices are on the third floor. (128 ETS1 2019)",
        "options": {
          "A": "​how",
          "B": "​what",
          "C": "​whose",
          "D": "​whatever"
        },
        "answer": "C",
        "explanation": "Đứng giữa hai danh từ 'the law firm' và 'offices' để chỉ sự sở hữu (văn phòng của công ty luật), nên chọn đại từ quan hệ sở hữu 'whose'."
      },
      {
        "id": "pronouns_q44",
        "num": 44,
        "stem": "Ms. May will be attending the conference with --- marketing team. (101 ETS2 2019)",
        "options": {
          "A": "​she",
          "B": "​her",
          "C": "​hers",
          "D": "​herself"
        },
        "answer": "B",
        "explanation": "Đứng trước cụm danh từ 'marketing team' cần một tính từ sở hữu để bổ nghĩa, nên chọn 'her'."
      },
      {
        "id": "pronouns_q45",
        "num": 45,
        "stem": "Daniel, the chief supply officer, asked that --- be given full responsibility for approving all invoices. (115 ETS2 2019)",
        "options": {
          "A": "​he",
          "B": "​him",
          "C": "​his",
          "D": "​himself"
        },
        "answer": "A",
        "explanation": "Cấu trúc giả định 'ask that + S + V (nguyên mẫu)'. Chỗ trống đứng trước động từ 'be given' đóng vai trò chủ ngữ thay thế cho 'Daniel', nên chọn đại từ chủ ngữ 'he'."
      },
      {
        "id": "pronouns_q46",
        "num": 46,
        "stem": "The second training session is for employees --- responsibilities include processing payroll forms. (127 ETS2 2019)",
        "options": {
          "A": "​whose",
          "B": "​which",
          "C": "​what",
          "D": "​who"
        },
        "answer": "A",
        "explanation": "Cần đại từ quan hệ chỉ sự sở hữu đứng trước danh từ 'responsibilities' (trách nhiệm của các nhân viên) nên chọn 'whose'."
      },
      {
        "id": "pronouns_q47",
        "num": 47,
        "stem": "The regional manager will arrive tomorrow, so please ensure that all --- documents are ready. (101 ETS4 2019)",
        "options": {
          "A": "​she",
          "B": "​her",
          "C": "​hers",
          "D": "​herself"
        },
        "answer": "B",
        "explanation": "Trước danh từ 'documents' cần một tính từ sở hữu để bổ nghĩa nên chọn 'her' (tất cả tài liệu của cô ấy)."
      },
      {
        "id": "pronouns_q48",
        "num": 48,
        "stem": "Most senior managers approved the architect’s proposal for the office layout, although --- expressed concerns about the cost. (127 ETS4 2019)",
        "options": {
          "A": "​one",
          "B": "​one another",
          "C": "​each other",
          "D": "​other"
        },
        "answer": "A",
        "explanation": "Sau liên từ 'although' và trước động từ 'expressed' cần một đại từ làm chủ ngữ; 'one' (một người trong số các quản lý cấp cao) là đáp án đúng, còn 'one another'/'each other' chỉ làm tân ngữ và 'other' cần danh từ theo sau."
      },
      {
        "id": "pronouns_q49",
        "num": 49,
        "stem": "Here at Bari Club, --- help members find quality merchandise at the lowest possible prices. (106 ETS2 2019)",
        "options": {
          "A": "​us",
          "B": "​our",
          "C": "​we",
          "D": "​ourselves"
        },
        "answer": "C",
        "explanation": "Đứng trước động từ chính 'help' cần một đại từ nhân xưng làm chủ ngữ nên chọn 'we'."
      },
      {
        "id": "pronouns_q50",
        "num": 50,
        "stem": "According to Florida Digital Designer Magazine, many graphic designers do not consider --- to be traditional artists. (108 ETS3 2019)",
        "options": {
          "A": "​it",
          "B": "​their",
          "C": "​themselves",
          "D": "​itself"
        },
        "answer": "C",
        "explanation": "Chủ ngữ 'many graphic designers' (số nhiều) và tân ngữ chỉ cùng một đối tượng nên dùng đại từ phản thân 'themselves' (tự coi bản thân họ)."
      },
      {
        "id": "pronouns_q51",
        "num": 51,
        "stem": "Of all the truck models available today, it can be difficult to figure out --- would best suit your company’s needs. (115 ETS3 2019).",
        "options": {
          "A": "​when",
          "B": "​why",
          "C": "​which",
          "D": "​where"
        },
        "answer": "C",
        "explanation": "Mệnh đề danh ngữ sau 'figure out' cần một đại từ nghi vấn làm chủ ngữ cho động từ 'would best suit' (chỉ sự lựa chọn trong các mẫu xe tải) nên chọn 'which'."
      },
      {
        "id": "pronouns_q52",
        "num": 52,
        "stem": "A marketing campaign was designed to target --- of the three demographics we identified. (117 ETS5 2019)",
        "options": {
          "A": "​which",
          "B": "​other",
          "C": "​either",
          "D": "​each"
        },
        "answer": "D",
        "explanation": "Cấu trúc 'each of + danh từ số nhiều' (mỗi/từng nhóm trong số 3 nhóm nhân khẩu học). Loại 'either' vì chỉ dùng cho 2 đối tượng."
      },
      {
        "id": "pronouns_q53",
        "num": 53,
        "stem": "Green Grocer customers should request assistance from staff instead of removing products from the top shelves -- - (119 ETS5 2019)",
        "options": {
          "A": "​themselves",
          "B": "​their own",
          "C": "​them",
          "D": "​their"
        },
        "answer": "A",
        "explanation": "Dùng đại từ phản thân 'themselves' ở cuối câu để nhấn mạnh chủ ngữ số nhiều 'customers' tự mình thực hiện hành động thay vì nhờ nhân viên."
      },
      {
        "id": "pronouns_q54",
        "num": 54,
        "stem": "Deltran analytics software can help --- identify issues, predicts trends, and improve business. (103 ETS6 2019)",
        "options": {
          "A": "​you",
          "B": "​your",
          "C": "​yours",
          "D": "​yourself"
        },
        "answer": "A",
        "explanation": "Theo cấu trúc 'help + tân ngữ + V nguyên mẫu', chủ ngữ là 'software' khác đối tượng tân ngữ nên dùng đại từ tân ngữ 'you' (không dùng 'yourself')."
      },
      {
        "id": "pronouns_q55",
        "num": 55,
        "stem": "Most of the people --- attended yesterday’s workshop have already submitted their feedback. (124 ETS6 2019)",
        "options": {
          "A": "​who",
          "B": "​those",
          "C": "​whose",
          "D": "​some"
        },
        "answer": "A",
        "explanation": "Cần đại từ quan hệ chỉ người làm chủ ngữ cho động từ 'attended' để bổ nghĩa cho 'the people' nên chọn 'who'."
      },
      {
        "id": "pronouns_q56",
        "num": 56,
        "stem": "If --- are not satisfied with an item, return it for a full refund within 30 days of purchase. (101 ETS7 2019)",
        "options": {
          "A": "​you",
          "B": "​your",
          "C": "​yours",
          "D": "​yourself"
        },
        "answer": "A",
        "explanation": "Sau liên từ 'If' và trước động từ 'are' cần một đại từ nhân xưng làm chủ ngữ nên chọn 'you'."
      },
      {
        "id": "pronouns_q57",
        "num": 57,
        "stem": "Aaron’s new book features photographs of homes designed and built by the homeowners -----. (113 ETS7 2019)",
        "options": {
          "A": "​itself",
          "B": "​himself",
          "C": "​themselves",
          "D": "​ourselves"
        },
        "answer": "C",
        "explanation": "Cần đại từ phản thân nhấn mạnh tương ứng với danh từ số nhiều ngôi thứ ba 'the homeowners' nên chọn 'themselves' (do chính các chủ nhà thiết kế và xây dựng)."
      },
      {
        "id": "pronouns_q58",
        "num": 58,
        "stem": "Assistant managers are largely responsible for the day-to-day operations in --- departments. (113 ETS8 2019)",
        "options": {
          "A": "​theirs",
          "B": "​them",
          "C": "​their",
          "D": "​they"
        },
        "answer": "C",
        "explanation": "Trước danh từ 'departments' cần một tính từ sở hữu tương ứng với chủ ngữ số nhiều 'Assistant managers' nên chọn 'their'."
      },
      {
        "id": "pronouns_q59",
        "num": 59,
        "stem": "--- has time at the end of the day should make sure that all the file cabinets are locked. (117 ETS8 2019)",
        "options": {
          "A": "​whom",
          "B": "​who",
          "C": "​whoever",
          "D": "​whose"
        },
        "answer": "C",
        "explanation": "Cần đại từ quan hệ phức hợp 'whoever' (= bất kỳ ai) vừa làm chủ ngữ cho động từ 'has', vừa dẫn dắt mệnh đề danh ngữ làm chủ ngữ cho 'should make sure'."
      },
      {
        "id": "pronouns_q60",
        "num": 60,
        "stem": "Every batch of sauce at Generita’s Bistro is processed meticulously by ----- expert chefs. (101 ETS9 2019)",
        "options": {
          "A": "​they",
          "B": "​their",
          "C": "​them",
          "D": "​themselves"
        },
        "answer": "B",
        "explanation": "Trước cụm danh từ 'expert chefs' cần một tính từ sở hữu nên chọn 'their' (các đầu bếp chuyên nghiệp của họ)."
      },
      {
        "id": "pronouns_q61",
        "num": 61,
        "stem": "Cook the meat for 30 minutes to ensure --- readiness to be eaten. (113 ETS9 2019)",
        "options": {
          "A": "​both",
          "B": "​this",
          "C": "​its",
          "D": "​that"
        },
        "answer": "C",
        "explanation": "Trước danh từ 'readiness' cần một tính từ sở hữu quy chiếu về danh từ số ít/không đếm được 'the meat' -> chọn 'its' (độ chín sẵn sàng của nó)."
      },
      {
        "id": "pronouns_q62",
        "num": 62,
        "stem": "Because Mount Akoyola is so challenging for climbers,​have reached its peak. (120 ETS9 2019(",
        "options": {
          "A": "​any",
          "B": "​either",
          "C": "​other",
          "D": "​few"
        },
        "answer": "D",
        "explanation": "Cần một đại từ bất định làm chủ ngữ cho động từ số nhiều 'have reached' và phù hợp ngữ cảnh ngọn núi rất thử thách -> chọn 'few' (rất ít người leo núi)."
      },
      {
        "id": "pronouns_q63",
        "num": 63,
        "stem": "Staff members may reserve the conference room​they need it. (123 ETS9 2019)",
        "options": {
          "A": "​somewhere",
          "B": "​whatever",
          "C": "​everything",
          "D": "​anytime"
        },
        "answer": "D",
        "explanation": "Cần từ nối giữa hai mệnh đề diễn tả thời gian ('bất cứ khi nào họ cần') -> chọn 'anytime' (đóng vai trò như liên từ 'whenever')."
      },
      {
        "id": "pronouns_q64",
        "num": 64,
        "stem": "Please contact the product distributor, not the retail store, if --- need replacement. (101 ETS10 2019)",
        "options": {
          "A": "​your",
          "B": "​you",
          "C": "​yourself",
          "D": "​yours"
        },
        "answer": "B",
        "explanation": "Sau liên từ 'if' và trước động từ 'need' cần một đại từ nhân xưng làm chủ ngữ -> chọn 'you'."
      },
      {
        "id": "pronouns_q65",
        "num": 65,
        "stem": "Kespi Brand cookies, delicious by​, are even better when paired with a glass of milk. (111 ETS10 2019)",
        "options": {
          "A": "​they",
          "B": "​theirs",
          "C": "​them",
          "D": "​themselves"
        },
        "answer": "D",
        "explanation": "Cấu trúc 'by oneself' (tự bản thân nó / dùng riêng một mình). Quy chiếu về danh từ số nhiều 'cookies' -> chọn đại từ phản thân 'themselves'."
      },
      {
        "id": "pronouns_q66",
        "num": 66,
        "stem": "Ambassador Chaturvedi wrote in his memoir that his parents taught him to do each job well, --- it was. (121 ETS10 2019).",
        "options": {
          "A": "​whoever",
          "B": "​anyone",
          "C": "​everything",
          "D": "​whatever"
        },
        "answer": "D",
        "explanation": "Cần đại từ quan hệ kép chỉ vật/việc mang nghĩa 'bất kể công việc đó là gì' (quy chiếu về 'each job') -> chọn 'whatever'."
      },
      {
        "id": "pronouns_q67",
        "num": 67,
        "stem": "Hemlin Corporation is looking for a sales representative --- primary role will be expanding business in the northwest region. (125 ETS10 2019).",
        "options": {
          "A": "​that",
          "B": "​whose",
          "C": "​who",
          "D": "​which"
        },
        "answer": "B",
        "explanation": "Trước cụm danh từ 'primary role' cần đại từ quan hệ chỉ sở hữu cho danh từ 'a sales representative' -> chọn 'whose' (vai trò chính của người đại diện đó)."
      },
      {
        "id": "pronouns_q68",
        "num": 68,
        "stem": "Many people at the company have industry experience, but only a handful of --- can see the future important of current trends.(106 ETS1 2018)",
        "options": {
          "A": "​we",
          "B": "​us",
          "C": "​our",
          "D": "​ourselves"
        },
        "answer": "B",
        "explanation": "Sau giới từ 'of' (trong cụm 'a handful of') cần một đại từ tân ngữ (chủ ngữ không phải 'we' nên không dùng đại từ phản thân) -> chọn 'us'."
      },
      {
        "id": "pronouns_q69",
        "num": 69,
        "stem": "The Neighborhood Involvement Program honors residents --- volunteer their time to help Egin City. (111 ETS1 2018)",
        "options": {
          "A": "​for",
          "B": "​who",
          "C": "​those",
          "D": "​as"
        },
        "answer": "B",
        "explanation": "Cần đại từ quan hệ chỉ người thay thế cho 'residents' và làm chủ ngữ cho động từ 'volunteer' -> chọn 'who'."
      },
      {
        "id": "pronouns_q70",
        "num": 70,
        "stem": "Board members are free to discussed the issues among​before the formal votes are taken. (126 ETS1 2018)",
        "options": {
          "A": "​themselves",
          "B": "​theirs",
          "C": "​theirs",
          "D": "​they"
        },
        "answer": "A",
        "explanation": "Cụm từ 'among themselves' (giữa họ với nhau / trong nội bộ), dùng đại từ phản thân quy chiếu lại chủ ngữ số nhiều 'Board members' -> chọn 'themselves'."
      },
      {
        "id": "pronouns_q71",
        "num": 71,
        "stem": "The president of Somchai Bank rides --- bicycle to work every day, except when it rains. (103 ETS2 2018)",
        "options": {
          "A": "​he",
          "B": "​him",
          "C": "​his",
          "D": "​himself"
        },
        "answer": "C",
        "explanation": "Trước danh từ 'bicycle' cần một tính từ sở hữu quy chiếu về chủ ngữ 'The president' -> chọn 'his'."
      },
      {
        "id": "pronouns_q72",
        "num": 72,
        "stem": "A rise in energy prices will mostly effect businesses --- energy consumption is high. (124 ETS2 2018)",
        "options": {
          "A": "​its",
          "B": "​which",
          "C": "​whose",
          "D": "​more"
        },
        "answer": "C",
        "explanation": "Trước cụm danh từ 'energy consumption' cần đại từ quan hệ sở hữu cho danh từ 'businesses' -> chọn 'whose' (mức tiêu thụ năng lượng của các doanh nghiệp đó)."
      },
      {
        "id": "pronouns_q73",
        "num": 73,
        "stem": "Mr. Okello’s promotion means that --- will supervise a larger team. (103 ETS3 2018)",
        "options": {
          "A": "​he",
          "B": "​his",
          "C": "​him",
          "D": "​himself"
        },
        "answer": "A",
        "explanation": "Sau liên từ 'that' và trước động từ 'will supervise' cần một đại từ nhân xưng làm chủ ngữ thay cho 'Mr. Okello' -> chọn 'he'."
      },
      {
        "id": "pronouns_q74",
        "num": 74,
        "stem": "Ultrora Action’s T-Pro tennis shoe is the lightest --- on the market right now. (106 ETS3 2018)",
        "options": {
          "A": "​that",
          "B": "​any",
          "C": "​one",
          "D": "​either"
        },
        "answer": "C",
        "explanation": "Sau tính từ so sánh nhất 'the lightest' cần đại từ thay thế cho danh từ đếm được số ít 'tennis shoe' đã nhắc trước đó -> chọn 'one'."
      },
      {
        "id": "pronouns_q75",
        "num": 75,
        "stem": "Sales clerks at Sylla bazaar receive additional pay when --- work in the evening. (101 ETS4 2018)",
        "options": {
          "A": "​their",
          "B": "​they",
          "C": "​theirs",
          "D": "​them"
        },
        "answer": "B",
        "explanation": "Sau liên từ 'when' và trước động từ 'work' cần một đại từ nhân xưng làm chủ ngữ thay cho 'Sales clerks' -> chọn 'they'."
      },
      {
        "id": "pronouns_q76",
        "num": 76,
        "stem": "--- of Mitech Andu’s international performances was filmed for the documentary. (128 ETS4 2018)",
        "options": {
          "A": "​All",
          "B": "​Others",
          "C": "​Their own",
          "D": "​Each one"
        },
        "answer": "D",
        "explanation": "Động từ chính của câu chia ở số ít (was filmed), nên chủ ngữ phải là đại từ số ít. Cấu trúc 'Each one of + danh từ số nhiều' đi với động từ số ít ('Mỗi một trong số các buổi biểu diễn...')."
      },
      {
        "id": "pronouns_q77",
        "num": 77,
        "stem": "Mr. Choi wants to know when the illustrations will be ready for ---review. (102 ETS5 2018)",
        "options": {
          "A": "​he",
          "B": "​his",
          "C": "​him",
          "D": "​himself"
        },
        "answer": "B",
        "explanation": "Trước danh từ 'review' (sự xem xét) cần một tính từ sở hữu để bổ nghĩa. Dựa vào chủ ngữ 'Mr. Choi', chọn 'his' (for his review)."
      },
      {
        "id": "pronouns_q78",
        "num": 78,
        "stem": "The course taught by Prof. Brennink is intended for​interested in medical or health-related careers. (112 ETS5 2018)",
        "options": {
          "A": "​either",
          "B": "​those",
          "C": "​which",
          "D": "​whom"
        },
        "answer": "B",
        "explanation": "Sau giới từ 'for' cần một đại từ làm tân ngữ đi với cụm phân từ rút gọn 'interested in...'. Đại từ chỉ định 'those' mang nghĩa 'những người' (rút gọn của 'those who are interested in') là đáp án chính xác."
      },
      {
        "id": "pronouns_q105",
        "num": 105,
        "stem": "The procedure ---- a slight problem, but the doctor assures us not to be alarmed.",
        "options": {
          "A": "detected",
          "B": "detect",
          "C": "detection",
          "D": "detectable"
        },
        "answer": "A",
        "explanation": "Mệnh đề thiếu động từ chính đứng sau chủ ngữ số ít 'The procedure' và trước tân ngữ 'a slight problem'. 'detect' sai hòa hợp chủ-vị, 'detection' là danh từ, 'detectable' là tính từ; do đó chọn động từ chia quá khứ đơn 'detected'."
      }
    ]
  },
  {
    "id": "comparisons",
    "title": "So sánh (Comparisons)",
    "desc": "So sánh bằng, so sánh hơn, so sánh nhất & kép",
    "icon": "⚖️",
    "count": 47,
    "questions": [
      {
        "id": "comparisons_q1",
        "num": 1,
        "stem": "She is ---- singer I’ve ever met.",
        "options": {
          "A": "worse",
          "B": "bad",
          "C": "the worst",
          "D": "badly"
        },
        "answer": "C",
        "explanation": "Cụm 'I've ever met' là dấu hiệu của so sánh nhất; dạng so sánh nhất bất quy tắc của tính từ 'bad' là 'the worst'."
      },
      {
        "id": "comparisons_q2",
        "num": 2,
        "stem": "Mary is ---- responsible as Peter.",
        "options": {
          "A": "more",
          "B": "the most",
          "C": "much",
          "D": "as"
        },
        "answer": "D",
        "explanation": "Cấu trúc so sánh bằng với tính từ: 'as + adj + as'. Phía sau đã có 'as Peter' nên cần điền 'as'."
      },
      {
        "id": "comparisons_q3",
        "num": 3,
        "stem": "It is ---- in the city than it is in the country.",
        "options": {
          "A": "noisily",
          "B": "more noisier",
          "C": "noisier",
          "D": "noisy"
        },
        "answer": "C",
        "explanation": "Có 'than' nên dùng so sánh hơn, sau động từ 'is' cần tính từ. Tính từ hai âm tiết kết thúc bằng '-y' ('noisy') chuyển thành 'noisier' (không dùng 'more noisier')."
      },
      {
        "id": "comparisons_q4",
        "num": 4,
        "stem": "She sings ----- among the singers I have known.",
        "options": {
          "A": "the most beautiful",
          "B": "the more beautiful",
          "C": "the most beautifully",
          "D": "the more beautifully"
        },
        "answer": "C",
        "explanation": "Cụm 'among the singers I have known' chỉ so sánh nhất; động từ thường 'sings' cần trạng từ bổ nghĩa nên chọn 'the most beautifully'."
      },
      {
        "id": "comparisons_q5",
        "num": 5,
        "stem": "She is ---- student in my class.",
        "options": {
          "A": "most hard-working",
          "B": "more hard-working",
          "C": "the most hard-working",
          "D": "as hard-working"
        },
        "answer": "C",
        "explanation": "Cụm 'in my class' là dấu hiệu so sánh nhất; tính từ dài 'hard-working' có dạng so sánh nhất là 'the most hard-working'."
      },
      {
        "id": "comparisons_q6",
        "num": 6,
        "stem": "The English test was ---- than I thought it would be.",
        "options": {
          "A": "the easier",
          "B": "more easy",
          "C": "easiest",
          "D": "easier"
        },
        "answer": "D",
        "explanation": "Có 'than' nên dùng so sánh hơn. Tính từ hai âm tiết kết thúc bằng '-y' ('easy') chuyển thành 'easier'."
      },
      {
        "id": "comparisons_q7",
        "num": 7,
        "stem": "English is thought to be ----- than Math.",
        "options": {
          "A": "harder",
          "B": "the more hard",
          "C": "hardest",
          "D": "the hardest"
        },
        "answer": "A",
        "explanation": "Có 'than' nên dùng so sánh hơn. Tính từ ngắn 'hard' thêm '-er' thành 'harder'."
      },
      {
        "id": "comparisons_q8",
        "num": 8,
        "stem": "She runs ---- in my class.",
        "options": {
          "A": "the slowest",
          "B": "the most slow",
          "C": "the slowly",
          "D": "the most slowly"
        },
        "answer": "D",
        "explanation": "Cụm 'in my class' chỉ so sánh nhất; động từ thường 'runs' cần trạng từ bổ nghĩa nên dùng dạng so sánh nhất của trạng từ 'slowly' là 'the most slowly'."
      },
      {
        "id": "comparisons_q9",
        "num": 9,
        "stem": "He did the test ----- I did.",
        "options": {
          "A": "as bad as",
          "B": "badder than",
          "C": "more badly",
          "D": "worse than"
        },
        "answer": "D",
        "explanation": "Động từ thường 'did' cần trạng từ bổ nghĩa ('badly', loại A). Dạng so sánh hơn bất quy tắc của 'badly' là 'worse', kết hợp 'than' tạo thành 'worse than'."
      },
      {
        "id": "comparisons_q10",
        "num": 10,
        "stem": "My new sofa is ---- than the old one.",
        "options": {
          "A": "more comfortable",
          "B": "more comfortabler",
          "C": "comfortably",
          "D": "comfortable"
        },
        "answer": "A",
        "explanation": "Có 'than' nên dùng so sánh hơn, sau 'is' cần tính từ. Tính từ dài 'comfortable' có dạng so sánh hơn là 'more comfortable'."
      },
      {
        "id": "comparisons_q11",
        "num": 11,
        "stem": "My sister dances ---- than me.",
        "options": {
          "A": "gooder",
          "B": "weller",
          "C": "better",
          "D": "more good"
        },
        "answer": "C",
        "explanation": "Có 'than' nên dùng so sánh hơn; động từ 'dances' cần trạng từ 'well', dạng so sánh hơn bất quy tắc của 'well' là 'better'."
      },
      {
        "id": "comparisons_q12",
        "num": 12,
        "stem": "He drives ----- his brother.",
        "options": {
          "A": "more careful than",
          "B": "more carefully",
          "C": "more carefully than",
          "D": "as careful as"
        },
        "answer": "C",
        "explanation": "Động từ thường 'drives' cần trạng từ 'carefully' (loại A, D), và khi so sánh hai đối tượng cần có 'than' (loại B) nên chọn 'more carefully than'."
      },
      {
        "id": "comparisons_q13",
        "num": 13,
        "stem": "It was ---- day of the year.",
        "options": {
          "A": "the colder",
          "B": "the coldest",
          "C": "coldest",
          "D": "colder"
        },
        "answer": "B",
        "explanation": "Cụm 'of the year' chỉ so sánh nhất. Tính từ ngắn 'cold' có dạng so sánh nhất đầy đủ kèm mạo từ là 'the coldest'."
      },
      {
        "id": "comparisons_q14",
        "num": 14,
        "stem": "The deep oceans contain some of the ---- of all living creatures.",
        "options": {
          "A": "strangest",
          "B": "strange",
          "C": "as strange as",
          "D": "stranger"
        },
        "answer": "A",
        "explanation": "Cụm 'some of the ... of all living creatures' dùng so sánh nhất. Phía trước đã có 'the', tính từ ngắn 'strange' chuyển thành 'strangest'."
      },
      {
        "id": "comparisons_q15",
        "num": 15,
        "stem": "Jane is not ----- her brother.",
        "options": {
          "A": "more intelligent as",
          "B": "intelligent as",
          "C": "so intelligent as",
          "D": "so intelligent that"
        },
        "answer": "C",
        "explanation": "Cấu trúc so sánh không bằng ở thể phủ định: 'not as/so + adj + as', do đó chọn 'so intelligent as'."
      },
      {
        "id": "comparisons_q16",
        "num": 16,
        "stem": "What’s the ---- film you’ve ever seen?",
        "options": {
          "A": "good",
          "B": "best",
          "C": "better",
          "D": "the best"
        },
        "answer": "B",
        "explanation": "Trước chỗ trống đã có mạo từ 'the' và cụm 'you've ever seen' là dấu hiệu của so sánh nhất, nên dùng dạng so sánh nhất của tính từ 'good' là 'best' (không chọn D vì bị lặp 'the')."
      },
      {
        "id": "comparisons_q17",
        "num": 17,
        "stem": "Jane is ---- age as Mary.",
        "options": {
          "A": "as same",
          "B": "the most same",
          "C": "the same",
          "D": "more same"
        },
        "answer": "C",
        "explanation": "Cấu trúc so sánh giống nhau với danh từ là 'the same + danh từ + as' (cùng tuổi với)."
      },
      {
        "id": "comparisons_q18",
        "num": 18,
        "stem": "I’ll be there -----I can.",
        "options": {
          "A": "sooner as",
          "B": "no sooner as",
          "C": "as sooner as",
          "D": "soonest as"
        },
        "answer": "C",
        "explanation": "Dựa vào ngữ cảnh cần cụm so sánh bằng 'as soon as I can' (sớm nhất có thể); phương án C là đáp án duy nhất có cấu trúc 'as ... as' (đề gốc bị lỗi chính tả 'sooner' thay vì 'soon')."
      },
      {
        "id": "comparisons_q19",
        "num": 19,
        "stem": "Hotels have developed ---- restaurants.",
        "options": {
          "A": "as rapidly as",
          "B": "so rapidly that",
          "C": "as rapid as",
          "D": "as rapid than"
        },
        "answer": "A",
        "explanation": "Động từ thường 'developed' cần trạng từ 'rapidly' bổ nghĩa; cấu trúc so sánh bằng với trạng từ là 'as + trạng từ + as'."
      },
      {
        "id": "comparisons_q20",
        "num": 20,
        "stem": "Commercial centers are ----- they were many years ago.",
        "options": {
          "A": "as popular than",
          "B": "the most popular",
          "C": "more popular than",
          "D": "most popular than"
        },
        "answer": "C",
        "explanation": "Câu so sánh hai mốc thời điểm (hiện tại và nhiều năm trước) với tính từ dài 'popular', nên dùng cấu trúc so sánh hơn 'more + tính từ + than'."
      },
      {
        "id": "comparisons_q21",
        "num": 21,
        "stem": "Computer are considered as ---- tools today.",
        "options": {
          "A": "much modern than",
          "B": "the most modern",
          "C": "modern as",
          "D": "more modern"
        },
        "answer": "B",
        "explanation": "Câu không có đối tượng so sánh đi kèm phía sau và nhấn mạnh trong phạm vi 'today', nên dùng dạng so sánh nhất của tính từ dài 'modern' là 'the most modern'."
      },
      {
        "id": "comparisons_q22",
        "num": 22,
        "stem": "A supermarket is ----- a shopping center.",
        "options": {
          "A": "less convenient as",
          "B": "not so convenient than",
          "C": "less convenient than",
          "D": "the most convenient as"
        },
        "answer": "C",
        "explanation": "Cấu trúc so sánh kém hơn với tính từ dài là 'less + tính từ + than' (các phương án khác đều sai cặp từ kết hợp)."
      },
      {
        "id": "comparisons_q23",
        "num": 23,
        "stem": "Vietnam becomes ----- to foreign tourists.",
        "options": {
          "A": "most and most attractive",
          "B": "the more attractive",
          "C": "much and more attractive",
          "D": "more and more attractive"
        },
        "answer": "D",
        "explanation": "Cấu trúc so sánh lũy tiến (càng ngày càng) với tính từ dài 'attractive' là 'more and more + tính từ'."
      },
      {
        "id": "comparisons_q24",
        "num": 24,
        "stem": "Can Tho is ----- from Sai Gon than Bien Hoa is.",
        "options": {
          "A": "father",
          "B": "further",
          "C": "far",
          "D": "farer"
        },
        "answer": "B",
        "explanation": "Có 'than' nên cần dạng so sánh hơn của 'far' là 'farther' hoặc 'further'; đáp án A ('father' = bố) là bẫy chính tả, do đó chọn B ('further')."
      },
      {
        "id": "comparisons_q25",
        "num": 25,
        "stem": "Of all the ball-point pens, which one do you like ----?",
        "options": {
          "A": "best",
          "B": "the best",
          "C": "most",
          "D": "the most"
        },
        "answer": "A",
        "explanation": "Cụm từ cố định 'like ... best' dùng để hỏi sự yêu thích nhất trong một nhóm lựa chọn; khi 'best' là trạng từ so sánh nhất bổ nghĩa cho động từ 'like', thường không dùng mạo từ 'the'."
      },
      {
        "id": "comparisons_q26",
        "num": 26,
        "stem": "The ----- we start, the sooner we will be back.",
        "options": {
          "A": "early",
          "B": "earliest",
          "C": "earlier",
          "D": "more early"
        },
        "answer": "C",
        "explanation": "Cấu trúc so sánh kép 'The + so sánh hơn + S + V, the + so sánh hơn + S + V'; dạng so sánh hơn của trạng từ 'early' là 'earlier'."
      },
      {
        "id": "comparisons_q27",
        "num": 27,
        "stem": "The sooner, the ------",
        "options": {
          "A": "better",
          "B": "best",
          "C": "good",
          "D": "more good"
        },
        "answer": "A",
        "explanation": "Thành ngữ so sánh kép cố định 'The sooner, the better' (càng sớm càng tốt), dùng dạng so sánh hơn bất quy tắc của 'good' là 'better'."
      },
      {
        "id": "comparisons_q28",
        "num": 28,
        "stem": "The more, the…..",
        "options": {
          "A": "funnier",
          "B": "merrier",
          "C": "happier",
          "D": "more funny"
        },
        "answer": "B",
        "explanation": "Thành ngữ so sánh kép cố định trong tiếng Anh là 'The more, the merrier' (càng đông càng vui)."
      },
      {
        "id": "comparisons_q29",
        "num": 29,
        "stem": "The harder this farmer works, ----- he becomes.",
        "options": {
          "A": "the richest",
          "B": "the richer",
          "C": "the more rich",
          "D": "richer"
        },
        "answer": "B",
        "explanation": "Cấu trúc so sánh kép 'The + so sánh hơn + S + V, the + so sánh hơn + S + V'; tính từ ngắn 'rich' ở vế hai cần viết là 'the richer'."
      },
      {
        "id": "comparisons_q30",
        "num": 30,
        "stem": "The ---- he is, the more miserable he gets.",
        "options": {
          "A": "richer",
          "B": "more richer",
          "C": "more rich",
          "D": "richest"
        },
        "answer": "A",
        "explanation": "Cấu trúc so sánh kép (càng... càng...); đã có 'The' trước chỗ trống và 'rich' là tính từ ngắn nên dùng dạng so sánh hơn 'richer'."
      },
      {
        "id": "comparisons_q31",
        "num": 31,
        "stem": "With the Gema XTI binoculars, users can ---- see objects that are more than 100 meters away. (106 ETS1 2019)",
        "options": {
          "A": "ease",
          "B": "easy",
          "C": "easily",
          "D": "easier"
        },
        "answer": "C",
        "explanation": "Giữa trợ động từ khuyết thiếu 'can' và động từ thường 'see' cần một trạng từ để bổ nghĩa cho hành động 'see', nên chọn 'easily' (một cách dễ dàng)."
      },
      {
        "id": "comparisons_q32",
        "num": 32,
        "stem": "Because of ----- weather conditions, tonight’s concert in Harbin Park has been canceled. (113 ETS4 2019)",
        "options": {
          "A": "worsening",
          "B": "worsens",
          "C": "worsen",
          "D": "worst"
        },
        "answer": "A",
        "explanation": "Trước cụm danh từ 'weather conditions' (không có mạo từ 'the' nên loại so sánh nhất 'worst'), cần hiện tại phân từ đóng vai trò tính từ là 'worsening' (đang trở nên tồi tệ hơn)."
      },
      {
        "id": "comparisons_q33",
        "num": 33,
        "stem": "Thanks ---- to pastry chef Ana Villagra, Lauduccis’s Restarant has become a favorite with local patrons. (123 ETS4 2019)",
        "options": {
          "A": "largely",
          "B": "larger",
          "C": "large",
          "D": "largest"
        },
        "answer": "A",
        "explanation": "Cụm từ cố định 'thanks largely to...' mang nghĩa 'phần lớn là nhờ vào...'; trạng từ 'largely' dùng để bổ nghĩa cho cụm giới từ 'thanks to'."
      },
      {
        "id": "comparisons_q34",
        "num": 34,
        "stem": "Prices at Taylor City Books are ---- lower than at other online bookstores. (115 ETS5 2019)",
        "options": {
          "A": "more significant",
          "B": "significant",
          "C": "significance",
          "D": "significantly"
        },
        "answer": "D",
        "explanation": "Trước tính từ so sánh hơn 'lower', cần một trạng từ để nhấn mạnh mức độ so sánh -> chọn 'significantly' (thấp hơn đáng kể)."
      },
      {
        "id": "comparisons_q35",
        "num": 35,
        "stem": "Ms. Kuramoto selected the most ---- mailing option available.(110 ETS9 2019)",
        "options": {
          "A": "economical",
          "B": "economy",
          "C": "economize",
          "D": "economized"
        },
        "answer": "A",
        "explanation": "Cấu trúc so sánh nhất 'the most + tính từ + danh từ' -> cần tính từ 'economical' (tiết kiệm, kinh tế) để bổ nghĩa cho cụm danh từ 'mailing option'."
      },
      {
        "id": "comparisons_q36",
        "num": 36,
        "stem": "Sage Bistro’s menu features a --- variety of seafood items than Almaner Pavilion’s. (103 ETS10 2019)",
        "options": {
          "A": "wide",
          "B": "widest",
          "C": "wider",
          "D": "widely"
        },
        "answer": "C",
        "explanation": "Trong câu có từ 'than' báo hiệu so sánh hơn, cần tính từ so sánh hơn 'wider' đứng trước danh từ 'variety' (một sự đa dạng rộng hơn)."
      },
      {
        "id": "comparisons_q37",
        "num": 37,
        "stem": "Ms. Yi says that five trays of appetizers are more than ------ for fifty guests. (111 ETS2 2018)",
        "options": {
          "A": "able",
          "B": "numerous",
          "C": "sure",
          "D": "enough"
        },
        "answer": "D",
        "explanation": "Cụm từ cố định 'more than enough' mang nghĩa 'quá đủ / dư dả', phù hợp với ngữ cảnh 5 khay món khai vị là quá đủ cho 50 khách."
      },
      {
        "id": "comparisons_q38",
        "num": 38,
        "stem": "Investing in ---- properties as possible can be risky but is often lucrative. (110 ETS4 2018)",
        "options": {
          "A": "as much",
          "B": "as many",
          "C": "so much",
          "D": "so many"
        },
        "answer": "B",
        "explanation": "Cấu trúc so sánh bằng 'as many/much + N + as possible' (càng nhiều... càng tốt). Vì 'properties' là danh từ đếm được số nhiều nên chọn 'as many'."
      },
      {
        "id": "comparisons_q39",
        "num": 39,
        "stem": "Smooth Tek’s newest software makes it much ---- for business owners to create newsletters. (104 ETS5 2018)",
        "options": {
          "A": "easy",
          "B": "easily",
          "C": "easier",
          "D": "ease"
        },
        "answer": "C",
        "explanation": "Cấu trúc 'make + it + tính từ + for sb + to V'; trước chỗ trống có trạng từ nhấn mạnh so sánh hơn 'much' nên phải chọn tính từ so sánh hơn 'easier'."
      },
      {
        "id": "comparisons_q40",
        "num": 40,
        "stem": "The National Overview is the fourth ---- distributed newspaper in the northeastern region. (107 ETS5 2018)",
        "options": {
          "A": "wide",
          "B": "widen",
          "C": "most widely",
          "D": "more widely"
        },
        "answer": "C",
        "explanation": "Cấu trúc 'the + số thứ tự (fourth) + so sánh nhất'. Cần trạng từ so sánh nhất 'most widely' để bổ nghĩa cho phân từ 'distributed' (được phát hành rộng rãi thứ tư)."
      },
      {
        "id": "comparisons_q41",
        "num": 41,
        "stem": "Please review the repair estimate carefully ---- it has been received from the maintenance department. (117 ETS5 2018)",
        "options": {
          "A": "then",
          "B": "while",
          "C": "ever since",
          "D": "as soon as"
        },
        "answer": "D",
        "explanation": "Cần liên từ chỉ thời gian nối mệnh đề mệnh lệnh với mệnh đề chia hiện tại hoàn thành diễn tả hành động xảy ra trước ở tương lai -> chọn 'as soon as' (ngay khi)."
      },
      {
        "id": "comparisons_q42",
        "num": 42,
        "stem": "The study showed that customers aged 35 to 44 paid with a Sonoka credit card ----- than customers in any other age-group. (107 ETS2 2020)",
        "options": {
          "A": "frequently",
          "B": "frequent",
          "C": "more frequently",
          "D": "frequency"
        },
        "answer": "C",
        "explanation": "Câu có 'than' (so sánh hơn) và cần một trạng từ bổ nghĩa cho động từ 'paid' -> chọn trạng từ so sánh hơn 'more frequently' (thường xuyên hơn)."
      },
      {
        "id": "comparisons_q43",
        "num": 43,
        "stem": "Attendees said the fireworks were the most ---- part of the festival. (117 ETS4 2020)",
        "options": {
          "A": "impression",
          "B": "impressive",
          "C": "impresses",
          "D": "impressed"
        },
        "answer": "B",
        "explanation": "Cấu trúc so sánh nhất 'the most + tính từ + danh từ (part)'. Chủ ngữ là 'the fireworks' (vật gây ra cảm xúc) nên dùng tính từ đuôi -ive là 'impressive' (ấn tượng)."
      },
      {
        "id": "comparisons_q44",
        "num": 44,
        "stem": "Keeping the deal, Jan Butler’s latest volume on management style, is her most commercially ---- book to date. (107 ETS5 2020).",
        "options": {
          "A": "successfully",
          "B": "successful",
          "C": "succeed",
          "D": "success"
        },
        "answer": "B",
        "explanation": "Cấu trúc so sánh nhất 'her most + trạng từ (commercially) + tính từ + danh từ (book)' -> cần tính từ 'successful' (thành công về mặt thương mại)."
      },
      {
        "id": "comparisons_q46",
        "num": 46,
        "stem": "The network is expected to be unavailable for ---- two hours. (125 ETS9 2020).",
        "options": {
          "A": "no more than",
          "B": "hardly any",
          "C": "as far as",
          "D": "that many"
        },
        "answer": "A",
        "explanation": "Trước một con số/khoảng thời gian cụ thể ('two hours'), dùng cụm 'no more than' mang nghĩa 'không quá / tối đa là' (mạng dự kiến ngừng hoạt động không quá 2 giờ)."
      },
      {
        "id": "comparisons_q47",
        "num": 47,
        "stem": "The new software at Patel Industries has been working ----- since it was installed last year. (103 ETS10 2020)",
        "options": {
          "A": "reliable",
          "B": "to rely",
          "C": "more reliable",
          "D": "reliably"
        },
        "answer": "D",
        "explanation": "Cần trạng từ bổ nghĩa cho động từ thường \"working\" (hoạt động một cách đáng tin cậy). A (tính từ), C (tính từ so sánh hơn) và B (to-V) đều không phù hợp về từ loại và ngữ pháp."
      },
      {
        "id": "comparisons_q48",
        "num": 48,
        "stem": "The new microware soup containers are ----- than the previous one. (112 ETS10 2020)",
        "options": {
          "A": "rigid",
          "B": "most rigid",
          "C": "rigidly",
          "D": "more rigid"
        },
        "answer": "D",
        "explanation": "Sau động từ liên kết \"are\" và trước dấu hiệu so sánh hơn \"than\" cần một tính từ dạng so sánh hơn. \"Rigid\" là tính từ hai âm tiết nên dạng so sánh hơn là \"more rigid\"."
      }
    ]
  },
  {
    "id": "prepositions",
    "title": "Giới từ & Phrasal Verbs",
    "desc": "In, on, at, by, for, cụm động từ thường gặp TOEIC",
    "icon": "📌",
    "count": 96,
    "questions": [
      {
        "id": "prepositions_q1",
        "num": 1,
        "stem": "It was the third time in six months that the bank had been held _____ .",
        "options": {
          "A": "over",
          "B": "down",
          "C": "up",
          "D": "out"
        },
        "answer": "C",
        "explanation": "Cụm động từ 'hold up' mang nghĩa cướp (ngân hàng, cửa hàng bằng vũ khí). Trong câu bị động 'had been held up' nghĩa là ngân hàng đã bị cướp."
      },
      {
        "id": "prepositions_q2",
        "num": 2,
        "stem": "I always run _____ of money before the end of the month.",
        "options": {
          "A": "out",
          "B": "back",
          "C": "up",
          "D": "down"
        },
        "answer": "A",
        "explanation": "Cụm động từ 'run out of + N' mang nghĩa hết, cạn kiệt cái gì đó (hết tiền trước cuối tháng)."
      },
      {
        "id": "prepositions_q3",
        "num": 3,
        "stem": "It's taking me longer to get _____ the operation than I thought.",
        "options": {
          "A": "through",
          "B": "by",
          "C": "up from",
          "D": "over"
        },
        "answer": "D",
        "explanation": "Cụm động từ 'get over' mang nghĩa hồi phục sau bệnh tật, ca phẫu thuật hoặc vượt qua cú sốc."
      },
      {
        "id": "prepositions_q4",
        "num": 4,
        "stem": "I've just spent two weeks looking _____an aunt of mine who's been ill.",
        "options": {
          "A": "at",
          "B": "for",
          "C": "out for",
          "D": "after"
        },
        "answer": "D",
        "explanation": "Cụm động từ 'look after' mang nghĩa chăm sóc ai đó (chăm sóc người dì bị ốm)."
      },
      {
        "id": "prepositions_q5",
        "num": 5,
        "stem": "I've always got _____ well with old people.",
        "options": {
          "A": "off",
          "B": "on",
          "C": "in",
          "D": "through"
        },
        "answer": "B",
        "explanation": "Cụm động từ 'get on (well) with sb' mang nghĩa hòa thuận, có mối quan hệ tốt với ai."
      },
      {
        "id": "prepositions_q6",
        "num": 6,
        "stem": "It's very cold in here. Do you mind if I turn _________ the heating?",
        "options": {
          "A": "down",
          "B": "away",
          "C": "off",
          "D": "on"
        },
        "answer": "D",
        "explanation": "Dựa vào ngữ cảnh 'trời rất lạnh ở đây', cần dùng cụm động từ 'turn on' (bật thiết bị/máy sưởi)."
      },
      {
        "id": "prepositions_q7",
        "num": 7,
        "stem": "They've _____ a new tower where that old building used to be.",
        "options": {
          "A": "put up",
          "B": "put down",
          "C": "pushed up",
          "D": "pushed down"
        },
        "answer": "A",
        "explanation": "Cụm động từ 'put up' mang nghĩa xây dựng, dựng lên một công trình (một tòa tháp mới)."
      },
      {
        "id": "prepositions_q8",
        "num": 8,
        "stem": "Stephen always wanted to be an actor when he ________ up.",
        "options": {
          "A": "came",
          "B": "grew",
          "C": "brought",
          "D": "settled"
        },
        "answer": "B",
        "explanation": "Cụm động từ 'grow up' (quá khứ: grew up) mang nghĩa lớn lên, trưởng thành."
      },
      {
        "id": "prepositions_q9",
        "num": 9,
        "stem": "The bus only stops here to ________ passengers.",
        "options": {
          "A": "alight",
          "B": "get on",
          "C": "get off",
          "D": "pick up"
        },
        "answer": "D",
        "explanation": "Cụm động từ 'pick up' mang nghĩa đón (hành khách). Chủ ngữ là 'the bus' nên không dùng get on/off hay alight (dùng cho hành khách)."
      },
      {
        "id": "prepositions_q10",
        "num": 10,
        "stem": "If anything urgent comes _____, you can contact me at this number.",
        "options": {
          "A": "across",
          "B": "by",
          "C": "up",
          "D": "round"
        },
        "answer": "C",
        "explanation": "Cụm động từ 'come up' mang nghĩa xảy ra, phát sinh bất ngờ (nếu có việc gì khẩn cấp phát sinh)."
      },
      {
        "id": "prepositions_q11",
        "num": 11,
        "stem": "Your daughter's just started work, hasn't she? How's she getting _____?",
        "options": {
          "A": "by",
          "B": "on",
          "C": "out",
          "D": "in"
        },
        "answer": "B",
        "explanation": "Cụm động từ 'get on' trong câu hỏi 'How is sb getting on?' dùng để hỏi thăm tình hình, sự tiến triển trong công việc hoặc học tập."
      },
      {
        "id": "prepositions_q12",
        "num": 12,
        "stem": "We had to turn _______ their invitation to lunch as we had a previous engagement.",
        "options": {
          "A": "over",
          "B": "out",
          "C": "up",
          "D": "down"
        },
        "answer": "D",
        "explanation": "Cụm động từ 'turn down' mang nghĩa từ chối (lời mời, lời đề nghị) vì đã có hẹn trước."
      },
      {
        "id": "prepositions_q13",
        "num": 13,
        "stem": "While driving to work, we ran out____ gas.",
        "options": {
          "A": "Up",
          "B": "Of",
          "C": "In",
          "D": "To"
        },
        "answer": "B",
        "explanation": "Cấu trúc 'run out of + N' mang nghĩa cạn kiệt, hết thứ gì đó (hết xăng)."
      },
      {
        "id": "prepositions_q14",
        "num": 14,
        "stem": "He died ____ heart disease.",
        "options": {
          "A": "from",
          "B": "because",
          "C": "of",
          "D": "in"
        },
        "answer": "C",
        "explanation": "Cấu trúc 'die of + tên bệnh' diễn tả nguyên nhân tử vong trực tiếp do bệnh tật (bệnh tim)."
      },
      {
        "id": "prepositions_q15",
        "num": 15,
        "stem": "The elevator is not running today. It is ________ order.",
        "options": {
          "A": "to",
          "B": "out",
          "C": "out of",
          "D": "in"
        },
        "answer": "C",
        "explanation": "Cụm giới từ cố định 'out of order' mang nghĩa bị hỏng, ngừng hoạt động (dùng cho máy móc, thang máy)."
      },
      {
        "id": "prepositions_q16",
        "num": 16,
        "stem": "I explained ____ him what it meant.",
        "options": {
          "A": "to",
          "B": "about",
          "C": "over",
          "D": "from"
        },
        "answer": "A",
        "explanation": "Cấu trúc 'explain to someone (something)' có nghĩa là giải thích cho ai điều gì, do đó cần giới từ 'to'."
      },
      {
        "id": "prepositions_q17",
        "num": 17,
        "stem": "Pasteur devoted all his life _______ science.",
        "options": {
          "A": "for",
          "B": "in",
          "C": "on",
          "D": "to"
        },
        "answer": "D",
        "explanation": "Cấu trúc 'devote something to something/doing something' mang nghĩa cống hiến cái gì cho cái gì."
      },
      {
        "id": "prepositions_q18",
        "num": 18,
        "stem": "House cats are distantly related ___ lions and tigers.",
        "options": {
          "A": "in",
          "B": "to",
          "C": "of",
          "D": "about"
        },
        "answer": "B",
        "explanation": "Cụm tính từ 'be related to' có nghĩa là có họ hàng hoặc có liên quan đến ai/cái gì."
      },
      {
        "id": "prepositions_q19",
        "num": 19,
        "stem": "Is this type of soil suitable ___ growing tomatoes ?",
        "options": {
          "A": "for",
          "B": "about",
          "C": "in",
          "D": "at"
        },
        "answer": "A",
        "explanation": "Cấu trúc 'be suitable for something/doing something' mang nghĩa thích hợp, phù hợp cho việc gì."
      },
      {
        "id": "prepositions_q20",
        "num": 20,
        "stem": "Were you aware _____ the regulations against smoking in this area?",
        "options": {
          "A": "in",
          "B": "with",
          "C": "of",
          "D": "about"
        },
        "answer": "C",
        "explanation": "Cụm tính từ 'be aware of something' có nghĩa là nhận thức được, biết về điều gì."
      },
      {
        "id": "prepositions_q21",
        "num": 21,
        "stem": "It is generally accepted that in today's society women have access ________ education and can promote themselves much more easily than years ago.",
        "options": {
          "A": "to",
          "B": "up",
          "C": "on",
          "D": "for"
        },
        "answer": "A",
        "explanation": "Cấu trúc 'have access to something' mang nghĩa có cơ hội hoặc quyền tiếp cận với cái gì."
      },
      {
        "id": "prepositions_q22",
        "num": 22,
        "stem": "It took women a long time to struggle ________ the right to vote.",
        "options": {
          "A": "for",
          "B": "with",
          "C": "against",
          "D": "upon"
        },
        "answer": "A",
        "explanation": "Cụm động từ 'struggle for something' có nghĩa là đấu tranh vì, đấu tranh để giành lấy cái gì (quyền bầu cử)."
      },
      {
        "id": "prepositions_q23",
        "num": 23,
        "stem": "I think women are suited ________ many important things, besides childbearing and homemaking.",
        "options": {
          "A": "of",
          "B": "on",
          "C": "for",
          "D": "about"
        },
        "answer": "C",
        "explanation": "Cấu trúc 'be suited for something' có nghĩa là phù hợp với việc gì."
      },
      {
        "id": "prepositions_q24",
        "num": 24,
        "stem": "Women are increasingly involved ________ the public life.",
        "options": {
          "A": "of",
          "B": "in",
          "C": "with",
          "D": "from"
        },
        "answer": "B",
        "explanation": "Cấu trúc 'be involved in something' mang nghĩa tham gia vào một hoạt động hay lĩnh vực nào đó."
      },
      {
        "id": "prepositions_q25",
        "num": 25,
        "stem": "If you have an old blanket, ________ it along so that we have something to sit on at the beach.",
        "options": {
          "A": "bring",
          "B": "go",
          "C": "put",
          "D": "keep"
        },
        "answer": "A",
        "explanation": "Cụm động từ 'bring something along' có nghĩa là mang theo cái gì đó bên mình."
      },
      {
        "id": "prepositions_q26",
        "num": 26,
        "stem": "Although the team was both mentally and physically exhausted, they ________ on walking.",
        "options": {
          "A": "stopped",
          "B": "kept",
          "C": "took",
          "D": "put"
        },
        "answer": "B",
        "explanation": "Cụm động từ 'keep on + V-ing' (quá khứ: kept on) mang nghĩa tiếp tục làm gì, phù hợp với mệnh đề nhượng bộ 'Although'."
      },
      {
        "id": "prepositions_q27",
        "num": 27,
        "stem": "Before the plane ________ off, the flight attendant told everyone to fasten their seat belts and put their chairs in an upright position.",
        "options": {
          "A": "woke",
          "B": "brought",
          "C": "kept",
          "D": "took"
        },
        "answer": "D",
        "explanation": "Cụm động từ 'take off' (quá khứ: took off) khi đi với máy bay mang nghĩa cất cánh."
      },
      {
        "id": "prepositions_q28",
        "num": 28,
        "stem": "Don't forget to ________ your gloves on. It is cold outside.",
        "options": {
          "A": "let",
          "B": "make",
          "C": "put",
          "D": "fix"
        },
        "answer": "C",
        "explanation": "Cụm động từ 'put something on' mang nghĩa mặc, đeo hoặc đội trang phục/phụ kiện (đeo găng tay)."
      },
      {
        "id": "prepositions_q29",
        "num": 29,
        "stem": "If you don't pay your rent, your landlord is going to kick you out!",
        "options": {
          "A": "lend you some money",
          "B": "play football with you",
          "C": "give you a kick",
          "D": "force you to leave"
        },
        "answer": "D",
        "explanation": "Cụm động từ 'kick someone out' đồng nghĩa với 'force someone to leave' (đuổi ai đó ra khỏi nơi ở)."
      },
      {
        "id": "prepositions_q30",
        "num": 30,
        "stem": "Yesterday I ran into Sam at the grocery store. I had not seen him for years.",
        "options": {
          "A": "met",
          "B": "visited",
          "C": "said goodbye to",
          "D": "made friends with"
        },
        "answer": "A",
        "explanation": "Cụm động từ 'run into someone' có nghĩa là tình cờ gặp ai đó, tương ứng với 'met'."
      },
      {
        "id": "prepositions_q31",
        "num": 31,
        "stem": "Let's go over that report again before we submit it.",
        "options": {
          "A": "dictate",
          "B": "print",
          "C": "read carefully",
          "D": "type"
        },
        "answer": "C",
        "explanation": "Cụm động từ 'go over' có nghĩa là kiểm tra kỹ, xem xét lại cẩn thận, đồng nghĩa với 'read carefully'."
      },
      {
        "id": "prepositions_q32",
        "num": 32,
        "stem": "I will not stand for your bad attitude any longer.",
        "options": {
          "A": "like",
          "B": "tolerate",
          "C": "mean",
          "D": "care"
        },
        "answer": "B",
        "explanation": "Cụm động từ 'stand for' (thường dùng trong câu phủ định) có nghĩa là chịu đựng, chấp nhận, đồng nghĩa với 'tolerate'."
      },
      {
        "id": "prepositions_q33",
        "num": 33,
        "stem": "Everything is _______ you. I cannot make _______ my mind yet.",
        "options": {
          "A": "out off / on",
          "B": "up to / up",
          "C": "away from / for",
          "D": "on for / off"
        },
        "answer": "B",
        "explanation": "Cấu trúc cố định 'be up to someone' (tùy thuộc vào ai đó) và 'make up one's mind' (đưa ra quyết định)."
      },
      {
        "id": "prepositions_q34",
        "num": 34,
        "stem": "There is no food left. Someone must have eaten it _______.",
        "options": {
          "A": "out",
          "B": "up",
          "C": "off",
          "D": "along"
        },
        "answer": "B",
        "explanation": "Cụm động từ 'eat up' có nghĩa là ăn sạch, ăn hết toàn bộ (phù hợp với ngữ cảnh không còn chút đồ ăn nào)."
      },
      {
        "id": "prepositions_q35",
        "num": 35,
        "stem": "The explorers made a fire to _______ off wild animals.",
        "options": {
          "A": "get",
          "B": "keep",
          "C": "take",
          "D": "go"
        },
        "answer": "B",
        "explanation": "Cụm động từ 'keep off' có nghĩa là giữ tránh xa, xua đuổi, ngăn không cho lại gần."
      },
      {
        "id": "prepositions_q36",
        "num": 36,
        "stem": "If something urgent has _______ up, phone me immediately and I will help you.",
        "options": {
          "A": "picked",
          "B": "come",
          "C": "kept",
          "D": "brought"
        },
        "answer": "B",
        "explanation": "Cụm động từ 'come up' (quá khứ phân từ: come up) có nghĩa là bất ngờ xảy ra, nảy sinh (một vấn đề/việc khẩn cấp)."
      },
      {
        "id": "prepositions_q37",
        "num": 37,
        "stem": "The passengers had to wait because the plane ______ off one hour late.",
        "options": {
          "A": "took",
          "B": "turned",
          "C": "cut",
          "D": "made"
        },
        "answer": "A",
        "explanation": "Cụm động từ 'take off' (quá khứ: took off) khi dùng với máy bay có nghĩa là cất cánh."
      },
      {
        "id": "prepositions_q38",
        "num": 38,
        "stem": "Be careful! The tree is going to fall.",
        "options": {
          "A": "Look out",
          "B": "Look up",
          "C": "Look on",
          "D": "Look after"
        },
        "answer": "A",
        "explanation": "Cụm động từ 'Look out!' có nghĩa là 'Cẩn thận! / Coi chừng!', đồng nghĩa với 'Be careful!'."
      },
      {
        "id": "prepositions_q39",
        "num": 39,
        "stem": "The organization was established in 950 in the USA.",
        "options": {
          "A": "come around",
          "B": "set up",
          "C": "made out",
          "D": "put on"
        },
        "answer": "B",
        "explanation": "Cụm động từ 'set up' (dạng bị động: was set up) có nghĩa là thành lập, thiết lập, đồng nghĩa với 'established'."
      },
      {
        "id": "prepositions_q40",
        "num": 40,
        "stem": "Within their home country, National Red Cross and Red Crescent societies assume the duties and responsibilities of a national relief society.",
        "options": {
          "A": "take on",
          "B": "get off",
          "C": "go about",
          "D": "put in"
        },
        "answer": "A",
        "explanation": "Cụm động từ 'take on' có nghĩa là đảm nhận, gánh vác (nhiệm vụ, trách nhiệm), đồng nghĩa với 'assume'."
      },
      {
        "id": "prepositions_q41",
        "num": 41,
        "stem": "The bomb exploded in the garage; fortunately no one hurt.",
        "options": {
          "A": "put on",
          "B": "went off",
          "C": "got out",
          "D": "kept up"
        },
        "answer": "B",
        "explanation": "Cụm động từ 'go off' (quá khứ: went off) khi dùng với bom có nghĩa là phát nổ, đồng nghĩa với 'exploded'."
      },
      {
        "id": "prepositions_q42",
        "num": 42,
        "stem": "They had to delay their trip because of the bad weather.",
        "options": {
          "A": "get through",
          "B": "put off",
          "C": "keep up with",
          "D": "go over"
        },
        "answer": "B",
        "explanation": "Cụm động từ 'put off' có nghĩa là trì hoãn, đồng nghĩa với 'delay'."
      },
      {
        "id": "prepositions_q43",
        "num": 43,
        "stem": "It took me a very long time to recover from the shock of her death.",
        "options": {
          "A": "turn off",
          "B": "take on",
          "C": "get over",
          "D": "keep up with"
        },
        "answer": "C",
        "explanation": "Cụm động từ 'get over' có nghĩa là vượt qua, hồi phục sau cú sốc hay bệnh tật, đồng nghĩa với 'recover from'."
      },
      {
        "id": "prepositions_q44",
        "num": 44,
        "stem": "He did not particularly want to play any competitive sport.",
        "options": {
          "A": "use up",
          "B": "do with",
          "C": "take up",
          "D": "go on"
        },
        "answer": "C",
        "explanation": "Cụm động từ 'take up' có nghĩa là bắt đầu tham gia, theo đuổi một môn thể thao hoặc sở thích, phù hợp thay thế cho 'play' trong ngữ cảnh này."
      },
      {
        "id": "prepositions_q45",
        "num": 45,
        "stem": "The Rinzlite dishwasher was ranked higher ---- all other dishwashers in its class. (119 ETS7 2020)",
        "options": {
          "A": "to",
          "B": "past",
          "C": "than",
          "D": "by"
        },
        "answer": "C",
        "explanation": "Cấu trúc so sánh hơn với tính từ/trạng từ ngắn 'higher' đi kèm với 'than' (xếp hạng cao hơn tất cả các máy rửa chén khác)."
      },
      {
        "id": "prepositions_q46",
        "num": 46,
        "stem": "She got _______ her car to pick _______ some wild flowers.",
        "options": {
          "A": "from / on",
          "B": "in / at",
          "C": "off / up",
          "D": "out / for"
        },
        "answer": "C",
        "explanation": "Cụm động từ 'get off' mang nghĩa xuống xe và 'pick up' mang nghĩa nhặt/hái lên, phù hợp với ngữ cảnh xuống xe để hái hoa dại."
      },
      {
        "id": "prepositions_q47",
        "num": 47,
        "stem": "The customer had tried ____ some blouses but none of them suited her.",
        "options": {
          "A": "at",
          "B": "with",
          "C": "in",
          "D": "on"
        },
        "answer": "D",
        "explanation": "Cụm động từ 'try on' mang nghĩa mặc thử quần áo, phù hợp với ngữ cảnh thử áo sơ mi nữ (blouses)."
      },
      {
        "id": "prepositions_q48",
        "num": 48,
        "stem": "If I get this report finished I will knock _______ early and go to the pub for some drink.",
        "options": {
          "A": "up",
          "B": "over",
          "C": "on",
          "D": "off"
        },
        "answer": "D",
        "explanation": "Cụm động từ 'knock off' mang nghĩa ngừng làm việc, tan làm sớm."
      },
      {
        "id": "prepositions_q49",
        "num": 49,
        "stem": "Boy! _______ away all your toys and. go to bed right now.",
        "options": {
          "A": "Come",
          "B": "Lie",
          "C": "Put",
          "D": "Sit"
        },
        "answer": "C",
        "explanation": "Cụm động từ 'put away' mang nghĩa cất gọn, dọn dẹp đồ đạc vào đúng chỗ."
      },
      {
        "id": "prepositions_q50",
        "num": 50,
        "stem": "I have been trying to ring him up all day and I could not ______ through.",
        "options": {
          "A": "get",
          "B": "take",
          "C": "look",
          "D": "hang"
        },
        "answer": "A",
        "explanation": "Cụm động từ 'get through' mang nghĩa liên lạc được, nối máy thành công qua điện thoại."
      },
      {
        "id": "prepositions_q51",
        "num": 51,
        "stem": "The water supply of the building was ______ off because the pipes burst.",
        "options": {
          "A": "handed",
          "B": "held",
          "C": "cut",
          "D": "paid"
        },
        "answer": "C",
        "explanation": "Cụm động từ 'cut off' mang nghĩa cắt hoặc ngừng cung cấp (điện, nước, khí đốt) do sự cố vỡ đường ống."
      },
      {
        "id": "prepositions_q52",
        "num": 52,
        "stem": "How are you _______ on with your work? - It is OK.",
        "options": {
          "A": "calling",
          "B": "getting",
          "C": "laying",
          "D": "looking"
        },
        "answer": "B",
        "explanation": "Cụm động từ 'get on with sth' mang nghĩa tiến triển hoặc xoay xở với công việc như thế nào."
      },
      {
        "id": "prepositions_q53",
        "num": 53,
        "stem": "Did your son pass the university entrance examination?",
        "options": {
          "A": "make up",
          "B": "get along",
          "C": "go up",
          "D": "get through"
        },
        "answer": "D",
        "explanation": "Cụm động từ 'get through' (vượt qua, thi đỗ kỳ thi) đồng nghĩa với động từ 'pass' trong câu."
      },
      {
        "id": "prepositions_q54",
        "num": 54,
        "stem": "What may happen if John will not arrive in time?",
        "options": {
          "A": "go along",
          "B": "count on",
          "C": "keep away",
          "D": "turn up"
        },
        "answer": "D",
        "explanation": "Cụm động từ 'turn up' (đến, xuất hiện) đồng nghĩa với động từ 'arrive' trong câu."
      },
      {
        "id": "prepositions_q55",
        "num": 55,
        "stem": "Johnny sometimes visits his grandparents in the countryside.",
        "options": {
          "A": "calls on",
          "B": "keeps off",
          "C": "takes in",
          "D": "goes up"
        },
        "answer": "A",
        "explanation": "Cụm động từ 'call on sb' (ghé thăm ai) đồng nghĩa với động từ 'visit' trong câu."
      },
      {
        "id": "prepositions_q56",
        "num": 56,
        "stem": "They decided to postpone their journey till the end of the month because of the epidemic.",
        "options": {
          "A": "take up",
          "B": "turn round",
          "C": "put off",
          "D": "do with"
        },
        "answer": "C",
        "explanation": "Cụm động từ 'put off' (trì hoãn) đồng nghĩa với động từ 'postpone' trong câu."
      },
      {
        "id": "prepositions_q57",
        "num": 57,
        "stem": "The stranger came ___ me and asked, \"Is there a post office near here?\"",
        "options": {
          "A": "on to",
          "B": "away from",
          "C": "out of",
          "D": "up to"
        },
        "answer": "D",
        "explanation": "Cụm động từ 'come up to sb' mang nghĩa tiến lại gần ai đó (để bắt chuyện hoặc hỏi đường)."
      },
      {
        "id": "prepositions_q58",
        "num": 58,
        "stem": "Frankly speaking, your daughter does not take _______ you at all.",
        "options": {
          "A": "after",
          "B": "along",
          "C": "up",
          "D": "over"
        },
        "answer": "A",
        "explanation": "Cụm động từ 'take after sb' mang nghĩa giống ai đó (thường là người thân trong gia đình) về ngoại hình hoặc tính cách."
      },
      {
        "id": "prepositions_q59",
        "num": 59,
        "stem": "She is not really friendly. She does not get on well ____ her classmates.",
        "options": {
          "A": "from",
          "B": "with",
          "C": "for",
          "D": "to"
        },
        "answer": "B",
        "explanation": "Cụm động từ 'get on well with sb' mang nghĩa hòa thuận, có mối quan hệ tốt với ai đó."
      },
      {
        "id": "prepositions_q60",
        "num": 60,
        "stem": "I would be grateful if you kept the news _______ yourself. Do not tell anyone about it.",
        "options": {
          "A": "from",
          "B": "to",
          "C": "for",
          "D": "at"
        },
        "answer": "B",
        "explanation": "Thành ngữ 'keep sth to oneself' mang nghĩa giữ kín, giữ bí mật điều gì cho riêng mình và không kể cho ai biết."
      },
      {
        "id": "prepositions_q61",
        "num": 61,
        "stem": "I do not use those things any more. You can _______ them away.",
        "options": {
          "A": "get",
          "B": "fall",
          "C": "throw",
          "D": "make"
        },
        "answer": "C",
        "explanation": "Cụm động từ 'throw sth away' nghĩa là vứt bỏ cái gì, phù hợp với ngữ cảnh không còn dùng những đồ vật đó nữa."
      },
      {
        "id": "prepositions_q62",
        "num": 62,
        "stem": "They were late for work because their car _______ down.",
        "options": {
          "A": "got",
          "B": "put",
          "C": "cut",
          "D": "broke"
        },
        "answer": "D",
        "explanation": "Cụm động từ 'break down' (quá khứ: broke down) nghĩa là (xe cộ, máy móc) bị hỏng, phù hợp ngữ cảnh đi làm muộn vì hỏng xe."
      },
      {
        "id": "prepositions_q63",
        "num": 63,
        "stem": "The authority _______ down that building to build a supermarket.",
        "options": {
          "A": "knocked",
          "B": "came",
          "C": "went",
          "D": "fell"
        },
        "answer": "A",
        "explanation": "Cụm động từ 'knock down' nghĩa là phá dỡ, đánh sập (tòa nhà, công trình) để xây siêu thị."
      },
      {
        "id": "prepositions_q64",
        "num": 64,
        "stem": "My husband spends far more time helping our three kids ________ homework and studying for tests than I do.",
        "options": {
          "A": "on",
          "B": "to",
          "C": "with",
          "D": "in"
        },
        "answer": "C",
        "explanation": "Cấu trúc 'help sb with sth' nghĩa là giúp ai làm việc gì (giúp con làm bài tập về nhà)."
      },
      {
        "id": "prepositions_q65",
        "num": 65,
        "stem": "My husband and I take turns cleaning ________ the kitchen depending ________ who gets home from work earlier.",
        "options": {
          "A": "away / to",
          "B": "from / in",
          "C": "up / on",
          "D": "with / for"
        },
        "answer": "C",
        "explanation": "Cụm động từ 'clean up' nghĩa là dọn dẹp sạch sẽ và cấu trúc 'depend on' nghĩa là phụ thuộc vào."
      },
      {
        "id": "prepositions_q66",
        "num": 66,
        "stem": "The efforts for the advancement of women have resulted ________ several respectively achievement in women's life and work.",
        "options": {
          "A": "at",
          "B": "with",
          "C": "for",
          "D": "in"
        },
        "answer": "D",
        "explanation": "Cấu trúc 'result in + N' nghĩa là dẫn đến, mang lại kết quả gì (khác với 'result from' là bắt nguồn từ)."
      },
      {
        "id": "prepositions_q67",
        "num": 67,
        "stem": "The women's movement has affirmed women's rights to non-discrimination ________ education, employment and economic and social activities.",
        "options": {
          "A": "in",
          "B": "of",
          "C": "from",
          "D": "about"
        },
        "answer": "A",
        "explanation": "Giới từ 'in' dùng trước các lĩnh vực, phạm vi ('non-discrimination in education, employment...': không phân biệt đối xử trong giáo dục, việc làm...)."
      },
      {
        "id": "prepositions_q68",
        "num": 68,
        "stem": "The small white flowers are my favorite. They give off a wonderful honey smell that scents the entire garden.",
        "options": {
          "A": "release",
          "B": "stop",
          "C": "end",
          "D": "melt"
        },
        "answer": "A",
        "explanation": "Cụm động từ 'give off' nghĩa là tỏa ra, phát ra (mùi hương, nhiệt, ánh sáng), đồng nghĩa với 'release'."
      },
      {
        "id": "prepositions_q69",
        "num": 69,
        "stem": "I couldn't make out what he had talked about because I was not used to his accent.",
        "options": {
          "A": "stand",
          "B": "understand",
          "C": "write",
          "D": "interrupt"
        },
        "answer": "B",
        "explanation": "Cụm động từ 'make out' nghĩa là hiểu được, nhận ra hoặc nghe rõ được, đồng nghĩa với 'understand'."
      },
      {
        "id": "prepositions_q70",
        "num": 70,
        "stem": "I'm sorry. I didn't mean to interrupt you. Please, go on and finish what you were saying.",
        "options": {
          "A": "talk",
          "B": "quit",
          "C": "continue",
          "D": "stop"
        },
        "answer": "C",
        "explanation": "Cụm động từ 'go on' nghĩa là tiếp tục (làm gì/nói gì), đồng nghĩa với 'continue'."
      },
      {
        "id": "prepositions_q71",
        "num": 71,
        "stem": "The firefighters fought the blaze while the crowd was looking on it.",
        "options": {
          "A": "blowing",
          "B": "watering",
          "C": "preventing",
          "D": "watching"
        },
        "answer": "D",
        "explanation": "Cụm động từ 'look on' nghĩa là đứng xem, quan sát mà không tham gia, đồng nghĩa với 'watching'."
      },
      {
        "id": "prepositions_q72",
        "num": 72,
        "stem": "I cannot believe Peter and Mary ________ up last week. They have been married for almost fifteen years. I hope they get back together.",
        "options": {
          "A": "went",
          "B": "gave",
          "C": "looked",
          "D": "broke"
        },
        "answer": "D",
        "explanation": "Cụm động từ 'break up' (quá khứ: broke up) nghĩa là chia tay, tan vỡ (hôn nhân/mối quan hệ), phù hợp vế sau mong họ quay lại với nhau."
      },
      {
        "id": "prepositions_q73",
        "num": 73,
        "stem": "It took us over twelve hours to hike over the mountain. By the time we got back to our campsite, I was completely ________ out.",
        "options": {
          "A": "worn",
          "B": "went",
          "C": "put",
          "D": "knocked"
        },
        "answer": "A",
        "explanation": "Cụm tính từ/phân từ 'be worn out' nghĩa là kiệt sức, mệt lử, phù hợp với ngữ cảnh đi bộ leo núi suốt hơn 12 tiếng."
      },
      {
        "id": "prepositions_q74",
        "num": 74,
        "stem": "If you don't have the telephone number now, you can ________ me up later and give it to me then.",
        "options": {
          "A": "call",
          "B": "stop",
          "C": "give",
          "D": "hold"
        },
        "answer": "A",
        "explanation": "Cụm động từ 'call sb up' nghĩa là gọi điện thoại cho ai, phù hợp ngữ cảnh gọi lại sau để báo số điện thoại."
      },
      {
        "id": "prepositions_q75",
        "num": 75,
        "stem": "What does \"www\" ________ for? Is it short for “world wide web?”",
        "options": {
          "A": "sit",
          "B": "stand",
          "C": "lie",
          "D": "point"
        },
        "answer": "B",
        "explanation": "Cụm động từ 'stand for' nghĩa là viết tắt cho, đại diện cho (từ viết tắt 'www')."
      },
      {
        "id": "prepositions_q76",
        "num": 76,
        "stem": "In the photograph, President Tang can be seen standing __________ Mr. Dev. (122 ETS2 2018)",
        "options": {
          "A": "from",
          "B": "reverse",
          "C": "opposite",
          "D": "distant"
        },
        "answer": "C",
        "explanation": "Cần giới từ chỉ vị trí trước danh từ 'Mr. Dev'. 'Opposite' (đối diện với) phù hợp về ngữ pháp và nghĩa; 'reverse' và 'distant' không phải giới từ, 'from' không hợp nghĩa."
      },
      {
        "id": "prepositions_q77",
        "num": 77,
        "stem": "The Valletta Visitor Center offers daily boat rides _____ the city’s historic waterfront. (105 ETS2 2018)",
        "options": {
          "A": "between",
          "B": "along",
          "C": "below",
          "D": "apart"
        },
        "answer": "B",
        "explanation": "Cần giới từ chỉ phương hướng/vị trí đi dọc theo bờ sông lịch sử ('historic waterfront'). 'Along' (dọc theo) phù hợp nhất với ngữ cảnh."
      },
      {
        "id": "prepositions_q78",
        "num": 78,
        "stem": "At Imprint Eyewear, most prescription eyeglasses can be made _______ two business days. (107 ETS4 2018)",
        "options": {
          "A": "since",
          "B": "to",
          "C": "against",
          "D": "within"
        },
        "answer": "D",
        "explanation": "Cấu trúc 'within + khoảng thời gian' mang nghĩa 'trong vòng' (trong vòng hai ngày làm việc), diễn tả giới hạn thời gian hoàn thành."
      },
      {
        "id": "prepositions_q79",
        "num": 79,
        "stem": "The song on Sophia Vestra’s new album are ____ the most innovative musical arrangements of her career. (118 ETS4 2018)",
        "options": {
          "A": "beside",
          "B": "over",
          "C": "among",
          "D": "upon"
        },
        "answer": "C",
        "explanation": "Cấu trúc 'be among + so sánh nhất + danh từ số nhiều' mang nghĩa 'nằm trong số những... nhất' (nằm trong số các bản phối sáng tạo nhất)."
      },
      {
        "id": "prepositions_q80",
        "num": 80,
        "stem": "The project meeting has been rescheduled ______ tomorrow because of the bad weather. (103 ETS5 2018)",
        "options": {
          "A": "in",
          "B": "by",
          "C": "out",
          "D": "for"
        },
        "answer": "D",
        "explanation": "Cụm động từ cố định 'reschedule something for + thời gian' mang nghĩa dời lịch cái gì sang một thời điểm mới."
      },
      {
        "id": "prepositions_q81",
        "num": 81,
        "stem": "Information _____ the artwork in the lobby is available at the reception desk. (105 ETS1 2019)",
        "options": {
          "A": "across",
          "B": "about",
          "C": "upon",
          "D": "expect"
        },
        "answer": "B",
        "explanation": "Cụm danh từ cố định 'information about + N' mang nghĩa 'thông tin về điều gì' (thông tin về tác phẩm nghệ thuật)."
      },
      {
        "id": "prepositions_q82",
        "num": 82,
        "stem": "The award-winning film Underwater Secrets promotes awareness ____ ocean pollution and its effects on our planet. (117 ETS1 2019)",
        "options": {
          "A": "of",
          "B": "to",
          "C": "from",
          "D": "with"
        },
        "answer": "A",
        "explanation": "Cụm danh từ cố định 'awareness of + N' mang nghĩa 'nhận thức về điều gì' (nhận thức về ô nhiễm đại dương)."
      },
      {
        "id": "prepositions_q83",
        "num": 83,
        "stem": "One of Grommer Consulting’s goals is to enhance the relationship _____ salespeople and their customers. (113 ETS1 2019)",
        "options": {
          "A": "inside",
          "B": "within",
          "C": "around",
          "D": "between"
        },
        "answer": "D",
        "explanation": "Cấu trúc 'between A and B' dùng để chỉ mối quan hệ giữa hai đối tượng ('salespeople and their customers')."
      },
      {
        "id": "prepositions_q84",
        "num": 84,
        "stem": "When leaving the auditorium, please exit _____ the doors on the lower level. (108 ETS2 2019)",
        "options": {
          "A": "except",
          "B": "inside",
          "C": "without",
          "D": "through"
        },
        "answer": "D",
        "explanation": "Cụm 'exit through + N' mang nghĩa đi ra qua lối nào (vui lòng đi ra qua các cánh cửa ở tầng dưới)."
      },
      {
        "id": "prepositions_q85",
        "num": 85,
        "stem": "To receive an electronic reminder when payment is due, set up an online account _____ Albright Bank. (108 ETS4 2019)",
        "options": {
          "A": "of",
          "B": "about",
          "C": "over",
          "D": "with"
        },
        "answer": "D",
        "explanation": "Cụm từ cố định 'set up/open an account with + tên ngân hàng/tổ chức' mang nghĩa thiết lập/mở tài khoản tại ngân hàng nào."
      },
      {
        "id": "prepositions_q86",
        "num": 86,
        "stem": "____ this time next year, Larkview Technology will have acquired two new subsidiaries. (111 ETS4 2019)",
        "options": {
          "A": "to",
          "B": "by",
          "C": "quite",
          "D": "begin"
        },
        "answer": "B",
        "explanation": "Động từ chính chia ở thì tương lai hoàn thành ('will have acquired'), đi với dấu hiệu thời gian 'By + mốc thời gian trong tương lai' (tính đến thời điểm này năm sau)."
      },
      {
        "id": "prepositions_q87",
        "num": 87,
        "stem": "Ms. Al-Omani will rely ____ team leaders to develop employee incentive programs.(114 ETS4 2019)",
        "options": {
          "A": "onto",
          "B": "into",
          "C": "within",
          "D": "upon"
        },
        "answer": "D",
        "explanation": "Cụm động từ cố định 'rely on / rely upon + N/sb' mang nghĩa dựa vào, tin cậy vào ai hoặc cái gì."
      },
      {
        "id": "prepositions_q88",
        "num": 88,
        "stem": "Ms. Tilinghast has received several awards ____ her innovative ideas. (101 ETS5 2019)",
        "options": {
          "A": "away",
          "B": "for",
          "C": "often",
          "D": "across"
        },
        "answer": "B",
        "explanation": "Cấu trúc 'receive an award for + N' mang nghĩa nhận giải thưởng vì/cho điều gì (những ý tưởng sáng tạo của cô ấy)."
      },
      {
        "id": "prepositions_q89",
        "num": 89,
        "stem": "Cabinetmaker Finley Orchestra uses the finest woodworking machines imported _____ Denmark. (109 ETS5 2019)",
        "options": {
          "A": "from",
          "B": "against",
          "C": "about",
          "D": "before"
        },
        "answer": "A",
        "explanation": "Cụm động từ 'import something from + nơi chốn/quốc gia' mang nghĩa nhập khẩu từ đâu (nhập khẩu từ Đan Mạch)."
      },
      {
        "id": "prepositions_q90",
        "num": 90,
        "stem": "Customers who submit payments ____ March 10 will be charged a late fee. (113 ETS5 2019)",
        "options": {
          "A": "after",
          "B": "behind",
          "C": "quite",
          "D": "almost"
        },
        "answer": "A",
        "explanation": "Cần giới từ chỉ thời gian hợp ngữ cảnh bị tính phí trễ hạn ('charged a late fee'): 'after March 10' (sau ngày 10 tháng 3)."
      },
      {
        "id": "prepositions_q91",
        "num": 91,
        "stem": "Any furniture purchased at Marty’s Superstore throughout February will be delivered ____ five business days. (126 ETS5 2019)",
        "options": {
          "A": "since",
          "B": "between",
          "C": "within",
          "D": "above"
        },
        "answer": "C",
        "explanation": "Cụm giới từ chỉ thời gian 'within + khoảng thời gian' mang nghĩa 'trong vòng'. Câu có nghĩa đồ nội thất mua trong tháng Hai sẽ được giao trong vòng năm ngày làm việc."
      },
      {
        "id": "prepositions_q92",
        "num": 92,
        "stem": "The prime minister greeted foreign diplomats ____ a luncheon today in London. (107 ETS6 2019)",
        "options": {
          "A": "at",
          "B": "had",
          "C": "such",
          "D": "where"
        },
        "answer": "A",
        "explanation": "Cần một giới từ đứng trước danh từ chỉ sự kiện 'a luncheon' (buổi tiệc trưa). Giới từ 'at' được dùng để chỉ tại một sự kiện (at a luncheon)."
      },
      {
        "id": "prepositions_q93",
        "num": 93,
        "stem": "The economic development summit will be held ____ the Xi’an Trade Tower on September 22. (108 ETS7 2019)",
        "options": {
          "A": "to",
          "B": "at",
          "C": "down",
          "D": "of"
        },
        "answer": "B",
        "explanation": "Cấu trúc 'be held at + địa điểm cụ thể' mang nghĩa 'được tổ chức tại'. 'the Xi’an Trade Tower' là một địa điểm/tòa nhà cụ thể nên chọn giới từ 'at'."
      },
      {
        "id": "prepositions_q96",
        "num": 96,
        "stem": "Videos of Korean pop music have become very popular ____ adolescents worldwide. (119 ETS7 2019)",
        "options": {
          "A": "including",
          "B": "whereas",
          "C": "among",
          "D": "within"
        },
        "answer": "C",
        "explanation": "Cụm tính từ 'popular among + danh từ số nhiều chỉ nhóm người' mang nghĩa 'phổ biến/được ưa chuộng trong nhóm...'. Câu nói video nhạc K-pop rất phổ biến trong giới thanh thiếu niên toàn cầu."
      },
      {
        "id": "prepositions_q97",
        "num": 97,
        "stem": "Franklin Bookstore will be moving next month ____ a larger location on Queen Street. (104 ETS8 2019)",
        "options": {
          "A": "to",
          "B": "at",
          "C": "out",
          "D": "over"
        },
        "answer": "A",
        "explanation": "Động từ 'move' đi với giới từ 'to' (move to + địa điểm mới) mang nghĩa 'chuyển đến'. Ở đây là chuyển đến một địa điểm lớn hơn trên đường Queen."
      },
      {
        "id": "prepositions_q98",
        "num": 98,
        "stem": "North River Linens promises next-day shipping ____ Asia. (118 ETS8 2019)",
        "options": {
          "A": "without",
          "B": "between",
          "C": "throughout",
          "D": "along"
        },
        "answer": "C",
        "explanation": "Giới từ 'throughout + khu vực/địa danh' mang nghĩa 'trên khắp'. Câu mang nghĩa công ty cam kết giao hàng vào ngày hôm sau trên khắp châu Á."
      }
    ]
  },
  {
    "id": "passive_voice",
    "title": "Câu chủ động – Bị động",
    "desc": "Cấu trúc be + V3/ed, bị động đặc biệt",
    "icon": "🔄",
    "count": 78,
    "questions": [
      {
        "id": "passive_voice_q1",
        "num": 1,
        "stem": "Gold _____ in California in nineteenth century.",
        "options": {
          "A": "was discovered",
          "B": "has been discovered",
          "C": "was discover",
          "D": "they discovered"
        },
        "answer": "A",
        "explanation": "Chủ ngữ 'Gold' chịu tác động của hành động khám phá nên dùng thể bị động; mốc thời gian 'in nineteenth century' dùng thì quá khứ đơn bị động (was/were + V3/ed)."
      },
      {
        "id": "passive_voice_q2",
        "num": 2,
        "stem": "____ that military spending is extremely high.",
        "options": {
          "A": "we are felt",
          "B": "it feels",
          "C": "it is felt",
          "D": "we feel that it is"
        },
        "answer": "C",
        "explanation": "Cấu trúc câu bị động khách quan với động từ tường thuật/quan điểm: It + is + V3/ed (felt) + that + mệnh đề."
      },
      {
        "id": "passive_voice_q3",
        "num": 3,
        "stem": "All planes _______ before departure.",
        "options": {
          "A": "will checked",
          "B": "will has checked",
          "C": "will be checked",
          "D": "will been checked"
        },
        "answer": "C",
        "explanation": "Chủ ngữ 'All planes' chịu tác động của hành động kiểm tra nên dùng bị động thì tương lai đơn: will + be + V3/ed."
      },
      {
        "id": "passive_voice_q4",
        "num": 4,
        "stem": "I wanted _________by the head of the company, but it was impossible.",
        "options": {
          "A": "to see",
          "B": "to be seen",
          "C": "seeing",
          "D": "being to see"
        },
        "answer": "B",
        "explanation": "Cấu trúc 'want + to V', kết hợp với cụm 'by the head of the company' biểu thị nghĩa bị động nên dùng nguyên mẫu bị động: want + to be + V3/ed."
      },
      {
        "id": "passive_voice_q5",
        "num": 5,
        "stem": "Katherine ________ at Bob’s house every night this week.",
        "options": {
          "A": "has been eaten",
          "B": "has eating",
          "C": "is being eating",
          "D": "has been eating"
        },
        "answer": "D",
        "explanation": "Chủ ngữ 'Katherine' tự thực hiện hành động ăn nên dùng câu chủ động; cụm 'every night this week' diễn tả hành động lặp lại liên tục đến hiện tại nên dùng thì hiện tại hoàn thành tiếp diễn (has been eating)."
      },
      {
        "id": "passive_voice_q6",
        "num": 6,
        "stem": ".“ Those eggs of different colors are very artistic.” “Yes, they_______ in Russia”",
        "options": {
          "A": "were painted ​",
          "B": "were paint ​",
          "C": "were painting ​",
          "D": "painted"
        },
        "answer": "A",
        "explanation": "Chủ ngữ 'they' (những quả trứng) chịu tác động của hành động vẽ nên dùng bị động thì quá khứ đơn: were + V3/ed (were painted)."
      },
      {
        "id": "passive_voice_q7",
        "num": 7,
        "stem": "“David is in prison for smoking drugs” “He _____ that it was against the law.”",
        "options": {
          "A": "is telling​",
          "B": "was told​",
          "C": "told ​",
          "D": "tells"
        },
        "answer": "B",
        "explanation": "Ngữ cảnh cho thấy David đã được cảnh báo/nhắc nhở trước đó (chịu tác động) và vế sau ở thì quá khứ đơn ('was'), nên dùng quá khứ đơn bị động: was told."
      },
      {
        "id": "passive_voice_q8",
        "num": 8,
        "stem": "“The maintenance people didn’t remove the chairs from ballroom” “ Don’t the worry. They_______ them before the dance begins”",
        "options": {
          "A": "will have been moved​",
          "B": "will have moved",
          "C": "were moved​",
          "D": "moved"
        },
        "answer": "B",
        "explanation": "Sau chỗ trống có tân ngữ 'them' (những chiếc ghế) nên dùng câu chủ động; cụm 'before + hiện tại đơn' diễn tả hành động hoàn tất trước một mốc tương lai nên dùng tương lai hoàn thành chủ động (will have moved)."
      },
      {
        "id": "passive_voice_q9",
        "num": 9,
        "stem": "They_______ time and money doing such a thing.",
        "options": {
          "A": "were advised not to waste",
          "B": "were advised not to be wasted",
          "C": "were advising not to waste",
          "D": "were advising not to be wasted"
        },
        "answer": "A",
        "explanation": "Chủ ngữ 'They' được khuyên nên dùng bị động 'were advised', còn động từ 'waste' có tân ngữ 'time and money' phía sau nên giữ dạng chủ động 'not to waste' (be advised not to V)."
      },
      {
        "id": "passive_voice_q10",
        "num": 10,
        "stem": "These students _______so much that they feel very tired and bored.",
        "options": {
          "A": "are made to study  ​",
          "B": "are made study",
          "C": "are making to study  ​",
          "D": "are made to be studied"
        },
        "answer": "A",
        "explanation": "Cấu trúc bị động của động từ sai khiến 'make sb + V (nguyên mẫu)' chuyển sang bị động là 'be made + to V' (are made to study)."
      },
      {
        "id": "passive_voice_q11",
        "num": 11,
        "stem": "I_______ in the lounge for ten minutes.",
        "options": {
          "A": "was told waiting          ​",
          "B": "was told to wait",
          "C": "was telling to be waited",
          "D": "was told to be waited"
        },
        "answer": "B",
        "explanation": "Cấu trúc bị động của 'tell sb to V' là 'be told to V'; chủ ngữ 'I' tự thực hiện hành động chờ đợi nên dùng nguyên mẫu chủ động 'to wait'."
      },
      {
        "id": "passive_voice_q12",
        "num": 12,
        "stem": "The students _______to be at school at 8 am",
        "options": {
          "A": "tell    ​",
          "B": "told  ​",
          "C": "have told ​",
          "D": "were told"
        },
        "answer": "D",
        "explanation": "Chủ ngữ 'The students' nhận yêu cầu phải có mặt ở trường lúc 8 giờ nên dùng câu bị động theo cấu trúc 'be told + to V' (were told)."
      },
      {
        "id": "passive_voice_q13",
        "num": 13,
        "stem": "Our children _______to school by bus every morning.",
        "options": {
          "A": "take     ​",
          "B": "are taken  ​",
          "C": "have taken​",
          "D": "are taking"
        },
        "answer": "B",
        "explanation": "Chủ ngữ 'Our children' được đưa đến trường (bị động của 'take sb to...'); trạng từ 'every morning' chỉ thói quen nên dùng thì hiện tại đơn bị động (are taken)."
      },
      {
        "id": "passive_voice_q14",
        "num": 14,
        "stem": "Bicycles _______in the driveway.",
        "options": {
          "A": "must not leave      ​",
          "B": "must not be leaving",
          "C": "must not be left     ​",
          "D": "must not have left"
        },
        "answer": "C",
        "explanation": "Chủ ngữ 'Bicycles' là vật chịu tác động nên dùng bị động với động từ khuyết thiếu: must not + be + V3/ed (must not be left)."
      },
      {
        "id": "passive_voice_q15",
        "num": 15,
        "stem": "Beethoven’s Fifth Symphony _______next weekend.",
        "options": {
          "A": "is going to be performed",
          "B": "has been performed",
          "C": "will be performing       ​",
          "D": "will have performed"
        },
        "answer": "A",
        "explanation": "Chủ ngữ 'Beethoven’s Fifth Symphony' chịu tác động của hành động trình diễn và có mốc tương lai 'next weekend', nên dùng bị động thì tương lai gần: is going to be performed."
      },
      {
        "id": "passive_voice_q16",
        "num": 16,
        "stem": "Reagan _______an actor years ago.",
        "options": {
          "A": "is said to be​",
          "B": "was said being​",
          "C": "was said have been     ​",
          "D": "is said to have been"
        },
        "answer": "D",
        "explanation": "Cấu trúc bị động kép với động từ tường thuật: S + is said + to have + V3/ed để diễn tả hành động đã xảy ra trong quá khứ ('years ago') trước thời điểm nói ở hiện tại."
      },
      {
        "id": "passive_voice_q17",
        "num": 17,
        "stem": "I hate _______ personal questions by nearly acquainted friends.",
        "options": {
          "A": "to be asking ​",
          "B": "to be asked   ​",
          "C": "being asking  ​",
          "D": "of asking"
        },
        "answer": "B",
        "explanation": "Cấu trúc 'hate + to V' ở dạng bị động là 'hate to be + V3/ed' (ghét bị hỏi những câu hỏi cá nhân), có tác nhân 'by nearly acquainted friends'."
      },
      {
        "id": "passive_voice_q18",
        "num": 18,
        "stem": "All bottles _______ before transportation.",
        "options": {
          "A": "frozen    ​",
          "B": "were froze ​",
          "C": "were frozen​",
          "D": "are froze"
        },
        "answer": "C",
        "explanation": "Câu bị động thì quá khứ đơn: 'were + V3/ed'. Quá khứ phân từ (V3) của 'freeze' là 'frozen' (freeze – froze – frozen)."
      },
      {
        "id": "passive_voice_q19",
        "num": 19,
        "stem": "_______yet?",
        "options": {
          "A": "Have the letters been typed",
          "B": "Have been the letters typed",
          "C": "Have  the letters  typed",
          "D": "Had the letters typed"
        },
        "answer": "A",
        "explanation": "Trạng từ 'yet' là dấu hiệu thì hiện tại hoàn thành. Cấu trúc câu hỏi bị động: Have/Has + S + been + V3/ed?"
      },
      {
        "id": "passive_voice_q20",
        "num": 20,
        "stem": "English has become a second language in countries  like India, Nigeria or Singapore where_______ for administration, broadcasting and education.",
        "options": {
          "A": "is used    ​",
          "B": "it is used",
          "C": "used      ​",
          "D": "being used"
        },
        "answer": "B",
        "explanation": "Sau trạng từ quan hệ 'where' cần một mệnh đề đầy đủ (S + V). Chủ ngữ 'it' thay cho 'English' kết hợp với bị động hiện tại đơn 'is used'."
      },
      {
        "id": "passive_voice_q21",
        "num": 21,
        "stem": "The telephone _______by Alexander Graham Bell.",
        "options": {
          "A": "is invented  ​",
          "B": "is inventing  ​",
          "C": "invented   ​",
          "D": "was invented"
        },
        "answer": "D",
        "explanation": "Sự việc phát minh đã xảy ra và kết thúc trong quá khứ, đi với 'by Alexander Graham Bell' nên chia bị động thì quá khứ đơn: 'was invented'."
      },
      {
        "id": "passive_voice_q22",
        "num": 22,
        "stem": "Lots of houses _______by the earthquake.",
        "options": {
          "A": "are destroying​",
          "B": "destroyed",
          "C": "were destroyed​",
          "D": "were destroying"
        },
        "answer": "C",
        "explanation": "Chủ ngữ 'Lots of houses' (số nhiều) chịu tác động bởi 'by the earthquake' nên dùng thể bị động quá khứ đơn: 'were destroyed'."
      },
      {
        "id": "passive_voice_q23",
        "num": 23,
        "stem": "In the Us the first stage of compulsory education _______ as elementary education .",
        "options": {
          "A": "to be generally known ​",
          "B": "is generally known",
          "C": "generally known         ​",
          "D": "is generally knowing"
        },
        "answer": "B",
        "explanation": "Câu thiếu động từ chính chia theo chủ ngữ số ít 'the first stage'. Diễn tả sự thật chung và mang nghĩa bị động ('được biết đến như là') nên dùng 'is generally known'."
      },
      {
        "id": "passive_voice_q24",
        "num": 24,
        "stem": "Education _______ to be the most important element to develop a country.",
        "options": {
          "A": "often be considered",
          "B": "can be often considered",
          "C": "can often considered",
          "D": "can often be considered"
        },
        "answer": "D",
        "explanation": "Cấu trúc bị động với động từ khuyết thiếu: modal + trạng từ tần suất + be + V3/ed -> 'can often be considered'."
      },
      {
        "id": "passive_voice_q25",
        "num": 25,
        "stem": "_______students required to wear uniforms at all times?",
        "options": {
          "A": "Are    ​",
          "B": "Do ​",
          "C": "Did     ​",
          "D": "Will"
        },
        "answer": "A",
        "explanation": "Câu hỏi bị động thì hiện tại đơn với phân từ hai 'required' và chủ ngữ số nhiều 'students': Are + S + V3/ed?"
      },
      {
        "id": "passive_voice_q26",
        "num": 26,
        "stem": "_______to you yet?",
        "options": {
          "A": "Are the book been giving back",
          "B": "Was the book been given back",
          "C": "Has been the book given back",
          "D": "Has the book been given back"
        },
        "answer": "D",
        "explanation": "Dấu hiệu 'yet' dùng thì hiện tại hoàn thành; chủ ngữ số ít 'the book' ở dạng câu hỏi bị động: Has + S + been + V3/ed? -> 'Has the book been given back'."
      },
      {
        "id": "passive_voice_q27",
        "num": 27,
        "stem": "What he has done to me_______.",
        "options": {
          "A": "cannot forgive",
          "B": "cannot be forgiven​",
          "C": "cannot forgive ​ d cannot be forgiving"
        },
        "answer": "B",
        "explanation": "Chủ ngữ là mệnh đề danh từ 'What he has done to me' (những gì anh ấy đã làm với tôi) mang nghĩa bị động (không thể được tha thứ) nên dùng 'cannot be forgiven'."
      },
      {
        "id": "passive_voice_q28",
        "num": 28,
        "stem": "The keys _______somewhere.",
        "options": {
          "A": "must have been leaving",
          "B": "must have left",
          "C": "must be leaving              ​",
          "D": "must have been left"
        },
        "answer": "D",
        "explanation": "Suy đoán chắc chắn về một sự việc bị động trong quá khứ (những chiếc chìa khóa hẳn là đã bị bỏ quên): must + have + been + V3/ed -> 'must have been left'."
      },
      {
        "id": "passive_voice_q29",
        "num": 29,
        "stem": "Japanese _______ at the meeting.",
        "options": {
          "A": "will speak  ​",
          "B": "will spoken ​",
          "C": "will be spoken​",
          "D": "will be speaking"
        },
        "answer": "C",
        "explanation": "Chủ ngữ 'Japanese' (tiếng Nhật) mang nghĩa bị động (sẽ được nói tại cuộc họp), dùng bị động thì tương lai đơn: 'will be + V3/ed' -> 'will be spoken'."
      },
      {
        "id": "passive_voice_q30",
        "num": 30,
        "stem": "Although he tried his best, he could not make his voice_______",
        "options": {
          "A": "hear       ​",
          "B": "to hear     ​",
          "C": "hearing    ​",
          "D": "heard"
        },
        "answer": "D",
        "explanation": "Cấu trúc 'make + O + V3/ed' mang nghĩa bị động (khiến cho giọng nói của mình được nghe thấy -> 'make his voice heard')."
      },
      {
        "id": "passive_voice_q31",
        "num": 31,
        "stem": "_______in that company?",
        "options": {
          "A": "Do shoes make  ​",
          "B": "Are shoes be made",
          "C": "Shoes are made​",
          "D": "Are shoes made"
        },
        "answer": "D",
        "explanation": "Câu nghi vấn ở thể bị động thì hiện tại đơn (giày được sản xuất ở công ty đó). Cấu trúc: Am/Is/Are + S + V3/ed? nên chọn 'Are shoes made'."
      },
      {
        "id": "passive_voice_q32",
        "num": 32,
        "stem": "Portuguese _______ as an official language in this city for age.",
        "options": {
          "A": "has  been spoken​",
          "B": "has been spoken ​",
          "C": "has spoken   ​",
          "D": "had spoken"
        },
        "answer": "B",
        "explanation": "Chủ ngữ 'Portuguese' (tiếng Bồ Đào Nha) cần chia bị động và có dấu hiệu 'for age(s)' (hiện tại hoàn thành) nên dùng cấu trúc 'has been + V3/ed' -> 'has been spoken' (lưu ý đáp án A cũng trùng nội dung do lỗi đánh máy dư khoảng trắng ở đề gốc)."
      },
      {
        "id": "passive_voice_q33",
        "num": 33,
        "stem": "More than ten victims _______missing in the storm last week",
        "options": {
          "A": "are reported to be",
          "B": "are reported to have been",
          "C": "are reporting to have been",
          "D": "are reporting to be"
        },
        "answer": "B",
        "explanation": "Câu bị động kép với động từ tường thuật 'report'. Việc báo cáo ở hiện tại ('are reported'), còn việc mất tích xảy ra trước đó trong quá khứ ('last week') nên dùng 'to have + V3/ed' -> 'are reported to have been'."
      },
      {
        "id": "passive_voice_q34",
        "num": 34,
        "stem": "_______by your father?",
        "options": {
          "A": "Did that book write",
          "B": "Did that book written",
          "C": "Was that book written",
          "D": "Was that book be writing"
        },
        "answer": "C",
        "explanation": "Câu nghi vấn bị động thì quá khứ đơn (có 'by your father'). Cấu trúc: Was/Were + S + V3/ed? -> 'Was that book written'."
      },
      {
        "id": "passive_voice_q35",
        "num": 35,
        "stem": "This car_______.",
        "options": {
          "A": "was manufactured in Japan by Toyota last year",
          "B": "was manufactured by Toyota last year in Japan",
          "C": "was manufactured last year in Japan by Toyota",
          "D": "last year was manufactured  by Toyota in Japan"
        },
        "answer": "A",
        "explanation": "Trong câu bị động, trật tự trạng từ chuẩn là: Nơi chốn (in Japan) + by tác nhân (by Toyota) + Thời gian (last year)."
      },
      {
        "id": "passive_voice_q36",
        "num": 36,
        "stem": "Why _______ on time?",
        "options": {
          "A": "don’t the exercises finish",
          "B": "weren’t the exercises be finished",
          "C": "aren’t the exercises being finished",
          "D": "aren’t the exercises be finished"
        },
        "answer": "C",
        "explanation": "Chủ ngữ 'the exercises' mang nghĩa bị động (được hoàn thành). Chỉ phương án C đúng cấu trúc nghi vấn phủ định bị động thì hiện tại tiếp diễn: Aren't + S + being + V3/ed? (A chủ động, B và D sai ngữ pháp vì thừa 'be')."
      },
      {
        "id": "passive_voice_q37",
        "num": 37,
        "stem": "When _______?",
        "options": {
          "A": "were computers used first",
          "B": "were computers first used",
          "C": "did computers first use",
          "D": "are computers first using"
        },
        "answer": "B",
        "explanation": "Câu hỏi bị động thì quá khứ đơn ('Máy tính được sử dụng lần đầu khi nào?'). Trạng từ 'first' đặt trước phân từ hai 'used' -> 'were computers first used'."
      },
      {
        "id": "passive_voice_q38",
        "num": 38,
        "stem": "That machine is useless. It _______ not been used for a long time.",
        "options": {
          "A": "is   ​",
          "B": "was  ​",
          "C": "did      ​",
          "D": "has"
        },
        "answer": "D",
        "explanation": "Phía sau có 'not been used' và dấu hiệu 'for a long time' -> thì hiện tại hoàn thành bị động (has/have + not + been + V3/ed). Chủ ngữ 'It' số ít nên chọn 'has'."
      },
      {
        "id": "passive_voice_q39",
        "num": 39,
        "stem": "Everything that _______ remained a secret",
        "options": {
          "A": "overheard            ​",
          "B": "had been overheard",
          "C": "had overheard     ​",
          "D": "was overhearing"
        },
        "answer": "B",
        "explanation": "'Everything' là vật nên cần thể bị động (bị nghe lỏm). Hành động xảy ra trước 'remained' (quá khứ đơn) nên chia thì quá khứ hoàn thành bị động: 'had been overheard'."
      },
      {
        "id": "passive_voice_q40",
        "num": 40,
        "stem": "The refreshments _______ by Karen.",
        "options": {
          "A": "are going to be prepared",
          "B": "are going to prepare",
          "C": "are preparing             ​",
          "D": "are to prepare"
        },
        "answer": "A",
        "explanation": "Có 'by Karen' và chủ ngữ chỉ vật 'The refreshments' nên cần động từ thể bị động. Chỉ A đúng cấu trúc bị động thì tương lai gần: 'be going to be + V3/ed'."
      },
      {
        "id": "passive_voice_q41",
        "num": 41,
        "stem": "_______ by the police.",
        "options": {
          "A": "The stealing car has just been found",
          "B": "The stolen car has just been found",
          "C": "The stealing car has just found",
          "D": "The stolen car has just found"
        },
        "answer": "B",
        "explanation": "Chiếc xe 'bị đánh cắp' mang nghĩa bị động nên dùng quá khứ phân từ 'stolen' bổ nghĩa cho 'car'; có 'by the police' nên động từ chính chia bị động hiện tại hoàn thành: 'has just been found'."
      },
      {
        "id": "passive_voice_q42",
        "num": 42,
        "stem": "It _______it is parents responsibility to take good care of their children.",
        "options": {
          "A": "commonly says that       ​",
          "B": "commonly to be said that",
          "C": "is commonly said that  ​",
          "D": "is commonly saying"
        },
        "answer": "C",
        "explanation": "Cấu trúc bị động khách quan với chủ ngữ giả 'It': It + is + (adv) + V3/ed + that + mệnh đề -> 'is commonly said that' (người ta thường nói rằng)."
      },
      {
        "id": "passive_voice_q43",
        "num": 43,
        "stem": "John _______ a respectful and obedient student.",
        "options": {
          "A": "said to be     ​",
          "B": "is Said",
          "C": "is said being  ​",
          "D": "is said to be"
        },
        "answer": "D",
        "explanation": "Cấu trúc bị động với động từ tường thuật: S + be + said + to V (được cho là/được nói là) -> 'is said to be'."
      },
      {
        "id": "passive_voice_q44",
        "num": 44,
        "stem": "Mr. Vieira is _____ with introducing several changes that have helped Stacatti Stationery increase business. (121 ETS2 2018)",
        "options": {
          "A": "credited",
          "B": "scored",
          "C": "agreed",
          "D": "relied"
        },
        "answer": "A",
        "explanation": "Cấu trúc bị động cố định 'be credited with + V-ing/N' mang nghĩa 'được ghi nhận công lao vì đã làm gì', phù hợp ngữ cảnh và giới từ 'with'."
      },
      {
        "id": "passive_voice_q45",
        "num": 45,
        "stem": "A reception will be held to introduce the newly __________ director of marketing to the employees of Kaulana Industries. (126 ETS3 2018)",
        "options": {
          "A": "appoint",
          "B": "appoints",
          "C": "appointed",
          "D": "appointing"
        },
        "answer": "C",
        "explanation": "Giữa trạng từ 'newly' và danh từ 'director' cần một phân từ đóng vai trò tính từ. Vị giám đốc 'mới được bổ nhiệm' mang nghĩa bị động nên dùng quá khứ phân từ 'appointed'."
      },
      {
        "id": "passive_voice_q46",
        "num": 46,
        "stem": "To fill two vacant positions on its benefits committee. Adidion Labs ________ employees who are ready for a challenge. (127 ETS3 2018)",
        "options": {
          "A": "seeking",
          "B": "is seeking",
          "C": "are sought",
          "D": "have been sought"
        },
        "answer": "B",
        "explanation": "Chủ ngữ là tên công ty số ít (Adidion Labs) và có tân ngữ phía sau (employees) nên cần động từ chính chia số ít ở thể chủ động -> 'is seeking'."
      },
      {
        "id": "passive_voice_q47",
        "num": 47,
        "stem": "Construction of the Yukimura Building ______ because off modifications in the architectural plans. (112 ETS4 2018)",
        "options": {
          "A": "postpones",
          "B": "has been postponed",
          "C": "will have postponed",
          "D": "is postponing"
        },
        "answer": "B",
        "explanation": "Chủ ngữ chỉ sự việc (Construction of the Yukimura Building) và không có tân ngữ phía sau; xét nghĩa 'việc xây dựng đã bị hoãn lại' nên dùng thể bị động -> 'has been postponed'."
      },
      {
        "id": "passive_voice_q48",
        "num": 48,
        "stem": "After the ____ upgrades have been implemented, the productivity process should run more efficiently. (121 ETS2 2018)",
        "options": {
          "A": "suggest",
          "B": "suggested",
          "C": "suggesting",
          "D": "suggests"
        },
        "answer": "B",
        "explanation": "Cần một phân từ đóng vai trò tính từ bổ nghĩa cho danh từ 'upgrades'. Mang nghĩa bị động ('các bản nâng cấp được đề xuất') nên dùng quá khứ phân từ V-ed -> 'suggested'."
      },
      {
        "id": "passive_voice_q49",
        "num": 49,
        "stem": "The product development team of Herbeve Cosmetics is _____ a package redesign to try to increase sales. (119 ETS5 2018)",
        "options": {
          "A": "considered",
          "B": "considering",
          "C": "considers",
          "D": "consider"
        },
        "answer": "B",
        "explanation": "Sau động từ 'is' có tân ngữ trực tiếp (a package redesign) và chủ ngữ chỉ người/nhóm thực hiện hành động ('đang cân nhắc việc thiết kế lại bao bì'), nên dùng hiện tại tiếp diễn thể chủ động -> 'considering'."
      },
      {
        "id": "passive_voice_q50",
        "num": 50,
        "stem": "Payments made to your account after the invoice was generated are not ______ in the balance shown. (122 ETS5 2018)",
        "options": {
          "A": "reflected",
          "B": "reflects",
          "C": "reflecting",
          "D": "reflect"
        },
        "answer": "A",
        "explanation": "Chủ ngữ là 'Payments', phía sau là cụm giới từ (không có tân ngữ) và mang nghĩa bị động ('không được phản ánh trong số dư hiển thị') nên dùng 'are not + V3/ed' -> 'reflected'."
      },
      {
        "id": "passive_voice_q51",
        "num": 51,
        "stem": "Belden Hospital’s chief of staff meets regularly with the staff to ensure that procedures __________ correctly. (120 ETS1 2019)",
        "options": {
          "A": "to be performed",
          "B": "would have performed",
          "C": "had been performed",
          "D": "are being performed"
        },
        "answer": "D",
        "explanation": "Mệnh đề sau 'that' cần động từ chia thì ở thể bị động cho chủ ngữ 'procedures' ('các quy trình đang được thực hiện đúng cách'). Mệnh đề chính chia hiện tại đơn ('meets') nên chọn thì hiện tại tiếp diễn bị động -> 'are being performed'."
      },
      {
        "id": "passive_voice_q52",
        "num": 52,
        "stem": "Ms. Huyn is reviewing the training manual to see if updates ___________. (107 ETS2 2019)",
        "options": {
          "A": "have need",
          "B": "needing",
          "C": "are needed",
          "D": "to be needed"
        },
        "answer": "C",
        "explanation": "Mệnh đề sau 'if' thiếu động từ chính chia thì cho chủ ngữ số nhiều 'updates'. Mang nghĩa bị động ('liệu các bản cập nhật có cần thiết hay không') nên chọn -> 'are needed'."
      },
      {
        "id": "passive_voice_q53",
        "num": 53,
        "stem": "A long-awaited Weka 2 XG digital camera will finally be ______ at a product exhibition on August 16. (129 ETS2 2019)",
        "options": {
          "A": "reduced",
          "B": "unveiled",
          "C": "consulted",
          "D": "resolved"
        },
        "answer": "B",
        "explanation": "Cấu trúc bị động tương lai đơn (will be + V3/ed). Xét ngữ cảnh: chiếc máy ảnh kỹ thuật số được chờ đợi từ lâu sẽ được 'ra mắt' tại buổi triển lãm sản phẩm -> 'unveiled'."
      },
      {
        "id": "passive_voice_q54",
        "num": 54,
        "stem": "Northeast Community Finance _____ an online system in order to shorten service lines at branch locations. (130 ETS2 2019)",
        "options": {
          "A": "has implemented",
          "B": "to be implementing",
          "C": "to have been implementing",
          "D": "is implemented"
        },
        "answer": "A",
        "explanation": "Chủ ngữ số ít (Northeast Community Finance) và có tân ngữ phía sau (an online system) nên cần động từ chính chia thì ở thể chủ động -> 'has implemented' (loại B, C vì dạng to-V và D vì bị động)."
      },
      {
        "id": "passive_voice_q55",
        "num": 55,
        "stem": "A special sale on stationery ______ on the Write Things website yesterday. (110 ETS3 2019)",
        "options": {
          "A": "was announced",
          "B": "announced",
          "C": "was announcing",
          "D": "to announce"
        },
        "answer": "A",
        "explanation": "Chủ ngữ chỉ sự việc (A special sale on stationery), không có tân ngữ phía sau và có trạng từ chỉ quá khứ 'yesterday' nên chia bị động quá khứ đơn ('đã được thông báo') -> 'was announced'."
      },
      {
        "id": "passive_voice_q56",
        "num": 56,
        "stem": "All identifying information has been _______ from this letter of complaint so that it can be used for training purposes. (110 ETS4 2019)",
        "options": {
          "A": "produced",
          "B": "extended",
          "C": "removed",
          "D": "resolved"
        },
        "answer": "C",
        "explanation": "Cấu trúc bị động 'has been + V3/ed + from'. Xét ngữ cảnh: 'mọi thông tin nhận dạng đã được xóa bỏ khỏi bức thư khiếu nại' -> 'removed' (remove sth from sth)."
      },
      {
        "id": "passive_voice_q57",
        "num": 57,
        "stem": "The lease with The Pawlicki Group ________ if modifications to the existing offices are made. (129 ETS4 2019)",
        "options": {
          "A": "had continued",
          "B": "will be continued",
          "C": "was continuing",
          "D": "has been continuing"
        },
        "answer": "B",
        "explanation": "Câu điều kiện loại 1 có mệnh đề 'if' ở hiện tại đơn ('are made') nên mệnh đề chính dùng tương lai đơn. Chủ ngữ 'The lease' không có tân ngữ và mang nghĩa bị động ('sẽ được tiếp tục') -> 'will be continued'."
      },
      {
        "id": "passive_voice_q58",
        "num": 58,
        "stem": "The conference fee ____ admittance to more than twenty workshops and seminars. (108 ETS5 2019)",
        "options": {
          "A": "include",
          "B": "includes",
          "C": "is included",
          "D": "including"
        },
        "answer": "B",
        "explanation": "Chủ ngữ số ít (The conference fee) và có tân ngữ trực tiếp phía sau (admittance...) nên cần động từ chính chia số ít ở thể chủ động -> 'includes'."
      },
      {
        "id": "passive_voice_q59",
        "num": 59,
        "stem": "The poll shows how often company executives make financial decisions that are ___________ by employee opinions. (114 ETS5 2019)",
        "options": {
          "A": "acted",
          "B": "trained",
          "C": "reminded",
          "D": "influenced"
        },
        "answer": "D",
        "explanation": "Cấu trúc bị động 'are + V3/ed + by'. Xét ngữ cảnh: 'các quyết định tài chính bị ảnh hưởng bởi ý kiến của nhân viên' -> 'influenced'."
      },
      {
        "id": "passive_voice_q60",
        "num": 60,
        "stem": "Toronto is one of three cities being _____ as the host for the next convention of the Global Society of accountants. (130 ETS5 2019)",
        "options": {
          "A": "found",
          "B": "categorized",
          "C": "known",
          "D": "considered"
        },
        "answer": "D",
        "explanation": "Rút gọn mệnh đề quan hệ dạng bị động tiếp diễn 'being + V3/ed + as'. Xét ngữ cảnh: 'Toronto là một trong ba thành phố đang được cân nhắc làm nơi đăng cai' -> 'considered' (be considered as)."
      },
      {
        "id": "passive_voice_q61",
        "num": 61,
        "stem": "Before the computers leave the factory, they are _____ thoroughly to ensure they have no deflects. (110 ETS6 2019)",
        "options": {
          "A": "selected",
          "B": "inspected",
          "C": "attached",
          "D": "managed"
        },
        "answer": "B",
        "explanation": "Cấu trúc bị động (are + V-ed) kết hợp ngữ cảnh: máy tính được 'kiểm tra' (inspected) kỹ lưỡng để đảm bảo không có lỗi trước khi rời nhà máy."
      },
      {
        "id": "passive_voice_q62",
        "num": 62,
        "stem": "Written permission must _______ before using Thavor Corporation’s Logo. (114 ETS6 2019)",
        "options": {
          "A": "to obtain",
          "B": "obtained",
          "C": "be obtained",
          "D": "obtaining"
        },
        "answer": "C",
        "explanation": "Sau động từ khuyết thiếu 'must' cần động từ nguyên thể; chủ ngữ 'Written permission' là vật chịu tác động nên dùng thể bị động: must + be + V3/V-ed (be obtained)."
      },
      {
        "id": "passive_voice_q63",
        "num": 63,
        "stem": "Sewerd Furnishings is closing some of its showrooms because customers are ____________ ordering furniture online. (120 ETS6 2019)",
        "options": {
          "A": "increasing",
          "B": "increase",
          "C": "increasingly",
          "D": "increased"
        },
        "answer": "C",
        "explanation": "Mệnh đề đã có động từ chia thì hiện tại tiếp diễn (are ordering), cần trạng từ 'increasingly' (ngày càng) đứng giữa trợ động từ và V-ing để bổ nghĩa cho động từ."
      },
      {
        "id": "passive_voice_q64",
        "num": 64,
        "stem": "Your order cannot ______ until we have received full payment. (130 ETS6 2019)",
        "options": {
          "A": "to process",
          "B": "be processed",
          "C": "being processed",
          "D": "has processed"
        },
        "answer": "B",
        "explanation": "Sau động từ khuyết thiếu 'cannot' cần động từ nguyên thể; chủ ngữ 'Your order' là vật chịu tác động nên dùng thể bị động: cannot + be + V3/V-ed (be processed)."
      },
      {
        "id": "passive_voice_q65",
        "num": 65,
        "stem": "The location of next month’s online gaming forum is yet to be _______. (102 ETS7 2019)",
        "options": {
          "A": "concluded",
          "B": "prevented",
          "C": "invited",
          "D": "decided"
        },
        "answer": "D",
        "explanation": "Cấu trúc bị động 'is yet to be + V3/V-ed' kết hợp ngữ nghĩa: địa điểm tổ chức diễn đàn vẫn chưa được 'quyết định' (decided)."
      },
      {
        "id": "passive_voice_q66",
        "num": 66,
        "stem": "Mr. Hodges ____ that volunteers sign up to assist with the Hannock River cleanup by Friday. (105 ETS7 2019)",
        "options": {
          "A": "requesting",
          "B": "to be requested",
          "C": "requests",
          "D": "to request"
        },
        "answer": "C",
        "explanation": "Câu thiếu động từ chính chia thì; chủ ngữ số ít 'Mr. Hodges' thực hiện hành động chủ động và có mệnh đề tân ngữ 'that...' theo sau nên chọn 'requests'."
      },
      {
        "id": "passive_voice_q67",
        "num": 67,
        "stem": "Neeson Pro Garment are made of a synthetic blend that is _____ to staining. (130 ETS10 2019)",
        "options": {
          "A": "exposed",
          "B": "automatic",
          "C": "limited",
          "D": "vulnerable"
        },
        "answer": "D",
        "explanation": "Cụm tính từ 'be vulnerable to + N/V-ing' (dễ bị ảnh hưởng/tổn hại bởi), phù hợp ngữ cảnh chất liệu vải dễ bị bám bẩn/ố màu (vulnerable to staining)."
      },
      {
        "id": "passive_voice_q68",
        "num": 68,
        "stem": "Proceeds from the sale of Delcrest Corporation were equally _____ among the founder’s three daughters. (118 ETS1 2020)",
        "options": {
          "A": "divisions",
          "B": "dividing",
          "C": "divide",
          "D": "divided"
        },
        "answer": "D",
        "explanation": "Cấu trúc bị động quá khứ đơn (were + trạng từ + V3/V-ed); chủ ngữ 'Proceeds' (tiền thu được) được chia đều nên chọn phân từ quá khứ 'divided'."
      },
      {
        "id": "passive_voice_q69",
        "num": 69,
        "stem": "The equipment-use guidelines ____ on our internal corporate Web site. (122 ETS1 2020)",
        "options": {
          "A": "may find",
          "B": "can be found",
          "C": "have found",
          "D": "have to find"
        },
        "answer": "B",
        "explanation": "Chủ ngữ 'The equipment-use guidelines' là vật và phía sau không có tân ngữ trực tiếp, nên cần động từ ở thể bị động: 'can be found' (có thể được tìm thấy)."
      },
      {
        "id": "passive_voice_q70",
        "num": 70,
        "stem": "Late entries for the cake decoration contest will not be ____ (102 ETS4 2020)",
        "options": {
          "A": "solved",
          "B": "accepted",
          "C": "decided",
          "D": "earned"
        },
        "answer": "B",
        "explanation": "Cấu trúc bị động tương lai đơn (will not be + V3/V-ed) kết hợp ngữ cảnh: các bài dự thi nộp muộn sẽ không được 'chấp nhận' (accepted)."
      },
      {
        "id": "passive_voice_q71",
        "num": 71,
        "stem": "If you are not ____ with your Electoshine toothbrush, you may return it for a full refund. (113 ETS4 2020)",
        "options": {
          "A": "satisfaction",
          "B": "satisfying",
          "C": "satisfied",
          "D": "satisfy"
        },
        "answer": "C",
        "explanation": "Cấu trúc tính từ mang nghĩa bị động chỉ cảm xúc của người 'be satisfied with + N' (hài lòng với)."
      },
      {
        "id": "passive_voice_q72",
        "num": 72,
        "stem": "Relocating for work is ____ a difficult decision, but it can be rewarding. (112 ETS5 2020)",
        "options": {
          "A": "understandably",
          "B": "understanding",
          "C": "understood",
          "D": "understand"
        },
        "answer": "A",
        "explanation": "Câu đã đầy đủ chủ ngữ, động từ 'is' và danh ngữ bổ ngữ 'a difficult decision', cần trạng từ 'understandably' (dễ hiểu là) để bổ nghĩa."
      },
      {
        "id": "passive_voice_q76",
        "num": 76,
        "stem": "The salmon dish at Slia’s Café ____ with a brown sugar, mustard and pepper glaze. (111 ETS9 2020)",
        "options": {
          "A": "to serve",
          "B": "will serve",
          "C": "is served",
          "D": "was serving"
        },
        "answer": "C",
        "explanation": "Chủ ngữ 'The salmon dish' là vật và không có tân ngữ trực tiếp theo sau nên cần động từ bị động thì hiện tại đơn để mô tả món ăn: 'is served' (được phục vụ kèm)."
      },
      {
        "id": "passive_voice_q77",
        "num": 77,
        "stem": "All safety policies will be ____ reviewed by the Human Resources Department before publication. (121 ETS9 2020)",
        "options": {
          "A": "extensively",
          "B": "extensive",
          "C": "extension",
          "D": "extending"
        },
        "answer": "A",
        "explanation": "Trong cấu trúc bị động 'will be + ____ + reviewed', cần trạng từ đứng giữa trợ động từ và phân từ quá khứ để bổ nghĩa cho động từ 'reviewed', chọn 'extensively' (kỹ lưỡng/sâu rộng)."
      },
      {
        "id": "passive_voice_q94",
        "num": 94,
        "stem": "Ms. Valdez’s sales numbers are good ____ for her to be considered for the employee-of-the-month award. (112 ETS7 2019)",
        "options": {
          "A": "forward",
          "B": "even",
          "C": "ahead",
          "D": "enough"
        },
        "answer": "D",
        "explanation": "Cấu trúc 'adj + enough + for sb + to V' (đủ ... để ai đó làm gì): 'good enough for her to be considered' (đủ tốt để cô ấy được xem xét)."
      },
      {
        "id": "passive_voice_q95",
        "num": 95,
        "stem": "Mr. Nigam was ____ retirement when his boss asked him to be the head of security at the new facility. (116 ETS7 2019)",
        "options": {
          "A": "under",
          "B": "ahead of",
          "C": "nearly",
          "D": "close to"
        },
        "answer": "D",
        "explanation": "Cụm từ 'be close to + danh từ' mang nghĩa 'sắp/gần đến' (was close to retirement = sắp nghỉ hưu). 'Nearly' là trạng từ không đứng trực tiếp trước danh từ 'retirement' sau động từ 'to be'; 'under' và 'ahead of' không hợp nghĩa."
      },
      {
        "id": "passive_voice_q99",
        "num": 99,
        "stem": "Professor Benguigui will present his paper ____ the natural history conference tomorrow. (104 ETS9 2019)",
        "options": {
          "A": "by",
          "B": "at",
          "C": "of",
          "D": "on"
        },
        "answer": "B",
        "explanation": "Dùng giới từ 'at' trước các sự kiện như hội nghị, cuộc họp ('at the natural history conference' = tại hội nghị lịch sử tự nhiên). Các giới từ 'by', 'of', 'on' không phù hợp trong ngữ cảnh chỉ địa điểm/sự kiện này."
      },
      {
        "id": "passive_voice_q100",
        "num": 100,
        "stem": "The factory will be situated away ____ the city’s residential area to reduce complaints about noise and emissions. (109 ETS9 2019)",
        "options": {
          "A": "from",
          "B": "about",
          "C": "with",
          "D": "out"
        },
        "answer": "A",
        "explanation": "Cấu trúc cố định 'away from + N' mang nghĩa 'cách xa khỏi' (be situated away from the city's residential area = được đặt cách xa khu dân cư của thành phố)."
      }
    ]
  },
  {
    "id": "conditionals",
    "title": "Câu điều kiện (Conditionals)",
    "desc": "Loại 1, 2, 3, hỗn hợp & đảo ngữ câu điều kiện",
    "icon": "❓",
    "count": 48,
    "questions": [
      {
        "id": "conditionals_q1",
        "num": 1,
        "stem": "We’ll have lunch outside in the garden, ---- it’s too cold.",
        "options": {
          "A": "if",
          "B": "unless",
          "C": "in case",
          "D": "should"
        },
        "answer": "B",
        "explanation": "Dựa vào ngữ cảnh, \"unless\" (trừ khi = if ... not) là phù hợp nhất: Chúng tôi sẽ ăn trưa ngoài vườn trừ khi trời quá lạnh."
      },
      {
        "id": "conditionals_q2",
        "num": 2,
        "stem": "John ---- win more races if he trained harder.",
        "options": {
          "A": "would",
          "B": "will",
          "C": "would have",
          "D": "shall"
        },
        "answer": "A",
        "explanation": "Câu điều kiện loại 2 diễn tả giả định không có thật ở hiện tại: If + S + V2/ed (trained), S + would + V-inf (win)."
      },
      {
        "id": "conditionals_q3",
        "num": 3,
        "stem": "If the machine-----, press this button.",
        "options": {
          "A": "stop",
          "B": "stops",
          "C": "would stop",
          "D": "stopped"
        },
        "answer": "B",
        "explanation": "Câu điều kiện loại 0/loại 1 với mệnh đề chính ở dạng mệnh lệnh (press); mệnh đề If chia thì hiện tại đơn, chủ ngữ số ít \"the machine\" đi với \"stops\"."
      },
      {
        "id": "conditionals_q4",
        "num": 4,
        "stem": "The lecturer didn’t know what he was talking about, but if Mr. Mason ---- I would have listened carefully.",
        "options": {
          "A": "lectured",
          "B": "was lecturing",
          "C": "would lecture",
          "D": "had been lecturing"
        },
        "answer": "D",
        "explanation": "Câu điều kiện loại 3 diễn tả giả định trái với quá khứ: mệnh đề chính dùng \"would have listened\" nên mệnh đề If chia quá khứ hoàn thành (hoặc quá khứ hoàn thành tiếp diễn) \"had been lecturing\"."
      },
      {
        "id": "conditionals_q5",
        "num": 5,
        "stem": "I can’t understand what he sees in her! If anyone treated me like that, I ---- extremely angry.",
        "options": {
          "A": "am",
          "B": "would be",
          "C": "will be",
          "D": "was"
        },
        "answer": "B",
        "explanation": "Câu điều kiện loại 2: mệnh đề If dùng thì quá khứ đơn \"treated\", nên mệnh đề chính dùng \"would + V-inf\" (would be)."
      },
      {
        "id": "conditionals_q6",
        "num": 6,
        "stem": "If you ---- up all the orange juice that was in that carton, you ought to go out and get some more.",
        "options": {
          "A": "drank",
          "B": "drinking",
          "C": "drunk",
          "D": "drink"
        },
        "answer": "A",
        "explanation": "Câu điều kiện có thật diễn tả hành động đã xảy ra trong quá khứ (có dấu hiệu \"that was in that carton\") dẫn đến lời khuyên ở hiện tại (ought to), nên mệnh đề If chia quá khứ đơn \"drank\"."
      },
      {
        "id": "conditionals_q7",
        "num": 7,
        "stem": "Rachel will be pleased ---- she pass her driving test.",
        "options": {
          "A": "should",
          "B": "will",
          "C": "if",
          "D": "unless"
        },
        "answer": "A",
        "explanation": "Đảo ngữ câu điều kiện loại 1: Should + S + V-inf (pass). Động từ \"pass\" ở dạng nguyên mẫu dù chủ ngữ là ngôi thứ ba số ít \"she\", nên chỉ có \"should\" đúng ngữ pháp."
      },
      {
        "id": "conditionals_q8",
        "num": 8,
        "stem": "I ---- you sooner had someone told me you were in hospital.",
        "options": {
          "A": "visited",
          "B": "visit",
          "C": "would have visited",
          "D": "had visited"
        },
        "answer": "C",
        "explanation": "Đảo ngữ câu điều kiện loại 3: \"had someone told\" (= if someone had told), do đó mệnh đề chính dùng \"would have + V3/ed\" (would have visited)."
      },
      {
        "id": "conditionals_q9",
        "num": 9,
        "stem": "You can use my car ---- you drive carefully.",
        "options": {
          "A": "unless",
          "B": "as long as",
          "C": "as soon as",
          "D": "when"
        },
        "answer": "B",
        "explanation": "Dựa vào ngữ cảnh, \"as long as\" (miễn là) chỉ điều kiện phù hợp nhất: Bạn có thể dùng xe của tôi miễn là bạn lái xe cẩn thận."
      },
      {
        "id": "conditionals_q10",
        "num": 10,
        "stem": "If everyone ---- an extra hour a day, it would greatly increase production.",
        "options": {
          "A": "work",
          "B": "works",
          "C": "working",
          "D": "worked"
        },
        "answer": "D",
        "explanation": "Câu điều kiện loại 2: mệnh đề chính có \"would greatly increase\", nên mệnh đề If chia thì quá khứ đơn \"worked\"."
      },
      {
        "id": "conditionals_q11",
        "num": 11,
        "stem": "If energy ---- inexpensive and unlimited, many things in the world would be different.",
        "options": {
          "A": "is",
          "B": "were",
          "C": "will be",
          "D": "would be"
        },
        "answer": "B",
        "explanation": "Câu điều kiện loại 2: mệnh đề chính dùng \"would be\", nên mệnh đề If dùng động từ to-be ở dạng giả định \"were\" cho mọi chủ ngữ."
      },
      {
        "id": "conditionals_q12",
        "num": 12,
        "stem": "Don’t bother to ring me ---- it’s important.",
        "options": {
          "A": "unless",
          "B": "in case",
          "C": "if",
          "D": "as"
        },
        "answer": "A",
        "explanation": "Dựa vào ngữ cảnh, \"unless\" (trừ khi) phù hợp nhất: Đừng phiền gọi cho tôi trừ khi việc đó quan trọng."
      },
      {
        "id": "conditionals_q13",
        "num": 13,
        "stem": "If you help me with exercise, I ---- do the same for you one day.",
        "options": {
          "A": "will",
          "B": "would",
          "C": "was",
          "D": "am"
        },
        "answer": "A",
        "explanation": "Câu điều kiện loại 1 diễn tả khả năng có thật ở hiện tại/tương lai: If + S + V(hiện tại đơn - help), S + will + V-inf (do)."
      },
      {
        "id": "conditionals_q14",
        "num": 14,
        "stem": "If I could speak Spanish, I ---- next year studying in Mexico.",
        "options": {
          "A": "will spend",
          "B": "had spent",
          "C": "would spend",
          "D": "would have spent"
        },
        "answer": "C",
        "explanation": "Câu điều kiện loại 2: mệnh đề If có \"could speak\" diễn tả giả định không có thật ở hiện tại, mệnh đề chính chỉ kết quả giả định ở hiện tại/tương lai (next year) nên dùng \"would spend\"."
      },
      {
        "id": "conditionals_q15",
        "num": 15,
        "stem": "The bus won’t stop ---- you ring the bell.",
        "options": {
          "A": "if",
          "B": "as soon as",
          "C": "providing",
          "D": "unless"
        },
        "answer": "D",
        "explanation": "Dựa vào ngữ cảnh, \"unless\" (trừ khi) phù hợp nhất: Xe buýt sẽ không dừng trừ khi bạn bấm chuông."
      },
      {
        "id": "conditionals_q16",
        "num": 16,
        "stem": "You had better take a coat ---- it gets cold.",
        "options": {
          "A": "if",
          "B": "in case",
          "C": "as long as",
          "D": "while"
        },
        "answer": "B",
        "explanation": "Dùng 'in case' (phòng khi) để chỉ hành động chuẩn bị trước nhằm đề phòng một khả năng có thể xảy ra ('mang áo khoác phòng khi trời trở lạnh')."
      },
      {
        "id": "conditionals_q17",
        "num": 17,
        "stem": "If you----- to my advice in the first place, you wouldn’t be in this mess right now.",
        "options": {
          "A": "listen",
          "B": "will listen",
          "C": "listened",
          "D": "had listened"
        },
        "answer": "D",
        "explanation": "Câu điều kiện hỗn hợp (loại 3-2): giả thiết trái ngược với quá khứ ('in the first place') dùng quá khứ hoàn thành 'had listened', kết quả ở hiện tại ('right now') dùng 'wouldn't be'."
      },
      {
        "id": "conditionals_q18",
        "num": 18,
        "stem": "If it --- fine tomorrow, we will go to the coast.",
        "options": {
          "A": "will be",
          "B": "was",
          "C": "is",
          "D": "being"
        },
        "answer": "C",
        "explanation": "Câu điều kiện loại 1 diễn tả sự việc có thể xảy ra ở tương lai: mệnh đề 'If' chia thì hiện tại đơn ('is'), mệnh đề chính dùng 'will + V-inf'."
      },
      {
        "id": "conditionals_q19",
        "num": 19,
        "stem": "You --- yourself ill if you don’t eat properly.",
        "options": {
          "A": "were to make",
          "B": "make",
          "C": "would make",
          "D": "will make"
        },
        "answer": "D",
        "explanation": "Câu điều kiện loại 1: mệnh đề 'If' ở hiện tại đơn ('don't eat'), nên mệnh đề chính dùng 'will + V-inf' ('will make') để chỉ kết quả có thể xảy ra."
      },
      {
        "id": "conditionals_q20",
        "num": 20,
        "stem": "If the ball ---- the line, that would have been the end of the game.",
        "options": {
          "A": "had crossed",
          "B": "crossed",
          "C": "crosses",
          "D": "cross"
        },
        "answer": "A",
        "explanation": "Câu điều kiện loại 3 diễn tả giả thiết trái ngược với quá khứ: mệnh đề chính là 'would have been', nên mệnh đề 'If' chia quá khứ hoàn thành ('had crossed')."
      },
      {
        "id": "conditionals_q21",
        "num": 21,
        "stem": "---- more help, I could call my neighbor.",
        "options": {
          "A": "should I need",
          "B": "needed",
          "C": "I have needed",
          "D": "I should need"
        },
        "answer": "A",
        "explanation": "Cấu trúc đảo ngữ câu điều kiện loại 1: 'Should + S + V-inf, S + will/can/could + V-inf' (thay cho 'If I should need...')."
      },
      {
        "id": "conditionals_q22",
        "num": 22,
        "stem": "I didn’t get home until after midnight last night. Otherwise, I ---- your call.",
        "options": {
          "A": "returned",
          "B": "had returned",
          "C": "would return",
          "D": "would have returned"
        },
        "answer": "D",
        "explanation": "Câu điều kiện ẩn với 'Otherwise' (nếu không thì). Bối cảnh ở quá khứ ('last night', 'didn't get') nên dùng cấu trúc loại 3: 'would have + V3/ed' ('would have returned')."
      },
      {
        "id": "conditionals_q23",
        "num": 23,
        "stem": "If Jake ---- to go on the trip, would you have gone?",
        "options": {
          "A": "hadn’t agreed",
          "B": "doesn’t agree",
          "C": "didn’t agreed",
          "D": "wouldn’t agree"
        },
        "answer": "A",
        "explanation": "Câu điều kiện loại 3: mệnh đề chính là 'would you have gone', do đó mệnh đề 'If' phải chia thì quá khứ hoàn thành ('hadn't agreed')."
      },
      {
        "id": "conditionals_q24",
        "num": 24,
        "stem": "If I found Rob’s phone number now, I ---- him about the change in plans.",
        "options": {
          "A": "called",
          "B": "had called",
          "C": "could call",
          "D": "will call"
        },
        "answer": "C",
        "explanation": "Câu điều kiện loại 2 diễn tả giả thiết trái ngược với hiện tại: mệnh đề 'If' chia quá khứ đơn ('found... now'), mệnh đề chính dùng 'would/could + V-inf' ('could call')."
      },
      {
        "id": "conditionals_q25",
        "num": 25,
        "stem": "If I have a typewriter, I ---- it myself.",
        "options": {
          "A": "typed",
          "B": "would have typed",
          "C": "would type",
          "D": "am typing"
        },
        "answer": "C",
        "explanation": "Câu điều kiện loại 2 diễn tả giả định không có thật ở hiện tại (đề gốc thường là 'If I had a typewriter'), mệnh đề chính dùng 'would + V-inf' ('would type')."
      },
      {
        "id": "conditionals_q26",
        "num": 26,
        "stem": "If you don’t keep silent, you ---- wake the baby up.",
        "options": {
          "A": "will",
          "B": "would",
          "C": "had",
          "D": "can"
        },
        "answer": "A",
        "explanation": "Câu điều kiện loại 1: mệnh đề 'If' ở hiện tại đơn ('don't keep'), mệnh đề chính dùng 'will + V-inf' để nêu kết quả gần như chắc chắn sẽ xảy ra."
      },
      {
        "id": "conditionals_q27",
        "num": 27,
        "stem": "If I have known that you were in hospital, I ---- you.",
        "options": {
          "A": "would visit",
          "B": "would have visited",
          "C": "will visit",
          "D": "visited"
        },
        "answer": "B",
        "explanation": "Câu điều kiện loại 3 diễn tả giả định trái ngược với quá khứ ('were in hospital', dạng chuẩn mệnh đề 'If' là 'had known'), nên mệnh đề chính dùng 'would have + V3/ed' ('would have visited')."
      },
      {
        "id": "conditionals_q28",
        "num": 28,
        "stem": "It never stops raining here. I wish it ---- raining.",
        "options": {
          "A": "stopped",
          "B": "would stop",
          "C": "had stopped",
          "D": "will stop"
        },
        "answer": "B",
        "explanation": "Cấu trúc 'wish + S + would + V-inf' dùng để diễn tả sự phàn nàn và mong muốn một sự việc khó chịu (thời tiết) thay đổi trong tương lai."
      },
      {
        "id": "conditionals_q29",
        "num": 29,
        "stem": "If I ---- his telephone number, I’d give it to you.",
        "options": {
          "A": "know",
          "B": "knew",
          "C": "had known",
          "D": "knowing"
        },
        "answer": "B",
        "explanation": "Câu điều kiện loại 2 diễn tả giả định trái ngược với hiện tại: mệnh đề chính là 'I'd give' (I would give), nên mệnh đề 'If' chia quá khứ đơn ('knew')."
      },
      {
        "id": "conditionals_q30",
        "num": 30,
        "stem": "This exercise is very boring. I wish the teacher ---- us some more interesting things to do.",
        "options": {
          "A": "gave",
          "B": "would gave",
          "C": "had given",
          "D": "will give"
        },
        "answer": "A",
        "explanation": "Câu ước trái ngược với thực tế ở hiện tại ('This exercise is very boring'): dùng cấu trúc 'wish + S + V2/ed' ('gave'). Đáp án B sai ngữ pháp vì sau 'would' phải là động từ nguyên mẫu."
      },
      {
        "id": "conditionals_q31",
        "num": 31,
        "stem": "I should never have said that. I wish I ---- that.",
        "options": {
          "A": "didn’t",
          "B": "wouldn’t",
          "C": "hadn’t said",
          "D": "says"
        },
        "answer": "C",
        "explanation": "Câu thể hiện sự tiếc nuối về một việc đã xảy ra trong quá khứ ('should never have said'). Cấu trúc câu ước trái với quá khứ là: S + wish + S + had + V3/ed (quá khứ hoàn thành) -> chọn 'hadn’t said'."
      },
      {
        "id": "conditionals_q32",
        "num": 32,
        "stem": "If the tree hadn’t been so high, he ---- it up to take his kite down.",
        "options": {
          "A": "could have climb",
          "B": "climb",
          "C": "is climbing",
          "D": "climbed"
        },
        "answer": "A",
        "explanation": "Mệnh đề điều kiện dùng quá khứ hoàn thành ('hadn’t been') -> đây là câu điều kiện loại 3 (trái với quá khứ). Mệnh đề chính có dạng: S + would/could/might + have + V3/ed (đáp án A có lỗi đánh máy 'climb' thay vì 'climbed', nhưng là đáp án duy nhất đúng cấu trúc loại 3)."
      },
      {
        "id": "conditionals_q33",
        "num": 33,
        "stem": "If the wall weren’t so high, he ---- it up to take his ball down.",
        "options": {
          "A": "climbed",
          "B": "could climb",
          "C": "is climbing",
          "D": "climb"
        },
        "answer": "B",
        "explanation": "Mệnh đề điều kiện dùng 'weren’t' -> đây là câu điều kiện loại 2 (trái với hiện tại). Mệnh đề chính có dạng: S + would/could/might + V nguyên mẫu -> chọn 'could climb'."
      },
      {
        "id": "conditionals_q34",
        "num": 34,
        "stem": "---- the storm, he would have arrived much earlier.",
        "options": {
          "A": "thanks to",
          "B": "not only",
          "C": "but for",
          "D": "expect"
        },
        "answer": "C",
        "explanation": "Mệnh đề chính dùng 'would have arrived' (điều kiện loại 3). Cấu trúc 'But for + danh từ' tương đương 'If it hadn’t been for + danh từ' (Nếu không có cơn bão thì anh ấy đã đến sớm hơn nhiều)."
      },
      {
        "id": "conditionals_q35",
        "num": 35,
        "stem": "Would John be angry if I ---- his bicycle without asking?",
        "options": {
          "A": "take",
          "B": "took",
          "C": "had taken",
          "D": "would take"
        },
        "answer": "B",
        "explanation": "Mệnh đề chính dùng 'Would + S + V nguyên mẫu' ('Would John be angry') -> câu điều kiện loại 2. Mệnh đề 'if' chia ở thì quá khứ đơn -> chọn 'took'."
      },
      {
        "id": "conditionals_q36",
        "num": 36,
        "stem": "Pharmacy technicians are responsible for verifying and processing prescriptions ---- they are requested by a physician. (128 ETS1 2018)",
        "options": {
          "A": "as well as",
          "B": "as soon as",
          "C": "in regard to",
          "D": "in addition to"
        },
        "answer": "B",
        "explanation": "Phía sau chỗ trống là một mệnh đề hoàn chỉnh ('they are requested by a physician') nên cần một liên từ. Chỉ có 'as soon as' (ngay khi) là liên từ theo sau bởi mệnh đề; các đáp án còn lại là giới từ/cụm giới từ."
      },
      {
        "id": "conditionals_q37",
        "num": 37,
        "stem": "---- change your seating assignment, visit the reservations page on our website. (102 ETS2 2018)",
        "options": {
          "A": "for",
          "B": "across",
          "C": "with",
          "D": "to"
        },
        "answer": "D",
        "explanation": "Trước động từ nguyên mẫu 'change' để chỉ mục đích ('Để thay đổi chỗ ngồi...'), ta dùng cụm động từ nguyên mẫu có 'to' (To + V nguyên mẫu)."
      },
      {
        "id": "conditionals_q38",
        "num": 38,
        "stem": "Okpara employees should contact their supervisors by 10:00 AM ---- they expect to miss a day of work. (109 ETS2 2018)",
        "options": {
          "A": "if",
          "B": "soon",
          "C": "only",
          "D": "then"
        },
        "answer": "A",
        "explanation": "Cần một liên từ nối hai mệnh đề để diễn tả điều kiện: nhân viên nên liên hệ với cấp trên trước 10 giờ sáng 'nếu' (if) họ dự kiến nghỉ làm một ngày."
      },
      {
        "id": "conditionals_q39",
        "num": 39,
        "stem": "This Friday, all employees may depart two hours before closing ---- their manager requires them to stay. (116 ETS4 2018)",
        "options": {
          "A": "either",
          "B": "nor",
          "C": "because",
          "D": "unless"
        },
        "answer": "D",
        "explanation": "Xét về ngữ nghĩa và ngữ pháp, cần liên từ 'unless' (trừ khi = if ... not): tất cả nhân viên có thể về sớm hai tiếng trước giờ đóng cửa trừ khi quản lý yêu cầu họ ở lại."
      },
      {
        "id": "conditionals_q40",
        "num": 40,
        "stem": "New tax incentives reward local businesses ---- decrease their water consumption. (129 ETS4 2018)",
        "options": {
          "A": "will",
          "B": "when",
          "C": "that",
          "D": "if"
        },
        "answer": "C",
        "explanation": "Sau chỗ trống là động từ 'decrease' (thiếu chủ ngữ), nên cần một đại từ quan hệ làm chủ ngữ thay thế cho danh từ chỉ vật/tổ chức 'local businesses' -> chọn 'that'."
      },
      {
        "id": "conditionals_q41",
        "num": 41,
        "stem": "---- the kiln’s hit is set too high, the ceramic objects inside may be ruined. (106 ETS5 2018)",
        "options": {
          "A": "so",
          "B": "if",
          "C": "but",
          "D": "why"
        },
        "answer": "B",
        "explanation": "Câu diễn tả điều kiện loại 1 (mệnh đề chính có 'may be ruined'): 'Nếu' (If) nhiệt độ lò nung được cài đặt quá cao, các đồ gốm bên trong có thể bị hỏng."
      },
      {
        "id": "conditionals_q46",
        "num": 46,
        "stem": "If you have recently ---- a digital camera and want to learn how to use it, this course is for you. (105 ETS2 2020)",
        "options": {
          "A": "purchased",
          "B": "purchase",
          "C": "purchasing",
          "D": "to purchase"
        },
        "answer": "A",
        "explanation": "Cấu trúc thì hiện tại hoàn thành: have/has + (trạng từ 'recently') + V3/ed -> chọn 'purchased'."
      },
      {
        "id": "conditionals_q73",
        "num": 73,
        "stem": "Although the desk was slightly damaged during assembly, it is still _____ (123 ETS6 2020)",
        "options": {
          "A": "function",
          "B": "functional",
          "C": "functionally",
          "D": "functioned"
        },
        "answer": "B",
        "explanation": "Sau động từ liên kết 'is' (và trạng từ 'still') cần một tính từ để bổ nghĩa cho chủ ngữ 'it' (the desk) -> chọn tính từ 'functional' (vẫn sử dụng được)."
      },
      {
        "id": "conditionals_q74",
        "num": 74,
        "stem": "Ms. Maeda was ____ that her art submission was used on the cover of the firm’s annual report. (112 ETS8 2020)",
        "options": {
          "A": "performed",
          "B": "flattered",
          "C": "welcomed",
          "D": "challenged"
        },
        "answer": "B",
        "explanation": "Câu hỏi từ vựng: 'flattered' (cảm thấy vinh dự/hãnh diện) phù hợp nhất với ngữ cảnh tác phẩm nghệ thuật của bà Maeda được chọn làm ảnh bìa cho báo cáo thường niên của công ty."
      },
      {
        "id": "conditionals_q75",
        "num": 75,
        "stem": "Sookie Choi’s latest children’s booj is being ____ by Chung-He Park. (120 ETS8 2020)",
        "options": {
          "A": "illustrating",
          "B": "illustrated",
          "C": "illustration",
          "D": "illustrates"
        },
        "answer": "B",
        "explanation": "Cấu trúc bị động thì hiện tại tiếp diễn: is/am/are + being + V3/ed (có dấu hiệu 'by Chung-He Park') -> chọn 'illustrated' (đang được minh họa bởi)."
      },
      {
        "id": "conditionals_q78",
        "num": 78,
        "stem": "All four walls of the green house ____ of fully tempered glass. (129 ETS9 2020)",
        "options": {
          "A": "construct",
          "B": "constructing",
          "C": "have constructed",
          "D": "will be constructed"
        },
        "answer": "D",
        "explanation": "Chủ ngữ 'All four walls of the green house' là vật nên cần động từ chia ở thể bị động (be + V3/ed). Cấu trúc 'be constructed of + chất liệu' mang nghĩa được xây dựng bằng chất liệu gì, nên chọn D (will be constructed)."
      },
      {
        "id": "conditionals_q79",
        "num": 79,
        "stem": "The increase in tourism in Mariondale can be ____ to the various attractions the city has added in the recent years. (130 ETS9 2020)",
        "options": {
          "A": "deducted",
          "B": "confirmed",
          "C": "attributed",
          "D": "amplified"
        },
        "answer": "C",
        "explanation": "Cụm từ cố định ở thể bị động 'be attributed to + N' mang nghĩa 'là do / được quy cho'. Theo ngữ cảnh, sự gia tăng du lịch có thể là do nhiều điểm tham quan mới mà thành phố đã bổ sung, nên chọn C (attributed)."
      },
      {
        "id": "conditionals_q80",
        "num": 80,
        "stem": "The color of the new chairs was not ____ on the invoice. (120 ETS10 2020)",
        "options": {
          "A": "specify",
          "B": "specified",
          "C": "specifying",
          "D": "specification"
        },
        "answer": "B",
        "explanation": "Chủ ngữ 'The color of the new chairs' là vật và sau chỗ trống không có tân ngữ, nên cần phân từ quá khứ (V3/ed) để tạo thể bị động thì quá khứ đơn (was not + V3/ed). Chọn B (specified: không được ghi rõ trên hóa đơn)."
      }
    ]
  },
  {
    "id": "relative_clauses",
    "title": "Mệnh đề quan hệ (Relative Clauses)",
    "desc": "Who, whom, which, that, whose, rút gọn MĐQH",
    "icon": "🔗",
    "count": 78,
    "questions": [
      {
        "id": "relative_clauses_q1",
        "num": 1,
        "stem": "The rabbit___ by the man was very frightened.",
        "options": {
          "A": "is hunted",
          "B": "is hunting",
          "C": "hunted",
          "D": "hunting"
        },
        "answer": "C",
        "explanation": "Câu đã có động từ chính 'was', chỗ trống cần rút gọn mệnh đề quan hệ ở thể bị động (có 'by the man') nên dùng phân từ quá khứ V3/ed 'hunted' (= which was hunted)."
      },
      {
        "id": "relative_clauses_q4",
        "num": 4,
        "stem": "This is the house__ by his father five years ago.",
        "options": {
          "A": "were bought",
          "B": "was bought",
          "C": "which bought",
          "D": "which was bought"
        },
        "answer": "D",
        "explanation": "Câu đã có động từ chính 'is' nên cần mệnh đề quan hệ bổ nghĩa cho danh từ số ít 'the house'. Có 'by his father' (bị động) và 'five years ago' (quá khứ đơn) nên chọn 'which was bought'."
      },
      {
        "id": "relative_clauses_q5",
        "num": 5,
        "stem": "Our solar system is in a galaxy__ the Milky Way.",
        "options": {},
        "answer": "B",
        "explanation": "Lưu ý: câu hỏi bị thiếu các phương án lựa chọn (options rỗng). Về ngữ pháp, chỗ trống cần rút gọn mệnh đề quan hệ bị động cho 'a galaxy', đáp án đúng theo đề chuẩn là 'called' (= which is called)."
      },
      {
        "id": "relative_clauses_q6",
        "num": 6,
        "stem": "The company hopes that the personnel____ will be of varied backgrounds and possess outstanding research skills.",
        "options": {
          "A": "break",
          "B": "breaking",
          "C": "broke",
          "D": "broken"
        },
        "answer": "D",
        "explanation": "Mệnh đề 'that' đã có động từ chính 'will be', nên sau 'the personnel' cần phân từ quá khứ V3/ed để rút gọn mệnh đề quan hệ bị động ('broken' là dạng V3/ed duy nhất; lưu ý bộ đáp án gốc của câu này bị lệch từ vựng so với từ gốc 'hired/selected')."
      },
      {
        "id": "relative_clauses_q7",
        "num": 7,
        "stem": "Engineers at Red Motors have just created the corporation's first car ___ by solar energy.",
        "options": {
          "A": "playing",
          "B": "which plays",
          "C": "which is playing",
          "D": "which is being played"
        },
        "answer": "D",
        "explanation": "Phía sau có 'by solar energy' nên cần mệnh đề quan hệ ở thể bị động bổ nghĩa cho 'car'. Trong 4 lựa chọn (dù động từ 'play' bị lệch nghĩa so với động từ gốc 'power'), chỉ có 'which is being played' đúng cấu trúc bị động."
      },
      {
        "id": "relative_clauses_q8",
        "num": 8,
        "stem": "To be eligible to receive compensation for injuries___ in the workplace, employees should have followed all the safety procedures.",
        "options": {
          "A": "sustain",
          "B": "sustained",
          "C": "sustaining",
          "D": "sustains​"
        },
        "answer": "B",
        "explanation": "Cần rút gọn mệnh đề quan hệ bị động bổ nghĩa cho 'injuries' (những chấn thương gặp phải tại nơi làm việc = which are sustained), nên dùng phân từ quá khứ 'sustained'."
      },
      {
        "id": "relative_clauses_q9",
        "num": 9,
        "stem": "The event received coverage in a newspaper__ in the area",
        "options": {
          "A": "which widely distributed",
          "B": "widely distributed",
          "C": "distributing",
          "D": "that distributed"
        },
        "answer": "B",
        "explanation": "Câu đã có động từ chính 'received'. Danh từ 'a newspaper' mang nghĩa bị động (được phát hành rộng rãi = which is widely distributed), nên rút gọn mệnh đề quan hệ thành 'widely distributed'."
      },
      {
        "id": "relative_clauses_q10",
        "num": 10,
        "stem": "The money___ in the last financial year can be reinvested on the stock exchange.",
        "options": {
          "A": "saved",
          "B": "saving",
          "C": "which saved",
          "D": "which saving"
        },
        "answer": "A",
        "explanation": "Câu đã có động từ chính 'can be reinvested'. 'The money' mang nghĩa bị động (tiền được tiết kiệm = which was saved) nên rút gọn mệnh đề quan hệ bằng phân từ quá khứ 'saved'."
      },
      {
        "id": "relative_clauses_q11",
        "num": 11,
        "stem": "Most of the suggestions___ at the meeting was not very practical.",
        "options": {
          "A": "making",
          "B": "made",
          "C": "were made",
          "D": "which made"
        },
        "answer": "B",
        "explanation": "Câu đã có động từ chính 'was'. 'Suggestions' mang nghĩa bị động (những đề xuất được đưa ra = which were made) nên rút gọn mệnh đề quan hệ bằng phân từ quá khứ 'made'."
      },
      {
        "id": "relative_clauses_q12",
        "num": 12,
        "stem": "Be sure to follow the instructions___ at the top of the page.",
        "options": {
          "A": "given",
          "B": "giving",
          "C": "are given",
          "D": "are giving"
        },
        "answer": "A",
        "explanation": "Câu mệnh lệnh đã có động từ chính 'Be'. 'The instructions' mang nghĩa bị động (các hướng dẫn được đưa ra = which are given) nên rút gọn mệnh đề quan hệ bằng phân từ quá khứ 'given'."
      },
      {
        "id": "relative_clauses_q13",
        "num": 13,
        "stem": "Bellucci Media Inc. is a marketing firm internationally ___ as one of the most successful company throughout Europe, East Asia, and the America.",
        "options": {
          "A": "recognized",
          "B": "recognizing",
          "C": "recognizes",
          "D": "is recognized"
        },
        "answer": "A",
        "explanation": "Câu đã có động từ chính 'is'. 'A marketing firm' mang nghĩa bị động (được công nhận quốc tế là = which is internationally recognized as), nên rút gọn mệnh đề quan hệ thành phân từ quá khứ 'recognized'."
      },
      {
        "id": "relative_clauses_q14",
        "num": 14,
        "stem": "People___ are expected to be formally dressed for the occasion.",
        "options": {
          "A": "who are invite",
          "B": "invited",
          "C": "to be invite",
          "D": "inviting"
        },
        "answer": "B",
        "explanation": "Câu đã có động từ chính 'are expected'. Cần rút gọn mệnh đề quan hệ bị động cho 'People' (những người được mời = who are invited) nên chọn 'invited' (A và C sai ngữ pháp vì dùng 'invite' thay vì 'invited')."
      },
      {
        "id": "relative_clauses_q15",
        "num": 15,
        "stem": "Donald investments, previously___ DI Financial, is hoping to increase its client base by 60% this year.",
        "options": {
          "A": "naming",
          "B": "was named",
          "C": "named",
          "D": "name"
        },
        "answer": "C",
        "explanation": "Câu đã có động từ chính 'is hoping'. Phần giữa hai dấu phẩy là mệnh đề quan hệ không xác định rút gọn ở thể bị động (= which was previously named), nên chọn phân từ quá khứ 'named'."
      },
      {
        "id": "relative_clauses_q16",
        "num": 16,
        "stem": "People___ in career opportunities are invited immediately to submit their resumes and cover letter to us.",
        "options": {
          "A": "are interested",
          "B": "interesting",
          "C": "interest",
          "D": "being interested"
        },
        "answer": "D",
        "explanation": "Câu đã có động từ chính 'are invited' nên loại A và C. Cụm 'be interested in' (quan tâm đến) dùng cho người nên loại B ('interesting'). Chọn D 'being interested' làm dạng rút gọn mệnh đề quan hệ (= who are interested)."
      },
      {
        "id": "relative_clauses_q17",
        "num": 17,
        "stem": "The budget report____ by the Planning Department had some flaws.",
        "options": {
          "A": "was submitted",
          "B": "submitted",
          "C": "submitting",
          "D": "submit"
        },
        "answer": "B",
        "explanation": "Câu đã có động từ chính 'had'. Có 'by the Planning Department' mang nghĩa bị động nên cần rút gọn mệnh đề quan hệ (= which was submitted) bằng phân từ quá khứ 'submitted'."
      },
      {
        "id": "relative_clauses_q18",
        "num": 18,
        "stem": "A man___ for smoking marijuana was taking about how unfair the law is.",
        "options": {
          "A": "who was arrested",
          "B": "arresting",
          "C": "who arrested",
          "D": "who arresting"
        },
        "answer": "A",
        "explanation": "Cần mệnh đề quan hệ bổ nghĩa cho 'A man' (chỉ người) và mang nghĩa bị động (người đàn ông bị bắt giữ vì hút cần sa), nên chọn 'who was arrested'. Các đáp án khác sai dạng chủ động hoặc thiếu trợ động từ."
      },
      {
        "id": "relative_clauses_q19",
        "num": 19,
        "stem": "Twenty percent of the people___ said that they were very satisfied with the product and would buy it again.",
        "options": {
          "A": "who was surveyed",
          "B": "being surveyed",
          "C": "survey",
          "D": "surveyed"
        },
        "answer": "D",
        "explanation": "Rút gọn mệnh đề quan hệ dạng bị động (who were surveyed -> surveyed) bổ nghĩa cho 'the people' (những người đã được khảo sát). A sai hòa hợp chủ ngữ số nhiều ('was'), B sai nghĩa tiếp diễn, C là động từ nguyên mẫu."
      },
      {
        "id": "relative_clauses_q20",
        "num": 20,
        "stem": "Applications____ after the deadline cannot be considered",
        "options": {
          "A": "receiving",
          "B": "received",
          "C": "receive",
          "D": "to receive"
        },
        "answer": "B",
        "explanation": "Câu đã có động từ chính 'cannot be considered'. Cần rút gọn mệnh đề quan hệ bị động bổ nghĩa cho 'Applications' (which are received -> received: các đơn được nhận sau hạn chót)."
      },
      {
        "id": "relative_clauses_q21",
        "num": 21,
        "stem": "Mexico City,  ______  is the fastest growing city in the world , has a population of over 10 million.",
        "options": {
          "A": "what​​",
          "B": "which​",
          "C": "that​ ​​",
          "D": "where"
        },
        "answer": "B",
        "explanation": "Mệnh đề quan hệ không xác định (có dấu phẩy) thay thế cho danh từ chỉ vật/địa điểm 'Mexico City' làm chủ ngữ cho động từ 'is', nên dùng 'which' (không dùng 'that' sau dấu phẩy và không dùng 'where' khi thiếu chủ ngữ)."
      },
      {
        "id": "relative_clauses_q22",
        "num": 22,
        "stem": "Nellie Ross of Wyoming was the first woman  ______  governor in the United States.",
        "options": {
          "A": "who elected   ​​",
          "B": "to be elected    ​",
          "C": "was elected ​",
          "D": "her election as"
        },
        "answer": "B",
        "explanation": "Sau cấu trúc số thứ tự 'the first + N', rút gọn mệnh đề quan hệ bằng 'to V'. Vì mang nghĩa bị động (người phụ nữ đầu tiên được bầu làm thống đốc), chọn 'to be elected'."
      },
      {
        "id": "relative_clauses_q23",
        "num": 23,
        "stem": "Pioneers, ______  in isolated areas of the United States, were almost totally self-sufficient.",
        "options": {
          "A": "who living ​ ​",
          "B": "living  ​​",
          "C": "lived  ​​",
          "D": "that lived"
        },
        "answer": "B",
        "explanation": "Rút gọn mệnh đề quan hệ chủ động bằng hiện tại phân từ V-ing ('who lived' -> 'living'). Loại D vì không dùng 'that' sau dấu phẩy, loại A vì thiếu động từ to be, loại C vì 'live' là nội động từ không chia bị động."
      },
      {
        "id": "relative_clauses_q24",
        "num": 24,
        "stem": "Ms. Young, to ______  many of her students are writing, is living happily and  peacefully in Canada.",
        "options": {
          "A": "who ​​",
          "B": "whom ​​",
          "C": "that ​​​",
          "D": "whose"
        },
        "answer": "B",
        "explanation": "Sau giới từ 'to' và thay thế cho danh từ chỉ người 'Ms. Young' ở vai trò tân ngữ (write to someone), bắt buộc dùng đại từ quan hệ 'whom'."
      },
      {
        "id": "relative_clauses_q25",
        "num": 25,
        "stem": "Completed in 1756, Nassau Hall is the oldest building now ______  on the campus of Princeton University.",
        "options": {
          "A": "standing ​​",
          "B": "it stands  ​​",
          "C": "has stood  ​ ​",
          "D": "stood  ​"
        },
        "answer": "A",
        "explanation": "Câu đã có động từ chính 'is'. Cần rút gọn mệnh đề quan hệ chủ động bổ nghĩa cho 'the oldest building' với trạng từ 'now' ('which now stands' -> 'now standing')."
      },
      {
        "id": "relative_clauses_q26",
        "num": 26,
        "stem": "______   in large quantities in the Middle East, oil became known as black gold because of the large profit it brought.",
        "options": {
          "A": "discovering ​​​​",
          "B": "which was discovered",
          "C": "discovered ​​​​",
          "D": "that when discovered"
        },
        "answer": "C",
        "explanation": "Rút gọn mệnh đề phân từ ở đầu câu có cùng chủ ngữ 'oil'. Vì dầu mỏ 'được phát hiện' (bị động), dùng quá khứ phân từ 'discovered' (V3/ed)."
      },
      {
        "id": "relative_clauses_q27",
        "num": 27,
        "stem": "She is the woman ______  sister looks after the baby for us.",
        "options": {
          "A": "who ​​",
          "B": "whom ​​",
          "C": "that ​​​",
          "D": "whose"
        },
        "answer": "D",
        "explanation": "Trước danh từ 'sister' cần đại từ quan hệ chỉ sự sở hữu ('whose sister' = chị gái của người phụ nữ đó), nên chọn 'whose'."
      },
      {
        "id": "relative_clauses_q28",
        "num": 28,
        "stem": "Neil Armstrong, ______  person to set foot on the moon, reported that the surface was fine and powdery.",
        "options": {
          "A": "the first ​​",
          "B": "to be the first ​",
          "C": "was the first ​",
          "D": "as the first"
        },
        "answer": "A",
        "explanation": "Cụm đồng vị ngữ (rút gọn của mệnh đề quan hệ 'who was the first person...') đặt giữa hai dấu phẩy để bổ nghĩa cho danh từ riêng 'Neil Armstrong', nên chỉ cần điền 'the first'."
      },
      {
        "id": "relative_clauses_q29",
        "num": 29,
        "stem": "The Massachusetts State House, ______  in 1798, was the most distinguished building in the United States at that time.",
        "options": {
          "A": "completing ​​​​",
          "B": "which was completed",
          "C": "was completed ​​​",
          "D": "to be completed"
        },
        "answer": "B",
        "explanation": "Mệnh đề quan hệ không xác định (giữa hai dấu phẩy) bổ nghĩa cho chủ ngữ chỉ vật 'The Massachusetts State House' với nghĩa bị động trong quá khứ ('in 1798'), nên dùng 'which was completed'."
      },
      {
        "id": "relative_clauses_q30",
        "num": 30,
        "stem": "Lady Astor was the first woman ______  her seat in Parliament.",
        "options": {
          "A": "take ​​​",
          "B": "to take ​​",
          "C": "taking ​​",
          "D": "who takes"
        },
        "answer": "B",
        "explanation": "Sau danh từ có số thứ tự 'the first woman', rút gọn mệnh đề quan hệ chủ động bằng 'to + V nguyên mẫu' ('to take'). Loại D vì sai thì hiện tại đơn so với động từ chính 'was'."
      },
      {
        "id": "relative_clauses_q31",
        "num": 31,
        "stem": "I want to know the reason ______  he told you last night.",
        "options": {
          "A": "for which ​​",
          "B": "which​​",
          "C": "where​​",
          "D": "when"
        },
        "answer": "B",
        "explanation": "Trong mệnh đề quan hệ, động từ 'told' (tell someone something) đang thiếu tân ngữ trực tiếp chỉ vật ('the reason'). Do đó cần đại từ quan hệ 'which' làm tân ngữ, không dùng 'for which' (trạng từ quan hệ chỉ nguyên nhân)."
      },
      {
        "id": "relative_clauses_q32",
        "num": 32,
        "stem": "Norman Weiner, ______ mathematician and logician, had an important role in the development of the computer.",
        "options": {
          "A": "who as a​​",
          "B": "was a ​​",
          "C": "whom a  ​​",
          "D": "a"
        },
        "answer": "D",
        "explanation": "Cụm danh từ đồng vị ngữ (rút gọn từ mệnh đề quan hệ 'who was a mathematician and logician') nằm giữa hai dấu phẩy để giải thích cho 'Norman Weiner', nên chỉ cần điền mạo từ 'a'."
      },
      {
        "id": "relative_clauses_q33",
        "num": 33,
        "stem": "War and Peace, ______ , was published in 1869.",
        "options": {
          "A": "Leo Tolstoy's most celebrated  novel",
          "B": "that is Leo Tolstoy's most celebrated novel",
          "C": "which most celebrated novel of Leo Tolstoy",
          "D": "is a Leo Tolstoy's most celebrated novel"
        },
        "answer": "A",
        "explanation": "Cần cụm danh từ đồng vị (hoặc rút gọn mệnh đề quan hệ không xác định 'which is...') nằm giữa hai dấu phẩy để giải thích cho 'War and Peace'. Loại B vì không dùng 'that' sau dấu phẩy; C thiếu động từ 'is' và mạo từ 'the'; D thừa động từ 'is' và sai cấu trúc 'a Leo Tolstoy's'."
      },
      {
        "id": "relative_clauses_q34",
        "num": 34,
        "stem": "We visited the church  ______  in the 18th century.",
        "options": {
          "A": "was built​​",
          "B": "which built​ ​",
          "C": "building​​",
          "D": "which was built"
        },
        "answer": "D",
        "explanation": "Cần mệnh đề quan hệ ở thể bị động để bổ nghĩa cho 'the church' (nhà thờ được xây dựng vào thế kỷ 18) nên chọn 'which was built'. Loại A vì thiếu đại từ quan hệ; B và C sai vì mang nghĩa chủ động."
      },
      {
        "id": "relative_clauses_q35",
        "num": 35,
        "stem": "Mr. Smith, ______ a retired teacher, does volunteer work at the hospital.",
        "options": {
          "A": "that is             ​​",
          "B": "who was            ​",
          "C": "who is            ​",
          "D": "is"
        },
        "answer": "C",
        "explanation": "Mệnh đề quan hệ không xác định đứng sau dấu phẩy bổ nghĩa cho người ('Mr. Smith') nên dùng 'who', không dùng 'that' (loại A) và không thể thiếu đại từ quan hệ (loại D). Chọn 'who is' (hiện tại đơn) để diễn tả trạng thái hiện tại của ông Smith và hòa hợp thì với 'does'."
      },
      {
        "id": "relative_clauses_q36",
        "num": 36,
        "stem": "Where is the house______  ?",
        "options": {
          "A": "whom they are living ​​",
          "B": "which they are living",
          "C": "in which  they are  living ​​",
          "D": "where they are living in"
        },
        "answer": "C",
        "explanation": "Động từ 'live' đi với giới từ 'in' ('live in the house'), nên khi đưa giới từ lên trước đại từ quan hệ chỉ vật ta dùng 'in which'. Loại A vì 'whom' chỉ người; B thiếu giới từ 'in'; D thừa giới từ 'in' khi đã dùng trạng từ quan hệ 'where'."
      },
      {
        "id": "relative_clauses_q37",
        "num": 37,
        "stem": "The girl ______ is our neighbor.",
        "options": {
          "A": "talks to the lady over there​​",
          "B": "was talking to the lady over there",
          "C": "is talking to the lady over there​",
          "D": "talking to the lady over there"
        },
        "answer": "D",
        "explanation": "Câu đã có động từ chính 'is', nên chỗ trống cần rút gọn mệnh đề quan hệ dạng chủ động (V-ing) từ 'who is talking to the lady over there' thành 'talking to the lady over there'. Các phương án A, B, C đều chứa động từ chia thì gây lỗi hai động từ chính."
      },
      {
        "id": "relative_clauses_q38",
        "num": 38,
        "stem": "He is working in Nha Trang , ______ one of the most beautiful beaches in Vietnam.​",
        "options": {
          "A": "where is ​​",
          "B": "where it is ​ ​",
          "C": "which is ​​",
          "D": "that is"
        },
        "answer": "C",
        "explanation": "Sau dấu phẩy là động từ 'is', nên cần đại từ quan hệ làm chủ ngữ cho mệnh đề quan hệ không xác định; chỉ có 'which' phù hợp (không dùng 'that' sau dấu phẩy, loại D). 'Where' là trạng từ quan hệ nên không làm chủ ngữ được (loại A), còn B dư và sai nghĩa với 'it'."
      },
      {
        "id": "relative_clauses_q39",
        "num": 39,
        "stem": "He sees men, women, cat, dogs and cars ______  move round and round.",
        "options": {
          "A": "which​​​",
          "B": "where​​",
          "C": "that​ ​​",
          "D": "whom  ​"
        },
        "answer": "C",
        "explanation": "Danh từ đứng trước bao gồm cả người ('men, women') lẫn vật và động vật ('cat, dogs and cars'), do đó bắt buộc dùng đại từ quan hệ 'that' để thay thế cho cả hai đối tượng này."
      },
      {
        "id": "relative_clauses_q40",
        "num": 40,
        "stem": "This is the best play ______  I have ever seen.",
        "options": {
          "A": "which​​​",
          "B": "what​",
          "C": "whom​​",
          "D": "that"
        },
        "answer": "D",
        "explanation": "Sau cấu trúc so sánh nhất ('the best play'), theo quy tắc ngữ pháp chuẩn cần ưu tiên dùng đại từ quan hệ 'that'. Loại B ('what' không dùng sau danh từ tiền ngữ) và C ('whom' chỉ người)."
      },
      {
        "id": "relative_clauses_q41",
        "num": 41,
        "stem": "The assembly line, ______  by Henry Ford, has brought about many significant changes in automobile production.",
        "options": {
          "A": "which invented​",
          "B": "what was invented​",
          "C": "was invented​​",
          "D": "which was invented"
        },
        "answer": "D",
        "explanation": "Cần mệnh đề quan hệ không xác định mang nghĩa bị động (dấu hiệu 'by Henry Ford') để bổ nghĩa cho 'The assembly line', nên chọn 'which was invented'. Loại A (chủ động), B ('what' không làm đại từ quan hệ có tiền ngữ) và C (thiếu đại từ quan hệ)."
      },
      {
        "id": "relative_clauses_q42",
        "num": 42,
        "stem": "The lease with The Pawlicki Group ---- if modifications to the existing offices are made. (129 ETS4 2019)",
        "options": {
          "A": "has continued",
          "B": "will be continued",
          "C": "was continuing",
          "D": "has been continuing"
        },
        "answer": "B",
        "explanation": "Câu điều kiện loại 1 có mệnh đề 'if' ở thì hiện tại đơn ('are made'), nên mệnh đề chính chia thì tương lai đơn ('will + V'). Chủ ngữ 'The lease' (hợp đồng thuê) mang nghĩa bị động nên chọn 'will be continued' (sẽ được tiếp tục/gia hạn)."
      },
      {
        "id": "relative_clauses_q43",
        "num": 43,
        "stem": "---- the new acai juice blend has proved so popular, we should move quickly to increase our production volume. (115 ETS9 2019)",
        "options": {
          "A": "if",
          "B": "whether",
          "C": "since",
          "D": "unless"
        },
        "answer": "C",
        "explanation": "Cần liên từ chỉ nguyên nhân phù hợp ngữ cảnh: 'Vì (Since) hỗn hợp nước ép acai mới rất được ưa chuộng, chúng ta nên nhanh chóng tăng sản lượng'. Các liên từ 'if' (nếu), 'whether' (liệu rằng), 'unless' (trừ khi) không hợp nghĩa."
      },
      {
        "id": "relative_clauses_q44",
        "num": 44,
        "stem": "Unless the shipment of tiles arrives early, work on the lobby floor ---- after the holiday. (129 ETS10 2019)",
        "options": {
          "A": "has commenced",
          "B": "commencing",
          "C": "will commence",
          "D": "commenced"
        },
        "answer": "C",
        "explanation": "Câu điều kiện loại 1 với 'Unless' + hiện tại đơn ('arrives'), kết hợp trạng ngữ tương lai 'after the holiday', nên mệnh đề chính cần động từ chính chia ở thì tương lai đơn 'will commence' (sẽ bắt đầu)."
      },
      {
        "id": "relative_clauses_q45",
        "num": 45,
        "stem": "Mr. Ahmad decided to reserve a private room for the awards dinner ---- the restaurant was noisy. (107 ETE1 2020)",
        "options": {
          "A": "rather than",
          "B": "in case",
          "C": "such as",
          "D": "unless"
        },
        "answer": "B",
        "explanation": "Chỗ trống đứng trước một mệnh đề đầy đủ ('the restaurant was noisy') nên cần liên từ phù hợp nghĩa: 'Ông Ahmad quyết định đặt phòng riêng phòng khi (in case) nhà hàng ồn ào'. Loại A và C (không nối mệnh đề kiểu này), D ('unless' - trừ khi) sai nghĩa."
      },
      {
        "id": "relative_clauses_q46",
        "num": 46,
        "stem": "______  England won the World Cup.",
        "options": {
          "A": "it was in 1966 that​ ​​",
          "B": "it was on 1966 that​",
          "C": "it was in 1966 when​​",
          "D": "it was 1966 in that"
        },
        "answer": "A",
        "explanation": "Cấu trúc câu chẻ (cleft sentence) nhấn mạnh trạng ngữ chỉ thời gian: 'It + is/was + (giới từ + thời gian) + that + S + V'. Trước năm '1966' phải dùng giới từ 'in', nên 'It was in 1966 that' là chính xác."
      },
      {
        "id": "relative_clauses_q47",
        "num": 47,
        "stem": "Mr. Stanfford emailed the clients to ask ---- there is a train station near their office. (122 ETS3 2020)",
        "options": {
          "A": "so",
          "B": "about",
          "C": "whether",
          "D": "of"
        },
        "answer": "C",
        "explanation": "Sau động từ 'ask' là một mệnh đề danh ngữ đầy đủ ('there is a train station near their office'), nên cần liên từ 'whether' (hỏi liệu rằng có ga tàu nào gần văn phòng họ không). 'About' và 'of' là giới từ (không đi với mệnh đề), 'so' sai nghĩa."
      },
      {
        "id": "relative_clauses_q48",
        "num": 48,
        "stem": "If customers lose their original warranty ----, they can download a new one from the Web site. (102 ETS4 2020)",
        "options": {
          "A": "certify",
          "B": "certificate",
          "C": "certifiable",
          "D": "certifiably"
        },
        "answer": "B",
        "explanation": "Cần một danh từ số ít để hoàn thành cụm danh từ 'their original warranty ___' (phù hợp với 'a new one' ở vế sau). 'Warranty certificate' nghĩa là giấy chứng nhận bảo hành."
      },
      {
        "id": "relative_clauses_q49",
        "num": 49,
        "stem": "Employees are eligible to receive a ---- salary if they complete a special marketing course. (106 ETS4 2020)",
        "options": {
          "A": "possible",
          "B": "frequent",
          "C": "closed",
          "D": "higher"
        },
        "answer": "D",
        "explanation": "Dựa vào ngữ cảnh, nhân viên đủ điều kiện nhận mức lương 'cao hơn' (higher salary) nếu họ hoàn thành khóa học tiếp thị đặc biệt."
      },
      {
        "id": "relative_clauses_q50",
        "num": 50,
        "stem": "----- it does not rain tomorrow, tents will be set up for any scheduled outdoor events. (124 ETS9 2020)",
        "options": {
          "A": "though",
          "B": "even if",
          "C": "almost",
          "D": "besides that"
        },
        "answer": "B",
        "explanation": "Cần liên từ chỉ điều kiện giả định ở tương lai mang nghĩa 'ngay cả khi' (Even if it does not rain tomorrow - ngay cả khi ngày mai trời không mưa, lều vẫn sẽ được dựng)."
      },
      {
        "id": "relative_clauses_q51",
        "num": 51,
        "stem": "Ms. Larensky is applying with several different agencies to obtain the permits ____ for the outdoor art event. (104 ETS1 2018)",
        "options": {
          "A": "required",
          "B": "requiring",
          "C": "requires",
          "D": "will require"
        },
        "answer": "A",
        "explanation": "Rút gọn mệnh đề quan hệ dạng bị động: 'the permits (which are) required for...' -> dùng quá khứ phân từ 'required'."
      },
      {
        "id": "relative_clauses_q52",
        "num": 52,
        "stem": "The Neighborhood Involvement Program honors residents ____ volunteer their time to help Egin City. (111 ETS1 2018)",
        "options": {
          "A": "for",
          "B": "who",
          "C": "those",
          "D": "as"
        },
        "answer": "B",
        "explanation": "Cần đại từ quan hệ chỉ người ('residents') đóng vai trò chủ ngữ cho động từ 'volunteer' -> chọn 'who'."
      },
      {
        "id": "relative_clauses_q53",
        "num": 53,
        "stem": "A rise in energy price will mostly affect businesses ______ energy consumption is high. (124 ETS2 2018)",
        "options": {
          "A": "its",
          "B": "which",
          "C": "whose",
          "D": "more"
        },
        "answer": "C",
        "explanation": "Cần đại từ quan hệ sở hữu 'whose' đứng trước danh từ 'energy consumption' để bổ nghĩa cho 'businesses' (các doanh nghiệp có mức tiêu thụ năng lượng cao)."
      },
      {
        "id": "relative_clauses_q54",
        "num": 54,
        "stem": "Ultrora Action’s T-Pro tennis shoe is the lightest ______ on the market right now. (106 ETS3 2018)",
        "options": {
          "A": "that",
          "B": "any",
          "C": "one",
          "D": "either"
        },
        "answer": "C",
        "explanation": "Đại từ 'one' được dùng sau tính từ so sánh nhất ('the lightest') để thay thế cho danh từ đếm được số ít 'tennis shoe' đã nhắc đến trước đó."
      },
      {
        "id": "relative_clauses_q55",
        "num": 55,
        "stem": "Lately the community sports program has had a surplus of volunteers, _____ are students. (129 ETS3 2018)",
        "options": {
          "A": "in as much as",
          "B": "the reason being",
          "C": "because of them",
          "D": "most of whom"
        },
        "answer": "D",
        "explanation": "Cấu trúc mệnh đề quan hệ không xác định có lượng từ: 'từ chỉ số lượng + of + whom' (chỉ người, thay cho 'volunteers') để nối hai mệnh đề qua dấu phẩy."
      },
      {
        "id": "relative_clauses_q56",
        "num": 56,
        "stem": "Dr. Lin, the keynote speaker at this year’s Southeast Dentistry Convention, _____ several groundbreaking dental devices. (108 ETS5 2018)",
        "options": {
          "A": "invented",
          "B": "exceeded",
          "C": "supervised",
          "D": "communicated"
        },
        "answer": "A",
        "explanation": "Dựa vào ngữ cảnh, động từ 'invented' (phát minh) phù hợp nhất với tân ngữ 'several groundbreaking dental devices' (nhiều thiết bị nha khoa mang tính đột phá)."
      },
      {
        "id": "relative_clauses_q57",
        "num": 57,
        "stem": "Zypo Properties has just signed a lease agreement with the law firm _____ offices are on the third floor. (128 ETS1 2019)",
        "options": {
          "A": "how",
          "B": "what",
          "C": "whose",
          "D": "wherever"
        },
        "answer": "C",
        "explanation": "Cần đại từ quan hệ sở hữu 'whose' đứng trước danh từ 'offices' để chỉ sự sở hữu của 'the law firm' (công ty luật có văn phòng ở tầng ba)."
      },
      {
        "id": "relative_clauses_q58",
        "num": 58,
        "stem": "Please con gratulate Alan Schmit, ____ of the Leadership Award in Nursing at Knoll Hospital. (103 ETS2 2019)",
        "options": {
          "A": "won",
          "B": "wins",
          "C": "winning",
          "D": "winner"
        },
        "answer": "D",
        "explanation": "Cần một danh từ làm ngữ đồng vị bổ nghĩa cho 'Alan Schmit' và đứng trước giới từ 'of' -> chọn 'winner' (người chiến thắng giải thưởng)."
      },
      {
        "id": "relative_clauses_q59",
        "num": 59,
        "stem": "Of all the truck models available today, it can be difficult to figure out ____ would best suit your company’s needs. (115 ETS3 2019)",
        "options": {
          "A": "when",
          "B": "why",
          "C": "which",
          "D": "where"
        },
        "answer": "C",
        "explanation": "Cần đại từ làm chủ ngữ cho động từ 'would best suit' trong mệnh đề danh ngữ sau 'figure out' để lựa chọn từ một nhóm xác định ('all the truck models') -> chọn 'which'."
      },
      {
        "id": "relative_clauses_q60",
        "num": 60,
        "stem": "We congratulate all Riverside employees, whose ____ effort has resulted in a 20 percent reduction in waste disposal costs.(124 ETS3 2019)",
        "options": {
          "A": "collect",
          "B": "collective",
          "C": "collects",
          "D": "collector"
        },
        "answer": "B",
        "explanation": "Giữa đại từ quan hệ sở hữu 'whose' và danh từ 'effort' cần một tính từ bổ nghĩa -> chọn 'collective' (nỗ lực chung/tập thể)."
      },
      {
        "id": "relative_clauses_q61",
        "num": 61,
        "stem": "Dr. Yuina Hashimoto recently added another doctor to her practice, _____ allowing more patients to be seen. (120 ETS4 2019)",
        "options": {
          "A": "that",
          "B": "thus",
          "C": "which",
          "D": "so that"
        },
        "answer": "B",
        "explanation": "Sau dấu phẩy là phân từ hiện tại 'allowing' (rút gọn mệnh đề kết quả), nên cần trạng từ liên kết 'thus' (do đó). 'Which' cần động từ chia thì, còn 'so that' cần một mệnh đề đầy đủ."
      },
      {
        "id": "relative_clauses_q62",
        "num": 62,
        "stem": "A marketing campaign was designed to target ____ of the three demographics we identified. (117 ETS5 2019)",
        "options": {
          "A": "which",
          "B": "other",
          "C": "either",
          "D": "each"
        },
        "answer": "D",
        "explanation": "Cấu trúc 'each of + danh từ số nhiều' (mỗi nhóm trong ba nhóm nhân khẩu học). 'Either' chỉ dùng cho 2 đối tượng nên loại."
      },
      {
        "id": "relative_clauses_q63",
        "num": 63,
        "stem": "WRUZ Radio will broadcast a new show _____ to business news and economic analysis. (111 ETS6 2019)",
        "options": {
          "A": "allowed",
          "B": "prepared",
          "C": "dedicated",
          "D": "introduces"
        },
        "answer": "C",
        "explanation": "Rút gọn mệnh đề quan hệ dạng bị động: '(which is) dedicated to...' (dành riêng cho tin tức kinh doanh và phân tích kinh tế)."
      },
      {
        "id": "relative_clauses_q64",
        "num": 64,
        "stem": "Most of the people _____ attended yesterday’s workshop have already submitted their feedback. (124 ETS6 2019)",
        "options": {
          "A": "who",
          "B": "those",
          "C": "whose",
          "D": "some"
        },
        "answer": "A",
        "explanation": "Cần đại từ quan hệ chỉ người ('the people') làm chủ ngữ cho động từ 'attended', nên chọn 'who'."
      },
      {
        "id": "relative_clauses_q65",
        "num": 65,
        "stem": "_____ has time at the end of the day should make sure that all the file cabinets are locked. (117 ETS8 2019)",
        "options": {
          "A": "whom",
          "B": "who",
          "C": "whoever",
          "D": "whose"
        },
        "answer": "C",
        "explanation": "Cần đại từ quan hệ ghép 'whoever' (= anyone who - bất cứ ai) để mở đầu mệnh đề danh ngữ làm chủ ngữ cho động từ chính 'should make sure' và làm chủ ngữ cho 'has'."
      },
      {
        "id": "relative_clauses_q66",
        "num": 66,
        "stem": "The building inspector declared the new facility _________ sound and ready to open. (129 ETS8 2019)",
        "options": {
          "A": "structured",
          "B": "structuring",
          "C": "structural",
          "D": "structurally"
        },
        "answer": "D",
        "explanation": "Cần trạng từ 'structurally' để bổ nghĩa cho tính từ 'sound' (vững chắc về mặt kết cấu) trong cấu trúc 'declare + O + adj'."
      },
      {
        "id": "relative_clauses_q67",
        "num": 67,
        "stem": "Next year, our team will have a new task, _____ is to review design portfolios. (112 ETS9 2019)",
        "options": {
          "A": "although",
          "B": "which",
          "C": "after",
          "D": "because"
        },
        "answer": "B",
        "explanation": "Sau dấu phẩy là mệnh đề quan hệ không xác định bổ nghĩa cho danh từ chỉ vật 'a new task' và làm chủ ngữ cho 'is', nên chọn 'which'."
      },
      {
        "id": "relative_clauses_q68",
        "num": 68,
        "stem": "The item that Ms. Bak ordered from our catalog is _____ until 16 October. (110 ETS10 2019)",
        "options": {
          "A": "unavailable",
          "B": "occupied",
          "C": "uneventful",
          "D": "delivered"
        },
        "answer": "A",
        "explanation": "Về ngữ nghĩa, tính từ 'unavailable' (không có sẵn/hết hàng) kết hợp hợp lý với 'until 16 October' (cho đến ngày 16 tháng 10)."
      },
      {
        "id": "relative_clauses_q69",
        "num": 69,
        "stem": "Ambassador Chaturvedi wrote in his memoir that his parents taught him to do each job well, ______ it was. (121 ETS10 2019)",
        "options": {
          "A": "whoever",
          "B": "anyone",
          "C": "everything",
          "D": "whatever"
        },
        "answer": "D",
        "explanation": "Cần 'whatever' (= no matter what - bất kể đó là gì) để tạo mệnh đề nhượng bộ đề cập đến 'each job' (công việc - chỉ vật)."
      },
      {
        "id": "relative_clauses_q70",
        "num": 70,
        "stem": "Hemlin Corporation is looking for a sales representative _____ primary role will be expanding business in the northwest region. (125 ETS10 2019)",
        "options": {
          "A": "that",
          "B": "whose",
          "C": "who",
          "D": "which"
        },
        "answer": "B",
        "explanation": "Trước cụm danh từ 'primary role' cần đại từ quan hệ sở hữu 'whose' (đại diện bán hàng có vai trò chính là...)."
      },
      {
        "id": "relative_clauses_q71",
        "num": 71,
        "stem": "Neeson Pro garments are made of a synthetic blend that is ______ to staining.(130 ETS10 2019)",
        "options": {
          "A": "exposed",
          "B": "automatic",
          "C": "limited",
          "D": "vulnerable"
        },
        "answer": "D",
        "explanation": "Cụm tính từ 'be vulnerable to + N/V-ing' mang nghĩa dễ bị ảnh hưởng/dễ bị bám bẩn ('vulnerable to staining'), phù hợp ngữ cảnh và giới từ 'to'."
      },
      {
        "id": "relative_clauses_q72",
        "num": 72,
        "stem": "Ricardo Sosa, the executive chef at Restaurant Ninal, responds to guests suggestions ______. (120 ETS1 2020)",
        "options": {
          "A": "respect",
          "B": "respects",
          "C": "respectfully",
          "D": "respected"
        },
        "answer": "C",
        "explanation": "Cần trạng từ 'respectfully' (một cách tôn trọng) để bổ nghĩa cho động từ 'responds'."
      },
      {
        "id": "relative_clauses_q73",
        "num": 73,
        "stem": "Customers _____ wish to return a defective item may do so within twenty days of the date of purchase. (117 ETS3 2020)",
        "options": {
          "A": "whose",
          "B": "who",
          "C": "which",
          "D": "whichever"
        },
        "answer": "B",
        "explanation": "Cần đại từ quan hệ chỉ người ('Customers') làm chủ ngữ cho động từ 'wish', nên chọn 'who'."
      },
      {
        "id": "relative_clauses_q74",
        "num": 74,
        "stem": "A recent study has found that those ____ regularly read food labels tend to be healthier. (112 ETS4 2020)",
        "options": {
          "A": "what",
          "B": "where",
          "C": "who",
          "D": "when"
        },
        "answer": "C",
        "explanation": "Cấu trúc 'those who + V' (những người mà...), trong đó 'who' thay cho 'those' (chỉ người) và làm chủ ngữ cho động từ 'read'."
      },
      {
        "id": "relative_clauses_q75",
        "num": 75,
        "stem": "Keeping the deal, Jan Butter’s latest volume on management style, is her most commercially _____ book to date. (107 ETS5 2020)",
        "options": {
          "A": "successfully",
          "B": "successful",
          "C": "succeed",
          "D": "success"
        },
        "answer": "B",
        "explanation": "Cần tính từ 'successful' đứng sau trạng từ 'commercially' để bổ nghĩa cho danh từ 'book' (cuốn sách thành công nhất về mặt thương mại)."
      },
      {
        "id": "relative_clauses_q76",
        "num": 76,
        "stem": "Employees can attend one of the many workshops offered, ____ seems most interesting. (112 ETS6 2020)",
        "options": {
          "A": "whichever",
          "B": "however",
          "C": "everyone",
          "D": "much"
        },
        "answer": "A",
        "explanation": "Cần đại từ quan hệ ghép 'whichever' (bất kỳ cái nào trong số đó) để chọn một trong nhóm xác định ('one of the many workshops offered') và làm chủ ngữ cho 'seems'."
      },
      {
        "id": "relative_clauses_q77",
        "num": 77,
        "stem": "Ms. Lau would like to know _____ Mr. Cole called the main office yesterday. (127 ETS7 2020)",
        "options": {
          "A": "whatever",
          "B": "while",
          "C": "why",
          "D": "who"
        },
        "answer": "C",
        "explanation": "Mệnh đề danh ngữ sau 'know' đã đầy đủ chủ ngữ, động từ và tân ngữ ('Mr. Cole called the main office'), nên cần trạng từ nghi vấn 'why' (tại sao)."
      },
      {
        "id": "relative_clauses_q78",
        "num": 78,
        "stem": "We do not have enough fabric samples, so please promptly return _____ ones you borrowed. (123 ETS9 2020)",
        "options": {
          "A": "what",
          "B": "whomever",
          "C": "whichever",
          "D": "whose"
        },
        "answer": "C",
        "explanation": "Cần một đại từ/từ hạn định quan hệ kép đứng trước 'ones' (thay cho 'fabric samples') mang nghĩa 'bất cứ mẫu nào trong số đó'. 'Whichever + N/ones' dùng để chỉ sự lựa chọn trong một tập hợp xác định ('whichever ones you borrowed' = bất cứ mẫu nào bạn đã mượn)."
      },
      {
        "id": "relative_clauses_q79",
        "num": 79,
        "stem": "Scientists at Lipkin Pharmaceuticals described findings similar to those reported ____. (128 ETS9 2020)",
        "options": {
          "A": "elsewhere",
          "B": "beyond",
          "C": "furthermore",
          "D": "wherever"
        },
        "answer": "A",
        "explanation": "Vị trí cuối câu cần một trạng từ chỉ nơi chốn bổ nghĩa cho phân từ 'reported'. 'Elsewhere' (ở nơi khác) phù hợp ngữ cảnh và ngữ pháp ('those reported elsewhere' = những phát hiện được báo cáo ở nơi khác). 'Wherever' là liên từ cần mệnh đề theo sau."
      },
      {
        "id": "relative_clauses_q80",
        "num": 80,
        "stem": "Chef Lind’s cookbook, ____ will be available next week, contains only dessert recipes. (130 ETS10 2020)",
        "options": {
          "A": "who",
          "B": "what",
          "C": "which",
          "D": "whose"
        },
        "answer": "C",
        "explanation": "Cần một đại từ quan hệ làm chủ ngữ trong mệnh đề quan hệ không xác định (có dấu phẩy) để thay thế cho danh từ chỉ vật 'Chef Lind’s cookbook'. 'Which' dùng cho vật và đứng trước động từ 'will be available'; 'who' chỉ người, 'whose' cần danh từ theo sau, 'what' không dùng sau danh từ tiền ngữ."
      }
    ]
  },
  {
    "id": "conjunctions",
    "title": "Mối quan hệ trong câu – Liên từ",
    "desc": "Although, despite, because, however, therefore...",
    "icon": "🧩",
    "count": 100,
    "questions": [
      {
        "id": "conjunctions_q1",
        "num": 1,
        "stem": "She got the job -------the fact that she had very little experience.",
        "options": {
          "A": "although",
          "B": "because of",
          "C": "despite",
          "D": "because"
        },
        "answer": "C",
        "explanation": "Sau chỗ trống là cụm danh từ 'the fact that...' nên cần giới từ (loại A, D là liên từ). Về ngữ nghĩa mang tính tương phản (nhận được việc >< ít kinh nghiệm), chọn 'despite' (mặc dù)."
      },
      {
        "id": "conjunctions_q2",
        "num": 2,
        "stem": "My sister's hand-writing is always so neat, ------- mine is a total mess.",
        "options": {
          "A": "although",
          "B": "nonetheless",
          "C": "otherwise",
          "D": "whereas"
        },
        "answer": "D",
        "explanation": "Cần liên từ nối hai mệnh đề mang nghĩa so sánh đối lập trực tiếp giữa chữ viết của chị gái (gọn gàng) và của tôi (lộn xộn), chọn 'whereas' (trong khi đó)."
      },
      {
        "id": "conjunctions_q3",
        "num": 3,
        "stem": "I lost the game, but I told myself that I had improved a lot -----.",
        "options": {
          "A": "in addition",
          "B": "because",
          "C": "nonetheless",
          "D": "despite"
        },
        "answer": "C",
        "explanation": "Vị trí cuối câu cần một trạng từ liên kết chỉ sự tương phản để nhấn mạnh ý (thua trận nhưng dù sao cũng đã tiến bộ nhiều), chọn 'nonetheless' (tuy nhiên / dẫu vậy)."
      },
      {
        "id": "conjunctions_q4",
        "num": 4,
        "stem": "Some people believe vaccines overload our immune system, making it less able to react to other diseases ---meningitis or AIDS, which are now threatening our health.",
        "options": {
          "A": "but for",
          "B": "lest",
          "C": "whereas",
          "D": "such as"
        },
        "answer": "D",
        "explanation": "Phía sau liệt kê các ví dụ cụ thể cho 'other diseases' (viêm màng não, AIDS) nên chọn 'such as' (như là / chẳng hạn như)."
      },
      {
        "id": "conjunctions_q5",
        "num": 5,
        "stem": "They like to keep their old houses rather than building the new ones ---- it is very hard and expensive to maintain them.",
        "options": {
          "A": "because of",
          "B": "even though",
          "C": "on the contrary",
          "D": "for example"
        },
        "answer": "B",
        "explanation": "Sau chỗ trống là một mệnh đề hoàn chỉnh ('it is very hard...') và mang nghĩa nhượng bộ/tương phản (thích giữ nhà cũ >< việc bảo trì rất khó và tốn kém), chọn 'even though' (mặc dù)."
      },
      {
        "id": "conjunctions_q6",
        "num": 6,
        "stem": "You'd better wear a helmet when you go roller-blading. ------ you could hurt yourself.",
        "options": {
          "A": "unless",
          "B": "instead",
          "C": "otherwise",
          "D": "therefore"
        },
        "answer": "C",
        "explanation": "Câu trước đưa ra lời khuyên ('You'd better...'), câu sau nêu hậu quả tiêu cực nếu không làm theo, nên chọn trạng từ liên kết 'otherwise' (nếu không thì)."
      },
      {
        "id": "conjunctions_q7",
        "num": 7,
        "stem": "Reading is an excellent way to increase your vocabulary. ------, it can also help you improve your grammar.",
        "options": {
          "A": "in addition",
          "B": "moreover",
          "C": "furthermore",
          "D": "all are correct"
        },
        "answer": "D",
        "explanation": "Cả 'in addition', 'moreover' và 'furthermore' đều mang nghĩa 'hơn nữa / ngoài ra' và đều đứng đầu câu trước dấu phẩy để bổ sung thêm thông tin tương đồng."
      },
      {
        "id": "conjunctions_q8",
        "num": 8,
        "stem": "The student's essay was badly written. ------, it was too short.",
        "options": {
          "A": "in addition",
          "B": "moreover",
          "C": "furthermore",
          "D": "all are correct"
        },
        "answer": "D",
        "explanation": "Cả 'in addition', 'moreover' và 'furthermore' đều là trạng từ liên kết mang nghĩa bổ sung (hơn nữa / thêm vào đó) và dùng đúng ngữ pháp đứng đầu câu trước dấu phẩy."
      },
      {
        "id": "conjunctions_q9",
        "num": 9,
        "stem": "Due to ---- a lack of production ---- increasing housing prices, Liverpool is now ranked as one of the least affordable cities countrywide.",
        "options": {
          "A": "neither / nor",
          "B": "no sooner / than",
          "C": "scarcely / before",
          "D": "both / and"
        },
        "answer": "D",
        "explanation": "Sau giới từ 'Due to' cần cặp liên từ tương hỗ nối hai cụm danh từ chỉ hai nguyên nhân song song dẫn đến giá cả đắt đỏ, chọn 'both ... and ...' (cả ... lẫn ...)."
      },
      {
        "id": "conjunctions_q10",
        "num": 10,
        "stem": "Mike has been told he will have to pay the fine ---- his high rank in the military.",
        "options": {
          "A": "even if",
          "B": "furthermore",
          "C": "despite",
          "D": "on purpose that"
        },
        "answer": "C",
        "explanation": "Sau chỗ trống là cụm danh từ 'his high rank in the military' và câu mang nghĩa tương phản (vẫn phải nộp phạt >< cấp bậc cao), chọn giới từ 'despite' (mặc dù / bất chấp)."
      },
      {
        "id": "conjunctions_q11",
        "num": 11,
        "stem": "Continued high-blood pressure is dangerous ---- it can increase the risk of heart disease and stroke.",
        "options": {
          "A": "however",
          "B": "so that",
          "C": "as",
          "D": "for instance"
        },
        "answer": "C",
        "explanation": "Cần liên từ nối hai mệnh đề chỉ quan hệ nguyên nhân – kết quả (cao huyết áp nguy hiểm vì nó làm tăng nguy cơ bệnh tim và đột quỵ), chọn 'as' (= because: bởi vì)."
      },
      {
        "id": "conjunctions_q12",
        "num": 12,
        "stem": "The inhabitants of our village claim that pedestrians have no choice but to risk their lives crossing the dangerous road as there is ---- a pedestrian bridge ---- a crosswalk.",
        "options": {
          "A": "not only / but also",
          "B": "both / and",
          "C": "neither / nor",
          "D": "no sooner / than"
        },
        "answer": "C",
        "explanation": "Ngữ cảnh cho thấy người đi bộ phải mạo hiểm băng qua đường nguy hiểm vì không có cầu vượt lẫn vạch sang đường, chọn cặp liên từ phủ định 'neither ... nor ...' (không ... cũng không ...)."
      },
      {
        "id": "conjunctions_q13",
        "num": 13,
        "stem": "_____ the Oscar Reward, the Cannes Film Festival is the biggest event which takes place in May in the South of France.",
        "options": {
          "A": "except for",
          "B": "such as",
          "C": "lest",
          "D": "unless"
        },
        "answer": "A",
        "explanation": "Sau chỗ trống là cụm danh từ 'the Oscar Reward' và câu mang nghĩa loại trừ (ngoại trừ giải Oscar thì LHP Cannes là sự kiện lớn nhất), chọn giới từ 'except for' (ngoại trừ)."
      },
      {
        "id": "conjunctions_q14",
        "num": 14,
        "stem": "---- vaccination has eliminated naturally occurring polio in North and South America, rare cases continue to occur in developing countries of Africa.",
        "options": {
          "A": "however",
          "B": "although",
          "C": "as a result of",
          "D": "hence"
        },
        "answer": "B",
        "explanation": "Cần liên từ phụ thuộc đứng đầu câu nối hai mệnh đề tương phản (đã xóa sổ ở châu Mỹ >< vẫn còn ca hiếm ở châu Phi), chọn 'although' (mặc dù)."
      },
      {
        "id": "conjunctions_q15",
        "num": 15,
        "stem": "The economy in China is booming; ---- many foreign investors are planning to enter China's market.",
        "options": {
          "A": "nonetheless",
          "B": "even if",
          "C": "so as to",
          "D": "that's why"
        },
        "answer": "D",
        "explanation": "Hai vế mang quan hệ nguyên nhân – kết quả (kinh tế Trung Quốc bùng nổ -> nhiều nhà đầu tư nước ngoài muốn gia nhập thị trường), chọn 'that's why' (đó là lý do tại sao)."
      },
      {
        "id": "conjunctions_q16",
        "num": 16,
        "stem": "Johnny Pacheco has a creative talent as a composer; ----, he is a successful arranger.",
        "options": {
          "A": "owing to",
          "B": "now that",
          "C": "though",
          "D": "moreover"
        },
        "answer": "D",
        "explanation": "Giữa dấu chấm phẩy (;) và dấu phẩy (,) cần trạng từ liên kết bổ sung ý tích cực tương đồng. 'Moreover' (hơn nữa) phù hợp cả ngữ pháp và ngữ cảnh."
      },
      {
        "id": "conjunctions_q17",
        "num": 17,
        "stem": "---- how long you've been using tobacco, you can still overcome your addiction to smoking.",
        "options": {
          "A": "regarding",
          "B": "although",
          "C": "no matter",
          "D": "even though"
        },
        "answer": "C",
        "explanation": "Cấu trúc 'no matter + how + adj/adv + S + V' (dù ... đến đâu). Các đáp án khác không đi trực tiếp với 'how long'."
      },
      {
        "id": "conjunctions_q18",
        "num": 18,
        "stem": "---- they tried hard, the students could not complete the project in time as they were lacking in skills and knowledge.",
        "options": {
          "A": "although",
          "B": "as",
          "C": "since",
          "D": "despite"
        },
        "answer": "A",
        "explanation": "Cần liên từ chỉ sự tương phản đứng trước mệnh đề ('they tried hard'). 'Although' (mặc dù) + mệnh đề phù hợp, còn 'despite' là giới từ đi với cụm danh từ."
      },
      {
        "id": "conjunctions_q19",
        "num": 19,
        "stem": "All the soldiers had to take their masks with them ---- there was a gas attack.",
        "options": {
          "A": "because of",
          "B": "so",
          "C": "so that",
          "D": "in case"
        },
        "answer": "D",
        "explanation": "Ngữ cảnh chỉ sự phòng ngừa ('phòng khi có cuộc tấn công khí độc'). 'In case' (phòng khi) + mệnh đề là đáp án chính xác."
      },
      {
        "id": "conjunctions_q20",
        "num": 20,
        "stem": "He should not have used office property. ----, he ought not to have been in the building at all outside office hours.",
        "options": {
          "A": "in addition to",
          "B": "owing to",
          "C": "so that",
          "D": "furthermore"
        },
        "answer": "D",
        "explanation": "Đứng đầu câu mới và ngăn cách bằng dấu phẩy nên cần trạng từ liên kết mang nghĩa bổ sung ý. 'Furthermore' (hơn nữa) phù hợp; 'in addition to' và 'owing to' là giới từ."
      },
      {
        "id": "conjunctions_q21",
        "num": 21,
        "stem": "She feels like giving up her job ---- the consequences she will face.",
        "options": {
          "A": "although",
          "B": "much as",
          "C": "as a result",
          "D": "regardless of"
        },
        "answer": "D",
        "explanation": "Phía sau chỗ trống là cụm danh từ ('the consequences she will face') nên cần giới từ. 'Regardless of' (bất kể) hợp ngữ pháp và nghĩa; 'although' và 'much as' cần mệnh đề."
      },
      {
        "id": "conjunctions_q22",
        "num": 22,
        "stem": "Smaller companies were merged into the parent company ---- creating a single organization.",
        "options": {
          "A": "despite",
          "B": "as a consequence",
          "C": "though",
          "D": "thereby"
        },
        "answer": "D",
        "explanation": "Cấu trúc 'thereby + V-ing' (nhờ đó / do đó dẫn đến kết quả là...) dùng để diễn tả kết quả trực tiếp của hành động trước đó."
      },
      {
        "id": "conjunctions_q23",
        "num": 23,
        "stem": "---- you fail, you will have the satisfaction of knowing that you tried.",
        "options": {
          "A": "whereas",
          "B": "unlike",
          "C": "provided",
          "D": "even if"
        },
        "answer": "D",
        "explanation": "Cần liên từ chỉ điều kiện nhượng bộ mang nghĩa 'ngay cả khi' trước mệnh đề ('you fail'). 'Even if' phù hợp nhất với ngữ cảnh."
      },
      {
        "id": "conjunctions_q24",
        "num": 24,
        "stem": "---- a person tries very hard to suppress the obsession, it continues to reoccur in an uncontrollable fashion.",
        "options": {
          "A": "no matter",
          "B": "besides",
          "C": "even though",
          "D": "therefore"
        },
        "answer": "C",
        "explanation": "Cần liên từ chỉ sự tương phản đi với mệnh đề ('a person tries...'). 'Even though' (mặc dù) đúng ngữ pháp; 'no matter' thiếu từ để hỏi (như how hard)."
      },
      {
        "id": "conjunctions_q25",
        "num": 25,
        "stem": "---- motor vehicles are the most preferable way of transport, they are also the major contributor to global warming.",
        "options": {
          "A": "whereas",
          "B": "on the other hand",
          "C": "on the contrary",
          "D": "whenever"
        },
        "answer": "A",
        "explanation": "Cần liên từ phụ thuộc nối hai mệnh đề có ý đối lập nhau. 'Whereas' (trong khi) dùng được ở đầu câu với mệnh đề; 'on the other hand' và 'on the contrary' là cụm trạng từ."
      },
      {
        "id": "conjunctions_q26",
        "num": 26,
        "stem": "---- oil was discovered in Alberta as early as 1914, the oil and gas industry really took off in the late 1960s when large deposits were discovered.",
        "options": {
          "A": "by contrast",
          "B": "as a result",
          "C": "therefore",
          "D": "in spite of the fact that"
        },
        "answer": "D",
        "explanation": "Cần cụm liên từ chỉ sự nhượng bộ nối hai mệnh đề. 'In spite of the fact that' (mặc dù thực tế là) + mệnh đề đúng ngữ pháp; các phương án còn lại đều là trạng từ liên kết."
      },
      {
        "id": "conjunctions_q27",
        "num": 27,
        "stem": "---- museums, libraries and archives are cultural institutions, they should ensure that their collections are built up in accordance with universally recognized moral principles.",
        "options": {
          "A": "in view of",
          "B": "in order to",
          "C": "as if",
          "D": "considering that"
        },
        "answer": "D",
        "explanation": "Phía sau là một mệnh đề nêu lý do/căn cứ nên cần liên từ 'considering that' (xét thấy rằng / vì). 'In view of' + danh từ, 'in order to' + V nguyên mẫu, 'as if' không hợp nghĩa."
      },
      {
        "id": "conjunctions_q28",
        "num": 28,
        "stem": "Smallpox was eventually declared eradicated in 1980, ---- a vigorous campaign of immunization by the World Health Organization.",
        "options": {
          "A": "nevertheless",
          "B": "thanks to",
          "C": "now that",
          "D": "in spite of"
        },
        "answer": "B",
        "explanation": "Phía sau là cụm danh từ ('a vigorous campaign...') chỉ nguyên nhân tích cực. 'Thanks to' (nhờ vào) + cụm danh từ phù hợp cả ngữ pháp lẫn nghĩa."
      },
      {
        "id": "conjunctions_q29",
        "num": 29,
        "stem": "During the war of 1812, the Royal Navy had more ships than the U.S. Navy; ----, they were able to maintain a tight blockade on American waters and transport British Army troops to American shores.",
        "options": {
          "A": "nonetheless",
          "B": "otherwise",
          "C": "by contrast",
          "D": "therefore"
        },
        "answer": "D",
        "explanation": "Giữa dấu chấm phẩy và dấu phẩy cần trạng từ liên kết chỉ kết quả (có nhiều tàu hơn -> do đó có thể phong tỏa). 'Therefore' (do đó) chính xác."
      },
      {
        "id": "conjunctions_q30",
        "num": 30,
        "stem": "Telecare is a telephone support service in the US which provides contact with people who are alone and isolated ---- they are aged or have disabilities.",
        "options": {
          "A": "in contrast to",
          "B": "because",
          "C": "on grounds of",
          "D": "despite"
        },
        "answer": "B",
        "explanation": "Phía sau là một mệnh đề ('they are aged or have disabilities') giải thích nguyên nhân nên cần liên từ 'because' (bởi vì). Các đáp án còn lại đều là giới từ đi với danh từ."
      },
      {
        "id": "conjunctions_q31",
        "num": 31,
        "stem": "Though Cholera is spread ---- directly or through flies and waste, water is the chief medium for spread of this disease and hence it is termed as water-borne disease.",
        "options": {
          "A": "either",
          "B": "neither",
          "C": "both",
          "D": "not only"
        },
        "answer": "A",
        "explanation": "Cấu trúc liên từ tương quan 'either ... or ...' (hoặc ... hoặc ...) dùng để nối hai cách thức song song ('directly' và 'through flies and waste')."
      },
      {
        "id": "conjunctions_q32",
        "num": 32,
        "stem": "---- offering the most essential services to mankind, the coastal wetlands and marine life of the Asian countries generate income for millions of people.",
        "options": {
          "A": "however",
          "B": "considering that",
          "C": "apart from",
          "D": "no matter"
        },
        "answer": "C",
        "explanation": "'Apart from + V-ing/N' mang nghĩa 'bên cạnh / ngoài ... ra', phù hợp về ngữ pháp (đứng trước danh động từ 'offering') và ngữ nghĩa bổ sung ý."
      },
      {
        "id": "conjunctions_q33",
        "num": 33,
        "stem": "Businesses are failing ---- a lack of trained workers and people to buy products.",
        "options": {
          "A": "in addition",
          "B": "because of",
          "C": "in spite of",
          "D": "thus ​"
        },
        "answer": "B",
        "explanation": "'Because of + cụm danh từ' diễn tả nguyên nhân ('bởi vì sự thiếu hụt...'), phù hợp với cụm danh từ 'a lack of...' và quan hệ nhân quả của câu."
      },
      {
        "id": "conjunctions_q34",
        "num": 34,
        "stem": "The coconut palm is ---- highly valued by the Pacific Islanders as both a source of food and medicine that it is called The Tree of Life.",
        "options": {
          "A": "such",
          "B": "much",
          "C": "too",
          "D": "so"
        },
        "answer": "D",
        "explanation": "Cấu trúc 'so + trạng từ/tính từ + ... + that + mệnh đề' (quá ... đến nỗi mà). Đứng trước cụm 'highly valued' phải dùng 'so' ('such' đi với cụm danh từ)."
      },
      {
        "id": "conjunctions_q35",
        "num": 35,
        "stem": "The research in biotechnology will provide ---- dramatic medical breakthroughs but also millions of dollars in new investment, and new opportunities for many people.",
        "options": {},
        "answer": "A",
        "explanation": "Câu hỏi bị thiếu danh sách lựa chọn A/B/C/D; đáp án chính xác về ngữ pháp cần điền là 'not only' theo cấu trúc liên từ tương quan 'not only ... but also ...' (không những ... mà còn ...)."
      },
      {
        "id": "conjunctions_q36",
        "num": 36,
        "stem": "In Japan, the oyster seed is ---- being cultured in nets to market size but also released on the bottom where good returns are being obtained two to three years later.",
        "options": {
          "A": "nevertheless",
          "B": "no matter",
          "C": "not only",
          "D": "no sooner"
        },
        "answer": "C",
        "explanation": "Cấu trúc liên từ tương quan 'not only ... but also ...' (không những ... mà còn ...) nối hai cấu trúc song song ('being cultured' và 'released')."
      },
      {
        "id": "conjunctions_q37",
        "num": 37,
        "stem": "Several years ago, a tobacco company attempted to sell a cigarette that made no smoke; ----, people who tested that product did not like the way it tasted.",
        "options": {
          "A": "however",
          "B": "despite",
          "C": "because",
          "D": "on account of"
        },
        "answer": "A",
        "explanation": "Vị trí giữa dấu chấm phẩy (;) và dấu phẩy (,) cần trạng từ liên kết chỉ sự tương phản; 'however' (tuy nhiên) phù hợp về cả ngữ pháp và ngữ nghĩa."
      },
      {
        "id": "conjunctions_q38",
        "num": 38,
        "stem": "The most common way of preserving genetic materials is to deposit seeds in gene banks; ---- that, cultivating plants in their original environment is the most natural preservation method.",
        "options": {
          "A": "provided",
          "B": "apart from",
          "C": "due to",
          "D": "regardless"
        },
        "answer": "B",
        "explanation": "'Apart from that' (bên cạnh đó / ngoài cách đó ra) dùng để bổ sung thêm phương pháp bảo tồn khác; 'regardless' thiếu giới từ 'of', còn 'provided' và 'due to' không phù hợp ngữ pháp/ngữ nghĩa."
      },
      {
        "id": "conjunctions_q39",
        "num": 39,
        "stem": "The name Holland is frequently used ---- the Netherlands, but it actually refers to the two Western coastal provinces, North and South Holland.",
        "options": {
          "A": "on the contrary",
          "B": "though",
          "C": "for instance",
          "D": "instead of"
        },
        "answer": "D",
        "explanation": "'Instead of + danh từ' (thay vì) phù hợp đứng trước danh từ riêng 'the Netherlands' để diễn tả việc dùng tên gọi Holland thay cho Hà Lan."
      },
      {
        "id": "conjunctions_q40",
        "num": 40,
        "stem": "---- recycling of wastes material solves the problem of garbage disposal at landfills, and saves resources, it entails large hidden costs in collecting, sorting and manufacturing.",
        "options": {
          "A": "since",
          "B": "as a consequence",
          "C": "nevertheless",
          "D": "much as"
        },
        "answer": "D",
        "explanation": "'Much as + mệnh đề' mang nghĩa tương đương 'although' (mặc dù), dùng để nối hai mệnh đề có ý nghĩa tương phản giữa lợi ích và chi phí ẩn của việc tái chế."
      },
      {
        "id": "conjunctions_q41",
        "num": 41,
        "stem": "The experts found that between forty million and eighty million people have been forced to move from their homes ---- dams.",
        "options": {
          "A": "hence",
          "B": "so long as",
          "C": "but",
          "D": "because of"
        },
        "answer": "D",
        "explanation": "'Because of + danh từ' (bởi vì) phù hợp đứng trước danh từ 'dams' để chỉ nguyên nhân khiến hàng chục triệu người phải rời bỏ nhà cửa."
      },
      {
        "id": "conjunctions_q42",
        "num": 42,
        "stem": "Replacement cost coverage ensures that your home will be fully rebuilt ---- a total loss.",
        "options": {
          "A": "so that",
          "B": "in case of",
          "C": "provided that",
          "D": "although"
        },
        "answer": "B",
        "explanation": "Sau chỗ trống là cụm danh từ 'a total loss' nên cần cụm giới từ 'in case of' (trong trường hợp xảy ra...); các đáp án còn lại đều là liên từ đi với mệnh đề."
      },
      {
        "id": "conjunctions_q43",
        "num": 43,
        "stem": "Since the 1970s, psychoanalysis has become less popular; ----, some people still prefer this kind of treatment.",
        "options": {
          "A": "however",
          "B": "despite",
          "C": "now that",
          "D": "likewise"
        },
        "answer": "A",
        "explanation": "Giữa dấu chấm phẩy (;) và dấu phẩy (,) cần trạng từ liên kết; 'however' (tuy nhiên) diễn tả sự tương phản giữa việc ít phổ biến hơn và việc vẫn có người ưa chuộng."
      },
      {
        "id": "conjunctions_q44",
        "num": 44,
        "stem": "While eating sweets, the brain instantly releases endorphins which make us feel happy and reduce pain; ---- many pediatricians give sweets to children while giving injections.",
        "options": {
          "A": "that's why",
          "B": "nonetheless",
          "C": "as long as",
          "D": "since"
        },
        "answer": "A",
        "explanation": "Mệnh đề sau nêu kết quả của mệnh đề trước, nên dùng 'that's why' (đó là lý do tại sao) để thể hiện mối quan hệ nhân quả hợp lý."
      },
      {
        "id": "conjunctions_q45",
        "num": 45,
        "stem": "Srirangam was an ancient place of pilgrimage for the Indians and was surrounded by a strong fort but there was ---- the necessary army ---- the weapons to protect it.",
        "options": {
          "A": "both / and",
          "B": "neither / nor",
          "C": "hardly / when",
          "D": "not only / but also"
        },
        "answer": "B",
        "explanation": "Liên từ 'but' báo hiệu sự tương phản với 'được bao quanh bởi pháo đài kiên cố', nên cần cặp liên từ phủ định 'neither ... nor ...' (không có cả quân đội lẫn vũ khí)."
      },
      {
        "id": "conjunctions_q46",
        "num": 46,
        "stem": "Employees need to continually expand their job skills ---- they can achieve their full personal potential.",
        "options": {
          "A": "so that",
          "B": "in case",
          "C": "otherwise",
          "D": "in addition to"
        },
        "answer": "A",
        "explanation": "Cần liên từ chỉ mục đích theo sau bởi mệnh đề (S + can + V). 'so that' (để mà) phù hợp ngữ pháp và ngữ nghĩa; 'in case' (phòng khi) sai nghĩa, 'otherwise' (nếu không thì) là trạng từ liên kết, 'in addition to' là giới từ (+ N/V-ing)."
      },
      {
        "id": "conjunctions_q47",
        "num": 47,
        "stem": "A violation of the law, ---- how slight, is a crime and therefore punishable.",
        "options": {
          "A": "even though",
          "B": "no matter",
          "C": "however",
          "D": "thereby"
        },
        "answer": "B",
        "explanation": "Cấu trúc 'no matter how + adj/adv' (dù ... đến thế nào đi nữa). Phía sau chỗ trống đã có 'how slight' nên chọn 'no matter' (không dùng 'however' vì 'however' = 'no matter how' sẽ bị lặp 'how')."
      },
      {
        "id": "conjunctions_q48",
        "num": 48,
        "stem": "Food producers claim that adding fiber to foods is difficult ---- it changes the qualities of the food.",
        "options": {
          "A": "in order that",
          "B": "whereas",
          "C": "since",
          "D": "nevertheless"
        },
        "answer": "C",
        "explanation": "Hai mệnh đề có quan hệ nguyên nhân – kết quả (thêm chất xơ rất khó VÌ nó làm thay đổi tính chất thực phẩm). 'since' (bởi vì) là liên từ nối hai mệnh đề đúng ngữ nghĩa."
      },
      {
        "id": "conjunctions_q49",
        "num": 49,
        "stem": "According to a theory, the tunnels under San Diego were built ---- enemies attacked the city.",
        "options": {
          "A": "despite",
          "B": "in order to",
          "C": "in case",
          "D": "so that  ​"
        },
        "answer": "C",
        "explanation": "Phía sau chỗ trống là một mệnh đề ('enemies attacked the city') nên loại 'despite' (+ N) và 'in order to' (+ V). Xét nghĩa: các đường hầm được xây 'phòng khi' (in case) kẻ thù tấn công thành phố."
      },
      {
        "id": "conjunctions_q50",
        "num": 50,
        "stem": "--- little space you have in your garden, it's always possible to grow something to eat.",
        "options": {
          "A": "hence",
          "B": "no matter how",
          "C": "so",
          "D": "although"
        },
        "answer": "B",
        "explanation": "Cấu trúc nhượng bộ 'no matter how + adj (little) + N + S + V' mang nghĩa 'dù bạn có ít không gian trong vườn đến thế nào đi nữa'."
      },
      {
        "id": "conjunctions_q51",
        "num": 51,
        "stem": "The updated training program is limited to site supervisors ---- the Casey Medical Care system. (113 ETS1 2018)",
        "options": {
          "A": "within",
          "B": "until",
          "C": "during",
          "D": "since"
        },
        "answer": "A",
        "explanation": "Phía sau chỗ trống là cụm danh từ chỉ phạm vi/tổ chức ('the Casey Medical Care system'). Giới từ 'within' (trong phạm vi/trong hệ thống) phù hợp nhất; các đáp án còn lại chỉ thời gian."
      },
      {
        "id": "conjunctions_q52",
        "num": 52,
        "stem": "According to the compensation guidelines, employees who regularly complete their work ----- it is due may receive bonuses. (120 ETS1 2018)",
        "options": {
          "A": "before",
          "B": "how",
          "C": "why",
          "D": "either"
        },
        "answer": "A",
        "explanation": "Cần liên từ chỉ thời gian phù hợp ngữ cảnh: nhân viên thường xuyên hoàn thành công việc 'trước khi' (before) đến hạn ('it is due') có thể được thưởng."
      },
      {
        "id": "conjunctions_q53",
        "num": 53,
        "stem": "---- the Nolan Credit Union parking area is now open to public, a section has been reserved for credit union employees. (128 ETS1 2018)",
        "options": {
          "A": "while",
          "B": "when",
          "C": "for",
          "D": "but"
        },
        "answer": "A",
        "explanation": "Hai mệnh đề mang nghĩa tương phản (bãi đỗ xe mở cho công chúng >< một khu vực được dành riêng cho nhân viên). Liên từ 'while' (mặc dù/trong khi) đứng đầu câu để nối hai mệnh đề tương phản."
      },
      {
        "id": "conjunctions_q54",
        "num": 54,
        "stem": "Pharmacy technicians are responsible for verifying and processing prescriptions ---- they are requested by a physician. (129 ETS1 2018)",
        "options": {
          "A": "as well as",
          "B": "as soon as",
          "C": "in regard to",
          "D": "in addition to"
        },
        "answer": "B",
        "explanation": "Phía sau chỗ trống là một mệnh đề đầy đủ ('they are requested by a physician'), nên chỉ có liên từ 'as soon as' (ngay khi) phù hợp. Các đáp án A, C, D đều là giới từ/cụm giới từ theo sau bởi danh từ/V-ing."
      },
      {
        "id": "conjunctions_q55",
        "num": 55,
        "stem": "---- the effectiveness of Maisey Stanton’s leadership on the town council, she will likely win next week’s mayoral election. (128 ETS2 2018)",
        "options": {
          "A": "Since",
          "B": "Given",
          "C": "Among",
          "D": "Upon"
        },
        "answer": "B",
        "explanation": "Phía sau chỗ trống là cụm danh từ ('the effectiveness of...'), không có động từ chính. Giới từ 'Given' (xét đến/dựa trên) đi với cụm danh từ và hợp ngữ nghĩa chỉ nguyên nhân/cơ sở; 'Since' chỉ nguyên nhân phải đi với mệnh đề."
      },
      {
        "id": "conjunctions_q56",
        "num": 56,
        "stem": "Customers still tend to place short notices in the classified section ---- there is no longer a mandated word limit. (130 ETS2 2018)",
        "options": {
          "A": "as if",
          "B": "so that",
          "C": "in case",
          "D": "even though"
        },
        "answer": "D",
        "explanation": "Hai mệnh đề mang nghĩa tương phản (khách hàng vẫn có xu hướng đăng tin ngắn >< không còn quy định giới hạn số từ). Liên từ nhượng bộ 'even though' (mặc dù) phù hợp nhất."
      },
      {
        "id": "conjunctions_q57",
        "num": 57,
        "stem": "Parking on Dahakno Street will be prohibited for a few days ---- emergency repairs to water lines. (109 ETS3 2018)",
        "options": {
          "A": "so that",
          "B": "as a result",
          "C": "in order to",
          "D": "because of"
        },
        "answer": "D",
        "explanation": "Phía sau chỗ trống là cụm danh từ chỉ nguyên nhân ('emergency repairs to water lines'). Cần giới từ 'because of' (bởi vì); 'so that' + mệnh đề, 'in order to' + V nguyên mẫu, 'as a result' thiếu 'of'."
      },
      {
        "id": "conjunctions_q58",
        "num": 58,
        "stem": "All Buchler Energy customers are encouraged to sign up for electronic statements ---- paper ones. (114 ETS4 2018)",
        "options": {
          "A": "except",
          "B": "through",
          "C": "instead of",
          "D": "according to"
        },
        "answer": "C",
        "explanation": "Xét ngữ cảnh: khách hàng được khuyến khích đăng ký sao kê điện tử 'thay vì' (instead of) sao kê giấy."
      },
      {
        "id": "conjunctions_q59",
        "num": 59,
        "stem": "Online orders are handled by Mr. Clark’s team, ---- regular mail orders are overseen by Ms. Adauto’s group. (120 ETS4 2018)",
        "options": {
          "A": "while",
          "B": "until",
          "C": "despite",
          "D": "whether"
        },
        "answer": "A",
        "explanation": "Cần liên từ nối hai mệnh đề có ý đối chiếu/tương phản giữa đơn hàng trực tuyến (nhóm ông Clark xử lý) và đơn hàng qua thư thường (nhóm bà Adauto phụ trách). 'while' (trong khi) phù hợp nhất."
      },
      {
        "id": "conjunctions_q60",
        "num": 60,
        "stem": "Please review the repair estimate carefully ---- it has been received from the maintenance department. (117 ETS5 2018)",
        "options": {
          "A": "then",
          "B": "while",
          "C": "ever since",
          "D": "as soon as"
        },
        "answer": "D",
        "explanation": "Phía sau là mệnh đề chỉ mốc thời điểm xảy ra trước hành động ở mệnh đề chính ('ngay khi bản ước tính sửa chữa được nhận từ bộ phận bảo trì'). Liên từ 'as soon as' (ngay khi) kết hợp với hiện tại hoàn thành rất chuẩn ngữ pháp và ngữ cảnh."
      },
      {
        "id": "conjunctions_q61",
        "num": 61,
        "stem": "The lawyers report that the merger was successfully concluded ---- last-minute negotiations. (124 ETS5 2018)",
        "options": {
          "A": "as well as",
          "B": "overall",
          "C": "thanks to",
          "D": "even if"
        },
        "answer": "C",
        "explanation": "Trước cụm danh từ 'last-minute negotiations' cần giới từ chỉ nguyên nhân tích cực. 'Thanks to' (nhờ vào) phù hợp ngữ cảnh: thương vụ sáp nhập hoàn tất thành công nhờ các cuộc đàm phán vào phút chót."
      },
      {
        "id": "conjunctions_q62",
        "num": 62,
        "stem": "---- in the news, the Honorable Cynthia Rengle is now making headlines with her proposal to drastically reduce local taxes. (127 ETS5 2018)",
        "options": {
          "A": "Less",
          "B": "Enough",
          "C": "Apart",
          "D": "Seldom"
        },
        "answer": "D",
        "explanation": "Cần trạng từ bổ nghĩa cho cụm giới từ rút gọn 'in the news' để tạo sự tương phản với vế sau ('is now making headlines'). 'Seldom' (hiếm khi) phù hợp nghĩa: hiếm khi xuất hiện trên tin tức, nhưng nay lại gây chú ý lớn."
      },
      {
        "id": "conjunctions_q63",
        "num": 63,
        "stem": "Despite being the audience’s least favorite film at the Star Film Festival, Lost Dog ---- won the critics’ award for best animation. (128 ETS5 2018)",
        "options": {
          "A": "furthermore",
          "B": "without",
          "C": "nevertheless",
          "D": "neither"
        },
        "answer": "C",
        "explanation": "Vế đầu dùng 'Despite' (mặc dù) chỉ sự tương phản, nên vế chính cần trạng từ nhấn mạnh sự đối lập đứng trước động từ 'won'. 'Nevertheless' (tuy nhiên/dẫu vậy) phù hợp nhất."
      },
      {
        "id": "conjunctions_q64",
        "num": 64,
        "stem": "Ms. Pham requested a refund ---- the coffeemaker she received was damaged. (104 ETS1 2019)",
        "options": {
          "A": "despite",
          "B": "why",
          "C": "concerning",
          "D": "because"
        },
        "answer": "D",
        "explanation": "Sau chỗ trống là một mệnh đề đầy đủ (S + V) chỉ nguyên nhân yêu cầu hoàn tiền. 'Because' (bởi vì) là liên từ chỉ nguyên nhân thích hợp; 'despite' và 'concerning' là giới từ nên bị loại."
      },
      {
        "id": "conjunctions_q65",
        "num": 65,
        "stem": "---- industry professionals are allowed to purchase tickets to the Kuo Photography Fair. (110 ETS1 2019)",
        "options": {
          "A": "only",
          "B": "until",
          "C": "unless",
          "D": "quite"
        },
        "answer": "A",
        "explanation": "Cần trạng từ bổ nghĩa giới hạn cho cụm danh từ chủ ngữ 'industry professionals'. 'Only' (chỉ có) phù hợp về ngữ pháp và nghĩa: chỉ các chuyên gia trong ngành mới được mua vé."
      },
      {
        "id": "conjunctions_q66",
        "num": 66,
        "stem": "---- Jemburger opened its newest franchise, the first 100 customers were given free hamburgers. (115 ETS1 2019)",
        "options": {
          "A": "now",
          "B": "when",
          "C": "as if",
          "D": "after all"
        },
        "answer": "B",
        "explanation": "Cần liên từ nối hai mệnh đề chỉ thời gian. 'When' (khi) diễn tả thời điểm Jemburger khai trương cửa hàng mới thì 100 khách đầu tiên được tặng bánh."
      },
      {
        "id": "conjunctions_q67",
        "num": 67,
        "stem": "---- the rent increase in less than 2 percent, Selwin Electrical Supply will continue to lease the space. (119 ETS1 2019)",
        "options": {
          "A": "as long as",
          "B": "along with",
          "C": "not only",
          "D": "otherwise"
        },
        "answer": "A",
        "explanation": "Cần liên từ chỉ điều kiện nối hai mệnh đề. 'As long as' (miễn là) phù hợp nghĩa: miễn là mức tăng tiền thuê dưới 2%, công ty sẽ tiếp tục thuê mặt bằng."
      },
      {
        "id": "conjunctions_q68",
        "num": 68,
        "stem": "---- the popularity of the BPT39 wireless speaker, production will be increased fivefold starting next month. (127 ETS1 2019)",
        "options": {
          "A": "on behalf of",
          "B": "whether",
          "C": "moreover",
          "D": "as a result of"
        },
        "answer": "D",
        "explanation": "Sau chỗ trống là cụm danh từ 'the popularity of...' chỉ nguyên nhân dẫn đến việc tăng sản lượng gấp 5 lần. 'As a result of' (do/vì) là cụm giới từ chỉ nguyên nhân phù hợp nhất."
      },
      {
        "id": "conjunctions_q69",
        "num": 69,
        "stem": "When leaving the auditorium, please exit ---- the doors on the lower level. (108 ETS2 2019)",
        "options": {
          "A": "except",
          "B": "inside",
          "C": "without",
          "D": "through"
        },
        "answer": "D",
        "explanation": "Cần giới từ chỉ hướng di chuyển đi qua lối ra. Cụm 'exit through the doors' (đi ra qua các cánh cửa) phù hợp ngữ cảnh và cấu trúc."
      },
      {
        "id": "conjunctions_q70",
        "num": 70,
        "stem": "Residents visited City Hall to ask ---- developers will preserve the historic properties. (112 ETS2 2019)",
        "options": {
          "A": "although",
          "B": "since",
          "C": "whether",
          "D": "both"
        },
        "answer": "C",
        "explanation": "Sau động từ 'ask' cần liên từ mở đầu mệnh đề danh ngữ dạng câu hỏi gián tiếp có/không. 'Whether' (liệu rằng) phù hợp: hỏi liệu các nhà phát triển có bảo tồn các di sản lịch sử hay không."
      },
      {
        "id": "conjunctions_q71",
        "num": 71,
        "stem": "---- receiving the engineering award, Ms. Kwon made a point of thanking longtime mentors. (118 ETS2 2019)",
        "options": {
          "A": "onto",
          "B": "unlike",
          "C": "about",
          "D": "upon"
        },
        "answer": "D",
        "explanation": "Cấu trúc 'Upon + V-ing' mang nghĩa 'ngay khi làm gì đó'. 'Upon receiving' (ngay khi nhận giải thưởng) phù hợp cả ngữ pháp lẫn ngữ cảnh."
      },
      {
        "id": "conjunctions_q72",
        "num": 72,
        "stem": "Choosing the best software tool to eliminate computer viruses is rarely simple, ---- it is important to seek expert advice. (120 ETS2 2019)",
        "options": {
          "A": "why",
          "B": "then",
          "C": "nor",
          "D": "so"
        },
        "answer": "D",
        "explanation": "Sau dấu phẩy cần liên từ kết hợp (FANBOYS) để nối hai mệnh đề độc lập mang quan hệ nguyên nhân - kết quả. 'So' (vì vậy) phù hợp; 'then' là trạng từ nên không nối hai mệnh đề chỉ bằng dấu phẩy."
      },
      {
        "id": "conjunctions_q73",
        "num": 73,
        "stem": "Ms. Delgado would like to meet with all loan officers ---- reviewing any more loan. (121 ETS2 2019)",
        "options": {
          "A": "now that",
          "B": "as though",
          "C": "before",
          "D": "often"
        },
        "answer": "C",
        "explanation": "Trước danh động từ 'reviewing' cần giới từ/liên từ rút gọn chỉ thời gian. 'Before' (trước khi) đi được với V-ing và hợp nghĩa; 'now that' và 'as though' phải đi với mệnh đề đầy đủ."
      },
      {
        "id": "conjunctions_q74",
        "num": 74,
        "stem": "---- poorly the high-speed printer may be functioning, it is still making copies that are adequate for our purposes. (128 ETS2 2019)",
        "options": {
          "A": "rather",
          "B": "seldom",
          "C": "however",
          "D": "thoroughly"
        },
        "answer": "C",
        "explanation": "Áp dụng cấu trúc nhượng bộ 'However + adj/adv + S + V, S + V' (Dù ... đến mức nào đi nữa). Ở đây 'However poorly...' mang nghĩa: dù máy in có hoạt động kém đến đâu."
      },
      {
        "id": "conjunctions_q75",
        "num": 75,
        "stem": "The bank’s cashier windows are open daily from 8:00 am to 4:00 pm ---- on Sundays. (113 ETS3 2019)",
        "options": {
          "A": "except",
          "B": "until",
          "C": "nor",
          "D": "yet"
        },
        "answer": "A",
        "explanation": "Trước cụm giới từ 'on Sundays' cần từ chỉ sự ngoại lệ tương phản với 'daily' (hằng ngày). 'Except' (ngoại trừ) có thể đứng trước cụm giới từ và hợp nghĩa: mở cửa hằng ngày ngoại trừ Chủ nhật."
      },
      {
        "id": "conjunctions_q76",
        "num": 76,
        "stem": "---- the high cost of fuel, customers are buying smaller, more efficient cars. (121 ETS3 2019)",
        "options": {
          "A": "together with",
          "B": "instead of",
          "C": "as well as",
          "D": "because of"
        },
        "answer": "D",
        "explanation": "Sau chỗ trống là cụm danh từ 'the high cost of fuel'. Cần giới từ chỉ nguyên nhân phù hợp ngữ cảnh (Vì chi phí nhiên liệu cao, khách hàng mua xe nhỏ và tiết kiệm hơn) -> 'because of'."
      },
      {
        "id": "conjunctions_q77",
        "num": 77,
        "stem": "Andrzej Ptak’s photography Website will be available online ---- we have finished organizing and cataloging his work. (125 ETS3 2019)",
        "options": {
          "A": "how",
          "B": "once",
          "C": "so too",
          "D": "not only"
        },
        "answer": "B",
        "explanation": "Sau chỗ trống là một mệnh đề hoàn chỉnh. Cần liên từ chỉ thời gian mang nghĩa 'một khi / ngay khi' (Trang web sẽ có trực tuyến ngay khi chúng tôi hoàn tất việc sắp xếp) -> 'once'."
      },
      {
        "id": "conjunctions_q78",
        "num": 78,
        "stem": "----- space in the bathroom was limited, the contractor managed to fit in two sinks and a shower. (127 ETS3 2019)",
        "options": {
          "A": "both",
          "B": "so that",
          "C": "whether",
          "D": "even though"
        },
        "answer": "D",
        "explanation": "Cần liên từ nối hai mệnh đề mang nghĩa tương phản (Mặc dù không gian phòng tắm hạn chế, nhà thầu vẫn xoay xở lắp được hai bồn rửa và một vòi sen) -> 'even though'."
      },
      {
        "id": "conjunctions_q79",
        "num": 79,
        "stem": "---- a national holiday falls on a Thursday, the Barstow Company allows employees to take off Friday as well. (129 ETS3 2019)",
        "options": {
          "A": "even",
          "B": "for",
          "C": "nearly",
          "D": "whenever"
        },
        "answer": "D",
        "explanation": "Cần một liên từ phụ thuộc đứng đầu mệnh đề chỉ thời gian/điều kiện mang nghĩa 'bất cứ khi nào' (Bất cứ khi nào ngày lễ rơi vào thứ Năm, công ty cho nhân viên nghỉ thêm thứ Sáu) -> 'whenever'."
      },
      {
        "id": "conjunctions_q80",
        "num": 80,
        "stem": "Customers can wait in the reception area ---- our mechanics complete the car repair. (106 ETS4 2019)",
        "options": {
          "A": "whether",
          "B": "except",
          "C": "while",
          "D": "during"
        },
        "answer": "C",
        "explanation": "Sau chỗ trống là một mệnh đề ('our mechanics complete...'). Loại giới từ 'during' (+ danh từ); chọn liên từ chỉ thời gian 'while' (trong khi)."
      },
      {
        "id": "conjunctions_q81",
        "num": 81,
        "stem": "---- assemble your Gessen product, first read all instructions and gather all required tools. (116 ETS4 2019)",
        "options": {
          "A": "for the purpose of",
          "B": "to be sure",
          "C": "in order to",
          "D": "for example"
        },
        "answer": "C",
        "explanation": "Sau chỗ trống là động từ nguyên mẫu 'assemble'. Cấu trúc 'in order to + V (nguyên mẫu)' mang nghĩa chỉ mục đích (Để lắp ráp sản phẩm...)."
      },
      {
        "id": "conjunctions_q82",
        "num": 82,
        "stem": "---- Mr. Donovan has expected the charity event to be a success, the response from the community still overwhelmed him. (125 ETS4 2019)​a. whenever",
        "options": {
          "B": "although",
          "C": "even so",
          "D": "in spite of"
        },
        "answer": "B",
        "explanation": "Sau chỗ trống là một mệnh đề và hai vế mang nghĩa tương phản (có từ 'still'). Loại 'in spite of' (+ danh từ) và 'even so' (trạng từ liên kết); chọn liên từ 'although' (mặc dù)."
      },
      {
        "id": "conjunctions_q83",
        "num": 83,
        "stem": "Greenville Library has hired an office assistant not only to perform general office duties ------ to support an ongoing special project. (128 ETS4 2019)",
        "options": {
          "A": "but also",
          "B": "only if",
          "C": "other than",
          "D": "as for"
        },
        "answer": "A",
        "explanation": "Cấu trúc liên từ tương quan 'not only ... but also ...' (không chỉ ... mà còn ...)."
      },
      {
        "id": "conjunctions_q84",
        "num": 84,
        "stem": "---- food critics recommend ZJ’s Bistro as the best restaurant in the area, most local residents prefer Dree’s Café. (118 ETS5 2019)",
        "options": {
          "A": "whenever",
          "B": "although",
          "C": "so that",
          "D": "among"
        },
        "answer": "B",
        "explanation": "Cần liên từ nối hai mệnh đề có nghĩa tương phản (Mặc dù các nhà phê bình ẩm thực gợi ý ZJ’s Bistro, đa số cư dân địa phương lại thích Dree’s Café hơn) -> 'although'."
      },
      {
        "id": "conjunctions_q85",
        "num": 85,
        "stem": "---- the proposal for the Southside Library garden was incomplete and had an unclear timetable, it was rejected. (124 ETS5 2019)",
        "options": {
          "A": "until",
          "B": "because",
          "C": "while",
          "D": "unless"
        },
        "answer": "B",
        "explanation": "Cần liên từ chỉ nguyên nhân nối hai mệnh đề có quan hệ nhân - quả (Bởi vì đề xuất chưa hoàn chỉnh và lịch trình không rõ ràng nên nó bị từ chối) -> 'because'."
      },
      {
        "id": "conjunctions_q86",
        "num": 86,
        "stem": "---- it is relatively small, the fitness center at Ginder Apartment is very popular with residents. (115 ETS6 2019)",
        "options": {
          "A": "reasoning",
          "B": "essentially",
          "C": "although",
          "D": "throughout"
        },
        "answer": "C",
        "explanation": "Cần liên từ đứng trước mệnh đề 'it is relatively small' để diễn tả sự tương phản (Mặc dù tương đối nhỏ, phòng tập vẫn rất được cư dân ưa chuộng) -> 'although'."
      },
      {
        "id": "conjunctions_q87",
        "num": 87,
        "stem": "----- construction in progress at the old town hall building, tourist groups will not be allowed to enter the site. (121 ETS6 2019)",
        "options": {
          "A": "now that",
          "B": "while",
          "C": "even if",
          "D": "due to"
        },
        "answer": "D",
        "explanation": "Sau chỗ trống là cụm danh từ 'construction in progress...' (không có động từ chia thì). Loại các liên từ (+ mệnh đề); chọn giới từ chỉ nguyên nhân 'due to' (do / vì)."
      },
      {
        "id": "conjunctions_q88",
        "num": 88,
        "stem": "Save 25 percent on any printer ---- you buy a laptop computer at Diego’s Electronics. (127 ETS6 2019)",
        "options": {
          "A": "whereas",
          "B": "whenever",
          "C": "such as",
          "D": "seeing that"
        },
        "answer": "B",
        "explanation": "Cần liên từ nối mệnh đề chỉ thời điểm/điều kiện phù hợp ngữ cảnh quảng cáo (Tiết kiệm 25% cho bất kỳ máy in nào bất cứ khi nào bạn mua máy tính xách tay) -> 'whenever'."
      },
      {
        "id": "conjunctions_q89",
        "num": 89,
        "stem": "The quality assurance department needs to hire additional staff ---- production has increased by 50 percent. (129 ETS6 2019)",
        "options": {
          "A": "even though",
          "B": "since",
          "C": "because of",
          "D": "therefore"
        },
        "answer": "B",
        "explanation": "Sau chỗ trống là mệnh đề chỉ nguyên nhân ('production has increased...'). Loại 'because of' (+ danh từ) và 'therefore' (trạng từ liên kết); chọn liên từ 'since' (bởi vì)."
      },
      {
        "id": "conjunctions_q90",
        "num": 90,
        "stem": "Our most recent survey was sent to clients just last week, ---- it is too soon to send another one. (110 ETS7 2019)",
        "options": {
          "A": "when",
          "B": "since",
          "C": "so",
          "D": "finally"
        },
        "answer": "C",
        "explanation": "Cần liên từ kết hợp đứng sau dấu phẩy nối hai mệnh đề độc lập mang quan hệ nguyên nhân - kết quả (Khảo sát mới gửi tuần trước, vì vậy còn quá sớm để gửi thêm bản nữa) -> 'so'."
      },
      {
        "id": "conjunctions_q91",
        "num": 91,
        "stem": "---- our public relations manager, Ms. Ghzarian has just been appointed vice president of media relations. (118 ETS7 2019)",
        "options": {
          "A": "Sincerely",
          "B": "Immediately",
          "C": "Solely",
          "D": "Formerly"
        },
        "answer": "D",
        "explanation": "Trạng từ 'Formerly' (trước đây) bổ nghĩa cho cụm danh từ đồng vị chỉ chức vụ cũ 'our public relations manager', phù hợp ngữ cảnh cô Ghzarian vừa được bổ nhiệm chức vụ mới."
      },
      {
        "id": "conjunctions_q92",
        "num": 92,
        "stem": "The annual report has been posted online, ---- the director’s office has not yet received a printed copy. (121 ETS7 2019)",
        "options": {
          "A": "but",
          "B": "why",
          "C": "with",
          "D": "once"
        },
        "answer": "A",
        "explanation": "Cần liên từ đẳng lập nối hai mệnh đề độc lập mang nghĩa tương phản (đã đăng trực tuyến, nhưng văn phòng giám đốc vẫn chưa nhận được bản in), nên chọn 'but'."
      },
      {
        "id": "conjunctions_q93",
        "num": 93,
        "stem": "Kovox Ltd. aims to optimize quality ---- reducing the impact on the environment. (127 ETS7 2019)",
        "options": {
          "A": "which",
          "B": "while",
          "C": "because",
          "D": "unless"
        },
        "answer": "B",
        "explanation": "Cấu trúc rút gọn mệnh đề trạng ngữ cùng chủ ngữ với 'while + V-ing' diễn tả hai hành động diễn ra song song (tối ưu hóa chất lượng trong khi giảm tác động lên môi trường)."
      },
      {
        "id": "conjunctions_q94",
        "num": 94,
        "stem": "All Hershel Industries employees must have a valid ID card ---- enter the building. (129 ETS7 2019)",
        "options": {
          "A": "in order to",
          "B": "as long as",
          "C": "regarding",
          "D": "always"
        },
        "answer": "A",
        "explanation": "Phía sau chỗ trống là động từ nguyên mẫu 'enter', nên cần cụm liên từ chỉ mục đích 'in order to + V-inf' (để vào tòa nhà)."
      },
      {
        "id": "conjunctions_q95",
        "num": 95,
        "stem": "Full of old-fashioned charm, the Bronstad Inn ---- offers modern conveniences. (103 ETS8 2019)",
        "options": {
          "A": "plus",
          "B": "else",
          "C": "also",
          "D": "less"
        },
        "answer": "C",
        "explanation": "Vị trí giữa chủ ngữ 'the Bronstad Inn' và động từ chính 'offers' cần trạng từ bổ sung thông tin 'also' (cũng cung cấp các tiện nghi hiện đại)."
      },
      {
        "id": "conjunctions_q96",
        "num": 96,
        "stem": "Durr Island has become popular with tourists ---- its rich culture of art and music. (108 ETS8 2019)",
        "options": {
          "A": "provided that",
          "B": "because of",
          "C": "even",
          "D": "how"
        },
        "answer": "B",
        "explanation": "Phía sau chỗ trống là cụm danh từ 'its rich culture of art and music', cần giới từ chỉ nguyên nhân 'because of' (bởi vì/nhờ vào)."
      },
      {
        "id": "conjunctions_q97",
        "num": 97,
        "stem": "The MHS wireless speaker not only works with smartphones ---- is waterproof as well. (112 ETS8 2019)",
        "options": {
          "A": "but",
          "B": "and",
          "C": "however",
          "D": "besides"
        },
        "answer": "A",
        "explanation": "Cấu trúc liên từ tương quan 'not only ... but ... as well' (không chỉ ... mà còn ...) nối hai cụm động từ song song 'works' và 'is'."
      },
      {
        "id": "conjunctions_q98",
        "num": 98,
        "stem": "The Internet connection will be closely monitored ---- the source of the slowdown can be confirmed. (122 ETS8 2019)",
        "options": {
          "A": "why",
          "B": "until",
          "C": "due to",
          "D": "just as"
        },
        "answer": "B",
        "explanation": "Phía sau là một mệnh đề hoàn chỉnh; xét theo ngữ cảnh cần liên từ chỉ thời gian 'until' (giám sát chặt chẽ cho đến khi xác nhận được nguyên nhân chậm mạng)."
      },
      {
        "id": "conjunctions_q99",
        "num": 99,
        "stem": "Ms. Penner assured us that ---- work stopped during the power failure, production targets would be met. (125 ETS8 2019)",
        "options": {
          "A": "although",
          "B": "at",
          "C": "her",
          "D": "never"
        },
        "answer": "A",
        "explanation": "Cần liên từ chỉ sự nhượng bộ 'although' để nối hai mệnh đề đối lập nhau sau 'that' (mặc dù công việc dừng lại khi mất điện, mục tiêu sản xuất vẫn sẽ đạt được)."
      },
      {
        "id": "conjunctions_q100",
        "num": 100,
        "stem": "King Street will be closed in the month of September ----- repair work. (121 ETS9 2019)",
        "options": {
          "A": "because of",
          "B": "so that",
          "C": "as if",
          "D": "rather than"
        },
        "answer": "A",
        "explanation": "Phía sau là cụm danh từ 'repair work' nên cần giới từ chỉ nguyên nhân 'because of' (đóng cửa vì công việc sửa chữa); 'so that' và 'as if' cần mệnh đề theo sau."
      }
    ]
  }
];
