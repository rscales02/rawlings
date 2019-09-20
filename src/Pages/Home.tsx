import * as React from 'react';
import { Tile, Flex, TileHeader, TileContent } from '../Components/Wrappers'
import Image from '../Components/Image'

export interface HomeProps {
    onClick?(e: React.MouseEvent<HTMLDivElement, MouseEvent>): HTMLElement | null,
}
 
const Home: React.SFC<HomeProps> = (props) => {
    return ( 
        <Flex direction='column'>
          <TileHeader className='text-header'>
            What <strong>sport</strong> do you play?
          </TileHeader>
          <Flex direction='row'>
            <Tile id='baseball' className='tile-wrapper' onClick={ props.onClick }>
              <Image src='https://olv-rawlings-gloves-static.storage.googleapis.com/assets/icons-280/sport/baseball.png.0085ca94.png' alt='Baseball' />
              <TileContent className="tile-name">Baseball</TileContent>
              <TileContent className="tile-text">Gloves crafted for baseball at all levels.</TileContent>
            </Tile>
            <Tile id='softball' className='tile-wrapper' onClick= { props.onClick }>
              <Image src='https://olv-rawlings-gloves-static.storage.googleapis.com/assets/icons-280/sport/softball.png.3ec1de3c.png' alt='Softball' />
              <TileContent className="tile-name">Softball</TileContent>
              <TileContent className="tile-text">Patterns specifically designed for fastpitch softball.</TileContent>
            </Tile>
          </Flex>
        </Flex>
     );
}
 
export default Home;