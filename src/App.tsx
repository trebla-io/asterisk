import "./App.css";

function replaceDateDigits(): string {
  /** Replaces the digits of the current date with mapped letters. */
  const now = new Date();
  const formattedDate = now
    .toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, ""); // Format as DDMMYYYY

  console.log(`Hoje: ${formattedDate}`);

  const digitMap: Record<string, string> = {
    "1": "2",
    "2": "3",
    "3": "4",
    "4": "1",
    "5": "2",
    "6": "3",
    "7": "4",
    "8": "1",
    "9": "2",
    "0": "1",
  };

  const passwordOfTheDay = formattedDate
    .split("")
    .map((digit) => digitMap[digit])
    .join("");

  const formattedPassword = `${passwordOfTheDay.slice(
    0,
    2
  )} ${passwordOfTheDay.slice(2, 4)} ${passwordOfTheDay.slice(4, 8)}`;

  console.log(`Senha do dia: ${formattedPassword}`);

  return formattedPassword;
}

function App() {
  const passwordOfTheDay: string = replaceDateDigits();

  return (
    <>
      <h1>{passwordOfTheDay}</h1>
    </>
  );
}

export default App;
