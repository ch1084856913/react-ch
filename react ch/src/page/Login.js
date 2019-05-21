import React from "react";
import '../assets/css/Login.css';
import {Link} from 'react-router-dom';

export default class Detail extends React.Component{
    render(){
        return (
            <div className="login">
                <div className="log_banner">
                </div>
                <form>
    		<div className="yhmm">
    			<label className="label1"></label><input type="text" name="phone" placeholder="请输入手机号"/> 
    		</div>
    		<div className="yhmm">
    			<label className="label2"></label><input type="text" name="password" placeholder="请输入密码"/> 
    		</div>
    		<div className="wj">
                <Link className="wjmm" to="/reg">忘记密码？</Link>
    		</div>
    		<div className="dl">
    			<a className="tjan">登录</a>
    		</div>
    		<div className="qx">
    			<Link className="tjan" to="/reg">注册</Link>
    		</div>
    	</form>
            </div>
        )
    }
}