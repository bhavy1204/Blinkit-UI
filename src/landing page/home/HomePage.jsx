import Categories from "./Categories.jsx"
import Footer from "../Footer.jsx"
import Navbar from "../Navbar.jsx"
import RollingPapers from "./RollingPaper.jsx"
import Hero from "./hero.jsx"

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero/>
            <Categories/>
            <RollingPapers/>
            <Footer />
        </>
    )
}