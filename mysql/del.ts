/*
 * @Author: your name
 * @Date: 2020-01-24 11:03:54
 * @LastEditTime: 2022-06-17 09:45:30
 * @LastEditors: zomem 770552117@qq.com
 * @Description: In User Settings Edit
 * @FilePath: /minapp-fetch/src/fetch/data/delete.ts
 */

import {client} from '../utils/dbMysql.ts'
import {changeSqlParam, isJson} from '../utils/utils.ts'
import {TTable, MysqlDeleteRes, TSentence, MysqlGetKey} from '../mod.ts'

async function fetchDel(table: TTable, uniKey: string | number | MysqlGetKey): Promise<MysqlDeleteRes>
async function fetchDel(table: TTable, uniKey: string | number | MysqlGetKey, query: TSentence): Promise<string>
async function fetchDel(table: TTable, uniKey: string | number | MysqlGetKey, query?: TSentence): Promise<MysqlDeleteRes | string>{
  let tempID='id', tempData
  if(isJson(uniKey)){
    let uk = uniKey as MysqlGetKey
    for(let p in uk as MysqlGetKey){
      tempID=p
      tempData=uk[p]
      break
    }
  }else{
    tempData = uniKey
  }

  let sql = ''
  sql = `DELETE `
  + `FROM ${table} `
  + `WHERE ${tempID} = ${changeSqlParam(tempData)}`
  if(query === 'sentence') return sql
  if(!client) return ''
  let result = await client.execute(sql, [])
  return {data: {affectedRows: result.affectedRows}}
}


export default fetchDel