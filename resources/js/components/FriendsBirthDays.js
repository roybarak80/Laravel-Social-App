import React from 'react';
import moment from 'moment';
class FriendsBirthDays extends React.Component {
    componentWillReceiveProps(nextProps) {

    }
    render() {

        const { friendsBirthDays } = this.props;
        const listFriendsBirthDays = friendsBirthDays.map((item, index) => (

            <li className="d-flex justify-content-between list-group-item" key={item.id} >
                <span>{item.name}</span>
                <span >
                    {item.user_birthday ? moment(item.user_birthday).format("DD/MM/YYYY") : ''}

                </span>
            </li>
        ));
        return (
            <div className="list-group">
                {listFriendsBirthDays}
            </div>
        );
    }
}
export default FriendsBirthDays


