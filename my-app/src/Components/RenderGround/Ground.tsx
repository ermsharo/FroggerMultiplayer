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



const matrixDimension = 20;

const createMatrix : any = (matrixDimension: number) => {
    let col = []; 
    let lin = []; 

    for (let i = 0; i < matrixDimension; i++) {
        lin.push(false);
    }

    for (let j = 0; j < matrixDimension; j++) {
        col.push(lin)
    }
 
    console.log("col", col);
    return col;
}

let matrix : any = createMatrix(matrixDimension);
console.log("Matrix here", matrix[0][1] )
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


