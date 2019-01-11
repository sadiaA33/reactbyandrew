const players = [
    {   id: 1, 
        name: 'Sadia', 
        score: 50
    },
    {   id: 2, 
        name: 'Izma', 
        score: 40
    },
    {   id: 3, 
        name: 'Areesha', 
        score: 30
    },
    {   id: 4, 
        name: 'Akmal', 
        score: 20
    }
]
 

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
    incrementScore(){
        this.setState({
        score:this.state.score+1
        })
    }
    decrementScore(){
        this.setState({
        score:this.state.score-1
        })
    }
    render(){
        return (
        <div className = "counter">
        <button className = "counter-action decrement" onClick={this.decrementScore.bind(this)}>-</button>
        <span className = "counter-score">{this.state.score}</span> 
        <button className = "counter-action increment" onClick={this.incrementScore.bind(this)}>+</button>
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

const App = (props)=>{
    return(
        <div className = 'scoreboard'>
        <Header title = "Scoreboard" totalPlayers ={props.initialPlayers.length}/>
        {/*Players List*/}
        {props.initialPlayers.map( player=>
        <Player name = {player.name}
                
                key = {player.id.toString()}
                />
        )}

        </div>
    );
}


ReactDOM.render(
    <App initialPlayers = {players}/>,
    
    document.getElementById('root') 
);
