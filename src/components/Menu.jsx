import { CgSandClock } from "react-icons/cg";

const Menu = ({Icon, menuName}) => {
    return(
        <div className="flex flex-col items-center p-2 hover:text-orange-300 font-bold">
        {Icon ? <Icon/> : <CgSandClock />}
        {menuName ? menuName : "Menu title"}
      </div>
    )
}

export default Menu;