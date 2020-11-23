import React from 'react';
import ExampleComponent from '../../components/home/ExampleComponent';

const ExampleComponentContainer = ({DesktopWidth,DesktopHeight,MobileWidth,MobileHeight,DesktopMargin,MobileMargin,openDetail}) => {
    // 각종 state 와 useEffect 같은 함수들을 여기 작성.....
    // 왠지 많이 안쓸것같은 느낌????

    return (
        <ExampleComponent         
            DesktopWidth={DesktopWidth} DesktopHeight={DesktopHeight} 
            MobileWidth={MobileWidth} MobileHeight={MobileHeight} 
            DesktopMargin={DesktopMargin} MobileMargin={MobileMargin}
            openDetail={openDetail}
        />
    )
}

export default ExampleComponentContainer;