import { NavbarDemo } from '@/components/organism/Navbar'
import Footer from '@/components/organism/Footer'

export default function SiteLayout({ children }) {
  return (
    <>
      <NavbarDemo />
      {children}
      <Footer />
    </>
  )
}
