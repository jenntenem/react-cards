import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
// npm install react-hook-form
import List from './DataFormList'

export default function Form() {
  const [datos, setDatos] = useState(
    {
      name: 'name',
      lastname: 'lastname'
    })
  const [list, setList] = useState([])
  // const { register, handleSubmit, errors } = useForm() 
  const { register, handleSubmit, formState:{errors} } = useForm() // initialise the hook form

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
      {/* <form className='row justify-content-center' onSubmit={onSubmit}> -> Without hook-form */}
      <form className='row justify-content-center' onSubmit={handleSubmit(onSubmit)}>
        <div className='col-md-3'>
          <input 
            name='name'
            placeholder='Nombre'
            className='form-control'
            type='text'
            onChange={onChange}
            value={datos.nombre}
            autoComplete="off"
            // Referencia de la versión Hook Form 6.X.X
            // ref={register({ 
            //   required: {value: true, message: 'El nombre es requerido'},
            //   minLength: {value: 3, message: 'El nombre debe tener al menos 3 caracteres'},
            // })}

            // Referencia de la versión Hook Form 7.X.X
            {
              ...register('name', {
                required: {value: true, message: 'El nombre es requerido'},
                minLength: {value: 3, message: 'El nombre debe tener al menos 3 caracteres'},
              })
            }
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
            {
              ...register('lastname', {
                required: {value: true, message: 'El apellido es requerido'},
                minLength: {value: 4, message: 'El apellido debe tener al menos 4 caracteres'},
              })
            }
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
      <span className="text-danger text-small d-block mb-2">
        {errors?.name && errors?.name?.message} <br /> {errors?.lastname && errors?.lastname?.message}
      </span>
      <section>
        <h3>{datos.name +" - "+ datos.lastname}</h3>
      </section>
      
      <section className='row justify-content-center'>
        <List listPerson={list}/>
      </section>
    </React.Fragment>
  )
}
