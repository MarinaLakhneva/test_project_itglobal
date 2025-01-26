import style from './style.module.scss';

const DesignButton = ({src, alt, disabled}) => {
	return (
		<img className={`${style.button} ${disabled && style.btn}`} src={src} alt={alt}/>
	);
};

export default DesignButton;
