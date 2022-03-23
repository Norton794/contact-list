import Form from "../components/Form";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import { useState } from "react";
import { URL } from "../utils";
import axios from "axios";
export default function Home() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [description, setDescription] = useState("");
const [list, setList] = useState([]);
  const refresh = () => {
    axios.get(`${URL}?sort=-name`)
    .then(resp=>setList(resp))
  }

  const addContact = () => {
    axios
      .post(URL, { name: nome, description, phone: telefone })
      .then((resp) => {
        console.log("Foi");
        setNome("");
        setTelefone("");
        setDescription("");
      })
      .catch((err) => console.error("Erro ao Salvar", err));
  };
  return (
    <div className={``}>
      <Navbar />
      <Table list={list} />
      <Form
        nome={nome}
        telefone={telefone}
        description={description}
        add={addContact}
        changeNome={setNome}
        changeTelefone={setTelefone}
        changeDesc={setDescription}
      />
    </div>
  );
}
