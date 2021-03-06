const which = require('which').sync;
const {load: _loadConfig, config: npmConfig} = require('npm');
npmConfig.get = k => ({
	git: which('git'),
	cache: '~/.npm'
}[k]); // fake config so we can require npm internals. this gets replaced by loadConfig

const _install = require('npm/lib/install');
const {fromTree: _lsFromTree} = require('npm/lib/ls');
const {recalculateMetadata: _recalc} = require('npm/lib/install/deps');

const promisify = require('@quarterto/promisify');

export const loadConfig = promisify(_loadConfig);
export const install = promisify((where, packages, cb) => _install(where, packages, (err, installed, tree) => cb(err, tree)));
export const recalculateMetadata = promisify(_recalc);
export const lsFromTree = promisify(_lsFromTree);
