function list({ title, ...props }) {
  return (
    <ul className={`mt-6 flex flex-col gap-2 basis-1/4 ${props.class}`}>
      <li>
        <h3 className="font-semibold mb-w capitalize">{title || "title"}</h3>
      </li>
      {props.children}
    </ul>
  );
}

export default list;
