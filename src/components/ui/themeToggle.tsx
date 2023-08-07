import React from 'react';

interface ThemeToggleProps {
    darkTheme: boolean;
    setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkTheme, setDarkTheme }) => {
    const handleToggle = () => {
        setDarkTheme((prevTheme) => !prevTheme);
    };

    return (
        <input
            className=" toggle bg-secondary  py-2 px-4 rounded-xl "
            type='checkbox'
            onClick={handleToggle}
        >
            {/* {darkTheme ? 'light' : 'dark'} */}
        </input>
    );
};

export default ThemeToggle;
