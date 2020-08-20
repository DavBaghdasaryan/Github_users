import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// styles ---
import styles from './Users.module.css';

// components ---
import Wrapper from '../../common/Wrapper';
import User from '../../components/User';

// services
import UsersApi from '../../util/usersApi';

class Users extends Component {

    usersApi = new UsersApi();

    state = {
        users: [],
        display: "none",
        usernameValue: "",
    }


    componentDidMount() {
        this.usersApi.getUsers()
            .then(res => {
                this.setState({
                    users: res
                });
            });
    };

    handleUserDelete = (id) => {
        const newUsers = this.state.users.filter(user => user.id !== id);
        this.setState({
            users: newUsers,
        })
    }

    handleUserEdit = (id) => {
        const { username, avatar, type, profileUrl } = this.state.users[id - 1];
        this.setState({ display: "block" });
    }

    onDisplayNone = (e) => {
        e.stopPropagation();
        this.setState({ display: "none" });
    }

    onStop = (e) => {
        e.stopPropagation();
    }

    onhandleInput = (e) => {
        this.setState({ usernameValue: e.target.value })
    }

    onButEdit = (id) => {
        this.setState({ display: "none" });
        console.log(this.state.usernameValue);
        console.log(this.props.id)
    }

    render() {
        const { users } = this.state;

        return (
            <div className={styles.users}>
                <Wrapper>
                    <div className={styles.users_cont}>
                        {
                            users.map(user => {
                                return (
                                    <User
                                        key={user.id}
                                        id={user.id}
                                        username={user.username}
                                        avatar={user.avatar}
                                        profileUrl={user.profileUrl}
                                        type={user.type}
                                        onDelete={this.handleUserDelete}
                                        onEdite={this.handleUserEdit}
                                        onButEdit={this.onButEdit}
                                    />
                                )
                            })
                        }
                    </div>
                </Wrapper>
                <div className={styles.user_edit_panel} style={{ display: this.state.display }} onClick={this.onDisplayNone}>
                    <div className={styles.user_modal} onClick={this.onStop}>
                        <div className={styles.user_modal_item}>
                            <h3 className={styles.user_modal_username}>username</h3>
                            <input type="text" placeholder="username" onChange={this.onhandleInput} />
                        </div>
                        <div className={styles.user_modal_item}>
                            <h3 className={styles.user_modal_userType}>user type</h3>
                            <input type="text" placeholder="type" />
                        </div>
                        <div className={styles.user_modal_item}>
                            <h3 className={styles.user_modal_username}>user image (url)</h3>
                            <input type="text" placeholder="image" />
                        </div>
                        <div className={styles.user_modal_but}>
                            <button onClick={() => this.onButEdit(this.props.id)}>edit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Users;