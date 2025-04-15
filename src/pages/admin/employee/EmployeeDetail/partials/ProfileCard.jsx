

const ProfileCard = ({ employee }) => {
  const profileImage = employee?.user?.profileImage || "/default.png";
  const fullName = employee?.user?.fullName || "Unknown Name";
  const email = employee?.user?.email || "N/A";

  return (
    <div
      style={{
        textAlign: "center",
        padding: "2rem",
        backgroundColor: "#fff",
        borderRadius: "10px",
        maxWidth: "300px",
        margin: "0 auto",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
      }}
    >
      <img
        src={profileImage}
        alt={fullName}
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
      <h2 style={{ margin: "1rem 0 0.5rem 0" }}>{fullName}</h2>
      <a
        href={`mailto:${email}`}
        style={{ color: "gray", textDecoration: "underline" }}
      >
        {email}
      </a>
      <br />
      <button
        style={{
          marginTop: "1.5rem",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#417b5a",
          color: "white",
          border: "none",
          borderRadius: "10px",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        Edit Profile
      </button>
    </div>
  );
};

export default ProfileCard;

