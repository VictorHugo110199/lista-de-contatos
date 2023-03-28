import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../service/api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [isLoged, setIsLoged] = useState(false);

  const [contacts, setContacts] = useState([]);

  async function Register(data) {
    await api
      .post("/users", data)
      .then((res) => {
        toast("Conta Criada com sucesso!");
        navigate("/login");
      })
      .catch((err) => toast(err.response.data.message[0]));
  }

  async function Login(data) {
    await api
      .post("/login", data)
      .then((res) => {
        window.localStorage.clear();
        window.localStorage.setItem("@TOKEN", res.data.token);
        window.localStorage.setItem("@USERID", res.data.user.id);
        setIsLoged(true);
        toast("Sucesso total campeão!");
        navigate("/dashboard");
      })
      .catch((err) => toast(err.response.data.message[0]));
  }

  async function LoadUser() {}

  return (
    <UserContext.Provider
      value={{ Register, Login, isLoged, setIsLoged, contacts, setContacts }}
    >
      {children}
    </UserContext.Provider>
  );
};
