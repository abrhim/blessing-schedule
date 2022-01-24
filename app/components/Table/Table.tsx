import { FC } from "react";
import { Card } from "../Card";
import TableStyles from "./Table.css";

export type TableRow = {
  date: string;
  a: string;
  b: string;
};

export const links = () => [
  {
    rel: "stylesheet",
    href: TableStyles,
  },
];

export const Table: FC<{ data: TableRow[]; title: string }> = ({
  data,
  title,
}) => {
  return (
    <Card>
      <div>
        <h3>{title}</h3>
        <div>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Person A</th>
                <th>Person B</th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ date, a, b }, index) => (
                <tr key={index}>
                  <td>{date}</td>
                  <td>{a}</td>
                  <td>{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
};
