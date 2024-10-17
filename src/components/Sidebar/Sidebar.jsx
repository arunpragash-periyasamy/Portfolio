import { FaUser } from "react-icons/fa";

const Sidebar = () => {
    return (
        <div className="flex flex-col gap-7 bg-neutral-900 p-3 m-2 rounded">
            <div className="flex flex-col items-center hover:text-orange-300 font-bold gap-1">
                <FaUser />About
            </div>
            <hr />
            <div className="flex flex-col items-center hover:text-orange-300 font-bold gap-1">
                <div>
                <FaUser />
                </div>
                <div>
                About
                </div>
            </div>
        </div>
    )
}

export default Sidebar;