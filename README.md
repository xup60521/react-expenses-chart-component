# **Frontend Mentor Challenge - Expenses chart component**

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt "https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt").

## Table of contents

- [Overview](#overview)
- [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
        - [Recharts](#recharts)
- [Resources](#resources)

## Overview

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day

- See the current day’s bar highlighted in a different colour to the other bars

- View the optimal layout for the content depending on their device’s screen size

- See hover states for all interactive elements on the page

- Use the JSON data file provided to dynamically size the bars on the chart

Links:

- GitHub repo: <https://github.com/xup60521/react-expenses-chart-component>

- Website: <https://xup60521.github.io/react-expenses-chart-component/>

```bash
# install dependencies
pnpm install
# start dev server
pnpm run dev
```

## My process

### Built with

- react (powered by vite)

- TailwindCSS

- Recharts

### What I learned

#### Recharts

In this project, I used `recharts` to build the bar chart. I was my first time using this package, and luckily it was not hard to setup.

Following the example on the official docs, and with help from ChatGPT, the only thing I needed to do is pass a couple of components.

```tsx
import {
    Bar,
    BarChart,
    Cell,
    Rectangle,
    ResponsiveContainer,
    Tooltip,
    XAxis,
} from "recharts";
import { data } from "./data"

// data shape
type Data = {
  day: string;
  amount: number;
}[]

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barCategoryGap={"6"}>
            <XAxis
                dataKey="day" // `day` on the x-axis
                axisLine={false}
                tickLine={false}
                className="text-xs font-dm"
            />
          {/*
            Add `Tooltip` component,
            so that it shows detail when hovering above
          */}
            <Tooltip />
            <Bar
                dataKey="amount" // `amount` on the y-axis
                fill="#dc7c64"
                radius={5} // to make the corner rounded
                activeBar={
                    <Rectangle stroke="hsl(27, 66%, 92%)" />
                }
            >
              {/* 
                The Wednesday column 
                needs to be highlighted.
              */}
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
  )
}
```

## Resources

- TailwindCSS Docs - <https://tailwindcss.com/docs>

- Google font - <https://fonts.google.com>

- Recharts docs - <https://recharts.org/en-US>