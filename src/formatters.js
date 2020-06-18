import parse from 'remark-parse';
import remark2react from 'remark-react';
import unified from '../thirdparty-wrappers/unified';

export function markdown(content) {
  return unified()
    .use(parse)
    .use(remark2react)
    .processSync(content).result;
}
