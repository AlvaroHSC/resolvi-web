"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MenuCompleto: React.FC = () => {
  const router = useRouter();

  const user = {
    nome: "Resolvi App",
    email: "resolvi@app.com",
    avatarUrl: "", // URL da imagem do avatar, deixe vazio para fallback
  };

  return (
    <div className="flex h-16 items-center px-4 bg-black">
      {/* Logo */}
      <a href="/" className="flex items-center">
        <img
          src="/img/logo.svg"
          alt="Resolvi Logo"
          className="w-32 h-auto mx-20"
        />
      </a>

      {/* Links de navegação */}
      {/* <nav className="flex items-center space-x-6 ml-6">
        <a
          href="/dashboard"
          className="text-white text-sm font-semibold hover:text-purple-500"
        >
          Menu 1
        </a>
        <a
          href="/pedidos"
          className="text-white text-sm font-semibold hover:text-purple-500"
        >
          Menu 2
        </a>
        <a
          href="/cardapio"
          className="text-white text-sm font-semibold hover:text-purple-500"
        >
          Menu 3
        </a>
      </nav> */}

      {/* Avatar e menu dropdown */}
      <div className="ml-auto flex items-center mx-12">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="relative h-10 w-10 rounded-full cursor-pointer">
              <Avatar>
                {user.avatarUrl ? (
                  <AvatarImage src={user.avatarUrl} alt={user.nome} />
                ) : (
                  <AvatarFallback>
                    {user.nome
                      .split(" ")
                      .slice(0, 2)
                      .map((name) => name.charAt(0).toUpperCase())
                      .join("")}
                  </AvatarFallback>
                )}
              </Avatar>
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-48" align="end" forceMount>
            <div className="px-4 py-2">
              <p className="text-sm font-bold">{user.nome}</p>
              <p className="text-xs text-muted-foreground">{user.email}</p>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => alert("Gerenciar Informações")}
              className="hover:bg-purple-500 hover:text-white"
            >
              Gerenciar Informações
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => alert("Alterar Senha")}
              className="hover:bg-purple-500 hover:text-white"
            >
              Alterar Senha
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => alert("Logout")}
              className="hover:bg-purple-500 hover:text-white"
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default MenuCompleto;
