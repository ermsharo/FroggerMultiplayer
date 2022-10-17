import styled from 'styled-components';
import E from "../../Assets/E.png"
import R from "../../Assets/R.png";
import T from "../../Assets/T.png";
import W from "../../Assets/W.png";
import S from "../../Assets/S.png";
import B from "../../Assets/B.png";

const DisplayTile = styled.div`
width: 100%;
aspect-ratio: 1 / 1;

`;

const FilledTile = styled.div`
background: blue;
width: 100%;
height: 100%;
`;

const EmptyTile = styled.div`
width: 100%;
height: 100%;
background: green;
`;

const TyleImage = styled.img`
width: 100%;
height: 100%;


`;


const getTyle = (reference: string) =>{
  let tyleArray = ['E','R','T','W','S','B']; 
  let assetArray = [E,R,T,W,S,B];
  console.log("reference",reference, tyleArray.indexOf(reference));
  return assetArray[tyleArray.indexOf(reference)];
}

export default  function Tile(tile:any) {
console.log(tile)

  return (

           <DisplayTile>
{(tile.tile) ? <FilledTile>
  <TyleImage src = {getTyle(tile.tile)}/>
  </FilledTile> : <EmptyTile></EmptyTile>}

           </DisplayTile>

  );
}


