import React, { createContext, useContext, useState } from 'react';


// Define the type for the Employee object
type Employee = {
  name: string;
  department: string;
  birthdate: string;
  experience: string;
  showEditButton?: boolean;
};


// Define the type for the context data
type EmployeeContextType = {
  employees: Employee[];
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
};



// Create a context for managing employee data
const EmployeeContext = createContext<EmployeeContextType | undefined>(undefined);



// Provider component for managing the state of employees
export const EmployeeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // State to hold the array of employees
  const [employees, setEmployees] = useState<Employee[]>([]);

  return (
    // Provide the employee context with the current array of employees and the function to update it
    <EmployeeContext.Provider value={{ employees, setEmployees }}>
      {children}
    </EmployeeContext.Provider>
  );
};

// Custom hook to consume the employee context
export const useEmployeeContext = () => {
  // Access the context containing employee data
  const context = useContext(EmployeeContext);
  // Throw an error if the hook is used outside of the EmployeeProvider
  if (!context) {
    throw new Error('useEmployeeContext must be used within an EmployeeProvider');
  }
  return context;
};

// Function to add a new employee to the array of employees
export const addEmployee = (newEmployee: Employee, setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>) => {
  // Update the array of employees with the new employee added
  setEmployees(prevEmployees => [...prevEmployees, newEmployee]);
};
