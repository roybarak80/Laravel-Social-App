import React from 'react';
import moment from 'moment';

class PotentialFriendsList extends React.Component {

    componentWillReceiveProps(nextProps) {

    }
    render() {

        const { currPotentialFriends } = this.props;
        const potentialFriendsList = currPotentialFriends.map((item, index) => (

            <li key={item.id} >
                <span className="text-capitalize">{item.name}</span>
                <span className="text-capitalize">{item.hobbie_name}</span>
                <span>
                    {item.user_birthday ? moment(item.user_birthday).format("DD/MM/YYYY") : ''}
                </span>
            </li>
        ));
        return (
            <div>
                {potentialFriendsList}
            </div>
        );
    }
}
export default PotentialFriendsList


