import Start from "./components/Start"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import AboutSection from "./components/About"
import Email from "./components/Email"
import Aboutcode from "./components/Aboutcode"


export default function Home() {
  const backgroundImageStyle = {
    backgroundImage: "url('/images/bg2.avif')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  return (
    
    <main className="flex min-h-screen flex-col bg-cover bg-center bg-no-repeat"  >
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4 flex-grow" >
        <Start />
        
        
        
      </div>
      <div className="flex bg-dot min-h-screen px-12 py-4 flex-grow flex-col bg-cover bg-center bg-no-repeat">
      <Aboutcode/> 
      </div>
      <div className="flex min-h-screen px-12 py-4 flex-grow flex-col bg-cover bg-center bg-no-repeat" style={backgroundImageStyle}>
      <Email  />
      <Footer />
      </div>
    </main>
  )
}
