import React from "react";


export default class Detail extends React.Component{
    render(){
        let {match,location}=this.props  
        return (
            <div className="Detail">
                <h3>Detail</h3>
                <div>参数: {match.params.id}</div>
                 <div>数据: {location.search}</div>
        
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props.match.params.id);
        console.log(this.props.location.search);
       
      }
}