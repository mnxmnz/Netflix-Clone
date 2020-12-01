import BlankTop from "../../../common/BlankTop";
import Title from "../../../common/Tttle";
import DesktopPlayerCard from "./DesktopPlayerCard";
import SeasonHeaderLeftWrap from "./header/SeasonHeaderLeftWrap";
import SeasonHeadertWrap from "./header/SeasonHeaderWrap";
import SeasonNav from "./header/SeasonNav";
import MoreButton from "../MoreButton";
import SeasonInner from "./SeasonInner";
import SeasonWrap from "./SeasonWrap";


const SeasonCombine = () => {

    return(
        <>
        <SeasonInner>
            <SeasonHeadertWrap>
                <Title DesktopFontSize='2.4' MobileFontSize='1.5'>회차</Title>
                <SeasonHeaderLeftWrap>
                    <SeasonNav SeasonNumber='1'/>
                    <SeasonNav SeasonNumber='2'/>
                    <SeasonNav SeasonNumber='3'/>
                    <SeasonNav SeasonNumber='4'/>
                </SeasonHeaderLeftWrap>
            </SeasonHeadertWrap>
            <BlankTop DesktopMargin='2.5' MobileMargin='2.7'/>
            <SeasonWrap>
                <DesktopPlayerCard/>
                <DesktopPlayerCard/>
                <DesktopPlayerCard/>
                <DesktopPlayerCard/>
                <DesktopPlayerCard/>
                <DesktopPlayerCard/>
                <DesktopPlayerCard/>
                <DesktopPlayerCard/>
                <DesktopPlayerCard/>
                <DesktopPlayerCard/>
            </SeasonWrap>


        </SeasonInner>
        <MoreButton text='펼치기'/>
        </>
    )

}

export default SeasonCombine;