import style from './style.module.scss';
import Input from "../Input";
import {titles} from "./mock"
import {useEffect, useRef} from "react";

const CreateSubtask = ({onClose}) => {
	const modalRef = useRef(null);
	const handleClickOutside = (event) => {
		const isClickInside = modalRef.current && modalRef.current.contains(event.target);
		if(!isClickInside){
			onClose();
		};
	};
	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);
	return (
		<div className={style.module}>
			<div className={style.content} ref={modalRef}>
				<div className={style.options}>
					<div style={{display: "flex", gap: "16px"}}>
						<p className={style.subtask}>Подзадача</p>
					</div>
					<div style={{display: "flex", gap: "4px"}}>
						<button className={style.save}>Сохранить</button>
						<button onClick={onClose}>Отменить</button>
					</div>
				</div>
				<div className={style.task}>
					<p className={style.title}>Новая запись</p>
					<div className={style.information}>
						{
							titles.map((value, index) => (
								<Input
									title={value.title}
									necessarily={value.necessarily}
									key={index}
									search={value.search}
									add={value.add}
									calendar={value.calendar}
									titleCalendar={value.title}
									placeholder={value.title}
									src={value.src}
								/>
							))
						}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateSubtask;
