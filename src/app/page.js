import Image from "next/image";


export default function Home() {
  return (
    <>
      <Image
        src={"/image/1.jpeg"}
        width={200}
        height={200}
        alt="virat kohli"

      />
      <Image
        src={"/image/2.jpeg"}
        width={200}
        height={200}
        alt="virat kohli"

      />


    </>
  );
}
