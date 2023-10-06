import {MdOutlineFoodBank} from "react-icons/md"
import {ImUserPlus} from "react-icons/im"
import {BsFillCarFrontFill} from "react-icons/bs"
import {HiHomeModern} from "react-icons/hi2"
const HomePage = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen items-center w-full gap-8">
        <div className="flex justify-center gap-4">
            <div className="w-72 h-72 bg-zinc-200 rounded-xl flex flex-col justify-center items-center cursor-pointer hover:bg-zinc-400 transition-all duration-300">
                <MdOutlineFoodBank className=" w-48 h-48 text-RED"/>
                <h3 className=" font-Viga text-xl text-BACKGROUND">Bestellung</h3>
            </div>
            <div className="w-72 h-72 bg-zinc-200 rounded-xl flex flex-col justify-center items-center cursor-pointer hover:bg-zinc-400 transition-all duration-300">
                <ImUserPlus className=" w-48 h-48 text-RED"/>
                <h3 className=" font-Viga text-xl text-BACKGROUND">Kunde</h3>
            </div>
        </div>
        <div className="flex justify-center gap-4">
            <div className="w-72 h-72 bg-zinc-200 rounded-xl flex flex-col justify-center items-center cursor-pointer hover:bg-zinc-400 transition-all duration-300">
                <HiHomeModern className=" w-48 h-48 text-RED"/>
                <h3 className=" font-Viga text-xl text-BACKGROUND">Address</h3>
            </div>
            <div className="w-72 h-72 bg-zinc-200 rounded-xl flex flex-col justify-center items-center cursor-pointer hover:bg-zinc-400 transition-all duration-300">
                <BsFillCarFrontFill className=" w-48 h-48 text-RED"/>
                <h3 className=" font-Viga text-xl text-BACKGROUND">Fahrer</h3>
            </div>
        </div>
    </div>
  )
}

export default HomePage