import styled from "styled-components";

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 75px;
  text-align: center;
  margin-bottom: 3rem;
`;

export const DivHeader = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  width: 90%;
  max-width: 369px;
  align-items: center;

  img {
    width: 35%;
    max-width: 145px;
    max-height: 20px;
  }

  button {
    width: 79.54px;
    height: 31.95px;
    background-color: #343b41;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 12px;
    cursor: pointer;

    :hover {
      background-color: #212529;
    }
  }
`;

export const DivForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 369px;
  background-color: #212529;
  align-items: center;
  border-radius: 4px;

  h1 {
    font-size: 18px;
    font-weight: 700;
    color: white;
    margin-top: 30px;
  }

  h4 {
    margin-top: 0px;
    color: #868e96;
    font-weight: 400;
    font-size: 12px;
  }

  button {
    width: 80%;
    height: 40px;
    background-color: #ff577f;
    border: none;
    border-radius: 4px;
    margin: 1rem 0 2rem 0;
    cursor: pointer;
    color: white;

    :hover {
      background-color: #59323f;
    }
  }
`;

export const DivNameInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;

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

  select {
    width: 100%;
    height: 40px;
    border-radius: 3.20867px;
    background: #343b41;
    color: #868e96;
    border: none;
    cursor: pointer;
  }
`;
