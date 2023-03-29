import styled from "styled-components";

export const ModalPage = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalDiv = styled.div`
  width: 90%;
  max-width: 370px;
  align-items: center;
`;

export const DivHeaderForm = styled.div`
  width: 100%;
  height: 50px;
  background-color: #343b41;
  border-radius: 4px 4px 0px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-weight: 700;
    font-size: 16px;
    color: #f8f9fa;
    margin-left: 5%;
  }

  button {
    background-color: #212529;
    color: white;
    font-size: 12px;
    width: 55.49px;
    height: 32px;
    border-radius: 4px;
    border: none;
    margin-right: 3%;
  }
`;

export const DivForm = styled.div`
  background-color: #212529;
  border-radius: 0 0 4px 4px;
  padding: 1rem;

  input {
    width: 100%;
    height: 40px;
    background-color: #343b41;
    border-radius: 4px;
    border: 1px solid white;
    color: white;
  }

  select {
    width: 100%;
    height: 40px;
    background-color: #343b41;
    border-radius: 4px;
    border: 1px solid white;
    color: white;
  }

  button {
    width: 100%;
    height: 40px;
    background-color: #ff577f;
    border-radius: 4px;
    border: none;
    margin-top: 1rem;
    color: white;
    cursor: pointer;
  }

  p {
    color: #f8f9fa;
    font-weight: 400;
    font-size: 12.182px;
  }
`;
