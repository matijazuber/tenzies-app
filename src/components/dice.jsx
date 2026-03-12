import Button from "@mui/material/Button";

export default function Dice(props) {
  return (
    <>
      <Button
        onClick={props.holdDice}
        sx={{
          backgroundColor: props.isHeld ? "#59E391" : "white",
          fontFamily: "Karla",
          fontWeight: 700,
          lineHeight: "100%",
          letterSpacing: "0%",
          textAlign: "center",
          fontSize: "25px",
          color: "#2B283A",
          cursor: "pointer",
          padding: "12px",
          margin: "3px",
          borderRadius: "4px",
          borderStyle: "solid",
          borderWidth: 0,
          boxShadow: "0px 2px 2px rgba(0,0,0,0.15)",
        }}
        className="button"
      >
        {props.value}
      </Button>
    </>
  );
}
