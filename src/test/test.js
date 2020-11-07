import React from 'react';

class MyCom extends React.Component{
    constructor(prop) {
        super();
        this.state = {
            name:'ccw'
        }
    }

    fun = (e)=>{
        console.log(e.target.value);
        this.setState({
            name:e.target.value
        })
    }

    



    render(){
        return(
            <div>

              <input onChange={this.fun} value={this.state.name}/>
            </div>
        )
    }
}

export default MyCom