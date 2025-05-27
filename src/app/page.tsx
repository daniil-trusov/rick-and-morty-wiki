//import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="mb-6 text-center text-2xl font-bold">Characters</h1>

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Тут буде фільтр */}
          <div className="w-full lg:w-1/3">
            <p>Filter component will be placed here</p>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {/* Тут будуть картки */}
              <p>Card component will be placed here</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
