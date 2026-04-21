#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const VERSION = '0.1.0';
const PACKAGE_ROOT = path.join(__dirname, '..');

const SKILLS = [
  { name: '/analyze-rejection', desc: 'Analyze an airline rejection letter — find which legal arguments are wrong and why' },
  { name: '/file-claim',        desc: 'Draft your initial EC 261/2004 claim letter to the airline with correct legal citations' },
  { name: '/escalate',          desc: 'Escalate to AESA (Spain), ECC-Net Germany, or another national enforcement body' }
];

function printHelp() {
  console.log(`
openbird v${VERSION} — EU Air Passenger Rights Claim Assistant

Available Claude Code skills:
${SKILLS.map(s => `  ${s.name.padEnd(22)} ${s.desc}`).join('\n')}

Usage:
  npx openbird install    Copy skills and context to .claude/ in the current directory
  npx openbird help       Show this message

What it does:
  Gives Claude Code enough legal context to help you fight EC 261/2004 claims.
  Airlines routinely reject valid claims — this repo arms you with the right
  counter-arguments and authority filing guides.

More info:
  https://github.com/buildingopen/openbird
`);
}

function installSkills() {
  const cwd = process.cwd();
  const targetDir = path.join(cwd, '.claude', 'skills');

  // Create .claude/skills if it doesn't exist
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
    console.log(`Created ${targetDir}`);
  }

  const skillsSource = path.join(PACKAGE_ROOT, 'skills');
  const skillFiles = fs.readdirSync(skillsSource).filter(f => f.endsWith('.md'));

  for (const file of skillFiles) {
    const src = path.join(skillsSource, file);
    const dest = path.join(targetDir, file);
    fs.copyFileSync(src, dest);
    console.log(`Copied skills/${file}`);
  }

  // Also copy CLAUDE.md to .claude/ if not already present
  const claudeSrc = path.join(PACKAGE_ROOT, 'CLAUDE.md');
  const claudeDest = path.join(cwd, '.claude', 'openbird-context.md');
  fs.copyFileSync(claudeSrc, claudeDest);
  console.log(`Copied CLAUDE.md → .claude/openbird-context.md`);

  console.log(`
Done. ${skillFiles.length} skills installed to ${targetDir}

Start Claude Code in this directory:
  claude

Then use /analyze-rejection, /file-claim, or /escalate.
`);
}

const command = process.argv[2];

if (!command || command === 'help' || command === '--help' || command === '-h') {
  printHelp();
} else if (command === 'install') {
  installSkills();
} else {
  console.error(`Unknown command: ${command}`);
  console.error('Run "npx openbird help" for usage.');
  process.exit(1);
}
