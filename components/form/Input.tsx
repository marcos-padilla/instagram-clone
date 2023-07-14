'use client'

interface InputProps {
	type?: 'text' | 'email' | 'password'
	value: string
	onChange: (e: any) => void
	placeholder?: string
	name: string
}

export default function Input({
	type,
	value,
	onChange,
	placeholder,
	name,
}: InputProps) {
	return (
		<input
			name={name}
			type={type || 'text'}
			placeholder={placeholder || ''}
			className='bg-gray-50 border-neutral-300 border px-4 py-2 focus:outline-none focus:border-neutral-400'
			value={value}
			onChange={onChange}
		/>
	)
}
