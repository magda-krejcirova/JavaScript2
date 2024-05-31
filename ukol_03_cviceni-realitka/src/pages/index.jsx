import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/header';
import { Estate } from '../components/estate';

const www = window.location.pathname
console.log(www)

const adresa = `https://apps.kodim.cz/daweb/trening-api/apis/realitka`+`${www}`
console.log(adresa)

const response = await fetch({adresa})
const data = await response.json()

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <div className="box">
    <Header url="http://localhost:5173/dum01.html" />
    </div>
    
    <div className="box">
    <Header url="http://localhost:5173/dum02.html" />
    </div>

    <div className="box">
    <Header title="Nabidka pro studenty"
            url="http://localhost:5173/dum03.html"
            popis="mnoho pokojovy dum c.3"/>
    </div>        

    <div className="box">
    <Header title="Nabidka zahranicni nemovitosti"
            url="http://localhost:5173/dum04.html"
            popis="dum v exoticke oblasti c.4"/>
    </div>
    
    <Estate title={data.title}
            text={data.text}
            price={data.price}
            city={data.city}
            contact={data.contact.email} />

  </div>
);
