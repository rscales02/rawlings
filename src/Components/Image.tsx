import styled from 'styled-components'

interface Link{
    src: string,
    alt: string
}

const Image = styled.img<Link>`
    width: 280px;
    height: 280px;
    padding-bottom: 30px;
`

export default Image