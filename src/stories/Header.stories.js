import React from 'react'
import SiteHeader from '../components/SiteHeader'

export default {
  title: 'Components/Site Header',
  component: SiteHeader,
  tags: ['autodocs'],
}

const Template = args => <SiteHeader {...args} />

export const HelloWorld = Template.bind({})
HelloWorld.args = {
  siteTitle: 'Hello World',
}
