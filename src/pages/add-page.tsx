import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useForm } from "react-hook-form";
import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns"
import { cn } from "@/lib/utils";
import { addEmployee, useEmployeeContext } from "@/contexts/employee-context";
import { Calendar } from "@/components/ui/calendar";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type FormData = {
    name: string;
    department: string;
    experience: string;
    birthdate: Date;
};

const AddPage = () => {
    const { register, handleSubmit } = useForm<FormData>();
    const { employees, setEmployees } = useEmployeeContext();
    const [date, setDate] = useState<Date>();
    const navigate = useNavigate();



    

    const onSubmit = (data: FormData) => {
        const formDataWithDate = { ...data, birthdate: date };
        console.log(formDataWithDate);
        //@ts-ignore
        addEmployee(formDataWithDate, setEmployees);
        navigate('/list');
        toast.success("Employee added", {
            style: {
                color: "white",
                backgroundColor: '#575757',
            }
        })
    };




    return (
        <div className="p-6 pt-8 w-full flex flex-col gap-6">


            
            {/* Heading for the add page */}
            <Heading
                title="Add employees"
                subHeading="Add new employee to the system"
            />




            {/* Form for adding a new employee */}

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid w-full items-center gap-4">




                    {/* Input field for employee name */}

                    <div className="flex flex-col space-y-1.5">
                        <div>Name</div>
                        <input
                            id="name"
                            placeholder="Full name of employee"
                            className="rounded-[5px] border-[2px] border-neutral-300 px-3 py-2 text-sm"
                            {...register('name')}
                            required
                        />
                    </div>




                    {/* Input field for employee department */}

                    <div className="flex flex-col space-y-1.5">
                        <div>Department</div>
                        <input
                            id="department"
                            placeholder="Department"
                            className="rounded-[5px] border-[2px] border-neutral-300 px-3 py-2 text-sm"
                            {...register('department')}
                            required
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
                            {...register('experience')}
                            required
                        />
                    </div>




                    {/* Input field for employee birthday */}

                    <div className="flex flex-col space-y-1.5">
                        <div>Birthday</div>
                        <Popover>
                            <PopoverTrigger asChild>

                                {/* Button with calendar icon to trigger date selection */}
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[300px] border-[2px] border-neutral-300 rounded-[5px] justify-start text-left font-normal",
                                        !date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>


                            {/* Calendar component for selecting the birthdate */}


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
                    <Button type="submit">Add</Button>
                </div>
            </form>
        </div>
    )
}
export default AddPage; 