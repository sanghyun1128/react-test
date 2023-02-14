import axios from '../../api/axios';
import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function DetailPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({})

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `/movie/${movieId}`
      )
      setMovie(request.data);
    }
    fetchData();
  }, [movieId])

  if (!movie) return <div>...loading</div>;
  return (
    <section>
      <img
      className='modal__poster-image'
      src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
      alt="poster" />
    </section>
  );
}
