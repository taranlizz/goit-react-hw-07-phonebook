import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: {
    items: [],
    isLoading: false,
    error: false,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.error = false;
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, state => {
        state.error = true;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     list: [],
//   },
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         state.list.push(action.payload);
//       },
//       prepare(contact) {
//         return {
//           payload: {
//             ...contact,
//             id: nanoid(),
//           },
//         };
//       },
//     },
//     deleteContact(state, action) {
//       return {
//         list: state.list.filter(task => task.id !== action.payload),
//       };
//     },
//   },
// });

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// export const { addContact, deleteContact } = contactsSlice.actions;
// export const contactsReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );
