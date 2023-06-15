import earth from '../../image/Earth.png'

function MainImg({className, click}){
    return(
        <div className={className} onClick={()=>{click()}}>
            <img src={earth} alt="Earth" width="230"/>
        </div>
    )
}

export default MainImg;