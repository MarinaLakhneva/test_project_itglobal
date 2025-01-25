import style from './style.module.scss';
import Sidebar from "./sidebar.svg";
import Star from "./star.svg";


const SideBar = () => {
	return (
		<div className={style.sidebar}>
			<img className={style.svg} src={Sidebar} alt="sidebar"/>
			<img className={style.svg} src={Star} alt="star"/>
		</div>
	);
};



export default SideBar;
