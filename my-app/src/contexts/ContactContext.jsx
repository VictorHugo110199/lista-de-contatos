import React, { createContext } from "react";
import api from "../service/api";
import { useNavigate } from "react-router-dom";

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const navigate = useNavigate();

  async function CreateContact(data) {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      try {
        api.defaults.headers.authorization = `Bearer ${token}`;
        api
          .post("/contacts", data)
          .then((response) => console.log(response.json));
      } catch (error) {
        console.error(error);
        //navigate("/");
      }
    }
  }

  async function DeleteContact(id) {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      try {
        api.defaults.headers.authorization = `Bearer ${token}`;
        await api.delete(`/contacts/${id}`);
      } catch (error) {
        console.error(error);
        //navigate("/");
      }
    }
  }

  async function UpdateContact(id, data) {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      try {
        api.defaults.headers.authorization = `Bearer ${token}`;
        await api.patch(`/contacts/${id}`, data);
      } catch (error) {
        console.error(error);
        //navigate("/");
      }
    }
  }

  return (
    <ContactContext.Provider
      value={{ CreateContact, DeleteContact, UpdateContact }}
    >
      {children}
    </ContactContext.Provider>
  );
};
