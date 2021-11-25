import {Films} from '../../types/films';
import {MouseEvent, useEffect, useRef, useState} from 'react';

import {useParams, useHistory} from 'react-router-dom';

import {getCurrentFilm} from '../../tools';

type PropsType = {
  films: Films
}

function getRemainingTime(runTime: number, currentTime: number): string {
  return new Date(((runTime * 60) - currentTime) * 1000).toISOString().substr(11, 8).toString();
}

function getRemainingPercent(runTime: number, currentTime: number): string {
  return ((currentTime * 100) / (runTime * 60)).toFixed(2);
}

function Player({films}: PropsType): JSX.Element {
  const [isActive, setIsActive] = useState(false);
  const history = useHistory();
  const {id} = useParams<{ id?: string }>();
  const film = getCurrentFilm(films, id);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  // const [duration, setDuration] = useState<number>(0);

  useEffect(() => {
    if (isActive) {
      if (videoRef.current) {
        videoRef.current.play();
      }
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [isActive]);

  return (
    <div className="player">
      <video
        ref={videoRef}
        src={film.videoLink}
        className="player__video"
        poster={film.previewImage}
        onTimeUpdate={(evt) => setCurrentTime(Math.round(evt.currentTarget.currentTime))}
        // onDurationChange={(evt) => setDuration(Math.round(evt.currentTarget.duration))}
      >
      </video>

      <button
        type="button"
        className="player__exit"
        onClick={() => {
          if (history.action === 'POP') {
            history.push('/');
          } else {
            history.goBack();
          }
        }}
      >Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value={getRemainingPercent(film.runTime, currentTime)}
              max="100"
            >
            </progress>
            <div
              className="player__toggler"
              style={{left: `${getRemainingPercent(film.runTime, currentTime)}%`}}
            >Toggler
            </div>
          </div>
          <div className="player__time-value">{getRemainingTime(film.runTime, currentTime)}</div>
        </div>
        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={(e: MouseEvent<HTMLButtonElement>) => {
              setIsActive(!isActive);
            }}
          >

            <svg viewBox="0 0 19 19" width="19" height="19">
              {isActive ? <use xlinkHref="#pause"></use> : <use xlinkHref="#play-s"></use>}
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{film.name}</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={(e: MouseEvent<HTMLButtonElement>) => {
              videoRef.current?.requestFullscreen();
            }}
          >
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
