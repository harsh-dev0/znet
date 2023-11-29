import Start from "./components/Start"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#000000]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Start />
      </div>
      <Footer />
    </main>
  )
}
