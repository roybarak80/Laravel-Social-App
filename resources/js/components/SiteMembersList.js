import React from 'react';
class SiteMembersList extends React.Component {

  render() {

    const { site_memebers } = this.props;
    // console.log(site_memebers)
    const listmembers = site_memebers.map((item, index) => (
      <li className="d-flex justify-content-between list-group-item" key={item.id}>
        <span >{item.name}</span>
        <span >{item.isFriend == 1 ?
          <i className="fa fa-users" title="You are Friends"></i> : <button value={item.id} onClick={() => this.props.onAddFriend(item.id)}
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
export default SiteMembersList

