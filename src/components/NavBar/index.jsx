import style from './style.module.scss';
import Clean from "./clean.svg";
import Fix from "./fix.svg";
import Icon from "./icon.svg";
import {mockNav} from "./mock"
import DesignButton from "../DesignButton";
import Input from "../Input";

const NavBar = () => {
	return (
		<div className={style.navbar}>
			<div className={style.container}>
				<div className={style.search}>
					<Input src={Clean} search={false} title="" calendar={false} add={false} necessarily="" placeholder="Поиск по меню"/>
					<DesignButton src={Fix} alt="fix"/>
				</div>
				<hr/>
			</div>
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
