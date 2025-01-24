import style from './style.module.scss';
import Search from './search.svg';
const SearchBox = () => {
	return (
		<div className={style.inputContainer}>
			<input
				className={style.input}
				placeholder="Поиск"
			/>
			<img className={style.svg} src={Search} alt="search"/>
		</div>
	);
};



export default SearchBox;
