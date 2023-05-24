import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppDataTypes } from "./appDataTypes";

const initialState: AppDataTypes = {
  language: "en",
  sideOpen: true,
  searchData: {
    search: '',
    data: null
  },
  data: {
    selected: false,
    id: null,
    title: "",
    chapter_title: "",
    chapters: []
  },
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setToggleSidebar(state, action: PayloadAction<boolean>) {
      state.sideOpen = action.payload;
    },    
    setSearch(state, action: PayloadAction<any>) {
      state.searchData = action.payload;
    },     
    setLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload;
    },
    setSelectedData(state, action: PayloadAction<any>) {
      console.log(action.payload);
      state.data = action.payload;
    },
  },
});

export default appSlice.reducer;
export const {setToggleSidebar, setLanguage, setSelectedData, setSearch } = appSlice.actions;
