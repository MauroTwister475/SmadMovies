import { DashboardItem } from "./DashboardItem";

// prop data will be an object that will contain the info necessary to display in the screen

export default function Dashboard() {
  return (
    <div className="w-full h-full text-white px-10 flex flex-col gap-20">
      <div className="w-full grid grid-cols-3 gap-8">
        <DashboardItem />
        <DashboardItem />
        <DashboardItem />
      </div>
      <div className="w-full">
        <h1 className="text-2xl mb-4">
          Adicionados recentemente
        </h1>

        <div className="w-full grid grid-cols-3 gap-8">
          <DashboardItem />
          <DashboardItem />
        </div>
      </div>
    </div>
  );
}
