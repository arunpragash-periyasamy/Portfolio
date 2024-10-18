import { FaUser } from "react-icons/fa";
import Menu from "../Menu";
import { Fragment } from "react";

const menus = [
    {
        menuName: "About",
        Icon: FaUser,
        url:'/about'
    },
    {
        menuName: "Work",
        Icon: FaUser,
        url: '/work'
    },
    {
        menuName: "Blog",
        Icon: FaUser,
        url: 'blog'
    },
]

const Sidebar = ({className}) => {

  return (
    <div className={`flex flex-col gap-3 py-4 bg-[#222222] rounded-md ${className}`}>
    {
        menus.map((menu, index)=>
                <Fragment key={menu.menuName}>
            <Menu Icon={menu.Icon} menuName={menu.menuName} url={menu.url}/>
            {(index !== menus.length-1) && <hr className="border-slate-700 w-full" />}
            </Fragment >
        )
    }

    </div>
  );
};

export default Sidebar;
