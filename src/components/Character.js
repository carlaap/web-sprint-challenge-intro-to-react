// Write your Character component here
  import React from 'react'
  import styled from 'styled-components'


  const StarStyle = styled.div`
  display: flex;
  row-gap; none;
  justify-content: center;
  margin: 10% 15% 0;
  background-color: transparent;
  border: solid black;
  padding: 1%;
`;

const Character = (props) => {
  const { info } = props;
  return (
    <StarStyle>
      <h1>
        <b>{info.name}</b>
      </h1>
    </StarStyle>
  );
};

export default Character;
 
