import {Component} from "react";
import Header from "../header";
import StarrySky from "../starrySky";
import MainImg from "../mainImg";
import Footer from "../footer";
import SectionContent from "../sectionContent";

class App extends Component{
    state = {
    starry_sky_style: new Date().getMinutes() % 2 === 0 ? 'stars spin-left-stars':'stars spin-Right-stars',
    main_img_style: new Date().getMinutes() % 2 === 0 ? 'main-img spin-right':'main-img spin-left',
    title:"title",
    item_1:'header-nav-item',
    item_2:'header-nav-item',
    item_3:'header-nav-item',
    item_4:'header-nav-item',
    item_5:'header-nav-item',
    footer_btn:"footer-btn hide",
    content_img:'section-content-img',
    content_info:'section-content-info',
    click_main_img:false,
        // Адаптивна панель навігації.
    btn_header:'header-btn',
    navOpen:false,
    header_nav:'header-nav',

    }

    //    Клік планета.
    clickMainImg = ()=>{
        if(this.state.click_main_img === false){
            this.setState((state)=>{
                return{
                    ...state,
                    main_img_style:"main-img showImg",
                    item_1:"header-nav-item show-item-1",
                    item_2:"header-nav-item show-item-2",
                    item_3:"header-nav-item show-item-3",
                    item_4:"header-nav-item show-item-4",
                    item_5:"header-nav-item show-item-5",
                    btn_header:'header-btn show-header-btn',
                    title:"title showTitle",
                    footer_btn:"footer-btn show-btn",
                    click_main_img:true,
                }
            })
        }else return

    }
    //    Клік стрілочка футер.
    clicArrow = ()=>{
        this.setState((state)=>{
            return{
                ...state,
                main_img_style:"main-img showImg hide-main-img",
                content_img: "section-content-img show-content",
                content_info:'section-content-info show-content',
                title:'title showTitle hide-title',
                footer_btn:"footer-btn",
            }
        })
    }
    //    Клік стрілочка хедер. 
    clickBtnHeader=()=>{
        if(this.state.navOpen === false){
            this.setState((state)=>{
                return{
                    ...state,
                    header_nav:'header-nav nav-open',
                    btn_header:'header-btn show-header-btn btn-open ',
                    navOpen:true,
                }
            })
        }
        else if(this.state.navOpen === true){
            this.setState((state)=>{
                return{
                    ...state,
                    header_nav:'header-nav',
                    btn_header:'header-btn show-header-btn',
                    navOpen:false,
                }
            })
        }
    }
    //    Клік навігація хедер. 
    clickNav=()=>{
        if(this.state.navOpen === true){
            this.setState((state)=>{
                return{
                    ...state,
                    header_nav:'header-nav',
                    btn_header:'header-btn show-header-btn',
                    navOpen:false,
                }
            })
        } 
    }

    render(){
        return(
            <>
                <Header item_1={this.state.item_1} item_2={this.state.item_2} item_3={this.state.item_3} item_4={this.state.item_4} item_5={this.state.item_5} btn_header={this.state.btn_header} clickBtnHeader={this.clickBtnHeader} headerNav={this.state.header_nav} clickNav={this.clickNav}/>

                <main className="main">
                    <StarrySky className={this.state.starry_sky_style}/>

                    <MainImg className={this.state.main_img_style}  click={this.clickMainImg}/>
                    <SectionContent styleImg={this.state.content_img} styleText={this.state.content_info} styTitle={this.state.title}/>
                </main>
                
                <Footer className={this.state.footer_btn} click={this.clicArrow}/>
            </>
        )
    }
}

export default App;