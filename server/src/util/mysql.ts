import 'reflect-metadata'
import { DataSource } from 'typeorm'
import config from '../config/default'
import { User } from '../entity/master/User'

const MYSQL_HOST = config.database.mysql.host as string
const MYSQL_PORT = config.database.mysql.port as number
const MYSQL_USERNAME = config.database.mysql.username as string
const MYSQL_PASSWORD = config.database.mysql.password as string
const MYSQL_DATABASE = config.database.mysql.database as string

export const MysqlSource = new DataSource({
  type: 'mysql',
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  username: MYSQL_USERNAME,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
  synchronize: true,
  entities: [__dirname + '../../entity/*/*.ts'],
})
