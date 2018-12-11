import styled from 'styled-components';

import {Grid} from '../../structures/Grid'

export const CurrGrid = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: url("https://cdna.artstation.com/p/assets/images/images/002/201/422/large/jedd-chevrier-old-carnival-wagon-chevrier-branded.jpg?1458620552") no-repeat center center fixed; 
    background-size: cover;
    background-repeat: no-repeat;
`;

CurrGrid.Grid = Grid;