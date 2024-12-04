import Experience from '@/components/Experience'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <Experience />
    </main>
  )
}
