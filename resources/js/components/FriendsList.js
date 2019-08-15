import React from 'react';
class FriendsList extends React.Component {

  render() {

    const { members } = this.props;
    const listmembers = members.map((item, index) => (
      <li className="d-flex justify-content-between list-group-item" key={item.id}>
        <span>{item.name}</span>
        <span >{item.isFriend ?
          <i className="fa fa-users"></i> : <button value={item.id} onClick={() => this.props.onAddFriend(item.id)}
            className="btn btn-primary btn-xs" title="Add New Friend">+Add</button>}
        </span>
      </li>

    ));
    return (
      <ul className="list-group">
        {listmembers}
      </ul>
    );
  }
}
export default FriendsList

