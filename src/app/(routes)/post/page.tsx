"use client";

// pages/index.js
import CustomMarkdown from "@next-blog/app/components/CustomRenderer";

const Page = () => {
  const markdownContent = `
# My Markdown Page

This is some **markdown** content.
p
\`\`\`jsx
import React from 'react';

type BoxProps = {
  children: React.ReactNode; // 👈️ define children prop
};

const Box = (props: BoxProps) => {
  return <div>{props.children}</div>;
};

const App = () => {
  return (
    <div className="App">
      <Box>
        <span>Hello</span>
        <span>Test</span>
      </Box>
    </div>
  );
};

export default App;

\`\`\`

YouTube Video:

<youtube id="your-video-id" title="Your Video Title" />
`;

  return (
    <div>
      <CustomMarkdown content={markdownContent} />
    </div>
  );
};

export default Page;
