import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import styled from 'styled-components'

const StyledLink = styled(Nav.Link)`
    display: flex;
    text-decoration: none;
    font-size: 1.7rem;

    :hover {
        color: #8D8D8D;
        transition: all .4s ease;
        position: relative; 
        top: -5px;
        left: 10px;
    }
    
`


const ResponsiveNavbar = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="md">
            <Container className={styles.navcontainer}>
                <div className={styles.name}>
                <StyledLink href="/">Frank Corr</StyledLink>
                </div>
                <div className={styles.link}>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <StyledLink href="/about">About</StyledLink>
                            <StyledLink href="/discography">Discography</StyledLink>
                            <StyledLink href="/contact">Contact</StyledLink>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
        </>
    )
}

export default ResponsiveNavbar