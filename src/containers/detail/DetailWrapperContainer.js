import DetailWrapper from "../../components/detail/DetailWrapper"



const DetailWrapperContainer = ({closeDetail,maskClosable,visible, children}) => {
    const onMaskClick = (e) => {
        if (e.target === e.currentTarget) {
            closeDetail(e)
        }
      }
    
    
    return <DetailWrapper children={children} onMaskClick={onMaskClick} maskClosable={maskClosable} visible={visible} />
}

export default DetailWrapperContainer;