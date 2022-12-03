import { atom, selector } from 'recoil';
import diaryListState from './recoilDiaryListState';

export const sortTypeState = atom({
  key: 'sortType',
  default: 'latest',
});

export const filterTypeState = atom({
  key: 'filterType',
  default: 'all',
});

export const filteredDiaryListState = selector({
  key: 'filteredDiaryListState',
  get: ({ get }) => {
    const filterType = get(filterTypeState);
    const sortType = get(sortTypeState);
    const diaryList = get(diaryListState);

    const compare = (a, b) => {
      if (sortType === 'latest') {
        return +b.date - +a.date;
      }

      return +a.date - +b.date;
    };

    const copyDiaryList = [...diaryList];
    copyDiaryList.sort(compare);

    switch (filterType) {
      case 'good': {
        return copyDiaryList.filter(item => +item.emotion <= 3);
      }
      case 'bad': {
        return copyDiaryList.filter(item => +item.emotion > 3);
      }
      default: {
        return copyDiaryList;
      }
    }
  },
});
