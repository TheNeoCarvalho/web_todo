import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    background-color: #EEEEEE;
`

export const Logo = styled.div`
    font-size: 22px;
    flex: 4; 
    color: #000;
    font-weight: bold;
    text-align: center;

`
export const Logout = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    text-align: right;
    padding-right: 20px;

    a {
        text-decoration: none;
        padding-right: 5px;
        color: #000;
        font-weight: bold
    }

    span {
        padding-left: 50px
    }
`
export const Red = styled.span`
    color: red
`

