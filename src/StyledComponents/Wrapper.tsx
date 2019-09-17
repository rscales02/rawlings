import * as React from 'react';
import styled from 'styled-components'


export interface WrapperProps {
    className?: string,
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => any,
}
 
const Wrapper: React.SFC<WrapperProps> = (props) => {
    return ( <div className={props.className} onClick={ props.onClick }>{ props.children }</div> );
}
 
const BodyWrapper = styled(Wrapper)`
    border: 1px solid red;
    position: relative;
    overflow: hidden;
    background-color: #dddddd;
    height: 100%;
    width: 100vw;
    margin: 0;
    z-index: 1;
`

const LogoWrapper = styled(Wrapper)`
    top: 30px;
    left: 30px;
    width: 100px;
    height: 100px;
    position: absolute;
    z-index: 6;
`

const TileWrapper = styled(Wrapper)`
    cursor: ${props => props.className === 'tile-wrapper' ? "pointer" : "cursor"};
    display: inline-block;
    border: 1px solid red;
    background-color: #dddddd;
    /* height: ${props => props.className === 'tile-wrapper' ? '280px' : ''}; */
    /* width: 280px; */
    margin: 0;
    text-align: center;
    justify-content: space-between;
`
export { TileWrapper, BodyWrapper, LogoWrapper };
