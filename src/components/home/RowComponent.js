import styled from "styled-components";
import top10Icon from "../../assets/homerowicon/img_top10.svg";
import netflixSymbol from "../../assets/homerowicon/ic_netflix_symbol.svg";

// background black으로 수정
const Wrap = styled.div`
  background: #000000;
`;

// font-family, rem으로 수정
const StyledTitle = styled.h2`
  margin-left: 25px;
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
`;

const StyledRow = styled.div`
  margin-left: 25px;
  white-space: nowrap;
  overflow: hidden;
`;

const StyledBox = styled.div`
  display: inline-block;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  position: ${(props) => props.position};
  margin-top: 11px;
  margin-right: 16px;
  margin-bottom: 31px;
  background: #838383;
  border-radius: 8px;
`;

const Icon = styled.img`
  display: block;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  position: ${(props) => props.position};
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  right: ${(props) => props.right}px;
  overflow: visible;
  z-index: 100;
`;

const RowComponent = ({ title, width, height, openDetail }) => {
  return (
    <Wrap>
      <StyledTitle>Netflix 인기 콘텐츠</StyledTitle>
      <StyledRow>
        <StyledBox
          onClick={openDetail}
          width="272"
          height="150"
          position="relative"
        >
          <Icon
            src={top10Icon}
            position="absolute"
            width="96"
            height="96"
            top="-7"
            right="-7"
          />
        </StyledBox>
        <StyledBox
          onClick={openDetail}
          width="272"
          height="150"
          position="relative"
        >
          <Icon
            src={netflixSymbol}
            position="absolute"
            width="14"
            height="25"
            top="12"
            left="12"
          />
        </StyledBox>
        <StyledBox onClick={openDetail} width="272" height="150" />
        <StyledBox onClick={openDetail} width="272" height="150" />
        <StyledBox onClick={openDetail} width="272" height="150" />
        <StyledBox onClick={openDetail} width="272" height="150" />
        <StyledBox onClick={openDetail} width="272" height="150" />
        <StyledBox onClick={openDetail} width="272" height="150" />
      </StyledRow>

      <StyledTitle>지금 뜨는 콘텐츠</StyledTitle>
      <StyledRow>
        <StyledBox width="200" height="111" position="relative">
          <Icon
            src={netflixSymbol}
            position="absolute"
            width="14"
            height="25"
            top="12"
            left="12"
          />
        </StyledBox>
        <StyledBox width="200" height="111" position="relative">
          <Icon
            src={netflixSymbol}
            position="absolute"
            width="14"
            height="25"
            top="12"
            left="12"
          />
        </StyledBox>
        <StyledBox width="200" height="111" />
        <StyledBox width="200" height="111" />
        <StyledBox width="200" height="111" />
        <StyledBox width="200" height="111" />
        <StyledBox width="200" height="111" />
        <StyledBox width="200" height="111" />
        <StyledBox width="200" height="111" />
      </StyledRow>

      <StyledTitle>일본 영화 & TV프로그램</StyledTitle>
      <StyledRow>
        <StyledBox width="200" height="111" />
        <StyledBox width="200" height="111" />
        <StyledBox width="200" height="111" />
        <StyledBox width="200" height="111" />
        <StyledBox width="200" height="111" />
        <StyledBox width="200" height="111" />
        <StyledBox width="200" height="111" />
        <StyledBox width="200" height="111" />
        <StyledBox width="200" height="111" />
      </StyledRow>

      <StyledTitle>Netflix 오리지널</StyledTitle>
      <StyledRow>
        <StyledBox width="200" height="360" />
        <StyledBox width="200" height="360" />
        <StyledBox width="200" height="360" />
        <StyledBox width="200" height="360" />
        <StyledBox width="200" height="360" />
        <StyledBox width="200" height="360" />
        <StyledBox width="200" height="360" />
        <StyledBox width="200" height="360" />
        <StyledBox width="200" height="360" />
      </StyledRow>

      <StyledTitle>오늘 한국의 TOP10 TV프로그램</StyledTitle>
      <StyledRow>
        <StyledBox width="200" height="111" />
        <StyledBox width="200" height="111" />
        <StyledBox width="200" height="111" />
        <StyledBox width="200" height="111" />
        <StyledBox width="200" height="111" />
        <StyledBox width="200" height="111" />
        <StyledBox width="200" height="111" />
        <StyledBox width="200" height="111" />
        <StyledBox width="200" height="111" />
      </StyledRow>

      <StyledTitle>한국 TV 프로그램&로맨틱</StyledTitle>
      <StyledRow>
        <StyledBox width="200" height="111" />
        <StyledBox width="200" height="111" />
        <StyledBox width="200" height="111" />
        <StyledBox width="200" height="111" />
        <StyledBox width="200" height="111" />
        <StyledBox width="200" height="111" />
        <StyledBox width="200" height="111" />
        <StyledBox width="200" height="111" />
        <StyledBox width="200" height="111" />
      </StyledRow>
    </Wrap>
  );
};

export default RowComponent;

// const StyledTitle = styled.h2``;
// const StyledBox = styled.div``;
