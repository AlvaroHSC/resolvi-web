"use client";

import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-64 bg-white shadow-md">
      {/* Text Content */}
      <div className="flex flex-col max-w-max space-y-4">
        <h1 className="text-5xl font-bold text-gray-900">
          Mais de 500 tipos de serviços em um só lugar
        </h1>
        <p className="text-2xl text-gray-600">
          Encontre profissionais e contrate serviços para tudo o que precisar
        </p>
      </div>

      {/* Professional Image */}
      <div className="hidden lg:block">
        <img
          src="img\worker1.png"
          alt="Profissional"
          className="w-64 h-64 object-cover transform scale-x-[-1]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
