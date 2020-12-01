import styled from 'styled-components';
import BlankTop from '../../../common/BlankTop';
import SeasonPlayButton from '../../../common/SeasonPlayButton';
import Title from '../../../common/Tttle';

const CardOuterWrap = styled.article`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    border-bottom: 0;
    border-left: 0;
    border-right: 0;
    border-top : 0.5px;
    border-style:solid;
    border-image: radial-gradient(ellipse at 50% 50%, #A0A0A0 40%, #6F6F6F 60%,#141414 100%);
    border-image-slice:1;
    border-radius:0.6rem;
    &:hover{
        background-color:#333333;
    }
    &:hover > div > div > div {
        opacity:1;
    }
`
const CardInnerWrap = styled.div`
    display:flex;
    width:88%;
    height:88%;
    justify-content:space-between;
    align-items:center;
`
const CardImage = styled.div`
    width:9.5rem;
    height:9.5rem;
    background-image: url('https://mdn.mozillademos.org/files/8971/firefox_logo.png');
    background-size: contain;
    border-radius:0.6rem;
    background-color: #838383;
    background-position:center;
    background-repeat:no-repeat;
    position:relative;
    cursor: pointer;

`
const CardHoverPlayer = styled.div`
    width:9.5rem;
    height:9.5rem;
    position:absolute;
    border-radius:0.6rem;
    background: linear-gradient(to bottom,rgba(0,0,0,0) 70%, black 100%);
    opacity: 0;
`

const CardHoverTime = styled.span`
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 1.4rem;
    text-align: center;
    color: #FFFFFF;
    position:absolute;
    bottom:0.6rem;
    right:0.6rem;
`

const CardSummary = styled.div`
    width:21.4rem;
   

`
const SummaryContent = styled.p`
    font-size: 1.4rem;
    line-height: 1.8rem;
    letter-spacing: -0.06em;
    color: #D2D2D2;
    font-weight:400;
`

const DesktopPlayerCard = () => {
    return(
    <CardOuterWrap>
        <CardInnerWrap>
            <CardImage>
                <CardHoverPlayer>
                    <div style={{width:'100%',height:'100%',position:'relative',display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <SeasonPlayButton desktopheight='4.5' desktopwidth='4.5'/>
                        <CardHoverTime>48m</CardHoverTime>
                    </div>
                </CardHoverPlayer>

            </CardImage>
            <CardSummary>
                <Title DesktopFontSize='1.6'>1화</Title>
                <BlankTop DesktopMargin='0.2'/>
                <SummaryContent>
                        사상 최대의 무장강도를 치밀하게 계획해온 교수. 잃을 것 없는 8일을 지휘하여 스페인 조폐국에 침투시킨다. 인질까지 잡았으니 이제 독안에 든 쥐가 될 차례
                </SummaryContent>
            </CardSummary>
        </CardInnerWrap>
    </CardOuterWrap>)
}

export default DesktopPlayerCard;