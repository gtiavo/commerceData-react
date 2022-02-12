import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { startRegister } from '../../actions/auth'
import { useForm } from '../../hooks/useForm';

const Register = () => {

  const dispatch = useDispatch()

  const [ errorForm, setErrorForm ] = useState('');

const [ values, handleInputChange ] = useForm({
  name:'gustavo',
  email:'gustavo@gmail.com',
  password:'123456',
  password2:'123456'

});

const {name, email, password, password2} = values;


const handleRegister = (e) => {
  e.preventDefault()
if  (isValuesPass()){
  dispatch( startRegister(name, email, password) );
 
}
}


// para validacion del email descargamos 'validator' 'https://www.npmjs.com/package/validator'

const isValuesPass = () =>{
  if( !name.trim() ){
    setErrorForm('Debes de colocar un nombre');
    return false
  }else if (name.trim().length < 3){
    setErrorForm('El nombre debe de tener mas de 3 cararcteres');
    return false
  }
  else if ( !email ){
    setErrorForm('Debes de colocar una email');
    return false
  }
  else if (!validator.isEmail(email)){
    setErrorForm('Debes de colocar un email valido');
    return false
  }
  else if ( !password ){
    setErrorForm('Debes de colocar una contraseña');
    return false
  }
  else if (password.length < 6 ){
    setErrorForm('La contraseña debe de tener mas de 6 caracteres');
    return false
  }
  else if (  !password2 ){
    setErrorForm('Debes de repetir la contraseña agregada');
    return false
  }
  else if ( password !== password2 ){
    setErrorForm('Las contraseñas no coinciden');
    return false
  }
  setErrorForm('');
  return true
}



  return  (
    <>
    <section className='auth_section'>
   <article className='auth_body'>
     <section className='auth_logoRegister'>
     <i className="fas fa-users"></i>
       
     </section>
     <section>
       <form 
       className='auth_form'
       onSubmit={ handleRegister }
       >
         <div>{ errorForm }</div>
       <input
          type='text'
          name='name'
          className='auth_input'
          placeholder='Nombre'
          autoComplete='off'
          value ={ name }
          onChange={ handleInputChange }
          />
         <input
          type='email'
          name='email'
          className='auth_input'
          placeholder='Email'
          autoComplete='off'
          value={ email }
          onChange={ handleInputChange }
          />
          <input
          type='password'
          name='password'
          className='auth_input'
          placeholder='Password'
          value={ password }
          onChange={ handleInputChange }
          />
              <input
          type='password'
          name='password2'
          className='auth_input'
          placeholder='Repite Password'
          value={ password2 }
          onChange={ handleInputChange }
          />

          <button 
          type='submit'
          className='auth_button btn pointer'
          >
           Register
          </button>

       </form>
     </section>
    
   </article>
     <section className='auth_registrateNow'>
       <p >Ya tenes una cuenta?,</p> <p ><Link className='pointer auth_registrateIcono' to='/login'>Logueate</Link></p> 
     </section>
    </section>
    </>
)
};

export default Register;
