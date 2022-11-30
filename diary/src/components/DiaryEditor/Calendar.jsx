import React from 'react';
import styled from 'styled-components';

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
    handleDate(e.target.value);
  };

  return (
    <section>
      <h3>오늘은 언제인가요?</h3>
      <DateInput value={date} onChange={handleSelectedDate} type="date" />
    </section>
  );
}

export default Calendar;
