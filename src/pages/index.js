import Form from "../components/Form";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import { useState, useEffect } from "react";
import { URL } from "../utils";
import axios from "axios";
export default function Home() {
  const [id, setId] = useState(null);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [description, setDescription] = useState("");
  const [list, setList] = useState([]);
 

  const refresh = () => {
    axios
      .get(`${URL}?sort=-createdAt`)
      .then((resp) => {
        setList(resp.data);
      })
      .catch((err) => console.log("Error", err));
  };

  useEffect(() => {
    refresh();
  }, [nome, telefone, description]);

  const addContact = () => {
    axios
      .post(URL, { name: nome, description, phone: telefone })
      .then((resp) => {
        refresh();
        setNome("");
        setTelefone("");
        setDescription("");
      })
      .catch((err) => console.error("Erro ao Salvar", err));
  };

  function removeContact(id) {
    axios
      .delete(`${URL}/${id}`)
      .then((resp) => refresh())
      .catch((err) => console.error("Erro ao Remover", err));
  }

  function getForm({ _id, name, phone, description }) {
    setId(_id);
    setNome(name);
    setTelefone(phone);
    setDescription(description);
  }

  function setForm() {
    if (!id || !nome || !telefone || !description) {
      return;
    }

    axios
      .put(`${URL}/${id}`, { name: nome, phone: telefone, description })
      .then((resp) => refresh())
      .catch((err) => console.error("Erro ao Editar", err));
    setId(null);
    setNome("");
    setTelefone("");
    setDescription("");
  }

  return (
    <div className={``}>
      <Navbar />
      <Table list={list} del={removeContact} get={getForm} />
      <Form
        id={id}
        nome={nome}
        telefone={telefone}
        description={description}
        add={addContact}
        changeNome={setNome}
        changeTelefone={setTelefone}
        changeDesc={setDescription}
        set={setForm}
      />
    </div>
  );
}
