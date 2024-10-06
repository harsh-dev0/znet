import Start from "./components/Start"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Email from "./components/email"
import Aboutcode from "./components/Aboutcode"
import ProjectsSection from "./components/Projects"
import Script from "next/script"

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
        {/* <Script id="review-widget-config" strategy="beforeInteractive">
          {`
            window.reviewWidgetConfig = {
              bubbleColor: '#FF5733',
              bubbleTextColor: '#000000',
              bubbleSize: '80px',
              popupBackgroundColor: '#FAFAFA',
              popupBorderColor: '#333333',
              reviewHeaderText: 'User Feedback',
              noReviewsText: 'Currently no feedback available.',
              submitButtonText: 'Submit Now',
              position: {
                bottom: '30px',
                right: '30px'
              }
            };
          `}
        </Script>

        {/* Load the review widget script *
        <Script
          src="https://customer-review-tracking-application-be.onrender.com/review-widget.js"
          strategy="afterInteractive"
        /> */}
      </div>
    </main>
  )
}
