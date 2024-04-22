import landingImage from "../../assets/landing.png";
import downloadImg from "../../assets/appDownload.png";

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

        <div className="grid md:grid-cols-2 gap-5">
          <img src={landingImage} />
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <span className="font-bold text-3xl tracking-tighter">
              Order takeaway Faster
            </span>

            <span> Download the olabisi food app </span>
            <img src={downloadImg} />
          </div>
        </div>
      </div>
    </>
  );
}
