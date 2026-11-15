'use client';

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  RotateCw, 
  CheckCircle2, 
  XCircle, 
  Filter, 
  HelpCircle, 
  BookOpen, 
  GraduationCap, 
  Award, 
  Volume2, 
  Layers, 
  Shuffle, 
  Eye, 
  Check
} from 'lucide-react';

export interface Flashcard {
  id: number;
  subject: 'dhamma' | 'buddha' | 'vinai' | 'ceremony' | 'kratu';
  subjectLabel: string;
  pali: string;
  translation: string;
  meaning: string;
  memoryMnemonic: string;
  examHighlight: string;
  categoryTag: string;
}

export const DHAMMA_FLASHCARDS_DATA: Flashcard[] = [
  // ธรรมวิภาค
  {
    id: 1,
    subject: 'dhamma',
    subjectLabel: 'ธรรมวิภาค',
    pali: 'สติ (Sati)',
    translation: 'ความระลึกได้',
    meaning: 'การนึกได้ก่อนที่จะทำ พูด หรือคิด นึกถึงหน้าที่และความถูกต้องเสมอ ไม่เผลอเลอ',
    memoryMnemonic: 'สติ = ก่อนทำ (ดุจหางเสือเรือคุมทิศทาง)',
    examHighlight: 'ธรรมมีอุปการะมาก ๒: สติ คู่กับ สัมปชัญญะ',
    categoryTag: 'หมวด ๒'
  },
  {
    id: 2,
    subject: 'dhamma',
    subjectLabel: 'ธรรมวิภาค',
    pali: 'สัมปชัญญะ (Sampajañña)',
    translation: 'ความรู้ตัว',
    meaning: 'ความรู้ตัวทั่วพร้อมในขณะที่กำลังกระทำสิ่งใดสิ่งหนึ่งอยู่ ไม่เหม่อลอย',
    memoryMnemonic: 'สัมปชัญญะ = ขณะทำ (ดุจนายท้ายเรือสังเกตคลื่นลม)',
    examHighlight: 'ทำงานคู่กับสติเสมอ ป้องกันความผิดพลาดเฉพาะหน้า',
    categoryTag: 'หมวด ๒'
  },
  {
    id: 3,
    subject: 'dhamma',
    subjectLabel: 'ธรรมวิภาค',
    pali: 'หิริ (Hiri)',
    translation: 'ความละอายแก่ใจต่อบาป',
    meaning: 'ความรู้สึกรังเกียจที่จะทำความชั่ว โดยยกตนเป็นใหญ่ (อธิปไตยฝ่ายตน)',
    memoryMnemonic: 'หิริ = ละอาย (ดุจไม่อยากจับก้อนเหล็กเปื้อนคูถ)',
    examHighlight: 'ธรรมคุ้มครองโลก (เทวธรรม) คู่กับ โอตตัปปะ',
    categoryTag: 'หมวด ๒'
  },
  {
    id: 4,
    subject: 'dhamma',
    subjectLabel: 'ธรรมวิภาค',
    pali: 'โอตตัปปะ (Ottappa)',
    translation: 'ความสะดุ้งกลัวต่อผลของบาป',
    meaning: 'ความกลัวต่อโทษภัยและผลของความชั่ว โดยยกผู้อื่นหรือสังคมเป็นใหญ่',
    memoryMnemonic: 'โอตตัปปะ = กลัวบาป (ดุจไม่กล้าจับก้อนเหล็กร้อนแดง)',
    examHighlight: 'ออกสอบคู่กับหิริเสมอ: ธรรมคุ้มครองโลก ๒ หรือ เทวธรรม ๒',
    categoryTag: 'หมวด ๒'
  },
  {
    id: 5,
    subject: 'dhamma',
    subjectLabel: 'ธรรมวิภาค',
    pali: 'บุพพการี (Pubbakārī)',
    translation: 'ผู้ทำอุปการะมาก่อน',
    meaning: 'ผู้ที่ให้ความช่วยเหลือเกื้อกูลแก่ผู้อื่นก่อนโดยมิได้หวังผลตอบแทน เช่น บิดามารดา ครูอาจารย์ พระพุทธเจ้า',
    memoryMnemonic: 'บุพพ = ก่อน, การี = ผู้ทำ -> ผู้ทำคุณก่อน',
    examHighlight: 'บุคคลหาได้ยาก ๒ (ทุลลภบุคคล) คู่กับ กตัญญูกตเวที',
    categoryTag: 'หมวด ๒'
  },
  {
    id: 6,
    subject: 'dhamma',
    subjectLabel: 'ธรรมวิภาค',
    pali: 'โอวาทปาติโมกข์ ๓',
    translation: 'หัวใจพระพุทธศาสนา',
    meaning: '๑. ไม่ทำบาปทั้งปวง (สพฺพปาปสฺส อกรณํ) ๒. ทำกุศลให้ถึงพร้อม (กุสลสฺสูปสมฺปทา) ๓. ทำจิตของตนให้ผ่องแผ้ว (สจิตฺตปริโยทปนํ)',
    memoryMnemonic: 'สูตรจำ: เว้นชั่ว -> ทำดี -> จิตบริสุทธิ์',
    examHighlight: 'พระพุทธองค์ทรงแสดงในวันมาฆบูชา ท่ามกลางพระอรหันต์ ๑,๒๕๐ รูป',
    categoryTag: 'หมวด ๓'
  },
  {
    id: 7,
    subject: 'dhamma',
    subjectLabel: 'ธรรมวิภาค',
    pali: 'ไตรสิกขา ๓ (Tisikkhā)',
    translation: 'การศึกษาอบรม ๓ ขั้น',
    meaning: 'ศีล (อบรมกายวาจา) -> สมาธิ (อบรมจิตใจให้ตั้งมั่น) -> ปัญญา (อบรมรู้แจ้งเห็นจริงตามกฎไตรลักษณ์)',
    memoryMnemonic: 'ศีลเป็นฐาน -> สมาธิเป็นพลัง -> ปัญญาตัดกิเลส',
    examHighlight: 'สงเคราะห์ลงในมรรคมีองค์ ๘: ปัญญา ๒, ศีล ๓, สมาธิ ๓',
    categoryTag: 'หมวด ๓'
  },
  {
    id: 8,
    subject: 'dhamma',
    subjectLabel: 'ธรรมวิภาค',
    pali: 'อริยสัจ ๔ (Ariyasacca)',
    translation: 'ความจริงอันประเสริฐ ๔ ประการ',
    meaning: 'ทุกข์ (สภาพทนยาก-ควรกำหนดรู้) สมุทัย (ตัณหาเหตุแห่งทุกข์-ควรละ) นิโรธ (ความดับทุกข์-ควรทำให้แจ้ง) มรรค (ข้อปฏิบัติ ๘-ควรเจริญ)',
    memoryMnemonic: 'กิจ ๔: ปริญญา (รู้) - ปหานะ (ละ) - สัจฉิกิริยา (แจ้ง) - ภาวนา (ลงมือทำ)',
    examHighlight: 'ปฐมเทศนาแสดงอริยสัจ ๔ ครบ ๑๒ อาการ (วน ๓ รอบในสัจจะทั้ง ๔)',
    categoryTag: 'หมวด ๔'
  },
  {
    id: 9,
    subject: 'dhamma',
    subjectLabel: 'ธรรมวิภาค',
    pali: 'อิทธิบาท ๔ (Iddhipāda)',
    translation: 'บาทฐานแห่งความสำเร็จ ๔ ประการ',
    meaning: 'ฉันทะ (พอใจรักใคร่ในงาน) วิริยะ (พากเพียรบากบั่น) จิตตะ (เอาใจใส่จดจ่อ) วิมังสา (ใคร่ครวญตรวจสอบพัฒนา)',
    memoryMnemonic: 'ใจรัก -> ขยันทำ -> มุ่งมั่น -> หมั่นทบทวน',
    examHighlight: 'คุณธรรมสำหรับนักเรียน ผู้ปฏิบัติงาน และผู้บำเพ็ญภาวนา',
    categoryTag: 'หมวด ๔'
  },
  {
    id: 10,
    subject: 'dhamma',
    subjectLabel: 'ธรรมวิภาค',
    pali: 'พรหมวิหาร ๔ (Brahmavihāra)',
    translation: 'ธรรมประจำใจของผู้ประเสริฐ',
    meaning: 'เมตตา (อยากให้เป็นสุข) กรุณา (อยากให้พ้นทุกข์) มุทิตา (ยินดีเมื่อได้ดี) อุเบกขา (วางใจเป็นกลางตามกรรม)',
    memoryMnemonic: 'รัก - สงสาร - ยินดี - วางเฉย',
    examHighlight: 'มุทิตา ขจัดความอิจฉาริษยา (อิสสา) | อุเบกขา ใช้เมื่อช่วยไม่ได้แล้ว',
    categoryTag: 'หมวด ๔'
  },
  {
    id: 11,
    subject: 'dhamma',
    subjectLabel: 'ธรรมวิภาค',
    pali: 'ทิฏฐธัมมิกัตถประโยชน์ ๔',
    translation: 'หัวใจเศรษฐี (อุ อา กะ สะ)',
    meaning: 'อุฏฐานสัมปทา (ขยันหา) อารักขสัมปทา (รักษาดี) กัลยาณมิตตตา (มีมิตรแท้) สมชีวิตา (ใช้จ่ายสมดุล)',
    memoryMnemonic: 'อุ (ขยัน) - อา (รักษา) - กะ (มิตรดี) - สะ (พอดี)',
    examHighlight: 'ประโยชน์ในชาตินี้ (ปัจจุบันธรรม) ที่ผู้ครองเรือนทุกคนต้องมี',
    categoryTag: 'คิหิปฏิบัติ'
  },
  {
    id: 12,
    subject: 'dhamma',
    subjectLabel: 'ธรรมวิภาค',
    pali: 'กุศลกรรมบถ ๑๐',
    translation: 'ทางแห่งความดี ๑๐ ประการ',
    meaning: 'กายกรรม ๓ (เว้นฆ่า ลัก กาม) วจีกรรม ๔ (เว้นเท็จ ส่อเสียด คำหยาบ เพ้อเจ้อ) มโนกรรม ๓ (ไม่อยากได้ ไม่พยาบาท เห็นชอบ)',
    memoryMnemonic: 'กาย ๓ + วาจา ๔ + ใจ ๓ = ๑๐ ทางสุจริต',
    examHighlight: 'มโนกรรมข้อ ๑: อนภิชฌา (ไม่เพ่งเล็งละโมบในทรัพย์ผู้อื่น)',
    categoryTag: 'หมวด ๑๐'
  },
  {
    id: 13,
    subject: 'dhamma',
    subjectLabel: 'ธรรมวิภาค',
    pali: 'บุญกิริยาวัตถุ ๑๐',
    translation: 'ที่ตั้งแห่งการทำบุญ ๑๐ ทาง',
    meaning: 'ทานมัย, สีลมัย, ภาวนามัย, อปจายนมัย (อ่อนน้อม), เวยยาวัจจมัย (ช่วยงาน), ปัตติทานมัย (อุทิศบุญ), ปัตตานุโมทนามัย (ยินดีในบุญ), ธัมมัสสวนมัย, ธัมมเทสนามัย, ทิฏฐุชุกัมม์',
    memoryMnemonic: 'ทาน ๓ (ทาน,อุทิศ,ยินดี) + ศีล ๓ (ศีล,อ่อนน้อม,ช่วยงาน) + ภาวนา ๔ (ภาวนา,ฟังธรรม,สอนธรรม,เห็นถูก)',
    examHighlight: 'เวยยาวัจจมัย คือ การทำบุญด้วยการขวนขวายช่วยเหลือกิจการงาน',
    categoryTag: 'หมวด ๑๐'
  },

  // พุทธประวัติ
  {
    id: 14,
    subject: 'buddha',
    subjectLabel: 'พุทธประวัติ',
    pali: 'เจ้าชายสิทธัตถะ (Siddhattha)',
    translation: 'ผู้มีความต้องการสำเร็จ',
    meaning: 'พระนามเดิมของพระสัมมาสัมพุทธเจ้า ประสูติวันเพ็ญเดือน ๖ ณ สวนลุมพินีวัน ระหว่างกรุงกบิลพัสดุ์และเทวทหะ',
    memoryMnemonic: 'ดำเนิน ๗ ก้าว เปล่งอาสภิวาจาประกาศความเป็นเลิศในโลก',
    examHighlight: 'พราหมณ์โกณฑัญญะทำนายคนเดียวว่าจะเสด็จออกบวชและตรัสรู้แน่นอน',
    categoryTag: 'ปริเฉท ๑'
  },
  {
    id: 15,
    subject: 'buddha',
    subjectLabel: 'พุทธประวัติ',
    pali: 'เทวทูต ๔ (Devadūta)',
    translation: 'ทูตของเทวดา ๔ ประการ',
    meaning: 'คนแก่, คนเจ็บ, คนตาย (ทรงเกิดความสลดพระทัยในสังขาร) และ บรรพชิต (ทรงเกิดความพอใจในการออกบวช)',
    memoryMnemonic: 'แก่ - เจ็บ - ตาย - พระ (บรรพชิต)',
    examHighlight: 'เสด็จออกมหาภิเนษกรมณ์ริมแม่น้ำอโนมา พระชนมายุ ๒๙ พรรษา',
    categoryTag: 'ปริเฉท ๒'
  },
  {
    id: 16,
    subject: 'buddha',
    subjectLabel: 'พุทธประวัติ',
    pali: 'วิชชา ๓ (Vijjā)',
    translation: 'ความรู้แจ้ง ๓ ประการในคืนตรัสรู้',
    meaning: 'ยามต้น: ปุพเพนิวาสานุสสติญาณ (ระลึกชาติได้) | ยามสอง: จุตูปปาตญาณ (รู้การเกิดตายของสัตว์) | ยามสาม: อาสวักขยญาณ (ทำลายอาสวกิเลสสิ้นเชิง)',
    memoryMnemonic: 'ยาม ๑ ระลึกชาติ -> ยาม ๒ ตาทิพย์ -> ยาม ๓ สิ้นกิเลส ตรัสรู้',
    examHighlight: 'ญาณที่ทำให้เป็นพระสัมมาสัมพุทธเจ้าคือ "อาสวักขยญาณ" ในปัจฉิมยาม',
    categoryTag: 'ปริเฉท ๓'
  },
  {
    id: 17,
    subject: 'buddha',
    subjectLabel: 'พุทธประวัติ',
    pali: 'ธัมมจักกัปปวัตตนสูตร',
    translation: 'พระปฐมเทศนา',
    meaning: 'ทรงแสดงในวันเพ็ญเดือน ๘ (อาสาฬหบูชา) แก่ปัญจวัคคีย์ ชี้ทางสายกลาง (มรรค ๘) และอริยสัจ ๔',
    memoryMnemonic: 'พระอัญญาโกณฑัญญะได้ดวงตาเห็นธรรม เกิดพระรัตนตรัยครบองค์ ๓',
    examHighlight: 'ดวงตาเห็นธรรม: "สิ่งใดสิ่งหนึ่งเกิดขึ้นเป็นธรรมดา สิ่งนั้นทั้งหมดล้วนดับไปเป็นธรรมดา"',
    categoryTag: 'ปริเฉท ๔'
  },
  {
    id: 18,
    subject: 'buddha',
    subjectLabel: 'พุทธประวัติ',
    pali: 'อนัตตลักขณสูตร',
    translation: 'พระสูตรที่ ๒ โปรดปัญจวัคคีย์',
    meaning: 'แสดงในวันแรม ๕ ค่ำ เดือน ๘ ชี้ว่าขันธ์ ๕ เป็นอนัตตา ไม่ใช่ตัวตน บังคับบัญชาไม่ได้ ปัญจวัคคีย์สำเร็จพระอรหันต์พร้อมกันทั้ง ๕ รูป',
    memoryMnemonic: 'พระสูตรแรกได้โสดาบัน -> พระสูตรสองบรรลุพระอรหันต์',
    examHighlight: 'ทำให้มีพระอรหันต์ในโลกเกิดขึ้น ๖ องค์แรก (รวมพระพุทธเจ้า)',
    categoryTag: 'ปริเฉท ๔'
  },
  {
    id: 19,
    subject: 'buddha',
    subjectLabel: 'พุทธประวัติ',
    pali: 'วัดเวฬุวันมหาวิหาร',
    translation: 'วัดแห่งแรกในพระพุทธศาสนา',
    meaning: 'พระเจ้าพิมพิสารทรงหลั่งน้ำทักษิโณทก ถวายพระราชอุทยานป่าไผ่ ณ กรุงราชคฤห์ เป็นสังฆารามแห่งแรกในโลก',
    memoryMnemonic: 'วัดแรก = วัดเวฬุวัน กรุงราชคฤห์ (ถวายโดยพระเจ้าพิมพิสาร)',
    examHighlight: 'เป็นสถานที่ประชุมจาตุรงคสันนิบาต วันมาฆบูชา (พระอรหันต์ ๑,๒๕๐ รูป)',
    categoryTag: 'ปริเฉท ๕'
  },

  // ศาสนพิธี
  {
    id: 20,
    subject: 'ceremony',
    subjectLabel: 'ศาสนพิธี',
    pali: 'ศาสนพิธี ๔ หมวด',
    translation: 'แบบแผนพิธีกรรม ๔ ประเภท',
    meaning: '๑. กุศลพิธี (แสดงตนเป็นพุทธมามกะ) ๒. บุญพิธี (งานมงคล/อวมงคล) ๓. ทานพิธี (ถวายสังฆทาน กฐิน ผ้าป่า) ๔. ปกิณณกพิธี (เบ็ดเตล็ด อาราธนา ประเคน กรวดน้ำ)',
    memoryMnemonic: 'กุศล (อบรมตน) - บุญ (จัดงานบ้าน) - ทาน (ถวายของ) - ปกิณณกะ (เบ็ดเตล็ด)',
    examHighlight: 'ข้อสอบถามการจัดหมวดหมู่พิธีกรรมตาม ๔ หมวดนี้บ่อยมาก',
    categoryTag: 'หมวดศาสนพิธี'
  },
  {
    id: 21,
    subject: 'ceremony',
    subjectLabel: 'ศาสนพิธี',
    pali: 'กฐินทาน (กาลทาน)',
    translation: 'การทอดกฐิน',
    meaning: 'ทานที่มีกำหนดเวลา ๑ เดือน (แรม ๑ ค่ำ เดือน ๑๑ ถึง ขึ้น ๑๕ ค่ำ เดือน ๑๒) วัดต้องมีพระจำพรรษาครบ ๓ เดือนอย่างน้อย ๕ รูป',
    memoryMnemonic: 'ปีละครั้ง - เดือนเดียว - พระ ๕ รูป - กาลทาน',
    examHighlight: 'อานิสงส์กฐิน ๕ ประการแก่ภิกษุผู้กรานกฐิน',
    categoryTag: 'ทานพิธี'
  },
  {
    id: 22,
    subject: 'ceremony',
    subjectLabel: 'ศาสนพิธี',
    pali: 'หัตถบาส (Hatthapāsa)',
    translation: 'บ่วงมือ หรือระยะเอื้อมถึง',
    meaning: 'ระยะห่างในการประเคนของแด่พระภิกษุสงฆ์ ต้องไม่เกิน ๑ ศอก (หรือประมาณ ๑ ช่วงแขน/ไม่เกิน ๑ เมตร)',
    memoryMnemonic: 'ประเคนในหัตถบาส ยกไหวด้วยมือเดียว น้อมให้ด้วยเคารพ',
    examHighlight: 'องค์แห่งการประเคน ๕ ประการ: ของพอดีหิ้วไหว, อยู่ในหัตถบาส, น้อมถวาย, กิริยาเคารพ, พระรับถึงมือ',
    categoryTag: 'ปกิณณกพิธี'
  },
  {
    id: 23,
    subject: 'ceremony',
    subjectLabel: 'ศาสนพิธี',
    pali: 'อาราธนาพระปริตร',
    translation: 'คำนิมนต์สวดมนต์มงคล',
    meaning: '"วิปัตติปะฏิพาหายะ สัพพะสัมปัตติสิทธิยา..." ขอให้พระสงฆ์สวดเพื่อดับทุกข์ (จบ ๑) ดับภัย (จบ ๒) ดับโรค (จบ ๓)',
    memoryMnemonic: 'ลำดับคำขอ ๓ จบ: ทุกข์ -> ภัย -> โรค',
    examHighlight: 'ใช้เฉพาะในงานมงคล งานอวมงคล (งานศพ) ไม่ต้องอาราธนาพระปริตร',
    categoryTag: 'บทอาราธนา'
  },

  // วินัยมุข
  {
    id: 24,
    subject: 'vinai',
    subjectLabel: 'วินัยมุข',
    pali: 'ปาราชิก ๔ (Pārājika)',
    translation: 'ผู้พ่ายแพ้ (ขาดจากพระทันที)',
    meaning: '๑. เสพเมถุน (ร่วมเพศ) ๒. ลักทรัพย์ตั้งแต่ ๕ มาสกขึ้นไป ๓. ฆ่ามนุษย์ ๔. อวดอุตตริมนุสสธรรมที่ไม่มีในตน',
    memoryMnemonic: 'เสพกาม ๑ - ลัก ๕ มาสก ๑ - ฆ่าคน ๑ - อวดคุณวิเศษเท็จ ๑',
    examHighlight: 'เป็นอาบัติหนักที่สุด ขาดจากความเป็นพระทันที ไม่สามารถบวชใหม่ได้ตลอดชีวิต',
    categoryTag: 'ปาราชิก'
  },
  {
    id: 25,
    subject: 'vinai',
    subjectLabel: 'วินัยมุข',
    pali: 'สังฆาทิเสส ๑๓',
    translation: 'อาบัติต้องแก้ไขด้วยสงฆ์',
    meaning: 'อาบัติหนักปานกลาง ต้องเข้าสู่กระบวนการอยู่กรรม (วุฏฐานวิธี: ปริวาส เท่าวันที่ปิดบัง -> มานัต ๖ ราตรี -> อัพภานโดยสงฆ์ ๒๐ รูป)',
    memoryMnemonic: 'ปริวาส -> มานัต ๖ วัน -> สงฆ์ ๒๐ รูปสวดอัพภานรับเข้าหมู่',
    examHighlight: 'จำนวนสงฆ์สวดอัพภานต้องครบ ๒๐ รูป ขาดรูปเดียวโมฆะทันที',
    categoryTag: 'สังฆาทิเสส'
  },
  {
    id: 26,
    subject: 'vinai',
    subjectLabel: 'วินัยมุข',
    pali: 'เสขิยวัตร ๗๕',
    translation: 'วัตรที่ภิกษุพึงศึกษา',
    meaning: 'มารยาท ๔ หมวด: สารูป ๒๖ (นุ่งห่มเดินนั่ง) โภชนปฏิสังยุตต์ ๓๐ (ฉันอาหาร) ธัมมเทสนา ๑๖ (แสดงธรรม) ปกิณณกะ ๓ (สุขอนามัย)',
    memoryMnemonic: 'สารูป ๒๖ + โภชน ๓๐ + เทศนา ๑๖ + ปกิณณกะ ๓ = ๗๕ ข้อ',
    examHighlight: 'ละเมิดต้องอาบัติทุกกฏ มีไว้เพื่อสร้างความเลื่อมใส (ปาสาทิกธรรม)',
    categoryTag: 'เสขิยวัตร'
  },
  {
    id: 27,
    subject: 'vinai',
    subjectLabel: 'วินัยมุข',
    pali: 'อธิกรณสมถะ ๗',
    translation: 'ธรรมระงับอธิกรณ์ ๔',
    meaning: 'วิธีระงับข้อพิพาทในสงฆ์: สัมมุขาวินัย (ต่อหน้า), สติวินัย, อมูฬหวินัย (หายบ้า), ปฏิญญาตกรณะ (รับสารภาพ), เยภุยยสิกา (เสียงข้างมาก), ตัสสปาปิยสิกา, ติณวัตถารกวินัย (ประนีประนอมกลบหญ้า)',
    memoryMnemonic: 'ติณวัตถารกวินัย = เอาหญ้ากลบสิ่งปฏิกูล ประนีประนอมเลิกแล้วต่อกัน',
    examHighlight: 'สัมมุขาวินัย (ต่อหน้าสงฆ์ บุคคล วัตถุ) ต้องใช้ร่วมกับทุกวิธีเสมอ',
    categoryTag: 'อธิกรณสมถะ'
  },

  // กระทู้ธรรม
  {
    id: 28,
    subject: 'kratu',
    subjectLabel: 'กระทู้ธรรม',
    pali: 'กมฺมุนา วตฺตตี โลโก',
    translation: 'สัตว์โลกย่อมเป็นไปตามกรรม',
    meaning: 'พุทธศาสนสุภาษิตหมวดกรรมและผลของกรรม มาในคัมภีร์มัชฌิมนิกาย มัชฌิมปัณณาสก์ (ม. ม.)',
    memoryMnemonic: 'ใช้เชื่อมกระทู้หมวดกรรม, ความเพียร, การกระทำของตน',
    examHighlight: 'สุภาษิตยอดนิยมอันดับ ๑ สำหรับนำมาเป็นสุภาษิตเชื่อมในกระทู้ธรรม',
    categoryTag: 'สุภาษิตเชื่อม'
  },
  {
    id: 29,
    subject: 'kratu',
    subjectLabel: 'กระทู้ธรรม',
    pali: 'อตฺตา หิ อตฺตโน นาโถ',
    translation: 'ตนแล เป็นที่พึ่งของตน',
    meaning: 'พุทธศาสนสุภาษิตหมวดตน มาในคัมภีร์ขุททกนิกาย ธรรมบท (ขุ. ธ.)',
    memoryMnemonic: 'ใช้เชื่อมกระทู้หมวดตน, ความไม่ประมาท, การพึ่งพาความเพียร',
    examHighlight: 'สุภาษิตบทตั้งยอดนิยมที่สนามหลวงมักนำมาออกสอบนักธรรมตรี',
    categoryTag: 'สุภาษิตเชื่อม'
  },
  {
    id: 30,
    subject: 'kratu',
    subjectLabel: 'กระทู้ธรรม',
    pali: 'กฎเกณฑ์สนามหลวงกระทู้ตรี',
    translation: 'ระเบียบการเขียนกระทู้',
    meaning: '๑. ความยาวไม่น้อยกว่า ๒ หน้ากระดาษ ๒. มีสุภาษิตเชื่อมพร้อมที่มา ๑ บท ๓. โครงสร้าง: คำนำ -> เนื้อเรื่อง -> เชื่อม -> สรุป ๔. ปิดท้ายด้วยเครื่องหมาย ฯ',
    memoryMnemonic: 'ยาว ๒ หน้าขึ้นไป + เชื่อม ๑ บท + สะกดบาลีถูก + ปิดท้าย ฯ',
    examHighlight: 'เขียนไม่ถึง ๒ หน้ากระดาษ ปรับตกทันทีตามระเบียบสนามหลวง',
    categoryTag: 'กฎระเบียบ'
  }
];

