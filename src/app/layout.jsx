import { Gabarito, Martian_Mono, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const gabarito = Gabarito({
  subsets:['latin'],
  variable:'--font-gabarito',
})
const martianMono = Martian_Mono({
  subsets:['latin'],
  variable:'--font-mono',
})
export const metadata = {
  title: 'Zaky Maulana Al Bajili',
  description: 'Landing Page Portofolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${gabarito.variable} ${martianMono.variable}`}>{children}</body>
    </html>
  )
}
