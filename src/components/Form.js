import styled from 'styled-components'

const Form = styled.form`
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;

    input{
        width: 100%;
        font-size: 1.3em;
    }

    .button{
        margin-top: 10px;
        font-size: 1.3em;
        padding: 15px 40px;
        background-color: #189AB4;
        color: #fff;
        transition: all 300ms;
    }
    
    .button:hover{
        background-color: #05445E;
        color: #fff;
        transform: translateY(1px)
    }

    
`

export default Form