import { ReactNode, Suspense } from 'react';

import Loading from 'components/loading';

interface IProps {
  children: ReactNode;
}

function WithSuspense({ children }: IProps) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
}

export default WithSuspense;
