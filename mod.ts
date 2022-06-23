

export * as mysql from './mysql/index.ts'














//查寻的表名或表id
export type TTable = string



//查寻的方法
export type TMongodbCheckMethod = '=' | '!=' | '<' | '<=' | '>' | '>=' |
'in' | 'notIn' | 'arrContain' | 'regex' | 'strLength' | 'isExists' | 
'geoInclude' | 'geoWithinCircle' | 'geoWithinRegion' | 'geoWithin'

export type TElasticsearchCheckMethod = '=' | '<' | '<=' | '>' | '>=' | 'match' | 
'isExists'

type TMongodbBSONTypes = 'double' | 'string' | 'object' | 'array' | 'binData' | 
'objectId' | 'bool' | 'date' | 'null' | 'regex' | 'javascript' | 'int' | 
'timestamp' | 'long' | 'decimal' | 'minKey' | 'maxKey'

export type TMysqlCheckMethod = '=' | '!=' | '<' | '<=' | '>' | '>=' |
'in' | 'notIn' | 'regex' | 'strLength' | 
'like' | 'between' | 'notBetween' |
'isNull' | 'isExists'

export type TFastdbCheckMethod = '=' | '!=' | '<' | '<=' | '>' | '>=' |
'in' | 'notIn' | 'arrContain' | 'regex' | 'strLength' | 'isExists'

export type TRedisCheckMethod = '=' | '!=' | '<' | '<=' | '>' | '>=' |
'in' | 'notIn' | 'regex' | 'strLength' | 'isExists'

//j方法，mysql的join 聚合等
export type TMysqlJiaMethod = 'uniqueTable' | 'tableOf' | 'inner' | 'left' | 'right' | 'full' | 'count' | 
'sum' | 'max' | 'min' | 'avg' | 'ucase' | 'lcase' |
'mid' | 'len' | 'round' | 'now' | 'format'

export type TMysqlJiaParams = 'distinct' | 'all'
//j参数
export type TJ = 'j0' | 'j1' | 'j2' | 'j3' | 'j4' | 'j5'

//查寻的参数
export type TP = 'p0' | 'p1' | 'p2' | 'p3' | 'p4' | 'p5' | 'p6' | 'p7' | 'p8'
| 'p9' | 'p10' | 'p11' | 'p12' | 'p13' | 'p14' | 'p15' | 'p16' | 'p17' | 'p18' | 'p19'



/**
 * find
 */

interface MysqlPRList {
  j0?: [string, TMysqlJiaMethod, 'distinct'] | [string, TMysqlJiaMethod, string] | [string, TMysqlJiaMethod]
  j1?: [string, TMysqlJiaMethod, 'distinct'] | [string, TMysqlJiaMethod, string] | [string, TMysqlJiaMethod]
  j2?: [string, TMysqlJiaMethod, 'distinct'] | [string, TMysqlJiaMethod, string] | [string, TMysqlJiaMethod]
  j3?: [string, TMysqlJiaMethod, 'distinct'] | [string, TMysqlJiaMethod, string] | [string, TMysqlJiaMethod]
  j4?: [string, TMysqlJiaMethod, 'distinct'] | [string, TMysqlJiaMethod, string] | [string, TMysqlJiaMethod]
  j5?: [string, TMysqlJiaMethod, 'distinct'] | [string, TMysqlJiaMethod, string] | [string, TMysqlJiaMethod]
  p0?: [string, TMysqlCheckMethod, ...any[]] | [TJ, TMysqlCheckMethod, ...any[]]
  p1?: [string, TMysqlCheckMethod, ...any[]] | [TJ, TMysqlCheckMethod, ...any[]]
  p2?: [string, TMysqlCheckMethod, ...any[]] | [TJ, TMysqlCheckMethod, ...any[]]
  p3?: [string, TMysqlCheckMethod, ...any[]] | [TJ, TMysqlCheckMethod, ...any[]]
  p4?: [string, TMysqlCheckMethod, ...any[]] | [TJ, TMysqlCheckMethod, ...any[]]
  p5?: [string, TMysqlCheckMethod, ...any[]] | [TJ, TMysqlCheckMethod, ...any[]]
  p6?: [string, TMysqlCheckMethod, ...any[]] | [TJ, TMysqlCheckMethod, ...any[]]
  p7?: [string, TMysqlCheckMethod, ...any[]] | [TJ, TMysqlCheckMethod, ...any[]]
  p8?: [string, TMysqlCheckMethod, ...any[]] | [TJ, TMysqlCheckMethod, ...any[]]
  p9?: [string, TMysqlCheckMethod, ...any[]] | [TJ, TMysqlCheckMethod, ...any[]]
  p10?: [string, TMysqlCheckMethod, ...any[]] | [TJ, TMysqlCheckMethod, ...any[]]
  p11?: [string, TMysqlCheckMethod, ...any[]] | [TJ, TMysqlCheckMethod, ...any[]]
  p12?: [string, TMysqlCheckMethod, ...any[]] | [TJ, TMysqlCheckMethod, ...any[]]
  p13?: [string, TMysqlCheckMethod, ...any[]] | [TJ, TMysqlCheckMethod, ...any[]]
  p14?: [string, TMysqlCheckMethod, ...any[]] | [TJ, TMysqlCheckMethod, ...any[]]
  p15?: [string, TMysqlCheckMethod, ...any[]] | [TJ, TMysqlCheckMethod, ...any[]]
  p16?: [string, TMysqlCheckMethod, ...any[]] | [TJ, TMysqlCheckMethod, ...any[]]
  p17?: [string, TMysqlCheckMethod, ...any[]] | [TJ, TMysqlCheckMethod, ...any[]]
  p18?: [string, TMysqlCheckMethod, ...any[]] | [TJ, TMysqlCheckMethod, ...any[]]
  p19?: [string, TMysqlCheckMethod, ...any[]] | [TJ, TMysqlCheckMethod, ...any[]]
  r?: string
  r2?: string
}


