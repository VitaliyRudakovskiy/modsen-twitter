import { DefaultTheme } from 'styled-components';

import { IString } from '@/constants/types';

const SIZES: IString = {
  px6: '6px',
  px32: '32px',
  px60: '60px',
  px90: '90px',
  px150: '150px',
  px200: '200px',
  px230: '230px',
  px300: '300px',
  px400: '400px',
  px450: '450px',
  px550: '550px',
  px620: '620px',
  px728: '728px',
  px850: '850px',
  px980: '980px',
  px1040: '1040px',
  px1230: '1230px',
  px1440: '1440px',
  vw90: '90dvw',
  vh100: '100dvh',
  per95: '95%',
  full: '100%',
};

export const max850 = ({ theme }: DefaultTheme) => theme.sizes.px850;
export const max1230 = ({ theme }: DefaultTheme) => theme.sizes.px1230;

export default SIZES;
