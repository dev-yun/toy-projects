import React from 'react';
import styled from 'styled-components';
import getStringDate from '../../utils/date';

const DateInput = styled.input`
  border: none;
  cursor: pointer;

  padding: 10px 20px;
  border-radius: 5px;

  background-color: #ececec;
  font-size: 0.9rem;
`;

function Calendar({ handleDate, date }) {
  const handleSelectedDate = e => {
    const dateArray = e.target.value.split('-');
    const year = dateArray[0];
    const month = dateArray[1];
    const day = dateArray[2];

    handleDate(new Date(`${year},${month},${day}`).getTime());
  };

  return (
    <section>
      <h3>오늘은 언제인가요?</h3>
      <DateInput
        value={getStringDate(new Date(date))}
        onChange={handleSelectedDate}
        type="date"
      />
    </section>
  );
}

export default Calendar;
