import styled from "styled-components";

export const ContainerPage = styled.div``;

export const Header = styled.div`
  border-bottom: 1px solid #212529;
  height: 73px;
  display: flex;
  justify-content: center;

  div {
    width: 90%;
    height: 100%;
    max-width: 750px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    background-color: #212529;
    color: white;
    font-size: 12px;
    width: 65.49px;
    height: 32px;
    border-radius: 4px;
    border: none;
  }
`;

export const DivUserInfos = styled.div`
  border-bottom: 1px solid #212529;
  display: flex;
  justify-content: center;

  div {
    width: 90%;
    height: 100%;
    max-width: 750px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    color: #f8f9fa;
    font-weight: 700;
    font-size: 20px;
  }

  p {
    color: #868e96;
    font-weight: 400;
    font-size: 14px;
  }

  button {
    background-color: #212529;
    color: white;
    font-size: 12px;
    width: 100px;
    height: 32px;
    border-radius: 4px;
    border: none;
  }

  @media (min-width: 768px) {
    div {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const ModalDiv = styled.div`
  width: 90%;
  max-width: 370px;
  -webkit-box-align: center;
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  margin-top: 10px;
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

export const DeleteBtn = styled.button`
  width: 210px;
  height: 40px;
  background-color: #ff577f;
  border-radius: 4px;
  border: none;
  margin-top: 1rem;
  margin-left: 5%;
  color: white;
  cursor: pointer;
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
