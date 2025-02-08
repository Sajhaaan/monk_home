import Header from "./components/Header"
import Hero from "./components/Hero"
import Benefits from "./components/Benefits"
import Categories from "./components/Categories"
import About from "./components/About"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Benefits />
      <Categories />
      <About />
      <ContactForm />
      <Footer />
    </main>
  )
}

