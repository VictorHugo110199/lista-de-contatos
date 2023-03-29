import {
  ContainerPage,
  Header,
  DivUserInfos,
  ModalDiv,
  DivHeaderForm,
  DivForm,
  DeleteBtn,
} from "./style";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function User() {
  const navigate = useNavigate();

  const { user, Delete, LoadUser, Update } = useContext(UserContext);

  function LogOut() {
    window.localStorage.clear();
    navigate("/");
  }

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    if (!token) {
      navigate("/");
    }
    LoadUser();
  }, []);

  const name = user.name;
  const userId = user.id;

  const onSubmitFunction = (data) => {
    const userId = user.id;
    console.log(userId);
    if (!data.email) {
      const newData = { name: data.name };
      Update(newData, userId);
    }
    if (!data.name) {
      const newData = { email: data.email };
      Update(newData.email, userId);
    }
    Update(data, userId);
    LoadUser();
    reset();
  };

  const formSchema = yup.object().shape({
    name: yup.string().notRequired(),
    email: yup.string().notRequired().email(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <>
      <ContainerPage>
        <Header>
          <div>
            <button onClick={() => navigate("/dashboard")}>Contatos</button>
            <button onClick={() => LogOut()}>Sair</button>
          </div>
        </Header>
        <DivUserInfos>
          <div>
            <h2>Olá, {name}</h2>
          </div>
        </DivUserInfos>
        <ModalDiv>
          <DivHeaderForm>
            <h2>Alterar Dados Usuario</h2>
          </DivHeaderForm>
          <DivForm>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <div>
                <p>Nome</p>
                <input type="text" id="name" {...register("name")} />
                {errors.name?.message}
              </div>
              <div>
                <p>Email</p>
                <input type="email" id="email" {...register("email")} />
                {errors.email?.message}
              </div>
              <button type="submit">Alterar Dados</button>
            </form>
          </DivForm>
        </ModalDiv>
        <DeleteBtn onClick={() => Delete(userId)}>Deletar Conta!</DeleteBtn>
      </ContainerPage>
    </>
  );
}

export default User;
