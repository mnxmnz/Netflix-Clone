import styled from "styled-components";




const GridWrap = styled.section`
    width:100%;
    display:grid;
    grid-template-columns:repeat(2, minmax(28.8rem,1fr));
    grid-auto-rows: 13.4rem;
    column-gap:1rem;

    @media only screen and (max-width: 768px) {
        grid-auto-rows: 9.5rem;
        column-gap:1.7rem;
        row-gap:1.8rem;
    }
    @media only screen and (max-width: 1024px) {
        grid-auto-rows: 11rem;
    }
`


const SeasonWrap = ({children}) => {
    return <GridWrap>{children}</GridWrap>
}

export default SeasonWrap;