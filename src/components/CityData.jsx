import React from 'react'

function CityData() {
  return (
    <>
       <div className='container-fluid p-3 rounded-4 my-2' style={{ maxWidth: '86vw', backgroundColor: '#efefef' }}>
            <p className="px-2 " style={{ fontWeight: 'bold' }}>ExploreCity</p>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">s.no</th>
                        <th scope="col">Name</th>
                        <th scope="col">Type/category</th>
                        <th scope="col">count</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Population</td>
                        <td>Population</td>
                        <td>1,20,000</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Population</td>
                        <td>Male</td>
                        <td>60,000</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Population</td>
                        <td>FeMale</td>
                        <td>60,000</td>
                    </tr>
                    
                    <tr>
                        <th scope="row">4</th>
                        <td>Houses</td>
                        <td>House</td>
                        <td>60,000</td>
                    </tr>
                    

                    
                </tbody>
            </table>
       </div>
    </>
  )
}

export default CityData
