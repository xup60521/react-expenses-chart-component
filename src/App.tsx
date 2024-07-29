import Logo from "@/images/logo.svg";
import {
    Bar,
    BarChart,
    Cell,
    Rectangle,
    ResponsiveContainer,
    Tooltip,
    XAxis,
} from "recharts";
import { data } from "./data";

export default function App() {
    return (
        <main className="w-full min-h-screen flex flex-col justify-center items-center px-4 bg-c_Cream">
            <div className="flex flex-col gap-4 md:w-[26.5rem] w-full">
                <div className="rounded-2xl bg-c_Soft_red flex justify-between py-5 px-7 w-full items-center">
                    <div className="flex flex-col gap-2">
                        <span className="text-white font-dm text-sm">
                            My balance
                        </span>
                        <span className="text-white font-dm font-bold text-2xl">
                            $921.48
                        </span>
                    </div>
                    <img src={Logo} alt="logo" className="h-10" />
                </div>
                <div className="flex flex-col px-7 py-7 bg-white rounded-2xl gap-4">
                    <h1 className="font-dm text-black font-bold text-2xl">
                        Spending - Last 7 days
                    </h1>
                    <div className="md:aspect-[5/2.35] aspect-[5/3] pt-2">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data} barCategoryGap={"6"}>
                                <XAxis
                                    dataKey="day"
                                    axisLine={false}
                                    tickLine={false}
                                    className="text-xs font-dm"
                                />
                                <Tooltip labelClassName="" />
                                <Bar
                                    dataKey="amount"
                                    fill="#dc7c64"
                                    radius={5}
                                    activeBar={
                                        <Rectangle stroke="hsl(27, 66%, 92%)" />
                                    }
                                >
                                    {data.map((_, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={
                                                index === 2
                                                    ? "#84b3ba"
                                                    : "#dc7c64"
                                            }
                                        />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="border-b-[1px] border-c_Cream"></div>
                    <div className="flex items-end justify-between">
                        <div className="flex flex-col">
                            <p className="font-dm text-c_Medium_brown text-sm">
                                Total this month
                            </p>
                            <span className="font-dm font-bold text-c_Dark_brown text-[2.35rem]">
                                $478.33
                            </span>
                        </div>
                        <div className="flex flex-col items-end py-2">
                            <span className="font-bold font-dm text-sm">
                                +2.4%
                            </span>
                            <p className="font-dm text-c_Medium_brown text-sm">
                                from last month
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
