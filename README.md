# github_actions

here we have a book store app, a server-side code built with express, postgres. We'll work on these files to automate our tests using github actions. we'll create three workflows distributed on this week and the coming two weeks to achieve the follows
- create a workflow to test our basic routes which is not having a database
- create a workflow to test routes connected to our database
- create a workflow to dispatch action to deploy specific branch to heroku.
## Create an example workflow
A workflow is a configurable automated process made up of one or more jobs. You must create a YAML file to define your workflow configuration.
GitHub Actions uses YAML syntax to define the workflow. Each workflow is stored as a separate YAML file in your code repository, in a directory called `.github/workflows`.

  <details>
          <summary>YAML 🤔 </summary>
          <p>YAML is a human readable data serialization language mainly used for configuration files and in application in order to store or transmitted data. It is widely used by many programming languages like Java, Python, GoLang and as a configuration language by Kubernetes, Docker Compose, Ansible, etc.</p>
  </details>

### Let's create our first workflow!
Guess What Github provide us with a starter workflow for a variety of languages and tooling.

**About starter workflows**

GitHub offers starter workflows for a variety of languages and tooling. When you set up workflows in your repository, GitHub analyzes the code in your repository and recommends workflows based on the language and framework in your repository. For example, if you use Node.js, GitHub will suggest a starter workflow file that installs your Node.js packages and runs your tests. You can search and filter to find relevant starter workflows.


## Resources
- [creating postgres service container](https://docs.github.com/en/actions/using-containerized-services/creating-postgresql-service-containers)
- 
