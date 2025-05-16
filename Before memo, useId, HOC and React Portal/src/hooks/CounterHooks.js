export const counter = () => {
  let count = 0
  let message = `Count is ${count}`
  function inCreaseCount(){
    count++
  }

  return [message, inCreaseCount]
}

