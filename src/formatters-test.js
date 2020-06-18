import parse from 'remark-parse';
import remark2react from 'remark-react';
import {assert} from 'chai';
import any from '@travi/any';
import sinon from 'sinon';
import * as unified from '../thirdparty-wrappers/unified';
import {markdown} from './formatters';

suite('text formatters', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(unified, 'default');
  });

  teardown(() => sandbox.restore());

  test('that markdown is processed within a string', () => {
    const formatted = any.sentence();
    const content = any.string();
    const use = sinon.stub();
    const processSync = sinon.stub();
    unified.default.returns({use});
    use.withArgs(parse).returns({use});
    use.withArgs(remark2react).returns({processSync});
    processSync.withArgs(content).returns({result: formatted});

    assert.equal(markdown(content), formatted);
  });
});
