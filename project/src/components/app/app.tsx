import {Switch, Route, BrowserRouter} from 'react-router-dom';
import HomePage from '../home-page/home-page';

type MoviePromo = {
  moviePromo: {
    promoName: string,
    promoGenre: string,
    promoDate: string
  }
}

function App({moviePromo}: MoviePromo): JSX.Element {
  return (
    <HomePage moviePromo={moviePromo} />
  );
}

export default App;
