import { Box } from "@mui/material";
import Helper from "../../../../utils/helper";
import { useLoader } from "../../../../utils/context/LoaderContext";
import api from "../../../../services/api";
import { useEffect, useState } from "react";
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function Availability() {
  const { showLoader, hideLoader } = useLoader();
  const [availabilities, setAvailabilities] = useState([]);
  const getAvailability = () => {
    showLoader();
    api
      .get("/api/v1/availability/employee/" + Helper.getCurrentEmployeeId())
      .then((res) => {
        setAvailabilities(res?.data?.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        hideLoader();
      });
  };

  const findForDay = (day) => {
    const data = availabilities.find((x) => x.day == day);
    return data ? data.records : undefined;
  };

  const AvailabilityBox = ({ day }) => {
    const records = findForDay(day);
    return (
      <Box
        sx={{
          margin: "30px 0",
          padding: "16px 10px",
          backgroundColor: "#fff",
          borderRadius: "8px",
        }}
      >
        <Box>
          <Box className="flex flex-between" mb={2}>
            <span>{day}</span>
          </Box>
          <Box className="flex" mb={2} gap={2} sx={{ flexWrap: "wrap" }}>
            {records && records.length ? (
              records.map((row, i) => {
                return (
                  <Box
                    key={i}
                    sx={{
                      borderRadius: "6px",
                      backgroundColor: "#f4f4f4",
                      minWidth: "150px",
                      padding: "4px",
                      textAlign: "center",
                    }}
                  >
                    <span className="text-muted" style={{ fontSize: "12px" }}>
                      {row.forFullDay
                        ? "✅ For Full Day"
                        : row.from + " to " + row.to}
                    </span>
                  </Box>
                );
              })
            ) : (
              <span className="text-muted text-sm">N/A</span>
            )}
          </Box>
        </Box>
      </Box>
    );
  };

  useEffect(() => {
    getAvailability();
  }, []);
  return (
    <>
      {DAYS.map((day) => (
        <AvailabilityBox day={day} key={day} />
      ))}
      {/* <Box
        sx={{
          margin: "30px 0",
          padding: "16px 10px",
          backgroundColor: "#fff",
          borderRadius: "8px",
        }}
      >
        <Box>
          <Box className="flex flex-between" mb={2}>
            <span>Sun</span>
          </Box>
          <Box className="flex" mb={2} gap={2} sx={{ flexWrap: "wrap" }}>
            <Box
              sx={{
                borderRadius: "6px",
                backgroundColor: "#f4f4f4",
                minWidth: "150px",
                padding: "4px",
                textAlign: "center",
              }}
            >
              <span className="text-muted" style={{ fontSize: "12px" }}>
                6:00 AM -2:00 PM
              </span>
            </Box>
            <Box
              sx={{
                borderRadius: "6px",
                backgroundColor: "#f4f4f4",
                minWidth: "150px",
                padding: "4px",
                textAlign: "center",
              }}
            >
              <span className="text-muted" style={{ fontSize: "12px" }}>
                6:00 AM -2:00 PM
              </span>
            </Box>
            <Box
              sx={{
                borderRadius: "6px",
                backgroundColor: "#f4f4f4",
                minWidth: "150px",
                padding: "4px",
                textAlign: "center",
              }}
            >
              <span className="text-muted" style={{ fontSize: "12px" }}>
                6:00 AM -2:00 PM
              </span>
            </Box>
          </Box>
        </Box>
      </Box> */}
    </>
  );
}
