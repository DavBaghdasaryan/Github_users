import React, { Component } from 'react';

// styles ---
import styles from './Header.module.css';

// components ---
import Wrapper from '../../common/Wrapper';

// Constants
import navItems from '../../constants/navItems';


class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <Wrapper>
                    <div className={styles.header_cont}>
                        <h1 className={styles.header_logo}>USERS API</h1>
                        <nav className={styles.header_nav}>
                            <ul className={styles.header_list}>
                                {
                                    navItems.map(item => {
                                        return (
                                            <li key={item.id}>
                                                <a href={item.href}>{item.value}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </nav>
                    </div>
                </Wrapper>
            </header>
        )
    }
}


export default Header;