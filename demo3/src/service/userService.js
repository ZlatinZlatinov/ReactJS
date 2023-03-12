const baseUrl = 'http://localhost:3005/api/users';//add it

export async function getAllUsers() {
    const response = await fetch(baseUrl);
    const data = await response.json();

    return data.users;
}

export async function getUserById(userId) {
    const url = `${baseUrl}/${userId}`;

    const response = await fetch(url);
    const user = await response.json();

    return user.user;
}

export async function createUserReq(userData) {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(userData)
    });

    if (response.status !== 'ok') {
        console.log('Oops couldnt create new User');
    }

    const result = await response.json();
    return result;
}