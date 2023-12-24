import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

    const { signIn } = useContext(AuthContext);

    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password);

        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-20">
                <div className="text-center w-3/4 md:w-1/2">
                  
                <img src={img} alt="#" />

                </div>
                <div className="card shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-[#FF3811] text-white font-semibold text-xl" type="submit" value="Login" />
                        </div>
                    </form>

                    <p className='text-center my-3'>New to Car Doctors <Link to='/signUp' className='text-orange-600 font-bold'>Sign Up</Link></p>

                </div>
            </div>
        </div>
    );
};

export default Login;