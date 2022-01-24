import { useLoaderData } from "remix";
import { Card, links as CardLinks } from "~/components/Card";
import { Table, links as TableLinks, TableRow } from "~/components/Table";
import { getSchedule } from "~/loaders";

export const loader = async (): Promise<TableRow[]> => {
  return await getSchedule()
}

export const links = () => [...CardLinks(), ...TableLinks()]

export default function Index() {

  const data = useLoaderData()

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>

      <Card>
        <h3>Serenada Ward Priest Quorum Sacrament Blessing Schedule</h3>
        <div className="">
          <p>Hello 👋 </p>
          <p>We decided to experiment with scheduling who blesses the sacrament. We are hoping by that creating and following a schedule more priests will have a turn to bless. If you are scheduled to bless the sacrament, please arrive 10 minutes early to sit on the stand. </p>
          <p>If you cannot bless the sacrament on your assigned date please attempt to find a replacement and contact Brock Sowards (<a href="tel:512-688-0339">512-688-0339</a>). If you cannot find a replacement, don't worry, just let us know and we will take care of it.  </p>
          <p>Feel free to let Abram Himmer (<a href="tel:253-358-9023">253-358-9023</a>) if it is working for you and your family or not.</p>
          <p>Additionally, if you cannot get to church on time to bless the sacrament, reach out to Abram Himmer or another member of the quorum for a ride, we will figure something out and get you there.</p>
        </div>
      </Card>
      <Table data={data} title="Sacrament Blessing Schedule" />

    </div>
  );
}
