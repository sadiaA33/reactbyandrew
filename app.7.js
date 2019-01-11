const players = [{
        name: 'sadia',
        score: 50
    },

    {
        name: 'izma',
        score: 40
    },

    {
        name: 'areesha',
        score: 30
    },

    {
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


const Counter = (props)=>{
    return(
        <div className = "counter">
        <button className = "counter-action decrement">-</button>
        <span className = "counter-score">{props.score}</span>
        <button className = "counter-action increment">+</button>
    </div>
    )
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
                score={player.score}/>
        )}


        </div>
    );
}


ReactDOM.render(
    <App  initialPlayers={players}/>,
    
    document.getElementById('root') 
);
//we can map things together
