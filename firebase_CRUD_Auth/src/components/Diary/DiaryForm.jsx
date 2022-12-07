import React, { useState } from 'react';

function DiaryForm() {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  const handleChangeData = (e) => {
    if (e.target.id === 'title') {
      setTitle(e.target.value);
    } else if (e.target.id === 'content') {
      setContent(e.target.content);
    }
  };
  return (
    <form action="">
      <fieldset>
        <legend>일기 쓰기</legend>
        <label htmlFor="title">일기 제목: </label>
        <input
          id="title"
          type="text"
          required
          value={title}
          onChange={handleChangeData}
        />

        <label htmlFor="content">일기 내용: </label>
        <input
          id="content"
          type="text"
          required
          value={content}
          onChange={handleChangeData}
        />
      </fieldset>

      <button>저장하기</button>
    </form>
    // <form action="">
    //   <fieldset>
    //     <legend>일기 쓰기</legend>
    //     <label>
    //       <input
    //         type="text"
    //         required
    //         value={title}
    //         onChange={handleChangeData}
    //       />
    //     </label>

    //     <label>
    //       <input
    //         type="text"
    //         required
    //         value={content}
    //         onChange={handleChangeData}
    //       />
    //     </label>
    //   </fieldset>

    //   <button>저장하기</button>
    // </form>
  );
}

export default DiaryForm;
