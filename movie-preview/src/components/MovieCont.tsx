import styled from 'styled-components';
import { IR } from '../style/util';
import MovieItem from './MovieItem';
import movieItems from '../movieItem.json';

interface movieItem {
  title: string;
  image: string;
  genre: string;
  score: number;
  date: string;
  actors: string;
}

export interface movieProps {
  key: number;
  item: movieItem;
}

const MovieHeader = styled.h3`
  ${IR}
`;

const MovieList = styled.ul`
  overflow: hidden;
  padding: 0 12px 24px 12px;
  border: 2px solid #bdbdbd;
  border-radius: 15px;
  background: #fff;
`;

const MovieCont = () => {
  console.log(movieItems);
  const paintMovie = () =>
    movieItems.map((item: movieItem, index: number) => {
      return <MovieItem key={index} item={item}></MovieItem>;
    });

  return (
    <section>
      <MovieHeader>현재 상영 영화 목록(props로 받아오기)</MovieHeader>
      <MovieList>
        {movieItems ? paintMovie() : <span>영화가 없습니다.</span>}
      </MovieList>
    </section>
  );
};

export default MovieCont;
