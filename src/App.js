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
        <div class="container">
            <div class="row text-center">       

                {this.state.items.length ?
                    this.state.items
                        .map(item=>
                            <div class="col-8 col-sm-4" style={{display:"flex", flexWrap: "wrap"}}>
                                
                                    <div class="card mb-3">
                                        <img class="card-img-top" src={item.url} alt={item.title}/>
                                        <div class="card-body" key={item.id}>
                                            <h4 class="card-title">{item.title}</h4>
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
