import React from 'react'
import Header from '../components/header'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    siteTitle: { control: 'text' },
  },
}

const Template = args => <Header {...args} />

export const HelloWorld = Template.bind({})
HelloWorld.args = {
  siteTitle: 'Hello World',
}

export const VivaLasVegas = Template.bind({})
VivaLasVegas.args = {
  siteTitle: 'Viva Las Vegas',
}
