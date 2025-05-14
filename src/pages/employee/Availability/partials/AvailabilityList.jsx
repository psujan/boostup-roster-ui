import { Box } from "@mui/material";
import Helper from "../../../../utils/helper";
import { useLoader } from "../../../../utils/context/LoaderContext";
import api from "../../../../services/api";
import { useEffect, useState } from "react";
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
import DeleteModal from "../../../../components/common/Deletemodal";
import { ToastMessage } from "../../../../components/common/ToastNotification";

export default function Availability() {
  const { showLoader, hideLoader } = useLoader();
  const [availabilities, setAvailabilities] = useState([]);
  const [open, setOpen] = useState(false);
  const [availabilityId, setAvailabilityId] = useState();
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

  const confirmDelete = (del) => {
    setOpen(false);
    console.log(del);
    if (!del) {
      return;
    }
    showLoader();
    api
      .delete("/api/v1/availability/" + availabilityId)
      .then((res) => {
        if (res?.data?.success) {
          ToastMessage("success", res?.data?.message || "Successful");
          getAvailability();
        }
      })
      .catch((err) => {
        console.error(err);
        const errMessage =
          err?.response?.data?.message || "Something Went Wrong";
        ToastMessage("error", errMessage);
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
                    onClick={() => {
                      setAvailabilityId(row.id);
                      setOpen(true);
                    }}
                    sx={{
                      borderRadius: "6px",
                      backgroundColor: "#f4f4f4",
                      minWidth: "150px",
                      padding: "4px",
                      textAlign: "center",
                      cursor: "pointer",
                      border: "1px solid var(--primaryColor)",
                      "&:hover": {
                        backgroundColor: "var(--primaryLight)",
                      },
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
      <DeleteModal
        open={open}
        setOpen={setOpen}
        confirmDelete={confirmDelete}
      />
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
