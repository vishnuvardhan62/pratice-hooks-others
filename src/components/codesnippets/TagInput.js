
import React, { useState } from 'react'
import './TagInput.css'
const TagInput = () => {
    const [tagDatas, setTagData] = useState()
    const tagData = ['Node.js', 'MongoDB']
   
     const removeTagData = (indexToRemove) => {
       setTagData([...tagData.filter((_, index) => index !== indexToRemove)]);
     };
     const addTagData = (event) => {
       if (event.target.value !== "") {
         setTagData([...tagDatas, event.target.value]);
         event.target.value = "";
       }
     };
        
  return (
    <div className="tag-input">
      <ul className="tags">
        {tagData.map((tag, index) => (
          <li key={index} className="tag">
            <span className="tag-title">{tag}</span>
            <span
              className="tag-close-icon"
              onClick={() => removeTagData(index)}
            >
              X
            </span>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Press enter to add a tag"
        onKeyUp={(event) => (event.key === "Enter" ? addTagData(event) : null)}
      />
    </div>
  );
}

export default TagInput


// const TagInput = ({ tags }) => {
//   const [tagData, setTagData] = React.useState(tags);
//   const removeTagData = (indexToRemove) => {
//     setTagData([...tagData.filter((_, index) => index !== indexToRemove)]);
//   };
//   const addTagData = (event) => {
//     if (event.target.value !== "") {
//       setTagData([...tagData, event.target.value]);
//       event.target.value = "";
//     }
//   };
//   return (
//     <div className="tag-input">
//       <ul className="tags">
//         {tagData.map((tag, index) => (
//           <li key={index} className="tag">
//             <span className="tag-title">{tag}</span>
//             <span
//               className="tag-close-icon"
//               onClick={() => removeTagData(index)}
//             >
//               x
//             </span>
//           </li>
//         ))}
//       </ul>
//       <input
//         type="text"
//         onKeyUp={(event) => (event.key === "Enter" ? addTagData(event) : null)}
//         placeholder="Press enter to add a tag"
//       />
//     </div>
//   );
// };

// ReactDOM.render(
//   <TagInput tags={["Nodejs", "MongoDB"]} />,
//   document.getElementById("root")
// );