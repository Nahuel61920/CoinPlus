import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const cryptoSlice = createSlice({
  name: "crypto",
  initialState: {
    cryptos: [],
    cryptoFilter: [],
    cryptoPrice: [],
    bestCrypto: [],
    details: [],
    category: [],
    isLoading: true,
    users: [],
    usuarios: [],
  },
  reducers: {
    setCryptoList: (state, { type, payload }) => {
      state.cryptos = payload;
      state.cryptoFilter = payload;
      state.isLoading = false;
    },

    setCryptoBest: (state, { type, payload }) => {
      state.bestCrypto = payload.sort((a, b) => b.volume_24h - a.volume_24h);
    },
    cryptoDetail: (state, { type, payload }) => {
      state.details = payload;
      state.isLoading = false;
    },
    nameCrypto: (state, { type, payload }) => {
      let nameCry =
        payload === ""
          ? state.cryptoFilter
          : state.cryptos.filter((cryptoFilter) => {
              return cryptoFilter.name
                .toLowerCase()
                .includes(payload.toLowerCase());
            });
      state.cryptos = nameCry;
      state.isLoading = false;
    },
    //cryptoOrder: (state, { type, payload }) => {
    //  let tag =
    //    payload === "All"
    //      ? state.cryptoFilter
    //      : state.cryptoFilter.filter((cryptoFilter) => {
    //          return cryptoFilter.tag_groups?.includes(payload);
    //       });
    //  state.cryptos = tag;
    //},
    allcryptoCategory: (state, { type, payload }) => {
      state.category = payload;
    },
    filterCategory: (state, { type, payload }) => {
      let categorys =
        payload === "All"
          ? state.cryptoFilter
          : state.cryptoFilter.filter((cryptoFilter) => {
              return cryptoFilter.tag_names.includes(
                payload.toLowerCase().replace(/ /g, "-")
              );
            });
      state.cryptos = categorys;
    },

    filterPlatform: (state, { type, payload }) => {
      let platforms =
        payload === "All"
          ? state.cryptoFilter
          : state.cryptos.filter((cryptoFilter) => {
              return cryptoFilter.tag_names.includes(
                payload.toLowerCase().replace(/ /g, "-")
              );
            });
      state.cryptos = platforms;
    },
    filterForPrice: (state, { type, payload }) => {
      if (payload === "min") {
        state.cryptos = state.cryptos.sort((a, b) => a.price - b.price);
      } else {
        state.cryptos = state.cryptos.sort((a, b) => b.price - a.price);
      }

      state.cryptos = state.cryptos.filter((crypto) => {
        return crypto.price > 0;
      });
    },

    filterForVolume: (state, { type, payload }) => {
      if (payload === "min") {
        state.cryptos = state.cryptos.sort(
          (a, b) => a.volume_24h - b.volume_24h
        );
      } else {
        state.cryptos = state.cryptos.sort(
          (a, b) => b.volume_24h - a.volume_24h
        );
      }

      state.cryptos = state.cryptos.filter((crypto) => {
        return crypto.volume_24h > 0;
      });
    },
    filterForPercentChange1h: (state, { type, payload }) => {
      // ordeno de min a meyor, con los numeros negativos
      if (payload === "min") {
        state.cryptos = state.cryptos.sort(
          (a, b) => a.percent_change_1h - b.percent_change_1h
        );
      } else {
        state.cryptos = state.cryptos.sort(
          (a, b) => b.percent_change_1h - a.percent_change_1h
        );
      }

      state.cryptos = state.cryptos.filter((crypto) => {
        return crypto.percent_change_1h;
      });
    },
    // ordenar por categoria
    filterForPercentChange24h: (state, { type, payload }) => {
      if (payload === "min") {
        state.cryptos = state.cryptos.sort(
          (a, b) => a.percent_change_24h - b.percent_change_24h
        );
      } else {
        state.cryptos = state.cryptos.sort(
          (a, b) => b.percent_change_24h - a.percent_change_24h
        );
      }

      state.cryptos = state.cryptos.filter((crypto) => {
        return crypto.percent_change_24h;
      });
    },
    filterForPercentChange7d: (state, { type, payload }) => {
      if (payload === "min") {
        state.cryptos = state.cryptos.sort(
          (a, b) => a.percent_change_7d - b.percent_change_7d
        );
      } else {
        state.cryptos = state.cryptos.sort(
          (a, b) => b.percent_change_7d - a.percent_change_7d
        );
      }

      state.cryptos = state.cryptos.filter((crypto) => {
        return crypto.percent_change_7d;
      });
    },
    filterForVolume24: (state, { type, payload }) => {
      if (payload === "min") {
        state.cryptos = state.cryptos.sort(
          (a, b) => a.volume_change_24h - b.volume_change_24h
        );
      } else {
        state.cryptos = state.cryptos.sort(
          (a, b) => b.volume_change_24h - a.volume_change_24h
        );
      }

      state.cryptos = state.cryptos.filter((crypto) => {
        return crypto.volume_change_24h;
      });
    },
    orderByName: (state, { type, payload }) => {
      if (payload === "asc") {
        state.cryptos = state.cryptos.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else {
        state.cryptos = state.cryptos.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }

      state.cryptos = state.cryptos.filter((crypto) => {
        return crypto.name;
      });
    },
    loadingSet: (state, { type, payload }) => {
      state.isLoading = true;
    },
    inventUser: (state, { type, payload }) => {
      state.usuarios = payload;
    },
    setUser: (state, { type, payload }) => {
      state.usuarios = payload;
    },
    getCryptoPrice: (state, {type, payload}) => {
      let nameChange = 
      state.cryptos.filter((c) =>{
        return c.name === payload
      })
      state.cryptoPrice = nameChange
    }
  },
});



export const {
  setCryptoList,
  cryptoDetail,
  nameCrypto,
  cryptoOrder,
  allcryptoCategory,
  filterCategory,
  filterPlatform,
  filterForPrice,
  filterForVolume,
  filterForVolume24,
  filterForPercentChange1h,
  filterForPercentChange24h,
  filterForPercentChange7d,
  orderByName,
  loadingSet,
  inventUser,
  setUser,
  setCryptoBest,
  getCryptoPrice
} = cryptoSlice.actions;

export default cryptoSlice.reducer;

export const fetchCryptoBest = () => (dispatch) => {
  axios
    .get("/crypto")
    .then((res) => {
      dispatch(setCryptoBest(res.data));
    })
    .catch((err) => console.log(err));
};

export const fetchCrypto = () => (dispatch) => {
  axios
    .get("/crypto")
    .then((res) => {
      dispatch(setCryptoList(res.data));
    })
    .catch((err) => console.log(err));
};



export const detailCrypto = (id) => (dispatch) => {
  axios
    .get(`/crypto/${id}`)
    .then((res) => {
      dispatch(cryptoDetail(res.data));
    })
    .catch((err) => console.log(err));
};

export const categoryCrypto = (id) => (dispatch) => {
  axios
    .get(`/category`)
    .then((res) => {
      dispatch(allcryptoCategory(res.data));
    })
    .catch((err) => console.log(err));
};

export const filterCategories = (payload) => (dispatch) => {
  dispatch(filterCategory(payload));
};

export const filterPlatforms = (payload) => (dispatch) => {
  dispatch(filterPlatform(payload));
};

export const Cryptoname = (name) => (dispatch) => {
  try {
    dispatch(nameCrypto(name));
  } catch (error) {
    console.log(error);
  }
};

/* export const orderCrypto = (payload) => (dispatch) => {
  try {
    dispatch(cryptoOrder(payload));
  } catch (error) {
    console.log(error);
  }
}; */

// filter price
export const filterPrice = (payload) => (dispatch) => {
  dispatch(filterForPrice(payload));
};
// filter volume
export const filterVolume = (payload) => (dispatch) => {
  dispatch(filterForVolume(payload));
};
// filtro percent_change_1h
export const filterPercentChange1h = (payload) => (dispatch) => {
  dispatch(filterForPercentChange1h(payload));
};

// filtro percent_change_24h
export const filterPercentChange24h = (payload) => (dispatch) => {
  dispatch(filterForPercentChange24h(payload));
};

// filtro percent_change_7d
export const filterPercentChange7d = (payload) => (dispatch) => {
  dispatch(filterForPercentChange7d(payload));
};

// filtro last 7 days

export const filterVolume24 = (payload) => (dispatch) => {
  dispatch(filterForVolume24(payload));
};

// order for name
export const orderName = (payload) => (dispatch) => {
  dispatch(Cryptoname(payload));
};

// borrar el estado de detalles
export const cleanState = () => (dispatch) => {
  dispatch(cryptoDetail([]));
};

// loading

export const activateLoading = () => (dispatch) => {
  dispatch(loadingSet());
};

// Coloca la informacion de Auth0 en el estado global y la BD
export const createUser = (payload) => (dispatch) => {
  dispatch(inventUser(payload));
  axios.post("/profile", payload)
  .catch((err) => console.log(err));
};

// Obtiene datos BD y los coloca en el estado global
export const getUser = (payload) => (dispatch) => {
  // console.log("cryptoRed(getUser)----->"+payload)
  axios
    .get(`/profile?email=${payload}`)
    .then((res) => {
      dispatch(setUser(res.data));
    })
    .catch((err) => console.log(err));
};

// Obtiene datos del formulario y los coloca en la BD y el estado glocal
export const updateUser = (payload) => (dispatch) => {
  dispatch(inventUser(payload));
  axios.put("/profile", payload).catch((err) => console.log(err));
};

export const postComent = (payload) => (dispatch) => {
  console.log(payload)
  axios.post("/comment", payload).catch((err) => console.log(err));
  
};

export const findPrice = (payload) => (dispatch) => {
  dispatch(getCryptoPrice(payload));
}

