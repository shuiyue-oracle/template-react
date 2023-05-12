const fs = require('fs');
const path = require('path');

function getScopes() {
  const rootDir = path.join(__dirname, '..');
  const scopes = ['core'];
  ['apps', 'libs', 'packages'].forEach(name => {
    const dir = path.join(rootDir, name);
    fs.readdirSync(dir).forEach(subDir => {
      if (fs.statSync(path.join(dir, subDir)).isDirectory()) {
        scopes.push(subDir);
      }
    });
  });

  return scopes;
}

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', getScopes()],
    'subject-case': [0, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
  },
};
