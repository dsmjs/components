import {link as linkColors} from './colors';

export const fontFamily = 'Quicksand, sans-serif';
export const fontSize = 24;

export const link = {
  textDecoration: 'none',
  fontWeight: 700,
  color: linkColors.default,
  ':hover': {
    textDecoration: 'underline',
    color: linkColors.hover
  }
};
export const invertedLink = {
  ...link,
  color: linkColors.inverted,
  ':hover': {
    ...link[':hover'],
    color: linkColors.inverted
  }
};
