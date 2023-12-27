import {configureStore} from "@reduxjs/toolkit";

import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlice";
import itemsSlice from "./itemSlice";

const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag: bagSlice.reducer,
  }
});
export default myntraStore;