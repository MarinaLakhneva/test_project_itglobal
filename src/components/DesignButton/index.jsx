import style from './style.module.scss';

const DesignButton = ({src, alt}) => {
	return (
		<img className={style.button} src={src} alt={alt}/>
	);
};

export default DesignButton;
