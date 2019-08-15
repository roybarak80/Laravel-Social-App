import React from 'react';
class UserHobbies extends React.Component {

    componentWillReceiveProps(nextProps) {
    }

    render() {

        const { userHobbies } = this.props;
        const listUserHobbies = userHobbies.map((item, index) => (

            <li key={index} className="user-hobbie list-inline-item">
                <span>{item.hobbie_name}</span>
            </li>
        ));
        return (
            <ul className="list-inline no-margin no-border-radius">
                {listUserHobbies}
            </ul>
        );
    }
}
export default UserHobbies

