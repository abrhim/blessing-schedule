
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from './Card';

//๐ This default export determines where your story goes in the story list
export default {
    /* ๐ The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Card',
    component: Card,
} as ComponentMeta<typeof Card>;

//๐ We create a โtemplateโ of how args map to rendering
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const FirstStory = () => <Card><div>hello :D </div></Card>

