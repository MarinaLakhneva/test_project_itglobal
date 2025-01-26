import style from './style.module.scss';
import Logo from './logo.svg';
import Avatar from './avatar.svg';
import Settings from './settings.svg';
import Search from './search.svg';
import DesignButton from "../DesignButton";
import Input from "../Input";
import SidebarImg from "../SidebarImg";

const Header = () => {
	return (
		<header>
			<div className={style.header}>
				<div className={style.logo}>
					<img className={style.logotype} src={Logo} alt="logo"/>
					<div className={style.sidebar}><SidebarImg width={20} height={20} fill="#2E3238"/></div>
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
