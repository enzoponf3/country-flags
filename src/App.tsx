import './App.css'
import Header from './components/header'
import { Route } from 'wouter'

function App () {
  return (
    <div className="App">
      <Route path="/country/:name" />
      <Header />
    </div>
  )
}

export default App
