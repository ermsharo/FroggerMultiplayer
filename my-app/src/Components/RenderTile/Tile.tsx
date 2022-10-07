import styled from 'styled-components';



const DisplayTile = styled.div`
width: 100%;
aspect-ratio: 1 / 1;
border: 1px solid red;
`;

const FilledTile = styled.div`
background: red;
width: 100%;
height: 100%;
`;

const EmptyTile = styled.div`
width: 100%;
height: 100%;
background: green;
`;



export default  function Tile(tile:any) {
console.log(tile)

  return (

           <DisplayTile>
{(tile.tile) ? <FilledTile></FilledTile> : <EmptyTile></EmptyTile>}

           </DisplayTile>

  );
}


