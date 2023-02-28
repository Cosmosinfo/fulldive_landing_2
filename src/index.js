import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Theme from "./styles/Theme";
import { ThemeProvider } from "styled-components";
import "./lang/i18n";
import Routes from "./Routes";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <>
        <GlobalStyle />
        <ThemeProvider theme={Theme}>
            <Routes />
        </ThemeProvider>
    </>
);
