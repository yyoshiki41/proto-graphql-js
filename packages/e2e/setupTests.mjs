#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */

import { exec as _exec } from "child_process";
import { mkdir, readFile, rm, writeFile } from "fs/promises";
import { basename, join, relative } from "path";
import { promisify } from "util";

const exec = promisify(_exec);
const header = `// Code generated by ${basename(import.meta.url)}. DO NOT EDIT`;
const testsDir = "tests";

/**
 * @param {{ target: "nexus" | "pothos", proto: { package: String, lib: String } } opts
 */
function getTestPath(opts) {
  return `${testsDir}/${[opts.target, opts.proto.package.replace("/", "-"), opts.proto.lib].join("--")}`;
}

/**
 * @param {{ target: "nexus" | "pothos", proto: { package: String, lib: String } } opts
 */
async function setupTest(opts) {
  const path = getTestPath(opts);
  const genDir = join(path, "__generated__");
  await rm(genDir, { recursive: true, force: true });
  await mkdir(genDir, { recursive: true });

  await writeFile(
    join(path, "tsconfig.json"),
    `${header}\n${JSON.stringify(
      {
        extends: "../../tsconfig.base.json",
        include: [
          ".",
          relative(path, "./src"),
          relative(path, join(testsDir, "__generated__", opts.target, opts.proto.lib, "testapis", opts.proto.package)),
        ],
      },
      undefined,
      2
    )}`,
    "utf-8"
  );

  await exec(`yarn ts-node --transpile-only --project ${join(path, "tsconfig.json")} ${join(path, "schema.ts")}`);
}

async function setupTests() {
  /** @type {{ tests: { target: "nexus" | "pothos", proto: { package: String, lib: String} }[] } */
  const config = JSON.parse(await readFile("tests.json", "utf-8"));

  await Promise.all(config.tests.map(setupTest));
  await writeFile(
    "tsconfig.json",
    `${header}\n${JSON.stringify(
      {
        files: [],
        references: config.tests.map((tt) => ({ path: getTestPath(tt) })),
      },
      undefined,
      2
    )}`,
    "utf-8"
  );
}

async function setupProtoNexus() {
  await rm(join(testsDir, "__generated__"), { recursive: true, force: true });
  await exec(`buf generate ${join("..", "@testapis", "proto", "src")}`);
}

async function main() {
  await setupProtoNexus();
  await setupTests();
}

await main();
