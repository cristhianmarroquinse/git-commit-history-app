import Image from 'next/image'
import { Inter } from 'next/font/google'
import CommitHistory from '@/components/CommitHistory'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <CommitHistory owner={process.env.NEXT_PUBLIC_OWNER || ''} repo={process.env.NEXT_PUBLIC_REPO || ''}/>
  )
}
