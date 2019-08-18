import React from 'react';
import moment from 'moment';

class PotentialFriendsList extends React.Component {

    componentWillReceiveProps(nextProps) {

    }
    render() {

        const { currPotentialFriends } = this.props;
        const potentialFriendsList = currPotentialFriends.map((item, index) => (

            <li className="d-flex justify-content-between list-group-item flex-column" key={item.id} >
                <div className="d-flex justify-content-between  mb-2">
                    <span className="text-capitalize font-weight-bold">{item.name}</span>
                    <span><span className="text-capitalize">Born : </span>{item.user_birthday ? moment(item.user_birthday).format("DD/MM/YYYY") : ''}</span>
                </div>
                <div className="text-capitalize mb-2">Related Hobbie</div>
                <div className="d-flex justify-content-between flex-column">
                    <span className="text-capitalize user-hobbie">{item.hobbie_name}</span>
                </div>

            </li >
        ));
        return (
            <div className="list-group">
                {potentialFriendsList}
            </div>
        );
    }
}
export default PotentialFriendsList


