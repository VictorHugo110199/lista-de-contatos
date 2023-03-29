import { ModalDiv, DivHeaderForm, ModalPage, DivForm } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { ContactContext } from "../../contexts/ContactContext";

function ModalContact() {
  const { CreateContact, setIsModalOpen } = useContext(ContactContext);

  const onSubmitFunction = (data) => {
    CreateContact(data);
    reset();
  };

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome do Contato é obrigatorio"),
    email: yup.string().required("Email Obrigatorio").email("Email invalido"),
    number: yup.number().required("Numero Obrigatorio"),
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
    <ModalPage>
      <ModalDiv>
        <DivHeaderForm>
          <h2>Cadastrar Contato</h2>
          <button onClick={() => setIsModalOpen(false)}>Sair</button>
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
            <div>
              <p>Numero</p>
              <input type="text" id="number" {...register("number")} />
              {errors.number?.message}
            </div>
            <button type="submit">Cadastrar Contato</button>
          </form>
        </DivForm>
      </ModalDiv>
    </ModalPage>
  );
}

export default ModalContact;
