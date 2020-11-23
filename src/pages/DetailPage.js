import React, { useEffect, useState } from "react";
import DetailInner from "../components/detail/DetailInner";
import DetailOverlay from "../components/detail/DetailOverlay";
import CloseButtonContainer from "../containers/detail/player/header/CloseButtonContainer";
import DetailWrapperContainer from "../containers/detail/DetailWrapperContainer";
import HeadWrap from "../components/detail/player/header/HeadWrap";
import WatchingLevel from "../components/detail/player/header/WatchingLevel";
import PlayerWrap from "../components/detail/player/PlayerWrap";
import FooterWrap from "../components/detail/player/footer/FooterWrap";
import MuteButtonContainer from "../containers/common/MuteButtonContainer";
import FooterLeftContainer from "../containers/detail/player/footer/FooterLeftContainer";
import InformationWrap from "../components/detail/information/InformationWrap";
import InformationContent from "../components/detail/information/InformationContent";

const DetailPage = ({ closeDetail, maskClosable, visible }) => {
    // 브라우저의 사이즈를 측정하는 State
    const [windowWidth, setWindowWidth] = useState(0);
    let resizeWindow = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, []);

    // 뒷배경의 스크롤을 막는 Effect
    useEffect(() => {
        document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
        return () => {
            const scrollY = document.body.style.top;
            document.body.style.cssText = `position: ""; top: "";`;
            window.scrollTo(0, parseInt(scrollY || "0") * -1);
        };
    }, []);

    return (
        <>
            <DetailOverlay visible={visible} />
            <DetailWrapperContainer closeDetail={closeDetail} maskClosable={maskClosable} visible={visible}>
                <DetailInner>
                    <PlayerWrap DesktopHeight="48" DesktopPadding="3rem 5rem" MobileHeight="45.7" MobilePadding="3rem">
                        <HeadWrap DesktopPadding="2rem">
                            <WatchingLevel />
                            <CloseButtonContainer closeDetail={closeDetail} />
                        </HeadWrap>
                        <FooterWrap>
                            <FooterLeftContainer windowWidth={windowWidth} />
                            <MuteButtonContainer />
                        </FooterWrap>
                    </PlayerWrap>
                    <InformationWrap DesktopHeight="48" DesktopPadding="3rem 5rem" MobileHeight="45.7" MobilePadding="3rem">
                        <InformationContent />
                    </InformationWrap>
                </DetailInner>
            </DetailWrapperContainer>
        </>
    );
};

export default DetailPage;
