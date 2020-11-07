import React from 'react';
import { Button, Input } from 'antd';

class Children extends React.Component{
    constructor (props) {
        super();
        this.state = {
            name:'蔡传旺',
            age:26
        }
        this.changeAge = this.changeAge.bind(this);
        this.handleAge = this.handleAge.bind(this)
    }
    nameChage = (e) => {

        this.setState({
            name:e.target.value
        })
    }

    doClick = ()=>{
        console.log(`子组件修改了新的签名${this.state.name}`)
        this.props.ModifyName(this.state.name)

    }
    changeAge(e){
        this.setState({
            age:e.target.value
        })
    }
    handleAge(){
        this.props.HandleAge(this.state.age)
    }
    render(){
        return (
            <div>
                <Input placeholder="请输入" value={this.state.name} onChange={this.nameChage}></Input>
                <Button type="primary" onClick={this.doClick}>修改</Button>
                <Input placeholder="这是新的测试组件" value={this.state.age} onChange={this.changeAge}></Input>
                <Button onClick={this.handleAge}>修改年龄</Button>
            </div>
        )
    }
}

export default Children