import React from "react";
// import { ThemeProvider } from "styled-components";

// const LightTheme = {
//   pageBackground: "white",
//   titleColor: "#dc658b",
//   tagLineColor: "black",
// };

// const DarkTheme = {
//   pageBackground: "#202124",
//   titleColor: "#lightpink",
//   tagLineColor: "lavender",
// };

// const themes = {
//     light: LightTheme,
//     dark: DarkTheme,
// }

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="toggle-mode"
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
