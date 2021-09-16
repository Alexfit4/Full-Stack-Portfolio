import React from 'react';

import { useForm, ValidationError } from '@formspree/react';
export default function Contact() {
	const [state, handleSubmit] = useForm('moqyrdld');
	if (state.succeeded) {
		return <p>Thanks for joining!</p>;
	}
	return (
		<div id='contact' className=''>
			<div className='flex justify-center items-center h-screen w-full'>
				<div className='contact-content sm:w-1/2 md:w-1/2  bg-white rounded md:border-2 border-2 shadow-2xl p-8 m-4 '>
					<h1 className='block text-center md:text-4xl font-bold tracking-widest mb-10 mb-6'>
						CONTACT ME
					</h1>
					<form onSubmit={handleSubmit}>
						<div className='flex flex-col mb-4'>
							<label
								className='mb-2 font-bold text-lg text-gray-900'
								for='first_name'>
								First Name
							</label>
							<input
								className='border py-2 px-3 text-grey-800'
								type='text'
								name='first_name'
								id='first_name'
							/>
						</div>
						<div className='flex flex-col mb-4'>
							<label
								className='mb-2 font-bold text-lg text-gray-900'
								for='last_name'>
								Last Name
							</label>
							<input
								className='border py-2 px-3 text-grey-800'
								type='text'
								name='last_name'
								id='last_name'
							/>
						</div>
						<div className='flex flex-col mb-4'>
							<label
								className='mb-2 font-bold text-lg text-gray-900'
								htmlFor='email'>
								Email
							</label>
							<input
								className='border py-2 px-3 text-grey-800'
								type='email'
								name='email'
								id='email'
							/>
							<ValidationError
								prefix='Email'
								field='email'
								errors={state.errors}
							/>
						</div>
						<div className='flex flex-col mb-4'>
							<label className='mb-2 font-bold text-lg text-gray-900'>
								Message
							</label>
							<textarea
								className='mb-2 border py-2 px-3 text-grey-800'
								id='message'
								name='message'
							/>

							<ValidationError
								prefix='Message'
								field='message'
								errors={state.errors}
							/>
						</div>
						<button
							className='block border text-grey-800 text-grey-800 text-black uppercase md:text-lg md:mx-auto mx-auto md:p-4 rounded'
							type='submit'
							disabled={state.submitting}>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
