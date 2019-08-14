import React from 'react';
class FriendsList extends React.Component {

  render() {

    const { members } = this.props;
    const listmembers = members.map((item, index) => (

      <li key={item.id} >
        <span>{item.name}</span>
        <span >{item.isFriend ?
          <i className="fa fa-users"></i> : <button value={item.id} onClick={() => this.props.onAddFriend(item.id)}
            className="btn btn-primary btn-xs">+Add</button>}
        </span>
      </li>
    ));
    return (
      <div>
        <ul>
          {listmembers}
        </ul>
      </div>
    );
  }
}
export default FriendsList

