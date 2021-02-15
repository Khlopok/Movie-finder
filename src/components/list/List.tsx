import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Card from './Card';

// CSS

const Form = styled.form`
    width: 85%;
    margin: 0 auto 2em auto;
    display: flex;
    justify-content: center;
`

const Main = styled.main`
    width: 85%;
    margin: 0 auto 4em auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2em;

    @media (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`

// Component

const api:string = 'https://www.omdbapi.com/?i=tt3896198&apikey=d4c9b712';

const List = () => {
    interface IMovie {
        imdbID:string;
        Title:string;
        Year:string;
        Poster:string;
        Type:string;
    }

    const [movies, setMovies] = useState<IMovie[]>([]);
    const [search, setSearch] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const getMovies = async (tern:string):Promise<void> => {
        const res = await fetch(`${api}&s=${tern}`);
        const resJson = await res.json();
        if (resJson.Response === 'False') {
            setMessage(resJson.Error);
        }
        else {
            setMessage('');
            setMovies(resJson.Search);
        };
    }

    useEffect(() => {
        setMessage('Loading, please wait...')
        getMovies('movie')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleSubmit = (e:React.FormEvent):void => {
        e.preventDefault();
        setSearch('');
        if (!search) {
            setMessage('Please write a text');
        }
        else {
            setMessage('Loading, please wait...');
            getMovies(search);
        };
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <input type="text" value={search} placeholder={message ? message : 'Search'} autoFocus onChange={e => setSearch(e.target.value)} />
            </Form>
            <Main>
                {
                    movies.map((movie: IMovie, id: number) => <Card key={id} movie={movie} />)
                }
            </Main>
        </>
    )
}

export default List;