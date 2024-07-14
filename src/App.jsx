import Banner from './components/Banner';
import Hero from './components/Hero';
import MainProduct from './components/MainProduct';
import Navbar from './components/Navbar';
import Features from './components/Features';
// import Pricing from './components/Pricing';
// import Testimonials from './components/Testimonials';
// import Footer from './components/Footer';

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
      {/* <Pricing />
      <Testimonials />
      <Footer /> */}
    </>
  )
}

export default App;