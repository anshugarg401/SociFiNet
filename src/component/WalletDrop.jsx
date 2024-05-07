import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { useState, useRef, useEffect, useCallback } from "react";
import MetaMask from "/MetaMask.svg";
import reload from "/reload.svg";
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const solutions = [
  {
    name: "Analytics",
    description: "Get a better under",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to you",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers' data wil",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels ",
    href: "#",
    icon: ArrowPathIcon,
  },
];

export default function WalletDrop({
  disconnect,
  signIn,
  signOut,
  isSignedIn,
  truncatedAccount,
  balance,
}) {
  const ReloadRef = useRef(null);
  const [rect, setRect] = useState(null);
  const updateTriggerBoundingRect = useCallback(() => {
    if (ReloadRef.current) {
      const newRect = ReloadRef.current.getBoundingClientRect();
      setRect(newRect);
    }
  }, [rect]);

  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div ref={ReloadRef}>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md text-gray-900 bg-white hover:bg-gray-100 border focus:ring-gray-100 font-medium  text-sm px-3 py-2 text-center items-center me-2 mb-2">
            <img
              className="mr-3"
              height={25}
              width={25}
              src={MetaMask}
              alt="My SVG"
            />
            {truncatedAccount}
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
          <Menu.Items className="absolute right-0 z-10 mt-2 w-96 h-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <div className="block px-4 py-2 text-sm">
                    <div className="flex flex-row">
                      <img
                        className="inline-block p h-6 w-6 pt-3 pl-1 rounded-full ring-2 ring-white"
                        src={MetaMask}
                        alt=""
                      />

                      <div className="ml-3 ">
                        <p className="text-sm font-medium text-gray-900">
                          {truncatedAccount}
                        </p>
                      </div>
                      <div className="flex mt-3">
                        <div
                          className="ml-16 
                      "
                        >
                          <img
                            onClick={updateTriggerBoundingRect}
                            className="text-sm mr-3 font-medium text-gray-500"
                            height={20}
                            width={20}
                            src={reload}
                            alt="My SVG"
                          />
                        </div>
                        <div className="ml-3">
                          <button
                            onClick={disconnect}
                            className="text-sm font-medium text-gray-900"
                          >
                            disconnect
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div className="group relative flex gap-y-5 rounded-lg  ">
                    <div className="mt-1 flex h-2 w-5 flex-none rounded-lg bg-gray-50 "></div>

                    <div>
                      <p className="mt-1 text-gray-600">Total Balance</p>
                      <p className="font-semibold text-gray-900">
                        {balance}
                        <span className="absolute inset-0" />
                      </p>
                    </div>
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <p className="block px-4 py-2 text-sm">
                    <div className="flex flex-row items-center justify-center">
                      {!isSignedIn ? (
                        <button
                          onClick={signIn}
                          className="text-sm font-medium text-gray-900"
                        >
                          Signin
                        </button>
                      ) : (
                        <button
                          onClick={signOut}
                          className="text-sm font-medium text-gray-900"
                        >
                          SignOut
                        </button>
                      )}
                    </div>
                  </p>
                )}
              </Menu.Item>
              {/* <Menu.Item>
           
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
            

             
            
            </Menu.Item>   */}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}
