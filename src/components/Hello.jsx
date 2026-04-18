import React from 'react';

const Hello = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-950 text-white font-sans overflow-hidden">
      <div className="relative group">
        {/* Animated background glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
        
        <div className="relative px-12 py-8 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
          <span className="flex items-center space-x-5">
            <span className="pr-6 text-slate-200 text-6xl font-black tracking-tighter sm:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-br from-white via-slate-200 to-slate-400">
              HELLO
            </span>
          </span>
          <span className="pl-6 text-orange-400 group-hover:text-orange-300 transition duration-200 text-xl font-medium">
            This is an Agency Website
          </span>
        </div>
      </div>
      
      {/* Subtle floating background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
    </div>
  );
};

export default Hello;
