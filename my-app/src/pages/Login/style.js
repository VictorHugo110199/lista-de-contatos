import styled from "styled-components";

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 75px;
  color: white;

  h1 {
    font-size: 15px;
    font-weight: 700;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: center;
  }

  p {
    color: #f8f9fa;
    font-weight: 400;
    font-size: 12px;
  }

  input {
    width: 100%;
    height: 40px;
    border-radius: 3.20867px;
    background: #343b41;
    color: #868e96;
    border: none;

    :hover {
      border: 0.9772px solid #f8f9fa;
    }
  }

  form > div {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 369px;
  background-color: #212529;
  align-items: center;
  border-radius: 4px;
`;

export const BtnCadastrar = styled.button`
  background: #868e96;
  border-radius: 4px;
  border: none;
  height: 40px;
  width: 80%;
  margin-bottom: 35px;
  color: white;
  font-weight: 500;
  font-size: 12.8347px;
  cursor: pointer;

  :hover {
    background-color: #343b41;
  }
`;

export const BtnLogin = styled.button`
  background-color: #ff577f;
  border-radius: 4px;
  border: none;
  height: 40px;
  width: 100%;
  color: white;
  font-weight: 500;
  font-size: 12.8347px;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  cursor: pointer;

  :hover {
    background-color: #59323f;
  }
`;
