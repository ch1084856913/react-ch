import React from "react";
import {Link, Route} from 'react-router-dom'
import "../assets/css/Product.css"
export default class Product extends React.Component{
    render(){
        return (
            <div className="Product">
               <ul className="pro_list clearfix">
            	<li>
            		<a href="">
            			<div className="product-img">
            				<img/>
            				
            			</div>
            			<p>售价：<span>9999999元</span></p>
            		</a>
            	</li>
            	<li>
            		<a href="">
            			<div className="product-img">
            				<img/>
            			
            			</div>
            			<p>售价：<span>99999元</span></p>
            		</a>
            	</li>
            	<li>
            		<a href="">
            			<div className="product-img">
            				<img/>
            		
            			</div>
            			<p>售价：<span>9999元</span></p>
            		</a>
            	</li>
            	<li>
            		<a href="">
            			<div className="product-img">
            				<img/>
            	
            			</div>
            			<p>售价：<span>9999元</span></p>
            		</a>
            	</li>
   
	        </ul>

            </div>
        )
    }
}