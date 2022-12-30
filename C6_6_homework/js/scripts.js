const messageFieldNode = document.querySelector('.message-field');
const userMessageNode = document.querySelector('.user-message');
const serverResponseNode = document.querySelector('.server-response');
const btn1Node = document.querySelector('.btn1');
const btn2Node = document.querySelector('.btn2');
const valueNode = document.querySelector('.inp');
const websUrl = 'wss://echo-ws-service.herokuapp.com'
const websocket = new WebSocket(websUrl);

websocket.onopen = function(event) {
    console.log("CONNECTED");
  };

websocket.onclose = function (event) {
    console.log("DISCONNECTED");
  
  websocket.onmessage = function(event) {
    serverResponseNode.innerHTML = (`Message from server ${event.data}`);
  };
  websocket.onerror = function(event) {
    serverResponseNode.innerHTML = (`server: ${event.data}`);
  };
  
  btn1Node.addEventListener('click', () => {
    websocket.send(`${valueNode.value}`);
    userMessageNode.innerHTML = `${valueNode.value}`;
  });

  
const error = () => {
  serverResponseNode.innerHTML = 'Невозможно получить ваше местоположение';
  };
  
  const success = (position) => {
  let latitude  = position.coords.latitude;
  let longitude = position.coords.longitude;
  let geoLink = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  serverResponseNode.innerHTML = (`<a  href='${geoLink}' target='_blank'>Ваша гео-локация</a>`);
  };
  
  btn2Node.addEventListener('click', () => {
  if (!navigator.geolocation) {
    console.log('Geolocation не поддерживается вашим браузером');
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
  });

  

