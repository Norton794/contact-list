import Navbar from "../components/Navbar";
import Link from "next/link";
export default function Custom404() {
  return (
    <>
      <Navbar erro={true} />

      <div className="w-full flex justify-center items-center m-0 p-0">
        <div className="flex flex-col justify-center items-center pb-4 ">
          <p class="text-2xl font-mono font-bold uppercase mb-4">Página não Encontrada</p>
          <Link href="/">
          <a className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-fit">
            Voltar
          </a>
          </Link>
        </div>
        <img className="w-2/3" alt="404" src="/img/16.png" />
      </div>
    </>
  );
}
