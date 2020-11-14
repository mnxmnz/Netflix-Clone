import CloseButton from "../../components/detail/CloseButton";


const CloseButtonContainer = ({closeDetail}) => {
    const close = (e) => {
        if (closeDetail) {
            closeDetail(e)
        }
    }
    
    return <CloseButton close={close}/>
}

export default CloseButtonContainer;