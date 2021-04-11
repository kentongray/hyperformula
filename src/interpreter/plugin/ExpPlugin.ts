/**
 * @license
 * Copyright (c) 2021 Handsoncode. All rights reserved.
 */

import {SimpleCellAddress} from '../../Cell'
import {ProcedureAst} from '../../parser'
import {InterpreterState} from '../InterpreterState'
import {InternalScalarValue} from '../InterpreterValue'
import {ArgumentTypes, FunctionPlugin, FunctionPluginTypecheck} from './FunctionPlugin'

export class ExpPlugin extends FunctionPlugin implements FunctionPluginTypecheck<ExpPlugin>{
  public static implementedFunctions = {
    'EXP': {
      method: 'exp',
      parameters:[
        { argumentType: ArgumentTypes.NUMBER }
      ],
    },
  }

  /**
   * Corresponds to EXP(value)
   *
   * Calculates the exponent for basis e
   *
   * @param ast
   * @param state
   */
  public exp(ast: ProcedureAst, state: InterpreterState): InternalScalarValue {
    return this.runFunction(ast.args, state, this.metadata('EXP'), Math.exp)
  }
}
