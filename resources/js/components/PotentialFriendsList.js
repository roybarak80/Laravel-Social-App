import React from 'react';
import Moment from 'react-moment';

class PotentialFriendsList extends React.Component {

    componentWillReceiveProps(nextProps) {

    }
    render() {

        const { currPotentialFriends } = this.props;
        const potentialFriendsList = currPotentialFriends.map((item, index) => (

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
                {potentialFriendsList}
            </div>
        );
    }
}
export default PotentialFriendsList


