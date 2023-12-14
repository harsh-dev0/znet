import Start from "./components/Start"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Email from "./components/email"
import Aboutcode from "./components/Aboutcode"
import ProjectsSection from "./components/Projects"

export default function Home() {
  const backgroundImageStyle = {
    backgroundImage: "url('/images/bgg2.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  const backgroundImageStyle2 = {
    backgroundImage: "url('/images/bggg.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  return (
    
    <main className="flex min-h-screen flex-col bg-[#1a1527]"  >
      <Navbar />
      <div className="container flex flex-grow flex-col  min-h-screen mx-auto px-12 py-4 bg-cover bg-center bg-no-repeat" >
      
        <Start />
      </div>
      <div className="container  mx-auto px-12 py-8 " >
        <ProjectsSection />
      </div>
      <div className="flex bg-dot min-h-screen px-2 lg:px-12 py-4 flex-grow flex-col bg-cover bg-center bg-no-repeat">
      <Aboutcode/> 
      </div>
     
      <div className=" flex  flex-grow flex-col bg-cover bg-center bg-no-repeat" style={backgroundImageStyle}>
      <Email />
      <Footer />
      </div>
    </main>
  )
}
