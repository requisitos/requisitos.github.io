const authUser = Object.keys(window.localStorage)
    .filter(item => item.startsWith('firebase:authUser'))[0];

console.log(authUser);