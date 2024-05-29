import { render } from '@czechitas/render';
import { Header } from '../components/header/header.jsx';
import { Intro } from '../components/intro/intro.jsx';
import { Pose } from '../components/obrazek/obrazek.jsx';
import '../global.css';
import './index.css';



document.querySelector('#root').innerHTML = render(
  <>
    {/* {Header()} */}
    <Header title="Jogíni" />

    <Intro 
      heading="Vítejte mezi Jogíny"
      text="Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu zkusit něco nového. Cvičíme v pomalém tempu s podrobným slovním doprovodem. Postupně se seznámíte se základními principy jógy, jak přístupovat k sobě i ostatním. Krok za krokem objevíte a dostanete pod kontrolu svoje tělo, pocity a emoce." />

    <Pose src="yoga-pose.jpg" />
  </>
);
