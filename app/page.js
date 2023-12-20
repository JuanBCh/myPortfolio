import Services from "@/components/Portfolio/Services/services";
import Intro from "../components/Portfolio/Intro/intro";
import AboutMe from "@/components/Portfolio/AboutMe/aboutMe";
import Work from "@/components/Portfolio/Work/work";

function Home() {
  return (
    <div>
      <Intro />
      <Services />
      <AboutMe />
      <Work />
    </div>
  );
}

export default Home;
