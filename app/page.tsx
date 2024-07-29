import Image from "next/image";
import LoginBtn from "./LoginBtn";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 justify-center items-center h-screen">
			<Image src="/mymoneylogo.png" alt="" width={400} height={300} />
      <LoginBtn provider="google" />
			<LoginBtn provider="facebook" />
    </main>
  );
}
