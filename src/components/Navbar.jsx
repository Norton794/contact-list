import Link from "next/link";
import { useRouter } from "next/router";
import { IconList } from "./Icons";

export default function Navbar(props) {
  const active = `border-b-2 flex justify-center`;
  const router = useRouter();
  return (
    <nav
      className={`bg-indigo-500 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800`}
    >
      <div
        className={`container flex flex-wrap justify-between items-center mx-auto `}
      >
        <h1 className="text-lg font-semibold text-white uppercase font-sans flex justify-between">
          <span className="pr-1">{IconList}</span>
          {props.erro
            ? "Erro 404 "
            : "Agenda de Contatos"}
        </h1>
        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium">
          <li className={router.pathname == "/" ? active : ""}>
            <Link href="/">
              <a className="block py-2 pr-4 pl-3 text-white hover:text-gray-200 cursor-pointer">
                Contatos
              </a>
            </Link>
          </li>
          <li className={router.pathname == "/about" ? active : ""}>
            <Link href="/about">
              <a className="block py-2 pr-4 pl-3 text-white hover:text-gray-200 cursor-pointer">
                Sobre
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
