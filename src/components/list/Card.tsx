import styled from 'styled-components';

// CSS

const CardBody = styled.article`
    background-color: #eee;;
    padding-bottom: 1em;
`

const Img = styled.img`
    width: 100%;
`

// Component

interface CardProps {
    movie: {
        imdbID:string;
        Title:string;
        Year:string;
        Poster:string;
        Type:string;
    };
};

const Card = ({ movie }: CardProps) => (
    <CardBody>
        <Img src={movie.Poster} alt={movie.Title} />
        <h2>{movie.Title} {movie.Year}</h2>
        <span>{movie.Type}</span>
    </CardBody>
)

export default Card;