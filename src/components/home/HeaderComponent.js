import React, {useState} from 'react';
import style from 'styled-components';
import netflixLogo from'../../assets/homeheadericon/netflix_logo.png';
import giftBtn from'../../assets/homeheadericon/btn_gift.png';
import kidsBtn from'../../assets/homeheadericon/btn_kids.png';
import notiBtn from'../../assets/homeheadericon/btn_noti.png';
import searchIcon from'../../assets/homemenuicon/ic_search.png';

const headerHeight = 70;
const HeaderWrap = style.div`
    width: 100vw;
    height: ${headerHeight}px;
    background-color: black;
    border: 1px solid blue;
`

const NetflixLogo = style.img`
    float: left;
    height: ${props => props.height}px;
    margin: ${props => (headerHeight - props.height) / 2}px;
`

const BtnWrap = style.div`
    float: right;
`

const Btn = style.img`
    height: ${props => props.height}px;
    margin: ${props => (headerHeight - props.height) / 2}px 15px;
`

const ProfileImgWrap = style.div`
    display: inline-block;
    background-color: #C4C4C4;
    border-radius: 50%;
    height: ${props => props.height}px;
    width: ${props => props.width}px;
    margin: ${props => (headerHeight - props.height) / 2}px;
`

const MenuWrap = style.div`
    background-color: black;
    height: 50px;
    width: 100vw;
    padding: 10px;
`
const Menu = style.div`
    border: solid 1px #FFFFFF;
    width: 90vw;
    height: 30px;
    margin: auto;
    border-radius: 2rem;
    line-height: 30px;
    position: relative;
`

const MenuTextWrap = style.div`
    width: 80vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: space-around;
`

const MenuText = style.div`
    color: white;
    margin: 0 2vw;
    line-height: 30px;
    text-align: center;
    font-size: 11px;
    font-weight: 400;
`

const SearchIcon = style.img`
    
`
// const MarketSelectWrap = style.div`
//     width: 100vw;
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
// `;

// const MarketForm = style.form`

// `;

// const MarketSelect = style.select`
//     width: auto;
//     border: none;
//     margin-top: 7vw;
//     padding-left: 2rem;
//     font-weight: bold;
//     font-size: 1.2rem;
//     color: rgba(248, 246, 250, 1);
//     -webkit-appearance: none; /* 네이티브 외형 감추기 */ 
//     -moz-appearance: none; 
//     appearance: none;
//     background: url(${downward}) no-repeat 1% 50%;
//     background-size: 1.2rem 1.2rem;
//     &::-ms-expand { 
//         display: none; 
//     }
//     outline: none;
// `;

// const MarketOption = style.option`
//     font-size: 0.8rem;
//     color: black;
// `;

// const SearchBarWrap = style.div`

// `;

// const SearchBar = style.input`
//     -webkit-appearance: none; /* 네이티브 외형 감추기 */ 
//     -moz-appearance: none; 
//     appearance: none;
//     padding-left: 11vw;
//     width: 79vw;
//     height: 8vw;
//     border: 0.1rem solid rgba(248, 246, 250, 1);
//     background-color: rgba(0,0,0,0);
//     border-radius: 3.5vw;
//     margin-top: 4vw;
//     color: rgba(248, 246, 250, 1);
//     &::placeholder{
//         color:${(props) => ( props.isFocus ? 'rgba(248, 246, 250, 0)' : 'rgba(248, 246, 250, 1)')}; 
//         font-size: 0.8rem;
//         line-height: 1rem;
//         font-weight: 600;
//     }
//     outline: none;
//     font-size: 0.8rem;
//     font-weight: 600;
// `;

// const SearchImg = style.img`
//     width: 1rem;
//     height: 1rem;
//     position: absolute;
//     z-index: 10;
//     margin-top: 7vw;
//     margin-left: 4vw;
// `;




const HeaderComponent = (props) => {
    // const [isFocus, setIsFocus] = useState(false);

    // const onHandleFocus = () => {
    //     setIsFocus(true);
    // }

    // const onHandleBlur = () => {
    //     setIsFocus(false);
    // }

    return(
        <>
            <HeaderWrap>
                <NetflixLogo src={netflixLogo} height={20}></NetflixLogo>
                <BtnWrap>
                    <Btn src={giftBtn} height={15}></Btn>
                    <Btn src={kidsBtn} height={15}></Btn>
                    <Btn src={notiBtn} height={15}></Btn>
                    <ProfileImgWrap height={30} width={30}></ProfileImgWrap>
                </BtnWrap>
            </HeaderWrap>
            <MenuWrap>
                <Menu>
                    <SearchIcon src={searchIcon}></SearchIcon>
                    <MenuTextWrap>
                        <MenuText>홈</MenuText>
                        <MenuText>TV프로그램</MenuText>
                        <MenuText>영화</MenuText>
                        <MenuText>NEW! 요즘 대세 컨텐츠</MenuText>
                        <MenuText>내가 찜한 컨텐츠</MenuText>
                    </MenuTextWrap>
                </Menu>
            </MenuWrap>
        </>
    );
}

export default HeaderComponent;