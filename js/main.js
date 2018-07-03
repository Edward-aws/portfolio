import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
  'title': "Ecommerce Website",
  'image':{
  'desc':"example screenshot of a project involving code",
  'src':"images/example1.png",
  'comment':""
  }
},
{
'title': "Portfolio with ReactJS using Lambda",
'image':{
'desc':"Serverless Portfolio",
'src':"images/example2.png",
'comment':""
  }
},
{
'title': "Serverless Projects",
'image':{
'desc':"example screenshot of a project involving cats",
'src':"images/example3.png",
'comment':""
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
