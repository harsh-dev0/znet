import Start from "./components/Start"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Email from "./components/Email"
import Aboutcode from "./components/Aboutcode"
import ProjectsSection from "./components/Projects"

export default function Home() {
  const backgroundImageStyle = {
    backgroundImage: "url('/images/bg2.jpeg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  const backgroundImageStyle2 = {
    backgroundImage: "url('/images/bg1.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  return (
    
    <main className="flex min-h-screen flex-col bg-[#111111]"  >
      <Navbar />
      <div className="container flex flex-grow flex-col mt-24 min-h-screen mx-auto px-12 py-4 bg-cover bg-center bg-no-repeat" style={backgroundImageStyle2} >
      
        <Start />
      </div>
      <div className="container  mx-auto px-12 py-4 flex-grow" id="#about" >
        <ProjectsSection />
      </div>
      <div className="container flex bg-dot min-h-screen px-12 py-4 flex-grow flex-col bg-cover bg-center bg-no-repeat">
      <Aboutcode/> 
      </div>
     
      <div className="flex min-h-screen px-12 py-4 flex-grow flex-col bg-cover bg-center bg-no-repeat" style={backgroundImageStyle}>
      <Email  />
      <Footer />
      </div>
    </main>
  )
}
