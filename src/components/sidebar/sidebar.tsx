import { List, Plus } from "lucide-react"
import { SidebarItem } from "./sidebar-item"
import { Avatar } from "../avatar"


/**
 * Renders the sidebar component.
 */


export const Sidebar = () => {
    return (
        <div className="bg-white border-r-2 hidden sm:block items-center 
                            justify-center border-neutral-200 shadow-sm 
                            border-opacity-50 w-[12rem] h-screen p-5 pt-8 pb-8">

            <div className="h-full w-full flex flex-col justify-between">

                <div className="h-[40%] w-full gap-2 flex flex-col">

                    <div className="flex flex-col h-[20%] w-full">

                        <h1 className="font-bold text-3xl">Procure</h1>

                    </div>

                    <div className="flex flex-col h-[70%] w-full gap-4">
                        <hr className="border-neutral-600"></hr>
                        <SidebarItem 
                            label="List" 
                            icon={ <List/>}
                            to="/list"
                            highlight="text-red-600"
                        />
                        <SidebarItem 
                            label="Add"  
                            icon={ <Plus/> }
                            to="/add"
                            highlight="text-green-600"
                        />
                    </div>
                </div>

                <div className="h-[10%] w-full flex items-center gap-2">
                    <Avatar/>
                    <div className="font-semibold">
                        Saumya
                    </div>
                </div>

            </div>
        </div>
    )
}