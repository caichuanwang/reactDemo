import React from 'react';
import Children from './children'
import ChildrenPhoto from './childrenPhoto'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Divider } from 'antd';
class Parent extends React.Component{
    constructor (props) {
        super();
        this.state = {
            myNameInParent:'蔡传旺111',
            myAge:'12'
        }
        this.handleChildrenEvent = this.handleChildrenEvent.bind(this)
    }
    ModifyNameInParent = (newName)=>{
        console.log(`父组件中得到了新的name${newName}`)
        console.log(this.props,'props')
         this.setState({
             myNameInParent:newName
         })
    }

    handleChildrenEvent(value){
        this.setState({
            myAge:value
        })
    }
    render(){
        return (
            <div>
                <h3>{this.state.myNameInParent}的博客</h3>
                <Divider plain>这是分隔</Divider>
                <Children ModifyName={this.ModifyNameInParent} HandleAge={this.handleChildrenEvent}></Children>
                <div>{this.state.myAge}</div>
                <ChildrenPhoto myNameInChildren={this.state.myNameInParent}  giveChildrenAge={this.state.myAge}/>
            </div>
        )
    }
}

export default Parent
