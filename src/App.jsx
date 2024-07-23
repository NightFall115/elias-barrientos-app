import React, { useState } from 'react';
import Libro_form from './components/BookForm';
import Tabla_Libro from './components/BookTable';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [libros, setLibros] = useState([]);
  const [editarModo, setEditarModo] = useState(false);
  const [libroActual, setLibroActual] = useState(null);

  const agregarLibro  = (libro) => {
    setLibros([...libros, libro]);
  };

  const editarLibro = (libroActualizado) => {
    setLibros(libros.map(libro => libro.id === libroActualizado.id ? libroActualizado : libro));
    setEditarModo(false);
    setLibroActual(null);
  };

  const eliminarLibro = (id) => {
    setLibros(libros.filter(libro => libro.id !== id));
  };

  const iniciarEdicion = (id) => {
    const libro = libros.find(libro => libro.id === id);
    setEditarModo(true);
    setLibroActual(libro);
  };

  return (
    <div className="container mt-4">
      <Libro_form 
        onAgregarLibro={agregarLibro} 
        onEditarLibro={editarLibro} 
        Editar_Modo={editarModo} 
        Libro_actu={libroActual} 
      />
      <Tabla_Libro 
        libros={libros} 
        onEliminarLibro={eliminarLibro} 
        onEditarLibro={iniciarEdicion} 
      />
    </div>
  );
};

export default App;