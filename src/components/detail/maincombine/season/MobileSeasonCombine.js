
import DesktopPlayerCard from "./DesktopPlayerCard";

import SeasonWrap from "./SeasonWrap";
import MobilePlayerCard from "./MobilePlayerCard";
import FooterInner from "../../detailInformation/footer/FooterInner";


const MobileSeasonCombine = () => {

    return(
        <>
        <FooterInner>
            <SeasonWrap>
                <MobilePlayerCard/>
                <MobilePlayerCard/>
                <MobilePlayerCard/>
                <MobilePlayerCard/>
                <MobilePlayerCard/>
                <MobilePlayerCard/>
                <MobilePlayerCard/>
                <MobilePlayerCard/>
                <MobilePlayerCard/>
                <MobilePlayerCard/>
            </SeasonWrap>
        </FooterInner>
        </>
    )

}

export default MobileSeasonCombine;