import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/globals.scss';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL("https://shajib-mqywe8grd-shajibhasan.vercel.app/"),
  referrer: "origin-when-cross-origin",
  title: "Shajib Hasan",
  icons: {
    icon: "/favicon.ico",
  },
  authors: {
    name: "Shajib Hasan",
    url: "https://github.com/Shajib1312",
  },
  description:
    "A Web Developer based in Bangladesh with expertise in React.js and Next.js frameworks.",
  openGraph: {
    title: "Shajib Hasan",
    description:
      "A Web Developer based in Bangladesh with expertise in React.js and Next.js frameworks.",
    url: "https://shajib-mqywe8grd-shajibhasan.vercel.app",
    siteName: "Shajib Hasan",
    locale: "en_US",
    type: "website",
    images: "/og.jpg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  )
};