interface MongodbPRList {
  p0?: [string, TMongodbCheckMethod, ...any[]] | [string, 'type', TMongodbBSONTypes]
  p1?: [string, TMongodbCheckMethod, ...any[]] | [string, 'type', TMongodbBSONTypes]
  p2?: [string, TMongodbCheckMethod, ...any[]] | [string, 'type', TMongodbBSONTypes]
  p3?: [string, TMongodbCheckMethod, ...any[]] | [string, 'type', TMongodbBSONTypes]
  p4?: [string, TMongodbCheckMethod, ...any[]] | [string, 'type', TMongodbBSONTypes]
  p5?: [string, TMongodbCheckMethod, ...any[]] | [string, 'type', TMongodbBSONTypes]
  p6?: [string, TMongodbCheckMethod, ...any[]] | [string, 'type', TMongodbBSONTypes]
  p7?: [string, TMongodbCheckMethod, ...any[]] | [string, 'type', TMongodbBSONTypes]
  p8?: [string, TMongodbCheckMethod, ...any[]] | [string, 'type', TMongodbBSONTypes]
  p9?: [string, TMongodbCheckMethod, ...any[]] | [string, 'type', TMongodbBSONTypes]
  p10?: [string, TMongodbCheckMethod, ...any[]] | [string, 'type', TMongodbBSONTypes]
  p11?: [string, TMongodbCheckMethod, ...any[]] | [string, 'type', TMongodbBSONTypes]
  p12?: [string, TMongodbCheckMethod, ...any[]] | [string, 'type', TMongodbBSONTypes]
  p13?: [string, TMongodbCheckMethod, ...any[]] | [string, 'type', TMongodbBSONTypes]
  p14?: [string, TMongodbCheckMethod, ...any[]] | [string, 'type', TMongodbBSONTypes]
  p15?: [string, TMongodbCheckMethod, ...any[]] | [string, 'type', TMongodbBSONTypes]
  p16?: [string, TMongodbCheckMethod, ...any[]] | [string, 'type', TMongodbBSONTypes]
  p17?: [string, TMongodbCheckMethod, ...any[]] | [string, 'type', TMongodbBSONTypes]
  p18?: [string, TMongodbCheckMethod, ...any[]] | [string, 'type', TMongodbBSONTypes]
  p19?: [string, TMongodbCheckMethod, ...any[]] | [string, 'type', TMongodbBSONTypes]
  r?: string
  // r2?: string
}

