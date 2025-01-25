import style from './style.module.scss';
import Input from "../Input";
import {titles} from "./mock"
import {useEffect, useState} from "react";
import CreateSubtask from "../CreateSubtask";

const CreateTask = () => {
	const [isOpen, setIsOpen] = useState(false);
	
	const openModal = () => {
		setIsOpen(true);
		document.body.style.overflow = 'hidden';
	};
	const closeModal = () => {
		setIsOpen(false);
		document.body.style.overflow = 'unset';
	};
	
	const [isScrolled, setIsScrolled] = useState(false);
	const handleScroll = () => {
		if (window.scrollY > 0) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	
	return (
		<div className={style.content}>
			<div className={`${style.options} ${isScrolled && style.scrolled}`}>
				<div style={{display: "flex", gap: "16px"}}>
					<p className={style.subtask}>Подзадача</p>
					<button onClick={openModal}>Создать</button>
					{isOpen && <CreateSubtask onClose={closeModal}/>}
				</div>
				<div style={{display: "flex", gap: "4px"}}>
					<button className={style.save}>Сохранить</button>
					<button>Сохранить и выйти</button>
				</div>
			</div>
			<div className={style.task}>
				<p className={style.title}>STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller</p>
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
	);
};

export default CreateTask;
