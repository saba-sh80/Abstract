import { Footer } from "@/components/Footer";
import { Introduce } from "@/components/Introduce";
import { Navbar } from "@/components/Navbar";
import { SearchBox } from "@/components/SearchBox";

export default function Home() {
  return (
    <div>
      <Navbar />
      <SearchBox />
      <Introduce />
      <Footer />
    </div>
  );
}
