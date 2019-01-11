const title = React.createElement(
    'h1',
    {id: 'main-title', title:'This is a title.'},
    'My first React element!'
 );
 console.log(title);
 //This is the same as <h1 id="main-title" title="This is a title.">My first React element!</h1>
 
 const desc = React.createElement(
    'p',
    null,
    'I just learnt how to create a React node and render it into the DOM.'
 );
 
 const header = React.createElement ( //This creates a Header with title and desc inside
    'header',
    null,
    title,
    desc
 )
 
 
 ReactDOM.render(
    header,
    document.getElementById('root') //This renders the object into the div 'root'
 );