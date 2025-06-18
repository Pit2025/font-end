
const data = {
  teams: [
    ["โชคเหนือฝีมือ	", "Thunder express"],
    ["ผมยอมแล้วคับพรี่", "พี่จ๋าป้อมจะแตก"],
    ["ไม่เหม็นสำหรับผม", "Jaaocto"],
    ["Chickennut", "เละเทะ อีสปอร์ท"],
    ["นี้คนหรือขี้", "Nightmare"],
    ["พยัคฆ์ร้าย777	", "พี่มาแล้วน้อง"],
    ["The ÉLAN", "While Cat Esports"],
    ["Chickennut", "เละเทะ อีสปอร์ท"],
    ["ผมมาแจก", "เหนื่อยฟรีไม่มีถ้วย"],
    ["แก๊งค์คนป่วย", "Fieryer E-SPORT"],
    ["Grasped Shamped Morped Phazed Draped", "Aurora"],
    ["ชายสามเกย์สอง", "ช้างเผือก"],
    [null, null],
    [null, null],
    [null, null],
    [null, null]

  ],
  "results": [
    [
      [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0],
      [0, 0], [0, 0]
    ],
    [
      [0, 0], [0, 0], [0, 0], [0, 0],
      [0, 0], [0, 0], [0, 0]
    ],
    [
      [0, 0], [0, 0], [0, 0], [0, 0]
    ],
    [
      [0, 0], [0, 0]
    ],
    [
      [0, 0]
    ]
  ]
}

$(function () {
  $('#tournament').bracket({
    init: data,
    teamWidth: 100,      // ความกว้างของช่องทีม
    scoreWidth: 30,      // ความกว้างของช่องคะแนน
    matchMargin: 30,     // ระยะห่างระหว่างแมตช์
    roundMargin: 50      // ระยะห่างระหว่างรอบ
  });
});

//////////////////////////////////////////////////////////////////////////////
const tada = {
  "teams": [
    [null, null],
    [null, null],
    [null, null],
    [null, null],
    [null, null],
    [null, null],
    [null, null],
    [null, null]
  ],
  "results": [
    [
      [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]
    ],
    [
      [0, 0], [0, 0], [0, 0], [0, 0]
    ],
    [
      [0, 0], [0, 0]
    ],
    [
      [0, 0]
    ]
  ]
}

$(function () {
  $('#tournament2').bracket({
    init: tada
  });
});
//////////////////////////////////////////////////////////////////////////////
const oneonone = {
  "teams": [
    [null, null]
  ],
  "results": [
    [0, 0]
  ]
}

$(function () {
  $('#tournament3').bracket({
    init: oneonone
  });
});