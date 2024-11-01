const SocialMedia = ({ Icon, url }) => {
  return (
    <div className="text-4xl md:text-5xl lg:text-3xl 2xl:text-6xl hover:cursor-pointer hover:text-[rgba(247,180,56,0.61)] hover:p-3 hover:text-6xl rounded xl:m-5 xl:hover:m-0"><a href={url} target="blank">
      <Icon />
    </a>
    </div>
  );
};

export default SocialMedia;
