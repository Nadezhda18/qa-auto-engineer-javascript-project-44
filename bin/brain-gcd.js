#!/usr/bin/env node
import userName from '../src/cli.js'
import { brainGcd } from '../src/index.js'

brainGcd(userName())
