import Header from "../components/Header";
import Navbar from "../components/Navbar";
export default function About() {
  return (
    <div>
      <Navbar />
      <Header text="Sobre"/>
      <div className="p-4 m-4">
        <h2 className="capitalize font-sans font-semibold mt-2 mb-2 text-lg text-gray-350">Sobre Nós:</h2>
        <p className="indent-8 text-gray-350">
          Et esse cillum labore nostrud esse voluptate ad magna occaecat
          excepteur exercitation id. Ea occaecat proident Lorem incididunt
          tempor cillum. Lorem sunt sint quis est officia qui eu do. Dolor ad
          nostrud in ad fugiat et occaecat veniam elit proident laboris. Laborum
          deserunt enim labore occaecat consequat ea deserunt dolor aliquip.
        </p>
      </div>
    </div>
  );
}
