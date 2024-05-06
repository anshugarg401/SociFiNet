import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import MetaMask from "/MetaMask.svg";
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const solutions = [
  { name: 'Analytics', description: 'Get a better under', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to you', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: "Your customers' data wil", href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels ', href: '#', icon: ArrowPathIcon },
]

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function WalletDrop() {
  return <>
  
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md text-gray-900 bg-white hover:bg-gray-100 border focus:ring-gray-100 font-medium  text-sm px-3 py-2 text-center items-center me-2 mb-2">
        <img className="mr-3" height={25} width={25} src={MetaMask} alt="My SVG" />
        MetaMask Wallet
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-96 h-96 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  <div className='flex flex-row'>
                               <img
          className="inline-block h-6 w-6 p-2 rounded-full ring-2 ring-white"
          src={MetaMask}
          alt=""
        />

        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">Tom Cook</p>
          </div>
        <div className="ml-3">
          <button className="text-sm font-medium text-gray-900">Tom Cook</button>
          </div>
        <div className="ml-3">
          <button className="text-sm font-medium text-gray-900">Tom Cook</button>
          </div>

                  </div>
          
        
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  <div className='flex flex-row'>
    <button className="text-sm font-medium text-gray-900">Tom Cook</button>
    <button className="text-sm font-medium text-gray-900">Tom Cook</button>
    <button className="text-sm font-medium text-gray-900">Tom Cook</button>
                </div>
                </a>
              )}
            </Menu.Item>  
            <Menu.Item>
           
              <div className='flex'>
                  <div
                  class="scrollbar"
                  className="overflow-y-auto no-scrollbar relative top-0 left-0 w-96 h-96 bg-white shadow-lg ring-1 ring-black ring-opacity-5 hover:cursor-pointer overflow-x-hidden "
                
                  >
                    <div className='container'>

           
              {solutions.map((item) => (
                <div key={item.name} className="group relative flex gap-x-5 rounded-lg p-4 hover:bg-gray-50">
                  <div className="mt-1 flex h-2 w-5 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                  </div>
                  <div>
                    <a href={item.href} className="font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
              </div>
            </div>
            </div>
            

             
            
            </Menu.Item>  
          </div>
        </Menu.Items>
      </Transition>
    </Menu>



    
   
            
  </>
}

