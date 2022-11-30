import React from 'react'
import omit from 'lodash.omit'

export const useForm = () => {
	//Form values
	const [values, setValues] = React.useState({})
	//Errors
	const [errors, setErrors] = React.useState({})

	const validate = (name: string, value: string) => {
		//A function to validate each input values
		switch (name) {
			case 'name':
				if (!value || value.length > 30 || name.length < 2) {
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
					return 'The email must be a valid email address'
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

			default:
				break
		}
	}

	const validateFile = (name: string, file: File) => {
		var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i
		if (!file || !allowedExtensions.exec(file.type)) {
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

	//A method to handle form inputs
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		let name = event.target.name
		let val = event.target.value

		validate(name, val)

		//Let's set these values in state
		setValues({
			...values,
			[name]: val,
		})
	}

	//A method to handle form inputs for file
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			let name = event.target.name
			let file = event.target.files[0]

			validateFile(name, file)

			setValues({
				...values,
				[name]: file,
			})
		}
		return
	}

	return {
		values,
		errors,
		handleChange,
		handleFileChange,
	}
}
