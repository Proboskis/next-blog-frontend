"use client";

// components/CustomMarkdown.js
import ReactMarkdown from 'react-markdown';
import {PrismAsync as SyntaxHighlighter} from 'react-syntax-highlighter';
// import {oneDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';

import {oneDark} from "react-syntax-highlighter/dist/cjs/styles/prism";
import InfoBlock from '@next-blog/app/components/blog-post/info-block';
import SuccessBlock from '@next-blog/app/components/blog-post/success-block';
import WarningBlock from '@next-blog/app/components/blog-post/warning-block';

const customTheme = {
  ...oneDark, // You can start with an existing theme (e.g., tomorrow)
  'pre[class*="language-"]': {
    //color: 'your-text-color', // Customize text color
    background: 'transparent', // Customize background color
  },
  'code[class*="language-"]': {
    //color: 'your-text-color', // Customize text color
    background: 'transparent', // Customize background color
  },
  // Add more custom styles as needed
}

const components = {
  code: ({node, inline, className, children, ...props}) => {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        language={match[1]}
        showLineNumbers={false}
        useInlineStyles={true}
        wrapLongLines={true}
        style={customTheme}
        className="
        mockup-code
        scrollbar-thin
        scrollbar-track-base-content/5
        scrollbar-thumb-base-content/40
        scrollbar-track-rounded-md
        scrollbar-thumb-rounded
        "
        PreTag="div"
        children={String(children).replace(/\n$/, '')}
        {...props}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  // Add custom component for your React components
  // Example: render YouTube videos
  Youtube: ({node, ...props}) => {
    const {id, title} = node.properties;
    return (
      <div>
        <p>{title}</p>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${id}`}
          allowFullScreen
          title={title}
        ></iframe>
      </div>
    );
  },
  InfoBlock: InfoBlock,
  SuccessBlock: SuccessBlock,
  WarningBlock: WarningBlock,
};

const CustomMarkdown = ({content}) => {
  console.log('Content:', content);

  return <ReactMarkdown className="prose" components={components} children={content}/>;
};

export default CustomMarkdown;