import Start from "./components/Start"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import AboutSection from "./components/About"
export default function Home() {
  const backgroundImageStyle = {
    backgroundImage: "url('/images/bg.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  return (
    
    <main className="flex min-h-screen flex-col bg-cover bg-center bg-no-repeat" style={backgroundImageStyle} >
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4 flex-grow">
        <Start />
        <AboutSection />
      </div>
      <Footer />
    </main>
  )
}
