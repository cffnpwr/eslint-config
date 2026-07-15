
import {ESLint} from "eslint";
import { readFileSync, appendFileSync } from "node:fs";
import { statSync } from "node:fs";
import { EOL } from "node:os";
import { dirname } from "node:path";
import { type Linter } from "eslint";
import { helper } from "./helper";
type MyEslint = ESLint;
type Cfg = Linter.Config;

const useBefore = laterConst;
const laterConst = 5;

const util = require("node:util");

function funcStyleBad () {return 1}

var foo = 1, baz = 2;
let inferable: number = 5;
const wrapped = new String("hi");
const selfCmp = foo === foo;
const eqBad = foo == baz;
const tmpl = "value" + foo;
const dotProp = process["env"];
const nonNull = readFileSync!;
const info = { a : 1,b:2 };
if (info) {console.log(info);}
const optionalChain = info && info.a;
const undefUse = someUndefinedThing;
const anyTyped: any = 1;
const arr = [ 1, 2 ];
const arrowBad = (x)=>x+1;
const noParen = x => x;
const badDecimal = .5;
const mixedOps = foo + baz * inferable == 7;
const unusedLocal = 42;
const spread = { ... info };
const rested = (...args) =>args;
const badTemplate = `${ foo }`;
const badComputed = info[ "a" ];

const abn = [
1, 2];
const cd = {
  a: 1,
  b: 2
};
const cs = [1
, 2];
const dl = info.
a;
const nms =    1;
const nts = 1; 
const olb = foo +
baz;
const ocn = {x: 1,
 y: 2};
const opn = { m: 1, n: 2,
  o: 3 };
const qp = { "a": 1 };
const q = 'single';
const rss = { ... arr };
const ss = 1 ;
const suo = ! foo;
const sip = ( foo );
const wsbp = info .a;
let tas : string = "y";
const nes = 1;;
const np = new Date;
const nc = (a: number) => a ? 1 : 0;
const wr = /foo/.test("bar");
const tts = String `hi`;
const crlf = 1;
const mds: { a: number, b: string } = { a: 1, b: "x" };
const ial = ()=>
1;
const sst = 1
;

function curlyNL() {
  const cn = 1; return cn; }

(function() { return 2; }());

if(foo){ console.log("kw"); }

if (foo)
  console.log("nonblock");

function fpn(a: number, b: number,
  c: number) { return a + b + c; }

function callArg() {
  console.log (1,
2, 3);
}

function *namedGen() {
  yield 1;
  yield *[2, 3];
}

class Sample {
  field = 1;
  method() { return this.field; }
  other() { return 2; }
}

switch (foo) {
  case 1 :
    break;
  default :
    break;
}

const iife = (function(){ return 1; })();
	 const tabbed = 1;

export const zebra = 1;
export const alpha = 2;
export { zebra as reZebra, alpha as reAlpha };
export { dirname as reDirname } from "node:path";
export { EOL as reEol } from "node:os";

const Comp = () => {
  return <div className='x' key ="a" ><span/>text</div>;
};

const Multi = () => <div>
  <p>hi</p>
  </div>;

const ChildSpace = () => (
  <div>hello
    <span>x</span>
  </div>
);

const CurlyBrace = () => <div className={"y"} />;
const CurlySpace = () => <div>{ foo }</div>;
const SelfClose = () => <span>text</span>;
const NotSelf = () => <br></br>;
const PascalBad = () => <Foo_Bar />;

const callJsx = (n: unknown) => n;
const JsxCurlyNL = () => <div>{
foo}</div>;
callJsx(<div>
  multiline
</div>);

const FirstProp = () => <Comp a="1"
  b="2" />;

const IndentProps = () => (
  <Comp
      a="1"
  />
);

type Tuple = [name :string, value:number];

export const rendered = () => {
  return (
    <Comp
      a="1" b="2" c="3" d="4"
    />
  );
};

void MyEslint;
void Cfg;
void useBefore;
void laterConst;
void helper;
void dirname;
void util;
void wrapped;
void selfCmp;
void eqBad;
void tmpl;
void dotProp;
void nonNull;
void optionalChain;
void undefUse;
void anyTyped;
void arr;
void arrowBad;
void noParen;
void badDecimal;
void mixedOps;
void unusedLocal;
void spread;
void rested;
void badTemplate;
void badComputed;
void abn;
void cd;
void cs;
void dl;
void nms;
void nts;
void olb;
void ocn;
void opn;
void qp;
void q;
void rss;
void ss;
void suo;
void sip;
void wsbp;
void tas;
void nes;
void np;
void nc;
void wr;
void tts;
void crlf;
void mds;
void ial;
void fpn;
void callArg;
void namedGen;
void Sample;
void iife;
void tabbed;
void Comp;
void Multi;
void ChildSpace;
void CurlyBrace;
void CurlySpace;
void SelfClose;
void NotSelf;
void PascalBad;
void FirstProp;
void IndentProps;
void appendFileSync;
void statSync;