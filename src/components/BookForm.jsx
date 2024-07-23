import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Libro_form = ({ onAgregarLibro, onEditarLibro, Editar_Modo, Libro_actu }) => {
  const [titulo, set_titulo] = useState('');
  const [autor, set_autor] = useState('');

  useEffect(() => {
    if (Editar_Modo && Libro_actu) {
      set_titulo(Libro_actu.titulo);
      set_autor(Libro_actu.autor);
    } else {
      set_titulo('');
      set_autor('');
    }
  }, [Editar_Modo, Libro_actu]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titulo.trim() === '' || autor.trim() === '') {
      alert('Todos los campos son obligatorios');
      return;
    }
    if (Editar_Modo) {
      onEditarLibro({ ...Libro_actu, titulo, autor });
    } else {
      onAgregarLibro({ id: Date.now(), titulo, autor });
    }
    set_titulo('');
    set_autor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="titulo" className="form-label">Título</label>
        <input type="text" className="form-control" value={titulo} onChange={(e) => set_titulo(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="autor" className="form-label">Autor</label>
        <input type="text" className="form-control" value={autor} onChange={(e) => set_autor(e.target.value)} />
      </div>
      <button type="submit" className={`btn ${Editar_Modo ? 'btn-primary' : 'btn-success'}`}>
        {Editar_Modo ? 'Actualizar Libro' : 'Agregar Libro'}
      </button>
    </form>
  );
};

export default Libro_form;
