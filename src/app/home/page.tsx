"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import FormLogin from '@/components/organisms/FormLogin/FormLogin';
import Carrosel from '@/components/organisms/FormLogin/Carrosel';

const HomePage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    const { toast } = useToast();
    const router = useRouter();

    return (
        <div className="flex h-screen ">
            {/* Coluna esquerda com a logo, com fundo translúcido opcional */}
        <div className="flex w-screen flex-col items-center justify-center bg-slate-300" >

                <FormLogin />
                
                <Carrosel />
            </div>
        </div >
    );
};

export default HomePage;
