
 const Header = (props)=>{
    console.log(props)
    return(
        <header>
            <h1>{props.title}</h1>
            <span className = "stats">Players: {props.totalPlayers}</span>
        </header>
    );
 }
 class Counter extends React.Component {
    state = {
        score:0
    };
    incrementScore=()=>{
        this.setState(prevState=>({
        score:prevState.score+1
        }))
    }
    //do the same with decrement at home done
    decrementScore=()=>{
        this.setState(prevState=>({
        score:prevState.score-1
        }))
    }

    render(){
        return (
        <div className = "counter">
        <button className = "counter-action decrement" onClick={()=>this.decrementScore()}>-</button>
        <span className = "counter-score">{this.state.score}</span>
        <button className = "counter-action increment" onClick={()=>this.incrementScore()}>+</button>
    </div>
    );}
 }
 const Player = (props)=>{
    return(
        <div className = "player">
        <span className = "player-name">
            {props.name}
        </span>
        <Counter />
        </div>
    );
 }
 class App extends React.component{
     state ={
         players:[
             {  name:'le',  id:1},
             {  name:"stuart",  id:2},
             {  name :'dan',  id:3},
             { name:'dean',  id:4}

         ]
     }

 
     render(){
         return(
             <div className = "scoreboard">
          
           <Header title="scoreboard" totalPlayers={ props.initialPlayers.length}/>
        
        {props.initialplayers.map(player =>
        <Player  name={player.name}
                     key={player.id.toString()}  />
         )}
         </div> 
         )}}



     
/*const App = (props)=>{
    return(
        <div className = 'scoreboard'>
        <Header title = "Scoreboard" totalPlayers = {this.state.players.length}
            //{props.initialPlayers.length}/> changed total playersto above syntax.this.state etc.
        /> 
        {/*Players List*///}
       
      // {this.state.players.map( player=> //i changed it from {props.initialPlayers.map( player=>
       // <Player name = {player.name}
             //  key = {player.id.toString()}
                ///>
       // )}
     //   </div>
  //  );
// }
 ReactDOM.render(
    //<App initialPlayers = {players}/>,
    <App/>,
    document.getElementById('root')
 );
 