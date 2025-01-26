import style from './style.module.scss';
import Logo from './logo.svg';
import Avatar from './avatar.svg';
import Settings from './settings.svg';
import Search from './search.svg';
import Sidebar from './sidebar.svg';
import DesignButton from "../../../src/components/DesignButton";
import Input from "../../../src/components/Input";

const Header = () => {
	return (
		<header >
			<div className={style.header}>
				<div className={style.logo}>
					<img className={style.logotype} src={Logo} alt="logo"/>
					<img className={style.sidebar} src={Sidebar} alt="sidebar"/>
				</div>
				<div className={style.nav}>
					<div className={style.search}>
						<Input src={Search} search={false} title="" calendar={false} add={false} necessarily="" placeholder="Поиск"/>
					</div>
					<div className={style.profile}>
						<img className={style.avatar} src={Avatar} alt="profile"/>
						<p className={style.username}>Максим Галактионов</p>
					</div>
					<DesignButton src={Settings} alt="settings"/>
				</div>
			</div>
			<hr/>
		</header>
	);
};

export default Header;
