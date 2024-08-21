import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <h1 className="bg-red-500">Hello world</h1>
      <UserButton />
    </>
  );
}
