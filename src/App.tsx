import { useDropzone } from "react-dropzone";
import "./App.css";

function App() {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles);
    },
  });

  return (
    <div {...getRootProps} className="h-screen w-screen">
      <input
        {...getInputProps}
        className="h-full w-full bg-blue-300 border-dashed border-2"
      />
    </div>
  );
}

export default App;
