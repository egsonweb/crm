import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Heading from '.'

storiesOf('Heading', module)
  .add('default', () => (
    <Heading>Id tempor duis non esse commodo fugiat excepteur nostrud.</Heading>
  ))
  .add('palette', () => (
    <Heading palette="primary">Id tempor duis non esse commodo fugiat excepteur nostrud.</Heading>
  ))
	.add('palette secondary', () => (
    <Heading palette="secondary">Id tempor duis non esse commodo fugiat excepteur nostrud.</Heading>
  ))
  .add('palette reverse', () => (
    <Heading palette="primary" reverse>
      Id tempor duis non esse commodo fugiat excepteur nostrud.
    </Heading>
  ))
	.add('weight thin', () => (
    <Heading weight="thin">
      Id tempor duis non esse commodo fugiat excepteur nostrud.
    </Heading>
  ))
	.add('weight bold', () => (
    <Heading weight="bold">
      Id tempor duis non esse commodo fugiat excepteur nostrud.
    </Heading>
  ))
  .add('level 2', () => (
    <Heading level={2}>Id tempor duis non esse commodo fugiat excepteur nostrud.</Heading>
  ))
  .add('level 3', () => (
    <Heading level={3}>Id tempor duis non esse commodo fugiat excepteur nostrud.</Heading>
  ))
	.add('level 4', () => (
    <Heading level={4}>Id tempor duis non esse commodo fugiat excepteur nostrud.</Heading>
  ))
