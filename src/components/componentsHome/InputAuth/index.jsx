import { Link } from 'react-router-dom';
import './styles.css'

export const InputAuth = ({title, handleChangePassword, handleChangeEmail, buttonTitle, handleAuth,linkD, errorMessage, linkTitle }) => {
  
  
  return (
    <div className="container">
      <form action="" onSubmit={handleAuth} className="form-auth">
        <h2>{title}</h2>
        <input
          type="text"
          placeholder="Email..."
          onChange={(e) => handleChangeEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => handleChangePassword(e.target.value)}
        />
        {errorMessage && (
          <p  className='errorMessage'>{errorMessage}</p>
        )}
        <button>{buttonTitle}</button>
        
      <Link to={linkD} className='linkDirection'>{linkTitle}</Link>
      </form>
    </div>

  );
};
