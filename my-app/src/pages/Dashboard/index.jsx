import {
  ContainerPage,
  Header,
  DivUserInfos,
  MainTechs,
  DivTechLevelDeletBtn,
  DivTechHeader,
} from "./style";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import api from "../../service/api";
import { ContactContext } from "../../contexts/ContactContext";

function Dashboard() {
  const { user, contacts, setContacts, isLoged, setIsLoged } =
    useContext(UserContext);

  const { CreateContact, DeleteContact, UpdateContact } =
    useContext(ContactContext);

  const navigate = useNavigate();

  const name = user.name;

  console.log(contacts, user);

  function LogOut() {
    window.localStorage.clear();
    navigate("/");
  }

  // async function handleTech(id) {
  //   const token = localStorage.getItem("@TOKEN");
  //   if (token) {
  //     try {
  //       api.defaults.headers.authorization = `Bearer ${token}`;
  //       await api.delete(`/users/techs/${id}`);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   const newTechs = contacts.filter((elem) => {
  //     return elem.id !== id;
  //   });
  //   setContacts(newTechs);
  // }

  return (
    <>
      {isLoged ? (
        <ContainerPage>
          <Header>
            <div>
              <button onClick={() => navigate("/")}>Usuário</button>
              <button onClick={() => LogOut()}>Sair</button>
            </div>
          </Header>
          <DivUserInfos>
            <div>
              <h2>Olá, {name}</h2>
              <button>Add Contato</button>
            </div>
          </DivUserInfos>
          <MainTechs>
            <DivTechHeader>
              <h2>Contatos</h2>
            </DivTechHeader>
            <ul>
              {contacts.map((element) => {
                return (
                  <li key={element.id}>
                    <h3>
                      {element.name}, {element.email}, {element.number}
                    </h3>
                  </li>
                );
              })}
            </ul>
          </MainTechs>
        </ContainerPage>
      ) : (
        <Navigate to="/" replace />
      )}
    </>
  );
}

export default Dashboard;
