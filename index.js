const core = require('@actions/core');
const github = require('@actions/github');

try {
  const branchName = github.context.payload.ref.replace('refs/heads/', '');
  const separator = core.getInput('separator');
  console.log(`Substring the branch name ${branchName} given the separator ${separator}`);
  const branchNameSubstring = branchName.substring(separator.length);
  core.setOutput("value", branchNameSubstring);
  console.log(`Branch name substring ${branchNameSubstring}`);
} catch (error) {
  core.setFailed(error.message);
}