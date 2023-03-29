import React, { createContext } from "react";
import api from "../service/api";
import { useState } from "react";

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  async function CreateContact(data) {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      try {
        api.defaults.headers.authorization = `Bearer ${token}`;
        api.post("/contacts", data);
        setIsModalOpen(false);
      } catch (error) {
        console.error(error);
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
      }
    }
  }

  return (
    <ContactContext.Provider
      value={{
        CreateContact,
        DeleteContact,
        UpdateContact,
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
