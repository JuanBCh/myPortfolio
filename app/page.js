import Services from "@/components/Portfolio/Services/services";
import Header from "../components/Portfolio/Header/header";
import Intro from "../components/Portfolio/Intro/intro";
import AboutMe from "@/components/Portfolio/AboutMe/aboutMe";
import Work from "@/components/Portfolio/Work/work";
import Footer from "@/components/Portfolio/Footer/footer";

function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <Services />
      <AboutMe />
      <Work />
      <Footer />
    </div>
  );
}

export default Home;
