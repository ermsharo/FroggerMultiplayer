import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ground from './Components/RenderGround/Ground';
import styled from 'styled-components';

const DisplayBoard = styled.div`
background-image:url("https://img.itch.zone/aW1hZ2UvNjQ5NDc4LzM0ODI3MTYuanBn/original/yqHXYK.jpg");
`;

function App() {
  return (
    <DisplayBoard>
<Ground/>
    </DisplayBoard>
  );
}

export default App;
