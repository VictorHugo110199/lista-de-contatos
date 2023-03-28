import React, { createContext } from "react";
import { toast } from "react-toastify";
import api from "../services/api";

export const ContactContext = createContext();

export const UserProvider = ({ children }) => {
  async function CreateContact(data) {}

  async function DeleteContact(id) {}

  async function UpdateContact(id) {}

  return (
    <ContactContext.Provider
      value={{ CreateContact, DeleteContact, UpdateContact }}
    >
      {children}
    </ContactContext.Provider>
  );
};
