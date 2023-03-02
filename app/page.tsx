import Navigation from "./navigation";
import Main from "./main";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
}
