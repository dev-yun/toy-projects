import { atom } from 'recoil';

const diaryListState = atom({
  key: 'diaryListState',
  default: [],
});

export default diaryListState;
