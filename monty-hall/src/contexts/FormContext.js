import { createContext, useState } from 'react';

const FormContext = createContext();

function FormProvider({ children }) {
  const [numDoors, setNumDoors] = useState(2);
  const [doorSelected, setDoorSelected] = useState(1);

  return (
    <FormContext.Provider value={{
      numDoors, setDoorSelected, setNumDoors, doorSelected
    }}>
      {children}
    </FormContext.Provider>
  );
}

export { FormContext, FormProvider };