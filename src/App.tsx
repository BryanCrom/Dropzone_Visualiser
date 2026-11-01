import { useDropzone } from "react-dropzone";
import { IconFile } from "@tabler/icons-react";

import "./App.css";

function App() {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles);
    },
  });

  return (
    <div {...getRootProps()} className="h-screen w-screen">
      <input {...getInputProps()} />
      <div className="hover:bg-blue-300 p-4 h-full w-full">
        <div className="border-4 border-dashed h-full w-full rounded-xl flex justify-center place-items-center">
          <div className="border-4 border-dashed h-40 w-40 rounded-xl flex items-center justify-center">
            <div>
              <IconFile stroke={2} size={48} className="mx-auto" />
              <p className="font-semibold">Drop Files Here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
