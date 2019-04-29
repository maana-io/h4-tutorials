import uuid from 'uuid'
import pubsub from '../../pubsub'

import { log, print } from 'io.maana.shared'

require('dotenv').config()

const SELF = process.env.SERVICE_ID

export const resolver = {
  Query: {
    info: async () => {
      return {
        id: 'maana-demo-black-mirror-helpers',
        name: 'maana-demo-black-mirror-helpers',
        description: 'Maana Q demo Black Mirror helper functions'
      }
    }
  }
}
