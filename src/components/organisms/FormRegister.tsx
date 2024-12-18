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
import { getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { initializeApp } from 'firebase/app';
import firebaseConfig from "../../../firebaseinitialize";

/* import não usados
  -Jonathas

  import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";*/

import { FcGoogle } from "react-icons/fc";
import axiosInstance from "../../../axiosInstance";


// const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: Verify,
//     rendererSettings: {
//         preserveAspectRatio: "xMidYMid slice"
//     }
// };

const FormRegister: React.FC = () => {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("")
  const [error, setError] = useState<string>("");
  const { toast } = useToast();
  const router = useRouter();

  initializeApp(firebaseConfig);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const loginWithGoogle = async () => {
    await signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
   
      const user = result.user;
      console.log("user: " + user);
      console.log("token: " + token)
   
      router.push("/home")
    }).catch((error) => {
        console.log(error)
    });
  }

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Campos vazios.");
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
    } 
    
    registerUser()

   router.push("/login")
  };

  const registerUser = async () => {
    const userInfo = {
      name: name,
      email: email,
      password: password,
      phone: phone
    }

    try {

    console.log(userInfo)
      await axiosInstance.post('/Users', userInfo)
        .then(response => console.log(response.data))
        .catch(error => console.error(error));;

    } catch (error) {
      console.error('Erro ao criar usuario:', error);
    }
  }


  

  return (
    <Card className="w-full bg-white max-w-lg mx-auto p-6">
      <CardHeader>
        <CardTitle className="text-4xl font-bold">Crie sua conta</CardTitle>
        <p className="text-base">
          Já tem uma conta?{" "}
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
          onSubmit={ handleRegisterSubmit }
          className="space-y-4"
        >
          <div>
              <div className="space-y-2">
              <Label htmlFor="nome" className="text-base font-medium">
                Nome
              </Label>
              <Input
                id="nome"
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full ${error ? "border-red-500" : ""}`}
              />
              {error && <p className="text-sm text-red-500">{error}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-base font-medium">
                telefone
              </Label>
              <Input
                id="phone"
                placeholder="Digite seu telefone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`w-full ${error ? "border-red-500" : ""}`}
              />
              {error && <p className="text-sm text-red-500">{error}</p>}
            </div>

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
                <ul>
                  <li>Um caracter especial</li>
                  <li>Uma letra maiuscula</li>
                  <li>Um número</li>
                </ul>
              </div>
            </div>
            {/* )} */}
          </div>
          <Button type="submit" variant="indigo" className="w-full">
            Registrar
          </Button>

        </form>
        <>
              <Button
                // variant="destructive"
                className="w-full"
                onClick={() => loginWithGoogle()}
              >
                <FcGoogle />
                Criar conta com Google
              </Button>
            </>
      </CardContent>
    </Card>
  );
};

export default FormRegister;
