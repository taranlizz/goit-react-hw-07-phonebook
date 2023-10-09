import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65242012ea560a22a4e978ed.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(
        'Ooops... Something went wrong. Try reload the page.'
      );
    }
  }
);
