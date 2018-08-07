import styled from 'styled-components';

export default styled.li`
  height: 3em;
  display: inline-block;
  border-top: 1px solid lightgray;

  &:first-child {
    border-top: none;
  }
`;
