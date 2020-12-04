import React, { useState } from "react";
import BlankTop from "../components/common/BlankTop";
import RowContainer from "../containers/home/RowContainer";
import HeaderContainer from "../containers/home/HeaderContainer";
import BannerContainer from "../containers/home/BannerContainer";
import DetailPage from "./DetailPage";

const HomePage = () => {
  // 디테일 페이지 나오게 하는 State
  const [detailVisible, setDetailVisible] = useState(false);
  const openDetail = () => {
    setDetailVisible(true);
  };
  const closeDetail = () => {
    setDetailVisible(false);
  };
  // 클릭했을떄, 해당 아이디 값을 받아서 디테일에서 아이디값 기준으로 정보를 다시 받아오면 될듯
  return (
    <>
      <HeaderContainer />
      <BannerContainer />
      <RowContainer openDetail={openDetail}/>
      <BlankTop DesktopMargin="4" MobileMargin="3" />
      {/* 요기 밑은 Detail 페이지를 뜨게 하는 곳! 나랑 민지꺼! 재성이형님이랑 승미는 이 위쪽으로 작업해주세요 */}
      {detailVisible && (
        <DetailPage
          visible={detailVisible}
          maskClosable={true}
          closeDetail={closeDetail}
        />
      )}
    </>
  );
};

export default HomePage;
