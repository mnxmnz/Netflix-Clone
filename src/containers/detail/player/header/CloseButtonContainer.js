import CloseButton from "../../../../components/detail/player/header/CloseButton";


const CloseButtonContainer = ({closeDetail}) => {
    const close = (e) => {
        if (closeDetail) {
            closeDetail(e)
        }
    }
    
    return <CloseButton close={close}/>
}

export default CloseButtonContainer;