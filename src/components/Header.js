import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Link } from 'gatsby';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Header } from 'flotiq-components-react';
import { StaticImage } from 'gatsby-plugin-image';

const headerText = 'Travel with pleasure. ';

const PageHeader = () => (
    <Disclosure as="nav">
        {({ open }) => (
            <div className=' w-full' >
                <div className="max-w-7xl  mx-auto py-4">
                    <div className="flex justify-between h-auto flex-wrap md:flex-nowrap">
                        <div className="order-2 md:order-1 flex grow md:grow-0">
                            <div className="flex-shrink-0 flex grow md:grow-0 items-center justify-center">
                                <Link to="/">
                                    <>
                                        <div className='block md:hidden'>
                                            {/* <StaticImage
                                                src="../assets/lolly.png"
                                                alt="Logo small"
                                                width={83}
                                                height={32}
                                                placeholder="none"
                                            /> */}
                                        </div>
                                        <div className='hidden md:block'>

                                            <h1 className='text-3xl'>scrollyairbnb</h1>
                                            {/* <StaticImage
                                                src="../assets/lolly.png"
                                                alt="Logo big"
                                                width={124}
                                                height="full"
                                                placeholder="none"
                                            /> */}
                                        </div>
                                    </>
                                </Link>
                            </div>
                            <div className="-ml-2 mr-2 flex items-center md:hidden">
                                <Disclosure.Button
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400
                                        hover:text-gray-500 hover:bg-gray-100 focus:outline-none
                                        focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                        <div className="order-3 md:order-2 hidden md:flex items-center justify-center w-full">
                            <Header additionalClasses={['  !text-3xl font-bold']}>
                                {headerText}
                            </Header>
                        </div>
                        <div className="order-1 md:order-3 bg-brown-500 flex items-center">
                            <div className="flex-shrink-0">
                                <a
                                    href="mailto:olivinegeorge@gmail.com"
                                    className="relative inline-flex items-center px-4 py-2
                                    text-base md:text-lg bg-[#ac3f21] font-regular rounded-full hover:text-white"
                                >
                                    Reach Out!
                                </a>
                            </div>
                        </div>
                        <div className="order-3 md:hidden flex items-center
                        justify-center w-full md:w-auto py-5 md:py-0"
                        >
                            <h1 className="text-xl   font-bold">Travel with pleasure</h1>
                        </div>
                    </div>
                </div>

                <Disclosure.Panel className="md:hidden">
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <div className="flex items-center px-4 sm:px-6">
                            <p>Menu content here...</p>
                        </div>
                    </div>
                </Disclosure.Panel>
            </div>
        )}
    </Disclosure>
);

export default PageHeader;
