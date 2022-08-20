import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const cryptoSlice = createSlice({
  name: "crypto",
  initialState: {
    cryptos: [],
  },
  reducers: {
    setCryptoList: (state, { type, payload }) => {
      state.cryptos = payload;
    },
  },
});

export const { setCryptoList } = cryptoSlice.actions;

export default cryptoSlice.reducer;

export const fetchCrypto = () => (dispatch) => {
  axios
    .get("http://localhost:3001/market")
    .then((res) => {
      dispatch(setCryptoList(res.data));
    })
    .catch((err) => console.log(err));
};
