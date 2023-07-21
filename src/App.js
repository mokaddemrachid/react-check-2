import './App.css';
import products from './product';
import Name from './components/name';
import Image from './components/image';
import Price from './components/price';
import Description from './components/description';
import Card from 'react-bootstrap/Card';

const firstName = "Rachid";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Card style={{ width: '18rem' }}>
     <Card.Img variant="top"/> 
     <Image image={products.image}/> 
      <Card.Body>
        <Card.Title>  
          <Name name={products.name}/>  
        </Card.Title>
        <Card.Text>
          <Description description={products.description}/>
        </Card.Text>
        <Card.Text>
          <Price price={products.price}/>
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    <h3 style={{ textAlign: "center" }}>
        Hello, {firstName ? firstName : "there"}!
      </h3>
      {console.log(products)}
      </header>
    </div>
  );
}

export default App;
