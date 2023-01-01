import { CommonInitialState } from '@redux/interfaces/CommonInterface'
import { PersonalObjectInterface } from '@redux/interfaces/PersonalInterface'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPersonal } from '@services/apis/personal';

export interface PersonalInterfaceState extends CommonInitialState {
	data: PersonalObjectInterface[]
}

export interface InitialStatePersonal {
	personal: PersonalInterfaceState
}

const initialState: InitialStatePersonal ={
  personal:{
    data:[
      {
      id:undefined,
      worker: '',
      position: '',
      frente: '',
      contract_code:undefined,
      activity: ''
    }],
    status:'idle'
  }
}

export const getPersonalRequest= createAsyncThunk(
  'personal/getPersonalRequest',async (_,{rejectWithValue})=>{
  try {
    const personalResponse = await getPersonal()
    return personalResponse
  } catch (error:any) {
    if(!error.response){
      throw error
    }
    return rejectWithValue(error.response.data)
    }
  }
)

export const personalSlice = createSlice({
  name:'personal',
  initialState,
  reducers:{},
  extraReducers(builder) {
    builder.addCase(getPersonalRequest.fulfilled, (state,{payload}) => {
      state.personal.status='success',
      state.personal.data = payload
    })
  },
})

export default personalSlice.reducer