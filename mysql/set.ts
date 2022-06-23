/*
 * @Author: your name
 * @Date: 2020-05-18 18:02:23
 * @LastEditTime: 2022-06-16 17:48:06
 * @LastEditors: zomem 770552117@qq.com
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/weapp/src/fetch/data/set.ts
 */ 

import {client} from '../utils/dbMysql.ts'
import {TTable, MysqlSetParams, MysqlSetRes, TSentence} from '../mod.ts'
import setTrans from '../utils/setTrans.ts'
import { PLATFORM_NAME } from '../constants/constants.ts'


async function fetchSet(table: TTable, params: MysqlSetParams): Promise<MysqlSetRes>
async function fetchSet(table: TTable, params: MysqlSetParams, query: TSentence): Promise<string>
async function fetchSet(table: TTable, params: MysqlSetParams = {}, query?: TSentence): Promise<MysqlSetRes | string>{
  let tempSet: any = setTrans<MysqlSetParams>(params, {}, PLATFORM_NAME.MYSQL)
  let sql = `INSERT INTO ${table}(${tempSet.fieldsArr.toString()}) VALUES (${tempSet.valuesArr.toString()})`
  if(query === 'sentence') return sql
  if(!client) return ''
  let result = await client.execute(sql, [])
  return {data: {insertId: result.lastInsertId}}
}


export default fetchSet