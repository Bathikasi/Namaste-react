let main=React.createElement('div',{id:"main"},
     React.createElement('div',{id:"child"},
       [React.createElement('h1',{id:"heading"},'This is Heading tag by React'),
        React.createElement('h2',{id:"heading2"},'this is heading 2'),]
   
)
);

let root=ReactDOM.createRoot(document.getElementById('root'));
root.render(main);



