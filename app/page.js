import Hero from "./components/Hero";
import Asuntos from './components/Asuntos'
import Quienes from "./components/Quienes";
import Validados from "./components/Validados";
import Location from "./components/Location";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <Asuntos />
      <Quienes />
      <Validados />
      <Location />
      <Contact />

    </div>
  );
}
