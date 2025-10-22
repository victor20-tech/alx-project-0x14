import React from "react";

interface BaseProps {
    children?: React.ReactNode;
    className?: string;
}

const Base: React.FC<BaseProps> = ({ children, className = "" }) => {
    return (
        <footer className={className}>
            {children}
        </footer>
    );
};

export default Base;