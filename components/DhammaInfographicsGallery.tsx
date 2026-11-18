'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  Layers, 
  ZoomIn, 
  X, 
  BookOpen, 
  GraduationCap, 
  Award, 
  Printer, 
  Download, 
  ChevronRight,
  Filter
} from 'lucide-react';
import { DhammaIllustration, IllustrationId } from '@/components/DhammaIllustrations';

interface InfographicItem {
  id: IllustrationId;
  title: string;
  category: 'dhamma' | 'buddha' | 'ceremony' | 'vinai' | 'kratu';
  categoryLabel: string;
  tag: string;
  summary: string;
}

export const INFOGRAPHICS_LIST: InfographicItem[] = [
  // ธรรมวิภาค
  {
    id: 'sati-sampajanna',
    title: 'สติ และ สัมปชัญญะ (ธรรมมีอุปการะมาก)',
    category: 'dhamma',
    categoryLabel: 'ธรรมวิภาค',
    tag: 'หมวด ๒',
    summary: 'สติระลึกได้ก่อนทำ สัมปชัญญะรู้ตัวขณะกระทำ อุปมาดุจหางเสือและนายท้ายเรือ'
  },
  {
    id: 'hiri-ottappa',
    title: 'หิริ และ โอตตัปปะ (ธรรมคุ้มครองโลก)',
    category: 'dhamma',
    categoryLabel: 'ธรรมวิภาค',
    tag: 'หมวด ๒',
    summary: 'หิริละอายใจตน โอตตัปปะกลัวบาปต่อโลก เปรียบดุจเหล็กเปื้อนคูถและเหล็กร้อนแดง'
  },
  {
    id: 'pubbakari',
    title: 'ขันติ-โสรัจจะ & บุพพการี-กตัญญูกตเวที',
    category: 'dhamma',
    categoryLabel: 'ธรรมวิภาค',
    tag: 'หมวด ๒',
    summary: 'ธรรมอันทำให้งาม และบุคคลผู้หาได้ยาก ๒ ประการในโลก'
  },
  {
    id: 'ratana-three',
    title: 'พระรัตนตรัย ๓ ประการ (สรณะอันเกษม)',
    category: 'dhamma',
    categoryLabel: 'ธรรมวิภาค',
    tag: 'หมวด ๓',
    summary: 'พระพุทธคุณ ๓, พระธรรมคุณ ๖ และพระสังฆคุณ ๙ ที่พึ่งอันประเสริฐสุด'
  },
  {
    id: 'ovada-patimokkha',
    title: 'โอวาทปาติโมกข์ ๓ (หัวใจพระพุทธศาสนา)',
    category: 'dhamma',
    categoryLabel: 'ธรรมวิภาค',
    tag: 'หมวด ๓',
    summary: 'ไม่ทำบาปทั้งปวง ทำกุศลให้ถึงพร้อม ทำจิตของตนให้ผ่องแผ้วบริสุทธิ์'
  },
  {
    id: 'tri-sikha',
    title: 'ไตรสิกขา ๓ (ศีล สมาธิ ปัญญา)',
    category: 'dhamma',
    categoryLabel: 'ธรรมวิภาค',
    tag: 'หมวด ๓',
    summary: 'อธิสีลสิกขา อธิจิตตสิกขา อธิปัญญาสิกขา กระบวนการพัฒนาจิตสู่นิพพาน'
  },
  {
    id: 'kusal-akusal',
    title: 'อกุศลมูล ๓ vs กุศลมูล ๓',
    category: 'dhamma',
    categoryLabel: 'ธรรมวิภาค',
    tag: 'หมวด ๓',
    summary: 'รากเหง้าความชั่ว (โลภ โกรธ หลง) ปะทะ รากเหง้าความดี (อโลภะ อโทสะ อโมหะ)'
  },
  {
    id: 'four-noble-truths',
    title: 'อริยสัจ ๔: ความจริงอันประเสริฐ',
    category: 'dhamma',
    categoryLabel: 'ธรรมวิภาค',
    tag: 'หมวด ๔',
    summary: 'ทุกข์ควรรู้ สมุทัยควรละ นิโรธควรทำให้แจ้ง มรรคควรเจริญลงมือปฏิบัติ'
  },
  {
    id: 'iddhipada-four',
    title: 'อิทธิบาท ๔: หนทางสู่ความสำเร็จ',
    category: 'dhamma',
    categoryLabel: 'ธรรมวิภาค',
    tag: 'หมวด ๔',
    summary: 'ฉันทะ (ใจรัก) วิริยะ (พากเพียร) จิตตะ (จดจ่อ) วิมังสา (ทบทวนพัฒนา)'
  },
  {
    id: 'brahmavihara-four',
    title: 'พรหมวิหาร ๔: ธรรมประจำใจผู้ประเสริฐ',
    category: 'dhamma',
    categoryLabel: 'ธรรมวิภาค',
    tag: 'หมวด ๔',
    summary: 'เมตตา กรุณา มุทิตา อุเบกขา ธรรมคุ้มครองจิตและสร้างสันติภาพ'
  },
  {
    id: 'sangahavatthu-four',
    title: 'สังคหวัตถุ ๔: ธรรมเครื่องยึดเหนี่ยวใจคน',
    category: 'dhamma',
    categoryLabel: 'ธรรมวิภาค',
    tag: 'หมวด ๔',
    summary: 'ทาน (ให้) ปิยวาจา (พูดดี) อัตถจริยา (ช่วยงาน) สมานัตตตา (สม่ำเสมอ)'
  },
  {
    id: 'sila-dhamma-five',
    title: 'เบญจศีล ๕ คู่กับ เบญจธรรม ๕',
    category: 'dhamma',
    categoryLabel: 'ธรรมวิภาค',
    tag: 'หมวด ๕',
    summary: 'ตารางเปรียบเทียบข้อห้าม (ศีล) คู่กับข้อปฏิบัติเกื้อหนุน (ธรรม) ข้อต่อข้อ'
  },
  {
    id: 'khandha-five',
    title: 'เบญจขันธ์ ๕: กองแห่งชีวิต (รูป ๑ นาม ๔)',
    category: 'dhamma',
    categoryLabel: 'ธรรมวิภาค',
    tag: 'หมวด ๕',
    summary: 'รูปขันธ์ (กาย) และ นามขันธ์ (เวทนา สัญญา สังขาร วิญญาณ)'
  },
  {
    id: 'magga-eight',
    title: 'อริยมรรคมีองค์ ๘ (มัชฌิมาปฏิปทา)',
    category: 'dhamma',
    categoryLabel: 'ธรรมวิภาค',
    tag: 'หมวด ๘',
    summary: 'ทางสายกลาง ๘ ประการ สงเคราะห์ลงในไตรสิกขา (ปัญญา ๒, ศีล ๓, สมาธิ ๓)'
  },
  {
    id: 'lokadhamma-eight',
    title: 'โลกธรรม ๘: ธรรมดาประจำโลก',
    category: 'dhamma',
    categoryLabel: 'ธรรมวิภาค',
    tag: 'หมวด ๘',
    summary: 'อิฏฐารมณ์ ๔ (ลาภ ยศ สรรเสริญ สุข) vs อนิฏฐารมณ์ ๔ (เสื่อมลาภ เสื่อมยศ นินทา ทุกข์)'
  },
  {
    id: 'barami-ten',
    title: 'บารมี ๑๐ ทัศ: คุณธรรมสร้างมหาบุรุษ',
    category: 'dhamma',
    categoryLabel: 'ธรรมวิภาค',
    tag: 'หมวด ๑๐',
    summary: 'ทาน ศีล เนกขัมมะ ปัญญา วิริยะ ขันติ สัจจะ อธิษฐาน เมตตา อุเบกขา'
  },
  {
    id: 'kammpath-ten',
    title: 'กุศลกรรมบถ ๑๐ & อกุศลกรรมบถ ๑๐',
    category: 'dhamma',
    categoryLabel: 'ธรรมวิภาค',
    tag: 'หมวด ๑๐',
    summary: 'ทางแห่งการทำความดีและความชั่วผ่าน ๓ ทวาร: กาย ๓ วาจา ๔ ใจ ๓'
  },
  {
    id: 'boon-ten',
    title: 'บุญกิริยาวัตถุ ๑๐: ทางทำบุญ ๑๐ วิธี',
    category: 'dhamma',
    categoryLabel: 'ธรรมวิภาค',
    tag: 'หมวด ๑๐',
    summary: 'ทานมัย สีลมัย ภาวนามัย อ่อนน้อม ช่วยงาน อุทิศบุญ อนุโมทนา ฟังธรรม เทศนา เห็นชอบ'
  },
  {
    id: 'dittadhamma-four',
    title: 'ทิฏฐธัมมิกัตถประโยชน์ ๔ (หัวใจเศรษฐี อุ อา กะ สะ)',
    category: 'dhamma',
    categoryLabel: 'ธรรมวิภาค',
    tag: 'คิหิปฏิบัติ',
    summary: 'อุฏฐานสัมปทา (ขยัน) อารักขสัมปทา (รักษา) กัลยาณมิตตตา (มิตรดี) สมชีวิตา (พอดี)'
  },
  {
    id: 'friends-compare',
    title: 'มิตรแท้ ๔ vs มิตรปฏิรูป ๔ (วิธีดูคน)',
    category: 'dhamma',
    categoryLabel: 'ธรรมวิภาค',
    tag: 'คิหิปฏิบัติ',
    summary: 'แยกแยะคนปอกลอก ดีแต่พูด ประจบ ชวนฉิบหาย ออกจากมิตรดีมีอุปการะ'
  },
  {
    id: 'apayamuk-six',
    title: 'อบายมุข ๖: ปากทางแห่งความฉิบหาย',
    category: 'dhamma',
    categoryLabel: 'ธรรมวิภาค',
    tag: 'คิหิปฏิบัติ',
    summary: 'ดื่มน้ำเมา เที่ยวกลางคืน เที่ยวดูการละเล่น เล่นการพนัน คบคนชั่ว เกียจคร้าน'
  },
  {
    id: 'direction-six',
    title: 'ทิศ ๖: บุคคลรอบตัวและหน้าที่พึงปฏิบัติ',
    category: 'dhamma',
    categoryLabel: 'ธรรมวิภาค',
    tag: 'คิหิปฏิบัติ',
    summary: 'พ่อแม่ (หน้า) ครู (ขวา) บุตรภรรยา (หลัง) เพื่อน (ซ้าย) คนงาน (ล่าง) พระสงฆ์ (บน)'
  },
  {
    id: 'sappurisa-seven',
    title: 'สัปปุริสธรรม ๗: คุณสมบัติของคนดีตามหลักพุทธศาสนา',
    category: 'dhamma',
    categoryLabel: 'ธรรมวิภาค',
    tag: 'หมวด ๗',
    summary: 'รู้หลัก (ธัมมัญญุตา), รู้ผล (อัตถัญญุตา), รู้ตน, รู้ประมาณ, รู้กาล, รู้ชุมชน, รู้เลือกบุคคล'
  },

  // พุทธประวัติ
  {
    id: 'sakya-birth',
    title: 'ศากยวงศ์ และการประสูติของเจ้าชายสิทธัตถะ',
    category: 'buddha',
    categoryLabel: 'พุทธประวัติ',
    tag: 'ปริเฉท ๑',
    summary: 'ประสูติวันเพ็ญเดือน ๖ ณ สวนลุมพินีวัน ดำเนิน ๗ ก้าว เปล่งอาสภิวาจา'
  },
  {
    id: 'devaduta-renunciation',
    title: 'เทวทูต ๔ และการเสด็จออกมหาภิเนษกรมณ์',
    category: 'buddha',
    categoryLabel: 'พุทธประวัติ',
    tag: 'ปริเฉท ๒',
    summary: 'ทอดพระเนตร คนแก่ คนเจ็บ คนตาย บรรพชิต สละราชสมบัติออกบวชริมฝั่งแม่น้ำอโนมา'
  },
  {
    id: 'enlightenment-bodhi',
    title: 'ทุกรกิริยา ๖ ปี และการตรัสรู้ธรรมใต้ต้นโพธิ์',
    category: 'buddha',
    categoryLabel: 'พุทธประวัติ',
    tag: 'ปริเฉท ๓',
    summary: 'ชนะพญามาร บรรลุวิชชา ๓ ในยามทั้งสาม ตรัสรู้อนุตตรสัมมาสัมโพธิญาณ'
  },
  {
    id: 'dhammacakka-first-sermon',
    title: 'ปฐมเทศนา ธัมมจักกัปปวัตตนสูตร',
    category: 'buddha',
    categoryLabel: 'พุทธประวัติ',
    tag: 'ปริเฉท ๔',
    summary: 'วันอาสาฬหบูชา โปรดปัญจวัคคีย์ พระอัญญาโกณฑัญญะได้ดวงตาเห็นธรรม พระรัตนตรัยครบองค์ ๓'
  },
  {
    id: 'anatta-sermon',
    title: 'อนัตตลักขณสูตร โปรดปัญจวัคคีย์สำเร็จพระอรหันต์',
    category: 'buddha',
    categoryLabel: 'พุทธประวัติ',
    tag: 'ปริเฉท ๔',
    summary: 'ชี้ขันธ์ ๕ เป็นอนัตตา ปัญจวัคคีย์บรรลุพระอรหันต์ เกิดพระอรหันต์ ๖ องค์แรกในโลก'
  },
  {
    id: 'sixty-monks-mission',
    title: 'การส่งพระสาวก ๖๐ รูปไปประกาศพระศาสนา',
    category: 'buddha',
    categoryLabel: 'พุทธประวัติ',
    tag: 'ปริเฉท ๔',
    summary: '"จรถ ภิกฺขเว จาริกํ..." กองทัพธรรมกลุ่มแรกจาริกเผยแผ่โดยไม่ไปทางเดียวกันสองรูป'
  },
  {
    id: 'first-temple-veluvana',
    title: 'พระเวฬุวันมหาวิหาร วัดแรกในพระพุทธศาสนา',
    category: 'buddha',
    categoryLabel: 'พุทธประวัติ',
    tag: 'ปริเฉท ๕',
    summary: 'พระเจ้าพิมพิสารถวายสวนป่าไผ่ ณ กรุงราชคฤห์ เป็นสังฆารามแห่งแรก'
  },
  {
    id: 'four-holy-days',
    title: 'วันสำคัญทางพระพุทธศาสนา ๔ วันหลัก',
    category: 'buddha',
    categoryLabel: 'พุทธประวัติ',
    tag: 'วันสำคัญ',
    summary: 'วิสาขบูชา (เดือน ๖), มาฆบูชา (เดือน ๓), อาสาฬหบูชา (เดือน ๘), อัฐมีบูชา (แรม ๘ ค่ำ เดือน ๖)'
  },
  {
    id: 'buddha-disciples',
    title: 'พระอัครสาวกและพระเถระสำคัญในพุทธกาล',
    category: 'buddha',
    categoryLabel: 'พุทธประวัติ',
    tag: 'พระสาวก',
    summary: 'สารีบุตร (ปัญญา) โมคคัลลานะ (ฤทธิ์) อานนท์ (พหูสูต) มหากัสสปะ (ธุดงค์)'
  },

  // ศาสนพิธี
  {
    id: 'ceremony-types',
    title: 'ศาสนพิธี ๔ หมวด (กุศล, บุญ, ทาน, ปกิณณกะ)',
    category: 'ceremony',
    categoryLabel: 'ศาสนพิธี',
    tag: 'หมวดหมู่',
    summary: 'โครงสร้างแบบแผนพิธีกรรมทางพระพุทธศาสนาตามหลักสูตรสนามหลวง'
  },
  {
    id: 'ceremony-monkhol-a-monkhol',
    title: 'งานมงคล vs งานอวมงคล (จุดเปรียบเทียบออกสอบ)',
    category: 'ceremony',
    categoryLabel: 'ศาสนพิธี',
    tag: 'บุญพิธี',
    summary: 'จำนวนพระ โต๊ะหมู่บูชา ด้ายสายสิญจน์ น้ำพระพุทธมนต์ และระเบียบอาราธนา'
  },
  {
    id: 'ceremony-kathina',
    title: 'พิธีทอดกฐินและอานิสงส์กฐิน ๕ ประการ',
    category: 'ceremony',
    categoryLabel: 'ศาสนพิธี',
    tag: 'ทานพิธี',
    summary: 'กาลทาน ๑ เดือนเต็ม พระสงฆ์จำพรรษาครบ ๓ เดือนอย่างน้อย ๕ รูป'
  },
  {
    id: 'chants-paritta',
    title: 'รวมคำอาราธนา (ศีล ๕, ศีล ๘, พระปริตร, พระธรรม)',
    category: 'ceremony',
    categoryLabel: 'ศาสนพิธี',
    tag: 'บทอาราธนา',
    summary: 'ระเบียบการกล่าวคำอาราธนาอย่างถูกต้องตามแบบแผนของคณะสงฆ์'
  },
  {
    id: 'dāna-words',
    title: 'รวมคำถวายทานสำคัญ (สังฆทาน, ผ้าป่า, กฐิน)',
    category: 'ceremony',
    categoryLabel: 'ศาสนพิธี',
    tag: 'ทานพิธี',
    summary: 'คำกล่าวภาษาบาลีและคำแปลในการถวายทานเพื่อสงฆ์'
  },

  // วินัยมุข
  {
    id: 'vinaya-seven-apatti',
    title: 'โครงสร้างพระวินัย สิกขาบท ๒๒๗ และอาบัติ ๗ กอง',
    category: 'vinai',
    categoryLabel: 'วินัยมุข',
    tag: 'บทนำวินัย',
    summary: 'ปาราชิก สังฆาทิเสส ถุลลัจจัย ปาจิตตีย์ ปาฏิเทสนียะ ทุกกฏ ทุพภาษิต'
  },
  {
    id: 'parajika-four',
    title: 'ปาราชิก ๔: สิกขาบทที่ทำให้ขาดจากความเป็นภิกษุ',
    category: 'vinai',
    categoryLabel: 'วินัยมุข',
    tag: 'ปาราชิก',
    summary: 'เสพเมถุน ๑ ลักทรัพย์ ๕ มาสก ๑ ฆ่ามนุษย์ ๑ อวดอุตตริมนุสสธรรมไม่มีจริง ๑'
  },
  {
    id: 'sanghadisesa-steps',
    title: 'สังฆาทิเสส ๑๓ และวุฏฐานวิธี (การอยู่กรรม)',
    category: 'vinai',
    categoryLabel: 'วินัยมุข',
    tag: 'สังฆาทิเสส',
    summary: 'ปริวาส (ชดใช้วันปกปิด) -> มานัต ๖ ราตรี -> พระสงฆ์ ๒๐ รูปสวดอัพภาน'
  },
  {
    id: 'sekhiya-seventyfive',
    title: 'เสขิยวัตร ๗๕: มารยาทอันงดงามของภิกษุ ๔ หมวด',
    category: 'vinai',
    categoryLabel: 'วินัยมุข',
    tag: 'เสขิยวัตร',
    summary: 'สารูป ๒๖ โภชนปฏิสังยุตต์ ๓๐ ธัมมเทสนา ๑๖ ปกิณณกะ ๓'
  },
  {
    id: 'adhikarana-seven',
    title: 'อธิกรณสมถะ ๗: วิธีระงับอธิกรณ์ข้อพิพาทในสงฆ์',
    category: 'vinai',
    categoryLabel: 'เบญจศีล / วินัย',
    tag: 'อธิกรณสมถะ',
    summary: 'สัมมุขาวินัย สติวินัย อมูฬหวินัย ปฏิญญาตกรณะ เยภุยยสิกา ตัสสปาปิยสิกา ติณวัตถารกวินัย'
  },
  {
    id: 'vinaya-patimokkha-all',
    title: 'ผังสรุปศีล ๒๒๗ สิกขาบทและลำดับชั้นของอาบัติ',
    category: 'vinai',
    categoryLabel: 'เบญจศีล / วินัย',
    tag: 'ศีล ๒๒๗',
    summary: 'ปาราชิก ๔, สังฆาทิเสส ๑๓, อนิยต ๒, นิสสัคคิยปาจิตตีย์ ๓๐, ปาจิตตีย์ ๙๒, ปาฏิเทสนียะ ๔, เสขิยวัตร ๗๕, อธิกรณสมถะ ๗'
  },

  // กระทู้ธรรม
  {
    id: 'kratu-four-steps',
    title: 'โครงสร้าง ๔ ขั้นตอนของกระทู้ธรรมชั้นตรี',
    category: 'kratu',
    categoryLabel: 'กระทู้ธรรม',
    tag: 'โครงสร้าง',
    summary: 'คำนำ (อารัมภบท) -> เนื้อเรื่อง (อรรถาธิบาย) -> สุภาษิตเชื่อม -> บทสรุป'
  },
  {
    id: 'kratu-rules',
    title: 'กฎเหล็กระเบียบสนามหลวงที่ห้ามละเมิดเด็ดขาด',
    category: 'kratu',
    categoryLabel: 'กระทู้ธรรม',
    tag: 'ระเบียบสอบ',
    summary: 'ยาวไม่น้อยกว่า ๒ หน้า อ้างสุภาษิตเชื่อม ๑ บท สะกดบาลีถูก ปิดด้วย ฯ'
  },
  {
    id: 'kratu-sample-format',
    title: 'แบบฟอร์มการเขียนกระทู้ธรรมจริงตามมาตรฐานสนามหลวง',
    category: 'kratu',
    categoryLabel: 'กระทู้ธรรม',
    tag: 'ตัวอย่างฟอร์ม',
    summary: 'ตัวอย่างข้อความคำขึ้นต้น การเชื่อมบท และคำสรุปที่ได้คะแนน ๑๐๐ เต็ม'
  },
  {
    id: 'kratu-proverbs',
    title: 'คลังสุภาษิตเชื่อมยอดฮิต: หมวดกรรม & ศีล',
    category: 'kratu',
    categoryLabel: 'กระทู้ธรรม',
    tag: 'คลังสุภาษิต',
    summary: 'กมฺมุนา วตฺตตี โลโก, สีลํ โลเก อนุตฺตรํ, อตฺตา หิ อตฺตโน นาโถ'
  },
  {
    id: 'kratu-wisdom',
    title: 'คลังสุภาษิตเชื่อมยอดฮิต: หมวดปัญญา สัจจะ และความเพียร',
    category: 'kratu',
    categoryLabel: 'กระทู้ธรรม',
    tag: 'คลังสุภาษิต',
    summary: 'ปญฺญา โลกสฺมิ ปชฺโชโต (ปัญญาเป็นแสงสว่างในโลก), สจฺเจนาถิกิตฺตึ ปปฺโปติ, วายเมเถว ปุริโส'
  },
  {
    id: 'kratu-exam-success',
    title: 'ผังบริหารเวลาสอบ ๓ ชั่วโมง พิชิต ๑๐๐ คะแนนเต็ม',
    category: 'kratu',
    categoryLabel: 'กระทู้ธรรม',
    tag: 'เทคนิคสอบ',
    summary: 'วางโครง ๑๕ นาที เขียนจริง ๑๒๐ นาที ตรวจทาน ๔๕ นาที พร้อมเช็กลิสต์'
  }
];

