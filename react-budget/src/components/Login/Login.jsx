import classes from './Login.module.css'

export default function LoginForm({ name, password, handleClick }) {
    return (
      <div className="container d-flex justify-content-center rounded align-items-center m-auto login-page">
        <div className={`card text-center  mt-5 ${classes.login}`}>
                <div className={`card-body ${classes.title} font-title mb-2 rounded-top`}>
            <h1 className=" card-title font-title ">Quantum Dinerum</h1>
          </div>
          <div className="mb-2 p-2">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="email"
              className={`form-control ${classes["input-box"]}`}
              id="userName"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-2 p-2">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="paswword"
              className={`form-control ${classes["input-box"]}`}
              id="userPassword"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="d-flex justify-content-center  align-items-center mb-2 p-2">
            <button
              type="submit"
              className={`btn ${classes["login-btn"]} text-dark`}
              onClick={ handleClick }
            >
              Log in
            </button>
          </div>
          <div className="p-2">
            <a href="#" className="card-link">
              Forgot your password?
            </a>
            <a href="#" className="card-link ms-5">
              Don't have an account yet?Register now!
            </a>
          </div>
        </div>
      </div>
    );
}



