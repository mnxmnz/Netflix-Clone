const { useState } = require("react");
const { default: MuteButton } = require("../../components/common/MuteButton");


const MuteButtonContainer = () => {
    const [checked, setChecked] = useState(false);

    const ClickHandler = (e) => {
        if(checked){
            setChecked(false)
        }else{
            setChecked(true)
        }
    }

    return <MuteButton checked={checked} ClickHandler={ClickHandler}/>
}

export default MuteButtonContainer