---
description: Vault health check, then rebuild the agent index
argument-hint: "[rule id to expand]"
---
Load the `vault-lint` skill. Run the lint in summary mode, expand errors (and the rule `$ARGUMENTS` if given), then rebuild the index unless there is a `canon-changed` error. Report; fix nothing unless I ask.
