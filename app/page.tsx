import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <div className="bg-primary w-full overflow-hidden">
        <div className="sm:px-16 px-6 flex justify-center items-center">
          <div className="xl:max-w-[1280px] w-full">
            <Navbar />
          </div>
        </div>
      </div>
    </main>
  );
}
