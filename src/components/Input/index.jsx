import style from './style.module.scss';
import Search from './search.svg';
import Add from './plus.svg';
import Calendar from './calendar.svg';
import Delete from './delete.svg';
import DesignButton from "../../../src/components/DesignButton";
import MyCalendar from "../MyCalendar";
import {useState} from "react";

const arrDisabled = ["Ответственный", "Группа", "Кем открыто", "Кем создано"];
const Input = ({title, necessarily, search, add, calendar, src, placeholder}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [inputDate, setInputDate] = useState('');
	const [inputText, setInputText] = useState('');
	const [arr, setArr] = useState([]);
	
	const handleDateSelect = (date) => {
		setInputDate(date);
	};

	const handleAddClick = () => {
			const newArr = [...arr, inputText];
			if (inputText !== ''){
				setArr(newArr);
				setInputText('');
			}
	};
	const handleDeleteClick = (index) => {
		setArr((prevArr) => prevArr.filter((_, i) => i !== index));
	};
	
	return (
		<div>
			{ title !== "" &&
				<div className={style.container}>
					{necessarily !== "" &&
						<p className={style.necessarily}>{necessarily}</p>
					}
					<p className={style.title}>{title}</p>
				</div>
			}
			<div className={style.options} style={{marginTop: title !== "" ? "8px" : "", height: title !== 'Согласующие' ? "32px" : ""}}>
				<div className={style.inputContainer} style={{alignItems: title === 'Согласующие' ? "flex-start" : ""}}>
					<div>
						{arr.length !== 0 &&
							<div className={style.arr} style={{marginTop: title === 'Согласующие' ? "4px" : "", marginBottom: title === 'Согласующие' ? "4px" : ""}}>
								{arr.map((value, index) =>
									<div key={index} className={style.added}>
										<p className={style.value}>{value}</p>
										{
											!(arrDisabled.includes(title) && arr.length === 1) &&
											<img src={Delete} alt="delete" className={style.delete} onClick={() => handleDeleteClick(index)}/>
										}
									</div>
								)}
							</div>
						}
						<input
							className={style.input}
							style={{display: (arrDisabled.includes(title) && arr.length !== 0) ? "none" : ""}}
							value={calendar ? inputDate : inputText}
							onChange={(e) => {
								calendar ? setInputDate(e.target.value) : setInputText(e.target.value)
							}}
							placeholder={(arrDisabled.includes(title) && arr.length === 1) ? '' : placeholder}
							disabled={calendar || (arrDisabled.includes(title) && arr.length === 1)}
						/>
					</div>
					{src && (add ? (inputText || arr.length !==0) &&
						<img className={style.svg}
						     style={{marginTop: title === 'Согласующие' ? "6px" : ""}}
						     src={src}
						     alt="icon"
						     onClick={() => {setInputText(''); setArr([])}}
						/>
						: <img className={style.svg} src={src} alt="icon"/>)}
				</div>
				{add &&
					<div onClick={handleAddClick}>
						<DesignButton src={Add} alt="add"/>
					</div>
				}
				{search &&
					<DesignButton src={Search} alt="search"/>
				}
				{calendar &&
					<div>
						<div onClick={() => setIsModalOpen(true)}>
							<DesignButton src={Calendar} alt="calendar"/>
						</div>
						<MyCalendar isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={title} onDateSelect={handleDateSelect} />
					</div>
				}
			</div>
		</div>
	);
};

export default Input;
