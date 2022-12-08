import React, { useState } from 'react';
import { useEffect } from 'react';
import { useFirestore } from '../../hooks/useFireStore';

export default function DiaryForm({ uid }) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const { addDocument, response } = useFirestore('myDiary');

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTextAreaChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(title, text);
    addDocument({
      uid,
      title,
      text,
    });
  };

  useEffect(() => {
    if (response.success) {
      setTitle('');
      setText('');
    }
  }, [response.success]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>일기 쓰기</legend>

          <label>
            일기 제목 :
            <input
              type="text"
              required
              value={title}
              onChange={handleInputChange}
            />
          </label>

          <label>
            일기 내용 :
            <textarea
              required
              value={text}
              onChange={handleTextAreaChange}
            ></textarea>
          </label>

          <button>저장하기</button>
        </fieldset>
      </form>
    </>
  );
}
