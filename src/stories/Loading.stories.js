import React from 'react'
import Loading from '../components/loading'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Components/Loading',
  component: Loading,
  tags: ['autodocs'],
};

const Template = args => <Loading {...args} />;

export const Blue = Template.bind({});
Blue.args = {
    theme: {
        width: '200px',
        height: '200px',
        dotColor: '#0047ab',
    },
};

export const Red = Template.bind({});
Red.args = {
    theme: {
        width: '200px',
        height: '200px',
        dotColor: 'red',
    },
};
