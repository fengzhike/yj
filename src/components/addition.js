import React from 'react'
import ProTypes from 'prop-types'


const addition =({onAChange,onBChange,a,b,c})=>(
	<div>
		<input onChange = {onAChange} value = {a}/>
		+
		<input onChange = {onAChange} value = {b}/>
		=
		<input onChange = {onAChange} value = {c}/>
	</div>
)

export default addition