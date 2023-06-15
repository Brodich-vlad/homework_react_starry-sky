import arrow from '../../image/arrow.svg'

function Footer({className,click}) {
    return(
        <footer className="footer">
            <button onClick={()=>{click()}} className={className} type="button">
                <img src={arrow} alt="arrow"/>
            </button>
        </footer>
    )
}

export default Footer;