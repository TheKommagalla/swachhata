import img from './images/team(1).png'
import { useNavigate } from 'react-router-dom';
function UserRegisteration() {
    const navigate = useNavigate();
    const HandleRequest = () => {
        navigate("/register/user-registrationform");
    }
    
  return (
    <>
       <div className=" justify-content-center align-items-center flex-wrap md-3 m-3">
            <div className="card p-2" style={{width: "300px"}}>
                <p className='text-center '>User Registration</p>
                   <div className="border border-2 border-success rounded-circle"  >
                            <img src={img}  className="card-img-top  rounded-circle" alt="..."/>
                    </div>
                        <button type="button" className="btn btn-outline-success m-1" onClick={()=>HandleRequest()}>Register Now</button>           
            </div>
        </div>
    </>
  )
}

export default UserRegisteration
