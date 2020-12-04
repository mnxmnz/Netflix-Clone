import React from 'react';
import style from 'styled-components';
import netflixLogo from'../../assets/homeheadericon/netflix_logo.png';

const BannerWrap = style.div`
    width: 100vw;
    position: relative;
    background-color: black;
`

const Video = style.iframe`
    width: 100vw;
    z-index: -1;
`

const MovieInfoWrap = style.div`
    position: absolute;
    top: 20vh;
    left: 10vw;
`
const MovieLogo = style.img`
    width: 30vw;
    margin-bottom: 10px;
`

const Btn = style.div`
    width: 30vw;
    height: 4vh;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    margin-bottom: 5px;
    text-align: center;
    line-height: 4vh;
    font-size: 11px;
`

const GenreWrap = style.div`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    width: 100%;
    &::-webkit-scrollbar {
        display: none;
    }
`
const GenreBtn = style.div`
    border: 1px solid white;
    border-radius: 50%; 
    width: 10vw;
    height: 10vw;
    line-height: 10vw;
    text-align: center;
    color: white;
    font-size: 11px;
    flex: 0 0 auto;
    margin: 2vw;
`



const BannerComponent = (props) => {
    return(
        <>
            <BannerWrap>
                <Video width="640" height="360" src="https://www.youtube.com/embed/7oKAPbnl7mQ?rel=0;amp;autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Video>
                <MovieInfoWrap>
                    <MovieLogo src={netflixLogo}></MovieLogo>
                    <Btn backgroundColor={"white"} color={"black"}>▶️ 재생</Btn>
                    <Btn backgroundColor={"#313131"} color={"white"}>ⓘ 상세정보</Btn>
                </MovieInfoWrap>
                <GenreWrap>
                    <GenreBtn>Title</GenreBtn>
                    <GenreBtn>애니메이션</GenreBtn>
                    <GenreBtn>SF / 판타지</GenreBtn>
                    <GenreBtn>한국 드라마</GenreBtn>
                    <GenreBtn>코미디</GenreBtn>
                    <GenreBtn>호러</GenreBtn>
                    <GenreBtn>미국 드라마</GenreBtn>
                    <GenreBtn>로맨스</GenreBtn>
                    <GenreBtn>로맨스</GenreBtn>
                    <GenreBtn>로맨스</GenreBtn>
                </GenreWrap>
            </BannerWrap>
        </>
    );
}

export default BannerComponent;