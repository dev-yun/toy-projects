import { atom } from 'recoil';

export const newDateState = atom({
  key: 'newDateState',
  default: new Date().getTime(),
});

export const newEmotionState = atom({
  key: 'newEmotionState',
  default: 3,
});

export const newContentState = atom({
  key: 'newContentState',
  default: '',
});
