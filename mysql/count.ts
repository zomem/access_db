/*
 * @Author: your name
 * @Date: 2020-05-18 18:02:23
 * @LastEditTime: 2022-06-17 11:48:37
 * @LastEditors: zomem 770552117@qq.com
 * @Description: In User Settings Edit
 * @FilePath: /@minappjs/weapp/src/count.ts
 */ 
import fetchFind from './find.ts'
import {TTable, MysqlCountParams, MysqlFindRes, TSentence, CountRes} from '../mod.ts'


async function fetchCount(table: TTable, params: MysqlCountParams): Promise<CountRes>
async function fetchCount(table: TTable, params: MysqlCountParams, query: TSentence): Promise<string>
async function fetchCount(table: TTable, params: MysqlCountParams = {}, query?: TSentence): Promise<CountRes | string>{
  //mysql类
  if(query === 'sentence'){
    return await fetchFind(table, {
      j0: ['*', 'count'],
      ...params,
      select: ['j0'],
    }, 'sentence')
  }else{
    let res: MysqlFindRes = await fetchFind(table, {
      j0: ['*', 'count'],
      ...params,
      select: ['j0']
    })
    let num: number = 0
    if(res.data.objects.length > 0){
      num = parseInt(res.data.objects[0].j0)
    }
    return {data: num}
  }
}


export default fetchCount