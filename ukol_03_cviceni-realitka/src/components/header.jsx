export const Header = ({title, url, popis }) => {
  return (
    <header>
      <h2>{title}</h2>
      <h2><a href={url}>{popis}</a></h2>
      {/* <a href="http://localhost:5173/dum02.html">DUM 02</a>
      <a href="http://localhost:5173/dum03.html">DUM 03</a>
      <a href="http://localhost:5173/dum04.html">DUM 04</a> */}
    </header>
  );
};