import Grid from "@mui/material/Grid";
import MovieCard from "./MovieCard";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useEffect, useState } from "react";
import { IMovie } from "./movie";

import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
// const api:string='https://api.themoviedb.org/3/discover/movie?api_key=5be186fbc7705c48999b4954a5e9325f';
const api: string = 'https://cinema-webapi.azurewebsites.net/api/movie'
const MoviesList = () => {
    const [movies, SetMovies] = useState<IMovie[] | undefined>();
    const [loading, setLoading] = useState<boolean>(true);

    // let placeholder = [];

    // for (let a = 0; a < 4; a++) {
    //     placeholder.push(
    //         <Grid key={a} item xs={12} sm={6} md={3}>
    //             <Stack spacing={1}>
    //                 <Skeleton variant="rectangular" width={345} height={585} />
    //                 <Skeleton width={120} height={250} />
    //                 <Skeleton variant="rounded" width={210} height={60} />
    //             </Stack>
    //         </Grid>
    //     )
    // }

    useEffect(() => {
        // fetch(api)
        //     .then(res => res.json())
        //     .then(data => {
        //         setLoading(true);

        //         setTimeout(() => {
        //             SetMovies(data);
        //             setLoading(false);
        //         }, 2000);
        //     })
        //     .catch(error => {
        //         console.error('Error fetching movies:', error);
        //         setLoading(true);
        //     });
        const dataFetch = async () => {
            const res = await fetch(api);
            setLoading(true);
            if (res.status == 200) {
                const data = await res.json();
                SetMovies(data);
                // setTimeout(() => {
                    setLoading(false);
                // }, 2000);
            }
            else {
                setLoading(true);
            }
        };
        dataFetch().catch(console.error);
    }, []);
    return (
        <>
            <Box sx={{ width: '100%' }}>
                <h2>Movies</h2>
                {/* <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {movies ? (movies?.map((movie, k) => (
                        <Grid key={k} item xs={12} sm={6} md={3}>
                            <Item><MovieCard {...movie} /></Item>
                        </Grid>
                    ))) : (placeholder)} */}
                <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {(movies?.map((movie, k) => (
                        <Grid key={k} item xs={12} sm={6} md={3}>
                            <Item>
                                {/* <MovieCard movie={movie} /> */}
                                <MovieCard title={movie.title}
                                    year={movie.year}
                                    imageUrl={movie.imageUrl}
                                    description={movie.description}
                                    loading={loading} />
                            </Item>
                        </Grid>
                    )))}
                </Grid>
            </Box >
        </>
    )
}

export default MoviesList;