interface FastdbPRList {
  p0?: [string, TFastdbCheckMethod, ...any[]]
  p1?: [string, TFastdbCheckMethod, ...any[]]
  p2?: [string, TFastdbCheckMethod, ...any[]]
  p3?: [string, TFastdbCheckMethod, ...any[]]
  p4?: [string, TFastdbCheckMethod, ...any[]]
  p5?: [string, TFastdbCheckMethod, ...any[]]
  p6?: [string, TFastdbCheckMethod, ...any[]]
  p7?: [string, TFastdbCheckMethod, ...any[]]
  p8?: [string, TFastdbCheckMethod, ...any[]]
  p9?: [string, TFastdbCheckMethod, ...any[]]
  p10?: [string, TFastdbCheckMethod, ...any[]]
  p11?: [string, TFastdbCheckMethod, ...any[]]
  p12?: [string, TFastdbCheckMethod, ...any[]]
  p13?: [string, TFastdbCheckMethod, ...any[]]
  p14?: [string, TFastdbCheckMethod, ...any[]]
  p15?: [string, TFastdbCheckMethod, ...any[]]
  p16?: [string, TFastdbCheckMethod, ...any[]]
  p17?: [string, TFastdbCheckMethod, ...any[]]
  p18?: [string, TFastdbCheckMethod, ...any[]]
  p19?: [string, TFastdbCheckMethod, ...any[]]
  r?: string
}

interface RedisPRList {
  p0?: [string, TRedisCheckMethod, ...any[]]
  p1?: [string, TRedisCheckMethod, ...any[]]
  p2?: [string, TRedisCheckMethod, ...any[]]
  p3?: [string, TRedisCheckMethod, ...any[]]
  p4?: [string, TRedisCheckMethod, ...any[]]
  p5?: [string, TRedisCheckMethod, ...any[]]
  p6?: [string, TRedisCheckMethod, ...any[]]
  p7?: [string, TRedisCheckMethod, ...any[]]
  p8?: [string, TRedisCheckMethod, ...any[]]
  p9?: [string, TRedisCheckMethod, ...any[]]
  p10?: [string, TRedisCheckMethod, ...any[]]
  p11?: [string, TRedisCheckMethod, ...any[]]
  p12?: [string, TRedisCheckMethod, ...any[]]
  p13?: [string, TRedisCheckMethod, ...any[]]
  p14?: [string, TRedisCheckMethod, ...any[]]
  p15?: [string, TRedisCheckMethod, ...any[]]
  p16?: [string, TRedisCheckMethod, ...any[]]
  p17?: [string, TRedisCheckMethod, ...any[]]
  p18?: [string, TRedisCheckMethod, ...any[]]
  p19?: [string, TRedisCheckMethod, ...any[]]
  r?: string
}

interface ElasticsearchPRList{
  p0?: [string, TElasticsearchCheckMethod, ...any[]]
  p1?: [string, TElasticsearchCheckMethod, ...any[]]
  p2?: [string, TElasticsearchCheckMethod, ...any[]]
  p3?: [string, TElasticsearchCheckMethod, ...any[]]
  p4?: [string, TElasticsearchCheckMethod, ...any[]]
  p5?: [string, TElasticsearchCheckMethod, ...any[]]
  p6?: [string, TElasticsearchCheckMethod, ...any[]]
  p7?: [string, TElasticsearchCheckMethod, ...any[]]
  p8?: [string, TElasticsearchCheckMethod, ...any[]]
  p9?: [string, TElasticsearchCheckMethod, ...any[]]
  p10?: [string, TElasticsearchCheckMethod, ...any[]]
  p11?: [string, TElasticsearchCheckMethod, ...any[]]
  p12?: [string, TElasticsearchCheckMethod, ...any[]]
  p13?: [string, TElasticsearchCheckMethod, ...any[]]
  p14?: [string, TElasticsearchCheckMethod, ...any[]]
  p15?: [string, TElasticsearchCheckMethod, ...any[]]
  p16?: [string, TElasticsearchCheckMethod, ...any[]]
  p17?: [string, TElasticsearchCheckMethod, ...any[]]
  p18?: [string, TElasticsearchCheckMethod, ...any[]]
  p19?: [string, TElasticsearchCheckMethod, ...any[]]
  r?: string
}

