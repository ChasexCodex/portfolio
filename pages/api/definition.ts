import type {NextApiRequest, NextApiResponse} from 'next'
import {cv} from '../../data'

const definition = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(cv)
}

export default definition
