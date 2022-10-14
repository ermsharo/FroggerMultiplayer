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





function Line(line: any){
   return line.map((tile: any, j: number) => (
           <Tile  tile = {tile}/>
                ))
}

export default  function Grid(matrix: any) {

    console.log("Matrix here ->", matrix)

  return (
    <DisplayGrid>
 {matrix.map((item: any, i: number) => (
    <Line line = {item} i = {i}/>          
              ))}
    </DisplayGrid>
  );
}


