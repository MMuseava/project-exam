import React, {useState} from 'react'
import CustomButton from '../components/customButton/CustomButton'


export const CounterApp = () => {
    const [count, setCount] = useState(0)


    const onMinusClick = () => {
        setCount(count-1)
    }
    const onPlusClick = () => {
        setCount(count+1)
    }
  return (
      <div className='counter'>
          <CustomButton text={"- "} onClickHandler={onMinusClick} />
          <h1>{count }</h1>
          <CustomButton text={"+"} onClickHandler={onPlusClick}/>
    </div>
  )
}
