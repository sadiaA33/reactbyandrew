const title = <h1>My first React Element!</h1> //This is JSX, using mark-up to create elements

const desc = <p>I just learnt how to create a react node and render it into the DOM</p>

const header = (<header>
<h1>My First react element</h1>
<p>I just learnt how to create a react node and render it into the DOM</p>
</header>
);


ReactDOM.render(
   header,
   document.getElementById('root') //This renders the object into the div 'root'
);