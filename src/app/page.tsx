//import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-center text-2xl font-bold mb-6">Characters</h1>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Тут буде фільтр */}
          <div className="lg:w-1/3 w-full">
            <p>Filter component will be placed here</p>
          </div>

          <div className="lg:w-2/3 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {/* Тут будуть картки */}
              <p>Card component will be placed here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
