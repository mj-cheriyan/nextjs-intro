import React from "react";

interface IProps {
    children: React.ReactNode;
}

export default function Layout({children}: IProps){
    return (
        <div>
            <h1>Hello World</h1>
            {children} 
        </div>
    );
}