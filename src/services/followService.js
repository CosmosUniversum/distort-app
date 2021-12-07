function follow(userToFollow, userFollowing) {
    return fetch(`/api/users/${userFollowing}/followers/${userToFollow}`)
}

export {follow}