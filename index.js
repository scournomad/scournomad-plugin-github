
const core = require('@actions/core');
const github = require('@actions/github');

try {
  // Get input defined in action.yml
  const nameToGreet = core.getInput('scournomad-api-key');
  console.log(`Hello \${nameToGreet}!`);
  const time = new Date().toTimeString();
  // Set output for other workflow steps
  core.setOutput("time", time);
  // Log the payload for the event that triggered the workflow
  console.log(`The event payload: ${JSON.stringify(github.context.payload, undefined, 2)}`);
} catch (error) {
  core.setFailed(error.message);
}
