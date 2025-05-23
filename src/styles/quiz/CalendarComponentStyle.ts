import { createGlobalStyle } from "styled-components";

export const CustomCalendarStyle = createGlobalStyle`
  .react-calendar {
    width: 420px;
    height: 460px;
    background: white;
    border: none;
    border-radius: 20px;
    padding: 24px;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
    font-family: 'Arial', sans-serif;
    font-size: 18px;
  }

  .react-calendar__navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    background-color: #cce4f7;
    border-radius: 14px;
    padding: 10px 16px;
  }

  .react-calendar__navigation button {
    background: none;
    border: none;
    color: #333;
    font-weight: bold;
    font-size: 18px;
    padding: 8px 14px;
    border-radius: 10px;
    transition: background 0.2s;
  }

  .react-calendar__navigation button:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    color: #666;
    font-size: 14px;
    margin-bottom: 14px;
  }

  .react-calendar__tile {
    background: none;
    border: none;
    text-align: center;
    padding: 14px 0;
    border-radius: 50%;
    font-size: 16px;
    color: #333;
    transition: background 0.2s;
    height: 50px;
    width: 50px;
  }

  .react-calendar__tile:hover {
    background: #e1f0ff;
  }


  .react-calendar__tile--now {
    background: #ffefc0;
    color: #333;
    font-weight: bold;
  }

  .react-calendar__tile--active {
    background: #7ec0f9;
    color: white;
  }

  
  .react-calendar__tile--range {
    background: #cce4f7;
    color: #333;
  }

  .react-calendar__tile--rangeStart,
  .react-calendar__tile--rangeEnd {
    background: #4daaf7;
    color: white;
  }


  /* 다른 달의 날짜는 회색 */
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #ccc;
  }
`;
