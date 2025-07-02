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
      <p
      className="text-9xl font-family-jim text-wrap"
      >
        Let&apos;s bring your ideas to life with iBabs! This is a test page to check the functionality of the application.
      </p>
    </div>
  );
}
