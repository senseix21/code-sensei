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
        <>
            <div className='mr-2 font-bold'>
                {darkTheme ? 'light' : 'dark'}

            </div>
            <input
                className=" toggle bg-secondary  py-2 px-4 rounded-xl "
                type='checkbox'
                onClick={handleToggle}
            >
            </input>
        </>
    );
};

export default ThemeToggle;
