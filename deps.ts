/*
 * @Author: zomem 770552117@qq.com
 * @Date: 2022-06-16 15:43:17
 * @LastEditors: zomem 770552117@qq.com
 * @LastEditTime: 2022-06-17 11:09:23
 * @FilePath: /access_db/deps.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import "https://deno.land/std@0.144.0/dotenv/load.ts"

export { crypto } from "https://deno.land/std@0.144.0/crypto/mod.ts"
export { Client as MysqlClient } from "https://deno.land/x/mysql@v2.10.2/mod.ts";