export default function Buttons({
  handleClick,
  handleFirstClick,
  handleSecondClick,
  handleThirdClick,
  firstActive,
  secondActive,
  thirdActive,
  lastActive,
}) {
  return (
    <div>
      <div>
        <div
          style={{
            fontSize: "10px",
          }}
          className="flex flex-row justify-center items-center gap-6 md:mt-[-62px]"
        >
          <div
            onClick={handleClick}
            className={
              firstActive
                ? "bg-slate-50 animate-trans-left border rounded-lg w-4 h-4 cursor-pointer"
                : "animate-trans-left border rounded-lg w-4 h-4 cursor-pointer"
            }
          ></div>
          <div
            onClick={handleFirstClick}
            className={
              secondActive
                ? "bg-slate-50 animate-trans-left border rounded-lg w-4 h-4 cursor-pointer"
                : "animate-trans-left border rounded-lg w-4 h-4 cursor-pointer"
            }
          ></div>
          <div
            onClick={handleSecondClick}
            className={
              thirdActive
                ? "bg-slate-50 animate-trans-left border rounded-lg w-4 h-4 cursor-pointer"
                : "animate-trans-left border rounded-lg w-4 h-4 cursor-pointer"
            }
          ></div>
          <div
            onClick={handleThirdClick}
            className={
              lastActive
                ? "bg-slate-50 animate-trans-left border rounded-lg w-4 h-4 cursor-pointer"
                : "animate-trans-left border rounded-lg w-4 h-4 cursor-pointer"
            }
          ></div>
        </div>
      </div>
    </div>
  );
}
