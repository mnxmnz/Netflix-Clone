import RecommendCombine from "./recommend/RecommendCombine";
import SeasonCombine from "./season/SeasonCombine";
import DetailInformation from "../detailInformation/DetailInformation";

const MainCombine = () => {
    return (
        <>
            <SeasonCombine/>
            <RecommendCombine/>
            <DetailInformation/>
        </>
    )
}

export default MainCombine;