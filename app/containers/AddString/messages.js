/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Add to your mystery plot line',
  },
  subHead: {
    id: `${scope}.subHead`,
    defaultMessage: 'Welcome to the Prepender',
  },
});
