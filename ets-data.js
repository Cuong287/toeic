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

function buildPart1Pages(audioPrefix, imgDir) {
  const pages = [];
  for (let q = 1; q <= 6; q++) {
    const code = pad2(q);
    pages.push({
      id: `p1-q${code}`,
      part: 1,
      layout: 'photo',
      label: `Part 1 · Q${q}`,
      images: [`${imgDir}/p1_q${code}.webp`],
      groups: [{ qFrom: q, qTo: q, audio: `${audioPrefix}-${code}.mp3` }],
    });
  }
  return pages;
}

function buildPart2Pages(audioPrefix) {
  const pages = [];
  for (let q = 7; q <= 31; q++) {
    const code = pad2(q);
    pages.push({
      id: `p2-q${code}`,
      part: 2,
      layout: 'audio-only',
      label: `Part 2 · Q${q}`,
      images: [],
      groups: [{ qFrom: q, qTo: q, audio: `${audioPrefix}-${code}.mp3` }],
    });
  }
  return pages;
}

function buildGroupedAudioPages(part, idPrefix, audioPrefix, imgDir, items) {
  return items.map(([qFrom, qTo, imgFile], idx) => ({
    id: `${idPrefix}${pad2(idx + 1)}`,
    part,
    label: `Part ${part} · Q${qFrom}–${qTo}`,
    images: [`${imgDir}/${imgFile}`],
    groups: [{ qFrom, qTo, audio: `${audioPrefix}-${pad2(qFrom)}-${pad2(qTo)}.mp3` }],
  }));
}

function buildPart5Pages(imgDir, ranges) {
  const pages = [];
  for (const [from, to, imgFile] of ranges) {
    for (let q = from; q <= to; q++) {
      pages.push({
        id: `p5-q${q}`,
        part: 5,
        label: `Part 5 · Q${q}`,
        images: [`${imgDir}/${imgFile}`],
        groups: [{ qFrom: q, qTo: q, audio: null }],
      });
    }
  }
  return pages;
}

const T01_AUDIO = 'audio/ets2026/t01/E26-T01';
const T01_IMG = 'img/ets2026/t01';

const T01_ANSWERS = buildAnswers(
  'BDCAA CBCBA BBCCA BBABC ACAAA BBACC CBDBC ADADA CDBCC AADCC BACAB BACAC BCCDD ACBAC BCABD ABDAD ABDAD ABCDB CBADA CDDCA',
  'BAABB CCDAA CCACC DADCB DCBCA ADDDB DCABD CBAAC BDCCB ACDBC DCBCD CBDBC CDBBB ABBBB ADABC ADCDC DDACB BABAD DBBAA BADCA'
);

const T01_PAGES = [
  // Part 1 (6 tabs, 1 question & 1 cropped photo per tab)
  ...buildPart1Pages(T01_AUDIO, T01_IMG),

  // Part 2 (25 tabs, 1 question per tab)
  ...buildPart2Pages(T01_AUDIO),

  // Part 3 (13 tabs, 1 conversation / 3 questions per tab)
  ...buildGroupedAudioPages(3, 'p3-g', T01_AUDIO, T01_IMG, [
    [32, 34, 'l_p07.webp'],
    [35, 37, 'l_p07.webp'],
    [38, 40, 'l_p07.webp'],
    [41, 43, 'l_p07.webp'],
    [44, 46, 'l_p08.webp'],
    [47, 49, 'l_p08.webp'],
    [50, 52, 'l_p08.webp'],
    [53, 55, 'l_p08.webp'],
    [56, 58, 'l_p09.webp'],
    [59, 61, 'l_p09.webp'],
    [62, 64, 'l_p09.webp'],
    [65, 67, 'l_p10.webp'],
    [68, 70, 'l_p10.webp'],
  ]),

  // Part 4 (10 tabs, 1 short talk / 3 questions per tab)
  ...buildGroupedAudioPages(4, 'p4-g', T01_AUDIO, T01_IMG, [
    [71, 73, 'l_p11.webp'],
    [74, 76, 'l_p11.webp'],
    [77, 79, 'l_p11.webp'],
    [80, 82, 'l_p11.webp'],
    [83, 85, 'l_p12.webp'],
    [86, 88, 'l_p12.webp'],
    [89, 91, 'l_p12.webp'],
    [92, 94, 'l_p12.webp'],
    [95, 97, 'l_p13.webp'],
    [98, 100, 'l_p13.webp'],
  ]),

  // Part 5 (30 tabs, 1 question per tab)
  ...buildPart5Pages(T01_IMG, [
    [101, 108, 'r_p02.webp'],
    [109, 120, 'r_p03.webp'],
    [121, 130, 'r_p04.webp'],
  ]),

  // Part 6 (4 tabs, 1 passage / 4 questions per tab)
  { id: 'p6-1', part: 6, label: 'Part 6 · Q131–134', images: [`${T01_IMG}/r_p05.webp`], groups: [{ qFrom: 131, qTo: 134, audio: null }] },
  { id: 'p6-2', part: 6, label: 'Part 6 · Q135–138', images: [`${T01_IMG}/r_p06.webp`], groups: [{ qFrom: 135, qTo: 138, audio: null }] },
  { id: 'p6-3', part: 6, label: 'Part 6 · Q139–142', images: [`${T01_IMG}/r_p07.webp`], groups: [{ qFrom: 139, qTo: 142, audio: null }] },
  { id: 'p6-4', part: 6, label: 'Part 6 · Q143–146', images: [`${T01_IMG}/r_p08.webp`], groups: [{ qFrom: 143, qTo: 146, audio: null }] },

  // Part 7 (15 tabs, 1 passage set per tab)
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
