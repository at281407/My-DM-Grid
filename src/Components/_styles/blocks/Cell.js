import styled from 'styled-components';

export const Cell = styled.div`
     border: 1px solid ${props => props.gridColor};
     background-color: ${props => props.cellProp === "topSide" ? "#333333" : "#FFFFFF"}
`;