export interface MongodbCheckParams extends MongodbPRList {
  page?: number
  limit?: number
  orderBy?: string[]
  select?: string[]
  // groupBy?: string[]
}
export interface MysqlCheckParams extends MysqlPRList {
  page?: number
  limit?: number
  orderBy?: string[]
  select?: string[] | TJ[]
  groupBy?: string[]
}
export interface RedisCheckParams extends RedisPRList {
  page?: number
  limit?: number
  orderBy?: string[]
}
export interface FastdbCheckParams extends FastdbPRList {
  page?: number
  limit?: number
  orderBy?: string[]
  // select?: string[]
}
export interface ElasticsearchCheckParams extends ElasticsearchPRList {
  page?: number
  limit?: number
  orderBy?: string[]
  select?: string[]
  // groupBy?: string[]
}

// find 方法的返回
export interface MongodbFindRes {
  data: {
    objects: any[]
    [key: string]: any
  }
  [key: string]: any
}
export interface MysqlFindRes {
  data: {
    objects: any[]
    [key: string]: any
  }
  [key: string]: any
}
export interface RedisFindRes {
  data: {
    objects: any[]
    [key: string]: any
  }
  [key: string]: any
}
export interface FastdbFindRes {
  data: {
    objects: any[]
    [key: string]: any
  }
  [key: string]: any
}
export interface ElasticsearchFindRes {
  data: {
    objects: any[]
    took: number
    max_score?: number
    total?: number
  }
  [key: string]: any
}

/**
 * count
 */

export interface MysqlCountParams extends MysqlPRList {}
export interface MongodbCountParams extends MongodbPRList {}
export interface FastdbCountParams extends FastdbPRList {}
export interface RedisCountParams extends RedisPRList {}
export interface ElasticsearchCountParams extends ElasticsearchPRList{}
export interface CountRes {
  data: number
}


/**
 * update  updatemany
 */
type TMongodbUpdateMethod = 'incr' | 'set' | 'unset' | 'geo' | 'append' | 'remove' | 'uAppend'
type TMysqlUpdateMethod = 'incr' | 'set' | 'unset'
type TFastdbUpdateMethod = 'incr' | 'set' | 'unset' | 'geo' | 'append' | 'remove' | 'uAppend'
type TRedisUpdateMethod = 'incr' | 'set' | 'unset'
type dataType = string | string[] | number | number[] | boolean | boolean[] | null | undefined | {
  [propName: string] : any
} | {
  [index: number]: any
}

export type TSentence = 'sentence'

export interface MongodbUpdateParams {
  [key: string]: [TMongodbUpdateMethod, dataType] | dataType
}
export interface MysqlUpdateParams {
  [key: string]: [TMysqlUpdateMethod, dataType] | dataType
}
export interface MongodbUpdatemanyParams{
  [key: number]: {
    [keyi: string]: [TMongodbUpdateMethod, dataType] | dataType
  }
}
export interface MysqlUpdatemanyParams{
  [key: number]: {
    [keyi: string]: [TMysqlUpdateMethod, dataType] | dataType
  }
}
export interface MysqlUpdateKey{
  id?: any
  [key: string]: string | number
}
export interface MongodbUpdateKey{
  _id?: any
  [key: string]: string | number
}
export interface RedisUpdateParams {
  [key: string]: [TRedisUpdateMethod, dataType] | dataType
}
export interface FastdbUpdateParams {
  [key: string]: [TFastdbUpdateMethod, dataType] | dataType
}
export interface ElasticsearchUpdateParams{
  [key: string]: [TMongodbUpdateMethod, dataType] | dataType
}


export interface MysqlUpdateRes {
  data: {
    changedRows?: number
    [key: string]: any
  }
}
export interface MysqlUpdatemanyRes {
  data: {
    affectedRows?: number
    [key: string]: any
  }
}
export interface MongodbUpdateRes {
  data: {
    acknowledged: boolean
    modifiedCount: number
    matchedCount: number
    upsertedId?: any
    [key: string]: any
  }
}
export interface MongodbUpdatemanyRes {
  data: {
    acknowledged: boolean
    modifiedCount: number
    matchedCount: number
    upsertedId?: any
    [key: string]: any
  }
}
export interface RedisUpdateRes {
  data: {
    modifiedCount?: number
    [key: string]: any
  }
}
export interface FastdbUpdateRes {
  data: {
    id?: string | number
    [key: string]: any
  }
}
export interface ElasticsearchUpdateRes {
  data: {
    _id: string
    _index: string
    _version: number
    result: string
    _seq_no: number
    _primary_term: number
    [key: string]: any
  }
}



