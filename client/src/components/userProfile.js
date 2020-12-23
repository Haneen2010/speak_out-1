import React ,{ useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


 function UserProfile(props, setCurrentId ){
   console.log(props)
      
      const [user, setUser] = useState({})
    
    
     useEffect(() =>{
         
        axios.get('http://localhost:5000/users/getOneUser/'+props.match.params.id)

        .then(res => {
        //console.log(res.data[0])
             
           setUser(
                 {userName:res.data[0].userName,
                age:res.data[0].age,
                gender:res.data[0].gender,
                email:res.data[0].email,
                }

            )
        })
        .catch(err => {
            console.log(err)
        })
     }, [props.match.params.id])

    //  handleClick(() => {
    //   window.location= '/edit/'+props.match.params.id
      
    //  })

    return (
        
        <div className="col-md-8">
        <div className="card mb-3">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">User Name :</h6>
              </div>
              <div className="col-sm-9 text-secondary">
              {user.userName}
              </div>
            </div>
            {/* <hr> */}
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Age :</h6>
              </div>
              <div className="col-sm-9 text-secondary">
              {user.age}
              </div>
            </div>
            {/* </hr> */}
            {/* <hr> */}
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Gender :</h6>
              </div>
              <div className="col-sm-9 text-secondary">
              {user.gender}
              </div>
            </div>
            {/* </hr> */}
            {/* <hr> */}
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Email :</h6>
              </div>
              <div className="col-sm-9 text-secondary">
              {user.email}
              </div>
            </div>
            {/* </hr> */}
            

        </div>
        </div><div>
        <Link type="button" className="btn btn-info btn-rounded" to={"/edit/"+props.match.params.id}>edit</Link> | <a href="/calender" type="button" className="btn btn-dark btn-rounded" onClick={() => {  }}>delete</a>

        {/* <button type="button" class="btn btn-info btn-rounded" onClick= {() => {props.handleClick()}} >EDIT</button>
            <button type="button" class="btn btn-dark btn-rounded">DELETE</button> */}
        </div>
        </div>
        

    )
}

export default UserProfile;



  /**
   * 
    <div className = "container">
        <form className="text-center border border-light p-5">
              <h3>{user.userName}</h3>
              <h3>{user.age}</h3>
              <h3>{user.gender}</h3>
              <h3>{user.email}</h3>
            </form>
               </div>          
   */

  /**
   * 
   */