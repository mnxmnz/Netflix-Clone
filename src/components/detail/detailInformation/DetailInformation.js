import React from "react";
import styled from "styled-components";
import BlankTop from "../../common/BlankTop";
import Title from "../../common/Tttle";
import DetailInformationContent from "./DetailInformationContent";
import LeftMoreButton from "./LeftMoreButton";
import RightMoreButton from "./RightMoreButton";
import FooterLeft from "./footer/FooterLeft";
import FooterInner from "./footer/FooterInner";

const DetailInformation = () => {
    return (
        <>
            <StyledButtonWrap id="contentWrap">
                <FooterInner>
                    <BlankTop DesktopMargin="10.2" MobileMargin="2.5" />
                    <Title DesktopFontSize="2.4" MobileFontSize="1.5">
                        종이의 집 상세정보
                    </Title>
                    <BlankTop DesktopMargin="2.5" MobileMargin="2.5" />
                    <StyledContentWrap>
                        <DetailInformationContent />
                        <DetailInformationContent />
                        <DetailInformationContent />
                        <DetailInformationContent />
                        <DetailInformationContent />
                        <DetailInformationContent />
                    </StyledContentWrap>
                </FooterInner>
                <LeftMoreButton />
                <RightMoreButton />
            </StyledButtonWrap>
            <FooterInner>
                <FooterLeft />
            </FooterInner>
        </>
    );
};

const StyledButtonWrap = styled.div`
    position: relative;
    flex-wrap: nowrap;
    overflow-x: auto;
    width: 100%;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const StyledContentWrap = styled.div`
    display: flex;
    overflow: auto;
    position: relative;
`;

export default DetailInformation;
