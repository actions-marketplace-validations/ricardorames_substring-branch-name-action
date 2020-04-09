# Substring branch name after a separator

GitHub Actions that substring the branch name after the first occurrence of a given separator.

## Input

This action requires the ```separator``` attribute of type ```string```. Examples: `release-` or ```rc/```.


## Output

This action output the value in ```substring``` variable.

## Example

```
name: Example
jobs:
  generate:
    steps:
      - uses: actions/checkout@v2
      - name: Substring branch name
        id: substring
        uses: ricardorames/subtring-branch-name-action@v0.2.0
        with:
            separator: 'release-'
      - name: Build and push Docker images
        uses: docker/build-push-action@v1.0.1
        with:
          username: ${{secrets.DOCKER_REGISTRY_USERNAME}}
          password: ${{secrets.DOCKER_REGISTRY_PASSWORD}}
          registry: your.registry.io
          repository: your-repository
          tags: ${{steps.ext.outputs.substring}}
          tag_with_ref: false
          tag_with_sha: false

```