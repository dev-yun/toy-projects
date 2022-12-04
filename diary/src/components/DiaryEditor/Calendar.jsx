import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { newDateState } from '../../store/recoilNewDiaryState';
import getStringDate from '../../utils/date';

const DateInput = styled.input`
  border: none;
  cursor: pointer;

  padding: 10px 20px;
  border-radius: 5px;

  background-color: #ececec;
  font-size: 0.9rem;
`;

function Calendar() {
  const [newDate, setNewDate] = useRecoilState(newDateState);

  const handleSelectedDate = e => {
    const dateArray = e.target.value.split('-');
    const year = dateArray[0];
    const month = dateArray[1];
    const day = dateArray[2];

    setNewDate(new Date(`${year},${month},${day}`).getTime());
  };

  return (
    <section>
      <h3>오늘은 언제인가요?</h3>
      <DateInput
        value={getStringDate(new Date(newDate))}
        onChange={handleSelectedDate}
        type="date"
      />
    </section>
  );
}

export default React.memo(Calendar);
