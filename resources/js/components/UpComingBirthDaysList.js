import React from 'react';
import moment from 'moment';
class UpComingBirthDaysList extends React.Component {

    render() {

        const { currUpComingBirthDays } = this.props;

        const listUpComingBirthDays = currUpComingBirthDays.map((item, index) => (
            <li className="d-flex justify-content-between list-group-item" key={item.id}>
                <div>{item.name} </div>
                <div>{item.user_birthday ? moment(item.user_birthday).format("DD/MM/YYYY") : ''} </div>
            </li>

        ));
        return (
            <ul className="list-group">
                {listUpComingBirthDays}
            </ul>
        );
    }
}
export default UpComingBirthDaysList

