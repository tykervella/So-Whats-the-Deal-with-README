// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Type a brief description of your project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Briefly describe the project installation.',
      name: 'install',
    },
    {
      type: 'input',
      message: 'Briefly describe the project usage.',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Briefly describe any other contributions to this project',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'Briefly describe any tests for this project',
      name: 'test',
    },
    {
      type: 'list',
      message: 'Please chose a license to use for your project',
      choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License" ],
      name: 'license',
    },
    {
      type: 'input',
      message: 'Please enter your github username.',
      name: 'github',
    },
    {
      type: 'input',
      message: 'Please enter your email.',
      name: 'email',
    },
  ])
  .then((data) => {
    const title = data.title.trim();
    const description = data.description.trim();
    const install = data.install.trim();
    const usage = data.usage.trim();
    const contribution = data.usage.trim();
    const test = data.test.trim();
    const license = data.license;
    const github = data.github.trim();
    const email = data.email.trim() ;
    let newLicense; 

    if (license === "Apache License 2.0") {
      newLicense = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)

      Copyright (c) 2023 ${github}
      Licensed under the Apache License, Version 2.0 (the "License");
      you may not use this file except in compliance with the License.
      You may obtain a copy of the License at
      
      http://www.apache.org/licenses/LICENSE-2.0
      
      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
      limitations under the License.`
    } else if (license === "GNU General Public License v3.0") {
      newLicense  = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)

      GNU General Public License v3.0
      Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`
    } else if (license === "MIT License" ) {
      newLicense  = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
      
      MIT License
      Copyright (c) 2023 ${github}
      
      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.
      `
    }

    

    const readMeTemp = `# ${title}

--- 

## TABLE OF CONTENTS 

Description 

Installation 

Usage 

Contributions 

Testing

License 

Questions 

---

## DESCRIPTION

${description}

---

## INSTALLATION 

${install}

---

## USAGE

${usage}

---

## CONTRIBUTIONS

${contribution}

---

## TESTING

${test}

---

## LICENSE 

--- 

${newLicense}

## LICENSE 

--- 

Any Questions regarding this project can be directed to me personally. You can find me at: 

My email is ${email} 

My github is https://github.com/${github}`

    fs.writeFile(`./README.md`, readMeTemp, (err) => {
      //checks to see if the console throws an error
      if (err) {
        console.log('Could not generate README.md');
      } else {
        console.log("New README.md generated.")
      }
    });
 })
