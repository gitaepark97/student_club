import { MysqlSource } from './util/mysql'

try {
  MysqlSource.initialize()
} catch (err) {
  console.log(err)
}
