/*
 * @Author: zomem 770552117@qq.com
 * @Date: 2022-06-16 15:48:54
 * @LastEditors: zomem 770552117@qq.com
 * @LastEditTime: 2022-06-17 10:30:49
 * @FilePath: /access_db/src/mysql/delmany.ts
 * @Description: 
 */
import {client} from '../utils/dbMysql.ts'
import {changeSqlParam, isArray, isJson} from '../utils/utils.ts'
import {TTable, MysqlDeleteRes, TSentence, MysqlGetKey} from '../mod.ts'
import {PARAMS_EMPTY_ARR_ERROR, PARAMS_NOT_ARR_ERROR} from '../constants/error.ts'

async function fetchDelmany(table: TTable, uniKeys: string[] | number[] | MysqlGetKey[]): Promise<MysqlDeleteRes>
async function fetchDelmany(table: TTable, uniKeys: string[] | number[] | MysqlGetKey[], query: TSentence): Promise<string>
async function fetchDelmany(table: TTable, uniKeys: string[] | number[] | MysqlGetKey[], query?: TSentence): Promise<MysqlDeleteRes | string>{
  let tempID='id', tempData: any[] = []
  if(!isArray(uniKeys)) throw new Error(PARAMS_NOT_ARR_ERROR)
  if(uniKeys.length === 0) throw new Error(PARAMS_EMPTY_ARR_ERROR)
  for(let i = 0; i < uniKeys.length; i++){
    let uniKey = uniKeys[i]
    if(isJson(uniKey)){
      for(let p in uniKey as MysqlGetKey){
        let uk = uniKey as MysqlGetKey
        if(i === 0) tempID=p
        tempData.push(changeSqlParam(uk[p]))
        break
      }
    }else{
      tempData.push(changeSqlParam(uniKey))
    }
  }

  let sql = ''
  sql = `DELETE `
  + `FROM ${table} `
  + `WHERE ${tempID} IN (${tempData.toString()})`

  if(query === 'sentence') return sql
  if(!client) return ''
  let result = await client.execute(sql, [])
  return {data: {affectedRows: result.affectedRows}}
}


export default fetchDelmany