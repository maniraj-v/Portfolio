import Image from "next/image";

function Logo() {
  return (
    <a
      className="fixed top-0 lg:top-4 left-1 lg:left-8 block scale-[0.8] lg:scale-110"
      aria-description="logo"
      href="#"
    >
      <Image
        src={"/BrandLogo/MR_Logo.svg"}
        width={150}
        height={80}
        alt="logo"
        className="h-full aspect-auto"
      />
    </a>
  );
}
export default Logo;
