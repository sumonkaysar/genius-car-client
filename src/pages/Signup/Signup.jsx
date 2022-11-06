import { useContext } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Signup = () => {

  const {createUser} = useContext(AuthContext);

  const handleSignup = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser({email, password})
    .then(result => {
      const {user} = result;
      console.log(user);
    })
    .catch(er => console.log(err));
  }

  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid md:grid-cols-2 gap-10">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 pb-10">
          <form onSubmit={handleSignup} className="card-body">
            <h1 className="text-5xl font-bold text-center">Sgnup</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="Your Name" className="input input-bordered" name="name" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" className="input input-bordered" name="email" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" placeholder="password" className="input input-bordered" name="password" required />
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="Signup" className="btn btn-primary" />
            </div>
          </form>
          <p className="text-center">Already have an account? <Link className="text-orange-600 font-bold" to='/login'>Login Here</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
