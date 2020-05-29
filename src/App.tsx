import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Child2, Child1 } from './Child';

type Props = {
  number: string
  Children: React.ReactNode
}

type Item = {
  id: number
  title: string
}

// const Child: React.FC<Props> = ({ number, children}) => {
  
//   return (
//   <p>{ number }の{ children }</p>
//   )
// }



const App: React.FC = () => {
  
  const message: string = 'こんにちは'
  const items: Item[] = [
    {
      id: 1,
      title: '一番高い商品'
    },{
      id: 2,
      title: 'ダサい商品'
    }
  ]
  const [ count, setCount] = useState<number>(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {message}
        </a>
      </header>
      <ul>
            { items.map((item: Item) => (
                <li key={item.id}>{ item.title }</li>
            )) }
            </ul>
      <Child1 />
      <Child2 />
      <div>{ count }</div>
      <div>
        <button onClick ={() => setCount(count+1)}>+1</button>
        <button onClick ={() => setCount(count-1)}>-1</button>
      </div>
    </div>
  );
}

export default App
