import styled from 'styled-components';

export default styled.li`
  height: 2em;
  display: inline-block;
  line-height: 2em;
  border-top: 1px solid lightgray;

  &:first-child {
    border-top: none;
  }
`;
