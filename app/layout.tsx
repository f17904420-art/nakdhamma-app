import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'เว็บเรียนนักธรรมออนไลน์ | Nak Dhamma Learning Platform',
  description: 'ศูนย์รวมการทบทวนคัมภีร์ธรรมะสำหรับนักธรรมชั้นตรี ชั้นโท ชั้นเอก พร้อมเกมแบบทดสอบเลือกตอบ คลังวิดีโอติวเก็งสนามหลวง และคู่มือโครงสร้างการเทศนา',
  keywords: ['นักธรรมตรี', 'นักธรรมโท', 'นักธรรมเอก', 'ข้อสอบนักธรรม', 'สอบสนามหลวง', 'เทศนา', 'พระพุทธศาสนา'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&family=Sarabun:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#FFFDF7] text-slate-800 font-sans flex flex-col antialiased selection:bg-amber-400 selection:text-slate-900">
        <Header />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
