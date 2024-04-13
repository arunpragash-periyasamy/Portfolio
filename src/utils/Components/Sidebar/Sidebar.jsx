import { MdOutlinePersonOutline } from "react-icons/md";
import './Sidebar.css'
const Sidebar = () =>{
    return(
        <div className="sidebar">
            <ul>
                <li>
                    <div className="icon"><MdOutlinePersonOutline />
</div>
                    <div className="name">About</div>
                </li>
            </ul>
        </div>
    )
}
export default Sidebar;