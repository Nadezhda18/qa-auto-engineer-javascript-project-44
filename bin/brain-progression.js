#!/usr/bin/env node
import userName from '../src/cli.js';
import { progression } from '../src/index.js';

progression(userName());
