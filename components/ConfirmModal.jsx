import React, { Fragment } from 'react'
import { Transition, Dialog } from '@headlessui/react'

const ConfirmModal = ({ isOpen, closeModal }) => (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <span className="inline-block h-screen align-middle" aria-hidden="true">
          &#8203;
        </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Are you sure you want to delete this item?
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Once you delete this item, it will be permanently deleted.
                  </p>
                </div>
                <div className="flex justify-center mt-4 gap-x-4">
                  <button className="rounded-xl bg-red-700 py-2 px-4 text-white outline-none">
                    Delete
                  </button>
                  <button onClick={closeModal} className="rounded-xl border border-blue-500 py-2 px-4 text-blue-500">
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
      </Dialog>
    </Transition>
  )

export default ConfirmModal;
