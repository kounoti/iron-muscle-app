import Link from "next/link";

const Footer = () => {
  return (
    <>
      {/* z-50でフッターは画面の最前面に位置するようにする */}
      <footer className="w-full text-center bg-teal-500 text-gray-50 h-15 fixed bottom-0 z-50">
        <small>@2024 eng-tsay</small>
      </footer>
    </>
  );
};
export default Footer;
