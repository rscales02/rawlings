import styled from 'styled-components';

interface Logo {
    src: string,
    className?: string,
    alt: string
}

const Logo = styled.img<Logo>`
    position: absolute;
    width: 64px;
    opacity: .5;
    cursor: pointer;
`

export default Logo