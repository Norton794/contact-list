import { IconSave } from "./Icons";

export default (props) => (
  <form className="w-full  flex justify-center">
    <div className="flex flex-wrap mt-8 p-3">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-4">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          Nome
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          placeholder="Nome"
          required
        />
      </div>

      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-4">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          Telefone
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          placeholder="(xx)xxxxx-xxxx"
          required
        />
      </div>


      <div className="w-full px-3 mt-4">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          Descrição
        </label>
        <textarea
          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-32"

          type="text"
          required
        ></textarea>
      </div>

<div className="flex items-center justify-center w-full">
    
<div className="">
      <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded flex">
       <span className="mr-2">{IconSave}</span> Cadastrar
      </button>
    </div>
</div>
      


    </div>
  </form>
);
