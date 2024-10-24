import React from 'react';

interface ButtonProps {
    label: string;
    onClick?: () => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
    return (
        <button
            className={`mt-3 p-2 bg-[#b747d0] text-white font-semibold rounded-md 
                  cursor-pointer hover:bg-[#a440b6] 
                  focus:outline-none focus:ring-2 focus:ring-[#b747d0] 
                  transition duration-300 ease-in-out 
                  ${className}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;
