import React from "react";
import * as axios from "axios";
import userPhoto from "./../../assets/images/user.png";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }
  render() {
    return (
      <div>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <div>
              <img
                src={u.photos.small !== null ? u.photos.small : userPhoto}
                alt="Фотография пользователя"
              />
              {u.followed ? (
                <button
                  onClick={() => {
                    this.props.unfollow(u.id);
                  }}
                >
                  Follow
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.props.follow(u.id);
                  }}
                >
                  Unfollow
                </button>
              )}
            </div>
            <div>{u.name} u.location.city и u.location.country</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
