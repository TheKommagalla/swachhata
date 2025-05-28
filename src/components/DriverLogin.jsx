
import img from './images/team.png';
import { useNavigate } from 'react-router-dom';
function DriverLogin() {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    // Here you would typically handle the login logic, such as validating credentials
    // For now, we'll just navigate to the dashboard
    navigate('/dashboard');
  };
  return (
    <>
        <div className='container d-flex flex-wrap justify-content-center align-items-center p-4 gap-4'>
            
            {/* Image Section */}
            {/* <div className='border border-2 border-dark rounded-3 p-2' style={{ width: "350px" }}>
            <img src={img} className="img-fluid rounded-3" alt="driver" />
            </div> */}
    
            {/* Form Section */}
            <div className='border border-2 border-dark rounded-3 p-3 w-100 ' style={{ maxWidth: '600px' }}>
                <p className='text-center' style={{fontWeight:'bold'}}>Driver Login</p>
            <form>
                <div className="form-floating mb-3">
                <input type="text" className="form-control" id="email" placeholder="Email Address" autoComplete='off' />
                <label htmlFor="email">Email Address</label>
                </div>
    
                <div className="form-floating mb-3">
                <input type="password" className="form-control" id="password" placeholder="Password" autoComplete='off' />
                <label htmlFor="password">Password</label>
                </div>
    
                <button type="submit" className='btn btn-success w-100' onClick={handleLogin}>Login</button>
            </form>
            </div>
        </div>
    </>
  )
}

export default DriverLogin
