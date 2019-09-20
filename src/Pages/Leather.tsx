import * as React from 'react';
import { Tile, Flex, TileHeader, TileContent } from '../Components/Wrappers'
import Image from '../Components/Image'

export interface LeatherProps {
    onClick?(e: React.MouseEvent<HTMLDivElement, MouseEvent>): HTMLElement | null,
}
 
const Leather: React.SFC<LeatherProps> = (props) => {
    return ( 
        <Flex direction='column'>
          <TileHeader className='text-header'>
            What <strong>leather</strong> would you prefer?
          </TileHeader>
          <Flex direction='row'>
            <Tile id='pro' className='tile-wrapper' onClick={ props.onClick }>
              <Image src='https://olv-rawlings-gloves-static.storage.googleapis.com/assets/icons-280/leather/kip.png.2f5ced5e.png' alt='Left Hand' />
              <TileContent className="tile-name">Pro Preferred</TileContent>
              <TileContent className="tile-text">
                Known for their clean, supple kip leather, Pro Preferred series gloves break in to form the perfect pocket based on its owner's 
                specific playing preference. The top pro game-day patterns and pro-grade material unite to deliver the quality and performance that 
                the very best in the game demand and rely on season after season.
              </TileContent>
            </Tile>
            <Tile id='heart' className='tile-wrapper' onClick= { props.onClick }>
              <Image src='https://olv-rawlings-gloves-static.storage.googleapis.com/assets/icons-280/leather/hoh.png.a41e7604.png' alt='Softball' />
              <TileContent className="tile-name">Heart of the Hide</TileContent>
              <TileContent className="tile-text">
                Constructed from Rawlings world-renowned Heart of the Hide steer hide leather, Heart of the Hide gloves feature the game-day patterns 
                of the top Rawlings Advisory Staff players. These high quality gloves have defined the careers of those deemed "The Finest in the Field."
              </TileContent>
            </Tile>
            <Tile id='liberty' className='tile-wrapper' onClick= { props.onClick }>
              <Image src='https://olv-rawlings-gloves-static.storage.googleapis.com/assets/icons-280/leather/rla.png.66476fb5.png' alt='Softball' />
              <TileContent className="tile-name">Liberty Advanced</TileContent>
              <TileContent className="tile-text">
                The perfectly-balanced patterns of the Liberty Advanced® Series are designed for the hand size of the female athlete providing an 
                elite level of control and comfort. This tried-and-true line of softball gloves is the trusted partner of many softball greats 
                including its biggest fan Keilani Ricketts.
              </TileContent>
            </Tile>
          </Flex>
        </Flex>
     );
}
 
export default Leather;