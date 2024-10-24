import { useRouter } from 'next/router'
import Image from "next/image";

export default function profile() {
    const router = useRouter();
    console.log('router', router?.query)

 return (
   <div>
    <h1>Profile {router?.query?.id}</h1>
    <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
   </div>
 );
}