import { create, Request, Response, PreQuest } from '@prequest/xhr'
import wrapper from '@prequest/response-types-client'

PreQuest.use<Request, Response>(async (ctx, next) => {
  await next()
  const { data } = ctx.response
  ctx.response = JSON.parse(data)
})

export const prequest = create()

const middleware = wrapper<Request, Response>({
  enable: import.meta.env.DEV,
  httpAgent: create({ path: 'http://localhost:10010' }),
  outPutDir: '/Users/xdoer/Desktop/project/types-generator-example/src/api-types',
  parseResponse(res) {
    return res as any
  },
  typesGeneratorConfig(req, res) {
    const { path } = req
    const { data } = res

    if (!path) throw new Error('path not found')

    const outPutName = path.replace(/.*\/(\w+)/, (_, __) => __)
    const interfaceName = outPutName.replace(/^[a-z]/, g => g.toUpperCase())

    return {
      data,
      overwrite: true,
      outPutName,
      interfaceName
    }
  }
})

prequest.use(middleware)
