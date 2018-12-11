import styled from 'styled-components';

import {Cell} from "../blocks/Cell"

export const Grid = styled.div`
    position: relative;
    display: grid;
    grid-template-rows: repeat(${props => props.gridSize}, ${props => props.cellSize});
    grid-template-columns: repeat(${props => props.gridSize}, ${props => props.cellSize});
    justify-content: center;
    z-index: 1;
`;

Grid.Cell = Cell;