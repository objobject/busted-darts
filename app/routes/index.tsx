import type { LinksFunction } from "@remix-run/node";
import { Dartboard, links as DartboardLinks } from "~/components/Dartboard";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => {
  return [
    ...DartboardLinks(),
    { rel: 'stylesheet', href: stylesUrl }
  ]
}

export default function Index() {
  return (
    <div>
      <Dartboard size={1000}/>
    </div>
  );
}
