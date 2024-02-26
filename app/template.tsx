'use client'

import { FC } from "react";

import { RecoilRoot } from "recoil";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Template: FC<{
    children: React.ReactNode;
  }> = ({ children }) => {
    return (
        <RecoilRoot>
            <div className="relative">
                <Header />
                    {children}
                <Footer />
                {/* <Navbar /> */}
            </div>
        </RecoilRoot>
    )
}

export default Template