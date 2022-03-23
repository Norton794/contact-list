import Header from "./Header";
import { IconDelete, IconEdit } from "./Icons";

export default function Table(props) {
  return (
    <div>
      <Header text="Telefones: " />

      <div className="w-full flex justify-center">
        <table className="w-full pl-1 m-8">
          <tr className="text-center">
            <th>ID</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Descrição</th>
            <th>Editar</th>
            <th>Excluir</th>
          </tr>
          {props.list &&
            props.list.map((contact) => (
              <tr
                key={contact._id}
                className="odd:bg-white even:bg-slate-100 text-center"
              >
                <td>{contact._id}</td>
                <td>{contact.name}</td>
                <td>{contact.phone}</td>
                <td>{contact.description}</td>
                <td>
                  <div className="text-yellow-500 cursor-pointer inline-block rounded hover:bg-gray-100 p-2">
                    {IconEdit}
                  </div>
                </td>
                <td>
                  <div onClick={()=>props.del(contact._id)} className="text-red-500 cursor-pointer inline-block rounded hover:bg-gray-100 p-2">
                    {IconDelete}
                  </div>
                </td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
}
