import React from 'react';
import './App.css';
import { Tile, Body, Logo, Flex, TileHeader, TileContent } from './Components/Wrappers'
import LogoImg from './Components/LogoImg'
import Image from './Components/Image'

export interface AppProps {
}
 
export interface AppState {
  
}
 
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(event.currentTarget.id);
    return null;
  }

  render() { 
    return ( 
      <Body className="App">
        <Logo>
          <LogoImg src="https://olv-rawlings-gloves-static.storage.googleapis.com/assets/logo.png.f45de9cc.png" className="App-logo" alt="logo"></LogoImg>
        </Logo>
        <Flex direction='column'>
          <TileHeader className='text-header'>
            What <strong>sport</strong> do you play?
          </TileHeader>
          <Flex direction='row'>
            <Tile id='baseball' className='tile-wrapper' onClick={ this.handleClick }>
              <Image src='https://olv-rawlings-gloves-static.storage.googleapis.com/assets/icons-280/sport/baseball.png.0085ca94.png' alt='Baseball' />
              <TileContent className="tile-name">Baseball</TileContent>
              <TileContent className="tile-text">Gloves crafted for baseball at all levels.</TileContent>
            </Tile>
            <Tile id='softball' className='tile-wrapper' onClick= { this.handleClick }>
              <Image src='https://olv-rawlings-gloves-static.storage.googleapis.com/assets/icons-280/sport/softball.png.3ec1de3c.png' alt='Softball' />
              <TileContent className="tile-name">Softball</TileContent>
              <TileContent className="tile-text">Patterns specifically designed for fastpitch softball.</TileContent>
            </Tile>
          </Flex>
        </Flex>
     </Body>
     );
  }
}
 
export default App;

