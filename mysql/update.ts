/*
 * @Author: zomem 770552117@qq.com
 * @Date: 2022-06-16 15:48:54
 * @LastEditors: zomem 770552117@qq.com
 * @LastEditTime: 2022-06-17 09:31:11
 * @FilePath: /access_db/src/mysql/update.ts
 * @Description: 
 */

import {client} from '../utils/dbMysql.ts'
import {isJson, changeSqlParam} from '../utils/utils.ts'
import {MysqlUpdateParams, TTable, MysqlUpdateRes, TSentence, MysqlUpdateKey} from '../mod.ts'
import updateTrans from '../utils/updateTrans.ts'
import {PLATFORM_NAME} from '../constants/constants.ts'


async function fetchUpdate(table: TTable, uniKey: string | number | MysqlUpdateKey, params: MysqlUpdateParams): Promise<MysqlUpdateRes>
async function fetchUpdate(table: TTable, uniKey: string | number | MysqlUpdateKey, params: MysqlUpdateParams, query: TSentence): Promise<string>
async function fetchUpdate(table: TTable, uniKey: string | number | MysqlUpdateKey, params: MysqlUpdateParams = {}, query?: TSentence): Promise<MysqlUpdateRes | string>{
  let tempID='id', tempData
  if(isJson(uniKey)){
    let uk = uniKey as MysqlUpdateKey
    for(let p in uk as MysqlUpdateKey){
      tempID=p
      tempData=uk[p]
      break
    }
  }else{
    tempData = uniKey
  }
  let updata: any = updateTrans<MysqlUpdateParams>(params, [], PLATFORM_NAME.MYSQL)
  let sql = `UPDATE ${table} SET ${updata.toString()} WHERE ${tempID} = ${changeSqlParam(tempData)}`
  if(query === 'sentence') return sql
  if(!client) return ''
  let result = await client.execute(sql, [])
  return {data: {changedRows: result.affectedRows}}
}


export default fetchUpdate