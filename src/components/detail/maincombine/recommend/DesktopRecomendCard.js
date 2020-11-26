import styled from 'styled-components';
import BlankTop from '../../../common/BlankTop';
import MatchRate from '../../../common/MatchRate';
import Title from '../../../common/Tttle';
import WatchingLevel from '../../player/header/WatchingLevel';

const CardWrap = styled.article`
    width: 100%;
    display:flex;
    border-radius:6px;
    overflow:hidden;
    
`
const VideoImage = styled.div`
    width:24.7rem;
    height:13.9rem;
    background-color: #FFFFFF;
    background-image: url('https://mdn.mozillademos.org/files/8971/firefox_logo.png');
    background-size: contain;
    background-position:center;
    background-repeat:no-repeat;
`

const CardInner = styled.div`
    width:100%;
    height:13.9rem;
    padding:1.9rem;
    background: #333333;
`
const CardInnerWrap = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:${props => props.align};
`
const Info = styled.div`

    font-size: 1.6rem;
    line-height: 1.9rem;
    color: #FFFFFF;

`
const Summary = styled.p`
    width:36.3rem;
    font-size: 1.4rem;
    line-height: 125%;
    color: #D2D2D2;
`
const DesktopRecommentCard = () => {
    return(
        <>
        <CardWrap>
            <VideoImage></VideoImage>
            <CardInner>
                <CardInnerWrap align='center'>
                    <div>
                        <Title DesktopFontSize='1.6'>나르코스</Title>
                        <Info>TV드라마 · 시즌 2개 </Info>
                    </div>
                    <WatchingLevel Level='3' Size='3.5rem'/>
                </CardInnerWrap>
                <BlankTop DesktopMargin='1.4'/>
                <CardInnerWrap align='flex-end'>
                    <Summary>
                    거대한 마약전쟁의 서막이 열린다. 1980년대 멕시코 과달라하라를 점령한 ‘시날로아 카우보이들.’ 미겔 앙헬 펠릭스 가야르도는 이곳에 황금 제국을 건설할수 있을까?
                    </Summary>
                    <MatchRate MatchRateNumber='94' />
                </CardInnerWrap>
            </CardInner>
        </CardWrap>
        <BlankTop DesktopMargin='1.1' />
        </>
    )
}

export default DesktopRecommentCard;