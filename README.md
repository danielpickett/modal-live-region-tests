# modal-live-region-tests

Troubleshooting live regions located outside of a modal.

I'm having some trouble getting screen readers to announce changes to aria-live regions that are located outside of a modal. This issue showed up while trying to use `react-beautiful-dnd` with `@reach/dialog`. This repos is for exploring workarounds.

## Findings

So it happens when aria-modal and role='dialog' are used together on the modal. Remove either attribute and the live region starts announcing. Oddly enough, it does not happen when using the <dialog> tag, but that's very new to Safari (maybe a month ago?) so I probably shouldn't use that in prod yet.

It turns out I can actually pass `aria-modal="false"` to @reach/dialog, which would solve the problem, only it doesn't. That's because @reach/dialog sets `aria-hidden` on [all nodes at the document.body root except for the currently active dialog](https://reach.tech/dialog#using-aria-hidden-for-other-elements) to trap the virtual cursor. That means it also applies `aria-hidden` to the live region div of `react-beautiful-dnd`.
