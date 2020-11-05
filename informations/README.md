# S1Seven Enhancement Proposals (SEP) Guidelines

[[toc]]

## Goals of the SEP process

S1Seven uses the S1Seven Enhancement Proposal process (SEP)
to address distributed collaboration and experimentation.
The primary guiding principle of the SEP process is to
encourage collaboration and discussion as early as possible in the lifecycle
of a major proposed change in Jupyter, with the goal of preventing costly rework,
competing ideas, and unnecessary forking or fragmentation of ideas.

Several sub-goals exist for this process:

- **Maximize success of large proposals** that get stalled in the wrong venue (e.g. a single PR comment thread)
- Provide a **better alternative to “piecemeal” development** where multiple PRs
  to build an end-to-end set of functionality are split across multiple GitHub
  project without broad consensus, context, or guidance.
- Provide a **clear, time-limited, and authoritative process for work proposals**,
  to facilitate funding conversations. (e.g. provide a concrete artifact to reference
  in a grant proposal, roadmap item, etc.)
- Provide a **consolidated “stream” of all proposals across the entire Jupyter community**
  that contributors of all levels can monitor and selectively engage in.

## Tenets of the SEP process

The SEP process operates under the following tenets:

- **The SEP process is intended for changes of non-trivial scope.**
  “Non-trivial” is addressed below in the “SEP / Not-a-SEP Rubric” of this document.

- **The SEP process naturally complements the PR process, but does not replace it.**
  A thoroughly-reviewed and approved SEP is a valuable reference during a PR to
  reduce friction, reduce time-consuming context sharing, and encapsulate decisions
  and other discussions. Moving a premature PR into a SEP should be a lightweight
  process that doesn’t cause friction for the contributor.

  For example, GitHub issue and PR templates across the entire Jupyter project should have
  references to the SEP process as a possible outcome of a given PR.

- **There is one SEP repository, all S1Seven-related projects must use it.**
  To faciliate the easiest possible adoption and high visibility of ideas, a
  single SEP repository will be used. Even if a SEP only applies to a single organization.

- The SEP process **has multiple valid use cases**. Each use case might have a
  slightly different expected workflow. Some expected use cases include:

  - Non-trivial feature proposals within a single component that would benefit from
    process.
  - Non-trivial features or improvements that span multiple projects.
  - Any proposed changes to published APIs or core specifications (e.g., nbformat)
  - Changes to the SEP process itself.
  - Launching a major project in one of the S1Seven GitHub organizations.

## SEP Submission Workflow

The following sections describe the major checkpoints in the SEP process.
Note that at any time, the SEP author may withdraw their SEP (and if it has
been added to the README, its status becomes "withdrawn").

### Phase 1: Pre-proposal

This is the least formal stage of any S1Seven Enhancement Proposals. During this
phase, discussions on the mailing list, community forum, in-person, on github issues
are all fine to gauge community interest, feasibility, consequences, and to
scope out technical impact and implementation details.

In order to transition out of the pre-proposal stage, the following checklist must be complete:

1. **Create a GitHub issue** in the S1Seven Enhancement Proposals repo that
1. Briefly outlines the proposal
1. Suggests a review team (optional)
1. Declares why it should be a SEP (See the “SEP / Not-a-SEP Rubric” below.)
1. **Identify a Shepherd** to see the process through. (Shepherds are assigned
   on a round-robin basis from a set of interested engaged volunteers).
1. **Decide if it's a SEP** according to the criteria listed above. The Shepherd decides if the SEP criteria have been met.

**If it's a SEP**. The SEP author creates a new PR with the contents of the SEP proposal. See [this markdown template](SEP-TEMPLATE.md) for a suggested structure of the pull-request.

Subsequent discussion and decisions about the SEP will happen in that PR, and
we now **Move to the RFC phase**.

**If it’s not a SEP**. The shepherd provides a reason for why the issue
doesn't meet SEP criteria, and closes the issue.

### Phase 2: Request for Comments for the SEP

Phase two begins when **the SEP author submits a draft of the SEP as a PR to the SEP repository**.
The Shepherd assigns a number to the SEP according to the pull-request number, and updates
the README of the SEP repository with information about the now in-progress SEP.
The Shepherd then works with the SEP author to
**identify and notify relevant individuals in the S1Seven community to review and comment**.

Once this group has been notified, the SEP process enters the RFC phase.

During the **Request For Comment (RFC) phase**, the proposal is iterated on with
feedback from the Review Team and the community at large. The Shepherd helps engage
the Review Team and encourage productive discussion. After the Review Team members
have signed off on the SEP, with the criteria that there are no major objections,
and at least some of the Review Team are in favor, the Shepherd initiates the Final Comment Period.

In the **Final Comment Period (FCP)**, the community at-large has at least 10 calendar days
to provide any final comments on the SEP. A SEP may revert back to RFC if
objections from the community are supported by the Review Team.

At the end of the FCP, the SEP is either:

- **approved**, in which case the PR is merged and work may commence on implementing the SEP (see Phase 3, below)
- **rejected**, in which case the PR is closed
- asked to return to the RFC phase.

In each case, the SEP's status should be updated in the README of the
`s1seven/sep` repository.

### Phase 3: Work Commences

Once a SEP has been merged into the `s1seven/sep` repository,
implementation can commence on the SEP. The SEP author does not need to implement the SEP themselves.

If the SEP requires one or more pull-requests to be implemented, the author of the PRs should
provide a reference to the SEP so that reviewer has background context on the SEP.
As the SEP is being implemented, the SEP text should be amended with with addendums to
denote the progress of the implementation using the following stages.

1. In progress implementation via (list of PRs).
2. Fully implemented via (list of PRs).

If in the course of implementation, it is discovered that the implementation needs to
be radically different from what was defined in the original SEP, then a pull
request is submitted to modify the original SEP with the new necessary implementation,
and a note citing the need for a modification to the SEP.
This pull request should be re-approved by the original review team.

### SEP Pathways and Status

Below is a rough guide that describes the SEP process and its possible pathways.

```
                      +-----------+
                      |           |
                      | withdrawn |
                      |           |             +-----------+
                      +-----------+             |           |
                  SEP may be withdrawn          |  rejected |
                      at any stage              |           |
                                                +-----^-----+
                                                      |
                                                +------+------+
  +--------------+   +-----------+             |             |            +-------------+   +-----------+
  |              |   |           |             | Request for |            |             |   |           |
  | pre-proposal +---> submitted +------------->  Comments   +------------> in progress +---> completed |
  |              |   |           |  identify   |    (RFC)    |  approved  |             |   |           |
  +--------------+   +-----------+   review    |             |            +-------------+   +-----------+
                                      team     +------+------+
```

## What qualifies as a SEP?

This section contains a set of principles to help determine when something is a SEP.
These should be used to determine when something becomes a PR during the SEP
pre-proposal stage, as well as to determine when a PR becomes a SEP at an individual repo level.

**Principles to follow**

Below are a few example guidelines to follow when deciding if an idea should include
a SEP (If yes, it requires a SEP). Under each question is a relevant example proposal.

- Does the proposal/implementation require PRs across multiple orgs?
  - **Example:** Handle schemas versioning
- Does the proposal/implementation change an invariant in one or more orgs?
- Does the proposal/implementation create a new concept that will impact multiple repositories?
- Does the proposal involve creating a new repository or sub-project?
