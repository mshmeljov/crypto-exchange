import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { getAssetsHistory } from "../../api/assets";
import { periods } from "./constants";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { buildPeriod, parseTime } from "./utils";
import ErrorModal from "../../ErrorModal";
import { NumericFormat } from 'react-number-format';

function Chart({ coinData }) {
  const [period, setPeriod] = React.useState(periods[0]);
  const [chartData, setChartData] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState(null);

  React.useEffect(() => {
    const { start, end } = buildPeriod(period);
    getAssetsHistory(coinData.id, period.interval, start, end)
      .then((json) =>
        setChartData(
          json.data.map(({ time, ...rest }) => ({
            ...rest,
            date: parseTime(time, period.dateFormat),
          }))
        )
      )
      .catch((error) => setErrorMessage(error.message));
  }, [coinData.id, period]);

  const CustomYAxisTick = ({ x, y, payload }) => (
    <text x={x} y={y} dy={0} dx={-10} fill="#666" textAnchor="end">
      <NumericFormat
        value={payload.value}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        decimalScale={2}
        fixedDecimalScale={true}
      />
    </text>
  );

  return (
    <>
      <ResponsiveContainer width="100%" height={500}>
        <AreaChart
          width={500}
          height={500}
          data={chartData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis dataKey="priceUsd" domain={["dataMin", "dataMax"]} tick={<CustomYAxisTick />} />
          <Tooltip />
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#129a74" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#129a74" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="priceUsd"
            stroke="#129a74"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
      <ButtonGroup size="sm">
        {periods.map((_period) => (
          <Button
            key={_period.label}
            active={period.label === _period.label}
            variant="outline-primary"
            onClick={() => setPeriod(_period)}
          >
            {_period.label}
          </Button>
        ))}
      </ButtonGroup>
      <ErrorModal
        show={!!errorMessage}
        handleClose={() => setErrorMessage(null)}
        errorMessage={errorMessage}
      />
    </>
  );
}

export default Chart;
