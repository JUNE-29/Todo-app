import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        updateDarkMode(!darkMode);
    };

    useEffect(() => {
        // 윈도우 다크 모드인지 초기 셋팅
        const isDark =
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches);
        setDarkMode(isDark);
        updateDarkMode(isDark);
    }, []);
    return (
        <DarkModeContext.Provider
            value={{ darkMode: darkMode, toggleDarkMode }}
        >
            {children}
        </DarkModeContext.Provider>
    );
}

function updateDarkMode(darkMode) {
    if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
    } else {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
    }
}

export const useDarkMode = () => useContext(DarkModeContext);
