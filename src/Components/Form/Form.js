import React, {useState} from 'react'

import List from './DataFormList'

export default function Form() {
  const [datos, setDatos] = useState(
    {
      name: 'name',
      lastname: 'lastname'
    })
  const [list, setList] = useState([])

  const onChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()  // evita que se recargue la pagina
    setList([...list, datos])
    setDatos({
      name: '',
      lastname: '',
    })
    e.target.reset()
  }
  return (
    <React.Fragment>
      <h1>Form</h1>
      <form className='row justify-content-center' onSubmit={onSubmit}>
        <div className='col-md-3'>
          <input 
            name='name'
            placeholder='Nombre'
            className='form-control'
            type='text'
            onChange={onChange}
            value={datos.nombre}
          />
        </div>
        <div className='col-md-3'>
          <input 
            name='lastname'
            placeholder='Apellido'
            className='form-control'
            type='text'
            onChange={onChange}
            value={datos.apellido}
          />
        </div>
        <div className='col-md-2'>
          <button 
            className='btn btn-outline-primary'
            type='submit'
            >
            Enviar
          </button>
        </div>
      </form>
      <section>
        <h3>{datos.name +" - "+ datos.lastname}</h3>
      </section>
      
      <section className='row justify-content-center'>
        <List listPerson={list}/>
      </section>
    </React.Fragment>
  )
}
