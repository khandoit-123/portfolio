'use client'

import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Social from "./social";
import { Tab, TabGroup, TabList, TabPanel, TabPanels, Transition } from '@headlessui/react'
import { useState} from "react";

export default function Home() {
  const tablist = 'h-10 w-36 data-[selected]:bg-gray-700 rounded-t-3xl text-white data-[hover]:underline'
  const transitionani = {enter: "transition ease-out duration-500",
                        enterFrom: "opacity-0 translate-y-4",
                        enterTo: "opacity-100 translate-y-0",}
  const [selectedTab, setSelectedTab] = useState(0);


  return (
    <>
      <main className="min-h-screen bg-gray-900">
        <Social />
        <TabGroup selectedIndex={selectedTab} onChange={setSelectedTab}>
          <TabList className='flex text-red-300'>
            <Tab className={tablist}>About me</Tab>
            <Tab className={tablist}>My projects</Tab>
            <Tab className={tablist}>Contact me</Tab>
          </TabList>
          <TabPanels>
            <TabPanel className='bg-gray-700 min-h-screen'>
              <Transition show={true} {...transitionani} appear={true}>
                  <div>
                    <AboutMe />
                  </div>
              </Transition>
            </TabPanel>
            <TabPanel className='bg-gray-700 h-screen'>
              <Transition show={true} {...transitionani} appear={true}>
                <div>
                  <Projects />
                </div>
              </Transition>
            </TabPanel>
            <TabPanel className='bg-gray-700 h-screen'>
              <Transition show={true} {...transitionani} appear={true}>
                <div>
                  <Contact />
                </div>
              </Transition>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </main>
    </>
  );
}
