import About from "../components/index/About";
import Footer from "../components/index/Footer";
import Hero from "../components/index/Hero";
import Kontak from "../components/index/Kontak";
import MenuPopuler from "../components/index/MenuPopuler";
import Navbar from "../components/index/Navbar";

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <div class="mb-5"></div>
      <div class="bg-white leading-normal tracking-normal text-sm px-6 lg:px-20">
        <section id="home">
          <Hero />
        </section>
        <div class="py-10"></div>
        <section id="tentang">
          <About />
        </section>
        <div class="py-10"></div>
        <section id="menu">
          <MenuPopuler />
        </section>
        <div class="py-10"></div>
        <section id="kontak">
          <Kontak />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default IndexPage;
