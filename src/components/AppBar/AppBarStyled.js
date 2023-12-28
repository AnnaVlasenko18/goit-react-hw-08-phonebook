import styled from 'styled-components';

export const StyledHeader = styled('header')`
  width: 100%;
  background: ${p => p.theme.colors.backgroundHeader};
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 10;
  top: 0;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
`;
