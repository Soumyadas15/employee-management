import { Button } from "@/components/ui/button"
import { useEmployeeContext } from "@/contexts/employee-context";
import { Briefcase, Calendar, Code, Trash2, User } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface EmployeeCardProps {
    name: string;
    birthdate: string;
    department: string;
    experience: number;
    showEditButton: boolean;
    index: number
}
export const EmployeeCard = ({
    name,
    birthdate,
    department,
    experience,
    showEditButton,
    index
}: EmployeeCardProps) => {

    const navigate = useNavigate();

    const { employees, setEmployees } = useEmployeeContext();

    const handleEdit = () => {
        navigate(`/edit/${index}`);
    };

    const handleDelete = () => {
        const updatedEmployees = employees.filter((_, i) => i !== index);
        setEmployees(updatedEmployees);
        toast.success("Employee deleted", {
            style: {
                color: "white",
                backgroundColor: '#575757',
            }
        })
    };
        
    return (

        <div>
            <div className="
                    w-full 
                    rounded-xl 
                    bg-neutral-100 
                    border-neutral-200 
                    p-5 
                    shadow-sm 
                    border-[1px]
            ">
                <div className="flex flex-col gap-3 items-start">
                    <div className="flex gap-2 items-center justify-between w-full justify-between">
                        <div className="flex items-center gap-2">
                            <div><User/></div>
                            <div className="font-bold text-xl">{name}</div>
                        </div>
                        <div>
                            <Trash2 
                                className="text-red-600 hover:opacity-50 transition hover:cursor-pointer"
                                onClick={handleDelete}
                            />
                        </div>
                        
                    </div>

                    <div className="flex flex-col">
                        <div className="flex gap-2 items-center">
                            <div><Code className="text-neutral-500 w-4"/></div>
                            <div className="font-semibold text-sm text-neutral-500">{department}</div>
                        </div>

                        <div className="flex gap-2 items-center">
                            <div><Briefcase className="text-neutral-500 w-4"/></div>
                            <div className="font-semibold text-sm text-neutral-500">{experience}</div>
                        </div>

                        <div className="flex gap-2 items-center">
                            <div><Calendar className="text-neutral-500 w-4"/></div>
                            <div className="font-semibold text-sm text-neutral-500">{birthdate}</div>
                        </div>
                    </div>
                    
                    
                    
                </div>
                
                {
                    showEditButton && (
                        <Button onClick={handleEdit} variant="default" size="sm" className="rounded-[5px] mt-5">Edit</Button>
                    )
                }
               
            </div>
        </div>
    )
}