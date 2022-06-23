/*
 * @Author: zomem 770552117@qq.com
 * @Date: 2022-06-16 15:48:54
 * @LastEditors: zomem 770552117@qq.com
 * @LastEditTime: 2022-06-17 18:01:48
 * @FilePath: /access_db/mysql/transaction.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {client} from '../utils/dbMysql.ts'
import {isArray} from '../utils/utils.ts'
import {MysqlGetRes, MysqlSetRes, MysqlFindRes, MysqlDeleteRes, MysqlUpdateRes, MysqlTransactionRes} from '../mod.ts'
import {TRAN_RUN_ERROR, TRAN_CONNECTION_ERROR} from '../constants/error.ts'

type TRun = MysqlGetRes | MysqlSetRes | MysqlFindRes | MysqlDeleteRes | MysqlUpdateRes

const ROLLBACK_TAG = '_do_rollback'

async function fetchTransaction(): Promise<MysqlTransactionRes>{
  let _connection: any
  // 回滚事务
  const rollback = async (): Promise<string> => {
    if(!_connection) throw new Error(TRAN_CONNECTION_ERROR)
    await _connection.execute("ROLLBACK")
    throw new Error(ROLLBACK_TAG)
  }

  // 运行sql
  const run = async (sql: string): Promise<TRun> => {
    if(typeof(sql) !== 'string') throw new Error(TRAN_RUN_ERROR)
    if(!_connection) throw new Error(TRAN_CONNECTION_ERROR)
    let run_res: TRun = {
      data: {
        objects: []
      }
    }
    let jsonRes = await _connection.execute(sql, [])
    if(isArray(jsonRes.rows)){
      run_res.data = jsonRes.rows[0] || {}
      run_res.data.objects = jsonRes.rows
    }else{
      run_res.data = jsonRes
      run_res.data.objects = []
    }
    return run_res
  }

  // 开始事务
  const begin = async (callback: Function) => {
    if(!client) return ''
    try{
      await client.transaction(async (connection) => {
        _connection = connection
        await callback()
        console.log('callback>>>>>>>')
        return true
      })
    }catch(err: any){
      console.log(',,,,,,,,,,', err.message)
      if(err.message === ROLLBACK_TAG){
        // 说明是用户主动 rollback的，就不抛出异常。
      }else{
        throw new Error(err)
      }
    }
  }

  return {
    begin,
    run,
    rollback,
    locks: {
      shared_locks: ' LOCK IN SHARE MODE',
      exclusive_locks: ' FOR UPDATE'
    }
  }
}

export default fetchTransaction