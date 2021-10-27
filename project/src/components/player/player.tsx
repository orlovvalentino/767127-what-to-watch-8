import {Films} from '../../types/films';

import {useParams,useHistory} from 'react-router-dom';

import {getCurrentFilm} from '../../tools';

type PropsType = {
  films: Films
}

function Player({films}: PropsType):JSX.Element{
  const history = useHistory();
  const {id} = useParams<{id?: string}>();
  const film = getCurrentFilm(films, id);
  return(
    <div className="player">
      <video src="#" className="player__video" poster={film.posterImage}></video>

      <button
        type="button"
        className="player__exit"
        onClick={() => {history.goBack();}}
      >Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">{new Date(film.runTime*60 * 1000).toISOString().substr(11, 8)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Player;
