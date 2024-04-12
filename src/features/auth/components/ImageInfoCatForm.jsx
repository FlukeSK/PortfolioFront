import { useState, useRef } from "react";
import { ImageIcon } from "../../../icons";
import useAuth from "../../../hooks/use-auth";
import { toast } from "react-toastify";
import { Spinner } from "react-bootstrap";

export default function ImageInfoCatForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const fileInputEl = useRef(null);

  const {
    authUser: { firstName },
  } = useAuth();

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();

      if (!title.trim() && !image) {
        return toast.error("Please enyer title or select image");
      }

      const formData = new FormData();
      if (title) {
        formData.append("title", title);
      }
      if (image) {
        formData.append("image", image);
      }
      setLoading(true);
      await onSubmit(formData);
      toast.success("create a new post successfully");
    } catch (err) {
      toast.error(err.response?.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <form onSubmit={handleSubmitForm}>
        <div className="flex flex-col gap-4 p-4">
          <div
            
            role="button"
            onClick={() => fileInputEl.current.click()}
          >
            
              <input
                type="file"
                name="image"
                className="file-input file-input-bordered w-full max-w-xs"
              />
            
          </div>

          {image ? (
            <div
              className=" relative"
              onClick={() => fileInputEl.current.click()}
            >
              <img
                src="{URL.createObjectURL(image)}"
                alt="post"
                className=" mx-auto"
              />

              <button
                className=" absolute top-1 right-1 font-black"
                onClick={(e) => {
                  e.stopPropagation();
                  setImage(null);
                  fileInputEl.current.value = "";
                }}
              >
                &#10005;
              </button>
            </div>
          ) : (
            <div></div>
          )}

        </div>
      </form>
    </>
  );
}
