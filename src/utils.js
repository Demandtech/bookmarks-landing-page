import tab1 from './assets/images/illustration-features-tab-1.svg'
import tab2 from './assets/images/illustration-features-tab-2.svg'
import tab3 from './assets/images/illustration-features-tab-3.svg'

import ext1 from './assets/images/logo-chrome.svg'
import ext2 from './assets/images/logo-firefox.svg'
import ext3 from './assets/images/logo-opera.svg'
export const tabs = [
  {
    id: 1,
    label: 'Simple Bookmarking',
    title: 'Bookmark in one click',
    text: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    img: tab1,
  },
  {
    id: 2,
    label: 'Speedy Searching',
    title: 'Intelligent search',
    text: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    img: tab2,
  },

  {
    id: 3,
    label: 'Easy Sharing',
    title: 'Share your bookmarks',
    text: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
    img: tab3
  },
];

export const exts = [
  {
    id: 1,
    img: ext1,
    version: 'Minimum Version 62',
    name: 'Chrome'
  },
  {
    id: 2,
    img: ext2,
    version: 'Minimum Version 55',
    name: 'FireFox'
  },
  ,
  {
    id: 3,
    img: ext3,
    version: 'Minimum Version 46',
    name: 'Opera'
  },
];

export  const questions = [
  {
    id: 1,
    ques: 'What is Bookmark?',
    ans: 'A bookmark is a saved link to a webpage that allows you to quickly access it later without having to search for it again.',
  },
  {
    id: 2,
    ques: 'How can I request a new browser',
    ans: 'To request a new browser, you can download and install one from the internet. Look for the browser download page on their website, and choose the latest version for your operating system to download and install.',
  },
  {
    id: 3,
    ques: 'Is there a mobile app?',
    ans: 'It depends on what "it" refers to. If you are asking about a specific product or service, you need to specify it for me to provide an accurate answer.',
  },
  {
    id: 4,
    ques: 'What about other Chromium browsers',
    ans: 'Chromium is an open-source browser project that serves as the foundation for several popular browsers, including Google Chrome, Microsoft Edge, and Brave. These browsers share many features and technologies due to their common underlying codebase.',
  },
]