/*
 * @Author: your name
 * @Date: 2020-05-18 18:02:23
 * @LastEditTime: 2022-06-17 09:55:47
 * @LastEditors: zomem 770552117@qq.com
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/weapp/src/fetch/data/setOneMany.ts
 */ 
import {client} from '../utils/dbMysql.ts'
import {isArray} from '../utils/utils.ts'
import {TTable, MysqlSetParams, TSentence, MysqlSetmanyRes} from '../mod.ts'
import {SET_MANY_PARAMS_ARR_ERROR, PARAMS_EMPTY_ARR_ERROR} from '../constants/error.ts'
import setTrans from '../utils/setTrans.ts'
import { PLATFORM_NAME } from '../constants/constants.ts'


async function fetchSetmany(table: TTable, params: MysqlSetParams[]): Promise<MysqlSetmanyRes>
async function fetchSetmany(table: TTable, params: MysqlSetParams[], query: TSentence): Promise<string>
async function fetchSetmany(table: TTable, params: MysqlSetParams[], query?: TSentence): Promise<MysqlSetmanyRes | string>{
  if(!isArray(params)) throw new Error(SET_MANY_PARAMS_ARR_ERROR)
  if(params.length === 0) throw new Error(PARAMS_EMPTY_ARR_ERROR)
  let fields = []
  let values = []
  for(let i = 0; i < params.length; i++){
    let tempSet: any = setTrans(params[i], {}, PLATFORM_NAME.MYSQL)
    if(i === 0) fields = tempSet.fieldsArr
    values.push(`(${tempSet.valuesArr.toString()})`)
  }

  let sql = `INSERT INTO ${table}(${fields.toString()}) VALUES ${values.toString()}`
  if(query === 'sentence') return sql
  if(!client) return ''
  let result = await client.execute(sql, [])
  return {data: {affectedRows: result.affectedRows}}
}

export default fetchSetmany