import style from './style.module.scss';

const SearchBox = ({text, src}) => {
	return (
		<div className={style.inputContainer}>
			<input
				className={style.input}
				placeholder={text}
			/>
			<img className={style.svg} src={src} alt="search"/>
		</div>
	);
};

export default SearchBox;
