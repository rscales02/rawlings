import React from 'react';
import './App.css';
import { Body, Logo, Button } from './Components/Wrappers'
import LogoImg from './Components/LogoImg'
import Home from './Pages/Home'
import ThrowingHand from './Pages/ThrowingHand'
import Leather from './Pages/Leather'

export interface AppProps {
}
 
export interface AppState {
  page: string,
}

interface PageMap {
  [key: string] : JSX.Element
}

 
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      page: 'leather',
    }
  }

  handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(this.state);
    let id: string = event.currentTarget.id
    let page: string;

    if (id === 'back' || id === 'home') {
      page = 'home';
    } else if (id === 'baseball' || id === 'softball') {
      page = 'throwinghand';
    } else if (id === 'right-hand' || id === 'left-hand') {
      page = 'leather';
    } else {
      page = ''
    } 

    console.log(event.currentTarget.id);
    console.log(page)
    this.setState({
      page: page
    })
    return null;
  }

  render() { 
    let pageMap: PageMap = {
      "home": <Home onClick={ this.handleClick }/>,
      'throwinghand': <ThrowingHand onClick={ this.handleClick }/>,
      'leather': <Leather />
    };

    let selectedPage = pageMap[this.state.page];

    let backButton: JSX.Element = this.state.page !== "home" ? <Button id='back' onClick={this.handleClick}>HOME</Button> : <div></div> 
    return ( 
      <Body className="App">
        {backButton}
        <Logo id='home' onClick={ this.handleClick }>
          <LogoImg src="https://olv-rawlings-gloves-static.storage.googleapis.com/assets/logo.png.f45de9cc.png" className="App-logo" alt="logo"></LogoImg>
        </Logo>
        <div>{ selectedPage }</div>
     </Body>
     );
  }
}
 
export default App;
