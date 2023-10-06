import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  status: false,
  error: "",
};

export const createBookApi = createAsyncThunk(
  "createBookApi",
  async payload => {
    try {
      let { data } = await axios.post("http://localhost:5000/books", payload);
      return data;
    } catch (err) {
      return err.message;
    }
  }
);

export const getBooksApi = createAsyncThunk("getBooksApi", async () => {
  try {
    let { data } = await axios.get("http://localhost:5000/books");
    return data;
  } catch (err) {
    return err.message;
  }
});

export const deleteBooksApi = createAsyncThunk("deleteBooksApi", async id => {
  try {
    let { data } = await axios.delete(`http://localhost:5000/books/${id}`);
    return data;
  } catch (err) {
    return err.message;
  }
});

//singleBook
export const singleBookApi = createAsyncThunk("singleBookApi", async id => {
  try {
    let { data } = await axios.get(`http://localhost:5000/books/${id}`);
    return data;
  } catch (err) {
    return err.message;
  }
});

//updateBook
export const updateBookApi = createAsyncThunk(
  "updateBookApi",
  async payload => {
    try {
      let { data } = await axios.put(
        `http://localhost:5000/books/${payload.id}`,
        payload
      );
      return data;
    } catch (err) {
      return err.message;
    }
  }
);

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: builder => {
    // create book
    builder
      .addCase(createBookApi.pending, state => {
        state.status = true;
      })
      .addCase(createBookApi.fulfilled, (state, action) => {
        state.status = false;
        state.data.push(action.payload);
      })
      .addCase(createBookApi.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
      });

    //fetch books
    builder
      .addCase(getBooksApi.pending, state => {
        state.status = true;
      })
      .addCase(getBooksApi.fulfilled, (state, action) => {
        state.status = false;
        state.data = action.payload;
      })
      .addCase(getBooksApi.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
      });

    // deleteBookApi
    builder
      .addCase(deleteBooksApi.pending, state => {
        state.status = true;
      })
      .addCase(deleteBooksApi.fulfilled, (state, action) => {
        state.status = false;
        const { id } = action.payload;
        if (id) {
          return (state.data = state.data.filter(item => item.id !== id));
        }
      })
      .addCase(deleteBooksApi.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
      });
    // single fetch book
    builder
      .addCase(singleBookApi.pending, state => {
        state.status = true;
      })
      .addCase(singleBookApi.fulfilled, (state, action) => {
        state.status = false;
        state.data = action.payload;
      })
      .addCase(singleBookApi.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
      });
    //update book
    builder
      .addCase(updateBookApi.pending, state => {
        state.status = true;
      })
      .addCase(updateBookApi.fulfilled, (state, action) => {
        state.status = false;
        state.data.push(action.payload);
      })
      .addCase(updateBookApi.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
      });
  },
});

export default bookSlice.reducer;
