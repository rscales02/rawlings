import * as React from 'react';
import styled from 'styled-components'


export interface WrapperProps {
    className?: string,
    onClick?(e: React.MouseEvent<HTMLDivElement, MouseEvent>): HTMLElement | null,
    id?: string,
    direction?: string,
}
 
const Wrapper: React.SFC<WrapperProps> = (props) => {
    return ( <div id={ props.id }className={props.className} onClick={ props.onClick }>{ props.children }</div> );
}
 
const Body = styled(Wrapper)`
    border: 1px solid red;
    position: relative;
    overflow: hidden;
    background-color: #dddddd;
    height: 100%;
    width: 100vw;
    margin: 0;
    z-index: 1;
    justify-content: center;
    
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
    border: 1px solid red;
    background-color: #dddddd;
    margin: 0;
    text-align: center;
    justify-content: space-between;
`
const Flex = styled(Wrapper)`
    display: flex;
    flex-direction: ${props => props.direction === 'column' ? 'column' : 'row'};
    position: relative;
    justify-content: center;
`

export { Tile, Body, Logo, Flex };
