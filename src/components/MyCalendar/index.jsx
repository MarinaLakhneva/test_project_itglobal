import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import style from './style.module.scss';

const MyCalendar = ({ isOpen, onClose, title, onDateSelect  }) => {
	const nowDate = new Date();
	const [date, setDate] = useState(nowDate);
	
	const handleDateChange = (newDate) => {
		setDate(newDate);
		onDateSelect(newDate.toLocaleDateString('ru-RU'));
	};

	if (!isOpen) return null;
	
	return (
		<div className={style.modal}>
			<div className={style.content}>
				<p>{title}</p>
				<Calendar
					onChange={handleDateChange}
					value={date}
				/>
				<button onClick={onClose}>Закрыть</button>
			</div>
		</div>
	);
};

export default MyCalendar;
