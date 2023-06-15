// Зоряне небо.
function StarrySky({className}){
    const stars =[];
    // Зірки випадкового розміру та кольору.
    const star=()=>{
        for (let i = 0; i < 150; i++) {
            let a = `0.${Math.floor(Math.random() * (3 - 1) + 1)}rem`;
            let b = `${Math.random() * (1.1 - 0.1) + 0.1}`;
            let x = `${Math.floor(Math.random()*100)}%`;
            let y = `${Math.floor(Math.random()*100)}%`;
            if(i % 10 === 0){
                stars.push(<span key={i} style={{ width: a, height:a,top: x,left: y, opacity: b}} className="star star-blue"></span>) 
            }
            else if(i%11 === 0){

                stars.push(<span key={i} style={{ width: a, height: a, top: x,left: y, opacity: b}} className="star star-red"></span>) 
            }
            else{
                stars.push(<span key={i} style={{ width: a, height: a, top: x,left: y, opacity: b}} className="star"></span>)
            }
    
        }
    return stars
    }

    return(
        <div className={className}>
            {
                star()
            }
        </div>
    )
}

export default StarrySky;
