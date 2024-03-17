import Start from "./components/Start"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Email from "./components/email"
import Aboutcode from "./components/Aboutcode"
import ProjectsSection from "./components/Projects"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#1a1527]">
      <Navbar />
      <div className="min-h-screen mx-auto px-12 py-4">
        <Start />
      </div>
      <div className="container mx-auto px-12 py-8">
        <ProjectsSection />
      </div>
      <div className="bg-dot min-h-screen px-2 lg:px-12 py-4">
        <Aboutcode/> 
      </div>
      <div className="min-h-screen">
        <Email />
        <Footer />
      </div>
    </main>
  )
}
