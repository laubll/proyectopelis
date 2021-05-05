import { useState } from "react";
import AddMovie from "./AddMovie";


export default function Movies() {
    const [movies, setMovies] = useState([
        { id: 1, name: "Terminator", viewed: false },
        { id: 2, name: "Scary Movie", viewed: false }
    ])

    const toggleMovie = (id) => {
        setMovies(movies.map(movie => {
            if (movie.id === id) { movie.viewed = !movie.viewed }
            return movie;
        }));
    }

    const deleteMovie = (id) => {
        setMovies(movies.filter((movie) => movie.id !== id))
    }

    const addMovie = (movieName) => {
        let newMovieId;
        movies.length > 0
            ? (newMovieId = movies[movies.length - 1].id + 1)
            : (newMovieId = 1)


        const newMovie = {
            id: newMovieId,
            name: movieName,
            viewed: false,
        }

        setMovies((prevMovie) => [...prevMovie, newMovie])
    }


    return (
        <div className="container mt-4">
            <AddMovie addNewMovie={addMovie} />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Película</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((item) => (
                        <tr key={item.id}>
                            <th scope="row">{item.id}</th>
                            <td>{item.name} {item.viewed ? (<span>✅</span>) : ""}
                            </td>
                            <td>
                                <button type="button" className="btn btn-success" onClick={() => toggleMovie(item.id)}>{item.viewed ? "No la he visto" : "Ya la he visto"}</button>
                                <button type="button" className="btn btn-danger" onClick={() => deleteMovie(item.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}


