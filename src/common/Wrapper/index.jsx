import React, { Component } from 'react';

import styles from './Wrapper.module.css';

class Wrapper extends Component{
    render(){
        return(
            <div className={styles.wrapper}>
                {this.props.children}
            </div>
        )
    }
}

export default Wrapper;