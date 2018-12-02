// TODO
/**
 * Ver os tipos de erros retornados para realizar os avisos, tanto do createUser quanto do authUser 
 */

// import {Hello} from 'interation';

// const foo = Hello();
// console.log(foo);

// Inputs
const email = document.getElementById('email');
const password = document.getElementById('password');

// Button
const createUser = document.getElementById('send');
const authUser = document.getElementById('authUser');
const logout = document.getElementById('logout');

// Display
const displayName = document.getElementById("displayName");

// Create User
createUser.addEventListener('click', function () {
    firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value) // Promise que vai dar ou não certo
        .then(() => alert('Hello ' + email.value))
        .catch((err) => {
            console.error(err.code);
            console.log(err.message);
            alert('Falha ao cadastrar, verifique o erro no console.');
        });
});

// Auth User
authUser.addEventListener('click', () => {
    firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then((result) => {
            // console.log(result);
            displayName.innerText = 'Hello ' + email.value;
            alert('Autenticado ' + email.value);
        })
        .catch((err) => {
            console.error(err.code);
            console.log(err.message);
            alert('Falha ao autenticar, verifique o erro no console');
        });
});

// Logout
logout.addEventListener('click', () => {
    firebase
    .auth()
    .signOut()
    .then(() => {
        displayName.innerText = 'Você não está autenticado';
        alert('Você deslogou');
    }, (err) => {
        console.error(err);
    })
});

// Realtime Listener
firebase
    .auth()
    .onAuthStateChanged( (user) => {
        if (user) {
            // User is signed in.
            console.log(user);
            // window.location = 'index.html';
        } else {
            // No user is signed in.
            console.log('not logged in');
        }
    });
