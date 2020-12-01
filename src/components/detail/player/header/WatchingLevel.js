import {ReactComponent as All}  from '../../../../assets/watchinglevel/ic_all.svg'
import {ReactComponent as Fifteen}  from '../../../../assets/watchinglevel/ic_fifteen.svg'
import {ReactComponent as Nineteen}  from '../../../../assets/watchinglevel/ic_nineteen.svg'
import {ReactComponent as Null}  from '../../../../assets/watchinglevel/ic_null.svg'
import {ReactComponent as Twelve}  from '../../../../assets/watchinglevel/ic_twelve.svg'


const WatchingLevel = ({Level, Size}) => {
    if(Level==='0'){
        return(
            <div style={{width:Size, height:Size}}>
                <All style={{width:'100%', height:'100%'}}/> 
            </div> 
        )    
    }else if(Level==='1'){
        return(
            <div style={{width:Size, height:Size}}>
                <Twelve style={{width:'100%', height:'100%'}}/> 
            </div> 
        )     
    }else if(Level==='2'){
        return(
            <div style={{width:Size, height:Size}}>
                <Fifteen style={{width:'100%', height:'100%'}}/> 
            </div> 
        )     
    }else if(Level==='3'){
        return(
            <div style={{width:Size, height:Size}}>
                <Nineteen style={{width:'100%', height:'100%'}}/> 
            </div> 
        )     
    }else {
        return(
            <div style={{width:Size, height:Size}}>
                <Null style={{width:'100%', height:'100%'}}/> 
            </div> 
        )     
    }

}

export default WatchingLevel;