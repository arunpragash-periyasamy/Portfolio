import { MdOutlinePersonOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";
import './Sidebar.css'
import { useEffect, useState } from "react";
const Sidebar = () => {
    const [currentState, setCurrentState] = useState(false);
    const notification = async () =>{
        const permission = await Notification.requestPermission();
        if(permission === "granted"){
            alert("Permission granted");
            const notify = new Notification("Example Notification",{
                body:"From the Arunpragash Portfolio"
            });
            notify.addEventListener("close",(e)=>{
                alert("notification is closed");
            })
        }else{
            alert("Permission Denied");
        }
    }
    const toggleTheme = (state) =>{
        if(state){
            document.documentElement.setAttribute('data-theme', 'light');
        }else{
            document.documentElement.setAttribute('data-theme', 'dark');
        }
        document.documentElement.setAttribute('data-theme', 'light');
        // setCurrentState(!state)
    }
    useEffect(()=>{

        const useDark = window.matchMedia("(prefers-color-scheme: dark)");
        console.log(useDark.matches);
    },[currentState])
    return (
        <div className="">
            <nav className="sidebar">
                <NavLink to="/message" className={({isActive}) => isActive ? "active" : ""
  }>Message</NavLink>
                <NavLink to="/home" className={({ isActive, isPending, isTransitioning }) =>
    [
      isPending ? "pending" : "",
      isActive ? "active" : "",
      isTransitioning ? "transitioning" : "",
    ].join(" ")
  }>Home</NavLink>
                <NavLink to="/about" className={({ isActive, isPending, isTransitioning }) =>
    [
      isPending ? "pending" : "",
      isActive ? "active" : "",
      isTransitioning ? "transitioning" : "",
    ].join(" ")
  }>About</NavLink>
            </nav>
            <ul>
                <li className="align-items-center active">
                    <div className="icon"><MdOutlinePersonOutline />
                    </div>
                    <div className="name">About</div>
                </li>
                <li className="align-items-center">
                    <div className="icon"><MdOutlinePersonOutline />
                    </div>
                    <div className="name">About</div>
                </li>
                <li className="align-items-center">
                    <div className="icon"><MdOutlinePersonOutline />
                    </div>
                    <div className="name">About</div>
                </li>
            </ul>
            <button onClick={notification}>Notification</button>
            <button onClick={()=>toggleTheme(currentState)}>Dark/Light</button>
        </div>
    )
}
export default Sidebar;