// src/components/About.js
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import React, {useEffect, useState } from "react";
import '../App.css';
import Navbar from "./Navbar";
const About = () => {
  const [content, setContent] = useState("");
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/content/CV.md`)
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

export default About;
