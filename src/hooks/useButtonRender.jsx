import { useContext } from "react";
import { useButtonFunctions } from "./useButtonFunction";
import { themeContext } from "./ThemeProvider";

function useButtonRender() {
  const { state, clickHandler } = useButtonFunctions();
  const {actualTheme} = useContext(themeContext);

  const renderButton = (button) => {
    const buttonStyle = getButtonStyle(button);

    return (
      <button
        style={buttonStyle}
        key={button}
        name={button}
        onClick={(e) => clickHandler(e)}
      >
        {button}
      </button>
    );
  };

  const getButtonStyle = (button) => {
    switch (button) {
      case "DEL":
      case "RESET":
        return {
          background: actualTheme.buttonsSection.delAndReset.background,
          color: actualTheme.buttonsSection.fontsColors.primary,
          boxShadow: `0px .3rem ${actualTheme.buttonsSection.delAndReset.shadow}`
        };
      case "=":
        return {
          background: actualTheme.buttonsSection.equal.background,
          color: actualTheme.buttonsSection.fontsColors.primary,
          boxShadow: `0px .3rem ${actualTheme.buttonsSection.equal.shadow}`
        };
      default:
        return {
          background: actualTheme.buttonsSection.numbersAndFunctions.background,
          color: actualTheme.buttonsSection.fontsColors.secondary,
          boxShadow: `0px .3rem ${actualTheme.buttonsSection.numbersAndFunctions.shadow}`
        };
    }
  };

  const renderButtons = (buttons) => buttons.map(renderButton);

  return {
    renderButtons,
    currentInput: state.currentInput,
    previousInput: state.previousInput,
    operator: state.operator,
  };
}

export default useButtonRender;
