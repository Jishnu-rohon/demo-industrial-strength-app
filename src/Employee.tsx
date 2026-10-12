import { useParams } from "react-router-dom";
import RestClient from "./classes/RestClient";
import React from "react";
import type { Employee } from "./PanelC"; // Import the Employee interface from PanelC

const EmployeeFunc = () => {
  const { id } = useParams<{ id: string }>();
  const restClient = new RestClient();
  const [employee, setEmployee] = React.useState<Employee | null>(null);
  React.useEffect(() => {
    const fetchEmployee = async () => {
      try {
        if (!id) {
          console.error("No employee ID provided in the URL.");
          return;
        }
        const employeeData = await restClient.getEmployeeById(parseInt(id));
        setEmployee(employeeData);
      } catch (error) {
        console.error("Error fetching employee:", error);
      }
    };
    fetchEmployee();
  }, [id]);
  return (
    <div>
      <h2>Employee Information</h2>
      <p>Employee ID: {id}</p>
      {employee && (
        <div>
          <p>Name: {employee.name}</p>
          <p>Age: {employee.age}</p>
          <p>Salary: ${employee.salary}</p>
        </div>
      )}
        {/* You can fetch and display more employee details here based on the ID */}
    </div>
  );
};

export default EmployeeFunc;