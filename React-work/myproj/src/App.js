import './App.css';
import MyList from './Components/myList';
export default function App(){
var x = Math.random()*10;
return(<div>
  <h1>
    The Value of x is {x}
  </h1>
  <MyList/>
</div>)
}

