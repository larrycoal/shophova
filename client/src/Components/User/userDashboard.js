import React from 'react';

const userDashboard = () => {
    return (
        <div className="user_wrapper">
            <div className="user_nfo">
                <h2>USER INFORMATION</h2>
                <div>
                    <span>Name</span><span>larry</span>
                    <span>LastName</span><span>coal</span>
                    <span>Email</span><span>test@test.com</span>
                    <button>Edit account </button>
                </div>
            </div>
            <div className="user_purchase">
                <h2>HISTORY PURCHASES</h2>
                <div>
                    history
                </div>
            </div>
        </div>
    );
};

export default userDashboard;