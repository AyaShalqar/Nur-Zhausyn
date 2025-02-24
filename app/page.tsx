import Hero from "@/components/hero"
import Products from "@/components/products"
import About from "@/components/about"
import Infrastructure from "@/components/infrastructure"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="products">
        <Products />
      </section>
      <section id="infrastructure">
        <Infrastructure />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  )
}

