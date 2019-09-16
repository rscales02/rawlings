import styled from 'styled-components';

interface Logo {
    src: string,
    className?: string,
    alt: string
}

const Logo = styled.img<Logo>`
    width: 64px;
    opacity: 0.5;
`

export default Logo