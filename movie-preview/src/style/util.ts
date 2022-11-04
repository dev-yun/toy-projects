import { css } from 'styled-components';

export const IR = css`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

export const slEllipsis = css`
  display: block;
  white-space: nowrap;
  overflow: hidden;

  text-overflow: ellipsis;
`;

export const multiEllipsis = css`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const skipNav = css`
  &a {
    position: absolute;
    top: -200px;
    left: 0;
    width: 160px;
    line-height: 30px;
    border: 1px solid #fff;
    color: #fff;
    background: #333;
    text-align: center;
  }
`;

export const skipNavActive = css`
  &a:active {
    top: 0;
  }

  &a:focus {
    top: 0;
  }
`;
