import React from 'react'
import omit from 'lodash.omit'
import { ErrorsFormType, ValuesFormType } from '../types'
import { Context } from '../index'

export const useForm = (callback: () => void) => {
	const { store } = React.useContext(Context)
	//Form values
	const [values, setValues] = React.useState<ValuesFormType>({
		position: 'Lawyer', //store.positions[0].name,
	})
	//Errors
	const [errors, setErrors] = React.useState<ErrorsFormType>({})

	const validate = (
		event: React.ChangeEvent<HTMLInputElement>,
		name: string,
		value: string
	) => {
		//A function to validate each input values
		switch (name) {
			case 'name':
				if (!value) {
					// we will set the error state
					setErrors({
						...errors,
						name: 'Name is required field',
					})
				} else if (value.length > 30 || value.length < 2) {
					// we will set the error state
					setErrors({
						...errors,
						name: 'Username should be 2-30 characters',
					})
				} else {
					// set the error state empty or remove the error for username input
					//omit function removes/omits the value from given object and returns a new object
					let newObj = omit(errors, 'name')
					setErrors(newObj)
				}
				break

			case 'email':
				const patternEmail =
					/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
				if (!value) {
					setErrors({
						...errors,
						email: 'Email is required field',
					})
				} else if (value.length > 30 || !patternEmail.test(value)) {
					setErrors({
						...errors,
						email: 'The email must be a valid email address',
					})
				} else {
					let newObj = omit(errors, 'email')
					setErrors(newObj)
				}
				break

			case 'phone':
				const patternPhone = /^[\+]{0,1}380([0-9]{9})$/
				if (!value) {
					setErrors({
						...errors,
						phone: 'Phone is required field',
					})
				} else if (!patternPhone.test(value)) {
					setErrors({
						...errors,
						phone: 'User phone number, should start with code +380',
					})
				} else {
					let newObj = omit(errors, 'phone')
					setErrors(newObj)
				}
				break

			// case 'position':
			// 	if (!value) {
			// 		setErrors({
			// 			...errors,
			// 			position: 'Select your position',
			// 		})
			// 	} else {
			// 		let newObj = omit(errors, 'phone')
			// 		setErrors(newObj)
			// 	}
			// 	break

			case 'photo':
				if (event.target.files) {
					let file = event.target.files[0]
					let img = new Image()
					img.src = window.URL.createObjectURL(file)
					img.onload = () => {
						if (img.width < 70 && img.height < 70) {
							setErrors({
								...errors,
								photo: 'Minimum size of photo 70x70px',
							})
						}
					}
					if (file.type !== 'image/jpg') {
						setErrors({
							...errors,
							photo: 'Invalid file type',
						})
					} else if (file.size > 5242880) {
						setErrors({
							...errors,
							photo: 'File format jpg up to 5 MB',
						})
					} else {
						let newObj = omit(errors, 'photo')
						setErrors(newObj)
					}
				}
				break

			default:
				break
		}
	}

	//A method to handle form inputs
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		let name = event.target.name
		let val = event.target.value

		validate(event, name, val)

		//Let's set these values in state
		if (event.target.files) {
			let file = event.target.files[0]
			setValues({
				...values,
				[name]: file,
			})
		} else {
			setValues({
				...values,
				[name]: val,
			})
		}
	}

	const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
		if (event) event.preventDefault()

		if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
			callback()
		} else {
			alert('There is an Error!')
		}
	}

	return {
		values,
		errors,
		handleChange,
		handleSubmit,
	}
}
