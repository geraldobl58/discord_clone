import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>Home</div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
