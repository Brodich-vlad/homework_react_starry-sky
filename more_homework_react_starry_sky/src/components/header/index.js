import logo from "../../image/logo.jpg";
import arrow from "../../image/arrow.svg"

function Header({item_1, item_2, item_3, item_4, item_5, btn_header, clickBtnHeader, headerNav, clickNav}){
    
    return(
        <header className="header">
            <a className="logo" href="./">
                <img src={logo} alt="logo"/>
            </a>
            <ul onClick={()=>{clickNav()}} className={headerNav}>
                <li className={item_1}>
                    <a href="./">Inicio</a>
                </li>
                <li className={item_2}>
                    <a href="/#">Espacio</a>
                </li>
                <li className={item_3}>
                    <a href="/#">Planetas</a>
                </li>
                <li className={item_4}>
                    <a href="/#">Nosotros</a>
                </li>
                <li className={item_5}>
                    <a href="/#">Misiones</a>
                </li>
            </ul>
            <button onClick={()=>{clickBtnHeader()}} className={btn_header} type="button">
                <img src={arrow} alt="arrow"/>
            </button>
        </header>
    )
}

export default Header;