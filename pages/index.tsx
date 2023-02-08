import Card from "./components/Card";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-3 justify-between items-center max-w-5.3 ml-0 mr-auto">
          <Card imageLink="/image/portfolio.svg" url="https://joelvitorniino.github.io" title="Project Tailwind" description="Project made with Tailwind!" key={null}  />
      </div>
    </>
  )   
}
