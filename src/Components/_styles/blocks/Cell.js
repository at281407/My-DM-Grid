import styled from 'styled-components';

let backgroundColor = (rowIndex, colIndex, gridDem) => {
    switch(true){
        case colIndex === 0 : 
            if(rowIndex === 0) 
                return`
                    border-top-width: 2px;
                    border-left-width: 2px;
                `
            else if(rowIndex === gridDem.totalRows - 1)
                return`
                    border-left-width: 2px;
                    border-bottom-width: 2px;
                `
            return `border-left-width: 2px;`
        case rowIndex === 0 : 
            if(colIndex === gridDem.totalCol - 1)
                return`
                    border-right-width: 2px;
                    border-top-width: 2px;
                `
            return `border-top-width: 2px;`
        case colIndex === gridDem.totalCol - 1 :
            if(rowIndex === gridDem.totalRows - 1)
                return `
                    border-bottom-width: 2px;
                    border-right-width: 2px;
                `
            else return "border-right-width: 2px;"
        case rowIndex === gridDem.totalRows - 1 :
            return `border-bottom-width: 2px;`
        default :
    }
}


export const Cell = styled.div`
     border: 1px solid ${props => props.gridColor};
     font-size: 0.25em;
     color: pink;
     ${props => backgroundColor(props.rowIndex, props.colIndex, props.gridDem)};
`;