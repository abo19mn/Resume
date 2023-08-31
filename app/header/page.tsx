import Link from "next/link";

const Page = () => {
  return (
    <div className="container mx-auto flex justify-between items-center border-b-2 px-6 py-2 h-24">
      <h1 className="font-bold">ABO</h1>
      <div>
        <div className="flex items-right justify-center gap-2 md:gap-8">
          <Link href="home"> Home</Link>
          <Link href="home"> Home</Link>
          <Link href="home"> Home</Link>
          <Link href="home"> Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
