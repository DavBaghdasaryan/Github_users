import axios from 'axios';


class UsersApi{
    url = "https://api.github.com";
    endpoint = "/users";

    getUsers = async () => {
        const res = await axios.get(`${this.url}${this.endpoint}`);
        const data = await res.data;

        return data.map(this._transformUsers);
    }

    _transformUsers = (user) => {
        return {
            id: user.id,
            username: user.login,
            avatar: user.avatar_url,
            profileUrl: user.html_url,
            type: user.type,
        };
    }
}

export default UsersApi;