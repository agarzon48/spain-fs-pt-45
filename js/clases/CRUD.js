// YAGNI
// You Aren't Gonna Need It!

let users = [
    {
        id: 1,
        email: 'test@test.com',
        password: 'asdf'
    },
    {
        id: 2,
        email: 'second@test.com',
        password: '123'
    }
];

// CRUD
// Create
const createUser = (user) => users.push(user);

// Read
const getUsers = () => users;
const getUserById = (id) => users.find(user => user.id === id);
// Update
const updateUser = ({ id, email, password }) => {
    const newUsersList = users.map(user => {
        if (user.id !== id) return user;

        const newData = { ...user };
        newData.email = email;
        newData.password = password

        return newData;
    });

    users = newUsersList;
}
// Delete
const deleteUser = (id) => {
    const currentUsers = users.filter((user) => user.id !== id);

    users = currentUsers;
}

console.log(getUsers());

createUser({
    id: 3,
    email: 'test2@test.com',
    password: '123'
});

console.log(getUsers());

console.log(getUserById(1));

updateUser({
    id: 1,
    email: 'updated!',
    password: 'updated pass!'
})

console.log(getUsers());

deleteUser(2);

console.log(getUsers());