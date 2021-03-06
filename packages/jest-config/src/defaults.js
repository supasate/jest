/**
 * Copyright (c) 2014, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */

'use strict';

import type {DefaultConfig} from 'types/Config';

const constants = require('./constants');
const os = require('os');
const path = require('path');
const {replacePathSepForRegex} = require('jest-util');

const NODE_MODULES_REGEXP = replacePathSepForRegex(constants.NODE_MODULES);

module.exports = ({
  automock: false,
  bail: false,
  browser: false,
  cacheDirectory: path.join(os.tmpdir(), 'jest'),
  clearMocks: false,
  colors: false,
  coveragePathIgnorePatterns: [NODE_MODULES_REGEXP],
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  globals: {},
  haste: {
    providesModuleNodeModules: [],
  },
  mocksPattern: '__mocks__',
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'node',
  ],
  moduleNameMapper: {},
  modulePathIgnorePatterns: [],
  noStackTrace: false,
  notify: false,
  preset: null,
  preprocessorIgnorePatterns: [NODE_MODULES_REGEXP],
  resetModules: false,
  testEnvironment: 'jest-environment-jsdom',
  testPathDirs: ['<rootDir>'],
  testPathIgnorePatterns: [NODE_MODULES_REGEXP],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.jsx?$',
  testURL: 'about:blank',
  timers: 'real',
  useStderr: false,
  verbose: null,
  watch: false,
}: DefaultConfig);
