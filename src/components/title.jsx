function title({ ...props }) {
  return (
    <>
      <h3 className={`font-bold text-md capitalize mb-2 ${props.classSubtitle}`}>
        {props.h3}
      </h3>
      <h2 className={`text-4xl mb-3 capitalize ${props.classTitle}`}>
        {props.h2 || "title"}
      </h2>
    </>
  );
}

export default title;
