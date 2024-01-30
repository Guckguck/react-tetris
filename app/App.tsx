import React from 'react';
import styled from 'styled-components';
import GamePanel from './GamePanel';
import TypedShell from './TypedShell';

const Container = styled.div`
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  font-weight: 300;
  width: 100%;
  position: relative;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #fafafa;
  border-bottom: 1px solid #eaeaea;
  padding: 0 18px;
`;

const VerticallyCenterChildren = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-weight: 300;
  color: #000;
`;

const SubTitle = styled.h2`
  font-weight: 300;
  font-size: 18px;
`;

// const Tetris = require('react-tetris');

// const App = () => (
//   <div>
//     <h1>Tetris</h1>
//     <Tetris
//       keyboardControls={{
//         // Default values shown here. These will be used if no
//         // `keyboardControls` prop is provided.
//         down: 'MOVE_DOWN',
//         left: 'MOVE_LEFT',
//         right: 'MOVE_RIGHT',
//         space: 'HARD_DROP',
//         z: 'FLIP_COUNTERCLOCKWISE',
//         x: 'FLIP_CLOCKWISE',
//         up: 'FLIP_CLOCKWISE',
//         p: 'TOGGLE_PAUSE',
//         c: 'HOLD',
//         shift: 'HOLD'
//       }}
//     >
//       {({
//         HeldPiece,
//         Gameboard,
//         PieceQueue,
//         points,
//         linesCleared,
//         state,
//         controller
//       }) => (
//         <div>
//           <HeldPiece />
//           <div>
//             <p>Points: {points}</p>
//             <p>Lines Cleared: {linesCleared}</p>
//           </div>
//           <Gameboard />
//           <PieceQueue />
//           {state === 'LOST' && (
//             <div>
//               <h2>Game Over</h2>
//               <button onClick={controller.restart}>New game</button>
//             </div>
//           )}
//         </div>
//       )}
//     </Tetris>
//   </div>
// );

const App = (): JSX.Element => (
  <Container>
    <Header>
      <Title>react-tetris</Title>
      <SubTitle>Embed a game of Tetris in your React app</SubTitle>
      <TypedShell>npm install --save react-tetris</TypedShell>
    </Header>
    <VerticallyCenterChildren>
      <GamePanel />
    </VerticallyCenterChildren>
  </Container>
);

export default App;
