import style from './style.module.scss';
import Logo from './logo.svg';
import Avatar from './avatar.svg';
import Settings from './settings.svg';
import SearchBox from "../../components/SearchBox";
const Header = () => {
	return (
		<header>
			<div className={style.header}>
				<div>
					<img src={Logo} alt="logo"/>
				</div>
				<div className={style.nav}>
					<SearchBox/>
					<div className={style.profile}>
						<img className={style.avatar} src={Avatar} alt="profile"/>
						<p>Максим Галактионов</p>
					</div>
					<img className={style.settings} src={Settings} alt="settings"/>
				</div>
			</div>
			<hr className={style.hr}/>
		</header>
	);
};



export default Header;
