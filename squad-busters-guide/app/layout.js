import './globals.css'

export const metadata = {
  title: 'Squad Busters Guide - دليل المبتدئين',
  description: 'دليل تفاعلي للمبتدئين في لعبة Squad Busters',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
