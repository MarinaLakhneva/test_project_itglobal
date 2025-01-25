import style from './style.module.scss';
import Logo from './logo.svg';
import Avatar from './avatar.svg';
import Settings from './settings.svg';
import Search from './search.svg';
import DesignButton from "../../../src/components/DesignButton";
import Input from "../../../src/components/Input";

const Header = () => {
	return (
		<header>
			<div className={style.header}>
				<div>
					<img src={Logo} alt="logo" style={{cursor: "pointer"}}/>
				</div>
				<div className={style.nav}>
					<div style={{width: "296px"}}>
						<Input src={Search} search={false} title="" calendar={false} add={false} necessarily="" placeholder="Поиск"/>
					</div>
					
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
