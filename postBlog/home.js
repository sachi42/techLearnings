import React, {useState} from "react";
import Input from "./Input";
import PostDisplay from "./PostDisplay";

function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [submittedData, setSubmittedData] = useState([]);

  const handleSetData = (newTitle, newDesc) => {
    setTitle(newTitle);
    setDescription(newDesc);
  };
  const createPost = () => {
  let num = Math.random();
  if (title?.trim() && description?.trim()) {
    setSubmittedData((prev) => [...prev, {id: num, title, description}]);
    setTitle("");
    setDescription("");
  }
};

  const onDelete = (id) => {
    let filterData = submittedData?.filter((blog)=> blog.id !== id);
    setSubmittedData(filterData);
  }
  return (
    
    <div className="text-center ma-20">
      <div className="mb-20">
        <Input sendData={handleSetData} title1={title} desc={description}/>
        <button data-testid="create-button" className="mt-10" onClick={createPost}>
          Create Post
        </button>
      </div>
      <div className="posts-section">
        <PostDisplay data={submittedData} handleDelete={onDelete} />
      </div>
    </div>
  );
}

export default Home;
