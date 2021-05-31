import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
        margin-top: 100px;
    }
`;
export const ButtonAdd = styled.button`
    position: absolute;
    background-color: #f00;
    bottom: 20px;
    right: 20px;
    border-radius: 50%;
    border: none;
    outline: none;
    
    &:hover {
        cursor: pointer;
        background-color: #f30;
    }
`;

export const Card = styled.div`
    border-radius: 5px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    height: 50px;
    background-color: #fff;
    color: #000

`
export const CardText = styled.span`
    margin-left: 15px;
`
export const CardOptions = styled.div``
export const CardOption = styled.button`
    margin-right: 5px;
    border: none;
    outline: none;
    cursor: pointer;
`

