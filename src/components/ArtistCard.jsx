import { useNavigate } from "react-router-dom";

const ArtistCard = ({ tracks }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      onClick={() => navigate(`/artists/${tracks?.artists[0].adamid}`)}
    >
      <img
        className="w-full h-56 rounded-lg"
        src={tracks?.images?.coverart}
        alt="artist"
      />
      <p className="mt-4 font-semibold text-lg text-white truncate">
        {tracks?.subtitle}
      </p>
    </div>
  );
};

export default ArtistCard;
