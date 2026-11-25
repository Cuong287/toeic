// ETS TOEIC 2026 exam definitions, official answer keys, page/audio mappings, and score conversion

export const ETS_PARTS = [
  { id: 1, section: 'L', name: 'Part 1', title: 'Photographs', from: 1, to: 6, count: 6, options: ['A', 'B', 'C', 'D'] },
  { id: 2, section: 'L', name: 'Part 2', title: 'Question-Response', from: 7, to: 31, count: 25, options: ['A', 'B', 'C'] },
  { id: 3, section: 'L', name: 'Part 3', title: 'Conversations', from: 32, to: 70, count: 39, options: ['A', 'B', 'C', 'D'] },
  { id: 4, section: 'L', name: 'Part 4', title: 'Short Talks', from: 71, to: 100, count: 30, options: ['A', 'B', 'C', 'D'] },
  { id: 5, section: 'R', name: 'Part 5', title: 'Incomplete Sentences', from: 101, to: 130, count: 30, options: ['A', 'B', 'C', 'D'] },
  { id: 6, section: 'R', name: 'Part 6', title: 'Text Completion', from: 131, to: 146, count: 16, options: ['A', 'B', 'C', 'D'] },
  { id: 7, section: 'R', name: 'Part 7', title: 'Reading Comprehension', from: 147, to: 200, count: 54, options: ['A', 'B', 'C', 'D'] },
];

// Authentic ETS TOEIC raw (0..100) to scaled (5..495) conversion tables
// Listening hits 495 at 93 raw; floor is 5
const LC_SCALE = [
    5,   5,   5,   5,   5,   5,   5,  10,  15,  20,
   25,  30,  35,  40,  45,  50,  55,  60,  65,  70,
   75,  80,  85,  90,  95, 100, 105, 110, 115, 120,
  125, 135, 140, 145, 150, 155, 160, 165, 170, 180,
  185, 190, 195, 200, 210, 215, 220, 225, 230, 240,
  245, 250, 255, 265, 270, 275, 280, 290, 295, 300,
  305, 315, 320, 325, 330, 340, 345, 350, 355, 365,
  370, 375, 380, 390, 395, 400, 405, 415, 420, 425,
  430, 435, 440, 445, 450, 455, 460, 465, 470, 475,
  480, 485, 490, 495, 495, 495, 495, 495, 495, 495,
  495,
];

// Reading hits 495 at 98 raw; floor is 5
const RC_SCALE = [
    5,   5,   5,   5,   5,   5,   5,   5,   5,   5,
   10,  15,  20,  25,  30,  35,  40,  45,  50,  55,
   60,  65,  70,  75,  80,  85,  90,  95, 100, 105,
  110, 115, 120, 125, 130, 135, 140, 145, 150, 155,
  160, 165, 170, 175, 180, 190, 195, 200, 205, 210,
  215, 220, 225, 230, 235, 245, 250, 255, 260, 265,
  275, 280, 285, 290, 295, 305, 310, 315, 320, 325,
  335, 340, 345, 350, 355, 365, 370, 375, 380, 385,
  395, 400, 405, 410, 415, 425, 430, 435, 440, 445,
  455, 460, 465, 470, 475, 480, 485, 490, 495, 495,
  495,
];

export function calcEtsScore(lcCorrect, rcCorrect) {
  const lcIdx = Math.max(0, Math.min(100, Math.round(Number(lcCorrect) || 0)));
  const rcIdx = Math.max(0, Math.min(100, Math.round(Number(rcCorrect) || 0)));
  const lc = LC_SCALE[lcIdx];
  const rc = RC_SCALE[rcIdx];
  return { lc, rc, total: lc + rc };
}

function buildAnswers(lcStr, rcStr) {
  const clean = (lcStr + rcStr).replace(/\s+/g, '');
  const map = {};
  for (let i = 0; i < clean.length; i++) {
    map[String(i + 1)] = clean[i];
  }
  return map;
}

const pad2 = (n) => String(n).padStart(2, '0');

function singleAudioGroups(prefix, from, to) {
  const groups = [];
  for (let q = from; q <= to; q++) {
    groups.push({ qFrom: q, qTo: q, audio: `${prefix}-${pad2(q)}.mp3` });
  }
  return groups;
}

function rangeAudioGroups(prefix, ranges) {
  return ranges.map(([qFrom, qTo]) => ({
    qFrom,
    qTo,
    audio: `${prefix}-${pad2(qFrom)}-${pad2(qTo)}.mp3`,
  }));
}

