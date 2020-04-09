const core = require('@actions/core');
const github = require('@actions/github');

try {
  const branchName = github.ref;
  const suffix = core.getInput('suffix');
  console.log(`Extract semantic version of branch name ${branchName} given suffix ${suffix}`);
  const semver = branchName.substring(suffix.length);
  core.setOutput("semver", semver);
  console.log(`Extracted semantic version ${semver}`);
} catch (error) {
  core.setFailed(error.message);
}