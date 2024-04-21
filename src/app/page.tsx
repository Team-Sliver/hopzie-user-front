import { redirect } from 'next/navigation';
import { RecoilRootProvider } from '../component/recoil-root-provider'
import { CustomPage } from './custompage';

export default function Home() {
    return redirect("https://hopzie.me")
//   return (
//    <main>
//     <RecoilRootProvider>
//       <CustomPage />
//     </RecoilRootProvider>
//   </main>
//   );
}
