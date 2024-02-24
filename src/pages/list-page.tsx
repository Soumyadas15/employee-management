import { EmployeeCard } from "@/components/employee-card";
import { Heading } from "@/components/heading";
import { useEmployeeContext } from "@/contexts/employee-context";
import { format } from 'date-fns';

const ListPage = () => {
    const { employees } = useEmployeeContext();

    return (
        <div className="p-6 pt-8 w-full">
            <Heading
                title="My employees"
                subHeading="All employees working in the company"
            />
            <div className="mt-6 h-[87%] scrollbar-hide w-full overflow-hidden overflow-y-scroll">
                <div className="h-full w-full rounded-md">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-2">
                        {employees.map((employee, index) => (
                            <EmployeeCard 
                                key={index} 
                                name={employee.name}
                                department={employee.department}
                                birthdate={format(new Date(employee.birthdate), 'MMM do yyyy')}
                                //@ts-ignore
                                experience={employee.experience}
                                showEditButton
                                index={index}
                            />
                        ))}
                    </div>
                    
                </div>    
            </div>
        </div>
    )
}
export default ListPage;
