import style from './style.module.scss';
import Star from "./star.svg";
import SidebarImg from "../SidebarImg";

const SideBar = () => {
	return (
		<div className={style.sidebar}>
			<div className={style.svg}><SidebarImg width={24} height={24} fill="#005999"/></div>
			<img className={style.svg} src={Star} alt="star"/>
		</div>
	);
};

export default SideBar;
