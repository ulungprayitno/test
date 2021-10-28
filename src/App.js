import { useState } from 'react';
import './App.css';

function App() {

  // const findElement = (arr) => {
  //   let idx = -1
  //   let set = new Set()
  //   arr.map((item, i) => {
  //     if(set.has(item)) idx = i
  //     else set.add(item)

  //     return idx
  //   })
  // }

  const names = [
    {id: 1, name: "Agung"},
    {id: 2, name: "Boby"},
    {id: 3, name: "Danu"},
    {id: 4, name: "Cika"},
    {id: 5, name: "Andre"},
  ]

  const [account, setAccount] = useState(names)

  const searchAccount = (value) => {
    const ressult = names.filter(n => n.name.includes(value))
    setAccount(ressult)
  }

  return (
    <div className="App" style={{marginTop: '4em'}}>
      
      <form>
        <input type='text' onChange={(e) => searchAccount(e.target.value)} placeholder='search' />
      </form>

      <div style={{paddingTop : '2em'}}>
        { account.map(item => (
          <div key={item.id}>
            {item.name}
          </div>
        )) }
      </div>
    </div>
  );
}

export default App;