export const DhammaFlashcards: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [knownCards, setKnownCards] = useState<Record<number, boolean>>({});
  const [cardList, setCardList] = useState<Flashcard[]>(DHAMMA_FLASHCARDS_DATA);

  // Filter cards based on selected subject
  useEffect(() => {
    let filtered = DHAMMA_FLASHCARDS_DATA;
    if (selectedSubject !== 'all') {
      filtered = DHAMMA_FLASHCARDS_DATA.filter((c) => c.subject === selectedSubject);
    }
    setCardList(filtered);
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [selectedSubject]);

  // Load known status from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('nakdhamma_known_flashcards');
      if (saved) {
        setKnownCards(JSON.parse(saved));
      }
    } catch {}
  }, []);

  const handleToggleKnown = (cardId: number, known: boolean) => {
    const updated = { ...knownCards, [cardId]: known };
    setKnownCards(updated);
    try {
      localStorage.setItem('nakdhamma_known_flashcards', JSON.stringify(updated));
    } catch {}

    if (known && typeof window !== 'undefined') {
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.7 }
      });
    }

    // Auto next after 350ms
    setTimeout(() => {
      handleNextCard();
    }, 350);
  };

  const handleNextCard = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % cardList.length);
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + cardList.length) % cardList.length);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    const shuffled = [...cardList].sort(() => Math.random() - 0.5);
    setCardList(shuffled);
    setCurrentIndex(0);
  };

  // Mobile Touch Swipe Handling
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const minSwipeDistance = 45;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNextCard();
    } else if (isRightSwipe) {
      handlePrevCard();
    }
  };

  const currentCard = cardList[currentIndex] || cardList[0];
  const isCurrentKnown = !!knownCards[currentCard?.id];
  const totalMastered = cardList.filter((c) => knownCards[c.id]).length;
  const progressPercent = cardList.length > 0 ? Math.round((totalMastered / cardList.length) * 100) : 0;

  return (
    <div className="bg-white border border-amber-200/80 rounded-3xl p-5 sm:p-8 shadow-xs space-y-6">
      
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-amber-100">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-sm shadow-2xs">
              <Sparkles className="w-4 h-4" />
            </span>
            <h2 className="text-xl font-bold text-slate-800">
              บัตรคำจำแม่น • แฟลชการ์ดนักธรรมตรี (Dhamma Flashcards)
            </h2>
          </div>
          <p className="text-xs text-slate-500">
            แตะที่การ์ดเพื่อพลิกดูคำแปล ความหมาย สูตรช่วยจำ และเก็งข้อสอบสนามหลวง
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handleShuffle}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 text-xs font-semibold transition-all"
            title="สลับสุ่มลำดับบัตรคำ"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>สุ่มการ์ด</span>
          </button>

          <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800">
            จำได้แล้ว {totalMastered}/{cardList.length} ({progressPercent}%)
          </span>
        </div>
      </div>

      {/* Subject Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
        {[
          { id: 'all', label: 'ทั้งหมด (๓๐ ใบ)' },
          { id: 'dhamma', label: 'ธรรมวิภาค (๑๓)' },
          { id: 'buddha', label: 'พุทธประวัติ (๖)' },
          { id: 'ceremony', label: 'ศาสนพิธี (๔)' },
          { id: 'vinai', label: 'วินัยมุข (๔)' },
          { id: 'kratu', label: 'กระทู้ธรรม (๓)' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedSubject(tab.id)}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              selectedSubject === tab.id
                ? 'bg-amber-600 text-white font-bold shadow-xs'
                : 'bg-slate-100 hover:bg-amber-50 text-slate-700 border border-slate-200/60'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
        <div 
          className="bg-gradient-to-r from-amber-500 to-emerald-500 h-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Flashcard Area */}
      {currentCard && (
        <div className="space-y-4">
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="cursor-pointer perspective-1000 min-h-[290px] sm:min-h-[340px] flex items-center justify-center rounded-3xl p-5 sm:p-10 transition-all select-none border-2 bg-gradient-to-br from-amber-50/80 via-white to-orange-50/40 border-amber-300/80 hover:border-amber-400 shadow-md hover:shadow-lg relative overflow-hidden touch-pan-y"
          >
            {/* Top Badge Indicators */}
            <div className="absolute top-4 left-5 right-5 flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded-md bg-amber-200/80 text-amber-900 font-bold text-[11px]">
                  {currentCard.subjectLabel}
                </span>
                <span className="px-2 py-0.5 rounded-md bg-white border border-amber-200 text-slate-600 text-[10px]">
                  {currentCard.categoryTag}
                </span>
              </div>
              <span className="text-xs text-slate-400 font-medium">
                ใบที่ {currentIndex + 1} จาก {cardList.length}
              </span>
            </div>

            {/* CARD FRONT: Pali & Translation */}
            {!isFlipped ? (
              <div className="text-center space-y-4 max-w-lg my-auto pt-6">
                <span className="text-[11px] font-bold tracking-wider text-amber-600 uppercase block">
                  คำศัพท์ / หัวข้อธรรม
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
                  {currentCard.pali}
                </h3>
                <div className="inline-block px-4 py-1.5 rounded-xl bg-amber-100/70 border border-amber-200 text-amber-950 font-bold text-base sm:text-lg">
                  {currentCard.translation}
                </div>
                <div className="pt-4 flex items-center justify-center space-x-1.5 text-xs text-slate-400">
                  <RotateCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} />
                  <span>แตะเพื่อพลิก หรือปัดซ้าย-ขวาเพื่อเปลี่ยนการ์ด</span>
                </div>
              </div>
            ) : (
              /* CARD BACK: Detailed Explanation, Mnemonic & Exam Tip */
              <div className="text-left space-y-3 max-w-xl my-auto pt-6 text-xs sm:text-sm">
                <div className="flex items-center justify-between border-b border-amber-200/60 pb-2">
                  <span className="font-bold text-amber-900 text-base">
                    {currentCard.pali} — {currentCard.translation}
                  </span>
                  <span className="text-[10px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-bold">
                    คำเฉลย
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="font-bold text-slate-800 text-xs block">ความหมาย:</span>
                  <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                    {currentCard.meaning}
                  </p>
                </div>

                <div className="p-3 bg-amber-100/50 rounded-xl border border-amber-200 text-amber-950 space-y-0.5 text-xs">
                  <span className="font-bold flex items-center gap-1 text-[11px]">
                    <Sparkles className="w-3 h-3 text-amber-600" /> สูตรช่วยจำขึ้นใจ:
                  </span>
                  <p className="font-medium">{currentCard.memoryMnemonic}</p>
                </div>

                <div className="p-3 bg-rose-50/70 rounded-xl border border-rose-200 text-rose-950 space-y-0.5 text-xs">
                  <span className="font-bold flex items-center gap-1 text-[11px]">
                    <Award className="w-3 h-3 text-rose-600" /> จุดเก็งข้อสอบสนามหลวง:
                  </span>
                  <p className="font-medium">{currentCard.examHighlight}</p>
                </div>

                <div className="text-center pt-2 text-[11px] text-slate-400">
                  แตะอีกครั้งเพื่อพลิกกลับ
                </div>
              </div>
            )}
          </div>

          {/* Bottom Card Controls & Mastery Feedback (Touch-optimized) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
            <div className="flex items-center justify-between w-full sm:w-auto space-x-2">
              <button
                onClick={handlePrevCard}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all active:scale-95 text-center"
              >
                ◀ ก่อนหน้า
              </button>
              <button
                onClick={() => setIsFlipped(!isFlipped)}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-bold transition-all flex items-center justify-center space-x-1 active:scale-95"
              >
                <RotateCw className="w-3.5 h-3.5" />
                <span>พลิกการ์ด</span>
              </button>
              <button
                onClick={handleNextCard}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all active:scale-95 text-center"
              >
                ถัดไป ▶
              </button>
            </div>

            {/* Remembered / Need Practice Buttons */}
            <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => handleToggleKnown(currentCard.id, false)}
                className={`flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all border active:scale-95 ${
                  !isCurrentKnown
                    ? 'bg-rose-50 border-rose-300 text-rose-700 ring-2 ring-rose-200'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-rose-50'
                }`}
              >
                <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                <span>ยังจำไม่ได้</span>
              </button>

              <button
                onClick={() => handleToggleKnown(currentCard.id, true)}
                className={`flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all border active:scale-95 ${
                  isCurrentKnown
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs ring-2 ring-emerald-300'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-emerald-50'
                }`}
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>จำได้แม่นแล้ว!</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

