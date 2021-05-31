import { Deck, Slide, Footer, Title, Subtitle, Image, List, Text, Browser, Video, Quote } from "@sambego/diorama";
import ImageWithTitle from "./components/ImageWithTitle";
import Multistep from "./components/Multistep";
import CodeSlide from "./components/CodeSlide";
import About from "./slides/About";
import ThankYou from "./slides/ThankYou";

import ImgHome from "./assets/smarthome.jpg";
import ImgGraphDevices from "./assets/graph_devices.png";
import ImgGraphDevicesPop from "./assets/graph_devices_population.png";
import ImgThinking from "./assets/thinking.gif";
import ImgPBnJ from "./assets/pbj.jpg";
import ImgEspruino from "./assets/wifiespruino.jpg";
import ImgPi from "./assets/pi4.png";
import ImgLowCode from "./assets/low-code.jpg";
import ImgIFTTT from "./assets/ifttt.png";
import ImgNodeRedInstall from "./assets/nodered-install.png";
import ImgSmarter from "./assets/smarter.jpg";

import VidRobocalypse from "./assets/robocalypse.mp4";

import './App.css';

const SHOW_NOTES = true;

const talkProps = {
  title: "JavaScript Powered Smart Home With (Almost) No Code",
  conference: "Open JS World",
  conferenceHashTag: "#openJS",
  date: "June 2nd, 2021",
  moreInfoUrl: "http://ezurl.to/js-no-code"
}

const footer = <Footer left={`@joel__lord ${talkProps.conferenceHashTag}`} right={`${talkProps.moreInfoUrl}`} />


