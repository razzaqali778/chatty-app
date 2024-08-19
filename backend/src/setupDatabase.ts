import mongoose from 'mongoose'
import { config } from './config'
import Logger from 'bunyan'

const log: Logger = config.createLogger('setupDatabase')
export default () => {
  const connect = () => {
    mongoose
      .connect(`${config.DATABASE_URL}`)
      .then(() => {
        log.info('Sucessufully connected to database')
      })
      .catch((error) => {
        log.error('Error connecting database ', error)
        return process.exit(1)
      })
  }
  connect()

  mongoose.connection.on('disconnect', connect)
}
