import React,{Component} from 'react';
import NewsItem from './NewsItem';

export default class News extends Component{
    constructor(){
        super();
        this.state={
            articles:[],
            loading:true,
            page:1
        }
    }
    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=ce1ce8dae59444c8822305c6d0b8b2e4&page=1&pageSize=20`;
        let data= await fetch(url);
        let parsedData= await data.json();
        this.setState({articles:parsedData.articles,totalArticles:parsedData.totalResults});
    }

    previous= async ()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=ce1ce8dae59444c8822305c6d0b8b2e4&page=${this.state.page-1}&pageSize=20`;
        let data= await fetch(url);
        let parsedData= await data.json();
        this.setState({page: this.state.page-1,articles:parsedData.articles});
    }
    next= async ()=>{
        if(!(this.state.page+1>Math.ceil(this.state.totalArticles/20))){       
            let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=ce1ce8dae59444c8822305c6d0b8b2e4&page=${this.state.page+1}&pageSize=20`;
            let data= await fetch(url);
            let parsedData= await data.json();
            this.setState({page: this.state.page+1,articles:parsedData.articles});
        }        
    }
    
    render(){
        return(
            <div className='container my-3'>
                <h2 className='text-center my-3'>NewsQuater - Top Headlines</h2>
                <div className='row'>
                    {this.state.articles.map((element)=>{
                        return <div className='col-md-4' key={element.url}>
                                    <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} url={element.url}/>
                                </div>
                            
                    })}
                </div>
                <div className="d-flex justify-content-between my-3">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.previous}>&larr; Previous</button>
                    <button disabled={this.state.page+1>Math.ceil(this.state.totalArticles/20)} type="button" className="btn btn-dark" onClick={this.next}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}