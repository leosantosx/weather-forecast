import styled from 'styled-components'
import { HiLocationMarker } from 'react-icons/hi'

const Header = styled.header`
    display: flex;
    align-items: center;
    color: #05445E;

    h1{
        margin: 0 0 0 20px;
        font-size: 1.5em;
    }

    svg{
        font-size: 2em;
    }
`

export default function({ nameCity }){
    return (
        <Header>
            <HiLocationMarker />
            <h1>{ nameCity }</h1>
        </Header>
    )
}