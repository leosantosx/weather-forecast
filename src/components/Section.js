import styled from 'styled-components'

const Section = styled.section`
    color: #05445E;
    display: flex;
    flex-direction: column;
    align-items: center;   

    img{
        margin: 6px 0;
        width: 200px;
        height: 200px;
    }

    p{
        font-size: 1.4em;
        font-weight: 400;
    }

    h3{ 
        margin-top: 0px;
        font-size: 4em;
        font-weight: bold;
        letter-spacing: 5px;

    }
    sup{
        font-size: .7em;
    }
`


export default function({ image, altImage, text, tempC }){

    return (
        <Section>
            <img src={ image } alt={ altImage }/>
            <p>{ text }</p>
            <h3>{ tempC }<sup>°C</sup></h3>
        </Section>
    )
}