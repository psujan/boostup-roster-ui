import { createContext, useState, useContext } from "react";

const LoaderContext = createContext({
  showLoader: () => {},
  hideLoader: () => {},
});

export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const showLoader = () => {
    console.log("showing loader");
    setLoading(true);
  };
  const hideLoader = () => setLoading(false);

  return (
    <LoaderContext.Provider value={{ showLoader, hideLoader }}>
      {loading && (
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100vh",
            zIndex: "2000",
            top: 0,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <div
            className="flex flex-center flex-column"
            style={{
              padding: "20px 30px",
              background: "#fff",
              borderRadius: "20px",
            }}
          >
            <span className="loader" id="base-loader"></span>
            <div>
              <span
                style={{ fontSize: "13px", marginTop: "8px", display: "block" }}
              >
                Please Wait
              </span>
            </div>
          </div>
        </div>
      )}
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);
