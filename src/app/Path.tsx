"use client"

import Home from "./home/page"
import Cart from "../app/componenets/Cart"
import About from "../app/aboutus/page"
import PrivacyPolicy from "./privacypolicy/page"
import ReturnPolicy from "./returnpolicy/page"
import TermsConditions from "./termsandconditions/page"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const Path = () => {
    return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/about" element={<About />} />
                <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                <Route path="/returnpolicy" element={<ReturnPolicy />} />
                <Route path="/termsandconditions" element={<TermsConditions />} />
            </Routes>
        </BrowserRouter>
    </>
    );
}

export default Path;