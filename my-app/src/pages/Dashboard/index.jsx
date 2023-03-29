import {
  ContainerPage,
  Header,
  DivUserInfos,
  MainTechs,
  DivTechHeader,
} from "./style";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { ContactContext } from "../../contexts/ContactContext";
import ModalContact from "../../components/modalNewContact";

function Dashboard() {
  const { user, contacts, setContacts, isLoged, LoadUser } =
    useContext(UserContext);

  const { DeleteContact, isModalOpen, setIsModalOpen } =
    useContext(ContactContext);

  const navigate = useNavigate();

  const name = user.name;

  function LogOut() {
    window.localStorage.clear();
    navigate("/");
  }

  async function handleContacts(id) {
    DeleteContact(id);

    const newContacts = contacts.filter((elem) => {
      return elem.id !== id;
    });
    setContacts(newContacts);
  }

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    if (!token) {
      navigate("/");
    }
    LoadUser();
  }, [isModalOpen]);

  return (
    <>
      {isLoged ? (
        <ContainerPage>
          {isModalOpen && <ModalContact setModalState={setIsModalOpen} />}
          <Header>
            <div>
              <button onClick={() => navigate("/user")}>Usuário</button>
              <button onClick={() => LogOut()}>Sair</button>
            </div>
          </Header>
          <DivUserInfos>
            <div>
              <h2>Olá, {name}</h2>
              <button onClick={() => setIsModalOpen(true)}>Add Contato</button>
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
                    <button onClick={() => handleContacts(element.id)}>
                      Excluir
                    </button>
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
