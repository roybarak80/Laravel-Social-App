import React, { Component } from 'react';
import moment from 'moment';

import { getProfile } from './UserFunctions';
import { getUserHobbies } from './UserFunctions';
import { addFriend } from './UserFunctions';
import { showBirthdays } from './UserFunctions';
import { showPotentialFriends } from './UserFunctions';
import FriendsList from './FriendsList';
import FriendsBirthDays from './FriendsBirthDays';
import PotentialFriendsList from './PotentialFriendsList';
import UserHobbies from './UserHobbies';

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            user_bday: '',
            members: [],
            related_friends: [],
            isShowBirthdays: false,
            isShowAllFriends: false,
            isShowPotentialFriends: false,
            isShowUpcomingBirthdays: false,
            friendsBDays: [],
            potentialFriends: [],
            usersHobbiesList: [],
            error: '',

        }
        this.onAddFriend = this.onAddFriend.bind(this);
        this.handleShowBirthdays = this.handleShowBirthdays.bind(this);
        this.handleShowAllFriends = this.handleShowAllFriends.bind(this);
        this.handlePotentialFriends = this.handlePotentialFriends.bind(this);
        this.handleShowUpcomingBirthdays = this.handleShowUpcomingBirthdays.bind(this);

    }

    componentDidMount() {

        getProfile().then(res => {

            this.setState({
                userId: res.user.id,
                name: res.user.name,
                user_bday: res.user.user_birthday,
                related_friends: res.user.related_friends,
                members: res.user.site_users,

            })

        })

        getUserHobbies().then(res => {

            this.setState({
                usersHobbiesList: res.userHobbies,
            })
        })

        showPotentialFriends().then(res => {

            this.setState({
                potentialFriends: res.potentialFriends,
            })

        })

        showBirthdays().then(res => {

            this.setState({
                friendsBDays: res.friendsBirthDays,
            })

        })
    }

    handleShowUpcomingBirthdays() {

        this.setState({ isShowUpcomingBirthdays: !this.state.isShowUpcomingBirthdays });

    }

    handlePotentialFriends() {

        this.setState({ isShowPotentialFriends: !this.state.isShowPotentialFriends });

    }

    handleShowAllFriends() {

        this.setState({ isShowAllFriends: !this.state.isShowAllFriends });
        console.log(this.state.isShowAllFriends);

    }

    handleShowBirthdays() {

        this.setState({ isShowBirthdays: !this.state.isShowBirthdays });


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
            <div className="profile-wrapper">
                <div className="profile-pic" ></div>
                <div className="profile-card-wrapper">
                    <div className="col-md-12 ">
                        <div className="row">
                            <div className="col-md-12 d-flex justify-content-center border-bottom form-group">
                                <span className="user-name text-capitalize">
                                    {this.state.name ? this.state.name : ''}
                                </span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 d-flex justify-content-center align-items-center form-group">
                                <div className="d-flex align-items-center mr-3">
                                    <span className="font-weight-bold mr-3">Born : </span>
                                    <span className="">{this.state.user_bday ? moment(this.state.user_bday).format("DD/MM/YYYY") : ''}</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className="font-weight-bold mr-3">Hobbies : </span>
                                    {this.state.usersHobbiesList ? <UserHobbies userHobbies={this.state.usersHobbiesList}></UserHobbies> : ''}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <ul className="list-inline d-flex justify-content-center">

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
                        <div className="row">
                            <div className="col-md-12 d-flex">
                                <div className="friends-list scrollbar scrollbar-wrapper">
                                    <FriendsList onAddFriend={this.onAddFriend}
                                        members={this.state.members}></FriendsList>
                                </div>
                                <div className="flex-grow-1 data-wrapper d-flex">
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
            </div>
        )
    }
}

export default Profile