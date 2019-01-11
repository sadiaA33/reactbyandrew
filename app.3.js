const name = 'Andrew';

const title = name +"'s First React Element!";

const desc = 'I just learnt how to create a react node and render it into the DOM'

const myTitleID = 'main-title';


const header = (
   <header>
       <h1 id = { myTitleID } >{ title }</h1>
       <p className = 'main-desc'>{ desc }</p>
       {/*  <input value = {10*20}/> */}
   </header>
);
// Use className to apply a class that CSS can read.

ReactDOM.render(
   header,
   document.getElementById('root') //This renders the object into the div 'root'
);

/* THIS IS THE BABEL CONVERSION

'use strict';

var name = 'Andrew';

var title = name + "'s First React Element!";

var desc = 'I just learnt how to create a react node and render it into the DOM';

var myTitleID = 'main-title';

var header = React.createElement(
   'header',
   null,
   React.createElement(
       'h1',
       { id: myTitleID },
       title
   ),
   React.createElement(
       'p',
       null,
       desc
   )
);

ReactDOM.render(header, document.getElementById('root') //This renders the object into the div 'root'
);

*/



Collapse