import { describe, it} from 'mocha';
import { assert }      from 'chai';

describe('express test', () => {
  it("数値以外は削除する", () => {
      let abc = 'abc12344def';
      let ret = '12344';

      abc = abc.replace(new RegExp('[^-1-9-]', 'g'), '');
      assert.strictEqual(abc, ret);
  });
});