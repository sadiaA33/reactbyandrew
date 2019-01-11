//state
// class.make class rather function


const players = [{
    id:1,
        name: 'sadia',
        score: 50
    },

    { id:2,
        name: 'izma',
        score: 40
    },

    { id:3,
        name: 'areesha',
        score: 30
    },

    { id:3,
        name: 'akmal',
        score: 20
    },
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


class Counter extends React.Component { //class make the component dynamic.
    render(){ 
    return(
        <div className = "counter">
        <button className = "counter-action decrement">-</button>
        <span className = "counter-score">{this.props.score}</span> 
        <button className = "counter-action increment">+</button>
    </div>
    );}
}

const Player = (props)=>{
    return(
        <div className = "player">
        <span className = "player-name">
            {props.name}
        </span>
        <Counter score = {props.score} />
        </div>
    );
}



const App = (props)=>{
    return(
        <div className = 'scoreboard'>
        <Header title = "Scoreboard" totalPlayers ={props.initialPlayers.length}/>
        {/*Players List*/}
        {props.initialPlayers.map( player=>
        <Player name={player.name}
                score={player.score}
                key = {player.id.toString()}
                />
        )}


        </div>
    );
}


ReactDOM.render(
    <App  initialPlayers={players}/>,
    
    document.getElementById('root') 
);

