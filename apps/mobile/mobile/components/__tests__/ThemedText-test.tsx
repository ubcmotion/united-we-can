import * as React from 'react';
import { render } from "@testing-library/react";

import { ThemedText } from '../ThemedText';

it(`renders correctly`, () => {
  const tree = render(<ThemedText>Snapshot test!</ThemedText>).baseElement;

  expect(tree).toMatchSnapshot();
});
