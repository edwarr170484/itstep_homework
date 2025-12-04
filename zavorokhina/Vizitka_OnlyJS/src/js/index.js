import Element from "./element";
import ImageElement from "./image";
//import ImageAvatar from "../images/Pepe.jpg";
import ImageAvatar from "../images/Pepe-girl.png";
import ImageLinkendin from "../images/linkedin.png";
import ImageGithub from "../images/github.png";
import ImageTelegram from "../images/telegram.png";

// background:
document.body.style.backgroundImage = 'url("../src/images/Pepe_fon.jpg")';
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundSize = 'cover';

// div:
const card = new Element('div');

// block1:
card.setId('card');
card.addClasses("border", "flex");
card.addStyles({
    width: "1780px",
    height:"800px",
    padding: "30px",
    margin: "30px",
    position: "absolute",
    zIndex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border:"3px solid white",
    borderRadius: "20px",
    backgroundColor: "none"
});

// a:
const link = new Element('a');
// img:
const logo = new ImageElement('img');

logo.setSrc(ImageAvatar);
logo.addStyles({
    width:"128px",
    height:"auto",
    zIndex: "10",
    border:"8px solid darkViolet",
    objectFit: "cover",
    borderRadius: "200px"
});
logo.setAlt("Это аватар");
console.log(logo);

link.appendChilds(logo);
card.appendChilds(link);
console.log(card);

// div:
const contacts = new Element('div');

// block2:
contacts.setId('contacts');
contacts.addClasses("border", "flex");
contacts.addStyles({
    width: "400px",
    height:"200px",
    padding: "30px",
    marginTop: "100px",
    marginBottom: "30px",
    zIndex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border:"2px solid blueViolet",
    borderRadius: "20px",
    backgroundColor: "none"
});

card.appendChilds(contacts);
console.log(contacts);

//button:
const button = new Element('button');
button.setInnerText('Write me');
button.addStyles({
    width: "120px",
    height:"30px",
    padding: "4px",
    margin: "8px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    border:"1px solid blueViolet",
    borderRadius: "10px",
    color: "white",
    fontSize: "16px",
    fontFamily: "Verdana",
    backgroundColor: "darkViolet"
});

// block3:
// div:
const links = new Element('div');
links.setId('links');
links.addClasses("border", "flex");
links.addStyles({
    width: "384px",
    height:"60px",
    padding: "30px",
    zIndex: "1",
    display: "flex",
    flexDirection: "row",
    gap: "80px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "15px",
    backgroundColor: "none"
});

// img:
const imageLinkendin = new ImageElement('img');
imageLinkendin.setSrc(ImageLinkendin);
imageLinkendin.addStyles({
    width:"48px",
    height:"48px",
    zIndex: "10",
    objectFit: "cover",
    border: "2px solid blueViolet",
    borderRadius: "200px"
});
imageLinkendin.setAlt("Это кнопка LinkendIn");

// img:
const imageGithub = new ImageElement('img');
imageGithub.setSrc(ImageGithub);
imageGithub.addStyles({
    width:"48px",
    height:"48px",
    zIndex: "10",
    objectFit: "cover",
    backgroundColor: "white",
    border: "2px solid blueViolet",
    borderRadius: "200px"
});
imageLinkendin.setAlt("Это кнопка Github");

// img:
const imageTelegram = new ImageElement('img');
imageTelegram.setSrc(ImageTelegram);
imageTelegram.addStyles({
    width:"48px",
    height:"48px",
    zIndex: "10",
    objectFit: "cover",
    border: "2px solid blueViolet",
    borderRadius: "200px"
});
imageLinkendin.setAlt("Это кнопка Telegram");

const link1 = new Element('a');
const link2 = new Element('a');
const link3 = new Element('a');

link1.appendChilds(imageLinkendin);
link2.appendChilds(imageGithub);
link3.appendChilds(imageTelegram);

contacts.appendChilds(links);
contacts.appendChilds(button);
links.appendChilds(link1);
links.appendChilds(link2);
links.appendChilds(link3);

document.body.append(card.createDomElement());