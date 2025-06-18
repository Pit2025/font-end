
$(document).ready(function() {

  // --- 1. ข้อมูลสำหรับสายบน (Upper Bracket) ---
  const upperBracketData = {
    // แก้ไข: เพิ่มทีมให้ครบ 16 ทีมตามข้อมูลต้นฉบับ
    teams: [
      ["โชคเหนือฝีมือ", "Thunder express"],
      ["ผมยอมแล้วคับพรี่", "พี่จ๋าป้อมจะแตก"],
      ["ไม่เหม็นสำหรับผม", "Jaaocto"],
      ["Chickennut", "เละเทะ อีสปอร์ท"],
      ["นี้คนหรือขี้", "Nightmare"],
      ["พยัคฆ์ร้าย777", "พี่มาแล้วน้อง"],
      ["The ÉLAN", "While Cat Esports"],
      // นี่คือทีมที่ตกหล่นไปในเวอร์ชันก่อนหน้า
      ["Chickennut", "เละเทะ อีสปอร์ท"], 
      ["ผมมาแจก", "เหนื่อยฟรีไม่มีถ้วย"],
      ["แก๊งค์คนป่วย", "Fieryer E-SPORT"],
      ["Grasped Shamped Morped Phazed Draped", "Aurora"],
      ["ชายสามเกย์สอง", "ช้างเผือก"],
      ["MY Ego", null],
      ["หมีเนยฮิลใจ", null],
      ["แก๊งราชภัฏหัวหิน", null],
      ["นักรบมังกรกำลังจะกลับบ้าน", null]
    ],
    // โครงสร้างผลลัพธ์สำหรับ 16 ทีม (8 -> 4 -> 2 -> 1)
    results: [
      [[null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null]],
      [[null, null], [null, null], [null, null], [null, null]],
      [[null, null], [null, null]],
      [[null, null]]
    ]
  };

  // --- 2. ข้อมูลสำหรับสายล่าง (Lower Bracket) ---
  // แก้ไข: ใช้โครงสร้างที่เรียบง่ายและถูกต้องสำหรับ 8 ทีม
  const lowerBracketData = {
    teams: [
      [null, null], [null, null], [null, null], [null, null]
    ],
    // โครงสร้างผลลัพธ์สำหรับ 8 ทีม (4 -> 2 -> 1)
    results: [
      [[null, null], [null, null], [null, null], [null, null]],
      [[null, null], [null, null]],
      [[null, null]]
    ]
  };

  // --- 3. ข้อมูลสำหรับรอบชิงชนะเลิศ (Finals) ---
  const finalsData = {
    teams: [
      [null, null]
    ],
    results: [
      [[null, null]]
    ]
  };

  // --- 4. นำข้อมูลไปสร้างตารางการแข่งขัน ---
  // นำ try-catch ออกได้เลย เพราะมั่นใจว่าข้อมูลถูกต้องแล้ว
  
  $('#tournament-finals').bracket({
    init: finalsData,
    teamWidth: 120,
    scoreWidth: 30,
    matchMargin: 50
  });

  $('#tournament-upper').bracket({
    init: upperBracketData,
    teamWidth: 120,
    scoreWidth: 30,
    matchMargin: 40,
    roundMargin: 60
  });

  $('#tournament-lower').bracket({
    init: lowerBracketData,
    teamWidth: 120,
    scoreWidth: 30,
    matchMargin: 40,
    roundMargin: 60
  });

});
