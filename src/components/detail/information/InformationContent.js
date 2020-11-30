import React from "react";
import styled from "styled-components";
import FooterWrap from "../player/footer/FooterWrap";
import FooterLeftBottom from "../player/footer/FooterLeftBottom";
import BlankTop from "../../common/BlankTop";
import MatchRate from "../../common/MatchRate";

const InformationContent = () => {
    return (
        <StyledInformation>
            <div>
                <StyledTitle>시놉시스</StyledTitle>
                <BlankTop DesktopMargin="1.3" MobileMargin="0.9" />
                <StyledContent>
                    8명의 범죄 능력자들을 모아 세기의 강도질을 제안하는 교수. 그는 그들이 거액의 돈을 벌 수 있을 뿐 아니라 대중의 지지도 얻을 수 있을 것이라 약속한다. 철저한 준비를 했음에도 실전에서는
                    그들의 능력과 의리를 시험하듯 계획은 조금씩 틀어지기 시작한다.
                </StyledContent>
                <MobileFooter>
                    <FooterWrap>
                        <FooterLeftBottom />
                    </FooterWrap>
                </MobileFooter>
            </div>
            <div>
                {/* <StyledSeries> */}
                <StyledTitle>
                    <div>시리즈 정보</div>
                    <div>
                        <MatchRate MatchRateNumber="98" />
                    </div>
                </StyledTitle>
                <StyledSeriesContent>
                    <BlankTop DesktopMargin="1.0" MobileMargin="0.5" />
                    <div>
                        <div>
                            <span>방영년도 </span>
                            <span>2020, 4개 시즌</span>
                        </div>
                        <div>
                            <MatchRate MatchRateNumber="98" />
                        </div>
                    </div>
                    <div>
                        <BlankTop DesktopMargin="1.0" MobileMargin="2.0" />
                        <span>출연: </span>
                        <span>우르술라 코르베로 · 알바로 모르테 · 손흥민 · 차범근</span>
                    </div>
                    <div>
                        <BlankTop DesktopMargin="1.0" MobileMargin="0.5" />
                        <span>장르: </span>
                        <span>스페인 TV 시리즈 · TV 프로그램 · 스릴러</span>
                    </div>
                    <div>
                        <BlankTop DesktopMargin="1.0" MobileMargin="0.5" />
                        <span>특징: </span>
                        <span>긴장감 넘치는 · 흥미딘딘은딘딘</span>
                    </div>
                </StyledSeriesContent>
                {/* </StyledSeries> */}
            </div>
        </StyledInformation>
    );
};

const StyledInformation = styled.div`
    display: flex;

    & > :nth-child(1) {
        flex: 2;
    }

    & > :nth-child(2) {
        flex: 1;
        margin-left: 5rem;
    }
`;

const StyledTitle = styled.div`
    font-size: 18px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;

    & > div:nth-child(2) {
        display: none;

        @media screen and (max-width: 768px) {
            display: block;
        }
    }
`;

const StyledContent = styled.div`
    font-size: 1.7rem;
    line-height: 2.7rem;

    @media screen and (max-width: 768px) {
        font-size: 1.4rem;
        line-height: 2.05rem;
    }
`;

const MobileFooter = styled.div`
    display: none;
    width: 33%;

    @media only screen and (max-width: 768px) {
        display: block;

        & > :nth-child(1) {
            flex: 3;
        }

        & > :nth-child(2) {
            flex: 1;
            margin-left: 30px;
        }
    }
`;

const StyledSeriesContent = styled.div`
    font-size: 1.2rem;
    line-height: 1.4rem;

    & > div:nth-child(2) {
        display: flex;
        justify-content: space-between;
    }

    & > div:nth-child(2) > div:nth-child(2) {
        display: block;

        @media only screen and (max-width: 768px) {
            display: none;
        }
    }

    & > div > span:nth-child(2) {
        color: #777777;
    }

    & > div:nth-child(2) > div:nth-child(1) > span:nth-child(1) {
        color: #ffffff;
        font-weight: bold;
    }

    @media screen and (max-width: 768px) {
        font-size: 1.1rem;
        line-height: 1.6rem;
    }
`;

export default InformationContent;
