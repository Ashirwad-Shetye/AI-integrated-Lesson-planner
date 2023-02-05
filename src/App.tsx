import Footer from "./components/footer";
import Planner from "./components/form";
import Hero from "./components/hero";
import Nav from "./components/nav";

function App() {
  return (
    <div className="h-screen">
      <Nav />
      <Hero />
      <Planner />
      <Footer />
    </div>
  );
}

export default App;
