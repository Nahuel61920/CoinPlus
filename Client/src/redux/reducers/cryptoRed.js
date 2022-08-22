import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const cryptoSlice = createSlice({
  name: "crypto",
  initialState: {
    cryptos: [],
    cryptos2: [],
    details: {},
  },
  reducers: {
    setCryptoList: (state, { type, payload }) => {
      state.cryptos = payload;
    },
    cryptoDetail: (state, { type, payload }) => {
      state.details = payload;
    },
    nameCrypto: (state, { type, payload }) => {
      state.cryptos = payload;
    },
    filterPrice: (state, { type, payload }) => {
      state.cryptos2 = payload;
    },
  },
});

export const { setCryptoList, cryptoDetail, nameCrypto, filterPrice } =
  cryptoSlice.actions;

export default cryptoSlice.reducer;

export const fetchCrypto = () => (dispatch) => {
  axios
    .get("http://localhost:3001/crypto")
    .then((res) => {
      dispatch(setCryptoList(res.data));
    })
    .catch((err) => console.log(err));
};

export const detailCrypto = (id) => (dispatch) => {
  axios
    .get(`http://localhost:3001/crypto/${id}`)
    .then((res) => {
      dispatch(cryptoDetail(res.data));
    })
    .catch((err) => console.log(err));
};

export const Cryptoname = (name) => (dispatch) => {
  axios
    .get(`http://localhost:3001/crypto/?name=` + name)
    .then((res) => {
      dispatch(nameCrypto(res.data));
    })
    .catch((err) => console.log(err));
};

export const priceFilter = (min, max, tag_names) => (dispatch) => {
  axios
    .get(
      "http://localhost:3001/crypto/?min=" + min ||
        "http://localhost:3001/crypto/?max=" + max ||
        "http://localhost:3001/crypto/?tag_names=" + tag_names
    )
    .then((res) => {
      dispatch(filterPrice(res.data));
    })
    .catch((err) => console.log(err));
};
