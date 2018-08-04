import styled from 'styled-components';

export default styled.div`
  text-align: center;

  :hover {
    border: 1px solid ${props => props.hoverColor};
  }

  ${props =>
    props.selected &&
    CSS`
      border: 2px solid ${props.selectedColor}
    `};
`;
