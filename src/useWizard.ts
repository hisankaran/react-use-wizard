import * as React from 'react';

import { WizardValues } from './types';
import WizardContext from './wizardContext';

const useWizard = (throwOnMissingContext: boolean = true) => {
  const context = React.useContext(WizardContext);

  if (!context && __DEV__ && throwOnMissingContext) {
    throw Error('Wrap your step with `Wizard`');
  } else {
    return context as WizardValues;
  }
};

export default useWizard;
