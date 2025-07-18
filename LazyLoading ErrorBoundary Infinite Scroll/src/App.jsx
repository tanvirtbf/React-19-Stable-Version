import React from 'react'
import './App.css'
import List from './pages/list'
import Detail from './pages/detail'
import Cart from './pages/cart'


function App() {

  const [selectedProduct, setSelectedProduct] = React.useState(null)
  const [isCartPage, setIsCartPage] = React.useState(false)

  return (
    <div>
      <List />
      {selectedProduct && <Detail />}
      {isCartPage && <Cart />}
    </div>
  )
}

export default App
