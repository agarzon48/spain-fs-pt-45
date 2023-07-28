const user = {
    name: "Raspas",
    password: 'asdf'
};

console.log('name' in user);

delete user.name;

console.log(user)