export const DhammaInfographicsGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [modalItem, setModalItem] = useState<InfographicItem | null>(null);

  const filteredItems = INFOGRAPHICS_LIST.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white border border-amber-200/80 rounded-3xl p-5 sm:p-8 shadow-xs space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-amber-100">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-400 text-white flex items-center justify-center font-bold text-sm shadow-2xs">
              <Layers className="w-4 h-4" />
            </span>
            <h2 className="text-xl font-bold text-slate-800">
              คลังผังมโนทัศน์และอินโฟกราฟิกการสอน (Visual Infographics Gallery)
            </h2>
          </div>
          <p className="text-xs text-slate-500">
            รวบรวมแผนผังมโนทัศน์ ภาพอินโฟกราฟิก และสรุปโครงสร้างความรู้ครบทุกวิชา คลิกดูภาพขยายใหญ่ได้ทุกรูป
          </p>
        </div>

        <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800">
          รวม {INFOGRAPHICS_LIST.length} ผังภาพการสอน
        </span>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold">
          {[
            { id: 'all', label: 'ทั้งหมด' },
            { id: 'dhamma', label: 'ธรรมวิภาค' },
            { id: 'vinai', label: 'เบญจศีล / วินัย' },
            { id: 'buddha', label: 'พุทธประวัติ' },
            { id: 'ceremony', label: 'ศาสนพิธี' },
            { id: 'kratu', label: 'กระทู้ธรรม' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                selectedCategory === tab.id
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-amber-50 text-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[220px]">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ค้นหาชื่อแผนผังหรือหัวข้อธรรม..."
            className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400/40"
          />
        </div>
      </div>

      {/* Grid of Infographic Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setModalItem(item)}
            className="group cursor-pointer rounded-2xl border border-amber-200/80 bg-gradient-to-b from-white to-amber-50/20 hover:to-amber-50/50 p-4 transition-all hover:shadow-md hover:border-amber-400 flex flex-col justify-between space-y-3"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-800">
                  {item.categoryLabel}
                </span>
                <span className="text-[10px] text-slate-400 px-1.5 py-0.5 rounded bg-slate-100">
                  {item.tag}
                </span>
              </div>

              <h3 className="font-bold text-slate-800 text-sm group-hover:text-amber-800 transition-colors line-clamp-1">
                {item.title}
              </h3>

              <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                {item.summary}
              </p>
            </div>

            {/* Thumbnail Preview Area */}
            <div className="p-2.5 bg-white rounded-xl border border-amber-100 shadow-2xs pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity">
              <div className="transform scale-[0.88] origin-top-left -mb-6">
                <DhammaIllustration id={item.id} />
              </div>
            </div>

            {/* Card Footer */}
            <div className="flex items-center justify-between text-xs text-amber-700 font-bold pt-2 border-t border-amber-100/60">
              <span className="flex items-center gap-1 text-[11px]">
                <ZoomIn className="w-3.5 h-3.5" /> แตะเพื่อดูขนาดเต็ม
              </span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal Dialog for Expanded View */}
      {modalItem && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-amber-300 p-5 sm:p-8 space-y-5 animate-in fade-in zoom-in-95 duration-150">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-amber-100 pb-4">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-800">
                    {modalItem.categoryLabel}
                  </span>
                  <span className="text-xs text-slate-400">
                    {modalItem.tag}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {modalItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  {modalItem.summary}
                </p>
              </div>

              <button
                onClick={() => setModalItem(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-all shrink-0 ml-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Full Illustration View */}
            <div className="p-4 sm:p-6 bg-slate-50/60 rounded-2xl border border-slate-200">
              <DhammaIllustration id={modalItem.id} />
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
              <span className="text-slate-500">
                สื่อการสอนมาตรฐานแม่กองธรรมสนามหลวง • นักธรรมชั้นตรี
              </span>

              <button
                onClick={() => setModalItem(null)}
                className="px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold transition-all shadow-xs"
              >
                ปิดหน้าต่าง
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

