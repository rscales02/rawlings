import styled from 'styled-components';

interface LogoImgProps {
    src: string,
    className?: string,
    alt: string
}

const LogoImg = styled.img<LogoImgProps>`
    position: absolute;
    width: 64px;
    opacity: .5;
    cursor: pointer;
`

export default LogoImg