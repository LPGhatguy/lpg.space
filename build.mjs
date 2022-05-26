import { Parcel } from "@parcel/core";
import React from "react";

// process.env.NODE_ENV = "production";

// const publicUrl = process.env.PARCEL_PUBLIC_URL || "/";

// console.log("Bundling generator with Parcel...");

const bundler = new Parcel({
	entries: "src/App.js",
	// mode: "production",
	targets: {
		"app": {
			"context": "node",
			"distDir": "dist/app",
			"outputFormat": "esmodule",
			"isLibrary": true,
			"engines": {
				"node": "^14.17"
			}
		}
	},
});

const { bundleGraph, buildTime } = await bundler.run();
const bundles = bundleGraph.getBundles();

console.log(`Built ${bundles.length} bundles in ${buildTime}ms`);
// console.log(bundles);
// require("./.cache/generator/generator.js");

const App = await import("./dist/app/App.js");

const foo = React.createElement(App);
