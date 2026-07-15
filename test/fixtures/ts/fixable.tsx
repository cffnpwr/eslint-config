import {readFileSync} from 'node:fs'
import type {Linter} from 'eslint'
import {helper} from './helper.js'
const config:Linter.Config = {}
const value = readFileSync('x')
const greet = (name:string):string => `Hello, ${name}`
export const usedValue = value
export const result = helper()
export const usedGreet = greet('world')
export const usedConfig = config
