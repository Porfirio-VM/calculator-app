import { useContext } from 'react'
import './ResultSection.css'
import { themeContext } from '../../hooks/ThemeProvider'

function ResultSection({currentInput, previousInput, operator}){

    const { actualTheme, changeTheme } = useContext(themeContext);
    const screenBg = actualTheme.resultsSection.background;
    const fontColor = actualTheme.resultsSection.fontsColors.primary;
    const themeSelBg = actualTheme.buttonsSection.background;
    const radioBg = actualTheme.buttonsSection.equal.background;
    return (
        <section className='header-wrapper' style={{ color: fontColor }}>
            <div className="flex theme-wrapper">
                <h2>calc</h2>
                <aside className='flex theme' >
                    <h5>THEME</h5>
                    <form className='flex theme-selector' style={{ background: themeSelBg}}>
                        <div className="flex input-wrapper">
                            <label htmlFor="firstTheme">1</label>
                            <input className="custom-radio" style={{accentColor: radioBg}}defaultChecked type="radio" value="firstTheme" name="theme" id="firstTheme" onClick={changeTheme}/>
                        </div>
                        <div className="flex input-wrapper">
                            <label htmlFor="secondTheme">2</label>
                            <input className='custom-radio' style={{accentColor: radioBg}} type="radio" value="secondTheme" name="theme" id="secondTheme" onClick={changeTheme}/>
                        </div>
                        <div className="flex input-wrapper">
                            <label htmlFor="thirdTheme">3</label>
                            <input className='custom-radio' style={{accentColor: radioBg}} type="radio" value="thirdTheme" name="theme" id="thirdTheme" onClick={changeTheme}/>
                        </div>
                    </form>
                </aside>
            </div>
            <div className="flex results-wrapper" style={{ background: screenBg }}>
                <span>{previousInput} {operator}</span>
                <h1>{currentInput}</h1>
            </div>
        </section>
        )
}

export default ResultSection