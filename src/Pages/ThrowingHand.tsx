import * as React from 'react';
import { Tile, Flex, TileHeader, TileContent } from '../Components/Wrappers'
import Image from '../Components/Image'

export interface BaseballProps {
    onClick?(e: React.MouseEvent<HTMLDivElement, MouseEvent>): HTMLElement | null,
}
 
const Baseball: React.SFC<BaseballProps> = (props) => {
    return ( 
        <Flex direction='column'>
          <TileHeader className='text-header'>
            What is your <strong>throwing hand</strong> ?
          </TileHeader>
          <Flex direction='row'>
            <Tile id='left-hand' className='tile-wrapper' onClick={ props.onClick }>
              <Image src='https://olv-rawlings-gloves-static.storage.googleapis.com/assets/icons-280/hand/left.png.c38eefd2.png' alt='Left Hand' />
              <TileContent className="tile-name">Left-Hand Throw</TileContent>
              <TileContent className="tile-text">You throw with your left hand. Glove worn on right hand.</TileContent>
            </Tile>
            <Tile id='right-hand' className='tile-wrapper' onClick= { props.onClick }>
              <Image src='https://olv-rawlings-gloves-static.storage.googleapis.com/assets/icons-280/hand/right.png.e8760647.png' alt='Softball' />
              <TileContent className="tile-name">Right-Hand Throw</TileContent>
              <TileContent className="tile-text">You throw with your right hand. Glove worn on left hand.</TileContent>
            </Tile>
          </Flex>
        </Flex>
     );
}
 
export default Baseball;