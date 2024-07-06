const Heading = ({ content, style }: { content: String; style: String }) => {
  return (
    <div
      className={`text-5xl md:${
        style ? style : "text-6xl"
      } font-semibold my-16 text-black`}
    >
      {content}
    </div>
  );
};
export default Heading;
