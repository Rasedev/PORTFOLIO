// export const Menus = [
//     {
//         name: 'Home',
//         link: '/Banner'
//       },
//       {
//         name: 'About',
//         link: '/AboutPage'
//       },
//       {
//         name: 'Experience',
//         link: '/Services'
//       },
//       {
//         name: 'Projects',
//         link: '/Portfolio'
//       },
//     //   {
//     //     name: 'Resume',
//     //     link: '/resume'
//     //   },
//       {
//         name: 'Testimonials',
//         link: '/Testimonials'
//       },
//       {
//         name: 'Contact',
//         link: '/Contact'
//       },
// ]

// import React from 'react';
// import { Trail as Keyframes, animated, useSpring } from '@react-spring/web';

// export const Menus = [ (props) => {
//     const { toggle } = props;
//     const state = toggle ? "open" : "close";
//     const name = ['Home',"About", "Projects", 'Resume', "Contact"];

//     const springProps = useSpring({
//         top: toggle ? 80 : -200,
//         opacity: toggle ? 1 : 0,
//         config: { tension: 250 }
//     });

//     return (
//         <div className="menu absolute top-0 w-full z-10">
//             <ul className="m-0 p-0">
//                 <Keyframes
//                     state={state}
//                     name={name}
//                 >
//                     {item => props => (
//                         <animated.li
//                             style={{ ...props, ...springProps }}
//                             className="relative p-4 text-lg text-center text-black border-b border-black"
//                         >
//                             {item}
//                         </animated.li>
//                     )}
//                 </Keyframes>
//             </ul>
//         </div>
//     )
// }

// ]

export const Menus = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Experience', link: '/experience' },
    { name: 'Projects', link: '/projects' },
    { name: 'Resume', link: '/resume' },
    { name: 'Contact', link: '/contact' },
    { name: 'Testimonials', link: '/testimonials' }
  ];