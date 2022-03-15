import React from 'react';
import items from './data.json';
// import Popup from './popup';

function Restaurent() {
    // const [showPopup, setShowPopup] = useState(false);
    // const[showDetails,setShowDetails] = useState(false)
    // // const [list, setMyData] = useState([...items]);

    // const togglePopup = () => {
    //     setShowPopup(!showPopup);
    //     // alert("Hi");
    // }
    // const details =()=>{
    //     setShowDetails(!showDetails);
    //     alert("hello")
    //     // AddDetails()
        
    // }
    // const AddDetails = () => {
    //     let temp = [...list]
    //     temp.push({Id:"1",Name:"aaa",Email:"aa@gmail.com",Mobile:"1234567823",Address:"Hyd",Services:"Chai"})
    //     setMyData([...temp])
    // }
    console.log('itemss', items)
    return (
        <div className='container'>
            <div className="header-section">
                <p className='header-content'>Restaurent Record App</p>
                <button className='add-btn' >Add Button</button>
                {/* {showPopup && <Popup
                    content={<>
                        <h5 className='popup-header'>Model Title</h5>
                        <hr style={{ "opacity": "0.5" }} />
                        <div>
                            <label className='table-section'>Name
                            </label>
                            <input className='text-size'
                                type="text"
                                placeholder='Restaurent Name here'
                            />
                            <label className='table-section'>Email
                            </label>
                            <input className='text-size'
                                type="text"
                                placeholder='Restaurent Eamil Id'
                            />
                            <label className='table-section'>Mobile
                            </label>
                            <input className='text-size'
                                type="text"
                                placeholder='Restaurent Mobile'
                            />
                            <label className='table-section'>Address
                            </label>
                            <input className='text-size'
                                type="text"
                                placeholder='Restaurent Address Here'
                            />
                            <label className='table-section'>Services
                            </label>
                            <input className='text-size'
                                type="text"
                                placeholder='Restaurent Services Chai & Coffee'
                            />
                            <hr style={{ "opacity": "0.5" }} />
                            <div style={{ "float": "right" }}>
                                <button className='close-btn'>Close</button>
                                <button onClick={details} className='adddetails-btn'>Add Details</button>
                                <button className='update-btn'>Update Details</button>
                            </div>
                        </div>
                    </>}
                    handleClose={togglePopup}
                />}:{
                    <div>
                        <table  style={{ "width": "100%", "margin-top": "2%" }}>
                            <tr style={{ "textAlign": "center" }}>
                                <th>Restaurent ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Address</th>
                                <th>Services</th>
                                <th>Action</th>
                            </tr>
                            {items.map((item) => {
                                return (
                                    <tr style={{ "textAlign": "center" }}>
                                        <td>{item.Id}</td>
                                        <td>{item.Name}</td>
                                        <td>{item.Email}</td>
                                        <td>{item.Mobile}</td>
                                        <td>{item.Address}</td>
                                        <td>{item.Services}</td>
                                        <td>
                                            <button className='edit-btn'>Edit</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </table>

                    </div>
                } */}
            </div>
        </div >
    )

}

export default Restaurent;