
  import img1 from './images/cash-payment.jpg'
  import img2 from './images/garbage.jpg';
  import img3 from './images/tanker.jpg';
  import img4 from './images/water-tap.jpg';
  import img5 from './images/seeding.jpg';
  import img6 from './images/tipper.jpg';
  import img7 from './images/spetic-tanker.jpg';
  import img8 from './images/deforestation.jpg';
  function Category() {
      const handleonClick = () => {
        Swal.fire({
            icon: "error",
            title: "NO DATA AVAILABLE",
            text: "Something went wrong!",
            // footer: '<a href="#">Why do I have this issue?</a>'
          });
    }
    return (
      <>
        <div className='container ' >
          <p className="ml-4 mt-4 Heading" style={{ fontWeight:"bold",marginLeft:"20px"}}>
              Featured Categories
            </p>
          
                      <div className='card-container d-flex' >  {/* ✅ Added key */}
                        <div className='container-card border' onClick={() =>handleonClick()} >
                            <p className="card-label">Bill Payments</p>
                            <div className='card-body w-2'>
                              <img src={img1} alt="img2" className="img-thumbnail w-5" />
                            </div>
                          </div>
                        <div className='container-card border' onClick={() =>handleonClick()} >
                                <p className="card-label">Request Vehicle</p>
                                <div className='card-body'>
                                    <img src={img2} alt='img1' className="img-thumbnail w-5" />
                                </div>
                                </div>
                            <div className='container-card border' onClick={() =>handleonClick()} >
                              <p className="card-label">Request Water supply</p>
                              <div className='card-body w-2'>
                                <img src={img3} alt="img2" className="img-thumbnail w-5" />
                              </div>
                            </div>
                            <div className='container-card border' onClick={() =>handleonClick()} >
                              <p className="card-label">Requst Tap Connection</p>
                              <div className='card-body w-2'>
                                <img src={img4} alt="img2" className="img-thumbnail w-5" />
                              </div>
                            </div>
                            <div className='container-card border' onClick={() =>handleonClick()} >
                              <p className="card-label">Request for Plantation</p>
                              <div className='card-body w-2'>
                                <img src={img5} alt="img2" className="img-thumbnail w-5" />
                              </div>
                            </div>
                            <div className='container-card border' onClick={() =>handleonClick()} >
                              <p className="card-label">Request for CD</p>
                              <div className='card-body w-2'>
                                <img src={img6} alt="img2" className="img-thumbnail w-5" />
                              </div>
                            </div>
                            <div className='container-card border' onClick={() =>handleonClick()} >
                              <p className="card-label">Request for Septic cleaner</p>
                              <div className='card-body w-2'>
                                <img src={img7} alt="img2" className="img-thumbnail w-5" />
                              </div>
                            </div>
                            <div className='container-card border' onClick={() =>handleonClick()} >
                              <p className="card-label">Permission for Cutting</p>
                              <div className='card-body w-2'>
                                <img src={img8} alt="img2" className="img-thumbnail w-5" />
                              </div>
                            </div>
                            {/* <div className='container-card border' onClick={() =>handleonClick()} >
                              <p className="card-label">Complaints</p>
                              <div className='card-body w-2'>
                                <img src={img9} alt="img2" className="img-thumbnail w-5" />
                              </div>
                            </div> */}
                        </div>
                </div>
      </>
    )
  }
  export default Category
