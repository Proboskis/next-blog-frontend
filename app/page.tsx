import { Inter } from '@next/font/google'
import Navigation from "./navigation";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
    <Navigation />
    <main>
      <div className="box-border w-screen h-screen bg-gray-200 grid-cols-3">

      </div>
    </main>
  </>
  )
}
