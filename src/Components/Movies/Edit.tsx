import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { IMovie } from "../Models/movie";
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Edit: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [movie, setMovie] = useState<IMovie | undefined>();
    const [title, setTitle] = useState("");
    const [year, setYear] = useState(0); 
    const [imageUrl, setImageUrl] = useState("");
    const [description, setdescription] = useState("");

    const HandleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value);
    const HandleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const numericValue = parseInt(inputValue, 10);
        if (!isNaN(numericValue)) {
            setYear(numericValue);
        } 
    };
    const HandleImageUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => setImageUrl(event.target.value);
    const HandleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => setdescription(event.target.value);


    const handleSave = async () => {
        try {
            // const response = await fetch('https://cinema-webapi.azurewebsites.net/api/Movie/Create', {
                const response = await fetch(`https://cinema-webapi.azurewebsites.net/api/Movie/Edit`, {
                    method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id,
                    title,
                    year,
                    imageUrl,
                    description,
                    duration: "00:00:00",
                    genreID: []  
                }),
            });
    
            if (response.ok) {
                console.log('Movie updated successfully');
            } else {
                console.error('Failed to update movie');
            }
        } catch (error) {
            console.error('Error updating movie:', error);
        }
        navigate('/movies');
    };
    const handleCancel = () => {
        navigate('/movies');
    };

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await fetch(`https://cinema-webapi.azurewebsites.net/api/movie/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setMovie(data);
                } else {
                    console.error(`Failed to fetch movie with id ${id}`);
                }
            } catch (error) {
                console.error('Error fetching movie:', error);
            }
        };
        fetchMovie();
    }, [id]);

    if (!movie) {
        return <p>Movie not found</p>;
    }



    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    margin: 'auto',
                    width: 500,
                    maxWidth: '100%',
                    alignItems: 'center',
                    // backgroundColor: 'rgb(25, 118, 210)', 
                    '& .MuiTextField-root': { m: 1 },
                }}
            >
                <TextField fullWidth
                    label="Title"
                    id="Title"
                    defaultValue={movie.title}
                    sx={{
                        '& label': {
                            color: 'white',
                        },
                        '& input': {
                            color: 'white',
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'white',
                        },
                    }}
                onChange={HandleTitleChange}
                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    margin: 'auto',
                    width: 500,
                    maxWidth: '100%',
                    alignItems: 'center',
                    // backgroundColor: 'rgb(25, 118, 210)', 
                    '& .MuiTextField-root': { m: 1 },
                }}
            >
                <TextField fullWidth
                    label="Year"
                    id="year"
                    defaultValue={movie.year}
                    sx={{
                        '& label': {
                            color: 'white',
                        },
                        '& input': {
                            color: 'white',
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'white',
                        },
                    }}
                onChange={HandleYearChange}
                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    margin: 'auto',
                    width: 500,
                    maxWidth: '100%',
                    alignItems: 'center',
                    // backgroundColor: 'rgb(25, 118, 210)', 
                    '& .MuiTextField-root': { m: 1 },
                }}
            >
                <TextField fullWidth
                    label="ImageUrl"
                    id="imageUrl"
                    defaultValue={movie.imageUrl}
                    sx={{
                        '& label': {
                            color: 'white',
                        },
                        '& input': {
                            color: 'white',
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'white',
                        },
                    }}
                onChange={HandleImageUrlChange}
                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    margin: 'auto',
                    width: 500,
                    maxWidth: '100%',
                    alignItems: 'center',
                    // backgroundColor: 'rgb(25, 118, 210)', 
                    '& .MuiTextField-root': { m: 1 },
                }}
            >
                <TextField fullWidth
                    multiline
                    rows={8}
                    label="Description"
                    id="description"
                    defaultValue={movie.description}
                    inputProps={{ style: { color: 'white' } }}
                    sx={{
                        '& label': {
                            color: 'white',
                        },
                        '& input': {
                            color: 'white',
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'white',
                        },
                    }}
                onChange={HandleDescriptionChange}
                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: 'auto',
                    width: 100,
                    '& .MuiTextField-root': { m: 1 }, mb: 2,
                }}>
                <Button variant="contained" color="success" onClick={handleSave} sx={{ width: '100%', mr: 1 }}>Save</Button>
                <Button variant="contained" color="error" onClick={handleCancel} sx={{ width: '100%' }}>Cancel</Button>
            
            </Box>
        </>
    );
};




export default Edit;