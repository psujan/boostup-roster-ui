import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../../services/api";

import ProfileCard from "./partials/ProfileCard";
import GeneralDetails from "./partials/GeneralDetails";
import OtherDetails from "./partials/OtherDetails";
import BaseLayout from "../../../../components/common/BaseLayout";

const EmployeeDetail = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    console.log("ID from URL:", id);

    api
      .get(`/api/v1/employee/${id}`)
      .then((res) => {
        console.log("API response:", res);
        setEmployee(res?.data?.data);
      })
      .catch((err) => {
        console.error(" Axios error:", err);
      });
  }, [id]);

  if (!employee) return <p>Loading employee data...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <BaseLayout>
        <ProfileCard employee={employee} />
        <GeneralDetails employee={employee} />
        <OtherDetails employee={employee} />
      </BaseLayout>
    </div>
  );
};

export default EmployeeDetail;
