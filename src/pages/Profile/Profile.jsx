import React from 'react';
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
import  './Profile.css'


const Profile = ({loggedInUser}) => {
const location = useLocation()
const user = location.state 

    return (
        <>
        <main >
            <body>
            <h1>{user.name}'s Profile Page</h1>
            <div id="profilecontent">
            <h2>
            Name: {user.name}
            </h2>
            <h2>
            Avatar: {user.avatar}
            </h2>
            <h2>
            Following: {user.following.length}
            </h2>
            <h2>
            Followers: {user.followers?.length}
            </h2>
            <h2>
            Music List: {user.musicList}
            </h2>
            <h2>
            Movie List: {user.movieList}
            </h2>
            <h2>
            Podcast List: {user.podcastList}
            </h2>
            {loggedInUser.profile === user.profile ? 
            <form
            > 
            {<Link to="/create-list" ><button id="listbtn">Create List</button></Link>}
            </form>
            :
            ''
            }
            </div>
            </body> 
        </main>
    </>
)
            }

export default Profile
