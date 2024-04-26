import React, { useEffect, useState } from "react";
import useaxiosFetch from "../../hooks/useAxiosFetch";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  const axiosFetch = useaxiosFetch();
  useEffect(() => {
    axiosFetch
      .get("/classes")
      .then((res) => setClasses(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(classes);
  return (
    <div>
      <div className="mt-20 pt-3">
        <h1 className="text-4x1 font-bold text-center text-secondary">
          Classes
        </h1>
      </div>
    </div>
  );
};

export default Classes;
