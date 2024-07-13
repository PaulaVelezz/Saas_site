import Banner from './components/Banner';
import Footer from './components/Footer';
import Hero from './components/Hero';
import MainProduct from './components/MainProduct';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';

function App() {

  return (
    <>
      <div className='bg-gradient-to-b from-[#eaeefe] to-[#3456ca]'>
        <Navbar />
        <Hero />
      </div>
      <Banner />
      <MainProduct />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App;