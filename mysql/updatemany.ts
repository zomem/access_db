/*
 * @Author: zomem 770552117@qq.com
 * @Date: 2022-06-16 15:48:54
 * @LastEditors: zomem 770552117@qq.com
 * @LastEditTime: 2022-06-17 11:16:19
 * @FilePath: /access_db/src/mysql/updatemany.ts
 * @Description: 
 */

import {client} from '../utils/dbMysql.ts'
import {isArray} from '../utils/utils.ts'
import {MysqlUpdatemanyParams, TTable, MysqlUpdatemanyRes, TSentence} from '../mod.ts'
import updatemanyTrans from '../utils/updatemanyTrans.ts'
import {PLATFORM_NAME} from '../constants/constants.ts'


async function fetchUpdateMany(table: TTable, key: string[] | string, params: MysqlUpdatemanyParams): Promise<MysqlUpdatemanyRes>
async function fetchUpdateMany(table: TTable, key: string[] | string, params: MysqlUpdatemanyParams, query: TSentence): Promise<string>
async function fetchUpdateMany(table: TTable, key: string[] | string, params: MysqlUpdatemanyParams = [], query?: TSentence): Promise<MysqlUpdatemanyRes | string>{
  let tempKey
  if(!isArray(key)){
    tempKey = [key]
  }else{
    tempKey = key
  }

  let updata: string = updatemanyTrans<MysqlUpdatemanyParams>(params, {table, tempKey}, PLATFORM_NAME.MYSQL)
  let sql = `UPDATE ${table} JOIN ${updata}`
  if(query === 'sentence') return sql
  if(!client) return ''
  let result = await client.execute(sql, [])
  return {data: {affectedRows: result.affectedRows}}
}


export default fetchUpdateMany



