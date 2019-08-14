import React from 'react';
import Moment from 'react-moment';
class FriendsBirthDays extends React.Component {
    componentWillReceiveProps(nextProps) {

    }
    render() {

        const { friendsBirthDays } = this.props;
        const listFriendsBirthDays = friendsBirthDays.map((item, index) => (

            <li key={item.id} >
                <span>{item.name}</span>
                <span >
                    <Moment format="DD/MM/YYYY">
                        {item.user_birthday}
                    </Moment>
                </span>
            </li>
        ));
        return (
            <div>
                {listFriendsBirthDays}
            </div>
        );
    }
}
export default FriendsBirthDays


