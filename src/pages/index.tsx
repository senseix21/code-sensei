import { Inter } from 'next/font/google'
import { ReactElement } from 'react'
import RootLayout from '@/components/RootLayout'
import HeroBanner from '@/components/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`} >
      <HeroBanner />
    </main>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}

