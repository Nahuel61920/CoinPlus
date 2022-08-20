import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const cryptoSlice = createSlice({
  name: "crypto",
  initialState: {
    cryptos: [],
    details: {},
  },
  reducers: {
    setCryptoList: (state, { type, payload }) => {
      state.cryptos = payload;
    },
    cryptoDetail: (state, { type, payload }) => {
      console.log(payload);
      state.details = payload;
    },
  },
});

export const { setCryptoList, cryptoDetail } = cryptoSlice.actions;

export default cryptoSlice.reducer;

export const fetchCrypto = () => (dispatch) => {
  axios
    .get("http://localhost:3001/market")
    .then((res) => {
      dispatch(setCryptoList(res.data));
    })
    .catch((err) => console.log(err));
};

export const detailCrypto = (id) => (dispatch) => {
  console.log(id);
  axios
    .get(`http://localhost:3001/crypto/${id}`)
    .then((res) => {
      dispatch(cryptoDetail(res.data));
    })
    .catch((err) => console.log(err));
};