/**
 * set 
 */

type TMongodbSetMethod = 'geo'
export interface MongodbSetParams {
  [key: string]: [TMongodbSetMethod, dataType] | dataType
}
export interface MysqlSetParams {
  [key: string]: dataType
}
export interface RedisSetParams {
  [key: string]: number | string
}
export interface ElasticsearchSetParams{
  [key: string]: dataType
}
export interface FastdbSetParams {
  [key: string]: ['geo', dataType] | dataType
}

//set返回
export interface MongodbSetRes {
  data: {
    acknowledged: boolean
    insertedId: any
    [key: string]: any
  }
}
export interface MysqlSetRes {
  data: {
    insertId?: string | number
    [key: string]: any
  }
  [key: string]: any
}
export interface RedisSetRes {
  data: {
    insertId?: string
    [key: string]: any
  }
}
export interface ElasticsearchSetRes {
  data: {
    insertId?: string
    [key: string]: any
  }
}
export interface FastdbSetRes {
  data: {
    insertId?: string | number
    [key: string]: any
  }
}

// setmany 返回
export interface MysqlSetmanyRes {
  data: {
    affectedRows?: number
    [key: string]: any
  }
}
export interface MongodbSetmanyRes {
  data: {
    acknowledged: boolean
    insertedCount: number
    insertedIds: {
      [key: string]: any
    }
    [key: string]: any
  }
}
export interface RedisSetmanyRes {
  data: {
    [key: string]: any
  }
}


/**
 * get 
 */
export interface MysqlGetKey{
  [key: string]: string | number
}
export interface MongodbGetQuery {
  select?: string | string[]
}
export interface MysqlGetQuery {
  select?: string | string[]
}


export interface MysqlGetRes {
  data: {
    id?: string | number
    [key: string]: any
  }
  [key: string]: any
}
export interface MongodbGetRes {
  data: {
    _id: any
    [key: string]: any
  }
}
export interface ElasticsearchGetRes {
  data: {
    _index: string
    _id: string
    _version?: number
    _seq_no?: number
    _primary_term?: number
    found?: boolean
    [key: string]: any
  }
}
export interface RedisGetRes {
  data: {
    _expire?: number
    [key: string]: any
  }
}
export interface FastdbGetRes {
  data: {
    id?: string | number
    [key: string]: any
  }
  [key: string]: any
}



/**
 * delete
 */
export interface MysqlDeleteParams extends MysqlPRList {
  page?: number
  limit?: number
}
export interface MongodbDeleteParams extends MongodbPRList {
  page?: number
  limit?: number
}


//delete
export interface MysqlDeleteRes {
  data: {
    affectedRows?: number
    [key: string]: any
  }
  [key: string]: any
}
export interface MongodbDeleteRes {
  data: {
    acknowledged: boolean
    deletedCount: number
    [key: string]: any
  }
}
export interface RedisDeleteRes {
  data: {
    deletedCount: number
  }
}
export interface FastdbDeleteRes {
  data: number
}



/**
 * transiction
 */
// transiction
export interface MysqlTransactionRes {
  begin: (callback: Function) => void
  run: (sql: string) => Promise<MysqlGetRes | MysqlSetRes | MysqlFindRes | MysqlDeleteRes | MysqlUpdateRes>
  rollback: Function
  // commit: () => Promise<boolean>
  locks: {
    shared_locks: string
    exclusive_locks: string
  }
}

export interface RedisTransactionRes {
  begin: (callback: Function) => void
  // run: (fun: Function) => Promise<RedisGetRes | RedisSetRes | RedisFindRes | RedisDeleteRes | RedisUpdateRes>
  discard: () => Promise<boolean>
  commit: () => Promise<any>
  watch: (table: TTable, id?: string | number | (string | number)[]) => Promise<boolean>
}

export interface MongodbTransactionRes {
  begin: (callback: Function) => void
  rollback: Function
}

// export interface MongodbSession extends ClientSession {}








/** redis 队列 */

export type RedisQueueMethod = 'push' | 'pop' | 'remove' | 'get'

export interface RedisQueueRes {
  data: {
    queue: any,
    pop: any,
    _queue: any,
  }
}

