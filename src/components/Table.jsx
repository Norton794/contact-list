import Header from "./Header";

export default function Table(props){
    return(
        <div>
            <Header text="Telefones: "/>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>Descrição</th>
                </tr>
                {props.list && props.list.map(contact=>(
                    <tr key={contact._id} className="odd:bg-white even:bg-slate-100">
                        <td>{contact._id}</td>
                        <td>{contact.name}</td>
                        <td>{contact.phone}</td>
                        <td>{contact.description}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}