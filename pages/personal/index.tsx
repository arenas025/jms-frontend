	import { AppDispatch, RootState } from '@redux/store'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPersonalRequest } from '@redux/slices/personalSlice';
  
const index = () => {
  const {personal} = useSelector((state:RootState)=> state.personal)
	const dispatch = useDispatch<AppDispatch>()
	useEffect(()=>{
		if(personal.status === 'idle'){
		dispatch(getPersonalRequest())}
	},[])
  useEffect(()=>{
    console.log(personal.status)
    console.log(personal.data)
  },[personal.status])
    return (
      <div>index</div>
    )
  }
  
export default index
  
