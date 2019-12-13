import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs'; // comes with node - file system

describe('Our first test', ()=>{
  it('should pass', ()=>{
    expect(true).to.equal(true);
  });
});

describe('index.html', ()=>{
  it('should say hello', (done)=>{
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    // makes virtual DOM in memory - async test, one that has a callback, you have to add (done) param and
    // call done(); after test is run.
    jsdom.env(index, function(err, window) {
      // give me the first h1 on the page
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Hello World!");
      done();
      window.close();
    });
  });
});
