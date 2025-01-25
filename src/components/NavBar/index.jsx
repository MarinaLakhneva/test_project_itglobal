import style from './style.module.scss';
import Clean from "./clean.svg";
import Fix from "./fix.svg";
import Icon from "./icon.svg";
import {mockNav} from "./mock"
import SearchBox from "../SearchBox";
import DesignButton from "../../../src/components/DesignButton";

const NavBar = () => {
	return (
		<div className={style.navbar}>
			<div className={style.container}>
				<SearchBox text="Поиск по меню" src={Clean}/>
				<DesignButton src={Fix} alt="fix"/>
			</div>
			<hr/>
			<div className={style.nav}>
				{mockNav.map((value, index) => (
					<div className={style.item} key={index}>
						<img src={Icon} alt="icon"/>
						<p>{value}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default NavBar;
