import { IKContext, IKUpload } from "imagekitio-react";
import { useRef } from "react";
// import { toast } from "react-toastify";

// export default function Upload = ({ children, type, setProgress, setData }) => {
export default function Upload() {
  const ref = useRef(null);

  const onError = (err) => {
    console.log(err);
    // toast.error("Image upload failed!");
  };
  const onSuccess = (res) => {
    console.log(res);
  };
  const onUploadProgress = (progress) => {
    console.log(progress);
  };

  return (
    <IKContext
      publicKey={import.meta.env.VITE_IK_PUBLIC_KEY}
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      // authenticator={authenticator}
    >
      <IKUpload
        useUniqueFileName
        onError={onError}
        onSuccess={onSuccess}
        onUploadProgress={onUploadProgress}
        className="hidden"
        ref={ref}
        // accept={`${type}/*`}
      />
      {/* <div className="cursor-pointer" onClick={() => ref.current.click()}>
        {children}
      </div> */}
    </IKContext>
  );
}
