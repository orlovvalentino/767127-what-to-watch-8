import {Film} from '../../types/films';
import {useEffect,useRef} from 'react';

type PropsType = {
  film: Film,
  play:boolean
}

function VideoPlayer({film,play}: PropsType): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if(play){
      if(videoRef.current) {
        videoRef.current.play();
      }
    }else{
      if(videoRef.current) {
        videoRef.current.load();
      }
    }
  });

  return (
    <video
      muted
      autoPlay={false}
      ref={videoRef}
      src={film.previewVideoLink}
      className="player__video"
      poster={film.posterImage}
    />
  );
}

export default VideoPlayer;
