import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Container = ({ children }) => (
  <S.Wrapper>
    {children}
  </S.Wrapper>
);

Container.propTypes = {
  children: PropTypes.node
};

export default Container;