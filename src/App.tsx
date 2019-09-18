import React from 'react';
import './App.css';
import { Tile, Body, Logo, Flex } from './Components/Wrappers'
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
          <Tile className='text-header'>
            What <strong>sport</strong> do you play?
          </Tile>
          <Flex direction='row'>
            <Tile id='baseball' className='tile-wrapper' onClick={ this.handleClick }>
              <Image src='https://olv-rawlings-gloves-static.storage.googleapis.com/assets/icons-280/sport/baseball.png.0085ca94.png' alt='Baseball' />
              <Tile className="tile-name">Baseball</Tile>
              <Tile className="tile-text">Gloves crafted for baseball at all levels.</Tile>
            </Tile>
            <Tile id='softball' className='tile-wrapper' onClick= { this.handleClick }>
              <Image src='https://olv-rawlings-gloves-static.storage.googleapis.com/assets/icons-280/sport/softball.png.3ec1de3c.png' alt='Softball' />
              <Tile className="tile-name">Softball</Tile>
              <Tile className="tile-text">Patterns specifically designed for fastpitch softball.</Tile>
            </Tile>
          </Flex>
        </Flex>
     </Body>
     );
  }
}
 
export default App;

