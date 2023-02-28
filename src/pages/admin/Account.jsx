import React from "react";


const Account = () => {
    return(
    <div className="account">
        <h1>Account Settings:</h1>
        <div className="account-form">
        <form >
            <input type="text" placeholder="User-ID"/><br />
            <input type="password"  placeholder="New Password"/><br />
            <input type="password"  placeholder="Re-enter Password"/>
        </form>
        <button>Save</button>
        </div>
        
    </div>
    )
}

export default Account;