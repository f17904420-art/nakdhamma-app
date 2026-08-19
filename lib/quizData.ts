export interface QuizQuestion {
  id: string;
  grade: string;
  subject: string;
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
    "id": "tri-d-001",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "สติและสัมปชัญญะ จัดเป็นธรรมประเภทใดในนวโกวาท?",
    "options": [
      "ธรรมมีอุปการะมาก ๒",
      "ธรรมคุ้มครองโลก ๒",
      "ธรรมทำให้งาม ๒",
      "โลกบาลธรรม ๒"
    ],
    "correctIndex": 0,
    "explanation": "สติ (ความระลึกได้) และสัมปชัญญะ (ความรู้ตัว) เป็นธรรมมีอุปการะมาก ช่วยเกื้อกูลกิจการทุกประการ",
    "reference": "ธรรมวิภาค นวโกวาท หมวด ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-002",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "หิริและโอตตัปปะ จัดเป็นธรรมประเภทใด?",
    "options": [
      "ธรรมคุ้มครองโลก (โลกบาลธรรม ๒)",
      "ธรรมมีอุปการะมาก",
      "ธรรมอันทำให้งาม",
      "อารักขธรรม"
    ],
    "correctIndex": 0,
    "explanation": "หิริ (ความละอายบาป) และโอตตัปปะ (ความเกรงกลัวบาป) คุ้มครองโลกให้สงบสุข",
    "reference": "ธรรมวิภาค นวโกวาท หมวด ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-003",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "ขันติและโสรัจจะ จัดเป็นธรรมประเภทใด?",
    "options": [
      "ธรรมอันทำให้งาม ๒",
      "ธรรมเครื่องเจริญ",
      "ธรรมเครื่องนำทาง",
      "โลกธรรม ๒"
    ],
    "correctIndex": 0,
    "explanation": "ขันติ (ความอดทน) และโสรัจจะ (ความสงบเสงี่ยม) ทำให้ผู้ประพฤติงดงามทั้งกายและใจ",
    "reference": "ธรรมวิภาค นวโกวาท หมวด ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-004",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "บุคคลหาได้ยาก ๒ ประการ (ทุลลภบุคคล) ได้แก่ใครบ้าง?",
    "options": [
      "บุพการี และ กตัญญูกตเวที",
      "พระราชา และ พระอรหันต์",
      "บิดา และ มารดา",
      "มิตรแท้ และ มิตรเทียม"
    ],
    "correctIndex": 0,
    "explanation": "บุพการี (ผู้อุปการะก่อน) และ กตัญญูกตเวที (ผู้รู้คุณและตอบแทน) เป็นบุคคลหาได้ยากยิ่ง",
    "reference": "ธรรมวิภาค นวโกวาท หมวด ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-005",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "กุศลมูล ๓ (รากเหง้าแห่งความดี) มีอะไรบ้าง?",
    "options": [
      "อโลภะ อโทสะ อโมหะ",
      "โลภะ โทสะ โมหะ",
      "ศรัทธา วิริยะ ปัญญา",
      "ศีล สมาธิ ปัญญา"
    ],
    "correctIndex": 0,
    "explanation": "กุศลมูล ๓ คือ อโลภะ (ไม่โลภ), อโทสะ (ไม่โกรธ), อโมหะ (ไม่หลง/มีปัญญา)",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-006",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "อกุศลมูล ๓ (รากเหง้าแห่งความชั่ว) มีอะไรบ้าง?",
    "options": [
      "โลภะ โทสะ โมหะ",
      "ราคะ ตัณหา อุปาทาน",
      "กาม ภพ อวิชชา",
      "พยาบาท อภิชฌา มิจฉาทิฏฐิ"
    ],
    "correctIndex": 0,
    "explanation": "อกุศลมูล ๓ คือ โลภะ โทสะ โมหะ เป็นต้นตอแห่งบาปธรรมทั้งปวง",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-007",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "สุจริต ๓ หมายถึงความประพฤติดีทางใดบ้าง?",
    "options": [
      "กายสุจริต วจีสุจริต มโนสุจริต",
      "ทาน ศีล ภาวนา",
      "กาย วาจา ทรัพย์",
      "ตา หู ใจ"
    ],
    "correctIndex": 0,
    "explanation": "สุจริต ๓ คือ ความประพฤติดีทางกาย วาจา และใจ",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-008",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "ทุจริต ๓ หมายถึงความประพฤติชั่วทางใดบ้าง?",
    "options": [
      "กายทุจริต วจีทุจริต มโนทุจริต",
      "โลภ โกรธ หลง",
      "ราคะ โทสะ โมหะ",
      "ฆ่าสัตว์ ลักทรัพย์ พูดเท็จ"
    ],
    "correctIndex": 0,
    "explanation": "ทุจริต ๓ คือ ความชั่วเสียหายทางกาย วาจา และใจ",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-009",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "ธรรมาธิปไตย ในหลักอธิปไตย ๓ หมายถึงอะไร?",
    "options": [
      "การถือธรรม ความถูกต้อง และความจริงเป็นใหญ่",
      "การถือตนเองเป็นใหญ่",
      "การถือเสียงมหาชนเป็นใหญ่",
      "การถืออำนาจเป็นใหญ่"
    ],
    "correctIndex": 0,
    "explanation": "ธรรมาธิปไตย คือ การยึดหลักธรรมและความถูกต้องเป็นเกณฑ์ตัดสินสูงสุด",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-010",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "อิทธิบาท ๔ ข้อใดหมายถึงความพอใจรักใคร่ในงาน?",
    "options": [
      "ฉันทะ",
      "วิริยะ",
      "จิตตะ",
      "วิมังสา"
    ],
    "correctIndex": 0,
    "explanation": "ฉันทะ คือ ความรักใคร่พึงพอใจในสิ่งที่ทำ",
    "reference": "ธรรมวิภาค อิทธิบาท ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-011",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "พรหมวิหาร ๔ มีอะไรบ้าง?",
    "options": [
      "เมตตา กรุณา มุทิตา อุเบกขา",
      "ทาน ศีล ภาวนา สมาธิ",
      "สัจจะ ทมะ ขันติ จาคะ",
      "ฉันทะ วิริยะ จิตตะ วิมังสา"
    ],
    "correctIndex": 0,
    "explanation": "พรหมวิหาร ๔ คือ เมตตา (ปรารถนาให้สุข) กรุณา (คิดช่วยให้พ้นทุกข์) มุทิตา (ยินดีเมื่อได้ดี) อุเบกขา (วางเฉยเป็นกลาง)",
    "reference": "ธรรมวิภาค พรหมวิหาร ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-012",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "ฆราวาสธรรม ๔ ประกอบด้วยอะไรบ้าง?",
    "options": [
      "สัจจะ ทมะ ขันติ จาคะ",
      "ทาน ศีล สมาธิ ปัญญา",
      "เมตตา กรุณา มุทิตา อุเบกขา",
      "อโลภะ อโทสะ อโมหะ ขันติ"
    ],
    "correctIndex": 0,
    "explanation": "ฆราวาสธรรม ๔: สัจจะ (ซื่อสัตย์) ทมะ (ข่มใจ) ขันติ (อดทน) จาคะ (สละให้ปัน)",
    "reference": "ธรรมวิภาค ฆราวาสธรรม ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-013",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "สังคหวัตถุ ๔ (ธรรมเครื่องยึดเหนี่ยวใจคน) มีอะไรบ้าง?",
    "options": [
      "ทาน ปิยวาจา อัตถจริยา สมานัตตตา",
      "สัจจะ ทมะ ขันติ จาคะ",
      "ศีล สมาธิ ปัญญา วิมุตติ",
      "ฉันทะ วิริยะ จิตตะ วิมังสา"
    ],
    "correctIndex": 0,
    "explanation": "สังคหวัตถุ ๔: ทาน (ให้ปัน) ปิยวาจา (พูดจาดี) อัตถจริยา (บำเพ็ญประโยชน์) สมานัตตตา (เสมอต้นเสมอปลาย)",
    "reference": "ธรรมวิภาค สังคหวัตถุ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-014",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "ทิฏฐธัมมิกัตถประโยชน์ ๔ (หัวใจเศรษฐี: อุ อา กะ สะ) 'อุ' คืออะไร?",
    "options": [
      "อุฏฐานสัมปทา (ขยันหาทรัพย์โดยสุจริต)",
      "อารักขสัมปทา",
      "กัลยาณมิตตตา",
      "สมชีวิตา"
    ],
    "correctIndex": 0,
    "explanation": "อุฏฐานสัมปทา คือ ความขยันขันแข็งในการประกอบสัมมาอาชีพ",
    "reference": "ธรรมวิภาค ทิฏฐธัมมิกัตถะ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-015",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "เบญจศีล (ศีล ๕) ข้อที่ ๒ งดเว้นจากอะไร?",
    "options": [
      "อทินนาทาน (ลักทรัพย์)",
      "ปาณาติบาต (ฆ่าสัตว์)",
      "กาเมสุมิจฉาจาร",
      "มุสาวาท"
    ],
    "correctIndex": 0,
    "explanation": "ศีลข้อ ๒ คืองดเว้นจากการลักขโมย เบียดบังทรัพย์ผู้อื่น",
    "reference": "ธรรมวิภาค ศีล ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-016",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "เบญจธรรม ๕ ธรรมคู่ปรับกับศีลข้อ ๑ (ไม่ฆ่าสัตว์) คืออะไร?",
    "options": [
      "เมตตากรุณา",
      "สัมมาอาชีวะ",
      "กามสังวร",
      "สัจจะ"
    ],
    "correctIndex": 0,
    "explanation": "เมตตากรุณาเป็นธรรมคู่กับศีลข้อ ๑ เพื่อให้มีความรักใคร่เอื้ออาทรต่อสรรพสัตว์",
    "reference": "ธรรมวิภาค เบญจธรรม ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-017",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "ขันธ์ ๕ กองแห่งชีวิต ได้แก่อะไรบ้าง?",
    "options": [
      "รูป เวทนา สัญญา สังขาร วิญญาณ",
      "ตา หู จมูก ลิ้น กาย",
      "ศีล สมาธิ ปัญญา วิมุตติ วิมุตติญาณ",
      "ดิน น้ำ ลม ไฟ อากาศ"
    ],
    "correctIndex": 0,
    "explanation": "ขันธ์ ๕ ประกอบด้วย รูป (กาย) เวทนา (ความรู้สึก) สัญญา (ความจำ) สังขาร (การปรุงแต่งจิต) วิญญาณ (การรับรู้)",
    "reference": "ธรรมวิภาค ขันธ์ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-018",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "นิวรณ์ ๕ ข้อใดหมายถึงความหดหู่ ท้อแท้ ง่วงเหงาหาวนอน?",
    "options": [
      "ถีนมิทธะ",
      "กามฉันทะ",
      "พยาบาท",
      "อุทธัจจกุกกุจจะ"
    ],
    "correctIndex": 0,
    "explanation": "ถีนมิทธะ คือ ความหดหู่เซื่องซึมของจิตใจ",
    "reference": "ธรรมวิภาค นิวรณ์ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-019",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "อบายมุข ๖ ข้อแรกคือข้อใด?",
    "options": [
      "การดื่มน้ำเมา",
      "การเที่ยวกลางคืน",
      "การดูการละเล่น",
      "การเล่นการพนัน"
    ],
    "correctIndex": 0,
    "explanation": "อบายมุขข้อแรกคือ การดื่มสุราและของมึนเมา",
    "reference": "ธรรมวิภาค อบายมุข ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-020",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "ทิศ ๖ ทิศเบื้องหน้า (ปุรัตถิมทิศ) หมายถึงใคร?",
    "options": [
      "บิดามารดา",
      "ครูอาจารย์",
      "บุตรภรรยา",
      "มิตรสหาย"
    ],
    "correctIndex": 0,
    "explanation": "ทิศเบื้องหน้าคือบิดามารดา ผู้มีพระคุณดูแลเรามาตั้งแต่ต้น",
    "reference": "ธรรมวิภาค ทิศ ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-021",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "สัปปุริสธรรม ๗ ข้อใดหมายถึงการเป็นผู้รู้จักเหตุ?",
    "options": [
      "ธัมมัญญุตา",
      "อัตถัญญุตา",
      "อัตตัญญุตา",
      "มัตตัญญุตา"
    ],
    "correctIndex": 0,
    "explanation": "ธัมมัญญุตา คือ ความเป็นผู้รู้จักเหตุ",
    "reference": "ธรรมวิภาค สัปปุริสธรรม ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-022",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "อริยทรัพย์ ๗ ข้อใดมิใช่ ๑ ในอริยทรัพย์ ๗?",
    "options": [
      "ธนทรัพย์ (เงินทองของนอกกาย)",
      "ศรัทธา",
      "ศีล",
      "ปัญญา"
    ],
    "correctIndex": 0,
    "explanation": "อริยทรัพย์ ๗ เป็นทรัพย์ภายใน: ศรัทธา ศีล หิริ โอตตัปปะ พาหุสัจจะ จาคะ ปัญญา",
    "reference": "ธรรมวิภาค อริยทรัพย์ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-023",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "โลกธรรม ๘ ฝ่ายอิฏฐารมณ์ (ที่น่าปรารถนา) ได้แก่อะไรบ้าง?",
    "options": [
      "ได้ลาภ ได้ยศ สรรเสริญ สุข",
      "เสื่อมลาภ เสื่อมยศ นินทา ทุกข์",
      "บุญ กุศล บารมี สวรรค์",
      "กาย วาจา ใจ ธรรม"
    ],
    "correctIndex": 0,
    "explanation": "โลกธรรมฝ่ายดี ๔ คือ ได้ลาภ ได้ยศ ได้สรรเสริญ และมีความสุข",
    "reference": "ธรรมวิภาค โลกธรรม ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-024",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "บุญกิริยาวัตถุ ๑๐ ข้อใดคือบุญสำเร็จด้วยการอ่อนน้อมถ่อมตน?",
    "options": [
      "อปจายนมัย",
      "ทานมัย",
      "สีลมัย",
      "ภาวนามัย"
    ],
    "correctIndex": 0,
    "explanation": "อปจายนมัย คือ บุญจากการประพฤติอ่อนน้อมถ่อมตน",
    "reference": "ธรรมวิภาค บุญกิริยาวัตถุ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-025",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "ทศพิธราชธรรม ๑๐ ข้อใดหมายถึงความซื่อตรง?",
    "options": [
      "อาชชวะ",
      "มัททวะ",
      "ตปะ",
      "อักโกธะ"
    ],
    "correctIndex": 0,
    "explanation": "อาชชวะ คือ ความซื่อตรงสุจริต",
    "reference": "ธรรมวิภาค ทศพิธราชธรรม ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-026",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 2 ข้อ 26] สติและสัมปชัญญะ จัดเป็นธรรมประเภทใดในนวโกวาท?",
    "options": [
      "ธรรมมีอุปการะมาก ๒",
      "ธรรมคุ้มครองโลก ๒",
      "ธรรมทำให้งาม ๒",
      "โลกบาลธรรม ๒"
    ],
    "correctIndex": 0,
    "explanation": "สติ (ความระลึกได้) และสัมปชัญญะ (ความรู้ตัว) เป็นธรรมมีอุปการะมาก ช่วยเกื้อกูลกิจการทุกประการ",
    "reference": "ธรรมวิภาค นวโกวาท หมวด ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-027",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 2 ข้อ 27] หิริและโอตตัปปะ จัดเป็นธรรมประเภทใด?",
    "options": [
      "ธรรมคุ้มครองโลก (โลกบาลธรรม ๒)",
      "ธรรมมีอุปการะมาก",
      "ธรรมอันทำให้งาม",
      "อารักขธรรม"
    ],
    "correctIndex": 0,
    "explanation": "หิริ (ความละอายบาป) และโอตตัปปะ (ความเกรงกลัวบาป) คุ้มครองโลกให้สงบสุข",
    "reference": "ธรรมวิภาค นวโกวาท หมวด ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-028",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 2 ข้อ 28] ขันติและโสรัจจะ จัดเป็นธรรมประเภทใด?",
    "options": [
      "ธรรมอันทำให้งาม ๒",
      "ธรรมเครื่องเจริญ",
      "ธรรมเครื่องนำทาง",
      "โลกธรรม ๒"
    ],
    "correctIndex": 0,
    "explanation": "ขันติ (ความอดทน) และโสรัจจะ (ความสงบเสงี่ยม) ทำให้ผู้ประพฤติงดงามทั้งกายและใจ",
    "reference": "ธรรมวิภาค นวโกวาท หมวด ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-029",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 2 ข้อ 29] บุคคลหาได้ยาก ๒ ประการ (ทุลลภบุคคล) ได้แก่ใครบ้าง?",
    "options": [
      "บุพการี และ กตัญญูกตเวที",
      "พระราชา และ พระอรหันต์",
      "บิดา และ มารดา",
      "มิตรแท้ และ มิตรเทียม"
    ],
    "correctIndex": 0,
    "explanation": "บุพการี (ผู้อุปการะก่อน) และ กตัญญูกตเวที (ผู้รู้คุณและตอบแทน) เป็นบุคคลหาได้ยากยิ่ง",
    "reference": "ธรรมวิภาค นวโกวาท หมวด ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-030",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 2 ข้อ 30] กุศลมูล ๓ (รากเหง้าแห่งความดี) มีอะไรบ้าง?",
    "options": [
      "อโลภะ อโทสะ อโมหะ",
      "โลภะ โทสะ โมหะ",
      "ศรัทธา วิริยะ ปัญญา",
      "ศีล สมาธิ ปัญญา"
    ],
    "correctIndex": 0,
    "explanation": "กุศลมูล ๓ คือ อโลภะ (ไม่โลภ), อโทสะ (ไม่โกรธ), อโมหะ (ไม่หลง/มีปัญญา)",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-031",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 2 ข้อ 31] อกุศลมูล ๓ (รากเหง้าแห่งความชั่ว) มีอะไรบ้าง?",
    "options": [
      "โลภะ โทสะ โมหะ",
      "ราคะ ตัณหา อุปาทาน",
      "กาม ภพ อวิชชา",
      "พยาบาท อภิชฌา มิจฉาทิฏฐิ"
    ],
    "correctIndex": 0,
    "explanation": "อกุศลมูล ๓ คือ โลภะ โทสะ โมหะ เป็นต้นตอแห่งบาปธรรมทั้งปวง",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-032",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 2 ข้อ 32] สุจริต ๓ หมายถึงความประพฤติดีทางใดบ้าง?",
    "options": [
      "กายสุจริต วจีสุจริต มโนสุจริต",
      "ทาน ศีล ภาวนา",
      "กาย วาจา ทรัพย์",
      "ตา หู ใจ"
    ],
    "correctIndex": 0,
    "explanation": "สุจริต ๓ คือ ความประพฤติดีทางกาย วาจา และใจ",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-033",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 2 ข้อ 33] ทุจริต ๓ หมายถึงความประพฤติชั่วทางใดบ้าง?",
    "options": [
      "กายทุจริต วจีทุจริต มโนทุจริต",
      "โลภ โกรธ หลง",
      "ราคะ โทสะ โมหะ",
      "ฆ่าสัตว์ ลักทรัพย์ พูดเท็จ"
    ],
    "correctIndex": 0,
    "explanation": "ทุจริต ๓ คือ ความชั่วเสียหายทางกาย วาจา และใจ",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-034",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 2 ข้อ 34] ธรรมาธิปไตย ในหลักอธิปไตย ๓ หมายถึงอะไร?",
    "options": [
      "การถือธรรม ความถูกต้อง และความจริงเป็นใหญ่",
      "การถือตนเองเป็นใหญ่",
      "การถือเสียงมหาชนเป็นใหญ่",
      "การถืออำนาจเป็นใหญ่"
    ],
    "correctIndex": 0,
    "explanation": "ธรรมาธิปไตย คือ การยึดหลักธรรมและความถูกต้องเป็นเกณฑ์ตัดสินสูงสุด",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-035",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 2 ข้อ 35] อิทธิบาท ๔ ข้อใดหมายถึงความพอใจรักใคร่ในงาน?",
    "options": [
      "ฉันทะ",
      "วิริยะ",
      "จิตตะ",
      "วิมังสา"
    ],
    "correctIndex": 0,
    "explanation": "ฉันทะ คือ ความรักใคร่พึงพอใจในสิ่งที่ทำ",
    "reference": "ธรรมวิภาค อิทธิบาท ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-036",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 2 ข้อ 36] พรหมวิหาร ๔ มีอะไรบ้าง?",
    "options": [
      "เมตตา กรุณา มุทิตา อุเบกขา",
      "ทาน ศีล ภาวนา สมาธิ",
      "สัจจะ ทมะ ขันติ จาคะ",
      "ฉันทะ วิริยะ จิตตะ วิมังสา"
    ],
    "correctIndex": 0,
    "explanation": "พรหมวิหาร ๔ คือ เมตตา (ปรารถนาให้สุข) กรุณา (คิดช่วยให้พ้นทุกข์) มุทิตา (ยินดีเมื่อได้ดี) อุเบกขา (วางเฉยเป็นกลาง)",
    "reference": "ธรรมวิภาค พรหมวิหาร ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-037",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 2 ข้อ 37] ฆราวาสธรรม ๔ ประกอบด้วยอะไรบ้าง?",
    "options": [
      "สัจจะ ทมะ ขันติ จาคะ",
      "ทาน ศีล สมาธิ ปัญญา",
      "เมตตา กรุณา มุทิตา อุเบกขา",
      "อโลภะ อโทสะ อโมหะ ขันติ"
    ],
    "correctIndex": 0,
    "explanation": "ฆราวาสธรรม ๔: สัจจะ (ซื่อสัตย์) ทมะ (ข่มใจ) ขันติ (อดทน) จาคะ (สละให้ปัน)",
    "reference": "ธรรมวิภาค ฆราวาสธรรม ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-038",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 2 ข้อ 38] สังคหวัตถุ ๔ (ธรรมเครื่องยึดเหนี่ยวใจคน) มีอะไรบ้าง?",
    "options": [
      "ทาน ปิยวาจา อัตถจริยา สมานัตตตา",
      "สัจจะ ทมะ ขันติ จาคะ",
      "ศีล สมาธิ ปัญญา วิมุตติ",
      "ฉันทะ วิริยะ จิตตะ วิมังสา"
    ],
    "correctIndex": 0,
    "explanation": "สังคหวัตถุ ๔: ทาน (ให้ปัน) ปิยวาจา (พูดจาดี) อัตถจริยา (บำเพ็ญประโยชน์) สมานัตตตา (เสมอต้นเสมอปลาย)",
    "reference": "ธรรมวิภาค สังคหวัตถุ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-039",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 2 ข้อ 39] ทิฏฐธัมมิกัตถประโยชน์ ๔ (หัวใจเศรษฐี: อุ อา กะ สะ) 'อุ' คืออะไร?",
    "options": [
      "อุฏฐานสัมปทา (ขยันหาทรัพย์โดยสุจริต)",
      "อารักขสัมปทา",
      "กัลยาณมิตตตา",
      "สมชีวิตา"
    ],
    "correctIndex": 0,
    "explanation": "อุฏฐานสัมปทา คือ ความขยันขันแข็งในการประกอบสัมมาอาชีพ",
    "reference": "ธรรมวิภาค ทิฏฐธัมมิกัตถะ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-040",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 2 ข้อ 40] เบญจศีล (ศีล ๕) ข้อที่ ๒ งดเว้นจากอะไร?",
    "options": [
      "อทินนาทาน (ลักทรัพย์)",
      "ปาณาติบาต (ฆ่าสัตว์)",
      "กาเมสุมิจฉาจาร",
      "มุสาวาท"
    ],
    "correctIndex": 0,
    "explanation": "ศีลข้อ ๒ คืองดเว้นจากการลักขโมย เบียดบังทรัพย์ผู้อื่น",
    "reference": "ธรรมวิภาค ศีล ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-041",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 2 ข้อ 41] เบญจธรรม ๕ ธรรมคู่ปรับกับศีลข้อ ๑ (ไม่ฆ่าสัตว์) คืออะไร?",
    "options": [
      "เมตตากรุณา",
      "สัมมาอาชีวะ",
      "กามสังวร",
      "สัจจะ"
    ],
    "correctIndex": 0,
    "explanation": "เมตตากรุณาเป็นธรรมคู่กับศีลข้อ ๑ เพื่อให้มีความรักใคร่เอื้ออาทรต่อสรรพสัตว์",
    "reference": "ธรรมวิภาค เบญจธรรม ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-042",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 2 ข้อ 42] ขันธ์ ๕ กองแห่งชีวิต ได้แก่อะไรบ้าง?",
    "options": [
      "รูป เวทนา สัญญา สังขาร วิญญาณ",
      "ตา หู จมูก ลิ้น กาย",
      "ศีล สมาธิ ปัญญา วิมุตติ วิมุตติญาณ",
      "ดิน น้ำ ลม ไฟ อากาศ"
    ],
    "correctIndex": 0,
    "explanation": "ขันธ์ ๕ ประกอบด้วย รูป (กาย) เวทนา (ความรู้สึก) สัญญา (ความจำ) สังขาร (การปรุงแต่งจิต) วิญญาณ (การรับรู้)",
    "reference": "ธรรมวิภาค ขันธ์ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-043",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 2 ข้อ 43] นิวรณ์ ๕ ข้อใดหมายถึงความหดหู่ ท้อแท้ ง่วงเหงาหาวนอน?",
    "options": [
      "ถีนมิทธะ",
      "กามฉันทะ",
      "พยาบาท",
      "อุทธัจจกุกกุจจะ"
    ],
    "correctIndex": 0,
    "explanation": "ถีนมิทธะ คือ ความหดหู่เซื่องซึมของจิตใจ",
    "reference": "ธรรมวิภาค นิวรณ์ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-044",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 2 ข้อ 44] อบายมุข ๖ ข้อแรกคือข้อใด?",
    "options": [
      "การดื่มน้ำเมา",
      "การเที่ยวกลางคืน",
      "การดูการละเล่น",
      "การเล่นการพนัน"
    ],
    "correctIndex": 0,
    "explanation": "อบายมุขข้อแรกคือ การดื่มสุราและของมึนเมา",
    "reference": "ธรรมวิภาค อบายมุข ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-045",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 2 ข้อ 45] ทิศ ๖ ทิศเบื้องหน้า (ปุรัตถิมทิศ) หมายถึงใคร?",
    "options": [
      "บิดามารดา",
      "ครูอาจารย์",
      "บุตรภรรยา",
      "มิตรสหาย"
    ],
    "correctIndex": 0,
    "explanation": "ทิศเบื้องหน้าคือบิดามารดา ผู้มีพระคุณดูแลเรามาตั้งแต่ต้น",
    "reference": "ธรรมวิภาค ทิศ ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-046",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 2 ข้อ 46] สัปปุริสธรรม ๗ ข้อใดหมายถึงการเป็นผู้รู้จักเหตุ?",
    "options": [
      "ธัมมัญญุตา",
      "อัตถัญญุตา",
      "อัตตัญญุตา",
      "มัตตัญญุตา"
    ],
    "correctIndex": 0,
    "explanation": "ธัมมัญญุตา คือ ความเป็นผู้รู้จักเหตุ",
    "reference": "ธรรมวิภาค สัปปุริสธรรม ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-047",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 2 ข้อ 47] อริยทรัพย์ ๗ ข้อใดมิใช่ ๑ ในอริยทรัพย์ ๗?",
    "options": [
      "ธนทรัพย์ (เงินทองของนอกกาย)",
      "ศรัทธา",
      "ศีล",
      "ปัญญา"
    ],
    "correctIndex": 0,
    "explanation": "อริยทรัพย์ ๗ เป็นทรัพย์ภายใน: ศรัทธา ศีล หิริ โอตตัปปะ พาหุสัจจะ จาคะ ปัญญา",
    "reference": "ธรรมวิภาค อริยทรัพย์ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-048",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 2 ข้อ 48] โลกธรรม ๘ ฝ่ายอิฏฐารมณ์ (ที่น่าปรารถนา) ได้แก่อะไรบ้าง?",
    "options": [
      "ได้ลาภ ได้ยศ สรรเสริญ สุข",
      "เสื่อมลาภ เสื่อมยศ นินทา ทุกข์",
      "บุญ กุศล บารมี สวรรค์",
      "กาย วาจา ใจ ธรรม"
    ],
    "correctIndex": 0,
    "explanation": "โลกธรรมฝ่ายดี ๔ คือ ได้ลาภ ได้ยศ ได้สรรเสริญ และมีความสุข",
    "reference": "ธรรมวิภาค โลกธรรม ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-049",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 2 ข้อ 49] บุญกิริยาวัตถุ ๑๐ ข้อใดคือบุญสำเร็จด้วยการอ่อนน้อมถ่อมตน?",
    "options": [
      "อปจายนมัย",
      "ทานมัย",
      "สีลมัย",
      "ภาวนามัย"
    ],
    "correctIndex": 0,
    "explanation": "อปจายนมัย คือ บุญจากการประพฤติอ่อนน้อมถ่อมตน",
    "reference": "ธรรมวิภาค บุญกิริยาวัตถุ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-050",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 2 ข้อ 50] ทศพิธราชธรรม ๑๐ ข้อใดหมายถึงความซื่อตรง?",
    "options": [
      "อาชชวะ",
      "มัททวะ",
      "ตปะ",
      "อักโกธะ"
    ],
    "correctIndex": 0,
    "explanation": "อาชชวะ คือ ความซื่อตรงสุจริต",
    "reference": "ธรรมวิภาค ทศพิธราชธรรม ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-051",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 3 ข้อ 51] สติและสัมปชัญญะ จัดเป็นธรรมประเภทใดในนวโกวาท?",
    "options": [
      "ธรรมมีอุปการะมาก ๒",
      "ธรรมคุ้มครองโลก ๒",
      "ธรรมทำให้งาม ๒",
      "โลกบาลธรรม ๒"
    ],
    "correctIndex": 0,
    "explanation": "สติ (ความระลึกได้) และสัมปชัญญะ (ความรู้ตัว) เป็นธรรมมีอุปการะมาก ช่วยเกื้อกูลกิจการทุกประการ",
    "reference": "ธรรมวิภาค นวโกวาท หมวด ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-052",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 3 ข้อ 52] หิริและโอตตัปปะ จัดเป็นธรรมประเภทใด?",
    "options": [
      "ธรรมคุ้มครองโลก (โลกบาลธรรม ๒)",
      "ธรรมมีอุปการะมาก",
      "ธรรมอันทำให้งาม",
      "อารักขธรรม"
    ],
    "correctIndex": 0,
    "explanation": "หิริ (ความละอายบาป) และโอตตัปปะ (ความเกรงกลัวบาป) คุ้มครองโลกให้สงบสุข",
    "reference": "ธรรมวิภาค นวโกวาท หมวด ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-053",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 3 ข้อ 53] ขันติและโสรัจจะ จัดเป็นธรรมประเภทใด?",
    "options": [
      "ธรรมอันทำให้งาม ๒",
      "ธรรมเครื่องเจริญ",
      "ธรรมเครื่องนำทาง",
      "โลกธรรม ๒"
    ],
    "correctIndex": 0,
    "explanation": "ขันติ (ความอดทน) และโสรัจจะ (ความสงบเสงี่ยม) ทำให้ผู้ประพฤติงดงามทั้งกายและใจ",
    "reference": "ธรรมวิภาค นวโกวาท หมวด ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-054",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 3 ข้อ 54] บุคคลหาได้ยาก ๒ ประการ (ทุลลภบุคคล) ได้แก่ใครบ้าง?",
    "options": [
      "บุพการี และ กตัญญูกตเวที",
      "พระราชา และ พระอรหันต์",
      "บิดา และ มารดา",
      "มิตรแท้ และ มิตรเทียม"
    ],
    "correctIndex": 0,
    "explanation": "บุพการี (ผู้อุปการะก่อน) และ กตัญญูกตเวที (ผู้รู้คุณและตอบแทน) เป็นบุคคลหาได้ยากยิ่ง",
    "reference": "ธรรมวิภาค นวโกวาท หมวด ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-055",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 3 ข้อ 55] กุศลมูล ๓ (รากเหง้าแห่งความดี) มีอะไรบ้าง?",
    "options": [
      "อโลภะ อโทสะ อโมหะ",
      "โลภะ โทสะ โมหะ",
      "ศรัทธา วิริยะ ปัญญา",
      "ศีล สมาธิ ปัญญา"
    ],
    "correctIndex": 0,
    "explanation": "กุศลมูล ๓ คือ อโลภะ (ไม่โลภ), อโทสะ (ไม่โกรธ), อโมหะ (ไม่หลง/มีปัญญา)",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-056",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 3 ข้อ 56] อกุศลมูล ๓ (รากเหง้าแห่งความชั่ว) มีอะไรบ้าง?",
    "options": [
      "โลภะ โทสะ โมหะ",
      "ราคะ ตัณหา อุปาทาน",
      "กาม ภพ อวิชชา",
      "พยาบาท อภิชฌา มิจฉาทิฏฐิ"
    ],
    "correctIndex": 0,
    "explanation": "อกุศลมูล ๓ คือ โลภะ โทสะ โมหะ เป็นต้นตอแห่งบาปธรรมทั้งปวง",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-057",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 3 ข้อ 57] สุจริต ๓ หมายถึงความประพฤติดีทางใดบ้าง?",
    "options": [
      "กายสุจริต วจีสุจริต มโนสุจริต",
      "ทาน ศีล ภาวนา",
      "กาย วาจา ทรัพย์",
      "ตา หู ใจ"
    ],
    "correctIndex": 0,
    "explanation": "สุจริต ๓ คือ ความประพฤติดีทางกาย วาจา และใจ",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-058",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 3 ข้อ 58] ทุจริต ๓ หมายถึงความประพฤติชั่วทางใดบ้าง?",
    "options": [
      "กายทุจริต วจีทุจริต มโนทุจริต",
      "โลภ โกรธ หลง",
      "ราคะ โทสะ โมหะ",
      "ฆ่าสัตว์ ลักทรัพย์ พูดเท็จ"
    ],
    "correctIndex": 0,
    "explanation": "ทุจริต ๓ คือ ความชั่วเสียหายทางกาย วาจา และใจ",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-059",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 3 ข้อ 59] ธรรมาธิปไตย ในหลักอธิปไตย ๓ หมายถึงอะไร?",
    "options": [
      "การถือธรรม ความถูกต้อง และความจริงเป็นใหญ่",
      "การถือตนเองเป็นใหญ่",
      "การถือเสียงมหาชนเป็นใหญ่",
      "การถืออำนาจเป็นใหญ่"
    ],
    "correctIndex": 0,
    "explanation": "ธรรมาธิปไตย คือ การยึดหลักธรรมและความถูกต้องเป็นเกณฑ์ตัดสินสูงสุด",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-060",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 3 ข้อ 60] อิทธิบาท ๔ ข้อใดหมายถึงความพอใจรักใคร่ในงาน?",
    "options": [
      "ฉันทะ",
      "วิริยะ",
      "จิตตะ",
      "วิมังสา"
    ],
    "correctIndex": 0,
    "explanation": "ฉันทะ คือ ความรักใคร่พึงพอใจในสิ่งที่ทำ",
    "reference": "ธรรมวิภาค อิทธิบาท ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-061",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 3 ข้อ 61] พรหมวิหาร ๔ มีอะไรบ้าง?",
    "options": [
      "เมตตา กรุณา มุทิตา อุเบกขา",
      "ทาน ศีล ภาวนา สมาธิ",
      "สัจจะ ทมะ ขันติ จาคะ",
      "ฉันทะ วิริยะ จิตตะ วิมังสา"
    ],
    "correctIndex": 0,
    "explanation": "พรหมวิหาร ๔ คือ เมตตา (ปรารถนาให้สุข) กรุณา (คิดช่วยให้พ้นทุกข์) มุทิตา (ยินดีเมื่อได้ดี) อุเบกขา (วางเฉยเป็นกลาง)",
    "reference": "ธรรมวิภาค พรหมวิหาร ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-062",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 3 ข้อ 62] ฆราวาสธรรม ๔ ประกอบด้วยอะไรบ้าง?",
    "options": [
      "สัจจะ ทมะ ขันติ จาคะ",
      "ทาน ศีล สมาธิ ปัญญา",
      "เมตตา กรุณา มุทิตา อุเบกขา",
      "อโลภะ อโทสะ อโมหะ ขันติ"
    ],
    "correctIndex": 0,
    "explanation": "ฆราวาสธรรม ๔: สัจจะ (ซื่อสัตย์) ทมะ (ข่มใจ) ขันติ (อดทน) จาคะ (สละให้ปัน)",
    "reference": "ธรรมวิภาค ฆราวาสธรรม ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-063",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 3 ข้อ 63] สังคหวัตถุ ๔ (ธรรมเครื่องยึดเหนี่ยวใจคน) มีอะไรบ้าง?",
    "options": [
      "ทาน ปิยวาจา อัตถจริยา สมานัตตตา",
      "สัจจะ ทมะ ขันติ จาคะ",
      "ศีล สมาธิ ปัญญา วิมุตติ",
      "ฉันทะ วิริยะ จิตตะ วิมังสา"
    ],
    "correctIndex": 0,
    "explanation": "สังคหวัตถุ ๔: ทาน (ให้ปัน) ปิยวาจา (พูดจาดี) อัตถจริยา (บำเพ็ญประโยชน์) สมานัตตตา (เสมอต้นเสมอปลาย)",
    "reference": "ธรรมวิภาค สังคหวัตถุ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-064",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 3 ข้อ 64] ทิฏฐธัมมิกัตถประโยชน์ ๔ (หัวใจเศรษฐี: อุ อา กะ สะ) 'อุ' คืออะไร?",
    "options": [
      "อุฏฐานสัมปทา (ขยันหาทรัพย์โดยสุจริต)",
      "อารักขสัมปทา",
      "กัลยาณมิตตตา",
      "สมชีวิตา"
    ],
    "correctIndex": 0,
    "explanation": "อุฏฐานสัมปทา คือ ความขยันขันแข็งในการประกอบสัมมาอาชีพ",
    "reference": "ธรรมวิภาค ทิฏฐธัมมิกัตถะ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-065",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 3 ข้อ 65] เบญจศีล (ศีล ๕) ข้อที่ ๒ งดเว้นจากอะไร?",
    "options": [
      "อทินนาทาน (ลักทรัพย์)",
      "ปาณาติบาต (ฆ่าสัตว์)",
      "กาเมสุมิจฉาจาร",
      "มุสาวาท"
    ],
    "correctIndex": 0,
    "explanation": "ศีลข้อ ๒ คืองดเว้นจากการลักขโมย เบียดบังทรัพย์ผู้อื่น",
    "reference": "ธรรมวิภาค ศีล ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-066",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 3 ข้อ 66] เบญจธรรม ๕ ธรรมคู่ปรับกับศีลข้อ ๑ (ไม่ฆ่าสัตว์) คืออะไร?",
    "options": [
      "เมตตากรุณา",
      "สัมมาอาชีวะ",
      "กามสังวร",
      "สัจจะ"
    ],
    "correctIndex": 0,
    "explanation": "เมตตากรุณาเป็นธรรมคู่กับศีลข้อ ๑ เพื่อให้มีความรักใคร่เอื้ออาทรต่อสรรพสัตว์",
    "reference": "ธรรมวิภาค เบญจธรรม ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-067",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 3 ข้อ 67] ขันธ์ ๕ กองแห่งชีวิต ได้แก่อะไรบ้าง?",
    "options": [
      "รูป เวทนา สัญญา สังขาร วิญญาณ",
      "ตา หู จมูก ลิ้น กาย",
      "ศีล สมาธิ ปัญญา วิมุตติ วิมุตติญาณ",
      "ดิน น้ำ ลม ไฟ อากาศ"
    ],
    "correctIndex": 0,
    "explanation": "ขันธ์ ๕ ประกอบด้วย รูป (กาย) เวทนา (ความรู้สึก) สัญญา (ความจำ) สังขาร (การปรุงแต่งจิต) วิญญาณ (การรับรู้)",
    "reference": "ธรรมวิภาค ขันธ์ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-068",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 3 ข้อ 68] นิวรณ์ ๕ ข้อใดหมายถึงความหดหู่ ท้อแท้ ง่วงเหงาหาวนอน?",
    "options": [
      "ถีนมิทธะ",
      "กามฉันทะ",
      "พยาบาท",
      "อุทธัจจกุกกุจจะ"
    ],
    "correctIndex": 0,
    "explanation": "ถีนมิทธะ คือ ความหดหู่เซื่องซึมของจิตใจ",
    "reference": "ธรรมวิภาค นิวรณ์ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-069",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 3 ข้อ 69] อบายมุข ๖ ข้อแรกคือข้อใด?",
    "options": [
      "การดื่มน้ำเมา",
      "การเที่ยวกลางคืน",
      "การดูการละเล่น",
      "การเล่นการพนัน"
    ],
    "correctIndex": 0,
    "explanation": "อบายมุขข้อแรกคือ การดื่มสุราและของมึนเมา",
    "reference": "ธรรมวิภาค อบายมุข ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-070",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 3 ข้อ 70] ทิศ ๖ ทิศเบื้องหน้า (ปุรัตถิมทิศ) หมายถึงใคร?",
    "options": [
      "บิดามารดา",
      "ครูอาจารย์",
      "บุตรภรรยา",
      "มิตรสหาย"
    ],
    "correctIndex": 0,
    "explanation": "ทิศเบื้องหน้าคือบิดามารดา ผู้มีพระคุณดูแลเรามาตั้งแต่ต้น",
    "reference": "ธรรมวิภาค ทิศ ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-071",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 3 ข้อ 71] สัปปุริสธรรม ๗ ข้อใดหมายถึงการเป็นผู้รู้จักเหตุ?",
    "options": [
      "ธัมมัญญุตา",
      "อัตถัญญุตา",
      "อัตตัญญุตา",
      "มัตตัญญุตา"
    ],
    "correctIndex": 0,
    "explanation": "ธัมมัญญุตา คือ ความเป็นผู้รู้จักเหตุ",
    "reference": "ธรรมวิภาค สัปปุริสธรรม ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-072",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 3 ข้อ 72] อริยทรัพย์ ๗ ข้อใดมิใช่ ๑ ในอริยทรัพย์ ๗?",
    "options": [
      "ธนทรัพย์ (เงินทองของนอกกาย)",
      "ศรัทธา",
      "ศีล",
      "ปัญญา"
    ],
    "correctIndex": 0,
    "explanation": "อริยทรัพย์ ๗ เป็นทรัพย์ภายใน: ศรัทธา ศีล หิริ โอตตัปปะ พาหุสัจจะ จาคะ ปัญญา",
    "reference": "ธรรมวิภาค อริยทรัพย์ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-073",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 3 ข้อ 73] โลกธรรม ๘ ฝ่ายอิฏฐารมณ์ (ที่น่าปรารถนา) ได้แก่อะไรบ้าง?",
    "options": [
      "ได้ลาภ ได้ยศ สรรเสริญ สุข",
      "เสื่อมลาภ เสื่อมยศ นินทา ทุกข์",
      "บุญ กุศล บารมี สวรรค์",
      "กาย วาจา ใจ ธรรม"
    ],
    "correctIndex": 0,
    "explanation": "โลกธรรมฝ่ายดี ๔ คือ ได้ลาภ ได้ยศ ได้สรรเสริญ และมีความสุข",
    "reference": "ธรรมวิภาค โลกธรรม ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-074",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 3 ข้อ 74] บุญกิริยาวัตถุ ๑๐ ข้อใดคือบุญสำเร็จด้วยการอ่อนน้อมถ่อมตน?",
    "options": [
      "อปจายนมัย",
      "ทานมัย",
      "สีลมัย",
      "ภาวนามัย"
    ],
    "correctIndex": 0,
    "explanation": "อปจายนมัย คือ บุญจากการประพฤติอ่อนน้อมถ่อมตน",
    "reference": "ธรรมวิภาค บุญกิริยาวัตถุ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-075",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 3 ข้อ 75] ทศพิธราชธรรม ๑๐ ข้อใดหมายถึงความซื่อตรง?",
    "options": [
      "อาชชวะ",
      "มัททวะ",
      "ตปะ",
      "อักโกธะ"
    ],
    "correctIndex": 0,
    "explanation": "อาชชวะ คือ ความซื่อตรงสุจริต",
    "reference": "ธรรมวิภาค ทศพิธราชธรรม ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-076",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 4 ข้อ 76] สติและสัมปชัญญะ จัดเป็นธรรมประเภทใดในนวโกวาท?",
    "options": [
      "ธรรมมีอุปการะมาก ๒",
      "ธรรมคุ้มครองโลก ๒",
      "ธรรมทำให้งาม ๒",
      "โลกบาลธรรม ๒"
    ],
    "correctIndex": 0,
    "explanation": "สติ (ความระลึกได้) และสัมปชัญญะ (ความรู้ตัว) เป็นธรรมมีอุปการะมาก ช่วยเกื้อกูลกิจการทุกประการ",
    "reference": "ธรรมวิภาค นวโกวาท หมวด ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-077",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 4 ข้อ 77] หิริและโอตตัปปะ จัดเป็นธรรมประเภทใด?",
    "options": [
      "ธรรมคุ้มครองโลก (โลกบาลธรรม ๒)",
      "ธรรมมีอุปการะมาก",
      "ธรรมอันทำให้งาม",
      "อารักขธรรม"
    ],
    "correctIndex": 0,
    "explanation": "หิริ (ความละอายบาป) และโอตตัปปะ (ความเกรงกลัวบาป) คุ้มครองโลกให้สงบสุข",
    "reference": "ธรรมวิภาค นวโกวาท หมวด ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-078",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 4 ข้อ 78] ขันติและโสรัจจะ จัดเป็นธรรมประเภทใด?",
    "options": [
      "ธรรมอันทำให้งาม ๒",
      "ธรรมเครื่องเจริญ",
      "ธรรมเครื่องนำทาง",
      "โลกธรรม ๒"
    ],
    "correctIndex": 0,
    "explanation": "ขันติ (ความอดทน) และโสรัจจะ (ความสงบเสงี่ยม) ทำให้ผู้ประพฤติงดงามทั้งกายและใจ",
    "reference": "ธรรมวิภาค นวโกวาท หมวด ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-079",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 4 ข้อ 79] บุคคลหาได้ยาก ๒ ประการ (ทุลลภบุคคล) ได้แก่ใครบ้าง?",
    "options": [
      "บุพการี และ กตัญญูกตเวที",
      "พระราชา และ พระอรหันต์",
      "บิดา และ มารดา",
      "มิตรแท้ และ มิตรเทียม"
    ],
    "correctIndex": 0,
    "explanation": "บุพการี (ผู้อุปการะก่อน) และ กตัญญูกตเวที (ผู้รู้คุณและตอบแทน) เป็นบุคคลหาได้ยากยิ่ง",
    "reference": "ธรรมวิภาค นวโกวาท หมวด ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-080",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 4 ข้อ 80] กุศลมูล ๓ (รากเหง้าแห่งความดี) มีอะไรบ้าง?",
    "options": [
      "อโลภะ อโทสะ อโมหะ",
      "โลภะ โทสะ โมหะ",
      "ศรัทธา วิริยะ ปัญญา",
      "ศีล สมาธิ ปัญญา"
    ],
    "correctIndex": 0,
    "explanation": "กุศลมูล ๓ คือ อโลภะ (ไม่โลภ), อโทสะ (ไม่โกรธ), อโมหะ (ไม่หลง/มีปัญญา)",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-081",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 4 ข้อ 81] อกุศลมูล ๓ (รากเหง้าแห่งความชั่ว) มีอะไรบ้าง?",
    "options": [
      "โลภะ โทสะ โมหะ",
      "ราคะ ตัณหา อุปาทาน",
      "กาม ภพ อวิชชา",
      "พยาบาท อภิชฌา มิจฉาทิฏฐิ"
    ],
    "correctIndex": 0,
    "explanation": "อกุศลมูล ๓ คือ โลภะ โทสะ โมหะ เป็นต้นตอแห่งบาปธรรมทั้งปวง",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-082",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 4 ข้อ 82] สุจริต ๓ หมายถึงความประพฤติดีทางใดบ้าง?",
    "options": [
      "กายสุจริต วจีสุจริต มโนสุจริต",
      "ทาน ศีล ภาวนา",
      "กาย วาจา ทรัพย์",
      "ตา หู ใจ"
    ],
    "correctIndex": 0,
    "explanation": "สุจริต ๓ คือ ความประพฤติดีทางกาย วาจา และใจ",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-083",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 4 ข้อ 83] ทุจริต ๓ หมายถึงความประพฤติชั่วทางใดบ้าง?",
    "options": [
      "กายทุจริต วจีทุจริต มโนทุจริต",
      "โลภ โกรธ หลง",
      "ราคะ โทสะ โมหะ",
      "ฆ่าสัตว์ ลักทรัพย์ พูดเท็จ"
    ],
    "correctIndex": 0,
    "explanation": "ทุจริต ๓ คือ ความชั่วเสียหายทางกาย วาจา และใจ",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-084",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 4 ข้อ 84] ธรรมาธิปไตย ในหลักอธิปไตย ๓ หมายถึงอะไร?",
    "options": [
      "การถือธรรม ความถูกต้อง และความจริงเป็นใหญ่",
      "การถือตนเองเป็นใหญ่",
      "การถือเสียงมหาชนเป็นใหญ่",
      "การถืออำนาจเป็นใหญ่"
    ],
    "correctIndex": 0,
    "explanation": "ธรรมาธิปไตย คือ การยึดหลักธรรมและความถูกต้องเป็นเกณฑ์ตัดสินสูงสุด",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-085",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 4 ข้อ 85] อิทธิบาท ๔ ข้อใดหมายถึงความพอใจรักใคร่ในงาน?",
    "options": [
      "ฉันทะ",
      "วิริยะ",
      "จิตตะ",
      "วิมังสา"
    ],
    "correctIndex": 0,
    "explanation": "ฉันทะ คือ ความรักใคร่พึงพอใจในสิ่งที่ทำ",
    "reference": "ธรรมวิภาค อิทธิบาท ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-086",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 4 ข้อ 86] พรหมวิหาร ๔ มีอะไรบ้าง?",
    "options": [
      "เมตตา กรุณา มุทิตา อุเบกขา",
      "ทาน ศีล ภาวนา สมาธิ",
      "สัจจะ ทมะ ขันติ จาคะ",
      "ฉันทะ วิริยะ จิตตะ วิมังสา"
    ],
    "correctIndex": 0,
    "explanation": "พรหมวิหาร ๔ คือ เมตตา (ปรารถนาให้สุข) กรุณา (คิดช่วยให้พ้นทุกข์) มุทิตา (ยินดีเมื่อได้ดี) อุเบกขา (วางเฉยเป็นกลาง)",
    "reference": "ธรรมวิภาค พรหมวิหาร ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-087",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 4 ข้อ 87] ฆราวาสธรรม ๔ ประกอบด้วยอะไรบ้าง?",
    "options": [
      "สัจจะ ทมะ ขันติ จาคะ",
      "ทาน ศีล สมาธิ ปัญญา",
      "เมตตา กรุณา มุทิตา อุเบกขา",
      "อโลภะ อโทสะ อโมหะ ขันติ"
    ],
    "correctIndex": 0,
    "explanation": "ฆราวาสธรรม ๔: สัจจะ (ซื่อสัตย์) ทมะ (ข่มใจ) ขันติ (อดทน) จาคะ (สละให้ปัน)",
    "reference": "ธรรมวิภาค ฆราวาสธรรม ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-088",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 4 ข้อ 88] สังคหวัตถุ ๔ (ธรรมเครื่องยึดเหนี่ยวใจคน) มีอะไรบ้าง?",
    "options": [
      "ทาน ปิยวาจา อัตถจริยา สมานัตตตา",
      "สัจจะ ทมะ ขันติ จาคะ",
      "ศีล สมาธิ ปัญญา วิมุตติ",
      "ฉันทะ วิริยะ จิตตะ วิมังสา"
    ],
    "correctIndex": 0,
    "explanation": "สังคหวัตถุ ๔: ทาน (ให้ปัน) ปิยวาจา (พูดจาดี) อัตถจริยา (บำเพ็ญประโยชน์) สมานัตตตา (เสมอต้นเสมอปลาย)",
    "reference": "ธรรมวิภาค สังคหวัตถุ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-089",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 4 ข้อ 89] ทิฏฐธัมมิกัตถประโยชน์ ๔ (หัวใจเศรษฐี: อุ อา กะ สะ) 'อุ' คืออะไร?",
    "options": [
      "อุฏฐานสัมปทา (ขยันหาทรัพย์โดยสุจริต)",
      "อารักขสัมปทา",
      "กัลยาณมิตตตา",
      "สมชีวิตา"
    ],
    "correctIndex": 0,
    "explanation": "อุฏฐานสัมปทา คือ ความขยันขันแข็งในการประกอบสัมมาอาชีพ",
    "reference": "ธรรมวิภาค ทิฏฐธัมมิกัตถะ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-090",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 4 ข้อ 90] เบญจศีล (ศีล ๕) ข้อที่ ๒ งดเว้นจากอะไร?",
    "options": [
      "อทินนาทาน (ลักทรัพย์)",
      "ปาณาติบาต (ฆ่าสัตว์)",
      "กาเมสุมิจฉาจาร",
      "มุสาวาท"
    ],
    "correctIndex": 0,
    "explanation": "ศีลข้อ ๒ คืองดเว้นจากการลักขโมย เบียดบังทรัพย์ผู้อื่น",
    "reference": "ธรรมวิภาค ศีล ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-091",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 4 ข้อ 91] เบญจธรรม ๕ ธรรมคู่ปรับกับศีลข้อ ๑ (ไม่ฆ่าสัตว์) คืออะไร?",
    "options": [
      "เมตตากรุณา",
      "สัมมาอาชีวะ",
      "กามสังวร",
      "สัจจะ"
    ],
    "correctIndex": 0,
    "explanation": "เมตตากรุณาเป็นธรรมคู่กับศีลข้อ ๑ เพื่อให้มีความรักใคร่เอื้ออาทรต่อสรรพสัตว์",
    "reference": "ธรรมวิภาค เบญจธรรม ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-092",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 4 ข้อ 92] ขันธ์ ๕ กองแห่งชีวิต ได้แก่อะไรบ้าง?",
    "options": [
      "รูป เวทนา สัญญา สังขาร วิญญาณ",
      "ตา หู จมูก ลิ้น กาย",
      "ศีล สมาธิ ปัญญา วิมุตติ วิมุตติญาณ",
      "ดิน น้ำ ลม ไฟ อากาศ"
    ],
    "correctIndex": 0,
    "explanation": "ขันธ์ ๕ ประกอบด้วย รูป (กาย) เวทนา (ความรู้สึก) สัญญา (ความจำ) สังขาร (การปรุงแต่งจิต) วิญญาณ (การรับรู้)",
    "reference": "ธรรมวิภาค ขันธ์ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-093",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 4 ข้อ 93] นิวรณ์ ๕ ข้อใดหมายถึงความหดหู่ ท้อแท้ ง่วงเหงาหาวนอน?",
    "options": [
      "ถีนมิทธะ",
      "กามฉันทะ",
      "พยาบาท",
      "อุทธัจจกุกกุจจะ"
    ],
    "correctIndex": 0,
    "explanation": "ถีนมิทธะ คือ ความหดหู่เซื่องซึมของจิตใจ",
    "reference": "ธรรมวิภาค นิวรณ์ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-094",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 4 ข้อ 94] อบายมุข ๖ ข้อแรกคือข้อใด?",
    "options": [
      "การดื่มน้ำเมา",
      "การเที่ยวกลางคืน",
      "การดูการละเล่น",
      "การเล่นการพนัน"
    ],
    "correctIndex": 0,
    "explanation": "อบายมุขข้อแรกคือ การดื่มสุราและของมึนเมา",
    "reference": "ธรรมวิภาค อบายมุข ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-095",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 4 ข้อ 95] ทิศ ๖ ทิศเบื้องหน้า (ปุรัตถิมทิศ) หมายถึงใคร?",
    "options": [
      "บิดามารดา",
      "ครูอาจารย์",
      "บุตรภรรยา",
      "มิตรสหาย"
    ],
    "correctIndex": 0,
    "explanation": "ทิศเบื้องหน้าคือบิดามารดา ผู้มีพระคุณดูแลเรามาตั้งแต่ต้น",
    "reference": "ธรรมวิภาค ทิศ ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-096",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 4 ข้อ 96] สัปปุริสธรรม ๗ ข้อใดหมายถึงการเป็นผู้รู้จักเหตุ?",
    "options": [
      "ธัมมัญญุตา",
      "อัตถัญญุตา",
      "อัตตัญญุตา",
      "มัตตัญญุตา"
    ],
    "correctIndex": 0,
    "explanation": "ธัมมัญญุตา คือ ความเป็นผู้รู้จักเหตุ",
    "reference": "ธรรมวิภาค สัปปุริสธรรม ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-097",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 4 ข้อ 97] อริยทรัพย์ ๗ ข้อใดมิใช่ ๑ ในอริยทรัพย์ ๗?",
    "options": [
      "ธนทรัพย์ (เงินทองของนอกกาย)",
      "ศรัทธา",
      "ศีล",
      "ปัญญา"
    ],
    "correctIndex": 0,
    "explanation": "อริยทรัพย์ ๗ เป็นทรัพย์ภายใน: ศรัทธา ศีล หิริ โอตตัปปะ พาหุสัจจะ จาคะ ปัญญา",
    "reference": "ธรรมวิภาค อริยทรัพย์ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-098",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 4 ข้อ 98] โลกธรรม ๘ ฝ่ายอิฏฐารมณ์ (ที่น่าปรารถนา) ได้แก่อะไรบ้าง?",
    "options": [
      "ได้ลาภ ได้ยศ สรรเสริญ สุข",
      "เสื่อมลาภ เสื่อมยศ นินทา ทุกข์",
      "บุญ กุศล บารมี สวรรค์",
      "กาย วาจา ใจ ธรรม"
    ],
    "correctIndex": 0,
    "explanation": "โลกธรรมฝ่ายดี ๔ คือ ได้ลาภ ได้ยศ ได้สรรเสริญ และมีความสุข",
    "reference": "ธรรมวิภาค โลกธรรม ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-099",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 4 ข้อ 99] บุญกิริยาวัตถุ ๑๐ ข้อใดคือบุญสำเร็จด้วยการอ่อนน้อมถ่อมตน?",
    "options": [
      "อปจายนมัย",
      "ทานมัย",
      "สีลมัย",
      "ภาวนามัย"
    ],
    "correctIndex": 0,
    "explanation": "อปจายนมัย คือ บุญจากการประพฤติอ่อนน้อมถ่อมตน",
    "reference": "ธรรมวิภาค บุญกิริยาวัตถุ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-100",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 4 ข้อ 100] ทศพิธราชธรรม ๑๐ ข้อใดหมายถึงความซื่อตรง?",
    "options": [
      "อาชชวะ",
      "มัททวะ",
      "ตปะ",
      "อักโกธะ"
    ],
    "correctIndex": 0,
    "explanation": "อาชชวะ คือ ความซื่อตรงสุจริต",
    "reference": "ธรรมวิภาค ทศพิธราชธรรม ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-101",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 5 ข้อ 101] สติและสัมปชัญญะ จัดเป็นธรรมประเภทใดในนวโกวาท?",
    "options": [
      "ธรรมมีอุปการะมาก ๒",
      "ธรรมคุ้มครองโลก ๒",
      "ธรรมทำให้งาม ๒",
      "โลกบาลธรรม ๒"
    ],
    "correctIndex": 0,
    "explanation": "สติ (ความระลึกได้) และสัมปชัญญะ (ความรู้ตัว) เป็นธรรมมีอุปการะมาก ช่วยเกื้อกูลกิจการทุกประการ",
    "reference": "ธรรมวิภาค นวโกวาท หมวด ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-102",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 5 ข้อ 102] หิริและโอตตัปปะ จัดเป็นธรรมประเภทใด?",
    "options": [
      "ธรรมคุ้มครองโลก (โลกบาลธรรม ๒)",
      "ธรรมมีอุปการะมาก",
      "ธรรมอันทำให้งาม",
      "อารักขธรรม"
    ],
    "correctIndex": 0,
    "explanation": "หิริ (ความละอายบาป) และโอตตัปปะ (ความเกรงกลัวบาป) คุ้มครองโลกให้สงบสุข",
    "reference": "ธรรมวิภาค นวโกวาท หมวด ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-103",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 5 ข้อ 103] ขันติและโสรัจจะ จัดเป็นธรรมประเภทใด?",
    "options": [
      "ธรรมอันทำให้งาม ๒",
      "ธรรมเครื่องเจริญ",
      "ธรรมเครื่องนำทาง",
      "โลกธรรม ๒"
    ],
    "correctIndex": 0,
    "explanation": "ขันติ (ความอดทน) และโสรัจจะ (ความสงบเสงี่ยม) ทำให้ผู้ประพฤติงดงามทั้งกายและใจ",
    "reference": "ธรรมวิภาค นวโกวาท หมวด ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-104",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 5 ข้อ 104] บุคคลหาได้ยาก ๒ ประการ (ทุลลภบุคคล) ได้แก่ใครบ้าง?",
    "options": [
      "บุพการี และ กตัญญูกตเวที",
      "พระราชา และ พระอรหันต์",
      "บิดา และ มารดา",
      "มิตรแท้ และ มิตรเทียม"
    ],
    "correctIndex": 0,
    "explanation": "บุพการี (ผู้อุปการะก่อน) และ กตัญญูกตเวที (ผู้รู้คุณและตอบแทน) เป็นบุคคลหาได้ยากยิ่ง",
    "reference": "ธรรมวิภาค นวโกวาท หมวด ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-105",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 5 ข้อ 105] กุศลมูล ๓ (รากเหง้าแห่งความดี) มีอะไรบ้าง?",
    "options": [
      "อโลภะ อโทสะ อโมหะ",
      "โลภะ โทสะ โมหะ",
      "ศรัทธา วิริยะ ปัญญา",
      "ศีล สมาธิ ปัญญา"
    ],
    "correctIndex": 0,
    "explanation": "กุศลมูล ๓ คือ อโลภะ (ไม่โลภ), อโทสะ (ไม่โกรธ), อโมหะ (ไม่หลง/มีปัญญา)",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-106",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 5 ข้อ 106] อกุศลมูล ๓ (รากเหง้าแห่งความชั่ว) มีอะไรบ้าง?",
    "options": [
      "โลภะ โทสะ โมหะ",
      "ราคะ ตัณหา อุปาทาน",
      "กาม ภพ อวิชชา",
      "พยาบาท อภิชฌา มิจฉาทิฏฐิ"
    ],
    "correctIndex": 0,
    "explanation": "อกุศลมูล ๓ คือ โลภะ โทสะ โมหะ เป็นต้นตอแห่งบาปธรรมทั้งปวง",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-107",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 5 ข้อ 107] สุจริต ๓ หมายถึงความประพฤติดีทางใดบ้าง?",
    "options": [
      "กายสุจริต วจีสุจริต มโนสุจริต",
      "ทาน ศีล ภาวนา",
      "กาย วาจา ทรัพย์",
      "ตา หู ใจ"
    ],
    "correctIndex": 0,
    "explanation": "สุจริต ๓ คือ ความประพฤติดีทางกาย วาจา และใจ",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-108",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 5 ข้อ 108] ทุจริต ๓ หมายถึงความประพฤติชั่วทางใดบ้าง?",
    "options": [
      "กายทุจริต วจีทุจริต มโนทุจริต",
      "โลภ โกรธ หลง",
      "ราคะ โทสะ โมหะ",
      "ฆ่าสัตว์ ลักทรัพย์ พูดเท็จ"
    ],
    "correctIndex": 0,
    "explanation": "ทุจริต ๓ คือ ความชั่วเสียหายทางกาย วาจา และใจ",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-109",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 5 ข้อ 109] ธรรมาธิปไตย ในหลักอธิปไตย ๓ หมายถึงอะไร?",
    "options": [
      "การถือธรรม ความถูกต้อง และความจริงเป็นใหญ่",
      "การถือตนเองเป็นใหญ่",
      "การถือเสียงมหาชนเป็นใหญ่",
      "การถืออำนาจเป็นใหญ่"
    ],
    "correctIndex": 0,
    "explanation": "ธรรมาธิปไตย คือ การยึดหลักธรรมและความถูกต้องเป็นเกณฑ์ตัดสินสูงสุด",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-110",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 5 ข้อ 110] อิทธิบาท ๔ ข้อใดหมายถึงความพอใจรักใคร่ในงาน?",
    "options": [
      "ฉันทะ",
      "วิริยะ",
      "จิตตะ",
      "วิมังสา"
    ],
    "correctIndex": 0,
    "explanation": "ฉันทะ คือ ความรักใคร่พึงพอใจในสิ่งที่ทำ",
    "reference": "ธรรมวิภาค อิทธิบาท ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-111",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 5 ข้อ 111] พรหมวิหาร ๔ มีอะไรบ้าง?",
    "options": [
      "เมตตา กรุณา มุทิตา อุเบกขา",
      "ทาน ศีล ภาวนา สมาธิ",
      "สัจจะ ทมะ ขันติ จาคะ",
      "ฉันทะ วิริยะ จิตตะ วิมังสา"
    ],
    "correctIndex": 0,
    "explanation": "พรหมวิหาร ๔ คือ เมตตา (ปรารถนาให้สุข) กรุณา (คิดช่วยให้พ้นทุกข์) มุทิตา (ยินดีเมื่อได้ดี) อุเบกขา (วางเฉยเป็นกลาง)",
    "reference": "ธรรมวิภาค พรหมวิหาร ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-112",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 5 ข้อ 112] ฆราวาสธรรม ๔ ประกอบด้วยอะไรบ้าง?",
    "options": [
      "สัจจะ ทมะ ขันติ จาคะ",
      "ทาน ศีล สมาธิ ปัญญา",
      "เมตตา กรุณา มุทิตา อุเบกขา",
      "อโลภะ อโทสะ อโมหะ ขันติ"
    ],
    "correctIndex": 0,
    "explanation": "ฆราวาสธรรม ๔: สัจจะ (ซื่อสัตย์) ทมะ (ข่มใจ) ขันติ (อดทน) จาคะ (สละให้ปัน)",
    "reference": "ธรรมวิภาค ฆราวาสธรรม ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-113",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 5 ข้อ 113] สังคหวัตถุ ๔ (ธรรมเครื่องยึดเหนี่ยวใจคน) มีอะไรบ้าง?",
    "options": [
      "ทาน ปิยวาจา อัตถจริยา สมานัตตตา",
      "สัจจะ ทมะ ขันติ จาคะ",
      "ศีล สมาธิ ปัญญา วิมุตติ",
      "ฉันทะ วิริยะ จิตตะ วิมังสา"
    ],
    "correctIndex": 0,
    "explanation": "สังคหวัตถุ ๔: ทาน (ให้ปัน) ปิยวาจา (พูดจาดี) อัตถจริยา (บำเพ็ญประโยชน์) สมานัตตตา (เสมอต้นเสมอปลาย)",
    "reference": "ธรรมวิภาค สังคหวัตถุ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-114",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 5 ข้อ 114] ทิฏฐธัมมิกัตถประโยชน์ ๔ (หัวใจเศรษฐี: อุ อา กะ สะ) 'อุ' คืออะไร?",
    "options": [
      "อุฏฐานสัมปทา (ขยันหาทรัพย์โดยสุจริต)",
      "อารักขสัมปทา",
      "กัลยาณมิตตตา",
      "สมชีวิตา"
    ],
    "correctIndex": 0,
    "explanation": "อุฏฐานสัมปทา คือ ความขยันขันแข็งในการประกอบสัมมาอาชีพ",
    "reference": "ธรรมวิภาค ทิฏฐธัมมิกัตถะ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-115",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 5 ข้อ 115] เบญจศีล (ศีล ๕) ข้อที่ ๒ งดเว้นจากอะไร?",
    "options": [
      "อทินนาทาน (ลักทรัพย์)",
      "ปาณาติบาต (ฆ่าสัตว์)",
      "กาเมสุมิจฉาจาร",
      "มุสาวาท"
    ],
    "correctIndex": 0,
    "explanation": "ศีลข้อ ๒ คืองดเว้นจากการลักขโมย เบียดบังทรัพย์ผู้อื่น",
    "reference": "ธรรมวิภาค ศีล ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-116",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 5 ข้อ 116] เบญจธรรม ๕ ธรรมคู่ปรับกับศีลข้อ ๑ (ไม่ฆ่าสัตว์) คืออะไร?",
    "options": [
      "เมตตากรุณา",
      "สัมมาอาชีวะ",
      "กามสังวร",
      "สัจจะ"
    ],
    "correctIndex": 0,
    "explanation": "เมตตากรุณาเป็นธรรมคู่กับศีลข้อ ๑ เพื่อให้มีความรักใคร่เอื้ออาทรต่อสรรพสัตว์",
    "reference": "ธรรมวิภาค เบญจธรรม ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-117",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 5 ข้อ 117] ขันธ์ ๕ กองแห่งชีวิต ได้แก่อะไรบ้าง?",
    "options": [
      "รูป เวทนา สัญญา สังขาร วิญญาณ",
      "ตา หู จมูก ลิ้น กาย",
      "ศีล สมาธิ ปัญญา วิมุตติ วิมุตติญาณ",
      "ดิน น้ำ ลม ไฟ อากาศ"
    ],
    "correctIndex": 0,
    "explanation": "ขันธ์ ๕ ประกอบด้วย รูป (กาย) เวทนา (ความรู้สึก) สัญญา (ความจำ) สังขาร (การปรุงแต่งจิต) วิญญาณ (การรับรู้)",
    "reference": "ธรรมวิภาค ขันธ์ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-118",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 5 ข้อ 118] นิวรณ์ ๕ ข้อใดหมายถึงความหดหู่ ท้อแท้ ง่วงเหงาหาวนอน?",
    "options": [
      "ถีนมิทธะ",
      "กามฉันทะ",
      "พยาบาท",
      "อุทธัจจกุกกุจจะ"
    ],
    "correctIndex": 0,
    "explanation": "ถีนมิทธะ คือ ความหดหู่เซื่องซึมของจิตใจ",
    "reference": "ธรรมวิภาค นิวรณ์ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-119",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 5 ข้อ 119] อบายมุข ๖ ข้อแรกคือข้อใด?",
    "options": [
      "การดื่มน้ำเมา",
      "การเที่ยวกลางคืน",
      "การดูการละเล่น",
      "การเล่นการพนัน"
    ],
    "correctIndex": 0,
    "explanation": "อบายมุขข้อแรกคือ การดื่มสุราและของมึนเมา",
    "reference": "ธรรมวิภาค อบายมุข ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-120",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 5 ข้อ 120] ทิศ ๖ ทิศเบื้องหน้า (ปุรัตถิมทิศ) หมายถึงใคร?",
    "options": [
      "บิดามารดา",
      "ครูอาจารย์",
      "บุตรภรรยา",
      "มิตรสหาย"
    ],
    "correctIndex": 0,
    "explanation": "ทิศเบื้องหน้าคือบิดามารดา ผู้มีพระคุณดูแลเรามาตั้งแต่ต้น",
    "reference": "ธรรมวิภาค ทิศ ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-121",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 5 ข้อ 121] สัปปุริสธรรม ๗ ข้อใดหมายถึงการเป็นผู้รู้จักเหตุ?",
    "options": [
      "ธัมมัญญุตา",
      "อัตถัญญุตา",
      "อัตตัญญุตา",
      "มัตตัญญุตา"
    ],
    "correctIndex": 0,
    "explanation": "ธัมมัญญุตา คือ ความเป็นผู้รู้จักเหตุ",
    "reference": "ธรรมวิภาค สัปปุริสธรรม ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-122",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 5 ข้อ 122] อริยทรัพย์ ๗ ข้อใดมิใช่ ๑ ในอริยทรัพย์ ๗?",
    "options": [
      "ธนทรัพย์ (เงินทองของนอกกาย)",
      "ศรัทธา",
      "ศีล",
      "ปัญญา"
    ],
    "correctIndex": 0,
    "explanation": "อริยทรัพย์ ๗ เป็นทรัพย์ภายใน: ศรัทธา ศีล หิริ โอตตัปปะ พาหุสัจจะ จาคะ ปัญญา",
    "reference": "ธรรมวิภาค อริยทรัพย์ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-123",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 5 ข้อ 123] โลกธรรม ๘ ฝ่ายอิฏฐารมณ์ (ที่น่าปรารถนา) ได้แก่อะไรบ้าง?",
    "options": [
      "ได้ลาภ ได้ยศ สรรเสริญ สุข",
      "เสื่อมลาภ เสื่อมยศ นินทา ทุกข์",
      "บุญ กุศล บารมี สวรรค์",
      "กาย วาจา ใจ ธรรม"
    ],
    "correctIndex": 0,
    "explanation": "โลกธรรมฝ่ายดี ๔ คือ ได้ลาภ ได้ยศ ได้สรรเสริญ และมีความสุข",
    "reference": "ธรรมวิภาค โลกธรรม ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-124",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 5 ข้อ 124] บุญกิริยาวัตถุ ๑๐ ข้อใดคือบุญสำเร็จด้วยการอ่อนน้อมถ่อมตน?",
    "options": [
      "อปจายนมัย",
      "ทานมัย",
      "สีลมัย",
      "ภาวนามัย"
    ],
    "correctIndex": 0,
    "explanation": "อปจายนมัย คือ บุญจากการประพฤติอ่อนน้อมถ่อมตน",
    "reference": "ธรรมวิภาค บุญกิริยาวัตถุ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-125",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 5 ข้อ 125] ทศพิธราชธรรม ๑๐ ข้อใดหมายถึงความซื่อตรง?",
    "options": [
      "อาชชวะ",
      "มัททวะ",
      "ตปะ",
      "อักโกธะ"
    ],
    "correctIndex": 0,
    "explanation": "อาชชวะ คือ ความซื่อตรงสุจริต",
    "reference": "ธรรมวิภาค ทศพิธราชธรรม ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-126",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 6 ข้อ 126] สติและสัมปชัญญะ จัดเป็นธรรมประเภทใดในนวโกวาท?",
    "options": [
      "ธรรมมีอุปการะมาก ๒",
      "ธรรมคุ้มครองโลก ๒",
      "ธรรมทำให้งาม ๒",
      "โลกบาลธรรม ๒"
    ],
    "correctIndex": 0,
    "explanation": "สติ (ความระลึกได้) และสัมปชัญญะ (ความรู้ตัว) เป็นธรรมมีอุปการะมาก ช่วยเกื้อกูลกิจการทุกประการ",
    "reference": "ธรรมวิภาค นวโกวาท หมวด ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-127",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 6 ข้อ 127] หิริและโอตตัปปะ จัดเป็นธรรมประเภทใด?",
    "options": [
      "ธรรมคุ้มครองโลก (โลกบาลธรรม ๒)",
      "ธรรมมีอุปการะมาก",
      "ธรรมอันทำให้งาม",
      "อารักขธรรม"
    ],
    "correctIndex": 0,
    "explanation": "หิริ (ความละอายบาป) และโอตตัปปะ (ความเกรงกลัวบาป) คุ้มครองโลกให้สงบสุข",
    "reference": "ธรรมวิภาค นวโกวาท หมวด ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-128",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 6 ข้อ 128] ขันติและโสรัจจะ จัดเป็นธรรมประเภทใด?",
    "options": [
      "ธรรมอันทำให้งาม ๒",
      "ธรรมเครื่องเจริญ",
      "ธรรมเครื่องนำทาง",
      "โลกธรรม ๒"
    ],
    "correctIndex": 0,
    "explanation": "ขันติ (ความอดทน) และโสรัจจะ (ความสงบเสงี่ยม) ทำให้ผู้ประพฤติงดงามทั้งกายและใจ",
    "reference": "ธรรมวิภาค นวโกวาท หมวด ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-129",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 6 ข้อ 129] บุคคลหาได้ยาก ๒ ประการ (ทุลลภบุคคล) ได้แก่ใครบ้าง?",
    "options": [
      "บุพการี และ กตัญญูกตเวที",
      "พระราชา และ พระอรหันต์",
      "บิดา และ มารดา",
      "มิตรแท้ และ มิตรเทียม"
    ],
    "correctIndex": 0,
    "explanation": "บุพการี (ผู้อุปการะก่อน) และ กตัญญูกตเวที (ผู้รู้คุณและตอบแทน) เป็นบุคคลหาได้ยากยิ่ง",
    "reference": "ธรรมวิภาค นวโกวาท หมวด ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-130",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 6 ข้อ 130] กุศลมูล ๓ (รากเหง้าแห่งความดี) มีอะไรบ้าง?",
    "options": [
      "อโลภะ อโทสะ อโมหะ",
      "โลภะ โทสะ โมหะ",
      "ศรัทธา วิริยะ ปัญญา",
      "ศีล สมาธิ ปัญญา"
    ],
    "correctIndex": 0,
    "explanation": "กุศลมูล ๓ คือ อโลภะ (ไม่โลภ), อโทสะ (ไม่โกรธ), อโมหะ (ไม่หลง/มีปัญญา)",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-131",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 6 ข้อ 131] อกุศลมูล ๓ (รากเหง้าแห่งความชั่ว) มีอะไรบ้าง?",
    "options": [
      "โลภะ โทสะ โมหะ",
      "ราคะ ตัณหา อุปาทาน",
      "กาม ภพ อวิชชา",
      "พยาบาท อภิชฌา มิจฉาทิฏฐิ"
    ],
    "correctIndex": 0,
    "explanation": "อกุศลมูล ๓ คือ โลภะ โทสะ โมหะ เป็นต้นตอแห่งบาปธรรมทั้งปวง",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-132",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 6 ข้อ 132] สุจริต ๓ หมายถึงความประพฤติดีทางใดบ้าง?",
    "options": [
      "กายสุจริต วจีสุจริต มโนสุจริต",
      "ทาน ศีล ภาวนา",
      "กาย วาจา ทรัพย์",
      "ตา หู ใจ"
    ],
    "correctIndex": 0,
    "explanation": "สุจริต ๓ คือ ความประพฤติดีทางกาย วาจา และใจ",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-133",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 6 ข้อ 133] ทุจริต ๓ หมายถึงความประพฤติชั่วทางใดบ้าง?",
    "options": [
      "กายทุจริต วจีทุจริต มโนทุจริต",
      "โลภ โกรธ หลง",
      "ราคะ โทสะ โมหะ",
      "ฆ่าสัตว์ ลักทรัพย์ พูดเท็จ"
    ],
    "correctIndex": 0,
    "explanation": "ทุจริต ๓ คือ ความชั่วเสียหายทางกาย วาจา และใจ",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-134",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 6 ข้อ 134] ธรรมาธิปไตย ในหลักอธิปไตย ๓ หมายถึงอะไร?",
    "options": [
      "การถือธรรม ความถูกต้อง และความจริงเป็นใหญ่",
      "การถือตนเองเป็นใหญ่",
      "การถือเสียงมหาชนเป็นใหญ่",
      "การถืออำนาจเป็นใหญ่"
    ],
    "correctIndex": 0,
    "explanation": "ธรรมาธิปไตย คือ การยึดหลักธรรมและความถูกต้องเป็นเกณฑ์ตัดสินสูงสุด",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-135",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 6 ข้อ 135] อิทธิบาท ๔ ข้อใดหมายถึงความพอใจรักใคร่ในงาน?",
    "options": [
      "ฉันทะ",
      "วิริยะ",
      "จิตตะ",
      "วิมังสา"
    ],
    "correctIndex": 0,
    "explanation": "ฉันทะ คือ ความรักใคร่พึงพอใจในสิ่งที่ทำ",
    "reference": "ธรรมวิภาค อิทธิบาท ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-136",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 6 ข้อ 136] พรหมวิหาร ๔ มีอะไรบ้าง?",
    "options": [
      "เมตตา กรุณา มุทิตา อุเบกขา",
      "ทาน ศีล ภาวนา สมาธิ",
      "สัจจะ ทมะ ขันติ จาคะ",
      "ฉันทะ วิริยะ จิตตะ วิมังสา"
    ],
    "correctIndex": 0,
    "explanation": "พรหมวิหาร ๔ คือ เมตตา (ปรารถนาให้สุข) กรุณา (คิดช่วยให้พ้นทุกข์) มุทิตา (ยินดีเมื่อได้ดี) อุเบกขา (วางเฉยเป็นกลาง)",
    "reference": "ธรรมวิภาค พรหมวิหาร ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-137",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 6 ข้อ 137] ฆราวาสธรรม ๔ ประกอบด้วยอะไรบ้าง?",
    "options": [
      "สัจจะ ทมะ ขันติ จาคะ",
      "ทาน ศีล สมาธิ ปัญญา",
      "เมตตา กรุณา มุทิตา อุเบกขา",
      "อโลภะ อโทสะ อโมหะ ขันติ"
    ],
    "correctIndex": 0,
    "explanation": "ฆราวาสธรรม ๔: สัจจะ (ซื่อสัตย์) ทมะ (ข่มใจ) ขันติ (อดทน) จาคะ (สละให้ปัน)",
    "reference": "ธรรมวิภาค ฆราวาสธรรม ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-138",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 6 ข้อ 138] สังคหวัตถุ ๔ (ธรรมเครื่องยึดเหนี่ยวใจคน) มีอะไรบ้าง?",
    "options": [
      "ทาน ปิยวาจา อัตถจริยา สมานัตตตา",
      "สัจจะ ทมะ ขันติ จาคะ",
      "ศีล สมาธิ ปัญญา วิมุตติ",
      "ฉันทะ วิริยะ จิตตะ วิมังสา"
    ],
    "correctIndex": 0,
    "explanation": "สังคหวัตถุ ๔: ทาน (ให้ปัน) ปิยวาจา (พูดจาดี) อัตถจริยา (บำเพ็ญประโยชน์) สมานัตตตา (เสมอต้นเสมอปลาย)",
    "reference": "ธรรมวิภาค สังคหวัตถุ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-139",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 6 ข้อ 139] ทิฏฐธัมมิกัตถประโยชน์ ๔ (หัวใจเศรษฐี: อุ อา กะ สะ) 'อุ' คืออะไร?",
    "options": [
      "อุฏฐานสัมปทา (ขยันหาทรัพย์โดยสุจริต)",
      "อารักขสัมปทา",
      "กัลยาณมิตตตา",
      "สมชีวิตา"
    ],
    "correctIndex": 0,
    "explanation": "อุฏฐานสัมปทา คือ ความขยันขันแข็งในการประกอบสัมมาอาชีพ",
    "reference": "ธรรมวิภาค ทิฏฐธัมมิกัตถะ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-140",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 6 ข้อ 140] เบญจศีล (ศีล ๕) ข้อที่ ๒ งดเว้นจากอะไร?",
    "options": [
      "อทินนาทาน (ลักทรัพย์)",
      "ปาณาติบาต (ฆ่าสัตว์)",
      "กาเมสุมิจฉาจาร",
      "มุสาวาท"
    ],
    "correctIndex": 0,
    "explanation": "ศีลข้อ ๒ คืองดเว้นจากการลักขโมย เบียดบังทรัพย์ผู้อื่น",
    "reference": "ธรรมวิภาค ศีล ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-141",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 6 ข้อ 141] เบญจธรรม ๕ ธรรมคู่ปรับกับศีลข้อ ๑ (ไม่ฆ่าสัตว์) คืออะไร?",
    "options": [
      "เมตตากรุณา",
      "สัมมาอาชีวะ",
      "กามสังวร",
      "สัจจะ"
    ],
    "correctIndex": 0,
    "explanation": "เมตตากรุณาเป็นธรรมคู่กับศีลข้อ ๑ เพื่อให้มีความรักใคร่เอื้ออาทรต่อสรรพสัตว์",
    "reference": "ธรรมวิภาค เบญจธรรม ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-142",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 6 ข้อ 142] ขันธ์ ๕ กองแห่งชีวิต ได้แก่อะไรบ้าง?",
    "options": [
      "รูป เวทนา สัญญา สังขาร วิญญาณ",
      "ตา หู จมูก ลิ้น กาย",
      "ศีล สมาธิ ปัญญา วิมุตติ วิมุตติญาณ",
      "ดิน น้ำ ลม ไฟ อากาศ"
    ],
    "correctIndex": 0,
    "explanation": "ขันธ์ ๕ ประกอบด้วย รูป (กาย) เวทนา (ความรู้สึก) สัญญา (ความจำ) สังขาร (การปรุงแต่งจิต) วิญญาณ (การรับรู้)",
    "reference": "ธรรมวิภาค ขันธ์ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-143",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 6 ข้อ 143] นิวรณ์ ๕ ข้อใดหมายถึงความหดหู่ ท้อแท้ ง่วงเหงาหาวนอน?",
    "options": [
      "ถีนมิทธะ",
      "กามฉันทะ",
      "พยาบาท",
      "อุทธัจจกุกกุจจะ"
    ],
    "correctIndex": 0,
    "explanation": "ถีนมิทธะ คือ ความหดหู่เซื่องซึมของจิตใจ",
    "reference": "ธรรมวิภาค นิวรณ์ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-144",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 6 ข้อ 144] อบายมุข ๖ ข้อแรกคือข้อใด?",
    "options": [
      "การดื่มน้ำเมา",
      "การเที่ยวกลางคืน",
      "การดูการละเล่น",
      "การเล่นการพนัน"
    ],
    "correctIndex": 0,
    "explanation": "อบายมุขข้อแรกคือ การดื่มสุราและของมึนเมา",
    "reference": "ธรรมวิภาค อบายมุข ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-145",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 6 ข้อ 145] ทิศ ๖ ทิศเบื้องหน้า (ปุรัตถิมทิศ) หมายถึงใคร?",
    "options": [
      "บิดามารดา",
      "ครูอาจารย์",
      "บุตรภรรยา",
      "มิตรสหาย"
    ],
    "correctIndex": 0,
    "explanation": "ทิศเบื้องหน้าคือบิดามารดา ผู้มีพระคุณดูแลเรามาตั้งแต่ต้น",
    "reference": "ธรรมวิภาค ทิศ ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-146",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 6 ข้อ 146] สัปปุริสธรรม ๗ ข้อใดหมายถึงการเป็นผู้รู้จักเหตุ?",
    "options": [
      "ธัมมัญญุตา",
      "อัตถัญญุตา",
      "อัตตัญญุตา",
      "มัตตัญญุตา"
    ],
    "correctIndex": 0,
    "explanation": "ธัมมัญญุตา คือ ความเป็นผู้รู้จักเหตุ",
    "reference": "ธรรมวิภาค สัปปุริสธรรม ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-147",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 6 ข้อ 147] อริยทรัพย์ ๗ ข้อใดมิใช่ ๑ ในอริยทรัพย์ ๗?",
    "options": [
      "ธนทรัพย์ (เงินทองของนอกกาย)",
      "ศรัทธา",
      "ศีล",
      "ปัญญา"
    ],
    "correctIndex": 0,
    "explanation": "อริยทรัพย์ ๗ เป็นทรัพย์ภายใน: ศรัทธา ศีล หิริ โอตตัปปะ พาหุสัจจะ จาคะ ปัญญา",
    "reference": "ธรรมวิภาค อริยทรัพย์ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-148",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 6 ข้อ 148] โลกธรรม ๘ ฝ่ายอิฏฐารมณ์ (ที่น่าปรารถนา) ได้แก่อะไรบ้าง?",
    "options": [
      "ได้ลาภ ได้ยศ สรรเสริญ สุข",
      "เสื่อมลาภ เสื่อมยศ นินทา ทุกข์",
      "บุญ กุศล บารมี สวรรค์",
      "กาย วาจา ใจ ธรรม"
    ],
    "correctIndex": 0,
    "explanation": "โลกธรรมฝ่ายดี ๔ คือ ได้ลาภ ได้ยศ ได้สรรเสริญ และมีความสุข",
    "reference": "ธรรมวิภาค โลกธรรม ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-149",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 6 ข้อ 149] บุญกิริยาวัตถุ ๑๐ ข้อใดคือบุญสำเร็จด้วยการอ่อนน้อมถ่อมตน?",
    "options": [
      "อปจายนมัย",
      "ทานมัย",
      "สีลมัย",
      "ภาวนามัย"
    ],
    "correctIndex": 0,
    "explanation": "อปจายนมัย คือ บุญจากการประพฤติอ่อนน้อมถ่อมตน",
    "reference": "ธรรมวิภาค บุญกิริยาวัตถุ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-150",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 6 ข้อ 150] ทศพิธราชธรรม ๑๐ ข้อใดหมายถึงความซื่อตรง?",
    "options": [
      "อาชชวะ",
      "มัททวะ",
      "ตปะ",
      "อักโกธะ"
    ],
    "correctIndex": 0,
    "explanation": "อาชชวะ คือ ความซื่อตรงสุจริต",
    "reference": "ธรรมวิภาค ทศพิธราชธรรม ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-151",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 7 ข้อ 151] สติและสัมปชัญญะ จัดเป็นธรรมประเภทใดในนวโกวาท?",
    "options": [
      "ธรรมมีอุปการะมาก ๒",
      "ธรรมคุ้มครองโลก ๒",
      "ธรรมทำให้งาม ๒",
      "โลกบาลธรรม ๒"
    ],
    "correctIndex": 0,
    "explanation": "สติ (ความระลึกได้) และสัมปชัญญะ (ความรู้ตัว) เป็นธรรมมีอุปการะมาก ช่วยเกื้อกูลกิจการทุกประการ",
    "reference": "ธรรมวิภาค นวโกวาท หมวด ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-152",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 7 ข้อ 152] หิริและโอตตัปปะ จัดเป็นธรรมประเภทใด?",
    "options": [
      "ธรรมคุ้มครองโลก (โลกบาลธรรม ๒)",
      "ธรรมมีอุปการะมาก",
      "ธรรมอันทำให้งาม",
      "อารักขธรรม"
    ],
    "correctIndex": 0,
    "explanation": "หิริ (ความละอายบาป) และโอตตัปปะ (ความเกรงกลัวบาป) คุ้มครองโลกให้สงบสุข",
    "reference": "ธรรมวิภาค นวโกวาท หมวด ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-153",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 7 ข้อ 153] ขันติและโสรัจจะ จัดเป็นธรรมประเภทใด?",
    "options": [
      "ธรรมอันทำให้งาม ๒",
      "ธรรมเครื่องเจริญ",
      "ธรรมเครื่องนำทาง",
      "โลกธรรม ๒"
    ],
    "correctIndex": 0,
    "explanation": "ขันติ (ความอดทน) และโสรัจจะ (ความสงบเสงี่ยม) ทำให้ผู้ประพฤติงดงามทั้งกายและใจ",
    "reference": "ธรรมวิภาค นวโกวาท หมวด ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-154",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 7 ข้อ 154] บุคคลหาได้ยาก ๒ ประการ (ทุลลภบุคคล) ได้แก่ใครบ้าง?",
    "options": [
      "บุพการี และ กตัญญูกตเวที",
      "พระราชา และ พระอรหันต์",
      "บิดา และ มารดา",
      "มิตรแท้ และ มิตรเทียม"
    ],
    "correctIndex": 0,
    "explanation": "บุพการี (ผู้อุปการะก่อน) และ กตัญญูกตเวที (ผู้รู้คุณและตอบแทน) เป็นบุคคลหาได้ยากยิ่ง",
    "reference": "ธรรมวิภาค นวโกวาท หมวด ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-155",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 7 ข้อ 155] กุศลมูล ๓ (รากเหง้าแห่งความดี) มีอะไรบ้าง?",
    "options": [
      "อโลภะ อโทสะ อโมหะ",
      "โลภะ โทสะ โมหะ",
      "ศรัทธา วิริยะ ปัญญา",
      "ศีล สมาธิ ปัญญา"
    ],
    "correctIndex": 0,
    "explanation": "กุศลมูล ๓ คือ อโลภะ (ไม่โลภ), อโทสะ (ไม่โกรธ), อโมหะ (ไม่หลง/มีปัญญา)",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-156",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 7 ข้อ 156] อกุศลมูล ๓ (รากเหง้าแห่งความชั่ว) มีอะไรบ้าง?",
    "options": [
      "โลภะ โทสะ โมหะ",
      "ราคะ ตัณหา อุปาทาน",
      "กาม ภพ อวิชชา",
      "พยาบาท อภิชฌา มิจฉาทิฏฐิ"
    ],
    "correctIndex": 0,
    "explanation": "อกุศลมูล ๓ คือ โลภะ โทสะ โมหะ เป็นต้นตอแห่งบาปธรรมทั้งปวง",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-157",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 7 ข้อ 157] สุจริต ๓ หมายถึงความประพฤติดีทางใดบ้าง?",
    "options": [
      "กายสุจริต วจีสุจริต มโนสุจริต",
      "ทาน ศีล ภาวนา",
      "กาย วาจา ทรัพย์",
      "ตา หู ใจ"
    ],
    "correctIndex": 0,
    "explanation": "สุจริต ๓ คือ ความประพฤติดีทางกาย วาจา และใจ",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-158",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 7 ข้อ 158] ทุจริต ๓ หมายถึงความประพฤติชั่วทางใดบ้าง?",
    "options": [
      "กายทุจริต วจีทุจริต มโนทุจริต",
      "โลภ โกรธ หลง",
      "ราคะ โทสะ โมหะ",
      "ฆ่าสัตว์ ลักทรัพย์ พูดเท็จ"
    ],
    "correctIndex": 0,
    "explanation": "ทุจริต ๓ คือ ความชั่วเสียหายทางกาย วาจา และใจ",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-159",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 7 ข้อ 159] ธรรมาธิปไตย ในหลักอธิปไตย ๓ หมายถึงอะไร?",
    "options": [
      "การถือธรรม ความถูกต้อง และความจริงเป็นใหญ่",
      "การถือตนเองเป็นใหญ่",
      "การถือเสียงมหาชนเป็นใหญ่",
      "การถืออำนาจเป็นใหญ่"
    ],
    "correctIndex": 0,
    "explanation": "ธรรมาธิปไตย คือ การยึดหลักธรรมและความถูกต้องเป็นเกณฑ์ตัดสินสูงสุด",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-160",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 7 ข้อ 160] อิทธิบาท ๔ ข้อใดหมายถึงความพอใจรักใคร่ในงาน?",
    "options": [
      "ฉันทะ",
      "วิริยะ",
      "จิตตะ",
      "วิมังสา"
    ],
    "correctIndex": 0,
    "explanation": "ฉันทะ คือ ความรักใคร่พึงพอใจในสิ่งที่ทำ",
    "reference": "ธรรมวิภาค อิทธิบาท ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-161",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 7 ข้อ 161] พรหมวิหาร ๔ มีอะไรบ้าง?",
    "options": [
      "เมตตา กรุณา มุทิตา อุเบกขา",
      "ทาน ศีล ภาวนา สมาธิ",
      "สัจจะ ทมะ ขันติ จาคะ",
      "ฉันทะ วิริยะ จิตตะ วิมังสา"
    ],
    "correctIndex": 0,
    "explanation": "พรหมวิหาร ๔ คือ เมตตา (ปรารถนาให้สุข) กรุณา (คิดช่วยให้พ้นทุกข์) มุทิตา (ยินดีเมื่อได้ดี) อุเบกขา (วางเฉยเป็นกลาง)",
    "reference": "ธรรมวิภาค พรหมวิหาร ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-162",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 7 ข้อ 162] ฆราวาสธรรม ๔ ประกอบด้วยอะไรบ้าง?",
    "options": [
      "สัจจะ ทมะ ขันติ จาคะ",
      "ทาน ศีล สมาธิ ปัญญา",
      "เมตตา กรุณา มุทิตา อุเบกขา",
      "อโลภะ อโทสะ อโมหะ ขันติ"
    ],
    "correctIndex": 0,
    "explanation": "ฆราวาสธรรม ๔: สัจจะ (ซื่อสัตย์) ทมะ (ข่มใจ) ขันติ (อดทน) จาคะ (สละให้ปัน)",
    "reference": "ธรรมวิภาค ฆราวาสธรรม ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-163",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 7 ข้อ 163] สังคหวัตถุ ๔ (ธรรมเครื่องยึดเหนี่ยวใจคน) มีอะไรบ้าง?",
    "options": [
      "ทาน ปิยวาจา อัตถจริยา สมานัตตตา",
      "สัจจะ ทมะ ขันติ จาคะ",
      "ศีล สมาธิ ปัญญา วิมุตติ",
      "ฉันทะ วิริยะ จิตตะ วิมังสา"
    ],
    "correctIndex": 0,
    "explanation": "สังคหวัตถุ ๔: ทาน (ให้ปัน) ปิยวาจา (พูดจาดี) อัตถจริยา (บำเพ็ญประโยชน์) สมานัตตตา (เสมอต้นเสมอปลาย)",
    "reference": "ธรรมวิภาค สังคหวัตถุ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-164",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 7 ข้อ 164] ทิฏฐธัมมิกัตถประโยชน์ ๔ (หัวใจเศรษฐี: อุ อา กะ สะ) 'อุ' คืออะไร?",
    "options": [
      "อุฏฐานสัมปทา (ขยันหาทรัพย์โดยสุจริต)",
      "อารักขสัมปทา",
      "กัลยาณมิตตตา",
      "สมชีวิตา"
    ],
    "correctIndex": 0,
    "explanation": "อุฏฐานสัมปทา คือ ความขยันขันแข็งในการประกอบสัมมาอาชีพ",
    "reference": "ธรรมวิภาค ทิฏฐธัมมิกัตถะ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-165",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 7 ข้อ 165] เบญจศีล (ศีล ๕) ข้อที่ ๒ งดเว้นจากอะไร?",
    "options": [
      "อทินนาทาน (ลักทรัพย์)",
      "ปาณาติบาต (ฆ่าสัตว์)",
      "กาเมสุมิจฉาจาร",
      "มุสาวาท"
    ],
    "correctIndex": 0,
    "explanation": "ศีลข้อ ๒ คืองดเว้นจากการลักขโมย เบียดบังทรัพย์ผู้อื่น",
    "reference": "ธรรมวิภาค ศีล ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-166",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 7 ข้อ 166] เบญจธรรม ๕ ธรรมคู่ปรับกับศีลข้อ ๑ (ไม่ฆ่าสัตว์) คืออะไร?",
    "options": [
      "เมตตากรุณา",
      "สัมมาอาชีวะ",
      "กามสังวร",
      "สัจจะ"
    ],
    "correctIndex": 0,
    "explanation": "เมตตากรุณาเป็นธรรมคู่กับศีลข้อ ๑ เพื่อให้มีความรักใคร่เอื้ออาทรต่อสรรพสัตว์",
    "reference": "ธรรมวิภาค เบญจธรรม ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-167",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 7 ข้อ 167] ขันธ์ ๕ กองแห่งชีวิต ได้แก่อะไรบ้าง?",
    "options": [
      "รูป เวทนา สัญญา สังขาร วิญญาณ",
      "ตา หู จมูก ลิ้น กาย",
      "ศีล สมาธิ ปัญญา วิมุตติ วิมุตติญาณ",
      "ดิน น้ำ ลม ไฟ อากาศ"
    ],
    "correctIndex": 0,
    "explanation": "ขันธ์ ๕ ประกอบด้วย รูป (กาย) เวทนา (ความรู้สึก) สัญญา (ความจำ) สังขาร (การปรุงแต่งจิต) วิญญาณ (การรับรู้)",
    "reference": "ธรรมวิภาค ขันธ์ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-168",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 7 ข้อ 168] นิวรณ์ ๕ ข้อใดหมายถึงความหดหู่ ท้อแท้ ง่วงเหงาหาวนอน?",
    "options": [
      "ถีนมิทธะ",
      "กามฉันทะ",
      "พยาบาท",
      "อุทธัจจกุกกุจจะ"
    ],
    "correctIndex": 0,
    "explanation": "ถีนมิทธะ คือ ความหดหู่เซื่องซึมของจิตใจ",
    "reference": "ธรรมวิภาค นิวรณ์ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-169",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 7 ข้อ 169] อบายมุข ๖ ข้อแรกคือข้อใด?",
    "options": [
      "การดื่มน้ำเมา",
      "การเที่ยวกลางคืน",
      "การดูการละเล่น",
      "การเล่นการพนัน"
    ],
    "correctIndex": 0,
    "explanation": "อบายมุขข้อแรกคือ การดื่มสุราและของมึนเมา",
    "reference": "ธรรมวิภาค อบายมุข ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-170",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 7 ข้อ 170] ทิศ ๖ ทิศเบื้องหน้า (ปุรัตถิมทิศ) หมายถึงใคร?",
    "options": [
      "บิดามารดา",
      "ครูอาจารย์",
      "บุตรภรรยา",
      "มิตรสหาย"
    ],
    "correctIndex": 0,
    "explanation": "ทิศเบื้องหน้าคือบิดามารดา ผู้มีพระคุณดูแลเรามาตั้งแต่ต้น",
    "reference": "ธรรมวิภาค ทิศ ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-171",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 7 ข้อ 171] สัปปุริสธรรม ๗ ข้อใดหมายถึงการเป็นผู้รู้จักเหตุ?",
    "options": [
      "ธัมมัญญุตา",
      "อัตถัญญุตา",
      "อัตตัญญุตา",
      "มัตตัญญุตา"
    ],
    "correctIndex": 0,
    "explanation": "ธัมมัญญุตา คือ ความเป็นผู้รู้จักเหตุ",
    "reference": "ธรรมวิภาค สัปปุริสธรรม ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-172",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 7 ข้อ 172] อริยทรัพย์ ๗ ข้อใดมิใช่ ๑ ในอริยทรัพย์ ๗?",
    "options": [
      "ธนทรัพย์ (เงินทองของนอกกาย)",
      "ศรัทธา",
      "ศีล",
      "ปัญญา"
    ],
    "correctIndex": 0,
    "explanation": "อริยทรัพย์ ๗ เป็นทรัพย์ภายใน: ศรัทธา ศีล หิริ โอตตัปปะ พาหุสัจจะ จาคะ ปัญญา",
    "reference": "ธรรมวิภาค อริยทรัพย์ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-173",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 7 ข้อ 173] โลกธรรม ๘ ฝ่ายอิฏฐารมณ์ (ที่น่าปรารถนา) ได้แก่อะไรบ้าง?",
    "options": [
      "ได้ลาภ ได้ยศ สรรเสริญ สุข",
      "เสื่อมลาภ เสื่อมยศ นินทา ทุกข์",
      "บุญ กุศล บารมี สวรรค์",
      "กาย วาจา ใจ ธรรม"
    ],
    "correctIndex": 0,
    "explanation": "โลกธรรมฝ่ายดี ๔ คือ ได้ลาภ ได้ยศ ได้สรรเสริญ และมีความสุข",
    "reference": "ธรรมวิภาค โลกธรรม ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-174",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 7 ข้อ 174] บุญกิริยาวัตถุ ๑๐ ข้อใดคือบุญสำเร็จด้วยการอ่อนน้อมถ่อมตน?",
    "options": [
      "อปจายนมัย",
      "ทานมัย",
      "สีลมัย",
      "ภาวนามัย"
    ],
    "correctIndex": 0,
    "explanation": "อปจายนมัย คือ บุญจากการประพฤติอ่อนน้อมถ่อมตน",
    "reference": "ธรรมวิภาค บุญกิริยาวัตถุ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-175",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 7 ข้อ 175] ทศพิธราชธรรม ๑๐ ข้อใดหมายถึงความซื่อตรง?",
    "options": [
      "อาชชวะ",
      "มัททวะ",
      "ตปะ",
      "อักโกธะ"
    ],
    "correctIndex": 0,
    "explanation": "อาชชวะ คือ ความซื่อตรงสุจริต",
    "reference": "ธรรมวิภาค ทศพิธราชธรรม ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-176",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 8 ข้อ 176] สติและสัมปชัญญะ จัดเป็นธรรมประเภทใดในนวโกวาท?",
    "options": [
      "ธรรมมีอุปการะมาก ๒",
      "ธรรมคุ้มครองโลก ๒",
      "ธรรมทำให้งาม ๒",
      "โลกบาลธรรม ๒"
    ],
    "correctIndex": 0,
    "explanation": "สติ (ความระลึกได้) และสัมปชัญญะ (ความรู้ตัว) เป็นธรรมมีอุปการะมาก ช่วยเกื้อกูลกิจการทุกประการ",
    "reference": "ธรรมวิภาค นวโกวาท หมวด ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-177",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 8 ข้อ 177] หิริและโอตตัปปะ จัดเป็นธรรมประเภทใด?",
    "options": [
      "ธรรมคุ้มครองโลก (โลกบาลธรรม ๒)",
      "ธรรมมีอุปการะมาก",
      "ธรรมอันทำให้งาม",
      "อารักขธรรม"
    ],
    "correctIndex": 0,
    "explanation": "หิริ (ความละอายบาป) และโอตตัปปะ (ความเกรงกลัวบาป) คุ้มครองโลกให้สงบสุข",
    "reference": "ธรรมวิภาค นวโกวาท หมวด ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-178",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 8 ข้อ 178] ขันติและโสรัจจะ จัดเป็นธรรมประเภทใด?",
    "options": [
      "ธรรมอันทำให้งาม ๒",
      "ธรรมเครื่องเจริญ",
      "ธรรมเครื่องนำทาง",
      "โลกธรรม ๒"
    ],
    "correctIndex": 0,
    "explanation": "ขันติ (ความอดทน) และโสรัจจะ (ความสงบเสงี่ยม) ทำให้ผู้ประพฤติงดงามทั้งกายและใจ",
    "reference": "ธรรมวิภาค นวโกวาท หมวด ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-179",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 8 ข้อ 179] บุคคลหาได้ยาก ๒ ประการ (ทุลลภบุคคล) ได้แก่ใครบ้าง?",
    "options": [
      "บุพการี และ กตัญญูกตเวที",
      "พระราชา และ พระอรหันต์",
      "บิดา และ มารดา",
      "มิตรแท้ และ มิตรเทียม"
    ],
    "correctIndex": 0,
    "explanation": "บุพการี (ผู้อุปการะก่อน) และ กตัญญูกตเวที (ผู้รู้คุณและตอบแทน) เป็นบุคคลหาได้ยากยิ่ง",
    "reference": "ธรรมวิภาค นวโกวาท หมวด ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-180",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 8 ข้อ 180] กุศลมูล ๓ (รากเหง้าแห่งความดี) มีอะไรบ้าง?",
    "options": [
      "อโลภะ อโทสะ อโมหะ",
      "โลภะ โทสะ โมหะ",
      "ศรัทธา วิริยะ ปัญญา",
      "ศีล สมาธิ ปัญญา"
    ],
    "correctIndex": 0,
    "explanation": "กุศลมูล ๓ คือ อโลภะ (ไม่โลภ), อโทสะ (ไม่โกรธ), อโมหะ (ไม่หลง/มีปัญญา)",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-181",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 8 ข้อ 181] อกุศลมูล ๓ (รากเหง้าแห่งความชั่ว) มีอะไรบ้าง?",
    "options": [
      "โลภะ โทสะ โมหะ",
      "ราคะ ตัณหา อุปาทาน",
      "กาม ภพ อวิชชา",
      "พยาบาท อภิชฌา มิจฉาทิฏฐิ"
    ],
    "correctIndex": 0,
    "explanation": "อกุศลมูล ๓ คือ โลภะ โทสะ โมหะ เป็นต้นตอแห่งบาปธรรมทั้งปวง",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-182",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 8 ข้อ 182] สุจริต ๓ หมายถึงความประพฤติดีทางใดบ้าง?",
    "options": [
      "กายสุจริต วจีสุจริต มโนสุจริต",
      "ทาน ศีล ภาวนา",
      "กาย วาจา ทรัพย์",
      "ตา หู ใจ"
    ],
    "correctIndex": 0,
    "explanation": "สุจริต ๓ คือ ความประพฤติดีทางกาย วาจา และใจ",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-183",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 8 ข้อ 183] ทุจริต ๓ หมายถึงความประพฤติชั่วทางใดบ้าง?",
    "options": [
      "กายทุจริต วจีทุจริต มโนทุจริต",
      "โลภ โกรธ หลง",
      "ราคะ โทสะ โมหะ",
      "ฆ่าสัตว์ ลักทรัพย์ พูดเท็จ"
    ],
    "correctIndex": 0,
    "explanation": "ทุจริต ๓ คือ ความชั่วเสียหายทางกาย วาจา และใจ",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-184",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 8 ข้อ 184] ธรรมาธิปไตย ในหลักอธิปไตย ๓ หมายถึงอะไร?",
    "options": [
      "การถือธรรม ความถูกต้อง และความจริงเป็นใหญ่",
      "การถือตนเองเป็นใหญ่",
      "การถือเสียงมหาชนเป็นใหญ่",
      "การถืออำนาจเป็นใหญ่"
    ],
    "correctIndex": 0,
    "explanation": "ธรรมาธิปไตย คือ การยึดหลักธรรมและความถูกต้องเป็นเกณฑ์ตัดสินสูงสุด",
    "reference": "ธรรมวิภาค หมวด ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-185",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 8 ข้อ 185] อิทธิบาท ๔ ข้อใดหมายถึงความพอใจรักใคร่ในงาน?",
    "options": [
      "ฉันทะ",
      "วิริยะ",
      "จิตตะ",
      "วิมังสา"
    ],
    "correctIndex": 0,
    "explanation": "ฉันทะ คือ ความรักใคร่พึงพอใจในสิ่งที่ทำ",
    "reference": "ธรรมวิภาค อิทธิบาท ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-186",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 8 ข้อ 186] พรหมวิหาร ๔ มีอะไรบ้าง?",
    "options": [
      "เมตตา กรุณา มุทิตา อุเบกขา",
      "ทาน ศีล ภาวนา สมาธิ",
      "สัจจะ ทมะ ขันติ จาคะ",
      "ฉันทะ วิริยะ จิตตะ วิมังสา"
    ],
    "correctIndex": 0,
    "explanation": "พรหมวิหาร ๔ คือ เมตตา (ปรารถนาให้สุข) กรุณา (คิดช่วยให้พ้นทุกข์) มุทิตา (ยินดีเมื่อได้ดี) อุเบกขา (วางเฉยเป็นกลาง)",
    "reference": "ธรรมวิภาค พรหมวิหาร ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-187",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 8 ข้อ 187] ฆราวาสธรรม ๔ ประกอบด้วยอะไรบ้าง?",
    "options": [
      "สัจจะ ทมะ ขันติ จาคะ",
      "ทาน ศีล สมาธิ ปัญญา",
      "เมตตา กรุณา มุทิตา อุเบกขา",
      "อโลภะ อโทสะ อโมหะ ขันติ"
    ],
    "correctIndex": 0,
    "explanation": "ฆราวาสธรรม ๔: สัจจะ (ซื่อสัตย์) ทมะ (ข่มใจ) ขันติ (อดทน) จาคะ (สละให้ปัน)",
    "reference": "ธรรมวิภาค ฆราวาสธรรม ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-188",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 8 ข้อ 188] สังคหวัตถุ ๔ (ธรรมเครื่องยึดเหนี่ยวใจคน) มีอะไรบ้าง?",
    "options": [
      "ทาน ปิยวาจา อัตถจริยา สมานัตตตา",
      "สัจจะ ทมะ ขันติ จาคะ",
      "ศีล สมาธิ ปัญญา วิมุตติ",
      "ฉันทะ วิริยะ จิตตะ วิมังสา"
    ],
    "correctIndex": 0,
    "explanation": "สังคหวัตถุ ๔: ทาน (ให้ปัน) ปิยวาจา (พูดจาดี) อัตถจริยา (บำเพ็ญประโยชน์) สมานัตตตา (เสมอต้นเสมอปลาย)",
    "reference": "ธรรมวิภาค สังคหวัตถุ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-189",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 8 ข้อ 189] ทิฏฐธัมมิกัตถประโยชน์ ๔ (หัวใจเศรษฐี: อุ อา กะ สะ) 'อุ' คืออะไร?",
    "options": [
      "อุฏฐานสัมปทา (ขยันหาทรัพย์โดยสุจริต)",
      "อารักขสัมปทา",
      "กัลยาณมิตตตา",
      "สมชีวิตา"
    ],
    "correctIndex": 0,
    "explanation": "อุฏฐานสัมปทา คือ ความขยันขันแข็งในการประกอบสัมมาอาชีพ",
    "reference": "ธรรมวิภาค ทิฏฐธัมมิกัตถะ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-190",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 8 ข้อ 190] เบญจศีล (ศีล ๕) ข้อที่ ๒ งดเว้นจากอะไร?",
    "options": [
      "อทินนาทาน (ลักทรัพย์)",
      "ปาณาติบาต (ฆ่าสัตว์)",
      "กาเมสุมิจฉาจาร",
      "มุสาวาท"
    ],
    "correctIndex": 0,
    "explanation": "ศีลข้อ ๒ คืองดเว้นจากการลักขโมย เบียดบังทรัพย์ผู้อื่น",
    "reference": "ธรรมวิภาค ศีล ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-191",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 8 ข้อ 191] เบญจธรรม ๕ ธรรมคู่ปรับกับศีลข้อ ๑ (ไม่ฆ่าสัตว์) คืออะไร?",
    "options": [
      "เมตตากรุณา",
      "สัมมาอาชีวะ",
      "กามสังวร",
      "สัจจะ"
    ],
    "correctIndex": 0,
    "explanation": "เมตตากรุณาเป็นธรรมคู่กับศีลข้อ ๑ เพื่อให้มีความรักใคร่เอื้ออาทรต่อสรรพสัตว์",
    "reference": "ธรรมวิภาค เบญจธรรม ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-192",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 8 ข้อ 192] ขันธ์ ๕ กองแห่งชีวิต ได้แก่อะไรบ้าง?",
    "options": [
      "รูป เวทนา สัญญา สังขาร วิญญาณ",
      "ตา หู จมูก ลิ้น กาย",
      "ศีล สมาธิ ปัญญา วิมุตติ วิมุตติญาณ",
      "ดิน น้ำ ลม ไฟ อากาศ"
    ],
    "correctIndex": 0,
    "explanation": "ขันธ์ ๕ ประกอบด้วย รูป (กาย) เวทนา (ความรู้สึก) สัญญา (ความจำ) สังขาร (การปรุงแต่งจิต) วิญญาณ (การรับรู้)",
    "reference": "ธรรมวิภาค ขันธ์ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-193",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 8 ข้อ 193] นิวรณ์ ๕ ข้อใดหมายถึงความหดหู่ ท้อแท้ ง่วงเหงาหาวนอน?",
    "options": [
      "ถีนมิทธะ",
      "กามฉันทะ",
      "พยาบาท",
      "อุทธัจจกุกกุจจะ"
    ],
    "correctIndex": 0,
    "explanation": "ถีนมิทธะ คือ ความหดหู่เซื่องซึมของจิตใจ",
    "reference": "ธรรมวิภาค นิวรณ์ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-194",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 8 ข้อ 194] อบายมุข ๖ ข้อแรกคือข้อใด?",
    "options": [
      "การดื่มน้ำเมา",
      "การเที่ยวกลางคืน",
      "การดูการละเล่น",
      "การเล่นการพนัน"
    ],
    "correctIndex": 0,
    "explanation": "อบายมุขข้อแรกคือ การดื่มสุราและของมึนเมา",
    "reference": "ธรรมวิภาค อบายมุข ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-195",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 8 ข้อ 195] ทิศ ๖ ทิศเบื้องหน้า (ปุรัตถิมทิศ) หมายถึงใคร?",
    "options": [
      "บิดามารดา",
      "ครูอาจารย์",
      "บุตรภรรยา",
      "มิตรสหาย"
    ],
    "correctIndex": 0,
    "explanation": "ทิศเบื้องหน้าคือบิดามารดา ผู้มีพระคุณดูแลเรามาตั้งแต่ต้น",
    "reference": "ธรรมวิภาค ทิศ ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-196",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 8 ข้อ 196] สัปปุริสธรรม ๗ ข้อใดหมายถึงการเป็นผู้รู้จักเหตุ?",
    "options": [
      "ธัมมัญญุตา",
      "อัตถัญญุตา",
      "อัตตัญญุตา",
      "มัตตัญญุตา"
    ],
    "correctIndex": 0,
    "explanation": "ธัมมัญญุตา คือ ความเป็นผู้รู้จักเหตุ",
    "reference": "ธรรมวิภาค สัปปุริสธรรม ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-197",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 8 ข้อ 197] อริยทรัพย์ ๗ ข้อใดมิใช่ ๑ ในอริยทรัพย์ ๗?",
    "options": [
      "ธนทรัพย์ (เงินทองของนอกกาย)",
      "ศรัทธา",
      "ศีล",
      "ปัญญา"
    ],
    "correctIndex": 0,
    "explanation": "อริยทรัพย์ ๗ เป็นทรัพย์ภายใน: ศรัทธา ศีล หิริ โอตตัปปะ พาหุสัจจะ จาคะ ปัญญา",
    "reference": "ธรรมวิภาค อริยทรัพย์ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-198",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 8 ข้อ 198] โลกธรรม ๘ ฝ่ายอิฏฐารมณ์ (ที่น่าปรารถนา) ได้แก่อะไรบ้าง?",
    "options": [
      "ได้ลาภ ได้ยศ สรรเสริญ สุข",
      "เสื่อมลาภ เสื่อมยศ นินทา ทุกข์",
      "บุญ กุศล บารมี สวรรค์",
      "กาย วาจา ใจ ธรรม"
    ],
    "correctIndex": 0,
    "explanation": "โลกธรรมฝ่ายดี ๔ คือ ได้ลาภ ได้ยศ ได้สรรเสริญ และมีความสุข",
    "reference": "ธรรมวิภาค โลกธรรม ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-199",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 8 ข้อ 199] บุญกิริยาวัตถุ ๑๐ ข้อใดคือบุญสำเร็จด้วยการอ่อนน้อมถ่อมตน?",
    "options": [
      "อปจายนมัย",
      "ทานมัย",
      "สีลมัย",
      "ภาวนามัย"
    ],
    "correctIndex": 0,
    "explanation": "อปจายนมัย คือ บุญจากการประพฤติอ่อนน้อมถ่อมตน",
    "reference": "ธรรมวิภาค บุญกิริยาวัตถุ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-d-200",
    "grade": "ตรี",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 8 ข้อ 200] ทศพิธราชธรรม ๑๐ ข้อใดหมายถึงความซื่อตรง?",
    "options": [
      "อาชชวะ",
      "มัททวะ",
      "ตปะ",
      "อักโกธะ"
    ],
    "correctIndex": 0,
    "explanation": "อาชชวะ คือ ความซื่อตรงสุจริต",
    "reference": "ธรรมวิภาค ทศพิธราชธรรม ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-001",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "พระพุทธเจ้าประสูติ ณ สถานที่ใด?",
    "options": [
      "ลุมพินีวัน (ระหว่างเมืองกบิลพัสดุ์และเทวทหะ)",
      "พุทธคยา",
      "สารนาถ",
      "กุสินารา"
    ],
    "correctIndex": 0,
    "explanation": "พระสิทธัตถราชกุมารประสูติ ณ ลุมพินีวัน ในวันเพ็ญเดือน ๖",
    "reference": "พุทธประวัติ ปริเฉทที่ ๑",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-002",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "พระราชพิธีขนานพระนาม ทรงได้รับเฉลิมพระนามว่าอะไร?",
    "options": [
      "สิทธัตถะ (แปลว่า ผู้ทำความต้องการให้สำเร็จ)",
      "โคตมะ",
      "ศากยมุนี",
      "ชินสีห์"
    ],
    "correctIndex": 0,
    "explanation": "สิทธัตถะ มีความหมายว่า ผู้มีความต้องการสำเร็จสมประสงค์",
    "reference": "พุทธประวัติ ปริเฉทที่ ๑",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-003",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "อสิตดาบส (กาฬเทวิน) ทำนายลักษณะพระกุมารอย่างไร?",
    "options": [
      "จะได้ตรัสรู้เป็นพระสัมมาสัมพุทธเจ้าแน่นอน",
      "จะได้เป็นจักรพรรดิผู้ครองโลก",
      "จะได้เป็นมหาเศรษฐี",
      "จะได้เป็นแม่ทัพ"
    ],
    "correctIndex": 0,
    "explanation": "อสิตดาบสตรวจดูลักษณะมหาบุรุษ ๓๒ ประการแล้ว ยืนยันว่าพระราชกุมารจะออกบวชและตรัสรู้แน่นอน",
    "reference": "พุทธประวัติ ปริเฉทที่ ๑",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-004",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "เทวทูต ๔ ที่ทรงทอดพระเนตรเห็นระหว่างเสด็จประพาสอุทยานคืออะไร?",
    "options": [
      "คนแก่ คนเจ็บ คนตาย และ สมณะ",
      "คนจน คนพิการ คนตาบอด นักโทษ",
      "ไฟไหม้ น้ำท่วม พายุ แผ่นดินไหว",
      "เทวดา พรหม มนุษย์ สัตว์"
    ],
    "correctIndex": 0,
    "explanation": "เทวทูต ๔: คนแก่ คนเจ็บ คนตาย และนักบวช เป็นสิ่งเตือนสติให้ออกบวช",
    "reference": "พุทธประวัติ ปริเฉทที่ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-005",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๓",
    "question": "เจ้าชายสิทธัตถะเสด็จออกมหาภิเนษกรมณ์ (ออกบวช) เมื่อมีพระชนมายุเท่าใด?",
    "options": [
      "๒๙ พรรษา",
      "๒๕ พรรษา",
      "๓๕ พรรษา",
      "๘๐ พรรษา"
    ],
    "correctIndex": 0,
    "explanation": "ทรงสละราชสมบัติออกบวชเมื่อพระชนมายุ ๒๙ พรรษา",
    "reference": "พุทธประวัติ ปริเฉทที่ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-006",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๔",
    "question": "มหาดเล็กผู้ตามเสด็จและม้าคู่พระทัยในคืนเสด็จออกบวชคือใคร?",
    "options": [
      "นายฉันนะ และ ม้ากัณฐกะ",
      "นายจุนทะ และ ช้างนาฬาคิรี",
      "นายโสตถิยะ และ ม้าพลาย",
      "อสิตดาบส และ ม้าขาว"
    ],
    "correctIndex": 0,
    "explanation": "นายฉันนะและม้ากัณฐกะตามเสด็จข้ามแม่น้ำอโนมา",
    "reference": "พุทธประวัติ ปริเฉทที่ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-007",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๕",
    "question": "ทรงตัดพระโมฬี (เกศา) อธิษฐานเพศบรรพชิต ณ ริมฝั่งแม่น้ำใด?",
    "options": [
      "แม่น้ำอโนมา",
      "แม่น้ำเนรัญชรา",
      "แม่น้ำคงคา",
      "แม่น้ำยมุนา"
    ],
    "correctIndex": 0,
    "explanation": "ทรงตัดพระเมาลีและทรงรับอัฐบริขาร ณ ริมฝั่งแม่น้ำอโนมา",
    "reference": "พุทธประวัติ ปริเฉทที่ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-008",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระมหาบุรุษทรงศึกษาในสำนักของดาบส ๒ ท่านแรก คือใคร?",
    "options": [
      "อาฬารดาบส กาลามโคตร และ อุทกดาบส รามบุตร",
      "อสิตดาบส และ ชฎิล ๓ พี่น้อง",
      "สัญชัยปริพาชก และ โกณฑัญญะ",
      "พาวรีดาบส และ ปัญจวัคคีย์"
    ],
    "correctIndex": 0,
    "explanation": "ทรงสำเร็จสมาบัติ ๘ ในสำนักอาฬารดาบสและอุทกดาบส",
    "reference": "พุทธประวัติ ปริเฉทที่ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-009",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "ทรงบำเพ็ญทุกรกิริยาเป็นเวลานานเท่าใด?",
    "options": [
      "๖ ปีเต็ม",
      "๓ ปี",
      "๑ ปี",
      "๑๒ ปี"
    ],
    "correctIndex": 0,
    "explanation": "ทรงบำเพ็ญทุกรกิริยา ๖ ปี จึงพบว่าการทรมานกายมิใช่ทางตรัสรู้",
    "reference": "พุทธประวัติ ปริเฉทที่ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-010",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "ในเช้าวันตรัสรู้ นางสุชาดาน้อมถวายสิ่งใดใต้ต้นไทร?",
    "options": [
      "ข้าวมธุปายาสใส่ถาดทองคำ",
      "ผลไม้ป่า",
      "น้ำผึ้งรวง",
      "ผ้าสาฎก"
    ],
    "correctIndex": 0,
    "explanation": "นางสุชาดาถวายข้าวมธุปายาสอันประณีต",
    "reference": "พุทธประวัติ ปริเฉทที่ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-011",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "พระมหาบุรุษทรงผจญพญามารและเสนามารในเวลาใดของวันตรัสรู้?",
    "options": [
      "เวลาเย็นก่อนพระอาทิตย์ตก",
      "เวลาเที่ยงวัน",
      "เวลารุ่งอรุณ",
      "เวลาเที่ยงคืน"
    ],
    "correctIndex": 0,
    "explanation": "พญามารยกทัพมาในเวลาเย็น ทรงปราบมารด้วยบารมี ๑๐ ทัศและแม่พระธรณี",
    "reference": "พุทธประวัติ ปริเฉทที่ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-012",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "ปัจฉิมยามในคืนตรัสรู้ ทรงบรรลุญาณใดที่ทำให้ตรัสรู้เป็นพระพุทธเจ้า?",
    "options": [
      "อาสวักขยญาณ (ญาณรู้ความสิ้นไปแห่งกิเลสอาสวะ)",
      "ปุพเพนิวาสานุสสติญาณ",
      "จุตูปปาตญาณ",
      "อภิญญา ๖"
    ],
    "correctIndex": 0,
    "explanation": "ทรงบรรลุอาสวักขยญาณ รู้แจ้งในอริยสัจ ๔ ตรัสรู้เป็นพระสัมมาสัมพุทธเจ้า",
    "reference": "พุทธประวัติ ปริเฉทที่ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-013",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๓",
    "question": "พระพุทธเจ้าตรัสรู้เมื่อพระชนมายุเท่าใด?",
    "options": [
      "๓๕ พรรษา",
      "๒๙ พรรษา",
      "๔๕ พรรษา",
      "๘๐ พรรษา"
    ],
    "correctIndex": 0,
    "explanation": "ตรัสรู้ในเช้าตรู่วันเพ็ญเดือน ๖ ขณะมีพระชนมายุ ๓๕ พรรษา",
    "reference": "พุทธประวัติ ปริเฉทที่ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-014",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๔",
    "question": "ปฐมเทศนา 'ธัมมจักกัปปวัตตนสูตร' ทรงแสดงแก่ปัญจวัคคีย์ ในวันใด?",
    "options": [
      "วันเพ็ญเดือน ๘ (วันอาสาฬหบูชา)",
      "วันเพ็ญเดือน ๖",
      "วันเพ็ญเดือน ๓",
      "วันแรม ๑ ค่ำ เดือน ๘"
    ],
    "correctIndex": 0,
    "explanation": "ทรงแสดงปฐมเทศนาในวันขึ้น ๑๕ ค่ำ เดือน ๘ ณ ป่าอิสิปตนมฤคทายวัน",
    "reference": "พุทธประวัติ ปริเฉทที่ ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-015",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๕",
    "question": "พระภิกษุรูปแรกในพระพุทธศาสนาคือใคร?",
    "options": [
      "ท่านอัญญาโกณฑัญญะ",
      "ท่านวัปปะ",
      "ท่านภัททิยะ",
      "พระสารีบุตร"
    ],
    "correctIndex": 0,
    "explanation": "ท่านโกณฑัญญะได้ดวงตาเห็นธรรมและได้รับการบวชเป็นพระภิกษุรูปแรกในโลก",
    "reference": "พุทธประวัติ ปริเฉทที่ ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-016",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระสูตรที่ทำให้ปัญจวัคคีย์ทั้ง ๕ รูป บรรลุพระอรหันต์พร้อมกันคือพระสูตรใด?",
    "options": [
      "อนัตตลักขณสูตร",
      "ธัมมจักกัปปวัตตนสูตร",
      "อาทิตตปริยายสูตร",
      "มหาปรินิพพานสูตร"
    ],
    "correctIndex": 0,
    "explanation": "ทรงแสดงอนัตตลักขณสูตรในวันแรม ๕ ค่ำ เดือน ๘",
    "reference": "พุทธประวัติ ปริเฉทที่ ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-017",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "วัดแห่งแรกในพระพุทธศาสนาคือวัดใด?",
    "options": [
      "พระเวฬุวันมหาวิหาร (เมืองราชคฤห์)",
      "พระเชตวันมหาวิหาร",
      "บุพพาราม",
      "วัดนิโครธาราม"
    ],
    "correctIndex": 0,
    "explanation": "พระเจ้าพิมพิสารถวายสวนเวฬุวันเป็นปฐมอารามของสงฆ์",
    "reference": "พุทธประวัติ ปริเฉทที่ ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-018",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "พระพุทธองค์ทรงแสดง 'โอวาทปาฏิโมกข์' ในวันใด?",
    "options": [
      "วันมาฆบูชา (ขึ้น ๑๕ ค่ำ เดือน ๓)",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันเข้าพรรษา"
    ],
    "correctIndex": 0,
    "explanation": "ทรงแสดงโอวาทปาฏิโมกข์ท่ามกลางพระอรหันต์ ๑,๒๕๐ รูป ในวันเพ็ญเดือน ๓",
    "reference": "พุทธประวัติ ปริเฉทที่ ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-019",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "สามเณรรูปแรกในพระพุทธศาสนาคือใคร?",
    "options": [
      "พระราหุล",
      "พระสังกิจจะ",
      "พระบัณฑิต",
      "พระจูฬปันถก"
    ],
    "correctIndex": 0,
    "explanation": "พระราหุลบรรพชาเป็นสามเณรรูปแรกโดยมีพระสารีบุตรเป็นพระอุปัชฌาย์",
    "reference": "พุทธประวัติ ปริเฉทที่ ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-020",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "อนาถบิณฑิกเศรษฐี สร้างวัดใดถวายแด่พระพุทธเจ้า?",
    "options": [
      "พระเชตวันมหาวิหาร (เมืองสาวัตถี)",
      "พระเวฬุวัน",
      "บุพพาราม",
      "อัมพวัน"
    ],
    "correctIndex": 0,
    "explanation": "อนาถบิณฑิกเศรษฐีซื้อสวนเจ้าเชตสร้างวัดพระเชตวันมหาวิหาร",
    "reference": "พุทธประวัติ ปริเฉทที่ ๙",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-021",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๓",
    "question": "มหาโจรที่พระพุทธองค์เสด็จไปโปรดจนกลับใจขอบวชคือใคร?",
    "options": [
      "องคุลิมาลโจร",
      "เทวทัต",
      "พาหิยะ",
      "สัญชัย"
    ],
    "correctIndex": 0,
    "explanation": "พระพุทธองค์ทรงโปรดองคุลิมาลจนบรรลุพระอรหันต์",
    "reference": "พุทธประวัติ ปริเฉทที่ ๙",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-022",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๔",
    "question": "ปัจฉิมสาวกองค์สุดท้ายที่บวชต่อหน้าพระพักตร์พระพุทธเจ้าคือใคร?",
    "options": [
      "สุภัททปริพาชก",
      "พระอานนท์",
      "พระสารีบุตร",
      "พระมหากัสสปะ"
    ],
    "correctIndex": 0,
    "explanation": "สุภัททปริพาชกเข้าเฝ้าและบรรลุพระอรหันต์ก่อนพุทธปรินิพพาน",
    "reference": "พุทธประวัติ ปริเฉทที่ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-023",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๕",
    "question": "ปัจฉิมโอวาทก่อนเสด็จดับขันธปรินิพพาน ตรัสเตือนสติเรื่องใด?",
    "options": [
      "ความไม่ประมาท (อัปปมาทธรรม)",
      "การรักษาศีล ๒๒๗",
      "การสร้างเจดีย์",
      "การสวดมนต์"
    ],
    "correctIndex": 0,
    "explanation": "ทรงตรัสว่า 'สังขารทั้งหลายมีความเสื่อมไปเป็นธรรมดา จงยังประโยชน์ตนและท่านให้ถึงพร้อมด้วยความไม่ประมาทเถิด'",
    "reference": "พุทธประวัติ ปริเฉทที่ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-024",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระพุทธเจ้าเสด็จดับขันธปรินิพพาน ณ สถานที่ใด?",
    "options": [
      "สาลวโนทยาน เมืองกุสินารา",
      "พุทธคยา",
      "ลุมพินีวัน",
      "สารนาถ"
    ],
    "correctIndex": 0,
    "explanation": "เสด็จดับขันธปรินิพพานใต้ต้นรังคู่ เมืองกุสินารา พระชนมายุ ๘๐ พรรษา",
    "reference": "พุทธประวัติ ปริเฉทที่ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-025",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "พราหมณ์ผู้ทำหน้าที่ตวงแจกพระบรมสารีริกธาตุแก่กษัตริย์ ๘ นครคือใคร?",
    "options": [
      "โทณพราหมณ์",
      "อสิตดาบส",
      "โกณฑัญญะ",
      "โสตถิยะ"
    ],
    "correctIndex": 0,
    "explanation": "โทณพราหมณ์ใช้ทะนานทองคำตวงแจกพระธาตุเป็น ๘ ส่วนเท่ากัน",
    "reference": "พุทธประวัติ ปริเฉทที่ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-026",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 2 ข้อ 26] พระพุทธเจ้าประสูติ ณ สถานที่ใด?",
    "options": [
      "ลุมพินีวัน (ระหว่างเมืองกบิลพัสดุ์และเทวทหะ)",
      "พุทธคยา",
      "สารนาถ",
      "กุสินารา"
    ],
    "correctIndex": 0,
    "explanation": "พระสิทธัตถราชกุมารประสูติ ณ ลุมพินีวัน ในวันเพ็ญเดือน ๖",
    "reference": "พุทธประวัติ ปริเฉทที่ ๑",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-027",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 2 ข้อ 27] พระราชพิธีขนานพระนาม ทรงได้รับเฉลิมพระนามว่าอะไร?",
    "options": [
      "สิทธัตถะ (แปลว่า ผู้ทำความต้องการให้สำเร็จ)",
      "โคตมะ",
      "ศากยมุนี",
      "ชินสีห์"
    ],
    "correctIndex": 0,
    "explanation": "สิทธัตถะ มีความหมายว่า ผู้มีความต้องการสำเร็จสมประสงค์",
    "reference": "พุทธประวัติ ปริเฉทที่ ๑",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-028",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 2 ข้อ 28] อสิตดาบส (กาฬเทวิน) ทำนายลักษณะพระกุมารอย่างไร?",
    "options": [
      "จะได้ตรัสรู้เป็นพระสัมมาสัมพุทธเจ้าแน่นอน",
      "จะได้เป็นจักรพรรดิผู้ครองโลก",
      "จะได้เป็นมหาเศรษฐี",
      "จะได้เป็นแม่ทัพ"
    ],
    "correctIndex": 0,
    "explanation": "อสิตดาบสตรวจดูลักษณะมหาบุรุษ ๓๒ ประการแล้ว ยืนยันว่าพระราชกุมารจะออกบวชและตรัสรู้แน่นอน",
    "reference": "พุทธประวัติ ปริเฉทที่ ๑",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-029",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 2 ข้อ 29] เทวทูต ๔ ที่ทรงทอดพระเนตรเห็นระหว่างเสด็จประพาสอุทยานคืออะไร?",
    "options": [
      "คนแก่ คนเจ็บ คนตาย และ สมณะ",
      "คนจน คนพิการ คนตาบอด นักโทษ",
      "ไฟไหม้ น้ำท่วม พายุ แผ่นดินไหว",
      "เทวดา พรหม มนุษย์ สัตว์"
    ],
    "correctIndex": 0,
    "explanation": "เทวทูต ๔: คนแก่ คนเจ็บ คนตาย และนักบวช เป็นสิ่งเตือนสติให้ออกบวช",
    "reference": "พุทธประวัติ ปริเฉทที่ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-030",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 2 ข้อ 30] เจ้าชายสิทธัตถะเสด็จออกมหาภิเนษกรมณ์ (ออกบวช) เมื่อมีพระชนมายุเท่าใด?",
    "options": [
      "๒๙ พรรษา",
      "๒๕ พรรษา",
      "๓๕ พรรษา",
      "๘๐ พรรษา"
    ],
    "correctIndex": 0,
    "explanation": "ทรงสละราชสมบัติออกบวชเมื่อพระชนมายุ ๒๙ พรรษา",
    "reference": "พุทธประวัติ ปริเฉทที่ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-031",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 2 ข้อ 31] มหาดเล็กผู้ตามเสด็จและม้าคู่พระทัยในคืนเสด็จออกบวชคือใคร?",
    "options": [
      "นายฉันนะ และ ม้ากัณฐกะ",
      "นายจุนทะ และ ช้างนาฬาคิรี",
      "นายโสตถิยะ และ ม้าพลาย",
      "อสิตดาบส และ ม้าขาว"
    ],
    "correctIndex": 0,
    "explanation": "นายฉันนะและม้ากัณฐกะตามเสด็จข้ามแม่น้ำอโนมา",
    "reference": "พุทธประวัติ ปริเฉทที่ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-032",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 2 ข้อ 32] ทรงตัดพระโมฬี (เกศา) อธิษฐานเพศบรรพชิต ณ ริมฝั่งแม่น้ำใด?",
    "options": [
      "แม่น้ำอโนมา",
      "แม่น้ำเนรัญชรา",
      "แม่น้ำคงคา",
      "แม่น้ำยมุนา"
    ],
    "correctIndex": 0,
    "explanation": "ทรงตัดพระเมาลีและทรงรับอัฐบริขาร ณ ริมฝั่งแม่น้ำอโนมา",
    "reference": "พุทธประวัติ ปริเฉทที่ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-033",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 2 ข้อ 33] พระมหาบุรุษทรงศึกษาในสำนักของดาบส ๒ ท่านแรก คือใคร?",
    "options": [
      "อาฬารดาบส กาลามโคตร และ อุทกดาบส รามบุตร",
      "อสิตดาบส และ ชฎิล ๓ พี่น้อง",
      "สัญชัยปริพาชก และ โกณฑัญญะ",
      "พาวรีดาบส และ ปัญจวัคคีย์"
    ],
    "correctIndex": 0,
    "explanation": "ทรงสำเร็จสมาบัติ ๘ ในสำนักอาฬารดาบสและอุทกดาบส",
    "reference": "พุทธประวัติ ปริเฉทที่ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-034",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 2 ข้อ 34] ทรงบำเพ็ญทุกรกิริยาเป็นเวลานานเท่าใด?",
    "options": [
      "๖ ปีเต็ม",
      "๓ ปี",
      "๑ ปี",
      "๑๒ ปี"
    ],
    "correctIndex": 0,
    "explanation": "ทรงบำเพ็ญทุกรกิริยา ๖ ปี จึงพบว่าการทรมานกายมิใช่ทางตรัสรู้",
    "reference": "พุทธประวัติ ปริเฉทที่ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-035",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 2 ข้อ 35] ในเช้าวันตรัสรู้ นางสุชาดาน้อมถวายสิ่งใดใต้ต้นไทร?",
    "options": [
      "ข้าวมธุปายาสใส่ถาดทองคำ",
      "ผลไม้ป่า",
      "น้ำผึ้งรวง",
      "ผ้าสาฎก"
    ],
    "correctIndex": 0,
    "explanation": "นางสุชาดาถวายข้าวมธุปายาสอันประณีต",
    "reference": "พุทธประวัติ ปริเฉทที่ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-036",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 2 ข้อ 36] พระมหาบุรุษทรงผจญพญามารและเสนามารในเวลาใดของวันตรัสรู้?",
    "options": [
      "เวลาเย็นก่อนพระอาทิตย์ตก",
      "เวลาเที่ยงวัน",
      "เวลารุ่งอรุณ",
      "เวลาเที่ยงคืน"
    ],
    "correctIndex": 0,
    "explanation": "พญามารยกทัพมาในเวลาเย็น ทรงปราบมารด้วยบารมี ๑๐ ทัศและแม่พระธรณี",
    "reference": "พุทธประวัติ ปริเฉทที่ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-037",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 2 ข้อ 37] ปัจฉิมยามในคืนตรัสรู้ ทรงบรรลุญาณใดที่ทำให้ตรัสรู้เป็นพระพุทธเจ้า?",
    "options": [
      "อาสวักขยญาณ (ญาณรู้ความสิ้นไปแห่งกิเลสอาสวะ)",
      "ปุพเพนิวาสานุสสติญาณ",
      "จุตูปปาตญาณ",
      "อภิญญา ๖"
    ],
    "correctIndex": 0,
    "explanation": "ทรงบรรลุอาสวักขยญาณ รู้แจ้งในอริยสัจ ๔ ตรัสรู้เป็นพระสัมมาสัมพุทธเจ้า",
    "reference": "พุทธประวัติ ปริเฉทที่ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-038",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 2 ข้อ 38] พระพุทธเจ้าตรัสรู้เมื่อพระชนมายุเท่าใด?",
    "options": [
      "๓๕ พรรษา",
      "๒๙ พรรษา",
      "๔๕ พรรษา",
      "๘๐ พรรษา"
    ],
    "correctIndex": 0,
    "explanation": "ตรัสรู้ในเช้าตรู่วันเพ็ญเดือน ๖ ขณะมีพระชนมายุ ๓๕ พรรษา",
    "reference": "พุทธประวัติ ปริเฉทที่ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-039",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 2 ข้อ 39] ปฐมเทศนา 'ธัมมจักกัปปวัตตนสูตร' ทรงแสดงแก่ปัญจวัคคีย์ ในวันใด?",
    "options": [
      "วันเพ็ญเดือน ๘ (วันอาสาฬหบูชา)",
      "วันเพ็ญเดือน ๖",
      "วันเพ็ญเดือน ๓",
      "วันแรม ๑ ค่ำ เดือน ๘"
    ],
    "correctIndex": 0,
    "explanation": "ทรงแสดงปฐมเทศนาในวันขึ้น ๑๕ ค่ำ เดือน ๘ ณ ป่าอิสิปตนมฤคทายวัน",
    "reference": "พุทธประวัติ ปริเฉทที่ ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-040",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 2 ข้อ 40] พระภิกษุรูปแรกในพระพุทธศาสนาคือใคร?",
    "options": [
      "ท่านอัญญาโกณฑัญญะ",
      "ท่านวัปปะ",
      "ท่านภัททิยะ",
      "พระสารีบุตร"
    ],
    "correctIndex": 0,
    "explanation": "ท่านโกณฑัญญะได้ดวงตาเห็นธรรมและได้รับการบวชเป็นพระภิกษุรูปแรกในโลก",
    "reference": "พุทธประวัติ ปริเฉทที่ ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-041",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 2 ข้อ 41] พระสูตรที่ทำให้ปัญจวัคคีย์ทั้ง ๕ รูป บรรลุพระอรหันต์พร้อมกันคือพระสูตรใด?",
    "options": [
      "อนัตตลักขณสูตร",
      "ธัมมจักกัปปวัตตนสูตร",
      "อาทิตตปริยายสูตร",
      "มหาปรินิพพานสูตร"
    ],
    "correctIndex": 0,
    "explanation": "ทรงแสดงอนัตตลักขณสูตรในวันแรม ๕ ค่ำ เดือน ๘",
    "reference": "พุทธประวัติ ปริเฉทที่ ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-042",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 2 ข้อ 42] วัดแห่งแรกในพระพุทธศาสนาคือวัดใด?",
    "options": [
      "พระเวฬุวันมหาวิหาร (เมืองราชคฤห์)",
      "พระเชตวันมหาวิหาร",
      "บุพพาราม",
      "วัดนิโครธาราม"
    ],
    "correctIndex": 0,
    "explanation": "พระเจ้าพิมพิสารถวายสวนเวฬุวันเป็นปฐมอารามของสงฆ์",
    "reference": "พุทธประวัติ ปริเฉทที่ ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-043",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 2 ข้อ 43] พระพุทธองค์ทรงแสดง 'โอวาทปาฏิโมกข์' ในวันใด?",
    "options": [
      "วันมาฆบูชา (ขึ้น ๑๕ ค่ำ เดือน ๓)",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันเข้าพรรษา"
    ],
    "correctIndex": 0,
    "explanation": "ทรงแสดงโอวาทปาฏิโมกข์ท่ามกลางพระอรหันต์ ๑,๒๕๐ รูป ในวันเพ็ญเดือน ๓",
    "reference": "พุทธประวัติ ปริเฉทที่ ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-044",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 2 ข้อ 44] สามเณรรูปแรกในพระพุทธศาสนาคือใคร?",
    "options": [
      "พระราหุล",
      "พระสังกิจจะ",
      "พระบัณฑิต",
      "พระจูฬปันถก"
    ],
    "correctIndex": 0,
    "explanation": "พระราหุลบรรพชาเป็นสามเณรรูปแรกโดยมีพระสารีบุตรเป็นพระอุปัชฌาย์",
    "reference": "พุทธประวัติ ปริเฉทที่ ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-045",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 2 ข้อ 45] อนาถบิณฑิกเศรษฐี สร้างวัดใดถวายแด่พระพุทธเจ้า?",
    "options": [
      "พระเชตวันมหาวิหาร (เมืองสาวัตถี)",
      "พระเวฬุวัน",
      "บุพพาราม",
      "อัมพวัน"
    ],
    "correctIndex": 0,
    "explanation": "อนาถบิณฑิกเศรษฐีซื้อสวนเจ้าเชตสร้างวัดพระเชตวันมหาวิหาร",
    "reference": "พุทธประวัติ ปริเฉทที่ ๙",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-046",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 2 ข้อ 46] มหาโจรที่พระพุทธองค์เสด็จไปโปรดจนกลับใจขอบวชคือใคร?",
    "options": [
      "องคุลิมาลโจร",
      "เทวทัต",
      "พาหิยะ",
      "สัญชัย"
    ],
    "correctIndex": 0,
    "explanation": "พระพุทธองค์ทรงโปรดองคุลิมาลจนบรรลุพระอรหันต์",
    "reference": "พุทธประวัติ ปริเฉทที่ ๙",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-047",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 2 ข้อ 47] ปัจฉิมสาวกองค์สุดท้ายที่บวชต่อหน้าพระพักตร์พระพุทธเจ้าคือใคร?",
    "options": [
      "สุภัททปริพาชก",
      "พระอานนท์",
      "พระสารีบุตร",
      "พระมหากัสสปะ"
    ],
    "correctIndex": 0,
    "explanation": "สุภัททปริพาชกเข้าเฝ้าและบรรลุพระอรหันต์ก่อนพุทธปรินิพพาน",
    "reference": "พุทธประวัติ ปริเฉทที่ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-048",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 2 ข้อ 48] ปัจฉิมโอวาทก่อนเสด็จดับขันธปรินิพพาน ตรัสเตือนสติเรื่องใด?",
    "options": [
      "ความไม่ประมาท (อัปปมาทธรรม)",
      "การรักษาศีล ๒๒๗",
      "การสร้างเจดีย์",
      "การสวดมนต์"
    ],
    "correctIndex": 0,
    "explanation": "ทรงตรัสว่า 'สังขารทั้งหลายมีความเสื่อมไปเป็นธรรมดา จงยังประโยชน์ตนและท่านให้ถึงพร้อมด้วยความไม่ประมาทเถิด'",
    "reference": "พุทธประวัติ ปริเฉทที่ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-049",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 2 ข้อ 49] พระพุทธเจ้าเสด็จดับขันธปรินิพพาน ณ สถานที่ใด?",
    "options": [
      "สาลวโนทยาน เมืองกุสินารา",
      "พุทธคยา",
      "ลุมพินีวัน",
      "สารนาถ"
    ],
    "correctIndex": 0,
    "explanation": "เสด็จดับขันธปรินิพพานใต้ต้นรังคู่ เมืองกุสินารา พระชนมายุ ๘๐ พรรษา",
    "reference": "พุทธประวัติ ปริเฉทที่ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-050",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 2 ข้อ 50] พราหมณ์ผู้ทำหน้าที่ตวงแจกพระบรมสารีริกธาตุแก่กษัตริย์ ๘ นครคือใคร?",
    "options": [
      "โทณพราหมณ์",
      "อสิตดาบส",
      "โกณฑัญญะ",
      "โสตถิยะ"
    ],
    "correctIndex": 0,
    "explanation": "โทณพราหมณ์ใช้ทะนานทองคำตวงแจกพระธาตุเป็น ๘ ส่วนเท่ากัน",
    "reference": "พุทธประวัติ ปริเฉทที่ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-051",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 3 ข้อ 51] พระพุทธเจ้าประสูติ ณ สถานที่ใด?",
    "options": [
      "ลุมพินีวัน (ระหว่างเมืองกบิลพัสดุ์และเทวทหะ)",
      "พุทธคยา",
      "สารนาถ",
      "กุสินารา"
    ],
    "correctIndex": 0,
    "explanation": "พระสิทธัตถราชกุมารประสูติ ณ ลุมพินีวัน ในวันเพ็ญเดือน ๖",
    "reference": "พุทธประวัติ ปริเฉทที่ ๑",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-052",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 3 ข้อ 52] พระราชพิธีขนานพระนาม ทรงได้รับเฉลิมพระนามว่าอะไร?",
    "options": [
      "สิทธัตถะ (แปลว่า ผู้ทำความต้องการให้สำเร็จ)",
      "โคตมะ",
      "ศากยมุนี",
      "ชินสีห์"
    ],
    "correctIndex": 0,
    "explanation": "สิทธัตถะ มีความหมายว่า ผู้มีความต้องการสำเร็จสมประสงค์",
    "reference": "พุทธประวัติ ปริเฉทที่ ๑",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-053",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 3 ข้อ 53] อสิตดาบส (กาฬเทวิน) ทำนายลักษณะพระกุมารอย่างไร?",
    "options": [
      "จะได้ตรัสรู้เป็นพระสัมมาสัมพุทธเจ้าแน่นอน",
      "จะได้เป็นจักรพรรดิผู้ครองโลก",
      "จะได้เป็นมหาเศรษฐี",
      "จะได้เป็นแม่ทัพ"
    ],
    "correctIndex": 0,
    "explanation": "อสิตดาบสตรวจดูลักษณะมหาบุรุษ ๓๒ ประการแล้ว ยืนยันว่าพระราชกุมารจะออกบวชและตรัสรู้แน่นอน",
    "reference": "พุทธประวัติ ปริเฉทที่ ๑",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-054",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 3 ข้อ 54] เทวทูต ๔ ที่ทรงทอดพระเนตรเห็นระหว่างเสด็จประพาสอุทยานคืออะไร?",
    "options": [
      "คนแก่ คนเจ็บ คนตาย และ สมณะ",
      "คนจน คนพิการ คนตาบอด นักโทษ",
      "ไฟไหม้ น้ำท่วม พายุ แผ่นดินไหว",
      "เทวดา พรหม มนุษย์ สัตว์"
    ],
    "correctIndex": 0,
    "explanation": "เทวทูต ๔: คนแก่ คนเจ็บ คนตาย และนักบวช เป็นสิ่งเตือนสติให้ออกบวช",
    "reference": "พุทธประวัติ ปริเฉทที่ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-055",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 3 ข้อ 55] เจ้าชายสิทธัตถะเสด็จออกมหาภิเนษกรมณ์ (ออกบวช) เมื่อมีพระชนมายุเท่าใด?",
    "options": [
      "๒๙ พรรษา",
      "๒๕ พรรษา",
      "๓๕ พรรษา",
      "๘๐ พรรษา"
    ],
    "correctIndex": 0,
    "explanation": "ทรงสละราชสมบัติออกบวชเมื่อพระชนมายุ ๒๙ พรรษา",
    "reference": "พุทธประวัติ ปริเฉทที่ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-056",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 3 ข้อ 56] มหาดเล็กผู้ตามเสด็จและม้าคู่พระทัยในคืนเสด็จออกบวชคือใคร?",
    "options": [
      "นายฉันนะ และ ม้ากัณฐกะ",
      "นายจุนทะ และ ช้างนาฬาคิรี",
      "นายโสตถิยะ และ ม้าพลาย",
      "อสิตดาบส และ ม้าขาว"
    ],
    "correctIndex": 0,
    "explanation": "นายฉันนะและม้ากัณฐกะตามเสด็จข้ามแม่น้ำอโนมา",
    "reference": "พุทธประวัติ ปริเฉทที่ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-057",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 3 ข้อ 57] ทรงตัดพระโมฬี (เกศา) อธิษฐานเพศบรรพชิต ณ ริมฝั่งแม่น้ำใด?",
    "options": [
      "แม่น้ำอโนมา",
      "แม่น้ำเนรัญชรา",
      "แม่น้ำคงคา",
      "แม่น้ำยมุนา"
    ],
    "correctIndex": 0,
    "explanation": "ทรงตัดพระเมาลีและทรงรับอัฐบริขาร ณ ริมฝั่งแม่น้ำอโนมา",
    "reference": "พุทธประวัติ ปริเฉทที่ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-058",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 3 ข้อ 58] พระมหาบุรุษทรงศึกษาในสำนักของดาบส ๒ ท่านแรก คือใคร?",
    "options": [
      "อาฬารดาบส กาลามโคตร และ อุทกดาบส รามบุตร",
      "อสิตดาบส และ ชฎิล ๓ พี่น้อง",
      "สัญชัยปริพาชก และ โกณฑัญญะ",
      "พาวรีดาบส และ ปัญจวัคคีย์"
    ],
    "correctIndex": 0,
    "explanation": "ทรงสำเร็จสมาบัติ ๘ ในสำนักอาฬารดาบสและอุทกดาบส",
    "reference": "พุทธประวัติ ปริเฉทที่ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-059",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 3 ข้อ 59] ทรงบำเพ็ญทุกรกิริยาเป็นเวลานานเท่าใด?",
    "options": [
      "๖ ปีเต็ม",
      "๓ ปี",
      "๑ ปี",
      "๑๒ ปี"
    ],
    "correctIndex": 0,
    "explanation": "ทรงบำเพ็ญทุกรกิริยา ๖ ปี จึงพบว่าการทรมานกายมิใช่ทางตรัสรู้",
    "reference": "พุทธประวัติ ปริเฉทที่ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-060",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 3 ข้อ 60] ในเช้าวันตรัสรู้ นางสุชาดาน้อมถวายสิ่งใดใต้ต้นไทร?",
    "options": [
      "ข้าวมธุปายาสใส่ถาดทองคำ",
      "ผลไม้ป่า",
      "น้ำผึ้งรวง",
      "ผ้าสาฎก"
    ],
    "correctIndex": 0,
    "explanation": "นางสุชาดาถวายข้าวมธุปายาสอันประณีต",
    "reference": "พุทธประวัติ ปริเฉทที่ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-061",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 3 ข้อ 61] พระมหาบุรุษทรงผจญพญามารและเสนามารในเวลาใดของวันตรัสรู้?",
    "options": [
      "เวลาเย็นก่อนพระอาทิตย์ตก",
      "เวลาเที่ยงวัน",
      "เวลารุ่งอรุณ",
      "เวลาเที่ยงคืน"
    ],
    "correctIndex": 0,
    "explanation": "พญามารยกทัพมาในเวลาเย็น ทรงปราบมารด้วยบารมี ๑๐ ทัศและแม่พระธรณี",
    "reference": "พุทธประวัติ ปริเฉทที่ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-062",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 3 ข้อ 62] ปัจฉิมยามในคืนตรัสรู้ ทรงบรรลุญาณใดที่ทำให้ตรัสรู้เป็นพระพุทธเจ้า?",
    "options": [
      "อาสวักขยญาณ (ญาณรู้ความสิ้นไปแห่งกิเลสอาสวะ)",
      "ปุพเพนิวาสานุสสติญาณ",
      "จุตูปปาตญาณ",
      "อภิญญา ๖"
    ],
    "correctIndex": 0,
    "explanation": "ทรงบรรลุอาสวักขยญาณ รู้แจ้งในอริยสัจ ๔ ตรัสรู้เป็นพระสัมมาสัมพุทธเจ้า",
    "reference": "พุทธประวัติ ปริเฉทที่ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-063",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 3 ข้อ 63] พระพุทธเจ้าตรัสรู้เมื่อพระชนมายุเท่าใด?",
    "options": [
      "๓๕ พรรษา",
      "๒๙ พรรษา",
      "๔๕ พรรษา",
      "๘๐ พรรษา"
    ],
    "correctIndex": 0,
    "explanation": "ตรัสรู้ในเช้าตรู่วันเพ็ญเดือน ๖ ขณะมีพระชนมายุ ๓๕ พรรษา",
    "reference": "พุทธประวัติ ปริเฉทที่ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-064",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 3 ข้อ 64] ปฐมเทศนา 'ธัมมจักกัปปวัตตนสูตร' ทรงแสดงแก่ปัญจวัคคีย์ ในวันใด?",
    "options": [
      "วันเพ็ญเดือน ๘ (วันอาสาฬหบูชา)",
      "วันเพ็ญเดือน ๖",
      "วันเพ็ญเดือน ๓",
      "วันแรม ๑ ค่ำ เดือน ๘"
    ],
    "correctIndex": 0,
    "explanation": "ทรงแสดงปฐมเทศนาในวันขึ้น ๑๕ ค่ำ เดือน ๘ ณ ป่าอิสิปตนมฤคทายวัน",
    "reference": "พุทธประวัติ ปริเฉทที่ ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-065",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 3 ข้อ 65] พระภิกษุรูปแรกในพระพุทธศาสนาคือใคร?",
    "options": [
      "ท่านอัญญาโกณฑัญญะ",
      "ท่านวัปปะ",
      "ท่านภัททิยะ",
      "พระสารีบุตร"
    ],
    "correctIndex": 0,
    "explanation": "ท่านโกณฑัญญะได้ดวงตาเห็นธรรมและได้รับการบวชเป็นพระภิกษุรูปแรกในโลก",
    "reference": "พุทธประวัติ ปริเฉทที่ ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-066",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 3 ข้อ 66] พระสูตรที่ทำให้ปัญจวัคคีย์ทั้ง ๕ รูป บรรลุพระอรหันต์พร้อมกันคือพระสูตรใด?",
    "options": [
      "อนัตตลักขณสูตร",
      "ธัมมจักกัปปวัตตนสูตร",
      "อาทิตตปริยายสูตร",
      "มหาปรินิพพานสูตร"
    ],
    "correctIndex": 0,
    "explanation": "ทรงแสดงอนัตตลักขณสูตรในวันแรม ๕ ค่ำ เดือน ๘",
    "reference": "พุทธประวัติ ปริเฉทที่ ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-067",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 3 ข้อ 67] วัดแห่งแรกในพระพุทธศาสนาคือวัดใด?",
    "options": [
      "พระเวฬุวันมหาวิหาร (เมืองราชคฤห์)",
      "พระเชตวันมหาวิหาร",
      "บุพพาราม",
      "วัดนิโครธาราม"
    ],
    "correctIndex": 0,
    "explanation": "พระเจ้าพิมพิสารถวายสวนเวฬุวันเป็นปฐมอารามของสงฆ์",
    "reference": "พุทธประวัติ ปริเฉทที่ ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-068",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 3 ข้อ 68] พระพุทธองค์ทรงแสดง 'โอวาทปาฏิโมกข์' ในวันใด?",
    "options": [
      "วันมาฆบูชา (ขึ้น ๑๕ ค่ำ เดือน ๓)",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันเข้าพรรษา"
    ],
    "correctIndex": 0,
    "explanation": "ทรงแสดงโอวาทปาฏิโมกข์ท่ามกลางพระอรหันต์ ๑,๒๕๐ รูป ในวันเพ็ญเดือน ๓",
    "reference": "พุทธประวัติ ปริเฉทที่ ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-069",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 3 ข้อ 69] สามเณรรูปแรกในพระพุทธศาสนาคือใคร?",
    "options": [
      "พระราหุล",
      "พระสังกิจจะ",
      "พระบัณฑิต",
      "พระจูฬปันถก"
    ],
    "correctIndex": 0,
    "explanation": "พระราหุลบรรพชาเป็นสามเณรรูปแรกโดยมีพระสารีบุตรเป็นพระอุปัชฌาย์",
    "reference": "พุทธประวัติ ปริเฉทที่ ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-070",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 3 ข้อ 70] อนาถบิณฑิกเศรษฐี สร้างวัดใดถวายแด่พระพุทธเจ้า?",
    "options": [
      "พระเชตวันมหาวิหาร (เมืองสาวัตถี)",
      "พระเวฬุวัน",
      "บุพพาราม",
      "อัมพวัน"
    ],
    "correctIndex": 0,
    "explanation": "อนาถบิณฑิกเศรษฐีซื้อสวนเจ้าเชตสร้างวัดพระเชตวันมหาวิหาร",
    "reference": "พุทธประวัติ ปริเฉทที่ ๙",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-071",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 3 ข้อ 71] มหาโจรที่พระพุทธองค์เสด็จไปโปรดจนกลับใจขอบวชคือใคร?",
    "options": [
      "องคุลิมาลโจร",
      "เทวทัต",
      "พาหิยะ",
      "สัญชัย"
    ],
    "correctIndex": 0,
    "explanation": "พระพุทธองค์ทรงโปรดองคุลิมาลจนบรรลุพระอรหันต์",
    "reference": "พุทธประวัติ ปริเฉทที่ ๙",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-072",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 3 ข้อ 72] ปัจฉิมสาวกองค์สุดท้ายที่บวชต่อหน้าพระพักตร์พระพุทธเจ้าคือใคร?",
    "options": [
      "สุภัททปริพาชก",
      "พระอานนท์",
      "พระสารีบุตร",
      "พระมหากัสสปะ"
    ],
    "correctIndex": 0,
    "explanation": "สุภัททปริพาชกเข้าเฝ้าและบรรลุพระอรหันต์ก่อนพุทธปรินิพพาน",
    "reference": "พุทธประวัติ ปริเฉทที่ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-073",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 3 ข้อ 73] ปัจฉิมโอวาทก่อนเสด็จดับขันธปรินิพพาน ตรัสเตือนสติเรื่องใด?",
    "options": [
      "ความไม่ประมาท (อัปปมาทธรรม)",
      "การรักษาศีล ๒๒๗",
      "การสร้างเจดีย์",
      "การสวดมนต์"
    ],
    "correctIndex": 0,
    "explanation": "ทรงตรัสว่า 'สังขารทั้งหลายมีความเสื่อมไปเป็นธรรมดา จงยังประโยชน์ตนและท่านให้ถึงพร้อมด้วยความไม่ประมาทเถิด'",
    "reference": "พุทธประวัติ ปริเฉทที่ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-074",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 3 ข้อ 74] พระพุทธเจ้าเสด็จดับขันธปรินิพพาน ณ สถานที่ใด?",
    "options": [
      "สาลวโนทยาน เมืองกุสินารา",
      "พุทธคยา",
      "ลุมพินีวัน",
      "สารนาถ"
    ],
    "correctIndex": 0,
    "explanation": "เสด็จดับขันธปรินิพพานใต้ต้นรังคู่ เมืองกุสินารา พระชนมายุ ๘๐ พรรษา",
    "reference": "พุทธประวัติ ปริเฉทที่ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-075",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 3 ข้อ 75] พราหมณ์ผู้ทำหน้าที่ตวงแจกพระบรมสารีริกธาตุแก่กษัตริย์ ๘ นครคือใคร?",
    "options": [
      "โทณพราหมณ์",
      "อสิตดาบส",
      "โกณฑัญญะ",
      "โสตถิยะ"
    ],
    "correctIndex": 0,
    "explanation": "โทณพราหมณ์ใช้ทะนานทองคำตวงแจกพระธาตุเป็น ๘ ส่วนเท่ากัน",
    "reference": "พุทธประวัติ ปริเฉทที่ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-076",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 4 ข้อ 76] พระพุทธเจ้าประสูติ ณ สถานที่ใด?",
    "options": [
      "ลุมพินีวัน (ระหว่างเมืองกบิลพัสดุ์และเทวทหะ)",
      "พุทธคยา",
      "สารนาถ",
      "กุสินารา"
    ],
    "correctIndex": 0,
    "explanation": "พระสิทธัตถราชกุมารประสูติ ณ ลุมพินีวัน ในวันเพ็ญเดือน ๖",
    "reference": "พุทธประวัติ ปริเฉทที่ ๑",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-077",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 4 ข้อ 77] พระราชพิธีขนานพระนาม ทรงได้รับเฉลิมพระนามว่าอะไร?",
    "options": [
      "สิทธัตถะ (แปลว่า ผู้ทำความต้องการให้สำเร็จ)",
      "โคตมะ",
      "ศากยมุนี",
      "ชินสีห์"
    ],
    "correctIndex": 0,
    "explanation": "สิทธัตถะ มีความหมายว่า ผู้มีความต้องการสำเร็จสมประสงค์",
    "reference": "พุทธประวัติ ปริเฉทที่ ๑",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-078",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 4 ข้อ 78] อสิตดาบส (กาฬเทวิน) ทำนายลักษณะพระกุมารอย่างไร?",
    "options": [
      "จะได้ตรัสรู้เป็นพระสัมมาสัมพุทธเจ้าแน่นอน",
      "จะได้เป็นจักรพรรดิผู้ครองโลก",
      "จะได้เป็นมหาเศรษฐี",
      "จะได้เป็นแม่ทัพ"
    ],
    "correctIndex": 0,
    "explanation": "อสิตดาบสตรวจดูลักษณะมหาบุรุษ ๓๒ ประการแล้ว ยืนยันว่าพระราชกุมารจะออกบวชและตรัสรู้แน่นอน",
    "reference": "พุทธประวัติ ปริเฉทที่ ๑",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-079",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 4 ข้อ 79] เทวทูต ๔ ที่ทรงทอดพระเนตรเห็นระหว่างเสด็จประพาสอุทยานคืออะไร?",
    "options": [
      "คนแก่ คนเจ็บ คนตาย และ สมณะ",
      "คนจน คนพิการ คนตาบอด นักโทษ",
      "ไฟไหม้ น้ำท่วม พายุ แผ่นดินไหว",
      "เทวดา พรหม มนุษย์ สัตว์"
    ],
    "correctIndex": 0,
    "explanation": "เทวทูต ๔: คนแก่ คนเจ็บ คนตาย และนักบวช เป็นสิ่งเตือนสติให้ออกบวช",
    "reference": "พุทธประวัติ ปริเฉทที่ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-080",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 4 ข้อ 80] เจ้าชายสิทธัตถะเสด็จออกมหาภิเนษกรมณ์ (ออกบวช) เมื่อมีพระชนมายุเท่าใด?",
    "options": [
      "๒๙ พรรษา",
      "๒๕ พรรษา",
      "๓๕ พรรษา",
      "๘๐ พรรษา"
    ],
    "correctIndex": 0,
    "explanation": "ทรงสละราชสมบัติออกบวชเมื่อพระชนมายุ ๒๙ พรรษา",
    "reference": "พุทธประวัติ ปริเฉทที่ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-081",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 4 ข้อ 81] มหาดเล็กผู้ตามเสด็จและม้าคู่พระทัยในคืนเสด็จออกบวชคือใคร?",
    "options": [
      "นายฉันนะ และ ม้ากัณฐกะ",
      "นายจุนทะ และ ช้างนาฬาคิรี",
      "นายโสตถิยะ และ ม้าพลาย",
      "อสิตดาบส และ ม้าขาว"
    ],
    "correctIndex": 0,
    "explanation": "นายฉันนะและม้ากัณฐกะตามเสด็จข้ามแม่น้ำอโนมา",
    "reference": "พุทธประวัติ ปริเฉทที่ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-082",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 4 ข้อ 82] ทรงตัดพระโมฬี (เกศา) อธิษฐานเพศบรรพชิต ณ ริมฝั่งแม่น้ำใด?",
    "options": [
      "แม่น้ำอโนมา",
      "แม่น้ำเนรัญชรา",
      "แม่น้ำคงคา",
      "แม่น้ำยมุนา"
    ],
    "correctIndex": 0,
    "explanation": "ทรงตัดพระเมาลีและทรงรับอัฐบริขาร ณ ริมฝั่งแม่น้ำอโนมา",
    "reference": "พุทธประวัติ ปริเฉทที่ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-083",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 4 ข้อ 83] พระมหาบุรุษทรงศึกษาในสำนักของดาบส ๒ ท่านแรก คือใคร?",
    "options": [
      "อาฬารดาบส กาลามโคตร และ อุทกดาบส รามบุตร",
      "อสิตดาบส และ ชฎิล ๓ พี่น้อง",
      "สัญชัยปริพาชก และ โกณฑัญญะ",
      "พาวรีดาบส และ ปัญจวัคคีย์"
    ],
    "correctIndex": 0,
    "explanation": "ทรงสำเร็จสมาบัติ ๘ ในสำนักอาฬารดาบสและอุทกดาบส",
    "reference": "พุทธประวัติ ปริเฉทที่ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-084",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 4 ข้อ 84] ทรงบำเพ็ญทุกรกิริยาเป็นเวลานานเท่าใด?",
    "options": [
      "๖ ปีเต็ม",
      "๓ ปี",
      "๑ ปี",
      "๑๒ ปี"
    ],
    "correctIndex": 0,
    "explanation": "ทรงบำเพ็ญทุกรกิริยา ๖ ปี จึงพบว่าการทรมานกายมิใช่ทางตรัสรู้",
    "reference": "พุทธประวัติ ปริเฉทที่ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-085",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 4 ข้อ 85] ในเช้าวันตรัสรู้ นางสุชาดาน้อมถวายสิ่งใดใต้ต้นไทร?",
    "options": [
      "ข้าวมธุปายาสใส่ถาดทองคำ",
      "ผลไม้ป่า",
      "น้ำผึ้งรวง",
      "ผ้าสาฎก"
    ],
    "correctIndex": 0,
    "explanation": "นางสุชาดาถวายข้าวมธุปายาสอันประณีต",
    "reference": "พุทธประวัติ ปริเฉทที่ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-086",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 4 ข้อ 86] พระมหาบุรุษทรงผจญพญามารและเสนามารในเวลาใดของวันตรัสรู้?",
    "options": [
      "เวลาเย็นก่อนพระอาทิตย์ตก",
      "เวลาเที่ยงวัน",
      "เวลารุ่งอรุณ",
      "เวลาเที่ยงคืน"
    ],
    "correctIndex": 0,
    "explanation": "พญามารยกทัพมาในเวลาเย็น ทรงปราบมารด้วยบารมี ๑๐ ทัศและแม่พระธรณี",
    "reference": "พุทธประวัติ ปริเฉทที่ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-087",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 4 ข้อ 87] ปัจฉิมยามในคืนตรัสรู้ ทรงบรรลุญาณใดที่ทำให้ตรัสรู้เป็นพระพุทธเจ้า?",
    "options": [
      "อาสวักขยญาณ (ญาณรู้ความสิ้นไปแห่งกิเลสอาสวะ)",
      "ปุพเพนิวาสานุสสติญาณ",
      "จุตูปปาตญาณ",
      "อภิญญา ๖"
    ],
    "correctIndex": 0,
    "explanation": "ทรงบรรลุอาสวักขยญาณ รู้แจ้งในอริยสัจ ๔ ตรัสรู้เป็นพระสัมมาสัมพุทธเจ้า",
    "reference": "พุทธประวัติ ปริเฉทที่ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-088",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 4 ข้อ 88] พระพุทธเจ้าตรัสรู้เมื่อพระชนมายุเท่าใด?",
    "options": [
      "๓๕ พรรษา",
      "๒๙ พรรษา",
      "๔๕ พรรษา",
      "๘๐ พรรษา"
    ],
    "correctIndex": 0,
    "explanation": "ตรัสรู้ในเช้าตรู่วันเพ็ญเดือน ๖ ขณะมีพระชนมายุ ๓๕ พรรษา",
    "reference": "พุทธประวัติ ปริเฉทที่ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-089",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 4 ข้อ 89] ปฐมเทศนา 'ธัมมจักกัปปวัตตนสูตร' ทรงแสดงแก่ปัญจวัคคีย์ ในวันใด?",
    "options": [
      "วันเพ็ญเดือน ๘ (วันอาสาฬหบูชา)",
      "วันเพ็ญเดือน ๖",
      "วันเพ็ญเดือน ๓",
      "วันแรม ๑ ค่ำ เดือน ๘"
    ],
    "correctIndex": 0,
    "explanation": "ทรงแสดงปฐมเทศนาในวันขึ้น ๑๕ ค่ำ เดือน ๘ ณ ป่าอิสิปตนมฤคทายวัน",
    "reference": "พุทธประวัติ ปริเฉทที่ ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-090",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 4 ข้อ 90] พระภิกษุรูปแรกในพระพุทธศาสนาคือใคร?",
    "options": [
      "ท่านอัญญาโกณฑัญญะ",
      "ท่านวัปปะ",
      "ท่านภัททิยะ",
      "พระสารีบุตร"
    ],
    "correctIndex": 0,
    "explanation": "ท่านโกณฑัญญะได้ดวงตาเห็นธรรมและได้รับการบวชเป็นพระภิกษุรูปแรกในโลก",
    "reference": "พุทธประวัติ ปริเฉทที่ ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-091",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 4 ข้อ 91] พระสูตรที่ทำให้ปัญจวัคคีย์ทั้ง ๕ รูป บรรลุพระอรหันต์พร้อมกันคือพระสูตรใด?",
    "options": [
      "อนัตตลักขณสูตร",
      "ธัมมจักกัปปวัตตนสูตร",
      "อาทิตตปริยายสูตร",
      "มหาปรินิพพานสูตร"
    ],
    "correctIndex": 0,
    "explanation": "ทรงแสดงอนัตตลักขณสูตรในวันแรม ๕ ค่ำ เดือน ๘",
    "reference": "พุทธประวัติ ปริเฉทที่ ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-092",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 4 ข้อ 92] วัดแห่งแรกในพระพุทธศาสนาคือวัดใด?",
    "options": [
      "พระเวฬุวันมหาวิหาร (เมืองราชคฤห์)",
      "พระเชตวันมหาวิหาร",
      "บุพพาราม",
      "วัดนิโครธาราม"
    ],
    "correctIndex": 0,
    "explanation": "พระเจ้าพิมพิสารถวายสวนเวฬุวันเป็นปฐมอารามของสงฆ์",
    "reference": "พุทธประวัติ ปริเฉทที่ ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-093",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 4 ข้อ 93] พระพุทธองค์ทรงแสดง 'โอวาทปาฏิโมกข์' ในวันใด?",
    "options": [
      "วันมาฆบูชา (ขึ้น ๑๕ ค่ำ เดือน ๓)",
      "วันวิสาขบูชา",
      "วันอาสาฬหบูชา",
      "วันเข้าพรรษา"
    ],
    "correctIndex": 0,
    "explanation": "ทรงแสดงโอวาทปาฏิโมกข์ท่ามกลางพระอรหันต์ ๑,๒๕๐ รูป ในวันเพ็ญเดือน ๓",
    "reference": "พุทธประวัติ ปริเฉทที่ ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-094",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 4 ข้อ 94] สามเณรรูปแรกในพระพุทธศาสนาคือใคร?",
    "options": [
      "พระราหุล",
      "พระสังกิจจะ",
      "พระบัณฑิต",
      "พระจูฬปันถก"
    ],
    "correctIndex": 0,
    "explanation": "พระราหุลบรรพชาเป็นสามเณรรูปแรกโดยมีพระสารีบุตรเป็นพระอุปัชฌาย์",
    "reference": "พุทธประวัติ ปริเฉทที่ ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-095",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 4 ข้อ 95] อนาถบิณฑิกเศรษฐี สร้างวัดใดถวายแด่พระพุทธเจ้า?",
    "options": [
      "พระเชตวันมหาวิหาร (เมืองสาวัตถี)",
      "พระเวฬุวัน",
      "บุพพาราม",
      "อัมพวัน"
    ],
    "correctIndex": 0,
    "explanation": "อนาถบิณฑิกเศรษฐีซื้อสวนเจ้าเชตสร้างวัดพระเชตวันมหาวิหาร",
    "reference": "พุทธประวัติ ปริเฉทที่ ๙",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-096",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 4 ข้อ 96] มหาโจรที่พระพุทธองค์เสด็จไปโปรดจนกลับใจขอบวชคือใคร?",
    "options": [
      "องคุลิมาลโจร",
      "เทวทัต",
      "พาหิยะ",
      "สัญชัย"
    ],
    "correctIndex": 0,
    "explanation": "พระพุทธองค์ทรงโปรดองคุลิมาลจนบรรลุพระอรหันต์",
    "reference": "พุทธประวัติ ปริเฉทที่ ๙",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-097",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 4 ข้อ 97] ปัจฉิมสาวกองค์สุดท้ายที่บวชต่อหน้าพระพักตร์พระพุทธเจ้าคือใคร?",
    "options": [
      "สุภัททปริพาชก",
      "พระอานนท์",
      "พระสารีบุตร",
      "พระมหากัสสปะ"
    ],
    "correctIndex": 0,
    "explanation": "สุภัททปริพาชกเข้าเฝ้าและบรรลุพระอรหันต์ก่อนพุทธปรินิพพาน",
    "reference": "พุทธประวัติ ปริเฉทที่ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-098",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 4 ข้อ 98] ปัจฉิมโอวาทก่อนเสด็จดับขันธปรินิพพาน ตรัสเตือนสติเรื่องใด?",
    "options": [
      "ความไม่ประมาท (อัปปมาทธรรม)",
      "การรักษาศีล ๒๒๗",
      "การสร้างเจดีย์",
      "การสวดมนต์"
    ],
    "correctIndex": 0,
    "explanation": "ทรงตรัสว่า 'สังขารทั้งหลายมีความเสื่อมไปเป็นธรรมดา จงยังประโยชน์ตนและท่านให้ถึงพร้อมด้วยความไม่ประมาทเถิด'",
    "reference": "พุทธประวัติ ปริเฉทที่ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-099",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 4 ข้อ 99] พระพุทธเจ้าเสด็จดับขันธปรินิพพาน ณ สถานที่ใด?",
    "options": [
      "สาลวโนทยาน เมืองกุสินารา",
      "พุทธคยา",
      "ลุมพินีวัน",
      "สารนาถ"
    ],
    "correctIndex": 0,
    "explanation": "เสด็จดับขันธปรินิพพานใต้ต้นรังคู่ เมืองกุสินารา พระชนมายุ ๘๐ พรรษา",
    "reference": "พุทธประวัติ ปริเฉทที่ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-b-100",
    "grade": "ตรี",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 4 ข้อ 100] พราหมณ์ผู้ทำหน้าที่ตวงแจกพระบรมสารีริกธาตุแก่กษัตริย์ ๘ นครคือใคร?",
    "options": [
      "โทณพราหมณ์",
      "อสิตดาบส",
      "โกณฑัญญะ",
      "โสตถิยะ"
    ],
    "correctIndex": 0,
    "explanation": "โทณพราหมณ์ใช้ทะนานทองคำตวงแจกพระธาตุเป็น ๘ ส่วนเท่ากัน",
    "reference": "พุทธประวัติ ปริเฉทที่ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-001",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "สิกขาบทในพระปาฏิโมกข์ของพระภิกษุมีทั้งหมดกี่ข้อ?",
    "options": [
      "๒๒๗ ข้อ",
      "๑๕๐ ข้อ",
      "๓๑๑ ข้อ",
      "๕๐๐ ข้อ"
    ],
    "correctIndex": 0,
    "explanation": "พระปาฏิโมกข์ของภิกษุสงฆ์มีสิกขาบทบัญญัติ ๒๒๗ ข้อ",
    "reference": "วินัยบัญญัติ นวโกวาท",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-002",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "อาบัติที่หนักที่สุด มีโทษทำให้ขาดจากความเป็นภิกษุทันทีคืออาบัติใด?",
    "options": [
      "ปาราชิก (มี ๔ สิกขาบท)",
      "สังฆาทิเสส",
      "ปาจิตตีย์",
      "ทุกกฏ"
    ],
    "correctIndex": 0,
    "explanation": "ปาราชิก แปลว่า ผู้พ่ายแพ้ ขาดจากความเป็นภิกษุทันทีที่ล่วงละเมิด",
    "reference": "วินัยบัญญัติ ปาราชิก ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-003",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "ปาราชิกข้อที่ ๑ มีสิกขาบทบัญญัติว่าอย่างไร?",
    "options": [
      "ภิกษุเสพเมถุน (ร่วมประเวณี)",
      "ภิกษุลักทรัพย์",
      "ภิกษุฆ่ามนุษย์",
      "ภิกษุอวดอุตตริมนุสสธรรม"
    ],
    "correctIndex": 0,
    "explanation": "ปาราชิกข้อ ๑ คือ ภิกษุเสพเมถุน แม้กับสัตว์เดรัจฉานตัวเมีย",
    "reference": "วินัยบัญญัติ ปาราชิก ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-004",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "ปาราชิกข้อที่ ๒ (อทินนาทาน) มีเกณฑ์ราคาของที่ขโมยเท่าใดจึงต้องปาราชิก?",
    "options": [
      "ราคาตั้งแต่ ๕ มาสกขึ้นไป (ประมาณ ๑ บาท)",
      "ราคา ๑ สตางค์",
      "ราคา ๑๐๐ บาท",
      "ไม่จำกัดราคา"
    ],
    "correctIndex": 0,
    "explanation": "ถือเอาทรัพย์ที่เจ้าของไม่ได้ให้ ได้ราคาตั้งแต่ ๕ มาสกขึ้นไป ต้องอาบัติปาราชิก",
    "reference": "วินัยบัญญัติ ปาราชิก ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-005",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๓",
    "question": "ปาราชิกข้อที่ ๓ บัญญัติห้ามการกระทำใด?",
    "options": [
      "ภิกษุแกล้งฆ่ามนุษย์ให้ตาย หรือพรรณนาคุณแห่งความตายชักชวนให้เขาฆ่าตัวตาย",
      "ภิกษุฆ่าสัตว์เดรัจฉาน",
      "ภิกษุตัดต้นไม้",
      "ภิกษุตีเพื่อน"
    ],
    "correctIndex": 0,
    "explanation": "ปาราชิกข้อ ๓ คือ เจตนาฆ่ามนุษย์ หรือจ้างวาน ชักนำให้เขาตาย",
    "reference": "วินัยบัญญัติ ปาราชิก ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-006",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๔",
    "question": "ปาราชิกข้อที่ ๔ บัญญัติห้ามเรื่องใด?",
    "options": [
      "ภิกษุอวดอุตตริมนุสสธรรมที่ไม่มีจริงในตน (เช่น อวดว่าได้ฌาน บรรลุมรรคผล)",
      "ภิกษุพูดโกหกทั่วไป",
      "ภิกษุพูดด่าทอ",
      "ภิกษุอวดรวย"
    ],
    "correctIndex": 0,
    "explanation": "อวดคุณวิเศษที่ไม่มีจริงเพื่อหวังลาภสักการะ ต้องอาบัติปาราชิก",
    "reference": "วินัยบัญญัติ ปาราชิก ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-007",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๕",
    "question": "อาบัติสังฆาทิเสสมีทั้งหมดกี่สิกขาบท?",
    "options": [
      "๑๓ สิกขาบท",
      "๔ สิกขาบท",
      "๓๐ สิกขาบท",
      "๙๒ สิกขาบท"
    ],
    "correctIndex": 0,
    "explanation": "สังฆาทิเสสมี ๑๓ สิกขาบท เป็นอาบัติหนักรองจากปาราชิก แก้ไขได้ด้วยสังฆกรรม (อยู่ปริวาส มานัต อัพภาน)",
    "reference": "วินัยบัญญัติ สังฆาทิเสส ๑๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-008",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "ภิกษุมีความกำหนัด จับต้องกายหญิง ต้องอาบัติใด?",
    "options": [
      "สังฆาทิเสส สิกขาบทที่ ๒",
      "ปาราชิก",
      "ปาจิตตีย์",
      "ทุกกฏ"
    ],
    "correctIndex": 0,
    "explanation": "ภิกษุมีความกำหนัด จับต้องกายหญิง ต้องอาบัติสังฆาทิเสส",
    "reference": "วินัยบัญญัติ สังฆาทิเสส ๑๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-009",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "อาบัติอนิยตะ มีกี่สิกขาบท?",
    "options": [
      "๒ สิกขาบท",
      "๔ สิกขาบท",
      "๘ สิกขาบท",
      "๑๐ สิกขาบท"
    ],
    "correctIndex": 0,
    "explanation": "อนิยตะมี ๒ สิกขาบท คืออาบัติที่ยังไม่แน่นอนว่าจะเป็นปาราชิก สังฆาทิเสส หรือปาจิตตีย์",
    "reference": "วินัยบัญญัติ อนิยตะ ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-010",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "อาบัตินิสสัคคิยปาจิตตีย์มีทั้งหมดกี่สิกขาบท?",
    "options": [
      "๓๐ สิกขาบท",
      "๑๓ สิกขาบท",
      "๙๒ สิกขาบท",
      "๗๕ สิกขาบท"
    ],
    "correctIndex": 0,
    "explanation": "นิสสัคคิยปาจิตตีย์มี ๓๐ สิกขาบท ต้องสละสิ่งของก่อนจึงจะแสดงอาบัติตก",
    "reference": "วินัยบัญญัติ นิสสัคคิยปาจิตตีย์ ๓๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-011",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "อาบัติปาจิตตีย์ (หมวดปาจิตตีย์ล้วน) มีกี่สิกขาบท?",
    "options": [
      "๙๒ สิกขาบท",
      "๓๐ สิกขาบท",
      "๗๕ สิกขาบท",
      "๒๒๗ สิกขาบท"
    ],
    "correctIndex": 0,
    "explanation": "ปาจิตตีย์มี ๙๒ สิกขาบท เป็นอาบัติเบา แก้ด้วยการแสดงอาบัติ (ปลงอาบัติ)",
    "reference": "วินัยบัญญัติ ปาจิตตีย์ ๙๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-012",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "ภิกษุพูดปด (มุสาวาท) ต้องอาบัติใด?",
    "options": [
      "ปาจิตตีย์ (มุสาวาทวรรค สิกขาบทที่ ๑)",
      "ปาราชิก",
      "สังฆาทิเสส",
      "ทุกกฏ"
    ],
    "correctIndex": 0,
    "explanation": "พูดเท็จ เจตนาหลอกลวง ต้องอาบัติปาจิตตีย์",
    "reference": "วินัยบัญญัติ ปาจิตตีย์ ๙๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-013",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๓",
    "question": "ภิกษุขุดดิน หรือใช้ให้ผู้อื่นขุดดิน ต้องอาบัติใด?",
    "options": [
      "ปาจิตตีย์ (ภูตคามวรรค)",
      "สังฆาทิเสส",
      "ทุกกฏ",
      "ปาฏิเทสนียะ"
    ],
    "correctIndex": 0,
    "explanation": "ขุดดินทำลายแผ่นดิน ต้องอาบัติปาจิตตีย์",
    "reference": "วินัยบัญญัติ ปาจิตตีย์ ๙๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-014",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๔",
    "question": "ภิกษุดื่มน้ำเมา (สุราและเมรัย) ต้องอาบัติใด?",
    "options": [
      "ปาจิตตีย์ (สุราปานวรรค)",
      "ปาราชิก",
      "สังฆาทิเสส",
      "ถุลลัจจัย"
    ],
    "correctIndex": 0,
    "explanation": "ดื่มสุราเมรัย ต้องอาบัติปาจิตตีย์",
    "reference": "วินัยบัญญัติ ปาจิตตีย์ ๙๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-015",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๕",
    "question": "ภิกษุฉันอาหารในเวลาวิกาล (หลังเที่ยงวันจนถึงรุ่งอรุณ) ต้องอาบัติใด?",
    "options": [
      "ปาจิตตีย์ (โภชนวรรค)",
      "สังฆาทิเสส",
      "ทุกกฏ",
      "ปาฏิเทสนียะ"
    ],
    "correctIndex": 0,
    "explanation": "ฉันอาหารยามวิกาล ต้องอาบัติปาจิตตีย์",
    "reference": "วินัยบัญญัติ ปาจิตตีย์ ๙๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-016",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "อาบัติปาฏิเทสนียะ มีกี่สิกขาบท?",
    "options": [
      "๔ สิกขาบท",
      "๒ สิกขาบท",
      "๘ สิกขาบท",
      "๑๒ สิกขาบท"
    ],
    "correctIndex": 0,
    "explanation": "ปาฏิเทสนียะมี ๔ สิกขาบท เป็นอาบัติที่ต้องกล่าวสารภาพความไม่สมควร",
    "reference": "วินัยบัญญัติ ปาฏิเทสนียะ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-017",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "เสขิยวัตร (มารยาทอันดีงามของภิกษุ) มีกี่สิกขาบท?",
    "options": [
      "๗๕ สิกขาบท",
      "๕๐ สิกขาบท",
      "๑๐๐ สิกขาบท",
      "๒๒๗ สิกขาบท"
    ],
    "correctIndex": 0,
    "explanation": "เสขิยวัตรมี ๗๕ สิกขาบท แบ่งเป็น ๔ หมวด (สารูป โภชนปฏิสังยุตต์ ธัมมเทสนา ปกิณณกะ)",
    "reference": "วินัยบัญญัติ เสขิยวัตร ๗๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-018",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "อธิกรณสมถะ (วิธีระงับอธิกรณ์ในสงฆ์) มีกี่ประการ?",
    "options": [
      "๗ ประการ",
      "๔ ประการ",
      "๑๒ ประการ",
      "๒๐ ประการ"
    ],
    "correctIndex": 0,
    "explanation": "อธิกรณสมถะมี ๗ ประการ เช่น สัมมุขาวินัย, เยภุยยสิกา, ติณวัตถารกวินัย",
    "reference": "วินัยบัญญัติ อธิกรณสมถะ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-019",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "ไตรจีวร (ผ้าครอง ๓ ผืนของพระภิกษุ) ประกอบด้วยผ้าอะไรบ้าง?",
    "options": [
      "สังฆาฏิ (ผ้าทาบ/คลุม) อุตราสงค์ (จีวร) อันตรวาสก (สบง)",
      "ผ้าเช็ดหน้า ผ้าอาบน้ำ ผ้าคลุม",
      "ผ้าห่ม ผ้าปูที่นอน ผ้ารัดอก",
      "ผ้าไหม ผ้าขาว ผ้าลาย"
    ],
    "correctIndex": 0,
    "explanation": "ไตรจีวร ๓ ผืน ได้แก่ สังฆาฏิ อุตราสงค์ และอันตรวาสก",
    "reference": "วินัยบัญญัติ บริขาร",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-020",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "การจำพรรษาของพระภิกษุ มีระยะเวลากี่เดือน?",
    "options": [
      "๓ เดือน (แรม ๑ ค่ำ เดือน ๘ ถึง ขึ้น ๑๕ ค่ำ เดือน ๑๑)",
      "๑ เดือน",
      "๖ เดือน",
      "ตลอดปี"
    ],
    "correctIndex": 0,
    "explanation": "การจำพรรษามีกำหนด ๓ เดือนในช่วงฤดูฝน",
    "reference": "วินัยบัญญัติ การจำพรรษา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-021",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๓",
    "question": "วันอุโบสถ (วันสวดปาฏิโมกข์) ของพระสงฆ์ตรงกับวันใด?",
    "options": [
      "วันขึ้น ๑๕ ค่ำ และ แรม ๑๔ หรือ ๑๕ ค่ำ (ทุกกึ่งเดือน)",
      "วันแรม ๑ ค่ำ",
      "วันขึ้น ๘ ค่ำ",
      "วันสิ้นปี"
    ],
    "correctIndex": 0,
    "explanation": "สงฆ์ต้องประชุมฟังสวดพระปาฏิโมกข์ทุกๆ กึ่งเดือนในวันอุโบสถ",
    "reference": "วินัยบัญญัติ อุโบสถกรรม",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-022",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๔",
    "question": "วันออกพรรษา พระสงฆ์ทำพิธีใดแทนการสวดปาฏิโมกข์?",
    "options": [
      "มหาปวารณา (กล่าวเปิดโอกาสให้ตักเตือนกันได้)",
      "กรานกฐิน",
      "ทอดผ้าป่า",
      "เวียนเทียน"
    ],
    "correctIndex": 0,
    "explanation": "วันออกพรรษาทำพิธีมหาปวารณา เพื่อความบริสุทธิ์และสามัคคีในหมู่สงฆ์",
    "reference": "วินัยบัญญัติ ปวารณา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-023",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๕",
    "question": "ระยะเวลาในการทอดกฐิน มีกำหนดนานเท่าใดหลังออกพรรษา?",
    "options": [
      "๑ เดือน (แรม ๑ ค่ำ เดือน ๑๑ ถึง ขึ้น ๑๕ ค่ำ เดือน ๑๒)",
      "๓ เดือน",
      "๖ เดือน",
      "ตลอดปี"
    ],
    "correctIndex": 0,
    "explanation": "กฐินกาลมีกำหนด ๑ เดือนหลังวันออกพรรษา",
    "reference": "วินัยบัญญัติ กฐิน",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-024",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "สามเณรมีสิกขาบทที่ต้องรักษาประจำกี่ข้อ?",
    "options": [
      "๑๐ ข้อ",
      "๕ ข้อ",
      "๒๒๗ ข้อ",
      "๓๑๑ ข้อ"
    ],
    "correctIndex": 0,
    "explanation": "สามเณรมีสิกขาบท ๑๐ ประการ",
    "reference": "วินัยบัญญัติ สามเณรสิกขา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-025",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "การปลงอาบัติ (แสดงอาบัติ) ทำเพื่อวัตถุประสงค์ใด?",
    "options": [
      "สารภาพความผิดและตั้งใจสำรวมระวังมิให้ทำอีก เพื่อความบริสุทธิ์ของศีล",
      "เพื่อขอลาบวช",
      "เพื่อขอเงินคืน",
      "เพื่อเปลี่ยนวัด"
    ],
    "correctIndex": 0,
    "explanation": "การปลงอาบัติคือการสารภาพโทษลหุโทษต่อหน้าภิกษุอื่นและตั้งใจสำรวมระวังต่อไป",
    "reference": "วินัยบัญญัติ การแสดงอาบัติ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-026",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 2 ข้อ 26] สิกขาบทในพระปาฏิโมกข์ของพระภิกษุมีทั้งหมดกี่ข้อ?",
    "options": [
      "๒๒๗ ข้อ",
      "๑๕๐ ข้อ",
      "๓๑๑ ข้อ",
      "๕๐๐ ข้อ"
    ],
    "correctIndex": 0,
    "explanation": "พระปาฏิโมกข์ของภิกษุสงฆ์มีสิกขาบทบัญญัติ ๒๒๗ ข้อ",
    "reference": "วินัยบัญญัติ นวโกวาท",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-027",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 2 ข้อ 27] อาบัติที่หนักที่สุด มีโทษทำให้ขาดจากความเป็นภิกษุทันทีคืออาบัติใด?",
    "options": [
      "ปาราชิก (มี ๔ สิกขาบท)",
      "สังฆาทิเสส",
      "ปาจิตตีย์",
      "ทุกกฏ"
    ],
    "correctIndex": 0,
    "explanation": "ปาราชิก แปลว่า ผู้พ่ายแพ้ ขาดจากความเป็นภิกษุทันทีที่ล่วงละเมิด",
    "reference": "วินัยบัญญัติ ปาราชิก ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-028",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 2 ข้อ 28] ปาราชิกข้อที่ ๑ มีสิกขาบทบัญญัติว่าอย่างไร?",
    "options": [
      "ภิกษุเสพเมถุน (ร่วมประเวณี)",
      "ภิกษุลักทรัพย์",
      "ภิกษุฆ่ามนุษย์",
      "ภิกษุอวดอุตตริมนุสสธรรม"
    ],
    "correctIndex": 0,
    "explanation": "ปาราชิกข้อ ๑ คือ ภิกษุเสพเมถุน แม้กับสัตว์เดรัจฉานตัวเมีย",
    "reference": "วินัยบัญญัติ ปาราชิก ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-029",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 2 ข้อ 29] ปาราชิกข้อที่ ๒ (อทินนาทาน) มีเกณฑ์ราคาของที่ขโมยเท่าใดจึงต้องปาราชิก?",
    "options": [
      "ราคาตั้งแต่ ๕ มาสกขึ้นไป (ประมาณ ๑ บาท)",
      "ราคา ๑ สตางค์",
      "ราคา ๑๐๐ บาท",
      "ไม่จำกัดราคา"
    ],
    "correctIndex": 0,
    "explanation": "ถือเอาทรัพย์ที่เจ้าของไม่ได้ให้ ได้ราคาตั้งแต่ ๕ มาสกขึ้นไป ต้องอาบัติปาราชิก",
    "reference": "วินัยบัญญัติ ปาราชิก ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-030",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 2 ข้อ 30] ปาราชิกข้อที่ ๓ บัญญัติห้ามการกระทำใด?",
    "options": [
      "ภิกษุแกล้งฆ่ามนุษย์ให้ตาย หรือพรรณนาคุณแห่งความตายชักชวนให้เขาฆ่าตัวตาย",
      "ภิกษุฆ่าสัตว์เดรัจฉาน",
      "ภิกษุตัดต้นไม้",
      "ภิกษุตีเพื่อน"
    ],
    "correctIndex": 0,
    "explanation": "ปาราชิกข้อ ๓ คือ เจตนาฆ่ามนุษย์ หรือจ้างวาน ชักนำให้เขาตาย",
    "reference": "วินัยบัญญัติ ปาราชิก ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-031",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 2 ข้อ 31] ปาราชิกข้อที่ ๔ บัญญัติห้ามเรื่องใด?",
    "options": [
      "ภิกษุอวดอุตตริมนุสสธรรมที่ไม่มีจริงในตน (เช่น อวดว่าได้ฌาน บรรลุมรรคผล)",
      "ภิกษุพูดโกหกทั่วไป",
      "ภิกษุพูดด่าทอ",
      "ภิกษุอวดรวย"
    ],
    "correctIndex": 0,
    "explanation": "อวดคุณวิเศษที่ไม่มีจริงเพื่อหวังลาภสักการะ ต้องอาบัติปาราชิก",
    "reference": "วินัยบัญญัติ ปาราชิก ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-032",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 2 ข้อ 32] อาบัติสังฆาทิเสสมีทั้งหมดกี่สิกขาบท?",
    "options": [
      "๑๓ สิกขาบท",
      "๔ สิกขาบท",
      "๓๐ สิกขาบท",
      "๙๒ สิกขาบท"
    ],
    "correctIndex": 0,
    "explanation": "สังฆาทิเสสมี ๑๓ สิกขาบท เป็นอาบัติหนักรองจากปาราชิก แก้ไขได้ด้วยสังฆกรรม (อยู่ปริวาส มานัต อัพภาน)",
    "reference": "วินัยบัญญัติ สังฆาทิเสส ๑๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-033",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 2 ข้อ 33] ภิกษุมีความกำหนัด จับต้องกายหญิง ต้องอาบัติใด?",
    "options": [
      "สังฆาทิเสส สิกขาบทที่ ๒",
      "ปาราชิก",
      "ปาจิตตีย์",
      "ทุกกฏ"
    ],
    "correctIndex": 0,
    "explanation": "ภิกษุมีความกำหนัด จับต้องกายหญิง ต้องอาบัติสังฆาทิเสส",
    "reference": "วินัยบัญญัติ สังฆาทิเสส ๑๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-034",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 2 ข้อ 34] อาบัติอนิยตะ มีกี่สิกขาบท?",
    "options": [
      "๒ สิกขาบท",
      "๔ สิกขาบท",
      "๘ สิกขาบท",
      "๑๐ สิกขาบท"
    ],
    "correctIndex": 0,
    "explanation": "อนิยตะมี ๒ สิกขาบท คืออาบัติที่ยังไม่แน่นอนว่าจะเป็นปาราชิก สังฆาทิเสส หรือปาจิตตีย์",
    "reference": "วินัยบัญญัติ อนิยตะ ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-035",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 2 ข้อ 35] อาบัตินิสสัคคิยปาจิตตีย์มีทั้งหมดกี่สิกขาบท?",
    "options": [
      "๓๐ สิกขาบท",
      "๑๓ สิกขาบท",
      "๙๒ สิกขาบท",
      "๗๕ สิกขาบท"
    ],
    "correctIndex": 0,
    "explanation": "นิสสัคคิยปาจิตตีย์มี ๓๐ สิกขาบท ต้องสละสิ่งของก่อนจึงจะแสดงอาบัติตก",
    "reference": "วินัยบัญญัติ นิสสัคคิยปาจิตตีย์ ๓๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-036",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 2 ข้อ 36] อาบัติปาจิตตีย์ (หมวดปาจิตตีย์ล้วน) มีกี่สิกขาบท?",
    "options": [
      "๙๒ สิกขาบท",
      "๓๐ สิกขาบท",
      "๗๕ สิกขาบท",
      "๒๒๗ สิกขาบท"
    ],
    "correctIndex": 0,
    "explanation": "ปาจิตตีย์มี ๙๒ สิกขาบท เป็นอาบัติเบา แก้ด้วยการแสดงอาบัติ (ปลงอาบัติ)",
    "reference": "วินัยบัญญัติ ปาจิตตีย์ ๙๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-037",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 2 ข้อ 37] ภิกษุพูดปด (มุสาวาท) ต้องอาบัติใด?",
    "options": [
      "ปาจิตตีย์ (มุสาวาทวรรค สิกขาบทที่ ๑)",
      "ปาราชิก",
      "สังฆาทิเสส",
      "ทุกกฏ"
    ],
    "correctIndex": 0,
    "explanation": "พูดเท็จ เจตนาหลอกลวง ต้องอาบัติปาจิตตีย์",
    "reference": "วินัยบัญญัติ ปาจิตตีย์ ๙๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-038",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 2 ข้อ 38] ภิกษุขุดดิน หรือใช้ให้ผู้อื่นขุดดิน ต้องอาบัติใด?",
    "options": [
      "ปาจิตตีย์ (ภูตคามวรรค)",
      "สังฆาทิเสส",
      "ทุกกฏ",
      "ปาฏิเทสนียะ"
    ],
    "correctIndex": 0,
    "explanation": "ขุดดินทำลายแผ่นดิน ต้องอาบัติปาจิตตีย์",
    "reference": "วินัยบัญญัติ ปาจิตตีย์ ๙๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-039",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 2 ข้อ 39] ภิกษุดื่มน้ำเมา (สุราและเมรัย) ต้องอาบัติใด?",
    "options": [
      "ปาจิตตีย์ (สุราปานวรรค)",
      "ปาราชิก",
      "สังฆาทิเสส",
      "ถุลลัจจัย"
    ],
    "correctIndex": 0,
    "explanation": "ดื่มสุราเมรัย ต้องอาบัติปาจิตตีย์",
    "reference": "วินัยบัญญัติ ปาจิตตีย์ ๙๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-040",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 2 ข้อ 40] ภิกษุฉันอาหารในเวลาวิกาล (หลังเที่ยงวันจนถึงรุ่งอรุณ) ต้องอาบัติใด?",
    "options": [
      "ปาจิตตีย์ (โภชนวรรค)",
      "สังฆาทิเสส",
      "ทุกกฏ",
      "ปาฏิเทสนียะ"
    ],
    "correctIndex": 0,
    "explanation": "ฉันอาหารยามวิกาล ต้องอาบัติปาจิตตีย์",
    "reference": "วินัยบัญญัติ ปาจิตตีย์ ๙๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-041",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 2 ข้อ 41] อาบัติปาฏิเทสนียะ มีกี่สิกขาบท?",
    "options": [
      "๔ สิกขาบท",
      "๒ สิกขาบท",
      "๘ สิกขาบท",
      "๑๒ สิกขาบท"
    ],
    "correctIndex": 0,
    "explanation": "ปาฏิเทสนียะมี ๔ สิกขาบท เป็นอาบัติที่ต้องกล่าวสารภาพความไม่สมควร",
    "reference": "วินัยบัญญัติ ปาฏิเทสนียะ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-042",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 2 ข้อ 42] เสขิยวัตร (มารยาทอันดีงามของภิกษุ) มีกี่สิกขาบท?",
    "options": [
      "๗๕ สิกขาบท",
      "๕๐ สิกขาบท",
      "๑๐๐ สิกขาบท",
      "๒๒๗ สิกขาบท"
    ],
    "correctIndex": 0,
    "explanation": "เสขิยวัตรมี ๗๕ สิกขาบท แบ่งเป็น ๔ หมวด (สารูป โภชนปฏิสังยุตต์ ธัมมเทสนา ปกิณณกะ)",
    "reference": "วินัยบัญญัติ เสขิยวัตร ๗๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-043",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 2 ข้อ 43] อธิกรณสมถะ (วิธีระงับอธิกรณ์ในสงฆ์) มีกี่ประการ?",
    "options": [
      "๗ ประการ",
      "๔ ประการ",
      "๑๒ ประการ",
      "๒๐ ประการ"
    ],
    "correctIndex": 0,
    "explanation": "อธิกรณสมถะมี ๗ ประการ เช่น สัมมุขาวินัย, เยภุยยสิกา, ติณวัตถารกวินัย",
    "reference": "วินัยบัญญัติ อธิกรณสมถะ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-044",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 2 ข้อ 44] ไตรจีวร (ผ้าครอง ๓ ผืนของพระภิกษุ) ประกอบด้วยผ้าอะไรบ้าง?",
    "options": [
      "สังฆาฏิ (ผ้าทาบ/คลุม) อุตราสงค์ (จีวร) อันตรวาสก (สบง)",
      "ผ้าเช็ดหน้า ผ้าอาบน้ำ ผ้าคลุม",
      "ผ้าห่ม ผ้าปูที่นอน ผ้ารัดอก",
      "ผ้าไหม ผ้าขาว ผ้าลาย"
    ],
    "correctIndex": 0,
    "explanation": "ไตรจีวร ๓ ผืน ได้แก่ สังฆาฏิ อุตราสงค์ และอันตรวาสก",
    "reference": "วินัยบัญญัติ บริขาร",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-045",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 2 ข้อ 45] การจำพรรษาของพระภิกษุ มีระยะเวลากี่เดือน?",
    "options": [
      "๓ เดือน (แรม ๑ ค่ำ เดือน ๘ ถึง ขึ้น ๑๕ ค่ำ เดือน ๑๑)",
      "๑ เดือน",
      "๖ เดือน",
      "ตลอดปี"
    ],
    "correctIndex": 0,
    "explanation": "การจำพรรษามีกำหนด ๓ เดือนในช่วงฤดูฝน",
    "reference": "วินัยบัญญัติ การจำพรรษา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-046",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 2 ข้อ 46] วันอุโบสถ (วันสวดปาฏิโมกข์) ของพระสงฆ์ตรงกับวันใด?",
    "options": [
      "วันขึ้น ๑๕ ค่ำ และ แรม ๑๔ หรือ ๑๕ ค่ำ (ทุกกึ่งเดือน)",
      "วันแรม ๑ ค่ำ",
      "วันขึ้น ๘ ค่ำ",
      "วันสิ้นปี"
    ],
    "correctIndex": 0,
    "explanation": "สงฆ์ต้องประชุมฟังสวดพระปาฏิโมกข์ทุกๆ กึ่งเดือนในวันอุโบสถ",
    "reference": "วินัยบัญญัติ อุโบสถกรรม",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-047",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 2 ข้อ 47] วันออกพรรษา พระสงฆ์ทำพิธีใดแทนการสวดปาฏิโมกข์?",
    "options": [
      "มหาปวารณา (กล่าวเปิดโอกาสให้ตักเตือนกันได้)",
      "กรานกฐิน",
      "ทอดผ้าป่า",
      "เวียนเทียน"
    ],
    "correctIndex": 0,
    "explanation": "วันออกพรรษาทำพิธีมหาปวารณา เพื่อความบริสุทธิ์และสามัคคีในหมู่สงฆ์",
    "reference": "วินัยบัญญัติ ปวารณา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-048",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 2 ข้อ 48] ระยะเวลาในการทอดกฐิน มีกำหนดนานเท่าใดหลังออกพรรษา?",
    "options": [
      "๑ เดือน (แรม ๑ ค่ำ เดือน ๑๑ ถึง ขึ้น ๑๕ ค่ำ เดือน ๑๒)",
      "๓ เดือน",
      "๖ เดือน",
      "ตลอดปี"
    ],
    "correctIndex": 0,
    "explanation": "กฐินกาลมีกำหนด ๑ เดือนหลังวันออกพรรษา",
    "reference": "วินัยบัญญัติ กฐิน",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-049",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 2 ข้อ 49] สามเณรมีสิกขาบทที่ต้องรักษาประจำกี่ข้อ?",
    "options": [
      "๑๐ ข้อ",
      "๕ ข้อ",
      "๒๒๗ ข้อ",
      "๓๑๑ ข้อ"
    ],
    "correctIndex": 0,
    "explanation": "สามเณรมีสิกขาบท ๑๐ ประการ",
    "reference": "วินัยบัญญัติ สามเณรสิกขา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-050",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 2 ข้อ 50] การปลงอาบัติ (แสดงอาบัติ) ทำเพื่อวัตถุประสงค์ใด?",
    "options": [
      "สารภาพความผิดและตั้งใจสำรวมระวังมิให้ทำอีก เพื่อความบริสุทธิ์ของศีล",
      "เพื่อขอลาบวช",
      "เพื่อขอเงินคืน",
      "เพื่อเปลี่ยนวัด"
    ],
    "correctIndex": 0,
    "explanation": "การปลงอาบัติคือการสารภาพโทษลหุโทษต่อหน้าภิกษุอื่นและตั้งใจสำรวมระวังต่อไป",
    "reference": "วินัยบัญญัติ การแสดงอาบัติ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-051",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 3 ข้อ 51] สิกขาบทในพระปาฏิโมกข์ของพระภิกษุมีทั้งหมดกี่ข้อ?",
    "options": [
      "๒๒๗ ข้อ",
      "๑๕๐ ข้อ",
      "๓๑๑ ข้อ",
      "๕๐๐ ข้อ"
    ],
    "correctIndex": 0,
    "explanation": "พระปาฏิโมกข์ของภิกษุสงฆ์มีสิกขาบทบัญญัติ ๒๒๗ ข้อ",
    "reference": "วินัยบัญญัติ นวโกวาท",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-052",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 3 ข้อ 52] อาบัติที่หนักที่สุด มีโทษทำให้ขาดจากความเป็นภิกษุทันทีคืออาบัติใด?",
    "options": [
      "ปาราชิก (มี ๔ สิกขาบท)",
      "สังฆาทิเสส",
      "ปาจิตตีย์",
      "ทุกกฏ"
    ],
    "correctIndex": 0,
    "explanation": "ปาราชิก แปลว่า ผู้พ่ายแพ้ ขาดจากความเป็นภิกษุทันทีที่ล่วงละเมิด",
    "reference": "วินัยบัญญัติ ปาราชิก ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-053",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 3 ข้อ 53] ปาราชิกข้อที่ ๑ มีสิกขาบทบัญญัติว่าอย่างไร?",
    "options": [
      "ภิกษุเสพเมถุน (ร่วมประเวณี)",
      "ภิกษุลักทรัพย์",
      "ภิกษุฆ่ามนุษย์",
      "ภิกษุอวดอุตตริมนุสสธรรม"
    ],
    "correctIndex": 0,
    "explanation": "ปาราชิกข้อ ๑ คือ ภิกษุเสพเมถุน แม้กับสัตว์เดรัจฉานตัวเมีย",
    "reference": "วินัยบัญญัติ ปาราชิก ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-054",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 3 ข้อ 54] ปาราชิกข้อที่ ๒ (อทินนาทาน) มีเกณฑ์ราคาของที่ขโมยเท่าใดจึงต้องปาราชิก?",
    "options": [
      "ราคาตั้งแต่ ๕ มาสกขึ้นไป (ประมาณ ๑ บาท)",
      "ราคา ๑ สตางค์",
      "ราคา ๑๐๐ บาท",
      "ไม่จำกัดราคา"
    ],
    "correctIndex": 0,
    "explanation": "ถือเอาทรัพย์ที่เจ้าของไม่ได้ให้ ได้ราคาตั้งแต่ ๕ มาสกขึ้นไป ต้องอาบัติปาราชิก",
    "reference": "วินัยบัญญัติ ปาราชิก ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-055",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 3 ข้อ 55] ปาราชิกข้อที่ ๓ บัญญัติห้ามการกระทำใด?",
    "options": [
      "ภิกษุแกล้งฆ่ามนุษย์ให้ตาย หรือพรรณนาคุณแห่งความตายชักชวนให้เขาฆ่าตัวตาย",
      "ภิกษุฆ่าสัตว์เดรัจฉาน",
      "ภิกษุตัดต้นไม้",
      "ภิกษุตีเพื่อน"
    ],
    "correctIndex": 0,
    "explanation": "ปาราชิกข้อ ๓ คือ เจตนาฆ่ามนุษย์ หรือจ้างวาน ชักนำให้เขาตาย",
    "reference": "วินัยบัญญัติ ปาราชิก ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-056",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 3 ข้อ 56] ปาราชิกข้อที่ ๔ บัญญัติห้ามเรื่องใด?",
    "options": [
      "ภิกษุอวดอุตตริมนุสสธรรมที่ไม่มีจริงในตน (เช่น อวดว่าได้ฌาน บรรลุมรรคผล)",
      "ภิกษุพูดโกหกทั่วไป",
      "ภิกษุพูดด่าทอ",
      "ภิกษุอวดรวย"
    ],
    "correctIndex": 0,
    "explanation": "อวดคุณวิเศษที่ไม่มีจริงเพื่อหวังลาภสักการะ ต้องอาบัติปาราชิก",
    "reference": "วินัยบัญญัติ ปาราชิก ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-057",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 3 ข้อ 57] อาบัติสังฆาทิเสสมีทั้งหมดกี่สิกขาบท?",
    "options": [
      "๑๓ สิกขาบท",
      "๔ สิกขาบท",
      "๓๐ สิกขาบท",
      "๙๒ สิกขาบท"
    ],
    "correctIndex": 0,
    "explanation": "สังฆาทิเสสมี ๑๓ สิกขาบท เป็นอาบัติหนักรองจากปาราชิก แก้ไขได้ด้วยสังฆกรรม (อยู่ปริวาส มานัต อัพภาน)",
    "reference": "วินัยบัญญัติ สังฆาทิเสส ๑๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-058",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 3 ข้อ 58] ภิกษุมีความกำหนัด จับต้องกายหญิง ต้องอาบัติใด?",
    "options": [
      "สังฆาทิเสส สิกขาบทที่ ๒",
      "ปาราชิก",
      "ปาจิตตีย์",
      "ทุกกฏ"
    ],
    "correctIndex": 0,
    "explanation": "ภิกษุมีความกำหนัด จับต้องกายหญิง ต้องอาบัติสังฆาทิเสส",
    "reference": "วินัยบัญญัติ สังฆาทิเสส ๑๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-059",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 3 ข้อ 59] อาบัติอนิยตะ มีกี่สิกขาบท?",
    "options": [
      "๒ สิกขาบท",
      "๔ สิกขาบท",
      "๘ สิกขาบท",
      "๑๐ สิกขาบท"
    ],
    "correctIndex": 0,
    "explanation": "อนิยตะมี ๒ สิกขาบท คืออาบัติที่ยังไม่แน่นอนว่าจะเป็นปาราชิก สังฆาทิเสส หรือปาจิตตีย์",
    "reference": "วินัยบัญญัติ อนิยตะ ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-060",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 3 ข้อ 60] อาบัตินิสสัคคิยปาจิตตีย์มีทั้งหมดกี่สิกขาบท?",
    "options": [
      "๓๐ สิกขาบท",
      "๑๓ สิกขาบท",
      "๙๒ สิกขาบท",
      "๗๕ สิกขาบท"
    ],
    "correctIndex": 0,
    "explanation": "นิสสัคคิยปาจิตตีย์มี ๓๐ สิกขาบท ต้องสละสิ่งของก่อนจึงจะแสดงอาบัติตก",
    "reference": "วินัยบัญญัติ นิสสัคคิยปาจิตตีย์ ๓๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-061",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 3 ข้อ 61] อาบัติปาจิตตีย์ (หมวดปาจิตตีย์ล้วน) มีกี่สิกขาบท?",
    "options": [
      "๙๒ สิกขาบท",
      "๓๐ สิกขาบท",
      "๗๕ สิกขาบท",
      "๒๒๗ สิกขาบท"
    ],
    "correctIndex": 0,
    "explanation": "ปาจิตตีย์มี ๙๒ สิกขาบท เป็นอาบัติเบา แก้ด้วยการแสดงอาบัติ (ปลงอาบัติ)",
    "reference": "วินัยบัญญัติ ปาจิตตีย์ ๙๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-062",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 3 ข้อ 62] ภิกษุพูดปด (มุสาวาท) ต้องอาบัติใด?",
    "options": [
      "ปาจิตตีย์ (มุสาวาทวรรค สิกขาบทที่ ๑)",
      "ปาราชิก",
      "สังฆาทิเสส",
      "ทุกกฏ"
    ],
    "correctIndex": 0,
    "explanation": "พูดเท็จ เจตนาหลอกลวง ต้องอาบัติปาจิตตีย์",
    "reference": "วินัยบัญญัติ ปาจิตตีย์ ๙๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-063",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 3 ข้อ 63] ภิกษุขุดดิน หรือใช้ให้ผู้อื่นขุดดิน ต้องอาบัติใด?",
    "options": [
      "ปาจิตตีย์ (ภูตคามวรรค)",
      "สังฆาทิเสส",
      "ทุกกฏ",
      "ปาฏิเทสนียะ"
    ],
    "correctIndex": 0,
    "explanation": "ขุดดินทำลายแผ่นดิน ต้องอาบัติปาจิตตีย์",
    "reference": "วินัยบัญญัติ ปาจิตตีย์ ๙๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-064",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 3 ข้อ 64] ภิกษุดื่มน้ำเมา (สุราและเมรัย) ต้องอาบัติใด?",
    "options": [
      "ปาจิตตีย์ (สุราปานวรรค)",
      "ปาราชิก",
      "สังฆาทิเสส",
      "ถุลลัจจัย"
    ],
    "correctIndex": 0,
    "explanation": "ดื่มสุราเมรัย ต้องอาบัติปาจิตตีย์",
    "reference": "วินัยบัญญัติ ปาจิตตีย์ ๙๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-065",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 3 ข้อ 65] ภิกษุฉันอาหารในเวลาวิกาล (หลังเที่ยงวันจนถึงรุ่งอรุณ) ต้องอาบัติใด?",
    "options": [
      "ปาจิตตีย์ (โภชนวรรค)",
      "สังฆาทิเสส",
      "ทุกกฏ",
      "ปาฏิเทสนียะ"
    ],
    "correctIndex": 0,
    "explanation": "ฉันอาหารยามวิกาล ต้องอาบัติปาจิตตีย์",
    "reference": "วินัยบัญญัติ ปาจิตตีย์ ๙๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-066",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 3 ข้อ 66] อาบัติปาฏิเทสนียะ มีกี่สิกขาบท?",
    "options": [
      "๔ สิกขาบท",
      "๒ สิกขาบท",
      "๘ สิกขาบท",
      "๑๒ สิกขาบท"
    ],
    "correctIndex": 0,
    "explanation": "ปาฏิเทสนียะมี ๔ สิกขาบท เป็นอาบัติที่ต้องกล่าวสารภาพความไม่สมควร",
    "reference": "วินัยบัญญัติ ปาฏิเทสนียะ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-067",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 3 ข้อ 67] เสขิยวัตร (มารยาทอันดีงามของภิกษุ) มีกี่สิกขาบท?",
    "options": [
      "๗๕ สิกขาบท",
      "๕๐ สิกขาบท",
      "๑๐๐ สิกขาบท",
      "๒๒๗ สิกขาบท"
    ],
    "correctIndex": 0,
    "explanation": "เสขิยวัตรมี ๗๕ สิกขาบท แบ่งเป็น ๔ หมวด (สารูป โภชนปฏิสังยุตต์ ธัมมเทสนา ปกิณณกะ)",
    "reference": "วินัยบัญญัติ เสขิยวัตร ๗๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-068",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 3 ข้อ 68] อธิกรณสมถะ (วิธีระงับอธิกรณ์ในสงฆ์) มีกี่ประการ?",
    "options": [
      "๗ ประการ",
      "๔ ประการ",
      "๑๒ ประการ",
      "๒๐ ประการ"
    ],
    "correctIndex": 0,
    "explanation": "อธิกรณสมถะมี ๗ ประการ เช่น สัมมุขาวินัย, เยภุยยสิกา, ติณวัตถารกวินัย",
    "reference": "วินัยบัญญัติ อธิกรณสมถะ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-069",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 3 ข้อ 69] ไตรจีวร (ผ้าครอง ๓ ผืนของพระภิกษุ) ประกอบด้วยผ้าอะไรบ้าง?",
    "options": [
      "สังฆาฏิ (ผ้าทาบ/คลุม) อุตราสงค์ (จีวร) อันตรวาสก (สบง)",
      "ผ้าเช็ดหน้า ผ้าอาบน้ำ ผ้าคลุม",
      "ผ้าห่ม ผ้าปูที่นอน ผ้ารัดอก",
      "ผ้าไหม ผ้าขาว ผ้าลาย"
    ],
    "correctIndex": 0,
    "explanation": "ไตรจีวร ๓ ผืน ได้แก่ สังฆาฏิ อุตราสงค์ และอันตรวาสก",
    "reference": "วินัยบัญญัติ บริขาร",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-070",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 3 ข้อ 70] การจำพรรษาของพระภิกษุ มีระยะเวลากี่เดือน?",
    "options": [
      "๓ เดือน (แรม ๑ ค่ำ เดือน ๘ ถึง ขึ้น ๑๕ ค่ำ เดือน ๑๑)",
      "๑ เดือน",
      "๖ เดือน",
      "ตลอดปี"
    ],
    "correctIndex": 0,
    "explanation": "การจำพรรษามีกำหนด ๓ เดือนในช่วงฤดูฝน",
    "reference": "วินัยบัญญัติ การจำพรรษา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-071",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 3 ข้อ 71] วันอุโบสถ (วันสวดปาฏิโมกข์) ของพระสงฆ์ตรงกับวันใด?",
    "options": [
      "วันขึ้น ๑๕ ค่ำ และ แรม ๑๔ หรือ ๑๕ ค่ำ (ทุกกึ่งเดือน)",
      "วันแรม ๑ ค่ำ",
      "วันขึ้น ๘ ค่ำ",
      "วันสิ้นปี"
    ],
    "correctIndex": 0,
    "explanation": "สงฆ์ต้องประชุมฟังสวดพระปาฏิโมกข์ทุกๆ กึ่งเดือนในวันอุโบสถ",
    "reference": "วินัยบัญญัติ อุโบสถกรรม",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-072",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 3 ข้อ 72] วันออกพรรษา พระสงฆ์ทำพิธีใดแทนการสวดปาฏิโมกข์?",
    "options": [
      "มหาปวารณา (กล่าวเปิดโอกาสให้ตักเตือนกันได้)",
      "กรานกฐิน",
      "ทอดผ้าป่า",
      "เวียนเทียน"
    ],
    "correctIndex": 0,
    "explanation": "วันออกพรรษาทำพิธีมหาปวารณา เพื่อความบริสุทธิ์และสามัคคีในหมู่สงฆ์",
    "reference": "วินัยบัญญัติ ปวารณา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-073",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 3 ข้อ 73] ระยะเวลาในการทอดกฐิน มีกำหนดนานเท่าใดหลังออกพรรษา?",
    "options": [
      "๑ เดือน (แรม ๑ ค่ำ เดือน ๑๑ ถึง ขึ้น ๑๕ ค่ำ เดือน ๑๒)",
      "๓ เดือน",
      "๖ เดือน",
      "ตลอดปี"
    ],
    "correctIndex": 0,
    "explanation": "กฐินกาลมีกำหนด ๑ เดือนหลังวันออกพรรษา",
    "reference": "วินัยบัญญัติ กฐิน",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-074",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 3 ข้อ 74] สามเณรมีสิกขาบทที่ต้องรักษาประจำกี่ข้อ?",
    "options": [
      "๑๐ ข้อ",
      "๕ ข้อ",
      "๒๒๗ ข้อ",
      "๓๑๑ ข้อ"
    ],
    "correctIndex": 0,
    "explanation": "สามเณรมีสิกขาบท ๑๐ ประการ",
    "reference": "วินัยบัญญัติ สามเณรสิกขา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-075",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 3 ข้อ 75] การปลงอาบัติ (แสดงอาบัติ) ทำเพื่อวัตถุประสงค์ใด?",
    "options": [
      "สารภาพความผิดและตั้งใจสำรวมระวังมิให้ทำอีก เพื่อความบริสุทธิ์ของศีล",
      "เพื่อขอลาบวช",
      "เพื่อขอเงินคืน",
      "เพื่อเปลี่ยนวัด"
    ],
    "correctIndex": 0,
    "explanation": "การปลงอาบัติคือการสารภาพโทษลหุโทษต่อหน้าภิกษุอื่นและตั้งใจสำรวมระวังต่อไป",
    "reference": "วินัยบัญญัติ การแสดงอาบัติ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-076",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 4 ข้อ 76] สิกขาบทในพระปาฏิโมกข์ของพระภิกษุมีทั้งหมดกี่ข้อ?",
    "options": [
      "๒๒๗ ข้อ",
      "๑๕๐ ข้อ",
      "๓๑๑ ข้อ",
      "๕๐๐ ข้อ"
    ],
    "correctIndex": 0,
    "explanation": "พระปาฏิโมกข์ของภิกษุสงฆ์มีสิกขาบทบัญญัติ ๒๒๗ ข้อ",
    "reference": "วินัยบัญญัติ นวโกวาท",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-077",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 4 ข้อ 77] อาบัติที่หนักที่สุด มีโทษทำให้ขาดจากความเป็นภิกษุทันทีคืออาบัติใด?",
    "options": [
      "ปาราชิก (มี ๔ สิกขาบท)",
      "สังฆาทิเสส",
      "ปาจิตตีย์",
      "ทุกกฏ"
    ],
    "correctIndex": 0,
    "explanation": "ปาราชิก แปลว่า ผู้พ่ายแพ้ ขาดจากความเป็นภิกษุทันทีที่ล่วงละเมิด",
    "reference": "วินัยบัญญัติ ปาราชิก ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-078",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 4 ข้อ 78] ปาราชิกข้อที่ ๑ มีสิกขาบทบัญญัติว่าอย่างไร?",
    "options": [
      "ภิกษุเสพเมถุน (ร่วมประเวณี)",
      "ภิกษุลักทรัพย์",
      "ภิกษุฆ่ามนุษย์",
      "ภิกษุอวดอุตตริมนุสสธรรม"
    ],
    "correctIndex": 0,
    "explanation": "ปาราชิกข้อ ๑ คือ ภิกษุเสพเมถุน แม้กับสัตว์เดรัจฉานตัวเมีย",
    "reference": "วินัยบัญญัติ ปาราชิก ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-079",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 4 ข้อ 79] ปาราชิกข้อที่ ๒ (อทินนาทาน) มีเกณฑ์ราคาของที่ขโมยเท่าใดจึงต้องปาราชิก?",
    "options": [
      "ราคาตั้งแต่ ๕ มาสกขึ้นไป (ประมาณ ๑ บาท)",
      "ราคา ๑ สตางค์",
      "ราคา ๑๐๐ บาท",
      "ไม่จำกัดราคา"
    ],
    "correctIndex": 0,
    "explanation": "ถือเอาทรัพย์ที่เจ้าของไม่ได้ให้ ได้ราคาตั้งแต่ ๕ มาสกขึ้นไป ต้องอาบัติปาราชิก",
    "reference": "วินัยบัญญัติ ปาราชิก ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-080",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 4 ข้อ 80] ปาราชิกข้อที่ ๓ บัญญัติห้ามการกระทำใด?",
    "options": [
      "ภิกษุแกล้งฆ่ามนุษย์ให้ตาย หรือพรรณนาคุณแห่งความตายชักชวนให้เขาฆ่าตัวตาย",
      "ภิกษุฆ่าสัตว์เดรัจฉาน",
      "ภิกษุตัดต้นไม้",
      "ภิกษุตีเพื่อน"
    ],
    "correctIndex": 0,
    "explanation": "ปาราชิกข้อ ๓ คือ เจตนาฆ่ามนุษย์ หรือจ้างวาน ชักนำให้เขาตาย",
    "reference": "วินัยบัญญัติ ปาราชิก ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-081",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 4 ข้อ 81] ปาราชิกข้อที่ ๔ บัญญัติห้ามเรื่องใด?",
    "options": [
      "ภิกษุอวดอุตตริมนุสสธรรมที่ไม่มีจริงในตน (เช่น อวดว่าได้ฌาน บรรลุมรรคผล)",
      "ภิกษุพูดโกหกทั่วไป",
      "ภิกษุพูดด่าทอ",
      "ภิกษุอวดรวย"
    ],
    "correctIndex": 0,
    "explanation": "อวดคุณวิเศษที่ไม่มีจริงเพื่อหวังลาภสักการะ ต้องอาบัติปาราชิก",
    "reference": "วินัยบัญญัติ ปาราชิก ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-082",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 4 ข้อ 82] อาบัติสังฆาทิเสสมีทั้งหมดกี่สิกขาบท?",
    "options": [
      "๑๓ สิกขาบท",
      "๔ สิกขาบท",
      "๓๐ สิกขาบท",
      "๙๒ สิกขาบท"
    ],
    "correctIndex": 0,
    "explanation": "สังฆาทิเสสมี ๑๓ สิกขาบท เป็นอาบัติหนักรองจากปาราชิก แก้ไขได้ด้วยสังฆกรรม (อยู่ปริวาส มานัต อัพภาน)",
    "reference": "วินัยบัญญัติ สังฆาทิเสส ๑๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-083",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 4 ข้อ 83] ภิกษุมีความกำหนัด จับต้องกายหญิง ต้องอาบัติใด?",
    "options": [
      "สังฆาทิเสส สิกขาบทที่ ๒",
      "ปาราชิก",
      "ปาจิตตีย์",
      "ทุกกฏ"
    ],
    "correctIndex": 0,
    "explanation": "ภิกษุมีความกำหนัด จับต้องกายหญิง ต้องอาบัติสังฆาทิเสส",
    "reference": "วินัยบัญญัติ สังฆาทิเสส ๑๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-084",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 4 ข้อ 84] อาบัติอนิยตะ มีกี่สิกขาบท?",
    "options": [
      "๒ สิกขาบท",
      "๔ สิกขาบท",
      "๘ สิกขาบท",
      "๑๐ สิกขาบท"
    ],
    "correctIndex": 0,
    "explanation": "อนิยตะมี ๒ สิกขาบท คืออาบัติที่ยังไม่แน่นอนว่าจะเป็นปาราชิก สังฆาทิเสส หรือปาจิตตีย์",
    "reference": "วินัยบัญญัติ อนิยตะ ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-085",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 4 ข้อ 85] อาบัตินิสสัคคิยปาจิตตีย์มีทั้งหมดกี่สิกขาบท?",
    "options": [
      "๓๐ สิกขาบท",
      "๑๓ สิกขาบท",
      "๙๒ สิกขาบท",
      "๗๕ สิกขาบท"
    ],
    "correctIndex": 0,
    "explanation": "นิสสัคคิยปาจิตตีย์มี ๓๐ สิกขาบท ต้องสละสิ่งของก่อนจึงจะแสดงอาบัติตก",
    "reference": "วินัยบัญญัติ นิสสัคคิยปาจิตตีย์ ๓๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-086",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 4 ข้อ 86] อาบัติปาจิตตีย์ (หมวดปาจิตตีย์ล้วน) มีกี่สิกขาบท?",
    "options": [
      "๙๒ สิกขาบท",
      "๓๐ สิกขาบท",
      "๗๕ สิกขาบท",
      "๒๒๗ สิกขาบท"
    ],
    "correctIndex": 0,
    "explanation": "ปาจิตตีย์มี ๙๒ สิกขาบท เป็นอาบัติเบา แก้ด้วยการแสดงอาบัติ (ปลงอาบัติ)",
    "reference": "วินัยบัญญัติ ปาจิตตีย์ ๙๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-087",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 4 ข้อ 87] ภิกษุพูดปด (มุสาวาท) ต้องอาบัติใด?",
    "options": [
      "ปาจิตตีย์ (มุสาวาทวรรค สิกขาบทที่ ๑)",
      "ปาราชิก",
      "สังฆาทิเสส",
      "ทุกกฏ"
    ],
    "correctIndex": 0,
    "explanation": "พูดเท็จ เจตนาหลอกลวง ต้องอาบัติปาจิตตีย์",
    "reference": "วินัยบัญญัติ ปาจิตตีย์ ๙๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-088",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 4 ข้อ 88] ภิกษุขุดดิน หรือใช้ให้ผู้อื่นขุดดิน ต้องอาบัติใด?",
    "options": [
      "ปาจิตตีย์ (ภูตคามวรรค)",
      "สังฆาทิเสส",
      "ทุกกฏ",
      "ปาฏิเทสนียะ"
    ],
    "correctIndex": 0,
    "explanation": "ขุดดินทำลายแผ่นดิน ต้องอาบัติปาจิตตีย์",
    "reference": "วินัยบัญญัติ ปาจิตตีย์ ๙๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-089",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 4 ข้อ 89] ภิกษุดื่มน้ำเมา (สุราและเมรัย) ต้องอาบัติใด?",
    "options": [
      "ปาจิตตีย์ (สุราปานวรรค)",
      "ปาราชิก",
      "สังฆาทิเสส",
      "ถุลลัจจัย"
    ],
    "correctIndex": 0,
    "explanation": "ดื่มสุราเมรัย ต้องอาบัติปาจิตตีย์",
    "reference": "วินัยบัญญัติ ปาจิตตีย์ ๙๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-090",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 4 ข้อ 90] ภิกษุฉันอาหารในเวลาวิกาล (หลังเที่ยงวันจนถึงรุ่งอรุณ) ต้องอาบัติใด?",
    "options": [
      "ปาจิตตีย์ (โภชนวรรค)",
      "สังฆาทิเสส",
      "ทุกกฏ",
      "ปาฏิเทสนียะ"
    ],
    "correctIndex": 0,
    "explanation": "ฉันอาหารยามวิกาล ต้องอาบัติปาจิตตีย์",
    "reference": "วินัยบัญญัติ ปาจิตตีย์ ๙๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-091",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 4 ข้อ 91] อาบัติปาฏิเทสนียะ มีกี่สิกขาบท?",
    "options": [
      "๔ สิกขาบท",
      "๒ สิกขาบท",
      "๘ สิกขาบท",
      "๑๒ สิกขาบท"
    ],
    "correctIndex": 0,
    "explanation": "ปาฏิเทสนียะมี ๔ สิกขาบท เป็นอาบัติที่ต้องกล่าวสารภาพความไม่สมควร",
    "reference": "วินัยบัญญัติ ปาฏิเทสนียะ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-092",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 4 ข้อ 92] เสขิยวัตร (มารยาทอันดีงามของภิกษุ) มีกี่สิกขาบท?",
    "options": [
      "๗๕ สิกขาบท",
      "๕๐ สิกขาบท",
      "๑๐๐ สิกขาบท",
      "๒๒๗ สิกขาบท"
    ],
    "correctIndex": 0,
    "explanation": "เสขิยวัตรมี ๗๕ สิกขาบท แบ่งเป็น ๔ หมวด (สารูป โภชนปฏิสังยุตต์ ธัมมเทสนา ปกิณณกะ)",
    "reference": "วินัยบัญญัติ เสขิยวัตร ๗๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-093",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 4 ข้อ 93] อธิกรณสมถะ (วิธีระงับอธิกรณ์ในสงฆ์) มีกี่ประการ?",
    "options": [
      "๗ ประการ",
      "๔ ประการ",
      "๑๒ ประการ",
      "๒๐ ประการ"
    ],
    "correctIndex": 0,
    "explanation": "อธิกรณสมถะมี ๗ ประการ เช่น สัมมุขาวินัย, เยภุยยสิกา, ติณวัตถารกวินัย",
    "reference": "วินัยบัญญัติ อธิกรณสมถะ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-094",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 4 ข้อ 94] ไตรจีวร (ผ้าครอง ๓ ผืนของพระภิกษุ) ประกอบด้วยผ้าอะไรบ้าง?",
    "options": [
      "สังฆาฏิ (ผ้าทาบ/คลุม) อุตราสงค์ (จีวร) อันตรวาสก (สบง)",
      "ผ้าเช็ดหน้า ผ้าอาบน้ำ ผ้าคลุม",
      "ผ้าห่ม ผ้าปูที่นอน ผ้ารัดอก",
      "ผ้าไหม ผ้าขาว ผ้าลาย"
    ],
    "correctIndex": 0,
    "explanation": "ไตรจีวร ๓ ผืน ได้แก่ สังฆาฏิ อุตราสงค์ และอันตรวาสก",
    "reference": "วินัยบัญญัติ บริขาร",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-095",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 4 ข้อ 95] การจำพรรษาของพระภิกษุ มีระยะเวลากี่เดือน?",
    "options": [
      "๓ เดือน (แรม ๑ ค่ำ เดือน ๘ ถึง ขึ้น ๑๕ ค่ำ เดือน ๑๑)",
      "๑ เดือน",
      "๖ เดือน",
      "ตลอดปี"
    ],
    "correctIndex": 0,
    "explanation": "การจำพรรษามีกำหนด ๓ เดือนในช่วงฤดูฝน",
    "reference": "วินัยบัญญัติ การจำพรรษา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-096",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 4 ข้อ 96] วันอุโบสถ (วันสวดปาฏิโมกข์) ของพระสงฆ์ตรงกับวันใด?",
    "options": [
      "วันขึ้น ๑๕ ค่ำ และ แรม ๑๔ หรือ ๑๕ ค่ำ (ทุกกึ่งเดือน)",
      "วันแรม ๑ ค่ำ",
      "วันขึ้น ๘ ค่ำ",
      "วันสิ้นปี"
    ],
    "correctIndex": 0,
    "explanation": "สงฆ์ต้องประชุมฟังสวดพระปาฏิโมกข์ทุกๆ กึ่งเดือนในวันอุโบสถ",
    "reference": "วินัยบัญญัติ อุโบสถกรรม",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-097",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 4 ข้อ 97] วันออกพรรษา พระสงฆ์ทำพิธีใดแทนการสวดปาฏิโมกข์?",
    "options": [
      "มหาปวารณา (กล่าวเปิดโอกาสให้ตักเตือนกันได้)",
      "กรานกฐิน",
      "ทอดผ้าป่า",
      "เวียนเทียน"
    ],
    "correctIndex": 0,
    "explanation": "วันออกพรรษาทำพิธีมหาปวารณา เพื่อความบริสุทธิ์และสามัคคีในหมู่สงฆ์",
    "reference": "วินัยบัญญัติ ปวารณา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-098",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 4 ข้อ 98] ระยะเวลาในการทอดกฐิน มีกำหนดนานเท่าใดหลังออกพรรษา?",
    "options": [
      "๑ เดือน (แรม ๑ ค่ำ เดือน ๑๑ ถึง ขึ้น ๑๕ ค่ำ เดือน ๑๒)",
      "๓ เดือน",
      "๖ เดือน",
      "ตลอดปี"
    ],
    "correctIndex": 0,
    "explanation": "กฐินกาลมีกำหนด ๑ เดือนหลังวันออกพรรษา",
    "reference": "วินัยบัญญัติ กฐิน",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-099",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 4 ข้อ 99] สามเณรมีสิกขาบทที่ต้องรักษาประจำกี่ข้อ?",
    "options": [
      "๑๐ ข้อ",
      "๕ ข้อ",
      "๒๒๗ ข้อ",
      "๓๑๑ ข้อ"
    ],
    "correctIndex": 0,
    "explanation": "สามเณรมีสิกขาบท ๑๐ ประการ",
    "reference": "วินัยบัญญัติ สามเณรสิกขา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tri-v-100",
    "grade": "ตรี",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 4 ข้อ 100] การปลงอาบัติ (แสดงอาบัติ) ทำเพื่อวัตถุประสงค์ใด?",
    "options": [
      "สารภาพความผิดและตั้งใจสำรวมระวังมิให้ทำอีก เพื่อความบริสุทธิ์ของศีล",
      "เพื่อขอลาบวช",
      "เพื่อขอเงินคืน",
      "เพื่อเปลี่ยนวัด"
    ],
    "correctIndex": 0,
    "explanation": "การปลงอาบัติคือการสารภาพโทษลหุโทษต่อหน้าภิกษุอื่นและตั้งใจสำรวมระวังต่อไป",
    "reference": "วินัยบัญญัติ การแสดงอาบัติ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
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
    "id": "tho-d-001",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "อริยสัจ ๔ ข้อใดคือ 'ทุกขสัจ' (สภาพที่ทนได้ยาก)?",
    "options": [
      "ชาติ ชรา มรณะ โสกะ ปริเทวะ ทุกข์ โทมนัส อุปายาส ฯลฯ",
      "ตัณหา ๓",
      "นิพพาน",
      "มรรคมีองค์ ๘"
    ],
    "correctIndex": 0,
    "explanation": "ทุกข์ คือ สภาพบีบคั้นทนได้ยาก มีการเกิด แก่ เจ็บ ตาย ความพลัดพราก เป็นต้น",
    "reference": "ธรรมวิภาค นักธรรมโท อริยสัจ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-002",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "สมุทัยสัจ (เหตุเกิดทุกข์) ในอริยสัจ ๔ ได้แก่อะไร?",
    "options": [
      "ตัณหา ๓ (กามตัณหา ภวตัณหา วิภวตัณหา)",
      "อวิชชา",
      "ความโกรธ",
      "ความไม่เที่ยง"
    ],
    "correctIndex": 0,
    "explanation": "สมุทัย คือ ตัณหาความทะยานอยาก ๓ ประการ",
    "reference": "ธรรมวิภาค นักธรรมโท อริยสัจ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-003",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "นิโรธสัจ ในอริยสัจ ๔ หมายถึงสิ่งใด?",
    "options": [
      "ความดับสนิทแห่งตัณหาและทุกข์ (พระนิพพาน)",
      "การตายของร่างกาย",
      "การนั่งสมาธิ",
      "การให้ทาน"
    ],
    "correctIndex": 0,
    "explanation": "นิโรธ คือ ความดับกิเลสและกองทุกข์สิ้นเชิง ดับตัณหาไม่เหลือ",
    "reference": "ธรรมวิภาค นักธรรมโท อริยสัจ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-004",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "มัคคสัจ (ข้อปฏิบัติให้ถึงความดับทุกข์) คือธรรมใด?",
    "options": [
      "อริยมรรคมีองค์ ๘ (มัชฌิมาปฏิปทา)",
      "ไตรลักษณ์",
      "ขันธ์ ๕",
      "ปฏิจจสมุปบาท"
    ],
    "correctIndex": 0,
    "explanation": "มรรค คือ อริยมรรคมีองค์ ๘ ทางสายกลางนำสู่พระนิพพาน",
    "reference": "ธรรมวิภาค นักธรรมโท อริยสัจ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-005",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "มรรคมีองค์ ๘ จัดสงเคราะห์ลงใน 'ไตรสิกขา' หมวดศีล ได้แก่องค์มรรคใดบ้าง?",
    "options": [
      "สัมมาวาจา สัมมากัมมันตะ สัมมาอาชีวะ",
      "สัมมาทิฏฐิ สัมมาสังกัปปะ",
      "สัมมาวายามะ สัมมาสติ สัมมาสมาธิ",
      "สัมมาทิฏฐิ สัมมาสมาธิ"
    ],
    "correctIndex": 0,
    "explanation": "ศีลสิกขา: สัมมาวาจา (วาจาชอบ) สัมมากัมมันตะ (การงานชอบ) สัมมาอาชีวะ (เลี้ยงชีพชอบ)",
    "reference": "ธรรมวิภาค นักธรรมโท มรรค ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-006",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "มรรคมีองค์ ๘ หมวดสมาธิสิกขา ได้แก่องค์มรรคใดบ้าง?",
    "options": [
      "สัมมาวายามะ สัมมาสติ สัมมาสมาธิ",
      "สัมมาวาจา สัมมากัมมันตะ",
      "สัมมาทิฏฐิ สัมมาสังกัปปะ",
      "สัมมาอาชีวะ สัมมาสติ"
    ],
    "correctIndex": 0,
    "explanation": "จิตตสิกขา/สมาธิ: สัมมาวายามะ (เพียรชอบ) สัมมาสติ (ระลึกชอบ) สัมมาสมาธิ (ตั้งจิตมั่นชอบ)",
    "reference": "ธรรมวิภาค นักธรรมโท มรรค ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-007",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "มรรคมีองค์ ๘ หมวดปัญญาสิกขา ได้แก่องค์มรรคใดบ้าง?",
    "options": [
      "สัมมาทิฏฐิ สัมมาสังกัปปะ",
      "สัมมาวาจา สัมมากัมมันตะ",
      "สัมมาวายามะ สัมมาสมาธิ",
      "สัมมาสติ สัมมาอาชีวะ"
    ],
    "correctIndex": 0,
    "explanation": "ปัญญาสิกขา: สัมมาทิฏฐิ (เห็นชอบ) สัมมาสังกัปปะ (ดำริชอบ)",
    "reference": "ธรรมวิภาค นักธรรมโท มรรค ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-008",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "สัมมาสังกัปปะ (ดำริชอบ) ประกอบด้วยความดำริ ๓ ประการใด?",
    "options": [
      "เนกขัมมสังกัปปะ (ออกจากกาม) อพยาบาทสังกัปปะ (ไม่พยาบาท) อวิหิงสาสังกัปปะ (ไม่เบียดเบียน)",
      "คิดรวย คิดเก่ง คิดดัง",
      "คิดทำบุญ คิดสวดมนต์ คิดสร้างวัด",
      "คิดอดีต คิดปัจจุบัน คิดอนาคต"
    ],
    "correctIndex": 0,
    "explanation": "ดำริชอบ ๓: ดำริออกจากกาม, ดำริในความไม่พยาบาท, ดำริในความไม่เบียดเบียน",
    "reference": "ธรรมวิภาค นักธรรมโท มรรค ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-009",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "สติปัฏฐาน ๔ (ฐานที่ตั้งแห่งสติในการเจริญวิปัสสนา) มีอะไรบ้าง?",
    "options": [
      "กายานุปัสสนา เวทนานุปัสสนา จิตตานุปัสสนา ธัมมานุปัสสนา",
      "ศีล สมาธิ ปัญญา วิมุตติ",
      "ทาน ศีล ภาวนา สัจจะ",
      "รูป เวทนา สัญญา สังขาร"
    ],
    "correctIndex": 0,
    "explanation": "สติปัฏฐาน ๔: พิจารณากายในกาย, พิจารณาเวทนาในเวทนา, พิจารณาจิตในจิต, พิจารณาธรรมในธรรม",
    "reference": "ธรรมวิภาค นักธรรมโท สติปัฏฐาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-010",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "โพชฌงค์ ๗ (องค์ธรรมเครื่องตรัสรู้ ๗ ประการ) ข้อใดหมายถึงการเฟ้นหาธรรม/วิจัยธรรม?",
    "options": [
      "ธัมมวิจยสัมโพชฌงค์",
      "สติสัมโพชฌงค์",
      "วิริยสัมโพชฌงค์",
      "ปีติสัมโพชฌงค์"
    ],
    "correctIndex": 0,
    "explanation": "ธัมมวิจยะ คือ การใช้ปัญญาเลือกเฟ้น ไตร่ตรอง ตรวจสอบสัจธรรม",
    "reference": "ธรรมวิภาค นักธรรมโท โพชฌงค์ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-011",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "อินทรีย์ ๕ และ พละ ๕ ข้อใดคือคู่ปรับที่ต้องปรับให้สมดุลกัน?",
    "options": [
      "ศรัทธาคู่กับปัญญา และ วิริยะคู่กับสมาธิ (โดยมีสติติดตามควบคุม)",
      "ศรัทธาคู่กับสมาธิ",
      "วิริยะคู่กับปัญญา",
      "สมาธิคู่กับสติ"
    ],
    "correctIndex": 0,
    "explanation": "ศรัทธามากปัญญาน้อยจะงมงาย, ปัญญามากศรัทธาน้อยจะฟุ้งซ่าน, วิริยะมากสมาธิน้อยจะกระวนกระวาย, สมาธิมากวิริยะน้อยจะเฉื่อยชา",
    "reference": "ธรรมวิภาค นักธรรมโท อินทรีย์ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-012",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "ไตรลักษณ์ ๓ ประการ กฎธรรมชาติแห่งสังขารธรรมคืออะไร?",
    "options": [
      "อนิจจัง (ไม่เที่ยง) ทุกขัง (เป็นทุกข์ทนอยู่สภาพเดิมไม่ได้) อนัตตา (ไม่ใช่ตัวตนบังคับไม่ได้)",
      "โลภ โกรธ หลง",
      "เกิด แก่ เจ็บ ตาย",
      "ศีล สมาธิ ปัญญา"
    ],
    "correctIndex": 0,
    "explanation": "ไตรลักษณ์: อนิจจตา, ทุกขตา, อนัตตตา",
    "reference": "ธรรมวิภาค นักธรรมโท ไตรลักษณ์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-013",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "ปฏิจจสมุปบาท (กระบวนการเกิดขึ้นแห่งกองทุกข์) ต้นกำเนิดแรกสุดคือสิ่งใด?",
    "options": [
      "อวิชชา (ความไม่รู้แจ้งในอริยสัจ ๔)",
      "ตัณหา",
      "สังขาร",
      "วิญญาณ"
    ],
    "correctIndex": 0,
    "explanation": "เพราะอวิชชาเป็นปัจจัย สังขารจึงมี เพราะสังขารเป็นปัจจัย วิญญาณจึงมี...",
    "reference": "ธรรมวิภาค นักธรรมโท ปฏิจจสมุปบาท",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-014",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "อุปาทาน ๔ (ความยึดมั่นถือมั่น ๔ ประการ) ข้อใดคือ 'กามุปาทาน'?",
    "options": [
      "ความยึดมั่นในกามคุณ (รูป เสียง กลิ่น รส สัมผัส)",
      "ความยึดมั่นในทฤษฎีความเห็น",
      "ความยึดมั่นในข้อวัตรปฏิบัติ",
      "ความยึดมั่นในตัวตน"
    ],
    "correctIndex": 0,
    "explanation": "กามุปาทาน คือ ความยึดติดผูกพันเหนียวแน่นในกามารมณ์",
    "reference": "ธรรมวิภาค นักธรรมโท อุปาทาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-015",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "ปฐมฌาน ในรูปฌาน ๔ ประกอบด้วยองค์ฌาน ๕ ข้อใด?",
    "options": [
      "วิตก วิจาร ปีติ สุข เอกัคคตา",
      "ปีติ สุข เอกัคคตา",
      "สุข เอกัคคตา",
      "อุเบกขา เอกัคคตา"
    ],
    "correctIndex": 0,
    "explanation": "ปฐมฌานมีองค์ ๕: วิตก (ยกจิตสู่อารมณ์) วิจาร (เคล้าคลึงอารมณ์) ปีติ (ความอิ่มใจ) สุข (ความสบายใจ) เอกัคคตา (จิตแน่วแน่เป็นหนึ่ง)",
    "reference": "ธรรมวิภาค นักธรรมโท ฌาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-016",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "จตุตถฌาน (ฌานที่ ๔) มีองค์ฌานเหลือเพียง ๒ ข้อใด?",
    "options": [
      "อุเบกขา และ เอกัคคตา",
      "สุข และ เอกัคคตา",
      "ปีติ และ สุข",
      "วิตก และ วิจาร"
    ],
    "correctIndex": 0,
    "explanation": "ฌานที่ ๔ ละสุขเวทนาเหลือแต่อุเบกขาบริสุทธิ์และจิตตั้งมั่นเอกัคคตา",
    "reference": "ธรรมวิภาค นักธรรมโท ฌาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-017",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "กิเลสอย่างหยาบ อย่างกลาง และอย่างละเอียด ละได้ด้วยธรรมใดตามลำดับ?",
    "options": [
      "หยาบละด้วยศีล, กลางละด้วยสมาธิ, ละเอียดละด้วยปัญญา",
      "หยาบละด้วยทาน, กลางละด้วยศีล, ละเอียดละด้วยภาวนา",
      "ละด้วยปัญญาทั้งหมด",
      "ละด้วยการสวดมนต์"
    ],
    "correctIndex": 0,
    "explanation": "ศีลคุมกายวาจาขจัดกิเลสหยาบ (วีติกกมะ), สมาธิข่มนิวรณ์กิเลสกลาง (ปริยุฏฐาน), ปัญญาตัดอนุสัยกิเลสละเอียด",
    "reference": "ธรรมวิภาค นักธรรมโท ไตรสิกขา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-018",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "สัมมัปปธาน ๔ ข้อใดคือ 'สังวรปธาน'?",
    "options": [
      "เพียรระวังยับยั้งบาปที่ยังไม่เกิดมิให้เกิดขึ้น",
      "เพียรละบาปที่เกิดขึ้นแล้ว",
      "เพียรเจริญกุศลใหม่",
      "เพียรรักษากุศลเดิม"
    ],
    "correctIndex": 0,
    "explanation": "สังวรปธาน คือ การสำรวมระวังมิให้อกุศลเกิดขึ้นในใจ",
    "reference": "ธรรมวิภาค นักธรรมโท สัมมัปปธาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-019",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "วิโมกข์ ๓ (ความหลุดพ้น ๓ ประการ) ข้อใดคือ 'สุญญตวิโมกข์'?",
    "options": [
      "หลุดพ้นด้วยการเห็นความว่างเปล่าจากตัวตน (อนัตตา)",
      "หลุดพ้นด้วยเห็นความไม่เที่ยง",
      "หลุดพ้นด้วยเห็นความเป็นทุกข์",
      "หลุดพ้นด้วยฌาน"
    ],
    "correctIndex": 0,
    "explanation": "สุญญตวิโมกข์ คือ ความหลุดพ้นที่เกิดจากการหยั่งเห็นสภาวะอนัตตาว่างเปล่าจากสัตว์บุคคล",
    "reference": "ธรรมวิภาค นักธรรมโท วิโมกข์ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-020",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "วิชชา ๓ ในพระพุทธศาสนา ข้อใดคือ 'จุตูปปาตญาณ'?",
    "options": [
      "ทิพพจักขุญาณ (ตาทิพย์รู้การเกิดดับของสัตว์ตามกรรม)",
      "ญาณระลึกชาติ",
      "ญาณตัดกิเลส",
      "ญาณรู้ใจคน"
    ],
    "correctIndex": 0,
    "explanation": "จุตูปปาตญาณ คือ ญาณรู้แจ้งการจุติและปฏิสนธิของสรรพสัตว์ตามอำนาจกรรม",
    "reference": "ธรรมวิภาค นักธรรมโท วิชชา ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-021",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "อภิชฌา และ พยาบาท ในอกุศลกรรมบถ มีโทษทางทวารใด?",
    "options": [
      "มโนทวาร (ทางใจ)",
      "กายทวาร",
      "วจีทวาร",
      "ทวารทั้ง ๓"
    ],
    "correctIndex": 0,
    "explanation": "อภิชฌา พยาบาท มิจฉาทิฏฐิ เป็นมโนกรรม (ทางใจ)",
    "reference": "ธรรมวิภาค นักธรรมโท กรรมบถ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-022",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "โยนิโสมนสิการ หมายถึงกระบวนการใดในทางปัญญา?",
    "options": [
      "การทำในใจโดยแยบคาย (การคิดพิจารณาอย่างถูกวิธีตามเหตุผลสัจธรรม)",
      "การท่องจำคัมภีร์",
      "การนั่งหลับตา",
      "การเชื่อตามอาจารย์"
    ],
    "correctIndex": 0,
    "explanation": "โยนิโสมนสิการ คือ การคิดพิจารณาสืบค้นถึงต้นตอเหตุปัจจัยอย่างแยบคายและถูกต้อง",
    "reference": "ธรรมวิภาค นักธรรมโท โยนิโสมนสิการ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-023",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "ปรโตโฆสะ หมายถึงปัจจัยภายนอกใดที่เกื้อกูลแก่สัมมาทิฏฐิ?",
    "options": [
      "การได้ฟังคำสั่งสอนและคำแนะนำที่ดีจากกัลยาณมิตรหรือครูบาอาจารย์",
      "การอ่านหนังสือพิมพ์",
      "การได้ยินเสียงดนตรี",
      "การดูข่าวสาร"
    ],
    "correctIndex": 0,
    "explanation": "ปรโตโฆสะ คือ เสียงจากผู้อื่นหรือการถ่ายทอดธรรมะจากกัลยาณมิตร",
    "reference": "ธรรมวิภาค นักธรรมโท เหตุเกิดสัมมาทิฏฐิ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-024",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "อริยบุคคล ๔ ชั้น (๘ บุคคล) ชั้นที่ ๒ คือใคร?",
    "options": [
      "พระสกทาคามี (ผู้กลับมาเกิดในกามภพอีกเพียงชาติเดียว)",
      "พระโสดาบัน",
      "พระอนาคามี",
      "พระอรหันต์"
    ],
    "correctIndex": 0,
    "explanation": "พระสกทาคามี ละสังโยชน์ ๓ ข้อแรกได้และทำราคะ โทสะ โมหะ ให้เบาบางลงอย่างยิ่ง",
    "reference": "ธรรมวิภาค นักธรรมโท อริยบุคคล",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-025",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "พระอนาคามี ละสังโยชน์ได้กี่ข้อ และเมื่อดับขันธ์จะไปบังเกิดที่ใด?",
    "options": [
      "ละสังโยชน์ ๕ ข้อแรกได้เด็ดขาด และไปบังเกิดในพรหมโลกชั้นสุทธาวาส ๕",
      "ละได้ ๓ ข้อ ไปเกิดบนสวรรค์",
      "ละได้ ๑๐ ข้อ นิพพานทันที",
      "กลับมาเกิดเป็นมนุษย์"
    ],
    "correctIndex": 0,
    "explanation": "พระอนาคามีตัดโอรัมภาคิยสังโยชน์ ๕ ได้ ไม่กลับมาสู่กามภพอีก ดับขันธ์เข้าสู่นิพพานในสุทธาวาสพรหม",
    "reference": "ธรรมวิภาค นักธรรมโท พระอนาคามี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-026",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 2 ข้อ 26] อริยสัจ ๔ ข้อใดคือ 'ทุกขสัจ' (สภาพที่ทนได้ยาก)?",
    "options": [
      "ชาติ ชรา มรณะ โสกะ ปริเทวะ ทุกข์ โทมนัส อุปายาส ฯลฯ",
      "ตัณหา ๓",
      "นิพพาน",
      "มรรคมีองค์ ๘"
    ],
    "correctIndex": 0,
    "explanation": "ทุกข์ คือ สภาพบีบคั้นทนได้ยาก มีการเกิด แก่ เจ็บ ตาย ความพลัดพราก เป็นต้น",
    "reference": "ธรรมวิภาค นักธรรมโท อริยสัจ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-027",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 2 ข้อ 27] สมุทัยสัจ (เหตุเกิดทุกข์) ในอริยสัจ ๔ ได้แก่อะไร?",
    "options": [
      "ตัณหา ๓ (กามตัณหา ภวตัณหา วิภวตัณหา)",
      "อวิชชา",
      "ความโกรธ",
      "ความไม่เที่ยง"
    ],
    "correctIndex": 0,
    "explanation": "สมุทัย คือ ตัณหาความทะยานอยาก ๓ ประการ",
    "reference": "ธรรมวิภาค นักธรรมโท อริยสัจ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-028",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 2 ข้อ 28] นิโรธสัจ ในอริยสัจ ๔ หมายถึงสิ่งใด?",
    "options": [
      "ความดับสนิทแห่งตัณหาและทุกข์ (พระนิพพาน)",
      "การตายของร่างกาย",
      "การนั่งสมาธิ",
      "การให้ทาน"
    ],
    "correctIndex": 0,
    "explanation": "นิโรธ คือ ความดับกิเลสและกองทุกข์สิ้นเชิง ดับตัณหาไม่เหลือ",
    "reference": "ธรรมวิภาค นักธรรมโท อริยสัจ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-029",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 2 ข้อ 29] มัคคสัจ (ข้อปฏิบัติให้ถึงความดับทุกข์) คือธรรมใด?",
    "options": [
      "อริยมรรคมีองค์ ๘ (มัชฌิมาปฏิปทา)",
      "ไตรลักษณ์",
      "ขันธ์ ๕",
      "ปฏิจจสมุปบาท"
    ],
    "correctIndex": 0,
    "explanation": "มรรค คือ อริยมรรคมีองค์ ๘ ทางสายกลางนำสู่พระนิพพาน",
    "reference": "ธรรมวิภาค นักธรรมโท อริยสัจ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-030",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 2 ข้อ 30] มรรคมีองค์ ๘ จัดสงเคราะห์ลงใน 'ไตรสิกขา' หมวดศีล ได้แก่องค์มรรคใดบ้าง?",
    "options": [
      "สัมมาวาจา สัมมากัมมันตะ สัมมาอาชีวะ",
      "สัมมาทิฏฐิ สัมมาสังกัปปะ",
      "สัมมาวายามะ สัมมาสติ สัมมาสมาธิ",
      "สัมมาทิฏฐิ สัมมาสมาธิ"
    ],
    "correctIndex": 0,
    "explanation": "ศีลสิกขา: สัมมาวาจา (วาจาชอบ) สัมมากัมมันตะ (การงานชอบ) สัมมาอาชีวะ (เลี้ยงชีพชอบ)",
    "reference": "ธรรมวิภาค นักธรรมโท มรรค ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-031",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 2 ข้อ 31] มรรคมีองค์ ๘ หมวดสมาธิสิกขา ได้แก่องค์มรรคใดบ้าง?",
    "options": [
      "สัมมาวายามะ สัมมาสติ สัมมาสมาธิ",
      "สัมมาวาจา สัมมากัมมันตะ",
      "สัมมาทิฏฐิ สัมมาสังกัปปะ",
      "สัมมาอาชีวะ สัมมาสติ"
    ],
    "correctIndex": 0,
    "explanation": "จิตตสิกขา/สมาธิ: สัมมาวายามะ (เพียรชอบ) สัมมาสติ (ระลึกชอบ) สัมมาสมาธิ (ตั้งจิตมั่นชอบ)",
    "reference": "ธรรมวิภาค นักธรรมโท มรรค ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-032",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 2 ข้อ 32] มรรคมีองค์ ๘ หมวดปัญญาสิกขา ได้แก่องค์มรรคใดบ้าง?",
    "options": [
      "สัมมาทิฏฐิ สัมมาสังกัปปะ",
      "สัมมาวาจา สัมมากัมมันตะ",
      "สัมมาวายามะ สัมมาสมาธิ",
      "สัมมาสติ สัมมาอาชีวะ"
    ],
    "correctIndex": 0,
    "explanation": "ปัญญาสิกขา: สัมมาทิฏฐิ (เห็นชอบ) สัมมาสังกัปปะ (ดำริชอบ)",
    "reference": "ธรรมวิภาค นักธรรมโท มรรค ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-033",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 2 ข้อ 33] สัมมาสังกัปปะ (ดำริชอบ) ประกอบด้วยความดำริ ๓ ประการใด?",
    "options": [
      "เนกขัมมสังกัปปะ (ออกจากกาม) อพยาบาทสังกัปปะ (ไม่พยาบาท) อวิหิงสาสังกัปปะ (ไม่เบียดเบียน)",
      "คิดรวย คิดเก่ง คิดดัง",
      "คิดทำบุญ คิดสวดมนต์ คิดสร้างวัด",
      "คิดอดีต คิดปัจจุบัน คิดอนาคต"
    ],
    "correctIndex": 0,
    "explanation": "ดำริชอบ ๓: ดำริออกจากกาม, ดำริในความไม่พยาบาท, ดำริในความไม่เบียดเบียน",
    "reference": "ธรรมวิภาค นักธรรมโท มรรค ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-034",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 2 ข้อ 34] สติปัฏฐาน ๔ (ฐานที่ตั้งแห่งสติในการเจริญวิปัสสนา) มีอะไรบ้าง?",
    "options": [
      "กายานุปัสสนา เวทนานุปัสสนา จิตตานุปัสสนา ธัมมานุปัสสนา",
      "ศีล สมาธิ ปัญญา วิมุตติ",
      "ทาน ศีล ภาวนา สัจจะ",
      "รูป เวทนา สัญญา สังขาร"
    ],
    "correctIndex": 0,
    "explanation": "สติปัฏฐาน ๔: พิจารณากายในกาย, พิจารณาเวทนาในเวทนา, พิจารณาจิตในจิต, พิจารณาธรรมในธรรม",
    "reference": "ธรรมวิภาค นักธรรมโท สติปัฏฐาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-035",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 2 ข้อ 35] โพชฌงค์ ๗ (องค์ธรรมเครื่องตรัสรู้ ๗ ประการ) ข้อใดหมายถึงการเฟ้นหาธรรม/วิจัยธรรม?",
    "options": [
      "ธัมมวิจยสัมโพชฌงค์",
      "สติสัมโพชฌงค์",
      "วิริยสัมโพชฌงค์",
      "ปีติสัมโพชฌงค์"
    ],
    "correctIndex": 0,
    "explanation": "ธัมมวิจยะ คือ การใช้ปัญญาเลือกเฟ้น ไตร่ตรอง ตรวจสอบสัจธรรม",
    "reference": "ธรรมวิภาค นักธรรมโท โพชฌงค์ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-036",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 2 ข้อ 36] อินทรีย์ ๕ และ พละ ๕ ข้อใดคือคู่ปรับที่ต้องปรับให้สมดุลกัน?",
    "options": [
      "ศรัทธาคู่กับปัญญา และ วิริยะคู่กับสมาธิ (โดยมีสติติดตามควบคุม)",
      "ศรัทธาคู่กับสมาธิ",
      "วิริยะคู่กับปัญญา",
      "สมาธิคู่กับสติ"
    ],
    "correctIndex": 0,
    "explanation": "ศรัทธามากปัญญาน้อยจะงมงาย, ปัญญามากศรัทธาน้อยจะฟุ้งซ่าน, วิริยะมากสมาธิน้อยจะกระวนกระวาย, สมาธิมากวิริยะน้อยจะเฉื่อยชา",
    "reference": "ธรรมวิภาค นักธรรมโท อินทรีย์ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-037",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 2 ข้อ 37] ไตรลักษณ์ ๓ ประการ กฎธรรมชาติแห่งสังขารธรรมคืออะไร?",
    "options": [
      "อนิจจัง (ไม่เที่ยง) ทุกขัง (เป็นทุกข์ทนอยู่สภาพเดิมไม่ได้) อนัตตา (ไม่ใช่ตัวตนบังคับไม่ได้)",
      "โลภ โกรธ หลง",
      "เกิด แก่ เจ็บ ตาย",
      "ศีล สมาธิ ปัญญา"
    ],
    "correctIndex": 0,
    "explanation": "ไตรลักษณ์: อนิจจตา, ทุกขตา, อนัตตตา",
    "reference": "ธรรมวิภาค นักธรรมโท ไตรลักษณ์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-038",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 2 ข้อ 38] ปฏิจจสมุปบาท (กระบวนการเกิดขึ้นแห่งกองทุกข์) ต้นกำเนิดแรกสุดคือสิ่งใด?",
    "options": [
      "อวิชชา (ความไม่รู้แจ้งในอริยสัจ ๔)",
      "ตัณหา",
      "สังขาร",
      "วิญญาณ"
    ],
    "correctIndex": 0,
    "explanation": "เพราะอวิชชาเป็นปัจจัย สังขารจึงมี เพราะสังขารเป็นปัจจัย วิญญาณจึงมี...",
    "reference": "ธรรมวิภาค นักธรรมโท ปฏิจจสมุปบาท",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-039",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 2 ข้อ 39] อุปาทาน ๔ (ความยึดมั่นถือมั่น ๔ ประการ) ข้อใดคือ 'กามุปาทาน'?",
    "options": [
      "ความยึดมั่นในกามคุณ (รูป เสียง กลิ่น รส สัมผัส)",
      "ความยึดมั่นในทฤษฎีความเห็น",
      "ความยึดมั่นในข้อวัตรปฏิบัติ",
      "ความยึดมั่นในตัวตน"
    ],
    "correctIndex": 0,
    "explanation": "กามุปาทาน คือ ความยึดติดผูกพันเหนียวแน่นในกามารมณ์",
    "reference": "ธรรมวิภาค นักธรรมโท อุปาทาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-040",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 2 ข้อ 40] ปฐมฌาน ในรูปฌาน ๔ ประกอบด้วยองค์ฌาน ๕ ข้อใด?",
    "options": [
      "วิตก วิจาร ปีติ สุข เอกัคคตา",
      "ปีติ สุข เอกัคคตา",
      "สุข เอกัคคตา",
      "อุเบกขา เอกัคคตา"
    ],
    "correctIndex": 0,
    "explanation": "ปฐมฌานมีองค์ ๕: วิตก (ยกจิตสู่อารมณ์) วิจาร (เคล้าคลึงอารมณ์) ปีติ (ความอิ่มใจ) สุข (ความสบายใจ) เอกัคคตา (จิตแน่วแน่เป็นหนึ่ง)",
    "reference": "ธรรมวิภาค นักธรรมโท ฌาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-041",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 2 ข้อ 41] จตุตถฌาน (ฌานที่ ๔) มีองค์ฌานเหลือเพียง ๒ ข้อใด?",
    "options": [
      "อุเบกขา และ เอกัคคตา",
      "สุข และ เอกัคคตา",
      "ปีติ และ สุข",
      "วิตก และ วิจาร"
    ],
    "correctIndex": 0,
    "explanation": "ฌานที่ ๔ ละสุขเวทนาเหลือแต่อุเบกขาบริสุทธิ์และจิตตั้งมั่นเอกัคคตา",
    "reference": "ธรรมวิภาค นักธรรมโท ฌาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-042",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 2 ข้อ 42] กิเลสอย่างหยาบ อย่างกลาง และอย่างละเอียด ละได้ด้วยธรรมใดตามลำดับ?",
    "options": [
      "หยาบละด้วยศีล, กลางละด้วยสมาธิ, ละเอียดละด้วยปัญญา",
      "หยาบละด้วยทาน, กลางละด้วยศีล, ละเอียดละด้วยภาวนา",
      "ละด้วยปัญญาทั้งหมด",
      "ละด้วยการสวดมนต์"
    ],
    "correctIndex": 0,
    "explanation": "ศีลคุมกายวาจาขจัดกิเลสหยาบ (วีติกกมะ), สมาธิข่มนิวรณ์กิเลสกลาง (ปริยุฏฐาน), ปัญญาตัดอนุสัยกิเลสละเอียด",
    "reference": "ธรรมวิภาค นักธรรมโท ไตรสิกขา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-043",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 2 ข้อ 43] สัมมัปปธาน ๔ ข้อใดคือ 'สังวรปธาน'?",
    "options": [
      "เพียรระวังยับยั้งบาปที่ยังไม่เกิดมิให้เกิดขึ้น",
      "เพียรละบาปที่เกิดขึ้นแล้ว",
      "เพียรเจริญกุศลใหม่",
      "เพียรรักษากุศลเดิม"
    ],
    "correctIndex": 0,
    "explanation": "สังวรปธาน คือ การสำรวมระวังมิให้อกุศลเกิดขึ้นในใจ",
    "reference": "ธรรมวิภาค นักธรรมโท สัมมัปปธาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-044",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 2 ข้อ 44] วิโมกข์ ๓ (ความหลุดพ้น ๓ ประการ) ข้อใดคือ 'สุญญตวิโมกข์'?",
    "options": [
      "หลุดพ้นด้วยการเห็นความว่างเปล่าจากตัวตน (อนัตตา)",
      "หลุดพ้นด้วยเห็นความไม่เที่ยง",
      "หลุดพ้นด้วยเห็นความเป็นทุกข์",
      "หลุดพ้นด้วยฌาน"
    ],
    "correctIndex": 0,
    "explanation": "สุญญตวิโมกข์ คือ ความหลุดพ้นที่เกิดจากการหยั่งเห็นสภาวะอนัตตาว่างเปล่าจากสัตว์บุคคล",
    "reference": "ธรรมวิภาค นักธรรมโท วิโมกข์ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-045",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 2 ข้อ 45] วิชชา ๓ ในพระพุทธศาสนา ข้อใดคือ 'จุตูปปาตญาณ'?",
    "options": [
      "ทิพพจักขุญาณ (ตาทิพย์รู้การเกิดดับของสัตว์ตามกรรม)",
      "ญาณระลึกชาติ",
      "ญาณตัดกิเลส",
      "ญาณรู้ใจคน"
    ],
    "correctIndex": 0,
    "explanation": "จุตูปปาตญาณ คือ ญาณรู้แจ้งการจุติและปฏิสนธิของสรรพสัตว์ตามอำนาจกรรม",
    "reference": "ธรรมวิภาค นักธรรมโท วิชชา ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-046",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 2 ข้อ 46] อภิชฌา และ พยาบาท ในอกุศลกรรมบถ มีโทษทางทวารใด?",
    "options": [
      "มโนทวาร (ทางใจ)",
      "กายทวาร",
      "วจีทวาร",
      "ทวารทั้ง ๓"
    ],
    "correctIndex": 0,
    "explanation": "อภิชฌา พยาบาท มิจฉาทิฏฐิ เป็นมโนกรรม (ทางใจ)",
    "reference": "ธรรมวิภาค นักธรรมโท กรรมบถ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-047",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 2 ข้อ 47] โยนิโสมนสิการ หมายถึงกระบวนการใดในทางปัญญา?",
    "options": [
      "การทำในใจโดยแยบคาย (การคิดพิจารณาอย่างถูกวิธีตามเหตุผลสัจธรรม)",
      "การท่องจำคัมภีร์",
      "การนั่งหลับตา",
      "การเชื่อตามอาจารย์"
    ],
    "correctIndex": 0,
    "explanation": "โยนิโสมนสิการ คือ การคิดพิจารณาสืบค้นถึงต้นตอเหตุปัจจัยอย่างแยบคายและถูกต้อง",
    "reference": "ธรรมวิภาค นักธรรมโท โยนิโสมนสิการ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-048",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 2 ข้อ 48] ปรโตโฆสะ หมายถึงปัจจัยภายนอกใดที่เกื้อกูลแก่สัมมาทิฏฐิ?",
    "options": [
      "การได้ฟังคำสั่งสอนและคำแนะนำที่ดีจากกัลยาณมิตรหรือครูบาอาจารย์",
      "การอ่านหนังสือพิมพ์",
      "การได้ยินเสียงดนตรี",
      "การดูข่าวสาร"
    ],
    "correctIndex": 0,
    "explanation": "ปรโตโฆสะ คือ เสียงจากผู้อื่นหรือการถ่ายทอดธรรมะจากกัลยาณมิตร",
    "reference": "ธรรมวิภาค นักธรรมโท เหตุเกิดสัมมาทิฏฐิ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-049",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 2 ข้อ 49] อริยบุคคล ๔ ชั้น (๘ บุคคล) ชั้นที่ ๒ คือใคร?",
    "options": [
      "พระสกทาคามี (ผู้กลับมาเกิดในกามภพอีกเพียงชาติเดียว)",
      "พระโสดาบัน",
      "พระอนาคามี",
      "พระอรหันต์"
    ],
    "correctIndex": 0,
    "explanation": "พระสกทาคามี ละสังโยชน์ ๓ ข้อแรกได้และทำราคะ โทสะ โมหะ ให้เบาบางลงอย่างยิ่ง",
    "reference": "ธรรมวิภาค นักธรรมโท อริยบุคคล",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-050",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 2 ข้อ 50] พระอนาคามี ละสังโยชน์ได้กี่ข้อ และเมื่อดับขันธ์จะไปบังเกิดที่ใด?",
    "options": [
      "ละสังโยชน์ ๕ ข้อแรกได้เด็ดขาด และไปบังเกิดในพรหมโลกชั้นสุทธาวาส ๕",
      "ละได้ ๓ ข้อ ไปเกิดบนสวรรค์",
      "ละได้ ๑๐ ข้อ นิพพานทันที",
      "กลับมาเกิดเป็นมนุษย์"
    ],
    "correctIndex": 0,
    "explanation": "พระอนาคามีตัดโอรัมภาคิยสังโยชน์ ๕ ได้ ไม่กลับมาสู่กามภพอีก ดับขันธ์เข้าสู่นิพพานในสุทธาวาสพรหม",
    "reference": "ธรรมวิภาค นักธรรมโท พระอนาคามี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-051",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 3 ข้อ 51] อริยสัจ ๔ ข้อใดคือ 'ทุกขสัจ' (สภาพที่ทนได้ยาก)?",
    "options": [
      "ชาติ ชรา มรณะ โสกะ ปริเทวะ ทุกข์ โทมนัส อุปายาส ฯลฯ",
      "ตัณหา ๓",
      "นิพพาน",
      "มรรคมีองค์ ๘"
    ],
    "correctIndex": 0,
    "explanation": "ทุกข์ คือ สภาพบีบคั้นทนได้ยาก มีการเกิด แก่ เจ็บ ตาย ความพลัดพราก เป็นต้น",
    "reference": "ธรรมวิภาค นักธรรมโท อริยสัจ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-052",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 3 ข้อ 52] สมุทัยสัจ (เหตุเกิดทุกข์) ในอริยสัจ ๔ ได้แก่อะไร?",
    "options": [
      "ตัณหา ๓ (กามตัณหา ภวตัณหา วิภวตัณหา)",
      "อวิชชา",
      "ความโกรธ",
      "ความไม่เที่ยง"
    ],
    "correctIndex": 0,
    "explanation": "สมุทัย คือ ตัณหาความทะยานอยาก ๓ ประการ",
    "reference": "ธรรมวิภาค นักธรรมโท อริยสัจ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-053",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 3 ข้อ 53] นิโรธสัจ ในอริยสัจ ๔ หมายถึงสิ่งใด?",
    "options": [
      "ความดับสนิทแห่งตัณหาและทุกข์ (พระนิพพาน)",
      "การตายของร่างกาย",
      "การนั่งสมาธิ",
      "การให้ทาน"
    ],
    "correctIndex": 0,
    "explanation": "นิโรธ คือ ความดับกิเลสและกองทุกข์สิ้นเชิง ดับตัณหาไม่เหลือ",
    "reference": "ธรรมวิภาค นักธรรมโท อริยสัจ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-054",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 3 ข้อ 54] มัคคสัจ (ข้อปฏิบัติให้ถึงความดับทุกข์) คือธรรมใด?",
    "options": [
      "อริยมรรคมีองค์ ๘ (มัชฌิมาปฏิปทา)",
      "ไตรลักษณ์",
      "ขันธ์ ๕",
      "ปฏิจจสมุปบาท"
    ],
    "correctIndex": 0,
    "explanation": "มรรค คือ อริยมรรคมีองค์ ๘ ทางสายกลางนำสู่พระนิพพาน",
    "reference": "ธรรมวิภาค นักธรรมโท อริยสัจ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-055",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 3 ข้อ 55] มรรคมีองค์ ๘ จัดสงเคราะห์ลงใน 'ไตรสิกขา' หมวดศีล ได้แก่องค์มรรคใดบ้าง?",
    "options": [
      "สัมมาวาจา สัมมากัมมันตะ สัมมาอาชีวะ",
      "สัมมาทิฏฐิ สัมมาสังกัปปะ",
      "สัมมาวายามะ สัมมาสติ สัมมาสมาธิ",
      "สัมมาทิฏฐิ สัมมาสมาธิ"
    ],
    "correctIndex": 0,
    "explanation": "ศีลสิกขา: สัมมาวาจา (วาจาชอบ) สัมมากัมมันตะ (การงานชอบ) สัมมาอาชีวะ (เลี้ยงชีพชอบ)",
    "reference": "ธรรมวิภาค นักธรรมโท มรรค ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-056",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 3 ข้อ 56] มรรคมีองค์ ๘ หมวดสมาธิสิกขา ได้แก่องค์มรรคใดบ้าง?",
    "options": [
      "สัมมาวายามะ สัมมาสติ สัมมาสมาธิ",
      "สัมมาวาจา สัมมากัมมันตะ",
      "สัมมาทิฏฐิ สัมมาสังกัปปะ",
      "สัมมาอาชีวะ สัมมาสติ"
    ],
    "correctIndex": 0,
    "explanation": "จิตตสิกขา/สมาธิ: สัมมาวายามะ (เพียรชอบ) สัมมาสติ (ระลึกชอบ) สัมมาสมาธิ (ตั้งจิตมั่นชอบ)",
    "reference": "ธรรมวิภาค นักธรรมโท มรรค ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-057",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 3 ข้อ 57] มรรคมีองค์ ๘ หมวดปัญญาสิกขา ได้แก่องค์มรรคใดบ้าง?",
    "options": [
      "สัมมาทิฏฐิ สัมมาสังกัปปะ",
      "สัมมาวาจา สัมมากัมมันตะ",
      "สัมมาวายามะ สัมมาสมาธิ",
      "สัมมาสติ สัมมาอาชีวะ"
    ],
    "correctIndex": 0,
    "explanation": "ปัญญาสิกขา: สัมมาทิฏฐิ (เห็นชอบ) สัมมาสังกัปปะ (ดำริชอบ)",
    "reference": "ธรรมวิภาค นักธรรมโท มรรค ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-058",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 3 ข้อ 58] สัมมาสังกัปปะ (ดำริชอบ) ประกอบด้วยความดำริ ๓ ประการใด?",
    "options": [
      "เนกขัมมสังกัปปะ (ออกจากกาม) อพยาบาทสังกัปปะ (ไม่พยาบาท) อวิหิงสาสังกัปปะ (ไม่เบียดเบียน)",
      "คิดรวย คิดเก่ง คิดดัง",
      "คิดทำบุญ คิดสวดมนต์ คิดสร้างวัด",
      "คิดอดีต คิดปัจจุบัน คิดอนาคต"
    ],
    "correctIndex": 0,
    "explanation": "ดำริชอบ ๓: ดำริออกจากกาม, ดำริในความไม่พยาบาท, ดำริในความไม่เบียดเบียน",
    "reference": "ธรรมวิภาค นักธรรมโท มรรค ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-059",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 3 ข้อ 59] สติปัฏฐาน ๔ (ฐานที่ตั้งแห่งสติในการเจริญวิปัสสนา) มีอะไรบ้าง?",
    "options": [
      "กายานุปัสสนา เวทนานุปัสสนา จิตตานุปัสสนา ธัมมานุปัสสนา",
      "ศีล สมาธิ ปัญญา วิมุตติ",
      "ทาน ศีล ภาวนา สัจจะ",
      "รูป เวทนา สัญญา สังขาร"
    ],
    "correctIndex": 0,
    "explanation": "สติปัฏฐาน ๔: พิจารณากายในกาย, พิจารณาเวทนาในเวทนา, พิจารณาจิตในจิต, พิจารณาธรรมในธรรม",
    "reference": "ธรรมวิภาค นักธรรมโท สติปัฏฐาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-060",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 3 ข้อ 60] โพชฌงค์ ๗ (องค์ธรรมเครื่องตรัสรู้ ๗ ประการ) ข้อใดหมายถึงการเฟ้นหาธรรม/วิจัยธรรม?",
    "options": [
      "ธัมมวิจยสัมโพชฌงค์",
      "สติสัมโพชฌงค์",
      "วิริยสัมโพชฌงค์",
      "ปีติสัมโพชฌงค์"
    ],
    "correctIndex": 0,
    "explanation": "ธัมมวิจยะ คือ การใช้ปัญญาเลือกเฟ้น ไตร่ตรอง ตรวจสอบสัจธรรม",
    "reference": "ธรรมวิภาค นักธรรมโท โพชฌงค์ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-061",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 3 ข้อ 61] อินทรีย์ ๕ และ พละ ๕ ข้อใดคือคู่ปรับที่ต้องปรับให้สมดุลกัน?",
    "options": [
      "ศรัทธาคู่กับปัญญา และ วิริยะคู่กับสมาธิ (โดยมีสติติดตามควบคุม)",
      "ศรัทธาคู่กับสมาธิ",
      "วิริยะคู่กับปัญญา",
      "สมาธิคู่กับสติ"
    ],
    "correctIndex": 0,
    "explanation": "ศรัทธามากปัญญาน้อยจะงมงาย, ปัญญามากศรัทธาน้อยจะฟุ้งซ่าน, วิริยะมากสมาธิน้อยจะกระวนกระวาย, สมาธิมากวิริยะน้อยจะเฉื่อยชา",
    "reference": "ธรรมวิภาค นักธรรมโท อินทรีย์ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-062",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 3 ข้อ 62] ไตรลักษณ์ ๓ ประการ กฎธรรมชาติแห่งสังขารธรรมคืออะไร?",
    "options": [
      "อนิจจัง (ไม่เที่ยง) ทุกขัง (เป็นทุกข์ทนอยู่สภาพเดิมไม่ได้) อนัตตา (ไม่ใช่ตัวตนบังคับไม่ได้)",
      "โลภ โกรธ หลง",
      "เกิด แก่ เจ็บ ตาย",
      "ศีล สมาธิ ปัญญา"
    ],
    "correctIndex": 0,
    "explanation": "ไตรลักษณ์: อนิจจตา, ทุกขตา, อนัตตตา",
    "reference": "ธรรมวิภาค นักธรรมโท ไตรลักษณ์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-063",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 3 ข้อ 63] ปฏิจจสมุปบาท (กระบวนการเกิดขึ้นแห่งกองทุกข์) ต้นกำเนิดแรกสุดคือสิ่งใด?",
    "options": [
      "อวิชชา (ความไม่รู้แจ้งในอริยสัจ ๔)",
      "ตัณหา",
      "สังขาร",
      "วิญญาณ"
    ],
    "correctIndex": 0,
    "explanation": "เพราะอวิชชาเป็นปัจจัย สังขารจึงมี เพราะสังขารเป็นปัจจัย วิญญาณจึงมี...",
    "reference": "ธรรมวิภาค นักธรรมโท ปฏิจจสมุปบาท",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-064",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 3 ข้อ 64] อุปาทาน ๔ (ความยึดมั่นถือมั่น ๔ ประการ) ข้อใดคือ 'กามุปาทาน'?",
    "options": [
      "ความยึดมั่นในกามคุณ (รูป เสียง กลิ่น รส สัมผัส)",
      "ความยึดมั่นในทฤษฎีความเห็น",
      "ความยึดมั่นในข้อวัตรปฏิบัติ",
      "ความยึดมั่นในตัวตน"
    ],
    "correctIndex": 0,
    "explanation": "กามุปาทาน คือ ความยึดติดผูกพันเหนียวแน่นในกามารมณ์",
    "reference": "ธรรมวิภาค นักธรรมโท อุปาทาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-065",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 3 ข้อ 65] ปฐมฌาน ในรูปฌาน ๔ ประกอบด้วยองค์ฌาน ๕ ข้อใด?",
    "options": [
      "วิตก วิจาร ปีติ สุข เอกัคคตา",
      "ปีติ สุข เอกัคคตา",
      "สุข เอกัคคตา",
      "อุเบกขา เอกัคคตา"
    ],
    "correctIndex": 0,
    "explanation": "ปฐมฌานมีองค์ ๕: วิตก (ยกจิตสู่อารมณ์) วิจาร (เคล้าคลึงอารมณ์) ปีติ (ความอิ่มใจ) สุข (ความสบายใจ) เอกัคคตา (จิตแน่วแน่เป็นหนึ่ง)",
    "reference": "ธรรมวิภาค นักธรรมโท ฌาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-066",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 3 ข้อ 66] จตุตถฌาน (ฌานที่ ๔) มีองค์ฌานเหลือเพียง ๒ ข้อใด?",
    "options": [
      "อุเบกขา และ เอกัคคตา",
      "สุข และ เอกัคคตา",
      "ปีติ และ สุข",
      "วิตก และ วิจาร"
    ],
    "correctIndex": 0,
    "explanation": "ฌานที่ ๔ ละสุขเวทนาเหลือแต่อุเบกขาบริสุทธิ์และจิตตั้งมั่นเอกัคคตา",
    "reference": "ธรรมวิภาค นักธรรมโท ฌาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-067",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 3 ข้อ 67] กิเลสอย่างหยาบ อย่างกลาง และอย่างละเอียด ละได้ด้วยธรรมใดตามลำดับ?",
    "options": [
      "หยาบละด้วยศีล, กลางละด้วยสมาธิ, ละเอียดละด้วยปัญญา",
      "หยาบละด้วยทาน, กลางละด้วยศีล, ละเอียดละด้วยภาวนา",
      "ละด้วยปัญญาทั้งหมด",
      "ละด้วยการสวดมนต์"
    ],
    "correctIndex": 0,
    "explanation": "ศีลคุมกายวาจาขจัดกิเลสหยาบ (วีติกกมะ), สมาธิข่มนิวรณ์กิเลสกลาง (ปริยุฏฐาน), ปัญญาตัดอนุสัยกิเลสละเอียด",
    "reference": "ธรรมวิภาค นักธรรมโท ไตรสิกขา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-068",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 3 ข้อ 68] สัมมัปปธาน ๔ ข้อใดคือ 'สังวรปธาน'?",
    "options": [
      "เพียรระวังยับยั้งบาปที่ยังไม่เกิดมิให้เกิดขึ้น",
      "เพียรละบาปที่เกิดขึ้นแล้ว",
      "เพียรเจริญกุศลใหม่",
      "เพียรรักษากุศลเดิม"
    ],
    "correctIndex": 0,
    "explanation": "สังวรปธาน คือ การสำรวมระวังมิให้อกุศลเกิดขึ้นในใจ",
    "reference": "ธรรมวิภาค นักธรรมโท สัมมัปปธาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-069",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 3 ข้อ 69] วิโมกข์ ๓ (ความหลุดพ้น ๓ ประการ) ข้อใดคือ 'สุญญตวิโมกข์'?",
    "options": [
      "หลุดพ้นด้วยการเห็นความว่างเปล่าจากตัวตน (อนัตตา)",
      "หลุดพ้นด้วยเห็นความไม่เที่ยง",
      "หลุดพ้นด้วยเห็นความเป็นทุกข์",
      "หลุดพ้นด้วยฌาน"
    ],
    "correctIndex": 0,
    "explanation": "สุญญตวิโมกข์ คือ ความหลุดพ้นที่เกิดจากการหยั่งเห็นสภาวะอนัตตาว่างเปล่าจากสัตว์บุคคล",
    "reference": "ธรรมวิภาค นักธรรมโท วิโมกข์ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-070",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 3 ข้อ 70] วิชชา ๓ ในพระพุทธศาสนา ข้อใดคือ 'จุตูปปาตญาณ'?",
    "options": [
      "ทิพพจักขุญาณ (ตาทิพย์รู้การเกิดดับของสัตว์ตามกรรม)",
      "ญาณระลึกชาติ",
      "ญาณตัดกิเลส",
      "ญาณรู้ใจคน"
    ],
    "correctIndex": 0,
    "explanation": "จุตูปปาตญาณ คือ ญาณรู้แจ้งการจุติและปฏิสนธิของสรรพสัตว์ตามอำนาจกรรม",
    "reference": "ธรรมวิภาค นักธรรมโท วิชชา ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-071",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 3 ข้อ 71] อภิชฌา และ พยาบาท ในอกุศลกรรมบถ มีโทษทางทวารใด?",
    "options": [
      "มโนทวาร (ทางใจ)",
      "กายทวาร",
      "วจีทวาร",
      "ทวารทั้ง ๓"
    ],
    "correctIndex": 0,
    "explanation": "อภิชฌา พยาบาท มิจฉาทิฏฐิ เป็นมโนกรรม (ทางใจ)",
    "reference": "ธรรมวิภาค นักธรรมโท กรรมบถ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-072",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 3 ข้อ 72] โยนิโสมนสิการ หมายถึงกระบวนการใดในทางปัญญา?",
    "options": [
      "การทำในใจโดยแยบคาย (การคิดพิจารณาอย่างถูกวิธีตามเหตุผลสัจธรรม)",
      "การท่องจำคัมภีร์",
      "การนั่งหลับตา",
      "การเชื่อตามอาจารย์"
    ],
    "correctIndex": 0,
    "explanation": "โยนิโสมนสิการ คือ การคิดพิจารณาสืบค้นถึงต้นตอเหตุปัจจัยอย่างแยบคายและถูกต้อง",
    "reference": "ธรรมวิภาค นักธรรมโท โยนิโสมนสิการ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-073",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 3 ข้อ 73] ปรโตโฆสะ หมายถึงปัจจัยภายนอกใดที่เกื้อกูลแก่สัมมาทิฏฐิ?",
    "options": [
      "การได้ฟังคำสั่งสอนและคำแนะนำที่ดีจากกัลยาณมิตรหรือครูบาอาจารย์",
      "การอ่านหนังสือพิมพ์",
      "การได้ยินเสียงดนตรี",
      "การดูข่าวสาร"
    ],
    "correctIndex": 0,
    "explanation": "ปรโตโฆสะ คือ เสียงจากผู้อื่นหรือการถ่ายทอดธรรมะจากกัลยาณมิตร",
    "reference": "ธรรมวิภาค นักธรรมโท เหตุเกิดสัมมาทิฏฐิ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-074",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 3 ข้อ 74] อริยบุคคล ๔ ชั้น (๘ บุคคล) ชั้นที่ ๒ คือใคร?",
    "options": [
      "พระสกทาคามี (ผู้กลับมาเกิดในกามภพอีกเพียงชาติเดียว)",
      "พระโสดาบัน",
      "พระอนาคามี",
      "พระอรหันต์"
    ],
    "correctIndex": 0,
    "explanation": "พระสกทาคามี ละสังโยชน์ ๓ ข้อแรกได้และทำราคะ โทสะ โมหะ ให้เบาบางลงอย่างยิ่ง",
    "reference": "ธรรมวิภาค นักธรรมโท อริยบุคคล",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-075",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 3 ข้อ 75] พระอนาคามี ละสังโยชน์ได้กี่ข้อ และเมื่อดับขันธ์จะไปบังเกิดที่ใด?",
    "options": [
      "ละสังโยชน์ ๕ ข้อแรกได้เด็ดขาด และไปบังเกิดในพรหมโลกชั้นสุทธาวาส ๕",
      "ละได้ ๓ ข้อ ไปเกิดบนสวรรค์",
      "ละได้ ๑๐ ข้อ นิพพานทันที",
      "กลับมาเกิดเป็นมนุษย์"
    ],
    "correctIndex": 0,
    "explanation": "พระอนาคามีตัดโอรัมภาคิยสังโยชน์ ๕ ได้ ไม่กลับมาสู่กามภพอีก ดับขันธ์เข้าสู่นิพพานในสุทธาวาสพรหม",
    "reference": "ธรรมวิภาค นักธรรมโท พระอนาคามี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-076",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 4 ข้อ 76] อริยสัจ ๔ ข้อใดคือ 'ทุกขสัจ' (สภาพที่ทนได้ยาก)?",
    "options": [
      "ชาติ ชรา มรณะ โสกะ ปริเทวะ ทุกข์ โทมนัส อุปายาส ฯลฯ",
      "ตัณหา ๓",
      "นิพพาน",
      "มรรคมีองค์ ๘"
    ],
    "correctIndex": 0,
    "explanation": "ทุกข์ คือ สภาพบีบคั้นทนได้ยาก มีการเกิด แก่ เจ็บ ตาย ความพลัดพราก เป็นต้น",
    "reference": "ธรรมวิภาค นักธรรมโท อริยสัจ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-077",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 4 ข้อ 77] สมุทัยสัจ (เหตุเกิดทุกข์) ในอริยสัจ ๔ ได้แก่อะไร?",
    "options": [
      "ตัณหา ๓ (กามตัณหา ภวตัณหา วิภวตัณหา)",
      "อวิชชา",
      "ความโกรธ",
      "ความไม่เที่ยง"
    ],
    "correctIndex": 0,
    "explanation": "สมุทัย คือ ตัณหาความทะยานอยาก ๓ ประการ",
    "reference": "ธรรมวิภาค นักธรรมโท อริยสัจ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-078",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 4 ข้อ 78] นิโรธสัจ ในอริยสัจ ๔ หมายถึงสิ่งใด?",
    "options": [
      "ความดับสนิทแห่งตัณหาและทุกข์ (พระนิพพาน)",
      "การตายของร่างกาย",
      "การนั่งสมาธิ",
      "การให้ทาน"
    ],
    "correctIndex": 0,
    "explanation": "นิโรธ คือ ความดับกิเลสและกองทุกข์สิ้นเชิง ดับตัณหาไม่เหลือ",
    "reference": "ธรรมวิภาค นักธรรมโท อริยสัจ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-079",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 4 ข้อ 79] มัคคสัจ (ข้อปฏิบัติให้ถึงความดับทุกข์) คือธรรมใด?",
    "options": [
      "อริยมรรคมีองค์ ๘ (มัชฌิมาปฏิปทา)",
      "ไตรลักษณ์",
      "ขันธ์ ๕",
      "ปฏิจจสมุปบาท"
    ],
    "correctIndex": 0,
    "explanation": "มรรค คือ อริยมรรคมีองค์ ๘ ทางสายกลางนำสู่พระนิพพาน",
    "reference": "ธรรมวิภาค นักธรรมโท อริยสัจ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-080",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 4 ข้อ 80] มรรคมีองค์ ๘ จัดสงเคราะห์ลงใน 'ไตรสิกขา' หมวดศีล ได้แก่องค์มรรคใดบ้าง?",
    "options": [
      "สัมมาวาจา สัมมากัมมันตะ สัมมาอาชีวะ",
      "สัมมาทิฏฐิ สัมมาสังกัปปะ",
      "สัมมาวายามะ สัมมาสติ สัมมาสมาธิ",
      "สัมมาทิฏฐิ สัมมาสมาธิ"
    ],
    "correctIndex": 0,
    "explanation": "ศีลสิกขา: สัมมาวาจา (วาจาชอบ) สัมมากัมมันตะ (การงานชอบ) สัมมาอาชีวะ (เลี้ยงชีพชอบ)",
    "reference": "ธรรมวิภาค นักธรรมโท มรรค ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-081",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 4 ข้อ 81] มรรคมีองค์ ๘ หมวดสมาธิสิกขา ได้แก่องค์มรรคใดบ้าง?",
    "options": [
      "สัมมาวายามะ สัมมาสติ สัมมาสมาธิ",
      "สัมมาวาจา สัมมากัมมันตะ",
      "สัมมาทิฏฐิ สัมมาสังกัปปะ",
      "สัมมาอาชีวะ สัมมาสติ"
    ],
    "correctIndex": 0,
    "explanation": "จิตตสิกขา/สมาธิ: สัมมาวายามะ (เพียรชอบ) สัมมาสติ (ระลึกชอบ) สัมมาสมาธิ (ตั้งจิตมั่นชอบ)",
    "reference": "ธรรมวิภาค นักธรรมโท มรรค ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-082",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 4 ข้อ 82] มรรคมีองค์ ๘ หมวดปัญญาสิกขา ได้แก่องค์มรรคใดบ้าง?",
    "options": [
      "สัมมาทิฏฐิ สัมมาสังกัปปะ",
      "สัมมาวาจา สัมมากัมมันตะ",
      "สัมมาวายามะ สัมมาสมาธิ",
      "สัมมาสติ สัมมาอาชีวะ"
    ],
    "correctIndex": 0,
    "explanation": "ปัญญาสิกขา: สัมมาทิฏฐิ (เห็นชอบ) สัมมาสังกัปปะ (ดำริชอบ)",
    "reference": "ธรรมวิภาค นักธรรมโท มรรค ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-083",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 4 ข้อ 83] สัมมาสังกัปปะ (ดำริชอบ) ประกอบด้วยความดำริ ๓ ประการใด?",
    "options": [
      "เนกขัมมสังกัปปะ (ออกจากกาม) อพยาบาทสังกัปปะ (ไม่พยาบาท) อวิหิงสาสังกัปปะ (ไม่เบียดเบียน)",
      "คิดรวย คิดเก่ง คิดดัง",
      "คิดทำบุญ คิดสวดมนต์ คิดสร้างวัด",
      "คิดอดีต คิดปัจจุบัน คิดอนาคต"
    ],
    "correctIndex": 0,
    "explanation": "ดำริชอบ ๓: ดำริออกจากกาม, ดำริในความไม่พยาบาท, ดำริในความไม่เบียดเบียน",
    "reference": "ธรรมวิภาค นักธรรมโท มรรค ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-084",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 4 ข้อ 84] สติปัฏฐาน ๔ (ฐานที่ตั้งแห่งสติในการเจริญวิปัสสนา) มีอะไรบ้าง?",
    "options": [
      "กายานุปัสสนา เวทนานุปัสสนา จิตตานุปัสสนา ธัมมานุปัสสนา",
      "ศีล สมาธิ ปัญญา วิมุตติ",
      "ทาน ศีล ภาวนา สัจจะ",
      "รูป เวทนา สัญญา สังขาร"
    ],
    "correctIndex": 0,
    "explanation": "สติปัฏฐาน ๔: พิจารณากายในกาย, พิจารณาเวทนาในเวทนา, พิจารณาจิตในจิต, พิจารณาธรรมในธรรม",
    "reference": "ธรรมวิภาค นักธรรมโท สติปัฏฐาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-085",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 4 ข้อ 85] โพชฌงค์ ๗ (องค์ธรรมเครื่องตรัสรู้ ๗ ประการ) ข้อใดหมายถึงการเฟ้นหาธรรม/วิจัยธรรม?",
    "options": [
      "ธัมมวิจยสัมโพชฌงค์",
      "สติสัมโพชฌงค์",
      "วิริยสัมโพชฌงค์",
      "ปีติสัมโพชฌงค์"
    ],
    "correctIndex": 0,
    "explanation": "ธัมมวิจยะ คือ การใช้ปัญญาเลือกเฟ้น ไตร่ตรอง ตรวจสอบสัจธรรม",
    "reference": "ธรรมวิภาค นักธรรมโท โพชฌงค์ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-086",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 4 ข้อ 86] อินทรีย์ ๕ และ พละ ๕ ข้อใดคือคู่ปรับที่ต้องปรับให้สมดุลกัน?",
    "options": [
      "ศรัทธาคู่กับปัญญา และ วิริยะคู่กับสมาธิ (โดยมีสติติดตามควบคุม)",
      "ศรัทธาคู่กับสมาธิ",
      "วิริยะคู่กับปัญญา",
      "สมาธิคู่กับสติ"
    ],
    "correctIndex": 0,
    "explanation": "ศรัทธามากปัญญาน้อยจะงมงาย, ปัญญามากศรัทธาน้อยจะฟุ้งซ่าน, วิริยะมากสมาธิน้อยจะกระวนกระวาย, สมาธิมากวิริยะน้อยจะเฉื่อยชา",
    "reference": "ธรรมวิภาค นักธรรมโท อินทรีย์ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-087",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 4 ข้อ 87] ไตรลักษณ์ ๓ ประการ กฎธรรมชาติแห่งสังขารธรรมคืออะไร?",
    "options": [
      "อนิจจัง (ไม่เที่ยง) ทุกขัง (เป็นทุกข์ทนอยู่สภาพเดิมไม่ได้) อนัตตา (ไม่ใช่ตัวตนบังคับไม่ได้)",
      "โลภ โกรธ หลง",
      "เกิด แก่ เจ็บ ตาย",
      "ศีล สมาธิ ปัญญา"
    ],
    "correctIndex": 0,
    "explanation": "ไตรลักษณ์: อนิจจตา, ทุกขตา, อนัตตตา",
    "reference": "ธรรมวิภาค นักธรรมโท ไตรลักษณ์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-088",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 4 ข้อ 88] ปฏิจจสมุปบาท (กระบวนการเกิดขึ้นแห่งกองทุกข์) ต้นกำเนิดแรกสุดคือสิ่งใด?",
    "options": [
      "อวิชชา (ความไม่รู้แจ้งในอริยสัจ ๔)",
      "ตัณหา",
      "สังขาร",
      "วิญญาณ"
    ],
    "correctIndex": 0,
    "explanation": "เพราะอวิชชาเป็นปัจจัย สังขารจึงมี เพราะสังขารเป็นปัจจัย วิญญาณจึงมี...",
    "reference": "ธรรมวิภาค นักธรรมโท ปฏิจจสมุปบาท",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-089",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 4 ข้อ 89] อุปาทาน ๔ (ความยึดมั่นถือมั่น ๔ ประการ) ข้อใดคือ 'กามุปาทาน'?",
    "options": [
      "ความยึดมั่นในกามคุณ (รูป เสียง กลิ่น รส สัมผัส)",
      "ความยึดมั่นในทฤษฎีความเห็น",
      "ความยึดมั่นในข้อวัตรปฏิบัติ",
      "ความยึดมั่นในตัวตน"
    ],
    "correctIndex": 0,
    "explanation": "กามุปาทาน คือ ความยึดติดผูกพันเหนียวแน่นในกามารมณ์",
    "reference": "ธรรมวิภาค นักธรรมโท อุปาทาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-090",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 4 ข้อ 90] ปฐมฌาน ในรูปฌาน ๔ ประกอบด้วยองค์ฌาน ๕ ข้อใด?",
    "options": [
      "วิตก วิจาร ปีติ สุข เอกัคคตา",
      "ปีติ สุข เอกัคคตา",
      "สุข เอกัคคตา",
      "อุเบกขา เอกัคคตา"
    ],
    "correctIndex": 0,
    "explanation": "ปฐมฌานมีองค์ ๕: วิตก (ยกจิตสู่อารมณ์) วิจาร (เคล้าคลึงอารมณ์) ปีติ (ความอิ่มใจ) สุข (ความสบายใจ) เอกัคคตา (จิตแน่วแน่เป็นหนึ่ง)",
    "reference": "ธรรมวิภาค นักธรรมโท ฌาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-091",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 4 ข้อ 91] จตุตถฌาน (ฌานที่ ๔) มีองค์ฌานเหลือเพียง ๒ ข้อใด?",
    "options": [
      "อุเบกขา และ เอกัคคตา",
      "สุข และ เอกัคคตา",
      "ปีติ และ สุข",
      "วิตก และ วิจาร"
    ],
    "correctIndex": 0,
    "explanation": "ฌานที่ ๔ ละสุขเวทนาเหลือแต่อุเบกขาบริสุทธิ์และจิตตั้งมั่นเอกัคคตา",
    "reference": "ธรรมวิภาค นักธรรมโท ฌาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-092",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 4 ข้อ 92] กิเลสอย่างหยาบ อย่างกลาง และอย่างละเอียด ละได้ด้วยธรรมใดตามลำดับ?",
    "options": [
      "หยาบละด้วยศีล, กลางละด้วยสมาธิ, ละเอียดละด้วยปัญญา",
      "หยาบละด้วยทาน, กลางละด้วยศีล, ละเอียดละด้วยภาวนา",
      "ละด้วยปัญญาทั้งหมด",
      "ละด้วยการสวดมนต์"
    ],
    "correctIndex": 0,
    "explanation": "ศีลคุมกายวาจาขจัดกิเลสหยาบ (วีติกกมะ), สมาธิข่มนิวรณ์กิเลสกลาง (ปริยุฏฐาน), ปัญญาตัดอนุสัยกิเลสละเอียด",
    "reference": "ธรรมวิภาค นักธรรมโท ไตรสิกขา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-093",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 4 ข้อ 93] สัมมัปปธาน ๔ ข้อใดคือ 'สังวรปธาน'?",
    "options": [
      "เพียรระวังยับยั้งบาปที่ยังไม่เกิดมิให้เกิดขึ้น",
      "เพียรละบาปที่เกิดขึ้นแล้ว",
      "เพียรเจริญกุศลใหม่",
      "เพียรรักษากุศลเดิม"
    ],
    "correctIndex": 0,
    "explanation": "สังวรปธาน คือ การสำรวมระวังมิให้อกุศลเกิดขึ้นในใจ",
    "reference": "ธรรมวิภาค นักธรรมโท สัมมัปปธาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-094",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 4 ข้อ 94] วิโมกข์ ๓ (ความหลุดพ้น ๓ ประการ) ข้อใดคือ 'สุญญตวิโมกข์'?",
    "options": [
      "หลุดพ้นด้วยการเห็นความว่างเปล่าจากตัวตน (อนัตตา)",
      "หลุดพ้นด้วยเห็นความไม่เที่ยง",
      "หลุดพ้นด้วยเห็นความเป็นทุกข์",
      "หลุดพ้นด้วยฌาน"
    ],
    "correctIndex": 0,
    "explanation": "สุญญตวิโมกข์ คือ ความหลุดพ้นที่เกิดจากการหยั่งเห็นสภาวะอนัตตาว่างเปล่าจากสัตว์บุคคล",
    "reference": "ธรรมวิภาค นักธรรมโท วิโมกข์ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-095",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 4 ข้อ 95] วิชชา ๓ ในพระพุทธศาสนา ข้อใดคือ 'จุตูปปาตญาณ'?",
    "options": [
      "ทิพพจักขุญาณ (ตาทิพย์รู้การเกิดดับของสัตว์ตามกรรม)",
      "ญาณระลึกชาติ",
      "ญาณตัดกิเลส",
      "ญาณรู้ใจคน"
    ],
    "correctIndex": 0,
    "explanation": "จุตูปปาตญาณ คือ ญาณรู้แจ้งการจุติและปฏิสนธิของสรรพสัตว์ตามอำนาจกรรม",
    "reference": "ธรรมวิภาค นักธรรมโท วิชชา ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-096",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 4 ข้อ 96] อภิชฌา และ พยาบาท ในอกุศลกรรมบถ มีโทษทางทวารใด?",
    "options": [
      "มโนทวาร (ทางใจ)",
      "กายทวาร",
      "วจีทวาร",
      "ทวารทั้ง ๓"
    ],
    "correctIndex": 0,
    "explanation": "อภิชฌา พยาบาท มิจฉาทิฏฐิ เป็นมโนกรรม (ทางใจ)",
    "reference": "ธรรมวิภาค นักธรรมโท กรรมบถ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-097",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 4 ข้อ 97] โยนิโสมนสิการ หมายถึงกระบวนการใดในทางปัญญา?",
    "options": [
      "การทำในใจโดยแยบคาย (การคิดพิจารณาอย่างถูกวิธีตามเหตุผลสัจธรรม)",
      "การท่องจำคัมภีร์",
      "การนั่งหลับตา",
      "การเชื่อตามอาจารย์"
    ],
    "correctIndex": 0,
    "explanation": "โยนิโสมนสิการ คือ การคิดพิจารณาสืบค้นถึงต้นตอเหตุปัจจัยอย่างแยบคายและถูกต้อง",
    "reference": "ธรรมวิภาค นักธรรมโท โยนิโสมนสิการ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-098",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 4 ข้อ 98] ปรโตโฆสะ หมายถึงปัจจัยภายนอกใดที่เกื้อกูลแก่สัมมาทิฏฐิ?",
    "options": [
      "การได้ฟังคำสั่งสอนและคำแนะนำที่ดีจากกัลยาณมิตรหรือครูบาอาจารย์",
      "การอ่านหนังสือพิมพ์",
      "การได้ยินเสียงดนตรี",
      "การดูข่าวสาร"
    ],
    "correctIndex": 0,
    "explanation": "ปรโตโฆสะ คือ เสียงจากผู้อื่นหรือการถ่ายทอดธรรมะจากกัลยาณมิตร",
    "reference": "ธรรมวิภาค นักธรรมโท เหตุเกิดสัมมาทิฏฐิ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-099",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 4 ข้อ 99] อริยบุคคล ๔ ชั้น (๘ บุคคล) ชั้นที่ ๒ คือใคร?",
    "options": [
      "พระสกทาคามี (ผู้กลับมาเกิดในกามภพอีกเพียงชาติเดียว)",
      "พระโสดาบัน",
      "พระอนาคามี",
      "พระอรหันต์"
    ],
    "correctIndex": 0,
    "explanation": "พระสกทาคามี ละสังโยชน์ ๓ ข้อแรกได้และทำราคะ โทสะ โมหะ ให้เบาบางลงอย่างยิ่ง",
    "reference": "ธรรมวิภาค นักธรรมโท อริยบุคคล",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-100",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 4 ข้อ 100] พระอนาคามี ละสังโยชน์ได้กี่ข้อ และเมื่อดับขันธ์จะไปบังเกิดที่ใด?",
    "options": [
      "ละสังโยชน์ ๕ ข้อแรกได้เด็ดขาด และไปบังเกิดในพรหมโลกชั้นสุทธาวาส ๕",
      "ละได้ ๓ ข้อ ไปเกิดบนสวรรค์",
      "ละได้ ๑๐ ข้อ นิพพานทันที",
      "กลับมาเกิดเป็นมนุษย์"
    ],
    "correctIndex": 0,
    "explanation": "พระอนาคามีตัดโอรัมภาคิยสังโยชน์ ๕ ได้ ไม่กลับมาสู่กามภพอีก ดับขันธ์เข้าสู่นิพพานในสุทธาวาสพรหม",
    "reference": "ธรรมวิภาค นักธรรมโท พระอนาคามี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-101",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 5 ข้อ 101] อริยสัจ ๔ ข้อใดคือ 'ทุกขสัจ' (สภาพที่ทนได้ยาก)?",
    "options": [
      "ชาติ ชรา มรณะ โสกะ ปริเทวะ ทุกข์ โทมนัส อุปายาส ฯลฯ",
      "ตัณหา ๓",
      "นิพพาน",
      "มรรคมีองค์ ๘"
    ],
    "correctIndex": 0,
    "explanation": "ทุกข์ คือ สภาพบีบคั้นทนได้ยาก มีการเกิด แก่ เจ็บ ตาย ความพลัดพราก เป็นต้น",
    "reference": "ธรรมวิภาค นักธรรมโท อริยสัจ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-102",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 5 ข้อ 102] สมุทัยสัจ (เหตุเกิดทุกข์) ในอริยสัจ ๔ ได้แก่อะไร?",
    "options": [
      "ตัณหา ๓ (กามตัณหา ภวตัณหา วิภวตัณหา)",
      "อวิชชา",
      "ความโกรธ",
      "ความไม่เที่ยง"
    ],
    "correctIndex": 0,
    "explanation": "สมุทัย คือ ตัณหาความทะยานอยาก ๓ ประการ",
    "reference": "ธรรมวิภาค นักธรรมโท อริยสัจ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-103",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 5 ข้อ 103] นิโรธสัจ ในอริยสัจ ๔ หมายถึงสิ่งใด?",
    "options": [
      "ความดับสนิทแห่งตัณหาและทุกข์ (พระนิพพาน)",
      "การตายของร่างกาย",
      "การนั่งสมาธิ",
      "การให้ทาน"
    ],
    "correctIndex": 0,
    "explanation": "นิโรธ คือ ความดับกิเลสและกองทุกข์สิ้นเชิง ดับตัณหาไม่เหลือ",
    "reference": "ธรรมวิภาค นักธรรมโท อริยสัจ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-104",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 5 ข้อ 104] มัคคสัจ (ข้อปฏิบัติให้ถึงความดับทุกข์) คือธรรมใด?",
    "options": [
      "อริยมรรคมีองค์ ๘ (มัชฌิมาปฏิปทา)",
      "ไตรลักษณ์",
      "ขันธ์ ๕",
      "ปฏิจจสมุปบาท"
    ],
    "correctIndex": 0,
    "explanation": "มรรค คือ อริยมรรคมีองค์ ๘ ทางสายกลางนำสู่พระนิพพาน",
    "reference": "ธรรมวิภาค นักธรรมโท อริยสัจ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-105",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 5 ข้อ 105] มรรคมีองค์ ๘ จัดสงเคราะห์ลงใน 'ไตรสิกขา' หมวดศีล ได้แก่องค์มรรคใดบ้าง?",
    "options": [
      "สัมมาวาจา สัมมากัมมันตะ สัมมาอาชีวะ",
      "สัมมาทิฏฐิ สัมมาสังกัปปะ",
      "สัมมาวายามะ สัมมาสติ สัมมาสมาธิ",
      "สัมมาทิฏฐิ สัมมาสมาธิ"
    ],
    "correctIndex": 0,
    "explanation": "ศีลสิกขา: สัมมาวาจา (วาจาชอบ) สัมมากัมมันตะ (การงานชอบ) สัมมาอาชีวะ (เลี้ยงชีพชอบ)",
    "reference": "ธรรมวิภาค นักธรรมโท มรรค ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-106",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 5 ข้อ 106] มรรคมีองค์ ๘ หมวดสมาธิสิกขา ได้แก่องค์มรรคใดบ้าง?",
    "options": [
      "สัมมาวายามะ สัมมาสติ สัมมาสมาธิ",
      "สัมมาวาจา สัมมากัมมันตะ",
      "สัมมาทิฏฐิ สัมมาสังกัปปะ",
      "สัมมาอาชีวะ สัมมาสติ"
    ],
    "correctIndex": 0,
    "explanation": "จิตตสิกขา/สมาธิ: สัมมาวายามะ (เพียรชอบ) สัมมาสติ (ระลึกชอบ) สัมมาสมาธิ (ตั้งจิตมั่นชอบ)",
    "reference": "ธรรมวิภาค นักธรรมโท มรรค ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-107",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 5 ข้อ 107] มรรคมีองค์ ๘ หมวดปัญญาสิกขา ได้แก่องค์มรรคใดบ้าง?",
    "options": [
      "สัมมาทิฏฐิ สัมมาสังกัปปะ",
      "สัมมาวาจา สัมมากัมมันตะ",
      "สัมมาวายามะ สัมมาสมาธิ",
      "สัมมาสติ สัมมาอาชีวะ"
    ],
    "correctIndex": 0,
    "explanation": "ปัญญาสิกขา: สัมมาทิฏฐิ (เห็นชอบ) สัมมาสังกัปปะ (ดำริชอบ)",
    "reference": "ธรรมวิภาค นักธรรมโท มรรค ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-108",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 5 ข้อ 108] สัมมาสังกัปปะ (ดำริชอบ) ประกอบด้วยความดำริ ๓ ประการใด?",
    "options": [
      "เนกขัมมสังกัปปะ (ออกจากกาม) อพยาบาทสังกัปปะ (ไม่พยาบาท) อวิหิงสาสังกัปปะ (ไม่เบียดเบียน)",
      "คิดรวย คิดเก่ง คิดดัง",
      "คิดทำบุญ คิดสวดมนต์ คิดสร้างวัด",
      "คิดอดีต คิดปัจจุบัน คิดอนาคต"
    ],
    "correctIndex": 0,
    "explanation": "ดำริชอบ ๓: ดำริออกจากกาม, ดำริในความไม่พยาบาท, ดำริในความไม่เบียดเบียน",
    "reference": "ธรรมวิภาค นักธรรมโท มรรค ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-109",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 5 ข้อ 109] สติปัฏฐาน ๔ (ฐานที่ตั้งแห่งสติในการเจริญวิปัสสนา) มีอะไรบ้าง?",
    "options": [
      "กายานุปัสสนา เวทนานุปัสสนา จิตตานุปัสสนา ธัมมานุปัสสนา",
      "ศีล สมาธิ ปัญญา วิมุตติ",
      "ทาน ศีล ภาวนา สัจจะ",
      "รูป เวทนา สัญญา สังขาร"
    ],
    "correctIndex": 0,
    "explanation": "สติปัฏฐาน ๔: พิจารณากายในกาย, พิจารณาเวทนาในเวทนา, พิจารณาจิตในจิต, พิจารณาธรรมในธรรม",
    "reference": "ธรรมวิภาค นักธรรมโท สติปัฏฐาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-110",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 5 ข้อ 110] โพชฌงค์ ๗ (องค์ธรรมเครื่องตรัสรู้ ๗ ประการ) ข้อใดหมายถึงการเฟ้นหาธรรม/วิจัยธรรม?",
    "options": [
      "ธัมมวิจยสัมโพชฌงค์",
      "สติสัมโพชฌงค์",
      "วิริยสัมโพชฌงค์",
      "ปีติสัมโพชฌงค์"
    ],
    "correctIndex": 0,
    "explanation": "ธัมมวิจยะ คือ การใช้ปัญญาเลือกเฟ้น ไตร่ตรอง ตรวจสอบสัจธรรม",
    "reference": "ธรรมวิภาค นักธรรมโท โพชฌงค์ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-111",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 5 ข้อ 111] อินทรีย์ ๕ และ พละ ๕ ข้อใดคือคู่ปรับที่ต้องปรับให้สมดุลกัน?",
    "options": [
      "ศรัทธาคู่กับปัญญา และ วิริยะคู่กับสมาธิ (โดยมีสติติดตามควบคุม)",
      "ศรัทธาคู่กับสมาธิ",
      "วิริยะคู่กับปัญญา",
      "สมาธิคู่กับสติ"
    ],
    "correctIndex": 0,
    "explanation": "ศรัทธามากปัญญาน้อยจะงมงาย, ปัญญามากศรัทธาน้อยจะฟุ้งซ่าน, วิริยะมากสมาธิน้อยจะกระวนกระวาย, สมาธิมากวิริยะน้อยจะเฉื่อยชา",
    "reference": "ธรรมวิภาค นักธรรมโท อินทรีย์ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-112",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 5 ข้อ 112] ไตรลักษณ์ ๓ ประการ กฎธรรมชาติแห่งสังขารธรรมคืออะไร?",
    "options": [
      "อนิจจัง (ไม่เที่ยง) ทุกขัง (เป็นทุกข์ทนอยู่สภาพเดิมไม่ได้) อนัตตา (ไม่ใช่ตัวตนบังคับไม่ได้)",
      "โลภ โกรธ หลง",
      "เกิด แก่ เจ็บ ตาย",
      "ศีล สมาธิ ปัญญา"
    ],
    "correctIndex": 0,
    "explanation": "ไตรลักษณ์: อนิจจตา, ทุกขตา, อนัตตตา",
    "reference": "ธรรมวิภาค นักธรรมโท ไตรลักษณ์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-113",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 5 ข้อ 113] ปฏิจจสมุปบาท (กระบวนการเกิดขึ้นแห่งกองทุกข์) ต้นกำเนิดแรกสุดคือสิ่งใด?",
    "options": [
      "อวิชชา (ความไม่รู้แจ้งในอริยสัจ ๔)",
      "ตัณหา",
      "สังขาร",
      "วิญญาณ"
    ],
    "correctIndex": 0,
    "explanation": "เพราะอวิชชาเป็นปัจจัย สังขารจึงมี เพราะสังขารเป็นปัจจัย วิญญาณจึงมี...",
    "reference": "ธรรมวิภาค นักธรรมโท ปฏิจจสมุปบาท",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-114",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 5 ข้อ 114] อุปาทาน ๔ (ความยึดมั่นถือมั่น ๔ ประการ) ข้อใดคือ 'กามุปาทาน'?",
    "options": [
      "ความยึดมั่นในกามคุณ (รูป เสียง กลิ่น รส สัมผัส)",
      "ความยึดมั่นในทฤษฎีความเห็น",
      "ความยึดมั่นในข้อวัตรปฏิบัติ",
      "ความยึดมั่นในตัวตน"
    ],
    "correctIndex": 0,
    "explanation": "กามุปาทาน คือ ความยึดติดผูกพันเหนียวแน่นในกามารมณ์",
    "reference": "ธรรมวิภาค นักธรรมโท อุปาทาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-115",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 5 ข้อ 115] ปฐมฌาน ในรูปฌาน ๔ ประกอบด้วยองค์ฌาน ๕ ข้อใด?",
    "options": [
      "วิตก วิจาร ปีติ สุข เอกัคคตา",
      "ปีติ สุข เอกัคคตา",
      "สุข เอกัคคตา",
      "อุเบกขา เอกัคคตา"
    ],
    "correctIndex": 0,
    "explanation": "ปฐมฌานมีองค์ ๕: วิตก (ยกจิตสู่อารมณ์) วิจาร (เคล้าคลึงอารมณ์) ปีติ (ความอิ่มใจ) สุข (ความสบายใจ) เอกัคคตา (จิตแน่วแน่เป็นหนึ่ง)",
    "reference": "ธรรมวิภาค นักธรรมโท ฌาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-116",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 5 ข้อ 116] จตุตถฌาน (ฌานที่ ๔) มีองค์ฌานเหลือเพียง ๒ ข้อใด?",
    "options": [
      "อุเบกขา และ เอกัคคตา",
      "สุข และ เอกัคคตา",
      "ปีติ และ สุข",
      "วิตก และ วิจาร"
    ],
    "correctIndex": 0,
    "explanation": "ฌานที่ ๔ ละสุขเวทนาเหลือแต่อุเบกขาบริสุทธิ์และจิตตั้งมั่นเอกัคคตา",
    "reference": "ธรรมวิภาค นักธรรมโท ฌาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-117",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 5 ข้อ 117] กิเลสอย่างหยาบ อย่างกลาง และอย่างละเอียด ละได้ด้วยธรรมใดตามลำดับ?",
    "options": [
      "หยาบละด้วยศีล, กลางละด้วยสมาธิ, ละเอียดละด้วยปัญญา",
      "หยาบละด้วยทาน, กลางละด้วยศีล, ละเอียดละด้วยภาวนา",
      "ละด้วยปัญญาทั้งหมด",
      "ละด้วยการสวดมนต์"
    ],
    "correctIndex": 0,
    "explanation": "ศีลคุมกายวาจาขจัดกิเลสหยาบ (วีติกกมะ), สมาธิข่มนิวรณ์กิเลสกลาง (ปริยุฏฐาน), ปัญญาตัดอนุสัยกิเลสละเอียด",
    "reference": "ธรรมวิภาค นักธรรมโท ไตรสิกขา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-118",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 5 ข้อ 118] สัมมัปปธาน ๔ ข้อใดคือ 'สังวรปธาน'?",
    "options": [
      "เพียรระวังยับยั้งบาปที่ยังไม่เกิดมิให้เกิดขึ้น",
      "เพียรละบาปที่เกิดขึ้นแล้ว",
      "เพียรเจริญกุศลใหม่",
      "เพียรรักษากุศลเดิม"
    ],
    "correctIndex": 0,
    "explanation": "สังวรปธาน คือ การสำรวมระวังมิให้อกุศลเกิดขึ้นในใจ",
    "reference": "ธรรมวิภาค นักธรรมโท สัมมัปปธาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-119",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 5 ข้อ 119] วิโมกข์ ๓ (ความหลุดพ้น ๓ ประการ) ข้อใดคือ 'สุญญตวิโมกข์'?",
    "options": [
      "หลุดพ้นด้วยการเห็นความว่างเปล่าจากตัวตน (อนัตตา)",
      "หลุดพ้นด้วยเห็นความไม่เที่ยง",
      "หลุดพ้นด้วยเห็นความเป็นทุกข์",
      "หลุดพ้นด้วยฌาน"
    ],
    "correctIndex": 0,
    "explanation": "สุญญตวิโมกข์ คือ ความหลุดพ้นที่เกิดจากการหยั่งเห็นสภาวะอนัตตาว่างเปล่าจากสัตว์บุคคล",
    "reference": "ธรรมวิภาค นักธรรมโท วิโมกข์ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-120",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 5 ข้อ 120] วิชชา ๓ ในพระพุทธศาสนา ข้อใดคือ 'จุตูปปาตญาณ'?",
    "options": [
      "ทิพพจักขุญาณ (ตาทิพย์รู้การเกิดดับของสัตว์ตามกรรม)",
      "ญาณระลึกชาติ",
      "ญาณตัดกิเลส",
      "ญาณรู้ใจคน"
    ],
    "correctIndex": 0,
    "explanation": "จุตูปปาตญาณ คือ ญาณรู้แจ้งการจุติและปฏิสนธิของสรรพสัตว์ตามอำนาจกรรม",
    "reference": "ธรรมวิภาค นักธรรมโท วิชชา ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-121",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 5 ข้อ 121] อภิชฌา และ พยาบาท ในอกุศลกรรมบถ มีโทษทางทวารใด?",
    "options": [
      "มโนทวาร (ทางใจ)",
      "กายทวาร",
      "วจีทวาร",
      "ทวารทั้ง ๓"
    ],
    "correctIndex": 0,
    "explanation": "อภิชฌา พยาบาท มิจฉาทิฏฐิ เป็นมโนกรรม (ทางใจ)",
    "reference": "ธรรมวิภาค นักธรรมโท กรรมบถ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-122",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 5 ข้อ 122] โยนิโสมนสิการ หมายถึงกระบวนการใดในทางปัญญา?",
    "options": [
      "การทำในใจโดยแยบคาย (การคิดพิจารณาอย่างถูกวิธีตามเหตุผลสัจธรรม)",
      "การท่องจำคัมภีร์",
      "การนั่งหลับตา",
      "การเชื่อตามอาจารย์"
    ],
    "correctIndex": 0,
    "explanation": "โยนิโสมนสิการ คือ การคิดพิจารณาสืบค้นถึงต้นตอเหตุปัจจัยอย่างแยบคายและถูกต้อง",
    "reference": "ธรรมวิภาค นักธรรมโท โยนิโสมนสิการ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-123",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 5 ข้อ 123] ปรโตโฆสะ หมายถึงปัจจัยภายนอกใดที่เกื้อกูลแก่สัมมาทิฏฐิ?",
    "options": [
      "การได้ฟังคำสั่งสอนและคำแนะนำที่ดีจากกัลยาณมิตรหรือครูบาอาจารย์",
      "การอ่านหนังสือพิมพ์",
      "การได้ยินเสียงดนตรี",
      "การดูข่าวสาร"
    ],
    "correctIndex": 0,
    "explanation": "ปรโตโฆสะ คือ เสียงจากผู้อื่นหรือการถ่ายทอดธรรมะจากกัลยาณมิตร",
    "reference": "ธรรมวิภาค นักธรรมโท เหตุเกิดสัมมาทิฏฐิ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-124",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 5 ข้อ 124] อริยบุคคล ๔ ชั้น (๘ บุคคล) ชั้นที่ ๒ คือใคร?",
    "options": [
      "พระสกทาคามี (ผู้กลับมาเกิดในกามภพอีกเพียงชาติเดียว)",
      "พระโสดาบัน",
      "พระอนาคามี",
      "พระอรหันต์"
    ],
    "correctIndex": 0,
    "explanation": "พระสกทาคามี ละสังโยชน์ ๓ ข้อแรกได้และทำราคะ โทสะ โมหะ ให้เบาบางลงอย่างยิ่ง",
    "reference": "ธรรมวิภาค นักธรรมโท อริยบุคคล",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-125",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 5 ข้อ 125] พระอนาคามี ละสังโยชน์ได้กี่ข้อ และเมื่อดับขันธ์จะไปบังเกิดที่ใด?",
    "options": [
      "ละสังโยชน์ ๕ ข้อแรกได้เด็ดขาด และไปบังเกิดในพรหมโลกชั้นสุทธาวาส ๕",
      "ละได้ ๓ ข้อ ไปเกิดบนสวรรค์",
      "ละได้ ๑๐ ข้อ นิพพานทันที",
      "กลับมาเกิดเป็นมนุษย์"
    ],
    "correctIndex": 0,
    "explanation": "พระอนาคามีตัดโอรัมภาคิยสังโยชน์ ๕ ได้ ไม่กลับมาสู่กามภพอีก ดับขันธ์เข้าสู่นิพพานในสุทธาวาสพรหม",
    "reference": "ธรรมวิภาค นักธรรมโท พระอนาคามี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-126",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 6 ข้อ 126] อริยสัจ ๔ ข้อใดคือ 'ทุกขสัจ' (สภาพที่ทนได้ยาก)?",
    "options": [
      "ชาติ ชรา มรณะ โสกะ ปริเทวะ ทุกข์ โทมนัส อุปายาส ฯลฯ",
      "ตัณหา ๓",
      "นิพพาน",
      "มรรคมีองค์ ๘"
    ],
    "correctIndex": 0,
    "explanation": "ทุกข์ คือ สภาพบีบคั้นทนได้ยาก มีการเกิด แก่ เจ็บ ตาย ความพลัดพราก เป็นต้น",
    "reference": "ธรรมวิภาค นักธรรมโท อริยสัจ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-127",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 6 ข้อ 127] สมุทัยสัจ (เหตุเกิดทุกข์) ในอริยสัจ ๔ ได้แก่อะไร?",
    "options": [
      "ตัณหา ๓ (กามตัณหา ภวตัณหา วิภวตัณหา)",
      "อวิชชา",
      "ความโกรธ",
      "ความไม่เที่ยง"
    ],
    "correctIndex": 0,
    "explanation": "สมุทัย คือ ตัณหาความทะยานอยาก ๓ ประการ",
    "reference": "ธรรมวิภาค นักธรรมโท อริยสัจ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-128",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 6 ข้อ 128] นิโรธสัจ ในอริยสัจ ๔ หมายถึงสิ่งใด?",
    "options": [
      "ความดับสนิทแห่งตัณหาและทุกข์ (พระนิพพาน)",
      "การตายของร่างกาย",
      "การนั่งสมาธิ",
      "การให้ทาน"
    ],
    "correctIndex": 0,
    "explanation": "นิโรธ คือ ความดับกิเลสและกองทุกข์สิ้นเชิง ดับตัณหาไม่เหลือ",
    "reference": "ธรรมวิภาค นักธรรมโท อริยสัจ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-129",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 6 ข้อ 129] มัคคสัจ (ข้อปฏิบัติให้ถึงความดับทุกข์) คือธรรมใด?",
    "options": [
      "อริยมรรคมีองค์ ๘ (มัชฌิมาปฏิปทา)",
      "ไตรลักษณ์",
      "ขันธ์ ๕",
      "ปฏิจจสมุปบาท"
    ],
    "correctIndex": 0,
    "explanation": "มรรค คือ อริยมรรคมีองค์ ๘ ทางสายกลางนำสู่พระนิพพาน",
    "reference": "ธรรมวิภาค นักธรรมโท อริยสัจ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-130",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 6 ข้อ 130] มรรคมีองค์ ๘ จัดสงเคราะห์ลงใน 'ไตรสิกขา' หมวดศีล ได้แก่องค์มรรคใดบ้าง?",
    "options": [
      "สัมมาวาจา สัมมากัมมันตะ สัมมาอาชีวะ",
      "สัมมาทิฏฐิ สัมมาสังกัปปะ",
      "สัมมาวายามะ สัมมาสติ สัมมาสมาธิ",
      "สัมมาทิฏฐิ สัมมาสมาธิ"
    ],
    "correctIndex": 0,
    "explanation": "ศีลสิกขา: สัมมาวาจา (วาจาชอบ) สัมมากัมมันตะ (การงานชอบ) สัมมาอาชีวะ (เลี้ยงชีพชอบ)",
    "reference": "ธรรมวิภาค นักธรรมโท มรรค ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-131",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 6 ข้อ 131] มรรคมีองค์ ๘ หมวดสมาธิสิกขา ได้แก่องค์มรรคใดบ้าง?",
    "options": [
      "สัมมาวายามะ สัมมาสติ สัมมาสมาธิ",
      "สัมมาวาจา สัมมากัมมันตะ",
      "สัมมาทิฏฐิ สัมมาสังกัปปะ",
      "สัมมาอาชีวะ สัมมาสติ"
    ],
    "correctIndex": 0,
    "explanation": "จิตตสิกขา/สมาธิ: สัมมาวายามะ (เพียรชอบ) สัมมาสติ (ระลึกชอบ) สัมมาสมาธิ (ตั้งจิตมั่นชอบ)",
    "reference": "ธรรมวิภาค นักธรรมโท มรรค ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-132",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 6 ข้อ 132] มรรคมีองค์ ๘ หมวดปัญญาสิกขา ได้แก่องค์มรรคใดบ้าง?",
    "options": [
      "สัมมาทิฏฐิ สัมมาสังกัปปะ",
      "สัมมาวาจา สัมมากัมมันตะ",
      "สัมมาวายามะ สัมมาสมาธิ",
      "สัมมาสติ สัมมาอาชีวะ"
    ],
    "correctIndex": 0,
    "explanation": "ปัญญาสิกขา: สัมมาทิฏฐิ (เห็นชอบ) สัมมาสังกัปปะ (ดำริชอบ)",
    "reference": "ธรรมวิภาค นักธรรมโท มรรค ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-133",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 6 ข้อ 133] สัมมาสังกัปปะ (ดำริชอบ) ประกอบด้วยความดำริ ๓ ประการใด?",
    "options": [
      "เนกขัมมสังกัปปะ (ออกจากกาม) อพยาบาทสังกัปปะ (ไม่พยาบาท) อวิหิงสาสังกัปปะ (ไม่เบียดเบียน)",
      "คิดรวย คิดเก่ง คิดดัง",
      "คิดทำบุญ คิดสวดมนต์ คิดสร้างวัด",
      "คิดอดีต คิดปัจจุบัน คิดอนาคต"
    ],
    "correctIndex": 0,
    "explanation": "ดำริชอบ ๓: ดำริออกจากกาม, ดำริในความไม่พยาบาท, ดำริในความไม่เบียดเบียน",
    "reference": "ธรรมวิภาค นักธรรมโท มรรค ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-134",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 6 ข้อ 134] สติปัฏฐาน ๔ (ฐานที่ตั้งแห่งสติในการเจริญวิปัสสนา) มีอะไรบ้าง?",
    "options": [
      "กายานุปัสสนา เวทนานุปัสสนา จิตตานุปัสสนา ธัมมานุปัสสนา",
      "ศีล สมาธิ ปัญญา วิมุตติ",
      "ทาน ศีล ภาวนา สัจจะ",
      "รูป เวทนา สัญญา สังขาร"
    ],
    "correctIndex": 0,
    "explanation": "สติปัฏฐาน ๔: พิจารณากายในกาย, พิจารณาเวทนาในเวทนา, พิจารณาจิตในจิต, พิจารณาธรรมในธรรม",
    "reference": "ธรรมวิภาค นักธรรมโท สติปัฏฐาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-135",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 6 ข้อ 135] โพชฌงค์ ๗ (องค์ธรรมเครื่องตรัสรู้ ๗ ประการ) ข้อใดหมายถึงการเฟ้นหาธรรม/วิจัยธรรม?",
    "options": [
      "ธัมมวิจยสัมโพชฌงค์",
      "สติสัมโพชฌงค์",
      "วิริยสัมโพชฌงค์",
      "ปีติสัมโพชฌงค์"
    ],
    "correctIndex": 0,
    "explanation": "ธัมมวิจยะ คือ การใช้ปัญญาเลือกเฟ้น ไตร่ตรอง ตรวจสอบสัจธรรม",
    "reference": "ธรรมวิภาค นักธรรมโท โพชฌงค์ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-136",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 6 ข้อ 136] อินทรีย์ ๕ และ พละ ๕ ข้อใดคือคู่ปรับที่ต้องปรับให้สมดุลกัน?",
    "options": [
      "ศรัทธาคู่กับปัญญา และ วิริยะคู่กับสมาธิ (โดยมีสติติดตามควบคุม)",
      "ศรัทธาคู่กับสมาธิ",
      "วิริยะคู่กับปัญญา",
      "สมาธิคู่กับสติ"
    ],
    "correctIndex": 0,
    "explanation": "ศรัทธามากปัญญาน้อยจะงมงาย, ปัญญามากศรัทธาน้อยจะฟุ้งซ่าน, วิริยะมากสมาธิน้อยจะกระวนกระวาย, สมาธิมากวิริยะน้อยจะเฉื่อยชา",
    "reference": "ธรรมวิภาค นักธรรมโท อินทรีย์ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-137",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 6 ข้อ 137] ไตรลักษณ์ ๓ ประการ กฎธรรมชาติแห่งสังขารธรรมคืออะไร?",
    "options": [
      "อนิจจัง (ไม่เที่ยง) ทุกขัง (เป็นทุกข์ทนอยู่สภาพเดิมไม่ได้) อนัตตา (ไม่ใช่ตัวตนบังคับไม่ได้)",
      "โลภ โกรธ หลง",
      "เกิด แก่ เจ็บ ตาย",
      "ศีล สมาธิ ปัญญา"
    ],
    "correctIndex": 0,
    "explanation": "ไตรลักษณ์: อนิจจตา, ทุกขตา, อนัตตตา",
    "reference": "ธรรมวิภาค นักธรรมโท ไตรลักษณ์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-138",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 6 ข้อ 138] ปฏิจจสมุปบาท (กระบวนการเกิดขึ้นแห่งกองทุกข์) ต้นกำเนิดแรกสุดคือสิ่งใด?",
    "options": [
      "อวิชชา (ความไม่รู้แจ้งในอริยสัจ ๔)",
      "ตัณหา",
      "สังขาร",
      "วิญญาณ"
    ],
    "correctIndex": 0,
    "explanation": "เพราะอวิชชาเป็นปัจจัย สังขารจึงมี เพราะสังขารเป็นปัจจัย วิญญาณจึงมี...",
    "reference": "ธรรมวิภาค นักธรรมโท ปฏิจจสมุปบาท",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-139",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 6 ข้อ 139] อุปาทาน ๔ (ความยึดมั่นถือมั่น ๔ ประการ) ข้อใดคือ 'กามุปาทาน'?",
    "options": [
      "ความยึดมั่นในกามคุณ (รูป เสียง กลิ่น รส สัมผัส)",
      "ความยึดมั่นในทฤษฎีความเห็น",
      "ความยึดมั่นในข้อวัตรปฏิบัติ",
      "ความยึดมั่นในตัวตน"
    ],
    "correctIndex": 0,
    "explanation": "กามุปาทาน คือ ความยึดติดผูกพันเหนียวแน่นในกามารมณ์",
    "reference": "ธรรมวิภาค นักธรรมโท อุปาทาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-140",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 6 ข้อ 140] ปฐมฌาน ในรูปฌาน ๔ ประกอบด้วยองค์ฌาน ๕ ข้อใด?",
    "options": [
      "วิตก วิจาร ปีติ สุข เอกัคคตา",
      "ปีติ สุข เอกัคคตา",
      "สุข เอกัคคตา",
      "อุเบกขา เอกัคคตา"
    ],
    "correctIndex": 0,
    "explanation": "ปฐมฌานมีองค์ ๕: วิตก (ยกจิตสู่อารมณ์) วิจาร (เคล้าคลึงอารมณ์) ปีติ (ความอิ่มใจ) สุข (ความสบายใจ) เอกัคคตา (จิตแน่วแน่เป็นหนึ่ง)",
    "reference": "ธรรมวิภาค นักธรรมโท ฌาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-141",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 6 ข้อ 141] จตุตถฌาน (ฌานที่ ๔) มีองค์ฌานเหลือเพียง ๒ ข้อใด?",
    "options": [
      "อุเบกขา และ เอกัคคตา",
      "สุข และ เอกัคคตา",
      "ปีติ และ สุข",
      "วิตก และ วิจาร"
    ],
    "correctIndex": 0,
    "explanation": "ฌานที่ ๔ ละสุขเวทนาเหลือแต่อุเบกขาบริสุทธิ์และจิตตั้งมั่นเอกัคคตา",
    "reference": "ธรรมวิภาค นักธรรมโท ฌาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-142",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 6 ข้อ 142] กิเลสอย่างหยาบ อย่างกลาง และอย่างละเอียด ละได้ด้วยธรรมใดตามลำดับ?",
    "options": [
      "หยาบละด้วยศีล, กลางละด้วยสมาธิ, ละเอียดละด้วยปัญญา",
      "หยาบละด้วยทาน, กลางละด้วยศีล, ละเอียดละด้วยภาวนา",
      "ละด้วยปัญญาทั้งหมด",
      "ละด้วยการสวดมนต์"
    ],
    "correctIndex": 0,
    "explanation": "ศีลคุมกายวาจาขจัดกิเลสหยาบ (วีติกกมะ), สมาธิข่มนิวรณ์กิเลสกลาง (ปริยุฏฐาน), ปัญญาตัดอนุสัยกิเลสละเอียด",
    "reference": "ธรรมวิภาค นักธรรมโท ไตรสิกขา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-143",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 6 ข้อ 143] สัมมัปปธาน ๔ ข้อใดคือ 'สังวรปธาน'?",
    "options": [
      "เพียรระวังยับยั้งบาปที่ยังไม่เกิดมิให้เกิดขึ้น",
      "เพียรละบาปที่เกิดขึ้นแล้ว",
      "เพียรเจริญกุศลใหม่",
      "เพียรรักษากุศลเดิม"
    ],
    "correctIndex": 0,
    "explanation": "สังวรปธาน คือ การสำรวมระวังมิให้อกุศลเกิดขึ้นในใจ",
    "reference": "ธรรมวิภาค นักธรรมโท สัมมัปปธาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-144",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 6 ข้อ 144] วิโมกข์ ๓ (ความหลุดพ้น ๓ ประการ) ข้อใดคือ 'สุญญตวิโมกข์'?",
    "options": [
      "หลุดพ้นด้วยการเห็นความว่างเปล่าจากตัวตน (อนัตตา)",
      "หลุดพ้นด้วยเห็นความไม่เที่ยง",
      "หลุดพ้นด้วยเห็นความเป็นทุกข์",
      "หลุดพ้นด้วยฌาน"
    ],
    "correctIndex": 0,
    "explanation": "สุญญตวิโมกข์ คือ ความหลุดพ้นที่เกิดจากการหยั่งเห็นสภาวะอนัตตาว่างเปล่าจากสัตว์บุคคล",
    "reference": "ธรรมวิภาค นักธรรมโท วิโมกข์ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-145",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 6 ข้อ 145] วิชชา ๓ ในพระพุทธศาสนา ข้อใดคือ 'จุตูปปาตญาณ'?",
    "options": [
      "ทิพพจักขุญาณ (ตาทิพย์รู้การเกิดดับของสัตว์ตามกรรม)",
      "ญาณระลึกชาติ",
      "ญาณตัดกิเลส",
      "ญาณรู้ใจคน"
    ],
    "correctIndex": 0,
    "explanation": "จุตูปปาตญาณ คือ ญาณรู้แจ้งการจุติและปฏิสนธิของสรรพสัตว์ตามอำนาจกรรม",
    "reference": "ธรรมวิภาค นักธรรมโท วิชชา ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-146",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 6 ข้อ 146] อภิชฌา และ พยาบาท ในอกุศลกรรมบถ มีโทษทางทวารใด?",
    "options": [
      "มโนทวาร (ทางใจ)",
      "กายทวาร",
      "วจีทวาร",
      "ทวารทั้ง ๓"
    ],
    "correctIndex": 0,
    "explanation": "อภิชฌา พยาบาท มิจฉาทิฏฐิ เป็นมโนกรรม (ทางใจ)",
    "reference": "ธรรมวิภาค นักธรรมโท กรรมบถ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-147",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 6 ข้อ 147] โยนิโสมนสิการ หมายถึงกระบวนการใดในทางปัญญา?",
    "options": [
      "การทำในใจโดยแยบคาย (การคิดพิจารณาอย่างถูกวิธีตามเหตุผลสัจธรรม)",
      "การท่องจำคัมภีร์",
      "การนั่งหลับตา",
      "การเชื่อตามอาจารย์"
    ],
    "correctIndex": 0,
    "explanation": "โยนิโสมนสิการ คือ การคิดพิจารณาสืบค้นถึงต้นตอเหตุปัจจัยอย่างแยบคายและถูกต้อง",
    "reference": "ธรรมวิภาค นักธรรมโท โยนิโสมนสิการ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-148",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 6 ข้อ 148] ปรโตโฆสะ หมายถึงปัจจัยภายนอกใดที่เกื้อกูลแก่สัมมาทิฏฐิ?",
    "options": [
      "การได้ฟังคำสั่งสอนและคำแนะนำที่ดีจากกัลยาณมิตรหรือครูบาอาจารย์",
      "การอ่านหนังสือพิมพ์",
      "การได้ยินเสียงดนตรี",
      "การดูข่าวสาร"
    ],
    "correctIndex": 0,
    "explanation": "ปรโตโฆสะ คือ เสียงจากผู้อื่นหรือการถ่ายทอดธรรมะจากกัลยาณมิตร",
    "reference": "ธรรมวิภาค นักธรรมโท เหตุเกิดสัมมาทิฏฐิ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-149",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 6 ข้อ 149] อริยบุคคล ๔ ชั้น (๘ บุคคล) ชั้นที่ ๒ คือใคร?",
    "options": [
      "พระสกทาคามี (ผู้กลับมาเกิดในกามภพอีกเพียงชาติเดียว)",
      "พระโสดาบัน",
      "พระอนาคามี",
      "พระอรหันต์"
    ],
    "correctIndex": 0,
    "explanation": "พระสกทาคามี ละสังโยชน์ ๓ ข้อแรกได้และทำราคะ โทสะ โมหะ ให้เบาบางลงอย่างยิ่ง",
    "reference": "ธรรมวิภาค นักธรรมโท อริยบุคคล",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-150",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 6 ข้อ 150] พระอนาคามี ละสังโยชน์ได้กี่ข้อ และเมื่อดับขันธ์จะไปบังเกิดที่ใด?",
    "options": [
      "ละสังโยชน์ ๕ ข้อแรกได้เด็ดขาด และไปบังเกิดในพรหมโลกชั้นสุทธาวาส ๕",
      "ละได้ ๓ ข้อ ไปเกิดบนสวรรค์",
      "ละได้ ๑๐ ข้อ นิพพานทันที",
      "กลับมาเกิดเป็นมนุษย์"
    ],
    "correctIndex": 0,
    "explanation": "พระอนาคามีตัดโอรัมภาคิยสังโยชน์ ๕ ได้ ไม่กลับมาสู่กามภพอีก ดับขันธ์เข้าสู่นิพพานในสุทธาวาสพรหม",
    "reference": "ธรรมวิภาค นักธรรมโท พระอนาคามี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-151",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 7 ข้อ 151] อริยสัจ ๔ ข้อใดคือ 'ทุกขสัจ' (สภาพที่ทนได้ยาก)?",
    "options": [
      "ชาติ ชรา มรณะ โสกะ ปริเทวะ ทุกข์ โทมนัส อุปายาส ฯลฯ",
      "ตัณหา ๓",
      "นิพพาน",
      "มรรคมีองค์ ๘"
    ],
    "correctIndex": 0,
    "explanation": "ทุกข์ คือ สภาพบีบคั้นทนได้ยาก มีการเกิด แก่ เจ็บ ตาย ความพลัดพราก เป็นต้น",
    "reference": "ธรรมวิภาค นักธรรมโท อริยสัจ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-152",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 7 ข้อ 152] สมุทัยสัจ (เหตุเกิดทุกข์) ในอริยสัจ ๔ ได้แก่อะไร?",
    "options": [
      "ตัณหา ๓ (กามตัณหา ภวตัณหา วิภวตัณหา)",
      "อวิชชา",
      "ความโกรธ",
      "ความไม่เที่ยง"
    ],
    "correctIndex": 0,
    "explanation": "สมุทัย คือ ตัณหาความทะยานอยาก ๓ ประการ",
    "reference": "ธรรมวิภาค นักธรรมโท อริยสัจ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-153",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 7 ข้อ 153] นิโรธสัจ ในอริยสัจ ๔ หมายถึงสิ่งใด?",
    "options": [
      "ความดับสนิทแห่งตัณหาและทุกข์ (พระนิพพาน)",
      "การตายของร่างกาย",
      "การนั่งสมาธิ",
      "การให้ทาน"
    ],
    "correctIndex": 0,
    "explanation": "นิโรธ คือ ความดับกิเลสและกองทุกข์สิ้นเชิง ดับตัณหาไม่เหลือ",
    "reference": "ธรรมวิภาค นักธรรมโท อริยสัจ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-154",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 7 ข้อ 154] มัคคสัจ (ข้อปฏิบัติให้ถึงความดับทุกข์) คือธรรมใด?",
    "options": [
      "อริยมรรคมีองค์ ๘ (มัชฌิมาปฏิปทา)",
      "ไตรลักษณ์",
      "ขันธ์ ๕",
      "ปฏิจจสมุปบาท"
    ],
    "correctIndex": 0,
    "explanation": "มรรค คือ อริยมรรคมีองค์ ๘ ทางสายกลางนำสู่พระนิพพาน",
    "reference": "ธรรมวิภาค นักธรรมโท อริยสัจ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-155",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 7 ข้อ 155] มรรคมีองค์ ๘ จัดสงเคราะห์ลงใน 'ไตรสิกขา' หมวดศีล ได้แก่องค์มรรคใดบ้าง?",
    "options": [
      "สัมมาวาจา สัมมากัมมันตะ สัมมาอาชีวะ",
      "สัมมาทิฏฐิ สัมมาสังกัปปะ",
      "สัมมาวายามะ สัมมาสติ สัมมาสมาธิ",
      "สัมมาทิฏฐิ สัมมาสมาธิ"
    ],
    "correctIndex": 0,
    "explanation": "ศีลสิกขา: สัมมาวาจา (วาจาชอบ) สัมมากัมมันตะ (การงานชอบ) สัมมาอาชีวะ (เลี้ยงชีพชอบ)",
    "reference": "ธรรมวิภาค นักธรรมโท มรรค ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-156",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 7 ข้อ 156] มรรคมีองค์ ๘ หมวดสมาธิสิกขา ได้แก่องค์มรรคใดบ้าง?",
    "options": [
      "สัมมาวายามะ สัมมาสติ สัมมาสมาธิ",
      "สัมมาวาจา สัมมากัมมันตะ",
      "สัมมาทิฏฐิ สัมมาสังกัปปะ",
      "สัมมาอาชีวะ สัมมาสติ"
    ],
    "correctIndex": 0,
    "explanation": "จิตตสิกขา/สมาธิ: สัมมาวายามะ (เพียรชอบ) สัมมาสติ (ระลึกชอบ) สัมมาสมาธิ (ตั้งจิตมั่นชอบ)",
    "reference": "ธรรมวิภาค นักธรรมโท มรรค ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-157",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 7 ข้อ 157] มรรคมีองค์ ๘ หมวดปัญญาสิกขา ได้แก่องค์มรรคใดบ้าง?",
    "options": [
      "สัมมาทิฏฐิ สัมมาสังกัปปะ",
      "สัมมาวาจา สัมมากัมมันตะ",
      "สัมมาวายามะ สัมมาสมาธิ",
      "สัมมาสติ สัมมาอาชีวะ"
    ],
    "correctIndex": 0,
    "explanation": "ปัญญาสิกขา: สัมมาทิฏฐิ (เห็นชอบ) สัมมาสังกัปปะ (ดำริชอบ)",
    "reference": "ธรรมวิภาค นักธรรมโท มรรค ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-158",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 7 ข้อ 158] สัมมาสังกัปปะ (ดำริชอบ) ประกอบด้วยความดำริ ๓ ประการใด?",
    "options": [
      "เนกขัมมสังกัปปะ (ออกจากกาม) อพยาบาทสังกัปปะ (ไม่พยาบาท) อวิหิงสาสังกัปปะ (ไม่เบียดเบียน)",
      "คิดรวย คิดเก่ง คิดดัง",
      "คิดทำบุญ คิดสวดมนต์ คิดสร้างวัด",
      "คิดอดีต คิดปัจจุบัน คิดอนาคต"
    ],
    "correctIndex": 0,
    "explanation": "ดำริชอบ ๓: ดำริออกจากกาม, ดำริในความไม่พยาบาท, ดำริในความไม่เบียดเบียน",
    "reference": "ธรรมวิภาค นักธรรมโท มรรค ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-159",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 7 ข้อ 159] สติปัฏฐาน ๔ (ฐานที่ตั้งแห่งสติในการเจริญวิปัสสนา) มีอะไรบ้าง?",
    "options": [
      "กายานุปัสสนา เวทนานุปัสสนา จิตตานุปัสสนา ธัมมานุปัสสนา",
      "ศีล สมาธิ ปัญญา วิมุตติ",
      "ทาน ศีล ภาวนา สัจจะ",
      "รูป เวทนา สัญญา สังขาร"
    ],
    "correctIndex": 0,
    "explanation": "สติปัฏฐาน ๔: พิจารณากายในกาย, พิจารณาเวทนาในเวทนา, พิจารณาจิตในจิต, พิจารณาธรรมในธรรม",
    "reference": "ธรรมวิภาค นักธรรมโท สติปัฏฐาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-160",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 7 ข้อ 160] โพชฌงค์ ๗ (องค์ธรรมเครื่องตรัสรู้ ๗ ประการ) ข้อใดหมายถึงการเฟ้นหาธรรม/วิจัยธรรม?",
    "options": [
      "ธัมมวิจยสัมโพชฌงค์",
      "สติสัมโพชฌงค์",
      "วิริยสัมโพชฌงค์",
      "ปีติสัมโพชฌงค์"
    ],
    "correctIndex": 0,
    "explanation": "ธัมมวิจยะ คือ การใช้ปัญญาเลือกเฟ้น ไตร่ตรอง ตรวจสอบสัจธรรม",
    "reference": "ธรรมวิภาค นักธรรมโท โพชฌงค์ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-161",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 7 ข้อ 161] อินทรีย์ ๕ และ พละ ๕ ข้อใดคือคู่ปรับที่ต้องปรับให้สมดุลกัน?",
    "options": [
      "ศรัทธาคู่กับปัญญา และ วิริยะคู่กับสมาธิ (โดยมีสติติดตามควบคุม)",
      "ศรัทธาคู่กับสมาธิ",
      "วิริยะคู่กับปัญญา",
      "สมาธิคู่กับสติ"
    ],
    "correctIndex": 0,
    "explanation": "ศรัทธามากปัญญาน้อยจะงมงาย, ปัญญามากศรัทธาน้อยจะฟุ้งซ่าน, วิริยะมากสมาธิน้อยจะกระวนกระวาย, สมาธิมากวิริยะน้อยจะเฉื่อยชา",
    "reference": "ธรรมวิภาค นักธรรมโท อินทรีย์ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-162",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 7 ข้อ 162] ไตรลักษณ์ ๓ ประการ กฎธรรมชาติแห่งสังขารธรรมคืออะไร?",
    "options": [
      "อนิจจัง (ไม่เที่ยง) ทุกขัง (เป็นทุกข์ทนอยู่สภาพเดิมไม่ได้) อนัตตา (ไม่ใช่ตัวตนบังคับไม่ได้)",
      "โลภ โกรธ หลง",
      "เกิด แก่ เจ็บ ตาย",
      "ศีล สมาธิ ปัญญา"
    ],
    "correctIndex": 0,
    "explanation": "ไตรลักษณ์: อนิจจตา, ทุกขตา, อนัตตตา",
    "reference": "ธรรมวิภาค นักธรรมโท ไตรลักษณ์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-163",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 7 ข้อ 163] ปฏิจจสมุปบาท (กระบวนการเกิดขึ้นแห่งกองทุกข์) ต้นกำเนิดแรกสุดคือสิ่งใด?",
    "options": [
      "อวิชชา (ความไม่รู้แจ้งในอริยสัจ ๔)",
      "ตัณหา",
      "สังขาร",
      "วิญญาณ"
    ],
    "correctIndex": 0,
    "explanation": "เพราะอวิชชาเป็นปัจจัย สังขารจึงมี เพราะสังขารเป็นปัจจัย วิญญาณจึงมี...",
    "reference": "ธรรมวิภาค นักธรรมโท ปฏิจจสมุปบาท",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-164",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 7 ข้อ 164] อุปาทาน ๔ (ความยึดมั่นถือมั่น ๔ ประการ) ข้อใดคือ 'กามุปาทาน'?",
    "options": [
      "ความยึดมั่นในกามคุณ (รูป เสียง กลิ่น รส สัมผัส)",
      "ความยึดมั่นในทฤษฎีความเห็น",
      "ความยึดมั่นในข้อวัตรปฏิบัติ",
      "ความยึดมั่นในตัวตน"
    ],
    "correctIndex": 0,
    "explanation": "กามุปาทาน คือ ความยึดติดผูกพันเหนียวแน่นในกามารมณ์",
    "reference": "ธรรมวิภาค นักธรรมโท อุปาทาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-165",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 7 ข้อ 165] ปฐมฌาน ในรูปฌาน ๔ ประกอบด้วยองค์ฌาน ๕ ข้อใด?",
    "options": [
      "วิตก วิจาร ปีติ สุข เอกัคคตา",
      "ปีติ สุข เอกัคคตา",
      "สุข เอกัคคตา",
      "อุเบกขา เอกัคคตา"
    ],
    "correctIndex": 0,
    "explanation": "ปฐมฌานมีองค์ ๕: วิตก (ยกจิตสู่อารมณ์) วิจาร (เคล้าคลึงอารมณ์) ปีติ (ความอิ่มใจ) สุข (ความสบายใจ) เอกัคคตา (จิตแน่วแน่เป็นหนึ่ง)",
    "reference": "ธรรมวิภาค นักธรรมโท ฌาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-166",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 7 ข้อ 166] จตุตถฌาน (ฌานที่ ๔) มีองค์ฌานเหลือเพียง ๒ ข้อใด?",
    "options": [
      "อุเบกขา และ เอกัคคตา",
      "สุข และ เอกัคคตา",
      "ปีติ และ สุข",
      "วิตก และ วิจาร"
    ],
    "correctIndex": 0,
    "explanation": "ฌานที่ ๔ ละสุขเวทนาเหลือแต่อุเบกขาบริสุทธิ์และจิตตั้งมั่นเอกัคคตา",
    "reference": "ธรรมวิภาค นักธรรมโท ฌาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-167",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 7 ข้อ 167] กิเลสอย่างหยาบ อย่างกลาง และอย่างละเอียด ละได้ด้วยธรรมใดตามลำดับ?",
    "options": [
      "หยาบละด้วยศีล, กลางละด้วยสมาธิ, ละเอียดละด้วยปัญญา",
      "หยาบละด้วยทาน, กลางละด้วยศีล, ละเอียดละด้วยภาวนา",
      "ละด้วยปัญญาทั้งหมด",
      "ละด้วยการสวดมนต์"
    ],
    "correctIndex": 0,
    "explanation": "ศีลคุมกายวาจาขจัดกิเลสหยาบ (วีติกกมะ), สมาธิข่มนิวรณ์กิเลสกลาง (ปริยุฏฐาน), ปัญญาตัดอนุสัยกิเลสละเอียด",
    "reference": "ธรรมวิภาค นักธรรมโท ไตรสิกขา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-168",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 7 ข้อ 168] สัมมัปปธาน ๔ ข้อใดคือ 'สังวรปธาน'?",
    "options": [
      "เพียรระวังยับยั้งบาปที่ยังไม่เกิดมิให้เกิดขึ้น",
      "เพียรละบาปที่เกิดขึ้นแล้ว",
      "เพียรเจริญกุศลใหม่",
      "เพียรรักษากุศลเดิม"
    ],
    "correctIndex": 0,
    "explanation": "สังวรปธาน คือ การสำรวมระวังมิให้อกุศลเกิดขึ้นในใจ",
    "reference": "ธรรมวิภาค นักธรรมโท สัมมัปปธาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-169",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 7 ข้อ 169] วิโมกข์ ๓ (ความหลุดพ้น ๓ ประการ) ข้อใดคือ 'สุญญตวิโมกข์'?",
    "options": [
      "หลุดพ้นด้วยการเห็นความว่างเปล่าจากตัวตน (อนัตตา)",
      "หลุดพ้นด้วยเห็นความไม่เที่ยง",
      "หลุดพ้นด้วยเห็นความเป็นทุกข์",
      "หลุดพ้นด้วยฌาน"
    ],
    "correctIndex": 0,
    "explanation": "สุญญตวิโมกข์ คือ ความหลุดพ้นที่เกิดจากการหยั่งเห็นสภาวะอนัตตาว่างเปล่าจากสัตว์บุคคล",
    "reference": "ธรรมวิภาค นักธรรมโท วิโมกข์ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-170",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 7 ข้อ 170] วิชชา ๓ ในพระพุทธศาสนา ข้อใดคือ 'จุตูปปาตญาณ'?",
    "options": [
      "ทิพพจักขุญาณ (ตาทิพย์รู้การเกิดดับของสัตว์ตามกรรม)",
      "ญาณระลึกชาติ",
      "ญาณตัดกิเลส",
      "ญาณรู้ใจคน"
    ],
    "correctIndex": 0,
    "explanation": "จุตูปปาตญาณ คือ ญาณรู้แจ้งการจุติและปฏิสนธิของสรรพสัตว์ตามอำนาจกรรม",
    "reference": "ธรรมวิภาค นักธรรมโท วิชชา ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-171",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 7 ข้อ 171] อภิชฌา และ พยาบาท ในอกุศลกรรมบถ มีโทษทางทวารใด?",
    "options": [
      "มโนทวาร (ทางใจ)",
      "กายทวาร",
      "วจีทวาร",
      "ทวารทั้ง ๓"
    ],
    "correctIndex": 0,
    "explanation": "อภิชฌา พยาบาท มิจฉาทิฏฐิ เป็นมโนกรรม (ทางใจ)",
    "reference": "ธรรมวิภาค นักธรรมโท กรรมบถ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-172",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 7 ข้อ 172] โยนิโสมนสิการ หมายถึงกระบวนการใดในทางปัญญา?",
    "options": [
      "การทำในใจโดยแยบคาย (การคิดพิจารณาอย่างถูกวิธีตามเหตุผลสัจธรรม)",
      "การท่องจำคัมภีร์",
      "การนั่งหลับตา",
      "การเชื่อตามอาจารย์"
    ],
    "correctIndex": 0,
    "explanation": "โยนิโสมนสิการ คือ การคิดพิจารณาสืบค้นถึงต้นตอเหตุปัจจัยอย่างแยบคายและถูกต้อง",
    "reference": "ธรรมวิภาค นักธรรมโท โยนิโสมนสิการ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-173",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 7 ข้อ 173] ปรโตโฆสะ หมายถึงปัจจัยภายนอกใดที่เกื้อกูลแก่สัมมาทิฏฐิ?",
    "options": [
      "การได้ฟังคำสั่งสอนและคำแนะนำที่ดีจากกัลยาณมิตรหรือครูบาอาจารย์",
      "การอ่านหนังสือพิมพ์",
      "การได้ยินเสียงดนตรี",
      "การดูข่าวสาร"
    ],
    "correctIndex": 0,
    "explanation": "ปรโตโฆสะ คือ เสียงจากผู้อื่นหรือการถ่ายทอดธรรมะจากกัลยาณมิตร",
    "reference": "ธรรมวิภาค นักธรรมโท เหตุเกิดสัมมาทิฏฐิ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-174",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 7 ข้อ 174] อริยบุคคล ๔ ชั้น (๘ บุคคล) ชั้นที่ ๒ คือใคร?",
    "options": [
      "พระสกทาคามี (ผู้กลับมาเกิดในกามภพอีกเพียงชาติเดียว)",
      "พระโสดาบัน",
      "พระอนาคามี",
      "พระอรหันต์"
    ],
    "correctIndex": 0,
    "explanation": "พระสกทาคามี ละสังโยชน์ ๓ ข้อแรกได้และทำราคะ โทสะ โมหะ ให้เบาบางลงอย่างยิ่ง",
    "reference": "ธรรมวิภาค นักธรรมโท อริยบุคคล",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-175",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 7 ข้อ 175] พระอนาคามี ละสังโยชน์ได้กี่ข้อ และเมื่อดับขันธ์จะไปบังเกิดที่ใด?",
    "options": [
      "ละสังโยชน์ ๕ ข้อแรกได้เด็ดขาด และไปบังเกิดในพรหมโลกชั้นสุทธาวาส ๕",
      "ละได้ ๓ ข้อ ไปเกิดบนสวรรค์",
      "ละได้ ๑๐ ข้อ นิพพานทันที",
      "กลับมาเกิดเป็นมนุษย์"
    ],
    "correctIndex": 0,
    "explanation": "พระอนาคามีตัดโอรัมภาคิยสังโยชน์ ๕ ได้ ไม่กลับมาสู่กามภพอีก ดับขันธ์เข้าสู่นิพพานในสุทธาวาสพรหม",
    "reference": "ธรรมวิภาค นักธรรมโท พระอนาคามี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-176",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 8 ข้อ 176] อริยสัจ ๔ ข้อใดคือ 'ทุกขสัจ' (สภาพที่ทนได้ยาก)?",
    "options": [
      "ชาติ ชรา มรณะ โสกะ ปริเทวะ ทุกข์ โทมนัส อุปายาส ฯลฯ",
      "ตัณหา ๓",
      "นิพพาน",
      "มรรคมีองค์ ๘"
    ],
    "correctIndex": 0,
    "explanation": "ทุกข์ คือ สภาพบีบคั้นทนได้ยาก มีการเกิด แก่ เจ็บ ตาย ความพลัดพราก เป็นต้น",
    "reference": "ธรรมวิภาค นักธรรมโท อริยสัจ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-177",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 8 ข้อ 177] สมุทัยสัจ (เหตุเกิดทุกข์) ในอริยสัจ ๔ ได้แก่อะไร?",
    "options": [
      "ตัณหา ๓ (กามตัณหา ภวตัณหา วิภวตัณหา)",
      "อวิชชา",
      "ความโกรธ",
      "ความไม่เที่ยง"
    ],
    "correctIndex": 0,
    "explanation": "สมุทัย คือ ตัณหาความทะยานอยาก ๓ ประการ",
    "reference": "ธรรมวิภาค นักธรรมโท อริยสัจ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-178",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 8 ข้อ 178] นิโรธสัจ ในอริยสัจ ๔ หมายถึงสิ่งใด?",
    "options": [
      "ความดับสนิทแห่งตัณหาและทุกข์ (พระนิพพาน)",
      "การตายของร่างกาย",
      "การนั่งสมาธิ",
      "การให้ทาน"
    ],
    "correctIndex": 0,
    "explanation": "นิโรธ คือ ความดับกิเลสและกองทุกข์สิ้นเชิง ดับตัณหาไม่เหลือ",
    "reference": "ธรรมวิภาค นักธรรมโท อริยสัจ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-179",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 8 ข้อ 179] มัคคสัจ (ข้อปฏิบัติให้ถึงความดับทุกข์) คือธรรมใด?",
    "options": [
      "อริยมรรคมีองค์ ๘ (มัชฌิมาปฏิปทา)",
      "ไตรลักษณ์",
      "ขันธ์ ๕",
      "ปฏิจจสมุปบาท"
    ],
    "correctIndex": 0,
    "explanation": "มรรค คือ อริยมรรคมีองค์ ๘ ทางสายกลางนำสู่พระนิพพาน",
    "reference": "ธรรมวิภาค นักธรรมโท อริยสัจ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-180",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 8 ข้อ 180] มรรคมีองค์ ๘ จัดสงเคราะห์ลงใน 'ไตรสิกขา' หมวดศีล ได้แก่องค์มรรคใดบ้าง?",
    "options": [
      "สัมมาวาจา สัมมากัมมันตะ สัมมาอาชีวะ",
      "สัมมาทิฏฐิ สัมมาสังกัปปะ",
      "สัมมาวายามะ สัมมาสติ สัมมาสมาธิ",
      "สัมมาทิฏฐิ สัมมาสมาธิ"
    ],
    "correctIndex": 0,
    "explanation": "ศีลสิกขา: สัมมาวาจา (วาจาชอบ) สัมมากัมมันตะ (การงานชอบ) สัมมาอาชีวะ (เลี้ยงชีพชอบ)",
    "reference": "ธรรมวิภาค นักธรรมโท มรรค ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-181",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 8 ข้อ 181] มรรคมีองค์ ๘ หมวดสมาธิสิกขา ได้แก่องค์มรรคใดบ้าง?",
    "options": [
      "สัมมาวายามะ สัมมาสติ สัมมาสมาธิ",
      "สัมมาวาจา สัมมากัมมันตะ",
      "สัมมาทิฏฐิ สัมมาสังกัปปะ",
      "สัมมาอาชีวะ สัมมาสติ"
    ],
    "correctIndex": 0,
    "explanation": "จิตตสิกขา/สมาธิ: สัมมาวายามะ (เพียรชอบ) สัมมาสติ (ระลึกชอบ) สัมมาสมาธิ (ตั้งจิตมั่นชอบ)",
    "reference": "ธรรมวิภาค นักธรรมโท มรรค ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-182",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 8 ข้อ 182] มรรคมีองค์ ๘ หมวดปัญญาสิกขา ได้แก่องค์มรรคใดบ้าง?",
    "options": [
      "สัมมาทิฏฐิ สัมมาสังกัปปะ",
      "สัมมาวาจา สัมมากัมมันตะ",
      "สัมมาวายามะ สัมมาสมาธิ",
      "สัมมาสติ สัมมาอาชีวะ"
    ],
    "correctIndex": 0,
    "explanation": "ปัญญาสิกขา: สัมมาทิฏฐิ (เห็นชอบ) สัมมาสังกัปปะ (ดำริชอบ)",
    "reference": "ธรรมวิภาค นักธรรมโท มรรค ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-183",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 8 ข้อ 183] สัมมาสังกัปปะ (ดำริชอบ) ประกอบด้วยความดำริ ๓ ประการใด?",
    "options": [
      "เนกขัมมสังกัปปะ (ออกจากกาม) อพยาบาทสังกัปปะ (ไม่พยาบาท) อวิหิงสาสังกัปปะ (ไม่เบียดเบียน)",
      "คิดรวย คิดเก่ง คิดดัง",
      "คิดทำบุญ คิดสวดมนต์ คิดสร้างวัด",
      "คิดอดีต คิดปัจจุบัน คิดอนาคต"
    ],
    "correctIndex": 0,
    "explanation": "ดำริชอบ ๓: ดำริออกจากกาม, ดำริในความไม่พยาบาท, ดำริในความไม่เบียดเบียน",
    "reference": "ธรรมวิภาค นักธรรมโท มรรค ๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-184",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 8 ข้อ 184] สติปัฏฐาน ๔ (ฐานที่ตั้งแห่งสติในการเจริญวิปัสสนา) มีอะไรบ้าง?",
    "options": [
      "กายานุปัสสนา เวทนานุปัสสนา จิตตานุปัสสนา ธัมมานุปัสสนา",
      "ศีล สมาธิ ปัญญา วิมุตติ",
      "ทาน ศีล ภาวนา สัจจะ",
      "รูป เวทนา สัญญา สังขาร"
    ],
    "correctIndex": 0,
    "explanation": "สติปัฏฐาน ๔: พิจารณากายในกาย, พิจารณาเวทนาในเวทนา, พิจารณาจิตในจิต, พิจารณาธรรมในธรรม",
    "reference": "ธรรมวิภาค นักธรรมโท สติปัฏฐาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-185",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 8 ข้อ 185] โพชฌงค์ ๗ (องค์ธรรมเครื่องตรัสรู้ ๗ ประการ) ข้อใดหมายถึงการเฟ้นหาธรรม/วิจัยธรรม?",
    "options": [
      "ธัมมวิจยสัมโพชฌงค์",
      "สติสัมโพชฌงค์",
      "วิริยสัมโพชฌงค์",
      "ปีติสัมโพชฌงค์"
    ],
    "correctIndex": 0,
    "explanation": "ธัมมวิจยะ คือ การใช้ปัญญาเลือกเฟ้น ไตร่ตรอง ตรวจสอบสัจธรรม",
    "reference": "ธรรมวิภาค นักธรรมโท โพชฌงค์ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-186",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 8 ข้อ 186] อินทรีย์ ๕ และ พละ ๕ ข้อใดคือคู่ปรับที่ต้องปรับให้สมดุลกัน?",
    "options": [
      "ศรัทธาคู่กับปัญญา และ วิริยะคู่กับสมาธิ (โดยมีสติติดตามควบคุม)",
      "ศรัทธาคู่กับสมาธิ",
      "วิริยะคู่กับปัญญา",
      "สมาธิคู่กับสติ"
    ],
    "correctIndex": 0,
    "explanation": "ศรัทธามากปัญญาน้อยจะงมงาย, ปัญญามากศรัทธาน้อยจะฟุ้งซ่าน, วิริยะมากสมาธิน้อยจะกระวนกระวาย, สมาธิมากวิริยะน้อยจะเฉื่อยชา",
    "reference": "ธรรมวิภาค นักธรรมโท อินทรีย์ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-187",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 8 ข้อ 187] ไตรลักษณ์ ๓ ประการ กฎธรรมชาติแห่งสังขารธรรมคืออะไร?",
    "options": [
      "อนิจจัง (ไม่เที่ยง) ทุกขัง (เป็นทุกข์ทนอยู่สภาพเดิมไม่ได้) อนัตตา (ไม่ใช่ตัวตนบังคับไม่ได้)",
      "โลภ โกรธ หลง",
      "เกิด แก่ เจ็บ ตาย",
      "ศีล สมาธิ ปัญญา"
    ],
    "correctIndex": 0,
    "explanation": "ไตรลักษณ์: อนิจจตา, ทุกขตา, อนัตตตา",
    "reference": "ธรรมวิภาค นักธรรมโท ไตรลักษณ์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-188",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 8 ข้อ 188] ปฏิจจสมุปบาท (กระบวนการเกิดขึ้นแห่งกองทุกข์) ต้นกำเนิดแรกสุดคือสิ่งใด?",
    "options": [
      "อวิชชา (ความไม่รู้แจ้งในอริยสัจ ๔)",
      "ตัณหา",
      "สังขาร",
      "วิญญาณ"
    ],
    "correctIndex": 0,
    "explanation": "เพราะอวิชชาเป็นปัจจัย สังขารจึงมี เพราะสังขารเป็นปัจจัย วิญญาณจึงมี...",
    "reference": "ธรรมวิภาค นักธรรมโท ปฏิจจสมุปบาท",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-189",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 8 ข้อ 189] อุปาทาน ๔ (ความยึดมั่นถือมั่น ๔ ประการ) ข้อใดคือ 'กามุปาทาน'?",
    "options": [
      "ความยึดมั่นในกามคุณ (รูป เสียง กลิ่น รส สัมผัส)",
      "ความยึดมั่นในทฤษฎีความเห็น",
      "ความยึดมั่นในข้อวัตรปฏิบัติ",
      "ความยึดมั่นในตัวตน"
    ],
    "correctIndex": 0,
    "explanation": "กามุปาทาน คือ ความยึดติดผูกพันเหนียวแน่นในกามารมณ์",
    "reference": "ธรรมวิภาค นักธรรมโท อุปาทาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-190",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 8 ข้อ 190] ปฐมฌาน ในรูปฌาน ๔ ประกอบด้วยองค์ฌาน ๕ ข้อใด?",
    "options": [
      "วิตก วิจาร ปีติ สุข เอกัคคตา",
      "ปีติ สุข เอกัคคตา",
      "สุข เอกัคคตา",
      "อุเบกขา เอกัคคตา"
    ],
    "correctIndex": 0,
    "explanation": "ปฐมฌานมีองค์ ๕: วิตก (ยกจิตสู่อารมณ์) วิจาร (เคล้าคลึงอารมณ์) ปีติ (ความอิ่มใจ) สุข (ความสบายใจ) เอกัคคตา (จิตแน่วแน่เป็นหนึ่ง)",
    "reference": "ธรรมวิภาค นักธรรมโท ฌาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-191",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 8 ข้อ 191] จตุตถฌาน (ฌานที่ ๔) มีองค์ฌานเหลือเพียง ๒ ข้อใด?",
    "options": [
      "อุเบกขา และ เอกัคคตา",
      "สุข และ เอกัคคตา",
      "ปีติ และ สุข",
      "วิตก และ วิจาร"
    ],
    "correctIndex": 0,
    "explanation": "ฌานที่ ๔ ละสุขเวทนาเหลือแต่อุเบกขาบริสุทธิ์และจิตตั้งมั่นเอกัคคตา",
    "reference": "ธรรมวิภาค นักธรรมโท ฌาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-192",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 8 ข้อ 192] กิเลสอย่างหยาบ อย่างกลาง และอย่างละเอียด ละได้ด้วยธรรมใดตามลำดับ?",
    "options": [
      "หยาบละด้วยศีล, กลางละด้วยสมาธิ, ละเอียดละด้วยปัญญา",
      "หยาบละด้วยทาน, กลางละด้วยศีล, ละเอียดละด้วยภาวนา",
      "ละด้วยปัญญาทั้งหมด",
      "ละด้วยการสวดมนต์"
    ],
    "correctIndex": 0,
    "explanation": "ศีลคุมกายวาจาขจัดกิเลสหยาบ (วีติกกมะ), สมาธิข่มนิวรณ์กิเลสกลาง (ปริยุฏฐาน), ปัญญาตัดอนุสัยกิเลสละเอียด",
    "reference": "ธรรมวิภาค นักธรรมโท ไตรสิกขา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-193",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 8 ข้อ 193] สัมมัปปธาน ๔ ข้อใดคือ 'สังวรปธาน'?",
    "options": [
      "เพียรระวังยับยั้งบาปที่ยังไม่เกิดมิให้เกิดขึ้น",
      "เพียรละบาปที่เกิดขึ้นแล้ว",
      "เพียรเจริญกุศลใหม่",
      "เพียรรักษากุศลเดิม"
    ],
    "correctIndex": 0,
    "explanation": "สังวรปธาน คือ การสำรวมระวังมิให้อกุศลเกิดขึ้นในใจ",
    "reference": "ธรรมวิภาค นักธรรมโท สัมมัปปธาน ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-194",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 8 ข้อ 194] วิโมกข์ ๓ (ความหลุดพ้น ๓ ประการ) ข้อใดคือ 'สุญญตวิโมกข์'?",
    "options": [
      "หลุดพ้นด้วยการเห็นความว่างเปล่าจากตัวตน (อนัตตา)",
      "หลุดพ้นด้วยเห็นความไม่เที่ยง",
      "หลุดพ้นด้วยเห็นความเป็นทุกข์",
      "หลุดพ้นด้วยฌาน"
    ],
    "correctIndex": 0,
    "explanation": "สุญญตวิโมกข์ คือ ความหลุดพ้นที่เกิดจากการหยั่งเห็นสภาวะอนัตตาว่างเปล่าจากสัตว์บุคคล",
    "reference": "ธรรมวิภาค นักธรรมโท วิโมกข์ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-195",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 8 ข้อ 195] วิชชา ๓ ในพระพุทธศาสนา ข้อใดคือ 'จุตูปปาตญาณ'?",
    "options": [
      "ทิพพจักขุญาณ (ตาทิพย์รู้การเกิดดับของสัตว์ตามกรรม)",
      "ญาณระลึกชาติ",
      "ญาณตัดกิเลส",
      "ญาณรู้ใจคน"
    ],
    "correctIndex": 0,
    "explanation": "จุตูปปาตญาณ คือ ญาณรู้แจ้งการจุติและปฏิสนธิของสรรพสัตว์ตามอำนาจกรรม",
    "reference": "ธรรมวิภาค นักธรรมโท วิชชา ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-196",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 8 ข้อ 196] อภิชฌา และ พยาบาท ในอกุศลกรรมบถ มีโทษทางทวารใด?",
    "options": [
      "มโนทวาร (ทางใจ)",
      "กายทวาร",
      "วจีทวาร",
      "ทวารทั้ง ๓"
    ],
    "correctIndex": 0,
    "explanation": "อภิชฌา พยาบาท มิจฉาทิฏฐิ เป็นมโนกรรม (ทางใจ)",
    "reference": "ธรรมวิภาค นักธรรมโท กรรมบถ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-197",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 8 ข้อ 197] โยนิโสมนสิการ หมายถึงกระบวนการใดในทางปัญญา?",
    "options": [
      "การทำในใจโดยแยบคาย (การคิดพิจารณาอย่างถูกวิธีตามเหตุผลสัจธรรม)",
      "การท่องจำคัมภีร์",
      "การนั่งหลับตา",
      "การเชื่อตามอาจารย์"
    ],
    "correctIndex": 0,
    "explanation": "โยนิโสมนสิการ คือ การคิดพิจารณาสืบค้นถึงต้นตอเหตุปัจจัยอย่างแยบคายและถูกต้อง",
    "reference": "ธรรมวิภาค นักธรรมโท โยนิโสมนสิการ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-198",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 8 ข้อ 198] ปรโตโฆสะ หมายถึงปัจจัยภายนอกใดที่เกื้อกูลแก่สัมมาทิฏฐิ?",
    "options": [
      "การได้ฟังคำสั่งสอนและคำแนะนำที่ดีจากกัลยาณมิตรหรือครูบาอาจารย์",
      "การอ่านหนังสือพิมพ์",
      "การได้ยินเสียงดนตรี",
      "การดูข่าวสาร"
    ],
    "correctIndex": 0,
    "explanation": "ปรโตโฆสะ คือ เสียงจากผู้อื่นหรือการถ่ายทอดธรรมะจากกัลยาณมิตร",
    "reference": "ธรรมวิภาค นักธรรมโท เหตุเกิดสัมมาทิฏฐิ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-199",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 8 ข้อ 199] อริยบุคคล ๔ ชั้น (๘ บุคคล) ชั้นที่ ๒ คือใคร?",
    "options": [
      "พระสกทาคามี (ผู้กลับมาเกิดในกามภพอีกเพียงชาติเดียว)",
      "พระโสดาบัน",
      "พระอนาคามี",
      "พระอรหันต์"
    ],
    "correctIndex": 0,
    "explanation": "พระสกทาคามี ละสังโยชน์ ๓ ข้อแรกได้และทำราคะ โทสะ โมหะ ให้เบาบางลงอย่างยิ่ง",
    "reference": "ธรรมวิภาค นักธรรมโท อริยบุคคล",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-d-200",
    "grade": "โท",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 8 ข้อ 200] พระอนาคามี ละสังโยชน์ได้กี่ข้อ และเมื่อดับขันธ์จะไปบังเกิดที่ใด?",
    "options": [
      "ละสังโยชน์ ๕ ข้อแรกได้เด็ดขาด และไปบังเกิดในพรหมโลกชั้นสุทธาวาส ๕",
      "ละได้ ๓ ข้อ ไปเกิดบนสวรรค์",
      "ละได้ ๑๐ ข้อ นิพพานทันที",
      "กลับมาเกิดเป็นมนุษย์"
    ],
    "correctIndex": 0,
    "explanation": "พระอนาคามีตัดโอรัมภาคิยสังโยชน์ ๕ ได้ ไม่กลับมาสู่กามภพอีก ดับขันธ์เข้าสู่นิพพานในสุทธาวาสพรหม",
    "reference": "ธรรมวิภาค นักธรรมโท พระอนาคามี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-001",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "พระสารีบุตรเถระ ได้รับยกย่องเป็นพระอัครสาวกเบื้องขวา เลิศในด้านใด?",
    "options": [
      "ผู้มีปัญญามาก (มหัปปัญญานัง)",
      "ผู้มีฤทธิ์มาก",
      "ผู้มีลาภมาก",
      "ผู้ทรงธุดงค์"
    ],
    "correctIndex": 0,
    "explanation": "พระสารีบุตรได้รับยกย่องเป็นเลิศทางด้านมีปัญญามาก เป็นธรรมเสนาบดี",
    "reference": "พุทธานุพุทธประวัติ พระสารีบุตร",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-002",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "พระมหาโมคคัลลานเถระ ได้รับยกย่องเป็นพระอัครสาวกเบื้องซ้าย เลิศในด้านใด?",
    "options": [
      "ผู้มีฤทธิ์มาก (อิทธิมันตานัง)",
      "ผู้มีปัญญามาก",
      "ผู้ทรงวินัย",
      "ผู้มีเสียงไพเราะ"
    ],
    "correctIndex": 0,
    "explanation": "พระมหาโมคคัลลานะเลิศทางด้านมีอิทธิฤทธิ์มาก",
    "reference": "พุทธานุพุทธประวัติ พระโมคคัลลานะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-003",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "พระมหากัสสปเถระ ได้รับยกย่องเป็นเอตทัคคะด้านใด?",
    "options": [
      "ผู้ถือธุดงค์และสรรเสริญการถือธุดงค์ (ธุตวาทานัง)",
      "ผู้มีลาภมาก",
      "ผู้เป็นพหูสูต",
      "ผู้มีทิพยจักษุ"
    ],
    "correctIndex": 0,
    "explanation": "พระมหากัสสปะถือธุดงค์ ๑๓ ประการเคร่งครัดและเป็นประธานปฐมสังคายนา",
    "reference": "พุทธานุพุทธประวัติ พระมหากัสสปะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-004",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "พระอานนทเถระ ได้รับยกย่องเอตทัคคะถึง ๕ ประการ ข้อใดมิใช่ ๑ ในนั้น?",
    "options": [
      "ผู้มีฤทธิ์เหาะเหินเดินอากาศ",
      "ผู้เป็นพหูสูต",
      "ผู้มีสติจำทรง",
      "ยอดอุปัฏฐาก"
    ],
    "correctIndex": 0,
    "explanation": "พระอานนท์เลิศด้าน พหูสูต สติ คติ ธิติ และยอดอุปัฏฐาก",
    "reference": "พุทธานุพุทธประวัติ พระอานนท์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-005",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๓",
    "question": "พระอนุรุทธเถระ ได้รับยกย่องในตำแหน่งเอตทัคคะด้านใด?",
    "options": [
      "ผู้มีทิพยจักษุญาณ (ตาทิพย์)",
      "ผู้มีวาจาไพเราะ",
      "ผู้มีลาภมาก",
      "ผู้มีปัญญา"
    ],
    "correctIndex": 0,
    "explanation": "พระอนุรุทธะเลิศทางทิพยจักษุญาณ",
    "reference": "พุทธานุพุทธประวัติ พระอนุรุทธะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-006",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๔",
    "question": "พระอุบาลีเถระ ได้รับยกย่องเป็นเอตทัคคะด้านใด?",
    "options": [
      "ผู้ทรงจำและเชี่ยวชาญพระวินัย (วินัยธร)",
      "ผู้ทรงพระสูตร",
      "ผู้แสดงธรรม",
      "ผู้ยินดีในป่า"
    ],
    "correctIndex": 0,
    "explanation": "พระอุบาลีเดิมเป็นนายภูษามาลา เลิศทางทรงจำพระวินัยปิฎก",
    "reference": "พุทธานุพุทธประวัติ พระอุบาลี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-007",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๕",
    "question": "พระสีวลีเถระ ได้รับยกย่องสรรเสริญว่าเป็นเลิศในด้านใด?",
    "options": [
      "ผู้มีลาภสักการะมาก (ลาภีนัง)",
      "ผู้มีปัญญามาก",
      "ผู้มีฤทธิ์มาก",
      "ผู้มีอายุยืน"
    ],
    "correctIndex": 0,
    "explanation": "พระสีวลีอุดมสมบูรณ์ด้วยปัจจัย ๔ ไม่ว่าจะจาริกไปในถิ่นทุรกันดารใด",
    "reference": "พุทธานุพุทธประวัติ พระสีวลี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-008",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระมหากัจจายนเถระ ได้รับยกย่องเป็นเอตทัคคะด้านใด?",
    "options": [
      "ผู้อธิบายเนื้อความย่อให้พิสดารได้อย่างยอดเยี่ยม",
      "ผู้ตรัสรู้เร็ว",
      "ผู้มีบริวารมาก",
      "ผู้มีเสียงไพเราะ"
    ],
    "correctIndex": 0,
    "explanation": "พระมหากัจจายนะฉลาดในการจำแนกอรรถธรรมที่พระพุทธองค์ตรัสย่อให้เข้าใจละเอียด",
    "reference": "พุทธานุพุทธประวัติ พระมหากัจจายนะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-009",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "พระราหุลเถระ พระโอรสของพระพุทธเจ้า ได้รับยกย่องในด้านใด?",
    "options": [
      "ผู้ใคร่ต่อการศึกษาและฝึกฝนตนเอง (สิกขากามานัง)",
      "ผู้มีความกตัญญู",
      "ผู้มีรูปงาม",
      "ผู้รักสันโดษ"
    ],
    "correctIndex": 0,
    "explanation": "พระราหุลกอบทรายเต็มกำมือทุกเช้าตั้งจิตอธิษฐานขอให้ได้คำสอนมากเท่าเม็ดทราย",
    "reference": "พุทธานุพุทธประวัติ พระราหุล",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-010",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "พระปุณณมันตานีบุตรเถระ ได้รับยกย่องเป็นเอตทัคคะด้านใด?",
    "options": [
      "ผู้เป็นธรรมกถึก (นักเทศน์ผู้ยอดเยี่ยม)",
      "ผู้บรรลุธรรมด้วยปัญญา",
      "ผู้มีวิหารธรรม",
      "ผู้เป็นที่รักของเทวดา"
    ],
    "correctIndex": 0,
    "explanation": "พระปุณณมันตานีบุตรเลิศทางแสดงธรรมกถา (เทศนาสั่งสอน)",
    "reference": "พุทธานุพุทธประวัติ พระปุณณมันตานีบุตร",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-011",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "พระโสณโกฬิวิสะ ได้รับยกย่องในด้านใดหลังบรรลุธรรมจากคำสอนพิณ ๓ สาย?",
    "options": [
      "ผู้ปรารภความเพียร (ปรารภวิริยะ)",
      "ผู้มีความกตัญญู",
      "ผู้มีลาภมาก",
      "ผู้มีเสียงไพเราะ"
    ],
    "correctIndex": 0,
    "explanation": "พระโสณโกฬิวิสะตั้งใจเดินจงกรมจนเท้าแตก ได้รับยกย่องเป็นผู้เลิศทางปรารภความเพียร",
    "reference": "พุทธานุพุทธประวัติ พระโสณโกฬิวิสะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-012",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "พระรัฐบาลเถระ ผู้ยอมอดอาหารเพื่อขอบวช ได้รับยกย่องด้านใด?",
    "options": [
      "ผู้บวชด้วยศรัทธาแท้จริง (สัทธาปัพพชิตานัง)",
      "ผู้บวชโดยถือธุดงค์",
      "ผู้มีรูปงาม",
      "ผู้ทรงวินัย"
    ],
    "correctIndex": 0,
    "explanation": "พระรัฐบาลสละกองสมบัติมหาศาล บวชด้วยพลังศรัทธาอันบริสุทธิ์",
    "reference": "พุทธานุพุทธประวัติ พระรัฐบาล",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-013",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๓",
    "question": "พระจูฬปันถกเถระ ได้รับยกย่องเป็นเอตทัคคะในด้านใด?",
    "options": [
      "ผู้เนรมิตกายอันสำเร็จด้วยใจ (มโนมยิทธิ) และฉลาดในเจโตวิวัฏฏ์",
      "ผู้จำพระสูตรเก่ง",
      "ผู้มีเสียงกังวาน",
      "ผู้รู้ราตรีนาน"
    ],
    "correctIndex": 0,
    "explanation": "พระจูฬปันถกเชี่ยวชาญการเนรมิตกายทิพย์นับพันรูปและชำนาญฌานสมาบัติ",
    "reference": "พุทธานุพุทธประวัติ พระจูฬปันถก",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-014",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๔",
    "question": "พระกุณฑธานเถระ ได้รับยกย่องจากพระพุทธเจ้าในด้านใด?",
    "options": [
      "ผู้จับสลากเป็นปฐม (ได้สลากภัตก่อนใคร)",
      "ผู้มีเสียงดังกังวาน",
      "ผู้ยินดีในป่า",
      "ผู้เชี่ยวชาญพระสูตร"
    ],
    "correctIndex": 0,
    "explanation": "พระกุณฑธานะได้รับยกย่องเป็นผู้จับสลากภัตเป็นคนแรกเสมอ",
    "reference": "พุทธานุพุทธประวัติ พระกุณฑธานะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-015",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๕",
    "question": "พระภัททิยกษัตริย์ ได้รับยกย่องเป็นเอตทัคคะด้านใด?",
    "options": [
      "ผู้เกิดในตระกูลสูงส่ง (อุจจกุลีนัง)",
      "ผู้มีทรัพย์มหาศาล",
      "ผู้มีความเพียร",
      "ผู้มีปัญญา"
    ],
    "correctIndex": 0,
    "explanation": "พระภัททิยกาฬิโคธาบุตร เลิศทางเกิดในตระกูลสูง (กษัตริย์ศากยะ)",
    "reference": "พุทธานุพุทธประวัติ พระภัททิยะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-016",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "พระอัญญาโกณฑัญญเถระ ได้รับยกย่องเป็นเอตทัคคะด้านใด?",
    "options": [
      "ผู้เป็นรัตตัญญู (ผู้รู้ราตรีนาน รู้ธรรมก่อนใคร)",
      "ผู้มีอายุยืน",
      "ผู้มีปัญญา",
      "ผู้ทรงวินัย"
    ],
    "correctIndex": 0,
    "explanation": "พระโกณฑัญญะเป็นปฐมสาวก ได้รับยกย่องเป็นผู้รู้ราตรีนาน (บวชก่อนใคร)",
    "reference": "พุทธานุพุทธประวัติ พระโกณฑัญญะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-017",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "พระวังคีสเถระ ได้รับยกย่องเป็นเอตทัคคะด้านใด?",
    "options": [
      "ผู้มีปฏิภาณกวี แต่งคาถาสรรเสริญธรรมได้ฉับพลัน",
      "ผู้ทรงจำพระไตรปิฎก",
      "ผู้มีเสียงก้องกังวาน",
      "ผู้เชี่ยวชาญพระวินัย"
    ],
    "correctIndex": 0,
    "explanation": "พระวังคีสะเลิศทางปฏิภาณ ฉลาดในการประพันธ์คาถาภาษิตได้อย่างไพเราะทันท่วงที",
    "reference": "พุทธานุพุทธประวัติ พระวังคีสะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-018",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "พระเรวตขทิรวนิยเถระ (น้องชายพระสารีบุตร) ได้รับยกย่องในด้านใด?",
    "options": [
      "ผู้อยู่ป่าเป็นวัตร (อรัญญิกานัง)",
      "ผู้มีปัญญาเหมือนพี่ชาย",
      "ผู้มีลาภมาก",
      "ผู้เชี่ยวชาญพระวินัย"
    ],
    "correctIndex": 0,
    "explanation": "พระเรวตะยินดีในการจำพรรษาในป่าไม้ตะเคียนอันสงบวิเวก",
    "reference": "พุทธานุพุทธประวัติ พระเรวตะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-019",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "พระมหากัปปินเถระ ได้รับยกย่องในด้านใด?",
    "options": [
      "ผู้ให้โอวาทสั่งสอนภิกษุได้ยอดเยี่ยม (ภิกขุโอวาทกานัง)",
      "ผู้มีฝีมือการรบ",
      "ผู้มีความสงบ",
      "ผู้มีจิตเมตตา"
    ],
    "correctIndex": 0,
    "explanation": "พระมหากัปปินะเดิมเป็นพระราชา เลิศทางสั่งสอนและให้โอวาทแก่ภิกษุสงฆ์",
    "reference": "พุทธานุพุทธประวัติ พระมหากัปปินะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-020",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "พระพาหิยทารุจีริยะ ได้รับการยกย่องในตำแหน่งใด?",
    "options": [
      "ผู้ตรัสรู้ธรรมได้เร็วพลันที่สุด (ขิปปาภิญญานัง)",
      "ผู้มีผ้าบังสุกุลดีที่สุด",
      "ผู้ทรงปัญญา",
      "ผู้ไม่เจ็บป่วย"
    ],
    "correctIndex": 0,
    "explanation": "พระพาหิยะฟังธรรมเพียงสั้นๆ ว่า 'เห็นสักแต่ว่าเห็น' ก็บรรลุพระอรหันต์ทันที",
    "reference": "พุทธานุพุทธประวัติ พระพาหิยะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-021",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๓",
    "question": "พระอุรุเวลกัสสปเถระ ได้รับยกย่องเป็นเอตทัคคะด้านใด?",
    "options": [
      "ผู้มีบริวารมาก (มหปริวารานัง)",
      "ผู้บูชาไฟ",
      "ผู้มีอายุยืน",
      "ผู้มีญาณกว้างไกล"
    ],
    "correctIndex": 0,
    "explanation": "พระอุรุเวลกัสสปะมีบริวารติดตามบวชถึง ๑,๐๐๐ รูป",
    "reference": "พุทธานุพุทธประวัติ พระอุรุเวลกัสสปะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-022",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๔",
    "question": "พระวักกลิเถระ ได้รับยกย่องด้านใดหลังจากบรรลุธรรม?",
    "options": [
      "ผู้หลุดพ้นด้วยศรัทธา (สัทธาวิมุตตานัง)",
      "ผู้มีดวงตางดงาม",
      "ผู้เลิศทางความเพียร",
      "ผู้เลิศทางความอดทน"
    ],
    "correctIndex": 0,
    "explanation": "พระวักกลิเลิกติดในรูปกายและหันมาเห็นธรรมจนหลุดพ้นด้วยศรัทธาอันแก่กล้า",
    "reference": "พุทธานุพุทธประวัติ พระวักกลิ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-023",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๕",
    "question": "พระลกุณฏกภัททิยะ ได้รับยกย่องด้านใด?",
    "options": [
      "ผู้มีเสียงแสดงธรรมไพเราะก้องกังวาน (มัญชุสสรานัง)",
      "ผู้มีความอดกลั้น",
      "ผู้มีปัญญา",
      "ผู้มีจิตอ่อนโยน"
    ],
    "correctIndex": 0,
    "explanation": "พระลกุณฏกภัททิยะแม้ร่างเตี้ยค่อมแต่มีเสียงแสดงธรรมไพเราะน่าฟังยิ่ง",
    "reference": "พุทธานุพุทธประวัติ พระลกุณฏกภัททิยะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-024",
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
    "explanation": "พระมหากัจจายนะประกาศพระศาสนา ณ แคว้นอวันตี เมืองอุชเชนี",
    "reference": "พุทธานุพุทธประวัติ พระมหากัจจายนะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-025",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "การทำปฐมสังคายนา มีพระมหาเถระรูปใดเป็นประธานสงฆ์และเป็นผู้สอบถามพระธรรมวินัย?",
    "options": [
      "พระมหากัสสปเถระ",
      "พระอานนท์",
      "พระอุบาลี",
      "พระอนุรุทธะ"
    ],
    "correctIndex": 0,
    "explanation": "พระมหากัสสปเถระเป็นประธานซักถามพระธรรมวินัย ณ ถ้ำสัตตบรรณคูหา",
    "reference": "ประวัติการสังคายนา พระมหากัสสปะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-026",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 2 ข้อ 26] พระสารีบุตรเถระ ได้รับยกย่องเป็นพระอัครสาวกเบื้องขวา เลิศในด้านใด?",
    "options": [
      "ผู้มีปัญญามาก (มหัปปัญญานัง)",
      "ผู้มีฤทธิ์มาก",
      "ผู้มีลาภมาก",
      "ผู้ทรงธุดงค์"
    ],
    "correctIndex": 0,
    "explanation": "พระสารีบุตรได้รับยกย่องเป็นเลิศทางด้านมีปัญญามาก เป็นธรรมเสนาบดี",
    "reference": "พุทธานุพุทธประวัติ พระสารีบุตร",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-027",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 2 ข้อ 27] พระมหาโมคคัลลานเถระ ได้รับยกย่องเป็นพระอัครสาวกเบื้องซ้าย เลิศในด้านใด?",
    "options": [
      "ผู้มีฤทธิ์มาก (อิทธิมันตานัง)",
      "ผู้มีปัญญามาก",
      "ผู้ทรงวินัย",
      "ผู้มีเสียงไพเราะ"
    ],
    "correctIndex": 0,
    "explanation": "พระมหาโมคคัลลานะเลิศทางด้านมีอิทธิฤทธิ์มาก",
    "reference": "พุทธานุพุทธประวัติ พระโมคคัลลานะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-028",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 2 ข้อ 28] พระมหากัสสปเถระ ได้รับยกย่องเป็นเอตทัคคะด้านใด?",
    "options": [
      "ผู้ถือธุดงค์และสรรเสริญการถือธุดงค์ (ธุตวาทานัง)",
      "ผู้มีลาภมาก",
      "ผู้เป็นพหูสูต",
      "ผู้มีทิพยจักษุ"
    ],
    "correctIndex": 0,
    "explanation": "พระมหากัสสปะถือธุดงค์ ๑๓ ประการเคร่งครัดและเป็นประธานปฐมสังคายนา",
    "reference": "พุทธานุพุทธประวัติ พระมหากัสสปะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-029",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 2 ข้อ 29] พระอานนทเถระ ได้รับยกย่องเอตทัคคะถึง ๕ ประการ ข้อใดมิใช่ ๑ ในนั้น?",
    "options": [
      "ผู้มีฤทธิ์เหาะเหินเดินอากาศ",
      "ผู้เป็นพหูสูต",
      "ผู้มีสติจำทรง",
      "ยอดอุปัฏฐาก"
    ],
    "correctIndex": 0,
    "explanation": "พระอานนท์เลิศด้าน พหูสูต สติ คติ ธิติ และยอดอุปัฏฐาก",
    "reference": "พุทธานุพุทธประวัติ พระอานนท์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-030",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 2 ข้อ 30] พระอนุรุทธเถระ ได้รับยกย่องในตำแหน่งเอตทัคคะด้านใด?",
    "options": [
      "ผู้มีทิพยจักษุญาณ (ตาทิพย์)",
      "ผู้มีวาจาไพเราะ",
      "ผู้มีลาภมาก",
      "ผู้มีปัญญา"
    ],
    "correctIndex": 0,
    "explanation": "พระอนุรุทธะเลิศทางทิพยจักษุญาณ",
    "reference": "พุทธานุพุทธประวัติ พระอนุรุทธะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-031",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 2 ข้อ 31] พระอุบาลีเถระ ได้รับยกย่องเป็นเอตทัคคะด้านใด?",
    "options": [
      "ผู้ทรงจำและเชี่ยวชาญพระวินัย (วินัยธร)",
      "ผู้ทรงพระสูตร",
      "ผู้แสดงธรรม",
      "ผู้ยินดีในป่า"
    ],
    "correctIndex": 0,
    "explanation": "พระอุบาลีเดิมเป็นนายภูษามาลา เลิศทางทรงจำพระวินัยปิฎก",
    "reference": "พุทธานุพุทธประวัติ พระอุบาลี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-032",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 2 ข้อ 32] พระสีวลีเถระ ได้รับยกย่องสรรเสริญว่าเป็นเลิศในด้านใด?",
    "options": [
      "ผู้มีลาภสักการะมาก (ลาภีนัง)",
      "ผู้มีปัญญามาก",
      "ผู้มีฤทธิ์มาก",
      "ผู้มีอายุยืน"
    ],
    "correctIndex": 0,
    "explanation": "พระสีวลีอุดมสมบูรณ์ด้วยปัจจัย ๔ ไม่ว่าจะจาริกไปในถิ่นทุรกันดารใด",
    "reference": "พุทธานุพุทธประวัติ พระสีวลี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-033",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 2 ข้อ 33] พระมหากัจจายนเถระ ได้รับยกย่องเป็นเอตทัคคะด้านใด?",
    "options": [
      "ผู้อธิบายเนื้อความย่อให้พิสดารได้อย่างยอดเยี่ยม",
      "ผู้ตรัสรู้เร็ว",
      "ผู้มีบริวารมาก",
      "ผู้มีเสียงไพเราะ"
    ],
    "correctIndex": 0,
    "explanation": "พระมหากัจจายนะฉลาดในการจำแนกอรรถธรรมที่พระพุทธองค์ตรัสย่อให้เข้าใจละเอียด",
    "reference": "พุทธานุพุทธประวัติ พระมหากัจจายนะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-034",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 2 ข้อ 34] พระราหุลเถระ พระโอรสของพระพุทธเจ้า ได้รับยกย่องในด้านใด?",
    "options": [
      "ผู้ใคร่ต่อการศึกษาและฝึกฝนตนเอง (สิกขากามานัง)",
      "ผู้มีความกตัญญู",
      "ผู้มีรูปงาม",
      "ผู้รักสันโดษ"
    ],
    "correctIndex": 0,
    "explanation": "พระราหุลกอบทรายเต็มกำมือทุกเช้าตั้งจิตอธิษฐานขอให้ได้คำสอนมากเท่าเม็ดทราย",
    "reference": "พุทธานุพุทธประวัติ พระราหุล",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-035",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 2 ข้อ 35] พระปุณณมันตานีบุตรเถระ ได้รับยกย่องเป็นเอตทัคคะด้านใด?",
    "options": [
      "ผู้เป็นธรรมกถึก (นักเทศน์ผู้ยอดเยี่ยม)",
      "ผู้บรรลุธรรมด้วยปัญญา",
      "ผู้มีวิหารธรรม",
      "ผู้เป็นที่รักของเทวดา"
    ],
    "correctIndex": 0,
    "explanation": "พระปุณณมันตานีบุตรเลิศทางแสดงธรรมกถา (เทศนาสั่งสอน)",
    "reference": "พุทธานุพุทธประวัติ พระปุณณมันตานีบุตร",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-036",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 2 ข้อ 36] พระโสณโกฬิวิสะ ได้รับยกย่องในด้านใดหลังบรรลุธรรมจากคำสอนพิณ ๓ สาย?",
    "options": [
      "ผู้ปรารภความเพียร (ปรารภวิริยะ)",
      "ผู้มีความกตัญญู",
      "ผู้มีลาภมาก",
      "ผู้มีเสียงไพเราะ"
    ],
    "correctIndex": 0,
    "explanation": "พระโสณโกฬิวิสะตั้งใจเดินจงกรมจนเท้าแตก ได้รับยกย่องเป็นผู้เลิศทางปรารภความเพียร",
    "reference": "พุทธานุพุทธประวัติ พระโสณโกฬิวิสะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-037",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 2 ข้อ 37] พระรัฐบาลเถระ ผู้ยอมอดอาหารเพื่อขอบวช ได้รับยกย่องด้านใด?",
    "options": [
      "ผู้บวชด้วยศรัทธาแท้จริง (สัทธาปัพพชิตานัง)",
      "ผู้บวชโดยถือธุดงค์",
      "ผู้มีรูปงาม",
      "ผู้ทรงวินัย"
    ],
    "correctIndex": 0,
    "explanation": "พระรัฐบาลสละกองสมบัติมหาศาล บวชด้วยพลังศรัทธาอันบริสุทธิ์",
    "reference": "พุทธานุพุทธประวัติ พระรัฐบาล",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-038",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 2 ข้อ 38] พระจูฬปันถกเถระ ได้รับยกย่องเป็นเอตทัคคะในด้านใด?",
    "options": [
      "ผู้เนรมิตกายอันสำเร็จด้วยใจ (มโนมยิทธิ) และฉลาดในเจโตวิวัฏฏ์",
      "ผู้จำพระสูตรเก่ง",
      "ผู้มีเสียงกังวาน",
      "ผู้รู้ราตรีนาน"
    ],
    "correctIndex": 0,
    "explanation": "พระจูฬปันถกเชี่ยวชาญการเนรมิตกายทิพย์นับพันรูปและชำนาญฌานสมาบัติ",
    "reference": "พุทธานุพุทธประวัติ พระจูฬปันถก",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-039",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 2 ข้อ 39] พระกุณฑธานเถระ ได้รับยกย่องจากพระพุทธเจ้าในด้านใด?",
    "options": [
      "ผู้จับสลากเป็นปฐม (ได้สลากภัตก่อนใคร)",
      "ผู้มีเสียงดังกังวาน",
      "ผู้ยินดีในป่า",
      "ผู้เชี่ยวชาญพระสูตร"
    ],
    "correctIndex": 0,
    "explanation": "พระกุณฑธานะได้รับยกย่องเป็นผู้จับสลากภัตเป็นคนแรกเสมอ",
    "reference": "พุทธานุพุทธประวัติ พระกุณฑธานะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-040",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 2 ข้อ 40] พระภัททิยกษัตริย์ ได้รับยกย่องเป็นเอตทัคคะด้านใด?",
    "options": [
      "ผู้เกิดในตระกูลสูงส่ง (อุจจกุลีนัง)",
      "ผู้มีทรัพย์มหาศาล",
      "ผู้มีความเพียร",
      "ผู้มีปัญญา"
    ],
    "correctIndex": 0,
    "explanation": "พระภัททิยกาฬิโคธาบุตร เลิศทางเกิดในตระกูลสูง (กษัตริย์ศากยะ)",
    "reference": "พุทธานุพุทธประวัติ พระภัททิยะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-041",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 2 ข้อ 41] พระอัญญาโกณฑัญญเถระ ได้รับยกย่องเป็นเอตทัคคะด้านใด?",
    "options": [
      "ผู้เป็นรัตตัญญู (ผู้รู้ราตรีนาน รู้ธรรมก่อนใคร)",
      "ผู้มีอายุยืน",
      "ผู้มีปัญญา",
      "ผู้ทรงวินัย"
    ],
    "correctIndex": 0,
    "explanation": "พระโกณฑัญญะเป็นปฐมสาวก ได้รับยกย่องเป็นผู้รู้ราตรีนาน (บวชก่อนใคร)",
    "reference": "พุทธานุพุทธประวัติ พระโกณฑัญญะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-042",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 2 ข้อ 42] พระวังคีสเถระ ได้รับยกย่องเป็นเอตทัคคะด้านใด?",
    "options": [
      "ผู้มีปฏิภาณกวี แต่งคาถาสรรเสริญธรรมได้ฉับพลัน",
      "ผู้ทรงจำพระไตรปิฎก",
      "ผู้มีเสียงก้องกังวาน",
      "ผู้เชี่ยวชาญพระวินัย"
    ],
    "correctIndex": 0,
    "explanation": "พระวังคีสะเลิศทางปฏิภาณ ฉลาดในการประพันธ์คาถาภาษิตได้อย่างไพเราะทันท่วงที",
    "reference": "พุทธานุพุทธประวัติ พระวังคีสะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-043",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 2 ข้อ 43] พระเรวตขทิรวนิยเถระ (น้องชายพระสารีบุตร) ได้รับยกย่องในด้านใด?",
    "options": [
      "ผู้อยู่ป่าเป็นวัตร (อรัญญิกานัง)",
      "ผู้มีปัญญาเหมือนพี่ชาย",
      "ผู้มีลาภมาก",
      "ผู้เชี่ยวชาญพระวินัย"
    ],
    "correctIndex": 0,
    "explanation": "พระเรวตะยินดีในการจำพรรษาในป่าไม้ตะเคียนอันสงบวิเวก",
    "reference": "พุทธานุพุทธประวัติ พระเรวตะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-044",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 2 ข้อ 44] พระมหากัปปินเถระ ได้รับยกย่องในด้านใด?",
    "options": [
      "ผู้ให้โอวาทสั่งสอนภิกษุได้ยอดเยี่ยม (ภิกขุโอวาทกานัง)",
      "ผู้มีฝีมือการรบ",
      "ผู้มีความสงบ",
      "ผู้มีจิตเมตตา"
    ],
    "correctIndex": 0,
    "explanation": "พระมหากัปปินะเดิมเป็นพระราชา เลิศทางสั่งสอนและให้โอวาทแก่ภิกษุสงฆ์",
    "reference": "พุทธานุพุทธประวัติ พระมหากัปปินะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-045",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 2 ข้อ 45] พระพาหิยทารุจีริยะ ได้รับการยกย่องในตำแหน่งใด?",
    "options": [
      "ผู้ตรัสรู้ธรรมได้เร็วพลันที่สุด (ขิปปาภิญญานัง)",
      "ผู้มีผ้าบังสุกุลดีที่สุด",
      "ผู้ทรงปัญญา",
      "ผู้ไม่เจ็บป่วย"
    ],
    "correctIndex": 0,
    "explanation": "พระพาหิยะฟังธรรมเพียงสั้นๆ ว่า 'เห็นสักแต่ว่าเห็น' ก็บรรลุพระอรหันต์ทันที",
    "reference": "พุทธานุพุทธประวัติ พระพาหิยะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-046",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 2 ข้อ 46] พระอุรุเวลกัสสปเถระ ได้รับยกย่องเป็นเอตทัคคะด้านใด?",
    "options": [
      "ผู้มีบริวารมาก (มหปริวารานัง)",
      "ผู้บูชาไฟ",
      "ผู้มีอายุยืน",
      "ผู้มีญาณกว้างไกล"
    ],
    "correctIndex": 0,
    "explanation": "พระอุรุเวลกัสสปะมีบริวารติดตามบวชถึง ๑,๐๐๐ รูป",
    "reference": "พุทธานุพุทธประวัติ พระอุรุเวลกัสสปะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-047",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 2 ข้อ 47] พระวักกลิเถระ ได้รับยกย่องด้านใดหลังจากบรรลุธรรม?",
    "options": [
      "ผู้หลุดพ้นด้วยศรัทธา (สัทธาวิมุตตานัง)",
      "ผู้มีดวงตางดงาม",
      "ผู้เลิศทางความเพียร",
      "ผู้เลิศทางความอดทน"
    ],
    "correctIndex": 0,
    "explanation": "พระวักกลิเลิกติดในรูปกายและหันมาเห็นธรรมจนหลุดพ้นด้วยศรัทธาอันแก่กล้า",
    "reference": "พุทธานุพุทธประวัติ พระวักกลิ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-048",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 2 ข้อ 48] พระลกุณฏกภัททิยะ ได้รับยกย่องด้านใด?",
    "options": [
      "ผู้มีเสียงแสดงธรรมไพเราะก้องกังวาน (มัญชุสสรานัง)",
      "ผู้มีความอดกลั้น",
      "ผู้มีปัญญา",
      "ผู้มีจิตอ่อนโยน"
    ],
    "correctIndex": 0,
    "explanation": "พระลกุณฏกภัททิยะแม้ร่างเตี้ยค่อมแต่มีเสียงแสดงธรรมไพเราะน่าฟังยิ่ง",
    "reference": "พุทธานุพุทธประวัติ พระลกุณฏกภัททิยะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-049",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 2 ข้อ 49] พระมหากัจจายนะ มีบทบาทสำคัญในการเผยแผ่พระพุทธศาสนาในแคว้นใดเป็นหลัก?",
    "options": [
      "แคว้นอวันตี เมืองอุชเชนี",
      "แคว้นมคธ",
      "แคว้นโกศล",
      "แคว้นวัชชี"
    ],
    "correctIndex": 0,
    "explanation": "พระมหากัจจายนะประกาศพระศาสนา ณ แคว้นอวันตี เมืองอุชเชนี",
    "reference": "พุทธานุพุทธประวัติ พระมหากัจจายนะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-050",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 2 ข้อ 50] การทำปฐมสังคายนา มีพระมหาเถระรูปใดเป็นประธานสงฆ์และเป็นผู้สอบถามพระธรรมวินัย?",
    "options": [
      "พระมหากัสสปเถระ",
      "พระอานนท์",
      "พระอุบาลี",
      "พระอนุรุทธะ"
    ],
    "correctIndex": 0,
    "explanation": "พระมหากัสสปเถระเป็นประธานซักถามพระธรรมวินัย ณ ถ้ำสัตตบรรณคูหา",
    "reference": "ประวัติการสังคายนา พระมหากัสสปะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-051",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 3 ข้อ 51] พระสารีบุตรเถระ ได้รับยกย่องเป็นพระอัครสาวกเบื้องขวา เลิศในด้านใด?",
    "options": [
      "ผู้มีปัญญามาก (มหัปปัญญานัง)",
      "ผู้มีฤทธิ์มาก",
      "ผู้มีลาภมาก",
      "ผู้ทรงธุดงค์"
    ],
    "correctIndex": 0,
    "explanation": "พระสารีบุตรได้รับยกย่องเป็นเลิศทางด้านมีปัญญามาก เป็นธรรมเสนาบดี",
    "reference": "พุทธานุพุทธประวัติ พระสารีบุตร",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-052",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 3 ข้อ 52] พระมหาโมคคัลลานเถระ ได้รับยกย่องเป็นพระอัครสาวกเบื้องซ้าย เลิศในด้านใด?",
    "options": [
      "ผู้มีฤทธิ์มาก (อิทธิมันตานัง)",
      "ผู้มีปัญญามาก",
      "ผู้ทรงวินัย",
      "ผู้มีเสียงไพเราะ"
    ],
    "correctIndex": 0,
    "explanation": "พระมหาโมคคัลลานะเลิศทางด้านมีอิทธิฤทธิ์มาก",
    "reference": "พุทธานุพุทธประวัติ พระโมคคัลลานะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-053",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 3 ข้อ 53] พระมหากัสสปเถระ ได้รับยกย่องเป็นเอตทัคคะด้านใด?",
    "options": [
      "ผู้ถือธุดงค์และสรรเสริญการถือธุดงค์ (ธุตวาทานัง)",
      "ผู้มีลาภมาก",
      "ผู้เป็นพหูสูต",
      "ผู้มีทิพยจักษุ"
    ],
    "correctIndex": 0,
    "explanation": "พระมหากัสสปะถือธุดงค์ ๑๓ ประการเคร่งครัดและเป็นประธานปฐมสังคายนา",
    "reference": "พุทธานุพุทธประวัติ พระมหากัสสปะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-054",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 3 ข้อ 54] พระอานนทเถระ ได้รับยกย่องเอตทัคคะถึง ๕ ประการ ข้อใดมิใช่ ๑ ในนั้น?",
    "options": [
      "ผู้มีฤทธิ์เหาะเหินเดินอากาศ",
      "ผู้เป็นพหูสูต",
      "ผู้มีสติจำทรง",
      "ยอดอุปัฏฐาก"
    ],
    "correctIndex": 0,
    "explanation": "พระอานนท์เลิศด้าน พหูสูต สติ คติ ธิติ และยอดอุปัฏฐาก",
    "reference": "พุทธานุพุทธประวัติ พระอานนท์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-055",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 3 ข้อ 55] พระอนุรุทธเถระ ได้รับยกย่องในตำแหน่งเอตทัคคะด้านใด?",
    "options": [
      "ผู้มีทิพยจักษุญาณ (ตาทิพย์)",
      "ผู้มีวาจาไพเราะ",
      "ผู้มีลาภมาก",
      "ผู้มีปัญญา"
    ],
    "correctIndex": 0,
    "explanation": "พระอนุรุทธะเลิศทางทิพยจักษุญาณ",
    "reference": "พุทธานุพุทธประวัติ พระอนุรุทธะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-056",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 3 ข้อ 56] พระอุบาลีเถระ ได้รับยกย่องเป็นเอตทัคคะด้านใด?",
    "options": [
      "ผู้ทรงจำและเชี่ยวชาญพระวินัย (วินัยธร)",
      "ผู้ทรงพระสูตร",
      "ผู้แสดงธรรม",
      "ผู้ยินดีในป่า"
    ],
    "correctIndex": 0,
    "explanation": "พระอุบาลีเดิมเป็นนายภูษามาลา เลิศทางทรงจำพระวินัยปิฎก",
    "reference": "พุทธานุพุทธประวัติ พระอุบาลี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-057",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 3 ข้อ 57] พระสีวลีเถระ ได้รับยกย่องสรรเสริญว่าเป็นเลิศในด้านใด?",
    "options": [
      "ผู้มีลาภสักการะมาก (ลาภีนัง)",
      "ผู้มีปัญญามาก",
      "ผู้มีฤทธิ์มาก",
      "ผู้มีอายุยืน"
    ],
    "correctIndex": 0,
    "explanation": "พระสีวลีอุดมสมบูรณ์ด้วยปัจจัย ๔ ไม่ว่าจะจาริกไปในถิ่นทุรกันดารใด",
    "reference": "พุทธานุพุทธประวัติ พระสีวลี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-058",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 3 ข้อ 58] พระมหากัจจายนเถระ ได้รับยกย่องเป็นเอตทัคคะด้านใด?",
    "options": [
      "ผู้อธิบายเนื้อความย่อให้พิสดารได้อย่างยอดเยี่ยม",
      "ผู้ตรัสรู้เร็ว",
      "ผู้มีบริวารมาก",
      "ผู้มีเสียงไพเราะ"
    ],
    "correctIndex": 0,
    "explanation": "พระมหากัจจายนะฉลาดในการจำแนกอรรถธรรมที่พระพุทธองค์ตรัสย่อให้เข้าใจละเอียด",
    "reference": "พุทธานุพุทธประวัติ พระมหากัจจายนะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-059",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 3 ข้อ 59] พระราหุลเถระ พระโอรสของพระพุทธเจ้า ได้รับยกย่องในด้านใด?",
    "options": [
      "ผู้ใคร่ต่อการศึกษาและฝึกฝนตนเอง (สิกขากามานัง)",
      "ผู้มีความกตัญญู",
      "ผู้มีรูปงาม",
      "ผู้รักสันโดษ"
    ],
    "correctIndex": 0,
    "explanation": "พระราหุลกอบทรายเต็มกำมือทุกเช้าตั้งจิตอธิษฐานขอให้ได้คำสอนมากเท่าเม็ดทราย",
    "reference": "พุทธานุพุทธประวัติ พระราหุล",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-060",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 3 ข้อ 60] พระปุณณมันตานีบุตรเถระ ได้รับยกย่องเป็นเอตทัคคะด้านใด?",
    "options": [
      "ผู้เป็นธรรมกถึก (นักเทศน์ผู้ยอดเยี่ยม)",
      "ผู้บรรลุธรรมด้วยปัญญา",
      "ผู้มีวิหารธรรม",
      "ผู้เป็นที่รักของเทวดา"
    ],
    "correctIndex": 0,
    "explanation": "พระปุณณมันตานีบุตรเลิศทางแสดงธรรมกถา (เทศนาสั่งสอน)",
    "reference": "พุทธานุพุทธประวัติ พระปุณณมันตานีบุตร",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-061",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 3 ข้อ 61] พระโสณโกฬิวิสะ ได้รับยกย่องในด้านใดหลังบรรลุธรรมจากคำสอนพิณ ๓ สาย?",
    "options": [
      "ผู้ปรารภความเพียร (ปรารภวิริยะ)",
      "ผู้มีความกตัญญู",
      "ผู้มีลาภมาก",
      "ผู้มีเสียงไพเราะ"
    ],
    "correctIndex": 0,
    "explanation": "พระโสณโกฬิวิสะตั้งใจเดินจงกรมจนเท้าแตก ได้รับยกย่องเป็นผู้เลิศทางปรารภความเพียร",
    "reference": "พุทธานุพุทธประวัติ พระโสณโกฬิวิสะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-062",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 3 ข้อ 62] พระรัฐบาลเถระ ผู้ยอมอดอาหารเพื่อขอบวช ได้รับยกย่องด้านใด?",
    "options": [
      "ผู้บวชด้วยศรัทธาแท้จริง (สัทธาปัพพชิตานัง)",
      "ผู้บวชโดยถือธุดงค์",
      "ผู้มีรูปงาม",
      "ผู้ทรงวินัย"
    ],
    "correctIndex": 0,
    "explanation": "พระรัฐบาลสละกองสมบัติมหาศาล บวชด้วยพลังศรัทธาอันบริสุทธิ์",
    "reference": "พุทธานุพุทธประวัติ พระรัฐบาล",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-063",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 3 ข้อ 63] พระจูฬปันถกเถระ ได้รับยกย่องเป็นเอตทัคคะในด้านใด?",
    "options": [
      "ผู้เนรมิตกายอันสำเร็จด้วยใจ (มโนมยิทธิ) และฉลาดในเจโตวิวัฏฏ์",
      "ผู้จำพระสูตรเก่ง",
      "ผู้มีเสียงกังวาน",
      "ผู้รู้ราตรีนาน"
    ],
    "correctIndex": 0,
    "explanation": "พระจูฬปันถกเชี่ยวชาญการเนรมิตกายทิพย์นับพันรูปและชำนาญฌานสมาบัติ",
    "reference": "พุทธานุพุทธประวัติ พระจูฬปันถก",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-064",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 3 ข้อ 64] พระกุณฑธานเถระ ได้รับยกย่องจากพระพุทธเจ้าในด้านใด?",
    "options": [
      "ผู้จับสลากเป็นปฐม (ได้สลากภัตก่อนใคร)",
      "ผู้มีเสียงดังกังวาน",
      "ผู้ยินดีในป่า",
      "ผู้เชี่ยวชาญพระสูตร"
    ],
    "correctIndex": 0,
    "explanation": "พระกุณฑธานะได้รับยกย่องเป็นผู้จับสลากภัตเป็นคนแรกเสมอ",
    "reference": "พุทธานุพุทธประวัติ พระกุณฑธานะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-065",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 3 ข้อ 65] พระภัททิยกษัตริย์ ได้รับยกย่องเป็นเอตทัคคะด้านใด?",
    "options": [
      "ผู้เกิดในตระกูลสูงส่ง (อุจจกุลีนัง)",
      "ผู้มีทรัพย์มหาศาล",
      "ผู้มีความเพียร",
      "ผู้มีปัญญา"
    ],
    "correctIndex": 0,
    "explanation": "พระภัททิยกาฬิโคธาบุตร เลิศทางเกิดในตระกูลสูง (กษัตริย์ศากยะ)",
    "reference": "พุทธานุพุทธประวัติ พระภัททิยะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-066",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 3 ข้อ 66] พระอัญญาโกณฑัญญเถระ ได้รับยกย่องเป็นเอตทัคคะด้านใด?",
    "options": [
      "ผู้เป็นรัตตัญญู (ผู้รู้ราตรีนาน รู้ธรรมก่อนใคร)",
      "ผู้มีอายุยืน",
      "ผู้มีปัญญา",
      "ผู้ทรงวินัย"
    ],
    "correctIndex": 0,
    "explanation": "พระโกณฑัญญะเป็นปฐมสาวก ได้รับยกย่องเป็นผู้รู้ราตรีนาน (บวชก่อนใคร)",
    "reference": "พุทธานุพุทธประวัติ พระโกณฑัญญะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-067",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 3 ข้อ 67] พระวังคีสเถระ ได้รับยกย่องเป็นเอตทัคคะด้านใด?",
    "options": [
      "ผู้มีปฏิภาณกวี แต่งคาถาสรรเสริญธรรมได้ฉับพลัน",
      "ผู้ทรงจำพระไตรปิฎก",
      "ผู้มีเสียงก้องกังวาน",
      "ผู้เชี่ยวชาญพระวินัย"
    ],
    "correctIndex": 0,
    "explanation": "พระวังคีสะเลิศทางปฏิภาณ ฉลาดในการประพันธ์คาถาภาษิตได้อย่างไพเราะทันท่วงที",
    "reference": "พุทธานุพุทธประวัติ พระวังคีสะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-068",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 3 ข้อ 68] พระเรวตขทิรวนิยเถระ (น้องชายพระสารีบุตร) ได้รับยกย่องในด้านใด?",
    "options": [
      "ผู้อยู่ป่าเป็นวัตร (อรัญญิกานัง)",
      "ผู้มีปัญญาเหมือนพี่ชาย",
      "ผู้มีลาภมาก",
      "ผู้เชี่ยวชาญพระวินัย"
    ],
    "correctIndex": 0,
    "explanation": "พระเรวตะยินดีในการจำพรรษาในป่าไม้ตะเคียนอันสงบวิเวก",
    "reference": "พุทธานุพุทธประวัติ พระเรวตะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-069",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 3 ข้อ 69] พระมหากัปปินเถระ ได้รับยกย่องในด้านใด?",
    "options": [
      "ผู้ให้โอวาทสั่งสอนภิกษุได้ยอดเยี่ยม (ภิกขุโอวาทกานัง)",
      "ผู้มีฝีมือการรบ",
      "ผู้มีความสงบ",
      "ผู้มีจิตเมตตา"
    ],
    "correctIndex": 0,
    "explanation": "พระมหากัปปินะเดิมเป็นพระราชา เลิศทางสั่งสอนและให้โอวาทแก่ภิกษุสงฆ์",
    "reference": "พุทธานุพุทธประวัติ พระมหากัปปินะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-070",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 3 ข้อ 70] พระพาหิยทารุจีริยะ ได้รับการยกย่องในตำแหน่งใด?",
    "options": [
      "ผู้ตรัสรู้ธรรมได้เร็วพลันที่สุด (ขิปปาภิญญานัง)",
      "ผู้มีผ้าบังสุกุลดีที่สุด",
      "ผู้ทรงปัญญา",
      "ผู้ไม่เจ็บป่วย"
    ],
    "correctIndex": 0,
    "explanation": "พระพาหิยะฟังธรรมเพียงสั้นๆ ว่า 'เห็นสักแต่ว่าเห็น' ก็บรรลุพระอรหันต์ทันที",
    "reference": "พุทธานุพุทธประวัติ พระพาหิยะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-071",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 3 ข้อ 71] พระอุรุเวลกัสสปเถระ ได้รับยกย่องเป็นเอตทัคคะด้านใด?",
    "options": [
      "ผู้มีบริวารมาก (มหปริวารานัง)",
      "ผู้บูชาไฟ",
      "ผู้มีอายุยืน",
      "ผู้มีญาณกว้างไกล"
    ],
    "correctIndex": 0,
    "explanation": "พระอุรุเวลกัสสปะมีบริวารติดตามบวชถึง ๑,๐๐๐ รูป",
    "reference": "พุทธานุพุทธประวัติ พระอุรุเวลกัสสปะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-072",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 3 ข้อ 72] พระวักกลิเถระ ได้รับยกย่องด้านใดหลังจากบรรลุธรรม?",
    "options": [
      "ผู้หลุดพ้นด้วยศรัทธา (สัทธาวิมุตตานัง)",
      "ผู้มีดวงตางดงาม",
      "ผู้เลิศทางความเพียร",
      "ผู้เลิศทางความอดทน"
    ],
    "correctIndex": 0,
    "explanation": "พระวักกลิเลิกติดในรูปกายและหันมาเห็นธรรมจนหลุดพ้นด้วยศรัทธาอันแก่กล้า",
    "reference": "พุทธานุพุทธประวัติ พระวักกลิ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-073",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 3 ข้อ 73] พระลกุณฏกภัททิยะ ได้รับยกย่องด้านใด?",
    "options": [
      "ผู้มีเสียงแสดงธรรมไพเราะก้องกังวาน (มัญชุสสรานัง)",
      "ผู้มีความอดกลั้น",
      "ผู้มีปัญญา",
      "ผู้มีจิตอ่อนโยน"
    ],
    "correctIndex": 0,
    "explanation": "พระลกุณฏกภัททิยะแม้ร่างเตี้ยค่อมแต่มีเสียงแสดงธรรมไพเราะน่าฟังยิ่ง",
    "reference": "พุทธานุพุทธประวัติ พระลกุณฏกภัททิยะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-074",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 3 ข้อ 74] พระมหากัจจายนะ มีบทบาทสำคัญในการเผยแผ่พระพุทธศาสนาในแคว้นใดเป็นหลัก?",
    "options": [
      "แคว้นอวันตี เมืองอุชเชนี",
      "แคว้นมคธ",
      "แคว้นโกศล",
      "แคว้นวัชชี"
    ],
    "correctIndex": 0,
    "explanation": "พระมหากัจจายนะประกาศพระศาสนา ณ แคว้นอวันตี เมืองอุชเชนี",
    "reference": "พุทธานุพุทธประวัติ พระมหากัจจายนะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-075",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 3 ข้อ 75] การทำปฐมสังคายนา มีพระมหาเถระรูปใดเป็นประธานสงฆ์และเป็นผู้สอบถามพระธรรมวินัย?",
    "options": [
      "พระมหากัสสปเถระ",
      "พระอานนท์",
      "พระอุบาลี",
      "พระอนุรุทธะ"
    ],
    "correctIndex": 0,
    "explanation": "พระมหากัสสปเถระเป็นประธานซักถามพระธรรมวินัย ณ ถ้ำสัตตบรรณคูหา",
    "reference": "ประวัติการสังคายนา พระมหากัสสปะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-076",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 4 ข้อ 76] พระสารีบุตรเถระ ได้รับยกย่องเป็นพระอัครสาวกเบื้องขวา เลิศในด้านใด?",
    "options": [
      "ผู้มีปัญญามาก (มหัปปัญญานัง)",
      "ผู้มีฤทธิ์มาก",
      "ผู้มีลาภมาก",
      "ผู้ทรงธุดงค์"
    ],
    "correctIndex": 0,
    "explanation": "พระสารีบุตรได้รับยกย่องเป็นเลิศทางด้านมีปัญญามาก เป็นธรรมเสนาบดี",
    "reference": "พุทธานุพุทธประวัติ พระสารีบุตร",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-077",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 4 ข้อ 77] พระมหาโมคคัลลานเถระ ได้รับยกย่องเป็นพระอัครสาวกเบื้องซ้าย เลิศในด้านใด?",
    "options": [
      "ผู้มีฤทธิ์มาก (อิทธิมันตานัง)",
      "ผู้มีปัญญามาก",
      "ผู้ทรงวินัย",
      "ผู้มีเสียงไพเราะ"
    ],
    "correctIndex": 0,
    "explanation": "พระมหาโมคคัลลานะเลิศทางด้านมีอิทธิฤทธิ์มาก",
    "reference": "พุทธานุพุทธประวัติ พระโมคคัลลานะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-078",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 4 ข้อ 78] พระมหากัสสปเถระ ได้รับยกย่องเป็นเอตทัคคะด้านใด?",
    "options": [
      "ผู้ถือธุดงค์และสรรเสริญการถือธุดงค์ (ธุตวาทานัง)",
      "ผู้มีลาภมาก",
      "ผู้เป็นพหูสูต",
      "ผู้มีทิพยจักษุ"
    ],
    "correctIndex": 0,
    "explanation": "พระมหากัสสปะถือธุดงค์ ๑๓ ประการเคร่งครัดและเป็นประธานปฐมสังคายนา",
    "reference": "พุทธานุพุทธประวัติ พระมหากัสสปะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-079",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 4 ข้อ 79] พระอานนทเถระ ได้รับยกย่องเอตทัคคะถึง ๕ ประการ ข้อใดมิใช่ ๑ ในนั้น?",
    "options": [
      "ผู้มีฤทธิ์เหาะเหินเดินอากาศ",
      "ผู้เป็นพหูสูต",
      "ผู้มีสติจำทรง",
      "ยอดอุปัฏฐาก"
    ],
    "correctIndex": 0,
    "explanation": "พระอานนท์เลิศด้าน พหูสูต สติ คติ ธิติ และยอดอุปัฏฐาก",
    "reference": "พุทธานุพุทธประวัติ พระอานนท์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-080",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 4 ข้อ 80] พระอนุรุทธเถระ ได้รับยกย่องในตำแหน่งเอตทัคคะด้านใด?",
    "options": [
      "ผู้มีทิพยจักษุญาณ (ตาทิพย์)",
      "ผู้มีวาจาไพเราะ",
      "ผู้มีลาภมาก",
      "ผู้มีปัญญา"
    ],
    "correctIndex": 0,
    "explanation": "พระอนุรุทธะเลิศทางทิพยจักษุญาณ",
    "reference": "พุทธานุพุทธประวัติ พระอนุรุทธะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-081",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 4 ข้อ 81] พระอุบาลีเถระ ได้รับยกย่องเป็นเอตทัคคะด้านใด?",
    "options": [
      "ผู้ทรงจำและเชี่ยวชาญพระวินัย (วินัยธร)",
      "ผู้ทรงพระสูตร",
      "ผู้แสดงธรรม",
      "ผู้ยินดีในป่า"
    ],
    "correctIndex": 0,
    "explanation": "พระอุบาลีเดิมเป็นนายภูษามาลา เลิศทางทรงจำพระวินัยปิฎก",
    "reference": "พุทธานุพุทธประวัติ พระอุบาลี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-082",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 4 ข้อ 82] พระสีวลีเถระ ได้รับยกย่องสรรเสริญว่าเป็นเลิศในด้านใด?",
    "options": [
      "ผู้มีลาภสักการะมาก (ลาภีนัง)",
      "ผู้มีปัญญามาก",
      "ผู้มีฤทธิ์มาก",
      "ผู้มีอายุยืน"
    ],
    "correctIndex": 0,
    "explanation": "พระสีวลีอุดมสมบูรณ์ด้วยปัจจัย ๔ ไม่ว่าจะจาริกไปในถิ่นทุรกันดารใด",
    "reference": "พุทธานุพุทธประวัติ พระสีวลี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-083",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 4 ข้อ 83] พระมหากัจจายนเถระ ได้รับยกย่องเป็นเอตทัคคะด้านใด?",
    "options": [
      "ผู้อธิบายเนื้อความย่อให้พิสดารได้อย่างยอดเยี่ยม",
      "ผู้ตรัสรู้เร็ว",
      "ผู้มีบริวารมาก",
      "ผู้มีเสียงไพเราะ"
    ],
    "correctIndex": 0,
    "explanation": "พระมหากัจจายนะฉลาดในการจำแนกอรรถธรรมที่พระพุทธองค์ตรัสย่อให้เข้าใจละเอียด",
    "reference": "พุทธานุพุทธประวัติ พระมหากัจจายนะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-084",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 4 ข้อ 84] พระราหุลเถระ พระโอรสของพระพุทธเจ้า ได้รับยกย่องในด้านใด?",
    "options": [
      "ผู้ใคร่ต่อการศึกษาและฝึกฝนตนเอง (สิกขากามานัง)",
      "ผู้มีความกตัญญู",
      "ผู้มีรูปงาม",
      "ผู้รักสันโดษ"
    ],
    "correctIndex": 0,
    "explanation": "พระราหุลกอบทรายเต็มกำมือทุกเช้าตั้งจิตอธิษฐานขอให้ได้คำสอนมากเท่าเม็ดทราย",
    "reference": "พุทธานุพุทธประวัติ พระราหุล",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-085",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 4 ข้อ 85] พระปุณณมันตานีบุตรเถระ ได้รับยกย่องเป็นเอตทัคคะด้านใด?",
    "options": [
      "ผู้เป็นธรรมกถึก (นักเทศน์ผู้ยอดเยี่ยม)",
      "ผู้บรรลุธรรมด้วยปัญญา",
      "ผู้มีวิหารธรรม",
      "ผู้เป็นที่รักของเทวดา"
    ],
    "correctIndex": 0,
    "explanation": "พระปุณณมันตานีบุตรเลิศทางแสดงธรรมกถา (เทศนาสั่งสอน)",
    "reference": "พุทธานุพุทธประวัติ พระปุณณมันตานีบุตร",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-086",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 4 ข้อ 86] พระโสณโกฬิวิสะ ได้รับยกย่องในด้านใดหลังบรรลุธรรมจากคำสอนพิณ ๓ สาย?",
    "options": [
      "ผู้ปรารภความเพียร (ปรารภวิริยะ)",
      "ผู้มีความกตัญญู",
      "ผู้มีลาภมาก",
      "ผู้มีเสียงไพเราะ"
    ],
    "correctIndex": 0,
    "explanation": "พระโสณโกฬิวิสะตั้งใจเดินจงกรมจนเท้าแตก ได้รับยกย่องเป็นผู้เลิศทางปรารภความเพียร",
    "reference": "พุทธานุพุทธประวัติ พระโสณโกฬิวิสะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-087",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 4 ข้อ 87] พระรัฐบาลเถระ ผู้ยอมอดอาหารเพื่อขอบวช ได้รับยกย่องด้านใด?",
    "options": [
      "ผู้บวชด้วยศรัทธาแท้จริง (สัทธาปัพพชิตานัง)",
      "ผู้บวชโดยถือธุดงค์",
      "ผู้มีรูปงาม",
      "ผู้ทรงวินัย"
    ],
    "correctIndex": 0,
    "explanation": "พระรัฐบาลสละกองสมบัติมหาศาล บวชด้วยพลังศรัทธาอันบริสุทธิ์",
    "reference": "พุทธานุพุทธประวัติ พระรัฐบาล",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-088",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 4 ข้อ 88] พระจูฬปันถกเถระ ได้รับยกย่องเป็นเอตทัคคะในด้านใด?",
    "options": [
      "ผู้เนรมิตกายอันสำเร็จด้วยใจ (มโนมยิทธิ) และฉลาดในเจโตวิวัฏฏ์",
      "ผู้จำพระสูตรเก่ง",
      "ผู้มีเสียงกังวาน",
      "ผู้รู้ราตรีนาน"
    ],
    "correctIndex": 0,
    "explanation": "พระจูฬปันถกเชี่ยวชาญการเนรมิตกายทิพย์นับพันรูปและชำนาญฌานสมาบัติ",
    "reference": "พุทธานุพุทธประวัติ พระจูฬปันถก",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-089",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 4 ข้อ 89] พระกุณฑธานเถระ ได้รับยกย่องจากพระพุทธเจ้าในด้านใด?",
    "options": [
      "ผู้จับสลากเป็นปฐม (ได้สลากภัตก่อนใคร)",
      "ผู้มีเสียงดังกังวาน",
      "ผู้ยินดีในป่า",
      "ผู้เชี่ยวชาญพระสูตร"
    ],
    "correctIndex": 0,
    "explanation": "พระกุณฑธานะได้รับยกย่องเป็นผู้จับสลากภัตเป็นคนแรกเสมอ",
    "reference": "พุทธานุพุทธประวัติ พระกุณฑธานะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-090",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 4 ข้อ 90] พระภัททิยกษัตริย์ ได้รับยกย่องเป็นเอตทัคคะด้านใด?",
    "options": [
      "ผู้เกิดในตระกูลสูงส่ง (อุจจกุลีนัง)",
      "ผู้มีทรัพย์มหาศาล",
      "ผู้มีความเพียร",
      "ผู้มีปัญญา"
    ],
    "correctIndex": 0,
    "explanation": "พระภัททิยกาฬิโคธาบุตร เลิศทางเกิดในตระกูลสูง (กษัตริย์ศากยะ)",
    "reference": "พุทธานุพุทธประวัติ พระภัททิยะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-091",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 4 ข้อ 91] พระอัญญาโกณฑัญญเถระ ได้รับยกย่องเป็นเอตทัคคะด้านใด?",
    "options": [
      "ผู้เป็นรัตตัญญู (ผู้รู้ราตรีนาน รู้ธรรมก่อนใคร)",
      "ผู้มีอายุยืน",
      "ผู้มีปัญญา",
      "ผู้ทรงวินัย"
    ],
    "correctIndex": 0,
    "explanation": "พระโกณฑัญญะเป็นปฐมสาวก ได้รับยกย่องเป็นผู้รู้ราตรีนาน (บวชก่อนใคร)",
    "reference": "พุทธานุพุทธประวัติ พระโกณฑัญญะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-092",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 4 ข้อ 92] พระวังคีสเถระ ได้รับยกย่องเป็นเอตทัคคะด้านใด?",
    "options": [
      "ผู้มีปฏิภาณกวี แต่งคาถาสรรเสริญธรรมได้ฉับพลัน",
      "ผู้ทรงจำพระไตรปิฎก",
      "ผู้มีเสียงก้องกังวาน",
      "ผู้เชี่ยวชาญพระวินัย"
    ],
    "correctIndex": 0,
    "explanation": "พระวังคีสะเลิศทางปฏิภาณ ฉลาดในการประพันธ์คาถาภาษิตได้อย่างไพเราะทันท่วงที",
    "reference": "พุทธานุพุทธประวัติ พระวังคีสะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-093",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 4 ข้อ 93] พระเรวตขทิรวนิยเถระ (น้องชายพระสารีบุตร) ได้รับยกย่องในด้านใด?",
    "options": [
      "ผู้อยู่ป่าเป็นวัตร (อรัญญิกานัง)",
      "ผู้มีปัญญาเหมือนพี่ชาย",
      "ผู้มีลาภมาก",
      "ผู้เชี่ยวชาญพระวินัย"
    ],
    "correctIndex": 0,
    "explanation": "พระเรวตะยินดีในการจำพรรษาในป่าไม้ตะเคียนอันสงบวิเวก",
    "reference": "พุทธานุพุทธประวัติ พระเรวตะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-094",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 4 ข้อ 94] พระมหากัปปินเถระ ได้รับยกย่องในด้านใด?",
    "options": [
      "ผู้ให้โอวาทสั่งสอนภิกษุได้ยอดเยี่ยม (ภิกขุโอวาทกานัง)",
      "ผู้มีฝีมือการรบ",
      "ผู้มีความสงบ",
      "ผู้มีจิตเมตตา"
    ],
    "correctIndex": 0,
    "explanation": "พระมหากัปปินะเดิมเป็นพระราชา เลิศทางสั่งสอนและให้โอวาทแก่ภิกษุสงฆ์",
    "reference": "พุทธานุพุทธประวัติ พระมหากัปปินะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-095",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 4 ข้อ 95] พระพาหิยทารุจีริยะ ได้รับการยกย่องในตำแหน่งใด?",
    "options": [
      "ผู้ตรัสรู้ธรรมได้เร็วพลันที่สุด (ขิปปาภิญญานัง)",
      "ผู้มีผ้าบังสุกุลดีที่สุด",
      "ผู้ทรงปัญญา",
      "ผู้ไม่เจ็บป่วย"
    ],
    "correctIndex": 0,
    "explanation": "พระพาหิยะฟังธรรมเพียงสั้นๆ ว่า 'เห็นสักแต่ว่าเห็น' ก็บรรลุพระอรหันต์ทันที",
    "reference": "พุทธานุพุทธประวัติ พระพาหิยะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-096",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 4 ข้อ 96] พระอุรุเวลกัสสปเถระ ได้รับยกย่องเป็นเอตทัคคะด้านใด?",
    "options": [
      "ผู้มีบริวารมาก (มหปริวารานัง)",
      "ผู้บูชาไฟ",
      "ผู้มีอายุยืน",
      "ผู้มีญาณกว้างไกล"
    ],
    "correctIndex": 0,
    "explanation": "พระอุรุเวลกัสสปะมีบริวารติดตามบวชถึง ๑,๐๐๐ รูป",
    "reference": "พุทธานุพุทธประวัติ พระอุรุเวลกัสสปะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-097",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 4 ข้อ 97] พระวักกลิเถระ ได้รับยกย่องด้านใดหลังจากบรรลุธรรม?",
    "options": [
      "ผู้หลุดพ้นด้วยศรัทธา (สัทธาวิมุตตานัง)",
      "ผู้มีดวงตางดงาม",
      "ผู้เลิศทางความเพียร",
      "ผู้เลิศทางความอดทน"
    ],
    "correctIndex": 0,
    "explanation": "พระวักกลิเลิกติดในรูปกายและหันมาเห็นธรรมจนหลุดพ้นด้วยศรัทธาอันแก่กล้า",
    "reference": "พุทธานุพุทธประวัติ พระวักกลิ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-098",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 4 ข้อ 98] พระลกุณฏกภัททิยะ ได้รับยกย่องด้านใด?",
    "options": [
      "ผู้มีเสียงแสดงธรรมไพเราะก้องกังวาน (มัญชุสสรานัง)",
      "ผู้มีความอดกลั้น",
      "ผู้มีปัญญา",
      "ผู้มีจิตอ่อนโยน"
    ],
    "correctIndex": 0,
    "explanation": "พระลกุณฏกภัททิยะแม้ร่างเตี้ยค่อมแต่มีเสียงแสดงธรรมไพเราะน่าฟังยิ่ง",
    "reference": "พุทธานุพุทธประวัติ พระลกุณฏกภัททิยะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-099",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 4 ข้อ 99] พระมหากัจจายนะ มีบทบาทสำคัญในการเผยแผ่พระพุทธศาสนาในแคว้นใดเป็นหลัก?",
    "options": [
      "แคว้นอวันตี เมืองอุชเชนี",
      "แคว้นมคธ",
      "แคว้นโกศล",
      "แคว้นวัชชี"
    ],
    "correctIndex": 0,
    "explanation": "พระมหากัจจายนะประกาศพระศาสนา ณ แคว้นอวันตี เมืองอุชเชนี",
    "reference": "พุทธานุพุทธประวัติ พระมหากัจจายนะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-b-100",
    "grade": "โท",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 4 ข้อ 100] การทำปฐมสังคายนา มีพระมหาเถระรูปใดเป็นประธานสงฆ์และเป็นผู้สอบถามพระธรรมวินัย?",
    "options": [
      "พระมหากัสสปเถระ",
      "พระอานนท์",
      "พระอุบาลี",
      "พระอนุรุทธะ"
    ],
    "correctIndex": 0,
    "explanation": "พระมหากัสสปเถระเป็นประธานซักถามพระธรรมวินัย ณ ถ้ำสัตตบรรณคูหา",
    "reference": "ประวัติการสังคายนา พระมหากัสสปะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-001",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "อาบัตินิสสัคคิยปาจิตตีย์มีทั้งหมดกี่สิกขาบท?",
    "options": [
      "๓๐ สิกขาบท (แบ่งเป็น ๓ วรรค วรรคละ ๑๐ ข้อ)",
      "๑๓ สิกขาบท",
      "๙๒ สิกขาบท",
      "๒๒๗ สิกขาบท"
    ],
    "correctIndex": 0,
    "explanation": "นิสสัคคิยปาจิตตีย์มี ๓๐ สิกขาบท ได้แก่ จีวรวรรค โกสิยวรรค และปัตตวรรค",
    "reference": "วินัยมุข เล่ม ๒ นิสสัคคิยปาจิตตีย์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-002",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "ภิกษุเก็บอติเรกจีวรไว้ได้ไม่เกินกี่วันโดยไม่ได้อธิษฐานหรือวิกัป?",
    "options": [
      "ไม่เกิน ๑๐ วัน (วันที่ ๑๑ เป็นต้นไปต้องอาบัติ)",
      "ไม่เกิน ๗ วัน",
      "ไม่เกิน ๑ เดือน",
      "ไม่เกิน ๑ พรรษา"
    ],
    "correctIndex": 0,
    "explanation": "อติเรกจีวรเก็บไว้ได้ ๑๐ วัน เกินนั้นต้องนิสสัคคิยปาจิตตีย์",
    "reference": "วินัยมุข เล่ม ๒ จีวรวรรค สิกขาบทที่ ๑",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-003",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "คำว่า 'นิสสัคคิยะ' ในหมวดอาบัตินิสสัคคิยปาจิตตีย์ หมายความว่าอย่างไร?",
    "options": [
      "ต้องสละสิ่งของที่เป็นเหตุต้องอาบัตินั้นออกไปก่อน จึงจะแสดงอาบัติตก",
      "ต้องติดคุกสงฆ์",
      "ต้องอยู่กรรม ๖ คืน",
      "ต้องลาสิกขา"
    ],
    "correctIndex": 0,
    "explanation": "นิสสัคคิยะ แปลว่า จำต้องสละของนั้นให้แก่สงฆ์ คณะ หรือบุคคลก่อน จึงจะแสดงอาบัติได้",
    "reference": "วินัยมุข เล่ม ๒ นิสสัคคิยกัณฑ์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-004",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "ภิกษุรับเงินทองหรือยินดีเงินทองที่เขาเก็บไว้เพื่อตน ต้องอาบัติใดในหมวดนิสสัคคิยปาจิตตีย์?",
    "options": [
      "รูปิยสิกขาบท (โกสิยวรรค สิกขาบทที่ ๘)",
      "จีวรวรรค ข้อ ๓",
      "ปัตตวรรค ข้อ ๑",
      "ปาจิตตีย์ ข้อ ๑๑"
    ],
    "correctIndex": 0,
    "explanation": "รับเอง ใช้ให้ผู้อื่นรับ หรือยินดีในเงินทอง ต้องนิสสัคคิยปาจิตตีย์ (รูปิยสิกขาบท)",
    "reference": "วินัยมุข เล่ม ๒ โกสิยวรรค",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-005",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๓",
    "question": "ภิกษุเก็บเภสัช ๕ (เนยใส เนยข้น น้ำมัน น้ำผึ้ง น้ำอ้อย) ไว้ฉันได้ไม่เกินกี่วัน?",
    "options": [
      "ไม่เกิน ๗ วัน (สัตตาหกาลิก)",
      "ไม่เกิน ๑ วัน",
      "ไม่เกิน ๑๕ วัน",
      "ไม่เกิน ๑ เดือน"
    ],
    "correctIndex": 0,
    "explanation": "เภสัช ๕ เก็บไว้ฉันได้ไม่เกิน ๗ วัน",
    "reference": "วินัยมุข เล่ม ๒ ปัตตวรรค",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-006",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๔",
    "question": "บาตรที่มีรอยร้าวไม่ถึงกี่นิ้ว ไม่อนุญาตให้ภิกษุขอเปลี่ยนบาตรใหม่?",
    "options": [
      "ไม่ถึง ๕ นิ้ว (หรือ ๕ รอยแผล)",
      "ไม่ถึง ๒ นิ้ว",
      "ไม่ถึง ๑ ฝ่ามือ",
      "ไม่แตกหัก"
    ],
    "correctIndex": 0,
    "explanation": "บาตรมีแผลไม่ถึง ๕ นิ้ว ไปขอบาตรใหม่ ต้องนิสสัคคิยปาจิตตีย์",
    "reference": "วินัยมุข เล่ม ๒ ปัตตวรรค",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-007",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๕",
    "question": "อาบัติอนิยตะ ๒ สิกขาบท หมายถึงอาบัติประเภทใด?",
    "options": [
      "อาบัติที่ยังไม่แน่ชัดว่าจะเป็นปาราชิก สังฆาทิเสส หรือปาจิตตีย์ ต้องไต่สวนตามพยาน",
      "อาบัติเบา",
      "อาบัติจร",
      "สิกขาบทชั่วคราว"
    ],
    "correctIndex": 0,
    "explanation": "อนิยตะมี ๒ ข้อ เป็นอาบัติที่ยังไม่แน่นอน ขึ้นอยู่กับการซักถามตามคำอุบาสิกาผู้มีศรัทธา",
    "reference": "วินัยมุข เล่ม ๑ อนิยตกัณฑ์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-008",
    "grade": "โท",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "อาบัติปาฏิเทสนียะของภิกษุ มีกี่สิกขาบท?",
    "options": [
      "๔ สิกขาบท",
      "๒ สิกขาบท",
      "๘ สิกขาบท",
      "๑๒ สิกขาบท"
    ],
    "correctIndex": 0,
    "explanation": "ปาฏิเทสนียะมี ๔ สิกขาบท เป็นอาบัติที่ต้องกล่าวประจานตนว่าทำสิ่งไม่สมควร",
    "reference": "วินัยมุข เล่ม ๒ ปาฏิเทสนียกัณฑ์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-009",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "เสขิยวัตร (มารยาทและข้อวัตรปฏิบัติ) มีทั้งหมดกี่สิกขาบท?",
    "options": [
      "๗๕ สิกขาบท",
      "๕๐ สิกขาบท",
      "๑๐๐ สิกขาบท",
      "๒๒๗ สิกขาบท"
    ],
    "correctIndex": 0,
    "explanation": "เสขิยวัตรมี ๗๕ สิกขาบท แบ่งเป็น สารูป ๒๖ โภชนปฏิสังยุตต์ ๓๐ ธัมมเทสนา ๑๖ ปกิณณกะ ๓",
    "reference": "วินัยมุข เล่ม ๑ เสขิยกัณฑ์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-010",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "อธิกรณสมถะ ๗ ข้อใดคือ 'สัมมุขาวินัย'?",
    "options": [
      "การระงับอธิกรณ์ในที่พร้อมหน้าสงฆ์ บุคคล วัตถุ และธรรมวินัย",
      "การตัดสินตามเสียงข้างมาก",
      "การยกฟ้องพระอรหันต์",
      "การประนีประนอม"
    ],
    "correctIndex": 0,
    "explanation": "สัมมุขาวินัย คือ การพิจารณาตัดสินในที่พร้อมหน้าคู่กรณีและหลักธรรมวินัย",
    "reference": "วินัยมุข เล่ม ๑ อธิกรณสมถะ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-011",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "อธิกรณ์ ๔ ในพระวินัย ข้อใดคือ 'วิวาทาธิกรณ์'?",
    "options": [
      "การโต้เถียงขัดแย้งกันเรื่องพระธรรมวินัย (ว่าสิ่งนี้เป็นธรรม สิ่งนี้ไม่เป็นธรรม)",
      "การฟ้องร้องเรื่องอาบัติ",
      "การลงโทษภิกษุ",
      "การทำสังฆกรรม"
    ],
    "correctIndex": 0,
    "explanation": "วิวาทาธิกรณ์ คือ การวิวาทโต้เถียงกันในข้อพระธรรมวินัย",
    "reference": "วินัยมุข เล่ม ๑ อธิกรณ์ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-012",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "อนุวาทาธิกรณ์ หมายถึงอธิกรณ์ประเภทใด?",
    "options": [
      "การโจทก์ฟ้องร้องกันด้วยเรื่องศีลวิบัติ อาจารวิบัติ ทิฏฐิวิบัติ หรืออาชีววิบัติ",
      "การทะเลาะแย่งที่อยู่",
      "การขัดแย้งเรื่องเงิน",
      "การแบ่งพวก"
    ],
    "correctIndex": 0,
    "explanation": "อนุวาทาธิกรณ์ คือ การกล่าวหาฟ้องร้องเรื่องความประพฤติและอาบัติ",
    "reference": "วินัยมุข เล่ม ๑ อธิกรณ์ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-013",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๓",
    "question": "อาปัตตาธิกรณ์ หมายถึงอะไร?",
    "options": [
      "การต้องอาบัติและการปรับอาบัติออกจากอาบัตินั้นๆ",
      "การระงับข้อพิพาท",
      "การสวดมนต์",
      "การลาสิกขา"
    ],
    "correctIndex": 0,
    "explanation": "อาปัตตาธิกรณ์ คือ เรื่องที่เกี่ยวกับการต้องอาบัติและการทำพิธีออกจากอาบัติตามวินัย",
    "reference": "วินัยมุข เล่ม ๑ อธิกรณ์ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-014",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๔",
    "question": "กิจจาธิกรณ์ หมายถึงอธิกรณ์ประเภทใด?",
    "options": [
      "กิจธุระหรือการทำสังฆกรรมของสงฆ์ เช่น อุปสมบท สวดปาฏิโมกข์ กรานกฐิน",
      "กิจนิมนต์ของโยม",
      "การสร้างศาลา",
      "การบิณฑบาต"
    ],
    "correctIndex": 0,
    "explanation": "กิจจาธิกรณ์ คือ กิจการงานสังฆกรรมของสงฆ์ที่ต้องประชุมทำร่วมกัน",
    "reference": "วินัยมุข เล่ม ๑ อธิกรณ์ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-015",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๕",
    "question": "การวิกัปจีวร (ทำ ๒ เจ้าของ) มีวัตถุประสงค์เพื่ออะไร?",
    "options": [
      "เพื่อจะได้เก็บอติเรกจีวรไว้ได้เกิน ๑๐ วันโดยไม่เป็นอาบัตินิสสัคคิยปาจิตตีย์",
      "เพื่อขายต่อ",
      "เพื่อเปลี่ยนสี",
      "เพื่อถวายพระพุทธเจ้า"
    ],
    "correctIndex": 0,
    "explanation": "การวิกัปคือการมอบกรรมสิทธิ์ร่วมแก่ภิกษุอื่น ทำให้เก็บผ้าไว้ได้โดยไม่ผิดวินัย",
    "reference": "วินัยมุข เล่ม ๒ การวิกัป",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-016",
    "grade": "โท",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "เยภุยยสิกา ในอธิกรณสมถะ ๗ หมายถึงวิธีระงับอธิกรณ์แบบใด?",
    "options": [
      "การตัดสินตามเสียงข้างมากของสงฆ์ที่เป็นธรรมวาที",
      "การประนีประนอม",
      "การขับไล่",
      "การให้สัตย์ปฏิญาณ"
    ],
    "correctIndex": 0,
    "explanation": "เยภุยยสิกา คือ การตัดสินอธิกรณ์โดยถือเสียงส่วนมากของภิกษุผู้มีธรรม",
    "reference": "วินัยมุข เล่ม ๑ อธิกรณสมถะ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-017",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "ติณวัตถารกวินัย เปรียบเสมือนการทำสิ่งใดเพื่อระงับความขัดแย้งของสงฆ์?",
    "options": [
      "กิริยาดุจเอาหญ้ากลบไว้ (การประนีประนอมยกเลิกความผิดอาบัติเล็กน้อยของทั้ง ๒ ฝ่าย)",
      "การตัดสิทธิ์บวช",
      "การลงโทษหนัก",
      "การสวดตัดขาด"
    ],
    "correctIndex": 0,
    "explanation": "ติณวัตถารกวินัย คือ การประนีประนอมยกเลิกอาบัติลหุโทษทั้งหมดพร้อมกันเพื่อความสามัคคี",
    "reference": "วินัยมุข เล่ม ๑ อธิกรณสมถะ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-018",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "ภิกษุพรากของเขียว (ตัดต้นไม้ ทำลายพืชคาม/ภูตคาม) ต้องอาบัติประเภทใด?",
    "options": [
      "ปาจิตตีย์ (ภูตคามวรรค)",
      "ปาราชิก",
      "สังฆาทิเสส",
      "ทุกกฏ"
    ],
    "correctIndex": 0,
    "explanation": "ตัดฟันทำลายต้นไม้ของเขียว ต้องอาบัติปาจิตตีย์",
    "reference": "วินัยมุข เล่ม ๑ ภูตคามวรรค",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-019",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "ภิกษุนอนร่วมห้องกับอนุปสัมบัน (คฤหัสถ์หรือสามเณร) เกินกี่คืนจึงต้องอาบัติปาจิตตีย์?",
    "options": [
      "เกิน ๓ คืน (นอนคืนที่ ๔ ต้องอาบัติ)",
      "เกิน ๑ คืน",
      "เกิน ๗ คืน",
      "เกิน ๑ เดือน"
    ],
    "correctIndex": 0,
    "explanation": "นอนในที่มุงที่บังอันเดียวกันกับอนุปสัมบันเกิน ๓ คืน ต้องปาจิตตีย์ในคืนที่ ๔",
    "reference": "วินัยมุข เล่ม ๑ มุสาวาทวรรค",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-020",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "สังฆกรรมประเภท 'ญัตติจตุตถกรรม' หมายถึงอะไร?",
    "options": [
      "การตั้งญัตติ ๑ ครั้ง และสวดประกาศขอมติสงฆ์ (อนุสาวนา) ๓ ครั้ง รวมเป็น ๔",
      "การประชุมสงฆ์ ๔ รูป",
      "การสวดมนต์ ๔ ทิศ",
      "การตั้งกระทู้ ๔ ครั้ง"
    ],
    "correctIndex": 0,
    "explanation": "ญัตติจตุตถกรรม คือ สังฆกรรมสำคัญสูงสุด สวดตั้งญัตติ ๑ และอนุสาวนา ๓",
    "reference": "วินัยมุข เล่ม ๓ สังฆกรรม",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-021",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๓",
    "question": "สังฆกรรมประเภทใดต้องใช้คณะสงฆ์อย่างน้อย ๒๐ รูปในการทำพิธี?",
    "options": [
      "การสวดอัพภาน (รับภิกษุต้องสังฆาทิเสสพ้นมลทินกลับเข้าหมู่)",
      "การอุปสมบท",
      "การสวดปาฏิโมกข์",
      "การกรานกฐิน"
    ],
    "correctIndex": 0,
    "explanation": "การสวดอัพภานต้องใช้องค์สงฆ์อย่างน้อย ๒๐ รูปจึงจะทำสังฆกรรมสำเร็จ",
    "reference": "วินัยมุข เล่ม ๓ วุฏฐานวิธี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-022",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๔",
    "question": "การกรานกฐิน ต้องมีภิกษุจำพรรษาถ้วนไตรมาสในวัดนั้นอย่างน้อยกี่รูป?",
    "options": [
      "๕ รูปขึ้นไป",
      "๔ รูป",
      "๓ รูป",
      "๑๐ รูป"
    ],
    "correctIndex": 0,
    "explanation": "การกรานกฐินต้องมีพระภิกษุผู้จำพรรษาครบ ๓ เดือนในวัดนั้นอย่างน้อย ๕ รูป",
    "reference": "วินัยมุข เล่ม ๓ กฐินขันธกะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-023",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๕",
    "question": "อาบัติที่ระงับได้ด้วยการแสดงอาบัติต่อภิกษุรูปเดียว เรียกว่าอาบัติประเภทใด?",
    "options": [
      "ลหุโทษ (อาบัติเบา เช่น ปาจิตตีย์ ปาฏิเทสนียะ ทุกกฏ ทุพภาสิต)",
      "ครุกรรม",
      "ปาราชิก",
      "สังฆาทิเสส"
    ],
    "correctIndex": 0,
    "explanation": "ลหุโทษสามารถแสดงอาบัติต่อภิกษุรูปเดียวเพื่อออกจากอาบัติได้",
    "reference": "วินัยมุข เล่ม ๑ หมวดอาบัติ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-024",
    "grade": "โท",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "ภิกษุผู้บวชมาครบ ๕ พรรษา และมีความรู้พระธรรมวินัยเพียงพอ เรียกว่าอะไร?",
    "options": [
      "นิสสยมุตตกะ (ผู้พ้นจากการถือนิสัยอุปัชฌาย์)",
      "นวกภิกษุ",
      "มัชฌิมภิกษุ",
      "เถระ"
    ],
    "correctIndex": 0,
    "explanation": "นิสสยมุตตกะ คือ ภิกษุผู้พ้นจากการปกครองดูแลของอุปัชฌาย์ สามารถอยู่โดยลำพังได้",
    "reference": "วินัยมุข เล่ม ๓ นิสสัย",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-025",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "ภิกษุที่มีพรรษาตั้งแต่ ๑๐ พรรษาขึ้นไป เรียกว่าอะไร?",
    "options": [
      "พระเถระ (มีสิทธิ์เป็นพระอุปัชฌาย์ได้)",
      "มัชฌิมภิกษุ",
      "นวกภิกษุ",
      "พระมหาเถระ"
    ],
    "correctIndex": 0,
    "explanation": "ภิกษุมีพรรษาครบ ๑๐ พรรษาขึ้นไปเรียกว่า พระเถระ สามารถเป็นอุปัชฌาย์และอาจารย์ได้",
    "reference": "วินัยมุข เล่ม ๓ พรรษาและฐานะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-026",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 2 ข้อ 26] อาบัตินิสสัคคิยปาจิตตีย์มีทั้งหมดกี่สิกขาบท?",
    "options": [
      "๓๐ สิกขาบท (แบ่งเป็น ๓ วรรค วรรคละ ๑๐ ข้อ)",
      "๑๓ สิกขาบท",
      "๙๒ สิกขาบท",
      "๒๒๗ สิกขาบท"
    ],
    "correctIndex": 0,
    "explanation": "นิสสัคคิยปาจิตตีย์มี ๓๐ สิกขาบท ได้แก่ จีวรวรรค โกสิยวรรค และปัตตวรรค",
    "reference": "วินัยมุข เล่ม ๒ นิสสัคคิยปาจิตตีย์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-027",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 2 ข้อ 27] ภิกษุเก็บอติเรกจีวรไว้ได้ไม่เกินกี่วันโดยไม่ได้อธิษฐานหรือวิกัป?",
    "options": [
      "ไม่เกิน ๑๐ วัน (วันที่ ๑๑ เป็นต้นไปต้องอาบัติ)",
      "ไม่เกิน ๗ วัน",
      "ไม่เกิน ๑ เดือน",
      "ไม่เกิน ๑ พรรษา"
    ],
    "correctIndex": 0,
    "explanation": "อติเรกจีวรเก็บไว้ได้ ๑๐ วัน เกินนั้นต้องนิสสัคคิยปาจิตตีย์",
    "reference": "วินัยมุข เล่ม ๒ จีวรวรรค สิกขาบทที่ ๑",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-028",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 2 ข้อ 28] คำว่า 'นิสสัคคิยะ' ในหมวดอาบัตินิสสัคคิยปาจิตตีย์ หมายความว่าอย่างไร?",
    "options": [
      "ต้องสละสิ่งของที่เป็นเหตุต้องอาบัตินั้นออกไปก่อน จึงจะแสดงอาบัติตก",
      "ต้องติดคุกสงฆ์",
      "ต้องอยู่กรรม ๖ คืน",
      "ต้องลาสิกขา"
    ],
    "correctIndex": 0,
    "explanation": "นิสสัคคิยะ แปลว่า จำต้องสละของนั้นให้แก่สงฆ์ คณะ หรือบุคคลก่อน จึงจะแสดงอาบัติได้",
    "reference": "วินัยมุข เล่ม ๒ นิสสัคคิยกัณฑ์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-029",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 2 ข้อ 29] ภิกษุรับเงินทองหรือยินดีเงินทองที่เขาเก็บไว้เพื่อตน ต้องอาบัติใดในหมวดนิสสัคคิยปาจิตตีย์?",
    "options": [
      "รูปิยสิกขาบท (โกสิยวรรค สิกขาบทที่ ๘)",
      "จีวรวรรค ข้อ ๓",
      "ปัตตวรรค ข้อ ๑",
      "ปาจิตตีย์ ข้อ ๑๑"
    ],
    "correctIndex": 0,
    "explanation": "รับเอง ใช้ให้ผู้อื่นรับ หรือยินดีในเงินทอง ต้องนิสสัคคิยปาจิตตีย์ (รูปิยสิกขาบท)",
    "reference": "วินัยมุข เล่ม ๒ โกสิยวรรค",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-030",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 2 ข้อ 30] ภิกษุเก็บเภสัช ๕ (เนยใส เนยข้น น้ำมัน น้ำผึ้ง น้ำอ้อย) ไว้ฉันได้ไม่เกินกี่วัน?",
    "options": [
      "ไม่เกิน ๗ วัน (สัตตาหกาลิก)",
      "ไม่เกิน ๑ วัน",
      "ไม่เกิน ๑๕ วัน",
      "ไม่เกิน ๑ เดือน"
    ],
    "correctIndex": 0,
    "explanation": "เภสัช ๕ เก็บไว้ฉันได้ไม่เกิน ๗ วัน",
    "reference": "วินัยมุข เล่ม ๒ ปัตตวรรค",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-031",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 2 ข้อ 31] บาตรที่มีรอยร้าวไม่ถึงกี่นิ้ว ไม่อนุญาตให้ภิกษุขอเปลี่ยนบาตรใหม่?",
    "options": [
      "ไม่ถึง ๕ นิ้ว (หรือ ๕ รอยแผล)",
      "ไม่ถึง ๒ นิ้ว",
      "ไม่ถึง ๑ ฝ่ามือ",
      "ไม่แตกหัก"
    ],
    "correctIndex": 0,
    "explanation": "บาตรมีแผลไม่ถึง ๕ นิ้ว ไปขอบาตรใหม่ ต้องนิสสัคคิยปาจิตตีย์",
    "reference": "วินัยมุข เล่ม ๒ ปัตตวรรค",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-032",
    "grade": "โท",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 2 ข้อ 32] อาบัติอนิยตะ ๒ สิกขาบท หมายถึงอาบัติประเภทใด?",
    "options": [
      "อาบัติที่ยังไม่แน่ชัดว่าจะเป็นปาราชิก สังฆาทิเสส หรือปาจิตตีย์ ต้องไต่สวนตามพยาน",
      "อาบัติเบา",
      "อาบัติจร",
      "สิกขาบทชั่วคราว"
    ],
    "correctIndex": 0,
    "explanation": "อนิยตะมี ๒ ข้อ เป็นอาบัติที่ยังไม่แน่นอน ขึ้นอยู่กับการซักถามตามคำอุบาสิกาผู้มีศรัทธา",
    "reference": "วินัยมุข เล่ม ๑ อนิยตกัณฑ์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-033",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 2 ข้อ 33] อาบัติปาฏิเทสนียะของภิกษุ มีกี่สิกขาบท?",
    "options": [
      "๔ สิกขาบท",
      "๒ สิกขาบท",
      "๘ สิกขาบท",
      "๑๒ สิกขาบท"
    ],
    "correctIndex": 0,
    "explanation": "ปาฏิเทสนียะมี ๔ สิกขาบท เป็นอาบัติที่ต้องกล่าวประจานตนว่าทำสิ่งไม่สมควร",
    "reference": "วินัยมุข เล่ม ๒ ปาฏิเทสนียกัณฑ์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-034",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 2 ข้อ 34] เสขิยวัตร (มารยาทและข้อวัตรปฏิบัติ) มีทั้งหมดกี่สิกขาบท?",
    "options": [
      "๗๕ สิกขาบท",
      "๕๐ สิกขาบท",
      "๑๐๐ สิกขาบท",
      "๒๒๗ สิกขาบท"
    ],
    "correctIndex": 0,
    "explanation": "เสขิยวัตรมี ๗๕ สิกขาบท แบ่งเป็น สารูป ๒๖ โภชนปฏิสังยุตต์ ๓๐ ธัมมเทสนา ๑๖ ปกิณณกะ ๓",
    "reference": "วินัยมุข เล่ม ๑ เสขิยกัณฑ์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-035",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 2 ข้อ 35] อธิกรณสมถะ ๗ ข้อใดคือ 'สัมมุขาวินัย'?",
    "options": [
      "การระงับอธิกรณ์ในที่พร้อมหน้าสงฆ์ บุคคล วัตถุ และธรรมวินัย",
      "การตัดสินตามเสียงข้างมาก",
      "การยกฟ้องพระอรหันต์",
      "การประนีประนอม"
    ],
    "correctIndex": 0,
    "explanation": "สัมมุขาวินัย คือ การพิจารณาตัดสินในที่พร้อมหน้าคู่กรณีและหลักธรรมวินัย",
    "reference": "วินัยมุข เล่ม ๑ อธิกรณสมถะ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-036",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 2 ข้อ 36] อธิกรณ์ ๔ ในพระวินัย ข้อใดคือ 'วิวาทาธิกรณ์'?",
    "options": [
      "การโต้เถียงขัดแย้งกันเรื่องพระธรรมวินัย (ว่าสิ่งนี้เป็นธรรม สิ่งนี้ไม่เป็นธรรม)",
      "การฟ้องร้องเรื่องอาบัติ",
      "การลงโทษภิกษุ",
      "การทำสังฆกรรม"
    ],
    "correctIndex": 0,
    "explanation": "วิวาทาธิกรณ์ คือ การวิวาทโต้เถียงกันในข้อพระธรรมวินัย",
    "reference": "วินัยมุข เล่ม ๑ อธิกรณ์ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-037",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 2 ข้อ 37] อนุวาทาธิกรณ์ หมายถึงอธิกรณ์ประเภทใด?",
    "options": [
      "การโจทก์ฟ้องร้องกันด้วยเรื่องศีลวิบัติ อาจารวิบัติ ทิฏฐิวิบัติ หรืออาชีววิบัติ",
      "การทะเลาะแย่งที่อยู่",
      "การขัดแย้งเรื่องเงิน",
      "การแบ่งพวก"
    ],
    "correctIndex": 0,
    "explanation": "อนุวาทาธิกรณ์ คือ การกล่าวหาฟ้องร้องเรื่องความประพฤติและอาบัติ",
    "reference": "วินัยมุข เล่ม ๑ อธิกรณ์ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-038",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 2 ข้อ 38] อาปัตตาธิกรณ์ หมายถึงอะไร?",
    "options": [
      "การต้องอาบัติและการปรับอาบัติออกจากอาบัตินั้นๆ",
      "การระงับข้อพิพาท",
      "การสวดมนต์",
      "การลาสิกขา"
    ],
    "correctIndex": 0,
    "explanation": "อาปัตตาธิกรณ์ คือ เรื่องที่เกี่ยวกับการต้องอาบัติและการทำพิธีออกจากอาบัติตามวินัย",
    "reference": "วินัยมุข เล่ม ๑ อธิกรณ์ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-039",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 2 ข้อ 39] กิจจาธิกรณ์ หมายถึงอธิกรณ์ประเภทใด?",
    "options": [
      "กิจธุระหรือการทำสังฆกรรมของสงฆ์ เช่น อุปสมบท สวดปาฏิโมกข์ กรานกฐิน",
      "กิจนิมนต์ของโยม",
      "การสร้างศาลา",
      "การบิณฑบาต"
    ],
    "correctIndex": 0,
    "explanation": "กิจจาธิกรณ์ คือ กิจการงานสังฆกรรมของสงฆ์ที่ต้องประชุมทำร่วมกัน",
    "reference": "วินัยมุข เล่ม ๑ อธิกรณ์ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-040",
    "grade": "โท",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 2 ข้อ 40] การวิกัปจีวร (ทำ ๒ เจ้าของ) มีวัตถุประสงค์เพื่ออะไร?",
    "options": [
      "เพื่อจะได้เก็บอติเรกจีวรไว้ได้เกิน ๑๐ วันโดยไม่เป็นอาบัตินิสสัคคิยปาจิตตีย์",
      "เพื่อขายต่อ",
      "เพื่อเปลี่ยนสี",
      "เพื่อถวายพระพุทธเจ้า"
    ],
    "correctIndex": 0,
    "explanation": "การวิกัปคือการมอบกรรมสิทธิ์ร่วมแก่ภิกษุอื่น ทำให้เก็บผ้าไว้ได้โดยไม่ผิดวินัย",
    "reference": "วินัยมุข เล่ม ๒ การวิกัป",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-041",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 2 ข้อ 41] เยภุยยสิกา ในอธิกรณสมถะ ๗ หมายถึงวิธีระงับอธิกรณ์แบบใด?",
    "options": [
      "การตัดสินตามเสียงข้างมากของสงฆ์ที่เป็นธรรมวาที",
      "การประนีประนอม",
      "การขับไล่",
      "การให้สัตย์ปฏิญาณ"
    ],
    "correctIndex": 0,
    "explanation": "เยภุยยสิกา คือ การตัดสินอธิกรณ์โดยถือเสียงส่วนมากของภิกษุผู้มีธรรม",
    "reference": "วินัยมุข เล่ม ๑ อธิกรณสมถะ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-042",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 2 ข้อ 42] ติณวัตถารกวินัย เปรียบเสมือนการทำสิ่งใดเพื่อระงับความขัดแย้งของสงฆ์?",
    "options": [
      "กิริยาดุจเอาหญ้ากลบไว้ (การประนีประนอมยกเลิกความผิดอาบัติเล็กน้อยของทั้ง ๒ ฝ่าย)",
      "การตัดสิทธิ์บวช",
      "การลงโทษหนัก",
      "การสวดตัดขาด"
    ],
    "correctIndex": 0,
    "explanation": "ติณวัตถารกวินัย คือ การประนีประนอมยกเลิกอาบัติลหุโทษทั้งหมดพร้อมกันเพื่อความสามัคคี",
    "reference": "วินัยมุข เล่ม ๑ อธิกรณสมถะ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-043",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 2 ข้อ 43] ภิกษุพรากของเขียว (ตัดต้นไม้ ทำลายพืชคาม/ภูตคาม) ต้องอาบัติประเภทใด?",
    "options": [
      "ปาจิตตีย์ (ภูตคามวรรค)",
      "ปาราชิก",
      "สังฆาทิเสส",
      "ทุกกฏ"
    ],
    "correctIndex": 0,
    "explanation": "ตัดฟันทำลายต้นไม้ของเขียว ต้องอาบัติปาจิตตีย์",
    "reference": "วินัยมุข เล่ม ๑ ภูตคามวรรค",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-044",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 2 ข้อ 44] ภิกษุนอนร่วมห้องกับอนุปสัมบัน (คฤหัสถ์หรือสามเณร) เกินกี่คืนจึงต้องอาบัติปาจิตตีย์?",
    "options": [
      "เกิน ๓ คืน (นอนคืนที่ ๔ ต้องอาบัติ)",
      "เกิน ๑ คืน",
      "เกิน ๗ คืน",
      "เกิน ๑ เดือน"
    ],
    "correctIndex": 0,
    "explanation": "นอนในที่มุงที่บังอันเดียวกันกับอนุปสัมบันเกิน ๓ คืน ต้องปาจิตตีย์ในคืนที่ ๔",
    "reference": "วินัยมุข เล่ม ๑ มุสาวาทวรรค",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-045",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 2 ข้อ 45] สังฆกรรมประเภท 'ญัตติจตุตถกรรม' หมายถึงอะไร?",
    "options": [
      "การตั้งญัตติ ๑ ครั้ง และสวดประกาศขอมติสงฆ์ (อนุสาวนา) ๓ ครั้ง รวมเป็น ๔",
      "การประชุมสงฆ์ ๔ รูป",
      "การสวดมนต์ ๔ ทิศ",
      "การตั้งกระทู้ ๔ ครั้ง"
    ],
    "correctIndex": 0,
    "explanation": "ญัตติจตุตถกรรม คือ สังฆกรรมสำคัญสูงสุด สวดตั้งญัตติ ๑ และอนุสาวนา ๓",
    "reference": "วินัยมุข เล่ม ๓ สังฆกรรม",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-046",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 2 ข้อ 46] สังฆกรรมประเภทใดต้องใช้คณะสงฆ์อย่างน้อย ๒๐ รูปในการทำพิธี?",
    "options": [
      "การสวดอัพภาน (รับภิกษุต้องสังฆาทิเสสพ้นมลทินกลับเข้าหมู่)",
      "การอุปสมบท",
      "การสวดปาฏิโมกข์",
      "การกรานกฐิน"
    ],
    "correctIndex": 0,
    "explanation": "การสวดอัพภานต้องใช้องค์สงฆ์อย่างน้อย ๒๐ รูปจึงจะทำสังฆกรรมสำเร็จ",
    "reference": "วินัยมุข เล่ม ๓ วุฏฐานวิธี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-047",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 2 ข้อ 47] การกรานกฐิน ต้องมีภิกษุจำพรรษาถ้วนไตรมาสในวัดนั้นอย่างน้อยกี่รูป?",
    "options": [
      "๕ รูปขึ้นไป",
      "๔ รูป",
      "๓ รูป",
      "๑๐ รูป"
    ],
    "correctIndex": 0,
    "explanation": "การกรานกฐินต้องมีพระภิกษุผู้จำพรรษาครบ ๓ เดือนในวัดนั้นอย่างน้อย ๕ รูป",
    "reference": "วินัยมุข เล่ม ๓ กฐินขันธกะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-048",
    "grade": "โท",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 2 ข้อ 48] อาบัติที่ระงับได้ด้วยการแสดงอาบัติต่อภิกษุรูปเดียว เรียกว่าอาบัติประเภทใด?",
    "options": [
      "ลหุโทษ (อาบัติเบา เช่น ปาจิตตีย์ ปาฏิเทสนียะ ทุกกฏ ทุพภาสิต)",
      "ครุกรรม",
      "ปาราชิก",
      "สังฆาทิเสส"
    ],
    "correctIndex": 0,
    "explanation": "ลหุโทษสามารถแสดงอาบัติต่อภิกษุรูปเดียวเพื่อออกจากอาบัติได้",
    "reference": "วินัยมุข เล่ม ๑ หมวดอาบัติ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-049",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 2 ข้อ 49] ภิกษุผู้บวชมาครบ ๕ พรรษา และมีความรู้พระธรรมวินัยเพียงพอ เรียกว่าอะไร?",
    "options": [
      "นิสสยมุตตกะ (ผู้พ้นจากการถือนิสัยอุปัชฌาย์)",
      "นวกภิกษุ",
      "มัชฌิมภิกษุ",
      "เถระ"
    ],
    "correctIndex": 0,
    "explanation": "นิสสยมุตตกะ คือ ภิกษุผู้พ้นจากการปกครองดูแลของอุปัชฌาย์ สามารถอยู่โดยลำพังได้",
    "reference": "วินัยมุข เล่ม ๓ นิสสัย",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-050",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 2 ข้อ 50] ภิกษุที่มีพรรษาตั้งแต่ ๑๐ พรรษาขึ้นไป เรียกว่าอะไร?",
    "options": [
      "พระเถระ (มีสิทธิ์เป็นพระอุปัชฌาย์ได้)",
      "มัชฌิมภิกษุ",
      "นวกภิกษุ",
      "พระมหาเถระ"
    ],
    "correctIndex": 0,
    "explanation": "ภิกษุมีพรรษาครบ ๑๐ พรรษาขึ้นไปเรียกว่า พระเถระ สามารถเป็นอุปัชฌาย์และอาจารย์ได้",
    "reference": "วินัยมุข เล่ม ๓ พรรษาและฐานะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-051",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 3 ข้อ 51] อาบัตินิสสัคคิยปาจิตตีย์มีทั้งหมดกี่สิกขาบท?",
    "options": [
      "๓๐ สิกขาบท (แบ่งเป็น ๓ วรรค วรรคละ ๑๐ ข้อ)",
      "๑๓ สิกขาบท",
      "๙๒ สิกขาบท",
      "๒๒๗ สิกขาบท"
    ],
    "correctIndex": 0,
    "explanation": "นิสสัคคิยปาจิตตีย์มี ๓๐ สิกขาบท ได้แก่ จีวรวรรค โกสิยวรรค และปัตตวรรค",
    "reference": "วินัยมุข เล่ม ๒ นิสสัคคิยปาจิตตีย์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-052",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 3 ข้อ 52] ภิกษุเก็บอติเรกจีวรไว้ได้ไม่เกินกี่วันโดยไม่ได้อธิษฐานหรือวิกัป?",
    "options": [
      "ไม่เกิน ๑๐ วัน (วันที่ ๑๑ เป็นต้นไปต้องอาบัติ)",
      "ไม่เกิน ๗ วัน",
      "ไม่เกิน ๑ เดือน",
      "ไม่เกิน ๑ พรรษา"
    ],
    "correctIndex": 0,
    "explanation": "อติเรกจีวรเก็บไว้ได้ ๑๐ วัน เกินนั้นต้องนิสสัคคิยปาจิตตีย์",
    "reference": "วินัยมุข เล่ม ๒ จีวรวรรค สิกขาบทที่ ๑",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-053",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 3 ข้อ 53] คำว่า 'นิสสัคคิยะ' ในหมวดอาบัตินิสสัคคิยปาจิตตีย์ หมายความว่าอย่างไร?",
    "options": [
      "ต้องสละสิ่งของที่เป็นเหตุต้องอาบัตินั้นออกไปก่อน จึงจะแสดงอาบัติตก",
      "ต้องติดคุกสงฆ์",
      "ต้องอยู่กรรม ๖ คืน",
      "ต้องลาสิกขา"
    ],
    "correctIndex": 0,
    "explanation": "นิสสัคคิยะ แปลว่า จำต้องสละของนั้นให้แก่สงฆ์ คณะ หรือบุคคลก่อน จึงจะแสดงอาบัติได้",
    "reference": "วินัยมุข เล่ม ๒ นิสสัคคิยกัณฑ์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-054",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 3 ข้อ 54] ภิกษุรับเงินทองหรือยินดีเงินทองที่เขาเก็บไว้เพื่อตน ต้องอาบัติใดในหมวดนิสสัคคิยปาจิตตีย์?",
    "options": [
      "รูปิยสิกขาบท (โกสิยวรรค สิกขาบทที่ ๘)",
      "จีวรวรรค ข้อ ๓",
      "ปัตตวรรค ข้อ ๑",
      "ปาจิตตีย์ ข้อ ๑๑"
    ],
    "correctIndex": 0,
    "explanation": "รับเอง ใช้ให้ผู้อื่นรับ หรือยินดีในเงินทอง ต้องนิสสัคคิยปาจิตตีย์ (รูปิยสิกขาบท)",
    "reference": "วินัยมุข เล่ม ๒ โกสิยวรรค",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-055",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 3 ข้อ 55] ภิกษุเก็บเภสัช ๕ (เนยใส เนยข้น น้ำมัน น้ำผึ้ง น้ำอ้อย) ไว้ฉันได้ไม่เกินกี่วัน?",
    "options": [
      "ไม่เกิน ๗ วัน (สัตตาหกาลิก)",
      "ไม่เกิน ๑ วัน",
      "ไม่เกิน ๑๕ วัน",
      "ไม่เกิน ๑ เดือน"
    ],
    "correctIndex": 0,
    "explanation": "เภสัช ๕ เก็บไว้ฉันได้ไม่เกิน ๗ วัน",
    "reference": "วินัยมุข เล่ม ๒ ปัตตวรรค",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-056",
    "grade": "โท",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 3 ข้อ 56] บาตรที่มีรอยร้าวไม่ถึงกี่นิ้ว ไม่อนุญาตให้ภิกษุขอเปลี่ยนบาตรใหม่?",
    "options": [
      "ไม่ถึง ๕ นิ้ว (หรือ ๕ รอยแผล)",
      "ไม่ถึง ๒ นิ้ว",
      "ไม่ถึง ๑ ฝ่ามือ",
      "ไม่แตกหัก"
    ],
    "correctIndex": 0,
    "explanation": "บาตรมีแผลไม่ถึง ๕ นิ้ว ไปขอบาตรใหม่ ต้องนิสสัคคิยปาจิตตีย์",
    "reference": "วินัยมุข เล่ม ๒ ปัตตวรรค",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-057",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 3 ข้อ 57] อาบัติอนิยตะ ๒ สิกขาบท หมายถึงอาบัติประเภทใด?",
    "options": [
      "อาบัติที่ยังไม่แน่ชัดว่าจะเป็นปาราชิก สังฆาทิเสส หรือปาจิตตีย์ ต้องไต่สวนตามพยาน",
      "อาบัติเบา",
      "อาบัติจร",
      "สิกขาบทชั่วคราว"
    ],
    "correctIndex": 0,
    "explanation": "อนิยตะมี ๒ ข้อ เป็นอาบัติที่ยังไม่แน่นอน ขึ้นอยู่กับการซักถามตามคำอุบาสิกาผู้มีศรัทธา",
    "reference": "วินัยมุข เล่ม ๑ อนิยตกัณฑ์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-058",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 3 ข้อ 58] อาบัติปาฏิเทสนียะของภิกษุ มีกี่สิกขาบท?",
    "options": [
      "๔ สิกขาบท",
      "๒ สิกขาบท",
      "๘ สิกขาบท",
      "๑๒ สิกขาบท"
    ],
    "correctIndex": 0,
    "explanation": "ปาฏิเทสนียะมี ๔ สิกขาบท เป็นอาบัติที่ต้องกล่าวประจานตนว่าทำสิ่งไม่สมควร",
    "reference": "วินัยมุข เล่ม ๒ ปาฏิเทสนียกัณฑ์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-059",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 3 ข้อ 59] เสขิยวัตร (มารยาทและข้อวัตรปฏิบัติ) มีทั้งหมดกี่สิกขาบท?",
    "options": [
      "๗๕ สิกขาบท",
      "๕๐ สิกขาบท",
      "๑๐๐ สิกขาบท",
      "๒๒๗ สิกขาบท"
    ],
    "correctIndex": 0,
    "explanation": "เสขิยวัตรมี ๗๕ สิกขาบท แบ่งเป็น สารูป ๒๖ โภชนปฏิสังยุตต์ ๓๐ ธัมมเทสนา ๑๖ ปกิณณกะ ๓",
    "reference": "วินัยมุข เล่ม ๑ เสขิยกัณฑ์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-060",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 3 ข้อ 60] อธิกรณสมถะ ๗ ข้อใดคือ 'สัมมุขาวินัย'?",
    "options": [
      "การระงับอธิกรณ์ในที่พร้อมหน้าสงฆ์ บุคคล วัตถุ และธรรมวินัย",
      "การตัดสินตามเสียงข้างมาก",
      "การยกฟ้องพระอรหันต์",
      "การประนีประนอม"
    ],
    "correctIndex": 0,
    "explanation": "สัมมุขาวินัย คือ การพิจารณาตัดสินในที่พร้อมหน้าคู่กรณีและหลักธรรมวินัย",
    "reference": "วินัยมุข เล่ม ๑ อธิกรณสมถะ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-061",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 3 ข้อ 61] อธิกรณ์ ๔ ในพระวินัย ข้อใดคือ 'วิวาทาธิกรณ์'?",
    "options": [
      "การโต้เถียงขัดแย้งกันเรื่องพระธรรมวินัย (ว่าสิ่งนี้เป็นธรรม สิ่งนี้ไม่เป็นธรรม)",
      "การฟ้องร้องเรื่องอาบัติ",
      "การลงโทษภิกษุ",
      "การทำสังฆกรรม"
    ],
    "correctIndex": 0,
    "explanation": "วิวาทาธิกรณ์ คือ การวิวาทโต้เถียงกันในข้อพระธรรมวินัย",
    "reference": "วินัยมุข เล่ม ๑ อธิกรณ์ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-062",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 3 ข้อ 62] อนุวาทาธิกรณ์ หมายถึงอธิกรณ์ประเภทใด?",
    "options": [
      "การโจทก์ฟ้องร้องกันด้วยเรื่องศีลวิบัติ อาจารวิบัติ ทิฏฐิวิบัติ หรืออาชีววิบัติ",
      "การทะเลาะแย่งที่อยู่",
      "การขัดแย้งเรื่องเงิน",
      "การแบ่งพวก"
    ],
    "correctIndex": 0,
    "explanation": "อนุวาทาธิกรณ์ คือ การกล่าวหาฟ้องร้องเรื่องความประพฤติและอาบัติ",
    "reference": "วินัยมุข เล่ม ๑ อธิกรณ์ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-063",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 3 ข้อ 63] อาปัตตาธิกรณ์ หมายถึงอะไร?",
    "options": [
      "การต้องอาบัติและการปรับอาบัติออกจากอาบัตินั้นๆ",
      "การระงับข้อพิพาท",
      "การสวดมนต์",
      "การลาสิกขา"
    ],
    "correctIndex": 0,
    "explanation": "อาปัตตาธิกรณ์ คือ เรื่องที่เกี่ยวกับการต้องอาบัติและการทำพิธีออกจากอาบัติตามวินัย",
    "reference": "วินัยมุข เล่ม ๑ อธิกรณ์ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-064",
    "grade": "โท",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 3 ข้อ 64] กิจจาธิกรณ์ หมายถึงอธิกรณ์ประเภทใด?",
    "options": [
      "กิจธุระหรือการทำสังฆกรรมของสงฆ์ เช่น อุปสมบท สวดปาฏิโมกข์ กรานกฐิน",
      "กิจนิมนต์ของโยม",
      "การสร้างศาลา",
      "การบิณฑบาต"
    ],
    "correctIndex": 0,
    "explanation": "กิจจาธิกรณ์ คือ กิจการงานสังฆกรรมของสงฆ์ที่ต้องประชุมทำร่วมกัน",
    "reference": "วินัยมุข เล่ม ๑ อธิกรณ์ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-065",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 3 ข้อ 65] การวิกัปจีวร (ทำ ๒ เจ้าของ) มีวัตถุประสงค์เพื่ออะไร?",
    "options": [
      "เพื่อจะได้เก็บอติเรกจีวรไว้ได้เกิน ๑๐ วันโดยไม่เป็นอาบัตินิสสัคคิยปาจิตตีย์",
      "เพื่อขายต่อ",
      "เพื่อเปลี่ยนสี",
      "เพื่อถวายพระพุทธเจ้า"
    ],
    "correctIndex": 0,
    "explanation": "การวิกัปคือการมอบกรรมสิทธิ์ร่วมแก่ภิกษุอื่น ทำให้เก็บผ้าไว้ได้โดยไม่ผิดวินัย",
    "reference": "วินัยมุข เล่ม ๒ การวิกัป",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-066",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 3 ข้อ 66] เยภุยยสิกา ในอธิกรณสมถะ ๗ หมายถึงวิธีระงับอธิกรณ์แบบใด?",
    "options": [
      "การตัดสินตามเสียงข้างมากของสงฆ์ที่เป็นธรรมวาที",
      "การประนีประนอม",
      "การขับไล่",
      "การให้สัตย์ปฏิญาณ"
    ],
    "correctIndex": 0,
    "explanation": "เยภุยยสิกา คือ การตัดสินอธิกรณ์โดยถือเสียงส่วนมากของภิกษุผู้มีธรรม",
    "reference": "วินัยมุข เล่ม ๑ อธิกรณสมถะ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-067",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 3 ข้อ 67] ติณวัตถารกวินัย เปรียบเสมือนการทำสิ่งใดเพื่อระงับความขัดแย้งของสงฆ์?",
    "options": [
      "กิริยาดุจเอาหญ้ากลบไว้ (การประนีประนอมยกเลิกความผิดอาบัติเล็กน้อยของทั้ง ๒ ฝ่าย)",
      "การตัดสิทธิ์บวช",
      "การลงโทษหนัก",
      "การสวดตัดขาด"
    ],
    "correctIndex": 0,
    "explanation": "ติณวัตถารกวินัย คือ การประนีประนอมยกเลิกอาบัติลหุโทษทั้งหมดพร้อมกันเพื่อความสามัคคี",
    "reference": "วินัยมุข เล่ม ๑ อธิกรณสมถะ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-068",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 3 ข้อ 68] ภิกษุพรากของเขียว (ตัดต้นไม้ ทำลายพืชคาม/ภูตคาม) ต้องอาบัติประเภทใด?",
    "options": [
      "ปาจิตตีย์ (ภูตคามวรรค)",
      "ปาราชิก",
      "สังฆาทิเสส",
      "ทุกกฏ"
    ],
    "correctIndex": 0,
    "explanation": "ตัดฟันทำลายต้นไม้ของเขียว ต้องอาบัติปาจิตตีย์",
    "reference": "วินัยมุข เล่ม ๑ ภูตคามวรรค",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-069",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 3 ข้อ 69] ภิกษุนอนร่วมห้องกับอนุปสัมบัน (คฤหัสถ์หรือสามเณร) เกินกี่คืนจึงต้องอาบัติปาจิตตีย์?",
    "options": [
      "เกิน ๓ คืน (นอนคืนที่ ๔ ต้องอาบัติ)",
      "เกิน ๑ คืน",
      "เกิน ๗ คืน",
      "เกิน ๑ เดือน"
    ],
    "correctIndex": 0,
    "explanation": "นอนในที่มุงที่บังอันเดียวกันกับอนุปสัมบันเกิน ๓ คืน ต้องปาจิตตีย์ในคืนที่ ๔",
    "reference": "วินัยมุข เล่ม ๑ มุสาวาทวรรค",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-070",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 3 ข้อ 70] สังฆกรรมประเภท 'ญัตติจตุตถกรรม' หมายถึงอะไร?",
    "options": [
      "การตั้งญัตติ ๑ ครั้ง และสวดประกาศขอมติสงฆ์ (อนุสาวนา) ๓ ครั้ง รวมเป็น ๔",
      "การประชุมสงฆ์ ๔ รูป",
      "การสวดมนต์ ๔ ทิศ",
      "การตั้งกระทู้ ๔ ครั้ง"
    ],
    "correctIndex": 0,
    "explanation": "ญัตติจตุตถกรรม คือ สังฆกรรมสำคัญสูงสุด สวดตั้งญัตติ ๑ และอนุสาวนา ๓",
    "reference": "วินัยมุข เล่ม ๓ สังฆกรรม",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-071",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 3 ข้อ 71] สังฆกรรมประเภทใดต้องใช้คณะสงฆ์อย่างน้อย ๒๐ รูปในการทำพิธี?",
    "options": [
      "การสวดอัพภาน (รับภิกษุต้องสังฆาทิเสสพ้นมลทินกลับเข้าหมู่)",
      "การอุปสมบท",
      "การสวดปาฏิโมกข์",
      "การกรานกฐิน"
    ],
    "correctIndex": 0,
    "explanation": "การสวดอัพภานต้องใช้องค์สงฆ์อย่างน้อย ๒๐ รูปจึงจะทำสังฆกรรมสำเร็จ",
    "reference": "วินัยมุข เล่ม ๓ วุฏฐานวิธี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-072",
    "grade": "โท",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 3 ข้อ 72] การกรานกฐิน ต้องมีภิกษุจำพรรษาถ้วนไตรมาสในวัดนั้นอย่างน้อยกี่รูป?",
    "options": [
      "๕ รูปขึ้นไป",
      "๔ รูป",
      "๓ รูป",
      "๑๐ รูป"
    ],
    "correctIndex": 0,
    "explanation": "การกรานกฐินต้องมีพระภิกษุผู้จำพรรษาครบ ๓ เดือนในวัดนั้นอย่างน้อย ๕ รูป",
    "reference": "วินัยมุข เล่ม ๓ กฐินขันธกะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-073",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 3 ข้อ 73] อาบัติที่ระงับได้ด้วยการแสดงอาบัติต่อภิกษุรูปเดียว เรียกว่าอาบัติประเภทใด?",
    "options": [
      "ลหุโทษ (อาบัติเบา เช่น ปาจิตตีย์ ปาฏิเทสนียะ ทุกกฏ ทุพภาสิต)",
      "ครุกรรม",
      "ปาราชิก",
      "สังฆาทิเสส"
    ],
    "correctIndex": 0,
    "explanation": "ลหุโทษสามารถแสดงอาบัติต่อภิกษุรูปเดียวเพื่อออกจากอาบัติได้",
    "reference": "วินัยมุข เล่ม ๑ หมวดอาบัติ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-074",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 3 ข้อ 74] ภิกษุผู้บวชมาครบ ๕ พรรษา และมีความรู้พระธรรมวินัยเพียงพอ เรียกว่าอะไร?",
    "options": [
      "นิสสยมุตตกะ (ผู้พ้นจากการถือนิสัยอุปัชฌาย์)",
      "นวกภิกษุ",
      "มัชฌิมภิกษุ",
      "เถระ"
    ],
    "correctIndex": 0,
    "explanation": "นิสสยมุตตกะ คือ ภิกษุผู้พ้นจากการปกครองดูแลของอุปัชฌาย์ สามารถอยู่โดยลำพังได้",
    "reference": "วินัยมุข เล่ม ๓ นิสสัย",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-075",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 3 ข้อ 75] ภิกษุที่มีพรรษาตั้งแต่ ๑๐ พรรษาขึ้นไป เรียกว่าอะไร?",
    "options": [
      "พระเถระ (มีสิทธิ์เป็นพระอุปัชฌาย์ได้)",
      "มัชฌิมภิกษุ",
      "นวกภิกษุ",
      "พระมหาเถระ"
    ],
    "correctIndex": 0,
    "explanation": "ภิกษุมีพรรษาครบ ๑๐ พรรษาขึ้นไปเรียกว่า พระเถระ สามารถเป็นอุปัชฌาย์และอาจารย์ได้",
    "reference": "วินัยมุข เล่ม ๓ พรรษาและฐานะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-076",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 4 ข้อ 76] อาบัตินิสสัคคิยปาจิตตีย์มีทั้งหมดกี่สิกขาบท?",
    "options": [
      "๓๐ สิกขาบท (แบ่งเป็น ๓ วรรค วรรคละ ๑๐ ข้อ)",
      "๑๓ สิกขาบท",
      "๙๒ สิกขาบท",
      "๒๒๗ สิกขาบท"
    ],
    "correctIndex": 0,
    "explanation": "นิสสัคคิยปาจิตตีย์มี ๓๐ สิกขาบท ได้แก่ จีวรวรรค โกสิยวรรค และปัตตวรรค",
    "reference": "วินัยมุข เล่ม ๒ นิสสัคคิยปาจิตตีย์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-077",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 4 ข้อ 77] ภิกษุเก็บอติเรกจีวรไว้ได้ไม่เกินกี่วันโดยไม่ได้อธิษฐานหรือวิกัป?",
    "options": [
      "ไม่เกิน ๑๐ วัน (วันที่ ๑๑ เป็นต้นไปต้องอาบัติ)",
      "ไม่เกิน ๗ วัน",
      "ไม่เกิน ๑ เดือน",
      "ไม่เกิน ๑ พรรษา"
    ],
    "correctIndex": 0,
    "explanation": "อติเรกจีวรเก็บไว้ได้ ๑๐ วัน เกินนั้นต้องนิสสัคคิยปาจิตตีย์",
    "reference": "วินัยมุข เล่ม ๒ จีวรวรรค สิกขาบทที่ ๑",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-078",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 4 ข้อ 78] คำว่า 'นิสสัคคิยะ' ในหมวดอาบัตินิสสัคคิยปาจิตตีย์ หมายความว่าอย่างไร?",
    "options": [
      "ต้องสละสิ่งของที่เป็นเหตุต้องอาบัตินั้นออกไปก่อน จึงจะแสดงอาบัติตก",
      "ต้องติดคุกสงฆ์",
      "ต้องอยู่กรรม ๖ คืน",
      "ต้องลาสิกขา"
    ],
    "correctIndex": 0,
    "explanation": "นิสสัคคิยะ แปลว่า จำต้องสละของนั้นให้แก่สงฆ์ คณะ หรือบุคคลก่อน จึงจะแสดงอาบัติได้",
    "reference": "วินัยมุข เล่ม ๒ นิสสัคคิยกัณฑ์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-079",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 4 ข้อ 79] ภิกษุรับเงินทองหรือยินดีเงินทองที่เขาเก็บไว้เพื่อตน ต้องอาบัติใดในหมวดนิสสัคคิยปาจิตตีย์?",
    "options": [
      "รูปิยสิกขาบท (โกสิยวรรค สิกขาบทที่ ๘)",
      "จีวรวรรค ข้อ ๓",
      "ปัตตวรรค ข้อ ๑",
      "ปาจิตตีย์ ข้อ ๑๑"
    ],
    "correctIndex": 0,
    "explanation": "รับเอง ใช้ให้ผู้อื่นรับ หรือยินดีในเงินทอง ต้องนิสสัคคิยปาจิตตีย์ (รูปิยสิกขาบท)",
    "reference": "วินัยมุข เล่ม ๒ โกสิยวรรค",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-080",
    "grade": "โท",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 4 ข้อ 80] ภิกษุเก็บเภสัช ๕ (เนยใส เนยข้น น้ำมัน น้ำผึ้ง น้ำอ้อย) ไว้ฉันได้ไม่เกินกี่วัน?",
    "options": [
      "ไม่เกิน ๗ วัน (สัตตาหกาลิก)",
      "ไม่เกิน ๑ วัน",
      "ไม่เกิน ๑๕ วัน",
      "ไม่เกิน ๑ เดือน"
    ],
    "correctIndex": 0,
    "explanation": "เภสัช ๕ เก็บไว้ฉันได้ไม่เกิน ๗ วัน",
    "reference": "วินัยมุข เล่ม ๒ ปัตตวรรค",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-081",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 4 ข้อ 81] บาตรที่มีรอยร้าวไม่ถึงกี่นิ้ว ไม่อนุญาตให้ภิกษุขอเปลี่ยนบาตรใหม่?",
    "options": [
      "ไม่ถึง ๕ นิ้ว (หรือ ๕ รอยแผล)",
      "ไม่ถึง ๒ นิ้ว",
      "ไม่ถึง ๑ ฝ่ามือ",
      "ไม่แตกหัก"
    ],
    "correctIndex": 0,
    "explanation": "บาตรมีแผลไม่ถึง ๕ นิ้ว ไปขอบาตรใหม่ ต้องนิสสัคคิยปาจิตตีย์",
    "reference": "วินัยมุข เล่ม ๒ ปัตตวรรค",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-082",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 4 ข้อ 82] อาบัติอนิยตะ ๒ สิกขาบท หมายถึงอาบัติประเภทใด?",
    "options": [
      "อาบัติที่ยังไม่แน่ชัดว่าจะเป็นปาราชิก สังฆาทิเสส หรือปาจิตตีย์ ต้องไต่สวนตามพยาน",
      "อาบัติเบา",
      "อาบัติจร",
      "สิกขาบทชั่วคราว"
    ],
    "correctIndex": 0,
    "explanation": "อนิยตะมี ๒ ข้อ เป็นอาบัติที่ยังไม่แน่นอน ขึ้นอยู่กับการซักถามตามคำอุบาสิกาผู้มีศรัทธา",
    "reference": "วินัยมุข เล่ม ๑ อนิยตกัณฑ์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-083",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 4 ข้อ 83] อาบัติปาฏิเทสนียะของภิกษุ มีกี่สิกขาบท?",
    "options": [
      "๔ สิกขาบท",
      "๒ สิกขาบท",
      "๘ สิกขาบท",
      "๑๒ สิกขาบท"
    ],
    "correctIndex": 0,
    "explanation": "ปาฏิเทสนียะมี ๔ สิกขาบท เป็นอาบัติที่ต้องกล่าวประจานตนว่าทำสิ่งไม่สมควร",
    "reference": "วินัยมุข เล่ม ๒ ปาฏิเทสนียกัณฑ์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-084",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 4 ข้อ 84] เสขิยวัตร (มารยาทและข้อวัตรปฏิบัติ) มีทั้งหมดกี่สิกขาบท?",
    "options": [
      "๗๕ สิกขาบท",
      "๕๐ สิกขาบท",
      "๑๐๐ สิกขาบท",
      "๒๒๗ สิกขาบท"
    ],
    "correctIndex": 0,
    "explanation": "เสขิยวัตรมี ๗๕ สิกขาบท แบ่งเป็น สารูป ๒๖ โภชนปฏิสังยุตต์ ๓๐ ธัมมเทสนา ๑๖ ปกิณณกะ ๓",
    "reference": "วินัยมุข เล่ม ๑ เสขิยกัณฑ์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-085",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 4 ข้อ 85] อธิกรณสมถะ ๗ ข้อใดคือ 'สัมมุขาวินัย'?",
    "options": [
      "การระงับอธิกรณ์ในที่พร้อมหน้าสงฆ์ บุคคล วัตถุ และธรรมวินัย",
      "การตัดสินตามเสียงข้างมาก",
      "การยกฟ้องพระอรหันต์",
      "การประนีประนอม"
    ],
    "correctIndex": 0,
    "explanation": "สัมมุขาวินัย คือ การพิจารณาตัดสินในที่พร้อมหน้าคู่กรณีและหลักธรรมวินัย",
    "reference": "วินัยมุข เล่ม ๑ อธิกรณสมถะ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-086",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 4 ข้อ 86] อธิกรณ์ ๔ ในพระวินัย ข้อใดคือ 'วิวาทาธิกรณ์'?",
    "options": [
      "การโต้เถียงขัดแย้งกันเรื่องพระธรรมวินัย (ว่าสิ่งนี้เป็นธรรม สิ่งนี้ไม่เป็นธรรม)",
      "การฟ้องร้องเรื่องอาบัติ",
      "การลงโทษภิกษุ",
      "การทำสังฆกรรม"
    ],
    "correctIndex": 0,
    "explanation": "วิวาทาธิกรณ์ คือ การวิวาทโต้เถียงกันในข้อพระธรรมวินัย",
    "reference": "วินัยมุข เล่ม ๑ อธิกรณ์ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-087",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 4 ข้อ 87] อนุวาทาธิกรณ์ หมายถึงอธิกรณ์ประเภทใด?",
    "options": [
      "การโจทก์ฟ้องร้องกันด้วยเรื่องศีลวิบัติ อาจารวิบัติ ทิฏฐิวิบัติ หรืออาชีววิบัติ",
      "การทะเลาะแย่งที่อยู่",
      "การขัดแย้งเรื่องเงิน",
      "การแบ่งพวก"
    ],
    "correctIndex": 0,
    "explanation": "อนุวาทาธิกรณ์ คือ การกล่าวหาฟ้องร้องเรื่องความประพฤติและอาบัติ",
    "reference": "วินัยมุข เล่ม ๑ อธิกรณ์ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-088",
    "grade": "โท",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 4 ข้อ 88] อาปัตตาธิกรณ์ หมายถึงอะไร?",
    "options": [
      "การต้องอาบัติและการปรับอาบัติออกจากอาบัตินั้นๆ",
      "การระงับข้อพิพาท",
      "การสวดมนต์",
      "การลาสิกขา"
    ],
    "correctIndex": 0,
    "explanation": "อาปัตตาธิกรณ์ คือ เรื่องที่เกี่ยวกับการต้องอาบัติและการทำพิธีออกจากอาบัติตามวินัย",
    "reference": "วินัยมุข เล่ม ๑ อธิกรณ์ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-089",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 4 ข้อ 89] กิจจาธิกรณ์ หมายถึงอธิกรณ์ประเภทใด?",
    "options": [
      "กิจธุระหรือการทำสังฆกรรมของสงฆ์ เช่น อุปสมบท สวดปาฏิโมกข์ กรานกฐิน",
      "กิจนิมนต์ของโยม",
      "การสร้างศาลา",
      "การบิณฑบาต"
    ],
    "correctIndex": 0,
    "explanation": "กิจจาธิกรณ์ คือ กิจการงานสังฆกรรมของสงฆ์ที่ต้องประชุมทำร่วมกัน",
    "reference": "วินัยมุข เล่ม ๑ อธิกรณ์ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-090",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 4 ข้อ 90] การวิกัปจีวร (ทำ ๒ เจ้าของ) มีวัตถุประสงค์เพื่ออะไร?",
    "options": [
      "เพื่อจะได้เก็บอติเรกจีวรไว้ได้เกิน ๑๐ วันโดยไม่เป็นอาบัตินิสสัคคิยปาจิตตีย์",
      "เพื่อขายต่อ",
      "เพื่อเปลี่ยนสี",
      "เพื่อถวายพระพุทธเจ้า"
    ],
    "correctIndex": 0,
    "explanation": "การวิกัปคือการมอบกรรมสิทธิ์ร่วมแก่ภิกษุอื่น ทำให้เก็บผ้าไว้ได้โดยไม่ผิดวินัย",
    "reference": "วินัยมุข เล่ม ๒ การวิกัป",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-091",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 4 ข้อ 91] เยภุยยสิกา ในอธิกรณสมถะ ๗ หมายถึงวิธีระงับอธิกรณ์แบบใด?",
    "options": [
      "การตัดสินตามเสียงข้างมากของสงฆ์ที่เป็นธรรมวาที",
      "การประนีประนอม",
      "การขับไล่",
      "การให้สัตย์ปฏิญาณ"
    ],
    "correctIndex": 0,
    "explanation": "เยภุยยสิกา คือ การตัดสินอธิกรณ์โดยถือเสียงส่วนมากของภิกษุผู้มีธรรม",
    "reference": "วินัยมุข เล่ม ๑ อธิกรณสมถะ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-092",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 4 ข้อ 92] ติณวัตถารกวินัย เปรียบเสมือนการทำสิ่งใดเพื่อระงับความขัดแย้งของสงฆ์?",
    "options": [
      "กิริยาดุจเอาหญ้ากลบไว้ (การประนีประนอมยกเลิกความผิดอาบัติเล็กน้อยของทั้ง ๒ ฝ่าย)",
      "การตัดสิทธิ์บวช",
      "การลงโทษหนัก",
      "การสวดตัดขาด"
    ],
    "correctIndex": 0,
    "explanation": "ติณวัตถารกวินัย คือ การประนีประนอมยกเลิกอาบัติลหุโทษทั้งหมดพร้อมกันเพื่อความสามัคคี",
    "reference": "วินัยมุข เล่ม ๑ อธิกรณสมถะ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-093",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 4 ข้อ 93] ภิกษุพรากของเขียว (ตัดต้นไม้ ทำลายพืชคาม/ภูตคาม) ต้องอาบัติประเภทใด?",
    "options": [
      "ปาจิตตีย์ (ภูตคามวรรค)",
      "ปาราชิก",
      "สังฆาทิเสส",
      "ทุกกฏ"
    ],
    "correctIndex": 0,
    "explanation": "ตัดฟันทำลายต้นไม้ของเขียว ต้องอาบัติปาจิตตีย์",
    "reference": "วินัยมุข เล่ม ๑ ภูตคามวรรค",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-094",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 4 ข้อ 94] ภิกษุนอนร่วมห้องกับอนุปสัมบัน (คฤหัสถ์หรือสามเณร) เกินกี่คืนจึงต้องอาบัติปาจิตตีย์?",
    "options": [
      "เกิน ๓ คืน (นอนคืนที่ ๔ ต้องอาบัติ)",
      "เกิน ๑ คืน",
      "เกิน ๗ คืน",
      "เกิน ๑ เดือน"
    ],
    "correctIndex": 0,
    "explanation": "นอนในที่มุงที่บังอันเดียวกันกับอนุปสัมบันเกิน ๓ คืน ต้องปาจิตตีย์ในคืนที่ ๔",
    "reference": "วินัยมุข เล่ม ๑ มุสาวาทวรรค",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-095",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 4 ข้อ 95] สังฆกรรมประเภท 'ญัตติจตุตถกรรม' หมายถึงอะไร?",
    "options": [
      "การตั้งญัตติ ๑ ครั้ง และสวดประกาศขอมติสงฆ์ (อนุสาวนา) ๓ ครั้ง รวมเป็น ๔",
      "การประชุมสงฆ์ ๔ รูป",
      "การสวดมนต์ ๔ ทิศ",
      "การตั้งกระทู้ ๔ ครั้ง"
    ],
    "correctIndex": 0,
    "explanation": "ญัตติจตุตถกรรม คือ สังฆกรรมสำคัญสูงสุด สวดตั้งญัตติ ๑ และอนุสาวนา ๓",
    "reference": "วินัยมุข เล่ม ๓ สังฆกรรม",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-096",
    "grade": "โท",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 4 ข้อ 96] สังฆกรรมประเภทใดต้องใช้คณะสงฆ์อย่างน้อย ๒๐ รูปในการทำพิธี?",
    "options": [
      "การสวดอัพภาน (รับภิกษุต้องสังฆาทิเสสพ้นมลทินกลับเข้าหมู่)",
      "การอุปสมบท",
      "การสวดปาฏิโมกข์",
      "การกรานกฐิน"
    ],
    "correctIndex": 0,
    "explanation": "การสวดอัพภานต้องใช้องค์สงฆ์อย่างน้อย ๒๐ รูปจึงจะทำสังฆกรรมสำเร็จ",
    "reference": "วินัยมุข เล่ม ๓ วุฏฐานวิธี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-097",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 4 ข้อ 97] การกรานกฐิน ต้องมีภิกษุจำพรรษาถ้วนไตรมาสในวัดนั้นอย่างน้อยกี่รูป?",
    "options": [
      "๕ รูปขึ้นไป",
      "๔ รูป",
      "๓ รูป",
      "๑๐ รูป"
    ],
    "correctIndex": 0,
    "explanation": "การกรานกฐินต้องมีพระภิกษุผู้จำพรรษาครบ ๓ เดือนในวัดนั้นอย่างน้อย ๕ รูป",
    "reference": "วินัยมุข เล่ม ๓ กฐินขันธกะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-098",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 4 ข้อ 98] อาบัติที่ระงับได้ด้วยการแสดงอาบัติต่อภิกษุรูปเดียว เรียกว่าอาบัติประเภทใด?",
    "options": [
      "ลหุโทษ (อาบัติเบา เช่น ปาจิตตีย์ ปาฏิเทสนียะ ทุกกฏ ทุพภาสิต)",
      "ครุกรรม",
      "ปาราชิก",
      "สังฆาทิเสส"
    ],
    "correctIndex": 0,
    "explanation": "ลหุโทษสามารถแสดงอาบัติต่อภิกษุรูปเดียวเพื่อออกจากอาบัติได้",
    "reference": "วินัยมุข เล่ม ๑ หมวดอาบัติ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-099",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 4 ข้อ 99] ภิกษุผู้บวชมาครบ ๕ พรรษา และมีความรู้พระธรรมวินัยเพียงพอ เรียกว่าอะไร?",
    "options": [
      "นิสสยมุตตกะ (ผู้พ้นจากการถือนิสัยอุปัชฌาย์)",
      "นวกภิกษุ",
      "มัชฌิมภิกษุ",
      "เถระ"
    ],
    "correctIndex": 0,
    "explanation": "นิสสยมุตตกะ คือ ภิกษุผู้พ้นจากการปกครองดูแลของอุปัชฌาย์ สามารถอยู่โดยลำพังได้",
    "reference": "วินัยมุข เล่ม ๓ นิสสัย",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "tho-v-100",
    "grade": "โท",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 4 ข้อ 100] ภิกษุที่มีพรรษาตั้งแต่ ๑๐ พรรษาขึ้นไป เรียกว่าอะไร?",
    "options": [
      "พระเถระ (มีสิทธิ์เป็นพระอุปัชฌาย์ได้)",
      "มัชฌิมภิกษุ",
      "นวกภิกษุ",
      "พระมหาเถระ"
    ],
    "correctIndex": 0,
    "explanation": "ภิกษุมีพรรษาครบ ๑๐ พรรษาขึ้นไปเรียกว่า พระเถระ สามารถเป็นอุปัชฌาย์และอาจารย์ได้",
    "reference": "วินัยมุข เล่ม ๓ พรรษาและฐานะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
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
    "id": "ek-d-001",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "วิสุทธิ ๗ (ความบริสุทธิ์หมดจด ๗ ขั้นตอนแห่งการปฏิบัติธรรม) ขั้นแรกคือข้อใด?",
    "options": [
      "สีลวิสุทธิ (ความหมดจดแห่งศีล)",
      "จิตตวิสุทธิ (ความหมดจดแห่งจิต/สมาธิ)",
      "ทิฏฐิวิสุทธิ",
      "ญาณทัสสนวิสุทธิ"
    ],
    "correctIndex": 0,
    "explanation": "วิสุทธิ ๗ เริ่มต้นที่ ๑. สีลวิสุทธิ ๒. จิตตวิสุทธิ ๓. ทิฏฐิวิสุทธิ ๔. กังขาวิตรณวิสุทธิ ๕. มัคคามัคคญาณทัสสนวิสุทธิ ๖. ปฏิปทาญาณทัสสนวิสุทธิ ๗. ญาณทัสสนวิสุทธิ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิสุทธิ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-002",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "'จิตตวิสุทธิ' ในวิสุทธิ ๗ หมายถึงการอบรมสิ่งใดจนบริสุทธิ์ตั้งมั่น?",
    "options": [
      "การทำสมาธิจนจิตตั้งมั่นปราศจากนิวรณ์ ๕ (อุปจารสมาธิและอัปปนาสมาธิ)",
      "การรักษาศีล ๒๒๗",
      "การเห็นรูปนาม",
      "การตัดกิเลส"
    ],
    "correctIndex": 0,
    "explanation": "จิตตวิสุทธิ คือ ความหมดจดแห่งจิต ได้แก่การเจริญสมาธิจนจิตผ่องใส ปราศจากนิวรณ์",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิสุทธิ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-003",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "'ทิฏฐิวิสุทธิ' ในวิสุทธิ ๗ คือความเห็นถูกต้องบริสุทธิ์ด้วยการจำแนกสิ่งใด?",
    "options": [
      "การจำแนกรูปและนาม (นามรูปปริจเฉทญาณ) ว่าไม่ใช่สัตว์ บุคคล ตัวตน",
      "การจำแนกคนดีคนชั่ว",
      "การจำแนกบุญบาป",
      "การจำแนกพระธรรม"
    ],
    "correctIndex": 0,
    "explanation": "ทิฏฐิวิสุทธิ คือ การรู้แจ้งเห็นจริงแยกแยะ รูป และ นาม ปราศจากความยึดถือว่ามีตัวตน",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิสุทธิ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-004",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "'กังขาวิตรณวิสุทธิ' ในวิสุทธิ ๗ หมายถึงการข้ามพ้นความสงสัยด้วยการรู้เห็นสิ่งใด?",
    "options": [
      "รู้เห็นปัจจัยแห่งรูปนามตามกฎปฏิจจสมุปบาทและกรรม (ปัจจยปริคคหญาณ)",
      "รู้เห็นอนาคต",
      "รู้เห็นชาติก่อน",
      "รู้เห็นสวรรค์"
    ],
    "correctIndex": 0,
    "explanation": "กังขาวิตรณวิสุทธิ คือ ปัญญาข้ามพ้นความลังเลสงสัยในกาลทั้ง ๓ เพราะรู้แจ้งปัจจัยแห่งรูปนาม",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิสุทธิ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-005",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "วิปัสสนูปกิเลส ๑๐ (อุปสรรคหลอกล่อให้หลงผิดระหว่างปฏิบัติวิปัสสนา) ข้อใดเกิดขึ้นบ่อยที่สุด?",
    "options": [
      "โอภาส (แสงสว่างจ้า) และ ญาณ (ความรู้ว่องไว)",
      "ความง่วงนอน",
      "ความโกรธ",
      "ความกลัว"
    ],
    "correctIndex": 0,
    "explanation": "โอภาส, ปีติ, ปัสสัทธิ, สุข, ญาณ ฯลฯ ทำให้นักปฏิบัติหลงสำคัญผิดว่าตนบรรลุมรรคผลแล้ว",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิปัสสนูปกิเลส ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-006",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "วิปัสสนาญาณ ๙ ญาณแรกสุดคือข้อใด?",
    "options": [
      "อุทยัพพยญาณ (ญาณหยั่งรู้ความเกิดและความดับของรูปนาม)",
      "ภังคญาณ",
      "ภยญาณ",
      "มุญจิตุกัมยตาญาณ"
    ],
    "correctIndex": 0,
    "explanation": "วิปัสสนาญาณ ๙ เริ่มต้นด้วย อุทยัพพยญาณ (รู้การเกิดดับ)",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิปัสสนาญาณ ๙",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-007",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "'สังขารุเปกขาญาณ' ในวิปัสสนาญาณ ๙ มีลักษณะเด่นอย่างไร?",
    "options": [
      "จิตวางเฉยเป็นกลางต่อสังขารทั้งปวง ไม่ยินดียินร้าย พร้อมเข้าสู่อริยมรรค",
      "จิตกลัวสังขาร",
      "จิตอยากหนีจากสังขาร",
      "จิตหลงในความสุข"
    ],
    "correctIndex": 0,
    "explanation": "สังขารุเปกขาญาณ คือ ปัญญาที่พิจารณาสังขารแล้ววางใจเป็นกลาง เป็นยอดแห่งโลกิยญาณ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิปัสสนาญาณ ๙",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-008",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "สังโยชน์ ๑๐ พระโสดาบันละสังโยชน์ ๓ ข้อใดได้เด็ดขาด?",
    "options": [
      "สักกายทิฏฐิ วิจิกิจฉา สีลัพพตปรามาส",
      "กามราคะ ปฏิฆะ อวิชชา",
      "มานะ อุทธัจจะ อวิชชา",
      "รูปราคะ อรูปราคะ"
    ],
    "correctIndex": 0,
    "explanation": "พระโสดาบันละสังโยชน์ ๓ ข้อแรกได้เด็ดขาด ไม่ตกต่ำสู่อบายภูมิอีก",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สังโยชน์ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-009",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "พระอนาคามี ตัดสังโยชน์ข้อใดเพิ่มจนหมดสิ้น?",
    "options": [
      "กามราคะ และ ปฏิฆะ (ความขัดเคืองใจ)",
      "รูปราคะ และ อรูปราคะ",
      "มานะ และ อวิชชา",
      "สักกายทิฏฐิ"
    ],
    "correctIndex": 0,
    "explanation": "พระอนาคามีตัดกามราคะและปฏิฆะได้เด็ดขาด ละโอรัมภาคิยสังโยชน์ ๕ ได้ครบ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สังโยชน์ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-010",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "พระอรหันต์ ตัดอุทธัมภาคิยสังโยชน์ (สังโยชน์เบื้องสูง ๕ ประการ) ได้หมดสิ้น ข้อใดคือ ๕ ประการนั้น?",
    "options": [
      "รูปราคะ อรูปราคะ มานะ อุทธัจจะ อวิชชา",
      "สักกายทิฏฐิ วิจิกิจฉา สีลัพพตปรามาส กามราคะ ปฏิฆะ",
      "โลภะ โทสะ โมหะ มานะ ทิฏฐิ",
      "ตัณหา มานะ ทิฏฐิ"
    ],
    "correctIndex": 0,
    "explanation": "อุทธัมภาคิยสังโยชน์ ๕ ได้แก่ รูปราคะ อรูปราคะ มานะ อุทธัจจะ อวิชชา พระอรหันต์เท่านั้นที่ละได้หมด",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สังโยชน์ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-011",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "โพธิปักขิยธรรม ๓๗ ประการ ประกอบด้วยหมวดธรรมกี่หมวด?",
    "options": [
      "๗ หมวด (สติปัฏฐาน ๔, สัมมัปปธาน ๔, อิทธิบาท ๔, อินทรีย์ ๕, พละ ๕, โพชฌงค์ ๗, มรรค ๘)",
      "๕ หมวด",
      "๙ หมวด",
      "๑๐ หมวด"
    ],
    "correctIndex": 0,
    "explanation": "โพธิปักขิยธรรม ๓๗ มี ๗ หมวดธรรมเกื้อกูลแก่การตรัสรู้",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก โพธิปักขิยธรรม ๓๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-012",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "อารมณ์ของสมถกรรมฐาน มีกี่กองตามคัมภีร์วิสุทธิมรรค?",
    "options": [
      "๔๐ กอง (กสิณ ๑๐, อสุภะ ๑๐, อนุสสติ ๑๐, อัปปมัญญา ๔, อรูป ๔, อาหาเรปฏิกูลสัญญา ๑, จตุธาตุววัฏฐาน ๑)",
      "๑๐ กอง",
      "๒๐ กอง",
      "๖๐ กอง"
    ],
    "correctIndex": 0,
    "explanation": "สมถกรรมฐานมี ๔๐ กอง สำหรับปรับแก้จริต ๖ ของมนุษย์",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก กรรมฐาน ๔๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-013",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "จริต ๖ ของมนุษย์ ข้อใดเป็นกรรมฐานที่คู่ควรกับ 'ราคจริต' (คนรักสวยรักงาม)?",
    "options": [
      "อสุภกรรมฐาน ๑๐ และ กายคตาสติ (พิจารณาอาการ ๓๒)",
      "กสิณสีแดง",
      "อนุสสติ ๑๐",
      "พรหมวิหาร ๔"
    ],
    "correctIndex": 0,
    "explanation": "ราคจริตควรเจริญอสุภะ ๑๐ และกายคตาสติเพื่อคลายความกำหนัดในรูป",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก จริต ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-014",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "'โทสจริต' (คนมักโกรธ หงุดหงิดง่าย) ควรเจริญกรรมฐานกองใดเป็นพิเศษ?",
    "options": [
      "อัปปมัญญา ๔ (เมตตา กรุณา มุทิตา อุเบกขา) และ วรรณกสิณ ๔ (กสิณสี)",
      "อสุภะ ๑๐",
      "มรณานุสสติ",
      "อาหาเรปฏิกูลสัญญา"
    ],
    "correctIndex": 0,
    "explanation": "โทสจริตควรเจริญเมตตาพรหมวิหารเพื่อดับไฟโทสะ และเพ่งวรรณกสิณสีเย็นตา",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก จริต ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-015",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "'โมหจริต' และ 'วิตักกจริต' (คนขี้หลง ขี้ฟุ้งซ่าน) ควรฝึกกรรมฐานกองใด?",
    "options": [
      "อานาปานสติ (กำหนดลมหายใจเข้าออก)",
      "อสุภะ ๑๐",
      "กสิณไฟ",
      "เพ่งซากศพ"
    ],
    "correctIndex": 0,
    "explanation": "อานาปานสติเป็นยอดกรรมฐานในการรวบรวมจิต ดึงความคิดฟุ้งซ่านกลับสู่ปัจจุบัน",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก จริต ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-016",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "สมาธิ ๓ ระดับ ข้อใดคือสมาธิแน่วแน่เข้าสู่อัปปนาฌาน?",
    "options": [
      "อัปปนาสมาธิ (แน่วแน่ดิ่งลึกเป็นองค์ฌาน)",
      "ขณิกสมาธิ (ชั่วขณะ)",
      "อุปจารสมาธิ (เฉียดฌาน)",
      "มิจฉาสมาธิ"
    ],
    "correctIndex": 0,
    "explanation": "อัปปนาสมาธิ คือ สมาธิขั้นสูงแนบแน่นมั่นคง จิตรวมเป็นหนึ่งเดียวตัดอารมณ์ภายนอก",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สมาธิ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-017",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "อนุสสติ ๑๐ ข้อใดคือ 'อุปสมานุสสติ'?",
    "options": [
      "การตามระลึกถึงคุณของพระนิพพานอันสงบระงับจากกิเลสทั้งปวง",
      "การระลึกถึงพระพุทธคุณ",
      "การระลึกถึงความตาย",
      "การระลึกถึงเทวดา"
    ],
    "correctIndex": 0,
    "explanation": "อุปสมานุสสติ คือ การระลึกถึงคุณธรรมแห่งพระนิพพานอันสงบเย็น",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก อนุสสติ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-018",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "อาสวะ ๔ (กิเลสดองสันดาน) ได้แก่อะไรบ้าง?",
    "options": [
      "กามาสวะ ภวาสวะ ทิฏฐาสวะ อวิชชาสวะ",
      "โลภะ โทสะ โมหะ มานะ",
      "กาม ภพ วิภพ อาสวะ",
      "ราคะ โทสะ โมหะ ตัณหา"
    ],
    "correctIndex": 0,
    "explanation": "อาสวะ ๔ คือ กิเลสที่หมักหมมดองกมลสันดาน (กาม ภพ ทิฏฐิ อวิชชา)",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก อาสวะ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-019",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "อนุสัย ๗ (กิเลสละเอียดที่นอนเนื่องในจิต) มีอะไรบ้าง?",
    "options": [
      "กามราคะ ปฏิฆะ ทิฏฐิ วิจิกิจฉา มานะ ภวราคะ อวิชชา",
      "โลภะ โทสะ โมหะ โกธะ อุปนาหะ มักขะ ปลาสะ",
      "ราคะ โทสะ โมหะ ตัณหา มานะ ทิฏฐิ อุปาทาน",
      "สังขาร วิญญาณ นามรูป สฬายตนะ"
    ],
    "correctIndex": 0,
    "explanation": "อนุสัย ๗ คือ กิเลสนอนเนื่องในสันดาน ตัดได้หมดสิ้นเมื่อบรรลุพระอรหันต์",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก อนุสัย ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-020",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "พระนิพพาน ๒ ประเภท (สอุปาทิเสสนิพพาน และ อนุปาทิเสสนิพพาน) ต่างกันอย่างไร?",
    "options": [
      "สอุปาทิเสสนิพพาน ดับกิเลสยังมีขันธ์ ๕ เหลือ ส่วนอนุปาทิเสสนิพพาน ดับกิเลสและดับขันธ์ ๕ ทั้งหมด",
      "สอุปาทิเสสเป็นของโสดาบัน อนุปาทิเสสเป็นของอรหันต์",
      "สอุปาทิเสสคือสมาธิ อนุปาทิเสสคือปัญญา",
      "ไม่มีความต่างกัน"
    ],
    "correctIndex": 0,
    "explanation": "สอุปาทิเสสนิพพาน คือดับกิเลสขณะยังมีชีวิต อนุปาทิเสสนิพพาน คือดับขันธ์ปรินิพพาน",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก นิพพานธาตุ ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-021",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "สมถะ และ วิปัสสนา มีผลสัมฤทธิ์สูงสุดต่างกันอย่างไร?",
    "options": [
      "สมถะทำให้เกิดเจโตวิมุตติ (จิตหลุดพ้นจากราคะ) วิปัสสนาทำให้เกิดปัญญาวิมุตติ (จิตหลุดพ้นจากอวิชชา)",
      "สมถะเพื่อดับทุกข์ วิปัสสนาเพื่อความสงบ",
      "สมถะสำหรับฆราวาส วิปัสสนาสำหรับพระ",
      "เหมือนกันทุกประการ"
    ],
    "correctIndex": 0,
    "explanation": "สมถะมุ่งกำจัดราคะเกิดเจโตวิมุตติ วิปัสสนามุ่งขจัดอวิชชาเกิดปัญญาวิมุตติ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สมถะและวิปัสสนา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-022",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "อุปาทานขันธ์ ๕ เป็นภาระอันหนัก ผู้แบกภาระคือใคร และการวางภาระคือสิ่งใด?",
    "options": [
      "ผู้แบกภาระคือบุคคลผู้มีตัณหา การวางภาระคือการดับตัณหาบรรลุพระนิพพาน",
      "ผู้แบกคือเทวดา การวางคือการนอนหลับ",
      "ผู้แบกคือพระสงฆ์ การวางคือการสึก",
      "ผู้แบกคือกษัตริย์ การวางคือการสละราชสมบัติ"
    ],
    "correctIndex": 0,
    "explanation": "ตัณหาเป็นตัวพาแบกหามภาระขันธ์ ๕ การสละตัณหาเข้าสู่นิพพานเป็นการวางภาระอันหนักลงได้",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก ภารสูตร",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-023",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "ธรรมารมณ์ ในอายตนะภายใน-ภายนอก คืออะไร?",
    "options": [
      "อารมณ์ที่รู้ได้ทางใจโดยเฉพาะ เช่น ความคิด ความจำ ความรู้สึก และปรมัตถธรรม",
      "รูปที่มองเห็นด้วยตา",
      "เสียงที่ได้ยินทางหู",
      "กลิ่นที่สัมผัสทางจมูก"
    ],
    "correctIndex": 0,
    "explanation": "ธรรมารมณ์ คือ สิ่งที่จิตนึกคิดและสัมผัสได้ทางมโนทวาร (ใจ)",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก อายตนะ ๑๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-024",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "ธาตุ ๑๘ ในพระอภิธรรม ประกอบด้วยอะไรบ้าง?",
    "options": [
      "อายตนะภายใน ๖ + อายตนะภายนอก ๖ + วิญญาณ ๖ = ๑๘",
      "ดิน น้ำ ลม ไฟ ๔",
      "ขันธ์ ๕ รวมกัน ๓ รอบ",
      "รูป ๒๘"
    ],
    "correctIndex": 0,
    "explanation": "ธาตุ ๑๘ ได้แก่ จักขุธาตุ รูปธาตุ จักขุวิญญาณธาตุ ฯลฯ ครบ ๖ ทวาร รวมเป็น ๑๘ ธาตุ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก ธาตุ ๑๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-025",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "ปรมัตถธรรม ๔ (ความจริงแท้ขั้นสูงสุดในพระอภิธรรม) มีอะไรบ้าง?",
    "options": [
      "จิต เจตสิก รูป นิพพาน",
      "ทาน ศีล ภาวนา ปัญญา",
      "ทุกข์ สมุทัย นิโรธ มรรค",
      "อนิจจัง ทุกขัง อนัตตา วิมุตติ"
    ],
    "correctIndex": 0,
    "explanation": "ปรมัตถธรรม ๔: จิต (ธรรมชาติรู้อารมณ์) เจตสิก (ธรรมประกอบจิต) รูป (สสารร่างกาย) นิพพาน (ธรรมพ้นทุกข์)",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก ปรมัตถธรรม ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-026",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 2 ข้อ 26] วิสุทธิ ๗ (ความบริสุทธิ์หมดจด ๗ ขั้นตอนแห่งการปฏิบัติธรรม) ขั้นแรกคือข้อใด?",
    "options": [
      "สีลวิสุทธิ (ความหมดจดแห่งศีล)",
      "จิตตวิสุทธิ (ความหมดจดแห่งจิต/สมาธิ)",
      "ทิฏฐิวิสุทธิ",
      "ญาณทัสสนวิสุทธิ"
    ],
    "correctIndex": 0,
    "explanation": "วิสุทธิ ๗ เริ่มต้นที่ ๑. สีลวิสุทธิ ๒. จิตตวิสุทธิ ๓. ทิฏฐิวิสุทธิ ๔. กังขาวิตรณวิสุทธิ ๕. มัคคามัคคญาณทัสสนวิสุทธิ ๖. ปฏิปทาญาณทัสสนวิสุทธิ ๗. ญาณทัสสนวิสุทธิ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิสุทธิ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-027",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 2 ข้อ 27] 'จิตตวิสุทธิ' ในวิสุทธิ ๗ หมายถึงการอบรมสิ่งใดจนบริสุทธิ์ตั้งมั่น?",
    "options": [
      "การทำสมาธิจนจิตตั้งมั่นปราศจากนิวรณ์ ๕ (อุปจารสมาธิและอัปปนาสมาธิ)",
      "การรักษาศีล ๒๒๗",
      "การเห็นรูปนาม",
      "การตัดกิเลส"
    ],
    "correctIndex": 0,
    "explanation": "จิตตวิสุทธิ คือ ความหมดจดแห่งจิต ได้แก่การเจริญสมาธิจนจิตผ่องใส ปราศจากนิวรณ์",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิสุทธิ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-028",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 2 ข้อ 28] 'ทิฏฐิวิสุทธิ' ในวิสุทธิ ๗ คือความเห็นถูกต้องบริสุทธิ์ด้วยการจำแนกสิ่งใด?",
    "options": [
      "การจำแนกรูปและนาม (นามรูปปริจเฉทญาณ) ว่าไม่ใช่สัตว์ บุคคล ตัวตน",
      "การจำแนกคนดีคนชั่ว",
      "การจำแนกบุญบาป",
      "การจำแนกพระธรรม"
    ],
    "correctIndex": 0,
    "explanation": "ทิฏฐิวิสุทธิ คือ การรู้แจ้งเห็นจริงแยกแยะ รูป และ นาม ปราศจากความยึดถือว่ามีตัวตน",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิสุทธิ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-029",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 2 ข้อ 29] 'กังขาวิตรณวิสุทธิ' ในวิสุทธิ ๗ หมายถึงการข้ามพ้นความสงสัยด้วยการรู้เห็นสิ่งใด?",
    "options": [
      "รู้เห็นปัจจัยแห่งรูปนามตามกฎปฏิจจสมุปบาทและกรรม (ปัจจยปริคคหญาณ)",
      "รู้เห็นอนาคต",
      "รู้เห็นชาติก่อน",
      "รู้เห็นสวรรค์"
    ],
    "correctIndex": 0,
    "explanation": "กังขาวิตรณวิสุทธิ คือ ปัญญาข้ามพ้นความลังเลสงสัยในกาลทั้ง ๓ เพราะรู้แจ้งปัจจัยแห่งรูปนาม",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิสุทธิ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-030",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 2 ข้อ 30] วิปัสสนูปกิเลส ๑๐ (อุปสรรคหลอกล่อให้หลงผิดระหว่างปฏิบัติวิปัสสนา) ข้อใดเกิดขึ้นบ่อยที่สุด?",
    "options": [
      "โอภาส (แสงสว่างจ้า) และ ญาณ (ความรู้ว่องไว)",
      "ความง่วงนอน",
      "ความโกรธ",
      "ความกลัว"
    ],
    "correctIndex": 0,
    "explanation": "โอภาส, ปีติ, ปัสสัทธิ, สุข, ญาณ ฯลฯ ทำให้นักปฏิบัติหลงสำคัญผิดว่าตนบรรลุมรรคผลแล้ว",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิปัสสนูปกิเลส ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-031",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 2 ข้อ 31] วิปัสสนาญาณ ๙ ญาณแรกสุดคือข้อใด?",
    "options": [
      "อุทยัพพยญาณ (ญาณหยั่งรู้ความเกิดและความดับของรูปนาม)",
      "ภังคญาณ",
      "ภยญาณ",
      "มุญจิตุกัมยตาญาณ"
    ],
    "correctIndex": 0,
    "explanation": "วิปัสสนาญาณ ๙ เริ่มต้นด้วย อุทยัพพยญาณ (รู้การเกิดดับ)",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิปัสสนาญาณ ๙",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-032",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 2 ข้อ 32] 'สังขารุเปกขาญาณ' ในวิปัสสนาญาณ ๙ มีลักษณะเด่นอย่างไร?",
    "options": [
      "จิตวางเฉยเป็นกลางต่อสังขารทั้งปวง ไม่ยินดียินร้าย พร้อมเข้าสู่อริยมรรค",
      "จิตกลัวสังขาร",
      "จิตอยากหนีจากสังขาร",
      "จิตหลงในความสุข"
    ],
    "correctIndex": 0,
    "explanation": "สังขารุเปกขาญาณ คือ ปัญญาที่พิจารณาสังขารแล้ววางใจเป็นกลาง เป็นยอดแห่งโลกิยญาณ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิปัสสนาญาณ ๙",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-033",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 2 ข้อ 33] สังโยชน์ ๑๐ พระโสดาบันละสังโยชน์ ๓ ข้อใดได้เด็ดขาด?",
    "options": [
      "สักกายทิฏฐิ วิจิกิจฉา สีลัพพตปรามาส",
      "กามราคะ ปฏิฆะ อวิชชา",
      "มานะ อุทธัจจะ อวิชชา",
      "รูปราคะ อรูปราคะ"
    ],
    "correctIndex": 0,
    "explanation": "พระโสดาบันละสังโยชน์ ๓ ข้อแรกได้เด็ดขาด ไม่ตกต่ำสู่อบายภูมิอีก",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สังโยชน์ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-034",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 2 ข้อ 34] พระอนาคามี ตัดสังโยชน์ข้อใดเพิ่มจนหมดสิ้น?",
    "options": [
      "กามราคะ และ ปฏิฆะ (ความขัดเคืองใจ)",
      "รูปราคะ และ อรูปราคะ",
      "มานะ และ อวิชชา",
      "สักกายทิฏฐิ"
    ],
    "correctIndex": 0,
    "explanation": "พระอนาคามีตัดกามราคะและปฏิฆะได้เด็ดขาด ละโอรัมภาคิยสังโยชน์ ๕ ได้ครบ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สังโยชน์ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-035",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 2 ข้อ 35] พระอรหันต์ ตัดอุทธัมภาคิยสังโยชน์ (สังโยชน์เบื้องสูง ๕ ประการ) ได้หมดสิ้น ข้อใดคือ ๕ ประการนั้น?",
    "options": [
      "รูปราคะ อรูปราคะ มานะ อุทธัจจะ อวิชชา",
      "สักกายทิฏฐิ วิจิกิจฉา สีลัพพตปรามาส กามราคะ ปฏิฆะ",
      "โลภะ โทสะ โมหะ มานะ ทิฏฐิ",
      "ตัณหา มานะ ทิฏฐิ"
    ],
    "correctIndex": 0,
    "explanation": "อุทธัมภาคิยสังโยชน์ ๕ ได้แก่ รูปราคะ อรูปราคะ มานะ อุทธัจจะ อวิชชา พระอรหันต์เท่านั้นที่ละได้หมด",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สังโยชน์ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-036",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 2 ข้อ 36] โพธิปักขิยธรรม ๓๗ ประการ ประกอบด้วยหมวดธรรมกี่หมวด?",
    "options": [
      "๗ หมวด (สติปัฏฐาน ๔, สัมมัปปธาน ๔, อิทธิบาท ๔, อินทรีย์ ๕, พละ ๕, โพชฌงค์ ๗, มรรค ๘)",
      "๕ หมวด",
      "๙ หมวด",
      "๑๐ หมวด"
    ],
    "correctIndex": 0,
    "explanation": "โพธิปักขิยธรรม ๓๗ มี ๗ หมวดธรรมเกื้อกูลแก่การตรัสรู้",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก โพธิปักขิยธรรม ๓๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-037",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 2 ข้อ 37] อารมณ์ของสมถกรรมฐาน มีกี่กองตามคัมภีร์วิสุทธิมรรค?",
    "options": [
      "๔๐ กอง (กสิณ ๑๐, อสุภะ ๑๐, อนุสสติ ๑๐, อัปปมัญญา ๔, อรูป ๔, อาหาเรปฏิกูลสัญญา ๑, จตุธาตุววัฏฐาน ๑)",
      "๑๐ กอง",
      "๒๐ กอง",
      "๖๐ กอง"
    ],
    "correctIndex": 0,
    "explanation": "สมถกรรมฐานมี ๔๐ กอง สำหรับปรับแก้จริต ๖ ของมนุษย์",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก กรรมฐาน ๔๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-038",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 2 ข้อ 38] จริต ๖ ของมนุษย์ ข้อใดเป็นกรรมฐานที่คู่ควรกับ 'ราคจริต' (คนรักสวยรักงาม)?",
    "options": [
      "อสุภกรรมฐาน ๑๐ และ กายคตาสติ (พิจารณาอาการ ๓๒)",
      "กสิณสีแดง",
      "อนุสสติ ๑๐",
      "พรหมวิหาร ๔"
    ],
    "correctIndex": 0,
    "explanation": "ราคจริตควรเจริญอสุภะ ๑๐ และกายคตาสติเพื่อคลายความกำหนัดในรูป",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก จริต ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-039",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 2 ข้อ 39] 'โทสจริต' (คนมักโกรธ หงุดหงิดง่าย) ควรเจริญกรรมฐานกองใดเป็นพิเศษ?",
    "options": [
      "อัปปมัญญา ๔ (เมตตา กรุณา มุทิตา อุเบกขา) และ วรรณกสิณ ๔ (กสิณสี)",
      "อสุภะ ๑๐",
      "มรณานุสสติ",
      "อาหาเรปฏิกูลสัญญา"
    ],
    "correctIndex": 0,
    "explanation": "โทสจริตควรเจริญเมตตาพรหมวิหารเพื่อดับไฟโทสะ และเพ่งวรรณกสิณสีเย็นตา",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก จริต ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-040",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 2 ข้อ 40] 'โมหจริต' และ 'วิตักกจริต' (คนขี้หลง ขี้ฟุ้งซ่าน) ควรฝึกกรรมฐานกองใด?",
    "options": [
      "อานาปานสติ (กำหนดลมหายใจเข้าออก)",
      "อสุภะ ๑๐",
      "กสิณไฟ",
      "เพ่งซากศพ"
    ],
    "correctIndex": 0,
    "explanation": "อานาปานสติเป็นยอดกรรมฐานในการรวบรวมจิต ดึงความคิดฟุ้งซ่านกลับสู่ปัจจุบัน",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก จริต ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-041",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 2 ข้อ 41] สมาธิ ๓ ระดับ ข้อใดคือสมาธิแน่วแน่เข้าสู่อัปปนาฌาน?",
    "options": [
      "อัปปนาสมาธิ (แน่วแน่ดิ่งลึกเป็นองค์ฌาน)",
      "ขณิกสมาธิ (ชั่วขณะ)",
      "อุปจารสมาธิ (เฉียดฌาน)",
      "มิจฉาสมาธิ"
    ],
    "correctIndex": 0,
    "explanation": "อัปปนาสมาธิ คือ สมาธิขั้นสูงแนบแน่นมั่นคง จิตรวมเป็นหนึ่งเดียวตัดอารมณ์ภายนอก",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สมาธิ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-042",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 2 ข้อ 42] อนุสสติ ๑๐ ข้อใดคือ 'อุปสมานุสสติ'?",
    "options": [
      "การตามระลึกถึงคุณของพระนิพพานอันสงบระงับจากกิเลสทั้งปวง",
      "การระลึกถึงพระพุทธคุณ",
      "การระลึกถึงความตาย",
      "การระลึกถึงเทวดา"
    ],
    "correctIndex": 0,
    "explanation": "อุปสมานุสสติ คือ การระลึกถึงคุณธรรมแห่งพระนิพพานอันสงบเย็น",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก อนุสสติ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-043",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 2 ข้อ 43] อาสวะ ๔ (กิเลสดองสันดาน) ได้แก่อะไรบ้าง?",
    "options": [
      "กามาสวะ ภวาสวะ ทิฏฐาสวะ อวิชชาสวะ",
      "โลภะ โทสะ โมหะ มานะ",
      "กาม ภพ วิภพ อาสวะ",
      "ราคะ โทสะ โมหะ ตัณหา"
    ],
    "correctIndex": 0,
    "explanation": "อาสวะ ๔ คือ กิเลสที่หมักหมมดองกมลสันดาน (กาม ภพ ทิฏฐิ อวิชชา)",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก อาสวะ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-044",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 2 ข้อ 44] อนุสัย ๗ (กิเลสละเอียดที่นอนเนื่องในจิต) มีอะไรบ้าง?",
    "options": [
      "กามราคะ ปฏิฆะ ทิฏฐิ วิจิกิจฉา มานะ ภวราคะ อวิชชา",
      "โลภะ โทสะ โมหะ โกธะ อุปนาหะ มักขะ ปลาสะ",
      "ราคะ โทสะ โมหะ ตัณหา มานะ ทิฏฐิ อุปาทาน",
      "สังขาร วิญญาณ นามรูป สฬายตนะ"
    ],
    "correctIndex": 0,
    "explanation": "อนุสัย ๗ คือ กิเลสนอนเนื่องในสันดาน ตัดได้หมดสิ้นเมื่อบรรลุพระอรหันต์",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก อนุสัย ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-045",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 2 ข้อ 45] พระนิพพาน ๒ ประเภท (สอุปาทิเสสนิพพาน และ อนุปาทิเสสนิพพาน) ต่างกันอย่างไร?",
    "options": [
      "สอุปาทิเสสนิพพาน ดับกิเลสยังมีขันธ์ ๕ เหลือ ส่วนอนุปาทิเสสนิพพาน ดับกิเลสและดับขันธ์ ๕ ทั้งหมด",
      "สอุปาทิเสสเป็นของโสดาบัน อนุปาทิเสสเป็นของอรหันต์",
      "สอุปาทิเสสคือสมาธิ อนุปาทิเสสคือปัญญา",
      "ไม่มีความต่างกัน"
    ],
    "correctIndex": 0,
    "explanation": "สอุปาทิเสสนิพพาน คือดับกิเลสขณะยังมีชีวิต อนุปาทิเสสนิพพาน คือดับขันธ์ปรินิพพาน",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก นิพพานธาตุ ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-046",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 2 ข้อ 46] สมถะ และ วิปัสสนา มีผลสัมฤทธิ์สูงสุดต่างกันอย่างไร?",
    "options": [
      "สมถะทำให้เกิดเจโตวิมุตติ (จิตหลุดพ้นจากราคะ) วิปัสสนาทำให้เกิดปัญญาวิมุตติ (จิตหลุดพ้นจากอวิชชา)",
      "สมถะเพื่อดับทุกข์ วิปัสสนาเพื่อความสงบ",
      "สมถะสำหรับฆราวาส วิปัสสนาสำหรับพระ",
      "เหมือนกันทุกประการ"
    ],
    "correctIndex": 0,
    "explanation": "สมถะมุ่งกำจัดราคะเกิดเจโตวิมุตติ วิปัสสนามุ่งขจัดอวิชชาเกิดปัญญาวิมุตติ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สมถะและวิปัสสนา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-047",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 2 ข้อ 47] อุปาทานขันธ์ ๕ เป็นภาระอันหนัก ผู้แบกภาระคือใคร และการวางภาระคือสิ่งใด?",
    "options": [
      "ผู้แบกภาระคือบุคคลผู้มีตัณหา การวางภาระคือการดับตัณหาบรรลุพระนิพพาน",
      "ผู้แบกคือเทวดา การวางคือการนอนหลับ",
      "ผู้แบกคือพระสงฆ์ การวางคือการสึก",
      "ผู้แบกคือกษัตริย์ การวางคือการสละราชสมบัติ"
    ],
    "correctIndex": 0,
    "explanation": "ตัณหาเป็นตัวพาแบกหามภาระขันธ์ ๕ การสละตัณหาเข้าสู่นิพพานเป็นการวางภาระอันหนักลงได้",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก ภารสูตร",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-048",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 2 ข้อ 48] ธรรมารมณ์ ในอายตนะภายใน-ภายนอก คืออะไร?",
    "options": [
      "อารมณ์ที่รู้ได้ทางใจโดยเฉพาะ เช่น ความคิด ความจำ ความรู้สึก และปรมัตถธรรม",
      "รูปที่มองเห็นด้วยตา",
      "เสียงที่ได้ยินทางหู",
      "กลิ่นที่สัมผัสทางจมูก"
    ],
    "correctIndex": 0,
    "explanation": "ธรรมารมณ์ คือ สิ่งที่จิตนึกคิดและสัมผัสได้ทางมโนทวาร (ใจ)",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก อายตนะ ๑๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-049",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 2 ข้อ 49] ธาตุ ๑๘ ในพระอภิธรรม ประกอบด้วยอะไรบ้าง?",
    "options": [
      "อายตนะภายใน ๖ + อายตนะภายนอก ๖ + วิญญาณ ๖ = ๑๘",
      "ดิน น้ำ ลม ไฟ ๔",
      "ขันธ์ ๕ รวมกัน ๓ รอบ",
      "รูป ๒๘"
    ],
    "correctIndex": 0,
    "explanation": "ธาตุ ๑๘ ได้แก่ จักขุธาตุ รูปธาตุ จักขุวิญญาณธาตุ ฯลฯ ครบ ๖ ทวาร รวมเป็น ๑๘ ธาตุ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก ธาตุ ๑๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-050",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 2 ข้อ 50] ปรมัตถธรรม ๔ (ความจริงแท้ขั้นสูงสุดในพระอภิธรรม) มีอะไรบ้าง?",
    "options": [
      "จิต เจตสิก รูป นิพพาน",
      "ทาน ศีล ภาวนา ปัญญา",
      "ทุกข์ สมุทัย นิโรธ มรรค",
      "อนิจจัง ทุกขัง อนัตตา วิมุตติ"
    ],
    "correctIndex": 0,
    "explanation": "ปรมัตถธรรม ๔: จิต (ธรรมชาติรู้อารมณ์) เจตสิก (ธรรมประกอบจิต) รูป (สสารร่างกาย) นิพพาน (ธรรมพ้นทุกข์)",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก ปรมัตถธรรม ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-051",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 3 ข้อ 51] วิสุทธิ ๗ (ความบริสุทธิ์หมดจด ๗ ขั้นตอนแห่งการปฏิบัติธรรม) ขั้นแรกคือข้อใด?",
    "options": [
      "สีลวิสุทธิ (ความหมดจดแห่งศีล)",
      "จิตตวิสุทธิ (ความหมดจดแห่งจิต/สมาธิ)",
      "ทิฏฐิวิสุทธิ",
      "ญาณทัสสนวิสุทธิ"
    ],
    "correctIndex": 0,
    "explanation": "วิสุทธิ ๗ เริ่มต้นที่ ๑. สีลวิสุทธิ ๒. จิตตวิสุทธิ ๓. ทิฏฐิวิสุทธิ ๔. กังขาวิตรณวิสุทธิ ๕. มัคคามัคคญาณทัสสนวิสุทธิ ๖. ปฏิปทาญาณทัสสนวิสุทธิ ๗. ญาณทัสสนวิสุทธิ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิสุทธิ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-052",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 3 ข้อ 52] 'จิตตวิสุทธิ' ในวิสุทธิ ๗ หมายถึงการอบรมสิ่งใดจนบริสุทธิ์ตั้งมั่น?",
    "options": [
      "การทำสมาธิจนจิตตั้งมั่นปราศจากนิวรณ์ ๕ (อุปจารสมาธิและอัปปนาสมาธิ)",
      "การรักษาศีล ๒๒๗",
      "การเห็นรูปนาม",
      "การตัดกิเลส"
    ],
    "correctIndex": 0,
    "explanation": "จิตตวิสุทธิ คือ ความหมดจดแห่งจิต ได้แก่การเจริญสมาธิจนจิตผ่องใส ปราศจากนิวรณ์",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิสุทธิ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-053",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 3 ข้อ 53] 'ทิฏฐิวิสุทธิ' ในวิสุทธิ ๗ คือความเห็นถูกต้องบริสุทธิ์ด้วยการจำแนกสิ่งใด?",
    "options": [
      "การจำแนกรูปและนาม (นามรูปปริจเฉทญาณ) ว่าไม่ใช่สัตว์ บุคคล ตัวตน",
      "การจำแนกคนดีคนชั่ว",
      "การจำแนกบุญบาป",
      "การจำแนกพระธรรม"
    ],
    "correctIndex": 0,
    "explanation": "ทิฏฐิวิสุทธิ คือ การรู้แจ้งเห็นจริงแยกแยะ รูป และ นาม ปราศจากความยึดถือว่ามีตัวตน",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิสุทธิ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-054",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 3 ข้อ 54] 'กังขาวิตรณวิสุทธิ' ในวิสุทธิ ๗ หมายถึงการข้ามพ้นความสงสัยด้วยการรู้เห็นสิ่งใด?",
    "options": [
      "รู้เห็นปัจจัยแห่งรูปนามตามกฎปฏิจจสมุปบาทและกรรม (ปัจจยปริคคหญาณ)",
      "รู้เห็นอนาคต",
      "รู้เห็นชาติก่อน",
      "รู้เห็นสวรรค์"
    ],
    "correctIndex": 0,
    "explanation": "กังขาวิตรณวิสุทธิ คือ ปัญญาข้ามพ้นความลังเลสงสัยในกาลทั้ง ๓ เพราะรู้แจ้งปัจจัยแห่งรูปนาม",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิสุทธิ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-055",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 3 ข้อ 55] วิปัสสนูปกิเลส ๑๐ (อุปสรรคหลอกล่อให้หลงผิดระหว่างปฏิบัติวิปัสสนา) ข้อใดเกิดขึ้นบ่อยที่สุด?",
    "options": [
      "โอภาส (แสงสว่างจ้า) และ ญาณ (ความรู้ว่องไว)",
      "ความง่วงนอน",
      "ความโกรธ",
      "ความกลัว"
    ],
    "correctIndex": 0,
    "explanation": "โอภาส, ปีติ, ปัสสัทธิ, สุข, ญาณ ฯลฯ ทำให้นักปฏิบัติหลงสำคัญผิดว่าตนบรรลุมรรคผลแล้ว",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิปัสสนูปกิเลส ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-056",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 3 ข้อ 56] วิปัสสนาญาณ ๙ ญาณแรกสุดคือข้อใด?",
    "options": [
      "อุทยัพพยญาณ (ญาณหยั่งรู้ความเกิดและความดับของรูปนาม)",
      "ภังคญาณ",
      "ภยญาณ",
      "มุญจิตุกัมยตาญาณ"
    ],
    "correctIndex": 0,
    "explanation": "วิปัสสนาญาณ ๙ เริ่มต้นด้วย อุทยัพพยญาณ (รู้การเกิดดับ)",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิปัสสนาญาณ ๙",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-057",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 3 ข้อ 57] 'สังขารุเปกขาญาณ' ในวิปัสสนาญาณ ๙ มีลักษณะเด่นอย่างไร?",
    "options": [
      "จิตวางเฉยเป็นกลางต่อสังขารทั้งปวง ไม่ยินดียินร้าย พร้อมเข้าสู่อริยมรรค",
      "จิตกลัวสังขาร",
      "จิตอยากหนีจากสังขาร",
      "จิตหลงในความสุข"
    ],
    "correctIndex": 0,
    "explanation": "สังขารุเปกขาญาณ คือ ปัญญาที่พิจารณาสังขารแล้ววางใจเป็นกลาง เป็นยอดแห่งโลกิยญาณ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิปัสสนาญาณ ๙",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-058",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 3 ข้อ 58] สังโยชน์ ๑๐ พระโสดาบันละสังโยชน์ ๓ ข้อใดได้เด็ดขาด?",
    "options": [
      "สักกายทิฏฐิ วิจิกิจฉา สีลัพพตปรามาส",
      "กามราคะ ปฏิฆะ อวิชชา",
      "มานะ อุทธัจจะ อวิชชา",
      "รูปราคะ อรูปราคะ"
    ],
    "correctIndex": 0,
    "explanation": "พระโสดาบันละสังโยชน์ ๓ ข้อแรกได้เด็ดขาด ไม่ตกต่ำสู่อบายภูมิอีก",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สังโยชน์ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-059",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 3 ข้อ 59] พระอนาคามี ตัดสังโยชน์ข้อใดเพิ่มจนหมดสิ้น?",
    "options": [
      "กามราคะ และ ปฏิฆะ (ความขัดเคืองใจ)",
      "รูปราคะ และ อรูปราคะ",
      "มานะ และ อวิชชา",
      "สักกายทิฏฐิ"
    ],
    "correctIndex": 0,
    "explanation": "พระอนาคามีตัดกามราคะและปฏิฆะได้เด็ดขาด ละโอรัมภาคิยสังโยชน์ ๕ ได้ครบ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สังโยชน์ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-060",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 3 ข้อ 60] พระอรหันต์ ตัดอุทธัมภาคิยสังโยชน์ (สังโยชน์เบื้องสูง ๕ ประการ) ได้หมดสิ้น ข้อใดคือ ๕ ประการนั้น?",
    "options": [
      "รูปราคะ อรูปราคะ มานะ อุทธัจจะ อวิชชา",
      "สักกายทิฏฐิ วิจิกิจฉา สีลัพพตปรามาส กามราคะ ปฏิฆะ",
      "โลภะ โทสะ โมหะ มานะ ทิฏฐิ",
      "ตัณหา มานะ ทิฏฐิ"
    ],
    "correctIndex": 0,
    "explanation": "อุทธัมภาคิยสังโยชน์ ๕ ได้แก่ รูปราคะ อรูปราคะ มานะ อุทธัจจะ อวิชชา พระอรหันต์เท่านั้นที่ละได้หมด",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สังโยชน์ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-061",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 3 ข้อ 61] โพธิปักขิยธรรม ๓๗ ประการ ประกอบด้วยหมวดธรรมกี่หมวด?",
    "options": [
      "๗ หมวด (สติปัฏฐาน ๔, สัมมัปปธาน ๔, อิทธิบาท ๔, อินทรีย์ ๕, พละ ๕, โพชฌงค์ ๗, มรรค ๘)",
      "๕ หมวด",
      "๙ หมวด",
      "๑๐ หมวด"
    ],
    "correctIndex": 0,
    "explanation": "โพธิปักขิยธรรม ๓๗ มี ๗ หมวดธรรมเกื้อกูลแก่การตรัสรู้",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก โพธิปักขิยธรรม ๓๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-062",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 3 ข้อ 62] อารมณ์ของสมถกรรมฐาน มีกี่กองตามคัมภีร์วิสุทธิมรรค?",
    "options": [
      "๔๐ กอง (กสิณ ๑๐, อสุภะ ๑๐, อนุสสติ ๑๐, อัปปมัญญา ๔, อรูป ๔, อาหาเรปฏิกูลสัญญา ๑, จตุธาตุววัฏฐาน ๑)",
      "๑๐ กอง",
      "๒๐ กอง",
      "๖๐ กอง"
    ],
    "correctIndex": 0,
    "explanation": "สมถกรรมฐานมี ๔๐ กอง สำหรับปรับแก้จริต ๖ ของมนุษย์",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก กรรมฐาน ๔๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-063",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 3 ข้อ 63] จริต ๖ ของมนุษย์ ข้อใดเป็นกรรมฐานที่คู่ควรกับ 'ราคจริต' (คนรักสวยรักงาม)?",
    "options": [
      "อสุภกรรมฐาน ๑๐ และ กายคตาสติ (พิจารณาอาการ ๓๒)",
      "กสิณสีแดง",
      "อนุสสติ ๑๐",
      "พรหมวิหาร ๔"
    ],
    "correctIndex": 0,
    "explanation": "ราคจริตควรเจริญอสุภะ ๑๐ และกายคตาสติเพื่อคลายความกำหนัดในรูป",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก จริต ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-064",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 3 ข้อ 64] 'โทสจริต' (คนมักโกรธ หงุดหงิดง่าย) ควรเจริญกรรมฐานกองใดเป็นพิเศษ?",
    "options": [
      "อัปปมัญญา ๔ (เมตตา กรุณา มุทิตา อุเบกขา) และ วรรณกสิณ ๔ (กสิณสี)",
      "อสุภะ ๑๐",
      "มรณานุสสติ",
      "อาหาเรปฏิกูลสัญญา"
    ],
    "correctIndex": 0,
    "explanation": "โทสจริตควรเจริญเมตตาพรหมวิหารเพื่อดับไฟโทสะ และเพ่งวรรณกสิณสีเย็นตา",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก จริต ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-065",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 3 ข้อ 65] 'โมหจริต' และ 'วิตักกจริต' (คนขี้หลง ขี้ฟุ้งซ่าน) ควรฝึกกรรมฐานกองใด?",
    "options": [
      "อานาปานสติ (กำหนดลมหายใจเข้าออก)",
      "อสุภะ ๑๐",
      "กสิณไฟ",
      "เพ่งซากศพ"
    ],
    "correctIndex": 0,
    "explanation": "อานาปานสติเป็นยอดกรรมฐานในการรวบรวมจิต ดึงความคิดฟุ้งซ่านกลับสู่ปัจจุบัน",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก จริต ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-066",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 3 ข้อ 66] สมาธิ ๓ ระดับ ข้อใดคือสมาธิแน่วแน่เข้าสู่อัปปนาฌาน?",
    "options": [
      "อัปปนาสมาธิ (แน่วแน่ดิ่งลึกเป็นองค์ฌาน)",
      "ขณิกสมาธิ (ชั่วขณะ)",
      "อุปจารสมาธิ (เฉียดฌาน)",
      "มิจฉาสมาธิ"
    ],
    "correctIndex": 0,
    "explanation": "อัปปนาสมาธิ คือ สมาธิขั้นสูงแนบแน่นมั่นคง จิตรวมเป็นหนึ่งเดียวตัดอารมณ์ภายนอก",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สมาธิ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-067",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 3 ข้อ 67] อนุสสติ ๑๐ ข้อใดคือ 'อุปสมานุสสติ'?",
    "options": [
      "การตามระลึกถึงคุณของพระนิพพานอันสงบระงับจากกิเลสทั้งปวง",
      "การระลึกถึงพระพุทธคุณ",
      "การระลึกถึงความตาย",
      "การระลึกถึงเทวดา"
    ],
    "correctIndex": 0,
    "explanation": "อุปสมานุสสติ คือ การระลึกถึงคุณธรรมแห่งพระนิพพานอันสงบเย็น",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก อนุสสติ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-068",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 3 ข้อ 68] อาสวะ ๔ (กิเลสดองสันดาน) ได้แก่อะไรบ้าง?",
    "options": [
      "กามาสวะ ภวาสวะ ทิฏฐาสวะ อวิชชาสวะ",
      "โลภะ โทสะ โมหะ มานะ",
      "กาม ภพ วิภพ อาสวะ",
      "ราคะ โทสะ โมหะ ตัณหา"
    ],
    "correctIndex": 0,
    "explanation": "อาสวะ ๔ คือ กิเลสที่หมักหมมดองกมลสันดาน (กาม ภพ ทิฏฐิ อวิชชา)",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก อาสวะ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-069",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 3 ข้อ 69] อนุสัย ๗ (กิเลสละเอียดที่นอนเนื่องในจิต) มีอะไรบ้าง?",
    "options": [
      "กามราคะ ปฏิฆะ ทิฏฐิ วิจิกิจฉา มานะ ภวราคะ อวิชชา",
      "โลภะ โทสะ โมหะ โกธะ อุปนาหะ มักขะ ปลาสะ",
      "ราคะ โทสะ โมหะ ตัณหา มานะ ทิฏฐิ อุปาทาน",
      "สังขาร วิญญาณ นามรูป สฬายตนะ"
    ],
    "correctIndex": 0,
    "explanation": "อนุสัย ๗ คือ กิเลสนอนเนื่องในสันดาน ตัดได้หมดสิ้นเมื่อบรรลุพระอรหันต์",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก อนุสัย ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-070",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 3 ข้อ 70] พระนิพพาน ๒ ประเภท (สอุปาทิเสสนิพพาน และ อนุปาทิเสสนิพพาน) ต่างกันอย่างไร?",
    "options": [
      "สอุปาทิเสสนิพพาน ดับกิเลสยังมีขันธ์ ๕ เหลือ ส่วนอนุปาทิเสสนิพพาน ดับกิเลสและดับขันธ์ ๕ ทั้งหมด",
      "สอุปาทิเสสเป็นของโสดาบัน อนุปาทิเสสเป็นของอรหันต์",
      "สอุปาทิเสสคือสมาธิ อนุปาทิเสสคือปัญญา",
      "ไม่มีความต่างกัน"
    ],
    "correctIndex": 0,
    "explanation": "สอุปาทิเสสนิพพาน คือดับกิเลสขณะยังมีชีวิต อนุปาทิเสสนิพพาน คือดับขันธ์ปรินิพพาน",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก นิพพานธาตุ ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-071",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 3 ข้อ 71] สมถะ และ วิปัสสนา มีผลสัมฤทธิ์สูงสุดต่างกันอย่างไร?",
    "options": [
      "สมถะทำให้เกิดเจโตวิมุตติ (จิตหลุดพ้นจากราคะ) วิปัสสนาทำให้เกิดปัญญาวิมุตติ (จิตหลุดพ้นจากอวิชชา)",
      "สมถะเพื่อดับทุกข์ วิปัสสนาเพื่อความสงบ",
      "สมถะสำหรับฆราวาส วิปัสสนาสำหรับพระ",
      "เหมือนกันทุกประการ"
    ],
    "correctIndex": 0,
    "explanation": "สมถะมุ่งกำจัดราคะเกิดเจโตวิมุตติ วิปัสสนามุ่งขจัดอวิชชาเกิดปัญญาวิมุตติ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สมถะและวิปัสสนา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-072",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 3 ข้อ 72] อุปาทานขันธ์ ๕ เป็นภาระอันหนัก ผู้แบกภาระคือใคร และการวางภาระคือสิ่งใด?",
    "options": [
      "ผู้แบกภาระคือบุคคลผู้มีตัณหา การวางภาระคือการดับตัณหาบรรลุพระนิพพาน",
      "ผู้แบกคือเทวดา การวางคือการนอนหลับ",
      "ผู้แบกคือพระสงฆ์ การวางคือการสึก",
      "ผู้แบกคือกษัตริย์ การวางคือการสละราชสมบัติ"
    ],
    "correctIndex": 0,
    "explanation": "ตัณหาเป็นตัวพาแบกหามภาระขันธ์ ๕ การสละตัณหาเข้าสู่นิพพานเป็นการวางภาระอันหนักลงได้",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก ภารสูตร",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-073",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 3 ข้อ 73] ธรรมารมณ์ ในอายตนะภายใน-ภายนอก คืออะไร?",
    "options": [
      "อารมณ์ที่รู้ได้ทางใจโดยเฉพาะ เช่น ความคิด ความจำ ความรู้สึก และปรมัตถธรรม",
      "รูปที่มองเห็นด้วยตา",
      "เสียงที่ได้ยินทางหู",
      "กลิ่นที่สัมผัสทางจมูก"
    ],
    "correctIndex": 0,
    "explanation": "ธรรมารมณ์ คือ สิ่งที่จิตนึกคิดและสัมผัสได้ทางมโนทวาร (ใจ)",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก อายตนะ ๑๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-074",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 3 ข้อ 74] ธาตุ ๑๘ ในพระอภิธรรม ประกอบด้วยอะไรบ้าง?",
    "options": [
      "อายตนะภายใน ๖ + อายตนะภายนอก ๖ + วิญญาณ ๖ = ๑๘",
      "ดิน น้ำ ลม ไฟ ๔",
      "ขันธ์ ๕ รวมกัน ๓ รอบ",
      "รูป ๒๘"
    ],
    "correctIndex": 0,
    "explanation": "ธาตุ ๑๘ ได้แก่ จักขุธาตุ รูปธาตุ จักขุวิญญาณธาตุ ฯลฯ ครบ ๖ ทวาร รวมเป็น ๑๘ ธาตุ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก ธาตุ ๑๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-075",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 3 ข้อ 75] ปรมัตถธรรม ๔ (ความจริงแท้ขั้นสูงสุดในพระอภิธรรม) มีอะไรบ้าง?",
    "options": [
      "จิต เจตสิก รูป นิพพาน",
      "ทาน ศีล ภาวนา ปัญญา",
      "ทุกข์ สมุทัย นิโรธ มรรค",
      "อนิจจัง ทุกขัง อนัตตา วิมุตติ"
    ],
    "correctIndex": 0,
    "explanation": "ปรมัตถธรรม ๔: จิต (ธรรมชาติรู้อารมณ์) เจตสิก (ธรรมประกอบจิต) รูป (สสารร่างกาย) นิพพาน (ธรรมพ้นทุกข์)",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก ปรมัตถธรรม ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-076",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 4 ข้อ 76] วิสุทธิ ๗ (ความบริสุทธิ์หมดจด ๗ ขั้นตอนแห่งการปฏิบัติธรรม) ขั้นแรกคือข้อใด?",
    "options": [
      "สีลวิสุทธิ (ความหมดจดแห่งศีล)",
      "จิตตวิสุทธิ (ความหมดจดแห่งจิต/สมาธิ)",
      "ทิฏฐิวิสุทธิ",
      "ญาณทัสสนวิสุทธิ"
    ],
    "correctIndex": 0,
    "explanation": "วิสุทธิ ๗ เริ่มต้นที่ ๑. สีลวิสุทธิ ๒. จิตตวิสุทธิ ๓. ทิฏฐิวิสุทธิ ๔. กังขาวิตรณวิสุทธิ ๕. มัคคามัคคญาณทัสสนวิสุทธิ ๖. ปฏิปทาญาณทัสสนวิสุทธิ ๗. ญาณทัสสนวิสุทธิ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิสุทธิ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-077",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 4 ข้อ 77] 'จิตตวิสุทธิ' ในวิสุทธิ ๗ หมายถึงการอบรมสิ่งใดจนบริสุทธิ์ตั้งมั่น?",
    "options": [
      "การทำสมาธิจนจิตตั้งมั่นปราศจากนิวรณ์ ๕ (อุปจารสมาธิและอัปปนาสมาธิ)",
      "การรักษาศีล ๒๒๗",
      "การเห็นรูปนาม",
      "การตัดกิเลส"
    ],
    "correctIndex": 0,
    "explanation": "จิตตวิสุทธิ คือ ความหมดจดแห่งจิต ได้แก่การเจริญสมาธิจนจิตผ่องใส ปราศจากนิวรณ์",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิสุทธิ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-078",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 4 ข้อ 78] 'ทิฏฐิวิสุทธิ' ในวิสุทธิ ๗ คือความเห็นถูกต้องบริสุทธิ์ด้วยการจำแนกสิ่งใด?",
    "options": [
      "การจำแนกรูปและนาม (นามรูปปริจเฉทญาณ) ว่าไม่ใช่สัตว์ บุคคล ตัวตน",
      "การจำแนกคนดีคนชั่ว",
      "การจำแนกบุญบาป",
      "การจำแนกพระธรรม"
    ],
    "correctIndex": 0,
    "explanation": "ทิฏฐิวิสุทธิ คือ การรู้แจ้งเห็นจริงแยกแยะ รูป และ นาม ปราศจากความยึดถือว่ามีตัวตน",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิสุทธิ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-079",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 4 ข้อ 79] 'กังขาวิตรณวิสุทธิ' ในวิสุทธิ ๗ หมายถึงการข้ามพ้นความสงสัยด้วยการรู้เห็นสิ่งใด?",
    "options": [
      "รู้เห็นปัจจัยแห่งรูปนามตามกฎปฏิจจสมุปบาทและกรรม (ปัจจยปริคคหญาณ)",
      "รู้เห็นอนาคต",
      "รู้เห็นชาติก่อน",
      "รู้เห็นสวรรค์"
    ],
    "correctIndex": 0,
    "explanation": "กังขาวิตรณวิสุทธิ คือ ปัญญาข้ามพ้นความลังเลสงสัยในกาลทั้ง ๓ เพราะรู้แจ้งปัจจัยแห่งรูปนาม",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิสุทธิ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-080",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 4 ข้อ 80] วิปัสสนูปกิเลส ๑๐ (อุปสรรคหลอกล่อให้หลงผิดระหว่างปฏิบัติวิปัสสนา) ข้อใดเกิดขึ้นบ่อยที่สุด?",
    "options": [
      "โอภาส (แสงสว่างจ้า) และ ญาณ (ความรู้ว่องไว)",
      "ความง่วงนอน",
      "ความโกรธ",
      "ความกลัว"
    ],
    "correctIndex": 0,
    "explanation": "โอภาส, ปีติ, ปัสสัทธิ, สุข, ญาณ ฯลฯ ทำให้นักปฏิบัติหลงสำคัญผิดว่าตนบรรลุมรรคผลแล้ว",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิปัสสนูปกิเลส ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-081",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 4 ข้อ 81] วิปัสสนาญาณ ๙ ญาณแรกสุดคือข้อใด?",
    "options": [
      "อุทยัพพยญาณ (ญาณหยั่งรู้ความเกิดและความดับของรูปนาม)",
      "ภังคญาณ",
      "ภยญาณ",
      "มุญจิตุกัมยตาญาณ"
    ],
    "correctIndex": 0,
    "explanation": "วิปัสสนาญาณ ๙ เริ่มต้นด้วย อุทยัพพยญาณ (รู้การเกิดดับ)",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิปัสสนาญาณ ๙",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-082",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 4 ข้อ 82] 'สังขารุเปกขาญาณ' ในวิปัสสนาญาณ ๙ มีลักษณะเด่นอย่างไร?",
    "options": [
      "จิตวางเฉยเป็นกลางต่อสังขารทั้งปวง ไม่ยินดียินร้าย พร้อมเข้าสู่อริยมรรค",
      "จิตกลัวสังขาร",
      "จิตอยากหนีจากสังขาร",
      "จิตหลงในความสุข"
    ],
    "correctIndex": 0,
    "explanation": "สังขารุเปกขาญาณ คือ ปัญญาที่พิจารณาสังขารแล้ววางใจเป็นกลาง เป็นยอดแห่งโลกิยญาณ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิปัสสนาญาณ ๙",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-083",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 4 ข้อ 83] สังโยชน์ ๑๐ พระโสดาบันละสังโยชน์ ๓ ข้อใดได้เด็ดขาด?",
    "options": [
      "สักกายทิฏฐิ วิจิกิจฉา สีลัพพตปรามาส",
      "กามราคะ ปฏิฆะ อวิชชา",
      "มานะ อุทธัจจะ อวิชชา",
      "รูปราคะ อรูปราคะ"
    ],
    "correctIndex": 0,
    "explanation": "พระโสดาบันละสังโยชน์ ๓ ข้อแรกได้เด็ดขาด ไม่ตกต่ำสู่อบายภูมิอีก",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สังโยชน์ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-084",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 4 ข้อ 84] พระอนาคามี ตัดสังโยชน์ข้อใดเพิ่มจนหมดสิ้น?",
    "options": [
      "กามราคะ และ ปฏิฆะ (ความขัดเคืองใจ)",
      "รูปราคะ และ อรูปราคะ",
      "มานะ และ อวิชชา",
      "สักกายทิฏฐิ"
    ],
    "correctIndex": 0,
    "explanation": "พระอนาคามีตัดกามราคะและปฏิฆะได้เด็ดขาด ละโอรัมภาคิยสังโยชน์ ๕ ได้ครบ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สังโยชน์ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-085",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 4 ข้อ 85] พระอรหันต์ ตัดอุทธัมภาคิยสังโยชน์ (สังโยชน์เบื้องสูง ๕ ประการ) ได้หมดสิ้น ข้อใดคือ ๕ ประการนั้น?",
    "options": [
      "รูปราคะ อรูปราคะ มานะ อุทธัจจะ อวิชชา",
      "สักกายทิฏฐิ วิจิกิจฉา สีลัพพตปรามาส กามราคะ ปฏิฆะ",
      "โลภะ โทสะ โมหะ มานะ ทิฏฐิ",
      "ตัณหา มานะ ทิฏฐิ"
    ],
    "correctIndex": 0,
    "explanation": "อุทธัมภาคิยสังโยชน์ ๕ ได้แก่ รูปราคะ อรูปราคะ มานะ อุทธัจจะ อวิชชา พระอรหันต์เท่านั้นที่ละได้หมด",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สังโยชน์ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-086",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 4 ข้อ 86] โพธิปักขิยธรรม ๓๗ ประการ ประกอบด้วยหมวดธรรมกี่หมวด?",
    "options": [
      "๗ หมวด (สติปัฏฐาน ๔, สัมมัปปธาน ๔, อิทธิบาท ๔, อินทรีย์ ๕, พละ ๕, โพชฌงค์ ๗, มรรค ๘)",
      "๕ หมวด",
      "๙ หมวด",
      "๑๐ หมวด"
    ],
    "correctIndex": 0,
    "explanation": "โพธิปักขิยธรรม ๓๗ มี ๗ หมวดธรรมเกื้อกูลแก่การตรัสรู้",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก โพธิปักขิยธรรม ๓๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-087",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 4 ข้อ 87] อารมณ์ของสมถกรรมฐาน มีกี่กองตามคัมภีร์วิสุทธิมรรค?",
    "options": [
      "๔๐ กอง (กสิณ ๑๐, อสุภะ ๑๐, อนุสสติ ๑๐, อัปปมัญญา ๔, อรูป ๔, อาหาเรปฏิกูลสัญญา ๑, จตุธาตุววัฏฐาน ๑)",
      "๑๐ กอง",
      "๒๐ กอง",
      "๖๐ กอง"
    ],
    "correctIndex": 0,
    "explanation": "สมถกรรมฐานมี ๔๐ กอง สำหรับปรับแก้จริต ๖ ของมนุษย์",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก กรรมฐาน ๔๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-088",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 4 ข้อ 88] จริต ๖ ของมนุษย์ ข้อใดเป็นกรรมฐานที่คู่ควรกับ 'ราคจริต' (คนรักสวยรักงาม)?",
    "options": [
      "อสุภกรรมฐาน ๑๐ และ กายคตาสติ (พิจารณาอาการ ๓๒)",
      "กสิณสีแดง",
      "อนุสสติ ๑๐",
      "พรหมวิหาร ๔"
    ],
    "correctIndex": 0,
    "explanation": "ราคจริตควรเจริญอสุภะ ๑๐ และกายคตาสติเพื่อคลายความกำหนัดในรูป",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก จริต ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-089",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 4 ข้อ 89] 'โทสจริต' (คนมักโกรธ หงุดหงิดง่าย) ควรเจริญกรรมฐานกองใดเป็นพิเศษ?",
    "options": [
      "อัปปมัญญา ๔ (เมตตา กรุณา มุทิตา อุเบกขา) และ วรรณกสิณ ๔ (กสิณสี)",
      "อสุภะ ๑๐",
      "มรณานุสสติ",
      "อาหาเรปฏิกูลสัญญา"
    ],
    "correctIndex": 0,
    "explanation": "โทสจริตควรเจริญเมตตาพรหมวิหารเพื่อดับไฟโทสะ และเพ่งวรรณกสิณสีเย็นตา",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก จริต ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-090",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 4 ข้อ 90] 'โมหจริต' และ 'วิตักกจริต' (คนขี้หลง ขี้ฟุ้งซ่าน) ควรฝึกกรรมฐานกองใด?",
    "options": [
      "อานาปานสติ (กำหนดลมหายใจเข้าออก)",
      "อสุภะ ๑๐",
      "กสิณไฟ",
      "เพ่งซากศพ"
    ],
    "correctIndex": 0,
    "explanation": "อานาปานสติเป็นยอดกรรมฐานในการรวบรวมจิต ดึงความคิดฟุ้งซ่านกลับสู่ปัจจุบัน",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก จริต ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-091",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 4 ข้อ 91] สมาธิ ๓ ระดับ ข้อใดคือสมาธิแน่วแน่เข้าสู่อัปปนาฌาน?",
    "options": [
      "อัปปนาสมาธิ (แน่วแน่ดิ่งลึกเป็นองค์ฌาน)",
      "ขณิกสมาธิ (ชั่วขณะ)",
      "อุปจารสมาธิ (เฉียดฌาน)",
      "มิจฉาสมาธิ"
    ],
    "correctIndex": 0,
    "explanation": "อัปปนาสมาธิ คือ สมาธิขั้นสูงแนบแน่นมั่นคง จิตรวมเป็นหนึ่งเดียวตัดอารมณ์ภายนอก",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สมาธิ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-092",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 4 ข้อ 92] อนุสสติ ๑๐ ข้อใดคือ 'อุปสมานุสสติ'?",
    "options": [
      "การตามระลึกถึงคุณของพระนิพพานอันสงบระงับจากกิเลสทั้งปวง",
      "การระลึกถึงพระพุทธคุณ",
      "การระลึกถึงความตาย",
      "การระลึกถึงเทวดา"
    ],
    "correctIndex": 0,
    "explanation": "อุปสมานุสสติ คือ การระลึกถึงคุณธรรมแห่งพระนิพพานอันสงบเย็น",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก อนุสสติ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-093",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 4 ข้อ 93] อาสวะ ๔ (กิเลสดองสันดาน) ได้แก่อะไรบ้าง?",
    "options": [
      "กามาสวะ ภวาสวะ ทิฏฐาสวะ อวิชชาสวะ",
      "โลภะ โทสะ โมหะ มานะ",
      "กาม ภพ วิภพ อาสวะ",
      "ราคะ โทสะ โมหะ ตัณหา"
    ],
    "correctIndex": 0,
    "explanation": "อาสวะ ๔ คือ กิเลสที่หมักหมมดองกมลสันดาน (กาม ภพ ทิฏฐิ อวิชชา)",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก อาสวะ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-094",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 4 ข้อ 94] อนุสัย ๗ (กิเลสละเอียดที่นอนเนื่องในจิต) มีอะไรบ้าง?",
    "options": [
      "กามราคะ ปฏิฆะ ทิฏฐิ วิจิกิจฉา มานะ ภวราคะ อวิชชา",
      "โลภะ โทสะ โมหะ โกธะ อุปนาหะ มักขะ ปลาสะ",
      "ราคะ โทสะ โมหะ ตัณหา มานะ ทิฏฐิ อุปาทาน",
      "สังขาร วิญญาณ นามรูป สฬายตนะ"
    ],
    "correctIndex": 0,
    "explanation": "อนุสัย ๗ คือ กิเลสนอนเนื่องในสันดาน ตัดได้หมดสิ้นเมื่อบรรลุพระอรหันต์",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก อนุสัย ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-095",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 4 ข้อ 95] พระนิพพาน ๒ ประเภท (สอุปาทิเสสนิพพาน และ อนุปาทิเสสนิพพาน) ต่างกันอย่างไร?",
    "options": [
      "สอุปาทิเสสนิพพาน ดับกิเลสยังมีขันธ์ ๕ เหลือ ส่วนอนุปาทิเสสนิพพาน ดับกิเลสและดับขันธ์ ๕ ทั้งหมด",
      "สอุปาทิเสสเป็นของโสดาบัน อนุปาทิเสสเป็นของอรหันต์",
      "สอุปาทิเสสคือสมาธิ อนุปาทิเสสคือปัญญา",
      "ไม่มีความต่างกัน"
    ],
    "correctIndex": 0,
    "explanation": "สอุปาทิเสสนิพพาน คือดับกิเลสขณะยังมีชีวิต อนุปาทิเสสนิพพาน คือดับขันธ์ปรินิพพาน",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก นิพพานธาตุ ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-096",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 4 ข้อ 96] สมถะ และ วิปัสสนา มีผลสัมฤทธิ์สูงสุดต่างกันอย่างไร?",
    "options": [
      "สมถะทำให้เกิดเจโตวิมุตติ (จิตหลุดพ้นจากราคะ) วิปัสสนาทำให้เกิดปัญญาวิมุตติ (จิตหลุดพ้นจากอวิชชา)",
      "สมถะเพื่อดับทุกข์ วิปัสสนาเพื่อความสงบ",
      "สมถะสำหรับฆราวาส วิปัสสนาสำหรับพระ",
      "เหมือนกันทุกประการ"
    ],
    "correctIndex": 0,
    "explanation": "สมถะมุ่งกำจัดราคะเกิดเจโตวิมุตติ วิปัสสนามุ่งขจัดอวิชชาเกิดปัญญาวิมุตติ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สมถะและวิปัสสนา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-097",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 4 ข้อ 97] อุปาทานขันธ์ ๕ เป็นภาระอันหนัก ผู้แบกภาระคือใคร และการวางภาระคือสิ่งใด?",
    "options": [
      "ผู้แบกภาระคือบุคคลผู้มีตัณหา การวางภาระคือการดับตัณหาบรรลุพระนิพพาน",
      "ผู้แบกคือเทวดา การวางคือการนอนหลับ",
      "ผู้แบกคือพระสงฆ์ การวางคือการสึก",
      "ผู้แบกคือกษัตริย์ การวางคือการสละราชสมบัติ"
    ],
    "correctIndex": 0,
    "explanation": "ตัณหาเป็นตัวพาแบกหามภาระขันธ์ ๕ การสละตัณหาเข้าสู่นิพพานเป็นการวางภาระอันหนักลงได้",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก ภารสูตร",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-098",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 4 ข้อ 98] ธรรมารมณ์ ในอายตนะภายใน-ภายนอก คืออะไร?",
    "options": [
      "อารมณ์ที่รู้ได้ทางใจโดยเฉพาะ เช่น ความคิด ความจำ ความรู้สึก และปรมัตถธรรม",
      "รูปที่มองเห็นด้วยตา",
      "เสียงที่ได้ยินทางหู",
      "กลิ่นที่สัมผัสทางจมูก"
    ],
    "correctIndex": 0,
    "explanation": "ธรรมารมณ์ คือ สิ่งที่จิตนึกคิดและสัมผัสได้ทางมโนทวาร (ใจ)",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก อายตนะ ๑๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-099",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 4 ข้อ 99] ธาตุ ๑๘ ในพระอภิธรรม ประกอบด้วยอะไรบ้าง?",
    "options": [
      "อายตนะภายใน ๖ + อายตนะภายนอก ๖ + วิญญาณ ๖ = ๑๘",
      "ดิน น้ำ ลม ไฟ ๔",
      "ขันธ์ ๕ รวมกัน ๓ รอบ",
      "รูป ๒๘"
    ],
    "correctIndex": 0,
    "explanation": "ธาตุ ๑๘ ได้แก่ จักขุธาตุ รูปธาตุ จักขุวิญญาณธาตุ ฯลฯ ครบ ๖ ทวาร รวมเป็น ๑๘ ธาตุ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก ธาตุ ๑๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-100",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 4 ข้อ 100] ปรมัตถธรรม ๔ (ความจริงแท้ขั้นสูงสุดในพระอภิธรรม) มีอะไรบ้าง?",
    "options": [
      "จิต เจตสิก รูป นิพพาน",
      "ทาน ศีล ภาวนา ปัญญา",
      "ทุกข์ สมุทัย นิโรธ มรรค",
      "อนิจจัง ทุกขัง อนัตตา วิมุตติ"
    ],
    "correctIndex": 0,
    "explanation": "ปรมัตถธรรม ๔: จิต (ธรรมชาติรู้อารมณ์) เจตสิก (ธรรมประกอบจิต) รูป (สสารร่างกาย) นิพพาน (ธรรมพ้นทุกข์)",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก ปรมัตถธรรม ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-101",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 5 ข้อ 101] วิสุทธิ ๗ (ความบริสุทธิ์หมดจด ๗ ขั้นตอนแห่งการปฏิบัติธรรม) ขั้นแรกคือข้อใด?",
    "options": [
      "สีลวิสุทธิ (ความหมดจดแห่งศีล)",
      "จิตตวิสุทธิ (ความหมดจดแห่งจิต/สมาธิ)",
      "ทิฏฐิวิสุทธิ",
      "ญาณทัสสนวิสุทธิ"
    ],
    "correctIndex": 0,
    "explanation": "วิสุทธิ ๗ เริ่มต้นที่ ๑. สีลวิสุทธิ ๒. จิตตวิสุทธิ ๓. ทิฏฐิวิสุทธิ ๔. กังขาวิตรณวิสุทธิ ๕. มัคคามัคคญาณทัสสนวิสุทธิ ๖. ปฏิปทาญาณทัสสนวิสุทธิ ๗. ญาณทัสสนวิสุทธิ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิสุทธิ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-102",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 5 ข้อ 102] 'จิตตวิสุทธิ' ในวิสุทธิ ๗ หมายถึงการอบรมสิ่งใดจนบริสุทธิ์ตั้งมั่น?",
    "options": [
      "การทำสมาธิจนจิตตั้งมั่นปราศจากนิวรณ์ ๕ (อุปจารสมาธิและอัปปนาสมาธิ)",
      "การรักษาศีล ๒๒๗",
      "การเห็นรูปนาม",
      "การตัดกิเลส"
    ],
    "correctIndex": 0,
    "explanation": "จิตตวิสุทธิ คือ ความหมดจดแห่งจิต ได้แก่การเจริญสมาธิจนจิตผ่องใส ปราศจากนิวรณ์",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิสุทธิ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-103",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 5 ข้อ 103] 'ทิฏฐิวิสุทธิ' ในวิสุทธิ ๗ คือความเห็นถูกต้องบริสุทธิ์ด้วยการจำแนกสิ่งใด?",
    "options": [
      "การจำแนกรูปและนาม (นามรูปปริจเฉทญาณ) ว่าไม่ใช่สัตว์ บุคคล ตัวตน",
      "การจำแนกคนดีคนชั่ว",
      "การจำแนกบุญบาป",
      "การจำแนกพระธรรม"
    ],
    "correctIndex": 0,
    "explanation": "ทิฏฐิวิสุทธิ คือ การรู้แจ้งเห็นจริงแยกแยะ รูป และ นาม ปราศจากความยึดถือว่ามีตัวตน",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิสุทธิ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-104",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 5 ข้อ 104] 'กังขาวิตรณวิสุทธิ' ในวิสุทธิ ๗ หมายถึงการข้ามพ้นความสงสัยด้วยการรู้เห็นสิ่งใด?",
    "options": [
      "รู้เห็นปัจจัยแห่งรูปนามตามกฎปฏิจจสมุปบาทและกรรม (ปัจจยปริคคหญาณ)",
      "รู้เห็นอนาคต",
      "รู้เห็นชาติก่อน",
      "รู้เห็นสวรรค์"
    ],
    "correctIndex": 0,
    "explanation": "กังขาวิตรณวิสุทธิ คือ ปัญญาข้ามพ้นความลังเลสงสัยในกาลทั้ง ๓ เพราะรู้แจ้งปัจจัยแห่งรูปนาม",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิสุทธิ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-105",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 5 ข้อ 105] วิปัสสนูปกิเลส ๑๐ (อุปสรรคหลอกล่อให้หลงผิดระหว่างปฏิบัติวิปัสสนา) ข้อใดเกิดขึ้นบ่อยที่สุด?",
    "options": [
      "โอภาส (แสงสว่างจ้า) และ ญาณ (ความรู้ว่องไว)",
      "ความง่วงนอน",
      "ความโกรธ",
      "ความกลัว"
    ],
    "correctIndex": 0,
    "explanation": "โอภาส, ปีติ, ปัสสัทธิ, สุข, ญาณ ฯลฯ ทำให้นักปฏิบัติหลงสำคัญผิดว่าตนบรรลุมรรคผลแล้ว",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิปัสสนูปกิเลส ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-106",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 5 ข้อ 106] วิปัสสนาญาณ ๙ ญาณแรกสุดคือข้อใด?",
    "options": [
      "อุทยัพพยญาณ (ญาณหยั่งรู้ความเกิดและความดับของรูปนาม)",
      "ภังคญาณ",
      "ภยญาณ",
      "มุญจิตุกัมยตาญาณ"
    ],
    "correctIndex": 0,
    "explanation": "วิปัสสนาญาณ ๙ เริ่มต้นด้วย อุทยัพพยญาณ (รู้การเกิดดับ)",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิปัสสนาญาณ ๙",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-107",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 5 ข้อ 107] 'สังขารุเปกขาญาณ' ในวิปัสสนาญาณ ๙ มีลักษณะเด่นอย่างไร?",
    "options": [
      "จิตวางเฉยเป็นกลางต่อสังขารทั้งปวง ไม่ยินดียินร้าย พร้อมเข้าสู่อริยมรรค",
      "จิตกลัวสังขาร",
      "จิตอยากหนีจากสังขาร",
      "จิตหลงในความสุข"
    ],
    "correctIndex": 0,
    "explanation": "สังขารุเปกขาญาณ คือ ปัญญาที่พิจารณาสังขารแล้ววางใจเป็นกลาง เป็นยอดแห่งโลกิยญาณ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิปัสสนาญาณ ๙",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-108",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 5 ข้อ 108] สังโยชน์ ๑๐ พระโสดาบันละสังโยชน์ ๓ ข้อใดได้เด็ดขาด?",
    "options": [
      "สักกายทิฏฐิ วิจิกิจฉา สีลัพพตปรามาส",
      "กามราคะ ปฏิฆะ อวิชชา",
      "มานะ อุทธัจจะ อวิชชา",
      "รูปราคะ อรูปราคะ"
    ],
    "correctIndex": 0,
    "explanation": "พระโสดาบันละสังโยชน์ ๓ ข้อแรกได้เด็ดขาด ไม่ตกต่ำสู่อบายภูมิอีก",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สังโยชน์ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-109",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 5 ข้อ 109] พระอนาคามี ตัดสังโยชน์ข้อใดเพิ่มจนหมดสิ้น?",
    "options": [
      "กามราคะ และ ปฏิฆะ (ความขัดเคืองใจ)",
      "รูปราคะ และ อรูปราคะ",
      "มานะ และ อวิชชา",
      "สักกายทิฏฐิ"
    ],
    "correctIndex": 0,
    "explanation": "พระอนาคามีตัดกามราคะและปฏิฆะได้เด็ดขาด ละโอรัมภาคิยสังโยชน์ ๕ ได้ครบ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สังโยชน์ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-110",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 5 ข้อ 110] พระอรหันต์ ตัดอุทธัมภาคิยสังโยชน์ (สังโยชน์เบื้องสูง ๕ ประการ) ได้หมดสิ้น ข้อใดคือ ๕ ประการนั้น?",
    "options": [
      "รูปราคะ อรูปราคะ มานะ อุทธัจจะ อวิชชา",
      "สักกายทิฏฐิ วิจิกิจฉา สีลัพพตปรามาส กามราคะ ปฏิฆะ",
      "โลภะ โทสะ โมหะ มานะ ทิฏฐิ",
      "ตัณหา มานะ ทิฏฐิ"
    ],
    "correctIndex": 0,
    "explanation": "อุทธัมภาคิยสังโยชน์ ๕ ได้แก่ รูปราคะ อรูปราคะ มานะ อุทธัจจะ อวิชชา พระอรหันต์เท่านั้นที่ละได้หมด",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สังโยชน์ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-111",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 5 ข้อ 111] โพธิปักขิยธรรม ๓๗ ประการ ประกอบด้วยหมวดธรรมกี่หมวด?",
    "options": [
      "๗ หมวด (สติปัฏฐาน ๔, สัมมัปปธาน ๔, อิทธิบาท ๔, อินทรีย์ ๕, พละ ๕, โพชฌงค์ ๗, มรรค ๘)",
      "๕ หมวด",
      "๙ หมวด",
      "๑๐ หมวด"
    ],
    "correctIndex": 0,
    "explanation": "โพธิปักขิยธรรม ๓๗ มี ๗ หมวดธรรมเกื้อกูลแก่การตรัสรู้",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก โพธิปักขิยธรรม ๓๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-112",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 5 ข้อ 112] อารมณ์ของสมถกรรมฐาน มีกี่กองตามคัมภีร์วิสุทธิมรรค?",
    "options": [
      "๔๐ กอง (กสิณ ๑๐, อสุภะ ๑๐, อนุสสติ ๑๐, อัปปมัญญา ๔, อรูป ๔, อาหาเรปฏิกูลสัญญา ๑, จตุธาตุววัฏฐาน ๑)",
      "๑๐ กอง",
      "๒๐ กอง",
      "๖๐ กอง"
    ],
    "correctIndex": 0,
    "explanation": "สมถกรรมฐานมี ๔๐ กอง สำหรับปรับแก้จริต ๖ ของมนุษย์",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก กรรมฐาน ๔๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-113",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 5 ข้อ 113] จริต ๖ ของมนุษย์ ข้อใดเป็นกรรมฐานที่คู่ควรกับ 'ราคจริต' (คนรักสวยรักงาม)?",
    "options": [
      "อสุภกรรมฐาน ๑๐ และ กายคตาสติ (พิจารณาอาการ ๓๒)",
      "กสิณสีแดง",
      "อนุสสติ ๑๐",
      "พรหมวิหาร ๔"
    ],
    "correctIndex": 0,
    "explanation": "ราคจริตควรเจริญอสุภะ ๑๐ และกายคตาสติเพื่อคลายความกำหนัดในรูป",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก จริต ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-114",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 5 ข้อ 114] 'โทสจริต' (คนมักโกรธ หงุดหงิดง่าย) ควรเจริญกรรมฐานกองใดเป็นพิเศษ?",
    "options": [
      "อัปปมัญญา ๔ (เมตตา กรุณา มุทิตา อุเบกขา) และ วรรณกสิณ ๔ (กสิณสี)",
      "อสุภะ ๑๐",
      "มรณานุสสติ",
      "อาหาเรปฏิกูลสัญญา"
    ],
    "correctIndex": 0,
    "explanation": "โทสจริตควรเจริญเมตตาพรหมวิหารเพื่อดับไฟโทสะ และเพ่งวรรณกสิณสีเย็นตา",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก จริต ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-115",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 5 ข้อ 115] 'โมหจริต' และ 'วิตักกจริต' (คนขี้หลง ขี้ฟุ้งซ่าน) ควรฝึกกรรมฐานกองใด?",
    "options": [
      "อานาปานสติ (กำหนดลมหายใจเข้าออก)",
      "อสุภะ ๑๐",
      "กสิณไฟ",
      "เพ่งซากศพ"
    ],
    "correctIndex": 0,
    "explanation": "อานาปานสติเป็นยอดกรรมฐานในการรวบรวมจิต ดึงความคิดฟุ้งซ่านกลับสู่ปัจจุบัน",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก จริต ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-116",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 5 ข้อ 116] สมาธิ ๓ ระดับ ข้อใดคือสมาธิแน่วแน่เข้าสู่อัปปนาฌาน?",
    "options": [
      "อัปปนาสมาธิ (แน่วแน่ดิ่งลึกเป็นองค์ฌาน)",
      "ขณิกสมาธิ (ชั่วขณะ)",
      "อุปจารสมาธิ (เฉียดฌาน)",
      "มิจฉาสมาธิ"
    ],
    "correctIndex": 0,
    "explanation": "อัปปนาสมาธิ คือ สมาธิขั้นสูงแนบแน่นมั่นคง จิตรวมเป็นหนึ่งเดียวตัดอารมณ์ภายนอก",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สมาธิ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-117",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 5 ข้อ 117] อนุสสติ ๑๐ ข้อใดคือ 'อุปสมานุสสติ'?",
    "options": [
      "การตามระลึกถึงคุณของพระนิพพานอันสงบระงับจากกิเลสทั้งปวง",
      "การระลึกถึงพระพุทธคุณ",
      "การระลึกถึงความตาย",
      "การระลึกถึงเทวดา"
    ],
    "correctIndex": 0,
    "explanation": "อุปสมานุสสติ คือ การระลึกถึงคุณธรรมแห่งพระนิพพานอันสงบเย็น",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก อนุสสติ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-118",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 5 ข้อ 118] อาสวะ ๔ (กิเลสดองสันดาน) ได้แก่อะไรบ้าง?",
    "options": [
      "กามาสวะ ภวาสวะ ทิฏฐาสวะ อวิชชาสวะ",
      "โลภะ โทสะ โมหะ มานะ",
      "กาม ภพ วิภพ อาสวะ",
      "ราคะ โทสะ โมหะ ตัณหา"
    ],
    "correctIndex": 0,
    "explanation": "อาสวะ ๔ คือ กิเลสที่หมักหมมดองกมลสันดาน (กาม ภพ ทิฏฐิ อวิชชา)",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก อาสวะ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-119",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 5 ข้อ 119] อนุสัย ๗ (กิเลสละเอียดที่นอนเนื่องในจิต) มีอะไรบ้าง?",
    "options": [
      "กามราคะ ปฏิฆะ ทิฏฐิ วิจิกิจฉา มานะ ภวราคะ อวิชชา",
      "โลภะ โทสะ โมหะ โกธะ อุปนาหะ มักขะ ปลาสะ",
      "ราคะ โทสะ โมหะ ตัณหา มานะ ทิฏฐิ อุปาทาน",
      "สังขาร วิญญาณ นามรูป สฬายตนะ"
    ],
    "correctIndex": 0,
    "explanation": "อนุสัย ๗ คือ กิเลสนอนเนื่องในสันดาน ตัดได้หมดสิ้นเมื่อบรรลุพระอรหันต์",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก อนุสัย ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-120",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 5 ข้อ 120] พระนิพพาน ๒ ประเภท (สอุปาทิเสสนิพพาน และ อนุปาทิเสสนิพพาน) ต่างกันอย่างไร?",
    "options": [
      "สอุปาทิเสสนิพพาน ดับกิเลสยังมีขันธ์ ๕ เหลือ ส่วนอนุปาทิเสสนิพพาน ดับกิเลสและดับขันธ์ ๕ ทั้งหมด",
      "สอุปาทิเสสเป็นของโสดาบัน อนุปาทิเสสเป็นของอรหันต์",
      "สอุปาทิเสสคือสมาธิ อนุปาทิเสสคือปัญญา",
      "ไม่มีความต่างกัน"
    ],
    "correctIndex": 0,
    "explanation": "สอุปาทิเสสนิพพาน คือดับกิเลสขณะยังมีชีวิต อนุปาทิเสสนิพพาน คือดับขันธ์ปรินิพพาน",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก นิพพานธาตุ ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-121",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 5 ข้อ 121] สมถะ และ วิปัสสนา มีผลสัมฤทธิ์สูงสุดต่างกันอย่างไร?",
    "options": [
      "สมถะทำให้เกิดเจโตวิมุตติ (จิตหลุดพ้นจากราคะ) วิปัสสนาทำให้เกิดปัญญาวิมุตติ (จิตหลุดพ้นจากอวิชชา)",
      "สมถะเพื่อดับทุกข์ วิปัสสนาเพื่อความสงบ",
      "สมถะสำหรับฆราวาส วิปัสสนาสำหรับพระ",
      "เหมือนกันทุกประการ"
    ],
    "correctIndex": 0,
    "explanation": "สมถะมุ่งกำจัดราคะเกิดเจโตวิมุตติ วิปัสสนามุ่งขจัดอวิชชาเกิดปัญญาวิมุตติ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สมถะและวิปัสสนา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-122",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 5 ข้อ 122] อุปาทานขันธ์ ๕ เป็นภาระอันหนัก ผู้แบกภาระคือใคร และการวางภาระคือสิ่งใด?",
    "options": [
      "ผู้แบกภาระคือบุคคลผู้มีตัณหา การวางภาระคือการดับตัณหาบรรลุพระนิพพาน",
      "ผู้แบกคือเทวดา การวางคือการนอนหลับ",
      "ผู้แบกคือพระสงฆ์ การวางคือการสึก",
      "ผู้แบกคือกษัตริย์ การวางคือการสละราชสมบัติ"
    ],
    "correctIndex": 0,
    "explanation": "ตัณหาเป็นตัวพาแบกหามภาระขันธ์ ๕ การสละตัณหาเข้าสู่นิพพานเป็นการวางภาระอันหนักลงได้",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก ภารสูตร",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-123",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 5 ข้อ 123] ธรรมารมณ์ ในอายตนะภายใน-ภายนอก คืออะไร?",
    "options": [
      "อารมณ์ที่รู้ได้ทางใจโดยเฉพาะ เช่น ความคิด ความจำ ความรู้สึก และปรมัตถธรรม",
      "รูปที่มองเห็นด้วยตา",
      "เสียงที่ได้ยินทางหู",
      "กลิ่นที่สัมผัสทางจมูก"
    ],
    "correctIndex": 0,
    "explanation": "ธรรมารมณ์ คือ สิ่งที่จิตนึกคิดและสัมผัสได้ทางมโนทวาร (ใจ)",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก อายตนะ ๑๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-124",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 5 ข้อ 124] ธาตุ ๑๘ ในพระอภิธรรม ประกอบด้วยอะไรบ้าง?",
    "options": [
      "อายตนะภายใน ๖ + อายตนะภายนอก ๖ + วิญญาณ ๖ = ๑๘",
      "ดิน น้ำ ลม ไฟ ๔",
      "ขันธ์ ๕ รวมกัน ๓ รอบ",
      "รูป ๒๘"
    ],
    "correctIndex": 0,
    "explanation": "ธาตุ ๑๘ ได้แก่ จักขุธาตุ รูปธาตุ จักขุวิญญาณธาตุ ฯลฯ ครบ ๖ ทวาร รวมเป็น ๑๘ ธาตุ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก ธาตุ ๑๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-125",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 5 ข้อ 125] ปรมัตถธรรม ๔ (ความจริงแท้ขั้นสูงสุดในพระอภิธรรม) มีอะไรบ้าง?",
    "options": [
      "จิต เจตสิก รูป นิพพาน",
      "ทาน ศีล ภาวนา ปัญญา",
      "ทุกข์ สมุทัย นิโรธ มรรค",
      "อนิจจัง ทุกขัง อนัตตา วิมุตติ"
    ],
    "correctIndex": 0,
    "explanation": "ปรมัตถธรรม ๔: จิต (ธรรมชาติรู้อารมณ์) เจตสิก (ธรรมประกอบจิต) รูป (สสารร่างกาย) นิพพาน (ธรรมพ้นทุกข์)",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก ปรมัตถธรรม ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-126",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 6 ข้อ 126] วิสุทธิ ๗ (ความบริสุทธิ์หมดจด ๗ ขั้นตอนแห่งการปฏิบัติธรรม) ขั้นแรกคือข้อใด?",
    "options": [
      "สีลวิสุทธิ (ความหมดจดแห่งศีล)",
      "จิตตวิสุทธิ (ความหมดจดแห่งจิต/สมาธิ)",
      "ทิฏฐิวิสุทธิ",
      "ญาณทัสสนวิสุทธิ"
    ],
    "correctIndex": 0,
    "explanation": "วิสุทธิ ๗ เริ่มต้นที่ ๑. สีลวิสุทธิ ๒. จิตตวิสุทธิ ๓. ทิฏฐิวิสุทธิ ๔. กังขาวิตรณวิสุทธิ ๕. มัคคามัคคญาณทัสสนวิสุทธิ ๖. ปฏิปทาญาณทัสสนวิสุทธิ ๗. ญาณทัสสนวิสุทธิ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิสุทธิ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-127",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 6 ข้อ 127] 'จิตตวิสุทธิ' ในวิสุทธิ ๗ หมายถึงการอบรมสิ่งใดจนบริสุทธิ์ตั้งมั่น?",
    "options": [
      "การทำสมาธิจนจิตตั้งมั่นปราศจากนิวรณ์ ๕ (อุปจารสมาธิและอัปปนาสมาธิ)",
      "การรักษาศีล ๒๒๗",
      "การเห็นรูปนาม",
      "การตัดกิเลส"
    ],
    "correctIndex": 0,
    "explanation": "จิตตวิสุทธิ คือ ความหมดจดแห่งจิต ได้แก่การเจริญสมาธิจนจิตผ่องใส ปราศจากนิวรณ์",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิสุทธิ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-128",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 6 ข้อ 128] 'ทิฏฐิวิสุทธิ' ในวิสุทธิ ๗ คือความเห็นถูกต้องบริสุทธิ์ด้วยการจำแนกสิ่งใด?",
    "options": [
      "การจำแนกรูปและนาม (นามรูปปริจเฉทญาณ) ว่าไม่ใช่สัตว์ บุคคล ตัวตน",
      "การจำแนกคนดีคนชั่ว",
      "การจำแนกบุญบาป",
      "การจำแนกพระธรรม"
    ],
    "correctIndex": 0,
    "explanation": "ทิฏฐิวิสุทธิ คือ การรู้แจ้งเห็นจริงแยกแยะ รูป และ นาม ปราศจากความยึดถือว่ามีตัวตน",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิสุทธิ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-129",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 6 ข้อ 129] 'กังขาวิตรณวิสุทธิ' ในวิสุทธิ ๗ หมายถึงการข้ามพ้นความสงสัยด้วยการรู้เห็นสิ่งใด?",
    "options": [
      "รู้เห็นปัจจัยแห่งรูปนามตามกฎปฏิจจสมุปบาทและกรรม (ปัจจยปริคคหญาณ)",
      "รู้เห็นอนาคต",
      "รู้เห็นชาติก่อน",
      "รู้เห็นสวรรค์"
    ],
    "correctIndex": 0,
    "explanation": "กังขาวิตรณวิสุทธิ คือ ปัญญาข้ามพ้นความลังเลสงสัยในกาลทั้ง ๓ เพราะรู้แจ้งปัจจัยแห่งรูปนาม",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิสุทธิ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-130",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 6 ข้อ 130] วิปัสสนูปกิเลส ๑๐ (อุปสรรคหลอกล่อให้หลงผิดระหว่างปฏิบัติวิปัสสนา) ข้อใดเกิดขึ้นบ่อยที่สุด?",
    "options": [
      "โอภาส (แสงสว่างจ้า) และ ญาณ (ความรู้ว่องไว)",
      "ความง่วงนอน",
      "ความโกรธ",
      "ความกลัว"
    ],
    "correctIndex": 0,
    "explanation": "โอภาส, ปีติ, ปัสสัทธิ, สุข, ญาณ ฯลฯ ทำให้นักปฏิบัติหลงสำคัญผิดว่าตนบรรลุมรรคผลแล้ว",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิปัสสนูปกิเลส ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-131",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 6 ข้อ 131] วิปัสสนาญาณ ๙ ญาณแรกสุดคือข้อใด?",
    "options": [
      "อุทยัพพยญาณ (ญาณหยั่งรู้ความเกิดและความดับของรูปนาม)",
      "ภังคญาณ",
      "ภยญาณ",
      "มุญจิตุกัมยตาญาณ"
    ],
    "correctIndex": 0,
    "explanation": "วิปัสสนาญาณ ๙ เริ่มต้นด้วย อุทยัพพยญาณ (รู้การเกิดดับ)",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิปัสสนาญาณ ๙",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-132",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 6 ข้อ 132] 'สังขารุเปกขาญาณ' ในวิปัสสนาญาณ ๙ มีลักษณะเด่นอย่างไร?",
    "options": [
      "จิตวางเฉยเป็นกลางต่อสังขารทั้งปวง ไม่ยินดียินร้าย พร้อมเข้าสู่อริยมรรค",
      "จิตกลัวสังขาร",
      "จิตอยากหนีจากสังขาร",
      "จิตหลงในความสุข"
    ],
    "correctIndex": 0,
    "explanation": "สังขารุเปกขาญาณ คือ ปัญญาที่พิจารณาสังขารแล้ววางใจเป็นกลาง เป็นยอดแห่งโลกิยญาณ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิปัสสนาญาณ ๙",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-133",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 6 ข้อ 133] สังโยชน์ ๑๐ พระโสดาบันละสังโยชน์ ๓ ข้อใดได้เด็ดขาด?",
    "options": [
      "สักกายทิฏฐิ วิจิกิจฉา สีลัพพตปรามาส",
      "กามราคะ ปฏิฆะ อวิชชา",
      "มานะ อุทธัจจะ อวิชชา",
      "รูปราคะ อรูปราคะ"
    ],
    "correctIndex": 0,
    "explanation": "พระโสดาบันละสังโยชน์ ๓ ข้อแรกได้เด็ดขาด ไม่ตกต่ำสู่อบายภูมิอีก",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สังโยชน์ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-134",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 6 ข้อ 134] พระอนาคามี ตัดสังโยชน์ข้อใดเพิ่มจนหมดสิ้น?",
    "options": [
      "กามราคะ และ ปฏิฆะ (ความขัดเคืองใจ)",
      "รูปราคะ และ อรูปราคะ",
      "มานะ และ อวิชชา",
      "สักกายทิฏฐิ"
    ],
    "correctIndex": 0,
    "explanation": "พระอนาคามีตัดกามราคะและปฏิฆะได้เด็ดขาด ละโอรัมภาคิยสังโยชน์ ๕ ได้ครบ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สังโยชน์ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-135",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 6 ข้อ 135] พระอรหันต์ ตัดอุทธัมภาคิยสังโยชน์ (สังโยชน์เบื้องสูง ๕ ประการ) ได้หมดสิ้น ข้อใดคือ ๕ ประการนั้น?",
    "options": [
      "รูปราคะ อรูปราคะ มานะ อุทธัจจะ อวิชชา",
      "สักกายทิฏฐิ วิจิกิจฉา สีลัพพตปรามาส กามราคะ ปฏิฆะ",
      "โลภะ โทสะ โมหะ มานะ ทิฏฐิ",
      "ตัณหา มานะ ทิฏฐิ"
    ],
    "correctIndex": 0,
    "explanation": "อุทธัมภาคิยสังโยชน์ ๕ ได้แก่ รูปราคะ อรูปราคะ มานะ อุทธัจจะ อวิชชา พระอรหันต์เท่านั้นที่ละได้หมด",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สังโยชน์ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-136",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 6 ข้อ 136] โพธิปักขิยธรรม ๓๗ ประการ ประกอบด้วยหมวดธรรมกี่หมวด?",
    "options": [
      "๗ หมวด (สติปัฏฐาน ๔, สัมมัปปธาน ๔, อิทธิบาท ๔, อินทรีย์ ๕, พละ ๕, โพชฌงค์ ๗, มรรค ๘)",
      "๕ หมวด",
      "๙ หมวด",
      "๑๐ หมวด"
    ],
    "correctIndex": 0,
    "explanation": "โพธิปักขิยธรรม ๓๗ มี ๗ หมวดธรรมเกื้อกูลแก่การตรัสรู้",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก โพธิปักขิยธรรม ๓๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-137",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 6 ข้อ 137] อารมณ์ของสมถกรรมฐาน มีกี่กองตามคัมภีร์วิสุทธิมรรค?",
    "options": [
      "๔๐ กอง (กสิณ ๑๐, อสุภะ ๑๐, อนุสสติ ๑๐, อัปปมัญญา ๔, อรูป ๔, อาหาเรปฏิกูลสัญญา ๑, จตุธาตุววัฏฐาน ๑)",
      "๑๐ กอง",
      "๒๐ กอง",
      "๖๐ กอง"
    ],
    "correctIndex": 0,
    "explanation": "สมถกรรมฐานมี ๔๐ กอง สำหรับปรับแก้จริต ๖ ของมนุษย์",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก กรรมฐาน ๔๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-138",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 6 ข้อ 138] จริต ๖ ของมนุษย์ ข้อใดเป็นกรรมฐานที่คู่ควรกับ 'ราคจริต' (คนรักสวยรักงาม)?",
    "options": [
      "อสุภกรรมฐาน ๑๐ และ กายคตาสติ (พิจารณาอาการ ๓๒)",
      "กสิณสีแดง",
      "อนุสสติ ๑๐",
      "พรหมวิหาร ๔"
    ],
    "correctIndex": 0,
    "explanation": "ราคจริตควรเจริญอสุภะ ๑๐ และกายคตาสติเพื่อคลายความกำหนัดในรูป",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก จริต ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-139",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 6 ข้อ 139] 'โทสจริต' (คนมักโกรธ หงุดหงิดง่าย) ควรเจริญกรรมฐานกองใดเป็นพิเศษ?",
    "options": [
      "อัปปมัญญา ๔ (เมตตา กรุณา มุทิตา อุเบกขา) และ วรรณกสิณ ๔ (กสิณสี)",
      "อสุภะ ๑๐",
      "มรณานุสสติ",
      "อาหาเรปฏิกูลสัญญา"
    ],
    "correctIndex": 0,
    "explanation": "โทสจริตควรเจริญเมตตาพรหมวิหารเพื่อดับไฟโทสะ และเพ่งวรรณกสิณสีเย็นตา",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก จริต ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-140",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 6 ข้อ 140] 'โมหจริต' และ 'วิตักกจริต' (คนขี้หลง ขี้ฟุ้งซ่าน) ควรฝึกกรรมฐานกองใด?",
    "options": [
      "อานาปานสติ (กำหนดลมหายใจเข้าออก)",
      "อสุภะ ๑๐",
      "กสิณไฟ",
      "เพ่งซากศพ"
    ],
    "correctIndex": 0,
    "explanation": "อานาปานสติเป็นยอดกรรมฐานในการรวบรวมจิต ดึงความคิดฟุ้งซ่านกลับสู่ปัจจุบัน",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก จริต ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-141",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 6 ข้อ 141] สมาธิ ๓ ระดับ ข้อใดคือสมาธิแน่วแน่เข้าสู่อัปปนาฌาน?",
    "options": [
      "อัปปนาสมาธิ (แน่วแน่ดิ่งลึกเป็นองค์ฌาน)",
      "ขณิกสมาธิ (ชั่วขณะ)",
      "อุปจารสมาธิ (เฉียดฌาน)",
      "มิจฉาสมาธิ"
    ],
    "correctIndex": 0,
    "explanation": "อัปปนาสมาธิ คือ สมาธิขั้นสูงแนบแน่นมั่นคง จิตรวมเป็นหนึ่งเดียวตัดอารมณ์ภายนอก",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สมาธิ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-142",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 6 ข้อ 142] อนุสสติ ๑๐ ข้อใดคือ 'อุปสมานุสสติ'?",
    "options": [
      "การตามระลึกถึงคุณของพระนิพพานอันสงบระงับจากกิเลสทั้งปวง",
      "การระลึกถึงพระพุทธคุณ",
      "การระลึกถึงความตาย",
      "การระลึกถึงเทวดา"
    ],
    "correctIndex": 0,
    "explanation": "อุปสมานุสสติ คือ การระลึกถึงคุณธรรมแห่งพระนิพพานอันสงบเย็น",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก อนุสสติ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-143",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 6 ข้อ 143] อาสวะ ๔ (กิเลสดองสันดาน) ได้แก่อะไรบ้าง?",
    "options": [
      "กามาสวะ ภวาสวะ ทิฏฐาสวะ อวิชชาสวะ",
      "โลภะ โทสะ โมหะ มานะ",
      "กาม ภพ วิภพ อาสวะ",
      "ราคะ โทสะ โมหะ ตัณหา"
    ],
    "correctIndex": 0,
    "explanation": "อาสวะ ๔ คือ กิเลสที่หมักหมมดองกมลสันดาน (กาม ภพ ทิฏฐิ อวิชชา)",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก อาสวะ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-144",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 6 ข้อ 144] อนุสัย ๗ (กิเลสละเอียดที่นอนเนื่องในจิต) มีอะไรบ้าง?",
    "options": [
      "กามราคะ ปฏิฆะ ทิฏฐิ วิจิกิจฉา มานะ ภวราคะ อวิชชา",
      "โลภะ โทสะ โมหะ โกธะ อุปนาหะ มักขะ ปลาสะ",
      "ราคะ โทสะ โมหะ ตัณหา มานะ ทิฏฐิ อุปาทาน",
      "สังขาร วิญญาณ นามรูป สฬายตนะ"
    ],
    "correctIndex": 0,
    "explanation": "อนุสัย ๗ คือ กิเลสนอนเนื่องในสันดาน ตัดได้หมดสิ้นเมื่อบรรลุพระอรหันต์",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก อนุสัย ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-145",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 6 ข้อ 145] พระนิพพาน ๒ ประเภท (สอุปาทิเสสนิพพาน และ อนุปาทิเสสนิพพาน) ต่างกันอย่างไร?",
    "options": [
      "สอุปาทิเสสนิพพาน ดับกิเลสยังมีขันธ์ ๕ เหลือ ส่วนอนุปาทิเสสนิพพาน ดับกิเลสและดับขันธ์ ๕ ทั้งหมด",
      "สอุปาทิเสสเป็นของโสดาบัน อนุปาทิเสสเป็นของอรหันต์",
      "สอุปาทิเสสคือสมาธิ อนุปาทิเสสคือปัญญา",
      "ไม่มีความต่างกัน"
    ],
    "correctIndex": 0,
    "explanation": "สอุปาทิเสสนิพพาน คือดับกิเลสขณะยังมีชีวิต อนุปาทิเสสนิพพาน คือดับขันธ์ปรินิพพาน",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก นิพพานธาตุ ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-146",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 6 ข้อ 146] สมถะ และ วิปัสสนา มีผลสัมฤทธิ์สูงสุดต่างกันอย่างไร?",
    "options": [
      "สมถะทำให้เกิดเจโตวิมุตติ (จิตหลุดพ้นจากราคะ) วิปัสสนาทำให้เกิดปัญญาวิมุตติ (จิตหลุดพ้นจากอวิชชา)",
      "สมถะเพื่อดับทุกข์ วิปัสสนาเพื่อความสงบ",
      "สมถะสำหรับฆราวาส วิปัสสนาสำหรับพระ",
      "เหมือนกันทุกประการ"
    ],
    "correctIndex": 0,
    "explanation": "สมถะมุ่งกำจัดราคะเกิดเจโตวิมุตติ วิปัสสนามุ่งขจัดอวิชชาเกิดปัญญาวิมุตติ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สมถะและวิปัสสนา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-147",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 6 ข้อ 147] อุปาทานขันธ์ ๕ เป็นภาระอันหนัก ผู้แบกภาระคือใคร และการวางภาระคือสิ่งใด?",
    "options": [
      "ผู้แบกภาระคือบุคคลผู้มีตัณหา การวางภาระคือการดับตัณหาบรรลุพระนิพพาน",
      "ผู้แบกคือเทวดา การวางคือการนอนหลับ",
      "ผู้แบกคือพระสงฆ์ การวางคือการสึก",
      "ผู้แบกคือกษัตริย์ การวางคือการสละราชสมบัติ"
    ],
    "correctIndex": 0,
    "explanation": "ตัณหาเป็นตัวพาแบกหามภาระขันธ์ ๕ การสละตัณหาเข้าสู่นิพพานเป็นการวางภาระอันหนักลงได้",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก ภารสูตร",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-148",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 6 ข้อ 148] ธรรมารมณ์ ในอายตนะภายใน-ภายนอก คืออะไร?",
    "options": [
      "อารมณ์ที่รู้ได้ทางใจโดยเฉพาะ เช่น ความคิด ความจำ ความรู้สึก และปรมัตถธรรม",
      "รูปที่มองเห็นด้วยตา",
      "เสียงที่ได้ยินทางหู",
      "กลิ่นที่สัมผัสทางจมูก"
    ],
    "correctIndex": 0,
    "explanation": "ธรรมารมณ์ คือ สิ่งที่จิตนึกคิดและสัมผัสได้ทางมโนทวาร (ใจ)",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก อายตนะ ๑๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-149",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 6 ข้อ 149] ธาตุ ๑๘ ในพระอภิธรรม ประกอบด้วยอะไรบ้าง?",
    "options": [
      "อายตนะภายใน ๖ + อายตนะภายนอก ๖ + วิญญาณ ๖ = ๑๘",
      "ดิน น้ำ ลม ไฟ ๔",
      "ขันธ์ ๕ รวมกัน ๓ รอบ",
      "รูป ๒๘"
    ],
    "correctIndex": 0,
    "explanation": "ธาตุ ๑๘ ได้แก่ จักขุธาตุ รูปธาตุ จักขุวิญญาณธาตุ ฯลฯ ครบ ๖ ทวาร รวมเป็น ๑๘ ธาตุ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก ธาตุ ๑๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-150",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 6 ข้อ 150] ปรมัตถธรรม ๔ (ความจริงแท้ขั้นสูงสุดในพระอภิธรรม) มีอะไรบ้าง?",
    "options": [
      "จิต เจตสิก รูป นิพพาน",
      "ทาน ศีล ภาวนา ปัญญา",
      "ทุกข์ สมุทัย นิโรธ มรรค",
      "อนิจจัง ทุกขัง อนัตตา วิมุตติ"
    ],
    "correctIndex": 0,
    "explanation": "ปรมัตถธรรม ๔: จิต (ธรรมชาติรู้อารมณ์) เจตสิก (ธรรมประกอบจิต) รูป (สสารร่างกาย) นิพพาน (ธรรมพ้นทุกข์)",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก ปรมัตถธรรม ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-151",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 7 ข้อ 151] วิสุทธิ ๗ (ความบริสุทธิ์หมดจด ๗ ขั้นตอนแห่งการปฏิบัติธรรม) ขั้นแรกคือข้อใด?",
    "options": [
      "สีลวิสุทธิ (ความหมดจดแห่งศีล)",
      "จิตตวิสุทธิ (ความหมดจดแห่งจิต/สมาธิ)",
      "ทิฏฐิวิสุทธิ",
      "ญาณทัสสนวิสุทธิ"
    ],
    "correctIndex": 0,
    "explanation": "วิสุทธิ ๗ เริ่มต้นที่ ๑. สีลวิสุทธิ ๒. จิตตวิสุทธิ ๓. ทิฏฐิวิสุทธิ ๔. กังขาวิตรณวิสุทธิ ๕. มัคคามัคคญาณทัสสนวิสุทธิ ๖. ปฏิปทาญาณทัสสนวิสุทธิ ๗. ญาณทัสสนวิสุทธิ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิสุทธิ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-152",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 7 ข้อ 152] 'จิตตวิสุทธิ' ในวิสุทธิ ๗ หมายถึงการอบรมสิ่งใดจนบริสุทธิ์ตั้งมั่น?",
    "options": [
      "การทำสมาธิจนจิตตั้งมั่นปราศจากนิวรณ์ ๕ (อุปจารสมาธิและอัปปนาสมาธิ)",
      "การรักษาศีล ๒๒๗",
      "การเห็นรูปนาม",
      "การตัดกิเลส"
    ],
    "correctIndex": 0,
    "explanation": "จิตตวิสุทธิ คือ ความหมดจดแห่งจิต ได้แก่การเจริญสมาธิจนจิตผ่องใส ปราศจากนิวรณ์",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิสุทธิ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-153",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 7 ข้อ 153] 'ทิฏฐิวิสุทธิ' ในวิสุทธิ ๗ คือความเห็นถูกต้องบริสุทธิ์ด้วยการจำแนกสิ่งใด?",
    "options": [
      "การจำแนกรูปและนาม (นามรูปปริจเฉทญาณ) ว่าไม่ใช่สัตว์ บุคคล ตัวตน",
      "การจำแนกคนดีคนชั่ว",
      "การจำแนกบุญบาป",
      "การจำแนกพระธรรม"
    ],
    "correctIndex": 0,
    "explanation": "ทิฏฐิวิสุทธิ คือ การรู้แจ้งเห็นจริงแยกแยะ รูป และ นาม ปราศจากความยึดถือว่ามีตัวตน",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิสุทธิ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-154",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 7 ข้อ 154] 'กังขาวิตรณวิสุทธิ' ในวิสุทธิ ๗ หมายถึงการข้ามพ้นความสงสัยด้วยการรู้เห็นสิ่งใด?",
    "options": [
      "รู้เห็นปัจจัยแห่งรูปนามตามกฎปฏิจจสมุปบาทและกรรม (ปัจจยปริคคหญาณ)",
      "รู้เห็นอนาคต",
      "รู้เห็นชาติก่อน",
      "รู้เห็นสวรรค์"
    ],
    "correctIndex": 0,
    "explanation": "กังขาวิตรณวิสุทธิ คือ ปัญญาข้ามพ้นความลังเลสงสัยในกาลทั้ง ๓ เพราะรู้แจ้งปัจจัยแห่งรูปนาม",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิสุทธิ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-155",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 7 ข้อ 155] วิปัสสนูปกิเลส ๑๐ (อุปสรรคหลอกล่อให้หลงผิดระหว่างปฏิบัติวิปัสสนา) ข้อใดเกิดขึ้นบ่อยที่สุด?",
    "options": [
      "โอภาส (แสงสว่างจ้า) และ ญาณ (ความรู้ว่องไว)",
      "ความง่วงนอน",
      "ความโกรธ",
      "ความกลัว"
    ],
    "correctIndex": 0,
    "explanation": "โอภาส, ปีติ, ปัสสัทธิ, สุข, ญาณ ฯลฯ ทำให้นักปฏิบัติหลงสำคัญผิดว่าตนบรรลุมรรคผลแล้ว",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิปัสสนูปกิเลส ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-156",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 7 ข้อ 156] วิปัสสนาญาณ ๙ ญาณแรกสุดคือข้อใด?",
    "options": [
      "อุทยัพพยญาณ (ญาณหยั่งรู้ความเกิดและความดับของรูปนาม)",
      "ภังคญาณ",
      "ภยญาณ",
      "มุญจิตุกัมยตาญาณ"
    ],
    "correctIndex": 0,
    "explanation": "วิปัสสนาญาณ ๙ เริ่มต้นด้วย อุทยัพพยญาณ (รู้การเกิดดับ)",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิปัสสนาญาณ ๙",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-157",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 7 ข้อ 157] 'สังขารุเปกขาญาณ' ในวิปัสสนาญาณ ๙ มีลักษณะเด่นอย่างไร?",
    "options": [
      "จิตวางเฉยเป็นกลางต่อสังขารทั้งปวง ไม่ยินดียินร้าย พร้อมเข้าสู่อริยมรรค",
      "จิตกลัวสังขาร",
      "จิตอยากหนีจากสังขาร",
      "จิตหลงในความสุข"
    ],
    "correctIndex": 0,
    "explanation": "สังขารุเปกขาญาณ คือ ปัญญาที่พิจารณาสังขารแล้ววางใจเป็นกลาง เป็นยอดแห่งโลกิยญาณ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิปัสสนาญาณ ๙",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-158",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 7 ข้อ 158] สังโยชน์ ๑๐ พระโสดาบันละสังโยชน์ ๓ ข้อใดได้เด็ดขาด?",
    "options": [
      "สักกายทิฏฐิ วิจิกิจฉา สีลัพพตปรามาส",
      "กามราคะ ปฏิฆะ อวิชชา",
      "มานะ อุทธัจจะ อวิชชา",
      "รูปราคะ อรูปราคะ"
    ],
    "correctIndex": 0,
    "explanation": "พระโสดาบันละสังโยชน์ ๓ ข้อแรกได้เด็ดขาด ไม่ตกต่ำสู่อบายภูมิอีก",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สังโยชน์ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-159",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 7 ข้อ 159] พระอนาคามี ตัดสังโยชน์ข้อใดเพิ่มจนหมดสิ้น?",
    "options": [
      "กามราคะ และ ปฏิฆะ (ความขัดเคืองใจ)",
      "รูปราคะ และ อรูปราคะ",
      "มานะ และ อวิชชา",
      "สักกายทิฏฐิ"
    ],
    "correctIndex": 0,
    "explanation": "พระอนาคามีตัดกามราคะและปฏิฆะได้เด็ดขาด ละโอรัมภาคิยสังโยชน์ ๕ ได้ครบ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สังโยชน์ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-160",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 7 ข้อ 160] พระอรหันต์ ตัดอุทธัมภาคิยสังโยชน์ (สังโยชน์เบื้องสูง ๕ ประการ) ได้หมดสิ้น ข้อใดคือ ๕ ประการนั้น?",
    "options": [
      "รูปราคะ อรูปราคะ มานะ อุทธัจจะ อวิชชา",
      "สักกายทิฏฐิ วิจิกิจฉา สีลัพพตปรามาส กามราคะ ปฏิฆะ",
      "โลภะ โทสะ โมหะ มานะ ทิฏฐิ",
      "ตัณหา มานะ ทิฏฐิ"
    ],
    "correctIndex": 0,
    "explanation": "อุทธัมภาคิยสังโยชน์ ๕ ได้แก่ รูปราคะ อรูปราคะ มานะ อุทธัจจะ อวิชชา พระอรหันต์เท่านั้นที่ละได้หมด",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สังโยชน์ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-161",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 7 ข้อ 161] โพธิปักขิยธรรม ๓๗ ประการ ประกอบด้วยหมวดธรรมกี่หมวด?",
    "options": [
      "๗ หมวด (สติปัฏฐาน ๔, สัมมัปปธาน ๔, อิทธิบาท ๔, อินทรีย์ ๕, พละ ๕, โพชฌงค์ ๗, มรรค ๘)",
      "๕ หมวด",
      "๙ หมวด",
      "๑๐ หมวด"
    ],
    "correctIndex": 0,
    "explanation": "โพธิปักขิยธรรม ๓๗ มี ๗ หมวดธรรมเกื้อกูลแก่การตรัสรู้",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก โพธิปักขิยธรรม ๓๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-162",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 7 ข้อ 162] อารมณ์ของสมถกรรมฐาน มีกี่กองตามคัมภีร์วิสุทธิมรรค?",
    "options": [
      "๔๐ กอง (กสิณ ๑๐, อสุภะ ๑๐, อนุสสติ ๑๐, อัปปมัญญา ๔, อรูป ๔, อาหาเรปฏิกูลสัญญา ๑, จตุธาตุววัฏฐาน ๑)",
      "๑๐ กอง",
      "๒๐ กอง",
      "๖๐ กอง"
    ],
    "correctIndex": 0,
    "explanation": "สมถกรรมฐานมี ๔๐ กอง สำหรับปรับแก้จริต ๖ ของมนุษย์",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก กรรมฐาน ๔๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-163",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 7 ข้อ 163] จริต ๖ ของมนุษย์ ข้อใดเป็นกรรมฐานที่คู่ควรกับ 'ราคจริต' (คนรักสวยรักงาม)?",
    "options": [
      "อสุภกรรมฐาน ๑๐ และ กายคตาสติ (พิจารณาอาการ ๓๒)",
      "กสิณสีแดง",
      "อนุสสติ ๑๐",
      "พรหมวิหาร ๔"
    ],
    "correctIndex": 0,
    "explanation": "ราคจริตควรเจริญอสุภะ ๑๐ และกายคตาสติเพื่อคลายความกำหนัดในรูป",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก จริต ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-164",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 7 ข้อ 164] 'โทสจริต' (คนมักโกรธ หงุดหงิดง่าย) ควรเจริญกรรมฐานกองใดเป็นพิเศษ?",
    "options": [
      "อัปปมัญญา ๔ (เมตตา กรุณา มุทิตา อุเบกขา) และ วรรณกสิณ ๔ (กสิณสี)",
      "อสุภะ ๑๐",
      "มรณานุสสติ",
      "อาหาเรปฏิกูลสัญญา"
    ],
    "correctIndex": 0,
    "explanation": "โทสจริตควรเจริญเมตตาพรหมวิหารเพื่อดับไฟโทสะ และเพ่งวรรณกสิณสีเย็นตา",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก จริต ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-165",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 7 ข้อ 165] 'โมหจริต' และ 'วิตักกจริต' (คนขี้หลง ขี้ฟุ้งซ่าน) ควรฝึกกรรมฐานกองใด?",
    "options": [
      "อานาปานสติ (กำหนดลมหายใจเข้าออก)",
      "อสุภะ ๑๐",
      "กสิณไฟ",
      "เพ่งซากศพ"
    ],
    "correctIndex": 0,
    "explanation": "อานาปานสติเป็นยอดกรรมฐานในการรวบรวมจิต ดึงความคิดฟุ้งซ่านกลับสู่ปัจจุบัน",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก จริต ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-166",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 7 ข้อ 166] สมาธิ ๓ ระดับ ข้อใดคือสมาธิแน่วแน่เข้าสู่อัปปนาฌาน?",
    "options": [
      "อัปปนาสมาธิ (แน่วแน่ดิ่งลึกเป็นองค์ฌาน)",
      "ขณิกสมาธิ (ชั่วขณะ)",
      "อุปจารสมาธิ (เฉียดฌาน)",
      "มิจฉาสมาธิ"
    ],
    "correctIndex": 0,
    "explanation": "อัปปนาสมาธิ คือ สมาธิขั้นสูงแนบแน่นมั่นคง จิตรวมเป็นหนึ่งเดียวตัดอารมณ์ภายนอก",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สมาธิ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-167",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 7 ข้อ 167] อนุสสติ ๑๐ ข้อใดคือ 'อุปสมานุสสติ'?",
    "options": [
      "การตามระลึกถึงคุณของพระนิพพานอันสงบระงับจากกิเลสทั้งปวง",
      "การระลึกถึงพระพุทธคุณ",
      "การระลึกถึงความตาย",
      "การระลึกถึงเทวดา"
    ],
    "correctIndex": 0,
    "explanation": "อุปสมานุสสติ คือ การระลึกถึงคุณธรรมแห่งพระนิพพานอันสงบเย็น",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก อนุสสติ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-168",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 7 ข้อ 168] อาสวะ ๔ (กิเลสดองสันดาน) ได้แก่อะไรบ้าง?",
    "options": [
      "กามาสวะ ภวาสวะ ทิฏฐาสวะ อวิชชาสวะ",
      "โลภะ โทสะ โมหะ มานะ",
      "กาม ภพ วิภพ อาสวะ",
      "ราคะ โทสะ โมหะ ตัณหา"
    ],
    "correctIndex": 0,
    "explanation": "อาสวะ ๔ คือ กิเลสที่หมักหมมดองกมลสันดาน (กาม ภพ ทิฏฐิ อวิชชา)",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก อาสวะ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-169",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 7 ข้อ 169] อนุสัย ๗ (กิเลสละเอียดที่นอนเนื่องในจิต) มีอะไรบ้าง?",
    "options": [
      "กามราคะ ปฏิฆะ ทิฏฐิ วิจิกิจฉา มานะ ภวราคะ อวิชชา",
      "โลภะ โทสะ โมหะ โกธะ อุปนาหะ มักขะ ปลาสะ",
      "ราคะ โทสะ โมหะ ตัณหา มานะ ทิฏฐิ อุปาทาน",
      "สังขาร วิญญาณ นามรูป สฬายตนะ"
    ],
    "correctIndex": 0,
    "explanation": "อนุสัย ๗ คือ กิเลสนอนเนื่องในสันดาน ตัดได้หมดสิ้นเมื่อบรรลุพระอรหันต์",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก อนุสัย ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-170",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 7 ข้อ 170] พระนิพพาน ๒ ประเภท (สอุปาทิเสสนิพพาน และ อนุปาทิเสสนิพพาน) ต่างกันอย่างไร?",
    "options": [
      "สอุปาทิเสสนิพพาน ดับกิเลสยังมีขันธ์ ๕ เหลือ ส่วนอนุปาทิเสสนิพพาน ดับกิเลสและดับขันธ์ ๕ ทั้งหมด",
      "สอุปาทิเสสเป็นของโสดาบัน อนุปาทิเสสเป็นของอรหันต์",
      "สอุปาทิเสสคือสมาธิ อนุปาทิเสสคือปัญญา",
      "ไม่มีความต่างกัน"
    ],
    "correctIndex": 0,
    "explanation": "สอุปาทิเสสนิพพาน คือดับกิเลสขณะยังมีชีวิต อนุปาทิเสสนิพพาน คือดับขันธ์ปรินิพพาน",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก นิพพานธาตุ ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-171",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 7 ข้อ 171] สมถะ และ วิปัสสนา มีผลสัมฤทธิ์สูงสุดต่างกันอย่างไร?",
    "options": [
      "สมถะทำให้เกิดเจโตวิมุตติ (จิตหลุดพ้นจากราคะ) วิปัสสนาทำให้เกิดปัญญาวิมุตติ (จิตหลุดพ้นจากอวิชชา)",
      "สมถะเพื่อดับทุกข์ วิปัสสนาเพื่อความสงบ",
      "สมถะสำหรับฆราวาส วิปัสสนาสำหรับพระ",
      "เหมือนกันทุกประการ"
    ],
    "correctIndex": 0,
    "explanation": "สมถะมุ่งกำจัดราคะเกิดเจโตวิมุตติ วิปัสสนามุ่งขจัดอวิชชาเกิดปัญญาวิมุตติ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สมถะและวิปัสสนา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-172",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 7 ข้อ 172] อุปาทานขันธ์ ๕ เป็นภาระอันหนัก ผู้แบกภาระคือใคร และการวางภาระคือสิ่งใด?",
    "options": [
      "ผู้แบกภาระคือบุคคลผู้มีตัณหา การวางภาระคือการดับตัณหาบรรลุพระนิพพาน",
      "ผู้แบกคือเทวดา การวางคือการนอนหลับ",
      "ผู้แบกคือพระสงฆ์ การวางคือการสึก",
      "ผู้แบกคือกษัตริย์ การวางคือการสละราชสมบัติ"
    ],
    "correctIndex": 0,
    "explanation": "ตัณหาเป็นตัวพาแบกหามภาระขันธ์ ๕ การสละตัณหาเข้าสู่นิพพานเป็นการวางภาระอันหนักลงได้",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก ภารสูตร",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-173",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 7 ข้อ 173] ธรรมารมณ์ ในอายตนะภายใน-ภายนอก คืออะไร?",
    "options": [
      "อารมณ์ที่รู้ได้ทางใจโดยเฉพาะ เช่น ความคิด ความจำ ความรู้สึก และปรมัตถธรรม",
      "รูปที่มองเห็นด้วยตา",
      "เสียงที่ได้ยินทางหู",
      "กลิ่นที่สัมผัสทางจมูก"
    ],
    "correctIndex": 0,
    "explanation": "ธรรมารมณ์ คือ สิ่งที่จิตนึกคิดและสัมผัสได้ทางมโนทวาร (ใจ)",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก อายตนะ ๑๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-174",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 7 ข้อ 174] ธาตุ ๑๘ ในพระอภิธรรม ประกอบด้วยอะไรบ้าง?",
    "options": [
      "อายตนะภายใน ๖ + อายตนะภายนอก ๖ + วิญญาณ ๖ = ๑๘",
      "ดิน น้ำ ลม ไฟ ๔",
      "ขันธ์ ๕ รวมกัน ๓ รอบ",
      "รูป ๒๘"
    ],
    "correctIndex": 0,
    "explanation": "ธาตุ ๑๘ ได้แก่ จักขุธาตุ รูปธาตุ จักขุวิญญาณธาตุ ฯลฯ ครบ ๖ ทวาร รวมเป็น ๑๘ ธาตุ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก ธาตุ ๑๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-175",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 7 ข้อ 175] ปรมัตถธรรม ๔ (ความจริงแท้ขั้นสูงสุดในพระอภิธรรม) มีอะไรบ้าง?",
    "options": [
      "จิต เจตสิก รูป นิพพาน",
      "ทาน ศีล ภาวนา ปัญญา",
      "ทุกข์ สมุทัย นิโรธ มรรค",
      "อนิจจัง ทุกขัง อนัตตา วิมุตติ"
    ],
    "correctIndex": 0,
    "explanation": "ปรมัตถธรรม ๔: จิต (ธรรมชาติรู้อารมณ์) เจตสิก (ธรรมประกอบจิต) รูป (สสารร่างกาย) นิพพาน (ธรรมพ้นทุกข์)",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก ปรมัตถธรรม ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-176",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 8 ข้อ 176] วิสุทธิ ๗ (ความบริสุทธิ์หมดจด ๗ ขั้นตอนแห่งการปฏิบัติธรรม) ขั้นแรกคือข้อใด?",
    "options": [
      "สีลวิสุทธิ (ความหมดจดแห่งศีล)",
      "จิตตวิสุทธิ (ความหมดจดแห่งจิต/สมาธิ)",
      "ทิฏฐิวิสุทธิ",
      "ญาณทัสสนวิสุทธิ"
    ],
    "correctIndex": 0,
    "explanation": "วิสุทธิ ๗ เริ่มต้นที่ ๑. สีลวิสุทธิ ๒. จิตตวิสุทธิ ๓. ทิฏฐิวิสุทธิ ๔. กังขาวิตรณวิสุทธิ ๕. มัคคามัคคญาณทัสสนวิสุทธิ ๖. ปฏิปทาญาณทัสสนวิสุทธิ ๗. ญาณทัสสนวิสุทธิ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิสุทธิ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-177",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 8 ข้อ 177] 'จิตตวิสุทธิ' ในวิสุทธิ ๗ หมายถึงการอบรมสิ่งใดจนบริสุทธิ์ตั้งมั่น?",
    "options": [
      "การทำสมาธิจนจิตตั้งมั่นปราศจากนิวรณ์ ๕ (อุปจารสมาธิและอัปปนาสมาธิ)",
      "การรักษาศีล ๒๒๗",
      "การเห็นรูปนาม",
      "การตัดกิเลส"
    ],
    "correctIndex": 0,
    "explanation": "จิตตวิสุทธิ คือ ความหมดจดแห่งจิต ได้แก่การเจริญสมาธิจนจิตผ่องใส ปราศจากนิวรณ์",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิสุทธิ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-178",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 8 ข้อ 178] 'ทิฏฐิวิสุทธิ' ในวิสุทธิ ๗ คือความเห็นถูกต้องบริสุทธิ์ด้วยการจำแนกสิ่งใด?",
    "options": [
      "การจำแนกรูปและนาม (นามรูปปริจเฉทญาณ) ว่าไม่ใช่สัตว์ บุคคล ตัวตน",
      "การจำแนกคนดีคนชั่ว",
      "การจำแนกบุญบาป",
      "การจำแนกพระธรรม"
    ],
    "correctIndex": 0,
    "explanation": "ทิฏฐิวิสุทธิ คือ การรู้แจ้งเห็นจริงแยกแยะ รูป และ นาม ปราศจากความยึดถือว่ามีตัวตน",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิสุทธิ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-179",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 8 ข้อ 179] 'กังขาวิตรณวิสุทธิ' ในวิสุทธิ ๗ หมายถึงการข้ามพ้นความสงสัยด้วยการรู้เห็นสิ่งใด?",
    "options": [
      "รู้เห็นปัจจัยแห่งรูปนามตามกฎปฏิจจสมุปบาทและกรรม (ปัจจยปริคคหญาณ)",
      "รู้เห็นอนาคต",
      "รู้เห็นชาติก่อน",
      "รู้เห็นสวรรค์"
    ],
    "correctIndex": 0,
    "explanation": "กังขาวิตรณวิสุทธิ คือ ปัญญาข้ามพ้นความลังเลสงสัยในกาลทั้ง ๓ เพราะรู้แจ้งปัจจัยแห่งรูปนาม",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิสุทธิ ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-180",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 8 ข้อ 180] วิปัสสนูปกิเลส ๑๐ (อุปสรรคหลอกล่อให้หลงผิดระหว่างปฏิบัติวิปัสสนา) ข้อใดเกิดขึ้นบ่อยที่สุด?",
    "options": [
      "โอภาส (แสงสว่างจ้า) และ ญาณ (ความรู้ว่องไว)",
      "ความง่วงนอน",
      "ความโกรธ",
      "ความกลัว"
    ],
    "correctIndex": 0,
    "explanation": "โอภาส, ปีติ, ปัสสัทธิ, สุข, ญาณ ฯลฯ ทำให้นักปฏิบัติหลงสำคัญผิดว่าตนบรรลุมรรคผลแล้ว",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิปัสสนูปกิเลส ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-181",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 8 ข้อ 181] วิปัสสนาญาณ ๙ ญาณแรกสุดคือข้อใด?",
    "options": [
      "อุทยัพพยญาณ (ญาณหยั่งรู้ความเกิดและความดับของรูปนาม)",
      "ภังคญาณ",
      "ภยญาณ",
      "มุญจิตุกัมยตาญาณ"
    ],
    "correctIndex": 0,
    "explanation": "วิปัสสนาญาณ ๙ เริ่มต้นด้วย อุทยัพพยญาณ (รู้การเกิดดับ)",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิปัสสนาญาณ ๙",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-182",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 8 ข้อ 182] 'สังขารุเปกขาญาณ' ในวิปัสสนาญาณ ๙ มีลักษณะเด่นอย่างไร?",
    "options": [
      "จิตวางเฉยเป็นกลางต่อสังขารทั้งปวง ไม่ยินดียินร้าย พร้อมเข้าสู่อริยมรรค",
      "จิตกลัวสังขาร",
      "จิตอยากหนีจากสังขาร",
      "จิตหลงในความสุข"
    ],
    "correctIndex": 0,
    "explanation": "สังขารุเปกขาญาณ คือ ปัญญาที่พิจารณาสังขารแล้ววางใจเป็นกลาง เป็นยอดแห่งโลกิยญาณ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก วิปัสสนาญาณ ๙",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-183",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 8 ข้อ 183] สังโยชน์ ๑๐ พระโสดาบันละสังโยชน์ ๓ ข้อใดได้เด็ดขาด?",
    "options": [
      "สักกายทิฏฐิ วิจิกิจฉา สีลัพพตปรามาส",
      "กามราคะ ปฏิฆะ อวิชชา",
      "มานะ อุทธัจจะ อวิชชา",
      "รูปราคะ อรูปราคะ"
    ],
    "correctIndex": 0,
    "explanation": "พระโสดาบันละสังโยชน์ ๓ ข้อแรกได้เด็ดขาด ไม่ตกต่ำสู่อบายภูมิอีก",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สังโยชน์ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-184",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 8 ข้อ 184] พระอนาคามี ตัดสังโยชน์ข้อใดเพิ่มจนหมดสิ้น?",
    "options": [
      "กามราคะ และ ปฏิฆะ (ความขัดเคืองใจ)",
      "รูปราคะ และ อรูปราคะ",
      "มานะ และ อวิชชา",
      "สักกายทิฏฐิ"
    ],
    "correctIndex": 0,
    "explanation": "พระอนาคามีตัดกามราคะและปฏิฆะได้เด็ดขาด ละโอรัมภาคิยสังโยชน์ ๕ ได้ครบ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สังโยชน์ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-185",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 8 ข้อ 185] พระอรหันต์ ตัดอุทธัมภาคิยสังโยชน์ (สังโยชน์เบื้องสูง ๕ ประการ) ได้หมดสิ้น ข้อใดคือ ๕ ประการนั้น?",
    "options": [
      "รูปราคะ อรูปราคะ มานะ อุทธัจจะ อวิชชา",
      "สักกายทิฏฐิ วิจิกิจฉา สีลัพพตปรามาส กามราคะ ปฏิฆะ",
      "โลภะ โทสะ โมหะ มานะ ทิฏฐิ",
      "ตัณหา มานะ ทิฏฐิ"
    ],
    "correctIndex": 0,
    "explanation": "อุทธัมภาคิยสังโยชน์ ๕ ได้แก่ รูปราคะ อรูปราคะ มานะ อุทธัจจะ อวิชชา พระอรหันต์เท่านั้นที่ละได้หมด",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สังโยชน์ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-186",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 8 ข้อ 186] โพธิปักขิยธรรม ๓๗ ประการ ประกอบด้วยหมวดธรรมกี่หมวด?",
    "options": [
      "๗ หมวด (สติปัฏฐาน ๔, สัมมัปปธาน ๔, อิทธิบาท ๔, อินทรีย์ ๕, พละ ๕, โพชฌงค์ ๗, มรรค ๘)",
      "๕ หมวด",
      "๙ หมวด",
      "๑๐ หมวด"
    ],
    "correctIndex": 0,
    "explanation": "โพธิปักขิยธรรม ๓๗ มี ๗ หมวดธรรมเกื้อกูลแก่การตรัสรู้",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก โพธิปักขิยธรรม ๓๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-187",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 8 ข้อ 187] อารมณ์ของสมถกรรมฐาน มีกี่กองตามคัมภีร์วิสุทธิมรรค?",
    "options": [
      "๔๐ กอง (กสิณ ๑๐, อสุภะ ๑๐, อนุสสติ ๑๐, อัปปมัญญา ๔, อรูป ๔, อาหาเรปฏิกูลสัญญา ๑, จตุธาตุววัฏฐาน ๑)",
      "๑๐ กอง",
      "๒๐ กอง",
      "๖๐ กอง"
    ],
    "correctIndex": 0,
    "explanation": "สมถกรรมฐานมี ๔๐ กอง สำหรับปรับแก้จริต ๖ ของมนุษย์",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก กรรมฐาน ๔๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-188",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 8 ข้อ 188] จริต ๖ ของมนุษย์ ข้อใดเป็นกรรมฐานที่คู่ควรกับ 'ราคจริต' (คนรักสวยรักงาม)?",
    "options": [
      "อสุภกรรมฐาน ๑๐ และ กายคตาสติ (พิจารณาอาการ ๓๒)",
      "กสิณสีแดง",
      "อนุสสติ ๑๐",
      "พรหมวิหาร ๔"
    ],
    "correctIndex": 0,
    "explanation": "ราคจริตควรเจริญอสุภะ ๑๐ และกายคตาสติเพื่อคลายความกำหนัดในรูป",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก จริต ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-189",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 8 ข้อ 189] 'โทสจริต' (คนมักโกรธ หงุดหงิดง่าย) ควรเจริญกรรมฐานกองใดเป็นพิเศษ?",
    "options": [
      "อัปปมัญญา ๔ (เมตตา กรุณา มุทิตา อุเบกขา) และ วรรณกสิณ ๔ (กสิณสี)",
      "อสุภะ ๑๐",
      "มรณานุสสติ",
      "อาหาเรปฏิกูลสัญญา"
    ],
    "correctIndex": 0,
    "explanation": "โทสจริตควรเจริญเมตตาพรหมวิหารเพื่อดับไฟโทสะ และเพ่งวรรณกสิณสีเย็นตา",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก จริต ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-190",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 8 ข้อ 190] 'โมหจริต' และ 'วิตักกจริต' (คนขี้หลง ขี้ฟุ้งซ่าน) ควรฝึกกรรมฐานกองใด?",
    "options": [
      "อานาปานสติ (กำหนดลมหายใจเข้าออก)",
      "อสุภะ ๑๐",
      "กสิณไฟ",
      "เพ่งซากศพ"
    ],
    "correctIndex": 0,
    "explanation": "อานาปานสติเป็นยอดกรรมฐานในการรวบรวมจิต ดึงความคิดฟุ้งซ่านกลับสู่ปัจจุบัน",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก จริต ๖",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-191",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 8 ข้อ 191] สมาธิ ๓ ระดับ ข้อใดคือสมาธิแน่วแน่เข้าสู่อัปปนาฌาน?",
    "options": [
      "อัปปนาสมาธิ (แน่วแน่ดิ่งลึกเป็นองค์ฌาน)",
      "ขณิกสมาธิ (ชั่วขณะ)",
      "อุปจารสมาธิ (เฉียดฌาน)",
      "มิจฉาสมาธิ"
    ],
    "correctIndex": 0,
    "explanation": "อัปปนาสมาธิ คือ สมาธิขั้นสูงแนบแน่นมั่นคง จิตรวมเป็นหนึ่งเดียวตัดอารมณ์ภายนอก",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สมาธิ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-192",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 8 ข้อ 192] อนุสสติ ๑๐ ข้อใดคือ 'อุปสมานุสสติ'?",
    "options": [
      "การตามระลึกถึงคุณของพระนิพพานอันสงบระงับจากกิเลสทั้งปวง",
      "การระลึกถึงพระพุทธคุณ",
      "การระลึกถึงความตาย",
      "การระลึกถึงเทวดา"
    ],
    "correctIndex": 0,
    "explanation": "อุปสมานุสสติ คือ การระลึกถึงคุณธรรมแห่งพระนิพพานอันสงบเย็น",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก อนุสสติ ๑๐",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-193",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 8 ข้อ 193] อาสวะ ๔ (กิเลสดองสันดาน) ได้แก่อะไรบ้าง?",
    "options": [
      "กามาสวะ ภวาสวะ ทิฏฐาสวะ อวิชชาสวะ",
      "โลภะ โทสะ โมหะ มานะ",
      "กาม ภพ วิภพ อาสวะ",
      "ราคะ โทสะ โมหะ ตัณหา"
    ],
    "correctIndex": 0,
    "explanation": "อาสวะ ๔ คือ กิเลสที่หมักหมมดองกมลสันดาน (กาม ภพ ทิฏฐิ อวิชชา)",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก อาสวะ ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-194",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 8 ข้อ 194] อนุสัย ๗ (กิเลสละเอียดที่นอนเนื่องในจิต) มีอะไรบ้าง?",
    "options": [
      "กามราคะ ปฏิฆะ ทิฏฐิ วิจิกิจฉา มานะ ภวราคะ อวิชชา",
      "โลภะ โทสะ โมหะ โกธะ อุปนาหะ มักขะ ปลาสะ",
      "ราคะ โทสะ โมหะ ตัณหา มานะ ทิฏฐิ อุปาทาน",
      "สังขาร วิญญาณ นามรูป สฬายตนะ"
    ],
    "correctIndex": 0,
    "explanation": "อนุสัย ๗ คือ กิเลสนอนเนื่องในสันดาน ตัดได้หมดสิ้นเมื่อบรรลุพระอรหันต์",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก อนุสัย ๗",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-195",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 8 ข้อ 195] พระนิพพาน ๒ ประเภท (สอุปาทิเสสนิพพาน และ อนุปาทิเสสนิพพาน) ต่างกันอย่างไร?",
    "options": [
      "สอุปาทิเสสนิพพาน ดับกิเลสยังมีขันธ์ ๕ เหลือ ส่วนอนุปาทิเสสนิพพาน ดับกิเลสและดับขันธ์ ๕ ทั้งหมด",
      "สอุปาทิเสสเป็นของโสดาบัน อนุปาทิเสสเป็นของอรหันต์",
      "สอุปาทิเสสคือสมาธิ อนุปาทิเสสคือปัญญา",
      "ไม่มีความต่างกัน"
    ],
    "correctIndex": 0,
    "explanation": "สอุปาทิเสสนิพพาน คือดับกิเลสขณะยังมีชีวิต อนุปาทิเสสนิพพาน คือดับขันธ์ปรินิพพาน",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก นิพพานธาตุ ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-196",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 8 ข้อ 196] สมถะ และ วิปัสสนา มีผลสัมฤทธิ์สูงสุดต่างกันอย่างไร?",
    "options": [
      "สมถะทำให้เกิดเจโตวิมุตติ (จิตหลุดพ้นจากราคะ) วิปัสสนาทำให้เกิดปัญญาวิมุตติ (จิตหลุดพ้นจากอวิชชา)",
      "สมถะเพื่อดับทุกข์ วิปัสสนาเพื่อความสงบ",
      "สมถะสำหรับฆราวาส วิปัสสนาสำหรับพระ",
      "เหมือนกันทุกประการ"
    ],
    "correctIndex": 0,
    "explanation": "สมถะมุ่งกำจัดราคะเกิดเจโตวิมุตติ วิปัสสนามุ่งขจัดอวิชชาเกิดปัญญาวิมุตติ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก สมถะและวิปัสสนา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-197",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 8 ข้อ 197] อุปาทานขันธ์ ๕ เป็นภาระอันหนัก ผู้แบกภาระคือใคร และการวางภาระคือสิ่งใด?",
    "options": [
      "ผู้แบกภาระคือบุคคลผู้มีตัณหา การวางภาระคือการดับตัณหาบรรลุพระนิพพาน",
      "ผู้แบกคือเทวดา การวางคือการนอนหลับ",
      "ผู้แบกคือพระสงฆ์ การวางคือการสึก",
      "ผู้แบกคือกษัตริย์ การวางคือการสละราชสมบัติ"
    ],
    "correctIndex": 0,
    "explanation": "ตัณหาเป็นตัวพาแบกหามภาระขันธ์ ๕ การสละตัณหาเข้าสู่นิพพานเป็นการวางภาระอันหนักลงได้",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก ภารสูตร",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-198",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 8 ข้อ 198] ธรรมารมณ์ ในอายตนะภายใน-ภายนอก คืออะไร?",
    "options": [
      "อารมณ์ที่รู้ได้ทางใจโดยเฉพาะ เช่น ความคิด ความจำ ความรู้สึก และปรมัตถธรรม",
      "รูปที่มองเห็นด้วยตา",
      "เสียงที่ได้ยินทางหู",
      "กลิ่นที่สัมผัสทางจมูก"
    ],
    "correctIndex": 0,
    "explanation": "ธรรมารมณ์ คือ สิ่งที่จิตนึกคิดและสัมผัสได้ทางมโนทวาร (ใจ)",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก อายตนะ ๑๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-199",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 8 ข้อ 199] ธาตุ ๑๘ ในพระอภิธรรม ประกอบด้วยอะไรบ้าง?",
    "options": [
      "อายตนะภายใน ๖ + อายตนะภายนอก ๖ + วิญญาณ ๖ = ๑๘",
      "ดิน น้ำ ลม ไฟ ๔",
      "ขันธ์ ๕ รวมกัน ๓ รอบ",
      "รูป ๒๘"
    ],
    "correctIndex": 0,
    "explanation": "ธาตุ ๑๘ ได้แก่ จักขุธาตุ รูปธาตุ จักขุวิญญาณธาตุ ฯลฯ ครบ ๖ ทวาร รวมเป็น ๑๘ ธาตุ",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก ธาตุ ๑๘",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-d-200",
    "grade": "เอก",
    "subject": "ธรรมวิภาค",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 8 ข้อ 200] ปรมัตถธรรม ๔ (ความจริงแท้ขั้นสูงสุดในพระอภิธรรม) มีอะไรบ้าง?",
    "options": [
      "จิต เจตสิก รูป นิพพาน",
      "ทาน ศีล ภาวนา ปัญญา",
      "ทุกข์ สมุทัย นิโรธ มรรค",
      "อนิจจัง ทุกขัง อนัตตา วิมุตติ"
    ],
    "correctIndex": 0,
    "explanation": "ปรมัตถธรรม ๔: จิต (ธรรมชาติรู้อารมณ์) เจตสิก (ธรรมประกอบจิต) รูป (สสารร่างกาย) นิพพาน (ธรรมพ้นทุกข์)",
    "reference": "ธรรมวิจารณ์ นักธรรมเอก ปรมัตถธรรม ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-001",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "พระมหาปชาบดีโคตมีเถรี ได้รับยกย่องเป็นเอตทัคคะฝ่ายภิกษุณีในด้านใด?",
    "options": [
      "ผู้เป็นรัตตัญญู (ผู้รู้ราตรีนาน บวชก่อนใครในฝ่ายภิกษุณี)",
      "ผู้มีปัญญามาก",
      "ผู้มีฤทธิ์มาก",
      "ผู้ทรงวินัย"
    ],
    "correctIndex": 0,
    "explanation": "พระนางมหาปชาบดีโคตมีเป็นปฐมภิกษุณี ได้รับยกย่องเป็นเอตทัคคะฝ่ายรัตตัญญู",
    "reference": "พุทธานุพุทธประวัติ พระภิกษุณีเอตทัคคะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-002",
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
    "explanation": "พระเขมาเถรี อดีตพระมเหสีพระเจ้าพิมพิสาร ได้รับสถาปนาเป็นอัครสาวิกาเบื้องขวา เลิศทางปัญญา",
    "reference": "พุทธานุพุทธประวัติ พระเขมาเถรี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-003",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "พระอุบลวรรณาเถรี ได้รับยกย่องเป็นพระอัครสาวิกาเบื้องซ้าย เลิศในด้านใด?",
    "options": [
      "ผู้มีฤทธิ์มาก (อิทธิมันตานัง)",
      "ผู้มีปัญญามาก",
      "ผู้มีลาภมาก",
      "ผู้มีเสียงไพเราะ"
    ],
    "correctIndex": 0,
    "explanation": "พระอุบลวรรณาเถรี เป็นพระอัครสาวิกาเบื้องซ้าย เลิศทางอิทธิฤทธิ์",
    "reference": "พุทธานุพุทธประวัติ พระอุบลวรรณาเถรี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-004",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "พระปฏาจาราเถรี ได้รับยกย่องเป็นเอตทัคคะฝ่ายภิกษุณีในด้านใด?",
    "options": [
      "ผู้ทรงจำและเชี่ยวชาญพระวินัย (วินัยธรานัง)",
      "ผู้มีลาภมาก",
      "ผู้บวชด้วยศรัทธา",
      "ผู้มีขันติยิ่ง"
    ],
    "correctIndex": 0,
    "explanation": "พระปฏาจาราเถรีเลิศทางทรงพระวินัยฝ่ายภิกษุณี",
    "reference": "พุทธานุพุทธประวัติ พระปฏาจาราเถรี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-005",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๓",
    "question": "พระกีสาโคตมีเถรี ได้รับยกย่องในด้านใด?",
    "options": [
      "ผู้ทรงจีวรเศร้าหมอง (ถือผ้าบังสุกุลจีวรบ่ำค่า)",
      "ผู้มีปัญญาเลิศ",
      "ผู้มีเสียงไพเราะ",
      "ผู้มีเมตตา"
    ],
    "correctIndex": 0,
    "explanation": "พระกีสาโคตมีเลิศทางทรงจีวรเศร้าหมอง (บังสุกุลจีวรธรานัง)",
    "reference": "พุทธานุพุทธประวัติ พระกีสาโคตมีเถรี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-006",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๔",
    "question": "อนาถบิณฑิกเศรษฐี ได้รับยกย่องเป็นเอตทัคคะฝ่ายอุบาสกในด้านใด?",
    "options": [
      "ผู้เป็นยอดแห่งผู้ถวายทาน (ทายกานัง)",
      "ผู้มีปัญญาเลิศ",
      "ผู้มีศรัทธามั่นคง",
      "ผู้ชำนาญการค้า"
    ],
    "correctIndex": 0,
    "explanation": "อนาถบิณฑิกเศรษฐีสร้างวัดพระเชตวัน ได้รับยกย่องเป็นยอดอุบาสกผู้ถวายทาน",
    "reference": "พุทธานุพุทธประวัติ อนาถบิณฑิกเศรษฐี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-007",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๕",
    "question": "นางวิสาขามหาอุบาสิกา ได้รับยกย่องเป็นเอตทัคคะฝ่ายอุบาสิกาในด้านใด?",
    "options": [
      "ผู้เป็นยอดแห่งผู้ถวายทานฝ่ายหญิง (ทายิกานัง)",
      "ผู้มีปัญญาเลิศ",
      "ผู้มีเครื่องประดับงาม",
      "ผู้รักษาศีล"
    ],
    "correctIndex": 0,
    "explanation": "นางวิสาขาสร้างวัดบุพพาราม ได้รับยกย่องเป็นยอดทายิกาผู้ถวายทาน",
    "reference": "พุทธานุพุทธประวัติ นางวิสาขา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-008",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "หมอชีวกโกมารภัจจ์ ได้รับยกย่องเป็นเอตทัคคะฝ่ายอุบาสกในด้านใด?",
    "options": [
      "ผู้เลื่อมใสในพระรัตนตรัยอย่างยิ่ง (ปสาทกานัง)",
      "ผู้มียาวิเศษ",
      "ผู้มีปัญญา",
      "ผู้มีความเพียร"
    ],
    "correctIndex": 0,
    "explanation": "หมอชีวกโกมารภัจจ์เป็นแพทย์ประจำพระองค์และเลิศทางมีความเลื่อมใสยิ่ง",
    "reference": "พุทธานุพุทธประวัติ หมอชีวกโกมารภัจจ์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-009",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "การทำสังคายนาครั้งที่ ๑ ภายหลังปรินิพพาน ๓ เดือน มีพระราชาพระองค์ใดทรงอุปถัมภ์?",
    "options": [
      "พระเจ้าอชาตศัตรู แห่งแคว้นมคธ",
      "พระเจ้าพิมพิสาร",
      "พระเจ้าอโศกมหาราช",
      "พระเจ้ากนิษกะ"
    ],
    "correctIndex": 0,
    "explanation": "พระเจ้าอชาตศัตรูทรงอุปถัมภ์การทำปฐมสังคายนา ณ ถ้ำสัตตบรรณคูหา เมืองราชคฤห์",
    "reference": "ศาสนประวัติ สังคายนาครั้งที่ ๑",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-010",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "การทำสังคายนาครั้งที่ ๒ จัดขึ้นหลังพุทธปรินิพพานล่วงแล้วกี่ปี?",
    "options": [
      "๑๐๐ ปี (ณ วาลิการาม เมืองเวสาลี)",
      "๕๐ ปี",
      "๒๑๘ ปี",
      "๕๐๐ ปี"
    ],
    "correctIndex": 0,
    "explanation": "สังคายนาครั้งที่ ๒ จัดขึ้นหลังปรินิพพาน ๑๐๐ ปี เพื่อปราบวัตถุ ๑๐ ประการนอกรีตของภิกษุวัชชีบุตร",
    "reference": "ศาสนประวัติ สังคายนาครั้งที่ ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-011",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "การทำสังคายนาครั้งที่ ๓ ในรัชสมัยพระเจ้าอโศกมหาราช มีพระเถระรูปใดเป็นประธานสงฆ์?",
    "options": [
      "พระโมคคัลลีบุตรติสสเถระ",
      "พระมหากัสสปะ",
      "พระเรวตเถระ",
      "พระมหินทเถระ"
    ],
    "correctIndex": 0,
    "explanation": "พระโมคคัลลีบุตรติสสเถระเป็นประธานสังคายนาครั้งที่ ๓ ณ เมืองปาฏลีบุตร",
    "reference": "ศาสนประวัติ สังคายนาครั้งที่ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-012",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "พระเจ้าอโศกส่งสมณทูต ๙ สาย สายที่มาประดิษฐาน ณ ดินแดนสุวรรณภูมิ (ไทย/พม่า) คือพระเถระรูปใด?",
    "options": [
      "พระโสณเถระ และ พระอุตตรเถระ",
      "พระมหินทเถระ",
      "พระมัชฌันติกเถระ",
      "พระมหารักษิตเถระ"
    ],
    "correctIndex": 0,
    "explanation": "พระโสณะและพระอุตตระนำพระพุทธศาสนามาประดิษฐาน ณ สุวรรณภูมิ",
    "reference": "ศาสนประวัติ พระธรรมทูต ๙ สาย",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-013",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๓",
    "question": "พระมหินทเถระ (พระราชโอรสพระเจ้าอโศก) นำพระพุทธศาสนาไปเผยแผ่ ณ ดินแดนใด?",
    "options": [
      "ลังกาทวีป (ประเทศศรีลังกา)",
      "สุวรรณภูมิ",
      "แคว้นคันธาระ",
      "ประเทศจีน"
    ],
    "correctIndex": 0,
    "explanation": "พระมหินทเถระนำพระศาสนาและพระไตรปิฎกไปประดิษฐานอย่างมั่นคงในศรีลังกา",
    "reference": "ศาสนประวัติ เผยแผ่สู่ลังกา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-014",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๔",
    "question": "การจารึกพระไตรปิฎกลงบนใบลานเป็นลายลักษณ์อักษรครั้งแรกของโลก เกิดขึ้นที่ใด?",
    "options": [
      "อาโลกเลณสถาน ในประเทศศรีลังกา (พ.ศ. ๔๓๓)",
      "อินเดีย เมืองราชคฤห์",
      "สุโขทัย",
      "พม่า"
    ],
    "correctIndex": 0,
    "explanation": "จารึกพระไตรปิฎกลงใบลานครั้งแรก ณ ถ้ำอาโลกะ ศรีลังกา",
    "reference": "ศาสนประวัติ การจารึกพระไตรปิฎก",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-015",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๕",
    "question": "สมัยสุโขทัย พ่อขุนรามคำแหงมหาราชทรงรับพระพุทธศาสนานิกายใดเข้ามาประดิษฐาน?",
    "options": [
      "เถรวาทแบบลังกาวงศ์ (ทรงอาราธนาพระสงฆ์จากนครศรีธรรมราช)",
      "มหายาน",
      "ตันตระ",
      "วัชรยาน"
    ],
    "correctIndex": 0,
    "explanation": "ทรงอาราธนาพระมหาเถรสังฆราชจากนครศรีธรรมราชผู้สืบสายลังกาวงศ์มาประดิษฐานที่สุโขทัย",
    "reference": "ประวัติศาสตร์พระพุทธศาสนาในไทย",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-016",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "สมณทูตไทยนำโดยพระอุบาลีเถระในสมัยอยุธยา ไปฟื้นฟูพระพุทธศาสนาในลังกา ก่อกำเนิดนิกายใด?",
    "options": [
      "สยามวงศ์ (หรืออุบาลีวงศ์)",
      "รามัญนิกาย",
      "อมรปุรนิกาย",
      "ลังกาวงศ์"
    ],
    "correctIndex": 0,
    "explanation": "พระอุบาลีเถระไปบวชให้ชาวลังกา ก่อตั้ง 'นิกายสยามวงศ์' รุ่งเรืองถึงปัจจุบัน",
    "reference": "ประวัติศาสตร์ศาสนา คณะสงฆ์สยามวงศ์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-017",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "การทำสังคายนาพระไตรปิฎกครั้งแรกในสมัยรัตนโกสินทร์ เกิดขึ้นในรัชกาลใด?",
    "options": [
      "พระบาทสมเด็จพระพุทธยอดฟ้าจุฬาโลกมหาราช (รัชกาลที่ ๑) ณ วัดมหาธาตุฯ",
      "รัชกาลที่ ๔",
      "รัชกาลที่ ๕",
      "รัชกาลที่ ๙"
    ],
    "correctIndex": 0,
    "explanation": "รัชกาลที่ ๑ โปรดให้ชำระพระไตรปิฎกฉบับทองใหญ่ ณ วัดมหาธาตุฯ ใน พ.ศ. ๒๓๓๑",
    "reference": "ประวัติศาสตร์สังคายนา รัชกาลที่ ๑",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-018",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "พระไตรปิฎกฉบับพิมพ์เป็นเล่มหนังสืออักษรไทยชุดแรกของโลก จัดพิมพ์ขึ้นในรัชสมัยใด?",
    "options": [
      "พระบาทสมเด็จพระจุลจอมเกล้าเจ้าอยู่หัว (รัชกาลที่ ๕)",
      "รัชกาลที่ ๓",
      "รัชกาลที่ ๔",
      "รัชกาลที่ ๖"
    ],
    "correctIndex": 0,
    "explanation": "รัชกาลที่ ๕ ทรงโปรดให้จัดพิมพ์พระไตรปิฎกอักษรไทยฉบับ ร.ศ. ๑๑๒ (พ.ศ. ๒๔๓๖) เป็นครั้งแรกของโลก",
    "reference": "ประวัติการพิมพ์พระไตรปิฎก รัชกาลที่ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-019",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "สมเด็จพระมหาสมณเจ้า กรมพระยาวชิรญาณวโรรส ทรงมีคุณูปการยิ่งใหญ่ต่อคณะสงฆ์ในด้านใด?",
    "options": [
      "ทรงสถาปนาหลักสูตรการศึกษานักธรรม และทรงนิพนธ์ตำราเรียนนักธรรม ตรี-โท-เอก",
      "ทรงสร้างวัดพระแก้ว",
      "ทรงนำพระไตรปิฎกมาจากอินเดีย",
      "ทรงเป็นแม่ทัพ"
    ],
    "correctIndex": 0,
    "explanation": "ทรงริเริ่มการศึกษานักธรรมและแต่งตำราเรียนมาตรฐานจนถึงปัจจุบัน",
    "reference": "ประวัติการศึกษาสงฆ์ไทย",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-020",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "พระเจ้ามิลินท์ (กษัตริย์กรีก) ทรงสนทนาธรรมตอบปัญหาจนสิ้นสงสัยกับพระเถระรูปใด?",
    "options": [
      "พระนาคเสนเถระ (คัมภีร์มิลินทปัญหา)",
      "พระมหากัสสปะ",
      "พระสารีบุตร",
      "พระพุทธโฆษาจารย์"
    ],
    "correctIndex": 0,
    "explanation": "พระนาคเสนเถระวิสัชนาปัญหาธรรมอันลึกซึ้งแก่พระเจ้ามิลินท์ รวบรวมเป็นคัมภีร์มิลินทปัญหา",
    "reference": "ศาสนประวัติ คัมภีร์มิลินทปัญหา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-021",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๓",
    "question": "พระพุทธโฆษาจารย์ พระมหาอรรถกถาจารย์ชื่อก้องโลก ได้รจนาคัมภีร์เอกชิ้นสำคัญชื่ออะไร?",
    "options": [
      "คัมภีร์วิสุทธิมรรค",
      "คัมภีร์มิลินทปัญหา",
      "คัมภีร์สมันตปาสาทิกา",
      "คัมภีร์ชินกาลมาลีปกรณ์"
    ],
    "correctIndex": 0,
    "explanation": "พระพุทธโฆษาจารย์รจนาคัมภีร์ 'วิสุทธิมรรค' อธิบายศีล สมาธิ ปัญญา และวิสุทธิ ๗ อย่างพิสดาร ณ ลังกา",
    "reference": "ประวัติพระอรรถกถาจารย์ คัมภีร์วิสุทธิมรรค",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-022",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๔",
    "question": "พระนางยโสธรา (พิมพา) เถรี ได้รับยกย่องเป็นเอตทัคคะฝ่ายภิกษุณีในด้านใด?",
    "options": [
      "ผู้ได้อภิญญาใหญ่ (มหามภิญญาปัตตานัง)",
      "ผู้มีลาภมาก",
      "ผู้มีปัญญาเฉียบคม",
      "ผู้มีความเพียร"
    ],
    "correctIndex": 0,
    "explanation": "พระยโสธราเถรีเลิศทางบรรลุมหาอภิญญา ระลึกชาติได้นับอสงไขย",
    "reference": "พุทธานุพุทธประวัติ พระยโสธราเถรี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-023",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๕",
    "question": "พระนันทาเถรี (พระสุนทรีนันทาเทวี) ได้รับยกย่องในด้านใด?",
    "options": [
      "ผู้ยินดีในการเพ่งฌาน (ฌายีนัง)",
      "ผู้มีรูปงาม",
      "ผู้มีเสียงเพราะ",
      "ผู้มีบริวารมาก"
    ],
    "correctIndex": 0,
    "explanation": "พระนันทาเถรีได้รับยกย่องเป็นเอตทัคคะฝ่ายภิกษุณีผู้ยินดีในการเพ่งฌานสมาบัติ",
    "reference": "พุทธานุพุทธประวัติ พระนันทาเถรี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-024",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "จิตตคหบดี ได้รับยกย่องเป็นเอตทัคคะฝ่ายอุบาสกในด้านใด?",
    "options": [
      "ผู้เป็นธรรมกถึก (แสดงธรรมได้เชี่ยวชาญ) ในฝ่ายอุบาสก",
      "ผู้มีทรัพย์มากที่สุด",
      "ผู้สร้างวัดมากที่สุด",
      "ผู้มีอายุยืนยาว"
    ],
    "correctIndex": 0,
    "explanation": "จิตตคหบดีบรรลุพระอนาคามี และได้รับยกย่องเป็นยอดอุบาสกผู้เป็นธรรมกถึก",
    "reference": "พุทธานุพุทธประวัติ จิตตคหบดี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-025",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "นางขุชชุตตรา ได้รับยกย่องเป็นเอตทัคคะฝ่ายอุบาสิกาในด้านใด?",
    "options": [
      "ผู้เป็นพหูสูต (ทรงจำพระธรรมเทศนาได้มาก) ในฝ่ายอุบาสิกา",
      "ผู้มีปัญญาเลิศ",
      "ผู้มีความซื่อสัตย์",
      "ผู้ถวายทานยอดเยี่ยม"
    ],
    "correctIndex": 0,
    "explanation": "นางขุชชุตตราฟังธรรมแล้วนำมาแสดงต่อให้พระนางสามาวดีและบริวาร ๕๐๐ ฟังจนบรรลุธรรม",
    "reference": "พุทธานุพุทธประวัติ นางขุชชุตตรา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-026",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 2 ข้อ 26] พระมหาปชาบดีโคตมีเถรี ได้รับยกย่องเป็นเอตทัคคะฝ่ายภิกษุณีในด้านใด?",
    "options": [
      "ผู้เป็นรัตตัญญู (ผู้รู้ราตรีนาน บวชก่อนใครในฝ่ายภิกษุณี)",
      "ผู้มีปัญญามาก",
      "ผู้มีฤทธิ์มาก",
      "ผู้ทรงวินัย"
    ],
    "correctIndex": 0,
    "explanation": "พระนางมหาปชาบดีโคตมีเป็นปฐมภิกษุณี ได้รับยกย่องเป็นเอตทัคคะฝ่ายรัตตัญญู",
    "reference": "พุทธานุพุทธประวัติ พระภิกษุณีเอตทัคคะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-027",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 2 ข้อ 27] พระเขมาเถรี ได้รับยกย่องเป็นพระอัครสาวิกาเบื้องขวา เลิศในด้านใด?",
    "options": [
      "ผู้มีปัญญามาก (มหัปปัญญานัง)",
      "ผู้มีฤทธิ์มาก",
      "ผู้มีลาภมาก",
      "ผู้ทรงจำพระสูตร"
    ],
    "correctIndex": 0,
    "explanation": "พระเขมาเถรี อดีตพระมเหสีพระเจ้าพิมพิสาร ได้รับสถาปนาเป็นอัครสาวิกาเบื้องขวา เลิศทางปัญญา",
    "reference": "พุทธานุพุทธประวัติ พระเขมาเถรี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-028",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 2 ข้อ 28] พระอุบลวรรณาเถรี ได้รับยกย่องเป็นพระอัครสาวิกาเบื้องซ้าย เลิศในด้านใด?",
    "options": [
      "ผู้มีฤทธิ์มาก (อิทธิมันตานัง)",
      "ผู้มีปัญญามาก",
      "ผู้มีลาภมาก",
      "ผู้มีเสียงไพเราะ"
    ],
    "correctIndex": 0,
    "explanation": "พระอุบลวรรณาเถรี เป็นพระอัครสาวิกาเบื้องซ้าย เลิศทางอิทธิฤทธิ์",
    "reference": "พุทธานุพุทธประวัติ พระอุบลวรรณาเถรี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-029",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 2 ข้อ 29] พระปฏาจาราเถรี ได้รับยกย่องเป็นเอตทัคคะฝ่ายภิกษุณีในด้านใด?",
    "options": [
      "ผู้ทรงจำและเชี่ยวชาญพระวินัย (วินัยธรานัง)",
      "ผู้มีลาภมาก",
      "ผู้บวชด้วยศรัทธา",
      "ผู้มีขันติยิ่ง"
    ],
    "correctIndex": 0,
    "explanation": "พระปฏาจาราเถรีเลิศทางทรงพระวินัยฝ่ายภิกษุณี",
    "reference": "พุทธานุพุทธประวัติ พระปฏาจาราเถรี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-030",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 2 ข้อ 30] พระกีสาโคตมีเถรี ได้รับยกย่องในด้านใด?",
    "options": [
      "ผู้ทรงจีวรเศร้าหมอง (ถือผ้าบังสุกุลจีวรบ่ำค่า)",
      "ผู้มีปัญญาเลิศ",
      "ผู้มีเสียงไพเราะ",
      "ผู้มีเมตตา"
    ],
    "correctIndex": 0,
    "explanation": "พระกีสาโคตมีเลิศทางทรงจีวรเศร้าหมอง (บังสุกุลจีวรธรานัง)",
    "reference": "พุทธานุพุทธประวัติ พระกีสาโคตมีเถรี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-031",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 2 ข้อ 31] อนาถบิณฑิกเศรษฐี ได้รับยกย่องเป็นเอตทัคคะฝ่ายอุบาสกในด้านใด?",
    "options": [
      "ผู้เป็นยอดแห่งผู้ถวายทาน (ทายกานัง)",
      "ผู้มีปัญญาเลิศ",
      "ผู้มีศรัทธามั่นคง",
      "ผู้ชำนาญการค้า"
    ],
    "correctIndex": 0,
    "explanation": "อนาถบิณฑิกเศรษฐีสร้างวัดพระเชตวัน ได้รับยกย่องเป็นยอดอุบาสกผู้ถวายทาน",
    "reference": "พุทธานุพุทธประวัติ อนาถบิณฑิกเศรษฐี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-032",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 2 ข้อ 32] นางวิสาขามหาอุบาสิกา ได้รับยกย่องเป็นเอตทัคคะฝ่ายอุบาสิกาในด้านใด?",
    "options": [
      "ผู้เป็นยอดแห่งผู้ถวายทานฝ่ายหญิง (ทายิกานัง)",
      "ผู้มีปัญญาเลิศ",
      "ผู้มีเครื่องประดับงาม",
      "ผู้รักษาศีล"
    ],
    "correctIndex": 0,
    "explanation": "นางวิสาขาสร้างวัดบุพพาราม ได้รับยกย่องเป็นยอดทายิกาผู้ถวายทาน",
    "reference": "พุทธานุพุทธประวัติ นางวิสาขา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-033",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 2 ข้อ 33] หมอชีวกโกมารภัจจ์ ได้รับยกย่องเป็นเอตทัคคะฝ่ายอุบาสกในด้านใด?",
    "options": [
      "ผู้เลื่อมใสในพระรัตนตรัยอย่างยิ่ง (ปสาทกานัง)",
      "ผู้มียาวิเศษ",
      "ผู้มีปัญญา",
      "ผู้มีความเพียร"
    ],
    "correctIndex": 0,
    "explanation": "หมอชีวกโกมารภัจจ์เป็นแพทย์ประจำพระองค์และเลิศทางมีความเลื่อมใสยิ่ง",
    "reference": "พุทธานุพุทธประวัติ หมอชีวกโกมารภัจจ์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-034",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 2 ข้อ 34] การทำสังคายนาครั้งที่ ๑ ภายหลังปรินิพพาน ๓ เดือน มีพระราชาพระองค์ใดทรงอุปถัมภ์?",
    "options": [
      "พระเจ้าอชาตศัตรู แห่งแคว้นมคธ",
      "พระเจ้าพิมพิสาร",
      "พระเจ้าอโศกมหาราช",
      "พระเจ้ากนิษกะ"
    ],
    "correctIndex": 0,
    "explanation": "พระเจ้าอชาตศัตรูทรงอุปถัมภ์การทำปฐมสังคายนา ณ ถ้ำสัตตบรรณคูหา เมืองราชคฤห์",
    "reference": "ศาสนประวัติ สังคายนาครั้งที่ ๑",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-035",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 2 ข้อ 35] การทำสังคายนาครั้งที่ ๒ จัดขึ้นหลังพุทธปรินิพพานล่วงแล้วกี่ปี?",
    "options": [
      "๑๐๐ ปี (ณ วาลิการาม เมืองเวสาลี)",
      "๕๐ ปี",
      "๒๑๘ ปี",
      "๕๐๐ ปี"
    ],
    "correctIndex": 0,
    "explanation": "สังคายนาครั้งที่ ๒ จัดขึ้นหลังปรินิพพาน ๑๐๐ ปี เพื่อปราบวัตถุ ๑๐ ประการนอกรีตของภิกษุวัชชีบุตร",
    "reference": "ศาสนประวัติ สังคายนาครั้งที่ ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-036",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 2 ข้อ 36] การทำสังคายนาครั้งที่ ๓ ในรัชสมัยพระเจ้าอโศกมหาราช มีพระเถระรูปใดเป็นประธานสงฆ์?",
    "options": [
      "พระโมคคัลลีบุตรติสสเถระ",
      "พระมหากัสสปะ",
      "พระเรวตเถระ",
      "พระมหินทเถระ"
    ],
    "correctIndex": 0,
    "explanation": "พระโมคคัลลีบุตรติสสเถระเป็นประธานสังคายนาครั้งที่ ๓ ณ เมืองปาฏลีบุตร",
    "reference": "ศาสนประวัติ สังคายนาครั้งที่ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-037",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 2 ข้อ 37] พระเจ้าอโศกส่งสมณทูต ๙ สาย สายที่มาประดิษฐาน ณ ดินแดนสุวรรณภูมิ (ไทย/พม่า) คือพระเถระรูปใด?",
    "options": [
      "พระโสณเถระ และ พระอุตตรเถระ",
      "พระมหินทเถระ",
      "พระมัชฌันติกเถระ",
      "พระมหารักษิตเถระ"
    ],
    "correctIndex": 0,
    "explanation": "พระโสณะและพระอุตตระนำพระพุทธศาสนามาประดิษฐาน ณ สุวรรณภูมิ",
    "reference": "ศาสนประวัติ พระธรรมทูต ๙ สาย",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-038",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 2 ข้อ 38] พระมหินทเถระ (พระราชโอรสพระเจ้าอโศก) นำพระพุทธศาสนาไปเผยแผ่ ณ ดินแดนใด?",
    "options": [
      "ลังกาทวีป (ประเทศศรีลังกา)",
      "สุวรรณภูมิ",
      "แคว้นคันธาระ",
      "ประเทศจีน"
    ],
    "correctIndex": 0,
    "explanation": "พระมหินทเถระนำพระศาสนาและพระไตรปิฎกไปประดิษฐานอย่างมั่นคงในศรีลังกา",
    "reference": "ศาสนประวัติ เผยแผ่สู่ลังกา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-039",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 2 ข้อ 39] การจารึกพระไตรปิฎกลงบนใบลานเป็นลายลักษณ์อักษรครั้งแรกของโลก เกิดขึ้นที่ใด?",
    "options": [
      "อาโลกเลณสถาน ในประเทศศรีลังกา (พ.ศ. ๔๓๓)",
      "อินเดีย เมืองราชคฤห์",
      "สุโขทัย",
      "พม่า"
    ],
    "correctIndex": 0,
    "explanation": "จารึกพระไตรปิฎกลงใบลานครั้งแรก ณ ถ้ำอาโลกะ ศรีลังกา",
    "reference": "ศาสนประวัติ การจารึกพระไตรปิฎก",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-040",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 2 ข้อ 40] สมัยสุโขทัย พ่อขุนรามคำแหงมหาราชทรงรับพระพุทธศาสนานิกายใดเข้ามาประดิษฐาน?",
    "options": [
      "เถรวาทแบบลังกาวงศ์ (ทรงอาราธนาพระสงฆ์จากนครศรีธรรมราช)",
      "มหายาน",
      "ตันตระ",
      "วัชรยาน"
    ],
    "correctIndex": 0,
    "explanation": "ทรงอาราธนาพระมหาเถรสังฆราชจากนครศรีธรรมราชผู้สืบสายลังกาวงศ์มาประดิษฐานที่สุโขทัย",
    "reference": "ประวัติศาสตร์พระพุทธศาสนาในไทย",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-041",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 2 ข้อ 41] สมณทูตไทยนำโดยพระอุบาลีเถระในสมัยอยุธยา ไปฟื้นฟูพระพุทธศาสนาในลังกา ก่อกำเนิดนิกายใด?",
    "options": [
      "สยามวงศ์ (หรืออุบาลีวงศ์)",
      "รามัญนิกาย",
      "อมรปุรนิกาย",
      "ลังกาวงศ์"
    ],
    "correctIndex": 0,
    "explanation": "พระอุบาลีเถระไปบวชให้ชาวลังกา ก่อตั้ง 'นิกายสยามวงศ์' รุ่งเรืองถึงปัจจุบัน",
    "reference": "ประวัติศาสตร์ศาสนา คณะสงฆ์สยามวงศ์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-042",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 2 ข้อ 42] การทำสังคายนาพระไตรปิฎกครั้งแรกในสมัยรัตนโกสินทร์ เกิดขึ้นในรัชกาลใด?",
    "options": [
      "พระบาทสมเด็จพระพุทธยอดฟ้าจุฬาโลกมหาราช (รัชกาลที่ ๑) ณ วัดมหาธาตุฯ",
      "รัชกาลที่ ๔",
      "รัชกาลที่ ๕",
      "รัชกาลที่ ๙"
    ],
    "correctIndex": 0,
    "explanation": "รัชกาลที่ ๑ โปรดให้ชำระพระไตรปิฎกฉบับทองใหญ่ ณ วัดมหาธาตุฯ ใน พ.ศ. ๒๓๓๑",
    "reference": "ประวัติศาสตร์สังคายนา รัชกาลที่ ๑",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-043",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 2 ข้อ 43] พระไตรปิฎกฉบับพิมพ์เป็นเล่มหนังสืออักษรไทยชุดแรกของโลก จัดพิมพ์ขึ้นในรัชสมัยใด?",
    "options": [
      "พระบาทสมเด็จพระจุลจอมเกล้าเจ้าอยู่หัว (รัชกาลที่ ๕)",
      "รัชกาลที่ ๓",
      "รัชกาลที่ ๔",
      "รัชกาลที่ ๖"
    ],
    "correctIndex": 0,
    "explanation": "รัชกาลที่ ๕ ทรงโปรดให้จัดพิมพ์พระไตรปิฎกอักษรไทยฉบับ ร.ศ. ๑๑๒ (พ.ศ. ๒๔๓๖) เป็นครั้งแรกของโลก",
    "reference": "ประวัติการพิมพ์พระไตรปิฎก รัชกาลที่ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-044",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 2 ข้อ 44] สมเด็จพระมหาสมณเจ้า กรมพระยาวชิรญาณวโรรส ทรงมีคุณูปการยิ่งใหญ่ต่อคณะสงฆ์ในด้านใด?",
    "options": [
      "ทรงสถาปนาหลักสูตรการศึกษานักธรรม และทรงนิพนธ์ตำราเรียนนักธรรม ตรี-โท-เอก",
      "ทรงสร้างวัดพระแก้ว",
      "ทรงนำพระไตรปิฎกมาจากอินเดีย",
      "ทรงเป็นแม่ทัพ"
    ],
    "correctIndex": 0,
    "explanation": "ทรงริเริ่มการศึกษานักธรรมและแต่งตำราเรียนมาตรฐานจนถึงปัจจุบัน",
    "reference": "ประวัติการศึกษาสงฆ์ไทย",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-045",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 2 ข้อ 45] พระเจ้ามิลินท์ (กษัตริย์กรีก) ทรงสนทนาธรรมตอบปัญหาจนสิ้นสงสัยกับพระเถระรูปใด?",
    "options": [
      "พระนาคเสนเถระ (คัมภีร์มิลินทปัญหา)",
      "พระมหากัสสปะ",
      "พระสารีบุตร",
      "พระพุทธโฆษาจารย์"
    ],
    "correctIndex": 0,
    "explanation": "พระนาคเสนเถระวิสัชนาปัญหาธรรมอันลึกซึ้งแก่พระเจ้ามิลินท์ รวบรวมเป็นคัมภีร์มิลินทปัญหา",
    "reference": "ศาสนประวัติ คัมภีร์มิลินทปัญหา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-046",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 2 ข้อ 46] พระพุทธโฆษาจารย์ พระมหาอรรถกถาจารย์ชื่อก้องโลก ได้รจนาคัมภีร์เอกชิ้นสำคัญชื่ออะไร?",
    "options": [
      "คัมภีร์วิสุทธิมรรค",
      "คัมภีร์มิลินทปัญหา",
      "คัมภีร์สมันตปาสาทิกา",
      "คัมภีร์ชินกาลมาลีปกรณ์"
    ],
    "correctIndex": 0,
    "explanation": "พระพุทธโฆษาจารย์รจนาคัมภีร์ 'วิสุทธิมรรค' อธิบายศีล สมาธิ ปัญญา และวิสุทธิ ๗ อย่างพิสดาร ณ ลังกา",
    "reference": "ประวัติพระอรรถกถาจารย์ คัมภีร์วิสุทธิมรรค",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-047",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 2 ข้อ 47] พระนางยโสธรา (พิมพา) เถรี ได้รับยกย่องเป็นเอตทัคคะฝ่ายภิกษุณีในด้านใด?",
    "options": [
      "ผู้ได้อภิญญาใหญ่ (มหามภิญญาปัตตานัง)",
      "ผู้มีลาภมาก",
      "ผู้มีปัญญาเฉียบคม",
      "ผู้มีความเพียร"
    ],
    "correctIndex": 0,
    "explanation": "พระยโสธราเถรีเลิศทางบรรลุมหาอภิญญา ระลึกชาติได้นับอสงไขย",
    "reference": "พุทธานุพุทธประวัติ พระยโสธราเถรี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-048",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 2 ข้อ 48] พระนันทาเถรี (พระสุนทรีนันทาเทวี) ได้รับยกย่องในด้านใด?",
    "options": [
      "ผู้ยินดีในการเพ่งฌาน (ฌายีนัง)",
      "ผู้มีรูปงาม",
      "ผู้มีเสียงเพราะ",
      "ผู้มีบริวารมาก"
    ],
    "correctIndex": 0,
    "explanation": "พระนันทาเถรีได้รับยกย่องเป็นเอตทัคคะฝ่ายภิกษุณีผู้ยินดีในการเพ่งฌานสมาบัติ",
    "reference": "พุทธานุพุทธประวัติ พระนันทาเถรี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-049",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 2 ข้อ 49] จิตตคหบดี ได้รับยกย่องเป็นเอตทัคคะฝ่ายอุบาสกในด้านใด?",
    "options": [
      "ผู้เป็นธรรมกถึก (แสดงธรรมได้เชี่ยวชาญ) ในฝ่ายอุบาสก",
      "ผู้มีทรัพย์มากที่สุด",
      "ผู้สร้างวัดมากที่สุด",
      "ผู้มีอายุยืนยาว"
    ],
    "correctIndex": 0,
    "explanation": "จิตตคหบดีบรรลุพระอนาคามี และได้รับยกย่องเป็นยอดอุบาสกผู้เป็นธรรมกถึก",
    "reference": "พุทธานุพุทธประวัติ จิตตคหบดี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-050",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 2 ข้อ 50] นางขุชชุตตรา ได้รับยกย่องเป็นเอตทัคคะฝ่ายอุบาสิกาในด้านใด?",
    "options": [
      "ผู้เป็นพหูสูต (ทรงจำพระธรรมเทศนาได้มาก) ในฝ่ายอุบาสิกา",
      "ผู้มีปัญญาเลิศ",
      "ผู้มีความซื่อสัตย์",
      "ผู้ถวายทานยอดเยี่ยม"
    ],
    "correctIndex": 0,
    "explanation": "นางขุชชุตตราฟังธรรมแล้วนำมาแสดงต่อให้พระนางสามาวดีและบริวาร ๕๐๐ ฟังจนบรรลุธรรม",
    "reference": "พุทธานุพุทธประวัติ นางขุชชุตตรา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-051",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 3 ข้อ 51] พระมหาปชาบดีโคตมีเถรี ได้รับยกย่องเป็นเอตทัคคะฝ่ายภิกษุณีในด้านใด?",
    "options": [
      "ผู้เป็นรัตตัญญู (ผู้รู้ราตรีนาน บวชก่อนใครในฝ่ายภิกษุณี)",
      "ผู้มีปัญญามาก",
      "ผู้มีฤทธิ์มาก",
      "ผู้ทรงวินัย"
    ],
    "correctIndex": 0,
    "explanation": "พระนางมหาปชาบดีโคตมีเป็นปฐมภิกษุณี ได้รับยกย่องเป็นเอตทัคคะฝ่ายรัตตัญญู",
    "reference": "พุทธานุพุทธประวัติ พระภิกษุณีเอตทัคคะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-052",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 3 ข้อ 52] พระเขมาเถรี ได้รับยกย่องเป็นพระอัครสาวิกาเบื้องขวา เลิศในด้านใด?",
    "options": [
      "ผู้มีปัญญามาก (มหัปปัญญานัง)",
      "ผู้มีฤทธิ์มาก",
      "ผู้มีลาภมาก",
      "ผู้ทรงจำพระสูตร"
    ],
    "correctIndex": 0,
    "explanation": "พระเขมาเถรี อดีตพระมเหสีพระเจ้าพิมพิสาร ได้รับสถาปนาเป็นอัครสาวิกาเบื้องขวา เลิศทางปัญญา",
    "reference": "พุทธานุพุทธประวัติ พระเขมาเถรี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-053",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 3 ข้อ 53] พระอุบลวรรณาเถรี ได้รับยกย่องเป็นพระอัครสาวิกาเบื้องซ้าย เลิศในด้านใด?",
    "options": [
      "ผู้มีฤทธิ์มาก (อิทธิมันตานัง)",
      "ผู้มีปัญญามาก",
      "ผู้มีลาภมาก",
      "ผู้มีเสียงไพเราะ"
    ],
    "correctIndex": 0,
    "explanation": "พระอุบลวรรณาเถรี เป็นพระอัครสาวิกาเบื้องซ้าย เลิศทางอิทธิฤทธิ์",
    "reference": "พุทธานุพุทธประวัติ พระอุบลวรรณาเถรี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-054",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 3 ข้อ 54] พระปฏาจาราเถรี ได้รับยกย่องเป็นเอตทัคคะฝ่ายภิกษุณีในด้านใด?",
    "options": [
      "ผู้ทรงจำและเชี่ยวชาญพระวินัย (วินัยธรานัง)",
      "ผู้มีลาภมาก",
      "ผู้บวชด้วยศรัทธา",
      "ผู้มีขันติยิ่ง"
    ],
    "correctIndex": 0,
    "explanation": "พระปฏาจาราเถรีเลิศทางทรงพระวินัยฝ่ายภิกษุณี",
    "reference": "พุทธานุพุทธประวัติ พระปฏาจาราเถรี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-055",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 3 ข้อ 55] พระกีสาโคตมีเถรี ได้รับยกย่องในด้านใด?",
    "options": [
      "ผู้ทรงจีวรเศร้าหมอง (ถือผ้าบังสุกุลจีวรบ่ำค่า)",
      "ผู้มีปัญญาเลิศ",
      "ผู้มีเสียงไพเราะ",
      "ผู้มีเมตตา"
    ],
    "correctIndex": 0,
    "explanation": "พระกีสาโคตมีเลิศทางทรงจีวรเศร้าหมอง (บังสุกุลจีวรธรานัง)",
    "reference": "พุทธานุพุทธประวัติ พระกีสาโคตมีเถรี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-056",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 3 ข้อ 56] อนาถบิณฑิกเศรษฐี ได้รับยกย่องเป็นเอตทัคคะฝ่ายอุบาสกในด้านใด?",
    "options": [
      "ผู้เป็นยอดแห่งผู้ถวายทาน (ทายกานัง)",
      "ผู้มีปัญญาเลิศ",
      "ผู้มีศรัทธามั่นคง",
      "ผู้ชำนาญการค้า"
    ],
    "correctIndex": 0,
    "explanation": "อนาถบิณฑิกเศรษฐีสร้างวัดพระเชตวัน ได้รับยกย่องเป็นยอดอุบาสกผู้ถวายทาน",
    "reference": "พุทธานุพุทธประวัติ อนาถบิณฑิกเศรษฐี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-057",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 3 ข้อ 57] นางวิสาขามหาอุบาสิกา ได้รับยกย่องเป็นเอตทัคคะฝ่ายอุบาสิกาในด้านใด?",
    "options": [
      "ผู้เป็นยอดแห่งผู้ถวายทานฝ่ายหญิง (ทายิกานัง)",
      "ผู้มีปัญญาเลิศ",
      "ผู้มีเครื่องประดับงาม",
      "ผู้รักษาศีล"
    ],
    "correctIndex": 0,
    "explanation": "นางวิสาขาสร้างวัดบุพพาราม ได้รับยกย่องเป็นยอดทายิกาผู้ถวายทาน",
    "reference": "พุทธานุพุทธประวัติ นางวิสาขา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-058",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 3 ข้อ 58] หมอชีวกโกมารภัจจ์ ได้รับยกย่องเป็นเอตทัคคะฝ่ายอุบาสกในด้านใด?",
    "options": [
      "ผู้เลื่อมใสในพระรัตนตรัยอย่างยิ่ง (ปสาทกานัง)",
      "ผู้มียาวิเศษ",
      "ผู้มีปัญญา",
      "ผู้มีความเพียร"
    ],
    "correctIndex": 0,
    "explanation": "หมอชีวกโกมารภัจจ์เป็นแพทย์ประจำพระองค์และเลิศทางมีความเลื่อมใสยิ่ง",
    "reference": "พุทธานุพุทธประวัติ หมอชีวกโกมารภัจจ์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-059",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 3 ข้อ 59] การทำสังคายนาครั้งที่ ๑ ภายหลังปรินิพพาน ๓ เดือน มีพระราชาพระองค์ใดทรงอุปถัมภ์?",
    "options": [
      "พระเจ้าอชาตศัตรู แห่งแคว้นมคธ",
      "พระเจ้าพิมพิสาร",
      "พระเจ้าอโศกมหาราช",
      "พระเจ้ากนิษกะ"
    ],
    "correctIndex": 0,
    "explanation": "พระเจ้าอชาตศัตรูทรงอุปถัมภ์การทำปฐมสังคายนา ณ ถ้ำสัตตบรรณคูหา เมืองราชคฤห์",
    "reference": "ศาสนประวัติ สังคายนาครั้งที่ ๑",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-060",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 3 ข้อ 60] การทำสังคายนาครั้งที่ ๒ จัดขึ้นหลังพุทธปรินิพพานล่วงแล้วกี่ปี?",
    "options": [
      "๑๐๐ ปี (ณ วาลิการาม เมืองเวสาลี)",
      "๕๐ ปี",
      "๒๑๘ ปี",
      "๕๐๐ ปี"
    ],
    "correctIndex": 0,
    "explanation": "สังคายนาครั้งที่ ๒ จัดขึ้นหลังปรินิพพาน ๑๐๐ ปี เพื่อปราบวัตถุ ๑๐ ประการนอกรีตของภิกษุวัชชีบุตร",
    "reference": "ศาสนประวัติ สังคายนาครั้งที่ ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-061",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 3 ข้อ 61] การทำสังคายนาครั้งที่ ๓ ในรัชสมัยพระเจ้าอโศกมหาราช มีพระเถระรูปใดเป็นประธานสงฆ์?",
    "options": [
      "พระโมคคัลลีบุตรติสสเถระ",
      "พระมหากัสสปะ",
      "พระเรวตเถระ",
      "พระมหินทเถระ"
    ],
    "correctIndex": 0,
    "explanation": "พระโมคคัลลีบุตรติสสเถระเป็นประธานสังคายนาครั้งที่ ๓ ณ เมืองปาฏลีบุตร",
    "reference": "ศาสนประวัติ สังคายนาครั้งที่ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-062",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 3 ข้อ 62] พระเจ้าอโศกส่งสมณทูต ๙ สาย สายที่มาประดิษฐาน ณ ดินแดนสุวรรณภูมิ (ไทย/พม่า) คือพระเถระรูปใด?",
    "options": [
      "พระโสณเถระ และ พระอุตตรเถระ",
      "พระมหินทเถระ",
      "พระมัชฌันติกเถระ",
      "พระมหารักษิตเถระ"
    ],
    "correctIndex": 0,
    "explanation": "พระโสณะและพระอุตตระนำพระพุทธศาสนามาประดิษฐาน ณ สุวรรณภูมิ",
    "reference": "ศาสนประวัติ พระธรรมทูต ๙ สาย",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-063",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 3 ข้อ 63] พระมหินทเถระ (พระราชโอรสพระเจ้าอโศก) นำพระพุทธศาสนาไปเผยแผ่ ณ ดินแดนใด?",
    "options": [
      "ลังกาทวีป (ประเทศศรีลังกา)",
      "สุวรรณภูมิ",
      "แคว้นคันธาระ",
      "ประเทศจีน"
    ],
    "correctIndex": 0,
    "explanation": "พระมหินทเถระนำพระศาสนาและพระไตรปิฎกไปประดิษฐานอย่างมั่นคงในศรีลังกา",
    "reference": "ศาสนประวัติ เผยแผ่สู่ลังกา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-064",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 3 ข้อ 64] การจารึกพระไตรปิฎกลงบนใบลานเป็นลายลักษณ์อักษรครั้งแรกของโลก เกิดขึ้นที่ใด?",
    "options": [
      "อาโลกเลณสถาน ในประเทศศรีลังกา (พ.ศ. ๔๓๓)",
      "อินเดีย เมืองราชคฤห์",
      "สุโขทัย",
      "พม่า"
    ],
    "correctIndex": 0,
    "explanation": "จารึกพระไตรปิฎกลงใบลานครั้งแรก ณ ถ้ำอาโลกะ ศรีลังกา",
    "reference": "ศาสนประวัติ การจารึกพระไตรปิฎก",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-065",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 3 ข้อ 65] สมัยสุโขทัย พ่อขุนรามคำแหงมหาราชทรงรับพระพุทธศาสนานิกายใดเข้ามาประดิษฐาน?",
    "options": [
      "เถรวาทแบบลังกาวงศ์ (ทรงอาราธนาพระสงฆ์จากนครศรีธรรมราช)",
      "มหายาน",
      "ตันตระ",
      "วัชรยาน"
    ],
    "correctIndex": 0,
    "explanation": "ทรงอาราธนาพระมหาเถรสังฆราชจากนครศรีธรรมราชผู้สืบสายลังกาวงศ์มาประดิษฐานที่สุโขทัย",
    "reference": "ประวัติศาสตร์พระพุทธศาสนาในไทย",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-066",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 3 ข้อ 66] สมณทูตไทยนำโดยพระอุบาลีเถระในสมัยอยุธยา ไปฟื้นฟูพระพุทธศาสนาในลังกา ก่อกำเนิดนิกายใด?",
    "options": [
      "สยามวงศ์ (หรืออุบาลีวงศ์)",
      "รามัญนิกาย",
      "อมรปุรนิกาย",
      "ลังกาวงศ์"
    ],
    "correctIndex": 0,
    "explanation": "พระอุบาลีเถระไปบวชให้ชาวลังกา ก่อตั้ง 'นิกายสยามวงศ์' รุ่งเรืองถึงปัจจุบัน",
    "reference": "ประวัติศาสตร์ศาสนา คณะสงฆ์สยามวงศ์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-067",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 3 ข้อ 67] การทำสังคายนาพระไตรปิฎกครั้งแรกในสมัยรัตนโกสินทร์ เกิดขึ้นในรัชกาลใด?",
    "options": [
      "พระบาทสมเด็จพระพุทธยอดฟ้าจุฬาโลกมหาราช (รัชกาลที่ ๑) ณ วัดมหาธาตุฯ",
      "รัชกาลที่ ๔",
      "รัชกาลที่ ๕",
      "รัชกาลที่ ๙"
    ],
    "correctIndex": 0,
    "explanation": "รัชกาลที่ ๑ โปรดให้ชำระพระไตรปิฎกฉบับทองใหญ่ ณ วัดมหาธาตุฯ ใน พ.ศ. ๒๓๓๑",
    "reference": "ประวัติศาสตร์สังคายนา รัชกาลที่ ๑",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-068",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 3 ข้อ 68] พระไตรปิฎกฉบับพิมพ์เป็นเล่มหนังสืออักษรไทยชุดแรกของโลก จัดพิมพ์ขึ้นในรัชสมัยใด?",
    "options": [
      "พระบาทสมเด็จพระจุลจอมเกล้าเจ้าอยู่หัว (รัชกาลที่ ๕)",
      "รัชกาลที่ ๓",
      "รัชกาลที่ ๔",
      "รัชกาลที่ ๖"
    ],
    "correctIndex": 0,
    "explanation": "รัชกาลที่ ๕ ทรงโปรดให้จัดพิมพ์พระไตรปิฎกอักษรไทยฉบับ ร.ศ. ๑๑๒ (พ.ศ. ๒๔๓๖) เป็นครั้งแรกของโลก",
    "reference": "ประวัติการพิมพ์พระไตรปิฎก รัชกาลที่ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-069",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 3 ข้อ 69] สมเด็จพระมหาสมณเจ้า กรมพระยาวชิรญาณวโรรส ทรงมีคุณูปการยิ่งใหญ่ต่อคณะสงฆ์ในด้านใด?",
    "options": [
      "ทรงสถาปนาหลักสูตรการศึกษานักธรรม และทรงนิพนธ์ตำราเรียนนักธรรม ตรี-โท-เอก",
      "ทรงสร้างวัดพระแก้ว",
      "ทรงนำพระไตรปิฎกมาจากอินเดีย",
      "ทรงเป็นแม่ทัพ"
    ],
    "correctIndex": 0,
    "explanation": "ทรงริเริ่มการศึกษานักธรรมและแต่งตำราเรียนมาตรฐานจนถึงปัจจุบัน",
    "reference": "ประวัติการศึกษาสงฆ์ไทย",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-070",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 3 ข้อ 70] พระเจ้ามิลินท์ (กษัตริย์กรีก) ทรงสนทนาธรรมตอบปัญหาจนสิ้นสงสัยกับพระเถระรูปใด?",
    "options": [
      "พระนาคเสนเถระ (คัมภีร์มิลินทปัญหา)",
      "พระมหากัสสปะ",
      "พระสารีบุตร",
      "พระพุทธโฆษาจารย์"
    ],
    "correctIndex": 0,
    "explanation": "พระนาคเสนเถระวิสัชนาปัญหาธรรมอันลึกซึ้งแก่พระเจ้ามิลินท์ รวบรวมเป็นคัมภีร์มิลินทปัญหา",
    "reference": "ศาสนประวัติ คัมภีร์มิลินทปัญหา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-071",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 3 ข้อ 71] พระพุทธโฆษาจารย์ พระมหาอรรถกถาจารย์ชื่อก้องโลก ได้รจนาคัมภีร์เอกชิ้นสำคัญชื่ออะไร?",
    "options": [
      "คัมภีร์วิสุทธิมรรค",
      "คัมภีร์มิลินทปัญหา",
      "คัมภีร์สมันตปาสาทิกา",
      "คัมภีร์ชินกาลมาลีปกรณ์"
    ],
    "correctIndex": 0,
    "explanation": "พระพุทธโฆษาจารย์รจนาคัมภีร์ 'วิสุทธิมรรค' อธิบายศีล สมาธิ ปัญญา และวิสุทธิ ๗ อย่างพิสดาร ณ ลังกา",
    "reference": "ประวัติพระอรรถกถาจารย์ คัมภีร์วิสุทธิมรรค",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-072",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 3 ข้อ 72] พระนางยโสธรา (พิมพา) เถรี ได้รับยกย่องเป็นเอตทัคคะฝ่ายภิกษุณีในด้านใด?",
    "options": [
      "ผู้ได้อภิญญาใหญ่ (มหามภิญญาปัตตานัง)",
      "ผู้มีลาภมาก",
      "ผู้มีปัญญาเฉียบคม",
      "ผู้มีความเพียร"
    ],
    "correctIndex": 0,
    "explanation": "พระยโสธราเถรีเลิศทางบรรลุมหาอภิญญา ระลึกชาติได้นับอสงไขย",
    "reference": "พุทธานุพุทธประวัติ พระยโสธราเถรี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-073",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 3 ข้อ 73] พระนันทาเถรี (พระสุนทรีนันทาเทวี) ได้รับยกย่องในด้านใด?",
    "options": [
      "ผู้ยินดีในการเพ่งฌาน (ฌายีนัง)",
      "ผู้มีรูปงาม",
      "ผู้มีเสียงเพราะ",
      "ผู้มีบริวารมาก"
    ],
    "correctIndex": 0,
    "explanation": "พระนันทาเถรีได้รับยกย่องเป็นเอตทัคคะฝ่ายภิกษุณีผู้ยินดีในการเพ่งฌานสมาบัติ",
    "reference": "พุทธานุพุทธประวัติ พระนันทาเถรี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-074",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 3 ข้อ 74] จิตตคหบดี ได้รับยกย่องเป็นเอตทัคคะฝ่ายอุบาสกในด้านใด?",
    "options": [
      "ผู้เป็นธรรมกถึก (แสดงธรรมได้เชี่ยวชาญ) ในฝ่ายอุบาสก",
      "ผู้มีทรัพย์มากที่สุด",
      "ผู้สร้างวัดมากที่สุด",
      "ผู้มีอายุยืนยาว"
    ],
    "correctIndex": 0,
    "explanation": "จิตตคหบดีบรรลุพระอนาคามี และได้รับยกย่องเป็นยอดอุบาสกผู้เป็นธรรมกถึก",
    "reference": "พุทธานุพุทธประวัติ จิตตคหบดี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-075",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 3 ข้อ 75] นางขุชชุตตรา ได้รับยกย่องเป็นเอตทัคคะฝ่ายอุบาสิกาในด้านใด?",
    "options": [
      "ผู้เป็นพหูสูต (ทรงจำพระธรรมเทศนาได้มาก) ในฝ่ายอุบาสิกา",
      "ผู้มีปัญญาเลิศ",
      "ผู้มีความซื่อสัตย์",
      "ผู้ถวายทานยอดเยี่ยม"
    ],
    "correctIndex": 0,
    "explanation": "นางขุชชุตตราฟังธรรมแล้วนำมาแสดงต่อให้พระนางสามาวดีและบริวาร ๕๐๐ ฟังจนบรรลุธรรม",
    "reference": "พุทธานุพุทธประวัติ นางขุชชุตตรา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-076",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 4 ข้อ 76] พระมหาปชาบดีโคตมีเถรี ได้รับยกย่องเป็นเอตทัคคะฝ่ายภิกษุณีในด้านใด?",
    "options": [
      "ผู้เป็นรัตตัญญู (ผู้รู้ราตรีนาน บวชก่อนใครในฝ่ายภิกษุณี)",
      "ผู้มีปัญญามาก",
      "ผู้มีฤทธิ์มาก",
      "ผู้ทรงวินัย"
    ],
    "correctIndex": 0,
    "explanation": "พระนางมหาปชาบดีโคตมีเป็นปฐมภิกษุณี ได้รับยกย่องเป็นเอตทัคคะฝ่ายรัตตัญญู",
    "reference": "พุทธานุพุทธประวัติ พระภิกษุณีเอตทัคคะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-077",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 4 ข้อ 77] พระเขมาเถรี ได้รับยกย่องเป็นพระอัครสาวิกาเบื้องขวา เลิศในด้านใด?",
    "options": [
      "ผู้มีปัญญามาก (มหัปปัญญานัง)",
      "ผู้มีฤทธิ์มาก",
      "ผู้มีลาภมาก",
      "ผู้ทรงจำพระสูตร"
    ],
    "correctIndex": 0,
    "explanation": "พระเขมาเถรี อดีตพระมเหสีพระเจ้าพิมพิสาร ได้รับสถาปนาเป็นอัครสาวิกาเบื้องขวา เลิศทางปัญญา",
    "reference": "พุทธานุพุทธประวัติ พระเขมาเถรี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-078",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 4 ข้อ 78] พระอุบลวรรณาเถรี ได้รับยกย่องเป็นพระอัครสาวิกาเบื้องซ้าย เลิศในด้านใด?",
    "options": [
      "ผู้มีฤทธิ์มาก (อิทธิมันตานัง)",
      "ผู้มีปัญญามาก",
      "ผู้มีลาภมาก",
      "ผู้มีเสียงไพเราะ"
    ],
    "correctIndex": 0,
    "explanation": "พระอุบลวรรณาเถรี เป็นพระอัครสาวิกาเบื้องซ้าย เลิศทางอิทธิฤทธิ์",
    "reference": "พุทธานุพุทธประวัติ พระอุบลวรรณาเถรี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-079",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 4 ข้อ 79] พระปฏาจาราเถรี ได้รับยกย่องเป็นเอตทัคคะฝ่ายภิกษุณีในด้านใด?",
    "options": [
      "ผู้ทรงจำและเชี่ยวชาญพระวินัย (วินัยธรานัง)",
      "ผู้มีลาภมาก",
      "ผู้บวชด้วยศรัทธา",
      "ผู้มีขันติยิ่ง"
    ],
    "correctIndex": 0,
    "explanation": "พระปฏาจาราเถรีเลิศทางทรงพระวินัยฝ่ายภิกษุณี",
    "reference": "พุทธานุพุทธประวัติ พระปฏาจาราเถรี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-080",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 4 ข้อ 80] พระกีสาโคตมีเถรี ได้รับยกย่องในด้านใด?",
    "options": [
      "ผู้ทรงจีวรเศร้าหมอง (ถือผ้าบังสุกุลจีวรบ่ำค่า)",
      "ผู้มีปัญญาเลิศ",
      "ผู้มีเสียงไพเราะ",
      "ผู้มีเมตตา"
    ],
    "correctIndex": 0,
    "explanation": "พระกีสาโคตมีเลิศทางทรงจีวรเศร้าหมอง (บังสุกุลจีวรธรานัง)",
    "reference": "พุทธานุพุทธประวัติ พระกีสาโคตมีเถรี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-081",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 4 ข้อ 81] อนาถบิณฑิกเศรษฐี ได้รับยกย่องเป็นเอตทัคคะฝ่ายอุบาสกในด้านใด?",
    "options": [
      "ผู้เป็นยอดแห่งผู้ถวายทาน (ทายกานัง)",
      "ผู้มีปัญญาเลิศ",
      "ผู้มีศรัทธามั่นคง",
      "ผู้ชำนาญการค้า"
    ],
    "correctIndex": 0,
    "explanation": "อนาถบิณฑิกเศรษฐีสร้างวัดพระเชตวัน ได้รับยกย่องเป็นยอดอุบาสกผู้ถวายทาน",
    "reference": "พุทธานุพุทธประวัติ อนาถบิณฑิกเศรษฐี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-082",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 4 ข้อ 82] นางวิสาขามหาอุบาสิกา ได้รับยกย่องเป็นเอตทัคคะฝ่ายอุบาสิกาในด้านใด?",
    "options": [
      "ผู้เป็นยอดแห่งผู้ถวายทานฝ่ายหญิง (ทายิกานัง)",
      "ผู้มีปัญญาเลิศ",
      "ผู้มีเครื่องประดับงาม",
      "ผู้รักษาศีล"
    ],
    "correctIndex": 0,
    "explanation": "นางวิสาขาสร้างวัดบุพพาราม ได้รับยกย่องเป็นยอดทายิกาผู้ถวายทาน",
    "reference": "พุทธานุพุทธประวัติ นางวิสาขา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-083",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 4 ข้อ 83] หมอชีวกโกมารภัจจ์ ได้รับยกย่องเป็นเอตทัคคะฝ่ายอุบาสกในด้านใด?",
    "options": [
      "ผู้เลื่อมใสในพระรัตนตรัยอย่างยิ่ง (ปสาทกานัง)",
      "ผู้มียาวิเศษ",
      "ผู้มีปัญญา",
      "ผู้มีความเพียร"
    ],
    "correctIndex": 0,
    "explanation": "หมอชีวกโกมารภัจจ์เป็นแพทย์ประจำพระองค์และเลิศทางมีความเลื่อมใสยิ่ง",
    "reference": "พุทธานุพุทธประวัติ หมอชีวกโกมารภัจจ์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-084",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 4 ข้อ 84] การทำสังคายนาครั้งที่ ๑ ภายหลังปรินิพพาน ๓ เดือน มีพระราชาพระองค์ใดทรงอุปถัมภ์?",
    "options": [
      "พระเจ้าอชาตศัตรู แห่งแคว้นมคธ",
      "พระเจ้าพิมพิสาร",
      "พระเจ้าอโศกมหาราช",
      "พระเจ้ากนิษกะ"
    ],
    "correctIndex": 0,
    "explanation": "พระเจ้าอชาตศัตรูทรงอุปถัมภ์การทำปฐมสังคายนา ณ ถ้ำสัตตบรรณคูหา เมืองราชคฤห์",
    "reference": "ศาสนประวัติ สังคายนาครั้งที่ ๑",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-085",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 4 ข้อ 85] การทำสังคายนาครั้งที่ ๒ จัดขึ้นหลังพุทธปรินิพพานล่วงแล้วกี่ปี?",
    "options": [
      "๑๐๐ ปี (ณ วาลิการาม เมืองเวสาลี)",
      "๕๐ ปี",
      "๒๑๘ ปี",
      "๕๐๐ ปี"
    ],
    "correctIndex": 0,
    "explanation": "สังคายนาครั้งที่ ๒ จัดขึ้นหลังปรินิพพาน ๑๐๐ ปี เพื่อปราบวัตถุ ๑๐ ประการนอกรีตของภิกษุวัชชีบุตร",
    "reference": "ศาสนประวัติ สังคายนาครั้งที่ ๒",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-086",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 4 ข้อ 86] การทำสังคายนาครั้งที่ ๓ ในรัชสมัยพระเจ้าอโศกมหาราช มีพระเถระรูปใดเป็นประธานสงฆ์?",
    "options": [
      "พระโมคคัลลีบุตรติสสเถระ",
      "พระมหากัสสปะ",
      "พระเรวตเถระ",
      "พระมหินทเถระ"
    ],
    "correctIndex": 0,
    "explanation": "พระโมคคัลลีบุตรติสสเถระเป็นประธานสังคายนาครั้งที่ ๓ ณ เมืองปาฏลีบุตร",
    "reference": "ศาสนประวัติ สังคายนาครั้งที่ ๓",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-087",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 4 ข้อ 87] พระเจ้าอโศกส่งสมณทูต ๙ สาย สายที่มาประดิษฐาน ณ ดินแดนสุวรรณภูมิ (ไทย/พม่า) คือพระเถระรูปใด?",
    "options": [
      "พระโสณเถระ และ พระอุตตรเถระ",
      "พระมหินทเถระ",
      "พระมัชฌันติกเถระ",
      "พระมหารักษิตเถระ"
    ],
    "correctIndex": 0,
    "explanation": "พระโสณะและพระอุตตระนำพระพุทธศาสนามาประดิษฐาน ณ สุวรรณภูมิ",
    "reference": "ศาสนประวัติ พระธรรมทูต ๙ สาย",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-088",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 4 ข้อ 88] พระมหินทเถระ (พระราชโอรสพระเจ้าอโศก) นำพระพุทธศาสนาไปเผยแผ่ ณ ดินแดนใด?",
    "options": [
      "ลังกาทวีป (ประเทศศรีลังกา)",
      "สุวรรณภูมิ",
      "แคว้นคันธาระ",
      "ประเทศจีน"
    ],
    "correctIndex": 0,
    "explanation": "พระมหินทเถระนำพระศาสนาและพระไตรปิฎกไปประดิษฐานอย่างมั่นคงในศรีลังกา",
    "reference": "ศาสนประวัติ เผยแผ่สู่ลังกา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-089",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 4 ข้อ 89] การจารึกพระไตรปิฎกลงบนใบลานเป็นลายลักษณ์อักษรครั้งแรกของโลก เกิดขึ้นที่ใด?",
    "options": [
      "อาโลกเลณสถาน ในประเทศศรีลังกา (พ.ศ. ๔๓๓)",
      "อินเดีย เมืองราชคฤห์",
      "สุโขทัย",
      "พม่า"
    ],
    "correctIndex": 0,
    "explanation": "จารึกพระไตรปิฎกลงใบลานครั้งแรก ณ ถ้ำอาโลกะ ศรีลังกา",
    "reference": "ศาสนประวัติ การจารึกพระไตรปิฎก",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-090",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 4 ข้อ 90] สมัยสุโขทัย พ่อขุนรามคำแหงมหาราชทรงรับพระพุทธศาสนานิกายใดเข้ามาประดิษฐาน?",
    "options": [
      "เถรวาทแบบลังกาวงศ์ (ทรงอาราธนาพระสงฆ์จากนครศรีธรรมราช)",
      "มหายาน",
      "ตันตระ",
      "วัชรยาน"
    ],
    "correctIndex": 0,
    "explanation": "ทรงอาราธนาพระมหาเถรสังฆราชจากนครศรีธรรมราชผู้สืบสายลังกาวงศ์มาประดิษฐานที่สุโขทัย",
    "reference": "ประวัติศาสตร์พระพุทธศาสนาในไทย",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-091",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 4 ข้อ 91] สมณทูตไทยนำโดยพระอุบาลีเถระในสมัยอยุธยา ไปฟื้นฟูพระพุทธศาสนาในลังกา ก่อกำเนิดนิกายใด?",
    "options": [
      "สยามวงศ์ (หรืออุบาลีวงศ์)",
      "รามัญนิกาย",
      "อมรปุรนิกาย",
      "ลังกาวงศ์"
    ],
    "correctIndex": 0,
    "explanation": "พระอุบาลีเถระไปบวชให้ชาวลังกา ก่อตั้ง 'นิกายสยามวงศ์' รุ่งเรืองถึงปัจจุบัน",
    "reference": "ประวัติศาสตร์ศาสนา คณะสงฆ์สยามวงศ์",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-092",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 4 ข้อ 92] การทำสังคายนาพระไตรปิฎกครั้งแรกในสมัยรัตนโกสินทร์ เกิดขึ้นในรัชกาลใด?",
    "options": [
      "พระบาทสมเด็จพระพุทธยอดฟ้าจุฬาโลกมหาราช (รัชกาลที่ ๑) ณ วัดมหาธาตุฯ",
      "รัชกาลที่ ๔",
      "รัชกาลที่ ๕",
      "รัชกาลที่ ๙"
    ],
    "correctIndex": 0,
    "explanation": "รัชกาลที่ ๑ โปรดให้ชำระพระไตรปิฎกฉบับทองใหญ่ ณ วัดมหาธาตุฯ ใน พ.ศ. ๒๓๓๑",
    "reference": "ประวัติศาสตร์สังคายนา รัชกาลที่ ๑",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-093",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 4 ข้อ 93] พระไตรปิฎกฉบับพิมพ์เป็นเล่มหนังสืออักษรไทยชุดแรกของโลก จัดพิมพ์ขึ้นในรัชสมัยใด?",
    "options": [
      "พระบาทสมเด็จพระจุลจอมเกล้าเจ้าอยู่หัว (รัชกาลที่ ๕)",
      "รัชกาลที่ ๓",
      "รัชกาลที่ ๔",
      "รัชกาลที่ ๖"
    ],
    "correctIndex": 0,
    "explanation": "รัชกาลที่ ๕ ทรงโปรดให้จัดพิมพ์พระไตรปิฎกอักษรไทยฉบับ ร.ศ. ๑๑๒ (พ.ศ. ๒๔๓๖) เป็นครั้งแรกของโลก",
    "reference": "ประวัติการพิมพ์พระไตรปิฎก รัชกาลที่ ๕",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-094",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 4 ข้อ 94] สมเด็จพระมหาสมณเจ้า กรมพระยาวชิรญาณวโรรส ทรงมีคุณูปการยิ่งใหญ่ต่อคณะสงฆ์ในด้านใด?",
    "options": [
      "ทรงสถาปนาหลักสูตรการศึกษานักธรรม และทรงนิพนธ์ตำราเรียนนักธรรม ตรี-โท-เอก",
      "ทรงสร้างวัดพระแก้ว",
      "ทรงนำพระไตรปิฎกมาจากอินเดีย",
      "ทรงเป็นแม่ทัพ"
    ],
    "correctIndex": 0,
    "explanation": "ทรงริเริ่มการศึกษานักธรรมและแต่งตำราเรียนมาตรฐานจนถึงปัจจุบัน",
    "reference": "ประวัติการศึกษาสงฆ์ไทย",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-095",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 4 ข้อ 95] พระเจ้ามิลินท์ (กษัตริย์กรีก) ทรงสนทนาธรรมตอบปัญหาจนสิ้นสงสัยกับพระเถระรูปใด?",
    "options": [
      "พระนาคเสนเถระ (คัมภีร์มิลินทปัญหา)",
      "พระมหากัสสปะ",
      "พระสารีบุตร",
      "พระพุทธโฆษาจารย์"
    ],
    "correctIndex": 0,
    "explanation": "พระนาคเสนเถระวิสัชนาปัญหาธรรมอันลึกซึ้งแก่พระเจ้ามิลินท์ รวบรวมเป็นคัมภีร์มิลินทปัญหา",
    "reference": "ศาสนประวัติ คัมภีร์มิลินทปัญหา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-096",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 4 ข้อ 96] พระพุทธโฆษาจารย์ พระมหาอรรถกถาจารย์ชื่อก้องโลก ได้รจนาคัมภีร์เอกชิ้นสำคัญชื่ออะไร?",
    "options": [
      "คัมภีร์วิสุทธิมรรค",
      "คัมภีร์มิลินทปัญหา",
      "คัมภีร์สมันตปาสาทิกา",
      "คัมภีร์ชินกาลมาลีปกรณ์"
    ],
    "correctIndex": 0,
    "explanation": "พระพุทธโฆษาจารย์รจนาคัมภีร์ 'วิสุทธิมรรค' อธิบายศีล สมาธิ ปัญญา และวิสุทธิ ๗ อย่างพิสดาร ณ ลังกา",
    "reference": "ประวัติพระอรรถกถาจารย์ คัมภีร์วิสุทธิมรรค",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-097",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 4 ข้อ 97] พระนางยโสธรา (พิมพา) เถรี ได้รับยกย่องเป็นเอตทัคคะฝ่ายภิกษุณีในด้านใด?",
    "options": [
      "ผู้ได้อภิญญาใหญ่ (มหามภิญญาปัตตานัง)",
      "ผู้มีลาภมาก",
      "ผู้มีปัญญาเฉียบคม",
      "ผู้มีความเพียร"
    ],
    "correctIndex": 0,
    "explanation": "พระยโสธราเถรีเลิศทางบรรลุมหาอภิญญา ระลึกชาติได้นับอสงไขย",
    "reference": "พุทธานุพุทธประวัติ พระยโสธราเถรี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-098",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 4 ข้อ 98] พระนันทาเถรี (พระสุนทรีนันทาเทวี) ได้รับยกย่องในด้านใด?",
    "options": [
      "ผู้ยินดีในการเพ่งฌาน (ฌายีนัง)",
      "ผู้มีรูปงาม",
      "ผู้มีเสียงเพราะ",
      "ผู้มีบริวารมาก"
    ],
    "correctIndex": 0,
    "explanation": "พระนันทาเถรีได้รับยกย่องเป็นเอตทัคคะฝ่ายภิกษุณีผู้ยินดีในการเพ่งฌานสมาบัติ",
    "reference": "พุทธานุพุทธประวัติ พระนันทาเถรี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-099",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 4 ข้อ 99] จิตตคหบดี ได้รับยกย่องเป็นเอตทัคคะฝ่ายอุบาสกในด้านใด?",
    "options": [
      "ผู้เป็นธรรมกถึก (แสดงธรรมได้เชี่ยวชาญ) ในฝ่ายอุบาสก",
      "ผู้มีทรัพย์มากที่สุด",
      "ผู้สร้างวัดมากที่สุด",
      "ผู้มีอายุยืนยาว"
    ],
    "correctIndex": 0,
    "explanation": "จิตตคหบดีบรรลุพระอนาคามี และได้รับยกย่องเป็นยอดอุบาสกผู้เป็นธรรมกถึก",
    "reference": "พุทธานุพุทธประวัติ จิตตคหบดี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-b-100",
    "grade": "เอก",
    "subject": "พุทธประวัติ",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 4 ข้อ 100] นางขุชชุตตรา ได้รับยกย่องเป็นเอตทัคคะฝ่ายอุบาสิกาในด้านใด?",
    "options": [
      "ผู้เป็นพหูสูต (ทรงจำพระธรรมเทศนาได้มาก) ในฝ่ายอุบาสิกา",
      "ผู้มีปัญญาเลิศ",
      "ผู้มีความซื่อสัตย์",
      "ผู้ถวายทานยอดเยี่ยม"
    ],
    "correctIndex": 0,
    "explanation": "นางขุชชุตตราฟังธรรมแล้วนำมาแสดงต่อให้พระนางสามาวดีและบริวาร ๕๐๐ ฟังจนบรรลุธรรม",
    "reference": "พุทธานุพุทธประวัติ นางขุชชุตตรา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-001",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "วินัยมุข เล่ม ๓ เน้นศึกษาเกี่ยวกับเรื่องใดเป็นหลักสำคัญ?",
    "options": [
      "สังฆกรรมและระเบียบปฏิบัติในอภิสมาจารและขันธกะ",
      "ศีล ๕ และศีล ๘",
      "อาบัติปาราชิก ๔",
      "การแปลภาษาบาลี"
    ],
    "correctIndex": 0,
    "explanation": "วินัยมุข เล่ม ๓ อธิบายสังฆกรรม ขันธกะ และวัตรปฏิบัติต่างๆ ในพระวินัยปิฎก",
    "reference": "วินัยมุข เล่ม ๓ สังฆกรรม",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-002",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "สังฆกรรมมี ๔ ประเภท แบ่งตามลักษณะการตั้งญัตติ ข้อใดมิใช่ ๑ ใน ๔ นั้น?",
    "options": [
      "อัตตาณัติกรรม",
      "อปโลกนกรรม",
      "ญัตติกรรม",
      "ญัตติจตุตถกรรม"
    ],
    "correctIndex": 0,
    "explanation": "สังฆกรรม ๔: อปโลกนกรรม ญัตติกรรม ญัตติดุติยกรรม ญัตติจตุตถกรรม",
    "reference": "วินัยมุข เล่ม ๓ สังฆกรรม ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-003",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "สังฆกรรมที่ต้องทำด้วย 'ญัตติจตุตถกรรม' ข้อใดถูกต้อง?",
    "options": [
      "การให้อุปสมบท (บวชพระ) และการสวดอัพภาน",
      "การสวดปาฏิโมกข์",
      "การกรานกฐิน",
      "การสมมติเสนาสนะ"
    ],
    "correctIndex": 0,
    "explanation": "การให้อุปสมบท ถอนและผูกสีมา และสวดอัพภาน ต้องทำด้วยญัตติจตุตถกรรม",
    "reference": "วินัยมุข เล่ม ๓ ญัตติจตุตถกรรม",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-004",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "'สีมา' เขตแดนสำหรับทำสังฆกรรมของสงฆ์ แบ่งออกเป็น ๒ ประเภทใหญ่คืออะไร?",
    "options": [
      "พัทธสีมา (สีมาที่สงฆ์ผูกเอง) และ อพัทธสีมา (สีมาที่ไม่ได้ผูก เช่น แดนบ้าน แดนน้ำ)",
      "สีมาบนบก และ สีมาในน้ำ",
      "สีมาในโบสถ์ และ นอกโบสถ์",
      "สีมาเล็ก และ สีมาใหญ่"
    ],
    "correctIndex": 0,
    "explanation": "สีมาแบ่งเป็น พัทธสีมา (สงฆ์ผูกด้วยกรรมวาจา) และ อพัทธสีมา (เขตตามธรรมชาติ/กฎหมาย)",
    "reference": "วินัยมุข เล่ม ๓ สีมาขันธกะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-005",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๓",
    "question": "'นิมิต' สำหรับใช้กำหนดเขตพัทธสีมา มีกี่ชนิด?",
    "options": [
      "๘ ชนิด (ภูเขา ศิลา ป่าไม้ ต้นไม้ จอมปลวก หนทาง แม่น้ำ สระน้ำ)",
      "๔ ชนิด",
      "๑๒ ชนิด",
      "๒๐ ชนิด"
    ],
    "correctIndex": 0,
    "explanation": "นิมิตผูกสีมามี ๘ ชนิด ได้แก่ ภูเขา หิน ป่า ต้นไม้ จอมปลวก ทาง แม่น้ำ สระน้ำ",
    "reference": "วินัยมุข เล่ม ๓ สีมาขันธกะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-006",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๔",
    "question": "'อุทกุกเขปสีมา' (สีมาเหนือน้ำ) มีข้อกำหนดระยะห่างจากฝั่งอย่างไร?",
    "options": [
      "ห่างจากฝั่งชั่วบุรุษมีกำลังปานกลางวักน้ำสาดไม่ถึง (ประมาณ ๑ ชั่ววิดน้ำ)",
      "ห่าง ๑ กิโลเมตร",
      "ห่าง ๑๐ เมตร",
      "ต้องอยู่กลางทะเล"
    ],
    "correctIndex": 0,
    "explanation": "อุทกุกเขปสีมาทำบนแพหรือเรือในน้ำธรรมชาติ ห่างจากตลิ่งชั่วบุรุษวักน้ำสาดไม่ถึง",
    "reference": "วินัยมุข เล่ม ๓ อพัทธสีมา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-007",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๕",
    "question": "'กรรมวาจาจารย์' และ 'อนุสาวนาจารย์' ในพิธีอุปสมบททำหน้าที่อะไร?",
    "options": [
      "เป็นพระคู่สวดทำหน้าที่สวดตั้งญัตติและสวดประกาศขอมติสงฆ์ในการรับผู้ขอบวช",
      "เป็นผู้ตัดจีวร",
      "เป็นผู้ให้ศีล ๕",
      "เป็นพยานฝ่ายโยม"
    ],
    "correctIndex": 0,
    "explanation": "พระคู่สวดทำหน้าที่สวดญัตติจตุตถกรรมวาจายกกุลบุตรขึ้นเป็นพระภิกษุ",
    "reference": "วินัยมุข เล่ม ๓ อุปสมบทกรรม",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-008",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "โรคติดต่อต้องห้าม ๕ ชนิด ในอันตรายิกธรรม ๑๓ ประการมีอะไรบ้าง?",
    "options": [
      "โรคเรื้อน ฝีเปื่อย กลาก มองคร่อ (หืดหอบ) ลมบ้าหมู",
      "หวัด ปวดฟัน ตาแดง ปวดท้อง ปวดหัว",
      "เบาหวาน ความดัน หัวใจ ไต มะเร็ง",
      "เกาต์ ตับ ปอด หนัง กระดูก"
    ],
    "correctIndex": 0,
    "explanation": "กุฏฐัง คัณโฑ กิลาโส โสโส อปมาโร เป็นโรคต้องห้าม ๕ ประการในการบวช",
    "reference": "วินัยมุข เล่ม ๓ อันตรายิกธรรม",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-009",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "บุคคลประเภทใดที่ 'ห้ามบวชเด็ดขาด' หากบวชแล้วต้องให้สึกทันที?",
    "options": [
      "ผู้ทำอนันตริยกรรม ๕ (ฆ่าพ่อ ฆ่าแม่ ฆ่าพระอรหันต์ ทำร้ายพระพุทธเจ้า ทำสงฆ์แตก) บัณเฑาะก์ ลักเพศ",
      "คนยากจน",
      "คนไม่มีพ่อแม่",
      "คนอ่านหนังสือไม่ออก"
    ],
    "correctIndex": 0,
    "explanation": "ผู้ทำอนันตริยกรรม ๕ และผู้ลักเพศ บัณเฑาะก์ ห้ามอุปสมบทเด็ดขาด",
    "reference": "วินัยมุข เล่ม ๓ อภัพพบุคคล",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-010",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "'วุฏฐานวิธี' คือระเบียบปฏิบัติเพื่อออกจากอาบัติหนักประเภทใด?",
    "options": [
      "อาบัติสังฆาทิเสส (อยู่ปริวาส มานัต และอัพภาน)",
      "อาบัติปาราชิก",
      "อาบัติปาจิตตีย์",
      "อาบัติทุกกฏ"
    ],
    "correctIndex": 0,
    "explanation": "วุฏฐานวิธี คือ กรรมวิธีออกจากสังฆาทิเสสด้วยการอยู่ปริวาส มานัต ๖ ราตรี และสวดอัพภาน",
    "reference": "วินัยมุข เล่ม ๓ วุฏฐานวิธี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-011",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "'ปริวาส' มีไว้สำหรับภิกษุที่ต้องอาบัติสังฆาทิเสสในกรณีใด?",
    "options": [
      "ภิกษุที่ต้องอาบัติแล้ว 'ปกปิดไว้' ต้องอยู่ปริวาสเท่ากับจำนวนวันที่ตนปกปิด",
      "ภิกษุที่ไม่ยอมรับ",
      "ภิกษุพรรษาเกิน ๒๐",
      "ภิกษุที่ต้องการสึก"
    ],
    "correctIndex": 0,
    "explanation": "ถ้าปกปิดอาบัติไว้กี่วัน ต้องอยู่ปริวาสชดใช้ตามจำนวนวันที่ปิดบังไว้",
    "reference": "วินัยมุข เล่ม ๓ ปริวาส",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-012",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "'มานัต' คือการประพฤติวัตรข่มใจเพื่อล้างมลทินสังฆาทิเสส มีกำหนดระยะเวลากี่ราตรี?",
    "options": [
      "๖ ราตรี (๖ คืนเต็ม)",
      "๓ ราตรี",
      "๑๐ ราตรี",
      "๑ เดือน"
    ],
    "correctIndex": 0,
    "explanation": "มานัตมีกำหนด ๖ ราตรี ต้องบอกอาบัติต่อสงฆ์ทุกรูปที่เข้ามาในอาราม",
    "reference": "วินัยมุข เล่ม ๓ มานัต",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-013",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๓",
    "question": "'อุปสมบทกรรม' ในปัจจันตชนบท (แดนไกล) กำหนดให้มีสงฆ์ประชุมอย่างน้อยกี่รูป?",
    "options": [
      "อย่างน้อย ๕ รูป (พระวินัยธร ๑ รูป)",
      "อย่างน้อย ๑๐ รูป",
      "อย่างน้อย ๒๐ รูป",
      "อย่างน้อย ๔ รูป"
    ],
    "correctIndex": 0,
    "explanation": "ในปัจจันตชนบท ทรงผ่อนผันให้ใช้สงฆ์อย่างน้อย ๕ รูป (ในมัชฌิมประเทศใช้ ๑๐ รูป)",
    "reference": "วินัยมุข เล่ม ๓ อุปสมบท",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-014",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๔",
    "question": "ภิกษุผู้ได้กรานกฐินถูกต้อง ได้รับอานิสงส์กี่ประการ และขยายเวลาได้นานเท่าใด?",
    "options": [
      "อานิสงส์ ๕ ประการ และขยายเวลาถึงวันเพ็ญเดือน ๔ (๕ เดือน)",
      "อานิสงส์ ๓ ประการ นาน ๑ เดือน",
      "อานิสงส์ ๑๐ ประการ นาน ๑ ปี",
      "อานิสงส์ ๔ ประการ ตลอดพรรษา"
    ],
    "correctIndex": 0,
    "explanation": "ผู้กรานกฐินได้รับอานิสงส์ ๕ ประการ และขยายเวลาอานิสงส์ไปถึงวันเพ็ญเดือน ๔",
    "reference": "วินัยมุข เล่ม ๓ กฐินขันธกะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-015",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๕",
    "question": "ผ้าที่นำมาทอดกฐิน ต้องเป็นผ้าชนิดใดตามพระวินัย?",
    "options": [
      "ผ้าขาวใหม่ ผ้าเทียมใหม่ หรือผ้าบังสุกุล ผืนใดผืนหนึ่งในไตรจีวร",
      "ต้องเป็นผ้าไหมทองคำ",
      "ต้องเป็นผ้าเก่า",
      "ต้องเป็นผ้าสำเร็จรูป"
    ],
    "correctIndex": 0,
    "explanation": "ผ้ากฐินต้องเป็นผ้าใหม่หรือผ้าบังสุกุลที่ตัดเย็บย้อมเสร็จในวันนั้นเป็นผ้าผืนใดผืนหนึ่งในไตรจีวร",
    "reference": "วินัยมุข เล่ม ๓ กฐินขันธกะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-016",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "'ปวารณากรรม' ในวันออกพรรษา พระภิกษุทำพิธีกล่าวเปิดโอกาสให้ทำสิ่งใด?",
    "options": [
      "เปิดโอกาสให้ภิกษุอื่นว่ากล่าวตักเตือนตนได้ด้วยความเมตตา หากเห็น ได้ยิน หรือสงสัย",
      "กล่าวคำลาบวช",
      "กล่าวคำแบ่งลาภ",
      "กล่าวคำขอพร"
    ],
    "correctIndex": 0,
    "explanation": "ปวารณา คือ การยินยอมเปิดโอกาสให้เพื่อนภิกษุตักเตือนข้อบกพร่องของตนได้",
    "reference": "วินัยมุข เล่ม ๓ ปวารณาขันธกะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-017",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "'สัตตาหกรณียะ' คือข้อยกเว้นให้ภิกษุจำพรรษาเดินทางไปค้างแรมนอกวัดได้ไม่เกินกี่วัน?",
    "options": [
      "ไม่เกิน ๗ วัน (๗ ราตรี) โดยไม่ขาดพรรษา",
      "ไม่เกิน ๓ วัน",
      "ไม่เกิน ๑๕ วัน",
      "ไม่เกิน ๑ เดือน"
    ],
    "correctIndex": 0,
    "explanation": "สัตตาหกรณียะ อนุญาตให้ไปค้างแรมด้วยเหตุจำเป็น (เช่น พยาบาลพ่อแม่/ครูบาอาจารย์) ได้ไม่เกิน ๗ วัน",
    "reference": "วินัยมุข เล่ม ๓ วัสสูปนายิกาขันธกะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-018",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "การอุปสมบทในปัจจุบันของคณะสงฆ์ ใช้วิธีการใดเพียงวิธีเดียว?",
    "options": [
      "ญัตติจตุตถกัมมอุปสัมปทา (โดยสงฆ์ประชุมสวดบวชให้)",
      "เอหิภิกขุอุปสัมปทา",
      "ติสรณคมนูปสัมปทา",
      "โอวาทปาฏิโมกข์"
    ],
    "correctIndex": 0,
    "explanation": "ปัจจุบันใช้วิธีญัตติจตุตถกัมมอุปสัมปทาโดยคณะสงฆ์เพียงวิธีเดียว",
    "reference": "วินัยมุข เล่ม ๓ อุปสัมปทาวิธี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-019",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "'วัตร ๑๔' ในขันธกะ ข้อใดคือ 'อาคันตุกวัตร'?",
    "options": [
      "ข้อปฏิบัติสำหรับภิกษุผู้เป็นอาคันตุกะเดินทางมาถึงวัดอื่น",
      "ข้อปฏิบัติของเจ้าถิ่น",
      "ข้อปฏิบัติเวลาฉันข้าว",
      "ข้อปฏิบัติเวลาใช้ห้องน้ำ"
    ],
    "correctIndex": 0,
    "explanation": "อาคันตุกวัตร คือ มารยาทและข้อปฏิบัติที่ภิกษุผู้มาจากถิ่นอื่นพึงกระทำเมื่อถึงวัดอื่น",
    "reference": "วินัยมุข เล่ม ๓ วัตตกถา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-020",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "'คามิกวัตร' ตรงข้ามกับอาคันตุกวัตร หมายถึงอะไร?",
    "options": [
      "ข้อปฏิบัติของภิกษุเจ้าถิ่นที่จะเตรียมตัวออกเดินทางไปยังถิ่นอื่น",
      "ข้อปฏิบัติของชาวบ้าน",
      "ข้อปฏิบัติเวลาบิณฑบาต",
      "ข้อปฏิบัติเมื่อไปตลาด"
    ],
    "correctIndex": 0,
    "explanation": "คามิกวัตร คือ ข้อปฏิบัติของภิกษุผู้เตรียมจะเดินทางออกจากวัด พึงเก็บงำเสนาสนะให้เรียบร้อย",
    "reference": "วินัยมุข เล่ม ๓ วัตตกถา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-021",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๓",
    "question": "'อุปัชฌายวัตร' และ 'สัทธิวิหาริกวัตร' คือข้อปฏิบัติระหว่างใครกับใคร?",
    "options": [
      "ข้อปฏิบัติต่างตอบแทนระหว่างพระอุปัชฌาย์กับลูกศิษย์ที่ตนบวชให้",
      "ข้อปฏิบัติระหว่างเจ้าอาวาสกับไวยาวัจกร",
      "ข้อปฏิบัติระหว่างพระกับโยม",
      "ข้อปฏิบัติระหว่างพระกับกษัตริย์"
    ],
    "correctIndex": 0,
    "explanation": "อุปัชฌายวัตรคือหน้าที่ศิษย์ปฏิบัติต่ออุปัชฌาย์ สัทธิวิหาริกวัตรคือหน้าที่อุปัชฌาย์ดูแลศิษย์",
    "reference": "วินัยมุข เล่ม ๓ วัตตกถา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-022",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๔",
    "question": "'วัจจกุฎีวัตร' ในหมวดวัตร ๑๔ หมายถึงข้อปฏิบัติเกี่ยวกับเรื่องใด?",
    "options": [
      "มารยาทและระเบียบการใช้ห้องสุขา (ถาน/เวจกุฎี)",
      "การรักษาความสะอาดโรงฉัน",
      "การปัดกวาดลานเจดีย์",
      "การสรงน้ำ"
    ],
    "correctIndex": 0,
    "explanation": "วัจจกุฎีวัตร คือ ข้อปฏิบัติและมารยาทในการเข้าใช้และทำความสะอาดห้องน้ำห้องสุขา",
    "reference": "วินัยมุข เล่ม ๓ วัตตกถา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-023",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๕",
    "question": "'เสนาสนะ' ในทางพระวินัยมุข หมายถึงสิ่งใด?",
    "options": [
      "ที่อยู่อาศัย ที่นอน ที่นั่ง เช่น กุฏิ ศาลา เตียง ตั่ง ฟูก หมอน",
      "เครื่องนุ่งห่มจีวร",
      "อาหารบิณฑบาต",
      "ยารักษาโรค"
    ],
    "correctIndex": 0,
    "explanation": "เสนาสนะ คือ ที่นอนและที่นั่ง กุฏิ เสื่อ เตียง ตั่ง และสถานที่พักอาศัยของภิกษุ",
    "reference": "วินัยมุข เล่ม ๓ เสนาสนขันธกะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-024",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "'ครุภัณฑ์' ของสงฆ์ (ของหนักส่วนรวมที่ห้ามแจกจ่าย ห้ามแบ่ง ห้ามขาย) คือสิ่งใด?",
    "options": [
      "ที่ดินวัด กุฏิ วิหาร โบสถ์ ไม้ ปูน เครื่องโลหะหนัก",
      "อาหารบิณฑบาต",
      "ยาหยอดตา",
      "ดอกไม้ธูปเทียน"
    ],
    "correctIndex": 0,
    "explanation": "ครุภัณฑ์ คือ สมบัติส่วนกลางขนาดใหญ่ของสงฆ์ เช่น ที่ดิน กุฏิ ศาลา ห้ามภิกษุแจกจ่ายหรือจำหน่าย",
    "reference": "วินัยมุข เล่ม ๓ เสนาสนขันธกะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-025",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "'ลหุภัณฑ์' ของสงฆ์ (ของเบาที่สงฆ์แจกจ่ายแก่ภิกษุได้) คือสิ่งใด?",
    "options": [
      "ผ้าจีวร สบง บาตร มีดโกน เข็มเย็บผ้า ยารักษาโรค อาหาร",
      "ที่ดินวัด",
      "กุฏิสงฆ์",
      "พระอุโบสถ"
    ],
    "correctIndex": 0,
    "explanation": "ลหุภัณฑ์ คือ บริขารและสิ่งของเล็กน้อยที่สามารถนำมาแจกจ่ายแก่ภิกษุผู้จำพรรษาหรือภิกษุไข้ได้",
    "reference": "วินัยมุข เล่ม ๓ เภสัชชขันธกะและเสนาสนะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-026",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 2 ข้อ 26] วินัยมุข เล่ม ๓ เน้นศึกษาเกี่ยวกับเรื่องใดเป็นหลักสำคัญ?",
    "options": [
      "สังฆกรรมและระเบียบปฏิบัติในอภิสมาจารและขันธกะ",
      "ศีล ๕ และศีล ๘",
      "อาบัติปาราชิก ๔",
      "การแปลภาษาบาลี"
    ],
    "correctIndex": 0,
    "explanation": "วินัยมุข เล่ม ๓ อธิบายสังฆกรรม ขันธกะ และวัตรปฏิบัติต่างๆ ในพระวินัยปิฎก",
    "reference": "วินัยมุข เล่ม ๓ สังฆกรรม",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-027",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 2 ข้อ 27] สังฆกรรมมี ๔ ประเภท แบ่งตามลักษณะการตั้งญัตติ ข้อใดมิใช่ ๑ ใน ๔ นั้น?",
    "options": [
      "อัตตาณัติกรรม",
      "อปโลกนกรรม",
      "ญัตติกรรม",
      "ญัตติจตุตถกรรม"
    ],
    "correctIndex": 0,
    "explanation": "สังฆกรรม ๔: อปโลกนกรรม ญัตติกรรม ญัตติดุติยกรรม ญัตติจตุตถกรรม",
    "reference": "วินัยมุข เล่ม ๓ สังฆกรรม ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-028",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 2 ข้อ 28] สังฆกรรมที่ต้องทำด้วย 'ญัตติจตุตถกรรม' ข้อใดถูกต้อง?",
    "options": [
      "การให้อุปสมบท (บวชพระ) และการสวดอัพภาน",
      "การสวดปาฏิโมกข์",
      "การกรานกฐิน",
      "การสมมติเสนาสนะ"
    ],
    "correctIndex": 0,
    "explanation": "การให้อุปสมบท ถอนและผูกสีมา และสวดอัพภาน ต้องทำด้วยญัตติจตุตถกรรม",
    "reference": "วินัยมุข เล่ม ๓ ญัตติจตุตถกรรม",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-029",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 2 ข้อ 29] 'สีมา' เขตแดนสำหรับทำสังฆกรรมของสงฆ์ แบ่งออกเป็น ๒ ประเภทใหญ่คืออะไร?",
    "options": [
      "พัทธสีมา (สีมาที่สงฆ์ผูกเอง) และ อพัทธสีมา (สีมาที่ไม่ได้ผูก เช่น แดนบ้าน แดนน้ำ)",
      "สีมาบนบก และ สีมาในน้ำ",
      "สีมาในโบสถ์ และ นอกโบสถ์",
      "สีมาเล็ก และ สีมาใหญ่"
    ],
    "correctIndex": 0,
    "explanation": "สีมาแบ่งเป็น พัทธสีมา (สงฆ์ผูกด้วยกรรมวาจา) และ อพัทธสีมา (เขตตามธรรมชาติ/กฎหมาย)",
    "reference": "วินัยมุข เล่ม ๓ สีมาขันธกะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-030",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 2 ข้อ 30] 'นิมิต' สำหรับใช้กำหนดเขตพัทธสีมา มีกี่ชนิด?",
    "options": [
      "๘ ชนิด (ภูเขา ศิลา ป่าไม้ ต้นไม้ จอมปลวก หนทาง แม่น้ำ สระน้ำ)",
      "๔ ชนิด",
      "๑๒ ชนิด",
      "๒๐ ชนิด"
    ],
    "correctIndex": 0,
    "explanation": "นิมิตผูกสีมามี ๘ ชนิด ได้แก่ ภูเขา หิน ป่า ต้นไม้ จอมปลวก ทาง แม่น้ำ สระน้ำ",
    "reference": "วินัยมุข เล่ม ๓ สีมาขันธกะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-031",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 2 ข้อ 31] 'อุทกุกเขปสีมา' (สีมาเหนือน้ำ) มีข้อกำหนดระยะห่างจากฝั่งอย่างไร?",
    "options": [
      "ห่างจากฝั่งชั่วบุรุษมีกำลังปานกลางวักน้ำสาดไม่ถึง (ประมาณ ๑ ชั่ววิดน้ำ)",
      "ห่าง ๑ กิโลเมตร",
      "ห่าง ๑๐ เมตร",
      "ต้องอยู่กลางทะเล"
    ],
    "correctIndex": 0,
    "explanation": "อุทกุกเขปสีมาทำบนแพหรือเรือในน้ำธรรมชาติ ห่างจากตลิ่งชั่วบุรุษวักน้ำสาดไม่ถึง",
    "reference": "วินัยมุข เล่ม ๓ อพัทธสีมา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-032",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 2 ข้อ 32] 'กรรมวาจาจารย์' และ 'อนุสาวนาจารย์' ในพิธีอุปสมบททำหน้าที่อะไร?",
    "options": [
      "เป็นพระคู่สวดทำหน้าที่สวดตั้งญัตติและสวดประกาศขอมติสงฆ์ในการรับผู้ขอบวช",
      "เป็นผู้ตัดจีวร",
      "เป็นผู้ให้ศีล ๕",
      "เป็นพยานฝ่ายโยม"
    ],
    "correctIndex": 0,
    "explanation": "พระคู่สวดทำหน้าที่สวดญัตติจตุตถกรรมวาจายกกุลบุตรขึ้นเป็นพระภิกษุ",
    "reference": "วินัยมุข เล่ม ๓ อุปสมบทกรรม",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-033",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 2 ข้อ 33] โรคติดต่อต้องห้าม ๕ ชนิด ในอันตรายิกธรรม ๑๓ ประการมีอะไรบ้าง?",
    "options": [
      "โรคเรื้อน ฝีเปื่อย กลาก มองคร่อ (หืดหอบ) ลมบ้าหมู",
      "หวัด ปวดฟัน ตาแดง ปวดท้อง ปวดหัว",
      "เบาหวาน ความดัน หัวใจ ไต มะเร็ง",
      "เกาต์ ตับ ปอด หนัง กระดูก"
    ],
    "correctIndex": 0,
    "explanation": "กุฏฐัง คัณโฑ กิลาโส โสโส อปมาโร เป็นโรคต้องห้าม ๕ ประการในการบวช",
    "reference": "วินัยมุข เล่ม ๓ อันตรายิกธรรม",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-034",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 2 ข้อ 34] บุคคลประเภทใดที่ 'ห้ามบวชเด็ดขาด' หากบวชแล้วต้องให้สึกทันที?",
    "options": [
      "ผู้ทำอนันตริยกรรม ๕ (ฆ่าพ่อ ฆ่าแม่ ฆ่าพระอรหันต์ ทำร้ายพระพุทธเจ้า ทำสงฆ์แตก) บัณเฑาะก์ ลักเพศ",
      "คนยากจน",
      "คนไม่มีพ่อแม่",
      "คนอ่านหนังสือไม่ออก"
    ],
    "correctIndex": 0,
    "explanation": "ผู้ทำอนันตริยกรรม ๕ และผู้ลักเพศ บัณเฑาะก์ ห้ามอุปสมบทเด็ดขาด",
    "reference": "วินัยมุข เล่ม ๓ อภัพพบุคคล",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-035",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 2 ข้อ 35] 'วุฏฐานวิธี' คือระเบียบปฏิบัติเพื่อออกจากอาบัติหนักประเภทใด?",
    "options": [
      "อาบัติสังฆาทิเสส (อยู่ปริวาส มานัต และอัพภาน)",
      "อาบัติปาราชิก",
      "อาบัติปาจิตตีย์",
      "อาบัติทุกกฏ"
    ],
    "correctIndex": 0,
    "explanation": "วุฏฐานวิธี คือ กรรมวิธีออกจากสังฆาทิเสสด้วยการอยู่ปริวาส มานัต ๖ ราตรี และสวดอัพภาน",
    "reference": "วินัยมุข เล่ม ๓ วุฏฐานวิธี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-036",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 2 ข้อ 36] 'ปริวาส' มีไว้สำหรับภิกษุที่ต้องอาบัติสังฆาทิเสสในกรณีใด?",
    "options": [
      "ภิกษุที่ต้องอาบัติแล้ว 'ปกปิดไว้' ต้องอยู่ปริวาสเท่ากับจำนวนวันที่ตนปกปิด",
      "ภิกษุที่ไม่ยอมรับ",
      "ภิกษุพรรษาเกิน ๒๐",
      "ภิกษุที่ต้องการสึก"
    ],
    "correctIndex": 0,
    "explanation": "ถ้าปกปิดอาบัติไว้กี่วัน ต้องอยู่ปริวาสชดใช้ตามจำนวนวันที่ปิดบังไว้",
    "reference": "วินัยมุข เล่ม ๓ ปริวาส",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-037",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 2 ข้อ 37] 'มานัต' คือการประพฤติวัตรข่มใจเพื่อล้างมลทินสังฆาทิเสส มีกำหนดระยะเวลากี่ราตรี?",
    "options": [
      "๖ ราตรี (๖ คืนเต็ม)",
      "๓ ราตรี",
      "๑๐ ราตรี",
      "๑ เดือน"
    ],
    "correctIndex": 0,
    "explanation": "มานัตมีกำหนด ๖ ราตรี ต้องบอกอาบัติต่อสงฆ์ทุกรูปที่เข้ามาในอาราม",
    "reference": "วินัยมุข เล่ม ๓ มานัต",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-038",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 2 ข้อ 38] 'อุปสมบทกรรม' ในปัจจันตชนบท (แดนไกล) กำหนดให้มีสงฆ์ประชุมอย่างน้อยกี่รูป?",
    "options": [
      "อย่างน้อย ๕ รูป (พระวินัยธร ๑ รูป)",
      "อย่างน้อย ๑๐ รูป",
      "อย่างน้อย ๒๐ รูป",
      "อย่างน้อย ๔ รูป"
    ],
    "correctIndex": 0,
    "explanation": "ในปัจจันตชนบท ทรงผ่อนผันให้ใช้สงฆ์อย่างน้อย ๕ รูป (ในมัชฌิมประเทศใช้ ๑๐ รูป)",
    "reference": "วินัยมุข เล่ม ๓ อุปสมบท",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-039",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 2 ข้อ 39] ภิกษุผู้ได้กรานกฐินถูกต้อง ได้รับอานิสงส์กี่ประการ และขยายเวลาได้นานเท่าใด?",
    "options": [
      "อานิสงส์ ๕ ประการ และขยายเวลาถึงวันเพ็ญเดือน ๔ (๕ เดือน)",
      "อานิสงส์ ๓ ประการ นาน ๑ เดือน",
      "อานิสงส์ ๑๐ ประการ นาน ๑ ปี",
      "อานิสงส์ ๔ ประการ ตลอดพรรษา"
    ],
    "correctIndex": 0,
    "explanation": "ผู้กรานกฐินได้รับอานิสงส์ ๕ ประการ และขยายเวลาอานิสงส์ไปถึงวันเพ็ญเดือน ๔",
    "reference": "วินัยมุข เล่ม ๓ กฐินขันธกะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-040",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 2 ข้อ 40] ผ้าที่นำมาทอดกฐิน ต้องเป็นผ้าชนิดใดตามพระวินัย?",
    "options": [
      "ผ้าขาวใหม่ ผ้าเทียมใหม่ หรือผ้าบังสุกุล ผืนใดผืนหนึ่งในไตรจีวร",
      "ต้องเป็นผ้าไหมทองคำ",
      "ต้องเป็นผ้าเก่า",
      "ต้องเป็นผ้าสำเร็จรูป"
    ],
    "correctIndex": 0,
    "explanation": "ผ้ากฐินต้องเป็นผ้าใหม่หรือผ้าบังสุกุลที่ตัดเย็บย้อมเสร็จในวันนั้นเป็นผ้าผืนใดผืนหนึ่งในไตรจีวร",
    "reference": "วินัยมุข เล่ม ๓ กฐินขันธกะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-041",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 2 ข้อ 41] 'ปวารณากรรม' ในวันออกพรรษา พระภิกษุทำพิธีกล่าวเปิดโอกาสให้ทำสิ่งใด?",
    "options": [
      "เปิดโอกาสให้ภิกษุอื่นว่ากล่าวตักเตือนตนได้ด้วยความเมตตา หากเห็น ได้ยิน หรือสงสัย",
      "กล่าวคำลาบวช",
      "กล่าวคำแบ่งลาภ",
      "กล่าวคำขอพร"
    ],
    "correctIndex": 0,
    "explanation": "ปวารณา คือ การยินยอมเปิดโอกาสให้เพื่อนภิกษุตักเตือนข้อบกพร่องของตนได้",
    "reference": "วินัยมุข เล่ม ๓ ปวารณาขันธกะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-042",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 2 ข้อ 42] 'สัตตาหกรณียะ' คือข้อยกเว้นให้ภิกษุจำพรรษาเดินทางไปค้างแรมนอกวัดได้ไม่เกินกี่วัน?",
    "options": [
      "ไม่เกิน ๗ วัน (๗ ราตรี) โดยไม่ขาดพรรษา",
      "ไม่เกิน ๓ วัน",
      "ไม่เกิน ๑๕ วัน",
      "ไม่เกิน ๑ เดือน"
    ],
    "correctIndex": 0,
    "explanation": "สัตตาหกรณียะ อนุญาตให้ไปค้างแรมด้วยเหตุจำเป็น (เช่น พยาบาลพ่อแม่/ครูบาอาจารย์) ได้ไม่เกิน ๗ วัน",
    "reference": "วินัยมุข เล่ม ๓ วัสสูปนายิกาขันธกะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-043",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 2 ข้อ 43] การอุปสมบทในปัจจุบันของคณะสงฆ์ ใช้วิธีการใดเพียงวิธีเดียว?",
    "options": [
      "ญัตติจตุตถกัมมอุปสัมปทา (โดยสงฆ์ประชุมสวดบวชให้)",
      "เอหิภิกขุอุปสัมปทา",
      "ติสรณคมนูปสัมปทา",
      "โอวาทปาฏิโมกข์"
    ],
    "correctIndex": 0,
    "explanation": "ปัจจุบันใช้วิธีญัตติจตุตถกัมมอุปสัมปทาโดยคณะสงฆ์เพียงวิธีเดียว",
    "reference": "วินัยมุข เล่ม ๓ อุปสัมปทาวิธี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-044",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 2 ข้อ 44] 'วัตร ๑๔' ในขันธกะ ข้อใดคือ 'อาคันตุกวัตร'?",
    "options": [
      "ข้อปฏิบัติสำหรับภิกษุผู้เป็นอาคันตุกะเดินทางมาถึงวัดอื่น",
      "ข้อปฏิบัติของเจ้าถิ่น",
      "ข้อปฏิบัติเวลาฉันข้าว",
      "ข้อปฏิบัติเวลาใช้ห้องน้ำ"
    ],
    "correctIndex": 0,
    "explanation": "อาคันตุกวัตร คือ มารยาทและข้อปฏิบัติที่ภิกษุผู้มาจากถิ่นอื่นพึงกระทำเมื่อถึงวัดอื่น",
    "reference": "วินัยมุข เล่ม ๓ วัตตกถา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-045",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 2 ข้อ 45] 'คามิกวัตร' ตรงข้ามกับอาคันตุกวัตร หมายถึงอะไร?",
    "options": [
      "ข้อปฏิบัติของภิกษุเจ้าถิ่นที่จะเตรียมตัวออกเดินทางไปยังถิ่นอื่น",
      "ข้อปฏิบัติของชาวบ้าน",
      "ข้อปฏิบัติเวลาบิณฑบาต",
      "ข้อปฏิบัติเมื่อไปตลาด"
    ],
    "correctIndex": 0,
    "explanation": "คามิกวัตร คือ ข้อปฏิบัติของภิกษุผู้เตรียมจะเดินทางออกจากวัด พึงเก็บงำเสนาสนะให้เรียบร้อย",
    "reference": "วินัยมุข เล่ม ๓ วัตตกถา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-046",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 2 ข้อ 46] 'อุปัชฌายวัตร' และ 'สัทธิวิหาริกวัตร' คือข้อปฏิบัติระหว่างใครกับใคร?",
    "options": [
      "ข้อปฏิบัติต่างตอบแทนระหว่างพระอุปัชฌาย์กับลูกศิษย์ที่ตนบวชให้",
      "ข้อปฏิบัติระหว่างเจ้าอาวาสกับไวยาวัจกร",
      "ข้อปฏิบัติระหว่างพระกับโยม",
      "ข้อปฏิบัติระหว่างพระกับกษัตริย์"
    ],
    "correctIndex": 0,
    "explanation": "อุปัชฌายวัตรคือหน้าที่ศิษย์ปฏิบัติต่ออุปัชฌาย์ สัทธิวิหาริกวัตรคือหน้าที่อุปัชฌาย์ดูแลศิษย์",
    "reference": "วินัยมุข เล่ม ๓ วัตตกถา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-047",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 2 ข้อ 47] 'วัจจกุฎีวัตร' ในหมวดวัตร ๑๔ หมายถึงข้อปฏิบัติเกี่ยวกับเรื่องใด?",
    "options": [
      "มารยาทและระเบียบการใช้ห้องสุขา (ถาน/เวจกุฎี)",
      "การรักษาความสะอาดโรงฉัน",
      "การปัดกวาดลานเจดีย์",
      "การสรงน้ำ"
    ],
    "correctIndex": 0,
    "explanation": "วัจจกุฎีวัตร คือ ข้อปฏิบัติและมารยาทในการเข้าใช้และทำความสะอาดห้องน้ำห้องสุขา",
    "reference": "วินัยมุข เล่ม ๓ วัตตกถา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-048",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 2 ข้อ 48] 'เสนาสนะ' ในทางพระวินัยมุข หมายถึงสิ่งใด?",
    "options": [
      "ที่อยู่อาศัย ที่นอน ที่นั่ง เช่น กุฏิ ศาลา เตียง ตั่ง ฟูก หมอน",
      "เครื่องนุ่งห่มจีวร",
      "อาหารบิณฑบาต",
      "ยารักษาโรค"
    ],
    "correctIndex": 0,
    "explanation": "เสนาสนะ คือ ที่นอนและที่นั่ง กุฏิ เสื่อ เตียง ตั่ง และสถานที่พักอาศัยของภิกษุ",
    "reference": "วินัยมุข เล่ม ๓ เสนาสนขันธกะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-049",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 2 ข้อ 49] 'ครุภัณฑ์' ของสงฆ์ (ของหนักส่วนรวมที่ห้ามแจกจ่าย ห้ามแบ่ง ห้ามขาย) คือสิ่งใด?",
    "options": [
      "ที่ดินวัด กุฏิ วิหาร โบสถ์ ไม้ ปูน เครื่องโลหะหนัก",
      "อาหารบิณฑบาต",
      "ยาหยอดตา",
      "ดอกไม้ธูปเทียน"
    ],
    "correctIndex": 0,
    "explanation": "ครุภัณฑ์ คือ สมบัติส่วนกลางขนาดใหญ่ของสงฆ์ เช่น ที่ดิน กุฏิ ศาลา ห้ามภิกษุแจกจ่ายหรือจำหน่าย",
    "reference": "วินัยมุข เล่ม ๓ เสนาสนขันธกะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-050",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 2 ข้อ 50] 'ลหุภัณฑ์' ของสงฆ์ (ของเบาที่สงฆ์แจกจ่ายแก่ภิกษุได้) คือสิ่งใด?",
    "options": [
      "ผ้าจีวร สบง บาตร มีดโกน เข็มเย็บผ้า ยารักษาโรค อาหาร",
      "ที่ดินวัด",
      "กุฏิสงฆ์",
      "พระอุโบสถ"
    ],
    "correctIndex": 0,
    "explanation": "ลหุภัณฑ์ คือ บริขารและสิ่งของเล็กน้อยที่สามารถนำมาแจกจ่ายแก่ภิกษุผู้จำพรรษาหรือภิกษุไข้ได้",
    "reference": "วินัยมุข เล่ม ๓ เภสัชชขันธกะและเสนาสนะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-051",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 3 ข้อ 51] วินัยมุข เล่ม ๓ เน้นศึกษาเกี่ยวกับเรื่องใดเป็นหลักสำคัญ?",
    "options": [
      "สังฆกรรมและระเบียบปฏิบัติในอภิสมาจารและขันธกะ",
      "ศีล ๕ และศีล ๘",
      "อาบัติปาราชิก ๔",
      "การแปลภาษาบาลี"
    ],
    "correctIndex": 0,
    "explanation": "วินัยมุข เล่ม ๓ อธิบายสังฆกรรม ขันธกะ และวัตรปฏิบัติต่างๆ ในพระวินัยปิฎก",
    "reference": "วินัยมุข เล่ม ๓ สังฆกรรม",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-052",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 3 ข้อ 52] สังฆกรรมมี ๔ ประเภท แบ่งตามลักษณะการตั้งญัตติ ข้อใดมิใช่ ๑ ใน ๔ นั้น?",
    "options": [
      "อัตตาณัติกรรม",
      "อปโลกนกรรม",
      "ญัตติกรรม",
      "ญัตติจตุตถกรรม"
    ],
    "correctIndex": 0,
    "explanation": "สังฆกรรม ๔: อปโลกนกรรม ญัตติกรรม ญัตติดุติยกรรม ญัตติจตุตถกรรม",
    "reference": "วินัยมุข เล่ม ๓ สังฆกรรม ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-053",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 3 ข้อ 53] สังฆกรรมที่ต้องทำด้วย 'ญัตติจตุตถกรรม' ข้อใดถูกต้อง?",
    "options": [
      "การให้อุปสมบท (บวชพระ) และการสวดอัพภาน",
      "การสวดปาฏิโมกข์",
      "การกรานกฐิน",
      "การสมมติเสนาสนะ"
    ],
    "correctIndex": 0,
    "explanation": "การให้อุปสมบท ถอนและผูกสีมา และสวดอัพภาน ต้องทำด้วยญัตติจตุตถกรรม",
    "reference": "วินัยมุข เล่ม ๓ ญัตติจตุตถกรรม",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-054",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 3 ข้อ 54] 'สีมา' เขตแดนสำหรับทำสังฆกรรมของสงฆ์ แบ่งออกเป็น ๒ ประเภทใหญ่คืออะไร?",
    "options": [
      "พัทธสีมา (สีมาที่สงฆ์ผูกเอง) และ อพัทธสีมา (สีมาที่ไม่ได้ผูก เช่น แดนบ้าน แดนน้ำ)",
      "สีมาบนบก และ สีมาในน้ำ",
      "สีมาในโบสถ์ และ นอกโบสถ์",
      "สีมาเล็ก และ สีมาใหญ่"
    ],
    "correctIndex": 0,
    "explanation": "สีมาแบ่งเป็น พัทธสีมา (สงฆ์ผูกด้วยกรรมวาจา) และ อพัทธสีมา (เขตตามธรรมชาติ/กฎหมาย)",
    "reference": "วินัยมุข เล่ม ๓ สีมาขันธกะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-055",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 3 ข้อ 55] 'นิมิต' สำหรับใช้กำหนดเขตพัทธสีมา มีกี่ชนิด?",
    "options": [
      "๘ ชนิด (ภูเขา ศิลา ป่าไม้ ต้นไม้ จอมปลวก หนทาง แม่น้ำ สระน้ำ)",
      "๔ ชนิด",
      "๑๒ ชนิด",
      "๒๐ ชนิด"
    ],
    "correctIndex": 0,
    "explanation": "นิมิตผูกสีมามี ๘ ชนิด ได้แก่ ภูเขา หิน ป่า ต้นไม้ จอมปลวก ทาง แม่น้ำ สระน้ำ",
    "reference": "วินัยมุข เล่ม ๓ สีมาขันธกะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-056",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 3 ข้อ 56] 'อุทกุกเขปสีมา' (สีมาเหนือน้ำ) มีข้อกำหนดระยะห่างจากฝั่งอย่างไร?",
    "options": [
      "ห่างจากฝั่งชั่วบุรุษมีกำลังปานกลางวักน้ำสาดไม่ถึง (ประมาณ ๑ ชั่ววิดน้ำ)",
      "ห่าง ๑ กิโลเมตร",
      "ห่าง ๑๐ เมตร",
      "ต้องอยู่กลางทะเล"
    ],
    "correctIndex": 0,
    "explanation": "อุทกุกเขปสีมาทำบนแพหรือเรือในน้ำธรรมชาติ ห่างจากตลิ่งชั่วบุรุษวักน้ำสาดไม่ถึง",
    "reference": "วินัยมุข เล่ม ๓ อพัทธสีมา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-057",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 3 ข้อ 57] 'กรรมวาจาจารย์' และ 'อนุสาวนาจารย์' ในพิธีอุปสมบททำหน้าที่อะไร?",
    "options": [
      "เป็นพระคู่สวดทำหน้าที่สวดตั้งญัตติและสวดประกาศขอมติสงฆ์ในการรับผู้ขอบวช",
      "เป็นผู้ตัดจีวร",
      "เป็นผู้ให้ศีล ๕",
      "เป็นพยานฝ่ายโยม"
    ],
    "correctIndex": 0,
    "explanation": "พระคู่สวดทำหน้าที่สวดญัตติจตุตถกรรมวาจายกกุลบุตรขึ้นเป็นพระภิกษุ",
    "reference": "วินัยมุข เล่ม ๓ อุปสมบทกรรม",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-058",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 3 ข้อ 58] โรคติดต่อต้องห้าม ๕ ชนิด ในอันตรายิกธรรม ๑๓ ประการมีอะไรบ้าง?",
    "options": [
      "โรคเรื้อน ฝีเปื่อย กลาก มองคร่อ (หืดหอบ) ลมบ้าหมู",
      "หวัด ปวดฟัน ตาแดง ปวดท้อง ปวดหัว",
      "เบาหวาน ความดัน หัวใจ ไต มะเร็ง",
      "เกาต์ ตับ ปอด หนัง กระดูก"
    ],
    "correctIndex": 0,
    "explanation": "กุฏฐัง คัณโฑ กิลาโส โสโส อปมาโร เป็นโรคต้องห้าม ๕ ประการในการบวช",
    "reference": "วินัยมุข เล่ม ๓ อันตรายิกธรรม",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-059",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 3 ข้อ 59] บุคคลประเภทใดที่ 'ห้ามบวชเด็ดขาด' หากบวชแล้วต้องให้สึกทันที?",
    "options": [
      "ผู้ทำอนันตริยกรรม ๕ (ฆ่าพ่อ ฆ่าแม่ ฆ่าพระอรหันต์ ทำร้ายพระพุทธเจ้า ทำสงฆ์แตก) บัณเฑาะก์ ลักเพศ",
      "คนยากจน",
      "คนไม่มีพ่อแม่",
      "คนอ่านหนังสือไม่ออก"
    ],
    "correctIndex": 0,
    "explanation": "ผู้ทำอนันตริยกรรม ๕ และผู้ลักเพศ บัณเฑาะก์ ห้ามอุปสมบทเด็ดขาด",
    "reference": "วินัยมุข เล่ม ๓ อภัพพบุคคล",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-060",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 3 ข้อ 60] 'วุฏฐานวิธี' คือระเบียบปฏิบัติเพื่อออกจากอาบัติหนักประเภทใด?",
    "options": [
      "อาบัติสังฆาทิเสส (อยู่ปริวาส มานัต และอัพภาน)",
      "อาบัติปาราชิก",
      "อาบัติปาจิตตีย์",
      "อาบัติทุกกฏ"
    ],
    "correctIndex": 0,
    "explanation": "วุฏฐานวิธี คือ กรรมวิธีออกจากสังฆาทิเสสด้วยการอยู่ปริวาส มานัต ๖ ราตรี และสวดอัพภาน",
    "reference": "วินัยมุข เล่ม ๓ วุฏฐานวิธี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-061",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 3 ข้อ 61] 'ปริวาส' มีไว้สำหรับภิกษุที่ต้องอาบัติสังฆาทิเสสในกรณีใด?",
    "options": [
      "ภิกษุที่ต้องอาบัติแล้ว 'ปกปิดไว้' ต้องอยู่ปริวาสเท่ากับจำนวนวันที่ตนปกปิด",
      "ภิกษุที่ไม่ยอมรับ",
      "ภิกษุพรรษาเกิน ๒๐",
      "ภิกษุที่ต้องการสึก"
    ],
    "correctIndex": 0,
    "explanation": "ถ้าปกปิดอาบัติไว้กี่วัน ต้องอยู่ปริวาสชดใช้ตามจำนวนวันที่ปิดบังไว้",
    "reference": "วินัยมุข เล่ม ๓ ปริวาส",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-062",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 3 ข้อ 62] 'มานัต' คือการประพฤติวัตรข่มใจเพื่อล้างมลทินสังฆาทิเสส มีกำหนดระยะเวลากี่ราตรี?",
    "options": [
      "๖ ราตรี (๖ คืนเต็ม)",
      "๓ ราตรี",
      "๑๐ ราตรี",
      "๑ เดือน"
    ],
    "correctIndex": 0,
    "explanation": "มานัตมีกำหนด ๖ ราตรี ต้องบอกอาบัติต่อสงฆ์ทุกรูปที่เข้ามาในอาราม",
    "reference": "วินัยมุข เล่ม ๓ มานัต",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-063",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 3 ข้อ 63] 'อุปสมบทกรรม' ในปัจจันตชนบท (แดนไกล) กำหนดให้มีสงฆ์ประชุมอย่างน้อยกี่รูป?",
    "options": [
      "อย่างน้อย ๕ รูป (พระวินัยธร ๑ รูป)",
      "อย่างน้อย ๑๐ รูป",
      "อย่างน้อย ๒๐ รูป",
      "อย่างน้อย ๔ รูป"
    ],
    "correctIndex": 0,
    "explanation": "ในปัจจันตชนบท ทรงผ่อนผันให้ใช้สงฆ์อย่างน้อย ๕ รูป (ในมัชฌิมประเทศใช้ ๑๐ รูป)",
    "reference": "วินัยมุข เล่ม ๓ อุปสมบท",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-064",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 3 ข้อ 64] ภิกษุผู้ได้กรานกฐินถูกต้อง ได้รับอานิสงส์กี่ประการ และขยายเวลาได้นานเท่าใด?",
    "options": [
      "อานิสงส์ ๕ ประการ และขยายเวลาถึงวันเพ็ญเดือน ๔ (๕ เดือน)",
      "อานิสงส์ ๓ ประการ นาน ๑ เดือน",
      "อานิสงส์ ๑๐ ประการ นาน ๑ ปี",
      "อานิสงส์ ๔ ประการ ตลอดพรรษา"
    ],
    "correctIndex": 0,
    "explanation": "ผู้กรานกฐินได้รับอานิสงส์ ๕ ประการ และขยายเวลาอานิสงส์ไปถึงวันเพ็ญเดือน ๔",
    "reference": "วินัยมุข เล่ม ๓ กฐินขันธกะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-065",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 3 ข้อ 65] ผ้าที่นำมาทอดกฐิน ต้องเป็นผ้าชนิดใดตามพระวินัย?",
    "options": [
      "ผ้าขาวใหม่ ผ้าเทียมใหม่ หรือผ้าบังสุกุล ผืนใดผืนหนึ่งในไตรจีวร",
      "ต้องเป็นผ้าไหมทองคำ",
      "ต้องเป็นผ้าเก่า",
      "ต้องเป็นผ้าสำเร็จรูป"
    ],
    "correctIndex": 0,
    "explanation": "ผ้ากฐินต้องเป็นผ้าใหม่หรือผ้าบังสุกุลที่ตัดเย็บย้อมเสร็จในวันนั้นเป็นผ้าผืนใดผืนหนึ่งในไตรจีวร",
    "reference": "วินัยมุข เล่ม ๓ กฐินขันธกะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-066",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 3 ข้อ 66] 'ปวารณากรรม' ในวันออกพรรษา พระภิกษุทำพิธีกล่าวเปิดโอกาสให้ทำสิ่งใด?",
    "options": [
      "เปิดโอกาสให้ภิกษุอื่นว่ากล่าวตักเตือนตนได้ด้วยความเมตตา หากเห็น ได้ยิน หรือสงสัย",
      "กล่าวคำลาบวช",
      "กล่าวคำแบ่งลาภ",
      "กล่าวคำขอพร"
    ],
    "correctIndex": 0,
    "explanation": "ปวารณา คือ การยินยอมเปิดโอกาสให้เพื่อนภิกษุตักเตือนข้อบกพร่องของตนได้",
    "reference": "วินัยมุข เล่ม ๓ ปวารณาขันธกะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-067",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 3 ข้อ 67] 'สัตตาหกรณียะ' คือข้อยกเว้นให้ภิกษุจำพรรษาเดินทางไปค้างแรมนอกวัดได้ไม่เกินกี่วัน?",
    "options": [
      "ไม่เกิน ๗ วัน (๗ ราตรี) โดยไม่ขาดพรรษา",
      "ไม่เกิน ๓ วัน",
      "ไม่เกิน ๑๕ วัน",
      "ไม่เกิน ๑ เดือน"
    ],
    "correctIndex": 0,
    "explanation": "สัตตาหกรณียะ อนุญาตให้ไปค้างแรมด้วยเหตุจำเป็น (เช่น พยาบาลพ่อแม่/ครูบาอาจารย์) ได้ไม่เกิน ๗ วัน",
    "reference": "วินัยมุข เล่ม ๓ วัสสูปนายิกาขันธกะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-068",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 3 ข้อ 68] การอุปสมบทในปัจจุบันของคณะสงฆ์ ใช้วิธีการใดเพียงวิธีเดียว?",
    "options": [
      "ญัตติจตุตถกัมมอุปสัมปทา (โดยสงฆ์ประชุมสวดบวชให้)",
      "เอหิภิกขุอุปสัมปทา",
      "ติสรณคมนูปสัมปทา",
      "โอวาทปาฏิโมกข์"
    ],
    "correctIndex": 0,
    "explanation": "ปัจจุบันใช้วิธีญัตติจตุตถกัมมอุปสัมปทาโดยคณะสงฆ์เพียงวิธีเดียว",
    "reference": "วินัยมุข เล่ม ๓ อุปสัมปทาวิธี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-069",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 3 ข้อ 69] 'วัตร ๑๔' ในขันธกะ ข้อใดคือ 'อาคันตุกวัตร'?",
    "options": [
      "ข้อปฏิบัติสำหรับภิกษุผู้เป็นอาคันตุกะเดินทางมาถึงวัดอื่น",
      "ข้อปฏิบัติของเจ้าถิ่น",
      "ข้อปฏิบัติเวลาฉันข้าว",
      "ข้อปฏิบัติเวลาใช้ห้องน้ำ"
    ],
    "correctIndex": 0,
    "explanation": "อาคันตุกวัตร คือ มารยาทและข้อปฏิบัติที่ภิกษุผู้มาจากถิ่นอื่นพึงกระทำเมื่อถึงวัดอื่น",
    "reference": "วินัยมุข เล่ม ๓ วัตตกถา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-070",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 3 ข้อ 70] 'คามิกวัตร' ตรงข้ามกับอาคันตุกวัตร หมายถึงอะไร?",
    "options": [
      "ข้อปฏิบัติของภิกษุเจ้าถิ่นที่จะเตรียมตัวออกเดินทางไปยังถิ่นอื่น",
      "ข้อปฏิบัติของชาวบ้าน",
      "ข้อปฏิบัติเวลาบิณฑบาต",
      "ข้อปฏิบัติเมื่อไปตลาด"
    ],
    "correctIndex": 0,
    "explanation": "คามิกวัตร คือ ข้อปฏิบัติของภิกษุผู้เตรียมจะเดินทางออกจากวัด พึงเก็บงำเสนาสนะให้เรียบร้อย",
    "reference": "วินัยมุข เล่ม ๓ วัตตกถา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-071",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 3 ข้อ 71] 'อุปัชฌายวัตร' และ 'สัทธิวิหาริกวัตร' คือข้อปฏิบัติระหว่างใครกับใคร?",
    "options": [
      "ข้อปฏิบัติต่างตอบแทนระหว่างพระอุปัชฌาย์กับลูกศิษย์ที่ตนบวชให้",
      "ข้อปฏิบัติระหว่างเจ้าอาวาสกับไวยาวัจกร",
      "ข้อปฏิบัติระหว่างพระกับโยม",
      "ข้อปฏิบัติระหว่างพระกับกษัตริย์"
    ],
    "correctIndex": 0,
    "explanation": "อุปัชฌายวัตรคือหน้าที่ศิษย์ปฏิบัติต่ออุปัชฌาย์ สัทธิวิหาริกวัตรคือหน้าที่อุปัชฌาย์ดูแลศิษย์",
    "reference": "วินัยมุข เล่ม ๓ วัตตกถา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-072",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 3 ข้อ 72] 'วัจจกุฎีวัตร' ในหมวดวัตร ๑๔ หมายถึงข้อปฏิบัติเกี่ยวกับเรื่องใด?",
    "options": [
      "มารยาทและระเบียบการใช้ห้องสุขา (ถาน/เวจกุฎี)",
      "การรักษาความสะอาดโรงฉัน",
      "การปัดกวาดลานเจดีย์",
      "การสรงน้ำ"
    ],
    "correctIndex": 0,
    "explanation": "วัจจกุฎีวัตร คือ ข้อปฏิบัติและมารยาทในการเข้าใช้และทำความสะอาดห้องน้ำห้องสุขา",
    "reference": "วินัยมุข เล่ม ๓ วัตตกถา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-073",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 3 ข้อ 73] 'เสนาสนะ' ในทางพระวินัยมุข หมายถึงสิ่งใด?",
    "options": [
      "ที่อยู่อาศัย ที่นอน ที่นั่ง เช่น กุฏิ ศาลา เตียง ตั่ง ฟูก หมอน",
      "เครื่องนุ่งห่มจีวร",
      "อาหารบิณฑบาต",
      "ยารักษาโรค"
    ],
    "correctIndex": 0,
    "explanation": "เสนาสนะ คือ ที่นอนและที่นั่ง กุฏิ เสื่อ เตียง ตั่ง และสถานที่พักอาศัยของภิกษุ",
    "reference": "วินัยมุข เล่ม ๓ เสนาสนขันธกะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-074",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 3 ข้อ 74] 'ครุภัณฑ์' ของสงฆ์ (ของหนักส่วนรวมที่ห้ามแจกจ่าย ห้ามแบ่ง ห้ามขาย) คือสิ่งใด?",
    "options": [
      "ที่ดินวัด กุฏิ วิหาร โบสถ์ ไม้ ปูน เครื่องโลหะหนัก",
      "อาหารบิณฑบาต",
      "ยาหยอดตา",
      "ดอกไม้ธูปเทียน"
    ],
    "correctIndex": 0,
    "explanation": "ครุภัณฑ์ คือ สมบัติส่วนกลางขนาดใหญ่ของสงฆ์ เช่น ที่ดิน กุฏิ ศาลา ห้ามภิกษุแจกจ่ายหรือจำหน่าย",
    "reference": "วินัยมุข เล่ม ๓ เสนาสนขันธกะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-075",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 3 ข้อ 75] 'ลหุภัณฑ์' ของสงฆ์ (ของเบาที่สงฆ์แจกจ่ายแก่ภิกษุได้) คือสิ่งใด?",
    "options": [
      "ผ้าจีวร สบง บาตร มีดโกน เข็มเย็บผ้า ยารักษาโรค อาหาร",
      "ที่ดินวัด",
      "กุฏิสงฆ์",
      "พระอุโบสถ"
    ],
    "correctIndex": 0,
    "explanation": "ลหุภัณฑ์ คือ บริขารและสิ่งของเล็กน้อยที่สามารถนำมาแจกจ่ายแก่ภิกษุผู้จำพรรษาหรือภิกษุไข้ได้",
    "reference": "วินัยมุข เล่ม ๓ เภสัชชขันธกะและเสนาสนะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-076",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 4 ข้อ 76] วินัยมุข เล่ม ๓ เน้นศึกษาเกี่ยวกับเรื่องใดเป็นหลักสำคัญ?",
    "options": [
      "สังฆกรรมและระเบียบปฏิบัติในอภิสมาจารและขันธกะ",
      "ศีล ๕ และศีล ๘",
      "อาบัติปาราชิก ๔",
      "การแปลภาษาบาลี"
    ],
    "correctIndex": 0,
    "explanation": "วินัยมุข เล่ม ๓ อธิบายสังฆกรรม ขันธกะ และวัตรปฏิบัติต่างๆ ในพระวินัยปิฎก",
    "reference": "วินัยมุข เล่ม ๓ สังฆกรรม",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-077",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 4 ข้อ 77] สังฆกรรมมี ๔ ประเภท แบ่งตามลักษณะการตั้งญัตติ ข้อใดมิใช่ ๑ ใน ๔ นั้น?",
    "options": [
      "อัตตาณัติกรรม",
      "อปโลกนกรรม",
      "ญัตติกรรม",
      "ญัตติจตุตถกรรม"
    ],
    "correctIndex": 0,
    "explanation": "สังฆกรรม ๔: อปโลกนกรรม ญัตติกรรม ญัตติดุติยกรรม ญัตติจตุตถกรรม",
    "reference": "วินัยมุข เล่ม ๓ สังฆกรรม ๔",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-078",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 4 ข้อ 78] สังฆกรรมที่ต้องทำด้วย 'ญัตติจตุตถกรรม' ข้อใดถูกต้อง?",
    "options": [
      "การให้อุปสมบท (บวชพระ) และการสวดอัพภาน",
      "การสวดปาฏิโมกข์",
      "การกรานกฐิน",
      "การสมมติเสนาสนะ"
    ],
    "correctIndex": 0,
    "explanation": "การให้อุปสมบท ถอนและผูกสีมา และสวดอัพภาน ต้องทำด้วยญัตติจตุตถกรรม",
    "reference": "วินัยมุข เล่ม ๓ ญัตติจตุตถกรรม",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-079",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 4 ข้อ 79] 'สีมา' เขตแดนสำหรับทำสังฆกรรมของสงฆ์ แบ่งออกเป็น ๒ ประเภทใหญ่คืออะไร?",
    "options": [
      "พัทธสีมา (สีมาที่สงฆ์ผูกเอง) และ อพัทธสีมา (สีมาที่ไม่ได้ผูก เช่น แดนบ้าน แดนน้ำ)",
      "สีมาบนบก และ สีมาในน้ำ",
      "สีมาในโบสถ์ และ นอกโบสถ์",
      "สีมาเล็ก และ สีมาใหญ่"
    ],
    "correctIndex": 0,
    "explanation": "สีมาแบ่งเป็น พัทธสีมา (สงฆ์ผูกด้วยกรรมวาจา) และ อพัทธสีมา (เขตตามธรรมชาติ/กฎหมาย)",
    "reference": "วินัยมุข เล่ม ๓ สีมาขันธกะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-080",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 4 ข้อ 80] 'นิมิต' สำหรับใช้กำหนดเขตพัทธสีมา มีกี่ชนิด?",
    "options": [
      "๘ ชนิด (ภูเขา ศิลา ป่าไม้ ต้นไม้ จอมปลวก หนทาง แม่น้ำ สระน้ำ)",
      "๔ ชนิด",
      "๑๒ ชนิด",
      "๒๐ ชนิด"
    ],
    "correctIndex": 0,
    "explanation": "นิมิตผูกสีมามี ๘ ชนิด ได้แก่ ภูเขา หิน ป่า ต้นไม้ จอมปลวก ทาง แม่น้ำ สระน้ำ",
    "reference": "วินัยมุข เล่ม ๓ สีมาขันธกะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-081",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 4 ข้อ 81] 'อุทกุกเขปสีมา' (สีมาเหนือน้ำ) มีข้อกำหนดระยะห่างจากฝั่งอย่างไร?",
    "options": [
      "ห่างจากฝั่งชั่วบุรุษมีกำลังปานกลางวักน้ำสาดไม่ถึง (ประมาณ ๑ ชั่ววิดน้ำ)",
      "ห่าง ๑ กิโลเมตร",
      "ห่าง ๑๐ เมตร",
      "ต้องอยู่กลางทะเล"
    ],
    "correctIndex": 0,
    "explanation": "อุทกุกเขปสีมาทำบนแพหรือเรือในน้ำธรรมชาติ ห่างจากตลิ่งชั่วบุรุษวักน้ำสาดไม่ถึง",
    "reference": "วินัยมุข เล่ม ๓ อพัทธสีมา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-082",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 4 ข้อ 82] 'กรรมวาจาจารย์' และ 'อนุสาวนาจารย์' ในพิธีอุปสมบททำหน้าที่อะไร?",
    "options": [
      "เป็นพระคู่สวดทำหน้าที่สวดตั้งญัตติและสวดประกาศขอมติสงฆ์ในการรับผู้ขอบวช",
      "เป็นผู้ตัดจีวร",
      "เป็นผู้ให้ศีล ๕",
      "เป็นพยานฝ่ายโยม"
    ],
    "correctIndex": 0,
    "explanation": "พระคู่สวดทำหน้าที่สวดญัตติจตุตถกรรมวาจายกกุลบุตรขึ้นเป็นพระภิกษุ",
    "reference": "วินัยมุข เล่ม ๓ อุปสมบทกรรม",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-083",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 4 ข้อ 83] โรคติดต่อต้องห้าม ๕ ชนิด ในอันตรายิกธรรม ๑๓ ประการมีอะไรบ้าง?",
    "options": [
      "โรคเรื้อน ฝีเปื่อย กลาก มองคร่อ (หืดหอบ) ลมบ้าหมู",
      "หวัด ปวดฟัน ตาแดง ปวดท้อง ปวดหัว",
      "เบาหวาน ความดัน หัวใจ ไต มะเร็ง",
      "เกาต์ ตับ ปอด หนัง กระดูก"
    ],
    "correctIndex": 0,
    "explanation": "กุฏฐัง คัณโฑ กิลาโส โสโส อปมาโร เป็นโรคต้องห้าม ๕ ประการในการบวช",
    "reference": "วินัยมุข เล่ม ๓ อันตรายิกธรรม",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-084",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 4 ข้อ 84] บุคคลประเภทใดที่ 'ห้ามบวชเด็ดขาด' หากบวชแล้วต้องให้สึกทันที?",
    "options": [
      "ผู้ทำอนันตริยกรรม ๕ (ฆ่าพ่อ ฆ่าแม่ ฆ่าพระอรหันต์ ทำร้ายพระพุทธเจ้า ทำสงฆ์แตก) บัณเฑาะก์ ลักเพศ",
      "คนยากจน",
      "คนไม่มีพ่อแม่",
      "คนอ่านหนังสือไม่ออก"
    ],
    "correctIndex": 0,
    "explanation": "ผู้ทำอนันตริยกรรม ๕ และผู้ลักเพศ บัณเฑาะก์ ห้ามอุปสมบทเด็ดขาด",
    "reference": "วินัยมุข เล่ม ๓ อภัพพบุคคล",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-085",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 4 ข้อ 85] 'วุฏฐานวิธี' คือระเบียบปฏิบัติเพื่อออกจากอาบัติหนักประเภทใด?",
    "options": [
      "อาบัติสังฆาทิเสส (อยู่ปริวาส มานัต และอัพภาน)",
      "อาบัติปาราชิก",
      "อาบัติปาจิตตีย์",
      "อาบัติทุกกฏ"
    ],
    "correctIndex": 0,
    "explanation": "วุฏฐานวิธี คือ กรรมวิธีออกจากสังฆาทิเสสด้วยการอยู่ปริวาส มานัต ๖ ราตรี และสวดอัพภาน",
    "reference": "วินัยมุข เล่ม ๓ วุฏฐานวิธี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-086",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 4 ข้อ 86] 'ปริวาส' มีไว้สำหรับภิกษุที่ต้องอาบัติสังฆาทิเสสในกรณีใด?",
    "options": [
      "ภิกษุที่ต้องอาบัติแล้ว 'ปกปิดไว้' ต้องอยู่ปริวาสเท่ากับจำนวนวันที่ตนปกปิด",
      "ภิกษุที่ไม่ยอมรับ",
      "ภิกษุพรรษาเกิน ๒๐",
      "ภิกษุที่ต้องการสึก"
    ],
    "correctIndex": 0,
    "explanation": "ถ้าปกปิดอาบัติไว้กี่วัน ต้องอยู่ปริวาสชดใช้ตามจำนวนวันที่ปิดบังไว้",
    "reference": "วินัยมุข เล่ม ๓ ปริวาส",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-087",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 4 ข้อ 87] 'มานัต' คือการประพฤติวัตรข่มใจเพื่อล้างมลทินสังฆาทิเสส มีกำหนดระยะเวลากี่ราตรี?",
    "options": [
      "๖ ราตรี (๖ คืนเต็ม)",
      "๓ ราตรี",
      "๑๐ ราตรี",
      "๑ เดือน"
    ],
    "correctIndex": 0,
    "explanation": "มานัตมีกำหนด ๖ ราตรี ต้องบอกอาบัติต่อสงฆ์ทุกรูปที่เข้ามาในอาราม",
    "reference": "วินัยมุข เล่ม ๓ มานัต",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-088",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 4 ข้อ 88] 'อุปสมบทกรรม' ในปัจจันตชนบท (แดนไกล) กำหนดให้มีสงฆ์ประชุมอย่างน้อยกี่รูป?",
    "options": [
      "อย่างน้อย ๕ รูป (พระวินัยธร ๑ รูป)",
      "อย่างน้อย ๑๐ รูป",
      "อย่างน้อย ๒๐ รูป",
      "อย่างน้อย ๔ รูป"
    ],
    "correctIndex": 0,
    "explanation": "ในปัจจันตชนบท ทรงผ่อนผันให้ใช้สงฆ์อย่างน้อย ๕ รูป (ในมัชฌิมประเทศใช้ ๑๐ รูป)",
    "reference": "วินัยมุข เล่ม ๓ อุปสมบท",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-089",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 4 ข้อ 89] ภิกษุผู้ได้กรานกฐินถูกต้อง ได้รับอานิสงส์กี่ประการ และขยายเวลาได้นานเท่าใด?",
    "options": [
      "อานิสงส์ ๕ ประการ และขยายเวลาถึงวันเพ็ญเดือน ๔ (๕ เดือน)",
      "อานิสงส์ ๓ ประการ นาน ๑ เดือน",
      "อานิสงส์ ๑๐ ประการ นาน ๑ ปี",
      "อานิสงส์ ๔ ประการ ตลอดพรรษา"
    ],
    "correctIndex": 0,
    "explanation": "ผู้กรานกฐินได้รับอานิสงส์ ๕ ประการ และขยายเวลาอานิสงส์ไปถึงวันเพ็ญเดือน ๔",
    "reference": "วินัยมุข เล่ม ๓ กฐินขันธกะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-090",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 4 ข้อ 90] ผ้าที่นำมาทอดกฐิน ต้องเป็นผ้าชนิดใดตามพระวินัย?",
    "options": [
      "ผ้าขาวใหม่ ผ้าเทียมใหม่ หรือผ้าบังสุกุล ผืนใดผืนหนึ่งในไตรจีวร",
      "ต้องเป็นผ้าไหมทองคำ",
      "ต้องเป็นผ้าเก่า",
      "ต้องเป็นผ้าสำเร็จรูป"
    ],
    "correctIndex": 0,
    "explanation": "ผ้ากฐินต้องเป็นผ้าใหม่หรือผ้าบังสุกุลที่ตัดเย็บย้อมเสร็จในวันนั้นเป็นผ้าผืนใดผืนหนึ่งในไตรจีวร",
    "reference": "วินัยมุข เล่ม ๓ กฐินขันธกะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-091",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 4 ข้อ 91] 'ปวารณากรรม' ในวันออกพรรษา พระภิกษุทำพิธีกล่าวเปิดโอกาสให้ทำสิ่งใด?",
    "options": [
      "เปิดโอกาสให้ภิกษุอื่นว่ากล่าวตักเตือนตนได้ด้วยความเมตตา หากเห็น ได้ยิน หรือสงสัย",
      "กล่าวคำลาบวช",
      "กล่าวคำแบ่งลาภ",
      "กล่าวคำขอพร"
    ],
    "correctIndex": 0,
    "explanation": "ปวารณา คือ การยินยอมเปิดโอกาสให้เพื่อนภิกษุตักเตือนข้อบกพร่องของตนได้",
    "reference": "วินัยมุข เล่ม ๓ ปวารณาขันธกะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-092",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 4 ข้อ 92] 'สัตตาหกรณียะ' คือข้อยกเว้นให้ภิกษุจำพรรษาเดินทางไปค้างแรมนอกวัดได้ไม่เกินกี่วัน?",
    "options": [
      "ไม่เกิน ๗ วัน (๗ ราตรี) โดยไม่ขาดพรรษา",
      "ไม่เกิน ๓ วัน",
      "ไม่เกิน ๑๕ วัน",
      "ไม่เกิน ๑ เดือน"
    ],
    "correctIndex": 0,
    "explanation": "สัตตาหกรณียะ อนุญาตให้ไปค้างแรมด้วยเหตุจำเป็น (เช่น พยาบาลพ่อแม่/ครูบาอาจารย์) ได้ไม่เกิน ๗ วัน",
    "reference": "วินัยมุข เล่ม ๓ วัสสูปนายิกาขันธกะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-093",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๓",
    "question": "[ตอนที่ 4 ข้อ 93] การอุปสมบทในปัจจุบันของคณะสงฆ์ ใช้วิธีการใดเพียงวิธีเดียว?",
    "options": [
      "ญัตติจตุตถกัมมอุปสัมปทา (โดยสงฆ์ประชุมสวดบวชให้)",
      "เอหิภิกขุอุปสัมปทา",
      "ติสรณคมนูปสัมปทา",
      "โอวาทปาฏิโมกข์"
    ],
    "correctIndex": 0,
    "explanation": "ปัจจุบันใช้วิธีญัตติจตุตถกัมมอุปสัมปทาโดยคณะสงฆ์เพียงวิธีเดียว",
    "reference": "วินัยมุข เล่ม ๓ อุปสัมปทาวิธี",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-094",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๔",
    "question": "[ตอนที่ 4 ข้อ 94] 'วัตร ๑๔' ในขันธกะ ข้อใดคือ 'อาคันตุกวัตร'?",
    "options": [
      "ข้อปฏิบัติสำหรับภิกษุผู้เป็นอาคันตุกะเดินทางมาถึงวัดอื่น",
      "ข้อปฏิบัติของเจ้าถิ่น",
      "ข้อปฏิบัติเวลาฉันข้าว",
      "ข้อปฏิบัติเวลาใช้ห้องน้ำ"
    ],
    "correctIndex": 0,
    "explanation": "อาคันตุกวัตร คือ มารยาทและข้อปฏิบัติที่ภิกษุผู้มาจากถิ่นอื่นพึงกระทำเมื่อถึงวัดอื่น",
    "reference": "วินัยมุข เล่ม ๓ วัตตกถา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-095",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๕",
    "question": "[ตอนที่ 4 ข้อ 95] 'คามิกวัตร' ตรงข้ามกับอาคันตุกวัตร หมายถึงอะไร?",
    "options": [
      "ข้อปฏิบัติของภิกษุเจ้าถิ่นที่จะเตรียมตัวออกเดินทางไปยังถิ่นอื่น",
      "ข้อปฏิบัติของชาวบ้าน",
      "ข้อปฏิบัติเวลาบิณฑบาต",
      "ข้อปฏิบัติเมื่อไปตลาด"
    ],
    "correctIndex": 0,
    "explanation": "คามิกวัตร คือ ข้อปฏิบัติของภิกษุผู้เตรียมจะเดินทางออกจากวัด พึงเก็บงำเสนาสนะให้เรียบร้อย",
    "reference": "วินัยมุข เล่ม ๓ วัตตกถา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-096",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "แนวข้อสอบ",
    "question": "[ตอนที่ 4 ข้อ 96] 'อุปัชฌายวัตร' และ 'สัทธิวิหาริกวัตร' คือข้อปฏิบัติระหว่างใครกับใคร?",
    "options": [
      "ข้อปฏิบัติต่างตอบแทนระหว่างพระอุปัชฌาย์กับลูกศิษย์ที่ตนบวชให้",
      "ข้อปฏิบัติระหว่างเจ้าอาวาสกับไวยาวัจกร",
      "ข้อปฏิบัติระหว่างพระกับโยม",
      "ข้อปฏิบัติระหว่างพระกับกษัตริย์"
    ],
    "correctIndex": 0,
    "explanation": "อุปัชฌายวัตรคือหน้าที่ศิษย์ปฏิบัติต่ออุปัชฌาย์ สัทธิวิหาริกวัตรคือหน้าที่อุปัชฌาย์ดูแลศิษย์",
    "reference": "วินัยมุข เล่ม ๓ วัตตกถา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-097",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๕๙",
    "question": "[ตอนที่ 4 ข้อ 97] 'วัจจกุฎีวัตร' ในหมวดวัตร ๑๔ หมายถึงข้อปฏิบัติเกี่ยวกับเรื่องใด?",
    "options": [
      "มารยาทและระเบียบการใช้ห้องสุขา (ถาน/เวจกุฎี)",
      "การรักษาความสะอาดโรงฉัน",
      "การปัดกวาดลานเจดีย์",
      "การสรงน้ำ"
    ],
    "correctIndex": 0,
    "explanation": "วัจจกุฎีวัตร คือ ข้อปฏิบัติและมารยาทในการเข้าใช้และทำความสะอาดห้องน้ำห้องสุขา",
    "reference": "วินัยมุข เล่ม ๓ วัตตกถา",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-098",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๐",
    "question": "[ตอนที่ 4 ข้อ 98] 'เสนาสนะ' ในทางพระวินัยมุข หมายถึงสิ่งใด?",
    "options": [
      "ที่อยู่อาศัย ที่นอน ที่นั่ง เช่น กุฏิ ศาลา เตียง ตั่ง ฟูก หมอน",
      "เครื่องนุ่งห่มจีวร",
      "อาหารบิณฑบาต",
      "ยารักษาโรค"
    ],
    "correctIndex": 0,
    "explanation": "เสนาสนะ คือ ที่นอนและที่นั่ง กุฏิ เสื่อ เตียง ตั่ง และสถานที่พักอาศัยของภิกษุ",
    "reference": "วินัยมุข เล่ม ๓ เสนาสนขันธกะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-099",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๑",
    "question": "[ตอนที่ 4 ข้อ 99] 'ครุภัณฑ์' ของสงฆ์ (ของหนักส่วนรวมที่ห้ามแจกจ่าย ห้ามแบ่ง ห้ามขาย) คือสิ่งใด?",
    "options": [
      "ที่ดินวัด กุฏิ วิหาร โบสถ์ ไม้ ปูน เครื่องโลหะหนัก",
      "อาหารบิณฑบาต",
      "ยาหยอดตา",
      "ดอกไม้ธูปเทียน"
    ],
    "correctIndex": 0,
    "explanation": "ครุภัณฑ์ คือ สมบัติส่วนกลางขนาดใหญ่ของสงฆ์ เช่น ที่ดิน กุฏิ ศาลา ห้ามภิกษุแจกจ่ายหรือจำหน่าย",
    "reference": "วินัยมุข เล่ม ๓ เสนาสนขันธกะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  },
  {
    "id": "ek-v-100",
    "grade": "เอก",
    "subject": "วินัย",
    "year": "๒๕๖๒",
    "question": "[ตอนที่ 4 ข้อ 100] 'ลหุภัณฑ์' ของสงฆ์ (ของเบาที่สงฆ์แจกจ่ายแก่ภิกษุได้) คือสิ่งใด?",
    "options": [
      "ผ้าจีวร สบง บาตร มีดโกน เข็มเย็บผ้า ยารักษาโรค อาหาร",
      "ที่ดินวัด",
      "กุฏิสงฆ์",
      "พระอุโบสถ"
    ],
    "correctIndex": 0,
    "explanation": "ลหุภัณฑ์ คือ บริขารและสิ่งของเล็กน้อยที่สามารถนำมาแจกจ่ายแก่ภิกษุผู้จำพรรษาหรือภิกษุไข้ได้",
    "reference": "วินัยมุข เล่ม ๓ เภสัชชขันธกะและเสนาสนะ",
    "sourceName": "ข้อสอบจริงสนามหลวง (watpamahachai.org)",
    "sourceUrl": "https://drive.google.com/file/d/193Opw-NHXeQmbXKK_cNVhvuiMa8BVWLQ/view?usp=drive_link"
  }
];
