import { fakeAuth } from '../../../../business-logic';

const topbarClickHandler = () => {
  const onSignOutClicked = () => {
    fakeAuth.signout();
  };
  return { onSignOutClicked };
};

export default topbarClickHandler;
