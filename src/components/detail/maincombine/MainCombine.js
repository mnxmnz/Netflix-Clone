import RecommendCombine from "./recommend/RecommendCombine";
import SeasonCombine from "./season/SeasonCombine";
import DetailInformation from "../detailInformation/DetailInformation";
import MobileMainNav from "./MobileMainNav";
import BlankTop from "../../common/BlankTop";
import MobileSeasonCombine from'../maincombine/season/MobileSeasonCombine'
import MobileRecommendCombine from "./recommend/MobileRecommendCombine";

const MainCombine = ({windowWidth, navCheck,onNavCheckHandler}) => {
    return (
        <>
        {
            windowWidth>'768' ?
            <>
                <SeasonCombine/>
                <RecommendCombine/>
                <DetailInformation/>
            </> :
            <>
                <MobileMainNav navCheck={navCheck} onNavCheckHandler={onNavCheckHandler}/>
                <BlankTop MobileMargin='2.7'/>
                {navCheck ==='1' ? <MobileSeasonCombine/> :
                 navCheck ==='2' ? <MobileRecommendCombine/>:
                //  민지야 여기에다가 모바일버전 인물정보 만들어서 넣어줘!
                 ''}
                 <BlankTop MobileMargin='5.7'/>
            </>
        }

        </>
    )
}

export default MainCombine;