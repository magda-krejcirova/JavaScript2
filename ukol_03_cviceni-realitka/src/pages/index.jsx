import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/header';
import { Estate } from '../components/estate';

const www = window.location.pathname
const dum = Number(www.slice(5,6))
let adresa = null

const hodnota = () => {
  if (dum === 1) { 
    return adresa="https://apps.kodim.cz/daweb/trening-api/apis/realitka/dum01"
  } 
  else if (dum === 2) { 
    return adresa="https://apps.kodim.cz/daweb/trening-api/apis/realitka/dum02"
  }
  else if (dum === 3) { 
    return adresa="https://apps.kodim.cz/daweb/trening-api/apis/realitka/dum03"  
  }
  else if (dum === 4) { 
    return adresa="https://apps.kodim.cz/daweb/trening-api/apis/realitka/dum04"
  }
}

//const adresa = `https://apps.kodim.cz/daweb/trening-api/apis/realitka`+`${www}`

const response = await fetch(hodnota())
const data = await response.json()

// destructurazlizaing
const {title, text, price, city, contact} = data
const { name, email, phone } = contact
// title={data}
// text=text

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <div className="box">
    <Header url="http://localhost:5173/dum01.html" popis="Nabídka exotiky " />
    <Header url="http://localhost:5173/dum02.html" popis="Nabídka luxusu" />
    <Header url="http://localhost:5173/dum03.html" popis="Nabídka budoucnosti" />
    <Header url="http://localhost:5173/dum04.html" popis="Nabídka klidu" />
    </div>
 
    <div className="body">
    <Estate title={title}
            text={text}
            price={price}
            city={city}
            name={name}
            email={email}
            phone={phone} />
    </div>
  </div>
);
