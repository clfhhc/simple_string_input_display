import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default styled(NavLink)`
  display: inline-block;
  padding: 0.25em 2em;
  margin: 1em;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  outline: none;
  cursor: pointer;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: #41addd;

  &:hover {
    color: #dd4040;
  }

  ${props =>
    props.selected &&
    `
      border: 2px solid ${props.selectedColor}
    `};
`;
