import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit'
import { client } from '../api/client'

const initialState = {
  posts: [],
  status: 'idle',
  error: null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {

  console.log('fetch triggered');

  const response = await client.get('https://jsonplaceholder.typicode.com/posts')

  console.log(response.data)

  return response.data
})

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // omit existing reducers here
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        state.posts = state.posts.concat(action.payload)
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message as any
      })
  }
})

export default postsSlice.reducer

// export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions
