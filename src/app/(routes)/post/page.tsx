"use client";

import {AvatarMain} from "../../components/avatar-main";

// pages/index.js
import CustomMarkdown from "@next-blog/app/components/CustomRenderer";

const Page = () => {
  const markdownContent = `
# My Markdown Page

This is some **markdown** content.
p
\`\`\`tsx
const Box = () => { // 👈️ takes no props
  return (
    <div>
      <p>Hello world</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      {/* ⛔ Error: Type '{ children: Element; }' has no properties
       in common with type 'IntrinsicAttributes'. ts(2559) */}
      <Box>
        <span>Test</span>
      </Box>
    </div>
  );
};

export default App;
\`\`\`

YouTube Video:

<Youtube id="watch?v=xTxazUf9Z_o&ab_channel=LudietHistoria" title="Your Video Title" />

<InfoBlock/>
<SuccessBlock/>
<WarningBlock/>
`;

  return (
    <div className="max-w-full pt-8 pb-24 lg:flex lg:justify-center mt:pt-12">
      <div className="max-w-2xl px-5 mx-auto overflow-x-hidden 5xl:max-w-5xl lg:mx-0">
        <CustomMarkdown content={markdownContent}/>
      </div>
      <div className="hidden w-full max-w-xs ml-10 mt-26 lg:block mv-sidebar">
        <div className="px-6 py-5 mx-2 mt-10 mb-6 text-center bg-gray-800 rounded-lg lg:mt-0 xl:px-10">
          <AvatarMain/>
        </div>
      </div>
    </div>
  );
};

export default Page;
