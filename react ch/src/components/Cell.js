import React,{Component} from "react";

import '../assets/css/Cell.css'

class Cell extends Component {
  render() {
    return (
      <div className="cell">
			    		  <a href="#" className="cell-list">
			    		  	<img className="cell-img"/>
			    		  	<div>
			    		  		<h3>医疗服务</h3>
			    		  		<p className="service_time">只要998:<span>￥998</span></p>
			    		  		<p className="service_price">把它带回家<span></span></p>
			    		  	</div>
			    		  </a>
      </div>

			

			

			
    );
  }
}

export default Cell;