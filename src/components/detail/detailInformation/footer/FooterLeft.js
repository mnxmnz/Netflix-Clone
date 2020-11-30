import React from "react";
import styled from "styled-components";
import WatchingLevel from "../../player/header/WatchingLevel";
import { ReactComponent as Logo } from "../../../../assets/detailinformation/ic_netflix_symbol_tablet.svg";
import { ReactComponent as GraphImage } from "../../../../assets/detailinformation/maturity_graph.svg";
import BlankTop from "../../../common/BlankTop";

const FooterLeft = () => {
    return (
        <>
            <BlankTop DesktopMargin="4.0" MobileMargin="4.0" />
            <StyledSeriesContent>
                <div>
                    <BlankTop DesktopMargin="8.0" MobileMargin="8.0" />
                    <StyledLogoIcon>
                        <WatchingLevel Level="3" Size="3.5rem" />
                        <Logo style={{ marginLeft: "2rem" }} />
                    </StyledLogoIcon>
                    <StyledDetailContent>
                        <div>
                            <BlankTop DesktopMargin="1.0" MobileMargin="1.0" />
                            <span>장르: </span>
                            <span>스페인 TV 시리즈 · TV 프로그램 · 스릴러</span>
                        </div>
                        <div>
                            <BlankTop DesktopMargin="0.5" MobileMargin="0.5" />
                            <span>프로그램 특징: </span>
                            <span>긴장감 넘치는 · 흥미진진</span>
                        </div>
                        <div>
                            <BlankTop DesktopMargin="0.5" MobileMargin="0.5" />
                            <span>관람등극: </span>
                            <span>청소년 관람불가</span>
                        </div>
                    </StyledDetailContent>
                </div>
                <GraphImage />
            </StyledSeriesContent>
        </>
    );
};

const StyledLogoIcon = styled.div`
    display: flex;
    align-items: center;
`;

const StyledSeriesContent = styled.div`
    font-size: 1.2rem;
    line-height: 1.4rem;
    color: white;
    display: flex;
    justify-content: space-around;
`;

const StyledDetailContent = styled.div`
    & > div > span:nth-child(2) {
        color: #777777;
    }
`;

export default FooterLeft;
