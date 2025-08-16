const Loader = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative loaderAnimate">
        {Array.from({ length: 4 }, (_, idx) => idx).map((_, idx) => (
          <div
            className="circle w-[2rem] h-[2rem] bg-primaryPink rounded-[50%] absolute m-2"
            key={idx}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
