import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex h-lvh  justify-center items-center">
        <div className="flex flex-col ">
          <Link className="p-3 bg-slate-500 rounded-md mb-2 text-white" href={"/button-menu"}>
            Hover Button
          </Link>
          <Link className="p-3 bg-slate-500 rounded-md text-white" href={"/profile-menu"}>
            Profile Menu
          </Link>
        </div>
      </main>
    </>
  );
}
