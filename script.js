'use strict';
const phases = {
  approach: {task: 'pick up the bowl', hints: [{label: 'grasp_target', point_2d: [420, 610]}, {label: 'move_target', point_2d: [450, 560]}], note: 'Before contact: identify the bowl and suggest near-term progress.'},
  transport: {task: 'place the bowl on the plate', hints: [{label: 'place_target', point_2d: [760, 500]}, {label: 'move_target', point_2d: [610, 480]}], note: 'During transport: retain the destination and remove the stale grasp cue.'},
  release: {task: 'release the bowl on the plate', hints: [{label: 'place_target', point_2d: [760, 500]}], note: 'At release: the destination can remain while other hints are omitted.'}
};
document.querySelectorAll('[data-phase]').forEach(button => {
  button.addEventListener('click', () => {
    const phase = phases[button.dataset.phase];
    document.querySelectorAll('[data-phase]').forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    const hints = phase.hints.map(hint => `    {"label": "${hint.label}",\n     "point_2d": [${hint.point_2d.join(', ')}]}`).join(',\n');
    document.querySelector('#command-json').textContent = `{\n  "task": "${phase.task}",\n  "hints": [\n${hints}\n  ]\n}`;
    document.querySelector('#phase-note').textContent = phase.note;
  });
});
document.querySelector('#copy-citation').addEventListener('click', async () => {
  const text = document.querySelector('#bibtex').textContent;
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText(text);
    status.textContent = 'Citation copied.';
    document.querySelector('#copy-citation').textContent = 'Copied ✓';
    setTimeout(() => { document.querySelector('#copy-citation').textContent = 'Copy BibTeX'; }, 2500);
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.querySelector('#bibtex'));
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = 'Citation selected. Press Ctrl+C (or ⌘C) to copy.';
  }
});
