/*
 * @Author: your name
 * @Date: 2020-05-18 18:02:23
 * @LastEditTime: 2022-06-17 08:58:16
 * @LastEditors: zomem 770552117@qq.com
 * @Description: In User Settings Edit
 * @FilePath: /@ownpack/weapp/src/fetch/data/get.ts
 */

import {client} from '../utils/dbMysql.ts'
import {isArray, changeSqlParam, isJson} from '../utils/utils.ts'
import {MysqlGetRes, TTable, MysqlGetKey, MysqlGetQuery, TSentence} from '../mod.ts'

async function fetchGet(table: TTable, uniKey: string | number | MysqlGetKey, query?: MysqlGetQuery): Promise<MysqlGetRes>
async function fetchGet(table: TTable, uniKey: string | number | MysqlGetKey, query?: MysqlGetQuery | TSentence, queryt?: TSentence): Promise<string>
async function fetchGet(table: TTable, uniKey: string | number | MysqlGetKey, query?: MysqlGetQuery | TSentence, queryt?: TSentence): Promise<MysqlGetRes | string>{
  let tempQuery: MysqlGetQuery = (!query ? {} : query) as MysqlGetQuery
  let tempSen = query === 'sentence' ? 'sentence' : ''

  let selectArr = []
  let tempID='id', tempData: any
  if(isJson(uniKey)){
    let uk = uniKey as MysqlGetKey
    for(let p in uk){
      tempID = p
      tempData = uk[p]
      break
    }
  }else{
    tempData = uniKey
  }
  if(tempQuery.select){
    if (isArray(tempQuery.select)){
      let tempPa = tempQuery.select as string[]
      selectArr = tempPa.length > 0 ? tempPa : ['*']
    }else{
      let tempPa2 = tempQuery.select as string
      selectArr = [tempPa2]
    }
  }else{
    selectArr = ['*']
  }

  let sql = ''
  sql = `SELECT ${selectArr.length > 0 ? selectArr.toString() + ' ' : '* '}`
  + `FROM ${table} `
  + `WHERE ${tempID} = ${changeSqlParam(tempData)}`
  if(queryt === 'sentence' || tempSen === 'sentence') return sql
  if(!client) return ''
  let result = await client.execute(sql, [])
  let rows: any = {}
  if(result.rows){
    if(result.rows.length > 0){
      rows = result.rows[0]
    }
  }
  return {data: rows}
}

export default fetchGet