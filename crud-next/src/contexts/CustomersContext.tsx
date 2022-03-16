import { createContext, ReactNode, useContext } from "react";

interface CustomersContextData {

}

interface CustomersProviderProps {
  children: ReactNode;
}

const CustomersContext = createContext({} as CustomersContextData);

export function CustomersProvider({ children }: CustomersProviderProps) {
  async function getCustomers() {

  }

  async function createCustomer() {

  }

  async function getCustomerById() {

  }

  async function deleteCustomerById() {

  }

  return (
    <CustomersContext.Provider value={{

    }}>
      {children}
    </CustomersContext.Provider>
  );
}

export function useCustomers() {
  return useContext(CustomersContext);
}