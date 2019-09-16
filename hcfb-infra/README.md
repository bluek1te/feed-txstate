# Infrastructure management

This directory manages the automatic deployment of [feed] software onto its production server.

A GitHub Action will execute the Ansible playbook within this directory on each push to the [`master`](https://github.com/bluek1te/feed-txstate/tree/master) branch. Under ordinary circumstances, this means that you shouldn't need to run it yourself to make changes to the server. Instead, update the playbook with a pull request, and your changes will take effect automatically the next time they're merged to master.

Need help? Check out the [Ansible User Guide](https://docs.ansible.com/ansible/latest/user_guide/index.html) for documentation on Ansible playbook syntax.

## Server access

Need to log on to the server?

1. Create an SSH key and add it to your GitHub account if you haven't already done so. [GitHub Help](https://help.github.com/en/articles/adding-a-new-ssh-key-to-your-github-account) has documentation on how to do this for each operating system.
2. Send a pull request to this repository that updates [the variables file](#) adding your GitHub username to the `usernames` array.
3. Get it merged and shipped to `master`.

Now you'll be able to log in, authenticating with your SSH key:

```
# ssh ${GITHUB_USERNAME}@40.77.24.76
```

## Running locally

If you _do_ need to run the playbook locally - say, when you're developing the playbook itself - you'll need to do a little preparation. Install Ansible by following [the "Control Node" instructions](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html). Then, run the playbook with:

```sh
./hcfb-infra/sync
```
