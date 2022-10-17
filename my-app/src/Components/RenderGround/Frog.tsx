import styled from 'styled-components';
import Tile from '../RenderTile/Tile';
const DisplayGrid = styled.div`

display: grid;
grid-template-columns: repeat(22, 1fr);
width: 60%;
margin:auto;
`;

const DisplayTile = styled.div`
width: 100%;
aspect-ratio: 1 / 1;
border: 1px solid red;
`;



const matrixDimensionWidth = 20;
const matrixDimensionHeight = matrixDimensionWidth;

let MapLines = [
  "TEETEETEETEETEETEETEET",
  "WWWWWWWWWWWWWWWWWWWWWW",
  "WWWWWWWWWWWWWWWWWWWWWW",
  "RWWRWRWRWWRWRWRWWRWRWW",
  "WWWWWWWWWWWWWWWWWWWWWW",
  "WWWWWWWWWWWWWWWWWWWWWW",
  "SSSSSSSSSSSSSSSSSSSSSS",
  "SSSSSSSSSSSSSSSSSSSSSS",
  "SSSSSSSSSSSSSSSSSSSSSS",
  "SSSSSSSSSSSSSSSSSSSSSS",
  "SSSSSSSSSSSSSSSSSSSSSS",
  "SSSSSSSSSSSSSSSSSSSSSS",
  "WWWWWWWWWWWWWWWWWWWWWW",
  "WWWWWWWWWWWWWWWWWWWWWW",
  "RWWRWRWRWWRWRWRWWRWRWW",
  "WWWWWWWWWWWWWWWWWWWWWW",
  "WWWWWWWWWWWWWWWWWWWWWW",
  "SSSSSSSSSSSSSSSSSSSSSS",
  "SSSSSSSSSSSSSSSSSSSSSS",
  "SSSSSSSSSSSSSSSSSSSSSS",
  "SSSSSSSSSSSSSSSSSSSSSS",
  "SSSSSSSSSSSSSSSSSSSSSS",
  "SSSSSSSSSSSSSSSSSSSSSS",
  "WWWWWWWWWWWWWWWWWWWWWW",
  "WWWWWWWWWWWWWWWWWWWWWW",
  "RWWRWRWRWWRWRWRWWRWRWW",
  "WWWWWWWWWWWWWWWWWWWWWW",
  "WWWWWWWWWWWWWWWWWWWWWW",
  "SSSSSSSSSSSSSSSSSSSSSS",
  "SSSSSSSSSSSSSSSSSSSSSS",
  "SSSSSSSSSSSSSSSSSSSSSS",
  "SSSSSSSSSSSSSSSSSSSSSS",
  "WWWWWWWWWWWWWWWWWWWWWW",
  "WWWWWWWWWWWWWWWWWWWWWW",
  "RWWRWRWRWWRWRWRWWRWRWW",
  "WWWWWWWWWWWWWWWWWWWWWW",
  "WWWWWWWWWWWWWWWWWWWWWW",
  "SSSSSSSSSSSSSSSSSSSSSS",
  "SSSSSSSSSSSSSSSSSSSSSS",
  "SSSSSSSSSSSSSSSSSSSSSS",
  "SSSSSSSSSSSSSSSSSSSSSS",
  "SSSSSSSSSSSSSSSSSSSSSS",
  "WWWWWWWWWWWWWWWWWWWWWW",
  "WWWWWWWWWWWWWWWWWWWWWW",
  "RWWRWRWRWWRWRWRWWRWRWW",
  "WWWWWWWWWWWWWWWWWWWWWW",
  "WWWWWWWWWWWWWWWWWWWWWW",
  "SSSSSSSSSSSSSSSSSSSSSS",
  "SSSSSSSSSSSSSSSSSSSSSS",
  "SSSSSSSSSSSSSSSSSSSSSS",
  "SSSSSSSSSSSSSSSSSSSSSS",
  "SSSSSSSSSSSSSSSSSSSSSS",
  "WWWWWWWWWWWWWWWWWWWWWW",
  "WWWWWWWWWWWWWWWWWWWWWW",
  "RWWRWRWRWWRWRWRWWRWRWW",
  "WWWWWWWWWWWWWWWWWWWWWW",
  "WWWWWWWWWWWWWWWWWWWWWW",
  "SSSSSSSSSSSSSSSSSSSSSS",
  "SSSSSSSSSSSSSSSSSSSSSS",
  "RTTTBTTTBTTTTBTTTBTTTR",
];

let fillObj = (typeOfTile : any, tyle: any) => {
  return tyle;
};

let fillLine = (line: any) => {
  let ObjectLines = [];

  for (let j = 0; j < line.length; j++) {
    ObjectLines.push(fillObj("back", line[j]));
  }
  return ObjectLines;
};

let fillMatrix = (MapLines: any) => {
  let i = 0;
  let objMatrix = [];

  while (i < MapLines.length) {
    //console.log("->", MapLines[i]);
    objMatrix.push(fillLine(MapLines[i]));
    i++;
  }
  return objMatrix;
};


let createMatrix = (matrixDimension:number) =>{
  return Array(matrixDimension).fill(null).map(() => Array(matrixDimension).fill(0));
}

let matrix : any = createMatrix(matrixDimensionWidth);
matrix[1][0] = true;

export default  function Frog() {
  return (
    <DisplayGrid>
 {fillMatrix(MapLines).map((item: any) => (
            item.map((tile: any) => (
           <Tile  tile = {tile}/>
                ))
              ))}
    </DisplayGrid>
  );
}


