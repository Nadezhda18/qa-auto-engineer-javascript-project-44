#!/usr/bin/env node
import userName from '../src/cli.js'
import { brainCalc } from '../src/index.js'

brainCalc(userName())
