declare module '*.svg?react' {
  import { SVGProps, VFC } from 'react';
  const SVG: VFC<SVGProps<SVGSVGElement>>;
  export default SVG;
}