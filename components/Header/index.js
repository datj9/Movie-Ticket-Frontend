import React, { useState } from 'react'
import Link from 'next/link';
import { Nav, Navbar, Container } from 'react-bootstrap'

const Header = () => {
    const [navLinkActive, setNavLinkActive] = useState(0);

    const changeLinkActive = indexMenu => {
        setNavLinkActive(indexMenu)
    }

    return (
        <Navbar variant="dark" bg="dark" expand="lg">
            <Container>
                <Link href='/'>
                    <a className='navbar-brand text-primary'>Movie Theater</a>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
                    <Nav className="">
                        <Link href="/" >
                            <a onClick={() => changeLinkActive(0)} className={navLinkActive === 0 ? 'nav-link active' : 'nav-link'}>
                                <span className='link text-primary'>Movies</span>
                            </a>
                        </Link>
                        <Link href="/" >
                            <a onClick={() => changeLinkActive(1)} className={navLinkActive === 1 ? 'nav-link active' : 'nav-link'}>
                                <span className='link text-primary'>Theaters</span>
                            </a>
                        </Link>
                        <Link href="/sign-in" >
                            <a onClick={() => changeLinkActive(2)} className={navLinkActive === 2 ? 'nav-link active' : 'nav-link'}>
                                <span className='link text-primary'>Sign In</span>
                            </a>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <style jsx>
                {`
                    .active > span, span.link:hover {
                        padding-bottom: 5px;
                        border-bottom: 2px solid #d72323;
                    }
                    .nav-link {
                        position: relative;
                    }
                `}
            </style>
        </Navbar>
    )
}

export default Header
