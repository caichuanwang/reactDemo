import React from 'react';
import { Button } from 'antd';
class Children extends React.Component{
    constructor (props) {
        super();
    }

    fun = ()=> {
        console.log(this.props,'222')
        return (
            111111
        )
    }

    render(){
        return (
            <div>
                <div>{this.fun()}</div>
                {this.props.myNameInChildren}的照片墙
                <div>{this.props.giveChildrenAge}</div>
            </div>
        )
    }
}

export default Children