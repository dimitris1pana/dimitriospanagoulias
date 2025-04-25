// src/components/About.js
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import React, {useEffect, useState } from "react";
import '../App.css';
const Publications = () => {
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      fetch(`${process.env.PUBLIC_URL}/content/PUBLICATIONS.md`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('CV not found');
          }
          return res.text();
        })
        .then((text) => {
          setContent(text);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error loading CV:', error);
          setContent("");
          setIsLoading(false);
        });
    }, []);
  
  
  return (
    <div className="App-div"> 
         <div className="p-10 max-w-4xl mx-auto prose">
           {isLoading ? (
             <p>Loading...</p>
           ) : content ? (
             <>
             <div>
             <ReactMarkdown remarkPlugins={[remarkGfm]}>
               {content}
             </ReactMarkdown>
             </div>
               {/* <Download contentRef={markdownRef} filename="CV.pdf"/> */}
             </>
           ) : (
             <p></p>
           )}
         </div>
       </div>

  );
};

export default Publications;
