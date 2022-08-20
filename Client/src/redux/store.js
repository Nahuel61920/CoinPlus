import { configureStore } from "@reduxjs/toolkit";

import crypto from "./reducers/cryptoRed";

export default configureStore({
  reducer: {
    crypto,
  },
});
