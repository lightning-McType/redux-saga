export default function Test({ children }) {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "25%",
            border: "1px solid grey",
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
}
