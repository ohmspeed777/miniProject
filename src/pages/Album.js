import React, { useEffect } from "react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAlbum } from "../action";
import { Link, useParams } from "react-router-dom";

const Album = () => {
  const photos = useSelector((state) => state.photos);
  const disPatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    disPatch(fetchUserAlbum(params.username));
  }, []);
  const generateCard = () => {
    return photos.map((el) => (
      <Card
        profile={el.user}
        image={el.urls.small}
        views={el.views}
        exif={el.exif ?? ""}
        likes={el.likes}
        key={el.id}
      />
    ));
  };
  const generateProfile = () => {
    if (photos.length === 0) return;
    return (
      <div>
        <div
          className="flex items-center w-full px-4 py-10 bg-cover card bg-base-200"
          style={{
            backgroundImage: 'url("https://picsum.photos/id/314/1000/300")',
          }}
        >
          <div className="card glass lg:card-side text-neutral-content">
            <figure className="p-6 ">
              <img
                src={photos[0].user.profile_image.large}
                className="rounded-full shadow-lg"
              />
            </figure>
            <div className="max-w-md card-body">
              <h2 className="card-title">{photos[0].user.name}</h2>
              <p>{photos[0].user.bio}</p>
              <Link to={`/profile/${photos[0].user.username}`}>
                <div class="card-actions">
                  <button class="btn glass rounded-full">View Profile</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="gap-4 sm:columns-1 md:columns-2 xl:columns-4 mt-16">
          {generateCard()}
        </div>
      </div>
    );
  };

  return <div className="mt-16">{generateProfile()}</div>;
};

export default Album;
