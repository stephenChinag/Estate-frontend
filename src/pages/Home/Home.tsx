import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
          <h1 className="text-5xl font-bold tracking-tight text-orange-600">
            Truck into a takway today
          </h1>
          <span className="text-xl">Food is just a take awy</span>
        </div>
      </div>
    </>
  );
}