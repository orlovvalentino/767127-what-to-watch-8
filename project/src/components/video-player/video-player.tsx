import {Film} from '../../types/films';

type PropsType = {
  film: Film
}

function VideoPlayer({film}:PropsType): JSX.Element{
  return (
    <video
      muted
      src={film.previewVideoLink}
      className="player__video"
      poster={film.posterImage}
    />
  );
}

export default VideoPlayer;
