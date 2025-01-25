import style from './style.module.scss';
import Search from './search.svg';
import Add from './plus.svg';
import DesignButton from "../../../src/components/DesignButton";

const Input = ({title, necessarily, key, search, add}) => {
	return (
		<div key={key}>
			<div className={style.container}>
				{necessarily !== "" &&
					<p style={{color: "#B21F00", marginRight: "4px"}}>{necessarily}</p>
				}
				<p className={style.title}>{title}</p>
			</div>
			<div className={style.options}>
				<input
					className={style.input}
					placeholder="Введи что-то"
				/>
				{add &&
					<DesignButton src={Add} alt="add" />
				}
				{search &&
					<DesignButton src={Search} alt="search" />
				}
			</div>
		</div>
	);
};

export default Input;
