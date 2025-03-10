import Hero from "@/components/hero"
import Products from "@/components/products"
import About from "@/components/about"
import Infrastructure from "@/components/infrastructure"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"
import Capabilities from "@/components/capabilities"
import SupplyGeography from "@/components/supply-geography"

export default function Home() {
  return (
    <main className="relative">
      <h1 className="sr-only">Nur Zhausyn - Ведущая агропромышленная компания Казахстана</h1>
      <Navigation />
      <div id="hero-section">
        <Hero />
      </div>
      <div id="about-section">
        <About />
      </div>
      <div id="capabilities-section">
        <Capabilities />
      </div>
      <SupplyGeography />
      <div id="products-section">
        <Products />
      </div>
      <div id="infrastructure-section">
        <Infrastructure />
      </div>
      <div id="contact-section">
        <Contact />
      </div>
      <Footer />
    </main>
  )
}

