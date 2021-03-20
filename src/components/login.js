import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    withRouter,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import {actions} from '../Store/actions'
import {compose} from "redux"; 


function mapStateToProps(state) {
    return {
        user: state.userReducer.user
     
    };
}

const mapDispatchToProps = (dispatch) => ({
    loginUser: (login_user) => dispatch(actions.loginUser(login_user))

})

// e 1
export default compose(withRouter,connect(mapStateToProps, mapDispatchToProps))(function Login(props) {
    const { loginUser,history } = props;
    const [userEmail,setUserEmail]=useState("");
    const [userPassword,setUserPassword]=useState("");
    function login(){
        loginUser({userEmail:userEmail,userPassword:userPassword});
    }
    function toRegister(){
        history.push('/register');

    }


    return (
        <>
           <label>email</label>
           <input type="text"  onChange={(e)=>setUserEmail(e.target.value)}></input>
           <label>password</label>
           <input type="text"  onChange={(e)=>setUserPassword(e.target.value)}></input>
           <button onClick={login} >login</button>
           <button onClick={toRegister} >new user</button>
           <Link to="/UserTasks">לבית</Link>
           <Link to="/tasks">למשימות</Link>

               
        </>
    );
})

