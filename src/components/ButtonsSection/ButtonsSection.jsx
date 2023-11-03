import { useContext } from "react"
import { numbers, functs } from "../../constants"
import './ButtonsSection.css'
import { themeContext } from "../../hooks/ThemeProvider"

function ButtonsSection({renderButtons}){

    const {actualTheme}= useContext(themeContext)
    const keypadBg = actualTheme.buttonsSection.background;
    return(
        <section>
            <div className="grid buttons-wrapper" style={{background: keypadBg}}>
                {renderButtons(numbers)}
                {renderButtons(functs)}
            </div>
        </section>
    )
}

export default ButtonsSection