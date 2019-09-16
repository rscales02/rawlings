import styled from 'styled-components'
import { string } from 'prop-types';

interface StyledLink {
    customColor?: string,
    href: string,
    className?: string,
    
}

let defaultColor: string = 'red';


const StyledLink = styled.a<StyledLink>`
    background-color: white;
    color: ${props => props.customColor ? props.customColor : defaultColor };
`

export default StyledLink