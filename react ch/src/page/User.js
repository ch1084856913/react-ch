import React from "react";
import '../assets/css/User.css'
export default class User extends React.Component{
    render(){
        return (
            <div className="user">
               <div className="my_top">
	    	        <a href="#"><img/></a>
	    	        <ul>
	    	            <li>您好,<span>Tora</span></li>
	    	             <li>当前积分：<span>89757</span></li>
	    	        </ul>
	            </div>
                <ul className="my_list">
                <li><a href="./Login">登陆</a></li>
                <li><a>哈士奇</a></li>
                <li><a>金毛</a></li>
                <li><a>萨摩</a></li>
                <li><a>泰迪</a></li>
                <li className="hide"><a>积分商城</a></li>
                <li><a>藏獒</a></li>
                <li><a>贵宾</a></li>               
                <li className="bgwhite"><a href="tel:15807197602">热线电话：110</a></li>
            </ul>
            </div>
        )
    }
}