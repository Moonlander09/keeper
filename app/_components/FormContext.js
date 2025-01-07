"use client";

import { createContext, useContext, useState } from "react";

const FormContext = createContext();

function FormProvider({ children }) {
  const [input, setInput] = useState("");
  const [dataField, setDataField] = useState([]);

  return (
    <FormContext.Provider value={{ input, setDataField, setInput, dataField }}>
      {children}
    </FormContext.Provider>
  );
 }

function useForm() {
  const context = useContext(FormContext);
  if (context === undefined)
    throw new Error("Context was used outside provider");
  return context;
}

export { FormProvider, useForm };
