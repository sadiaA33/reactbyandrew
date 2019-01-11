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
        <span className = "counter-score">{props.playerScore}</span>
        <button className = "counter-action increment">+</button>
    </div>
    )
}

const Player = (props)=>{
    return(
        <div className = "player">
        <span className = "player-name">
            {props.playerName}
        </span>
        <Counter playerScore = {props.playerScore} />
        </div>
    );
}

const App = ()=>{
    return(
        <div className = 'scoreboard'>
        <Header title = "Scoreboard" totalPlayers ={1}/>
        {/*Players List*/}
        <Player playerName = 'sadia' playerScore = {35}/>
        <Player playerName = 'Izma' playerScore = {10}/>
        <Player playerName = 'Areesha' playerScore = {29}/>
        <Player playerName = 'Akmal' playerScore = {29}/>

        </div>
    )
}


ReactDOM.render(
    <App />,
    
    document.getElementById('root') 
);

