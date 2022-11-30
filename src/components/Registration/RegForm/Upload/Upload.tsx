import React from 'react'

export const Upload = () => {
	const [file, setFile] = React.useState<File>()

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) {
			return
		}

		setFile(e.target.files[0])
	}

	return (
		<>
			<input
				type='file'
				name='photo'
				id='file-btn'
				accept='image/jpeg,image/jpg'
				style={{ display: 'none' }}
				onChange={handleFileChange}
			/>
			<label htmlFor='file-btn' className='file-btn-name'>
				Upload
			</label>
			<span className='file-name'>
				{file ? `${file.name}` : 'Upload your photo'}
			</span>
		</>
	)
}
