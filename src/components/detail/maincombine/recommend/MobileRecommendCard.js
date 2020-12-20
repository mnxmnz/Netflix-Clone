import styled from 'styled-components';
import BlankTop from '../../../common/BlankTop';
import MatchRate from '../../../common/MatchRate';
import Title from '../../../common/Tttle';
import WatchingLevel from '../../player/header/WatchingLevel';
import SeasonPlayButton from '../../../common/SeasonPlayButton';


const CardWrap = styled.article`
    width: 100%;
    display:flex;
    border-radius:6px;
    overflow:hidden;
    
`
const VideoImage = styled.div`
    width:30.1rem;
    height:10.7rem;
    background-color: #FFFFFF;
    background-image: url('https://mdn.mozillademos.org/files/8971/firefox_logo.png');
    background-size: contain;
    background-position:center;
    background-repeat:no-repeat;
`

const CardInner = styled.div`
    width:100%;
    height:10.7rem;
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
    @media only screen and (max-width: 768px) {
    font-size:1.2rem;
  }

`
const Summary = styled.p`
    width:36.3rem;
    font-size: 1.4rem;
    line-height: 125%;
    color: #D2D2D2;
    @media only screen and (max-width: 768px) {
        font-size:1rem;
  }
`
const CardHoverPlayer = styled.div`
    width:20.1rem;
    height:10.7rem;
    position:absolute;
    border-radius:0.6rem;
`

const MobileRecommendCard = () => {
    return(
        <>
        <CardWrap>
            <VideoImage>
            <CardHoverPlayer>
                    <div style={{width:'100%',height:'100%',position:'relative',display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <SeasonPlayButton desktopheight='4.5' desktopwidth='4.5' mobileheight='4' mobilewidth='4'/>
                    </div>
                </CardHoverPlayer>

            </VideoImage>
            <CardInner>
                <CardInnerWrap align='center'>
                    <div>
                        <Title DesktopFontSize='1.6' MobileFontSize='1.2'>나르코스</Title>
                        <Info>TV드라마 · 시즌 2개 </Info>
                    </div>
                    <div style={{marginTop:'-3rem'}}>
                        <CardInnerWrap align='center'>
                        <MatchRate MatchRateNumber='94' />
                        <div style={{width:'30px'}}></div>
                        <WatchingLevel Level='3' Size='2.3rem'/>
                        </CardInnerWrap>
                    </div>
                </CardInnerWrap>
                <BlankTop DesktopMargin='1.4' MobileMargin='0.8'/>
                <CardInnerWrap align='flex-end'>
                    <Summary>
                    거대한 마약전쟁의 서막이 열린다. 1980년대 멕시코 과달라하라를 점령한 ‘시날로아 카우보이들.’ 미겔 앙헬 펠릭스 가야르도는 이곳에 황금 제국을 건설할수 있을까?
                    </Summary>
                </CardInnerWrap>
            </CardInner>
        </CardWrap>
        <BlankTop DesktopMargin='1.1' MobileMargin='1.8'/>
        </>
    )
}

export default MobileRecommendCard;