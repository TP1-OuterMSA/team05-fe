import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { CustomCalendarStyle } from "../styles/quiz/CalendarComponentStyle";

interface Props {
	onChange: (date: Date) => void;
	value: Date;
}

export default function CustomCalendar({ onChange, value }: Props) {
	return (
		<div>
			<CustomCalendarStyle />
			<Calendar
				onChange={(value) => {
					if (value instanceof Date) {
						onChange(value);
					}
				}}
				value={value}
				locale="ko-KR"
				calendarType="gregory"
				formatDay={(_, date) => date.getDate().toString()}
				next2Label={null}
				prev2Label={null}
			/>
		</div>
	);
}
