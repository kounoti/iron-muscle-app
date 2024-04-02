"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./globals.css");
var page_1 = require("./components/Authentication/page");
function Home() {
    return (<>
      <page_1.default />
      {/* <div className="flex justify-center items-center m-10">
          <Link
            href="/components/Training"
            className="bg-blue-300 hover:bg-blue-500 text-white font-bold py-10 px-10 rounded border-2 border-blue-400 sm:text-5xl text-2xl "
          >
            トレーニング開始
          </Link>
  
        </div> */}
    </>);
}
exports.default = Home;
