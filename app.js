// user data

const config = {
    apiKey: "AIzaSyDYNbFMhpDkuhcxzXfScnZXea5TSsycQbg",
    authDomain: "sistema-de-requisios.firebaseapp.com",
    databaseURL: "https://sistema-de-requisios.firebaseio.com",
    projectId: "sistema-de-requisios",
    storageBucket: "sistema-de-requisios.appspot.com",
    messagingSenderId: "798050278860"
};

firebase.initializeApp(config);
const database = firebase.database();
// Hey Firebase, eu quero acessar o nó chamado awesome-users nessa "árvore de dados"

// A organização do Firebase é como uma árvore

console.log(firebase);

// function register(){
//     const Uname = document.getElementById("name").value;
//     const Uusername = document.getElementById("username").value;
//     const Upassword = document.getElementById("password").value;

//     const data = {
//         name: Uname,
//         username: Uusername,
//         password: Upassword
//     }
//     const ref = database.ref('awesome-users');
//     ref.push(data);

//     let form = document.getElementsByName('user-form')[0];
//     form.reset();
//     return false;
// }