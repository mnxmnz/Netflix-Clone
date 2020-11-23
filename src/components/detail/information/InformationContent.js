import React from "react";
import styled from "styled-components";
import FooterWrap from "../player/footer/FooterWrap";
import FooterLeftBottom from "../player/footer/FooterLeftBottom";

const InformationContent = () => {
    return (
        <StyledInformation>
            <div>
                <StyledTitle>시놉시스</StyledTitle>
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
                    <StyledTitle>시리즈 정보</StyledTitle>
                    <StyledSeriesContent>
                        <div style={{ marginTop: "10px"}}>방영년도 2020, 4개 시즌</div>
                        <div style={{ marginTop: "10px"}}>출연: 우르술라 코르베로 · 알바로 모르테 · 손흥민 · 차범근</div>
                        <div>장르: 스페인 TV 시리즈 · TV 프로그램 · 스릴러</div>
                        <div>특징 : 긴장감 넘치는 · 흥미딘딘은딘딘</div>
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
        margin-left: 30px;
    }
`;

const StyledTitle = styled.div`
    font-size: 18px;
    font-weight: bold;
`;

const StyledContent = styled.div`
    font-size: 17px;
    margin-top: 20px;
    line-height: 27px;
`;

const MobileFooter = styled.div`
    @media screen and (min-width: 768px) {
        display: none;
        & > :nth-child(1) {
        flex: 3;
    }

    & > :nth-child(2) {
        flex: 1;
        margin-left: 30px;
    }
    }

    @media screen and (min-width:768px) and (max-width:1023px) {
        display: block;
    }
`;

const StyledSeriesContent = styled.div`
    font-size: 14px;
    line-height: 16px;
`;

export default InformationContent;