function App() {
  return (
    <Deck swipeToChange={false} footer={footer} presenterNotes={SHOW_NOTES}>
      <ImageWithTitle 
        title={talkProps.title}
        img={ ImgHome } 
        notes="."
        />

      <Slide>
        <Title>IoT Devices</Title>
        <Subtitle>¯\_(ツ)_/¯</Subtitle>
      </Slide>

      <Slide>
        <Subtitle>IoT Devices</Subtitle>
        <Image src={ImgGraphDevices} />
      </Slide>

      <Slide>
        <Subtitle>IoT Devices</Subtitle>
        <Image src={ImgGraphDevicesPop} />
      </Slide>

      <ImageWithTitle
        img={ImgThinking}
        title="6 devices/person" 
        />

      <Multistep>
        <Title>My devices</Title>
        <List>
          <li style={{fontSize: "1.5em"}}>4 laptops</li>
          <li style={{fontSize: "1.5em"}}>2 cell phones</li>
          <li style={{fontSize: "1.5em"}}>2 tablets</li>
          <li style={{fontSize: "1.5em"}}>1 thermostat</li>
          <li style={{fontSize: "1.5em"}}>2 smoke detectors</li>
          <li style={{fontSize: "1.5em"}}>1 TV</li>
          <li style={{fontSize: "1.5em"}}>2 smart bulbs</li>
          <li style={{fontSize: "1.5em"}}>3 connected plugs</li>
          <li style={{fontSize: "1.5em"}}>3 connected speakers</li>
          <li style={{fontSize: "1.5em"}}>3 home assistants</li>
          <li style={{fontSize: "1.5em"}}>2 door locks</li>
          <li style={{fontSize: "1.5em"}}>1 vacuum</li>
        </List>
      </Multistep>

      <Slide>
        <Title>IoT Devices</Title>
        <Subtitle>¯\_(ツ)_/¯</Subtitle>
      </Slide>

      <About />

      <Slide>
        <Title>Warning</Title>
        <Subtitle>I'm just a hacker</Subtitle>
      </Slide>

      <Slide>
        <Title>JavaScript IoT and Low code interfaces</Title>
        <List>
          <li>IoT and JavaScript</li>
          <li>Low Code interfaces</li>
          <li>Iot and Low code</li>
        </List>
      </Slide>

      <ImageWithTitle title="IoT and JS" subtitle="Like PB & J" img={ImgPBnJ} />

      <Slide>
        <Video src={VidRobocalypse} autoplay loop full />
      </Slide>

      <Slide>
        <Title>Getting Started</Title>
        <List>
          <li>Espruino</li>
          <li>Raspberry Pi</li>
        </List>
      </Slide>

      <Slide>
        <Title>Espruino</Title>
        <Image src={ ImgEspruino } />
      </Slide>

      <Slide>
        <Title>Espruino</Title>
        <Text>Espruino WiFi is a tiny USB and WiFi-enabled microcontroller that can be programmed in JavaScript.<br/>Just plug it into your computer and get started in seconds with the Web IDE - no software installation needed!</Text>
        <Text><a href="https://www.espruino.com/WiFi">https://www.espruino.com/WiFi</a></Text>
      </Slide>

      <Slide>
        <Browser url="https://www.espruino.com/ide/" />
      </Slide>

      <CodeSlide title="Espruino" lang="javascript">
        {`
let status = false;

setInterval(() => {
  status = !status;
  console.log(\`LED is \${status ? "on" : "off"}\`);
  LED1.write(status);
}, 500);

        `}
      </CodeSlide>

      <Slide>
        <Title>Raspberry Pi</Title>
        <Image src={ ImgPi } />
      </Slide>

      <Slide>
        <Title>Raspberry Pi</Title>
        <Text>Your tiny, dual-display, desktop computer<br/>…and robot brains, smart home hub, media centre, networked AI core, factory controller, and much more</Text>
        <Text><a href="https://www.raspberrypi.org/products/raspberry-pi-4-model-b/">https://www.raspberrypi.org/products/raspberry-pi-4-model-b/</a></Text>
      </Slide>

      <CodeSlide title="Raspberry Pi">
        {`
npm install --save johnny-five 
npm install --save raspi-io
        `}
      </CodeSlide>

      <CodeSlide title="Raspberry Pi">
        {`
const five = require("../lib/johnny-five.js");
const Raspi = require("raspi-io").RaspiIO;
const board = new five.Board({
  io: new Raspi()
});

board.on("ready", () => {
  const led = new five.Led("P1-13");
  led.blink();
});
        `}
      </CodeSlide>

      <Slide>
        <Subtitle>Espruino vs Raspberry Pi</Subtitle>
      </Slide>

      <ImageWithTitle title="Low-Code Movement" img={ImgLowCode} />

      <Slide>
        <Title>Low-Code</Title>
        <Text>A low-code development platform (LCDP) provides a development environment used to create application software through a graphical user interface instead of traditional hand-coded computer programming. A low-coded platform may produce entirely operational applications, or require additional coding for specific situations [...] enabling accelerated delivery of business applications.</Text>
        <Text><a href="https://en.wikipedia.org/wiki/Low-code_development_platform">https://en.wikipedia.org/wiki/Low-code_development_platform</a></Text>
      </Slide>

      <Slide>
        <Title>Low-Code</Title>
        <Subtitle>¯\_(ツ)_/¯</Subtitle>
      </Slide>

      <Slide>
        <Title>Getting Started</Title>
        <List>
          <li>IFTTT</li>
          <li>Node-RED</li>
        </List>
      </Slide>

      <Slide>
        <Title>IFTTT</Title>
        <Text>IFTTT helps all your apps and devices work better together. It makes it easy to build applets connecting various services.</Text>
        <Text><a href="http://ifttt.com">http://ifttt.com</a></Text>
      </Slide>

      <Slide>
        <Image src={ ImgIFTTT } />
      </Slide>

      <Slide>
        <Title>Node-RED</Title>
        <Text>Node-RED is a programming tool for wiring together hardware devices, APIs and online services in new and interesting ways. It provides a browser-based editor that makes it easy to wire together flows using the wide range of nodes in the palette that can be deployed to its runtime in a single-click.</Text>
        <Text><a href="https://nodered.org/">https://nodered.org/</a></Text>
      </Slide>

      <CodeSlide title="Node-RED" lang="bash">
        {`
docker run -it -p 1880:1880 -v node_red_data:/data \\
  --name mynodered nodered/node-red
        `}        
      </CodeSlide>

      <Slide>
        <Image src={ ImgNodeRedInstall } />
      </Slide>

      <Slide>
        <Browser url="http://localhost:1880" />
      </Slide>

      <ImageWithTitle title="Making Smart Homes... Smarter" img={ImgSmarter} />

      <Slide>
        <Title>Problems</Title>
        <List>
          <li>Thermostat temperature is inconsistent</li>
          <li>Manual on/off on lights</li>
          <li>Air Exchanger is stupid</li>
          <li>Plants not connected to Internet</li>
        </List>
      </Slide>

      <Slide> 
        <Browser url="http://localhost:1880" />
      </Slide>

      <Slide>
        <List>
          <li>IoT + JavaScript 💯</li>
          <li>Low-Code interfaces 👌</li>
          <li>IoT and Low-Code 🤩</li>
        </List>
      </Slide>

      <ThankYou 
        title={talkProps.title}
        conference={talkProps.conference}
        date={talkProps.date}
        moreInfoUrl={talkProps.moreInfoUrl}
      />
    </Deck>
  );
}

export default App;
