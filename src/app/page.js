import Start from "./components/Start"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import AboutSection from "./components/About"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#111111]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4 flex-grow">
        <Start />
        <AboutSection />
      </div>
      <Footer />
    </main>
  )
}
