import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import HETYRA_Navbar from "./nav/HETYRA_Navbar";
import GlobalContext from "../contexts/GlobalContext";
import Footer from "./Footer";

import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

export default function HETYRA() {


    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#ffffff' }}>
            <HETYRA_Navbar />
            <div style={{ flex: '1', backgroundColor: '#ffffff' }}>
                <GlobalContext.Provider>
                    <Outlet />
                </GlobalContext.Provider>
            </div>
            <Footer />
        </div>
    );
}
