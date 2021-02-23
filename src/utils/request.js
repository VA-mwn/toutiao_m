// 封装axios请求模块
import axios from 'axios'
const request = axios.creat({
  // creat会返回一个新的axios对象
  baseUrl: 'http://ttapi.research.itcast.cn/' // 接口基础路径
})

// 请求拦截器

// 响应拦截器

export default request
