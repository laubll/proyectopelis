import React, { Fragment, useRef } from 'react';

export default function AddMovie({ addNewMovie }) {
    const inputMovie = useRef();
    const addMovie = () => {
        const newMovie = inputMovie.current.value;
        addNewMovie(newMovie);
        inputMovie.current.value = null;
    }

    const keypress = (event) => {
        if (event.key === "Enter") {
            addMovie()
        }
    }

    return (
        <Fragment>
            <div className="input-group mt-3">
                <input ref={inputMovie} type="text" className="form-control" placeholder="Nombre de la película" onKeyPress={keypress} />
                <button onClick={addMovie} className="btn btn-outline-secondary" type="button">Añadir película</button>
            </div>
        </Fragment>
    );
}