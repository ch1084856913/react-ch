import React from 'react';
import {Redirect,Route} from 'react-router-dom';
import User from "../components/User";


//路由守卫 条件 同步    应用场景 配合状态管理
/*let AuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props =>
    Math.random()<0.5 ?
      <Component {...props} />
      : <Redirect to="/login" />
  }
  />
);*/


//前置 路由守卫 条件 异步
//思想: 先返回空组件 ,给自己一点时间读数据，数据回来后，更新auth组件，重新渲染，重新返回route组件
class AuthRoute extends React.Component{

  state={
    auth:false,
    hasAuth:false,//是否发送过请求
    userdata:{}
  };

  render(){
    let { component: Component, ...rest }=this.props;

    if ( !this.state.hasAuth ) return null;//一开始渲染空组件

    return (
      <Route {...rest} path="/user" render={(props)=>{
        return this.state.auth ?
          //userdata 就是守卫时预先读取的数据 ，以props的形式传给目标组件，完成数据预载
          <Component {...props} userdata={this.state.userdata} /> :
          <Redirect to="/login" />
      }}/>
    )
  }

  componentDidMount(){
    fetch(`/data/auth.json`).then(
      res=>res.json()
    ).then(
      data => {
        setTimeout(()=>{
          this.setState({//数据更新后，会重新渲染
            hasAuth:true,
            auth:data.auth,
            userdata:data.data
          })
        },1000)
      }
    )
  }

}


export default AuthRoute