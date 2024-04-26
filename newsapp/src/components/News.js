import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    constructor(){
        super();
console.log("i am a constructor");
this.state={
    articles:[],
    loading:false
}
    }
    async componentDidMount(){
        console.log("cdm");
        let url="https://newsapi.org/v2/top-headlines?country=in&apikey=dbe57b028aeb41e285a226a94865f7a7";
        let data= await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
       this.setState({articles:parsedData.articles})
    }
  render() {
    
    return (
      <div className='container my-3'>
         <h2>News-top headlines</h2>
        <div className='rows'>
            {this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
 <NewsItems  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} />
       </div>
            })}
        </div> 
      
      </div>
    )
  }
}

export default News