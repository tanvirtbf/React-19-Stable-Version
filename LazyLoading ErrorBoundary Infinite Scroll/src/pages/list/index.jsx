import { useEffect } from 'react'
import useNetWork from '../../network/useNetwork'
import './style.css'

const List = () => {
  const network = useNetWork()
  const { get, error, data, isLoading } = network

  useEffect(() => {
    get()
  }, [])

  if(data) {
    return (
      <div className='list'>
        {data.map((item) => {
          return (
            <div key={item.id} className='list-item'>
              <h2>{item.name}</h2>
              <p>库存：{item.amount}</p>
            </div>
          )
        })}
      </div>
    )
  }


  return (
    <div>List</div>
  )
}

export default List