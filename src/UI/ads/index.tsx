import COLORS from '@constants/style/colors';

import Block from './styled';

const Ads = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Block style={{ backgroundColor: COLORS.white100 }} />
      <Block style={{ backgroundColor: COLORS.white200 }} />
      <Block style={{ backgroundColor: COLORS.white300 }} />
      <Block style={{ backgroundColor: COLORS.white400 }} />
      <Block style={{ backgroundColor: COLORS.gray100 }} />
      <Block style={{ backgroundColor: COLORS.gray200 }} />
      <Block style={{ backgroundColor: COLORS.gray300 }} />
      <Block style={{ backgroundColor: COLORS.gray400 }} />
      <Block style={{ backgroundColor: COLORS.gray500 }} />
      <Block style={{ backgroundColor: COLORS.gray600 }} />
      <Block style={{ backgroundColor: COLORS.blue100 }} />
      <Block style={{ backgroundColor: COLORS.blue200 }} />
      <Block style={{ backgroundColor: COLORS.blue300 }} />
      <Block style={{ backgroundColor: COLORS.pink }} />
      <Block style={{ backgroundColor: COLORS.black100 }} />
      <Block style={{ backgroundColor: COLORS.black200 }} />
      <Block style={{ backgroundColor: COLORS.black300 }} />
    </div>
  );
};

export default Ads;
