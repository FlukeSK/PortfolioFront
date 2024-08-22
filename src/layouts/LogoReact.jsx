import LOGO from "../assets/Info/ReactLOGO.png";

// =============== < Function > =============== //
export default function LogoReact() {
  return (
    <div className=" flex justify-center items-center">
      <img
        className="h-auto w-[14rem] p-2 hover:scale-110 duration-500"
        src={LOGO}
        alt="image description"
      />
    </div>
  );
}
