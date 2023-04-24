#!/usr/bin/env node

const minimist = require("minimist");
const { rpsls } = require("../lib/rpsls.js");

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
  console.log(JSON.stringify(rpsls(args._[0])));
} catch (err) {
  console.error(err.message);
  displayRules();
  process.exit(1);
}

function displayHelp(){
    console.log(
        `Usage: node-rpsls [SHOT]
        Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!

          -h, --help        display this help message and exit
          -r, --rules       display the rules and exit

        Examples:
          node-rpsls        Return JSON with single player RPSLS result.
                            e.g. {"player":"rock"}
          node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                            e.g {"player":"rock","opponent":"Spock","result":"lose"}`
    );
}

function displayRules (){
    console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors:

      - Scissors CUTS Paper
      - Paper COVERS Rock
      - Rock SMOOSHES Lizard
      - Lizard POISONS Spock
      - Spock SMASHES Scissors
      - Scissors DECAPITATES Lizard
      - Lizard EATS Paper
      - Paper DISPROVES Spock
      - Spock VAPORIZES Rock
      - Rock CRUSHES Scissors`);
}
