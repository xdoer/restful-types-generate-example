import { Config } from '@xdoer/script-runner/lib/types'

export default <Config>{
  scripts: [
    {
      module: '@prequest/response-types-server',
      args: [
        {
          port: 10010
        }
      ]
    }
  ]
}
