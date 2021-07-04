import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // let person = {
  //   name : 'Mr. Himu',
  //   job : 'Coder'
  
  // }

  const names = ['Hridoy', 'Shahriar', 'Sajin', 'Rafi', 'Nayon'];
  const products = [{name: 'Samsung A50', price:'$300.00'}, {name: 'Xiaomi Note 9 Pro', price:'$275.00'}, {name: 'Samsung M20', price:'$200.00'}, {name: 'Oppo A12', price:'$120.00'}, {name: 'Realme C11', price:'$30.00'},];
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Counter></Counter>
        {
          products.map(product => <Products product={product}></Products>)
        }

        <ul>
        {
          names.map(name => <li>{name}</li>)
        }
        </ul>

        {
          names.map(name => <Person name={name}></Person>)
        }
        <Person name='Himu' job='Coder'></Person>
        <Person name='Rony' job='Engineer'></Person>
        <Person name={names[0]} job='Teacher'></Person>
        <Person name={names[2]} job='Professor'></Person>
        
        {/* <Person name={data[0].name)} job='Professor'></Person> */}
      </header>
    </div>
  );
}

function Person(props) {
  // let personStyle = {
  //   border : '1px solid yellow',
  //   padding : '10px',
  //   margin : '10px'
  // }

  return(
    <div style={{border : '2px solid red',padding : '10px',margin : '10px', width : '400px'
    }}>
      <h1>Name: {props.name}</h1>
      <h3>{props.job} of the year</h3>
    </div>
  );
}

function Products(props) {
  const name = props.product.name;
  const price = props.product.price;
  return(
    <div style= {{border: '1px solid white', padding: '50px ', margin: '10px', width: '400px', float: 'left', backgroundColor: '#0c4b33', color: 'white'}}>
      <h3>{name}</h3>
      <h1>{price}</h1>
      <button style={{padding:'10px'}}>Buy Now</button>
    </div>
  )
}

function Counter(props){
  const [count, setCount] = useState(10);
  return (
    <div>
      <h2>Count:{count}</h2>
    </div>
  )
}



export default App;
