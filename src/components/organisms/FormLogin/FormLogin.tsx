"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from "@/components/ui/button";
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

const FormLogin: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
    const [step, setStep] = useState<number>(1); // 1 for email, 2 for password
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false); // Estado para controle de transição
    const { toast } = useToast();
    const router = useRouter();

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            setError("Email de usuário não encontrado.");
            toast({
                title: "Erro",
                description: "Por favor, insira um email válido.",
                variant: "destructive",
            });
        } else {
            setError('');
            // Aqui você faria a verificação do e-mail na base de dados
            setIsTransitioning(true); // Começa a transição
            setTimeout(() => {
                setStep(2); // Avança para o próximo passo
                setIsTransitioning(false); // Finaliza a transição
            }, 300); // Duração da transição
        }
    };

    const handlePasswordSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoggingIn(true);
        // Aqui você faria a chamada à API para login
        // Exemplo: login(email, password).then(() => router.push('/dashboard'));
    };

    return (
        <Card className="w-full max-w-lg mx-auto p-6">
            <CardHeader>
                <CardTitle className="text-4xl font-bold">{step === 1 ? "Fazer Login" : "Insira sua Senha"}
                </CardTitle>
                <p className="text-base">
                    Novo usuário?{" "}
                    <Button variant="link" onClick={() => router.push('/register')} className="p-0">
                        Crie uma conta
                    </Button>
                </p>
            </CardHeader>
            <CardContent>
                <form onSubmit={step === 1 ? handleEmailSubmit : handlePasswordSubmit} className="space-y-4">
                    <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                        {step === 1 && (
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-base font-medium">Endereço de email</Label>
                                <Input
                                    type="email"
                                    id="email"
                                    placeholder="Digite seu email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={`w-full ${error ? 'border-red-500' : ''}`}
                                />
                                {error && <p className="text-sm text-red-500">{error}</p>}
                            </div>
                        )}
                        {step === 2 && (
                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-base font-medium">Digite sua senha</Label>
                                <Input
                                    type="password"
                                    id="password"
                                    placeholder="Digite sua senha"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={`w-full ${error ? 'border-red-500' : ''}`}
                                />
                            </div>
                        )}
                    </div>
                    <Button
                        type="submit"
                        variant="default"
                        className="w-full"
                    >
                        {step === 1 ? "Continuar" : "Acessar"}
                    </Button>
                    {step === 1 && (
                        <Button
                            variant="destructive"
                            className="w-full"
                            onClick={() => alert('Login com Google')}
                        >
                            Continue com Google
                        </Button>
                    )}
                    {step === 2 && (
                        <Button
                            variant="outline"
                            className="w-full text-left"
                            onClick={() => {
                                setIsTransitioning(true); // Começa a transição
                                setTimeout(() => {
                                    setStep(1); // Volta para o passo 1
                                    setIsTransitioning(false); // Finaliza a transição
                                }, 300); // Duração da transição
                            }}
                        >
                            Voltar
                        </Button>
                    )}
                </form>
            </CardContent>
        </Card>
    );
};

export default FormLogin;
