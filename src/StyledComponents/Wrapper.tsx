import * as React from 'react';
import { Component } from 'react';
import styled from 'styled-components'


export interface WrapperProps {
    className?: string,
    onClick?: React.MouseEvent<HTMLDivElement, MouseEvent>,
}
 
const Wrapper: React.SFC<WrapperProps> = (props) => {
    return ( <div className={props.className} onClick={ () => props.onClick }>{ props.children }</div> );
}
 
const BodyWrapper = styled(Wrapper)`
    border: 5px solid red;
    background-color: #dddddd;
    height: 100%;
    margin: 0;
    min-height: 400px;
`

const TileWrapper = styled(Wrapper)`
    cursor: pointer;
    display: inline-block;
    border: 5px solid red;
    background-color: #dddddd;
    height: 280px;
    width: 280px;
    margin: 0;
    min-height: 400px;
`
export { TileWrapper, BodyWrapper };
