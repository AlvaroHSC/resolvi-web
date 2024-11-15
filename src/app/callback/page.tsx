"use client"

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react';
import axios from 'axios';

export default function Callback() {

  const searchParams = useSearchParams()
  
  useEffect(() => {
    const code = searchParams.get('code')

    console.log(code)

    if (code) {
      const params = new URLSearchParams();
      params.append('grant_type', 'authorization_code');
      params.append('code', code); // Usa o code obtido diretamente
      params.append('client_id', 'nextjs-google');
      params.append('client_secret', 'u0i2PiRVDIFWqyUC8ciTuLgWbYKktjW4');
      params.append('redirect_uri', 'http://localhost:3000/callback');

      // Fazendo a requisição para obter o token
      axios.post('https://keycloak.lemonwater-7753b8e7.brazilsouth.azurecontainerapps.io/realms/resolviapp/protocol/openid-connect/token', params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then(response => {
        console.log('Token recebido:', response.data);
        localStorage.setItem('access_token', response.data.access_token); // Armazena o token no localStorage
        window.location.href = '/home'; // Redireciona para a página logado
      })
      .catch(error => {
        console.error('Erro ao obter o token:', error.response?.data);
      });
    }
  }, []); // Executa o efeito uma vez quando o componente é montado

  return <div>Processando login...</div>;
}
