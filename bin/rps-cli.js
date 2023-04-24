#!/usr/bin/env node
const minimist = require("minimist");
const { rps } = require("../lib/rpsls.js");

const args = minimist(process.argv.slice(2));

if (args.h || args.help) {
    displayHelp();
    process.exit(0);
}
if (args.r || args.rules) {
    displayRules();
    process.exit(0);
}

try {
    console.log(JSON.stringify(rps(args._[0])));
} catch (RangeError){
    displayRules()
    process.exit(0)
}

function displayHelp(){
    console.log(`Usage: node-rps [SHOT]
Play Rock Paper Scissors (RPS)

  -h, --help      display this help message and exit
  -r, --rules     display the rules and exit

Examples:
  node-rps        Return JSON with single player RPS result.
                  e.g. {"player":"rock"}
  node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                  e.g {"player":"rock","opponent":"scissors","result":"win"}`);
}

function displayRules (){
    console.log(`Rules for Rock Paper Scissors:
    
      - Scissors CUTS Paper
      - Paper COVERS Rock
      - Rock CRUSHES Scissors`);
}

