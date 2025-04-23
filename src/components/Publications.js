// src/components/About.js
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import React, {useEffect, useState } from "react";
import '../App.css';
const Publications = () => {
  const [content, setContent] = useState("");
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/content/PUBLICATIONS.md`)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);
  return (
    <div className="App-div"> 
    <div className="p-10 max-w-4xl mx-auto prose">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
    </div>

  );
};

export default Publications;
