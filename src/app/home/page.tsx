"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import FormLogin from '@/components/organisms/FormLogin/FormRegister';
import Carrosel from '@/components/organisms/FormLogin/Carrosel';

const HomePage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [accessToken, setAccessToken] = useState(null);

    const { toast } = useToast();
    const router = useRouter();

    useEffect(() => {
        // Recupera o access_token do localStorage apenas no lado do cliente
        const token = localStorage.getItem('access_token');
        setAccessToken(token);
    },[])

    return (
        <div className="flex h-screen ">
            {/* Coluna esquerda com a logo, com fundo translúcido opcional */}
        <div className="flex w-screen flex-col items-center justify-center bg-slate-300" >

        <div>
      Você está logado!
      {accessToken && <p>Access Token: {accessToken}</p>}
      </div>
                <FormLogin />
                
                <Carrosel />
            </div>
        </div >
    );
};

export default HomePage;
