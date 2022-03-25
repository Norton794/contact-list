import Form from "../components/Form";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { URL } from "../utils";
import axios from "axios";
import {IconSearch, IconX} from '../components/Icons'
export default function Home() {
  const [id, setId] = useState(null);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [description, setDescription] = useState("");
  const [list, setList] = useState([]);
  const [visible, setVisible] = useState("Table");
  const [text, setText] = useState("");

  function refresh(nome=''){
    const search = nome ? `&name__regex=/${nome}/i` : "";
    axios
      .get(`${URL}?sort=-createdAt${search}`)
      .then((resp) => {
        console.log(search)
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
        cleanForm();
        show()
      })
      .catch((err) => console.error("Erro ao Salvar", err));
  };

  function removeContact(id) {
    axios
      .delete(`${URL}/${id}`)
      .then((resp) => refresh(text))
      .catch((err) => console.error("Erro ao Remover", err));
  }

  function getForm({ _id, name, phone, description }) {
    setId(_id);
    setNome(name);
    setTelefone(phone);
    setDescription(description);
    show()
  }

  function setForm() {
    if (!id || !nome || !telefone || !description) {
      return;
    }

    axios
      .put(`${URL}/${id}`, { name: nome, phone: telefone, description })
      .then((resp) => refresh(text))
      .catch((err) => console.error("Erro ao Editar", err));
    cleanForm();
    show()
  }

  function show() {
    setVisible(visible === "Table" ? "Form" : "Table");
  }

  function cleanForm() {
    setId(null);
    setNome("");
    setTelefone("");
    setDescription("");
  }

  function searchText(text = text) {
    
    refresh(text)
  }

  function erase(){
    refresh()
    setText("")
  }


  const keyHandler = e => {
    console.log(e.key)
    if(e.key==='Enter'){
      searchText(e.target.value) 
    }else if(e.key === 'Escape'){
      erase()
    }
  }

  return (
    <div className={``}>
      <Navbar />
      <Header text="Telefones: " />
      <div className="flex justify-end mr-8">
        <button
          className="shadow bg-indigo-500 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded flex"
          onClick={show}
        >
          Mostrar {visible === "Table" ? "Formulário" : "Tabela"}
        </button>
      </div>
      {visible === "Table" ? (
        <>
        <div className="w-full flex justify-end mt-8 mb-0">
        <input onKeyUp={keyHandler} className="appearance-none block  bg-gray-200 text-gray-700 border rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white h-10 m-2" type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Pesquisa por Nome"/>
        <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold p-2 m-2 rounded mr-2"
        onClick={() => searchText(text)}
        >
            {IconSearch}
        </button>
        <button className="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold p-2 m-2 rounded mr-8"
        onClick={() => erase()}
        >
            {IconX}
        </button>
    </div>
        <Table list={list} del={removeContact} get={getForm} />
        </>
      ) : (
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
      )}
    </div>
  );
}
