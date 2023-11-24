import Services from "@/components/Services/services";
import Header from "../components/Header/header";
import Intro from "../components/Intro/intro";
import AboutMe from "@/components/AboutMe/aboutMe";
import Work from "@/components/Work/work";
import Footer from "@/components/Footer/footer";

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
