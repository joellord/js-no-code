const DHT_PIN = B1;

let dht = require("DHT11").connect(DHT_PIN);
const wifi = require("Wifi");

let WifiReady = false;
let LEDStatus = false;

wifi.connect("lan-solo", {password:"188doris"}, ap => {
  console.log("Connected to wifi");
  console.log(ap);
  WifiReady = true;
});

function postData(temp, humidity) {
  if (!WifiReady) return;
  
  const payload = JSON.stringify({
    temp: temp,
    humidity: humidity
  });
  
  const URL = "http://192.168.86.30:8080/post";
  
  var options = url.parse(URL);
  options.method = "POST";
  options.headers = {
    'Content-Type': 'application/json',
    "Content-Length":payload.length
  };
  options.body = {msg: "Hello"};
  
  console.log("Sending request");
  require("http").request(options, res => {
    console.log(res);
    res.on("data", data => {
      console.log(data);
    });
    res.on("error", err => console.log(err));
    res.on("close", _ => console.log("Connection closed"));
  }).end(payload);
}


const getTemperature = () => {
  dht.read(data => {
    const temp = data.temp.toString();
    const humidity = data.rh.toString();
    
    if (temp === "-1") {
      dht = require("DHT11").connect(DHT_PIN);
      console.log("DHT re-initialized");
    } else {
      console.log(`Current temp: ${temp}`);
      console.log(`Current humidity: ${humidity}`);
      postData(temp, humidity);
    }
  });
};

LED1.write(LEDStatus);

const flashLED = () => {
  LED1.write(true);
  setTimeout(() => LED1.write(false), 100);
};

setInterval(() => {
  getTemperature();
  flashLED();
}, 5000);

