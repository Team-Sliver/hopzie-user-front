import { CustomPage } from "./custompage";
import { RecoilRootProvider } from '../component/recoil-root-provider'

export default function Home() {
  return (
   <main>
    <RecoilRootProvider>
      <CustomPage />
    </RecoilRootProvider>
  </main>
  );
}
