import { useState } from "react";
import { useEditVideoMutation } from "../../features/api/apiSlice";
import TextArea from "../ui/TextArea";
import TextInput from "../ui/TextInput";
import Success from "../ui/Success";
import Error from "../ui/Error";

export default function Form({ video }) {
  const [editVideo, { data: videores, isLoading, isSuccess, isError }] =
    useEditVideoMutation();
  const {
    id,
    title: inittitle,
    author: initauthor,
    description: initdescription,
    link: initlink,
    thumbnail: initthumbnail,
    date: initdate,
    duration: initduration,
    views: initviews,
  } = video;
  const [title, setTitle] = useState(inittitle);
  const [author, setAuthor] = useState(initauthor);
  const [videolink, setVideoLink] = useState(initlink);
  const [description, setDescription] = useState(initdescription);
  const [thumbnail, setThumbnail] = useState(initthumbnail);
  const [updatedate, setUpdatedate] = useState(initdate);
  const [duration, setDuration] = useState(initduration);
  const [views, setViews] = useState(initviews);

  const handleSubmit = (e) => {
    e.preventDefault();
    editVideo({
      id: id,
      data: {
        title,
        author,
        link: videolink,
        description,
        views,
        thumbnail,
        date: updatedate,
        duration,
      },
    });

    resetForm();
  };

  const resetForm = () => {
    return (
      setTitle(""),
      setDuration(""),
      setAuthor(""),
      setVideoLink(""),
      setDescription(""),
      setViews(""),
      setThumbnail(""),
      setUpdatedate("")
    );
  };
  return (
    <form action="#" method="POST" onSubmit={handleSubmit}>
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          {/* <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <TextInput title="Video Title" />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <TextInput title="Author" />
            </div>

            <div className="col-span-6">
              <TextArea title="Description" />
            </div>

            <div className="col-span-6">
              <TextInput title="YouTube Video link" />
            </div>

            <div className="col-span-6">
              <TextInput title="Thumbnail link" />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <TextInput title="Upload Date" />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput title="Video Duration" />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput title="Video no of views" />
            </div>
          </div> */}
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <TextInput
                title="Video Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <TextInput
                title="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>

            <div className="col-span-6">
              <TextArea
                title="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="col-span-6">
              <TextInput
                title="YouTube Video link"
                value={videolink}
                onChange={(e) => setVideoLink(e.target.value)}
              />
            </div>

            <div className="col-span-6">
              <TextInput
                title="Thumbnail link"
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
              />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <TextInput
                title="Upload Date"
                value={updatedate}
                onChange={(e) => setUpdatedate(e.target.value)}
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput
                title="Video Duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput
                title="Video no of views"
                value={views}
                onChange={(e) => setViews(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            disabled={isLoading}
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>

        {isSuccess && <Success message="Video was Updated successfully" />}
        {isError && <Error message="There was an error occured" />}
      </div>
    </form>
  );
}
