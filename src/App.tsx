import React from 'react'
import { prequest } from './http'

function App() {

  async function req() {
    const res = await prequest('https://webspiderr.herokuapp.com/crawl/api', {
      params: {
        user: 'xdoer',
        cid: '73b1430d-faa0-44eb-899e-36cf5cbfaec8'
      }
    })
    console.log('查看响应值', res)
  }

  return (
    <div>
      <div onClick={req}>点击发请求</div>
    </div>
  )
}

export default App
