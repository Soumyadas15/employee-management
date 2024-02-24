import React, { createContext, useContext, useState } from 'react';



/**
 * Type definition for an employee object.
 */

type Employee = {
  name: string;
  department: string;
  birthdate: string;
  experience: string;
  showEditButton?: boolean;
};



/**
 * Type definition for the context data containing the array of employees and a function to update it.
 */

type EmployeeContextType = {
  employees: Employee[];
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
};



/**
 * Creates a context for managing employee data.
 */


const EmployeeContext = createContext<EmployeeContextType | undefined>(undefined);




/**
 * Provider component for managing the state of employees.
 * @param children - The child elements to render.
 */


export const EmployeeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  return (
    <EmployeeContext.Provider value={{ employees, setEmployees }}>
      {children}
    </EmployeeContext.Provider>
  );
};



/**
 * Custom hook to consume the employee context.
 * @returns The employee context data.
 */

export const useEmployeeContext = () => {
  const context = useContext(EmployeeContext);
  if (!context) {
    throw new Error('useEmployeeContext must be used within an EmployeeProvider');
  }
  return context;
};


/**
 * Adds a new employee to the array of employees.
 * @param newEmployee - The new employee to add.
 * @param setEmployees - The function to update the array of employees.
 */

export const addEmployee = (newEmployee: Employee, setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>) => {
  setEmployees(prevEmployees => [...prevEmployees, newEmployee]);
};
