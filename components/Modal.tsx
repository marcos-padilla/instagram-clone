'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
interface ModalProps {
	isOpen: boolean
	onClose: () => void
	children: React.ReactNode
	addClose?: boolean
}

export default function Modal({
	isOpen,
	onClose,
	children,
	addClose,
}: ModalProps) {
	return (
		<Transition.Root show={isOpen} as={Fragment}>
			<Dialog as='div' className='relative z-50' onClose={onClose}>
				<Transition.Child
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div
						className='fixed inset-0 bg-neutral-800 bg-opacity-75 transition-opacity
            '
					/>
				</Transition.Child>

				<div className='fixed inset-0 z-10 overflow-y-auto'>
					<div className='flex min-h-full items-center justify-center p-4 text-center sm:p-0'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
							enterTo='opacity-100 translate-y-0 sm:scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 translate-y-0 sm:scale-100'
							leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
						>
							<Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-black text-white text-left shadow-xl transition-allw-full sm:my-8 sm:w-full sm:max-w-lg'>
								{addClose && (
									<div className='absolute right-2 top-2'>
										<button onClick={onClose}>
											<AiOutlineClose />
										</button>
									</div>
								)}
								{children}
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	)
}
