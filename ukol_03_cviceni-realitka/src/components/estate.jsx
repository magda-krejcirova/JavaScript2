export const Estate = ({ title, text, price, city, name, email, phone, url }) => {
    return (
      <header>
        <h2>{title}</h2>
        <p>{text}</p>
        <p>Cena: {price}</p>
        <p>Město: {city}</p>
        <p>Kontakt:</p> 
        <ul>
          <li>{name}</li>
          <li>{email}</li>
          <li>{phone}</li>
        </ul>
       {/* <p>Foto link: {url}</p>*/}
      </header>
    );
  };