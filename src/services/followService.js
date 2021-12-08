function follow(userToFollow, userFollowing) {
    return fetch(`/api/users/${userFollowing}/follow`, {
    method: 'PATCH'
    })
}


export {follow}