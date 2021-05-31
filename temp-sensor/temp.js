const DHT_PIN = B1;
const YELLOW_LED_PIN = B0;

let dht = require("DHT11").connect(DHT_PIN);
const wifi = require("Wifi");

let WifiReady = false;
let LEDStatus = false;

wifi.connect("lan-solo", {password:"188doris"}, ap => {
  console.log("Connected to wifi");
  console.log(ap);
  WifiReady = true;
  yellowLedFlash();
});

function postData(temp, humidity) {
  if (!WifiReady) return;
  
  const payload = JSON.stringify({
        temp: temp,
        humidity: humidity,
        value1: temp,
        value2: humidity
  });
  
  const URL = "https://maker.ifttt.com/trigger/temp/with/key/be7hGvCfgxR_2GUs5d-rBB";
  
  var options = url.parse(URL);
  options.method = "POST";
  options.headers = {
    'Content-Type': 'application/json',
    "Content-Length":payload.length
  };
  
  console.log("Sending request");
  require("http").request(options, res => {
    res.on("data", data => {
      console.log(data);
    });
    res.on("error", err => console.log(err));
  }).end(payload);
}


const getTemperature = () => {
  dht.read(data => {
    const temp = data.temp.toString();
    const humidity = data.rh.toString();
    
    if (temp === "-1") {
      dht.close();
      dht = require("DHT11").connect(DHT_PIN);
      yellowLedOn();
      setTimeout(() => {
        reset();
      }, 60000);
      console.log("DHT re-initialized");
    } else {
      console.log(`Current temp: ${temp}`);
      console.log(`Current humidity: ${humidity}`);
      postData(temp, humidity);
    }
  });
};

const yellowLedOn = () => {
  digitalWrite(YELLOW_LED_PIN, 1);
};

const yellowLedOff = () => {
  digitalWrite(YELLOW_LED_PIN, 0);
};

const yellowLedFlash = () => {
  yellowLedOn();
  setTimeout(yellowLedOff, 200);
  setTimeout(yellowLedOn, 400);
  setTimeout(yellowLedOff, 600);
  setTimeout(yellowLedOn, 800);
  setTimeout(yellowLedOff, 1000);
};

LED1.write(LEDStatus);

const flashLED = () => {
  LED1.write(true);
  setTimeout(() => LED1.write(false), 100);
};

setInterval(() => {
  getTemperature();
  flashLED();
}, 60000);

