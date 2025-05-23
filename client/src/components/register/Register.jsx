export default function Register() {
  return (
    <>
      {/* Register Page ( Only for Guest users ) */}
      <section id="register-page" className="content auth">
        <form id="register">
          <div className="container">
            <div className="brand-logo" />
            <h1>Register</h1>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="maria@email.com"
            />
            <label htmlFor="pass">Password:</label>
            <input type="password" name="password" id="register-password" />
            <label htmlFor="con-pass">Confirm Password:</label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
            />
            <input
              className="btn submit"
              type="submit"
              defaultValue="Register"
            />
            <p className="field">
              <span>
                If you already have profile click <a href="#">here</a>
              </span>
            </p>
          </div>
        </form>
      </section>
    </>
  );
}
