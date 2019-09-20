import * as React from 'react';
import styled from 'styled-components'


export interface WrapperProps {
    className?: string,
    onClick?(e: React.MouseEvent<HTMLDivElement, MouseEvent>): HTMLElement | null,
    id?: string,
    direction?: string,
    target?: string,
}
 
const Wrapper: React.SFC<WrapperProps> = (props) => {
    return ( <div id={ props.id }className={props.className} onClick={ props.onClick }>{ props.children }</div> );
}
 
const Body = styled(Wrapper)`
    position: relative;
    overflow: hidden;
    /* background-color: #dddddd; */
    height: 100%;
    width: 100vw;
    margin: 0;
    z-index: 1;
    justify-content: center;
    background-image: radial-gradient(closest-side,#fff,#cbcbcb);
    
`

const Logo = styled(Wrapper)`
    top: 30px;
    left: 30px;
    width: 100px;
    height: 100px;
    position: absolute;
    z-index: 6;
`

const Tile = styled(Wrapper)`
    cursor: ${props => props.className === 'tile-wrapper' ? "pointer" : "cursor"};
    margin: 0;
    margin-bottom: ${props => props.className === 'tile-name' ? '1em' : '0'};
    text-align: center;
    justify-content: space-between;
    width: 300px;
    font-size: ${props => props.className === 'tile-name' ? '1.5em' : '1em'};
    padding-top: 100px;
    padding-right: 10px;
    padding-left: 10px;

    &:hover div{
        opacity: 1;
    };
`

const TileHeader = styled(Tile)`
    padding-top: 100px;
    margin: 0 auto;
    font-size: 2em;
    margin-bottom: 30px;
    flex-grow: 0;
    width: 600px;
    opacity: 0.5;
`

const TileContent = styled(Tile)`
    opacity: 0.5;
    padding-top: 0;
    text-align: ${props => props.className === 'tile-name' ? 'center' : 'justify'};
`

const Flex = styled(Wrapper)`
    display: flex;
    flex-direction: ${props => props.direction === 'column' ? 'column' : 'row'};
    position: relative;
    justify-content: center;
`

const Button = styled(Wrapper)`
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
    z-index: 5;
`

export { Tile, Body, Logo, Flex, TileHeader, TileContent, Button };
