import React, { useEffect } from 'react'
import { RootState } from './store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import { fetchPosts } from './postsSlice'

export function Posts() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()


  useEffect(() => {
      dispatch(fetchPosts())
  }, [])

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}