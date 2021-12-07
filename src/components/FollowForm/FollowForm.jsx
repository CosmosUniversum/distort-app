import React, { useState } from 'react'
import { follow } from '../../services/followService'

const FollowForm = ({userToFollow, userFollowing}) => {

    const handleSubmit = e => {
        e.preventDefault()
        try {
            follow(userToFollow, userFollowing)
        } catch (err) {
            console.log(err)
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <button>Follow</button>
        </form>
    );
}



export default FollowForm;