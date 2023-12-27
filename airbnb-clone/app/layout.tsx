import type { Metadata } from 'next'
import {Nunito} from "next/font/google";

import './globals.css'
import Navbar from "@/app/components/navbar/Navbar";
import ClientOnly from "@/app/components/ClientOnly";
import Modal from "@/app/components/modals/Modal";
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
          <Modal actionLabel="submit" isOpen title="Login Modal"/>
          <Navbar/>
      </ClientOnly>
      {children}
      </body>
      </html>
  )
}
