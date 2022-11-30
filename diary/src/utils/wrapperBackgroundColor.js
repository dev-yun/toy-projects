import { css } from 'styled-components';

const getWrapperBackgroundColor = emotion => {
  let wrapperBackground;

  switch (emotion) {
    case 1:
      wrapperBackground = '#64c964';
      break;
    case 2:
      wrapperBackground = '#9dd772';
      break;
    case 3:
      wrapperBackground = '#fdce17';
      break;
    case 4:
      wrapperBackground = '#fd8446';
      break;
    case 5:
      wrapperBackground = '#fd565f';
      break;
    default:
      wrapperBackground = '#ececec';
  }
  return css`
    background-color: ${wrapperBackground};
    color: white;
  `;
};

export default getWrapperBackgroundColor;
