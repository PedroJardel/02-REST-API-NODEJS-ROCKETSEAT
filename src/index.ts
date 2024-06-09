interface User {
    birthYear: number
}

function calculateAgeOfUser(user: User) {
    return new Date().getFullYear() - user.birthYear
}

calculateAgeOfUser({
    birthYear: 1998
})

// Runtime Type Checking
// Static Type Checking