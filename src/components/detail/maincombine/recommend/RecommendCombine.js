import BlankTop from "../../../common/BlankTop";
import Title from "../../../common/Tttle";
import MoreButton from "../MoreButton";
import SeasonInner from "../season/SeasonInner";
import DesktopRecommendCard from "./DesktopRecommendCard";


const RecommendCombine = () => {

    return(
        <>
        <SeasonInner>
            <BlankTop DesktopMargin='10.2' MobileMargin='0'/>
            <Title DesktopFontSize='2.4' MobileFontSize='1.5'>추천 콘텐츠</Title>
            <BlankTop DesktopMargin='0.9'/>
            <DesktopRecommendCard />
            <DesktopRecommendCard />
            <DesktopRecommendCard />
            <DesktopRecommendCard />
            <DesktopRecommendCard />
            <DesktopRecommendCard />

        </SeasonInner>
        <MoreButton text='더보기'/>
        </>
    )
}

export default RecommendCombine;