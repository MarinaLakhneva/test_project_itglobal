import style from './style.module.scss';
import Logo from './logo.svg';
import Avatar from './avatar.svg';
import Settings from './settings.svg';
import Search from './search.svg';

import SearchBox from "../../components/SearchBox";
import DesignButton from "../../../src/components/DesignButton";
const Header = () => {
	return (
		<header>
			<div className={style.header}>
				<div>
					<img src={Logo} alt="logo"/>
				</div>
				<div className={style.nav}>
					<SearchBox text="Поиск" src={Search}/>
					<div className={style.profile}>
						<img className={style.avatar} src={Avatar} alt="profile"/>
						<p>Максим Галактионов</p>
					</div>
					<DesignButton src={Settings} alt="settings"/>
				</div>
			</div>
			<hr/>
		</header>
	);
};

export default Header;
