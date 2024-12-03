"use client";

import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa6";

const DownloadAppSection: React.FC = () => {
  return (
    <div className="relative bg-indigo-300 py-48 px-6 overflow-hidden">
      {/* Texto e botões */}
      <div className="relative z-10 max-w-lg ml-16">
        <h1 className="text-4xl font-bold text-gray-900">
          Faça download do nosso aplicativo
        </h1>
        <h2 className="text-lg text-gray-700 mt-4">
          Tenha acesso aos melhores serviços diretamente do seu celular.
        </h2>
        <div className="mt-6 flex space-x-4">
          {/* Botão Google Play */}
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-gray-800 rounded-lg shadow hover:bg-gray-800 hover:text-white transition"
          >
            <IoLogoGooglePlaystore className="text-2xl mr-2" />
            <span>Google Play</span>
          </a>

          {/* Botão App Store */}
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-gray-800 rounded-lg shadow hover:bg-gray-800 hover:text-white transition"
          >
            <FaAppStoreIos className="text-2xl mr-2" />
            <span>App Store</span>
          </a>
        </div>
      </div>

      {/* Imagem do smartphone */}
      <img
        src="/img/smartphone.webp" // Substitua pelo caminho da sua imagem
        alt="Aplicativo"
        className="absolute top-0 right-0 h-full"
        style={{ height: "130%", maxHeight: "none" }} // Ajusta a altura da imagem
      />
    </div>
  );
};

export default DownloadAppSection;
