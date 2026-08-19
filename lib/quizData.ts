export interface QuizQuestion {
  id: string;
  grade: "ตรี" | "โท" | "เอก";
  subject: "กระทู้ธรรม" | "ธรรมวิภาค" | "พุทธประวัติ" | "วินัย";
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  reference: string;
  sourceName?: string;
  sourceUrl?: string;
  year?: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    "id": "tri-k-01",
    "grade": "ตรี",
    "subject": "กระทู้ธรรม",
    "year": "๒๕๕๙",
    "question": "'ปฏิรูปการี ธุรวา อุฏฺฐาตา วินฺทเต ธนํ' แปลว่าอย่างไร?",
    "options": [
      "คนย่อมได้เกียรติด้วยสัจจะ",
      "คนขยันเอาธุระ ทำงานเหมาะเจาะ ย่อมหาทรัพย์ได้",
      "ความเพียรเป็นเครื่องล่วงทุกข์",
      "ผู้ทำความดี ย่อมได้รับความเจริญ"
    ],
    "correctIndex": 1,
    "explanation": "คนขยันเอาธุระ ทำงานเหมาะเจาะ ย่อมหาทรัพย์ได้ ออกสอบปี ๒๕๕๙",
    "reference": "ข้อสอบสนามหลวง ๒๕๕๙",
    "sourceName": "ข้อสอบจริงสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-k-02",
    "grade": "ตรี",
    "subject": "กระทู้ธรรม",
    "year": "๒๕๖๒",
    "question": "'สจฺเจน กิตฺติํ ปปฺโปติ' หมายความว่าอย่างไร?",
    "options": [
      "คนล่วงทุกข์ได้เพราะความเพียร",
      "คนย่อมได้เกียรติด้วยสัจจะ",
      "ความไม่ประมาทเป็นทางไม่ตาย",
      "ปัญญาเป็นแสงสว่างในโลก"
    ],
    "correctIndex": 1,
    "explanation": "สจฺเจน กิตฺติํ ปปฺโปติ แปลว่า คนย่อมได้เกียรติด้วยสัจจะ ออกสอบปี ๒๕๖๒",
    "reference": "ข้อสอบสนามหลวง ๒๕๖๒",
    "sourceName": "ข้อสอบจริงสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-k-03",
    "grade": "ตรี",
    "subject": "กระทู้ธรรม",
    "year": "๒๕๖๓",
    "question": "'อปฺปมาโท อมตํ ปทํ' แปลว่าอย่างไร?",
    "options": [
      "ความประมาทเป็นทางแห่งความตาย",
      "ความไม่ประมาทเป็นทางไม่ตาย",
      "ความเพียรย่อมชนะอุปสรรค",
      "สัจจะเป็นเครื่องค้ำจุนโลก"
    ],
    "correctIndex": 1,
    "explanation": "อปฺปมาโท อมตํ ปทํ แปลว่า ความไม่ประมาทเป็นทางไม่ตาย ออกสอบปี ๒๕๖๓",
    "reference": "ข้อสอบสนามหลวง ๒๕๖๓",
    "sourceName": "ข้อสอบจริงสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-k-04",
    "grade": "ตรี",
    "subject": "กระทู้ธรรม",
    "year": "๒๕๖๕",
    "question": "ย่อหน้าแรกของเรียงความแก้กระทู้ธรรมชั้นตรีต้องขึ้นต้นด้วยอะไร?",
    "options": [
      "ณ บัดนี้ จักได้อธิบาย...",
      "บัดนี้ จักได้อธิบายขยายความแห่งกระทู้ธรรมสุภาษิต ที่ได้ลิขิตไว้ ณ เบื้องต้น...",
      "ขอความนอบน้อมจงมีแด่พระรัตนตรัย...",
      "ด้วยอำนาจบุญกุศลที่ได้สั่งสมมา..."
    ],
    "correctIndex": 1,
    "explanation": "ต้องขึ้นต้นด้วยสำนวนมาตรฐาน 'บัดนี้ จักได้อธิบายขยายความแห่งกระทู้ธรรมสุภาษิต ที่ได้ลิขิตไว้ ณ เบื้องต้น...'",
    "reference": "คู่มือเขียนเรียงความแก้กระทู้ธรรมชั้นตรี",
    "sourceName": "ครูประกาศผล (prakaspon.com)",
    "sourceUrl": "https://prakaspon.com/"
  },
  {
    "id": "tri-k-05",
    "grade": "ตรี",
    "subject": "กระทู้ธรรม",
    "year": "๒๕๖๑",
    "question": "การเขียนกระทู้เชื่อมในชั้นตรี ต้องนำด้วยสำนวนใด?",
    "options": [
      "สมดังคำสอนว่า...",
      "สมดังสุภาษิตที่มาใน... ว่า...",
      "ดังที่พระพุทธเจ้าตรัสไว้ว่า...",
      "ดังมีพระบาลีกล่าวไว้ว่า..."
    ],
    "correctIndex": 1,
    "explanation": "ก่อนขึ้นกระทู้เชื่อม ต้องเขียนนำด้วยสำนวน 'สมดังสุภาษิตที่มาใน (คัมภีร์) ว่า'",
    "reference": "โครงสร้างการเขียนเรียงความกระทู้ธรรม",
    "sourceName": "ครูประกาศผล (prakaspon.com)",
    "sourceUrl": "https://prakaspon.com/"
  },
  {
    "id": "tri-k-06",
    "grade": "ตรี",
    "subject": "กระทู้ธรรม",
    "year": "๒๕๖๐",
    "question": "การเขียนแก้กระทู้ธรรมชั้นตรีกำหนดกระทู้เชื่อมอย่างน้อยกี่บท?",
    "options": [
      "ไม่ต้องมีเลย",
      "อย่างน้อย ๑ บท",
      "อย่างน้อย ๒ บท",
      "อย่างน้อย ๓ บท"
    ],
    "correctIndex": 1,
    "explanation": "ชั้นตรีบังคับกระทู้เชื่อมอย่างน้อย ๑ บท",
    "reference": "เกณฑ์การตรวจเรียงความธรรมสนามหลวง ชั้นตรี",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-k-07",
    "grade": "ตรี",
    "subject": "กระทู้ธรรม",
    "year": "๒๕๖๔",
    "question": "ประโยคปิดท้ายของเรียงความแก้กระทู้ธรรมทุกระดับคือข้อใด?",
    "options": [
      "จบการอธิบายเท่านี้ เอวังก็มีด้วยประการฉะนี้",
      "มีนัยดังพรรณนามาฉะนี้",
      "สาธุ สาธุ สาธุ",
      "ขอความสุขสวัสดีจงมีแก่ทุกท่าน"
    ],
    "correctIndex": 1,
    "explanation": "คำปิดท้ายมาตรฐานคือ 'มีนัยดังพรรณนามาฉะนี้'",
    "reference": "คู่มือเขียนเรียงความแก้กระทู้ธรรม",
    "sourceName": "ครูประกาศผล (prakaspon.com)",
    "sourceUrl": "https://prakaspon.com/"
  },
  {
    "id": "tri-k-08",
    "grade": "ตรี",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'ขุ. ธ.' ในวงเล็บอ้างอิงท้ายสุภาษิตย่อมาจากคัมภีร์ใด?",
    "options": [
      "ขุททกนิกาย ชาดก",
      "ขุททกนิกาย ธรรมบท",
      "ขุททกนิกาย เถรคาถา",
      "ขุททกนิกาย อปทาน"
    ],
    "correctIndex": 1,
    "explanation": "ขุ. ธ. ย่อมาจาก ขุททกนิกาย ธรรมบท",
    "reference": "คู่มือตัวย่อคัมภีร์อ้างอิง",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "tri-k-09",
    "grade": "ตรี",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'วิริเยน ทุกฺขมจฺเจติ' แปลว่าอย่างไร?",
    "options": [
      "ปัญญาประเสริฐกว่าทรัพย์",
      "คนล่วงทุกข์ได้เพราะความเพียร",
      "สัจจะทำให้ผู้พูดไม่เสื่อม",
      "ความสามัคคีเป็นเหตุแห่งความสุข"
    ],
    "correctIndex": 1,
    "explanation": "วิริเยน ทุกฺขมจฺเจติ แปลว่า คนล่วงทุกข์ได้เพราะความเพียร",
    "reference": "พุทธสุภาษิตหมวดความเพียร",
    "sourceName": "ครูประกาศผล (prakaspon.com)",
    "sourceUrl": "https://prakaspon.com/"
  },
  {
    "id": "tri-k-10",
    "grade": "ตรี",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'สจฺจํ เว อมตา วาจา' แปลว่าอะไร?",
    "options": [
      "คำพูดดีนำมาซึ่งโชค",
      "คำสัจแลเป็นวาจาไม่ตาย",
      "วาจาอ่อนโยนชนะใจคน",
      "ความซื่อสัตย์เป็นทรัพย์อันประเสริฐ"
    ],
    "correctIndex": 1,
    "explanation": "สจฺจํ เว อมตา วาจา แปลว่า คำสัจแลเป็นวาจาไม่ตาย",
    "reference": "พุทธสุภาษิตหมวดสัจจะ",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "tri-k-11",
    "grade": "ตรี",
    "subject": "กระทู้ธรรม",
    "year": "๒๕๕๙",
    "question": "วิชาเรียงความแก้กระทู้ธรรม มีคะแนนเต็มและเกณฑ์ผ่านเท่าใด?",
    "options": [
      "เต็ม ๕๐ ผ่าน ๒๕",
      "เต็ม ๑๐๐ ผ่าน ๕๐",
      "เต็ม ๑๐๐ ผ่าน ๖๐",
      "เต็ม ๒๐๐ ผ่าน ๑๐๐"
    ],
    "correctIndex": 1,
    "explanation": "วิชากระทู้ธรรมมีคะแนนเต็ม ๑๐๐ ผ่าน ๕๐ คะแนน",
    "reference": "ระเบียบการสอบกองธรรมสนามหลวง",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-k-12",
    "grade": "ตรี",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "ความยาวที่เหมาะสมของเรียงความแก้กระทู้ธรรมชั้นตรีคือเท่าใด?",
    "options": [
      "๑๐-๑๕ บรรทัด",
      "ประมาณ ๒ หน้ากระดาษขึ้นไป",
      "๕ หน้ากระดาษขึ้นไป",
      "ไม่จำกัดความยาว"
    ],
    "correctIndex": 1,
    "explanation": "ควรเขียนให้ได้ความยาวไม่น้อยกว่า ๒ หน้ากระดาษสอบ",
    "reference": "เกณฑ์การประเมินกระทู้ธรรมชั้นตรี",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-k-13",
    "grade": "ตรี",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'องฺ. ทุก.' ย่อมาจากคัมภีร์ใด?",
    "options": [
      "อังคุตตรนิกาย ทุกนิบาต",
      "อังคุตตรนิกาย ติกนิบาต",
      "อังคุตตรนิกาย จตุกกนิบาต",
      "อังคุตตรนิกาย ปัญจกนิบาต"
    ],
    "correctIndex": 0,
    "explanation": "องฺ. ทุก. ย่อมาจาก อังคุตตรนิกาย ทุกนิบาต รวบรวมธรรม ๒ ข้อ",
    "reference": "ตารางอักษรย่อคัมภีร์",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "tri-k-14",
    "grade": "ตรี",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'อรรถาธิบาย' ในการเขียนกระทู้ธรรมหมายถึงอะไร?",
    "options": [
      "การคัดลอกพุทธพจน์ภาษาบาลี",
      "การเขียนขยายความและวิเคราะห์หลักธรรม",
      "การแต่งโคลงกลอนพรรณนา",
      "การตั้งคำถามสั้นๆ"
    ],
    "correctIndex": 1,
    "explanation": "อรรถาธิบายคือส่วนอธิบายขยายเนื้อความหลักธรรมเชื่อมโยงกับชีวิต",
    "reference": "คู่มือการจัดระเบียบเขียนเรียงความ",
    "sourceName": "ครูประกาศผล (prakaspon.com)",
    "sourceUrl": "https://prakaspon.com/"
  },
  {
    "id": "tri-k-15",
    "grade": "ตรี",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'ขุ. สุ.' ย่อมาจากคัมภีร์ใด?",
    "options": [
      "ขุททกนิกาย สุตตนิบาต",
      "ขุททกนิกาย สังคีติ",
      "ขุททกนิกาย สารัตถ",
      "ขุททกนิกาย สมุทัย"
    ],
    "correctIndex": 0,
    "explanation": "ขุ. สุ. ย่อมาจาก ขุททกนิกาย สุตตนิบาต",
    "reference": "พุทธประวัติและคัมภีร์อ้างอิง",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-k-16",
    "grade": "ตรี",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "คำว่า 'สุภาษิต' หมายถึงคำพูดลักษณะใด?",
    "options": [
      "คำพูดหยาบคายแต่มีแง่คิด",
      "คำพูดที่ดีงาม ถูกกาล มีประโยชน์ ประกอบด้วยธรรม",
      "คำพูดที่ประดิษฐ์ด้วยกลอนหรูหรา",
      "การพูดจาประจบผู้ใหญ่"
    ],
    "correctIndex": 1,
    "explanation": "สุภาษิตคือคำที่กล่าวไว้ดี ถูกตริตรอง เป็นความจริง มีประโยชน์",
    "reference": "ธรรมวิภาค วาจาสุภาษิต ๕",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-k-17",
    "grade": "ตรี",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'ปมาโท มจฺจุโน ปทํ' แปลว่าอะไร?",
    "options": [
      "ความไม่ประมาทเป็นทางไม่ตาย",
      "ความประมาทเป็นทางแห่งความตาย",
      "ความเพียรเป็นเครื่องล่วงทุกข์",
      "ปัญญาประเสริฐกว่าสิ่งทั้งปวง"
    ],
    "correctIndex": 1,
    "explanation": "ปมาโท มจฺจุโน ปทํ แปลว่า ความประมาทเป็นทางแห่งความตาย",
    "reference": "ธรรมบท อัปปมาทวรรค",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "tri-k-18",
    "grade": "ตรี",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "กระทู้ธรรมชั้นตรีมีกี่วิชาย่อย?",
    "options": [
      "๑ วิชา",
      "๒ วิชา คือ กระทู้ตั้งและกระทู้เชื่อม",
      "๓ วิชา",
      "๔ วิชา"
    ],
    "correctIndex": 1,
    "explanation": "วิชาแก้กระทู้ธรรมมีส่วนหลัก ๒ ส่วน คือกระทู้ตั้งและกระทู้เชื่อม",
    "reference": "โครงสร้างวิชากระทู้ธรรม",
    "sourceName": "ครูประกาศผล (prakaspon.com)",
    "sourceUrl": "https://prakaspon.com/"
  },
  {
    "id": "tri-k-19",
    "grade": "ตรี",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'นตฺถิ สนฺติปรํ สุขํ' แปลว่าอย่างไร?",
    "options": [
      "ความสุขอื่นยิ่งกว่าความสงบไม่มี",
      "ความสุขย่อมเกิดจากการทำความดี",
      "ความสุขในโลกนี้ไม่ยั่งยืน",
      "ความสงบภายในนำมาซึ่งปัญญา"
    ],
    "correctIndex": 0,
    "explanation": "นตฺถิ สนฺติปรํ สุขํ แปลว่า ความสุขอื่นยิ่งกว่าความสงบไม่มี",
    "reference": "ธรรมบท สุขวรรค",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "tri-k-20",
    "grade": "ตรี",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'ธมฺโม หเว รกฺขติ ธมฺมจาริํ' แปลว่าอะไร?",
    "options": [
      "ธรรมย่อมรักษาผู้ประพฤติธรรม",
      "ผู้มีธรรมย่อมมีสุข",
      "ธรรมเป็นเครื่องนำสัตว์สู่สวรรค์",
      "ผู้ปฏิบัติธรรมย่อมหลุดพ้น"
    ],
    "correctIndex": 0,
    "explanation": "ธมฺโม หเว รกฺขติ ธมฺมจาริํ แปลว่า ธรรมย่อมรักษาผู้ประพฤติธรรม",
    "reference": "ธรรมบท ธัมมวรรค",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "tri-k-21",
    "grade": "ตรี",
    "subject": "กระทู้ธรรม",
    "year": "๒๕๖๔",
    "question": "กระทู้ธรรมชั้นตรีสอบวันใดในสนามหลวง?",
    "options": [
      "วันแรกของการสอบ",
      "วันที่สอง",
      "วันสุดท้าย",
      "สอบเฉพาะตอนเช้าวันแรก"
    ],
    "correctIndex": 0,
    "explanation": "วิชาเรียงความแก้กระทู้ธรรมสอบในวันแรกของการสอบนักธรรม",
    "reference": "กำหนดการสอบนักธรรมสนามหลวง",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-k-22",
    "grade": "ตรี",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'สํ. ส.' ย่อมาจากคัมภีร์ใด?",
    "options": [
      "สังยุตตนิกาย สคาถวรรค",
      "สังยุตตนิกาย สมาธิวรรค",
      "สังยุตตนิกาย สังสารวรรค",
      "สังยุตตนิกาย สักกวรรค"
    ],
    "correctIndex": 0,
    "explanation": "สํ. ส. ย่อมาจาก สังยุตตนิกาย สคาถวรรค",
    "reference": "ตารางอักษรย่อคัมภีร์",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "tri-k-23",
    "grade": "ตรี",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'ม. มู.' ย่อมาจากคัมภีร์ใด?",
    "options": [
      "มัชฌิมนิกาย มัชฌิมปัณณาสก์",
      "มัชฌิมนิกาย มูลปัณณาสก์",
      "มัชฌิมนิกาย อุปริปัณณาสก์",
      "มหาวรรค พระวินัย"
    ],
    "correctIndex": 1,
    "explanation": "ม. มู. ย่อมาจาก มัชฌิมนิกาย มูลปัณณาสก์",
    "reference": "ตารางอักษรย่อคัมภีร์",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "tri-k-24",
    "grade": "ตรี",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "การเขียนนำอ้างอิงกระทู้เชื่อมบทต่อๆ มา นิยมเชื่อมด้วยสำนวนใด?",
    "options": [
      "'นอกจากนี้ยังมีสุภาษิตว่า...'",
      "'และยังมีพุทธภาษิตอีกบทหนึ่ง ซึ่งมาใน... ว่า...'",
      "'ต่อไปนี้คือสุภาษิตที่สอง...'",
      "'อีกบทหนึ่งในพระธรรมคือ...'"
    ],
    "correctIndex": 1,
    "explanation": "นิยมเชื่อมด้วยประโยค 'และยังมีพุทธภาษิตอีกบทหนึ่ง ซึ่งมาใน... ว่า...'",
    "reference": "เทคนิคการเขียนกระทู้เชื่อม",
    "sourceName": "ครูประกาศผล (prakaspon.com)",
    "sourceUrl": "https://prakaspon.com/"
  },
  {
    "id": "tri-k-25",
    "grade": "ตรี",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "การสะกดบาลีผิดในกระทู้เชื่อมจะถูกหักคะแนนส่วนใด?",
    "options": [
      "คะแนนลายมือ",
      "คะแนนโครงสร้างหลักเกณฑ์ (สัมพันธ์)",
      "ไม่หักเพราะอนุโลมได้",
      "ปรับตกทันที"
    ],
    "correctIndex": 1,
    "explanation": "การสะกดบาลีผิดถือเป็นความบกพร่องทางโครงสร้าง จะหักคะแนนสัมพันธ์",
    "reference": "ระเบียบการตรวจข้อสอบธรรมสนามหลวง",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-01",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "กรรม ๑๒ แบ่งตามหน้าที่กรรมมีกี่ประเภท?",
    "options": [
      "๒ ประเภท",
      "๔ ประเภท",
      "๘ ประเภท",
      "๑๒ ประเภท"
    ],
    "correctIndex": 1,
    "explanation": "กรรมแบ่งตามหน้าที่ได้ ๔ ประเภท คือ ชนกกรรม อุปัตถัมภกกรรม อุปปีฬกกรรม และอุปฆาตกกรรม",
    "reference": "ธรรมวิภาค ชั้นตรี หมวดกรรม",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "tri-d-02",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "อกุศลกรรมบถ ๑๐ ข้อใดเป็นกายกรรม?",
    "options": [
      "โลภ โกรธ หลง",
      "ปาณาติบาต อทินนาทาน กาเมสุมิจฉาจาร",
      "มุสาวาท ปิสุณาวาจา ผรุสวาจา สัมผัปปลาป",
      "อภิชฌา พยาบาท มิจฉาทิฏฐิ"
    ],
    "correctIndex": 1,
    "explanation": "กายกรรมในอกุศลกรรมบถ ๑๐ ได้แก่ ปาณาติบาต อทินนาทาน และกาเมสุมิจฉาจาร",
    "reference": "ธรรมวิภาค ชั้นตรี อกุศลกรรมบถ ๑๐",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-03",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "กุศลกรรมบถ ๑๐ ข้อใดเป็นมโนกรรม?",
    "options": [
      "เจตนางดเว้นจากปาณาติบาต อทินนาทาน กาเมสุมิจฉาจาร",
      "สัมมาวาจา สัมมากัมมันตะ สัมมาอาชีวะ",
      "อนภิชฌา อพยาบาท สัมมาทิฏฐิ",
      "เมตตา กรุณา มุทิตา อุเบกขา"
    ],
    "correctIndex": 2,
    "explanation": "มโนกรรมในกุศลกรรมบถ ๑๐ ได้แก่ อนภิชฌา อพยาบาท และสัมมาทิฏฐิ",
    "reference": "ธรรมวิภาค ชั้นตรี กุศลกรรมบถ ๑๐",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-04",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "อบายมุข ๖ ข้อใดเป็นอบายมุขตามหลักธรรมชั้นตรี?",
    "options": [
      "เมาสุรา เล่นการพนัน เที่ยวกลางคืน คบคนพาล ขี้เกียจ และมิจฉาทิฏฐิ",
      "ติดสุรา เล่นการพนัน เที่ยวกลางคืน คบคนพาล เกียจคร้าน และทะเลาะวิวาท",
      "สุรา การพนัน กลางคืน เพื่อนชั่ว เกียจคร้าน ละเลยงาน",
      "สุรา นารี พาณิชย์ ราชา เด็กเกเร และโจร"
    ],
    "correctIndex": 1,
    "explanation": "อบายมุข ๖ ได้แก่ ดื่มสุรา เล่นการพนัน เที่ยวกลางคืน ระเริงในการละเล่น คบคนพาล เกียจคร้านทำการ",
    "reference": "ธรรมวิภาค ชั้นตรี อบายมุข ๖",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-05",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "ฆราวาสธรรม ๔ ข้อใดบ้างที่ประกอบในหลักธรรมนี้?",
    "options": [
      "ทาน ศีล ภาวนา อุเบกขา",
      "สัจจะ ทมะ ขันติ จาคะ",
      "เมตตา กรุณา มุทิตา อุเบกขา",
      "ศีล สมาธิ ปัญญา วิมุตติ"
    ],
    "correctIndex": 1,
    "explanation": "ฆราวาสธรรม ๔ ได้แก่ สัจจะ ทมะ ขันติ และจาคะ",
    "reference": "ธรรมวิภาค ชั้นตรี ฆราวาสธรรม ๔",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-06",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "สังคหวัตถุ ๔ มีอะไรบ้าง?",
    "options": [
      "ทาน ศีล ภาวนา สมาธิ",
      "ทาน ปิยวาจา อัตถจริยา สมานัตตตา",
      "เมตตา กรุณา มุทิตา อุเบกขา",
      "ศรัทธา วิริยะ สติ สมาธิ"
    ],
    "correctIndex": 1,
    "explanation": "สังคหวัตถุ ๔ ได้แก่ ทาน ปิยวาจา อัตถจริยา และสมานัตตตา",
    "reference": "ธรรมวิภาค ชั้นตรี สังคหวัตถุ ๔",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-07",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "พรหมวิหาร ๔ ประกอบด้วยธรรมใดบ้าง?",
    "options": [
      "ทาน ศีล สมาธิ ปัญญา",
      "เมตตา กรุณา มุทิตา อุเบกขา",
      "สัจจะ ทมะ ขันติ จาคะ",
      "ศรัทธา วิริยะ สติ สมาธิ"
    ],
    "correctIndex": 1,
    "explanation": "พรหมวิหาร ๔ ได้แก่ เมตตา กรุณา มุทิตา และอุเบกขา",
    "reference": "ธรรมวิภาค ชั้นตรี พรหมวิหาร ๔",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "tri-d-08",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "ทิฏฐธัมมิกัตถะ ๔ คืออะไร?",
    "options": [
      "ธรรมเพื่อประโยชน์สุขในชาตินี้",
      "ธรรมเพื่อประโยชน์สุขในชาติหน้า",
      "ธรรมเพื่อการหลุดพ้น",
      "ธรรมเพื่อการค้าขาย"
    ],
    "correctIndex": 0,
    "explanation": "ทิฏฐธัมมิกัตถะ ๔ คือธรรมที่เป็นประโยชน์สุขในปัจจุบัน ได้แก่ อุฏฐานสัมปทา อารักขสัมปทา กัลยาณมิตตตา สมชีวิตา",
    "reference": "ธรรมวิภาค ชั้นตรี ทิฏฐธัมมิกัตถะ ๔",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-09",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "อิทธิบาท ๔ มีองค์ประกอบอะไรบ้าง?",
    "options": [
      "ทาน ศีล ขันติ ปัญญา",
      "ฉันทะ วิริยะ จิตตะ วิมังสา",
      "สัทธา วิริยะ สติ สมาธิ ปัญญา",
      "เมตตา กรุณา มุทิตา อุเบกขา"
    ],
    "correctIndex": 1,
    "explanation": "อิทธิบาท ๔ ได้แก่ ฉันทะ วิริยะ จิตตะ และวิมังสา",
    "reference": "ธรรมวิภาค ชั้นตรี อิทธิบาท ๔",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "tri-d-10",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "ศีล ๕ ข้อใดเป็นข้อที่ ๓?",
    "options": [
      "ละเว้นจากการลักทรัพย์",
      "ละเว้นจากการประพฤติผิดในกาม",
      "ละเว้นจากการพูดเท็จ",
      "ละเว้นจากการดื่มสุรา"
    ],
    "correctIndex": 1,
    "explanation": "ศีล ๕ ข้อที่ ๓ คือ กาเมสุมิจฉาจาร เวรมณี = ละเว้นจากการประพฤติผิดในกาม",
    "reference": "ธรรมวิภาค ชั้นตรี ศีล ๕",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-11",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "มิตรแท้ ๔ จำพวกในทิฏฐธัมมิกัตถะประกอบด้วยใครบ้าง?",
    "options": [
      "มิตรมีอุปการะ มิตรร่วมสุขร่วมทุกข์ มิตรแนะนำประโยชน์ มิตรมีความรักใคร่",
      "คนมีศีล คนมีปัญญา คนมีขันติ คนมีจาคะ",
      "มิตรเป็นใหญ่ มิตรเป็นเล็ก มิตรร่ำรวย มิตรยากจน",
      "มิตรวัยเด็ก มิตรวัยหนุ่ม มิตรวัยกลาง มิตรวัยชรา"
    ],
    "correctIndex": 0,
    "explanation": "มิตรแท้ ๔ ได้แก่ มิตรมีอุปการะ มิตรร่วมสุขร่วมทุกข์ มิตรแนะประโยชน์ และมิตรมีความรักใคร่",
    "reference": "ธรรมวิภาค ชั้นตรี มิตรแท้ ๔",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-12",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "โทษของสุราและน้ำเมาในอบายมุข ๖ มีโทษกี่ข้อ?",
    "options": [
      "๓ ข้อ",
      "๖ ข้อ",
      "๑๐ ข้อ",
      "๑๒ ข้อ"
    ],
    "correctIndex": 1,
    "explanation": "โทษของสุราและน้ำเมามี ๖ ข้อ เช่น ทำให้เสียทรัพย์ เกิดการทะเลาะวิวาท เป็นต้น",
    "reference": "ธรรมวิภาค ชั้นตรี อบายมุข ๖ โทษ",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "tri-d-13",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "'ทมะ' ในฆราวาสธรรม ๔ หมายถึงอะไร?",
    "options": [
      "ความซื่อสัตย์",
      "การฝึกฝนข่มจิตใจตนเอง",
      "ความอดทน",
      "การสละเพื่อส่วนรวม"
    ],
    "correctIndex": 1,
    "explanation": "ทมะ คือการข่มจิตและฝึกปฏิบัติตนให้อยู่ในระเบียบวินัย",
    "reference": "ธรรมวิภาค ชั้นตรี ฆราวาสธรรม ๔",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-14",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "'จาคะ' ในฆราวาสธรรม ๔ หมายถึงอะไร?",
    "options": [
      "ความซื่อสัตย์",
      "ความข่มใจ",
      "ความอดทน",
      "การสละ ให้ปัน เผื่อแผ่"
    ],
    "correctIndex": 3,
    "explanation": "จาคะ คือการสละให้ปันเผื่อแผ่ ไม่ตระหนี่",
    "reference": "ธรรมวิภาค ชั้นตรี ฆราวาสธรรม ๔",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-15",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "วาจาสุภาษิต ๕ ประการ ข้อใดคือข้อแรก?",
    "options": [
      "พูดจริง",
      "พูดถูกกาล",
      "พูดอ่อนหวาน",
      "พูดด้วยเมตตา"
    ],
    "correctIndex": 0,
    "explanation": "วาจาสุภาษิตข้อแรกคือ สจฺจา - พูดคำจริง",
    "reference": "ธรรมวิภาค ชั้นตรี วาจาสุภาษิต ๕",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "tri-d-16",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "หิริและโอตตัปปะเรียกรวมว่าอะไร?",
    "options": [
      "พรหมวิหาร ๒",
      "โลกบาลธรรม ๒",
      "ฆราวาสธรรม ๒",
      "สังคหวัตถุ ๒"
    ],
    "correctIndex": 1,
    "explanation": "หิริและโอตตัปปะเรียกรวมว่า โลกบาลธรรม ๒ คือธรรมที่คุ้มครองโลก",
    "reference": "ธรรมวิภาค ชั้นตรี โลกบาลธรรม",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-17",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "'หิริ' หมายถึงอะไร?",
    "options": [
      "ความละอายต่อการทำบาป",
      "ความเกรงกลัวต่อผลของบาป",
      "ความเมตตาต่อผู้อื่น",
      "ความซื่อสัตย์ต่อตนเอง"
    ],
    "correctIndex": 0,
    "explanation": "หิริ คือความละอายแก่ใจต่อการกระทำบาปกรรม",
    "reference": "ธรรมวิภาค ชั้นตรี โลกบาลธรรม",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-18",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "ทุจริต ๓ หมายถึงความประพฤติชั่วทางใดบ้าง?",
    "options": [
      "ทางกาย วาจา ใจ",
      "ทางกาย วาจา และทรัพย์สิน",
      "ทางใจ วาจา และสังคม",
      "ทางความคิด ความรู้สึก และการกระทำ"
    ],
    "correctIndex": 0,
    "explanation": "ทุจริต ๓ ได้แก่ กายทุจริต วจีทุจริต มโนทุจริต",
    "reference": "ธรรมวิภาค ชั้นตรี ทุจริต ๓",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "tri-d-19",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "ศีล ๘ เพิ่มเติมจากศีล ๕ ในข้อใด?",
    "options": [
      "งดเว้นจากการฆ่าสัตว์ใหญ่",
      "งดเว้นจากการบริโภคอาหารในเวลาวิกาล",
      "งดเว้นจากการดูมหรสพ",
      "ทั้งข้อ ข และ ค"
    ],
    "correctIndex": 3,
    "explanation": "ศีล ๘ เพิ่มจากศีล ๕ ด้วยข้อ วิกาลโภชนา เวรมณี และนัจจะคีต ฯลฯ รวมถึงข้ออื่นอีก",
    "reference": "ธรรมวิภาค ชั้นตรี ศีล ๘",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-20",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "'เมตตา' ในพรหมวิหาร ๔ หมายถึงอะไร?",
    "options": [
      "ความสงสารอยากช่วยให้พ้นทุกข์",
      "ความรักใคร่ปรารถนาให้เป็นสุข",
      "ความยินดีเมื่อเห็นผู้อื่นได้ดี",
      "ความวางเฉยเป็นกลาง"
    ],
    "correctIndex": 1,
    "explanation": "เมตตา คือความรักใคร่ปรารถนาให้ผู้อื่นมีความสุข",
    "reference": "ธรรมวิภาค ชั้นตรี พรหมวิหาร ๔",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "tri-d-21",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "'กรุณา' ในพรหมวิหาร ๔ หมายถึงอะไร?",
    "options": [
      "ความรักและปรารถนาให้มีสุข",
      "ความสงสารอยากช่วยให้พ้นทุกข์",
      "ความพลอยยินดีเมื่อผู้อื่นมีสุข",
      "ความวางเฉยไม่ยินดียินร้าย"
    ],
    "correctIndex": 1,
    "explanation": "กรุณา คือความสงสาร คิดจะช่วยให้สัตว์พ้นจากทุกข์",
    "reference": "ธรรมวิภาค ชั้นตรี พรหมวิหาร ๔",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "tri-d-22",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "บุคคลที่ไม่ควรคบ (มิตรเทียม) ในทิฏฐธัมมิกัตถะมีกี่จำพวก?",
    "options": [
      "๒ จำพวก",
      "๓ จำพวก",
      "๔ จำพวก",
      "๖ จำพวก"
    ],
    "correctIndex": 2,
    "explanation": "มิตรเทียมมี ๔ จำพวก ได้แก่ คนปอกลอก คนดีแต่พูด คนหัวประจบ และคนชักชวนในทางฉิบหาย",
    "reference": "ธรรมวิภาค ชั้นตรี มิตรเทียม ๔",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-23",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "อคติ ๔ มีอะไรบ้าง?",
    "options": [
      "โลภ โกรธ หลง กลัว",
      "ฉันทาคติ โทสาคติ โมหาคติ ภยาคติ",
      "รัก เกลียด กลัว หลง",
      "ดี ชั่ว สุข ทุกข์"
    ],
    "correctIndex": 1,
    "explanation": "อคติ ๔ ได้แก่ ฉันทาคติ (ลำเอียงเพราะรัก) โทสาคติ (เพราะชัง) โมหาคติ (เพราะหลง) ภยาคติ (เพราะกลัว)",
    "reference": "ธรรมวิภาค ชั้นตรี อคติ ๔",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-24",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "'โอตตัปปะ' หมายถึงอะไร?",
    "options": [
      "ความละอายต่อบาป",
      "ความเกรงกลัวต่อผลของบาป",
      "ความเมตตาต่อผู้อื่น",
      "ความอดทนต่อความยากลำบาก"
    ],
    "correctIndex": 1,
    "explanation": "โอตตัปปะ คือความสะดุ้งกลัว เกรงกลัวต่อผลของการทำบาป",
    "reference": "ธรรมวิภาค ชั้นตรี โลกบาลธรรม",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-25",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "สุจริต ๓ หมายถึงความประพฤติดีทางใดบ้าง?",
    "options": [
      "ทางกาย วาจา ใจ",
      "ทางกาย วาจา ทรัพย์",
      "ทางปัญญา สมาธิ ศีล",
      "ทางใจ สังคม และธรรมชาติ"
    ],
    "correctIndex": 0,
    "explanation": "สุจริต ๓ ได้แก่ กายสุจริต วจีสุจริต มโนสุจริต",
    "reference": "ธรรมวิภาค ชั้นตรี สุจริต ๓",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "tri-b-01",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "พระพุทธเจ้าประสูติ ณ สถานที่ใด?",
    "options": [
      "พุทธคยา",
      "ลุมพินีวัน",
      "สารนาถ",
      "กุสินารา"
    ],
    "correctIndex": 1,
    "explanation": "พระพุทธเจ้าประสูติที่ลุมพินีวัน ซึ่งอยู่ระหว่างเมืองกบิลพัสดุ์และเทวทหะ",
    "reference": "พุทธประวัติชั้นตรี ตอนประสูติ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-02",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "พระพุทธเจ้าตรัสรู้ ณ สถานที่ใด?",
    "options": [
      "ลุมพินีวัน",
      "สารนาถ",
      "พุทธคยา ใต้ต้นพระศรีมหาโพธิ์",
      "กุสินารา"
    ],
    "correctIndex": 2,
    "explanation": "พระพุทธเจ้าตรัสรู้ ณ โพธิมัณฑ์ ใต้ต้นพระศรีมหาโพธิ์ ที่พุทธคยา",
    "reference": "พุทธประวัติชั้นตรี ตอนตรัสรู้",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-03",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "พระพุทธเจ้าแสดงปฐมเทศนาที่ใด?",
    "options": [
      "ป่าอิสิปตนมฤคทายวัน เมืองพาราณสี",
      "เชตวันมหาวิหาร",
      "พุทธคยา",
      "ลุมพินีวัน"
    ],
    "correctIndex": 0,
    "explanation": "ปฐมเทศนา 'ธัมมจักกัปปวัตตนสูตร' แสดงที่ป่าอิสิปตนมฤคทายวัน แขวงเมืองพาราณสี",
    "reference": "พุทธประวัติชั้นตรี ตอนแสดงปฐมเทศนา",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-04",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "พระพุทธเจ้าปรินิพพาน ณ สถานที่ใด?",
    "options": [
      "พุทธคยา",
      "สารนาถ",
      "เชตวัน",
      "กุสินารา สาลวโนทยาน"
    ],
    "correctIndex": 3,
    "explanation": "พระพุทธเจ้าเสด็จปรินิพพาน ณ สาลวโนทยาน เมืองกุสินารา",
    "reference": "พุทธประวัติชั้นตรี ตอนปรินิพพาน",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-05",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "พระนามเดิมของพระพุทธเจ้าก่อนออกบวชคือใด?",
    "options": [
      "สิทธัตถะ",
      "เทวทัต",
      "อานนท์",
      "สารีบุตร"
    ],
    "correctIndex": 0,
    "explanation": "พระนามเดิมคือ เจ้าชายสิทธัตถะ โคตมะ แห่งศากยวงศ์",
    "reference": "พุทธประวัติชั้นตรี ตอนประสูติ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-06",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๓",
    "question": "เหตุการณ์ใดทำให้เจ้าชายสิทธัตถะทรงสังเวชและคิดออกบวช?",
    "options": [
      "ทอดพระเนตรเห็นนิมิต ๔ ประการ",
      "ทรงฝันร้ายในคืนวันเพ็ญ",
      "ถูกเทวทัตลอบทำร้าย",
      "ทรงเห็นทหารสู้รบกัน"
    ],
    "correctIndex": 0,
    "explanation": "ทรงเห็นนิมิต ๔ ได้แก่ คนแก่ คนเจ็บ คนตาย และนักบวช ทำให้คิดออกบวช",
    "reference": "พุทธประวัติชั้นตรี ตอนเสด็จออกบวช",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-07",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๔",
    "question": "พระพุทธเจ้าทรงออกผนวช ณ อายุเท่าใด?",
    "options": [
      "๒๕ พรรษา",
      "๒๙ พรรษา",
      "๓๕ พรรษา",
      "๔๕ พรรษา"
    ],
    "correctIndex": 1,
    "explanation": "เจ้าชายสิทธัตถะออกผนวชเมื่อมีพระชนมายุ ๒๙ พรรษา",
    "reference": "พุทธประวัติชั้นตรี ตอนออกผนวช",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-08",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๕",
    "question": "พระพุทธเจ้าตรัสรู้เมื่อพระชนมายุเท่าใด?",
    "options": [
      "๒๙ พรรษา",
      "๓๕ พรรษา",
      "๔๕ พรรษา",
      "๘๐ พรรษา"
    ],
    "correctIndex": 1,
    "explanation": "พระพุทธเจ้าตรัสรู้เมื่อมีพระชนมายุ ๓๕ พรรษา",
    "reference": "พุทธประวัติชั้นตรี ตอนตรัสรู้",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-09",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระพุทธบิดาของพระพุทธเจ้าทรงพระนามว่าอะไร?",
    "options": [
      "พระเจ้าสุทโธทนะ",
      "พระเจ้าพิมพิสาร",
      "พระเจ้าปเสนทิโกศล",
      "พระเจ้าอโศกมหาราช"
    ],
    "correctIndex": 0,
    "explanation": "พระพุทธบิดาของพระพุทธเจ้าคือพระเจ้าสุทโธทนะ กษัตริย์แห่งกรุงกบิลพัสดุ์",
    "reference": "พุทธประวัติชั้นตรี ตอนก่อนประสูติ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-10",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระพุทธมารดาของพระพุทธเจ้าทรงพระนามว่าอะไร?",
    "options": [
      "พระนางสิริมหามายา",
      "พระนางยโสธรา",
      "พระนางปชาบดีโคตมี",
      "พระนางอัมพปาลี"
    ],
    "correctIndex": 0,
    "explanation": "พระพุทธมารดาคือพระนางสิริมหามายา พระอัครมเหสีของพระเจ้าสุทโธทนะ",
    "reference": "พุทธประวัติชั้นตรี ตอนประสูติ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-11",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระพุทธเจ้าใช้เวลาบำเพ็ญเพียรกี่ปีก่อนตรัสรู้?",
    "options": [
      "๓ ปี",
      "๖ ปี",
      "๙ ปี",
      "๑๒ ปี"
    ],
    "correctIndex": 1,
    "explanation": "พระพุทธเจ้าบำเพ็ญเพียรอยู่ ๖ ปี ก่อนจะตรัสรู้",
    "reference": "พุทธประวัติชั้นตรี ตอนบำเพ็ญเพียร",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-12",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "ปัญจวัคคีย์คืออะไร?",
    "options": [
      "นักบวช ๕ รูปที่เคยปรนนิบัติพระโพธิสัตว์",
      "เทพเจ้า ๕ องค์",
      "อุบาสก ๕ คน",
      "สาวก ๕ คนแรกของพระพุทธเจ้า"
    ],
    "correctIndex": 0,
    "explanation": "ปัญจวัคคีย์คือนักบวช ๕ รูป ซึ่งเป็นผู้ฟังปฐมเทศนาและได้รับการบวชเป็นภิกษุกลุ่มแรก",
    "reference": "พุทธประวัติชั้นตรี ตอนแสดงปฐมเทศนา",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-13",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระโอรสของพระพุทธเจ้ามีพระนามว่าอะไร?",
    "options": [
      "เทวทัต",
      "อานนท์",
      "ราหุล",
      "โมคคัลลานะ"
    ],
    "correctIndex": 2,
    "explanation": "พระโอรสของพระพุทธเจ้าคือพระราหุล ซึ่งต่อมาได้บวชเป็นสามเณร",
    "reference": "พุทธประวัติชั้นตรี ตอนก่อนออกบวช",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-14",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระอัครสาวกเบื้องขวาของพระพุทธเจ้าคือใคร?",
    "options": [
      "พระอานนท์",
      "พระโมคคัลลานะ",
      "พระสารีบุตร",
      "พระมหากัสสปะ"
    ],
    "correctIndex": 2,
    "explanation": "พระสารีบุตรเป็นพระอัครสาวกเบื้องขวา เลิศด้านปัญญา",
    "reference": "พุทธประวัติชั้นตรี ตอนสาวก",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-15",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระอัครสาวกเบื้องซ้ายของพระพุทธเจ้าคือใคร?",
    "options": [
      "พระอานนท์",
      "พระโมคคัลลานะ",
      "พระสารีบุตร",
      "พระมหากัสสปะ"
    ],
    "correctIndex": 1,
    "explanation": "พระโมคคัลลานะเป็นพระอัครสาวกเบื้องซ้าย เลิศด้านอิทธิฤทธิ์",
    "reference": "พุทธประวัติชั้นตรี ตอนสาวก",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-16",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระพุทธเจ้าแสดงธรรมเป็นพระพรรษาแรก (พรรษาที่ ๑) ที่ใด?",
    "options": [
      "กรุงราชคฤห์",
      "ป่าอิสิปตนมฤคทายวัน พาราณสี",
      "เชตวันมหาวิหาร",
      "เวฬุวันมหาวิหาร"
    ],
    "correctIndex": 1,
    "explanation": "พรรษาแรกของพระพุทธเจ้าจำพรรษาที่ป่าอิสิปตนมฤคทายวัน แขวงเมืองพาราณสี",
    "reference": "พุทธประวัติชั้นตรี ตอนแสดงธรรม",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-17",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "ปฐมเทศนาของพระพุทธเจ้าชื่อว่าอะไร?",
    "options": [
      "อนัตตลักขณสูตร",
      "ธัมมจักกัปปวัตตนสูตร",
      "มหาปรินิพพานสูตร",
      "สติปัฏฐานสูตร"
    ],
    "correctIndex": 1,
    "explanation": "ปฐมเทศนาชื่อว่า 'ธัมมจักกัปปวัตตนสูตร' แปลว่าพระสูตรว่าด้วยการยังธรรมจักรให้เป็นไป",
    "reference": "พุทธประวัติชั้นตรี ตอนปฐมเทศนา",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-18",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระอานนท์เป็นสาวกองค์สำคัญในด้านใด?",
    "options": [
      "มีปัญญาเลิศ",
      "เป็นพุทธอุปัฏฐากจำพระธรรมได้มาก",
      "มีอิทธิฤทธิ์เลิศ",
      "มีศีลบริสุทธิ์ที่สุด"
    ],
    "correctIndex": 1,
    "explanation": "พระอานนท์เป็นพุทธอุปัฏฐาก ทรงจำพระพุทธวจนะได้มากที่สุด",
    "reference": "พุทธประวัติชั้นตรี ตอนสาวก",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-19",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "สถานที่ประสูติของพระพุทธเจ้าตั้งอยู่ในประเทศใดในปัจจุบัน?",
    "options": [
      "อินเดีย",
      "ศรีลังกา",
      "เนปาล",
      "พม่า"
    ],
    "correctIndex": 2,
    "explanation": "ลุมพินีวัน สถานที่ประสูติของพระพุทธเจ้า ปัจจุบันตั้งอยู่ในประเทศเนปาล",
    "reference": "พุทธประวัติชั้นตรี ตอนประสูติ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-20",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระพุทธเจ้าเสด็จปรินิพพานเมื่อมีพระชนมายุเท่าใด?",
    "options": [
      "๗๒ พรรษา",
      "๗๕ พรรษา",
      "๘๐ พรรษา",
      "๑๐๐ พรรษา"
    ],
    "correctIndex": 2,
    "explanation": "พระพุทธเจ้าเสด็จปรินิพพานเมื่อมีพระชนมายุ ๘๐ พรรษา",
    "reference": "พุทธประวัติชั้นตรี ตอนปรินิพพาน",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-21",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระพุทธศาสนาถือกำเนิดขึ้นในดินแดนใด?",
    "options": [
      "จีน",
      "ทิเบต",
      "อินเดีย",
      "ศรีลังกา"
    ],
    "correctIndex": 2,
    "explanation": "พระพุทธศาสนากำเนิดในดินแดนชมพูทวีป (อินเดีย) โดยพระสัมมาสัมพุทธเจ้า",
    "reference": "พุทธประวัติชั้นตรี ภูมิหลัง",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-22",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระพุทธเจ้าทรงสอนอะไรเป็นศีล ๕ ให้คฤหัสถ์ประพฤติ?",
    "options": [
      "ทาน ศีล สมาธิ ปัญญา วิมุตติ",
      "เจตนางดเว้นจากปาณาติบาต อทินนาทาน กาเมสุมิจฉาจาร มุสาวาท และสุรามะเรยะ",
      "ทาน ปิยวาจา อัตถจริยา สมานัตตตา",
      "ศรัทธา วิริยะ สติ สมาธิ ปัญญา"
    ],
    "correctIndex": 1,
    "explanation": "ศีล ๕ ของคฤหัสถ์คือการงดเว้นจาก ๑.ฆ่าสัตว์ ๒.ลักทรัพย์ ๓.ผิดประเวณี ๔.พูดเท็จ ๕.ดื่มสุรา",
    "reference": "พุทธประวัติชั้นตรี ตอนแสดงธรรม",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-23",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระเทวทัตมีความสัมพันธ์กับพระพุทธเจ้าอย่างไร?",
    "options": [
      "เป็นพระสหายสมัยเด็ก",
      "เป็นพระอนุชา (น้องชาย) ในตระกูลเดียวกัน",
      "เป็นพระราชโอรสของพระเจ้าสุทโธทนะ",
      "เป็นอดีตครูของพระพุทธเจ้า"
    ],
    "correctIndex": 1,
    "explanation": "พระเทวทัตเป็นพระอนุชา ผู้ที่ต่อมาพยายามทำร้ายพระพุทธเจ้า",
    "reference": "พุทธประวัติชั้นตรี ตอนเทวทัต",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-24",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "นางสุชาดาถวายสิ่งใดแก่พระมหาโพธิสัตว์ก่อนตรัสรู้?",
    "options": [
      "ผ้าจีวร",
      "ข้าวมธุปายาส",
      "น้ำดื่มบริสุทธิ์",
      "ดอกไม้ทอง"
    ],
    "correctIndex": 1,
    "explanation": "นางสุชาดาถวายข้าวมธุปายาสแก่พระมหาโพธิสัตว์ ซึ่งเป็นอาหารมื้อสุดท้ายก่อนตรัสรู้",
    "reference": "พุทธประวัติชั้นตรี ตอนก่อนตรัสรู้",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-25",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "ดาวประกายพฤกษ์ปรากฏขณะใดในพุทธประวัติ?",
    "options": [
      "ขณะที่พระพุทธเจ้าประสูติ",
      "ขณะที่พระพุทธเจ้าตรัสรู้ในเวลาใกล้รุ่ง",
      "ขณะที่ปฐมเทศนา",
      "ขณะที่ปรินิพพาน"
    ],
    "correctIndex": 1,
    "explanation": "ดาวประกายพฤกษ์ปรากฏขึ้นในเวลาใกล้รุ่งของวันที่พระพุทธเจ้าตรัสรู้",
    "reference": "พุทธประวัติชั้นตรี ตอนตรัสรู้",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-01",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "อุปสมบทด้วยวิธีไตรสรณคมน์ เรียกว่าอะไร?",
    "options": [
      "เอหิภิกขุอุปสัมปทา",
      "ติสรณคมนอุปสัมปทา",
      "ญัตติจตุตถกัมมอุปสัมปทา",
      "โอวาทปาฏิโมกขอุปสัมปทา"
    ],
    "correctIndex": 1,
    "explanation": "การอุปสมบทโดยการรับไตรสรณคมน์เรียกว่า ติสรณคมนอุปสัมปทา",
    "reference": "วินัยชั้นตรี ตอนอุปสมบท",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-02",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "สิกขาบทที่ต้องอาบัติปาราชิกมีกี่ข้อ?",
    "options": [
      "๔ ข้อ",
      "๘ ข้อ",
      "๑๓ ข้อ",
      "๙๒ ข้อ"
    ],
    "correctIndex": 0,
    "explanation": "อาบัติปาราชิกมี ๔ ข้อ คือ เสพเมถุน ลักทรัพย์ ฆ่ามนุษย์ อวดอุตตริมนุสสธรรม",
    "reference": "วินัยชั้นตรี อาบัติปาราชิก",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-03",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "ภิกษุต้องอาบัติปาราชิกจะมีผลอย่างไร?",
    "options": [
      "ต้องอยู่กรรม ๖ คืน",
      "ต้องปาริวาส",
      "ขาดจากความเป็นภิกษุทันที",
      "ต้องปลงอาบัติต่อหน้าคณะสงฆ์"
    ],
    "correctIndex": 2,
    "explanation": "อาบัติปาราชิกเป็นอาบัติหนักที่สุด ภิกษุผู้ต้องขาดจากความเป็นภิกษุทันที",
    "reference": "วินัยชั้นตรี อาบัติปาราชิก",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-04",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "อาบัติสังฆาทิเสสมีกี่ข้อ?",
    "options": [
      "๔ ข้อ",
      "๑๓ ข้อ",
      "๒๐ ข้อ",
      "๙๒ ข้อ"
    ],
    "correctIndex": 1,
    "explanation": "อาบัติสังฆาทิเสสมี ๑๓ ข้อ",
    "reference": "วินัยชั้นตรี อาบัติสังฆาทิเสส",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-05",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๓",
    "question": "อาบัติปาจิตตีย์มีกี่ข้อ?",
    "options": [
      "๑๓ ข้อ",
      "๓๐ ข้อ",
      "๙๒ ข้อ",
      "๑๕๐ ข้อ"
    ],
    "correctIndex": 2,
    "explanation": "อาบัติปาจิตตีย์มี ๙๒ ข้อ แบ่งเป็นปาจิตตีย์ทั่วไป ๙๒ ข้อ",
    "reference": "วินัยชั้นตรี อาบัติปาจิตตีย์",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-06",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๔",
    "question": "พระภิกษุใหม่ต้องเรียนรู้ 'นิสสัย ๔' คืออะไร?",
    "options": [
      "ที่พัก อาหาร เครื่องนุ่งห่ม ยา",
      "ฉันอาหารที่ได้มาด้วยบิณฑบาต นุ่งห่มผ้าบังสุกุล อยู่โคนไม้ ฉันยาดองด้วยน้ำมูตรเน่า",
      "ศีล สมาธิ ปัญญา วิมุตติ",
      "ขันติ โสรัจจะ สมาธิ ปัญญา"
    ],
    "correctIndex": 1,
    "explanation": "นิสสัย ๔ คือสิ่งที่ภิกษุพึ่งอาศัยได้: บิณฑบาต ผ้าบังสุกุล อยู่โคนไม้ และยาดองด้วยมูตรเน่า",
    "reference": "วินัยชั้นตรี นิสสัย ๔",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-07",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๕",
    "question": "วันเข้าพรรษาตรงกับวันใด?",
    "options": [
      "ขึ้น ๑๕ ค่ำ เดือน ๖",
      "แรม ๑ ค่ำ เดือน ๘",
      "ขึ้น ๑๕ ค่ำ เดือน ๑๒",
      "แรม ๑ ค่ำ เดือน ๑๒"
    ],
    "correctIndex": 1,
    "explanation": "วันเข้าพรรษาตรงกับวันแรม ๑ ค่ำ เดือน ๘ (หรือเดือน ๘ หลัง ในปีที่มีอธิกมาส)",
    "reference": "วินัยชั้นตรี การจำพรรษา",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-08",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "สิกขาบทคืออะไร?",
    "options": [
      "คำสั่งสอนของพระพุทธเจ้า",
      "บทบัญญัติที่กำหนดให้พระภิกษุต้องปฏิบัติ",
      "ธรรมะสำหรับคฤหัสถ์",
      "บทสวดมนต์ทางพระพุทธศาสนา"
    ],
    "correctIndex": 1,
    "explanation": "สิกขาบทคือข้อกำหนดบทบัญญัติที่พระพุทธเจ้าทรงบัญญัติให้พระภิกษุปฏิบัติ",
    "reference": "วินัยชั้นตรี ความรู้ทั่วไป",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-09",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "ปาฏิโมกข์คืออะไร?",
    "options": [
      "ชื่อพระสูตรในพระไตรปิฎก",
      "หลักสูตรนักธรรมชั้นตรี",
      "ประมวลสิกขาบทของพระภิกษุ",
      "บทสวดมนต์ทำวัตรเช้า"
    ],
    "correctIndex": 2,
    "explanation": "ปาฏิโมกข์คือประมวลข้อสิกขาบทของพระภิกษุ มี ๒๒๗ ข้อ",
    "reference": "วินัยชั้นตรี ปาฏิโมกข์",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-10",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "ปาฏิโมกข์มีสิกขาบทรวมทั้งหมดกี่ข้อ?",
    "options": [
      "๑๕๐ ข้อ",
      "๒๒๗ ข้อ",
      "๓๑๑ ข้อ",
      "๕๐๐ ข้อ"
    ],
    "correctIndex": 1,
    "explanation": "ปาฏิโมกข์ของภิกษุมีสิกขาบทรวม ๒๒๗ ข้อ",
    "reference": "วินัยชั้นตรี ปาฏิโมกข์",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-11",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "อาบัติ หมายถึงอะไร?",
    "options": [
      "คำสั่งสอนของพระสงฆ์",
      "โทษที่เกิดแก่ภิกษุผู้ล่วงละเมิดสิกขาบท",
      "บทสวดมนต์พิเศษ",
      "การทำบุญอุทิศให้ผู้ตาย"
    ],
    "correctIndex": 1,
    "explanation": "อาบัติคือโทษที่เกิดแก่ภิกษุผู้ล่วงละเมิดสิกขาบทที่พระพุทธเจ้าทรงบัญญัติ",
    "reference": "วินัยชั้นตรี อาบัติ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-12",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "อาบัติโทษเบาที่สุดคืออาบัติใด?",
    "options": [
      "ปาราชิก",
      "สังฆาทิเสส",
      "ทุกกฏ",
      "ปาจิตตีย์"
    ],
    "correctIndex": 2,
    "explanation": "ทุกกฏเป็นอาบัติโทษเบาที่สุด แก้ได้โดยแสดงอาบัติต่อภิกษุรูปเดียว",
    "reference": "วินัยชั้นตรี ประเภทอาบัติ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-13",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "ผ้าไตรจีวรของพระภิกษุมีกี่ผืน?",
    "options": [
      "๑ ผืน",
      "๒ ผืน",
      "๓ ผืน",
      "๔ ผืน"
    ],
    "correctIndex": 2,
    "explanation": "ไตรจีวรมี ๓ ผืน คือ สังฆาฏิ (ผ้าคลุม) อุตราสงค์ (จีวร) และอันตรวาสก (สบง)",
    "reference": "วินัยชั้นตรี จีวร",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-14",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "พระภิกษุจำพรรษาอยู่กี่เดือน?",
    "options": [
      "๑ เดือน",
      "๒ เดือน",
      "๓ เดือน",
      "๔ เดือน"
    ],
    "correctIndex": 2,
    "explanation": "การจำพรรษาของพระภิกษุมีกำหนด ๓ เดือน คือตั้งแต่แรม ๑ ค่ำ เดือน ๘ ถึงขึ้น ๑๕ ค่ำ เดือน ๑๑",
    "reference": "วินัยชั้นตรี การจำพรรษา",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-15",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "การสวดปาฏิโมกข์กำหนดให้ทำในวันใด?",
    "options": [
      "วันพระ (๗ ค่ำและ ๑๔ หรือ ๑๕ ค่ำ)",
      "วันอุโบสถ (ขึ้น ๑๕ ค่ำ และแรม ๑๔ หรือ ๑๕ ค่ำ)",
      "วันแรม ๑ ค่ำทุกเดือน",
      "วันขึ้น ๑ ค่ำทุกเดือน"
    ],
    "correctIndex": 1,
    "explanation": "สวดปาฏิโมกข์ทำในวันอุโบสถ คือขึ้น ๑๕ ค่ำ และแรม ๑๔ หรือ ๑๕ ค่ำ",
    "reference": "วินัยชั้นตรี อุโบสถกรรม",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-16",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "การรับกฐินต้องกระทำในช่วงเวลาใด?",
    "options": [
      "ตลอดปี",
      "ภายใน ๑ เดือนหลังออกพรรษา",
      "ในวันมาฆบูชา",
      "ในวันวิสาขบูชา"
    ],
    "correctIndex": 1,
    "explanation": "กฐินทอดได้ภายใน ๑ เดือนหลังออกพรรษา คือตั้งแต่แรม ๑ ค่ำ เดือน ๑๑ ถึงขึ้น ๑๕ ค่ำ เดือน ๑๒",
    "reference": "วินัยชั้นตรี กฐิน",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-17",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "กรรมวาจาในการอุปสมบทคืออะไร?",
    "options": [
      "การสวดมนต์บทพิเศษ",
      "คำประกาศของสงฆ์ในพิธีบวชเป็นภิกษุ",
      "คำอวยพรของพระอุปัชฌาย์",
      "บทบริกรรมกสิณ"
    ],
    "correctIndex": 1,
    "explanation": "กรรมวาจาคือคำประกาศในที่ประชุมสงฆ์เพื่อรับรองการอุปสมบทของผู้บวชเป็นภิกษุ",
    "reference": "วินัยชั้นตรี อุปสมบทกรรม",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-18",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "นวกภิกษุคืออะไร?",
    "options": [
      "ภิกษุที่มีพรรษา ๑๐ขึ้นไป",
      "ภิกษุที่บวชใหม่ยังไม่ครบ ๕ พรรษา",
      "ภิกษุที่จะลาสิกขา",
      "ภิกษุอาคันตุกะ"
    ],
    "correctIndex": 1,
    "explanation": "นวกภิกษุคือภิกษุใหม่ที่มีพรรษาน้อยกว่า ๕ พรรษา ต้องอยู่ในความดูแลของอุปัชฌาย์",
    "reference": "วินัยชั้นตรี นวกภิกษุ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-19",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "พระภิกษุห้ามอยู่ในที่ใดโดยเด็ดขาด?",
    "options": [
      "ในบ้านของอุบาสก",
      "ในที่ที่ไม่มีหลังคา",
      "ในสถานที่ที่มีหญิงอยู่คนเดียวกับภิกษุไม่มีพยาน",
      "ในตลาดสด"
    ],
    "correctIndex": 2,
    "explanation": "ภิกษุต้องไม่อยู่ในที่ลับตาและลับหูตามลำพังกับหญิง เพราะอาจต้องอาบัติ",
    "reference": "วินัยชั้นตรี สิกขาบทเกี่ยวกับเมถุน",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-20",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "อุโบสถกรรมของพระสงฆ์กำหนดให้ทำอะไร?",
    "options": [
      "สวดปาฏิโมกข์ท่องกฎสงฆ์ทุกครึ่งเดือน",
      "ทำบุญตักบาตรกลางแจ้ง",
      "แสดงพระธรรมเทศนา",
      "นั่งสมาธิทั้งคืน"
    ],
    "correctIndex": 0,
    "explanation": "อุโบสถกรรมคือการประชุมสงฆ์และสวดปาฏิโมกข์ตรวจสอบศีลทุกกึ่งเดือน",
    "reference": "วินัยชั้นตรี อุโบสถกรรม",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-21",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "สีจีวรของพระสงฆ์ฝ่ายเถรวาทนิยมใช้สีใด?",
    "options": [
      "สีขาว",
      "สีแดง",
      "สีเหลืองหรือน้ำตาล",
      "สีดำ"
    ],
    "correctIndex": 2,
    "explanation": "จีวรของพระสงฆ์ฝ่ายเถรวาทนิยมสีเหลือง สีน้ำตาล หรือสีกาสาวะ",
    "reference": "วินัยชั้นตรี จีวร",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-22",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "สามเณรมีสิกขาบทกี่ข้อ?",
    "options": [
      "๕ ข้อ",
      "๑๐ ข้อ",
      "๒๒๗ ข้อ",
      "๓๑๑ ข้อ"
    ],
    "correctIndex": 1,
    "explanation": "สามเณรมีสิกขาบท ๑๐ ข้อ ซึ่งเรียกว่าสิกขาบท ๑๐",
    "reference": "วินัยชั้นตรี สามเณรสิกขา",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-23",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "การออกพรรษาของพระสงฆ์เรียกว่าอะไร?",
    "options": [
      "วันอุโบสถ",
      "วันมาฆบูชา",
      "วันออกพรรษา (ปวารณา)",
      "วันอาสาฬหบูชา"
    ],
    "correctIndex": 2,
    "explanation": "วันออกพรรษาเรียกว่า 'ปวารณา' ตรงกับวันขึ้น ๑๕ ค่ำ เดือน ๑๑",
    "reference": "วินัยชั้นตรี ปวารณา",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-24",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "การ 'ปลงอาบัติ' หมายถึงอะไร?",
    "options": [
      "การเดินทางออกจากอาราม",
      "การสารภาพอาบัติต่อภิกษุอื่นเพื่อออกจากโทษ",
      "การสวดมนต์ขอขมา",
      "การลาสิกขาบท"
    ],
    "correctIndex": 1,
    "explanation": "การปลงอาบัติคือการสารภาพความผิดต่อภิกษุอีกรูปหนึ่ง เพื่อออกจากอาบัติที่ต้องไป",
    "reference": "วินัยชั้นตรี การปลงอาบัติ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-25",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "อุปัชฌาย์คืออะไร?",
    "options": [
      "พระภิกษุที่มีอายุมากที่สุดในวัด",
      "พระภิกษุผู้ทำหน้าที่รับผิดชอบในการบวชกุลบุตรและดูแลนวกภิกษุ",
      "พระภิกษุผู้รักษาอุโบสถ",
      "พระภิกษุผู้แสดงธรรมเทศนา"
    ],
    "correctIndex": 1,
    "explanation": "อุปัชฌาย์คือพระภิกษุผู้ทำหน้าที่เป็นพระพี่เลี้ยงในการบวชและดูแลนวกภิกษุ ต้องมีพรรษาครบ ๑๐",
    "reference": "วินัยชั้นตรี อุปัชฌาย์",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-k-01",
    "grade": "โท",
    "subject": "กระทู้ธรรม",
    "year": "๒๕๖๔",
    "question": "วิชาเรียงความแก้กระทู้ธรรมชั้นโท กำหนดให้เขียนกระทู้เชื่อมอย่างน้อยกี่บท?",
    "options": [
      "อย่างน้อย ๑ บท",
      "อย่างน้อย ๒ บท",
      "อย่างน้อย ๓ บท",
      "ไม่บังคับ"
    ],
    "correctIndex": 1,
    "explanation": "ชั้นโทบังคับกระทู้เชื่อมอย่างน้อย ๒ บท",
    "reference": "ระเบียบสนามหลวงชั้นโท ๒๕๖๔",
    "sourceName": "ข้อสอบจริงสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-k-02",
    "grade": "โท",
    "subject": "กระทู้ธรรม",
    "year": "๒๕๖๔",
    "question": "'นตฺถิ ปญฺญาสมา อาภา' แปลว่าอะไร?",
    "options": [
      "ปัญญาเป็นเครื่องส่องทางชีวิต",
      "แสงสว่างเสมอด้วยปัญญาไม่มี",
      "ปัญญาทำให้ชนะอุปสรรค",
      "ผู้มีปัญญาย่อมสุขสบาย"
    ],
    "correctIndex": 1,
    "explanation": "นตฺถิ ปญฺญาสมา อาภา แปลว่า แสงสว่างเสมอด้วยปัญญาไม่มี ออกสอบชั้นโท ปี ๒๕๖๔",
    "reference": "ข้อสอบจริงชั้นโท ปี ๒๕๖๔",
    "sourceName": "ข้อสอบจริงสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-k-03",
    "grade": "โท",
    "subject": "กระทู้ธรรม",
    "year": "๒๕๖๐",
    "question": "'ม. มู.' ย่อมาจากคัมภีร์ใด?",
    "options": [
      "มัชฌิมนิกาย มัชฌิมปัณณาสก์",
      "มัชฌิมนิกาย มูลปัณณาสก์",
      "มัชฌิมนิกาย อุปริปัณณาสก์",
      "มหาวรรค พระวินัย"
    ],
    "correctIndex": 1,
    "explanation": "ม. มู. ย่อมาจาก มัชฌิมนิกาย มูลปัณณาสก์",
    "reference": "ตารางอักษรย่อคัมภีร์ชั้นโท-เอก",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "tho-k-04",
    "grade": "โท",
    "subject": "กระทู้ธรรม",
    "year": "๒๕๖๑",
    "question": "ความยาวมาตรฐานของเรียงความแก้กระทู้ธรรมชั้นโทควรเป็นเท่าใด?",
    "options": [
      "อย่างน้อย ๑ หน้า",
      "อย่างน้อย ๒ หน้าครึ่ง ถึง ๓ หน้ากระดาษสอบ",
      "๕ หน้าขึ้นไป",
      "ไม่จำกัด"
    ],
    "correctIndex": 1,
    "explanation": "ชั้นโทต้องอธิบายกระทู้ตั้งและกระทู้เชื่อม ๒ บท ความยาวควรได้ ๒ หน้าครึ่งขึ้นไป",
    "reference": "คู่มือเขียนเรียงความชั้นโท",
    "sourceName": "ครูประกาศผล (prakaspon.com)",
    "sourceUrl": "https://prakaspon.com/"
  },
  {
    "id": "tho-k-05",
    "grade": "โท",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "หากสะกดบาลีกระทู้เชื่อมผิดในชั้นโท จะถูกหักคะแนนส่วนใด?",
    "options": [
      "คะแนนลายมือ",
      "คะแนนโครงสร้างหลักเกณฑ์ (สัมพันธ์)",
      "ไม่หักเพราะอนุโลมได้",
      "ปรับตกทันที"
    ],
    "correctIndex": 1,
    "explanation": "การสะกดบาลีผิดถือเป็นความบกพร่องด้านโครงสร้าง จะหักคะแนนสัมพันธ์",
    "reference": "ระเบียบตรวจวิชาเรียงความชั้นโท-เอก",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-k-06",
    "grade": "โท",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'องฺ. ติก.' ย่อมาจากคัมภีร์ใด?",
    "options": [
      "อังคุตตรนิกาย ทุกนิบาต",
      "อังคุตตรนิกาย ติกนิบาต",
      "อังคุตตรนิกาย จตุกกนิบาต",
      "อังคุตตรนิกาย ปัญจกนิบาต"
    ],
    "correctIndex": 1,
    "explanation": "องฺ. ติก. ย่อมาจาก อังคุตตรนิกาย ติกนิบาต รวบรวมธรรม ๓ ข้อ",
    "reference": "ตารางอักษรย่อคัมภีร์",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "tho-k-07",
    "grade": "โท",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'วิสฺสาสปรมา ญาติ' แปลว่าอะไร?",
    "options": [
      "ความเชื่อมั่นนำมาซึ่งความสุข",
      "ความคุ้นเคยเป็นญาติอย่างยิ่ง",
      "สายใยแห่งมิตรภาพไม่มีวันขาด",
      "ผู้ซื่อสัตย์ย่อมได้รับความไว้วางใจ"
    ],
    "correctIndex": 1,
    "explanation": "วิสฺสาสปรมา ญาติ แปลว่า ความคุ้นเคยเป็นญาติอย่างยิ่ง",
    "reference": "พุทธสุภาษิตหมวดสังคมและมิตรภาพ",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "tho-k-08",
    "grade": "โท",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'ขุ. ธ.' ย่อมาจากคัมภีร์ใด?",
    "options": [
      "ขุททกนิกาย ชาดก",
      "ขุททกนิกาย ธรรมบท",
      "ขุททกนิกาย เถรคาถา",
      "ขุททกนิกาย อปทาน"
    ],
    "correctIndex": 1,
    "explanation": "ขุ. ธ. ย่อมาจาก ขุททกนิกาย ธรรมบท",
    "reference": "ตารางอักษรย่อคัมภีร์",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "tho-k-09",
    "grade": "โท",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "การเลือกกระทู้เชื่อมสำหรับชั้นโทควรวางโครงสร้างอย่างไร?",
    "options": [
      "เชื่อมซ้ำธรรมะเดิมทั้ง ๒ บท",
      "เชื่อมแบบมีลำดับความคืบหน้า (เช่น ศีล → สมาธิ)",
      "ดึงธรรมะขัดแย้งกันให้ตื่นเต้น",
      "ใช้เฉพาะคัมภีร์เดียวกันเท่านั้น"
    ],
    "correctIndex": 1,
    "explanation": "ควรเรียงลำดับเนื้อหาแบบมีมิติ เช่น กระทู้เชื่อม ๑ เป็นศีล กระทู้เชื่อม ๒ เป็นสมาธิ",
    "reference": "เทคนิคการวางโครงร่างกระทู้ชั้นโท",
    "sourceName": "ครูประกาศผล (prakaspon.com)",
    "sourceUrl": "https://prakaspon.com/"
  },
  {
    "id": "tho-k-10",
    "grade": "โท",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'องฺ. ปญฺจก.' ย่อมาจากคัมภีร์ใด?",
    "options": [
      "อังคุตตรนิกาย ปัญจกนิบาต",
      "อังคุตตรนิกาย ปาฏิหาริย์",
      "อุดมปัญญา ปัญจวัตถุ",
      "อังคุตตรนิกาย ปัญจมวรรค"
    ],
    "correctIndex": 0,
    "explanation": "องฺ. ปญฺจก. ย่อมาจาก อังคุตตรนิกาย ปัญจกนิบาต รวบรวมธรรม ๕ ข้อ",
    "reference": "ตารางอักษรย่อคัมภีร์",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "tho-k-11",
    "grade": "โท",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "การเชื่อมต่อกระทู้บทที่สองในชั้นโทนิยมใช้สำนวนใด?",
    "options": [
      "ต่อไปคือคำอธิบายข้อสอง",
      "และยังมีพุทธภาษิตอีกบทหนึ่งซึ่งมาใน... ว่า...",
      "อีกนัยหนึ่งในพุทธธรรม",
      "สมดังคำสอนที่สองว่า"
    ],
    "correctIndex": 1,
    "explanation": "นิยมเชื่อมบทที่สองด้วย 'และยังมีพุทธภาษิตอีกบทหนึ่ง ซึ่งมาใน... ว่า...'",
    "reference": "คู่มือแต่งกระทู้ธรรมชั้นโท-เอก",
    "sourceName": "ครูประกาศผล (prakaspon.com)",
    "sourceUrl": "https://prakaspon.com/"
  },
  {
    "id": "tho-k-12",
    "grade": "โท",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'ปมาโท มจฺจุโน ปทํ' มีความหมายตรงกับข้อใด?",
    "options": [
      "ความไม่ประมาทนำสู่ความสำเร็จ",
      "ความประมาทเป็นทางแห่งความตาย",
      "ความขยันหมั่นเพียรเป็นเครื่องนำโชค",
      "ความสุขอยู่ที่การไม่ยึดติด"
    ],
    "correctIndex": 1,
    "explanation": "ปมาโท มจฺจุโน ปทํ แปลว่า ความประมาทเป็นทางแห่งความตาย",
    "reference": "ธรรมบท อัปปมาทวรรค",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "tho-k-13",
    "grade": "โท",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'ขุ. สุ.' ย่อมาจากคัมภีร์ใด?",
    "options": [
      "ขุททกนิกาย สุตตนิบาต",
      "ขุททกนิกาย สรีรนิบาต",
      "ขุททกนิกาย สัมพุทธกถา",
      "ขุททกนิกาย สังสารอุทาน"
    ],
    "correctIndex": 0,
    "explanation": "ขุ. สุ. ย่อมาจาก ขุททกนิกาย สุตตนิบาต",
    "reference": "ตารางอักษรย่อคัมภีร์",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-k-14",
    "grade": "โท",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'ทุติยมฺปิ พุทฺธํ สรณํ คจฺฉามิ' เป็นส่วนหนึ่งของอะไร?",
    "options": [
      "บทสวดไตรสรณคมน์",
      "คาถากระทู้ธรรมตั้งชั้นโท",
      "บทสวดมนต์ทำวัตรเช้า",
      "คำขอขมาพระสงฆ์"
    ],
    "correctIndex": 0,
    "explanation": "เป็นส่วนหนึ่งของบทไตรสรณคมน์ ซึ่งภิกษุรับเป็นครั้งที่สอง",
    "reference": "บทสวดไตรสรณคมน์",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-k-15",
    "grade": "โท",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'จตุกฺก นิปาต' ในอักษรย่อ 'องฺ. จตุกฺก.' หมายถึงอะไร?",
    "options": [
      "หมวดธรรม ๔ ข้อในอังคุตตรนิกาย",
      "หมวดธรรม ๔ สัปดาห์",
      "หมวดสี่ทิศในอภิธรรม",
      "คาถาสี่บทในขุททกนิกาย"
    ],
    "correctIndex": 0,
    "explanation": "องฺ. จตุกฺก. คือ อังคุตตรนิกาย จตุกกนิบาต รวบรวมธรรมะประเภท ๔ ข้อ",
    "reference": "ตารางอักษรย่อคัมภีร์",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "tho-k-16",
    "grade": "โท",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "ในการเขียนกระทู้ธรรมชั้นโท กระทู้ตั้งคืออะไร?",
    "options": [
      "คาถาสุภาษิตที่กรรมการกำหนดมาให้อธิบาย",
      "สุภาษิตที่ผู้เขียนเลือกเองเพื่อเชื่อม",
      "บทนำอารัมภบทตอนแรก",
      "ประโยคสรุปท้ายเรียงความ"
    ],
    "correctIndex": 0,
    "explanation": "กระทู้ตั้งคือคาถาสุภาษิตบาลีที่กรรมการออกให้ผู้สอบอธิบายขยายความ",
    "reference": "โครงสร้างวิชากระทู้ธรรม",
    "sourceName": "ครูประกาศผล (prakaspon.com)",
    "sourceUrl": "https://prakaspon.com/"
  },
  {
    "id": "tho-k-17",
    "grade": "โท",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'สํ. ส.' ในอักษรย่อคัมภีร์ย่อมาจากอะไร?",
    "options": [
      "สังยุตตนิกาย สคาถวรรค",
      "สังยุตตนิกาย สมาธิวรรค",
      "สังยุตตนิกาย สักกพยากรณ์",
      "สังยุตตนิกาย สันตติวรรค"
    ],
    "correctIndex": 0,
    "explanation": "สํ. ส. ย่อมาจาก สังยุตตนิกาย สคาถวรรค",
    "reference": "ตารางอักษรย่อคัมภีร์",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "tho-k-18",
    "grade": "โท",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'สพฺพทานํ ธมฺมทานํ ชินาติ' แปลว่าอย่างไร?",
    "options": [
      "ธรรมทานชนะทานทั้งปวง",
      "ทานทุกชนิดล้วนมีผลเท่ากัน",
      "การให้ธรรมะเป็นสิ่งวิเศษสุด",
      "ผู้ให้ธรรมะย่อมได้รับความเจริญ"
    ],
    "correctIndex": 0,
    "explanation": "สพฺพทานํ ธมฺมทานํ ชินาติ แปลว่า ธรรมทานชนะทานทั้งปวง",
    "reference": "ธรรมบท ปิยวรรค",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "tho-k-19",
    "grade": "โท",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "การเขียนย่อหน้าสรุปปิดท้ายในชั้นโท มีโครงสร้างอย่างไร?",
    "options": [
      "สรุปกระทู้ตั้งเพียงอย่างเดียว",
      "สรุปกระทู้ตั้งและกระทู้เชื่อมทั้งหมดให้ครบ แล้วปิดด้วย 'มีนัยดังพรรณนามาฉะนี้'",
      "เขียนคำอธิษฐานปิดท้าย",
      "สรุปแบบรายการหัวข้อ"
    ],
    "correctIndex": 1,
    "explanation": "ย่อหน้าสุดท้ายต้องสรุปสาระจากกระทู้ทั้งหมด แล้วปิดด้วย 'มีนัยดังพรรณนามาฉะนี้'",
    "reference": "คู่มือโครงสร้างกระทู้ธรรมชั้นโท",
    "sourceName": "ครูประกาศผล (prakaspon.com)",
    "sourceUrl": "https://prakaspon.com/"
  },
  {
    "id": "tho-k-20",
    "grade": "โท",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'นตฺถิ ราคสโม อคฺคิ' แปลว่าอย่างไร?",
    "options": [
      "ไฟเสมอด้วยราคะไม่มี",
      "ราคะทำให้จิตมืดมน",
      "ความโกรธเผาผลาญจิตใจ",
      "ไฟแห่งกิเลสร้อนกว่าไฟทั้งปวง"
    ],
    "correctIndex": 0,
    "explanation": "นตฺถิ ราคสโม อคฺคิ แปลว่า ไฟเสมอด้วยราคะไม่มี",
    "reference": "ธรรมบท ปาปวรรค",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "tho-k-21",
    "grade": "โท",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'โทสสโม โกโธ' แปลว่าอย่างไร?",
    "options": [
      "ความแค้นเสมอด้วยโทสะไม่มี",
      "ความโกรธเป็นสิ่งที่ต้องขจัด",
      "โกรธมากย่อมทำลายความดี",
      "ความเกลียดชังยิ่งกว่าโรคร้าย"
    ],
    "correctIndex": 0,
    "explanation": "โทสสโม โกโธ แปลว่า ความแค้นเสมอด้วยโทสะไม่มี (คู่กับ นตฺถิ ราคสโม อคฺคิ)",
    "reference": "ธรรมบท ปาปวรรค",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "tho-k-22",
    "grade": "โท",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'โมหสโม ชาโล' แปลว่าอย่างไร?",
    "options": [
      "ข่ายดักสัตว์เสมอด้วยโมหะไม่มี",
      "โมหะทำให้จิตพัวพันเหมือนถูกข่ายดัก",
      "ความหลงย่อมทำให้ตกต่ำ",
      "ความงมงายเป็นตาข่ายร้ายที่สุด"
    ],
    "correctIndex": 0,
    "explanation": "โมหสโม ชาโล แปลว่า ข่ายดักสัตว์เสมอด้วยโมหะไม่มี",
    "reference": "ธรรมบท ปาปวรรค",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "tho-k-23",
    "grade": "โท",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'ขุ. ชา. เอก.' ย่อมาจากคัมภีร์ใด?",
    "options": [
      "ขุททกนิกาย ชาดก เอกนิบาต",
      "ขุททกนิกาย ชาดก เอกมหานิบาต",
      "ขุททกนิกาย เอกนิบาต",
      "ขุททกนิกาย จริยาปิฎก"
    ],
    "correctIndex": 0,
    "explanation": "ขุ. ชา. เอก. ย่อมาจาก ขุททกนิกาย ชาดก เอกนิบาต (ชาดกเล่มเล็ก)",
    "reference": "ตารางอักษรย่อคัมภีร์",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "tho-k-24",
    "grade": "โท",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'อตฺตา หิ อตฺตโน นาโถ' แปลว่าอะไร?",
    "options": [
      "ตนแลเป็นที่พึ่งแห่งตน",
      "การพึ่งผู้อื่นไม่นำความสุขมา",
      "ความสุขอยู่ที่ตนเอง",
      "จงพึ่งตนเองอยู่เสมอ"
    ],
    "correctIndex": 0,
    "explanation": "อตฺตา หิ อตฺตโน นาโถ แปลว่า ตนแลเป็นที่พึ่งแห่งตน",
    "reference": "ธรรมบท อัตตวรรค",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "tho-k-25",
    "grade": "โท",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'สุทุทฺทสํ สุนิปุณํ' เป็นส่วนหนึ่งของสุภาษิตเกี่ยวกับอะไร?",
    "options": [
      "ความยากในการเห็นธรรม",
      "การฝึกจิตให้สงบนิ่ง",
      "ปัญญาเป็นสิ่งหาได้ยาก",
      "ความสุขที่แท้จริงเข้าถึงยาก"
    ],
    "correctIndex": 1,
    "explanation": "สุทุทฺทสํ สุนิปุณํ เป็นส่วนของสุภาษิตกล่าวถึงความยากของการรักษาจิตให้สงบ",
    "reference": "ธรรมบท จิตตวรรค",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "tho-d-01",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "อริยสัจ ๔ ข้อใดคือทุกข์?",
    "options": [
      "ความไม่เที่ยง ความเป็นทุกข์ ความเป็นอนัตตา",
      "ชาติ ชรา มรณะ โสกะ ปริเทวะ ฯลฯ",
      "ตัณหา คือ กามตัณหา ภวตัณหา วิภวตัณหา",
      "มรรคมีองค์ ๘"
    ],
    "correctIndex": 1,
    "explanation": "ทุกข์ในอริยสัจคือ ชาติ ชรา มรณะ โสกะ ปริเทวะ ทุกข์ โทมนัส อุปายาส และความไม่ได้สมปรารถนา",
    "reference": "ธรรมวิภาค ชั้นโท อริยสัจ ๔",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-02",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "สมุทัยในอริยสัจ ๔ คืออะไร?",
    "options": [
      "ความดับทุกข์",
      "เหตุให้เกิดทุกข์ คือ ตัณหา",
      "ข้อปฏิบัติเพื่อดับทุกข์",
      "ความจริงอันประเสริฐ"
    ],
    "correctIndex": 1,
    "explanation": "สมุทัยคือเหตุให้เกิดทุกข์ ได้แก่ ตัณหา ๓ คือ กามตัณหา ภวตัณหา วิภวตัณหา",
    "reference": "ธรรมวิภาค ชั้นโท อริยสัจ ๔",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-03",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "นิโรธในอริยสัจ ๔ คืออะไร?",
    "options": [
      "ตัณหา",
      "ความดับทุกข์สนิทไม่มีเชื้อเหลือ",
      "มรรคมีองค์ ๘",
      "ความไม่เที่ยงของสังขาร"
    ],
    "correctIndex": 1,
    "explanation": "นิโรธคือความดับทุกข์สนิทโดยไม่มีเชื้อเหลือ คือนิพพาน",
    "reference": "ธรรมวิภาค ชั้นโท อริยสัจ ๔",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-04",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "มรรคมีองค์ ๘ ข้อใดคือสัมมาวาจา?",
    "options": [
      "การพูดจริง ไม่พูดส่อเสียด ไม่พูดคำหยาบ ไม่พูดเพ้อเจ้อ",
      "การดำรงชีวิตในทางที่ชอบ",
      "การมีความเห็นถูกต้อง",
      "การตั้งใจไว้ถูกต้อง"
    ],
    "correctIndex": 0,
    "explanation": "สัมมาวาจา คือการพูดแต่ถ้อยคำที่ชอบ ได้แก่ พูดจริง ไม่ส่อเสียด ไม่หยาบ ไม่เพ้อเจ้อ",
    "reference": "ธรรมวิภาค ชั้นโท มรรค ๘",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-05",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "มรรคมีองค์ ๘ จัดเป็นหมวดธรรมใด (ไตรสิกขา)?",
    "options": [
      "ศีล สมาธิ ปัญญา",
      "ทาน ศีล ภาวนา",
      "สัมมาทิฏฐิ สัมมาสมาธิ สัมมาวาจา",
      "วิมุตติ วิมุตติญาณทัสสนะ"
    ],
    "correctIndex": 0,
    "explanation": "มรรค ๘ แบ่งได้เป็น ศีล (สัมมาวาจา สัมมากัมมันตะ สัมมาอาชีวะ) สมาธิ (สัมมาวายามะ สัมมาสติ สัมมาสมาธิ) ปัญญา (สัมมาทิฏฐิ สัมมาสังกัปปะ)",
    "reference": "ธรรมวิภาค ชั้นโท มรรค ๘ และไตรสิกขา",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-06",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "ขันธ์ ๕ หมายถึงอะไร?",
    "options": [
      "อายตนะภายใน ๕",
      "กองรูป เวทนา สัญญา สังขาร วิญญาณ",
      "อินทรีย์ ๕",
      "ปัจจัย ๕ แห่งการเกิด"
    ],
    "correctIndex": 1,
    "explanation": "ขันธ์ ๕ คือกองที่ประกอบเป็นชีวิต ได้แก่ รูปขันธ์ เวทนาขันธ์ สัญญาขันธ์ สังขารขันธ์ วิญญาณขันธ์",
    "reference": "ธรรมวิภาค ชั้นโท ขันธ์ ๕",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-07",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "สติปัฏฐาน ๔ คืออะไร?",
    "options": [
      "ฐานแห่งสติ ๔ ประการ คือ กาย เวทนา จิต ธรรม",
      "การระลึกถึงพระรัตนตรัย ๔ วิธี",
      "สมาธิ ๔ ระดับ",
      "การเจริญวิปัสสนา ๔ ขั้น"
    ],
    "correctIndex": 0,
    "explanation": "สติปัฏฐาน ๔ คือที่ตั้งแห่งสติ ๔ ได้แก่ กาย เวทนา จิต ธรรม",
    "reference": "ธรรมวิภาค ชั้นโท สติปัฏฐาน ๔",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-08",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "โพชฌงค์ ๗ คืออะไร?",
    "options": [
      "องค์แห่งการตรัสรู้ ๗ ประการ",
      "สมาธิ ๗ ระดับ",
      "ปัจจัยแห่งการปฏิบัติ ๗",
      "บุญกิริยาวัตถุ ๗"
    ],
    "correctIndex": 0,
    "explanation": "โพชฌงค์ ๗ คือองค์ธรรมที่เป็นเครื่องตรัสรู้ ๗ ประการ ได้แก่ สติ ธัมมวิจยะ วิริยะ ปีติ ปัสสัทธิ สมาธิ อุเบกขา",
    "reference": "ธรรมวิภาค ชั้นโท โพชฌงค์ ๗",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-09",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "พละ ๕ คืออะไร?",
    "options": [
      "กำลัง ๕ ประการ ได้แก่ ศรัทธา วิริยะ สติ สมาธิ ปัญญา",
      "อินทรีย์ ๕ ประการ",
      "ขันธ์ ๕",
      "ศีล ๕"
    ],
    "correctIndex": 0,
    "explanation": "พละ ๕ คือ ศรัทธา วิริยะ สติ สมาธิ ปัญญา เป็นกำลังที่หนุนจิตให้มั่นคงในการปฏิบัติ",
    "reference": "ธรรมวิภาค ชั้นโท พละ ๕",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-10",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "อินทรีย์ ๕ ประกอบด้วยอะไรบ้าง?",
    "options": [
      "ตา หู จมูก ลิ้น กาย",
      "สัทธา วิริยะ สติ สมาธิ ปัญญา",
      "ศีล สมาธิ ปัญญา วิมุตติ วิมุตติญาณทัสสนะ",
      "ทาน ศีล ภาวนา อุเบกขา ปัญญา"
    ],
    "correctIndex": 1,
    "explanation": "อินทรีย์ ๕ ได้แก่ สัทธินทรีย์ วิริยินทรีย์ สตินทรีย์ สมาธินทรีย์ และปัญญินทรีย์ เป็นธรรมที่เป็นใหญ่ในการปฏิบัติ",
    "reference": "ธรรมวิภาค ชั้นโท อินทรีย์ ๕",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-11",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "นิวรณ์ ๕ คืออะไร?",
    "options": [
      "ธรรมที่ขัดขวางการเจริญสมาธิ ๕ ประการ",
      "อุปสรรค ๕ ของนักบวช",
      "บาป ๕ ประการ",
      "กิเลส ๕ อย่างหยาบ"
    ],
    "correctIndex": 0,
    "explanation": "นิวรณ์ ๕ คือธรรมที่กั้นจิตไม่ให้บรรลุความดี ได้แก่ กามฉันทะ พยาบาท ถีนมิทธะ อุทธัจจกุกกุจจะ วิจิกิจฉา",
    "reference": "ธรรมวิภาค ชั้นโท นิวรณ์ ๕",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-12",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "ตัณหา ๓ ในสมุทัยมีอะไรบ้าง?",
    "options": [
      "กามตัณหา ภวตัณหา วิภวตัณหา",
      "โลภะ โทสะ โมหะ",
      "รูปตัณหา อรูปตัณหา นิพพานตัณหา",
      "กายตัณหา จิตตัณหา ปัญญาตัณหา"
    ],
    "correctIndex": 0,
    "explanation": "ตัณหา ๓ ได้แก่ กามตัณหา (ติดในกาม) ภวตัณหา (ติดในความเป็น) วิภวตัณหา (ติดในความไม่เป็น)",
    "reference": "ธรรมวิภาค ชั้นโท ตัณหา ๓",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-13",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "ไตรลักษณ์ ๓ ประการคืออะไร?",
    "options": [
      "อนิจจัง ทุกขัง อนัตตา",
      "โลภ โกรธ หลง",
      "ทาน ศีล ภาวนา",
      "พระพุทธ พระธรรม พระสงฆ์"
    ],
    "correctIndex": 0,
    "explanation": "ไตรลักษณ์คือ อนิจจัง (ไม่เที่ยง) ทุกขัง (เป็นทุกข์) อนัตตา (ไม่ใช่ตัวตน)",
    "reference": "ธรรมวิภาค ชั้นโท ไตรลักษณ์",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-14",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "สัมมาสังกัปปะในมรรค ๘ หมายถึงอะไร?",
    "options": [
      "การพูดถูกต้อง",
      "การดำริถูก คือ ดำริในการออกจากกาม ในความไม่พยาบาท และในความไม่เบียดเบียน",
      "การตั้งใจไว้ถูกต้อง",
      "การดำรงชีวิตชอบ"
    ],
    "correctIndex": 1,
    "explanation": "สัมมาสังกัปปะ คือดำริชอบ ได้แก่ เนกขัมมสังกัปปะ อพยาบาทสังกัปปะ อวิหิงสาสังกัปปะ",
    "reference": "ธรรมวิภาค ชั้นโท มรรค ๘",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-15",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "บุญกิริยาวัตถุ ๑๐ มีอะไรบ้างในกลุ่มแรก?",
    "options": [
      "ทาน ศีล ภาวนา",
      "ทาน ศีล ภาวนา อปจายนะ เวยยาวัจจะ",
      "โลภ โกรธ หลง โทษ อสัตย์",
      "กุศล อกุศล อัพยากฤต"
    ],
    "correctIndex": 1,
    "explanation": "บุญกิริยาวัตถุ ๑๐ กลุ่มแรก ๕ ข้อ ได้แก่ ทาน ศีล ภาวนา อปจายนะ เวยยาวัจจะ",
    "reference": "ธรรมวิภาค ชั้นโท บุญกิริยาวัตถุ ๑๐",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-16",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "ปฏิจจสมุปบาทหมายถึงอะไร?",
    "options": [
      "กฎแห่งกรรม",
      "กฎแห่งอิทัปปัจจยตา การอาศัยกันและกันเกิดขึ้น",
      "กฎไตรลักษณ์",
      "อนัตตาในสังขาร"
    ],
    "correctIndex": 1,
    "explanation": "ปฏิจจสมุปบาทคือกระบวนการเกิดขึ้นแห่งทุกข์โดยอาศัยกันและกัน เริ่มจากอวิชชาเป็นปัจจัย",
    "reference": "ธรรมวิภาค ชั้นโท ปฏิจจสมุปบาท",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-17",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "อวิชชาในปฏิจจสมุปบาทหมายถึงอะไร?",
    "options": [
      "ความไม่รู้ในอริยสัจ ๔",
      "ความหลงมัวเมา",
      "ความงมงายโง่เขลา",
      "ความไม่รู้ทางโลก"
    ],
    "correctIndex": 0,
    "explanation": "อวิชชาในปฏิจจสมุปบาทหมายถึงความไม่รู้แจ้งในอริยสัจ ๔ เป็นต้นเหตุแห่งวงจรทุกข์",
    "reference": "ธรรมวิภาค ชั้นโท ปฏิจจสมุปบาท",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-18",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "สัมมาทิฏฐิในมรรค ๘ หมายถึงอะไร?",
    "options": [
      "การเห็นชอบ คือรู้แจ้งอริยสัจ ๔",
      "การพูดจาตามความเป็นจริง",
      "การงดเว้นจากการดื่มสุรา",
      "การนั่งสมาธิอย่างถูกต้อง"
    ],
    "correctIndex": 0,
    "explanation": "สัมมาทิฏฐิ คือความเห็นชอบ คือรู้แจ้งอริยสัจ ๔ และกฎแห่งกรรม",
    "reference": "ธรรมวิภาค ชั้นโท มรรค ๘",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-19",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "ฌาน ๔ ในสมาธิ ข้อใดคือปฐมฌาน?",
    "options": [
      "มีแต่อุเบกขาและสติ",
      "มีวิตก วิจาร ปีติ สุข เอกัคคตา",
      "มีปีติ สุข เอกัคคตา ไม่มีวิตกวิจาร",
      "มีสุข เอกัคคตา เท่านั้น"
    ],
    "correctIndex": 1,
    "explanation": "ปฐมฌานมีองค์ ๕ คือ วิตก วิจาร ปีติ สุข และเอกัคคตา",
    "reference": "ธรรมวิภาค ชั้นโท ฌาน ๔",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-20",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "อุปาทาน ๔ คืออะไร?",
    "options": [
      "ความยึดมั่น ๔ ประการ",
      "ความโลภ ๔ ประเภท",
      "กิเลส ๔ ชั้น",
      "สังขาร ๔ ชนิด"
    ],
    "correctIndex": 0,
    "explanation": "อุปาทาน ๔ คือความยึดมั่น ๔ ประการ ได้แก่ กามุปาทาน ทิฏฐุปาทาน สีลัพพตุปาทาน อัตตวาทุปาทาน",
    "reference": "ธรรมวิภาค ชั้นโท อุปาทาน ๔",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-21",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "มัคคสัจเหมือนกับอะไร?",
    "options": [
      "เหมือนหนทาง คือมรรคมีองค์ ๘ เป็นข้อปฏิบัติเพื่อดับทุกข์",
      "เหมือนยา คือเหตุที่จะรักษาโรค",
      "เหมือนแสงสว่าง คือปัญญาที่ขจัดความมืด",
      "เหมือนต้นไม้ที่ให้ผลคือนิพพาน"
    ],
    "correctIndex": 0,
    "explanation": "มัคคสัจคือมรรคมีองค์ ๘ ซึ่งเป็นข้อปฏิบัติเพื่อให้ถึงการดับทุกข์",
    "reference": "ธรรมวิภาค ชั้นโท อริยสัจ ๔",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-22",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "สัมมาสมาธิในมรรค ๘ หมายถึงอะไร?",
    "options": [
      "การมีสติระลึกรู้",
      "การตั้งจิตไว้ชอบ คือการเจริญฌาน ๔",
      "การเห็นถูกต้องตามเหตุผล",
      "การดำรงชีวิตไม่เบียดเบียน"
    ],
    "correctIndex": 1,
    "explanation": "สัมมาสมาธิคือการตั้งจิตมั่นชอบ คือการเจริญฌาน ๔ ตั้งแต่ปฐมฌานถึงจตุตถฌาน",
    "reference": "ธรรมวิภาค ชั้นโท มรรค ๘",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-23",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "กิเลส ๓ คืออะไร?",
    "options": [
      "โลภ โกรธ หลง",
      "ตัณหา มานะ ทิฏฐิ",
      "กาม ภพ อวิชชา",
      "อนิจจัง ทุกขัง อนัตตา"
    ],
    "correctIndex": 0,
    "explanation": "กิเลส ๓ คือ โลภะ (โลภ) โทสะ (โกรธ) โมหะ (หลง) เป็นรากเหง้าแห่งอกุศล",
    "reference": "ธรรมวิภาค ชั้นโท กิเลส ๓",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-24",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "สัมมาวายามะในมรรค ๘ หมายถึงอะไร?",
    "options": [
      "การพยายามชอบ คือ ๔ ประการ ละบาปที่มี ระวังมิให้บาปเกิด เจริญกุศลที่มี รักษากุศลที่เจริญแล้ว",
      "การพูดจริงด้วยความขยันหมั่นเพียร",
      "การทำงานหนักเพื่อความก้าวหน้า",
      "การออกกำลังกายเพื่อสุขภาพ"
    ],
    "correctIndex": 0,
    "explanation": "สัมมาวายามะคือความพยายามชอบ ๔ ประการ ได้แก่ สังวร ปหาน ภาวนา อนุรักขนา",
    "reference": "ธรรมวิภาค ชั้นโท มรรค ๘",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-25",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "สัมมากัมมันตะในมรรค ๘ หมายถึงอะไร?",
    "options": [
      "การทำงานหนักไม่ย่อท้อ",
      "การงานชอบ คือ งดเว้นจากกายทุจริต ๓ ได้แก่ ปาณาติบาต อทินนาทาน กาเมสุมิจฉาจาร",
      "การบริหารการงานอย่างมีประสิทธิภาพ",
      "การทำบุญทำทาน"
    ],
    "correctIndex": 1,
    "explanation": "สัมมากัมมันตะคือการงานชอบ คืองดเว้นจากปาณาติบาต อทินนาทาน และกาเมสุมิจฉาจาร",
    "reference": "ธรรมวิภาค ชั้นโท มรรค ๘",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-01",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "พระอัครสาวกเบื้องขวาของพระสัมมาสัมพุทธเจ้าคือใคร และได้รับยกย่องด้านใด?",
    "options": [
      "พระมหาโมคคัลลานะ ด้านมีฤทธิ์มาก",
      "พระสารีบุตร ด้านมีปัญญาเลิศ",
      "พระอานนท์ ด้านพหูสูต",
      "พระมหากัสสปะ ด้านธุดงค์"
    ],
    "correctIndex": 1,
    "explanation": "พระสารีบุตรได้รับการสถาปนาเป็นพระอัครสาวกเบื้องขวา เลิศทางด้านมีปัญญามาก (มหาสาวก)",
    "reference": "พุทธานุพุทธประวัติ นักธรรมโท พระสารีบุตรเถระ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-02",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "พระอัครสาวกเบื้องซ้ายของพระพุทธเจ้า ผู้เลิศทางมีฤทธิ์มากคือพระเถระรูปใด?",
    "options": [
      "พระอนุรุทธะ",
      "พระสารีบุตร",
      "พระมหาโมคคัลลานะ",
      "พระอุบาลี"
    ],
    "correctIndex": 2,
    "explanation": "พระมหาโมคคัลลานะได้รับการยกย่องเป็นพระอัครสาวกเบื้องซ้าย และเลิศทางผู้มีฤทธิ์มาก",
    "reference": "พุทธานุพุทธประวัติ นักธรรมโท พระโมคคัลลานะ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-03",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "พระมหากัสสปเถระ ได้รับยกย่องจากพระบรมศาสดาว่าเป็นผู้เลิศในด้านใด?",
    "options": [
      "ผู้ทรงจำพระธรรมวินัยได้ยอดเยี่ยม",
      "ผู้ถือธุดงควัตรและสรรเสริญการถือธุดงค์",
      "ผู้มีทิพยจักษุญาณ",
      "ผู้มีลาภสักการะมาก"
    ],
    "correctIndex": 1,
    "explanation": "พระมหากัสสปเถระ เป็นผู้เลิศทางถือธุดงควัตร ๑๓ ประการ และเป็นประธานปฐมสังคายนา",
    "reference": "พุทธานุพุทธประวัติ นักธรรมโท พระมหากัสสปเถระ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-04",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "พระอานนท์เถระ ได้รับเอตทัคคะยกย่องถึง ๕ ประการ ข้อใดมิใช่ ๑ ใน ๕ ประการนั้น?",
    "options": [
      "เลิศทางพหูสูต (ได้ยินได้ฟังมาก)",
      "เลิศทางมีสติจำทรง",
      "เลิศทางมีฤทธิ์เหาะเหินเดินอากาศ",
      "เลิศทางยอดอุปัฏฐาก"
    ],
    "correctIndex": 2,
    "explanation": "พระอานนท์เลิศ ๕ ด้านคือ พหูสูต, สติ, คติ (ความจำ), ธิติ (ความเพียร), และยอดอุปัฏฐาก ส่วนมีฤทธิ์คือพระโมคคัลลานะ",
    "reference": "พุทธานุพุทธประวัติ พระอานนทเถระ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-05",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๓",
    "question": "พระอนุรุทธเถระ ได้รับยกย่องจากพระพุทธองค์ในตำแหน่งเอตทัคคะด้านใด?",
    "options": [
      "ผู้มีทิพยจักษุญาณ (ตาทิพย์)",
      "ผู้มีวาจาไพเราะ",
      "ผู้มีลาภมาก",
      "ผู้มีปัญญาเฉียบแหลม"
    ],
    "correctIndex": 0,
    "explanation": "พระอนุรุทธเถระเป็นเอตทัคคะผู้มีทิพยจักษุญาณ สามารถมองเห็นสรรพสัตว์ในโลกธาตุ",
    "reference": "พุทธานุพุทธประวัติ พระอนุรุทธเถระ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-06",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๔",
    "question": "พระอุบาลีเถระ ได้รับยกย่องว่าเป็นเอตทัคคะด้านใดในบรรดาพระสาวก?",
    "options": [
      "ผู้ทรงจำพระสูตร",
      "ผู้ทรงพระวินัยอย่างยอดเยี่ยม",
      "ผู้เลิศทางแสดงธรรม",
      "ผู้เลิศทางยินดีในเสนาสนะป่า"
    ],
    "correctIndex": 1,
    "explanation": "พระอุบาลี เดิมเป็นนายภูษามาลา ได้รับยกย่องเป็นผู้เลิศทางทรงจำและเชี่ยวชาญพระวินัยปิฎก",
    "reference": "พุทธานุพุทธประวัติ พระอุบาลีเถระ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-07",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๕",
    "question": "พระสีวลีเถระ ได้รับการยกย่องสรรเสริญว่าเป็นผู้เลิศในด้านใด?",
    "options": [
      "ผู้มีปัญญาหลักแหลม",
      "ผู้มีฤทธิ์เหาะเหิน",
      "ผู้มีลาภสักการะมาก",
      "ผู้มีอายุยืนยาวที่สุด"
    ],
    "correctIndex": 2,
    "explanation": "พระสีวลีได้รับยกย่องเป็นเอตทัคคะด้านผู้มีลาภสักการะมาก ไม่ว่าจะไปที่ใดย่อมสมบูรณ์ด้วยปัจจัย ๔",
    "reference": "พุทธานุพุทธประวัติ พระสีวลีเถระ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-08",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระมหากัจจายนเถระ ได้รับยกย่องเป็นเอตทัคคะด้านใด?",
    "options": [
      "ผู้อธิบายเนื้อความย่อให้พิสดารได้อย่างยอดเยี่ยม",
      "ผู้ตรัสรู้ธรรมเร็วพลัน",
      "ผู้มีบริวารมาก",
      "ผู้ปฏิบัติธรรมเคร่งครัด"
    ],
    "correctIndex": 0,
    "explanation": "พระมหากัจจายนะเป็นเอตทัคคะผู้จำแนกขยายเนื้อความธรรมที่พระพุทธองค์ตรัสย่อให้เข้าใจได้พิสดาร",
    "reference": "พุทธานุพุทธประวัติ พระมหากัจจายนเถระ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-09",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระราหุลเถระ พระโอรสของเจ้าชายสิทธัตถะ ได้รับยกย่องในด้านใด?",
    "options": [
      "ผู้เลิศทางมีความกตัญญู",
      "ผู้ใคร่ต่อการศึกษา (สิกขากาม)",
      "ผู้มีรูปร่างสง่างาม",
      "ผู้รักความสันโดษ"
    ],
    "correctIndex": 1,
    "explanation": "พระราหุลเถระเป็นเอตทัคคะในบรรดาภิกษุผู้ใคร่ในการศึกษาและฝึกฝนตนเอง",
    "reference": "พุทธานุพุทธประวัติ พระราหุลเถระ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-10",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระปุณณมันตานีบุตรเถระ ได้รับยกย่องเป็นเอตทัคคะด้านใด?",
    "options": [
      "ผู้เป็นธรรมกถึก (นักเทศน์ผู้ยอดเยี่ยม)",
      "ผู้บรรลุธรรมด้วยปัญญา",
      "ผู้มีวิหารธรรมอันประเสริฐ",
      "ผู้เป็นที่รักของเทวดา"
    ],
    "correctIndex": 0,
    "explanation": "พระปุณณมันตานีบุตรเถระ ได้รับยกย่องว่าเป็นผู้เลิศทางแสดงธรรมกถา (ธรรมกถึก)",
    "reference": "พุทธานุพุทธประวัติ พระปุณณมันตานีบุตร",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-11",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระโสณโกฬิวิสะ ก่อนบวชเป็นเศรษฐีที่มีฝ่าเท้าละเอียดอ่อน ได้รับยกย่องด้านใดเมื่อบรรลุธรรม?",
    "options": [
      "ผู้มีความกตัญญูยิ่ง",
      "ผู้ปรารภความเพียร (ปรารภวิริยะ)",
      "ผู้มีลาภมาก",
      "ผู้มีเสียงไพเราะ"
    ],
    "correctIndex": 1,
    "explanation": "พระโสณโกฬิวิสะตั้งใจเดินจงกรมจนเท้าแตก พระพุทธองค์จึงทรงสอนพิณ ๓ สาย และยกย่องเป็นผู้เลิศทางปรารภความเพียร",
    "reference": "พุทธานุพุทธประวัติ พระโสณโกฬิวิสะ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-12",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระรัฐบาลเถระ บุตรเศรษฐีเมืองกุลละ ผู้ยอมอดอาหารเพื่อขอบวช ได้รับยกย่องด้านใด?",
    "options": [
      "ผู้บวชด้วยศรัทธาแท้จริง",
      "ผู้บวชโดยถือธุดงค์",
      "ผู้มีรูปงาม",
      "ผู้เลิศทางบวชด้วยศรัทธา (สัทธาปัพพชิต)"
    ],
    "correctIndex": 3,
    "explanation": "พระรัฐบาลเถระได้รับการยกย่องเป็นเอตทัคคะทางผู้บวชด้วยศรัทธาแท้จริง สละทรัพย์สมบัติมหาศาล",
    "reference": "พุทธานุพุทธประวัติ พระรัฐบาลเถระ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-13",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระมหาปันถกและพระจูฬปันถกเป็นพี่น้องกัน พระจูฬปันถกได้รับยกย่องในด้านใด?",
    "options": [
      "ผู้ฉลาดในการพลิกแพลงจิตสร้างมโนมยิทธิกาย",
      "ผู้จำพระสูตรได้แม่นยำ",
      "ผู้เชี่ยวชาญการแสดงฤทธิ์น้ำไฟ",
      "ผู้มีสติปัญญาว่องไว"
    ],
    "correctIndex": 0,
    "explanation": "พระจูฬปันถกได้รับยกย่องเป็นเอตทัคคะ ๒ ประการ คือ ผู้เนรมิตกายอันสำเร็จด้วยใจ (มโนมยิทธิ) และฉลาดในเจโตวิวัฏฏ์",
    "reference": "พุทธานุพุทธประวัติ พระจูฬปันถกเถระ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-14",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระกุณฑธานเถระ ได้รับยกย่องจากพระพุทธเจ้าในด้านใด?",
    "options": [
      "ผู้จับสลากเป็นปฐม (ผู้ได้สลากภัตก่อนใคร)",
      "ผู้มีเสียงดังกังวาน",
      "ผู้ชำนาญการปราบมาร",
      "ผู้ยินดีในการอยู่ป่า"
    ],
    "correctIndex": 0,
    "explanation": "พระกุณฑธานเถระได้รับยกย่องเป็นเอตทัคคะผู้จับสลากเป็นคนแรกในเวลาแจกทานของสงฆ์",
    "reference": "พุทธานุพุทธประวัติ พระกุณฑธานเถระ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-15",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระภัททิยะ กษัตริย์ศากยวงศ์ที่ออกบวชพร้อมพระอานนท์ ได้รับยกย่องด้านใด?",
    "options": [
      "ผู้มีตระกูลสูงส่ง (อุจจกุลีนัง)",
      "ผู้มีทรัพย์มหาศาล",
      "ผู้มีความเพียรยอดเยี่ยม",
      "ผู้ชำนาญพระสูตร"
    ],
    "correctIndex": 0,
    "explanation": "พระภัททิยกาฬิโคธาบุตร ได้รับยกย่องเป็นเอตทัคคะในบรรดาภิกษุผู้เกิดในตระกูลสูง",
    "reference": "พุทธานุพุทธประวัติ พระภัททิยะเถระ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-16",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระโกณฑัญญเถระ (ปัญจวัคคีย์รูปแรก) ได้รับยกย่องเป็นเอตทัคคะด้านใด?",
    "options": [
      "ผู้มีรัตตัญญู (ผู้รู้ราตรีนาน รู้ธรรมก่อนใคร)",
      "ผู้มีอายุยืนนาน",
      "ผู้มีปัญญาเฉียบคม",
      "ผู้สวดมนต์ไพเราะ"
    ],
    "correctIndex": 0,
    "explanation": "พระอัญญาโกณฑัญญะ ได้รับการยกย่องเป็นเอตทัคคะด้าน 'รัตตัญญู' คือผู้บวชก่อนและรู้แจ้งธรรมก่อนภิกษุทั้งปวง",
    "reference": "พุทธานุพุทธประวัติ พระอัญญาโกณฑัญญะ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-17",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระวังคีสเถระ ได้รับการยกย่องเป็นเอตทัคคะด้านใด?",
    "options": [
      "ผู้มีปฏิภาณกวี แต่งคาถาสรรเสริญธรรมได้ฉับพลัน",
      "ผู้มีความจำยอดเยี่ยม",
      "ผู้ทรงพระไตรปิฎก",
      "ผู้มีเสียงก้องกังวาน"
    ],
    "correctIndex": 0,
    "explanation": "พระวังคีสะ ได้รับยกย่องเป็นเอตทัคคะด้านผู้มีปฏิภาณ ฉลาดในการประพันธ์คาถาภาษิตได้อย่างไพเราะทันท่วงที",
    "reference": "พุทธานุพุทธประวัติ พระวังคีสเถระ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-18",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระเรวตขทิรวนิยเถระ น้องชายคนสุดท้องของพระสารีบุตร ได้รับยกย่องในด้านใด?",
    "options": [
      "ผู้อยู่ในป่าไม้ตะเคียน (ผู้ยินดีในเสนาสนะป่า)",
      "ผู้มีปัญญาเหมือนพี่ชาย",
      "ผู้มีลาภมาก",
      "ผู้เชี่ยวชาญพระวินัย"
    ],
    "correctIndex": 0,
    "explanation": "พระเรวตะ ได้รับยกย่องเป็นเอตทัคคะด้านผู้อยู่ป่าเป็นวัตร (อรัญญิกัง)",
    "reference": "พุทธานุพุทธประวัติ พระเรวตเถระ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-19",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระมหากัปปินเถระ เดิมเป็นพระราชาผู้ขี่ม้าออกบวช ได้รับยกย่องด้านใด?",
    "options": [
      "ผู้ให้โอวาทสั่งสอนภิกษุได้ยอดเยี่ยม",
      "ผู้มีฝีมือการรบ",
      "ผู้มีความสงบระงับ",
      "ผู้มีจิตเมตตาสูงสุด"
    ],
    "correctIndex": 0,
    "explanation": "พระมหากัปปินะ ได้รับยกย่องเป็นเอตทัคคะด้านผู้สั่งสอนและให้โอวาทแก่ภิกษุทั้งหลาย",
    "reference": "พุทธานุพุทธประวัติ พระมหากัปปินเถระ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-20",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระพาหิยทารุจีริยะ ได้รับการยกย่องจากพระพุทธองค์ในตำแหน่งใด?",
    "options": [
      "ผู้ตรัสรู้ธรรมได้เร็วพลันที่สุด (ขิปปาภิญญา)",
      "ผู้มีผ้าบังสุกุลดีที่สุด",
      "ผู้ทรงปัญญาเหนือมนุษย์",
      "ผู้ไม่เคยเจ็บป่วย"
    ],
    "correctIndex": 0,
    "explanation": "พระพาหิยะ ฟังธรรมเทศนาสั้นๆ เพียงบทเดียวว่า 'เห็นสักแต่ว่าเห็น' ก็บรรลุพระอรหันต์ จึงได้ยกย่องเป็นผู้ตรัสรู้เร็วพลัน (ขิปปาภิญญา)",
    "reference": "พุทธานุพุทธประวัติ พระพาหิยเถระ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-21",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระอุรุเวลกัสสปะ อดีตชฎิล ๓ พี่น้อง ได้รับยกย่องในด้านใด?",
    "options": [
      "ผู้มีบริวารมาก (มหปริวารัง)",
      "ผู้บูชาไฟได้เก่งที่สุด",
      "ผู้มีอายุยืนนาน",
      "ผู้มีญาณทัศนะกว้างไกล"
    ],
    "correctIndex": 0,
    "explanation": "พระอุรุเวลกัสสปะ ได้รับยกย่องเป็นเอตทัคคะด้านผู้มีบริวารมาก ติดตามมาบวชถึง ๑,๐๐๐ รูป",
    "reference": "พุทธานุพุทธประวัติ พระอุรุเวลกัสสปะ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-22",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระวักกลิเถระ ผู้เดิมชอบมองพระรูปกายของพระพุทธเจ้า ได้รับยกย่องด้านใดหลังจากบรรลุธรรม?",
    "options": [
      "ผู้มีศรัทธาหลุดพ้น (สัทธาวิมุตต์)",
      "ผู้มีดวงตางดงาม",
      "ผู้เลิศทางความเพียร",
      "ผู้เลิศทางความอดทน"
    ],
    "correctIndex": 0,
    "explanation": "พระวักกลิ ได้รับยกย่องเป็นเอตทัคคะด้านผู้หลุดพ้นด้วยศรัทธาอันแก่กล้า (สัทธาวิมุตต์)",
    "reference": "พุทธานุพุทธประวัติ พระวักกลิเถระ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-23",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระลกุณฏกภัททิยะ ผู้มีรูปร่างเตี้ยค่อมแต่เสียงไพเราะ ได้รับยกย่องด้านใด?",
    "options": [
      "ผู้มีเสียงไพเราะก้องกังวาน (มัญชุสสระ)",
      "ผู้มีความอดกลั้น",
      "ผู้มีปัญญาขจัดมาร",
      "ผู้มีจิตอ่อนโยน"
    ],
    "correctIndex": 0,
    "explanation": "พระลกุณฏกภัททิยะ ได้รับยกย่องเป็นเอตทัคคะในด้านผู้มีเสียงแสดงธรรมไพเราะอ่อนหวานน่าฟัง",
    "reference": "พุทธานุพุทธประวัติ พระลกุณฏกภัททิยะ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-24",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระมหากัจจายนะ มีบทบาทสำคัญในการเผยแผ่พระพุทธศาสนาในแคว้นใดเป็นหลัก?",
    "options": [
      "แคว้นอวันตี เมืองอุชเชนี",
      "แคว้นมคธ",
      "แคว้นโกศล",
      "แคว้นวัชชี"
    ],
    "correctIndex": 0,
    "explanation": "พระมหากัจจายนะเป็นชาวแคว้นอวันตี และกลับไปประกาศพระศาสนาที่เมืองอุชเชนีอย่างมั่นคง",
    "reference": "พุทธานุพุทธประวัติ พระมหากัจจายนะ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-25",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "การทำปฐมสังคายนาพระไตรปิฎก มีพระมหาเถระรูปใดเป็นประธานสงฆ์และเป็นผู้สอบถามพระธรรมวินัย?",
    "options": [
      "พระมหากัสสปเถระ",
      "พระอานนท์",
      "พระอุบาลี",
      "พระอนุรุทธะ"
    ],
    "correctIndex": 0,
    "explanation": "พระมหากัสสปเถระทำหน้าที่เป็นประธานและผู้ซักถาม โดยพระอุบาลีตอบพระวินัย และพระอานนท์ตอบพระธรรม/พระสูตร",
    "reference": "ประวัติการสังคายนา พระมหากัสสปเถระ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-01",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "อาบัตินิสสัคคิยปาจิตตีย์มีทั้งหมดกี่สิกขาบท?",
    "options": [
      "๑๓ สิกขาบท",
      "๓๐ สิกขาบท",
      "๙๒ สิกขาบท",
      "๒๒๗ สิกขาบท"
    ],
    "correctIndex": 1,
    "explanation": "นิสสัคคิยปาจิตตีย์มีทั้งหมด ๓๐ สิกขาบท แบ่งเป็น ๓ วรรค วรรคละ ๑๐ ข้อ",
    "reference": "วินัยมุข เล่ม ๒ นิสสัคคิยปาจิตตีย์",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-02",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "ภิกษุเก็บผ้าอติเรกจีวรไว้ได้เกินกี่วันโดยไม่ได้อธิษฐานหรือวิกัป จึงต้องอาบัตินิสสัคคิยปาจิตตีย์?",
    "options": [
      "เกิน ๗ วัน",
      "เกิน ๑๐ วัน",
      "เกิน ๑ เดือน",
      "เกิน ๑ พรรษา"
    ],
    "correctIndex": 1,
    "explanation": "ผ้าอติเรกจีวรเก็บไว้ได้ไม่เกิน ๑๐ วัน หากเกินแต่วันที่ ๑๑ ขึ้นไป ต้องนิสสัคคิยปาจิตตีย์",
    "reference": "วินัยมุข เล่ม ๒ จีวรวรรค ข้อ ๑",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-03",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "คำว่า 'นิสสัคคิยะ' ในหมวดอาบัตินิสสัคคิยปาจิตตีย์ มีความหมายว่าอย่างไร?",
    "options": [
      "ต้องสละของสิ่งนั้นออกไปก่อน จึงจะแสดงอาบัติตก",
      "ต้องจำคุกสงฆ์",
      "ต้องกักบริเวณ ๖ ราตรี",
      "ต้องสึกจากความเป็นพระ"
    ],
    "correctIndex": 0,
    "explanation": "นิสสัคคิยะ แปลว่า จำต้องสละสิ่งของที่เป็นเหตุต้องอาบัตินั้นให้แก่สงฆ์ คณะ หรือบุคคลก่อน จึงจะแสดงอาบัติได้บริสุทธิ์",
    "reference": "วินัยมุข เล่ม ๒ นิสสัคคิยกัณฑ์",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-04",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "ภิกษุรับเงินทองหรือยินดีเงินทองที่เขาเก็บไว้เพื่อตน ต้องอาบัติใดในหมวดนิสสัคคิยปาจิตตีย์?",
    "options": [
      "โกสิยวรรค สิกขาบทที่ ๘ (รูปิยสิกขาบท)",
      "จีวรวรรค ข้อ ๓",
      "ปัตตวรรค ข้อ ๑",
      "ปาจิตตีย์ ข้อ ๑๑"
    ],
    "correctIndex": 0,
    "explanation": "ภิกษุรับเองหรือใช้ให้ผู้อื่นรับเงินทอง หรือยินดีเงินทองที่เขาเก็บไว้เพื่อตน ต้องนิสสัคคิยปาจิตตีย์ (รูปิยสิกขาบท โกสิยวรรค)",
    "reference": "วินัยมุข เล่ม ๒ โกสิยวรรค สิกขาบทที่ ๘",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-05",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๓",
    "question": "ภิกษุเก็บเภสัช ๕ (เนยใส เนยข้น น้ำมัน น้ำผึ้ง น้ำอ้อย) ไว้ฉันได้ไม่เกินกี่วัน?",
    "options": [
      "๑ วัน",
      "๓ วัน",
      "๗ วัน",
      "๑๕ วัน"
    ],
    "correctIndex": 2,
    "explanation": "เภสัช ๕ ทรงอนุญาตให้ภิกษุรับประเคนแล้วเก็บไว้ฉันได้ไม่เกิน ๗ วัน เกินนั้นต้องนิสสัคคิยปาจิตตีย์",
    "reference": "วินัยมุข เล่ม ๒ ปัตตวรรค สิกขาบทที่ ๓",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-06",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๔",
    "question": "บาตรที่มีรอยร้าวไม่ถึงกี่นิ้ว จึงไม่อนุญาตให้ภิกษุขอเปลี่ยนบาตรใหม่?",
    "options": [
      "ไม่ถึง ๒ นิ้ว",
      "ไม่ถึง ๕ นิ้ว (หรือสนิมยังไม่ทะลุ ๕ รอย)",
      "ไม่ถึง ๑ ฝ่ามือ",
      "ไม่แตกหักละเอียด"
    ],
    "correctIndex": 1,
    "explanation": "บาตรที่มีรอยร้าวไม่ถึง ๕ นิ้ว (๕ รอยแผล) ภิกษุไปขอบาตรใหม่ ต้องนิสสัคคิยปาจิตตีย์ (ปัตตวรรค)",
    "reference": "วินัยมุข เล่ม ๒ ปัตตวรรค สิกขาบทที่ ๑",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-07",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๕",
    "question": "อาบัติอนิยตะ มีกี่สิกขาบท และหมายความว่าอย่างไร?",
    "options": [
      "มี ๒ สิกขาบท หมายถึง อาบัติที่ยังไม่แน่นอนว่าจะเป็นปาราชิก สังฆาทิเสส หรือปาจิตตีย์",
      "มี ๔ สิกขาบท หมายถึง อาบัติเบา",
      "มี ๕ สิกขาบท หมายถึง อาบัติจร",
      "มี ๑๐ สิกขาบท หมายถึง สิกขาบทชั่วคราว"
    ],
    "correctIndex": 0,
    "explanation": "อนิยตะมี ๒ สิกขาบท เป็นอาบัติที่ยังไม่แน่ชัด ขึ้นอยู่กับการไต่สวนตามคำของอุบาสิกาผู้มีศรัทธาเชื่อถือได้",
    "reference": "วินัยมุข เล่ม ๑ อนิยตกัณฑ์",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-08",
    "grade": "โท",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "อาบัติปาฏิเทสนียะของภิกษุ มีกี่สิกขาบท?",
    "options": [
      "๒ สิกขาบท",
      "๔ สิกขาบท",
      "๘ สิกขาบท",
      "๑๒ สิกขาบท"
    ],
    "correctIndex": 1,
    "explanation": "อาบัติปาฏิเทสนียะมี ๔ สิกขาบท เป็นอาบัติที่ต้องแสดงสารภาพว่าตนทำสิ่งที่ไม่สมควร",
    "reference": "วินัยมุข เล่ม ๒ ปาฏิเทสนียกัณฑ์",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-09",
    "grade": "โท",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "เสขิยวัตร (มารยาทและข้อปฏิบัติดีงามของภิกษุ) มีทั้งหมดกี่สิกขาบท?",
    "options": [
      "๕๐ สิกขาบท",
      "๗๕ สิกขาบท",
      "๑๐๐ สิกขาบท",
      "๒๒๗ สิกขาบท"
    ],
    "correctIndex": 1,
    "explanation": "เสขิยวัตรมี ๗๕ สิกขาบท แบ่งเป็น สารูป ๒๖, โภชนปฏิสังยุตต์ ๓๐, ธัมมเทสนาปฏิสังยุตต์ ๑๖, ปกิณณกะ ๓",
    "reference": "วินัยมุข เล่ม ๑ เสขิยกัณฑ์",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-10",
    "grade": "โท",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "อธิกรณสมถะ ๗ คือธรรมสำหรับระงับอธิกรณ์ ข้อใดคือ 'สัมมุขาวินัย'?",
    "options": [
      "การระงับในที่พร้อมหน้าสงฆ์ บุคคล วัตถุ และธรรม",
      "การยกฟ้องเพราะเป็นพระอรหันต์",
      "การตัดสินตามเสียงข้างมาก",
      "การปรับอาบัติตามคำรับสารภาพ"
    ],
    "correctIndex": 0,
    "explanation": "สัมมุขาวินัย คือระเบียบการระงับอธิกรณ์ในที่พร้อมหน้าบุคคล พร้อมหน้าสงฆ์ พร้อมหน้าวัตถุ และพร้อมหน้าธรรมวินัย",
    "reference": "วินัยมุข เล่ม ๑ อธิกรณสมถะ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-11",
    "grade": "โท",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "อธิกรณ์ในพระวินัยมี ๔ ประการ ข้อใดคือ 'วิวาทาธิกรณ์'?",
    "options": [
      "การเถียงกันเกี่ยวกับพระธรรมวินัย",
      "การกล่าวหากันด้วยอาบัติ",
      "การทำสังฆกรรมบกพร่อง",
      "การกระทำผิดหน้าที่"
    ],
    "correctIndex": 0,
    "explanation": "วิวาทาธิกรณ์ คือการโต้เถียงขัดแย้งกันว่าสิ่งนี้เป็นธรรม สิ่งนี้ไม่เป็นธรรม สิ่งนี้เป็นวินัย สิ่งนี้ไม่เป็นวินัย",
    "reference": "วินัยมุข เล่ม ๑ อธิกรณ์ ๔",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-12",
    "grade": "โท",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "'อนุวาทาธิกรณ์' หมายถึงอธิกรณ์ประเภทใด?",
    "options": [
      "การวิวาทแย่งที่อยู่อาศัย",
      "การโจทก์ฟ้องร้องกันด้วยเรื่องต้องอาบัติ",
      "การขัดแย้งเรื่องลาภสักการะ",
      "การแบ่งพรรคพวกในวัด"
    ],
    "correctIndex": 1,
    "explanation": "อนุวาทาธิกรณ์ คือการกล่าวหาโจทก์ฟ้องกันเรื่องศีลวิบัติ อาจารวิบัติ ทิฏฐิวิบัติ หรืออาชีววิบัติ",
    "reference": "วินัยมุข เล่ม ๑ อธิกรณ์ ๔",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-13",
    "grade": "โท",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "'อาปัตตาธิกรณ์' หมายถึงอะไร?",
    "options": [
      "การระงับข้อพิพาทด้วยเสียงส่วนมาก",
      "การต้องอาบัติและการปรับอาบัติออกจากอาบัตินั้นๆ",
      "การสวดปาฏิโมกข์ไม่พร้อมเพรียง",
      "การทะเลาะวิวาท"
    ],
    "correctIndex": 1,
    "explanation": "อาปัตตาธิกรณ์ คือการต้องอาบัติ การฟ้อง และการทำพิธีระงับอาบัตินั้นๆ ตามลำดับโทษ",
    "reference": "วินัยมุข เล่ม ๑ อธิกรณ์ ๔",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-14",
    "grade": "โท",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "'กิจจาธิกรณ์' ในหมวดอธิกรณ์ ๔ หมายถึงอะไร?",
    "options": [
      "กิจธุระหรือการทำสังฆกรรมของสงฆ์ เช่น อุปสมบท สวดปาฏิโมกข์ กฐินกรรม",
      "กิจนิมนต์ของคฤหัสถ์",
      "การจัดระเบียบเสนาสนะ",
      "การบิณฑบาตเลี้ยงชีพ"
    ],
    "correctIndex": 0,
    "explanation": "กิจจาธิกรณ์ คือการงานของสงฆ์ที่ต้องประชุมทำสังฆกรรมร่วมกัน เช่น ญัตติจตุตถกรรมอุปสมบท หรือการกรานกฐิน",
    "reference": "วินัยมุข เล่ม ๑ อธิกรณ์ ๔",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-15",
    "grade": "โท",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "การวิกัปจีวร (ทำสองเจ้าของ) มีวัตถุประสงค์เพื่ออะไร?",
    "options": [
      "เพื่อขายต่อให้ญาติโยม",
      "เพื่อไม่ให้ต้องอาบัตินิสสัคคิยปาจิตตีย์เพราะเก็บอติเรกจีวรเกิน ๑๐ วัน",
      "เพื่อเปลี่ยนสีจีวร",
      "เพื่อถวายพระพุทธเจ้า"
    ],
    "correctIndex": 1,
    "explanation": "การวิกัปจีวรคือการมอบกรรมสิทธิ์ร่วมให้ภิกษุหรือสามเณรรูปอื่น เพื่อจะได้เก็บผ้านั้นไว้ได้โดยไม่เป็นอาบัติ",
    "reference": "วินัยมุข เล่ม ๒ วิธีวิกัปจีวร",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-16",
    "grade": "โท",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "'เยภุยยสิกา' ในอธิกรณสมถะ ๗ หมายถึงวิธีระงับอธิกรณ์แบบใด?",
    "options": [
      "ระงับโดยการตัดสินตามเสียงข้างมากของสงฆ์ที่เป็นธรรมวาที",
      "ระงับโดยการประนีประนอม",
      "ระงับโดยการขับออกจากวัด",
      "ระงับโดยการให้สัตย์ปฏิญาณ"
    ],
    "correctIndex": 0,
    "explanation": "เยภุยยสิกา คือการระงับอธิกรณ์ด้วยการถือเอาเสียงข้างมากของภิกษุผู้ประพฤติธรรม",
    "reference": "วินัยมุข เล่ม ๑ อธิกรณสมถะ ๗",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-17",
    "grade": "โท",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "'ตัสสปาปิยสิกา' ในอธิกรณสมถะ ๗ ใช้สำหรับลงโทษภิกษุประเภทใด?",
    "options": [
      "ภิกษุผู้สารภาพตรงไปตรงมา",
      "ภิกษุผู้ให้การกลับกลอก พูดเท็จ ปฏิเสธแล้วรับ รับแล้วปฏิเสธ",
      "ภิกษุผู้อาพาธหนัก",
      "ภิกษุผู้เป็นสติวินัย"
    ],
    "correctIndex": 1,
    "explanation": "ตัสสปาปิยสิกา เป็นกรรมที่สงฆ์ลงโทษแก่ภิกษุผู้มีมารยาทเลวทราม พูดกลับกลอกในการไต่สวนอธิกรณ์",
    "reference": "วินัยมุข เล่ม ๑ อธิกรณสมถะ ๗",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-18",
    "grade": "โท",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "'ติณวัตถารกวินัย' เปรียบเสมือนการทำสิ่งใดเพื่อระงับความขัดแย้งของสงฆ์?",
    "options": [
      "การตัดสิทธิ์การบวช",
      "การเอาหญ้ามากลบขี้ (การประนีประนอมยกเลิกความผิดลหุโทษทั้งหมดพร้อมกันทั้ง ๒ ฝ่าย)",
      "การสวดตัดขาดจากหมู่",
      "การลงทัณฑกรรม"
    ],
    "correctIndex": 1,
    "explanation": "ติณวัตถารกวินัย แปลว่า กิริยาดุจเอาหญ้ากลบไว้ หมายถึงการประนีประนอมยกเลิกความผิดอาบัติเล็กน้อยของทั้ง ๒ ฝ่ายเพื่อความสามัคคี",
    "reference": "วินัยมุข เล่ม ๑ อธิกรณสมถะ ๗",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-19",
    "grade": "โท",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "ภิกษุพรากของเขียว (ตัดต้นไม้ ขุดดิน หักกิ่งไม้) ต้องอาบัติประเภทใด?",
    "options": [
      "ปาราชิก",
      "สังฆาทิเสส",
      "ปาจิตตีย์ (ภูตคามวรรค)",
      "ทุกกฏ"
    ],
    "correctIndex": 2,
    "explanation": "การพรากพืชคามและภูตคาม (ตัดต้นไม้ ทำลายของเขียว) ต้องอาบัติปาจิตตีย์ ในภูตคามวรรค",
    "reference": "วินัยมุข เล่ม ๑ ปาจิตตีย์ ภูตคามวรรค",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-20",
    "grade": "โท",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "ภิกษุดื่มน้ำเมา (สุราและเมรัย) ต้องอาบัติใดในพระวินัย?",
    "options": [
      "ปาราชิก",
      "สังฆาทิเสส",
      "ปาจิตตีย์ (สุราปานวรรค)",
      "ถุลลัจจัย"
    ],
    "correctIndex": 2,
    "explanation": "ภิกษุดื่มน้ำเมา ต้องอาบัติปาจิตตีย์ ในสุราปานวรรค สิกขาบทที่ ๑",
    "reference": "วินัยมุข เล่ม ๑ สุราปานวรรค",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-21",
    "grade": "โท",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "ภิกษุฉันอาหารในเวลาวิกาล (ตั้งแต่เที่ยงวันจนถึงรุ่งอรุณวันใหม่) ต้องอาบัติใด?",
    "options": [
      "ปาจิตตีย์ (โภชนวรรค)",
      "สังฆาทิเสส",
      "ทุกกฏ",
      "ปาฏิเทสนียะ"
    ],
    "correctIndex": 0,
    "explanation": "การฉันอาหารในเวลาวิกาล ต้องอาบัติปาจิตตีย์ ในโภชนวรรค สิกขาบทที่ ๗",
    "reference": "วินัยมุข เล่ม ๑ โภชนวรรค",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-22",
    "grade": "โท",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "ภิกษุนอนร่วมห้องกับอนุปสัมบัน (คฤหัสถ์หรือสามเณร) เกินกี่คืนจึงต้องอาบัติปาจิตตีย์?",
    "options": [
      "เกิน ๑ คืน",
      "เกิน ๒-๓ คืน (นอนคืนที่ ๔ ต้องอาบัติ)",
      "เกิน ๗ คืน",
      "เกิน ๑ เดือน"
    ],
    "correctIndex": 1,
    "explanation": "ภิกษุนอนในที่มุงที่บังอันเดียวกันกับอนุปสัมบันเกิน ๓ คืน คืนที่ ๔ เป็นต้นไปต้องปาจิตตีย์ (มุสาวาทวรรค)",
    "reference": "วินัยมุข เล่ม ๑ มุสาวาทวรรค สิกขาบทที่ ๕",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-23",
    "grade": "โท",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "การทำสังฆกรรมของสงฆ์ ญัตติจตุตถกรรม หมายถึงอะไร?",
    "options": [
      "การตั้งญัตติ ๑ ครั้ง และสวดอนุสาวนา ๓ ครั้ง รวมเป็น ๔",
      "การประชุมสงฆ์ ๔ รูป",
      "การสวดมนต์ ๔ ทิศ",
      "การตั้งกระทู้ถาม ๔ ครั้ง"
    ],
    "correctIndex": 0,
    "explanation": "ญัตติจตุตถกรรม คือสังฆกรรมขนาดใหญ่ที่ต้องสวดตั้งญัตติ ๑ ครั้ง และสวดประกาศขอมติสงฆ์ (อนุสาวนา) อีก ๓ ครั้ง รวมเป็น ๔",
    "reference": "วินัยมุข เล่ม ๓ สังฆกรรม",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-24",
    "grade": "โท",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "สังฆกรรมประเภทใดต้องใช้คณะสงฆ์อย่างน้อย ๒๐ รูปในการทำพิธี?",
    "options": [
      "การสวดปาฏิโมกข์",
      "การให้การอุปสมบท",
      "การสวดอัพภาน (การรับภิกษุต้องสังฆาทิเสสกลับเข้าหมู่)",
      "การกรานกฐิน"
    ],
    "correctIndex": 2,
    "explanation": "การสวดอัพภานเพื่อรับภิกษุที่อยู่ปริวาสและมานัตพ้นมลทินกลับเข้าหมู่สงฆ์ ต้องใช้องค์สงฆ์อย่างน้อย ๒๐ รูป",
    "reference": "วินัยมุข เล่ม ๓ วุฏฐานวิธี",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-25",
    "grade": "โท",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "การกรานกฐิน ต้องมีภิกษุจำพรรษาถ้วนไตรมาสในวัดนั้นอย่างน้อยกี่รูป?",
    "options": [
      "๓ รูป",
      "๔ รูป",
      "๕ รูป",
      "๑๐ รูป"
    ],
    "correctIndex": 2,
    "explanation": "การกรานกฐินต้องมีพระภิกษุผู้จำพรรษาครบ ๓ เดือนโดยไม่ขาดพรรษาในวัดนั้นอย่างน้อย ๕ รูปจึงจะทำสังฆกรรมได้",
    "reference": "วินัยมุข เล่ม ๓ กฐินขันธกะ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-k-01",
    "grade": "เอก",
    "subject": "กระทู้ธรรม",
    "year": "๒๕๕๙",
    "question": "การเขียนเรียงความแก้กระทู้ธรรมชั้นเอก บังคับให้เขียนกระทู้เชื่อมโยงสนับสนุนอย่างน้อยกี่บท?",
    "options": [
      "อย่างน้อย ๑ บท",
      "อย่างน้อย ๒ บท",
      "อย่างน้อย ๓ บทขึ้นไป",
      "กี่บทก็ได้ตามใจชอบ"
    ],
    "correctIndex": 2,
    "explanation": "เกณฑ์สนามหลวงสำหรับนักธรรมชั้นเอกและธรรมศึกษาชั้นเอก บังคับกระทู้เชื่อมอย่างน้อย ๓ บท เพื่อวิเคราะห์เชิงลึก",
    "reference": "เกณฑ์มาตรฐานการตรวจกระทู้ธรรมชั้นเอก กองธรรมสนามหลวง",
    "sourceName": "ข้อสอบจริงสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-k-02",
    "grade": "เอก",
    "subject": "กระทู้ธรรม",
    "year": "๒๕๕๙",
    "question": "พุทธพจน์ 'ธมฺโม รหโท อกทโม' มีความหมายตรงกับข้อใด และมักใช้อธิบายเรื่องใด?",
    "options": [
      "ธรรมเหมือนห้วงน้ำที่ใสสะอาดปราศจากเปือกตม (จิตบริสุทธิ์)",
      "ธรรมเป็นสะพานข้ามโอฆสงสาร",
      "ธรรมเปรียบดั่งดวงประทีปส่องสว่าง",
      "ธรรมะรักษาผู้ประพฤติชอบ"
    ],
    "correctIndex": 0,
    "explanation": "ธมฺโม รหโท อกทโม แปลว่า ธรรมดุจห้วงน้ำอันไม่มีเปือกตม (ใสสะอาดบริสุทธิ์) อธิบายคุณธรรมขั้นสูงของพระอริยะ",
    "reference": "พุทธภาษิตหมวดธรรมชั้นเอก",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "ek-k-03",
    "grade": "เอก",
    "subject": "กระทู้ธรรม",
    "year": "๒๕๖๐",
    "question": "พุทธศาสนสุภาษิต 'นิพฺพานํ ปรมํ สุขํ' ปรากฏในคัมภีร์ใด และมีความหมายอย่างไร?",
    "options": [
      "ขุ. ธ. - นิพพานเป็นสุขอย่างยิ่ง",
      "ม. มู. - นิพพานเป็นที่ดับทุกข์",
      "ที. มหา. - พระนิพพานไม่มีการเกิดดับ",
      "สํ. ส. - นิพพานเป็นบรมธรรม"
    ],
    "correctIndex": 0,
    "explanation": "นิพฺพานํ ปรมํ สุขํ มาในคัมภีร์ขุททกนิกาย ธรรมบท (ขุ. ธ.) แปลว่า พระนิพพานเป็นบรมสุข (สุขอย่างยิ่ง)",
    "reference": "พุทธภาษิตหมวดนิพพานชั้นเอก",
    "sourceName": "ข้อสอบจริงสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-k-04",
    "grade": "เอก",
    "subject": "กระทู้ธรรม",
    "year": "๒๕๖๑",
    "question": "ความยาวของการแต่งเรียงความแก้กระทู้ธรรมชั้นเอก ตามเกณฑ์มาตรฐานควรมีความยาวเท่าใด?",
    "options": [
      "๑-๒ หน้ากระดาษ",
      "๓ หน้ากระดาษขึ้นไป (ประมาณ ๔๕-๖๐ บรรทัดขึ้นไป)",
      "๕ บรรทัดสรุปสั้นๆ",
      "ไม่จำกัดจำนวนหน้า"
    ],
    "correctIndex": 1,
    "explanation": "ชั้นเอกต้องอธิบายกระทู้ตั้ง ๑ และกระทู้เชื่อมอีก ๓ บทรวมเป็น ๔ คาถา จึงต้องมีความยาวไม่น้อยกว่า ๓ หน้ากระดาษสอบ",
    "reference": "คู่มือแต่งกระทู้ธรรมชั้นเอก ครูประกาศผล",
    "sourceName": "ครูประกาศผล (prakaspon.com)",
    "sourceUrl": "https://prakaspon.com/"
  },
  {
    "id": "ek-k-05",
    "grade": "เอก",
    "subject": "กระทู้ธรรม",
    "year": "๒๕๖๒",
    "question": "'สงฺขารา ปรมา ทุกฺขา' แปลว่าอย่างไรในการวิเคราะห์กระทู้ชั้นเอก?",
    "options": [
      "สังขารทั้งหลายเป็นทุกข์อย่างยิ่ง",
      "ความตายเป็นทุกข์สูงสุด",
      "ความพลัดพรากนำมาซึ่งความเศร้าโศก",
      "กิเลสเป็นบ่อเกิดแห่งภัย"
    ],
    "correctIndex": 0,
    "explanation": "สงฺขารา ปรมา ทุกฺขา แปลว่า สังขาร (สิ่งปรุงแต่งทั้งปวง) เป็นทุกข์อย่างยิ่ง มักใช้เชื่อมหมวดไตรลักษณ์และวิปัสสนา",
    "reference": "พุทธสุภาษิตชั้นเอก หมวดไตรลักษณ์",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "ek-k-06",
    "grade": "เอก",
    "subject": "กระทู้ธรรม",
    "year": "๒๕๖๓",
    "question": "'ชิฆจฺฉาปรมา โรคา' ออกสอบชั้นเอกปี ๒๕๖๓ มีคำแปลตรงกับข้อใด?",
    "options": [
      "ความหิวเป็นโรคอย่างยิ่ง",
      "โรคภัยทั้งหลายเกิดจากกรรม",
      "ความเจ็บป่วยเป็นเครื่องเตือนสติ",
      "ราคะเป็นโรคร้ายของจิต"
    ],
    "correctIndex": 0,
    "explanation": "ชิฆจฺฉาปรมา โรคา แปลว่า ความหิว (ความกระหายอยาก) เป็นโรคอย่างยิ่ง มักเปรียบเทียบกับตัณหาในจิต",
    "reference": "ข้อสอบจริงกระทู้ธรรมชั้นเอก ปี ๒๕๖๓",
    "sourceName": "ข้อสอบจริงสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-k-07",
    "grade": "เอก",
    "subject": "กระทู้ธรรม",
    "year": "๒๕๖๔",
    "question": "'อโรคฺยปรมา ลาภา' มีความหมายลึกซึ้งในชั้นเอกอย่างไร?",
    "options": [
      "ความไม่มีโรคเป็นลาภอย่างยิ่ง (ทั้งโรคกายและโรคกิเลสทางใจ)",
      "การมียาดีเป็นทรัพย์อันประเสริฐ",
      "สุขภาพร่างกายแข็งแรงนำมาซึ่งทรัพย์",
      "ผู้ไม่เจ็บป่วยย่อมมีความสุข"
    ],
    "correctIndex": 0,
    "explanation": "อโรคฺยปรมา ลาภา ในชั้นเอกอธิบายขยายความถึงการไม่มีโรคคือกิเลสครอบงำจิตใจ อันเป็นลาภอันประเสริฐสูงสุด",
    "reference": "พุทธภาษิตหมวดสุขภาพจิตและนิพพาน",
    "sourceName": "ครูประกาศผล (prakaspon.com)",
    "sourceUrl": "https://prakaspon.com/"
  },
  {
    "id": "ek-k-08",
    "grade": "เอก",
    "subject": "กระทู้ธรรม",
    "year": "๒๕๖๕",
    "question": "'สนฺตุฏฺฐี ปรมํ ธนํ' ในการเชื่อมกระทู้ธรรมชั้นเอก แปลว่าอะไร?",
    "options": [
      "ความสันโดษ (ความยินดีตามมีตามได้) เป็นทรัพย์อย่างยิ่ง",
      "ทรัพย์สินเงินทองย่อมหมดสิ้นไปได้",
      "ความพอใจในบุญเป็นยอดแห่งสุข",
      "ผู้ให้ย่อมได้รับความร่ำรวย"
    ],
    "correctIndex": 0,
    "explanation": "สนฺตุฏฺฐี ปรมํ ธนํ แปลว่า ความสันโดษยินดีในสิ่งที่มีเป็นทรัพย์อันประเสริฐที่สุด",
    "reference": "พุทธสุภาษิตหมวดสันโดษ",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "ek-k-09",
    "grade": "เอก",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "ในการอ้างอิงคัมภีร์ชั้นเอก ตัวย่อ 'ที. ปา.' ย่อมาจากคัมภีร์ใด?",
    "options": [
      "ทีฆนิกาย ปาฏิกวรรค",
      "ทีฆนิกาย ปาจิตตีย์",
      "ทีฆนิกาย ปรมัตถ์",
      "ทีฆนิกาย ปัญจมวรรค"
    ],
    "correctIndex": 0,
    "explanation": "ที. ปา. ย่อมาจาก ทีฆนิกาย ปาฏิกวรรค พระสุตตันตปิฎก",
    "reference": "คู่มืออักษรย่อคัมภีร์พระไตรปิฎกชั้นเอก",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-k-10",
    "grade": "เอก",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'ม. ม.' ในวงเล็บอ้างอิงท้ายพุทธสุภาษิต ย่อมาจากคัมภีร์ใด?",
    "options": [
      "มัชฌิมนิกาย มัชฌิมปัณณาสก์",
      "มัชฌิมนิกาย มูลปัณณาสก์",
      "มัชฌิมนิกาย มหาวรรค",
      "มหาวิบาก อภิธรรม"
    ],
    "correctIndex": 0,
    "explanation": "ม. ม. ย่อมาจาก มัชฌิมนิกาย มัชฌิมปัณณาสก์ (หมวดปานกลางแห่งมัชฌิมนิกาย)",
    "reference": "คู่มืออักษรย่อคัมภีร์",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-k-11",
    "grade": "เอก",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'ม. อุ.' ในอักษรย่อพระไตรปิฎก ย่อมาจากอะไร?",
    "options": [
      "มัชฌิมนิกาย อุปริปัณณาสก์",
      "มัชฌิมนิกาย อุทานวรรค",
      "มหานิบาต อุเทศ",
      "มหาอุโบสถ พระวินัย"
    ],
    "correctIndex": 0,
    "explanation": "ม. อุ. ย่อมาจาก มัชฌิมนิกาย อุปริปัณณาสก์ (หมวดเบื้องปลายของมัชฌิมนิกาย)",
    "reference": "คู่มืออักษรย่อคัมภีร์",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-k-12",
    "grade": "เอก",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'สํ. นิ.' ย่อมาจากคัมภีร์ใดในพระสุตตันตปิฎก?",
    "options": [
      "สังยุตตนิกาย นิทานวรรค",
      "สังยุตตนิกาย นิพพานสูตร",
      "สังยุตตนิกาย นิกายวรรค",
      "สังยุตตนิกาย นิเทศ"
    ],
    "correctIndex": 0,
    "explanation": "สํ. นิ. ย่อมาจาก สังยุตตนิกาย นิทานวรรค (รวบรวมพระสูตรว่าด้วยเหตุปัจจัยและปฏิจจสมุปบาท)",
    "reference": "คู่มืออักษรย่อคัมภีร์",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-k-13",
    "grade": "เอก",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'สํ. มหา.' ย่อมาจากคัมภีร์ใด?",
    "options": [
      "สังยุตตนิกาย มหาวารวรรค",
      "สังยุตตนิกาย มหาสติปัฏฐาน",
      "สังยุตตนิกาย มหานิเทศ",
      "สังยุตตนิกาย มหาสมัย"
    ],
    "correctIndex": 0,
    "explanation": "สํ. มหา. ย่อมาจาก สังยุตตนิกาย มหาวารวรรค (ว่าด้วยโพธิปักขิยธรรม ๓๗)",
    "reference": "คู่มืออักษรย่อคัมภีร์",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-k-14",
    "grade": "เอก",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'เย ธมฺมา เหตุปพฺภวา เตสํ เหตุํ ตถาคโต อาห' (คาถาพระอัสสชิ) สื่อถึงหลักการใด?",
    "options": [
      "ธรรมเหล่าใดเกิดแต่เหตุ พระตถาคตทรงแสดงเหตุของธรรมเหล่านั้นและความดับแห่งเหตุนั้น",
      "ความเพียรเป็นเครื่องล่วงทุกข์",
      "ศีลเป็นที่พึ่งของสัตว์",
      "ปัญญาประเสริฐกว่าทรัพย์"
    ],
    "correctIndex": 0,
    "explanation": "เป็นพระคาถาที่พระอัสสชิแสดงแก่พระสารีบุตร (อุปติสสะ) จนได้ดวงตาเห็นธรรมว่าธรรมทั้งปวงเกิดแต่เหตุและดับไปเพราะเหตุดับ",
    "reference": "พุทธประวัติและสุภาษิตชั้นเอก",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "ek-k-15",
    "grade": "เอก",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'ยทา หเว ปาตุภวนฺติ ธมฺมา อาตาปิโน ฌายโต พฺราหฺมณสฺส' เป็นพระอุทานของพระพุทธเจ้าเมื่อใด?",
    "options": [
      "เมื่อทรงพิจารณาปฏิจจสมุปบาทใต้ต้นโพธิ์ในสัปดาห์แรกหลังตรัสรู้",
      "เมื่อแสดงปฐมเทศนา",
      "เมื่อปรินิพพาน",
      "เมื่อปลงอายุสังขาร"
    ],
    "correctIndex": 0,
    "explanation": "เป็นพระอุทานบทแรกเมื่อทรงพิจารณาปฏิจจสมุปบาทสายเกิดและสายดับในราตรีแรกแห่งการตรัสรู้",
    "reference": "พุทธสุภาษิตชั้นเอก พระไตรปิฎก เล่ม ๒๕",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-k-16",
    "grade": "เอก",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "การเขียนโครงสร้างกระทู้เชื่อม ๓ บทในชั้นเอก ควรจัดลำดับแบบใดจึงจะถูกต้องตามหลักสัมพันธ์วิภาค?",
    "options": [
      "จัดตามลำดับ ปริยัติ → ปฏิบัติ → ปฏิเวธ หรือ ศีล → สมาธิ → ปัญญา (หรือ สมถะ → วิปัสสนา → นิพพาน)",
      "สุ่มตามใจชอบโดยไม่มีความต่อเนื่อง",
      "เขียนเรื่องเดียวกันซ้ำทั้ง ๓ บท",
      "ใช้บาลีสั้นที่สุดเพื่อให้เสร็จเร็ว"
    ],
    "correctIndex": 0,
    "explanation": "การเรียงลำดับกระทู้เชื่อมชั้นเอกที่ดีที่สุดคือร้อยเรียงแบบไตรสิกขาหรือวิสุทธิ ๗ เพื่อยกระดับจิตใจจากขั้นต้นสู่พระนิพพาน",
    "reference": "เทคนิคการแต่งกระทู้ธรรมชั้นเอก ครูประกาศผล",
    "sourceName": "ครูประกาศผล (prakaspon.com)",
    "sourceUrl": "https://prakaspon.com/"
  },
  {
    "id": "ek-k-17",
    "grade": "เอก",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'น เวรเวเรน สมฺมนฺติ' แปลว่าอะไรในหมวดเมตตากระทู้ชั้นเอก?",
    "options": [
      "เวรย่อมไม่ระงับด้วยการจองเวร",
      "คนพาลย่อมมองไม่เห็นความดี",
      "ความโกรธทำลายมิตรภาพ",
      "ไฟแค้นไม่มีวันดับ"
    ],
    "correctIndex": 0,
    "explanation": "น เวรเวเรน สมฺมนฺติ (อเวเรน จ สมฺมนฺติ) แปลว่า เวรในกาลไหนๆ ย่อมไม่ระงับด้วยการจองเวร แต่ระงับได้ด้วยการไม่จองเวร",
    "reference": "ธรรมบท ยมกวรรค",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "ek-k-18",
    "grade": "เอก",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'สพฺเพ ธมฺมา อนตฺตาติ' มีความหมายครอบคลุมธรรมระดับใด?",
    "options": [
      "ธรรมทั้งปวง (ทั้งสังขตธรรมและอสังขตธรรม/พระนิพพาน) ไม่ใช่ตัวตน",
      "เฉพาะร่างกายมนุษย์เท่านั้น",
      "เฉพาะสิ่งไม่มีชีวิต",
      "เฉพาะจิตใจของมนุษย์"
    ],
    "correctIndex": 0,
    "explanation": "อนัตตาครอบคลุม 'สพฺเพ ธมฺมา' คือสิ่งปรุงแต่งและพระนิพพาน ล้วนเป็นอนัตตาไม่ควรยึดมั่นถือมั่น",
    "reference": "พุทธภาษิตหมวดอนัตตลักขณะ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-k-19",
    "grade": "เอก",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'ทุราวาสา ฆรา ทุกฺขา' แปลว่าอะไร?",
    "options": [
      "เรือนที่ครอบครองไม่ดี นำทุกข์มาให้ (การครองเรือนเป็นทุกข์)",
      "บ้านที่ไม่มีศีลธรรมย่อมพินาศ",
      "การอยู่ป่ามีความสุขกว่าอยู่ในเมือง",
      "ครอบครัวแตกแยกเพราะขาดสัจจะ"
    ],
    "correctIndex": 0,
    "explanation": "ทุราวาสา ฆรา ทุกฺขา แปลว่า การอยู่ครองเรือนที่จัดตั้งไม่ดีนำทุกข์มาให้ หรือเหย้าเรือนเป็นที่อยู่คับแคบเต็มไปด้วยทุกข์",
    "reference": "พุทธสุภาษิตหมวดบรรพชาและฆราวาส",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "ek-k-20",
    "grade": "เอก",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'โย จ วสฺสสตํ ชีเว กุสีโต หีนวีริโย' แปลว่าอย่างไร?",
    "options": [
      "ผู้เกียจคร้าน มีความเพียรเลวทราม ถึงจะมีชีวิตอยู่ตั้งร้อยปี ก็สู้ผู้มีความเพียรมั่นคงอยู่วันเดียวไม่ได้",
      "คนขยันย่อมมีอายุยืนยาวร้อยปี",
      "ชีวิตมนุษย์สั้นนักไม่ควรประมาท",
      "ความเกียจคร้านเป็นบ่อเกิดแห่งความพินาศ"
    ],
    "correctIndex": 0,
    "explanation": "แปลว่า ผู้ใดเกียจคร้าน มีความเพียรทราม พึงมีชีวิตอยู่ ๑๐๐ ปี ความเป็นอยู่เพียงวันเดียวของผู้ปรารภความเพียรมั่นคงยังประเสริฐกว่า",
    "reference": "ธรรมบท สหัสสวรรค",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "ek-k-21",
    "grade": "เอก",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'จตฺตาโร ปฐวี สมา' สื่อถึงบุคคลผู้มีจิตใจหนักแน่นดุจสิ่งใด?",
    "options": [
      "หนักแน่นดุจแผ่นดินใหญ่ ไม่หวั่นไหวต่อโลกธรรม ๘",
      "เปรียบดั่งภูเขาหินแท่งทึบ",
      "เปรียบดั่งเสาเขื่อนที่ปักแน่น",
      "เปรียบดั่งห้วงมหาสมุทร"
    ],
    "correctIndex": 0,
    "explanation": "ผู้ฝึกจิตดีแล้ว ย่อมมีจิตใจมั่นคง หนักแน่นดุจแผ่นดินใหญ่ ไม่ยินดียินร้ายต่อโลกธรรมทั้งฝ่ายดีและฝ่ายร้าย",
    "reference": "ธรรมบท อรหันตวรรค",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "ek-k-22",
    "grade": "เอก",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'วิชฺชา จรณสมฺปนฺโน โส เสฏฺโฐ เทวมานุเส' สื่อถึงคุณสมบัติสูงสุดของใคร?",
    "options": [
      "พระพุทธเจ้าและพระอริยบุคคลผู้ถึงพร้อมด้วยวิชชาและจรณะ เป็นผู้ประเสริฐสุดในหมู่เทวดาและมนุษย์",
      "มหาจักรพรรดิผู้ครองแผ่นดิน",
      "มหาพรหมผู้สร้างโลก",
      "เทวดาผู้มีวิมานทอง"
    ],
    "correctIndex": 0,
    "explanation": "ผู้ถึงพร้อมด้วยวิชชา (ความรู้แจ้ง) และจรณะ (ความประพฤติดีบริสุทธิ์) ย่อมเป็นผู้ประเสริฐเลิศที่สุดในหมู่เทวดาและมนุษย์ทั้งหลาย",
    "reference": "ทีฆนิกาย อัมพัฏฐสูตร",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-k-23",
    "grade": "เอก",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'ตณฺหกฺขโย สพฺพทุกฺขํ ชินาติ' แปลว่าอย่างไร?",
    "options": [
      "ความสิ้นตัณหา (กิเลสความอยาก) ย่อมชนะทุกข์ทั้งปวง",
      "ความเพียรชนะความอดอยาก",
      "ปัญญาชนะความมืดบอด",
      "ความเมตตาชนะความโกรธ"
    ],
    "correctIndex": 0,
    "explanation": "ตณฺหกฺขโย สพฺพทุกฺขํ ชินาติ แปลว่า ความสิ้นไปแห่งตัณหาย่อมเอาชนะทุกข์ทั้งปวงได้เด็ดขาด (เข้าสู่นิพพาน)",
    "reference": "ธรรมบท ตัณหาวรรค",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "ek-k-24",
    "grade": "เอก",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "'ปญฺญา โลกสฺมิ ปชฺโชโต' แปลว่าอะไร?",
    "options": [
      "ปัญญาเป็นดวงประทีปส่องสว่างในโลก",
      "ปัญญาประเสริฐกว่าแก้วมณี",
      "แสงแห่งดวงอาทิตย์ส่องสว่างทั่วโลก",
      "ความรู้ทำให้พ้นมลทิน"
    ],
    "correctIndex": 0,
    "explanation": "ปญฺญา โลกสฺมิ ปชฺโชโต แปลว่า ปัญญาเป็นดวงประทีปในโลก ส่องสว่างนำทางชีวิตให้หลุดพ้นจากอวิชชา",
    "reference": "สังยุตตนิกาย สคาถวรรค",
    "sourceName": "คลังธรรมศึกษา",
    "sourceUrl": "https://dhamma.lcbp.co.th/"
  },
  {
    "id": "ek-k-25",
    "grade": "เอก",
    "subject": "กระทู้ธรรม",
    "year": "แนวข้อสอบ",
    "question": "คำปิดท้ายในย่อหน้าสรุปของเรียงความแก้กระทู้ธรรมชั้นเอก คือข้อใด?",
    "options": [
      "มีนัยดังพรรณนามาฉะนี้",
      "ขอจบคำอธิบายไว้แต่เพียงเท่านี้",
      "เอวังก็มีด้วยประการฉะนี้ สาธุ",
      "ด้วยอานุภาพแห่งธรรมทาน"
    ],
    "correctIndex": 0,
    "explanation": "แบบฟอร์มมาตรฐานสนามหลวงกำหนดให้ลงท้ายด้วยคำว่า 'มีนัยดังพรรณนามาฉะนี้' เสมอ",
    "reference": "ระเบียบแม่กองธรรมสนามหลวง",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-01",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "วิสุทธิ ๗ (ความบริสุทธิ์หมดจด ๗ ขั้นตอนแห่งการปฏิบัติธรรม) ขั้นแรกคือข้อใด?",
    "options": [
      "สีลวิสุทธิ (ความหมดจดแห่งศีล)",
      "จิตตวิสุทธิ (ความหมดจดแห่งจิต/สมาธิ)",
      "ทิฏฐิวิสุทธิ (ความหมดจดแห่งทิฏฐิ)",
      "ญาณทัสสนวิสุทธิ"
    ],
    "correctIndex": 0,
    "explanation": "วิสุทธิ ๗ เริ่มต้นที่ ๑. สีลวิสุทธิ ต่อด้วย ๒. จิตตวิสุทธิ ๓. ทิฏฐิวิสุทธิ ๔. กังขาวิตรณวิสุทธิ ๕. มัคคามัคคญาณทัสสนวิสุทธิ ๖. ปฏิปทาญาณทัสสนวิสุทธิ ๗. ญาณทัสสนวิสุทธิ",
    "reference": "ธรรมวิจารณ์ นักธรรมชั้นเอก วิสุทธิ ๗",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-02",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "'จิตตวิสุทธิ' ในวิสุทธิ ๗ หมายถึงการอบรมฝึกฝนสิ่งใดจนบริสุทธิ์ตั้งมั่น?",
    "options": [
      "การรักษาศีล ๒๒๗ ให้บริสุทธิ์",
      "การทำสมาธิจนจิตตั้งมั่นปราศจากนิวรณ์ ๕ (อุปจารสมาธิและอัปปนาสมาธิ)",
      "การเห็นรูปนามตามเป็นจริง",
      "การละความสงสัยในอดีตอนาคต"
    ],
    "correctIndex": 1,
    "explanation": "จิตตวิสุทธิ คือความหมดจดแห่งจิต ได้แก่การฝึกอบรมสมาธิจนจิตผ่องใส ปราศจากนิวรณ์เครื่องเศร้าหมอง",
    "reference": "ธรรมวิจารณ์ นักธรรมชั้นเอก วิสุทธิ ๗",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-03",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "'ทิฏฐิวิสุทธิ' ในวิสุทธิ ๗ คือความเห็นถูกต้องบริสุทธิ์ด้วยการจำแนกสิ่งใด?",
    "options": [
      "จำแนกรูปและนาม (นามรูปปริจเฉทญาณ) ว่าไม่ใช่สัตว์ บุคคล ตัวตน เรา เขา",
      "จำแนกคนดีและคนชั่ว",
      "จำแนกบุญและบาป",
      "จำแนกพระธรรมวินัย"
    ],
    "correctIndex": 0,
    "explanation": "ทิฏฐิวิสุทธิ คือความหมดจดแห่งความเห็น โดยการรู้แจ้งเห็นจริงแยกแยะ 'รูป' และ 'นาม' ออกจากกัน ปราศจากความยึดถือว่ามีตัวตน",
    "reference": "ธรรมวิจารณ์ นักธรรมชั้นเอก วิสุทธิ ๗",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-04",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "'กังขาวิตรณวิสุทธิ' ในวิสุทธิ ๗ หมายถึงการข้ามพ้นความสงสัยด้วยการรู้เห็นสิ่งใด?",
    "options": [
      "รู้เห็นปัจจัยของรูปนามตามกฎปฏิจจสมุปบาทและกรรม (ปัจจยปริคคหญาณ)",
      "รู้เห็นอนาคตของสัตว์โลก",
      "รู้เห็นชาติก่อนของตนเอง",
      "รู้เห็นเทวดาและพรหม"
    ],
    "correctIndex": 0,
    "explanation": "กังขาวิตรณวิสุทธิ คือความหมดจดแห่งปัญญาที่ข้ามพ้นความลังเลสงสัยในกาลทั้ง ๓ เพราะรู้แจ้งปัจจัยเหตุผลของรูปและนาม",
    "reference": "ธรรมวิจารณ์ นักธรรมชั้นเอก วิสุทธิ ๗",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-05",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "วิปัสสนูปกิเลส ๑๐ (อุปสรรคหลอกล่อให้หลงผิดระหว่างปฏิบัติวิปัสสนา) ข้อใดเกิดขึ้นบ่อยที่สุด?",
    "options": [
      "โอภาส (แสงสว่างจ้า) และญาณ (ความรู้ว่องไว)",
      "ความง่วงนอน",
      "ความโกรธแค้น",
      "ความกลัวผี"
    ],
    "correctIndex": 0,
    "explanation": "โอภาส (แสงสว่างเจิดจ้า), ปีติ, ปัสสัทธิ, สุข, ญาณ ฯลฯ เป็นวิปัสสนูปกิเลสที่ทำให้ผู้ปฏิบัติหลงสำคัญผิดว่าตนบรรลุมรรคผลแล้ว",
    "reference": "ธรรมวิจารณ์ นักธรรมชั้นเอก วิปัสสนูปกิเลส ๑๐",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-06",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "วิปัสสนาญาณ ๙ (หรือญาณ ๑๖) ญาณแรกสุดในวิปัสสนาญาณ ๙ คือข้อใด?",
    "options": [
      "อุทยัพพยญาณ (ญาณหยั่งรู้ความเกิดและความดับของรูปนาม)",
      "ภังคญาณ",
      "ภยญาณ",
      "มุญจิตุกัมยตาญาณ"
    ],
    "correctIndex": 0,
    "explanation": "วิปัสสนาญาณ ๙ เริ่มต้นด้วย ๑. อุทยัพพยญาณ (รู้การเกิดดับ) ๒. ภังคญาณ (รู้ความแตกดับ) ฯลฯ",
    "reference": "ธรรมวิจารณ์ นักธรรมชั้นเอก วิปัสสนาญาณ ๙",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-07",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "'สังขารุเปกขาญาณ' ในวิปัสสนาญาณ ๙ มีลักษณะเด่นอย่างไร?",
    "options": [
      "จิตวางเฉยเป็นกลางต่อสังขารทั้งปวง ไม่ยินดียินร้าย พร้อมเข้าสู่อริยมรรค",
      "จิตเกิดความกลัวสังขารอย่างยิ่ง",
      "จิตต้องการหนีออกจากสังขาร",
      "จิตหลงเพลิดเพลินในสุขของสมาธิ"
    ],
    "correctIndex": 0,
    "explanation": "สังขารุเปกขาญาณ คือปัญญาที่พิจารณาสังขารแล้ววางใจเป็นกลาง ปราศจากความยินดีและยินร้าย เป็นยอดแห่งวิปัสสนาญาณฝ่ายโลกิยะ",
    "reference": "ธรรมวิจารณ์ นักธรรมชั้นเอก วิปัสสนาญาณ ๙",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-08",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "สังโยชน์ ๑๐ คือกิเลสที่ผูกมัดสัตว์ไว้ในวัฏสงสาร พระโสดาบันละสังโยชน์ ๓ ข้อใดได้เด็ดขาด?",
    "options": [
      "สักกายทิฏฐิ วิจิกิจฉา สีลัพพตปรามาส",
      "กามราคะ ปฏิฆะ อวิชชา",
      "มานะ อุทธัจจะ อวิชชา",
      "รูปราคะ อรูปราคะ มานะ"
    ],
    "correctIndex": 0,
    "explanation": "พระโสดาบันและพระสกทาคามี ละโอรัมภาคิยสังโยชน์ ๓ ข้อแรกได้เด็ดขาด คือ สักกายทิฏฐิ, วิจิกิจฉา, และสีลัพพตปรามาส",
    "reference": "ธรรมวิจารณ์ สังโยชน์ ๑๐ และอริยบุคคล",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-09",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "พระอนาคามี สามารถตัดสังโยชน์ข้อใดเพิ่มจนหมดสิ้น?",
    "options": [
      "กามราคะ และ ปฏิฆะ (ความขัดเคืองใจ)",
      "รูปราคะ และ อรูปราคะ",
      "มานะ และ อวิชชา",
      "สักกายทิฏฐิ"
    ],
    "correctIndex": 0,
    "explanation": "พระอนาคามีตัดสังโยชน์เบื้องต่ำ ๕ ประการ (โอรัมภาคิยสังโยชน์) ได้ครบ โดยตัด กามราคะ และ ปฏิฆะ ได้เด็ดขาด ไม่กลับมาเกิดในกามภพอีก",
    "reference": "ธรรมวิจารณ์ สังโยชน์ ๑๐ และพระอนาคามี",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-10",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "พระอรหันต์ ตัดอุทธัมภาคิยสังโยชน์ (สังโยชน์เบื้องสูง ๕ ประการ) ได้หมดสิ้น ข้อใดคือ ๕ ประการนั้น?",
    "options": [
      "รูปราคะ อรูปราคะ มานะ อุทธัจจะ อวิชชา",
      "สักกายทิฏฐิ วิจิกิจฉา สีลัพพตปรามาส กามราคะ ปฏิฆะ",
      "โลภะ โทสะ โมหะ มานะ ทิฏฐิ",
      "กามตัณหา ภวตัณหา วิภวตัณหา ราคะ โทสะ"
    ],
    "correctIndex": 0,
    "explanation": "อุทธัมภาคิยสังโยชน์ ๕ ได้แก่ รูปราคะ อรูปราคะ มานะ อุทธัจจะ และอวิชชา พระอรหันต์เท่านั้นที่ละได้หมดสิ้น",
    "reference": "ธรรมวิจารณ์ สังโยชน์ ๑๐",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-11",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "โพธิปักขิยธรรม ๓๗ ประการ (เกื้อกูลแก่การตรัสรู้) ประกอบด้วยหมวดธรรมกี่หมวด?",
    "options": [
      "๕ หมวด",
      "๗ หมวด (สติปัฏฐาน ๔, สัมมัปปธาน ๔, อิทธิบาท ๔, อินทรีย์ ๕, พละ ๕, โพชฌงค์ ๗, มรรค ๘)",
      "๙ หมวด",
      "๑๐ หมวด"
    ],
    "correctIndex": 1,
    "explanation": "โพธิปักขิยธรรม ๓๗ มี ๗ หมวด ได้แก่ สติปัฏฐาน ๔, สัมมัปปธาน ๔, อิทธิบาท ๔, อินทรีย์ ๕, พละ ๕, โพชฌงค์ ๗, และมรรคมีองค์ ๘",
    "reference": "ธรรมวิจารณ์ โพธิปักขิยธรรม ๓๗",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-12",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "สัมมัปปธาน ๔ (ความเพียรชอบ ๔ ประการ) ข้อใดคือ 'สังวรปธาน'?",
    "options": [
      "เพียรระวังยับยั้งบาปอกุศลธรรมที่ยังไม่เกิดมิให้เกิดขึ้น",
      "เพียรละบาปที่เกิดขึ้นแล้ว",
      "เพียรสร้างกุศลที่ยังไม่เกิดให้เกิดขึ้น",
      "เพียรรักษากุศลที่เกิดแล้วให้งอกงาม"
    ],
    "correctIndex": 0,
    "explanation": "สังวรปธาน คือการสำรวมระวังจิต มิให้อกุศลธรรมใหม่ๆ เกิดขึ้นในใจ",
    "reference": "ธรรมวิจารณ์ สัมมัปปธาน ๔",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-13",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "'ปหานปธาน' ในสัมมัปปธาน ๔ หมายถึงความเพียรแบบใด?",
    "options": [
      "เพียรละบาปอกุศลธรรมที่เกิดขึ้นแล้วให้หมดไป",
      "เพียรสะสมทรัพย์",
      "เพียรภาวนาสมาธิ",
      "เพียรช่วยเหลือสังคม"
    ],
    "correctIndex": 0,
    "explanation": "ปหานปธาน คือความเพียรขจัดกำจัดอกุศลและกิเลสที่เกิดขึ้นแล้วในจิตให้ดับไป",
    "reference": "ธรรมวิจารณ์ สัมมัปปธาน ๔",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-14",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "'ภาวนาปธาน' และ 'อนุรักขนาปธาน' ทำหน้าที่คู่กันอย่างไร?",
    "options": [
      "ภาวนาปธานสร้างกุศลใหม่ อนุรักขนาปธานรักษากุศลเดิมให้เจริญเต็มเปี่ยม",
      "ภาวนาปธานดับทุกข์ อนุรักขนาปธานสร้างสุข",
      "ภาวนาปธานคือการสวดมนต์ อนุรักขนาปธานคือการกวาดลานวัด",
      "ไม่มีความเกี่ยวข้องกัน"
    ],
    "correctIndex": 0,
    "explanation": "ภาวนาปธานทำหน้าที่เพียรปลูกฝังกุศลธรรมให้เกิดขึ้น ส่วนอนุรักขนาปธานเพียรประคับประคองและต่อยอดกุศลนั้นให้ไพบูลย์",
    "reference": "ธรรมวิจารณ์ สัมมัปปธาน ๔",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-15",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "สมถกรรมฐาน และ วิปัสสนากรรมฐาน มีเป้าหมายสูงสุดต่างกันอย่างไร?",
    "options": [
      "สมถะเพื่อความสงบระงับแห่งจิต (เจโตวิมุตติ) ส่วนวิปัสสนาเพื่อปัญญารู้แจ้งตัดกิเลส (ปัญญาวิมุตติ)",
      "สมถะเพื่อการหลุดพ้น วิปัสสนาเพื่อความสงบ",
      "ทั้งสองเหมือนกันทุกประการ",
      "สมถะสำหรับพระ วิปัสสนาสำหรับโยม"
    ],
    "correctIndex": 0,
    "explanation": "สมถะมีอารมณ์บัญญัติ มุ่งข่มนิวรณ์ให้จิตสงบตั้งมั่น ส่วนวิปัสสนามีปรมัตถ์ (รูปนามไตรลักษณ์) มุ่งตัดกิเลสอาสวะด้วยปัญญา",
    "reference": "ธรรมวิจารณ์ สมถะและวิปัสสนา",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-16",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "อารมณ์ของสมถกรรมฐาน มีกี่กองตามคัมภีร์วิสุทธิมรรค?",
    "options": [
      "๑๐ กอง",
      "๒๐ กอง",
      "๔๐ กอง (กสิณ ๑๐, อสุภะ ๑๐, อนุสสติ ๑๐, อัปปมัญญา ๔, อาหาเรปฏิกูลสัญญา ๑, จตุธาตุววัฏฐาน ๑, อรูป ๔)",
      "๖๐ กอง"
    ],
    "correctIndex": 2,
    "explanation": "อารมณ์สมถกรรมฐานมี ๔๐ กอง ได้แก่ กสิณ ๑๐, อสุภะ ๑๐, อนุสสติ ๑๐, พรหมวิหาร ๔, อรูปฌาน ๔, อาหาเรปฏิกูลสัญญา ๑, จตุธาตุววัฏฐาน ๑",
    "reference": "ธรรมวิจารณ์ กรรมฐาน ๔๐",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-17",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "จริต ๖ ของมนุษย์ ข้อใดเป็นกรรมฐานที่คู่ควรกับ 'ราคจริต' (คนรักสวยรักงาม)?",
    "options": [
      "อสุภกรรมฐาน ๑๐ และ กายคตาสติ (พิจารณาอาการ ๓๒)",
      "กสิณสีแดง",
      "อนุสสติ ๑๐",
      "พรหมวิหาร ๔"
    ],
    "correctIndex": 0,
    "explanation": "ราคจริต มีนิสัยติดในความงาม กรรมฐานที่เหมาะสมคือ อสุภะ ๑๐ (ซากศพ) และกายคตาสติเพื่อคลายความกำหนัด",
    "reference": "ธรรมวิจารณ์ จริต ๖ และกรรมฐานที่คู่ควร",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-18",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "'โทสจริต' (คนมักโกรธ ขี้หงุดหงิด) ควรเจริญกรรมฐานกองใดเป็นพิเศษเพื่อแก้จิต?",
    "options": [
      "อัปปมัญญา ๔ (เมตตา กรุณา มุทิตา อุเบกขา) และ วรรณกสิณ ๔ (กสิณสี)",
      "อสุภะ ๑๐",
      "มรณานุสสติ",
      "อาหาเรปฏิกูลสัญญา"
    ],
    "correctIndex": 0,
    "explanation": "โทสจริต ควรเจริญเมตตาพรหมวิหารเพื่อดับไฟโทสะ และเพ่งวรรณกสิณสีเย็นตาเพื่อความผ่อนคลาย",
    "reference": "ธรรมวิจารณ์ จริต ๖",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-19",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "'โมหจริต' และ 'วิตักกจริต' (คนขี้หลง ขี้ฟุ้งซ่าน) ควรฝึกกรรมฐานกองใด?",
    "options": [
      "อานาปานสติ (กำหนดลมหายใจเข้าออก)",
      "อสุภะ ๑๐",
      "กสิณไฟ",
      "เพ่งอสุภะ ๓ วัน"
    ],
    "correctIndex": 0,
    "explanation": "อานาปานสติ เป็นกรรมฐานยอดเยี่ยมในการรวบรวมจิต ดึงความคิดที่ฟุ้งซ่านและหลงลอยให้กลับมาสู่อารมณ์ปัจจุบัน",
    "reference": "ธรรมวิจารณ์ จริต ๖",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-20",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "สมาธิ ๓ ระดับ ข้อใดคือสมาธิแน่วแน่เข้าสู่อัปปนาฌาน?",
    "options": [
      "ขณิกสมาธิ (ชั่วขณะ)",
      "อุปจารสมาธิ (เฉียดฌาน)",
      "อัปปนาสมาธิ (แน่วแน่ดิ่งลึกเป็นฌาน)",
      "มิจฉาสมาธิ"
    ],
    "correctIndex": 2,
    "explanation": "อัปปนาสมาธิ คือสมาธิขั้นสูงแนบแน่นมั่นคง จิตรวมเป็นหนึ่งเดียวตัดขาดจากอารมณ์ภายนอก เป็นองค์แห่งฌาน",
    "reference": "ธรรมวิจารณ์ สมาธิ ๓",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-21",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "อนุสสติ ๑๐ (การระลึกนึกถึงคุณธรรม ๑๐ ประการ) ข้อใดคือ 'อุปสมานุสสติ'?",
    "options": [
      "การระลึกถึงคุณของพระนิพพานอันสงบระงับจากกิเลสทั้งปวง",
      "การระลึกถึงพระพุทธคุณ",
      "การระลึกถึงความตาย",
      "การระลึกถึงเทวดา"
    ],
    "correctIndex": 0,
    "explanation": "อุปสมานุสสติ คือการตามระลึกถึงคุณธรรมแห่งพระนิพพาน อันเป็นธรรมชาติที่สงบเย็น ปราศจากตัณหาและทุกข์",
    "reference": "ธรรมวิจารณ์ อนุสสติ ๑๐",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-22",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "อาสวะ ๔ (กิเลสที่หมักหมมดองสันดาน) ข้อใดมิใช่ ๑ ในอาสวะ ๔?",
    "options": [
      "กามาสวะ (ดองในกาม)",
      "ภวาสวะ (ดองในภพ)",
      "ทิฏฐาสวะ (ดองในทิฏฐิ) และ อวิชชาสวะ (ดองในอวิชชา)",
      "กุสลาอาสวะ"
    ],
    "correctIndex": 3,
    "explanation": "อาสวะ ๔ ได้แก่ กามาสวะ, ภวาสวะ, ทิฏฐาสวะ, และอวิชชาสวะ ทั้งหมดเป็นอกุศลฝ่ายดองสันดาน",
    "reference": "ธรรมวิจารณ์ อาสวะ ๔",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-23",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "โอฆะ ๔ (ห้วงน้ำใหญ่ที่พัดพาสัตว์ให้จมในสงสารวัฏ) มีชื่อตรงกับกิเลสหมวดใด?",
    "options": [
      "มีชื่อตรงกับ อาสวะ ๔ และ โยคะ ๔ (กาม ภพ ทิฏฐิ อวิชชา)",
      "ตรงกับนิวรณ์ ๕",
      "ตรงกับตัณหา ๓",
      "ตรงกับอุปาทาน ๔"
    ],
    "correctIndex": 0,
    "explanation": "โอฆะ ๔ (ห้วงน้ำ), โยคะ ๔ (เครื่องผูก), และอาสวะ ๔ (เครื่องหมักหมม) ล้วนมีชื่อและเนื้อหา ๔ ประการเหมือนกัน คือ กาม, ภพ, ทิฏฐิ, อวิชชา",
    "reference": "ธรรมวิจารณ์ โอฆะ ๔ โยคะ ๔",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-24",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "อนุสัย ๗ (กิเลสนอนเนื่องในสันดานอย่างละเอียด) มีอะไรบ้าง?",
    "options": [
      "กามราคะ ปฏิฆะ ทิฏฐิ วิจิกิจฉา มานะ ภวราคะ อวิชชา",
      "โลภะ โทสะ โมหะ โกธะ อุปนาหะ มักขะ ปลาสะ",
      "ราคะ โทสะ โมหะ ตัณหา มานะ ทิฏฐิ อุปาทาน",
      "สังขาร วิญญาณ นามรูป สฬายตนะ ผัสสะ เวทนา ตัณหา"
    ],
    "correctIndex": 0,
    "explanation": "อนุสัย ๗ คือกิเลสละเอียดที่นอนเนื่องในจิต ได้แก่ กามราคานุสัย, ปฏิฆานุสัย, ทิฏฐานุสัย, วิจิกิจฉานุสัย, มานานุสัย, ภวราคานุสัย, และอวิชชานุสัย",
    "reference": "ธรรมวิจารณ์ อนุสัย ๗",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-25",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "พระนิพพาน ๒ ประเภท ได้แก่ สอุปาทิเสสนิพพาน และ อนุปาทิเสสนิพพาน ต่างกันอย่างไร?",
    "options": [
      "สอุปาทิเสสนิพพาน คือดับกิเลสแต่ยังมีเบญจขันธ์เหลืออยู่ ส่วนอนุปาทิเสสนิพพาน คือดับกิเลสพร้อมทั้งดับขันธ์ ๕ หมดสิ้น (สิ้นอายุขัย)",
      "สอุปาทิเสสเป็นของพระโสดาบัน อนุปาทิเสสเป็นของพระอรหันต์",
      "สอุปาทิเสสคือสมาธิ อนุปาทิเสสคือปัญญา",
      "ไม่มีความแตกต่างกัน"
    ],
    "correctIndex": 0,
    "explanation": "สอุปาทิเสสนิพพาน ดับสนิทเฉพาะกิเลสแต่ขันธ์ ๕ ยังดำรงชีวิตอยู่ ส่วนอนุปาทิเสสนิพพาน ดับทั้งกิเลสและดับขันธ์ ๕ ทั้งหมดเมื่อปรินิพพาน",
    "reference": "ธรรมวิจารณ์ นิพพานธาตุ ๒",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-01",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "พระมหาปชาบดีโคตมีเถรี ได้รับยกย่องจากพระบรมศาสดาในตำแหน่งเอตทัคคะด้านใด?",
    "options": [
      "ผู้เป็นรัตตัญญู (ผู้รู้ราตรีนาน บวชก่อนใครในฝ่ายภิกษุณี)",
      "ผู้มีปัญญาเลิศ",
      "ผู้ทรงวินัยยอดเยี่ยม",
      "ผู้มีฤทธิ์มาก"
    ],
    "correctIndex": 0,
    "explanation": "พระนางมหาปชาบดีโคตมี พระน้านางของพระพุทธเจ้า ทรงเป็นปฐมภิกษุณีและได้รับยกย่องเป็นเอตทัคคะฝ่ายรัตตัญญู",
    "reference": "พุทธานุพุทธประวัติ พระภิกษุณีเอตทัคคะ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-02",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "พระเขมาเถรี ได้รับยกย่องเป็นพระอัครสาวิกาเบื้องขวา เลิศในด้านใด?",
    "options": [
      "ผู้มีปัญญามาก (มหัปปัญญานัง)",
      "ผู้มีฤทธิ์มาก",
      "ผู้มีลาภมาก",
      "ผู้ทรงจำพระสูตร"
    ],
    "correctIndex": 0,
    "explanation": "พระเขมาเถรี อดีตพระมเหสีของพระเจ้าพิมพิสาร ได้รับสถาปนาเป็นพระอัครสาวิกาเบื้องขวา เลิศทางด้านมีปัญญามาก",
    "reference": "พุทธานุพุทธประวัติ พระเขมาเถรี",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-03",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "พระอุบลวรรณาเถรี ได้รับยกย่องเป็นพระอัครสาวิกาเบื้องซ้าย เลิศในด้านใด?",
    "options": [
      "ผู้มีฤทธิ์มาก (อิทธิมันตานัง)",
      "ผู้มีปัญญาเลิศ",
      "ผู้มีลาภมาก",
      "ผู้มีเสียงไพเราะ"
    ],
    "correctIndex": 0,
    "explanation": "พระอุบลวรรณาเถรี เป็นพระอัครสาวิกาเบื้องซ้าย ได้รับยกย่องเป็นเอตทัคคะผู้มีฤทธิ์มาก",
    "reference": "พุทธานุพุทธประวัติ พระอุบลวรรณาเถรี",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-04",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "พระปฏาจาราเถรี ผู้เคยสูญเสียคนในครอบครัวจนเสียสติ ได้รับยกย่องในด้านใดหลังจากบรรลุธรรม?",
    "options": [
      "ผู้ทรงจำพระวินัยยอดเยี่ยมในฝ่ายภิกษุณี (วินัยธร)",
      "ผู้มีลาภมาก",
      "ผู้บวชด้วยศรัทธา",
      "ผู้มีขันติยิ่ง"
    ],
    "correctIndex": 0,
    "explanation": "พระปฏาจาราเถรี ได้รับการยกย่องเป็นเอตทัคคะฝ่ายภิกษุณีผู้ทรงพระวินัย (วินัยธร)",
    "reference": "พุทธานุพุทธประวัติ พระปฏาจาราเถรี",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-05",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๓",
    "question": "พระกีสาโคตมีเถรี ผู้ตามหาเมล็ดพันธุ์ผักกาดในบ้านที่ไม่เคยมีคนตาย ได้รับยกย่องในด้านใด?",
    "options": [
      "ผู้ทรงจีวรเศร้าหมอง (ถือผ้าบังสุกุลจีวรบ่ำค่า)",
      "ผู้มีปัญญาเลิศ",
      "ผู้มีเสียงไพเราะ",
      "ผู้มีเมตตา"
    ],
    "correctIndex": 0,
    "explanation": "พระกีสาโคตมีเถรี ได้รับยกย่องเป็นเอตทัคคะด้านผู้ทรงจีวรเศร้าหมอง (บังสุกุลจีวรธรานัง)",
    "reference": "พุทธานุพุทธประวัติ พระกีสาโคตมีเถรี",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-06",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๔",
    "question": "อนาถบิณฑิกเศรษฐี (สุทัตตะ) ได้รับยกย่องเป็นเอตทัคคะฝ่ายอุบาสกในด้านใด?",
    "options": [
      "ผู้เป็นยอดแห่งผู้ถวายทาน (ทายก)",
      "ผู้มีปัญญาเลิศ",
      "ผู้มีศรัทธามั่นคง",
      "ผู้ชำนาญการค้า"
    ],
    "correctIndex": 0,
    "explanation": "อนาถบิณฑิกเศรษฐี ผู้สร้างวัดพระเชตวันมหาวิหาร ได้รับยกย่องเป็นเอตทัคคะด้านยอดผู้ถวายทาน (ทายก)",
    "reference": "พุทธานุพุทธประวัติ อนาถบิณฑิกเศรษฐี",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-07",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๕",
    "question": "นางวิสาขามหาอุบาสิกา ได้รับยกย่องเป็นเอตทัคคะฝ่ายอุบาสิกาในด้านใด?",
    "options": [
      "ผู้เป็นยอดแห่งผู้ถวายทานฝ่ายหญิง (ทายิกา)",
      "ผู้มีปัญญาเลิศ",
      "ผู้มีเครื่องประดับงดงาม",
      "ผู้รักษาอุโบสถเคร่งครัด"
    ],
    "correctIndex": 0,
    "explanation": "นางวิสาขา ผู้สร้างบุพพารามมหาวิหาร ได้รับยกย่องเป็นเอตทัคคะฝ่ายอุบาสิกาผู้เป็นยอดแห่งทายิกา (ผู้ถวายทาน)",
    "reference": "พุทธานุพุทธประวัติ นางวิสาขามหาอุบาสิกา",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-08",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "หมอชีวกโกมารภัจจ์ ได้รับยกย่องเป็นเอตทัคคะฝ่ายอุบาสกในด้านใด?",
    "options": [
      "ผู้เลื่อมใสในพระรัตนตรัยอย่างยิ่ง (ปสาทกานัง) และเป็นแพทย์ประจำพระองค์",
      "ผู้มียาวิเศษ",
      "ผู้มีปัญญาเฉียบคม",
      "ผู้มีความเพียร"
    ],
    "correctIndex": 0,
    "explanation": "หมอชีวกโกมารภัจจ์ เป็นแพทย์ประจำพระองค์พระพุทธเจ้าและพระเจ้าพิมพิสาร ได้รับยกย่องเป็นยอดอุบาสกผู้เลื่อมใสยิ่ง",
    "reference": "พุทธานุพุทธประวัติ หมอชีวกโกมารภัจจ์",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-09",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระเจ้านิมิตแห่งการทำสังคายนาครั้งที่ ๑ ภายหลังพุทธปรินิพพาน ๓ เดือน คือพระเจ้าแผ่นดินพระองค์ใด?",
    "options": [
      "พระเจ้าอชาตศัตรู แห่งแคว้นมคธ",
      "พระเจ้าพิมพิสาร",
      "พระเจ้าอโศกมหาราช",
      "พระเจ้ากนิษกะ"
    ],
    "correctIndex": 0,
    "explanation": "พระเจ้าอชาตศัตรูทรงเป็นผู้อุปถัมภ์การทำปฐมสังคายนา ณ ถ้ำสัตตบรรณคูหา เมืองราชคฤห์",
    "reference": "ศาสนประวัติ การทำสังคายนาครั้งที่ ๑",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-10",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "การทำสังคายนาครั้งที่ ๒ เกิดขึ้นเมื่อพุทธปรินิพพานล่วงแล้วกี่ปี และเกิดจากสาเหตุใด?",
    "options": [
      "๑๐๐ ปี สาเหตุเพราะภิกษุวัชชีบุตรแสดงวัตถุ ๑๐ ประการนอกรีต",
      "๕๐ ปี สาเหตุแย่งชิงพระบรมสารีริกธาตุ",
      "๒๑๘ ปี สาเหตุเดียรถีย์ปลอมบวช",
      "๕๐๐ ปี สาเหตุสงคราม"
    ],
    "correctIndex": 0,
    "explanation": "สังคายนาครั้งที่ ๒ จัดขึ้นหลังพุทธปรินิพพาน ๑๐๐ ปี ณ วาลิการาม เมืองเวสาลี เพราะภิกษุวัชชีบุตรปฏิบัติย่อหย่อนในวัตถุ ๑๐ ประการ",
    "reference": "ศาสนประวัติ การทำสังคายนาครั้งที่ ๒",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-11",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "การทำสังคายนาครั้งที่ ๓ ในรัชสมัยพระเจ้าอโศกมหาราช มีพระเถระรูปใดเป็นประธานสงฆ์?",
    "options": [
      "พระโมคคัลลีบุตรติสสเถระ",
      "พระมหากัสสปะ",
      "พระเรวตเถระ",
      "พระมหินทเถระ"
    ],
    "correctIndex": 0,
    "explanation": "พระโมคคัลลีบุตรติสสเถระ เป็นประธานสังคายนาครั้งที่ ๓ ณ อโศการาม เมืองปาฏลีบุตร ในพ.ศ. ๒๑๘ (หรือ ๒๓๕)",
    "reference": "ศาสนประวัติ การทำสังคายนาครั้งที่ ๓",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-12",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระเจ้าอโศกมหาราชส่งสมณทูต ๙ สาย สายที่นำพระพุทธศาสนามาประดิษฐาน ณ ดินแดนสุวรรณภูมิ (ไทย/พม่า) คือพระมหาเถระรูปใด?",
    "options": [
      "พระโสณะ และ พระอุตตระ",
      "พระมหินทเถระ",
      "พระมัชฌันติกเถระ",
      "พระมหารักษิตเถระ"
    ],
    "correctIndex": 0,
    "explanation": "พระโสณเถระ และ พระอุตตรเถระ เป็นสมณทูตสายที่ ๘ เดินทางมาประดิษฐานพระศาสนา ณ ดินแดนสุวรรณภูมิ",
    "reference": "ศาสนประวัติ พระธรรมทูต ๙ สาย",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-13",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระมหินทเถระ (พระราชโอรสพระเจ้าอโศก) และพระนางสังฆมิตตาเถรี เดินทางไปเผยแผ่พระพุทธศาสนา ณ ดินแดนใด?",
    "options": [
      "ลังกาทวีป (ประเทศศรีลังกา)",
      "สุวรรณภูมิ",
      "แคว้นคันธาระ",
      "ประเทศจีน"
    ],
    "correctIndex": 0,
    "explanation": "พระมหินทเถระและพระนางสังฆมิตตาเถรีนำพระศาสนาและหน่อพระศรีมหาโพธิ์ไปประดิษฐานอย่างมั่นคง ณ ลังกาทวีป (ศรีลังกา)",
    "reference": "ศาสนประวัติ การเผยแผ่สู่ลังกา",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-14",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "การจารึกพระไตรปิฎกลงบนใบลานเป็นลายลักษณ์อักษรครั้งแรกของโลก เกิดขึ้นที่ใด?",
    "options": [
      "อาโลกเลณสถาน (ถ้ำอาโลกะ) ในประเทศศรีลังกา (พ.ศ. ๔๓๓ หรือ ๔๕๐)",
      "อินเดีย เมืองราชคฤห์",
      "สุโขทัย ประเทศไทย",
      "พม่า เมืองมัณฑะเลย์"
    ],
    "correctIndex": 0,
    "explanation": "การจารึกพระไตรปิฎกลงใบลานเกิดขึ้นในการสังคายนาครั้งที่ ๕ ของฝ่ายลังกา ณ อาโลกเลณสถาน มตเล ศรีลังกา",
    "reference": "ศาสนประวัติ การจารึกพระไตรปิฎก",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-15",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "ยุคสมัยใดของไทยที่มีการรับเอาพระพุทธศาสนานิกายเถรวาทแบบลังกาวงศ์เข้ามาประดิษฐานจนเป็นศาสนาหลักประจำชาติ?",
    "options": [
      "สมัยสุโขทัย (พ่อขุนรามคำแหงมหาราช ทรงอาราธนาพระสงฆ์จากนครศรีธรรมราช)",
      "สมัยทวารวดี",
      "สมัยอยุธยาตอนปลาย",
      "สมัยรัตนโกสินทร์ตอนต้น"
    ],
    "correctIndex": 0,
    "explanation": "พ่อขุนรามคำแหงมหาราชทรงอาราธนาพระมหาเถรสังฆราชจากนครศรีธรรมราชผู้สืบสายลังกาวงศ์มาประดิษฐานที่สุโขทัย",
    "reference": "ประวัติศาสตร์พระพุทธศาสนาในประเทศไทย",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-16",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระพุทธศาสนาแบบลังกาวงศ์ในสมัยอยุธยา เคยส่งสมณทูตนำโดยพระอุบาลีเถระไปฟื้นฟูพระพุทธศาสนาในลังกา จนเกิดนิกายใดในศรีลังกา?",
    "options": [
      "สยามวงศ์ (หรืออุบาลีวงศ์)",
      "รามัญนิกาย",
      "อมรปุรนิกาย",
      "ลังกาวงศ์"
    ],
    "correctIndex": 0,
    "explanation": "ในสมัยพระเจ้าอยู่หัวบรมโกศ สมณทูตไทยนำโดยพระอุบาลีเถระไปให้อุปสมบทแก่ชาวลังกา ก่อกำเนิด 'นิกายสยามวงศ์' ที่รุ่งเรืองถึงปัจจุบัน",
    "reference": "ประวัติพระพุทธศาสนา คณะสงฆ์สยามวงศ์ในลังกา",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-17",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "การทำสังคายนาพระไตรปิฎกครั้งแรกในสมัยกรุงรัตนโกสินทร์ เกิดขึ้นในรัชกาลใด?",
    "options": [
      "พระบาทสมเด็จพระพุทธยอดฟ้าจุฬาโลกมหาราช (รัชกาลที่ ๑) ณ วัดมหาธาตุฯ",
      "รัชกาลที่ ๔",
      "รัชกาลที่ ๕",
      "รัชกาลที่ ๙"
    ],
    "correctIndex": 0,
    "explanation": "รัชกาลที่ ๑ ทรงโปรดเกล้าฯ ให้ทำสังคายนาตรวจชำระพระไตรปิฎกฉบับทองใหญ่ ณ วัดนิพพานาราม (วัดมหาธาตุยุวราชรังสฤษฎิ์) ใน พ.ศ. ๒๓๓๑",
    "reference": "ประวัติศาสตร์สังคายนาในสยาม รัชกาลที่ ๑",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-18",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระไตรปิฎกฉบับพิมพ์เป็นเล่มหนังสือด้วยตัวอักษรไทยชุดแรกของโลก จัดพิมพ์ขึ้นในรัชสมัยใด?",
    "options": [
      "พระบาทสมเด็จพระจุลจอมเกล้าเจ้าอยู่หัว (รัชกาลที่ ๕)",
      "รัชกาลที่ ๓",
      "รัชกาลที่ ๔",
      "รัชกาลที่ ๖"
    ],
    "correctIndex": 0,
    "explanation": "รัชกาลที่ ๕ ทรงโปรดให้จัดพิมพ์พระไตรปิฎกอักษรไทยฉบับ ร.ศ. ๑๑๒ (พ.ศ. ๒๔๓๖) เป็นครั้งแรกของโลก จำนวน ๓๙ เล่ม",
    "reference": "ประวัติการพิมพ์พระไตรปิฎก รัชกาลที่ ๕",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-19",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "สมเด็จพระมหาสมณเจ้า กรมพระยาวชิรญาณวโรรส ทรงมีคุณูปการยิ่งใหญ่ต่อคณะสงฆ์ไทยในด้านใด?",
    "options": [
      "ทรงสถาปนาหลักสูตรการศึกษานักธรรม และทรงนิพนธ์ตำราเรียนนักธรรม ตรี-โท-เอก",
      "ทรงสร้างวัดพระแก้ว",
      "ทรงนำพระไตรปิฎกมาจากอินเดีย",
      "ทรงเป็นแม่ทัพ"
    ],
    "correctIndex": 0,
    "explanation": "สมเด็จพระมหาสมณเจ้า กรมพระยาวชิรญาณวโรรส ทรงริเริ่มการศึกษานักธรรมสำหรับภิกษุสามเณรและแต่งตำราเรียนมาตรฐานจนถึงปัจจุบัน",
    "reference": "ประวัติการศึกษาสงฆ์และนักธรรมไทย",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-20",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระเจ้ามิลินท์ (กษัตริย์กรีก) ทรงสนทนาธรรมตอบปัญหาจนสิ้นสงสัยกับพระเถระรูปใด?",
    "options": [
      "พระนาคเสนเถระ",
      "พระมหากัสสปะ",
      "พระสารีบุตร",
      "พระพุทธโฆษาจารย์"
    ],
    "correctIndex": 0,
    "explanation": "พระนาคเสนเถระได้วิสัชนาตอบปัญหาธรรมอันลึกซึ้งแก่พระเจ้ามิลินท์ จนรวบรวมเป็นคัมภีร์ 'มิลินทปัญหา' อันโด่งดัง",
    "reference": "ประวัติศาสตร์ศาสนา คัมภีร์มิลินทปัญหา",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-21",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระพุทธโฆษาจารย์ พระมหาอรรถกถาจารย์ชื่อก้องโลก ได้รจนาคัมภีร์เอกชิ้นสำคัญชื่ออะไร?",
    "options": [
      "คัมภีร์วิสุทธิมรรค",
      "คัมภีร์มิลินทปัญหา",
      "คัมภีร์สมันตปาสาทิกา",
      "คัมภีร์ชินกาลมาลีปกรณ์"
    ],
    "correctIndex": 0,
    "explanation": "พระพุทธโฆษาจารย์ได้รจนาคัมภีร์ 'วิสุทธิมรรค' ที่อธิบายศีล สมาธิ ปัญญา และวิสุทธิ ๗ อย่างพิสดาร ณ ลังกาทวีป",
    "reference": "ประวัติพระอรรถกถาจารย์ คัมภีร์วิสุทธิมรรค",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-22",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระนางยโสธรา (พิมพา) เถรี พระมารดาของพระราหุล ได้รับยกย่องในตำแหน่งเอตทัคคะด้านใด?",
    "options": [
      "ผู้ได้อภิญญาใหญ่ (มหามภิญญาปัตตานัง)",
      "ผู้มีลาภมาก",
      "ผู้มีปัญญาเฉียบคม",
      "ผู้มีความเพียรยอดเยี่ยม"
    ],
    "correctIndex": 0,
    "explanation": "พระยโสธราเถรี ได้รับยกย่องเป็นเอตทัคคะฝ่ายภิกษุณีผู้บรรลุมหาอภิญญา สามารถระลึกชาติได้ถึงอสงไขยกำไรแสนกัป",
    "reference": "พุทธานุพุทธประวัติ พระยโสธราเถรี",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-23",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระนันทาเถรี (พระสุนทรีนันทาเทวี) พระกนิษฐภคินีต่างพระมารดาของพระพุทธเจ้า ได้รับยกย่องด้านใด?",
    "options": [
      "ผู้ยินดีในการเพ่งฌาน (ฌายีนัง)",
      "ผู้มีรูปงาม",
      "ผู้มีเสียงเพราะ",
      "ผู้มีบริวารมาก"
    ],
    "correctIndex": 0,
    "explanation": "พระนันทาเถรี ได้รับยกย่องเป็นเอตทัคคะฝ่ายภิกษุณีผู้ยินดีในการเพ่งฌานสมาบัติ",
    "reference": "พุทธานุพุทธประวัติ พระนันทาเถรี",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-24",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "จิตตคหบดี อุบาสกชาวเมืองมัจฉิกาสัณฑ์ ได้รับยกย่องเป็นเอตทัคคะด้านใด?",
    "options": [
      "ผู้เป็นธรรมกถึก (แสดงธรรมได้ไพเราะเชี่ยวชาญ) ในฝ่ายอุบาสก",
      "ผู้มีทรัพย์มากที่สุด",
      "ผู้สร้างวัดมากที่สุด",
      "ผู้มีอายุยืนยาว"
    ],
    "correctIndex": 0,
    "explanation": "จิตตคหบดี บรรลุพระอนาคามี และได้รับยกย่องเป็นเอตทัคคะฝ่ายอุบาสกผู้เป็นธรรมกถึก อธิบายธรรมได้อย่างลึกซึ้ง",
    "reference": "พุทธานุพุทธประวัติ จิตตคหบดี",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-25",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "นางขุชชุตตรา หญิงรับใช้หลังค่อมของพระนางสามาวดี ได้รับยกย่องเป็นเอตทัคคะด้านใด?",
    "options": [
      "ผู้เป็นพหูสูต (ทรงจำพระธรรมเทศนาได้มาก) ในฝ่ายอุบาสิกา",
      "ผู้มีปัญญาเลิศ",
      "ผู้มีความซื่อสัตย์",
      "ผู้ถวายทานยอดเยี่ยม"
    ],
    "correctIndex": 0,
    "explanation": "นางขุชชุตตรา ไปฟังธรรมจากพระพุทธเจ้าแล้วนำมาแสดงต่อให้พระนางสามาวดีและบริวาร ๕๐๐ ฟังจนบรรลุธรรม จึงได้ยกย่องเป็นเอตทัคคะผู้เป็นพหูสูต",
    "reference": "พุทธานุพุทธประวัติ นางขุชชุตตรา",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-01",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "วินัยมุข เล่ม ๓ เน้นศึกษาเกี่ยวกับเรื่องใดเป็นหลักสำคัญ?",
    "options": [
      "สังฆกรรมและระเบียบปฏิบัติในอภิสมาจารและขันธกะ",
      "ศีล ๕ และศีล ๘ ของอุบาสก",
      "อาบัติปาราชิก ๔",
      "การแปลภาษาบาลี"
    ],
    "correctIndex": 0,
    "explanation": "วินัยมุข เล่ม ๓ อธิบายเนื้อหาในพระวินัยปิฎก หมวดมหาวรรคและจุลวรรค ว่าด้วยสังฆกรรม ขันธกะ และวัตรปฏิบัติต่างๆ",
    "reference": "วินัยมุข เล่ม ๓ กองธรรมสนามหลวง",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-02",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "สังฆกรรมมี ๔ ประเภท แบ่งตามลักษณะการตั้งญัตติ ข้อใดมิใช่ ๑ ใน ๔ นั้น?",
    "options": [
      "อปโลกนกรรม (การบอกเล่าปรึกษา)",
      "ญัตติกรรม (ตั้งญัตติอย่างเดียว)",
      "ญัตติดุติยกรรม (ตั้งญัตติ ๑ สวดอนุสาวนา ๑) และ ญัตติจตุตถกรรม (ตั้งญัตติ ๑ สวดอนุสาวนา ๓)",
      "อัตตาณัติกรรม"
    ],
    "correctIndex": 3,
    "explanation": "สังฆกรรม ๔ ได้แก่ อปโลกนกรรม, ญัตติกรรม, ญัตติดุติยกรรม, และญัตติจตุตถกรรม",
    "reference": "วินัยมุข เล่ม ๓ หมวดสังฆกรรม",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-03",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "สังฆกรรมที่ต้องทำด้วย 'ญัตติจตุตถกรรม' ข้อใดถูกต้อง?",
    "options": [
      "การอุปสมบท (บวชพระ) และการสวดอัพภาน",
      "การสวดปาฏิโมกข์",
      "การกรานกฐิน",
      "การสมมติสีมา"
    ],
    "correctIndex": 0,
    "explanation": "การให้อุปสมบท, การสวดถอนและผูกสีมา, การสวดอัพภาน ล้วนเป็นสังฆกรรมสำคัญสูงสุดที่ต้องทำด้วยญัตติจตุตถกรรม",
    "reference": "วินัยมุข เล่ม ๓ ญัตติจตุตถกรรม",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-04",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "'สีมา' หรือเขตแดนสำหรับทำสังฆกรรมของสงฆ์ แบ่งออกเป็น ๒ ประเภทใหญ่คืออะไร?",
    "options": [
      "พัทธสีมา (สีมาที่สงฆ์ผูกเอง) และ อพัทธสีมา (สีมาที่ไม่ได้ผูก เช่น แดนบ้าน แดนป่า หรือน้ำ)",
      "สีมาบนบก และ สีมาในน้ำ",
      "สีมาในโบสถ์ และ สีมานอกโบสถ์",
      "สีมาเล็ก และ สีมาใหญ่"
    ],
    "correctIndex": 0,
    "explanation": "สีมาแบ่งเป็น พัทธสีมา (สีมาที่สงฆ์ประชุมผูกด้วยกรรมวาจา) และ อพัทธสีมา (สีมาตามธรรมชาติหรือราชการกำหนด เช่น คามสีมา อุทกุกเขปสีมา)",
    "reference": "วินัยมุข เล่ม ๓ สีมาขันธกะ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-05",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๓",
    "question": "'นิมิต' สำหรับใช้กำหนดเขตพัทธสีมา มีกี่ชนิด?",
    "options": [
      "๔ ชนิด",
      "๘ ชนิด (ภูเขา หิน ป่าไม้ ต้นไม้ จอมปลวก หนทาง แม่น้ำ สระน้ำ)",
      "๑๒ ชนิด",
      "๒๐ ชนิด"
    ],
    "correctIndex": 1,
    "explanation": "นิมิตผูกสีมามี ๘ ชนิด ได้แก่ ภูเขา, ศิลา (หิน), ป่าไม้, ต้นไม้, จอมปลวก, หนทาง, แม่น้ำ, และน้ำ (สระน้ำ)",
    "reference": "วินัยมุข เล่ม ๓ สีมาขันธกะ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-06",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๔",
    "question": "'อุทกุกเขปสีมา' (สีมาเหนือน้ำ) มีข้อกำหนดระยะห่างจากฝั่งอย่างไร?",
    "options": [
      "ห่างจากฝั่งชั่วบุรุษมีกำลังปานกลางวักน้ำสาดไม่ถึง (ประมาณ ๑ ชั่ววิดน้ำ)",
      "ห่าง ๑ กิโลเมตร",
      "ห่าง ๑๐ เมตร",
      "ต้องอยู่กลางทะเลลึก"
    ],
    "correctIndex": 0,
    "explanation": "อุทกุกเขปสีมา คือการทำสังฆกรรมบนเรือหรือแพในแม่น้ำ/สระน้ำธรรมชาติ โดยต้องห่างจากตลิ่งชั่วบุรุษวักน้ำสาดไม่ถึง",
    "reference": "วินัยมุข เล่ม ๓ อพัทธสีมา",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-07",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๕",
    "question": "'กรรมวาจาจารย์' และ 'อนุสาวนาจารย์' ในพิธีอุปสมบททำหน้าที่อะไร?",
    "options": [
      "เป็นพระคู่สวดทำหน้าที่สวดตั้งญัตติและสวดประกาศขอมติสงฆ์ในการรับผู้ขอบวช",
      "เป็นผู้ตัดจีวร",
      "เป็นผู้ให้ศีล ๕",
      "เป็นพยานฝ่ายคฤหัสถ์"
    ],
    "correctIndex": 0,
    "explanation": "พระกรรมวาจาจารย์และพระอนุสาวนาจารย์ เรียกรวมว่า 'พระคู่สวด' ทำหน้าที่สวดญัตติจตุตถกรรมวาจาเพื่อยกกุลบุตรขึ้นเป็นพระภิกษุ",
    "reference": "วินัยมุข เล่ม ๓ อุปสมบทกรรม",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-08",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "อันตรายิกธรรม ๑๓ ประการ (ข้อห้ามมิให้อุปสมบท) ที่พระคู่สวดต้องสอบถามผู้ขอบวช ข้อใดเป็นโรคติดต่อต้องห้าม ๕ ชนิด?",
    "options": [
      "โรคเรื้อน ฝีเปื่อย โรคกลาก โรคมองคร่อ (หืดหอบ) โรคลมบ้าหมู",
      "โรคหวัด โรคปวดฟัน โรคตาแดง โรคไข้หวัดใหญ่ โรคปวดหัว",
      "โรคเบาหวาน โรคความดัน โรคหัวใจ โรคไต โรคมะเร็ง",
      "โรคเกาต์ โรคกระดูก โรคตับ โรคปอด โรคผิวหนัง"
    ],
    "correctIndex": 0,
    "explanation": "กุฏฐัง (โรคเรื้อน), คัณโฑ (โรคฝี), กิลาโส (โรคกลาก/เกลื้อนชนิดร้าย), โสโส (โรคมองคร่อ/หืดหอบ), อปมาโร (โรคลมบ้าหมู) เป็นโรคต้องห้าม ๕ ประการ",
    "reference": "วินัยมุข เล่ม ๓ อันตรายิกธรรม",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-09",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "บุคคลประเภทใดที่ 'ห้ามบวชเด็ดขาด' หากบวชแล้วต้องให้สึกทันที (อนุปสัมบัน ๑๑ จำพวก)?",
    "options": [
      "ผู้ทำมาตุฆาต ปิตุฆาต อรหันตฆาต โลหิตุปบาท ทำสังฆเภท บัณเฑาะก์ คฤหัสถ์ปลอมบวช ฯลฯ",
      "คนยากจน",
      "คนไม่มีบิดามารดา",
      "คนที่อ่านหนังสือไม่ออก"
    ],
    "correctIndex": 0,
    "explanation": "ผู้ทำอนันตริยกรรม ๕, ฆ่าภิกษุ/ภิกษุณี, ทำร้ายพระพุทธเจ้าจนห้อพระโลหิต, ผู้ลักเพศ, บัณเฑาะก์ ห้ามอุปสมบทเด็ดขาด",
    "reference": "วินัยมุข เล่ม ๓ อภัพพบุคคล",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-10",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "'วุฏฐานวิธี' คือระเบียบปฏิบัติเพื่อออกจากอาบัติหนักประเภทใด?",
    "options": [
      "อาบัติสังฆาทิเสส (อยู่ปริวาส มานัต และอัพภาน)",
      "อาบัติปาราชิก",
      "อาบัติปาจิตตีย์",
      "อาบัติทุกกฏ"
    ],
    "correctIndex": 0,
    "explanation": "วุฏฐานวิธี คือกรรมวิธีออกจากอาบัติสังฆาทิเสส ซึ่งประกอบด้วยการอยู่ปริวาส (ตามจำนวนวันที่ปกปิด), การประพฤติมานัต ๖ ราตรี, และการสวดอัพภาน",
    "reference": "วินัยมุข เล่ม ๓ วุฏฐานวิธี",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-11",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "'ปริวาส' มีไว้สำหรับภิกษุที่ต้องอาบัติสังฆาทิเสสในกรณีใด?",
    "options": [
      "ภิกษุที่ต้องอาบัติแล้ว 'ปกปิดไว้' ต้องอยู่ปริวาสเท่ากับจำนวนวันที่ตนปกปิด",
      "ภิกษุที่ไม่ยอมสารภาพ",
      "ภิกษุที่พรรษาเกิน ๒๐",
      "ภิกษุที่ต้องการสึก"
    ],
    "correctIndex": 0,
    "explanation": "ถ้าต้องสังฆาทิเสสแล้วปกปิดไว้กี่วัน ต้องอยู่ปริวาสชดใช้ตามจำนวนวันที่ปิดบังไว้ จึงจะมีสิทธิ์ขอประพฤติมานัตต่อไป",
    "reference": "วินัยมุข เล่ม ๓ ปริวาสขันธกะ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-12",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "'มานัต' คือการประพฤติวัตรข่มใจเพื่อล้างมลทินสังฆาทิเสส มีกำหนดระยะเวลากี่ราตรี?",
    "options": [
      "๓ ราตรี",
      "๖ ราตรี (๖ คืนเต็ม)",
      "๑๐ ราตรี",
      "๑ เดือน"
    ],
    "correctIndex": 1,
    "explanation": "มานัต มีกำหนด ๖ ราตรี โดยภิกษุต้องประพฤติวัตรรับใช้และบอกอาบัติต่อสงฆ์ทุกรูปที่เข้ามาในอารามจนครบกำหนด",
    "reference": "วินัยมุข เล่ม ๓ มานัตขันธกะ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-13",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "'อุปสมบทกรรม' ในปัจจันตชนบท (ดินแดนห่างไกลนอกมัชฌิมประเทศ) กำหนดให้มีสงฆ์ประชุมอย่างน้อยกี่รูป?",
    "options": [
      "อย่างน้อย ๕ รูป (พระวินัยธร ๑ รูป)",
      "อย่างน้อย ๑๐ รูป",
      "อย่างน้อย ๒๐ รูป",
      "อย่างน้อย ๔ รูป"
    ],
    "correctIndex": 0,
    "explanation": "ในมัชฌิมประเทศต้องใช้สงฆ์ ๑๐ รูปขึ้นไป ส่วนในปัจจันตชนบท (แดนไกล) พระพุทธองค์ทรงผ่อนผันให้ใช้คณะสงฆ์อย่างน้อย ๕ รูป",
    "reference": "วินัยมุข เล่ม ๓ อุปสมบทในปัจจันตชนบท",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-14",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "'กฐินทาน' มีอานิสงส์แก่พระภิกษุผู้ได้กรานกฐินกี่ประการ และขยายเวลาได้นานเท่าใด?",
    "options": [
      "อานิสงส์ ๕ ประการ และขยายเวลาอานิสงส์ไปได้ ๕ เดือน (จนถึงวันเพ็ญเดือน ๔)",
      "อานิสงส์ ๓ ประการ นาน ๑ เดือน",
      "อานิสงส์ ๑๐ ประการ นาน ๑ ปี",
      "อานิสงส์ ๔ ประการ ตลอดพรรษา"
    ],
    "correctIndex": 0,
    "explanation": "ภิกษุผู้กรานกฐินถูกต้องได้รับอานิสงส์ ๕ ประการ เช่น เที่ยวไปไม่ต้องบอกลา, ไม่ต้องถือไตรจีวรครบ ฯลฯ และขยายเวลาถึงวันเพ็ญเดือน ๔",
    "reference": "วินัยมุข เล่ม ๓ กฐินขันธกะ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-15",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "ผ้าที่นำมาทอดกฐิน ต้องเป็นผ้าชนิดใดตามพระวินัย?",
    "options": [
      "ผ้าขาวใหม่ ผ้าเปลือกไม้ ผ้าบังสุกุล หรือผ้าที่เขาถวายภายในกำหนด (ผ้าผืนใดผืนหนึ่งในไตรจีวร)",
      "ต้องเป็นผ้าไหมทองคำเท่านั้น",
      "ต้องเป็นผ้าเก่าเท่านั้น",
      "ต้องเป็นผ้าที่เย็บเสร็จแล้วเท่านั้น"
    ],
    "correctIndex": 0,
    "explanation": "ผ้ากฐินต้องเป็นผ้าใหม่ หรือผ้าเทียมใหม่ หรือผ้าบังสุกุล ที่มีขนาดพอตัดเย็บทำเป็นสบง จีวร หรือสังฆาฏิผืนใดผืนหนึ่งได้สำเร็จในวันนั้น",
    "reference": "วินัยมุข เล่ม ๓ กฐินขันธกะ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-16",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "'ปวารณากรรม' ในวันออกพรรษา พระภิกษุทำพิธีกล่าวเปิดโอกาสให้ทำสิ่งใด?",
    "options": [
      "กล่าวคำเปิดโอกาสให้ภิกษุอื่นว่ากล่าวตักเตือนตนได้ด้วยความเมตตา หากเห็น ได้ยิน หรือสงสัยในความประพฤติ",
      "กล่าวคำลาบวช",
      "กล่าวคำแบ่งปันลาภสักการะ",
      "กล่าวคำขอพร"
    ],
    "correctIndex": 0,
    "explanation": "ปวารณา แปลว่า การยินยอมเปิดโอกาสให้เพื่อนพรหมจารีตักเตือนชี้ขุมทรัพย์ข้อบกพร่องของตนได้ เพื่อความบริสุทธิ์ของสงฆ์",
    "reference": "วินัยมุข เล่ม ๓ ปวารณาขันธกะ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-17",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "'สัตตาหกรณียะ' คือข้อยกเว้นให้ภิกษุจำพรรษาเดินทางไปค้างแรมนอกวัดได้ไม่เกินกี่วัน?",
    "options": [
      "ไม่เกิน ๓ วัน",
      "ไม่เกิน ๗ วัน (๗ ราตรี)",
      "ไม่เกิน ๑๕ วัน",
      "ไม่เกิน ๑ เดือน"
    ],
    "correctIndex": 1,
    "explanation": "สัตตาหกรณียะ อนุญาตให้ภิกษุเดินทางไปค้างแรมด้วยเหตุจำเป็น เช่น พยาบาลพ่อแม่/พระอุปัชฌาย์ หรือระงับสงฆ์แตกแยก ได้ไม่เกิน ๗ วันโดยไม่ขาดพรรษา",
    "reference": "วินัยมุข เล่ม ๓ วัสสูปนายิกาขันธกะ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-18",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "'อุปสมบท' ในพระพุทธศาสนามีวิวัฒนาการกี่วิธี ข้อใดคือวิธีในปัจจุบัน?",
    "options": [
      "๓ วิธีในประวัติศาสตร์ ปัจจุบันใช้วิธี 'ญัตติจตุตถกัมมอุปสัมปทา' โดยสงฆ์",
      "๒ วิธี ปัจจุบันใช้เอหิภิกขุ",
      "๑ วิธีเท่านั้น",
      "๔ วิธี ปัจจุบันใช้รับศีล ๑๐"
    ],
    "correctIndex": 0,
    "explanation": "วิธีบวชมี ๑. เอหิภิกขุ (พระพุทธเจ้าบวชให้) ๒. ติสรณคมน์ (รับไตรสรณคมน์) ๓. ญัตติจตุตถกรรม (สงฆ์ ๕-๑๐ รูปสวดบวชให้ ซึ่งเป็นวิธีเดียวที่ใช้ในปัจจุบัน)",
    "reference": "วินัยมุข เล่ม ๓ อุปสัมปทาวิธี",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-19",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "'วัตร ๑๔' ในขันธกะของพระวินัยมุข ข้อใดคือ 'อาคันตุกวัตร'?",
    "options": [
      "ข้อปฏิบัติสำหรับภิกษุผู้เป็นอาคันตุกะเดินทางมาถึงวัดอื่น",
      "ข้อปฏิบัติสำหรับเจ้าบ้าน",
      "ข้อปฏิบัติเวลาฉันข้าว",
      "ข้อปฏิบัติเวลาใช้ห้องน้ำ"
    ],
    "correctIndex": 0,
    "explanation": "อาคันตุกวัตร คือมารยาทและข้อปฏิบัติที่ภิกษุผู้เดินทางมาจากวัดอื่นพึงกระทำเมื่อย่างเข้าสู่อารามของผู้อื่น",
    "reference": "วินัยมุข เล่ม ๓ วัตตกถา",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-20",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "'คามิกวัตร' ตรงข้ามกับอาคันตุกวัตร หมายถึงอะไร?",
    "options": [
      "ข้อปฏิบัติของภิกษุเจ้าถิ่นที่จะเตรียมตัวออกเดินทางไปยังถิ่นอื่น",
      "ข้อปฏิบัติของชาวบ้าน",
      "ข้อปฏิบัติเวลาบิณฑบาตในหมู่บ้าน",
      "ข้อปฏิบัติเมื่อไปตลาด"
    ],
    "correctIndex": 0,
    "explanation": "คามิกวัตร คือข้อปฏิบัติของภิกษุผู้เตรียมจะเดินทางออกจากวัด พึงเก็บงำเสนาสนะและมอบหมายหน้าที่ให้เรียบร้อย",
    "reference": "วินัยมุข เล่ม ๓ วัตตกถา",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-21",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "'อุปัชฌายวัตร' และ 'สัทธิวิหาริกวัตร' คือข้อปฏิบัติระหว่างใครกับใคร?",
    "options": [
      "ข้อปฏิบัติต่างตอบแทนระหว่างพระอุปัชฌาย์กับลูกศิษย์ที่ตนบวชให้",
      "ข้อปฏิบัติระหว่างเจ้าอาวาสกับไวยาวัจกร",
      "ข้อปฏิบัติระหว่างพระกับโยมอุปัฏฐาก",
      "ข้อปฏิบัติระหว่างพระสงฆ์กับกษัตริย์"
    ],
    "correctIndex": 0,
    "explanation": "อุปัชฌายวัตรคือหน้าที่ที่ศิษย์พึงปรนนิบัติอุปัชฌาย์ สัทธิวิหาริกวัตรคือหน้าที่ที่อุปัชฌาย์พึงอบรมดูแลศิษย์",
    "reference": "วินัยมุข เล่ม ๓ วัตตกถา",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-22",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "'วัจจกุฎีวัตร' ในหมวดวัตร ๑๔ หมายถึงข้อปฏิบัติเกี่ยวกับเรื่องใด?",
    "options": [
      "มารยาทและระเบียบการใช้ห้องสุขา (ถาน/เวจกุฎี)",
      "การรักษาความสะอาดโรงฉัน",
      "การปัดกวาดลานพระเจดีย์",
      "การสรงน้ำ"
    ],
    "correctIndex": 0,
    "explanation": "วัจจกุฎีวัตร คือข้อปฏิบัติและมารยาทในการเข้าใช้และรักษาความสะอาดห้องน้ำห้องสุขาของพระสงฆ์",
    "reference": "วินัยมุข เล่ม ๓ วัตตกถา",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-23",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "'เสนาสนะ' ในทางพระวินัยมุข หมายถึงสิ่งใด?",
    "options": [
      "ที่อยู่อาศัย ที่นอน ที่นั่ง เช่น กุฏิ ศาลา เตียง ตั่ง ฟูก หมอน",
      "เครื่องนุ่งห่มจีวร",
      "อาหารบิณฑบาต",
      "ยารักษาโรค"
    ],
    "correctIndex": 0,
    "explanation": "เสนาสนะ หมายถึงที่นอนและที่นั่ง กุฏิ เสื่อ เตียง ตั่ง และสถานที่พักอาศัยของพระสงฆ์",
    "reference": "วินัยมุข เล่ม ๓ เสนาสนขันธกะ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-24",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "'ครุภัณฑ์' ของสงฆ์ (ของหนักส่วนรวมที่ห้ามแจกจ่าย ห้ามแบ่ง ห้ามขาย) ตัวอย่างเช่นสิ่งใด?",
    "options": [
      "ที่ดินวัด กุฏิ วิหาร โบสถ์ ไม้ ปูน เครื่องโลหะหนัก",
      "อาหารบิณฑบาต",
      "ยาหยอดตา",
      "ดอกไม้ธูปเทียน"
    ],
    "correctIndex": 0,
    "explanation": "ครุภัณฑ์ คือสมบัติส่วนกลางขนาดใหญ่ของสงฆ์ เช่น ที่ดิน กุฏิ ศาลา ห้ามภิกษุแจกจ่ายหรือขายเด็ดขาด",
    "reference": "วินัยมุข เล่ม ๓ เสนาสนขันธกะ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-25",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "'ลหุภัณฑ์' ของสงฆ์ (ของเบาที่สงฆ์แจกจ่ายแก่ภิกษุได้) คือสิ่งใด?",
    "options": [
      "ผ้าจีวร สบง บาตร มีดโกน เข็มเย็บผ้า ยารักษาโรค อาหาร",
      "ที่ดินวัด",
      "กุฏิสงฆ์",
      "พระอุโบสถ"
    ],
    "correctIndex": 0,
    "explanation": "ลหุภัณฑ์ คือบริขารและสิ่งของเล็กน้อยที่สามารถนำมาแจกจ่ายแก่ภิกษุผู้จำพรรษาหรือภิกษุไข้ได้ตามธรรมวินัย",
    "reference": "วินัยมุข เล่ม ๓ เภสัชชขันธกะและเสนาสนะ",
    "sourceName": "กองธรรมสนามหลวง",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  }
];
