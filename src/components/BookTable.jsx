import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Tabla_Libro = ({ libros, onEliminarLibro, onEditarLibro }) => {
  return (
    <table className="table table-light table-striped mt-4">
      <thead>
        <tr>
          <th>Título</th>
          <th>Autor</th>
          <th>Año</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {libros.map((libro) => (
          <tr key={libro.id}>
            <td>{libro.titulo}</td>
            <td>{libro.autor}</td>
            <td>{libro.año}</td>
            <td>
              <button className="btn btn-primary me-2" onClick={() => onEditarLibro(libro.id)}>Editar</button>
              <button className="btn btn-danger" onClick={() => onEliminarLibro(libro.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabla_Libro;
