import { createContext, useEffect, useState } from "react";

interface UploadWidgetProps {
  uwConfig: any; // Type for uwConfig
  setPublicId: Function;
  setAvatar: any; // Type for setPublicId function
}
// Extend the Window interface to include the cloudinary property
declare global {
  interface Window {
    cloudinary: any; // Define the type of the cloudinary property as 'any'
  }
}
// Create a context to manage the script loading state
const CloudinaryScriptContext = createContext<any>(null); // Specify the context value type

function UploadWidget({ uwConfig, setPublicId, setAvatar }: UploadWidgetProps) {
  const [loaded, setLoaded] = useState<boolean>(false); // Specify the type for loaded state

  useEffect(() => {
    // Check if the script is already loaded
    if (!loaded) {
      const uwScript = document.getElementById("uw");
      if (!uwScript) {
        // If not loaded, create and load the script
        const script = document.createElement("script");
        script.setAttribute("async", "");
        script.setAttribute("id", "uw");
        script.src = "https://upload-widget.cloudinary.com/global/all.js";
        script.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(script);
      } else {
        // If already loaded, update the state
        setLoaded(true);
      }
    }
  }, [loaded]);

  const initializeCloudinaryWidget = () => {
    if (loaded) {
      var myWidget = window.cloudinary.createUploadWidget(
        uwConfig,
        (error: any, result: any) => {
          // Specify types for error and result
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            // setPublicId(result.info.public_id);

            setAvatar(result.info.secure_url);
          }
        }
      );

      document.getElementById("upload_widget")?.addEventListener(
        "click",
        function () {
          myWidget.open();
        },
        false
      );
    }
  };

  return (
    <CloudinaryScriptContext.Provider value={{ loaded }}>
      <button
        id="upload_widget"
        className="cloudinary-button"
        onClick={initializeCloudinaryWidget}
      >
        Upload
      </button>
    </CloudinaryScriptContext.Provider>
  );
}

export default UploadWidget;
export { CloudinaryScriptContext };
