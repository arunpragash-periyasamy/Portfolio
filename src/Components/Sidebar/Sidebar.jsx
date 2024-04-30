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
      <nav className="sidebar d-flex flex-column">
        <NavLink
          to="/about"
          className={({ isActive, isPending, isTransitioning }) =>
            [
              isPending ? "pending" : "",
              isActive ? "active" : "",
              isTransitioning ? "transitioning" : "",
            ].join(" ") + "link-items"
          }
        >
          {" "}
          <span className="icon center">
            <MdOutlinePersonOutline />{" "}
          </span>
          <span className="name center">About</span>
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive, isPending, isTransitioning }) =>
            [
              isPending ? "pending" : "",
              isActive ? "active" : "",
              isTransitioning ? "transitioning" : "",
            ].join(" ") + "link-items"
          }
        >
          {" "}
          <span className="icon center">
            <MdOutlinePersonOutline />{" "}
          </span>
          <span className="name center">Resume</span>
        </NavLink>
        <NavLink
          to="/works"
          className={({ isActive, isPending, isTransitioning }) =>
            [
              isPending ? "pending" : "",
              isActive ? "active" : "",
              isTransitioning ? "transitioning" : "",
            ].join(" ") + "link-items"
          }
        >
          {" "}
          <span className="icon center">
            <MdOutlinePersonOutline />{" "}
          </span>
          <span className="name center">Works</span>
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive, isPending, isTransitioning }) =>
            [
              isPending ? "pending" : "",
              isActive ? "active" : "",
              isTransitioning ? "transitioning" : "",
            ].join(" ") + "link-items"
          }
        >
          {" "}
          <span className="icon center">
            <MdOutlinePersonOutline />{" "}
          </span>
          <span className="name center">Blog</span>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive, isPending, isTransitioning }) =>
            [
              isPending ? "pending" : "",
              isActive ? "active" : "",
              isTransitioning ? "transitioning" : "",
            ].join(" ") + "link-items"
          }
        >
          {" "}
          <span className="icon center">
            <MdOutlinePersonOutline />{" "}
          </span>
          <span className="name center">Contact</span>
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive, isPending, isTransitioning }) =>
            [
              isPending ? "pending" : "",
              isActive ? "active" : "",
              isTransitioning ? "transitioning" : "",
            ].join(" ") + "link-items"
          }
        >
          {" "}
          <span className="icon center">
            <MdOutlinePersonOutline />{" "}
          </span>
          <span className="name center">Products</span>
        </NavLink>
      </nav>
    );
}
export default Sidebar;