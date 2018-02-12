import React from 'react';
import './App.css';

class Card extends React.Component {
	constructor() {
  	super();
 		 this.state={items:[]};
  }
  componentDidMount(){
  	fetch(`https://my-json-server.typicode.com/mopilo/fakeData/posts`)
 		.then(result=>result.json())
    .then(items=>this.setState({items}))
  }
  render() {
  	return(
        <div className="container">
            <div className="row text-center">       

                {this.state.items.length ?
                    this.state.items
                        .map(item=>
                            <div className="col-8 col-sm-4" style={{display:"flex", flexWrap: "wrap"}}>
                                
                                    <div className="card mb-3">
                                        <img className="card-img-top" src={item.url} alt={item.title}/>
                                        <div className="card-body" key={item.id}>
                                            <h4 className="card-title">{item.title}</h4>
                                        </div>
                                    </div>  
                                
                            </div>
                        ) 
                    : <li>Loading...</li>
                }
        </div>
      </div>
   )
  }
}

export default Card;
