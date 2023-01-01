'use client'

import { getPersonalRequest } from "@redux/slices/personalSlice";
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../src/redux/store';
// import { getPersonal } from '../src/services/apis/personal';

export default function Home() {
	
	const {personal} = useSelector((state:RootState)=> state.personal)
	const dispatch = useDispatch<AppDispatch>()
	useEffect(()=>{
		if(personal.status === 'idle'){
		dispatch(getPersonalRequest)}
		if(personal.status ==='success'){
			console.log(personal.data)
		}
	},[])



	
	return (
		<>
			<div>Index</div>
		</>
	)
}
