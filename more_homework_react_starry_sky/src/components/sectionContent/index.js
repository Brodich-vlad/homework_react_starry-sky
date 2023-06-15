import Mask from '../../image/Mask.jpg'

function SectionContent({styleImg, styleText, styTitle}){
    return(
        <section className="section-content ">

            <h1 className={styTitle}>Un viaje al espacio</h1>
            <div className={styleImg}>
                <img src={Mask} alt="Mask"/>
            </div>

            <div className={styleText}>
                <h2 className="section-content-title">Titulo</h2>
                <p className="section-content-text">
			The project must be animated, responsive and written in 'React' When starting the project: Step 1. Screen #1 is displayed as shown in the layout and the planet moves clockwise in even minutes and counterclockwise in odd minutes. The movement of the planet should be smooth. Step 2.When clicking on a planet, the planet is enlarged to the layout of screen #2 Step 3.the navigation menu leaves one by one from the top, following the example of the animation Bouncing entrances (Each new menu item appears with a delay of 500ms) Step 4.text "Un viaje al espacio" - should appear from transparent to visible in 1s after displaying all menu items. Step 5. The down arrow should appear after the text and jump. When you click on the arrow, the planet hides in the mountain as in the layout and the text to the left instead of them leaves from the right and from the left the content as on screen #3
                 </p>
            </div>

        </section> 
    )
}

export default SectionContent;