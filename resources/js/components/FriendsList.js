import React from 'react';
class FriendsList extends React.Component {

    render() {

        const { currUsersFriends } = this.props;

        const listUsersFriends = currUsersFriends.map((item, index) => (
            <li className="d-flex justify-content-between list-group-item" key={index}>
                <span>{item.friend_name} </span>

            </li>

        ));
        return (
            <ul className="list-group">
                {listUsersFriends}
            </ul>
        );
    }
}
export default FriendsList

