import React, { Component } from 'react';

// styles ---
import styles from './User.module.css';

// components ---
import Wrapper from '../../common/Wrapper';

class User extends Component {
    render() {

        const { id, username, avatar, profileUrl, type, onDelete, onEdite } = this.props;
        return (
            <div className={styles.user}>
                <img
                className={styles.user_img}
                    src={avatar}
                    alt={`${username} avatar`}
                />
                <div className={styles.user_details}>
                    <span className={styles.user_details_username}>
                        {username}
                    </span>
                    <span className={styles.user_details_type}>
                        Usert type: {type}
                    </span>
                    <div className={styles.user_details_controls}>
                        <a className={styles.controls_link} href={profileUrl}>
                            User page
                        </a>
                        <button className={styles.controls_edit} onClick={() => onEdite(id)}>
                            Edit User
                        </button>
                        <button className={styles.controls_delete} onClick={() => onDelete(id)}>
                            Delete User
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default User;