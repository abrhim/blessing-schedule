import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Table } from './Table';

//👇 This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Table',
    component: Table,
} as ComponentMeta<typeof Table>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

const fakeData = { date: "11/23/1993", a: "Abram Himmer", b: "Ethan Himmer" }
const fakeDataArray = Array(10).fill(fakeData)

export const Primary = () => <Table title="Sacrament Blessing Schedule" data={fakeDataArray} />

