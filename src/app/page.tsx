import Image from "next/image";

export default function Home() {
  return (
    <div className=" text-center">
      <Image
      src={"/assets/logo/1-removebg-preview.png"}
      alt="iBabs logo"
      width={250}
      height={250}
      className="mx-auto"
      />
      <h1 className="md:text-4xl text-center">Run test</h1>
    </div>
  );
}
