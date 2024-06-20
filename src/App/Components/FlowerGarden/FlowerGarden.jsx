// import React from 'react';
// import './Flower.css'; // Import your CSS file for styling

// const Flower = ({ flowerType, lineLeafCount }) => {
//   const renderLeafs = () => {
//     const leafs = [];
//     for (let i = 1; i <= 4; i++) {
//       leafs.push(<div key={`leaf-${i}`} className={`flower__leaf flower__leaf--${i}`}></div>);
//     }
//     return leafs;
//   };

//   const renderLights = () => {
//     const lights = [];
//     for (let i = 1; i <= 8; i++) {
//       lights.push(<div key={`light-${i}`} className={`flower__light flower__light--${i}`}></div>);
//     }
//     return lights;
//   };

//   const renderLineLeafs = () => {
//     const lineLeafs = [];
//     for (let i = 1; i <= lineLeafCount; i++) {
//       lineLeafs.push(<div key={`line-leaf-${i}`} className={`flower__line__leaf flower__line__leaf--${i}`}></div>);
//     }
//     return lineLeafs;
//   };

//   return (
//     <div className={`flower flower--${flowerType}`}>
//       <div className={`flower__leafs flower__leafs--${flowerType}`}>
//         {renderLeafs()}
//         <div className="flower__white-circle"></div>
//         {renderLights()}
//       </div>
//       <div className="flower__line">
//         {renderLineLeafs()}
//       </div>
//     </div>
//   );
// };

// const FlowerGarden = () => {
//   return (
//     <body className="not-loaded">
//       <div className="night"></div>
//       <div className="flowers">
//         <Flower flowerType="1" lineLeafCount={6} />
//         <Flower flowerType="2" lineLeafCount={4} />
//         <Flower flowerType="3" lineLeafCount={4} />

//         {/* Other elements */}
//         <div className="grow-ans" style={{ '--d': '1.2s' }}>
//           <div className="flower__g-long">
//             <div className="flower__g-long__top"></div>
//             <div className="flower__g-long__bottom"></div>
//           </div>
//         </div>

//         <div className="growing-grass">
//           <div className="flower__grass flower__grass--1">
//             <div className="flower__grass--top"></div>
//             <div className="flower__grass--bottom"></div>
//             <div className="flower__grass__leaf flower__grass__leaf--1"></div>
//             <div className="flower__grass__leaf flower__grass__leaf--2"></div>
//             <div className="flower__grass__leaf flower__grass__leaf--3"></div>
//             <div className="flower__grass__leaf flower__grass__leaf--4"></div>
//             <div className="flower__grass__leaf flower__grass__leaf--5"></div>
//             <div className="flower__grass__leaf flower__grass__leaf--6"></div>
//             <div className="flower__grass__leaf flower__grass__leaf--7"></div>
//             <div className="flower__grass__leaf flower__grass__leaf--8"></div>
//             <div className="flower__grass__overlay"></div>
//           </div>
//         </div>

//         {/* Add more elements as needed */}
//       </div>
//     </body>
//   );
// };

// export default FlowerGarden;




// flowerGarden.jsx
import React from 'react';
import './Flower.css'; // Ensure this path is correct based on your project structure

const FlowerGarden = () => (
  <div className="night">
    <div className="flowers">
      <div className="flower flower--1">
        <div className="flower__line flower__line--1">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__leaf flower__leaf--5"></div>
          <div className="flower__leaf flower__leaf--6"></div>
        </div>
      </div>
      <div className="flower flower--2">
        <div className="flower__line flower__line--2">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
        </div>
      </div>
      <div className="flower flower--3">
        <div className="flower__line flower__line--3">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
        </div>
      </div>
    </div>
  </div>
);

export default FlowerGarden;
