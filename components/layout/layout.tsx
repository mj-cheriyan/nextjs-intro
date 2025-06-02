import React from "react";
import Header from "../header";
import Footer from "../footer";

interface IProps {
    children: React.ReactNode;
}

export default function Layout({children}: IProps){
    return (
         <>
            <Header />
            <main className="p-4 bg-base-200">{children}</main>
            <Footer />
        </>
    );
}