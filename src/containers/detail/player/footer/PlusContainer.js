
import { useState } from 'react';
import FooterCheckBoxPlus from '../../../../components/detail/player/footer/FooterCheckBoxPlus'


const PlusContainer = () => {
    const [checked, setChecked] = useState(false);

    const ClickHandler = (e) => {
        if(checked){
            setChecked(false)
        }else{
            setChecked(true)
        }
    }

    return <FooterCheckBoxPlus checked={checked} ClickHandler={ClickHandler}  />
}

export default PlusContainer;