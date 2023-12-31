import type { Metadata } from 'next'
import {Nunito} from "next/font/google";

import './globals.css'
import Navbar from "@/app/components/navbar/Navbar";
import ClientOnly from "@/app/components/ClientOnly";
import RegisterModal from "@/app/components/modals/RegisterModal";
const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body className={font.className}>
      <ClientOnly>
          <RegisterModal />
          <Navbar/>
      </ClientOnly>
      {children}
      </body>
      </html>
  )
}
