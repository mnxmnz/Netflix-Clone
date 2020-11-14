import React, { useEffect } from 'react'
import DetailInner from '../components/detail/DetailInner'
import DetailOverlay from '../components/detail/DetailOverlay'
import CloseButtonContainer from '../containers/detail/CloseButtonContainer'
import DetailWrapperContainer from '../containers/detail/DetailWrapperContainer'

const DetailPage=({closeDetail,maskClosable,visible}) => {


  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`
  return () => {
    const scrollY = document.body.style.top
    document.body.style.cssText = `position: ""; top: "";`
    window.scrollTo(0, parseInt(scrollY || '0') * -1)
  }
}, [])

  return (
    <>
      <DetailOverlay visible={visible} />
        <DetailWrapperContainer closeDetail={closeDetail} maskClosable={maskClosable} visible={visible}>
            <DetailInner>
              <CloseButtonContainer closeDetail={closeDetail} />
            </DetailInner>
      </DetailWrapperContainer>
    </>
  )
}



export default DetailPage;