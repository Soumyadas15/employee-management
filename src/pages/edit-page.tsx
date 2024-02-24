import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns"
import { useEmployeeContext } from '@/contexts/employee-context';
import { Heading } from '@/components/heading';
import toast from 'react-hot-toast';



const EditPage = () => {
    // Get the employee ID from the URL parameters
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    
    // Access the employee context to get and update employee data
    const { employees, setEmployees } = useEmployeeContext();
    const employeeIndex = Number(id);
    const employee = employees[employeeIndex];

    // Initialize state variables
    const [formData, setFormData] = useState(employee);

    //@ts-ignore
    const [date, setDate] = useState<Date | undefined>(employee.birthdate);





    // Handle input change for form fields
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };




    // Handle form submission (update eisting employee)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const updatedEmployees = [...employees];
        
        //@ts-ignore
        if (date && date !== employee.birthdate) {
            formData.birthdate = date.toISOString();
        } else {
            formData.birthdate = employee.birthdate;
        }
        updatedEmployees[employeeIndex] = formData;

        setEmployees(updatedEmployees);
        navigate('/list');
        toast.success("Details updated", {
            style: {
                color: "white",
                backgroundColor: '#575757',
            }
        })
    };


    

    return (
        <div className="p-6 pt-8 w-full flex flex-col gap-6">

            {/* Heading for the edit page */}
            <Heading
                title="Edit employee"
                subHeading="Edit an existing employee"
            />

            <form onSubmit={handleSubmit}>
                <div className="grid w-full items-center gap-4">




                    {/* Input field for employee name */}

                    <div className="flex flex-col space-y-1.5">
                        <div>Name</div>
                        <input
                            id="name"
                            placeholder="Full name of employee"
                            className="rounded-[5px] border-[2px] border-neutral-300 px-3 py-2 text-sm"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>




                    {/* Input field for employee department */}

                    <div className="flex flex-col space-y-1.5">
                        <div>Department</div>
                        <input
                            id="department"
                            placeholder="Department"
                            className="rounded-[5px] border-[2px] border-neutral-300 px-3 py-2 text-sm"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                        />
                    </div>




                    {/* Input field for employee experience */}

                    <div className="flex flex-col space-y-1.5">
                        <div>Experience</div>
                        <input
                            id="experience"
                            placeholder="Years of experience (in years)"
                            type='number'
                            className="rounded-[5px] border-[2px] border-neutral-300 px-3 py-2 text-sm"
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                        />
                    </div>




                    {/* Popover for selecting employee birthdate */}

                    <div className="flex flex-col space-y-1.5">
                        <div>Birthday</div>
                        <Popover>
                            <PopoverTrigger asChild>
                                
                                <Button
                                    variant={"outline"}
                                    className="w-[300px] border-[2px] border-neutral-300 rounded-[5px] justify-start text-left font-normal"
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                </Button>

                            </PopoverTrigger>

                            <PopoverContent className="w-auto p-0 z-10 bg-neutral-200 rounded-[10px]" align="start">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>




                {/* Submission button */}

                <div className="mt-4 flex justify-between">
                    <Button type="submit">Save</Button>
                </div>
            </form>
        </div>
    );
};

export default EditPage;
