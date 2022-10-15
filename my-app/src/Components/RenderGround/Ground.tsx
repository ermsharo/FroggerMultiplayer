import styled from 'styled-components';
import Tile from '../RenderTile/Tile';
const DisplayGrid = styled.div`

display: grid;
grid-template-columns: repeat(20, 1fr);
width: 60%;
margin:auto;
`;

const DisplayTile = styled.div`
width: 100%;
aspect-ratio: 1 / 1;
border: 1px solid red;
`;



const matrixDimensionWidth = 22;
const matrixDimensionHeight = matrixDimensionWidth;

let createMatrix = (matrixDimension:number) =>{
  return Array(matrixDimension).fill(null).map(() => Array(matrixDimension).fill(0));
}

let matrix : any = createMatrix(matrixDimensionWidth);
matrix[1][0] = true;

export default  function Ground() {
  return (
    <DisplayGrid>
 {matrix.map((item: any) => (
            item.map((tile: any) => (
           <Tile  tile = {tile}/>
                ))
              ))}
    </DisplayGrid>
  );
}


