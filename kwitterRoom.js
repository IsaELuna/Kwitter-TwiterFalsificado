
//ADICIONE SEU LINK DO FIREBASE
const firebaseConfig = {
apiKey: "AIzaSyAw5jg3i7KBwb271IESovMP096KhjezoSg",
authDomain: "forum-chat-eada.firebaseapp.com", 
databaseURL: "https://forum-chat-eada-default-rtdb.firebaseio.com", 
projectId: "forum-chat-eada", 
storageBucket: "forum-chat-eada.appspot.com", 
messagingSenderId: "899470850784", 
appId: "1:899470850784:web:2c90e3f125dd7f7b96ee85" };

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

function addSala(){
  var roomName = document.getElementById("roomName").value;
  localStorage.setItem("roomName", roomName);
  database.ref("/").child(roomName).update({
    proposito:"adicionar sala"
  })
}

var campo ='';

function lerDados(){
  database.ref("/").on("value",(data)=>{
    campo ='';
    data.forEach((subpasta)=>{
      sala = subpasta.key;
      linha = "<div class='sala' id="+sala+" onclick='irSala(this.id)' >"+sala+"</div> <hr>";
      campo +=linha;
    });
    document.getElementById("output").innerHTML = campo;
  })
}
lerDados()

function irSala(sala){
  localStorage.setItem("roomName", sala);
  window.location = 'kwitterPage.html'
}

function logout(){
  //Remove o Nome de Usuario e sala do localStorage
  localStorage.removeItem("userName");
  localStorage.removeItem("roomName");
  //Move o usuario para o index.html
  window.location = 'index.html';
}

//exibe o nome do usuário no site kwitterRoom.js
function carregaSala(sala) {
  localStorage.setItem("nomeSala", sala);
  location = "chat.html";
}

function inicializar() {
  const userName = localStorage.getItem("userName");
  // console.log(nomeUsuario);
  document.getElementById("userName").textContent = "Olá, " + userName + "!";

  getData();
}

