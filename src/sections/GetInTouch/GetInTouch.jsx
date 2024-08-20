import React from 'react'
import './GetInTouch.scss'
import imgSrc from '/images/14.png'
import Button from '../../components/Button/Button'
import { useForm } from 'react-hook-form'

const GetInTouch = () => {
	const { register, handleSubmit, resetField } = useForm()

	return (
		<section className='getintouch'>
			<div className='getintouch__image gradient-bg'>
				<img src={imgSrc} alt='' />
			</div>
			<div className='getintouch__right'>
				<div className='gradient-caption'>CONTACT US</div>
				<h2 className='heading-h2'>Get in Touch</h2>
				<div className='getintouch__text'>
					At VRNas, we're always happy to hear from our clients and potential
					clients. Whether you have a question about our VR services, want to
					discuss a potential project, or just want to say hello, we're here to
					help.
				</div>
				<form
					className='getintouch__form'
					onSubmit={handleSubmit(data => console.log(data))}
				>
					<input
						type='text'
						{...register('firstName')}
						placeholder='First Name'
					/>
					<input
						type='text'
						{...register('lastName')}
						placeholder='Last Name'
					/>
					<input type='email' {...register('email')} placeholder='Email' />
					<input type='tel' {...register('phone')} placeholder='Phone Number' />
					<textarea {...register('message')} placeholder='Message' rows={5} />
					<Button text='SEND MESSAGE' variant='bold filled' />
				</form>
			</div>
		</section>
	)
}

export default GetInTouch
