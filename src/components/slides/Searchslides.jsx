import React, { useState } from 'react';
import Modal from 'react-modal';
import { HiOutlineSearch, HiOutlineBell, HiMenu } from 'react-icons/hi';
import { Menu } from '@headlessui/react';
import Logo from '../../assets/logo/Pedlar_logo.png'; // Adjust the import as needed

const Searchslides = ({ toggleSidebar }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className='bg-white border-b border-gray-200'>
      {/* Mobile view */}
      <div className='h-32 px-4 flex flex-col md:hidden'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            {/* Sidebar Toggle Button */}
            <button
              type="button"
              className="text-gray-900 mr-2 focus:outline-none"
              onClick={toggleSidebar}
              aria-label="Toggle sidebar"
            >
              <HiMenu fontSize={30} className='transform translate-y-[-0.2px]' />
            </button>
            <img src={Logo} alt="Pedlar logo" className='h-20 w-[5.5rem]' />
          </div>
          <div className='flex items-center'>
            {/* Notification Icon */}
            <Menu as="div" className="relative">
              {({ open }) => (
                <>
                  <Menu.Button className="text-gray-900 mr-2 focus:outline-none" aria-label="Open notifications menu">
                    <HiOutlineBell fontSize={30} className='transform translate-y-[-1px]' />
                  </Menu.Button>
                  <Menu.Items
                    className="absolute right-[-2rem] mt-2 w-56 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden z-10"
                    style={{ display: open ? 'block' : 'none', paddingLeft: '8px' }} // Add left padding
                  >
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                              } block px-4 py-2 text-sm w-full text-left`}
                          >
                            Notification 1
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                              } block px-4 py-2 text-sm w-full text-left`}
                          >
                            Notification 2
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </>
              )}
            </Menu>

            {/* Post Ads Button */}
            <button
              type="button"
              className="text-gray-900 bg-gradient-to-r from-green-200 via-green-300 to-blue-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              POST ADS
            </button>

            {/* Profile Menu */}
            <Menu as="div" className="relative">
              {({ open }) => (
                <>
                  <Menu.Button className="text-gray-900 mr-2 focus:outline-none" aria-label="Open user menu">
                    <img className="w-10 h-10 rounded-full" src="https://picsum.photos/id/237/200/300" alt="User Profile" />
                  </Menu.Button>
                  <Menu.Items
                    className="absolute right-0 mt-2 w-56 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden z-10"
                  >
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                              } block px-4 py-2 text-sm w-full text-left`}
                          >
                            Your Profile
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                              } block px-4 py-2 text-sm w-full text-left`}
                          >
                            Settings
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                              } block px-4 py-2 text-sm w-full text-left`}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </>
              )}
            </Menu>
          </div>
        </div>
        <div className='flex items-center mt-[-0.5rem]'>
          <button
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
            onClick={openModal}
          >
            Filters
          </button>
          <div className='relative flex flex-1'>
            <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3' />
            <input
              type='text'
              placeholder='I am looking for'
              className='text-sm focus:outline-none active:outline-none h-10 w-full border border-gray-300 rounded-sm pl-11 pr-4'
              aria-label="Search"
            />
          </div>
        </div>
      </div>

      {/* Larger screen view */}
      <div className='hidden md:flex h-16 px-4 justify-between items-center'>
        <div className='flex items-center'>
          {/* Sidebar Toggle Button */}
          <button
            type="button"
            className="text-gray-900 mr-2 focus:outline-none md:hidden"
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
          >
            <HiMenu fontSize={30} className='transform translate-y-[-5px]' />
          </button>
          <button
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
            onClick={openModal}
          >
            Filters
          </button>
          <div className='relative flex'>
            <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3' />
            <input
              type='text'
              placeholder='I am looking for'
              className='text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm pl-11 pr-4'
              aria-label="Search"
            />
          </div>
        </div>
        <div className='flex items-center'>
          <Menu as="div" className="relative">
            {({ open }) => (
              <>
                <Menu.Button className="text-gray-900 mr-2 focus:outline-none" aria-label="Open notifications menu">
                  <HiOutlineBell fontSize={30} className='transform translate-y-[5px]' />
                </Menu.Button>
                <Menu.Items
                  className="absolute right-0 mt-2 w-56 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden"
                  style={{ display: open ? 'block' : 'none' }}
                >
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                            } block px-4 py-2 text-sm w-full text-left`}
                        >
                          Notification 1
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                            } block px-4 py-2 text-sm w-full text-left`}
                        >
                          Notification 2
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </>
            )}
          </Menu>
          <button
            type="button"
            className="text-gray-900 bg-gradient-to-r from-green-200 via-green-300 to-blue-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            POST ADS
          </button>
          <Menu as="div" className="relative">
            {({ open }) => (
              <>
                <Menu.Button className="text-gray-900 mr-2 focus:outline-none" aria-label="Open user menu">
                  <img className="w-10 h-10 rounded-full" src="https://picsum.photos/id/237/200/300" alt="User Profile" />
                </Menu.Button>
                <Menu.Items
                  className="absolute right-0 mt-2 w-56 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden"
                  style={{ display: open ? 'block' : 'none' }}
                >
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                            } block px-4 py-2 text-sm w-full text-left`}
                        >
                          Your Profile
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                            } block px-4 py-2 text-sm w-full text-left`}
                        >
                          Settings
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                            } block px-4 py-2 text-sm w-full text-left`}
                        >
                          Sign out
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </>
            )}
          </Menu>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Filter Modal"
        className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
        overlayClassName="fixed inset-0"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-lg font-medium mb-4">Filters</h2>
          {/* Your form content goes here */}
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Filter 1</label>
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Filter 2</label>
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
                onClick={closeModal}
              >
                Close
              </button>
              <button
                type="submit"
                className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Apply
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  )
}

export default Searchslides;
