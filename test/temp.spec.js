/* mocha uses 4 hooks
before :runs once before all tests in scope
after :runs once after all tests in scope
beforeEach :runs before each individual test in scope
afterEach :runs after each individual test in scope*/

/*before #1
before #2

beforeEach #2
it #4
beforeEach #2
it #5

    Describe #1
before #3

beforeEach #2
it #1
afterEach #1

beforeEach #2
it #2
afterEach #1

      Describe #2
before #4

beforeEach #2
it #3
afterEach #1

after #2

after #1 */

describe.only(`Temporary spec - top level describe`, () => {
  before(() => {
    console.log("before #1");
  });

  after(() => {
    console.log("after #1");
  });

  beforeEach(() => {
    console.log("beforeEach #2");
  });

  before(() => {
    console.log("before #2");
  });

  describe(`Describe #1`, () => {
    before(() => {
      console.log("before #3");
    });

    after(() => {
      console.log("after #2");
    });

    afterEach(() => {
      console.log("afterEach #1");
    });

    it(`it #1`, () => {
      console.log("it #1");
    });

    it(`it #2`, () => {
      console.log("it #2");
    });

    describe(`Describe #2`, () => {
      it(`it #3`, () => {
        console.log("it #3");
      });

      before(() => {
        console.log("before #4");
      });
    });
  });

  it(`it #4`, () => {
    console.log("it #4");
  });

  it(`it #5`, () => {
    console.log("it #5");
  });
});
/*
describe.only(`Temporary spec - top level describe`, () => {
  before(() => {
    console.log('before #1')
  })

  before(() => {
    console.log('before #2')
  })

  after(() => {
    console.log('after #1')
  })

  beforeEach(() => {
    console.log('beforeEach #2')
  })

  it(`it #4`, () => {
    console.log('it #4')
  })

  it(`it #5`, () => {
    console.log('it #5')
  })

  describe(`Describe #1`, () => {
    before(() => {
      console.log('before #3')
    })

    after(() => {
      console.log('after #2')
    })

    afterEach(() => {
      console.log('afterEach #1')
    })

    it(`it #1`, () => {
      console.log('it #1')
    })

    it(`it #2`, () => {
      console.log('it #2')
    })

    describe(`Describe #2`, () => {
      before(() => {
        console.log('before #4')
      })

      it(`it #3`, () => {
        console.log('it #3')
      })
    })
  })
}) 
*/
