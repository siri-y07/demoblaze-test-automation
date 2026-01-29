/*  Merge mochawesome JSON and build a single HTML report  */
const fs = require('fs');
const path = require('path');
const marge = require('mochawesome-report-generator');
const mochawesomeMerge = require('mochawesome-merge');

const jsonDir = path.resolve('tests/reports/.jsons');
const outDir = path.resolve('tests/reports');

(async () => {
  try {
    if (!fs.existsSync(jsonDir)) {
      console.log('[report] JSON dir not found:', jsonDir);
      process.exit(0);
    }
    const files = fs.readdirSync(jsonDir).filter(f => f.endsWith('.json'));
    if (!files.length) {
      console.log('[report] No mochawesome JSON files found');
      process.exit(0);
    }
    const jsonReport = await mochawesomeMerge.merge({ files: [path.join(jsonDir, '*.json')] });
    await marge.create(jsonReport, {
      reportDir: outDir,
      reportFilename: 'index',
      inline: true,
      charts: true,
      saveJson: false,
      overwrite: true,
      assetsDir: outDir
    });
    console.log('[report] HTML report created at', path.join(outDir, 'index.html'));
  } catch (err) {
    console.error('[report] Failed to generate report:', err);
    process.exit(1);
  }
})();
