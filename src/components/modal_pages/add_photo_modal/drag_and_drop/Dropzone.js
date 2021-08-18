import React from "react";
import { useDropzone } from "react-dropzone";

const Dropzone = ({ onDrop, accept }) => {
  // Initializing useDropzone hooks with options
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept
  });

  /* 
    useDropzone hooks exposes two functions called getRootProps and getInputProps
    and also exposes isDragActive boolean
  */

    const getClassName = (className, isActive) => {
        if (!isActive) return className;
        return `${className} ${className}-active`;
    };

    return (
        <div className={getClassName("dropzone", isDragActive)}  {...getRootProps() }>

        <input className="dropzone-input" {...getInputProps()} />

        <div className="text-center">
            {isDragActive ? (
            <p className="dropzone-content">Release to drop the files here</p>
            ) : (
            <p className="dropzone-content">
                Drag 'n' drop some files here, or click to select files
            </p>
            )}
        </div>
        </div>
    );
};

export default Dropzone;