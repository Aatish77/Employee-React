import React, { useEffect } from 'react'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar">
                <div class="container-fluid">
                    
                    <form class="d-flex" role="button">
                        <button class="btn btn-outline" type="link">
                            <a class="nav-link" href="/" onClick={useEffect}>
                                EMPLOYEE DATA BANK
                            </a>
                        </button>
                        <button class="btn btn-outline" type="link" >
                            <a class="nav-link" href="/insertdata">
                                ADD EMPLOYEE
                            </a>
                        </button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar