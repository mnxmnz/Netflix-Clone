import styled from 'styled-components';

const NavWrap = styled.div`
    width:100%;
    padding: 0 4.8rem;
    padding-bottom:1.65rem;

    @media screen and (max-width:768px) {
        padding: 0 2.3rem;
    }
`


const StyledNavbar = styled.div`
    display:flex;
`

const CheckNavTitle = styled.div`
    font-weight: bold;
    font-size: 1.8rem;
    line-height: 2.1rem;
    text-align: center;
    color: #FFFFFF;
    border-top: 0.3rem solid #E50914;
    margin-right: 1.2rem;
    padding-top: 1rem;
    margin-top:-0.3rem;
    cursor: pointer;
`
const NonCheckNavTitle = styled.div`
    margin-right: 1.2rem;
    font-weight: bold;
    font-size: 1.8rem;
    line-height: 2.1rem;
    padding-top: 1rem;

    text-align: center;
    color: #C4C4C4;
    cursor: pointer;
`

const MobileMainNav = ({navCheck, onNavCheckHandler}) => {
    return (
        <NavWrap>
            <StyledNavbar>
                {navCheck === '1' ?<CheckNavTitle onClick={onNavCheckHandler}>회차</CheckNavTitle> :<NonCheckNavTitle id='1' onClick={onNavCheckHandler}>회차</NonCheckNavTitle>}
                {navCheck === '2' ?<CheckNavTitle onClick={onNavCheckHandler}>추천 콘텐츠</CheckNavTitle> :<NonCheckNavTitle id='2' onClick={onNavCheckHandler}>추천 콘텐츠</NonCheckNavTitle>}
                {navCheck === '3' ?<CheckNavTitle onClick={onNavCheckHandler}>인물정보</CheckNavTitle> :<NonCheckNavTitle id='3' onClick={onNavCheckHandler}>인물정보</NonCheckNavTitle>}
            </StyledNavbar>
        </NavWrap>
    )
}

export default MobileMainNav ;