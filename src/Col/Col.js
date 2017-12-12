import React from 'react';
import ColWrapper from './style';

class Col extends React.Component {

  render() {
    const {
      className, children, style, bgColor,
      sm, smAuto, sm1, sm2, sm3, sm4, sm5, sm6, sm7, sm8, sm9, sm10, sm11, sm12,
      md, mdAuto, md1, md2, md3, md4, md5, md6, md7, md8, md9, md10, md11, md12,
      lg, lgAuto, lg1, lg2, lg3, lg4, lg5, lg6, lg7, lg8, lg9, lg10, lg11, lg12,

    } = this.props;

    return (
      <ColWrapper
        className={className}
        style={style}
        {...this.props}
      >
        {children}
      </ColWrapper>
    );
  }
}

export default Col(Col);
