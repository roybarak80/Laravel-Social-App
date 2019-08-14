import React, { Component } from 'react';
import Moment from 'react-moment';

import { getProfile } from './UserFunctions';
import { addFriend } from './UserFunctions';
import { showBirthdays } from './UserFunctions';
import { showPotentialFriends } from './UserFunctions';
import FriendsList from './FriendsList';
import FriendsBirthDays from './FriendsBirthDays';
import PotentialFriendsList from './PotentialFriendsList';

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            hobbies: '',
            user_bday: '',
            members: [],
            related_friends: [],
            isShowBirthdays: false,
            isShowAllFriends: false,
            isShowPotentialFriends: false,
            isShowUpcomingBirthdays: false,
            friendsBDays: [],
            potentialFriends: [],
            error: '',

        }
        this.onAddFriend = this.onAddFriend.bind(this);
        this.handleShowBirthdays = this.handleShowBirthdays.bind(this);
        this.handleShowAllFriends = this.handleShowAllFriends.bind(this);
        this.handlePotentialFriends = this.handlePotentialFriends.bind(this);
        this.handleShowUpcomingBirthdays = this.handleShowUpcomingBirthdays.bind(this);
        //ShowUpcomingBirthdays
    }

    componentDidMount() {

        getProfile().then(res => {

            this.setState({
                userId: res.user.id,
                name: res.user.name,
                hobbies: res.user.hobbies,
                user_bday: res.user.user_birthday,
                related_friends: res.user.related_friends,
                members: res.user.site_users,

            })

        })
    }

    handleShowUpcomingBirthdays() {

        this.setState({ isShowUpcomingBirthdays: !this.state.isShowUpcomingBirthdays });
        console.log(this.state.isShowUpcomingBirthdays);

    }

    handlePotentialFriends() {

        this.setState({ isShowPotentialFriends: !this.state.isShowPotentialFriends });
        showPotentialFriends().then(res => {

            this.setState({
                potentialFriends: res.potentialFriends,
            })

        })


    }

    handleShowAllFriends() {

        this.setState({ isShowAllFriends: !this.state.isShowAllFriends });
        console.log(this.state.isShowAllFriends);

    }

    handleShowBirthdays() {

        this.setState({ isShowBirthdays: !this.state.isShowBirthdays });
        showBirthdays().then(res => {

            this.setState({
                friendsBDays: res.friendsBirthDays,
            })

        })
        // console.log(this.state.isShowBirthdays);

    }

    onAddFriend(friendId) {

        addFriend(friendId)
            .then(res => {
                getProfile().then(res => {

                    this.setState({
                        userId: res.user.id,
                        name: res.user.name,
                        hobbies: res.user.hobbies,
                        user_bday: res.user.user_birthday,
                        related_friends: res.user.related_friends,
                        members: res.user.site_users,

                    })

                })

            })

    };

    render() {

        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-md-12 ">
                        <i className="fa fa-user-circle"></i>
                        <div className="row">
                            <div className="col-md-12">
                                <ul className="list-inline d-flex justify-content-center">
                                    <li className="list-inline-item">Welcome <span className="font-weight-bold text-capitalize">
                                        {this.state.name} | </span>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input
                                                    name="isShowAllFriends"
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    checked={this.state.isShowAllFriends}
                                                    onChange={this.handleShowAllFriends} />
                                                Show All Friends
                                </label>
                                        </div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input
                                                    name="isShowBirthdays"
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    checked={this.state.isShowBirthdays}
                                                    onChange={this.handleShowBirthdays} />
                                                Show Birthdays
                                </label>
                                        </div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input
                                                    name="isShowPotentialFriends"
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    checked={this.state.isShowPotentialFriends}
                                                    onChange={this.handlePotentialFriends} />
                                                Show Potential Friends
                                </label>
                                        </div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input
                                                    name="isShowUpcomingBirthdays"
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    checked={this.state.isShowUpcomingBirthdays}
                                                    onChange={this.handleShowUpcomingBirthdays} />
                                                Show Upcoming Birthdays
                                </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <table className="table col-md-4 mx-auto">
                        <tbody>
                            <tr>

                                <td>{this.state.hobbies}</td>
                                <td>
                                    <Moment format="DD/MM/YYYY">
                                        {this.state.user_bday}
                                    </Moment></td>

                            </tr>
                        </tbody>
                    </table>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="d-flex">
                                <div className="flex-fill">
                                    <FriendsList onAddFriend={this.onAddFriend}
                                        members={this.state.members}></FriendsList>
                                </div>
                                <div className="flex-fill">{this.state.isShowAllFriends ? 'isShowAllFriends' : ''}</div>
                                <div className="flex-fill">{this.state.isShowBirthdays ? <FriendsBirthDays
                                    friendsBirthDays={this.state.friendsBDays}></FriendsBirthDays> : ''}</div>

                                <div className="flex-fill">{this.state.isShowPotentialFriends ? <PotentialFriendsList
                                    currPotentialFriends={this.state.potentialFriends}></PotentialFriendsList> : ''}</div>

                                <div className="flex-fill">{this.state.isShowUpcomingBirthdays ? 'isShowUpcomingBirthdays' : ''}</div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Profile