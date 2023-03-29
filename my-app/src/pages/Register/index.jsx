import { ContainerForm, DivHeader, DivForm, DivNameInput } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function Register() {
  const navigate = useNavigate();
  const { Register } = useContext(UserContext);

  const onSubmitFunction = (data) => {
    reset();
    Register(data);
  };

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome Obrigatorio"),
    email: yup.string().required("Email Obrigatorio").email("Email invalido"),
    password: yup
      .string()
      .required("Senha obrigatoria")
      .matches(
        /(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-])).{8,}$/,
        "Senha Invalida"
      ),
    number: yup.number().required("Numero Obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(formSchema) });

  return (
    <ContainerForm>
      <DivHeader>
        <button onClick={() => navigate("/")}>Login</button>
      </DivHeader>
      <DivForm onSubmit={handleSubmit(onSubmitFunction)}>
        <h1>Crie sua conta</h1>
        <h4>Rapido e grátis, vamos nessa</h4>
        <DivNameInput>
          <p>Nome</p>
          <input type="text" id="name" {...register("name")} />
          {errors.name?.message}
        </DivNameInput>
        <DivNameInput>
          <p>Email</p>
          <input type="email" id="email" {...register("email")} />
          {errors.email?.message}
        </DivNameInput>
        <DivNameInput>
          <p>Senha</p>
          <input type="password" id="password" {...register("password")} />
          {errors.password?.message}
        </DivNameInput>
        <DivNameInput>
          <p>Numero</p>
          <input type="text" id="number" {...register("number")} />
          {errors.number?.message}
        </DivNameInput>
        <button type="submit">Cadastrar</button>
      </DivForm>
    </ContainerForm>
  );
}

export default Register;
