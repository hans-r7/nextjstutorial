import Hello from "../components/hello";

export default function Home() {
  console.log("What am I doing here?");
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Hello />
    </>
  );
}
