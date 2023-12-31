import { useRef, useEffect } from "react";

function Contract({ value }) {
  const spanEle = useRef(null);

  useEffect(() => {
    spanEle.current.classList.add("flash");
    const flash = setTimeout(() => {
      spanEle.current.classList.remove("flash");
    }, 300);
    return () => {
      clearTimeout(flash);
    };
  }, [value]);

  return (
    <div className="content container">
      <h1 className="secondary-color" ref={spanEle}>
        <strong>{value} Tahun</strong>
      </h1>
    </div>
  );
}

export default Contract;
