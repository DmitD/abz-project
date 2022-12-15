import React from 'react'
import classNames from 'classnames'

type UploadProps = {
	photo: File | undefined
	error: string
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Upload: React.FC<UploadProps> = ({
	photo,
	error,
	handleChange,
}) => {
	return (
		<>
			<div className='file'>
				<input
					type='file'
					name='photo'
					id='file-btn'
					accept='image/jpeg, image/jpg'
					style={{ display: 'none' }}
					onChange={handleChange}
				/>
				<label
					htmlFor='file-btn'
					className={classNames('file--btn-name', {
						'file-error-brd': error,
					})}
				>
					Upload
				</label>
				<span
					className={classNames('file--placeholder-name', {
						'file-error-brd': error,
					})}
				>
					{photo ? `${photo.name}` : 'Upload your photo'}
				</span>
			</div>
			<div className='file-error'>
				<small>{error ? `${error}` : ''}</small>
			</div>
		</>
	)
}
