import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  text-align: center;
  border-bottom: 1px solid black;
  margin: 0 auto;
`;

const Header = () => {
  return (
    <Div>
      <h1>Country Boy Custom Birdhouses</h1>
    </Div>
  )
}

export default Header;