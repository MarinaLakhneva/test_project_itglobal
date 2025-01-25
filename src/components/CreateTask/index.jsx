import style from './style.module.scss';
import Input from "../Input";
import {titles} from "./mock"

const CreateTask = () => {
	return (
		<div className={style.content}>
			<div className={style.options}>
				<div style={{display: "flex", gap: "16px"}}>
					<p style={{fontSize: "20px"}}>Подзадача</p>
					<button>Создать</button>
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
