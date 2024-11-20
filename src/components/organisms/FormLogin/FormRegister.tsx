"use client";
// import Lottie from 'react-lottie';
// import Verify from '../../../../src/lotttie/verify.json'
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

// const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: Verify,
//     rendererSettings: {
//         preserveAspectRatio: "xMidYMid slice"
//     }
// };

const FormRegister: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
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
      if (email == "aluno@gmail.com") {
        setError("Email já cadastrado em nosso sistema.");
        toast({
          title: "Erro",
          description: "Por favor, insira um email válido.",
          variant: "destructive",
        });
      } else {
        setError("");
        // Aqui você faria a verificação do e-mail na base de dados
        setIsTransitioning(true); // Começa a transição
        setTimeout(() => {
          setStep(2); // Avança para o próximo passo
          setIsTransitioning(false); // Finaliza a transição
        }, 300); // Duração da transição
      }
    }

    getUserPermissions();
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // setIsLoggingIn(true);;
    // Aqui você faria a chamada à API para login
    // Exemplo: login(email, password).then(() => router.push('/dashboard'));
    getUserPermissions();
  };

  //Logar
  async function getUserPermissions() {
    try {
      const responde = await axios({
        method: "post",
        url:"https://keycloak.lemonwater-7753b8e7.brazilsouth.azurecontainerapps.io/realms/resolviapp/protocol/openid-connect/token", 
      data: {
        grant_type: 'password',
        client_id: 'admin-cli',
        username: 'admin', 
        password: 'admin'
      }})

        console.log('response:>>>>>>>>>>>>>>>>>>>>>',responde);

    } catch (error) {
      console.log(error);
    }
  }

  //Logar
  async function registerNewUser() {
    try {
      const responde = await axios({
        method: "post",
        url:"https://keycloak.lemonwater-7753b8e7.brazilsouth.azurecontainerapps.io/admin/realms/resolviapp/users", 
        
        data: {
        username: 'jurubebo',
        email: 'jurubebo@gmail',
        firstname: 'jurubebo', 
        lastname: 'stanislau', 
        enabled: 'true',
        credentials: [
          {
            type: "password",
            value: "",
            temporary: false
          }
        ]
      }})

        console.log('response:>>>>>>>>>>>>>>>>>>>>>',responde);

    } catch (error) {
      console.log(error);
    }
  }

  function loginGoogle() {
    let log_google = document.querySelector("#logingoogle");
    log_google.click();
  }

  return (
    <Card className="w-full bg-white max-w-lg mx-auto p-6">
      <CardHeader>
        <CardTitle className="text-4xl font-bold">Crie sua conta</CardTitle>
        <p className="text-base">
          Já tem uma conta?
          <Button
            variant="link"
            onClick={() => router.push("/login")}
            className="p-0"
          >
            Logue aqui
          </Button>
        </p>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={step === 1 ? handleEmailSubmit : handlePasswordSubmit}
          className="space-y-4"
        >
          <div
            className={`transition-opacity duration-300 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            {/* {step === 1 && ( */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-base font-medium">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full ${error ? "border-red-500" : ""}`}
              />
              {error && <p className="text-sm text-red-500">{error}</p>}
            </div>
            {/* )} */}
            {/* {step === 2 && ( */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-base font-medium">
                Senha
              </Label>
              <Input
                type="password"
                id="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full ${error ? "border-red-500" : ""}`}
              />

              <div style={{ fontSize: '10px', fontWeight: 'bold' }}>
                <p>Sua senha deve conter: </p>
                {/* <ul> */}
                  <li>Um caracter especial</li>
                  <li>Uma letra maiuscula</li>
                  <li>Um número</li>
                {/* </ul> */}
              </div>
            </div>
            {/* )} */}
          </div>
          <Button type="submit" variant="indigo" className="w-full">
            {step === 1 ? "Continuar" : "Acessar"}
          </Button>

          {step === 1 && (
            <>
              <Button
                // variant="destructive"
                className="w-full"
                // onClick={() => alert("Login com Google")}
                onClick={() => loginGoogle()}
              >
                <FcGoogle />
                Criar conta com Google
              </Button>

              {/* LINK */}
              <Link
                id="logingoogle"
                className="bg-blue-500"
                href={
                  "https://keycloak.lemonwater-7753b8e7.brazilsouth.azurecontainerapps.io/realms/resolviapp/protocol/openid-connect/auth?response_type=code&client_id=nextjs-google&state=0264e093-4bb8-4146-a75f-1f0146b02596&redirect_uri=http://localhost:3000/callback&kc_idp_hint=google&scope=openid profile email"
                }
              >
                Login com o google
              </Link>
            </>
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

export default FormRegister;
