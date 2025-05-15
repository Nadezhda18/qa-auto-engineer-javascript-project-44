#!/usr/bin/env node
import userName from '../src/cli.js';
import { brainEven } from '../src/index.js';

brainEven(userName());
