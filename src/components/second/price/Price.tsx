import { IoHeartOutline } from "react-icons/io5";
import { IoShareSharp } from "react-icons/io5";

interface IPrice {}

export default function Price({}: IPrice) {
    return <div className="flex items-center justify-between">
        <div>
        <h3 className="text-[#525457] font-semibold text-[18px]">$210.00 - $250.00</h3>
        </div>
        <div className="flex gap-3">
            <div className="border border-black w-[50px] h-[50px] bg-white rounded flex items-center justify-center"><IoShareSharp size={25}/></div>
            <div className="border border-black w-[50px] h-[50px] bg-white rounded flex items-center justify-center"><IoHeartOutline size={25}/></div>
        </div>
    </div>
}
