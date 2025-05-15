#!/usr/bin/env node
import userName from '../src/cli.js';
import isPrime from '../src/index.js';

isPrime(userName());
