import type {NextApiRequest, NextApiResponse} from 'next'

const data = {
  name: 'Elyas A. Al-Amri',
  aliases: [
    'Chase X. Codex',
    'MVP EAAA',
  ],
  professions: [
      'Computer Programmer',
      'Fullstack Web Developer',
      'Game Developer',
      'Mobile Apps Developer',
      'Cloud Architect',
      'DevOps Engineer',
  ],
}

const definition = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(data)
}

export default definition
