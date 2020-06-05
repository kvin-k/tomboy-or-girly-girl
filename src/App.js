import React,{Component} from 'react';
import './App.css';
import BlocksList from './BlocksList';
import {info} from './info';
import {questions} from './questions';
import {results} from './results';

class App extends Component {

  constructor(){
    super();
    this.state={
      blocksData:[],
      score:0,
      showOverlay:false,
      counter:0,
      start:false,
    }
  }
  componentDidMount(){
    this.setState({blocksData:info});
  }
  getScoreToDispay=(scoreToAdd)=>{
    this.setState({showOverlay:true});
    setTimeout(()=>{
      this.setState({showOverlay:false});
    let newScore=this.state.score+scoreToAdd;
    this.setState({score:newScore});    
    this.setState({counter:(this.state.counter+1)});
    },1000);
  }
  getNewBlocks=(scoreToAdd)=>{
    
  }

  render(){
    const {blocksData,showOverlay,counter,score,start}=this.state;
    const blocksDataBatch = blocksData.filter((block,index)=>
      (index<((counter+1)*3))&&(index>=((counter)*3)));
      let resultEnd ;
      if(counter===10){
        for (var i = 0; i <results.length; i++) {
          if(score<=results[i].points){
            resultEnd= results[i];
            break;
          }
        }
        return(
          <div>
          <h1>Tomboy or girly Girly</h1>
          <div className='titles f1 b pa2'>{resultEnd.title}</div>
          <div className='titles f2 b pa2'>{resultEnd.result}</div>
          </div>
        );
      }
      if(start){
        return (
          <div>
          <h1>Tomboy or girly Girly</h1>      
          {score>0?<Scores scoreNew={`Score :${score}`}/>:null}
          <div className='fullBodyImages'>
          <BlocksList blocksData={blocksDataBatch} getScore={this.getScoreToDispay} showOverlay={showOverlay}/>
          </div>
          <div className='ba br-pill bw2 b--light-green dib br2 pa2 ma1 f3 b score'>{questions[counter].question}</div>
          </div>
          );
      }else{
        return(
          <>
          <h1>Tomboy or girly Girly</h1> 
        <div className='titles f1 b pa2'>Answers 10 questions</div>
        <div className='titles f1 b pa1'>Every answer will value FROM 1 TO 3 POINTS</div>
        <div className='titles f1 b pa2'>RESULTS AT THE END</div>
        <div className="f1 grow no-underline br-pill ph3 pv2 mb2 dib white bg-orange" onClick={()=>{
          this.setState({start:true})
        }}>Let's Play!</div>
        </>
        );
      }
      
    }
  }

  const Scores = ({scoreNew})=>{
    return(
    <div className='ba br-pill b--light-green dib br2 pa2 ma1 f3 b score'>{scoreNew}</div>
    )
  }
  export default App;
