import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../service/api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [isLoged, setIsLoged] = useState(false);

  const [user, setUser] = useState({});

  const [contacts, setContacts] = useState([]);

  async function Register(data) {
    await api
      .post("/users", data)
      .then((res) => {
        toast("Conta Criada com sucesso!");
        navigate("/login");
      })
      .catch((err) => console.log(err));
  }

  async function Login(data) {
    await api
      .post("/login", data)
      .then((res) => {
        window.localStorage.clear();
        window.localStorage.setItem("@TOKEN", res.data.token);
        window.localStorage.setItem("@USERID", res.data.id);
        setIsLoged(true);
        LoadUser();
        toast("Login realizado com sucesso!");
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  }

  async function LoadUser() {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      try {
        api.defaults.headers.authorization = `Bearer ${token}`;
        const { data } = await api.get("/profile");
        setContacts(data.contacts);
        setUser(data);
      } catch (error) {
        console.error(error);
        navigate("/");
      }
    }
  }

  return (
    <UserContext.Provider
      value={{
        Register,
        Login,
        LoadUser,
        isLoged,
        setIsLoged,
        contacts,
        setContacts,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
