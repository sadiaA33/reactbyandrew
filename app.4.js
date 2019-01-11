function Header(){
    return(
        <header>
            <h1>Scoreboard</h1>
            <span className = "stats">Players: 1</span>
        </header>
    );
 }
 
 ReactDOM.render(
    <Header />,
    document.getElementById('root')
 );
 
 
 /* BABEL
 
 function Header() {
    return React.createElement(
        "header",
        null,
        React.createElement(
            "h1",
            null,
            "Scoreboard"
        ),
        React.createElement(
            "span",
            { className: "stats" },
            "Players: 1"
        )
    );
 }
 
 ReactDOM.render(React.createElement(Header, null),
 document.getElementById('root')); */