// resources/js/Sections/WhatIDo.tsx
import React, { forwardRef } from "react";
import Card from "../Components/Card";
import Blob from "../Components/Blob";

interface WhatIDoProps {
  // Add props if needed in future
}

const WhatIDo = forwardRef<HTMLElement, WhatIDoProps>((props, ref) => {
  return (
    // Attach the ref to the root section
    <section
      id="what-i-do"
      ref={ref}
      className="theme-lblue min-h-screen relative flex items-center justify-center text-center"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Main Flexbox container for the two halves of the screen */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* The left-half container for text */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-h1 font-bold mb-4">What I Do</h1>
            <p className="mb-12">
              Backend and full-stack development, API integrations, and cloud
              deployments.
            </p>
          </div>

          {/* The right-half container */}
          <div className="w-full lg:w-1/2 relative">
            {/* Blob in background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Blob className="z-0" />
            </div>

            {/* Cards grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
              <Card className="glass">
                <h3 className="text-xl text-primary-dblue font-bold mb-2">
                  Language
                </h3>
                <p className="text-gray-700">PHP, JavaScript, Python</p>
              </Card>
              <Card className="glass">
                <h3 className="text-xl text-primary-dblue font-bold mb-2">
                  Frameworks
                </h3>
                <p className="text-gray-700">Laravel, ReactJs, VueJs, Wordpress</p>
              </Card>
              <Card className="glass">
                <h3 className="text-xl text-primary-dblue font-bold mb-2">
                  Tools
                </h3>
                <p className="text-gray-700">
                  AWS (EC2, Lambda, Cognito, S3), Docker, Git
                </p>
              </Card>
              <Card className="glass">
                <h3 className="text-xl text-primary-dblue font-bold mb-2">
                  Databases
                </h3>
                <p className="text-gray-700">MySQL, MSSQL</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

WhatIDo.displayName = "WhatIDo"; // required for forwardRef components

export default WhatIDo;
