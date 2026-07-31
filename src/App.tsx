import { Footer } from "./components/Footer";
import { Introduce } from "./components/Introduce";
import { Navbar } from "./components/Navbar";
import { SearchBox } from "./components/SearchBox";
import "./index.css";

function App() {
  return (
    <div>
      <Navbar />
      <SearchBox />
      <Introduce />
      <Footer />
    </div>
  );
}

export default App;
