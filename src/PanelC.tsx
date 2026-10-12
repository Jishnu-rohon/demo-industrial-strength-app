import React from 'react';
import RestClient from './classes/RestClient';
import { NavLink } from 'react-router-dom';

interface PanelCProps {
    fname?: string;
    lname?: string;
}

export interface Employee {
    id: number;
    name: string;
    age: number;
    salary: number;
}

const employees: Employee[] = [
    {
        id: 1,
        name: 'John Doe',
        age: 30,
        salary: 65000.0,
    },
    {
        id: 2,
        name: 'Jane Smith',
        age: 27,
        salary: 72000.0,
    },
    {
        id: 3,
        name: 'Mike Johnson',
        age: 35,
        salary: 81000.0,
    },
];

const PanelC: React.FC<PanelCProps> = ({ fname = "John", lname = "Doe" }) => {
    const [employees, setEmployees] = React.useState<Employee[]>([]);
    React.useEffect(() => {
        const rc = new RestClient();
        rc.getAllEmployees().then((data) => {
            setEmployees(data);
        }).catch((error) => {
            console.error("Error fetching employees:", error);
        });
    }, []);
    return (
        <div>
            <h2>Panel C</h2>
            <p>This is Panel C content.</p>
            <p>First Name: {fname}</p>
            <p>Last Name: {lname}</p>
            <pre>{JSON.stringify(employees, null, 2)}</pre>
            <ul>
                {employees.map((employee) => (
                    <li key={employee.id}>
                        <NavLink to={`/employee/${employee.id}`}>
                            {employee.name}
                        </NavLink>
                         - Age: {employee.age}, Salary: ${employee.salary}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PanelC;