import { FC } from "react"
import { AreaChart, CartesianGrid, Tooltip, XAxis, YAxis, Area, ResponsiveContainer } from "recharts"
import { iChart, iToolTip } from "./types"

interface iChartProp {
    data: Array<iChart>
}

interface iCustomToolTip {
    payload: Array<iToolTip>
    active: unknown

}


const CustomToolTip: FC<iCustomToolTip> = ({ payload, active }) => {
    const content = payload[0]?.payload
    if (active) {
        return (
            <div className="tooltip">
                <div className="tooltip__year">{content.year}</div>
                <div>{content.title}</div>
            </div>
        )
    }

    return null

}

const Chart: FC<iChartProp> = ({ data }) => {
    const sortedData = [...data.sort((a, b) => a.year - b.year)]
    return (
        <section className="chart__container">
            <ResponsiveContainer width='100%' height={400}>
                <AreaChart width={730} height={250} data={sortedData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorName" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="15%" stopColor="#6ad493" />
                            <stop offset="15%" stopColor="#82ca9d" />
                            <stop offset="70%" stopColor="#8884d8" />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="year" />
                    <YAxis dataKey="rank" />
                    <CartesianGrid strokeDasharray="3 0" vertical={false} />
                    <Tooltip
                        content={
                            <CustomToolTip
                                payload={[]}
                                active={undefined}
                            />}
                    />
                    <Area type="monotone" dataKey="rank" stroke="#82ca9d" fillOpacity={1} fill="url(#colorName)" />
                </AreaChart>
            </ResponsiveContainer>
        </section>

    )
}

export { Chart }
