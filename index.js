// openbird — EU Air Passenger Rights Claim Assistant
// Skills and context for Claude Code

const path = require('path');
const fs = require('fs');

module.exports = {
  version: '0.1.0',
  skillsDir: path.join(__dirname, 'skills'),
  guidesDir: path.join(__dirname, 'guides'),
  templatesDir: path.join(__dirname, 'templates'),
  claudeMd: path.join(__dirname, 'CLAUDE.md'),

  getSkills: function () {
    return fs.readdirSync(this.skillsDir)
      .filter(f => f.endsWith('.md'))
      .map(f => f.replace('.md', ''));
  },

  getClaudeContext: function () {
    return fs.readFileSync(this.claudeMd, 'utf-8');
  }
};
