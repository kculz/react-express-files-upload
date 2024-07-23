import { useState } from "react";
import axios from "axios";

const FileUploads = () => {
  const [values, setValues] = useState({
    name: '',
    file: '',
    img: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("files", values.file);
    formData.append("img", values.img);

    for (const [key, value] of formData) {
      console.log(`${key}: ${value}`);
    }

    await axios.post("http://localhost:5001/uploads/files", formData).then((res) => {
      if (res.status === 200) {
        console.log(res);
      }
    }).catch(err => {
      console.log(err);
    });
  };

  return (
    <div>
      <form encType='multipart/form-data' onSubmit={handleSubmit}>
        <input type="text" name="name" id="name" onChange={(e) => setValues({ ...values, name: e.target.value })} />
        <input type="file" name="files" id="file" onChange={(e) => setValues({ ...values, file: e.target.files[0] })} />
        <input type="file" name="img" id="img" onChange={(e) => setValues({ ...values, img: e.target.files[0] })} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FileUploads;