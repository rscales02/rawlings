import React from 'react';
import './App.css';
import { TileWrapper, BodyWrapper, LogoWrapper } from './StyledComponents/Wrapper'
import StyledLogo from './StyledComponents/Logo'
import Image from './StyledComponents/Image'

export interface AppProps {
}
 
export interface AppState {
  
}
 
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(event.target)
  }

  render() { 
    return ( 
      <BodyWrapper className="App">
        <LogoWrapper>
          <StyledLogo src="https://olv-rawlings-gloves-static.storage.googleapis.com/assets/logo.png.f45de9cc.png" className="App-logo" alt="logo"></StyledLogo>
        </LogoWrapper>
        <TileWrapper className='text'>
          What <strong>sport</strong> do you play?
        </TileWrapper>
        <TileWrapper className='tile-wrapper' onClick={ (e) => this.handleClick(e) }>
          <Image src='https://olv-rawlings-gloves-static.storage.googleapis.com/assets/icons-280/sport/baseball.png.0085ca94.png' alt='Baseball' />
          <TileWrapper className="tile-name">Baseball</TileWrapper>
          <TileWrapper className="tile-text">Gloves crafted for baseball at all levels.</TileWrapper>
        </TileWrapper>
        <TileWrapper className='tile-wrapper'>
          <Image src='https://olv-rawlings-gloves-static.storage.googleapis.com/assets/icons-280/sport/softball.png.3ec1de3c.png' alt='Softball' />
          <TileWrapper className="tile-name">Softball</TileWrapper>
          <TileWrapper className="tile-text">Patterns specifically designed for fastpitch softball.</TileWrapper>
        </TileWrapper>
     </BodyWrapper>
     );
  }
}
 
export default App;




// const App: React.FC = () => {
  

  // const handleClick = (event: React.MouseEvent) => {
  //   console.log(event)
  // }

//   return (
//     <BodyWrapper className="App">
//         <Logo src="https://olv-rawlings-gloves-static.storage.googleapis.com/assets/logo.png.f45de9cc.png" className="App-logo" alt="logo" />
//         <TileWrapper className='Text'>
//           What <strong>sport</strong> do you play?
//         </TileWrapper>
//         <TileWrapper className='tile-wrapper' onClick={ this.handleClick }>
//           <Image src='https://olv-rawlings-gloves-static.storage.googleapis.com/assets/icons-280/sport/baseball.png.0085ca94.png' alt='Baseball' />
//           <TileWrapper className="tile-name">Baseball</TileWrapper>
//           <TileWrapper className="tile-text">Gloves crafted for baseball at all levels.</TileWrapper>
//         </TileWrapper>
//         <TileWrapper className='tile-wrapper'>
//           <Image src='https://olv-rawlings-gloves-static.storage.googleapis.com/assets/icons-280/sport/softball.png.3ec1de3c.png' alt='Softball' />
//           <TileWrapper className="tile-name">Softball</TileWrapper>
//           <TileWrapper className="tile-text">Patterns specifically designed for fastpitch softball.</TileWrapper>
//         </TileWrapper>
//     </BodyWrapper>
//   );
// }

// export default App;
