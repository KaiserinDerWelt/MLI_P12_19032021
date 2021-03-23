import React from 'react';
import Topmenu from './menu/Topmenu';

class Dashboard extends React.Component{
    render(){
        return(
            <>
       <div className="container-fluid">
           {/*Calling components here*/}
           <Topmenu />
       </div>
            </>
        )
    }
}

export default Dashboard;