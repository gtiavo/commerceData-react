import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {  startGoogleLogin, startLogin } from '../../actions/auth';
import validator from 'validator'
import { useForm } from '../../hooks/useForm';

const Login = () => {

 const dispatch = useDispatch();
 const [ errorForm, setErrorForm ] = useState('');


 const [ values, handleInputChange ] = useForm({
   email:'gustavo@gmail.com',
   password: '123456'
 });

 const { email, password } = values;

 const handleLogin = (e) =>{
   e.preventDefault()
   if  (isValuesPass()){
    dispatch( startLogin( email, password ) );
  }
 }

 const handleGoogleLogin = () => {
   dispatch( startGoogleLogin() )
 }

 const isValuesPass = () =>{
 
  if( !email ){
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
 
 
  setErrorForm('');
  return true
}


  return (
      <>
      <section className='auth_section'>
     <article className='auth_body'>
       <section>
         <h1 className='auth_title'><i className="fas fa-user"></i></h1>
       </section>
       <section>
         <form 
         className='auth_form'
         onSubmit={ handleLogin }
         >
           <div>{ errorForm }</div>
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

            <button 
            type='submit'
            className='auth_button btn pointer'
            >
              Login
            </button>

         </form>
       </section>
       <section className='auth_google'>
         <img 
         onClick={ handleGoogleLogin }
         src='https://1000marcas.net/wp-content/uploads/2020/02/Google-S%C3%ADmbolo.jpg'
          className='pointer'
           alt='no se encontro la imagen'
           />
         <p>Ingresar con Google</p>
       </section>
     </article>
       <section className='auth_registrateNow'>
         <p >No tenenes cuenta?,</p> <p ><Link className='pointer auth_registrateIcono' to='/login/register'>Registrate</Link></p> 
       </section>
      </section>
      </>
  )
};

export default Login;
