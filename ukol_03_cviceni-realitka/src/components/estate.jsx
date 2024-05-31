export const Estate = ({ title, text, price, city, contact, url }) => {
    return (
      <header>
        <h2>{title}</h2>
        <p>{text}</p>
        <p>Cena: {price}</p>
        <p>Město: {city}</p>
        <p>Kontakt: {contact}</p>
        <p>Foto link: {url}</p>
      </header>
    );
  };