#! /usr/bin/env node

const cfonts = require("cfonts");
const boxen = require("boxen");
const chalk = require("chalk");
const data = require("./myData.js");
const asciiArt = require("./asciiArt");

const showName = (name) => {
  const bigName = cfonts.render(name, {
    colors: ["white", "yellow"],
  });

  return bigName.string;
};

const showAsciiArt = () => asciiArt;

const showLocation = () => `🌆   ${data.location} \n`;

const showWebSite = () => `🕸   ${data.siteUrl}\n`;

const showJobDescription = () => `💻   ${data.jobDescription} \n`;

const showDescription = () => `${data.description} \n`;

const showLinks = () =>
  data.userLinks
    .map((link) => chalk`{gray ${link.label}:} {yellow ${link.url}}\n`)
    .join("");

showCommand = () => chalk`{yellow $} {green npx ${data.packageName}}\n`;

const displayAll = () => `
${showAsciiArt()}

${showName(`${data.name.first} ${data.name.last}`)}

${showWebSite()}

${showJobDescription()}

${showLocation()}

${showDescription()}

${showLinks()}

${showCommand()}
`;

console.log(
  boxen(displayAll(), { padding: 1, margin: 1, borderStyle: "round" })
);
