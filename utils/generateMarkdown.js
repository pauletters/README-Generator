// This function returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GPL":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "BSD":
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    default:
      return "";
  }
}

// This function returns the license link
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "Apache":
      return "https://opensource.org/licenses/Apache-2.0";
    case "GPL":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "BSD":
      return "https://opensource.org/licenses/BSD-3-Clause";
    default:
      return "";
  }
}

// This function returns the license section of README
function renderLicenseSection(license) {
  if (license) {
    return `## License
    ${license}
    `;
  } else {
    return "";
  }
}

// This function generates a markdown for README
export function generateMarkdown(data) {
  return `
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

`;
}

// This function is used to place the generated badge at the top of the README
export function generateBadge(data) {
  return`
  ${renderLicenseBadge(data.license)}`;
}


