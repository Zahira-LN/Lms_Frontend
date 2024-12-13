import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
  token:null,
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  refreshtoken :localStorage.getItem("token") || "",
  data: localStorage.getItem("data") || {},
  protected:false,

};


export const createAccount = createAsyncThunk(
  "/auth/register",
  async (data) => {
    try {
      const res = axiosInstance.post("users/register", data);
      toast.promise(res, {
        loading: "Wait! creating your account",
        success: (data) => {
          return data?.data?.message;
        },
        error: "failed to create account",
      });

      return (await res).data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "/auth/login",
  async (data, thunkAPI) => {
    try {
      const responsePromise = axiosInstance.post("/users/login", data);

      await toast.promise(responsePromise, {
        loading: "Wait! Logging into the app...",
        success: (res) => res.data.message || "Login successful!",
        error: "Failed to login",
      });

      const res = await responsePromise;
      return res.data;
    } catch (error) {
      toast.error("Unable to log in");
      return thunkAPI.rejectWithValue(error.response?.data || "Unknown error");
    }
  }
);

export const logout = createAsyncThunk('/auth/logout',async ()=>{
try {
  const response =  axiosInstance.post('/users/logout',{});
  
  await toast.promise(response, {
    loading: "Wait! Loggouting....",
    success: (res) => res.data.message || "Logout successfully",
    error: "Failed to Logout",
  });
} catch (error) {
  toast.error(error?.response?.data?.message);
}
})

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(loginUser.fulfilled ,(state,action)=>{
        localStorage.setItem("Token",JSON.stringify(action.payload.data?.accessToken));
        state.protected = true;
   
    })
    .addCase(logout.fulfilled,(state,action)=>{
      localStorage.setItem("Token","");
      state.refreshtoken = null;
      state.protected = false;
   
    })
  }
});

export const {} = authSlice.actions;
export const authSliceReducer = authSlice.reducer;
export { authSlice };
export default authSlice.reducer;