const T01_AUDIO = 'audio/ets2026/t01/E26-T01';
const T01_IMG = 'img/ets2026/t01';

const T01_ANSWERS = buildAnswers(
  'BDCAA CBCBA BBCCA BBABC ACAAA BBACC CBDBC ADADA CDBCC AADCC BACAB BACAC BCCDD ACBAC BCABD ABDAD ABDAD ABCDB CBADA CDDCA',
  'BAABB CCDAA CCACC DADCB DCBCA ADDDB DCABD CBAAC BDCCB ACDBC DCBCD CBDBC CDBBB ABBBB ADABC ADCDC DDACB BABAD DBBAA BADCA'
);

const T01_PAGES = [
  // Part 1
  { id: 'p1-1', part: 1, label: 'Part 1 · Q1–2', images: [`${T01_IMG}/l_p03.webp`], groups: singleAudioGroups(T01_AUDIO, 1, 2) },
  { id: 'p1-2', part: 1, label: 'Part 1 · Q3–4', images: [`${T01_IMG}/l_p04.webp`], groups: singleAudioGroups(T01_AUDIO, 3, 4) },
  { id: 'p1-3', part: 1, label: 'Part 1 · Q5–6', images: [`${T01_IMG}/l_p05.webp`], groups: singleAudioGroups(T01_AUDIO, 5, 6) },

  // Part 2
  { id: 'p2-1', part: 2, label: 'Part 2 · Q7–31', images: [], groups: singleAudioGroups(T01_AUDIO, 7, 31) },

  // Part 3
  { id: 'p3-1', part: 3, label: 'Part 3 · Q32–43', images: [`${T01_IMG}/l_p07.webp`], groups: rangeAudioGroups(T01_AUDIO, [[32, 34], [35, 37], [38, 40], [41, 43]]) },
  { id: 'p3-2', part: 3, label: 'Part 3 · Q44–55', images: [`${T01_IMG}/l_p08.webp`], groups: rangeAudioGroups(T01_AUDIO, [[44, 46], [47, 49], [50, 52], [53, 55]]) },
  { id: 'p3-3', part: 3, label: 'Part 3 · Q56–64', images: [`${T01_IMG}/l_p09.webp`], groups: rangeAudioGroups(T01_AUDIO, [[56, 58], [59, 61], [62, 64]]) },
  { id: 'p3-4', part: 3, label: 'Part 3 · Q65–70', images: [`${T01_IMG}/l_p10.webp`], groups: rangeAudioGroups(T01_AUDIO, [[65, 67], [68, 70]]) },

  // Part 4
  { id: 'p4-1', part: 4, label: 'Part 4 · Q71–82', images: [`${T01_IMG}/l_p11.webp`], groups: rangeAudioGroups(T01_AUDIO, [[71, 73], [74, 76], [77, 79], [80, 82]]) },
  { id: 'p4-2', part: 4, label: 'Part 4 · Q83–94', images: [`${T01_IMG}/l_p12.webp`], groups: rangeAudioGroups(T01_AUDIO, [[83, 85], [86, 88], [89, 91], [92, 94]]) },
  { id: 'p4-3', part: 4, label: 'Part 4 · Q95–100', images: [`${T01_IMG}/l_p13.webp`], groups: rangeAudioGroups(T01_AUDIO, [[95, 97], [98, 100]]) },

  // Part 5
  { id: 'p5-1', part: 5, label: 'Part 5 · Q101–108', images: [`${T01_IMG}/r_p02.webp`], groups: [{ qFrom: 101, qTo: 108, audio: null }] },
  { id: 'p5-2', part: 5, label: 'Part 5 · Q109–120', images: [`${T01_IMG}/r_p03.webp`], groups: [{ qFrom: 109, qTo: 120, audio: null }] },
  { id: 'p5-3', part: 5, label: 'Part 5 · Q121–130', images: [`${T01_IMG}/r_p04.webp`], groups: [{ qFrom: 121, qTo: 130, audio: null }] },

  // Part 6
  { id: 'p6-1', part: 6, label: 'Part 6 · Q131–134', images: [`${T01_IMG}/r_p05.webp`], groups: [{ qFrom: 131, qTo: 134, audio: null }] },
  { id: 'p6-2', part: 6, label: 'Part 6 · Q135–138', images: [`${T01_IMG}/r_p06.webp`], groups: [{ qFrom: 135, qTo: 138, audio: null }] },
  { id: 'p6-3', part: 6, label: 'Part 6 · Q139–142', images: [`${T01_IMG}/r_p07.webp`], groups: [{ qFrom: 139, qTo: 142, audio: null }] },
  { id: 'p6-4', part: 6, label: 'Part 6 · Q143–146', images: [`${T01_IMG}/r_p08.webp`], groups: [{ qFrom: 143, qTo: 146, audio: null }] },

  // Part 7
  { id: 'p7-1', part: 7, label: 'Part 7 · Q147–148', images: [`${T01_IMG}/r_p09.webp`], groups: [{ qFrom: 147, qTo: 148, audio: null }] },
  { id: 'p7-2', part: 7, label: 'Part 7 · Q149–150', images: [`${T01_IMG}/r_p10.webp`], groups: [{ qFrom: 149, qTo: 150, audio: null }] },
  { id: 'p7-3', part: 7, label: 'Part 7 · Q151–152', images: [`${T01_IMG}/r_p11.webp`], groups: [{ qFrom: 151, qTo: 152, audio: null }] },
  { id: 'p7-4', part: 7, label: 'Part 7 · Q153–154', images: [`${T01_IMG}/r_p12.webp`], groups: [{ qFrom: 153, qTo: 154, audio: null }] },
  { id: 'p7-5', part: 7, label: 'Part 7 · Q155–157', images: [`${T01_IMG}/r_p13.webp`], groups: [{ qFrom: 155, qTo: 157, audio: null }] },
  { id: 'p7-6', part: 7, label: 'Part 7 · Q158–160', images: [`${T01_IMG}/r_p14.webp`], groups: [{ qFrom: 158, qTo: 160, audio: null }] },
  { id: 'p7-7', part: 7, label: 'Part 7 · Q161–163', images: [`${T01_IMG}/r_p15.webp`], groups: [{ qFrom: 161, qTo: 163, audio: null }] },
  { id: 'p7-8', part: 7, label: 'Part 7 · Q164–167', images: [`${T01_IMG}/r_p16.webp`], groups: [{ qFrom: 164, qTo: 167, audio: null }] },
  { id: 'p7-9', part: 7, label: 'Part 7 · Q168–171', images: [`${T01_IMG}/r_p17.webp`], groups: [{ qFrom: 168, qTo: 171, audio: null }] },
  { id: 'p7-10', part: 7, label: 'Part 7 · Q172–175', images: [`${T01_IMG}/r_p18.webp`, `${T01_IMG}/r_p19.webp`], groups: [{ qFrom: 172, qTo: 175, audio: null }] },
  { id: 'p7-11', part: 7, label: 'Part 7 · Q176–180 (Double Passage)', images: [`${T01_IMG}/r_p20.webp`, `${T01_IMG}/r_p21.webp`], groups: [{ qFrom: 176, qTo: 180, audio: null }] },
  { id: 'p7-12', part: 7, label: 'Part 7 · Q181–185 (Double Passage)', images: [`${T01_IMG}/r_p22.webp`, `${T01_IMG}/r_p23.webp`], groups: [{ qFrom: 181, qTo: 185, audio: null }] },
  { id: 'p7-13', part: 7, label: 'Part 7 · Q186–190 (Triple Passage)', images: [`${T01_IMG}/r_p24.webp`, `${T01_IMG}/r_p25.webp`], groups: [{ qFrom: 186, qTo: 190, audio: null }] },
  { id: 'p7-14', part: 7, label: 'Part 7 · Q191–195 (Triple Passage)', images: [`${T01_IMG}/r_p26.webp`, `${T01_IMG}/r_p27.webp`], groups: [{ qFrom: 191, qTo: 195, audio: null }] },
  { id: 'p7-15', part: 7, label: 'Part 7 · Q196–200 (Triple Passage)', images: [`${T01_IMG}/r_p28.webp`, `${T01_IMG}/r_p29.webp`], groups: [{ qFrom: 196, qTo: 200, audio: null }] },
];

export const ETS_TESTS = [
  {
    id: 'ets2026-t01',
    num: 1,
    title: 'ETS 2026 — Test 01',
    year: 2026,
    status: 'ready',
    questionsCount: 200,
    durationMin: 120,
    answers: T01_ANSWERS,
    pages: T01_PAGES,
  },
  ...Array.from({ length: 9 }, (_, i) => {
    const num = i + 2;
    const code = pad2(num);
    return {
      id: `ets2026-t${code}`,
      num,
      title: `ETS 2026 — Test ${code}`,
      year: 2026,
      status: 'coming_soon',
      questionsCount: 200,
      durationMin: 120,
    };
  }),
];
