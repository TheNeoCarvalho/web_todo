import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

export const Box = styled.div`
    margin-top: 120px;
    width: 420px;
    height: 380px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    h1 {
        color: #f00;

        span {
            color: #000;
        }
    }

    div{
        width: 60%;
        display: flex;
        flex-direction: column;

        label {
            margin: 5px 0;
        }

        input {
            width: 98%;
            height: 30px;
            background-color: #E4E2E2;
            border: 1px solid #B4B4B4;
            outline: none;
        }
    }
`

export const Bcadastro = styled.button`
    margin-top: 10px;
    background-color: #1F497A;
    width: 100%;
    height: 40px;
    color: #fff;
    font-weight: bold;
    border-radius: 8px;
    border: none;
    outline: none;

    &:hover {
        cursor: pointer; 
    }
`

export const Bregistro = styled.button`
    margin-top: 10px;
    background-color: #f00;
    width: 100%;
    height: 40px;
    color: #fff;
    font-weight: bold;
    border-radius: 8px;
    border: none;
    outline: none;

    &:hover {
        cursor: pointer; 
    }
`