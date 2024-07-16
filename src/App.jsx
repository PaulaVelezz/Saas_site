import Banner from './components/Banner';
import Hero from './components/Hero';
import MainProduct from './components/MainProduct';
import Navbar from './components/Navbar';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Questions from './components/Questions';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <div className='bg-gradient-to-b from-[#eaeefe] to-[#3456ca]'>
        <Navbar />
        <Hero />
      </div>
      <Banner />
      <MainProduct />
      <Features />
      <Testimonials />
      <Pricing />
      <Questions />
      <Footer /> 
    </>
  )
}

export default App;