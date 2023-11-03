import useButtonRender from '../../hooks/useButtonRender'
import ButtonsSection from '../ButtonsSection/ButtonsSection'
import ResultSection from '../ResultSection/ResultSection'
import './MainComponent.css'

function MainComponent(){
    const {renderButtons, currentInput, previousInput, operator} = useButtonRender();
    return (
        <main className='calculator-wrapper'>
            <ResultSection currentInput={currentInput} previousInput={previousInput} operator={operator}/>
            <ButtonsSection renderButtons={renderButtons} />
        </main>
    )
}

export default MainComponent